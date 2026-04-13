import Link from "next/link";
import { headers } from "next/headers";
import { confirmEntry, findByToken } from "@/lib/storage";
import { getClientIp } from "@/lib/rate-limit";
import CompassRose from "@/components/CompassRose";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HandDivider from "@/components/HandDivider";

export const dynamic = "force-dynamic";
export const preferredRegion = "fra1"; // Frankfurt – DSGVO-Raum

type Props = {
  searchParams: { token?: string };
};

export const metadata = {
  title: "Anmeldung bestätigen – NomiPost",
  description: "Bestätige deine Anmeldung zur NomiPost-Warteliste.",
  robots: { index: false, follow: false },
};

export default async function BestaetigungPage({ searchParams }: Props) {
  const token = searchParams.token ?? "";

  // IP aus Headers ermitteln (für den Nachweis des Confirmation-Klicks)
  const hdrs = headers();
  const fakeRequest = new Request("http://localhost", {
    headers: hdrs as unknown as HeadersInit,
  });
  const ipConfirm = getClientIp(fakeRequest);

  let status: "no-token" | "already" | "confirmed" | "invalid" = "invalid";
  let parentName = "";

  if (!token) {
    status = "no-token";
  } else {
    // Zuerst prüfen, ob der Eintrag existiert und ob er schon bestätigt ist
    const existing = await findByToken(token);
    if (!existing) {
      status = "invalid";
    } else if (existing.confirmed_at) {
      status = "already";
      parentName = existing.parent_name;
    } else {
      const result = await confirmEntry(
        token,
        ipConfirm === "unknown" ? null : ipConfirm
      );
      if (result) {
        status = "confirmed";
        parentName = result.parent_name;
      } else {
        status = "invalid";
      }
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 md:pt-40 pb-20 min-h-[70vh] flex items-center">
        <div className="container-narrow w-full">
          <div className="paper-card hand-border paper-card-elevated p-10 md:p-14 lg:p-16 max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <CompassRose className="w-full h-full gold-glow" />
            </div>

            {status === "confirmed" && (
              <>
                <div className="eyebrow mb-4 justify-center">
                  <span className="w-10 h-px bg-amber-400" />
                  Geschafft
                  <span className="w-10 h-px bg-amber-400" />
                </div>
                <h1 className="headline-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 leading-[1.05] mb-6">
                  Vielen Dank, {parentName}! ✦
                </h1>
                <HandDivider className="mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed max-w-lg mx-auto">
                  Deine Anmeldung zur Warteliste ist{" "}
                  <strong className="text-slate-800">jetzt bestätigt</strong>.
                  Wir melden uns bei dir, sobald Nomis erster Brief auf die
                  Reise geht.
                </p>
                <p className="handwritten text-2xl text-amber-700 mt-8">
                  Bis bald, dein NomiPost-Team
                </p>
              </>
            )}

            {status === "already" && (
              <>
                <h1 className="headline-serif text-3xl md:text-4xl font-semibold text-slate-800 leading-tight mb-6">
                  Schon bestätigt ✦
                </h1>
                <HandDivider className="mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed">
                  Hallo {parentName}, deine Anmeldung wurde bereits bestätigt.
                  Du musst nichts weiter tun – wir melden uns bei dir, sobald
                  NomiPost startet.
                </p>
              </>
            )}

            {status === "invalid" && (
              <>
                <h1 className="headline-serif text-3xl md:text-4xl font-semibold text-slate-800 leading-tight mb-6">
                  Bestätigung fehlgeschlagen
                </h1>
                <HandDivider className="mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed max-w-lg mx-auto">
                  Dieser Bestätigungs-Link ist entweder abgelaufen oder
                  ungültig. Trag dich am besten erneut in die Warteliste ein.
                </p>
                <Link
                  href="/#warteliste"
                  className="btn-primary mt-8 inline-flex"
                >
                  Zur Warteliste
                  <span className="text-amber-300">✦</span>
                </Link>
              </>
            )}

            {status === "no-token" && (
              <>
                <h1 className="headline-serif text-3xl md:text-4xl font-semibold text-slate-800 leading-tight mb-6">
                  Kein Bestätigungs-Token
                </h1>
                <HandDivider className="mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed max-w-lg mx-auto">
                  Diese Seite wird nur über einen persönlichen Link in deiner
                  Bestätigungs-E-Mail aufgerufen. Falls du gerade keine
                  Anmeldung bestätigen möchtest, kehre zur Startseite zurück.
                </p>
                <Link href="/" className="btn-secondary mt-8 inline-flex">
                  Zur Startseite
                </Link>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
