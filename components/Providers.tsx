"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Globale Client-Provider.
 *
 * LazyMotion + domAnimation: Lädt nur den nötigen Teil von Framer Motion
 * (nicht die komplette ~60kb-Bibliothek). Spart ~25-30kb im First Load JS.
 *
 * MotionConfig reducedMotion="user": Respektiert die System-Einstellung
 * "Bewegung reduzieren" des Users (Accessibility + Mobile-Performance
 * für Geräte mit schwachem Akku oder Prozessor).
 *
 * Wichtig: Komponenten müssen <m.div> statt <motion.div> verwenden.
 * Wir aliasen in den Komponenten `m as motion`, damit wir weniger
 * Code ändern müssen und trotzdem die Lazy-Variante bekommen.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
