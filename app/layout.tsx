import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

/**
 * Schriftarten via Fontsource als npm-Pakete. Vollständig selbst gehostet,
 * keine Requests an Google (GDPR: LG München 3 O 17493/20).
 *
 * Reduziert auf nur die tatsächlich genutzten Weights (Mobile-Performance):
 *   Inter     : 400, 500, 600   (Body, Medium, Semibold)
 *   Fraunces  : 600 + 600 italic (Headlines + Italic-Akzente)
 *   Caveat    : 400              (Handschriftliche Elemente)
 */
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/caveat/400.css";

export const metadata: Metadata = {
  title: "NomiPost – Persönliche Post, die Kinderaugen zum Leuchten bringt",
  description:
    "Jeden Monat ein handgemachter Brief von Nomi, der dein Kind auf ein Abenteuer mitnimmt. Geschichte, Rätsel, Sticker, Hörbuch – ein Kunstwerk zum Anfassen. Jetzt auf die Warteliste.",
  openGraph: {
    title: "NomiPost – Persönliche Post für kleine Entdecker",
    description:
      "Ein handgemachter Brief im Monat, der dein Kind zum Staunen bringt. Jetzt auf die Warteliste.",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-warmcreme text-tintengrau antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
