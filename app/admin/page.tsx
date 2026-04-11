import { cookies } from "next/headers";
import { listEntries, getStorageMode } from "@/lib/storage";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

const AUTH_COOKIE = "nomi_admin_auth";

export default async function AdminPage() {
  const jar = cookies();
  const auth = jar.get(AUTH_COOKIE)?.value;
  const expected = process.env.ADMIN_PASSWORD ?? "nomi-geheim-2026";
  const isAuthenticated = auth === expected;

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const entries = await listEntries();
  const mode = getStorageMode();

  return <AdminDashboard entries={entries} mode={mode} />;
}
