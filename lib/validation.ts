import { z } from "zod";

export const waitlistSchema = z.object({
  parentName: z
    .string()
    .trim()
    .min(2, "Bitte gib deinen Namen an.")
    .max(80, "Name ist zu lang."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Bitte gib eine gültige E-Mail-Adresse an.")
    .max(200),
  childName: z.string().trim().max(80).optional().default(""),
  childAge: z.string().trim().min(1, "Bitte wähle ein Alter.").max(40),
  interests: z.array(z.string().max(60)).max(20).default([]),
  priceExpectation: z.string().trim().max(40).optional().default(""),
  importance: z.array(z.string().max(60)).max(20).default([]),
  frequency: z.string().trim().max(40).optional().default(""),
  heardFrom: z.string().trim().max(60).optional().default(""),
  feedback: z.string().trim().max(2000).optional().default(""),

  // DSGVO-Einwilligungen – Pflicht-Einwilligungen müssen zwingend true sein
  consentContact: z.literal(true, {
    errorMap: () => ({
      message:
        "Bitte bestätige die Einwilligung zur Datenspeicherung und E-Mail-Kontaktaufnahme.",
    }),
  }),
  // Sorgeberechtigten-Einwilligung (§ 1626 BGB, Art. 8 DSGVO) – Pflicht,
  // weil wir Daten über das Kind (Alter, ggf. Name) verarbeiten
  consentGuardian: z.literal(true, {
    errorMap: () => ({
      message:
        "Bitte bestätige, dass du sorgeberechtigt bist und in die Verarbeitung der Daten deines Kindes einwilligst.",
    }),
  }),
  consentSurvey: z.boolean().default(false),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
