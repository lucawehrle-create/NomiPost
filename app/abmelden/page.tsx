import Link from "next/link";
import { findByToken } from "@/lib/storage";
import CompassRose from "@/components/CompassRose";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HandDivider from "@/components/HandDivider";
import UnsubscribeButton from "./UnsubscribeButton";

export const dynamic = "force-dynamic";
export const preferredRegion = "fra1"; // Frankfurt – DSGVO-Raum

type Props = {
  searchParams: { token?: string };
};

export const metadata = {
  title: "Abmelden – NomiPost",
  description: "Widerrufe deine Einwilligung zur NomiPost-Warteliste.",
  robots: { index: false, follow: false },
};

export default async function AbmeldenPage({ searchParams }: Props) {
  const token = searchParams.token ?? "";
  let status: "no-token" | "ready" | "invalid" = "invalid";
  let parentName = "";
  let email = "";

  if (!token) {
    status = "no-token";
  } else {
    const entry = await findByToken(token);
    if (entry) {
      status = "ready";
      parentName = entry.parent_name;
      email = entry.email;
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 md:pt-40 pb-20 min-h-[70vh] flex items-center">
        <div className="container-narrow w-full">
          <div className="paper-card hand-border paper-card-elevated p-10 md:p-14 lg:p-16 max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <CompassRose className="w-full h-full" />
            </div>

            {status === "ready" && (
              <>
                <div className="eyebrow mb-4 justify-center">
                  <span className="w-10 h-px bg-amber-400" />
                  Widerruf deiner Einwilligung
                  <span className="w-10 h-px bg-amber-400" />
                </div>
                <h1 className="headline-serif text-3xl md:text-4xl font-semibold text-slate-800 leading-tight mb-6">
                  Schade, dass du gehst
                </h1>
                <HandDivider className="mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed mb-2">
                  Hallo {parentName}, du möchtest dich von der NomiPost-
                  Warteliste abmelden.
                </p>
                <p className="text-sm text-slate-500 mb-8">
                  Eingetragene E-Mail: <strong>{email}</strong>
                </p>
                <p className="text-sm text-slate-700 leading-relaxed max-w-lg mx-auto mb-8">
                  Mit einem Klick auf den Button unten werden alle deine
                  Daten aus unserer Datenbank{" "}
                  <strong className="text-slate-800">
                    unwiderruflich gelöscht
                  </strong>
                  . Wir werden dich nicht mehr kontaktieren.
                </p>
                <UnsubscribeButton token={token} />
              </>
            )}

            {status === "invalid" && (
              <>
                <h1 className="headline-serif text-3xl md:text-4xl font-semibold text-slate-800 leading-tight mb-6">
                  Link ungültig
                </h1>
                <HandDivider className="mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed max-w-lg mx-auto">
                  Dieser Abmelde-Link ist entweder bereits verwendet oder
                  ungültig. Falls du weiterhin Post von uns bekommst, schreibe
                  uns bitte eine E-Mail an{" "}
                  <span className="text-slate-800">
                    [datenschutz@deine-domain.de]
                  </span>
                  .
                </p>
                <Link href="/" className="btn-secondary mt-8 inline-flex">
                  Zur Startseite
                </Link>
              </>
            )}

            {status === "no-token" && (
              <>
                <h1 className="headline-serif text-3xl md:text-4xl font-semibold text-slate-800 leading-tight mb-6">
                  Abmelden
                </h1>
                <HandDivider className="mb-6" />
                <p className="text-lg text-slate-700 leading-relaxed max-w-lg mx-auto">
                  Um dich abzumelden, klicke bitte auf den persönlichen
                  Abmelde-Link in einer unserer E-Mails. Alternativ schreibe
                  uns eine formlose Nachricht an{" "}
                  <span className="text-slate-800">
                    [datenschutz@deine-domain.de]
                  </span>
                  .
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
