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
 * E-Mail-Adresse. Daher bewusst knapp und sachlich gehalten.
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

const FROM = process.env.MAIL_FROM || "NomiPost <no-reply@example.com>";
const REPLY_TO = process.env.MAIL_REPLY_TO || undefined;

export async function sendConfirmationMail(
  input: ConfirmMailInput
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;

  const subject = "Bitte bestätige deine Anmeldung zur NomiPost-Warteliste";
  const text = buildPlainText(input);
  const html = buildHtml(input);

  if (!apiKey) {
    // Dev-Fallback: Log den Link, damit man ihn im Dev-Modus klicken kann
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
        // One-Click-Unsubscribe-Header (RFC 8058) – hilft gegen Spam-Filter
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

// --- Mail-Inhalte -----------------------------------------------------

function buildPlainText({
  parentName,
  confirmUrl,
  unsubscribeUrl,
}: ConfirmMailInput): string {
  return `Hallo ${parentName},

du hast dich auf unserer Website für die NomiPost-Warteliste eingetragen.
Bitte bestätige deine E-Mail-Adresse, indem du auf den folgenden Link
klickst:

${confirmUrl}

Dieser Link ist 14 Tage gültig. Ohne Bestätigung wird dein Eintrag
automatisch gelöscht.

Falls du dich nicht angemeldet hast, ignoriere diese E-Mail einfach –
es passiert dann nichts weiter.

Du möchtest dich wieder austragen?
${unsubscribeUrl}

Diese E-Mail dient ausschließlich der Bestätigung deiner Einwilligung
und enthält bewusst keine Werbung.

— NomiPost
`;
}

function buildHtml({
  parentName,
  confirmUrl,
  unsubscribeUrl,
}: ConfirmMailInput): string {
  // Bewusst simples, sachliches HTML – keine Produktwerbung, keine
  // Tracking-Pixel, keine externen Bilder, keine Custom-Fonts.
  return `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bitte bestätige deine Anmeldung</title>
  </head>
  <body style="margin:0;padding:24px;background:#FFF8F0;font-family:Georgia,serif;color:#3A3A3A;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;">
      <tr>
        <td style="padding:32px 24px;background:#FFF8F0;border:1px solid #C9A84B;border-radius:4px;">
          <h1 style="margin:0 0 24px;font-size:24px;color:#3B2D5F;">
            Bitte bestätige deine Anmeldung
          </h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.55;">
            Hallo ${escapeHtml(parentName)},
          </p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.55;">
            du hast dich auf unserer Website für die NomiPost-Warteliste
            eingetragen. Bitte bestätige deine E-Mail-Adresse, indem du
            auf den folgenden Button klickst:
          </p>
          <p style="margin:32px 0;text-align:center;">
            <a href="${confirmUrl}" style="display:inline-block;padding:14px 28px;background:#3B2D5F;color:#FFF8F0;text-decoration:none;border-radius:999px;font-weight:600;font-family:Arial,sans-serif;font-size:15px;">
              Anmeldung bestätigen
            </a>
          </p>
          <p style="margin:0 0 16px;font-size:14px;line-height:1.55;color:#6B6B6B;">
            Funktioniert der Button nicht? Kopiere diesen Link in deinen
            Browser:<br />
            <a href="${confirmUrl}" style="color:#3B2D5F;word-break:break-all;">${confirmUrl}</a>
          </p>
          <p style="margin:24px 0 0;font-size:14px;line-height:1.55;color:#6B6B6B;">
            Dieser Link ist 14 Tage gültig. Ohne Bestätigung wird dein
            Eintrag automatisch gelöscht.
          </p>
          <p style="margin:24px 0 0;font-size:14px;line-height:1.55;color:#6B6B6B;">
            Falls du dich nicht angemeldet hast, ignoriere diese E-Mail
            einfach – es passiert dann nichts weiter.
          </p>
          <hr style="border:none;border-top:1px solid #C9A84B33;margin:32px 0;" />
          <p style="margin:0;font-size:12px;line-height:1.5;color:#6B6B6B;">
            Diese E-Mail dient ausschließlich der Bestätigung deiner
            Einwilligung und enthält bewusst keine Werbung.
          </p>
          <p style="margin:12px 0 0;font-size:12px;line-height:1.5;color:#6B6B6B;">
            Du möchtest dich wieder austragen?
            <a href="${unsubscribeUrl}" style="color:#3B2D5F;">Hier abmelden</a>.
          </p>
        </td>
      </tr>
    </table>
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
