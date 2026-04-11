import CompassRose from "./CompassRose";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-12 lg:pt-28 lg:pb-14 border-t border-nomi-violet/10 bg-gradient-to-b from-warmcreme to-warmcreme-dark/40">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12">
                <CompassRose className="w-full h-full" />
              </div>
              <span className="headline-serif text-2xl font-semibold text-nomi-violet">
                NomiPost
              </span>
            </div>
            <p className="text-sm lg:text-base text-tintengrau-light leading-relaxed max-w-sm mb-6">
              Persönliche Post für kleine Entdecker. Handgemachte Abenteuer in
              Briefform, jeden Monat neu. Ein Kunstwerk, das dein Kind in
              zwanzig Jahren noch aus dem Regal zieht.
            </p>
            <p className="handwritten text-lg text-mattgold-dark flex items-center gap-2">
              <span className="w-6 h-px bg-mattgold-dark" />
              Mit Sorgfalt aus Deutschland ✦
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-mattgold-dark mb-4">
              Entdecken
            </h4>
            <ul className="space-y-3 text-sm text-tintengrau">
              <li>
                <a
                  href="#was"
                  className="hover:text-nomi-violet transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-nomi-violet group-hover:w-4 transition-all duration-300" />
                  Was steckt im Brief?
                </a>
              </li>
              <li>
                <a
                  href="#wie"
                  className="hover:text-nomi-violet transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-nomi-violet group-hover:w-4 transition-all duration-300" />
                  Wie es funktioniert
                </a>
              </li>
              <li>
                <a
                  href="#nomi"
                  className="hover:text-nomi-violet transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-nomi-violet group-hover:w-4 transition-all duration-300" />
                  Über Nomi
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-nomi-violet transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-nomi-violet group-hover:w-4 transition-all duration-300" />
                  Fragen & Antworten
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-mattgold-dark mb-4">
              Bleib in Kontakt
            </h4>
            <p className="text-sm text-tintengrau mb-5 leading-relaxed">
              Zwei Felder, und du bist dabei. Wir melden uns, sobald Nomis
              erster Umschlag auf die Reise geht.
            </p>
            <a href="#warteliste" className="btn-primary py-3 px-6 text-sm">
              Zur Warteliste
              <span className="text-mattgold-light text-xs">✦</span>
            </a>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 pt-8 border-t border-nomi-violet/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-tintengrau-light">
          <p>© {new Date().getFullYear()} NomiPost · Mit Liebe gestaltet ✦</p>
          <div className="flex items-center gap-6">
            <a
              href="/impressum"
              className="hover:text-nomi-violet transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-nomi-violet transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
