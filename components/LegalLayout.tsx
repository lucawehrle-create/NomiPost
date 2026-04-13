import Navigation from "./Navigation";
import Footer from "./Footer";
import HandDivider from "./HandDivider";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

/**
 * Einheitliches Layout für Rechtstexte (Impressum, Datenschutz).
 * Bewusst ruhige Typografie, lange Lesbarkeit, keine Ablenkungen.
 */
export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: Props) {
  return (
    <>
      <Navigation />
      <main className="pt-32 md:pt-40 lg:pt-44 pb-20 lg:pb-28">
        <article className="container-narrow">
          <header className="mb-12 lg:mb-16">
            <div className="eyebrow mb-6">
              <span className="w-10 h-px bg-amber-400" />
              {eyebrow}
            </div>
            <h1 className="headline-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-[1.05] tracking-tight">
              {title}
            </h1>
            <p className="mt-6 text-sm text-slate-500">
              Stand: {lastUpdated}
            </p>
            <HandDivider className="mt-10" />
          </header>

          <div className="legal-content space-y-8 text-slate-700 leading-relaxed max-w-[42rem]">
            {children}
          </div>

          <HandDivider className="mt-16" />
          <p className="mt-8 text-center text-xs text-slate-500">
            Zurück zur{" "}
            <a href="/" className="text-slate-800 hover:underline">
              Startseite
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
