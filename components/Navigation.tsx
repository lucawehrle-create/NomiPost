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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warmcreme/85 backdrop-blur-xl border-b border-nomi-violet/5 shadow-[0_1px_20px_-5px_rgba(59,45,95,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-5 lg:py-6">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 lg:w-11 lg:h-11 transition-transform duration-700 group-hover:rotate-[15deg]">
            <CompassRose className="w-full h-full" />
          </div>
          <span className="headline-serif text-xl lg:text-[1.35rem] font-semibold text-nomi-violet tracking-tight">
            NomiPost
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-[0.9rem] font-medium text-nomi-violet/75">
          <a href="#was" className="relative hover:text-nomi-violet transition-colors duration-300 group">
            Was steckt drin?
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-mattgold transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#wie" className="relative hover:text-nomi-violet transition-colors duration-300 group">
            Wie es funktioniert
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-mattgold transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#nomi" className="relative hover:text-nomi-violet transition-colors duration-300 group">
            Über Nomi
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-mattgold transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#faq" className="relative hover:text-nomi-violet transition-colors duration-300 group">
            Fragen
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-mattgold transition-all duration-500 group-hover:w-full" />
          </a>
        </nav>

        <a href="#warteliste" className="btn-primary py-2.5 px-5 lg:px-6 text-sm">
          Auf die Warteliste
          <span className="text-mattgold-light text-xs">✦</span>
        </a>
      </div>
    </header>
  );
}
