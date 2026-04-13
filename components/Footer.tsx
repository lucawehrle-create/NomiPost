import CompassRose from "./CompassRose";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-14 pb-10 md:pt-20 md:pb-12 lg:pt-28 lg:pb-14 border-t border-slate-200/70 bg-gradient-to-b from-slate-50 to-slate-100/60">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <div className="w-11 h-11 md:w-12 md:h-12">
                <CompassRose className="w-full h-full" />
              </div>
              <span className="headline-serif text-xl md:text-2xl font-semibold text-slate-800">
                NomiPost
              </span>
            </div>
            <p className="text-sm lg:text-base text-slate-500 leading-relaxed max-w-sm mb-5 md:mb-6">
              Persönliche Post für kleine Entdecker. Abenteuer in Briefform,
              jeden Monat neu. Etwas, an das sich dein Kind noch Jahre
              später erinnert.
            </p>
            <p className="handwritten text-base md:text-lg text-amber-700 flex items-center gap-2">
              <span className="w-6 h-px bg-amber-700" />
              Mit Sorgfalt aus Deutschland ✦
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-700 mb-4">
              Entdecken
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>
                <a
                  href="#was"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-blue-500 group-hover:w-4 transition-all duration-300" />
                  Was steckt im Brief?
                </a>
              </li>
              <li>
                <a
                  href="#wie"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-blue-500 group-hover:w-4 transition-all duration-300" />
                  Wie es funktioniert
                </a>
              </li>
              <li>
                <a
                  href="#nomi"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-blue-500 group-hover:w-4 transition-all duration-300" />
                  Über Nomi
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-blue-500 group-hover:w-4 transition-all duration-300" />
                  Fragen & Antworten
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-700 mb-4">
              Bleib in Kontakt
            </h4>
            <p className="text-sm text-slate-700 mb-5 leading-relaxed">
              Zwei Felder, und du bist dabei. Wir melden uns, sobald Nomis
              erster Umschlag auf die Reise geht.
            </p>
            <a href="#warteliste" className="btn-primary py-3 px-6 text-sm">
              Zur Warteliste
              <span className="text-amber-300 text-xs">✦</span>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NomiPost · Mit Liebe gestaltet ✦</p>
          <div className="flex items-center gap-6">
            <a
              href="/impressum"
              className="hover:text-slate-800 transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-slate-800 transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
