import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Datenschutzerklärung – NomiPost",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <LegalLayout
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      lastUpdated="April 2026"
    >
      <div className="notice">
        <strong>Hinweis für den Betreiber:</strong> Alle mit{" "}
        <span className="placeholder">[…]</span> markierten Felder müssen vor
        dem Go-Live mit echten Daten ausgefüllt werden. Dieser Text ist ein
        Template und ersetzt keine Rechtsberatung. Die Prüfung durch eine:n
        Rechtsanwält:in wird dringend empfohlen.
      </div>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und
        anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie
        sonstiger datenschutzrechtlicher Bestimmungen ist:
      </p>
      <p>
        <strong>
          <span className="placeholder">[Vor- und Nachname / Firma]</span>
        </strong>
        <br />
        <span className="placeholder">[Straße und Hausnummer]</span>
        <br />
        <span className="placeholder">[PLZ und Ort]</span>
        <br />
        Deutschland
        <br />
        E-Mail:{" "}
        <span className="placeholder">[datenschutz@deine-domain.de]</span>
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <h3>2.1 Umfang der Verarbeitung personenbezogener Daten</h3>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer:innen
        grundsätzlich nur, soweit dies zur Bereitstellung einer
        funktionsfähigen Website sowie unserer Inhalte und Leistungen
        erforderlich ist. Die Verarbeitung personenbezogener Daten unserer
        Nutzer:innen erfolgt regelmäßig nur nach Einwilligung. Eine Ausnahme
        gilt in solchen Fällen, in denen eine vorherige Einholung einer
        Einwilligung aus tatsächlichen Gründen nicht möglich ist und die
        Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
      </p>

      <h3>2.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
      <p>
        Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
        Einwilligung der betroffenen Person einholen, dient{" "}
        <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> als Rechtsgrundlage.
      </p>
      <p>
        Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
        eines Vertrages, dessen Vertragspartei die betroffene Person ist,
        erforderlich ist, dient <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>{" "}
        als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur
        Durchführung vorvertraglicher Maßnahmen erforderlich sind.
      </p>
      <p>
        Soweit eine Verarbeitung personenbezogener Daten zur Wahrung eines
        berechtigten Interesses unseres Unternehmens oder eines Dritten
        erforderlich ist und die Interessen, Grundrechte und Grundfreiheiten
        des Betroffenen das erstgenannte Interesse nicht überwiegen, dient{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> als Rechtsgrundlage.
      </p>

      <h3>2.3 Datenlöschung und Speicherdauer</h3>
      <p>
        Die personenbezogenen Daten der betroffenen Person werden gelöscht
        oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine
        Speicherung kann darüber hinaus erfolgen, wenn dies durch den
        europäischen oder nationalen Gesetzgeber in unionsrechtlichen
        Verordnungen, Gesetzen oder sonstigen Vorschriften vorgesehen wurde.
        Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine
        durch die genannten Normen vorgeschriebene Speicherfrist abläuft.
      </p>

      <h2>3. Bereitstellung der Website und Erstellung von Logfiles</h2>
      <p>
        Bei jedem Aufruf unserer Website erfasst unser
        Hosting-Dienstleister automatisch Daten und Informationen vom
        Computersystem des aufrufenden Rechners (sogenannte Server-Logfiles).
        Folgende Daten werden hierbei erhoben:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners (in gekürzter/anonymisierter Form)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Website, von der aus der Zugriff erfolgt (Referrer)</li>
        <li>Verwendeter Browser und ggf. das Betriebssystem</li>
      </ul>
      <p>
        Die Verarbeitung der Daten erfolgt auf Grundlage von{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Unser berechtigtes
        Interesse folgt aus der Notwendigkeit, die Stabilität und Sicherheit
        der Website zu gewährleisten. Diese Daten werden nach 14 Tagen
        automatisch gelöscht.
      </p>

      <h3>3.1 Hosting</h3>
      <p>
        Unsere Website wird bei einem externen Dienstleister gehostet:
      </p>
      <p>
        <span className="placeholder">[Hosting-Anbieter, z. B. Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA]</span>
      </p>
      <p>
        Bei der Nutzung eines Hosting-Anbieters mit Sitz in einem Drittland
        erfolgt die Datenübermittlung auf Grundlage von
        Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO. Mit dem
        Anbieter wurde ein Vertrag zur Auftragsverarbeitung (AVV) gemäß Art.
        28 DSGVO abgeschlossen.
      </p>

      <h2>4. Warteliste / Kontaktaufnahme</h2>
      <p>
        Auf unserer Website bieten wir die Möglichkeit, sich in eine
        Warteliste für unser zukünftiges Produkt NomiPost einzutragen. Dabei
        werden folgende Daten erfasst:
      </p>
      <ul>
        <li>Vorname der Eltern</li>
        <li>E-Mail-Adresse</li>
        <li>Vorname des Kindes (optional)</li>
        <li>Alter des Kindes (als Altersgruppe)</li>
        <li>
          Angaben zur Produkt-Entwicklung: Interessen, gewünschte Häufigkeit,
          Preisvorstellung, wichtige Kriterien
        </li>
        <li>Herkunft (wie du auf uns aufmerksam geworden bist)</li>
        <li>Optionales Freitext-Feedback</li>
        <li>Zeitpunkt der Einwilligung (Consent-Timestamp)</li>
      </ul>
      <p>
        <strong>Zweck der Verarbeitung:</strong> Die Daten werden
        ausschließlich dafür verwendet, dich über den Start von NomiPost per
        E-Mail zu informieren und das Produkt auf Basis der Umfrage-Antworten
        weiterzuentwickeln. Eine Weitergabe an Dritte zu Werbezwecken findet
        nicht statt.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf
        Grundlage deiner ausdrücklichen Einwilligung nach{" "}
        <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Wir speichern deine Daten bis zum
        Start des Produkts und bis zu 12 Monate danach, spätestens jedoch bis
        du deine Einwilligung widerrufst.
      </p>
      <p>
        <strong>Widerrufsrecht:</strong> Du kannst deine Einwilligung
        jederzeit formlos per E-Mail an{" "}
        <span className="placeholder">[datenschutz@deine-domain.de]</span>{" "}
        widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Verarbeitung bleibt vom Widerruf unberührt. Nach Widerruf werden
        deine Daten unverzüglich gelöscht.
      </p>

      <h3>4.1 Datenspeicherung bei Supabase</h3>
      <p>
        Wenn du dich in die Warteliste einträgst, werden deine Daten an
        unseren Datenbank-Dienstleister Supabase übermittelt und dort
        gespeichert:
      </p>
      <p>
        <strong>Supabase Inc.</strong>
        <br />
        970 Toa Payoh North #07-04
        <br />
        Singapore 318992
      </p>
      <p>
        Wir nutzen Supabase mit einem Server-Standort in der Europäischen
        Union (Region <span className="placeholder">[eu-central-1 / Frankfurt]</span>
        ), sodass deine Daten innerhalb des Geltungsbereichs der DSGVO
        verarbeitet werden. Mit Supabase wurde ein Vertrag zur
        Auftragsverarbeitung nach Art. 28 DSGVO abgeschlossen.
      </p>

      <h2>5. Einsatz von Cookies</h2>
      <p>
        Unsere Website verwendet keine Tracking- oder Marketing-Cookies. Es
        werden ausschließlich technisch notwendige Cookies eingesetzt, die
        für den Betrieb der Website erforderlich sind:
      </p>
      <ul>
        <li>
          <strong>Admin-Authentifizierung</strong> (<code>nomi_admin_auth</code>):
          Dieses Cookie wird nur gesetzt, wenn sich ein:e Administrator:in im
          geschützten Backend-Bereich anmeldet. Es enthält keine
          Tracking-Informationen und ist httpOnly, SameSite=Lax. Speicherdauer:
          8 Stunden.
        </li>
      </ul>
      <p>
        Die Verwendung dieses technisch notwendigen Cookies erfolgt auf
        Grundlage von <strong>§ 25 Abs. 2 Nr. 2 TTDSG</strong> in Verbindung
        mit <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Eine
        Einwilligungspflicht besteht nicht, da das Cookie unbedingt
        erforderlich ist, um die gewünschte Funktion bereitzustellen.
      </p>

      <h2>6. Schriftarten</h2>
      <p>
        Diese Website verwendet die Schriftarten „Inter", „Fraunces" und
        „Caveat" von Google Fonts. Die Schriftarten werden{" "}
        <strong>nicht</strong> direkt von Google-Servern geladen, sondern
        zum Zeitpunkt des Website-Builds auf unseren eigenen Server kopiert
        und von dort ausgeliefert. Es findet daher{" "}
        <strong>keine Verbindung deines Browsers zu Google</strong> statt,
        wenn du unsere Seite besuchst. Deine IP-Adresse wird nicht an Google
        übermittelt.
      </p>

      <h2>7. Keine Analyse- oder Marketing-Tools</h2>
      <p>
        Wir verwenden auf dieser Website <strong>keine</strong>{" "}
        Analyse-Tools (wie Google Analytics oder Matomo),{" "}
        <strong>keine</strong> Retargeting- oder Conversion-Pixel und{" "}
        <strong>keine</strong> Social-Media-Plugins. Es erfolgt kein
        personenbezogenes Tracking deines Surfverhaltens.
      </p>

      <h2>8. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
        Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
        Eine verschlüsselte Verbindung erkennst du daran, dass die
        Adresszeile des Browsers von „http://" auf „https://" wechselt und
        am Schloss-Symbol in deiner Browserzeile.
      </p>

      <h2>9. Deine Rechte als betroffene Person</h2>
      <p>
        Werden personenbezogene Daten von dir verarbeitet, bist du
        Betroffene:r im Sinne der DSGVO und es stehen dir folgende Rechte
        gegenüber dem Verantwortlichen zu:
      </p>
      <ul>
        <li>
          <strong>Auskunftsrecht</strong> (Art. 15 DSGVO) – Du kannst
          jederzeit Auskunft über die zu deiner Person gespeicherten Daten
          verlangen.
        </li>
        <li>
          <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO) – Du kannst
          die Berichtigung unrichtiger oder die Vervollständigung deiner bei
          uns gespeicherten Daten verlangen.
        </li>
        <li>
          <strong>Recht auf Löschung</strong> (Art. 17 DSGVO) – Du kannst die
          Löschung deiner bei uns gespeicherten Daten verlangen, soweit deren
          Verarbeitung nicht zur Ausübung des Rechts auf freie
          Meinungsäußerung und Information, zur Erfüllung einer rechtlichen
          Verpflichtung, aus Gründen des öffentlichen Interesses oder zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
          erforderlich ist.
        </li>
        <li>
          <strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18
          DSGVO) – Du kannst die Einschränkung der Verarbeitung deiner Daten
          verlangen.
        </li>
        <li>
          <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO) –
          Du kannst verlangen, dass wir dir deine Daten in einem
          strukturierten, gängigen und maschinenlesbaren Format aushändigen.
        </li>
        <li>
          <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO) – Du kannst
          jederzeit Widerspruch gegen die Verarbeitung deiner Daten erheben,
          soweit diese auf einem berechtigten Interesse beruht.
        </li>
        <li>
          <strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3
          DSGVO) – Du kannst eine einmal erteilte Einwilligung jederzeit mit
          Wirkung für die Zukunft widerrufen.
        </li>
        <li>
          <strong>Beschwerderecht bei einer Aufsichtsbehörde</strong> (Art. 77
          DSGVO) – Du hast das Recht, dich bei einer Datenschutz-Aufsichts-
          behörde über unsere Verarbeitung personenbezogener Daten zu
          beschweren.
        </li>
      </ul>
      <p>
        Zur Ausübung deiner Rechte genügt eine formlose E-Mail an{" "}
        <span className="placeholder">[datenschutz@deine-domain.de]</span>.
      </p>

      <h2>10. Zuständige Aufsichtsbehörde</h2>
      <p>
        Die für uns zuständige Aufsichtsbehörde ist{" "}
        <span className="placeholder">
          [zuständige Landes-Datenschutzbehörde gemäß Wohnsitz, z. B. „Der
          Landesbeauftragte für den Datenschutz und die Informationsfreiheit
          Baden-Württemberg"]
        </span>
        . Eine Liste aller Aufsichtsbehörden in Deutschland findest du unter{" "}
        <a
          href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          bfdi.bund.de
        </a>
        .
      </p>

      <h2>11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den oben
        genannten Stand. Durch die Weiterentwicklung unserer Website und
        Angebote darüber oder aufgrund geänderter gesetzlicher
        beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
        Datenschutzerklärung zu ändern. Die jeweils aktuelle
        Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen und
        ausgedruckt werden.
      </p>
    </LegalLayout>
  );
}
