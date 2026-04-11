import CompassRose from "./CompassRose";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-nomi-violet/10 bg-warmcreme-dark/40 mt-10">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <CompassRose className="w-full h-full" />
              </div>
              <span className="headline-serif text-xl font-semibold text-nomi-violet">
                NomiPost
              </span>
            </div>
            <p className="text-sm text-tintengrau-light leading-relaxed max-w-xs">
              Persönliche Post für kleine Entdecker. Handgemachte Abenteuer in
              Briefform – jeden Monat neu.
            </p>
          </div>

          <div>
            <h4 className="headline-serif text-lg font-semibold text-nomi-violet mb-3">
              Entdecken
            </h4>
            <ul className="space-y-2 text-sm text-tintengrau">
              <li>
                <a href="#was" className="hover:text-nomi-violet transition-colors">
                  Was steckt im Brief?
                </a>
              </li>
              <li>
                <a href="#wie" className="hover:text-nomi-violet transition-colors">
                  Wie es funktioniert
                </a>
              </li>
              <li>
                <a href="#nomi" className="hover:text-nomi-violet transition-colors">
                  Über Nomi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-nomi-violet transition-colors">
                  Fragen & Antworten
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="headline-serif text-lg font-semibold text-nomi-violet mb-3">
              Bleib in Kontakt
            </h4>
            <p className="text-sm text-tintengrau mb-4 leading-relaxed">
              Trag dich in die Warteliste ein und bekomme als Erste:r Bescheid,
              wenn Nomis erster Brief auf Reisen geht.
            </p>
            <a href="#warteliste" className="btn-primary py-3 px-6 text-sm">
              Zur Warteliste
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-nomi-violet/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-tintengrau-light">
          <p>© {new Date().getFullYear()} NomiPost · Mit Liebe gestaltet ✦</p>
          <p className="handwritten text-base text-mattgold-dark">
            &bdquo;Das wertvollste Stück Post, das ein Kind bekommen kann.&ldquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
