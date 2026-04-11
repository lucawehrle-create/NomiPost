# NomiPost – Bilder-Ordner

Hier kommen die Bilder hin, die auf der Landingpage angezeigt werden. Solange
du noch keine Bilder hochgeladen hast, zeigt die Seite schöne Platzhalter im
Brand-Stil. Sobald du ein Bild in diesem Ordner ablegst **und** den
entsprechenden `src` in der Komponente aktivierst, wird es angezeigt.

## So pflegst du Bilder ein

1. Leg dein Bild in `public/images/` ab – genau unter dem Dateinamen, der im
   Platzhalter auf der Seite angezeigt wird.
2. Öffne die angegebene Komponente (Pfad steht unten in der Tabelle).
3. Finde die `<ImageSlot ...>` Stelle und setze den `src`-Prop:

   **Vorher** (zeigt Platzhalter):
   ```tsx
   <ImageSlot
     src=""
     filename="/images/nomi-portrait.jpg"
     ...
   />
   ```

   **Nachher** (zeigt dein Bild):
   ```tsx
   <ImageSlot
     src="/images/nomi-portrait.jpg"
     filename="/images/nomi-portrait.jpg"
     ...
   />
   ```

4. Speichern. Die Seite lädt neu und zeigt dein Bild.

---

## Bildslots (aktuell genutzt)

| Dateiname | Komponente | Zweck | Empfohlenes Format |
|---|---|---|---|
| `nomi-portrait.jpg` | `components/AboutNomi.tsx` | Das große Maskottchen-Bild von Nomi – zentrales Portrait im Aquarell-Stil, passend zur Brand Identity (Entdeckerin mit Kompass). | Hochformat 3:4, mind. 900×1200 px, JPG oder PNG, warme Farben |
| `letter-preview.jpg` | `components/LetterAnatomy.tsx` | Ein Foto oder eine Illustration eines echten Briefs mit allen Beilagen – aufgeklappt, Draufsicht, in warmem Setting (Holztisch, neben Kakao-Tasse, in Kinderhänden). | Querformat 16:10, mind. 1600×1000 px |
| `nomi-hero.jpg` | `components/Hero.tsx` | Optionales kleines Nomi-Avatar/Vignette für den Hero (wird neben dem SVG-Umschlag eingeblendet). Dezent, passt zum Kompass-Element. | Quadratisch 1:1, mind. 600×600 px |

---

## Tipps aus dem Brand Guide

- **Niemals** freigestellte Bilder auf weißem Hintergrund. Immer warme,
  natürliche Settings: Holztische, Leinen, Kakao, Kinderhände.
- **Niemals** Clip-Art, Stock-Icons oder generische Kinder-Illustrationen.
  Aquarell-Look, handgezeichnete Linien, wirkt wie aus einem Kinderbuch.
- **Niemals** Neonfarben oder grelle Primärfarben. Alles gedämpft, mit
  Umbra-Ton gemischt.
- **Immer** wirken als wäre es von Hand gemacht.
- **Immer** zeigen, nie behaupten – Produktfotos in echten Settings statt
  Renderings.

## Bild optimieren vor dem Upload

Damit die Seite schnell lädt, bitte vorher optimieren:

- **JPG-Qualität:** 80–85 % reicht in aller Regel
- **Maximale Breite:** 2000 px (mehr braucht keiner)
- **Tools:** [squoosh.app](https://squoosh.app) (kostenlos, im Browser)

## Platzhalter deaktivieren

Solange ein Slot leer ist (`src=""`), zeigt die Seite den eleganten
„Bildplatz ✦"-Platzhalter mit Dateiname-Hinweis. Das ist Absicht – so
kannst du die Seite auch vor dem Upload schon live nehmen, ohne dass es
„kaputt" aussieht.
