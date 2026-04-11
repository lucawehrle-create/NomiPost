"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AUTH_COOKIE = "nomi_admin_auth";
const MAX_AGE = 60 * 60 * 8; // 8 Stunden

export async function loginAction(formData: FormData) {
  const password = formData.get("password")?.toString() ?? "";
  const expected = process.env.ADMIN_PASSWORD ?? "nomi-geheim-2026";

  if (password !== expected) {
    redirect("/admin?error=1");
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
