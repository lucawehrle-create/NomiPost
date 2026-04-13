import Link from "next/link";
import CompassRose from "@/components/CompassRose";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 opacity-30">
          <CompassRose className="w-full h-full" />
        </div>

        <h1 className="headline-serif text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
          Hier ist nichts.
        </h1>

        <p className="text-slate-700 leading-relaxed mb-8">
          Die Seite, die du suchst, gibt es leider nicht. Vielleicht hat
          Nomis Kompass dich in die falsche Richtung geschickt.
        </p>

        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
