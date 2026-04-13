"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
          ? "bg-slate-50/90 backdrop-blur-xl border-b border-slate-100 shadow-[0_1px_20px_-5px_rgba(30,41,59,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-3.5 md:py-5 lg:py-6">
        <a
          href="/"
          className="flex items-center min-h-[44px]"
          aria-label="NomiPost Startseite"
        >
          <Image
            src="/images/Logo.png"
            alt="NomiPost"
            width={300}
            height={50}
            quality={85}
            priority
            className="h-7 md:h-8 lg:h-9 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[0.9rem] font-medium text-slate-800/75">
          <a
            href="#was"
            className="relative hover:text-slate-800 transition-colors duration-300 group py-2"
          >
            Was drin ist
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-500 group-hover:w-full" />
          </a>
          <a
            href="#faq"
            className="relative hover:text-slate-800 transition-colors duration-300 group py-2"
          >
            Fragen
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-500 group-hover:w-full" />
          </a>
        </nav>

        <a
          href="/#top"
          className="btn-primary py-2.5 px-4 md:px-5 lg:px-6 text-[0.8rem] md:text-sm min-h-[44px]"
        >
          <span className="hidden sm:inline">Warteliste</span>
          <span className="sm:hidden">Jetzt dabei sein</span>
          <span className="text-amber-300 text-xs hidden sm:inline">✦</span>
        </a>
      </div>
    </header>
  );
}
