/**
 * Email-Versand für Double-Opt-In und Widerruf.
 *
 * Verhalten:
 *  - Wenn RESEND_API_KEY gesetzt ist: Versand über Resend (resend.com)
 *  - Sonst: Fallback auf console.log – die Bestätigungslinks erscheinen
 *    im Server-Log und werden zusätzlich vom API-Endpoint im Dev-Modus
 *    zurückgegeben (nur NODE_ENV !== "production"!)
 *
 * Wichtig (OLG München 29 U 1682/12): Die Bestätigungsmail darf KEINE
 * Werbung enthalten. Sie dient ausschließlich der Verifikation der
 * E-Mail-Adresse. Daher bewusst persönlich, aber sachlich gehalten.
 */

type ConfirmMailInput = {
  to: string;
  parentName: string;
  confirmUrl: string;
  unsubscribeUrl: string;
};

type SendResult = {
  ok: boolean;
  provider: "resend" | "console";
  error?: string;
};

const FROM = process.env.MAIL_FROM || "NomiPost <no-reply@nomipost.de>";
const REPLY_TO = process.env.MAIL_REPLY_TO || "hallo@nomipost.de";

export async function sendConfirmationMail(
  input: ConfirmMailInput
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;

  const subject = "Schön, dass du dabei bist – bitte kurz bestätigen ✦";
  const text = buildPlainText(input);
  const html = buildHtml(input);

  if (!apiKey) {
    console.log("\n[email] Kein RESEND_API_KEY gesetzt – Dev-Fallback aktiv.");
    console.log(`[email] An: ${input.to}`);
    console.log(`[email] Betreff: ${subject}`);
    console.log(`[email] Bestätigungs-Link: ${input.confirmUrl}`);
    console.log(`[email] Abmelde-Link: ${input.unsubscribeUrl}\n`);
    return { ok: true, provider: "console" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [input.to],
        subject,
        text,
        html,
        reply_to: REPLY_TO,
        headers: {
          "List-Unsubscribe": `<${input.unsubscribeUrl}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[email] Resend-Fehler:", res.status, errText);
      return {
        ok: false,
        provider: "resend",
        error: `HTTP ${res.status}`,
      };
    }

    return { ok: true, provider: "resend" };
  } catch (err) {
    console.error("[email] Resend-Fehler:", err);
    return {
      ok: false,
      provider: "resend",
      error: err instanceof Error ? err.message : "unknown",
    };
  }
}

// --- Mail-Inhalte (bewusst KEINE Werbung, OLG München 29 U 1682/12) ---

function buildPlainText({
  parentName,
  confirmUrl,
  unsubscribeUrl,
}: ConfirmMailInput): string {
  return `Hallo ${parentName},

schön, dass du dabei sein willst.

Du hast dich für die NomiPost-Warteliste eingetragen – und wir freuen
uns, dich zu den Ersten zählen zu dürfen. Bitte bestätige kurz deine
E-Mail-Adresse, damit wir dir Bescheid geben können, sobald es losgeht:

${confirmUrl}

Danach hörst du von uns, wenn Nomis erster Brief fertig ist.
Kein Spam, kein Newsletter-Bombardement – nur eine Nachricht,
wenn es wirklich so weit ist.

Falls du dich nicht angemeldet hast, ignoriere diese E-Mail einfach.
Es passiert dann nichts weiter.

Du möchtest dich wieder austragen?
${unsubscribeUrl}

Bis bald,
Luca von NomiPost
`;
}

function buildHtml({
  parentName,
  confirmUrl,
  unsubscribeUrl,
}: ConfirmMailInput): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bitte bestätige deine Anmeldung</title>
</head>
<body style="margin:0; padding:0; background:#FFF8F0; font-family:Georgia,'Times New Roman',serif; color:#3A3A3A; -webkit-font-smoothing:antialiased;">

  <!--[if mso]>
  <table role="presentation" width="560" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>
  <![endif]-->

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px; margin:0 auto;">

    <!-- Logo / Brand -->
    <tr>
      <td style="padding:40px 28px 24px; text-align:center;">
        <img src="https://nomipost.de/images/Logo.png" alt="NomiPost" width="200" height="auto" style="max-width:200px; height:auto;" />
      </td>
    </tr>

    <!-- Goldene Trennlinie -->
    <tr>
      <td style="padding:0 28px;">
        <div style="height:1px; background:linear-gradient(90deg, transparent, #C9A84B60, transparent);"></div>
      </td>
    </tr>

    <!-- Hauptinhalt -->
    <tr>
      <td style="padding:32px 28px 0;">
        <p style="margin:0 0 20px; font-size:20px; line-height:1.4; color:#3B2D5F; font-weight:600;">
          Hallo ${escapeHtml(parentName)},
        </p>

        <p style="margin:0 0 16px; font-size:16px; line-height:1.65; color:#3A3A3A;">
          sch\u00F6n, dass du dabei sein willst.
        </p>

        <p style="margin:0 0 32px; font-size:16px; line-height:1.65; color:#3A3A3A;">
          Du hast dich f\u00FCr die NomiPost-Warteliste eingetragen \u2013 und wir freuen
          uns, dich zu den Ersten z\u00E4hlen zu d\u00FCrfen. Bitte best\u00E4tige kurz deine
          E-Mail-Adresse, damit wir dir Bescheid geben k\u00F6nnen, sobald es
          losgeht:
        </p>
      </td>
    </tr>

    <!-- CTA Button -->
    <tr>
      <td style="padding:0 28px 32px; text-align:center;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
          <tr>
            <td style="background:#3B2D5F; border-radius:999px;">
              <a href="${confirmUrl}" style="display:inline-block; padding:16px 40px; color:#FFF8F0; text-decoration:none; font-weight:600; font-family:Arial,Helvetica,sans-serif; font-size:16px; letter-spacing:0.3px; line-height:1;">
                Anmeldung best\u00E4tigen&nbsp;&nbsp;\u2726
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Nach-dem-Button-Text -->
    <tr>
      <td style="padding:0 28px;">
        <p style="margin:0 0 20px; font-size:15px; line-height:1.65; color:#6B6B6B;">
          Danach h\u00F6rst du von uns, wenn Nomis erster Brief fertig ist.
          Kein Spam, kein Newsletter-Bombardement \u2013 nur eine Nachricht,
          wenn es wirklich so weit ist.
        </p>

        <p style="margin:0 0 8px; font-size:13px; line-height:1.5; color:#9A9A9A;">
          Funktioniert der Button nicht? Kopiere diesen Link in deinen Browser:
        </p>
        <p style="margin:0 0 24px;">
          <a href="${confirmUrl}" style="font-size:12px; color:#3B2D5F; word-break:break-all; text-decoration:underline;">${confirmUrl}</a>
        </p>

        <p style="margin:20px 0 0; font-size:14px; line-height:1.6; color:#6B6B6B; font-style:italic;">
          Falls du dich nicht angemeldet hast, ignoriere diese E-Mail
          einfach \u2013 es passiert dann nichts weiter.
        </p>
      </td>
    </tr>

    <!-- Signatur -->
    <tr>
      <td style="padding:32px 28px 24px;">
        <p style="margin:0; font-size:15px; color:#3A3A3A; line-height:1.5;">
          Bis bald,<br />
          <span style="color:#3B2D5F; font-weight:600;">Luca</span>
          <span style="color:#6B6B6B;"> von NomiPost</span>
        </p>
      </td>
    </tr>

    <!-- Goldene Trennlinie -->
    <tr>
      <td style="padding:0 28px;">
        <div style="height:1px; background:linear-gradient(90deg, transparent, #C9A84B60, transparent);"></div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:20px 28px 40px; text-align:center;">
        <p style="margin:0 0 10px; font-size:12px; color:#9A9A9A; line-height:1.5;">
          Du m\u00F6chtest dich wieder austragen?
          <a href="${unsubscribeUrl}" style="color:#3B2D5F; text-decoration:underline;">Hier abmelden</a>
        </p>
        <p style="margin:0; font-size:11px; color:#B0B0B0; line-height:1.5;">
          NomiPost \u00B7 Luca Wehrle \u00B7 Geschwister-Scholl-Str. 17 \u00B7 78333 Stockach
        </p>
      </td>
    </tr>

  </table>

  <!--[if mso]>
  </td></tr></table>
  <![endif]-->

</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
