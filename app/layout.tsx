import type { Metadata } from "next";
import "./globals.css";

/**
 * Schriftarten werden über Fontsource als npm-Pakete installiert und
 * komplett selbst gehostet. Es gibt weder Build-Zeit- noch Runtime-
 * Requests an Google-Server. Das ist notwendig für DSGVO-Konformität
 * (LG München, Urteil vom 20.01.2022, Az. 3 O 17493/20).
 */
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/caveat/400.css";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-warmcreme text-tintengrau antialiased">
        {children}
      </body>
    </html>
  );
}
