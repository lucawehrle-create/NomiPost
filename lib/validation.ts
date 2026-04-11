import { z } from "zod";

/**
 * Schritt 1 – Minimale Pflichtangaben für die Warteliste.
 * Ziel: Max. Conversion. Nur was wirklich nötig ist.
 */
export const waitlistSchema = z.object({
  parentName: z
    .string()
    .trim()
    .min(2, "Bitte gib deinen Vornamen an.")
    .max(80, "Name ist zu lang."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Bitte gib eine gültige E-Mail-Adresse an.")
    .max(200),
  consentContact: z.literal(true, {
    errorMap: () => ({
      message:
        "Bitte bestätige die Einwilligung zur Datenspeicherung und E-Mail-Kontaktaufnahme.",
    }),
  }),
});

/**
 * Schritt 2 – Optionales Bonus-Survey. Wird per Token einem
 * existierenden Eintrag zugeordnet und nachträglich gespeichert.
 * Alle Felder freiwillig – der User bleibt auf der Warteliste,
 * auch wenn er "Überspringen" drückt.
 */
export const surveySchema = z.object({
  token: z.string().trim().min(8).max(100),
  wishes: z.string().trim().max(2000).optional().default(""),
  priceExpectation: z.string().trim().max(40).optional().default(""),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
export type SurveyInput = z.infer<typeof surveySchema>;
