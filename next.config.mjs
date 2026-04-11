/** @type {import('next').NextConfig} */

/**
 * Security-Headers nach Art. 32 DSGVO ("Stand der Technik") und
 * BSI IT-Grundschutz APP.3.1.
 *
 * CSP ist bewusst streng – wir laden keine externen Skripte, Fonts,
 * Bilder, Frames oder Styles. Alle Ressourcen sind selbst gehostet.
 * Inline-Styles werden erlaubt, weil Next.js sie für kritisches CSS
 * nutzt; Inline-Scripts werden nur mit 'unsafe-inline' erlaubt, was
 * hier bewusst akzeptiert wird (kein Tracking, keine User-Inputs
 * werden als Script ausgeführt).
 */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "off",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Keine "X-Powered-By: Next.js" Info leaken
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
