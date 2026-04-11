import { NextResponse } from "next/server";
import { deleteByToken } from "@/lib/storage";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const preferredRegion = "fra1"; // Frankfurt – DSGVO-Raum

/**
 * POST /api/unsubscribe – Löscht einen Warteliste-Eintrag anhand des
 * Confirmation-Tokens. Wird vom Unsubscribe-Button auf /abmelden
 * aufgerufen sowie von One-Click-Unsubscribe-Header (RFC 8058).
 */
export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = rateLimit({
    key: `unsubscribe:${ip}`,
    limit: 10,
    windowMs: 60 * 60 * 1000,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte warte einen Moment." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const token = typeof body.token === "string" ? body.token.trim() : "";

    if (!token) {
      return NextResponse.json({ error: "Kein Token." }, { status: 400 });
    }

    const deleted = await deleteByToken(token);
    if (!deleted) {
      // Aus Datenschutzgründen keine genaue Info, ob es den Token gab
      return NextResponse.json(
        { error: "Ungültiger oder bereits verwendeter Link." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[unsubscribe] fehlgeschlagen:", error);
    return NextResponse.json(
      { error: "Abmeldung fehlgeschlagen." },
      { status: 500 }
    );
  }
}
