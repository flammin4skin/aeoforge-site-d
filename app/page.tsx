import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { articles, getPillar } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { RichText } from "@/lib/rich-text";
import { getSiteUrl, SITE } from "@/lib/site";
import { organizationJsonLd } from "@/lib/schema";

const HOME_UPDATED = "2026-06-18";

export const metadata = pageMetadata({
  pathname: "/",
  title: "Indoor Air Quality for Apartments — Guides & Definitions",
  description:
    "Plain-language guides on CO₂, VOCs, ventilation, and air monitors for renters in small apartments. Source-grounded, no invented stats.",
  modified: HOME_UPDATED,
});

export default function HomePage() {
  const pillar = getPillar();
  const supporting = articles.filter((a) => !a.pillar);
  const siteUrl = getSiteUrl();
  const modifiedIso = `${HOME_UPDATED}T12:00:00.000Z`;

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: siteUrl,
    description: SITE.tagline,
    dateModified: modifiedIso,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <section className="mb-12">
        <p className="text-sm font-medium text-sky-700">Indoor air quality · Apartments</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Understand the air in your apartment
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          CO₂, VOCs, ventilation, and monitors — explained for renters who cannot knock down
          walls or replace the HVAC. Every guide leads with a direct answer and links to{" "}
          <a
            href="https://www.epa.gov/indoor-air-quality-iaq"
            className="text-sky-700 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            EPA
          </a>{" "}
          and{" "}
          <a
            href="https://www.ashrae.org"
            className="text-sky-700 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            ASHRAE
          </a>{" "}
          public guidance.
        </p>
        <p className="mt-4 rounded-lg border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800">
          <strong className="text-slate-900">Direct answer: </strong>
          <RichText text="Apartment indoor air quality improves when you ventilate enough to keep CO₂ near or below about 1,000 ppm while occupied, reduce VOC sources from cooking and cleaning, and filter particles during smoke events — because small units exchange air slowly without open windows or working exhaust fans ([EPA IAQ basics](https://www.epa.gov/indoor-air-quality-iaq))." />
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Last updated{" "}
          <time dateTime={modifiedIso}>
            {new Date(modifiedIso).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>{" "}
          (reviewed 2026)
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Start here
        </h2>
        <Link
          href={`/${pillar.slug}`}
          className="mt-4 flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md"
        >
          <div>
            <p className="text-xs font-medium uppercase text-sky-700">Pillar guide</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">{pillar.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
          </div>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-sky-600" aria-hidden />
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Supporting guides
        </h2>
        <ul className="mt-4 space-y-3">
          {supporting.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/${a.slug}`}
                className="block rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-sky-200 hover:bg-sky-50/50"
              >
                <h3 className="font-medium text-slate-900">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{a.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900">
          What should renters measure first?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          <RichText text="Start with CO₂ if stuffiness is the problem — readings above 1,000 ppm usually mean ventilation is lagging behind occupancy. Add PM₂.₅ monitoring if wildfire smoke or urban dust is the concern, because particles require filtration rather than fresh air alone ([EPA air cleaners guidance](https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home))." />
        </p>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900">Key takeaways</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            CO₂ above ~1,000 ppm while occupied is a common signal to ventilate — outdoor air
            is typically 400–450 ppm.
          </li>
          <li>
            VOCs come from cleaners, cooking, and new furniture; source control plus 10–15
            minute flush ventilation beats masking odors.
          </li>
          <li>
            One monitor cannot represent a whole apartment — kitchen PM₂.₅ spikes during
            frying while bedrooms may read clean.
          </li>
          <li>
            <RichText text="Use HEPA filtration during wildfire smoke; ventilation alone does not remove fine particles ([WHO household air pollution](https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health))." />
          </li>
        </ul>
      </section>
    </div>
  );
}
