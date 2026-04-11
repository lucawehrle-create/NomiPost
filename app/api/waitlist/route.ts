import { NextResponse } from "next/server";
import {
  addEntry,
  type WaitlistEntry,
  CONSENT_TEXT_VERSION,
} from "@/lib/storage";
import { waitlistSchema } from "@/lib/validation";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { sendConfirmationMail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  // Rate-Limiting: max. 5 Einträge pro IP pro Stunde
  const ip = getClientIp(request);
  const limit = rateLimit({
    key: `waitlist:${ip}`,
    limit: 5,
    windowMs: 60 * 60 * 1000,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      {
        error:
          "Zu viele Versuche. Bitte warte einen Moment und versuche es später noch einmal.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil((limit.resetAt - Date.now()) / 1000).toString(),
        },
      }
    );
  }

  try {
    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Ungültige Eingabe.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const input = parsed.data;
    const consentAt = new Date().toISOString();

    // Double-Opt-In: Token generieren für Confirmation-Link
    const confirmationToken = crypto.randomUUID();

    const entry: WaitlistEntry = {
      parent_name: input.parentName,
      email: input.email,
      child_name: input.childName ? input.childName : null,
      child_age: input.childAge,
      interests: input.interests,
      price_expectation: input.priceExpectation || null,
      importance: input.importance,
      frequency: input.frequency || null,
      heard_from: input.heardFrom || null,
      feedback: input.feedback || null,

      // DSGVO: Nachweisbare Einwilligung mit Zeitstempel und Version
      consent_contact: input.consentContact,
      consent_guardian: input.consentGuardian,
      consent_survey: input.consentSurvey,
      consent_at: consentAt,
      consent_text_version: CONSENT_TEXT_VERSION,

      // Double-Opt-In
      confirmation_token: confirmationToken,
      confirmed_at: null,

      // IP-Nachweis gemäß Art. 7 Abs. 1 DSGVO
      ip_signup: ip === "unknown" ? null : ip,
      ip_confirm: null,
    };

    await addEntry(entry);

    // Confirmation-URL bauen – aus den Request-Headern, damit sowohl
    // localhost als auch Produktion korrekt funktionieren
    const host = request.headers.get("host") ?? "localhost:3000";
    const proto =
      request.headers.get("x-forwarded-proto") ??
      (host.startsWith("localhost") ? "http" : "https");
    const baseUrl = `${proto}://${host}`;
    const confirmUrl = `${baseUrl}/bestaetigung?token=${confirmationToken}`;
    const unsubscribeUrl = `${baseUrl}/abmelden?token=${confirmationToken}`;

    // Bestätigungsmail versenden (Resend in Prod, Console-Log in Dev)
    const mailResult = await sendConfirmationMail({
      to: input.email,
      parentName: input.parentName,
      confirmUrl,
      unsubscribeUrl,
    });

    // Response-Payload: Im Dev-Modus geben wir den Confirm-Link direkt
    // zurück, damit man ohne echten Mail-Service testen kann. In
    // Produktion wird er NIEMALS zurückgegeben.
    const responseBody: Record<string, unknown> = { ok: true };
    if (
      process.env.NODE_ENV !== "production" &&
      mailResult.provider === "console"
    ) {
      responseBody.devConfirmUrl = confirmUrl;
      responseBody.devHint =
        "Kein RESEND_API_KEY gesetzt – im Dev-Modus wird der Bestätigungs-Link hier zurückgegeben. Setze RESEND_API_KEY in .env.local, um echte Mails zu versenden.";
    }

    return NextResponse.json(responseBody, { status: 200 });
  } catch (error) {
    console.error("[waitlist] fehlgeschlagen:", error);
    return NextResponse.json(
      {
        error:
          "Dein Eintrag konnte nicht gespeichert werden. Bitte versuche es später noch einmal.",
      },
      { status: 500 }
    );
  }
}
