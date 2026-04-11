import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Caveat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warmcreme text-tintengrau antialiased">
        {children}
      </body>
    </html>
  );
}
