/**
 * Einfaches In-Memory Rate-Limiting.
 *
 * Hinweis: Bei Deployment auf Vercel Serverless Functions wird jeder
 * Function-Cold-Start einen neuen Memory-State haben – das bedeutet,
 * die Rate-Limits sind instanzbezogen, nicht global. Für Produktion
 * empfiehlt sich eine echte verteilte Lösung (Upstash Redis,
 * Vercel KV). Für den Validierungs-Use-Case ist das hier aber
 * ausreichend, um einfache Spam- und Missbrauchsversuche abzufangen.
 *
 * Art. 32 DSGVO ("Stand der Technik") fordert angemessene technische
 * Maßnahmen – dazu gehört auch grundlegender Missbrauchsschutz.
 */

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetAt: number;
};

/**
 * Prüft und erhöht einen Zähler für einen bestimmten Schlüssel (z. B. IP).
 * Gibt zurück, ob die Anfrage erlaubt ist.
 */
export function rateLimit({
  key,
  limit,
  windowMs,
}: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: limit - 1, resetAt };
  }

  if (bucket.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: bucket.resetAt,
    };
  }

  bucket.count += 1;
  return {
    allowed: true,
    remaining: limit - bucket.count,
    resetAt: bucket.resetAt,
  };
}

/**
 * Extrahiert die Client-IP aus den Request-Headern.
 * Auf Vercel liefert x-forwarded-for oder x-real-ip die echte Client-IP.
 * Fallback: "unknown" – dann wird der Limit-Key global verwendet.
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for ist eine Liste; die erste IP ist die des Clients
    return forwardedFor.split(",")[0]!.trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

/**
 * Räumt alte Buckets regelmäßig auf, um Memory-Leaks zu vermeiden.
 * Wird beim Modul-Import einmal registriert.
 */
if (typeof globalThis !== "undefined" && !("__nomiRateLimitCleanup" in globalThis)) {
  // @ts-expect-error – eigener Marker auf globalThis
  globalThis.__nomiRateLimitCleanup = setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets.entries()) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }, 60_000);
}
