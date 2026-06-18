/** Site URL for canonicals — set NEXT_PUBLIC_SITE_URL on Vercel after first deploy. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "http://localhost:3010";
}

export const SITE = {
  name: "Apartment Air Guide",
  tagline: "Indoor air quality explained for renters and small apartments",
  niche: "indoor-air-quality",
} as const;
