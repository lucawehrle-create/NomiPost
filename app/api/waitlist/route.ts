import { NextResponse } from "next/server";
import {
  addEntry,
  type WaitlistEntry,
  CONSENT_TEXT_VERSION,
} from "@/lib/storage";
import { waitlistSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Ungültige Eingabe.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const input = parsed.data;
    const consentAt = new Date().toISOString();

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
      consent_survey: input.consentSurvey,
      consent_at: consentAt,
      consent_text_version: CONSENT_TEXT_VERSION,

      // Für spätere Double-Opt-In-Integration vorbereiten (noch nicht aktiv)
      confirmation_token: null,
      confirmed_at: null,
    };

    await addEntry(entry);

    return NextResponse.json({ ok: true }, { status: 200 });
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
