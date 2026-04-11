import { cookies } from "next/headers";
import crypto from "crypto";
import { listEntries, getStorageMode } from "@/lib/storage";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

const AUTH_COOKIE = "nomi_admin_auth";

function timingSafeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf-8");
  const bBuf = Buffer.from(b, "utf-8");
  const maxLen = Math.max(aBuf.length, bBuf.length);
  const aPadded = Buffer.alloc(maxLen, 0);
  const bPadded = Buffer.alloc(maxLen, 0);
  aBuf.copy(aPadded);
  bBuf.copy(bPadded);
  return crypto.timingSafeEqual(aPadded, bPadded) && aBuf.length === bBuf.length;
}

export default async function AdminPage() {
  const jar = cookies();
  const auth = jar.get(AUTH_COOKIE)?.value ?? "";
  const expected = process.env.ADMIN_PASSWORD ?? "";

  // Ohne gesetztes ADMIN_PASSWORD ist der Login komplett blockiert,
  // damit es kein hardcoded Default-Passwort im Repo gibt.
  const isConfigured = expected.length >= 8;
  const isAuthenticated =
    isConfigured && auth.length > 0 && timingSafeEqual(auth, expected);

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const entries = await listEntries();
  const mode = getStorageMode();

  return <AdminDashboard entries={entries} mode={mode} />;
}
