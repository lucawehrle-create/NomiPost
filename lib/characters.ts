export type Character = {
  id: string;
  name: string;
  colorHex: string;
  colorLabel: string;
  quote: string;
  archetype: string;
  archetypeText: string;
  funktion: string;
  signaturElemente: string[];
  traits: string[];
  schwaeche: string;
};

export const characters: Character[] = [
  {
    id: "nomi",
    name: "Nomi",
    colorHex: "#3B82F6",
    colorLabel: "Blue",
    quote: "Huch! Hast du das auch gerade gesehen?",
    archetype: "Die Neugierige / Das Herz der Reise",
    archetypeText:
      "Nomi ist ein Fantasiewesen – kein Tier, kein Mensch. Mit leuchtendem Stirnmal, großen runden Ohren und einer kleinen Antenne, mit der Nomi neue Ideen empfängt. Nomi ist das Wesen, das losgeht, bevor es weiß, wohin – und genau das macht die Reise spannend.",
    funktion:
      "Nomi ist die Einladung, die Welt mit offenen Augen zu betrachten. Nomi zeigt: Fragen stellen ist das Schönste, was man tun kann — und jede Antwort führt zur nächsten Frage.",
    signaturElemente: [
      "Leuchtendes Stirnmal",
      "Große runde Ohren",
      "Kleine Antenne für neue Ideen",
    ],
    traits: ["Neugierig", "Mutig", "Tollpatschig", "Warmherzig", "Verbindend"],
    schwaeche:
      "Stolpert über die eigenen Füße, wenn die Neugier größer ist als die Vorsicht. Nomi lernt, dass Innehalten manchmal der mutigste Schritt ist.",
  },
  {
    id: "lumi",
    name: "Lumi",
    colorHex: "#059669",
    colorLabel: "Emerald",
    quote: "Warte mal — lass mich das genauer anschauen.",
    archetype: "Die Forscherin / Die Denkerin",
    archetypeText:
      "Lumi beobachtet. Wo andere hinrennen, bleibt Lumi kurz stehen. Lumi ist das Kind, das Steine umdreht, Wolken z\u00E4hlt und fragt: \u201EWarum ist der Himmel blau?\u201C \u2014 und nicht aufh\u00F6rt, bis eine Antwort kommt.",
    funktion:
      "Repräsentiert den kognitiven Entdeckertrieb — das Bedürfnis, die Welt zu verstehen. Kinder zwischen 5 und 10 stellen bis zu 300 Fragen am Tag. Lumi zeigt: Fragen stellen ist klug, nicht nervig.",
    signaturElemente: [
      "Kopfausprägung — wie eine Antenne für Entdeckungen",
      "Augenringe — wie eine Forscherbrille",
      "Lupen-Stirnmal",
    ],
    traits: [
      "Neugierig",
      "Geduldig",
      "Vorsichtig",
      "Leise inspirierend",
      "Scharfsinnig",
    ],
    schwaeche:
      "Vergisst die Zeit beim Beobachten. Verpasst manchmal den Moment, weil Lumi das Detail so genau nachzeichnet. Muss lernen, manchmal einfach loszulassen und zu genießen, statt zu analysieren.",
  },
  {
    id: "kira",
    name: "Kira",
    colorHex: "#DC2626",
    colorLabel: "Coral",
    quote: "Los geht's! Wir schaffen das — zusammen!",
    archetype: "Die Mutige / Die Abenteurerin",
    archetypeText:
      "Kira ist die Erste, die den Berg hochrennt, die Welle reitet, ins Problem hinein ruft. Nicht waghalsig — mutig. Kira hat auch mal Bammel, macht's aber trotzdem. Kira handelt aus Neugier und Begeisterung, nicht aus Dominanz.",
    funktion:
      "Repräsentiert den motorischen Drang und das Gefühl von Selbstwirksamkeit. Kinder zwischen 5 und 10 wollen testen, wie weit sie kommen. Mit Kira lernt dein Kind: Mut ist nicht Angstfreiheit, sondern Handeln trotz Bammel.",
    signaturElemente: [
      "Flammenkrone — die weiche Spitze auf dem Kopf",
      "Mini-Flügelchen an den Schultern",
      "Sternen-Herz",
    ],
    traits: [
      "Mutig",
      "Energisch",
      "Laut",
      "Loyal",
      "Ermutigend",
      "Temperamentvoll",
    ],
    schwaeche:
      "Kann nicht stillsitzen. Muss immer etwas tun. Kira lernt mit der Zeit, dass Pause machen kein Aufgeben ist — und Zuhören genauso mutig sein kann wie Loslegen.",
  },
  {
    id: "milo",
    name: "Milo",
    colorHex: "#7C3AED",
    colorLabel: "Violet",
    quote: "Was wäre, wenn…?",
    archetype: "Der Kreative / Der Träumer",
    archetypeText:
      "Milo sieht, was andere übersehen. Milo erzählt die Geschichten zwischen den Dingen: warum der Baum traurig aussieht, was die Wolken miteinander besprechen, wie die Welt wäre, wenn Schatten sprechen könnten.",
    funktion:
      "Repräsentiert die Vorstellungskraft — das Bedürfnis, aus Wirklichkeit etwas Eigenes zu machen. Für Kinder, die gerne tagträumen, malen, erfinden. Milo zeigt: Fantasie ist keine Flucht. Sie ist eine eigene Art zu verstehen.",
    signaturElemente: [
      "Traum-Krone",
      "Farbtupfer-Fell",
      "Geschichten-Stirnmal",
    ],
    traits: [
      "Fantasievoll",
      "Sensibel",
      "Verspielt",
      "Tiefgründig",
      "Empathisch",
    ],
    schwaeche:
      "Verliert sich manchmal in den eigenen Gedanken. Milo lernt, dass das Teilen einer Idee sie nicht kleiner, sondern größer macht.",
  },
  {
    id: "tiko",
    name: "Tiko",
    colorHex: "#D97706",
    colorLabel: "Amber",
    quote: "Warte — gleich passiert was Lustiges!",
    archetype: "Der Lustige / Die fröhliche Seele",
    archetypeText:
      "Tiko lacht viel. Tiko ist das Wesen, das aus dem Stolpern eine Vorstellung macht und aus dem Regen einen Tanz. Tiko nimmt Dinge ernst — aber nie zu ernst.",
    funktion:
      "Repräsentiert die Freude und das Spielerische — eine Grundhaltung, die Kinder brauchen, um Fehler ohne Angst zu machen. Mit Tiko lernt dein Kind: Lachen verbindet, und sich selbst nicht zu ernst nehmen ist eine echte Stärke.",
    signaturElemente: [
      "Spaß-Krone",
      "Grinse-Öhrchen",
      "Blubber-Stirnmal",
    ],
    traits: [
      "Lustig",
      "Herzlich",
      "Spontan",
      "Leicht",
      "Verbindend",
      "Unbeschwert",
    ],
    schwaeche:
      "Vergisst manchmal, dass nicht alles ein Witz ist. Tiko lernt mit der Zeit, auch leise sein zu dürfen — und dass Trost manchmal mehr wert ist als ein neuer Spaß.",
  },
];
