"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

const AUTH_COOKIE = "nomi_admin_auth";
const MAX_AGE = 60 * 60 * 8; // 8 Stunden

/**
 * Zeitkonstanter Vergleich zweier Strings, um Timing-Side-Channel-
 * Attacks auf den Passwort-Vergleich zu verhindern.
 */
function timingSafeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf-8");
  const bBuf = Buffer.from(b, "utf-8");
  // crypto.timingSafeEqual verlangt gleich lange Buffer – wir
  // normalisieren zuerst auf die maximale Länge und prüfen danach
  // zusätzlich die Original-Länge, sonst leakt die Länge.
  const maxLen = Math.max(aBuf.length, bBuf.length);
  const aPadded = Buffer.alloc(maxLen, 0);
  const bPadded = Buffer.alloc(maxLen, 0);
  aBuf.copy(aPadded);
  bBuf.copy(bPadded);
  const equalBytes = crypto.timingSafeEqual(aPadded, bPadded);
  return equalBytes && aBuf.length === bBuf.length;
}

export async function loginAction(formData: FormData) {
  const password = formData.get("password")?.toString() ?? "";
  const expected = process.env.ADMIN_PASSWORD;

  // Explizit prüfen, dass das Passwort gesetzt ist – kein Fallback
  // auf ein hardcoded Default-Passwort, das im Repo sichtbar wäre.
  if (!expected || expected.length < 8) {
    console.error(
      "[admin] ADMIN_PASSWORD ist nicht gesetzt oder zu kurz (min. 8 Zeichen)."
    );
    redirect("/admin?error=config");
  }

  if (!timingSafeEqual(password, expected)) {
    redirect("/admin?error=wrong");
  }

  cookies().set(AUTH_COOKIE, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  });

  redirect("/admin");
}

export async function logoutAction() {
  cookies().delete(AUTH_COOKIE);
  redirect("/admin");
}
