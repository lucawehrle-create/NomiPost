"use client";

import { useEffect, useState } from "react";
import CompassRose from "./CompassRose";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warmcreme/90 backdrop-blur-md shadow-sm shadow-nomi-violet/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 transition-transform group-hover:rotate-12">
            <CompassRose className="w-full h-full" />
          </div>
          <span className="headline-serif text-xl font-semibold text-nomi-violet tracking-tight">
            NomiPost
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-nomi-violet/80">
          <a href="#was" className="hover:text-nomi-violet transition-colors">
            Was steckt drin?
          </a>
          <a href="#wie" className="hover:text-nomi-violet transition-colors">
            Wie es funktioniert
          </a>
          <a href="#nomi" className="hover:text-nomi-violet transition-colors">
            Über Nomi
          </a>
          <a href="#faq" className="hover:text-nomi-violet transition-colors">
            Fragen
          </a>
        </nav>

        <a href="#warteliste" className="btn-primary py-2.5 px-5 text-sm">
          Warteliste
        </a>
      </div>
    </header>
  );
}
