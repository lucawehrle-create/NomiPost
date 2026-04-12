import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react";

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
    "Jeden Monat ein persönlicher Brief von Nomi, der Kinderaugen zum Leuchten bringt. Geschichte, Rätsel und kleine Überraschungen – Post, an die sich dein Kind noch Jahre später erinnert.",
  icons: {
    icon: "/images/nomi-portrait.png",
    apple: "/images/nomi-portrait.png",
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
        <Analytics />
      </body>
    </html>
  );
}
