import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Impressum – NomiPost",
  description: "Anbieterkennzeichnung nach § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Impressum"
      lastUpdated="April 2026"
    >
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <em>
          Seit dem 14. Mai 2024 gilt in Deutschland das Digitale-Dienste-Gesetz
          (DDG). Es ersetzt das frühere Telemediengesetz (TMG). Die
          Pflichtangaben sind inhaltlich identisch.
        </em>
      </p>
      <p>
        <strong>Luca Wehrle</strong>
        <br />
        Geschwister-Scholl-Straße 17
        <br />
        78333 Stockach
        <br />
        Deutschland
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: +49 159 01494684
        <br />
        E-Mail:{" "}
        <a href="mailto:hallo@nomipost.de">hallo@nomipost.de</a>
      </p>

      <h2>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
      </h2>
      <p>
        Luca Wehrle
        <br />
        Geschwister-Scholl-Straße 17
        <br />
        78333 Stockach
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .
        <br />
        Unsere E-Mail-Adresse findest du oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
        auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werden wir diese Inhalte
        umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf
        deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
        fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalLayout>
  );
}
