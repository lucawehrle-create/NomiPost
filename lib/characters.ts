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
    archetype: "Die Neugierige / Das Herz der Reise",
    archetypeText:
      "Nomi ist ein Fantasiewesen \u2013 kein Tier, kein Mensch. Mit leuchtendem Stirnmal, gro\u00DFen runden Ohren und einer kleinen Antenne, mit der Nomi neue Ideen empf\u00E4ngt. Nomi ist das Wesen, das losgeht, bevor es wei\u00DF, wohin \u2013 und genau das macht die Reise spannend.",
    funktion:
      "Nomi ist die Einladung, die Welt mit offenen Augen zu betrachten. Nomi zeigt: Fragen stellen ist das Sch\u00F6nste, was man tun kann \u2014 und jede Antwort f\u00FChrt zur n\u00E4chsten Frage.",
    traits: ["Neugierig", "Mutig", "Tollpatschig", "Warmherzig", "Verbindend"],
  },
  {
    id: "lumi",
    name: "Lumi",
    colorHex: "#059669",
    quote: "Warte mal \u2014 lass mich das genauer anschauen.",
    archetype: "Die Forscherin / Die Denkerin",
    archetypeText:
      "Lumi beobachtet. Wo andere hinrennen, bleibt Lumi kurz stehen. Lumi ist das Kind, das Steine umdreht, Wolken z\u00E4hlt und fragt: \u201EWarum ist der Himmel blau?\u201C \u2014 und nicht aufh\u00F6rt, bis eine Antwort kommt.",
    funktion:
      "Repr\u00E4sentiert den kognitiven Entdeckertrieb \u2014 das Bed\u00FCrfnis, die Welt zu verstehen. Kinder zwischen 5 und 10 stellen bis zu 300 Fragen am Tag. Lumi zeigt: Fragen stellen ist klug, nicht nervig.",
    traits: [
      "Neugierig",
      "Geduldig",
      "Vorsichtig",
      "Leise inspirierend",
      "Scharfsinnig",
    ],
  },
  {
    id: "kira",
    name: "Kira",
    colorHex: "#DC2626",
    quote: "Los geht\u2019s! Wir schaffen das \u2014 zusammen!",
    archetype: "Die Mutige / Die Abenteurerin",
    archetypeText:
      "Kira ist die Erste, die den Berg hochrennt, die Welle reitet, ins Problem hinein ruft. Nicht waghalsig \u2014 mutig. Kira hat auch mal Bammel, macht\u2019s aber trotzdem. Kira handelt aus Neugier und Begeisterung, nicht aus Dominanz.",
    funktion:
      "Repr\u00E4sentiert den motorischen Drang und das Gef\u00FChl von Selbstwirksamkeit. Kinder zwischen 5 und 10 wollen testen, wie weit sie kommen. Mit Kira lernt dein Kind: Mut ist nicht Angstfreiheit, sondern Handeln trotz Bammel.",
    traits: [
      "Mutig",
      "Energisch",
      "Laut",
      "Loyal",
      "Ermutigend",
      "Temperamentvoll",
    ],
  },
  {
    id: "milo",
    name: "Milo",
    colorHex: "#7C3AED",
    quote: "Was w\u00E4re, wenn\u2026?",
    archetype: "Der Kreative / Der Tr\u00E4umer",
    archetypeText:
      "Milo sieht, was andere \u00FCbersehen. Milo erz\u00E4hlt die Geschichten zwischen den Dingen: warum der Baum traurig aussieht, was die Wolken miteinander besprechen, wie die Welt w\u00E4re, wenn Schatten sprechen k\u00F6nnten.",
    funktion:
      "Repr\u00E4sentiert die Vorstellungskraft \u2014 das Bed\u00FCrfnis, aus Wirklichkeit etwas Eigenes zu machen. F\u00FCr Kinder, die gerne tagtr\u00E4umen, malen, erfinden. Milo zeigt: Fantasie ist keine Flucht. Sie ist eine eigene Art zu verstehen.",
    traits: [
      "Fantasievoll",
      "Sensibel",
      "Verspielt",
      "Tiefgr\u00FCndig",
      "Empathisch",
    ],
  },
  {
    id: "tiko",
    name: "Tiko",
    colorHex: "#D97706",
    quote: "Warte \u2014 gleich passiert was Lustiges!",
    archetype: "Der Lustige / Die fr\u00F6hliche Seele",
    archetypeText:
      "Tiko lacht viel. Tiko ist das Wesen, das aus dem Stolpern eine Vorstellung macht und aus dem Regen einen Tanz. Tiko nimmt Dinge ernst \u2014 aber nie zu ernst.",
    funktion:
      "Repr\u00E4sentiert die Freude und das Spielerische \u2014 eine Grundhaltung, die Kinder brauchen, um Fehler ohne Angst zu machen. Mit Tiko lernt dein Kind: Lachen verbindet, und sich selbst nicht zu ernst nehmen ist eine echte St\u00E4rke.",
    traits: [
      "Lustig",
      "Herzlich",
      "Spontan",
      "Leicht",
      "Verbindend",
      "Unbeschwert",
    ],
  },
];
