import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react";

/**
 * Schriftarten nach NOMI Brand Strategy:
 * - Nunito: Body-Text (rund, warm, kindfreundlich, hohe Lesbarkeit)
 * - Fredoka: Headlines und markante Texte (verspielt, einzigartig, Kinderbuch-Feel)
 * - Caveat: Nomi-O-Ton (sparsam, nur für spezielle Zitate)
 *
 * Alles selbst gehostet für DSGVO-Konformität.
 */
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/fredoka/400.css";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/caveat/400.css";

export const metadata: Metadata = {
  title: "NomiPost – Persönliche Post, die Kinderaugen zum Leuchten bringt",
  description:
    "Jeden Monat ein persönlicher Brief von Nomi, der Kinderaugen zum Leuchten bringt. Geschichte, Rätsel und kleine Überraschungen – Post, an die sich dein Kind noch Jahre später erinnert.",
  icons: {
    icon: "/images/nomi-head.png",
    apple: "/images/nomi-head.png",
  },
  openGraph: {
    title: "NomiPost – Post, die Kinderaugen zum Leuchten bringt",
    description:
      "Jeden Monat ein Brief von Nomi – mit Geschichte, Rätsel und Überraschungen. Jetzt auf die Warteliste!",
    type: "website",
    locale: "de_DE",
    siteName: "NomiPost",
    url: "https://nomipost.de",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NomiPost – Persönliche Post, die Kinderaugen zum Leuchten bringt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NomiPost – Post, die Kinderaugen zum Leuchten bringt",
    description:
      "Jeden Monat ein Brief von Nomi – mit Geschichte, Rätsel und Überraschungen. Jetzt auf die Warteliste!",
    images: ["/images/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFBF5",
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
      <body className="text-slate-800 antialiased" style={{ backgroundColor: "var(--color-bg)" }}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
