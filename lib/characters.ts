export type Character = {
  id: string;
  name: string;
  colorHex: string;
  quote: string;
  archetype: string;
  archetypeText: string;
  funktion: string;
  traits: string[];
};

export const characters: Character[] = [
  {
    id: "nomi",
    name: "Nomi",
    colorHex: "#3B82F6",
    quote: "Huch! Hast du das auch gerade gesehen?",
    archetype: "Das Herz der Reise",
    archetypeText:
      "Nomi ist ein Fantasiewesen \u2014 kein Tier, kein Mensch. Nomi geht los, bevor es wei\u00DF, wohin. Und genau das macht jede Reise spannend.",
    funktion:
      "Nomi l\u00E4dt dein Kind ein, die Welt mit offenen Augen zu betrachten \u2014 und zeigt, dass Fragen stellen das Mutigste ist, was man tun kann.",
    traits: ["Neugierig", "Mutig", "Tollpatschig", "Warmherzig", "Verbindend"],
  },
  {
    id: "lumi",
    name: "Lumi",
    colorHex: "#059669",
    quote: "Warte mal \u2014 lass mich das genauer anschauen.",
    archetype: "Die Denkerin",
    archetypeText:
      "Wo andere hinrennen, bleibt Lumi kurz stehen. Lumi dreht Steine um, z\u00E4hlt Wolken und fragt: \u201EWarum ist der Himmel blau?\u201C",
    funktion:
      "Lumi zeigt deinem Kind: Wer genau hinschaut, entdeckt die spannendsten Dinge. Fragen stellen ist klug, nicht nervig.",
    traits: [
      "Geduldig",
      "Vorsichtig",
      "Scharfsinnig",
      "Leise inspirierend",
    ],
  },
  {
    id: "kira",
    name: "Kira",
    colorHex: "#DC2626",
    quote: "Los geht\u2019s! Wir schaffen das \u2014 zusammen!",
    archetype: "Die Mutige",
    archetypeText:
      "Kira rennt den Berg hoch, reitet die Welle, ruft ins Problem hinein. Nicht waghalsig \u2014 mutig. Kira hat auch mal Bammel, macht\u2019s aber trotzdem.",
    funktion:
      "Mit Kira lernt dein Kind: Mut hei\u00DFt nicht, keine Angst zu haben \u2014 sondern es trotzdem zu versuchen.",
    traits: [
      "Mutig",
      "Energisch",
      "Loyal",
      "Ermutigend",
    ],
  },
  {
    id: "milo",
    name: "Milo",
    colorHex: "#7C3AED",
    quote: "Was w\u00E4re, wenn\u2026?",
    archetype: "Der Tr\u00E4umer",
    archetypeText:
      "Milo sieht, was andere \u00FCbersehen: warum der Baum traurig aussieht, was die Wolken miteinander besprechen, wie die Welt w\u00E4re, wenn Schatten sprechen k\u00F6nnten.",
    funktion:
      "Milo zeigt deinem Kind: Fantasie ist keine Flucht. Sie ist eine Superkraft.",
    traits: [
      "Fantasievoll",
      "Sensibel",
      "Verspielt",
      "Empathisch",
    ],
  },
  {
    id: "tiko",
    name: "Tiko",
    colorHex: "#D97706",
    quote: "Warte \u2014 gleich passiert was Lustiges!",
    archetype: "Die fr\u00F6hliche Seele",
    archetypeText:
      "Tiko macht aus dem Stolpern eine Vorstellung und aus dem Regen einen Tanz. Tiko nimmt Dinge ernst \u2014 aber nie zu ernst.",
    funktion:
      "Tiko zeigt deinem Kind: Lachen verbindet. Und wer sich selbst nicht zu ernst nimmt, hat die meisten Freunde.",
    traits: [
      "Lustig",
      "Herzlich",
      "Spontan",
      "Unbeschwert",
    ],
  },
];
