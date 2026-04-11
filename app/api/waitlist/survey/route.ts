import { NextResponse } from "next/server";
import { updateSurvey } from "@/lib/storage";
import { surveySchema } from "@/lib/validation";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/waitlist/survey
 *
 * Aktualisiert einen existierenden Warteliste-Eintrag mit den
 * optionalen Bonus-Umfrage-Antworten (wishes, priceExpectation).
 *
 * Der Token wird beim initialen POST /api/waitlist an den Client
 * zurückgegeben und dient hier als Identifier. Die Umfrage ist
 * immer freiwillig – der Eintrag bleibt auf der Warteliste, egal
 * ob die Umfrage ausgefüllt wird oder nicht.
 */
export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = rateLimit({
    key: `survey:${ip}`,
    limit: 15,
    windowMs: 60 * 60 * 1000,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte warte einen Moment." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const parsed = surveySchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message ?? "Ungültige Eingabe.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { token, wishes, priceExpectation } = parsed.data;

    const updated = await updateSurvey(token, { wishes, priceExpectation });
    if (!updated) {
      return NextResponse.json(
        { error: "Ungültiger Token." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[waitlist-survey] fehlgeschlagen:", error);
    return NextResponse.json(
      { error: "Umfrage konnte nicht gespeichert werden." },
      { status: 500 }
    );
  }
}
