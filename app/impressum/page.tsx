import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Impressum – NomiPost",
  description: "Anbieterkennzeichnung nach § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Impressum"
      lastUpdated="April 2026"
    >
      <div className="notice">
        <strong>Hinweis für den Betreiber:</strong> Alle mit{" "}
        <span className="placeholder">[…]</span> markierten Felder müssen vor
        dem Go-Live mit echten Daten ausgefüllt werden. Dies ist ein Template,
        keine Rechtsberatung. Im Zweifel bitte eine:n Rechtsanwält:in
        konsultieren.
      </div>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        <strong>
          <span className="placeholder">[Vor- und Nachname bzw. Firmenname]</span>
        </strong>
        <br />
        <span className="placeholder">[Straße und Hausnummer]</span>
        <br />
        <span className="placeholder">[PLZ und Ort]</span>
        <br />
        Deutschland
      </p>

      <h3>Vertreten durch</h3>
      <p>
        <span className="placeholder">[Vertretungsberechtigte:r, nur bei juristischen Personen, z. B. GmbH, UG]</span>
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: <span className="placeholder">[optional]</span>
        <br />
        E-Mail:{" "}
        <span className="placeholder">[hallo@deine-domain.de]</span>
      </p>

      <h3>Registereintrag</h3>
      <p>
        <span className="placeholder">
          [Nur bei eingetragenen Unternehmen: Handelsregister, Registergericht,
          Registernummer]
        </span>
      </p>

      <h3>Umsatzsteuer-ID</h3>
      <p>
        <span className="placeholder">
          [Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz,
          sofern vorhanden]
        </span>
      </p>

      <h2>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
      </h2>
      <p>
        <span className="placeholder">[Vor- und Nachname]</span>
        <br />
        <span className="placeholder">[Anschrift wie oben]</span>
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
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
        auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
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
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalLayout>
  );
}
