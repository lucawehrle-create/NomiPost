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
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und
        anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie
        sonstiger datenschutzrechtlicher Bestimmungen ist:
      </p>
      <p>
        <strong>Luca Wehrle</strong>
        <br />
        Geschwister-Scholl-Straße 17
        <br />
        78333 Stockach
        <br />
        Deutschland
        <br />
        E-Mail: <a href="mailto:hallo@nomipost.de">hallo@nomipost.de</a>
        <br />
        Telefon: +49 159 01494684
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <h3>2.1 Umfang der Verarbeitung personenbezogener Daten</h3>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer:innen
        grundsätzlich nur, soweit dies zur Bereitstellung einer
        funktionsfähigen Website sowie unserer Inhalte und Leistungen
        erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
        regelmäßig nur nach Einwilligung der betroffenen Person. Eine Ausnahme
        gilt in Fällen, in denen eine vorherige Einholung einer Einwilligung
        aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der
        Daten durch gesetzliche Vorschriften gestattet ist.
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
        der betroffenen Person das erstgenannte Interesse nicht überwiegen,
        dient <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> als Rechtsgrundlage.
      </p>

      <h3>2.3 Datenlöschung und Speicherdauer (Löschkonzept)</h3>
      <p>
        Die personenbezogenen Daten der betroffenen Person werden gelöscht
        oder gesperrt, sobald der Zweck der Speicherung entfällt. Konkret
        gelten folgende Löschfristen:
      </p>
      <ul>
        <li>
          <strong>Warteliste-Einträge:</strong> Sollte das Produkt NomiPost
          bis zum <strong>31.12.2026</strong> nicht starten, werden alle
          Warteliste-Daten automatisch gelöscht. Bei erfolgreichem
          Produktstart werden die Daten bis zu 12 Monate nach Versand der
          letzten Launch-Benachrichtigung gespeichert.
        </li>
        <li>
          <strong>Nicht bestätigte Anmeldungen:</strong> Einträge, bei denen
          innerhalb von 14 Tagen keine Bestätigung per
          Double-Opt-In-Link erfolgt, werden automatisch gelöscht.
        </li>
        <li>
          <strong>Server-Logfiles:</strong> Nach maximal 14 Tagen
          automatische Löschung durch unseren Hosting-Anbieter (siehe
          Abschnitt 3).
        </li>
        <li>
          <strong>Widerruf:</strong> Bei Widerruf der Einwilligung sofortige
          Löschung binnen 72 Stunden.
        </li>
      </ul>

      <h2>3. Bereitstellung der Website und Erstellung von Logfiles</h2>
      <p>
        Bei jedem Aufruf unserer Website erfasst unser Hosting-Dienstleister
        automatisch Daten und Informationen vom Computersystem des
        aufrufenden Rechners (sogenannte Server-Logfiles). Folgende Daten
        werden hierbei erhoben:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Website, von der aus der Zugriff erfolgt (Referrer)</li>
        <li>Verwendeter Browser und ggf. das Betriebssystem</li>
      </ul>
      <p>
        Die Verarbeitung der Daten erfolgt auf Grundlage von{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Unser berechtigtes
        Interesse folgt aus der Notwendigkeit, die Stabilität und Sicherheit
        der Website zu gewährleisten sowie Missbrauch abzuwehren. Diese
        Logfiles werden nach maximal 14 Tagen automatisch gelöscht.
      </p>

      <h3>3.1 Hosting bei IONOS</h3>
      <p>
        Unsere Website wird bei folgendem externen Dienstleister gehostet:
      </p>
      <p>
        <strong>IONOS SE</strong>
        <br />
        Elgendorfer Straße 57
        <br />
        56410 Montabaur
        <br />
        Deutschland
      </p>
      <p>
        IONOS speichert beim Aufruf der Website die unter Abschnitt 3
        genannten Server-Logfiles. Die Server von IONOS stehen in
        Deutschland, eine Datenübermittlung in Drittländer findet{" "}
        <strong>nicht</strong> statt. Mit IONOS wurde ein Vertrag zur
        Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO abgeschlossen.
      </p>
      <p>
        Weitere Informationen findest du in der{" "}
        <a
          href="https://www.ionos.de/terms-gtc/terms-privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von IONOS
        </a>
        .
      </p>

      <h2>4. Warteliste mit Double-Opt-In-Verfahren</h2>
      <p>
        Auf unserer Website bieten wir die Möglichkeit, sich in eine
        Warteliste für unser zukünftiges Produkt NomiPost einzutragen. Wir
        verwenden dafür das gesetzlich vorgesehene{" "}
        <strong>Double-Opt-In-Verfahren</strong> (§ 7 Abs. 2 UWG, Art. 7
        DSGVO).
      </p>
      <p>Der Ablauf:</p>
      <ul>
        <li>
          <strong>Schritt 1:</strong> Du trägst deine Daten in das Formular
          ein und bestätigst die Einwilligung.
        </li>
        <li>
          <strong>Schritt 2:</strong> Wir senden dir eine E-Mail mit einem
          Bestätigungs-Link an die von dir angegebene Adresse.
        </li>
        <li>
          <strong>Schritt 3:</strong> Erst nach Klick auf den Link wird dein
          Eintrag aktiviert und wir dürfen dich zum Produktstart informieren.
        </li>
      </ul>
      <p>Folgende Daten werden dabei erfasst:</p>
      <ul>
        <li>
          <strong>Pflichtangaben:</strong> Dein Vorname, deine E-Mail-Adresse
        </li>
        <li>
          <strong>Freiwillig (Bonus-Umfrage):</strong> Wunsch-Feedback
          („Was würde NomiPost für dich perfekt machen?"), Preisvorstellung
        </li>
        <li>
          <strong>Einwilligungs-Nachweis (zwingend erforderlich):</strong>{" "}
          Zeitstempel der Eingabe, IP-Adresse bei Eingabe, Zeitstempel des
          Confirmation-Klicks, IP-Adresse beim Confirmation-Klick, verwendeter
          Token, exakter Wortlaut der Einwilligung (Text-Version)
        </li>
      </ul>
      <p>
        Wir erheben <strong>keine personenbezogenen Daten über Kinder</strong>.
        Weder Name, Alter noch Interessen deines Kindes werden gespeichert.
        Die angebotene Umfrage ist ausschließlich für dich als Elternteil.
      </p>
      <p>
        <strong>Zweck der Verarbeitung:</strong> Die Kontaktdaten werden
        ausschließlich dafür verwendet, dich über den Start von NomiPost per
        E-Mail zu informieren. Die freiwilligen Umfrage-Antworten werden für
        die Produktentwicklung ausgewertet. Eine Weitergabe an Dritte zu
        Werbezwecken findet nicht statt.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf
        Grundlage deiner ausdrücklichen Einwilligung nach{" "}
        <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> i.V.m. § 7 Abs. 2 Nr. 3
        UWG. Die Speicherung der IP-Adressen und Zeitstempel zum Nachweis der
        Einwilligung erfolgt auf Grundlage unseres berechtigten Interesses
        nach Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 7 Abs. 1 DSGVO
        (Nachweispflicht für die Einwilligung).
      </p>
      <p>
        <strong>Speicherdauer:</strong> Siehe Löschkonzept in Abschnitt 2.3.
        Spätester automatischer Löschtermin bei ausbleibendem Produktstart:{" "}
        <strong>31.12.2026</strong>.
      </p>
      <p>
        <strong>Widerrufsrecht:</strong> Du kannst deine Einwilligung
        jederzeit formlos widerrufen:
      </p>
      <ul>
        <li>
          Über den <strong>Abmelde-Link</strong> in jeder E-Mail, die wir dir
          senden (One-Click-Unsubscribe)
        </li>
        <li>
          Per E-Mail an{" "}
          <a href="mailto:hallo@nomipost.de">hallo@nomipost.de</a>
        </li>
        <li>
          Über die Abmelde-Seite <a href="/abmelden">/abmelden</a>
        </li>
      </ul>
      <p>
        Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt
        vom Widerruf unberührt. Nach Widerruf werden deine Daten unverzüglich
        gelöscht.
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
        Union (Region <strong>eu-central-1 / Frankfurt, Deutschland</strong>),
        sodass deine Daten innerhalb des Geltungsbereichs der DSGVO
        verarbeitet werden. Mit Supabase wurde ein Vertrag zur
        Auftragsverarbeitung nach Art. 28 DSGVO abgeschlossen. Details siehe{" "}
        <a
          href="https://supabase.com/legal/dpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Supabase Data Processing Addendum
        </a>
        .
      </p>

      <h2>5. Einsatz von Cookies</h2>
      <p>
        Unsere Website verwendet <strong>keine</strong> Tracking-,
        Analytics- oder Marketing-Cookies. Es werden ausschließlich technisch
        notwendige Cookies eingesetzt, die für den Betrieb der Website
        erforderlich sind:
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
        Grundlage von{" "}
        <strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong> (Telekommunikation-
        Digitale-Dienste-Datenschutz-Gesetz, ehemals TTDSG, seit 14.05.2024
        umbenannt) in Verbindung mit{" "}
        <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Eine Einwilligungspflicht
        besteht nicht, da das Cookie unbedingt erforderlich ist, um die
        gewünschte Funktion bereitzustellen. Ein Cookie-Banner ist daher auf
        dieser Website nicht erforderlich.
      </p>

      <h2>6. Schriftarten</h2>
      <p>
        Diese Website verwendet die Schriftarten „Inter", „Fraunces" und
        „Caveat". Die Schriftarten werden{" "}
        <strong>vollständig selbst gehostet</strong> und aus unseren eigenen
        Server-Ressourcen ausgeliefert. Es findet{" "}
        <strong>keine Verbindung deines Browsers zu Google</strong> oder
        anderen Drittanbietern statt, wenn du unsere Seite besuchst. Deine
        IP-Adresse wird nicht an Google übermittelt (vgl. LG München I, Urteil
        vom 20.01.2022, Az. 3 O 17493/20).
      </p>

      <h2>7. Keine Analyse- oder Marketing-Tools</h2>
      <p>
        Wir verwenden auf dieser Website <strong>keine</strong>{" "}
        Analyse-Tools (wie Google Analytics oder Matomo),{" "}
        <strong>keine</strong> Retargeting- oder Conversion-Pixel,{" "}
        <strong>keine</strong> Social-Media-Plugins und{" "}
        <strong>keine</strong> externen Video-, Karten- oder Fonts-Einbindungen.
        Es erfolgt kein personenbezogenes Tracking deines Surfverhaltens.
      </p>

      <h2>8. SSL-/TLS-Verschlüsselung und Sicherheit</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
        Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
        Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile
        des Browsers von „http://" auf „https://" wechselt und am Schloss-
        Symbol in der Browserzeile. Zusätzlich setzen wir technische und
        organisatorische Maßnahmen nach Art. 32 DSGVO ein (Security-Headers,
        Rate-Limiting, Zugriffskontrolle).
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
          Löschung deiner bei uns gespeicherten Daten verlangen.
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

      <div className="notice">
        <h3 style={{ marginTop: 0 }}>
          Widerspruchsrecht nach Art. 21 DSGVO
        </h3>
        <p>
          <strong>
            Du hast das Recht, aus Gründen, die sich aus deiner besonderen
            Situation ergeben, jederzeit gegen die Verarbeitung dich
            betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs.
            1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
          </strong>
        </p>
        <p>
          Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei
          denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
          nachweisen, die deine Interessen, Rechte und Freiheiten überwiegen,
          oder die Verarbeitung dient der Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen.
        </p>
      </div>

      <p>
        Zur Ausübung deiner Rechte genügt eine formlose E-Mail an{" "}
        <a href="mailto:hallo@nomipost.de">hallo@nomipost.de</a>.
      </p>

      <h2>10. Zuständige Aufsichtsbehörde</h2>
      <p>
        Die für uns zuständige Aufsichtsbehörde ist:
      </p>
      <p>
        <strong>
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
          Baden-Württemberg (LfDI BW)
        </strong>
        <br />
        Lautenschlagerstraße 20
        <br />
        70173 Stuttgart
        <br />
        Deutschland
        <br />
        Telefon: +49 711 615541-0
        <br />
        E-Mail:{" "}
        <a href="mailto:poststelle@lfdi.bwl.de">poststelle@lfdi.bwl.de</a>
        <br />
        Website:{" "}
        <a
          href="https://www.baden-wuerttemberg.datenschutz.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.baden-wuerttemberg.datenschutz.de
        </a>
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
