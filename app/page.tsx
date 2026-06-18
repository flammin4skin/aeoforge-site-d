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
    publisher: organizationJsonLd(),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What CO₂ level means an apartment needs ventilation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Readings above about 1,000 ppm while people are present usually mean fresh air is lagging. Outdoor air is often 400–450 ppm.",
        },
      },
      {
        "@type": "Question",
        name: "Do air purifiers replace opening windows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HEPA filters remove particles but not most gases. Ventilation lowers CO₂; filtration helps with smoke and dust.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mb-12">
        <p className="text-sm font-medium text-sky-700">Indoor air quality · Apartments</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Understand the air in your apartment
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          CO₂, VOCs, PM₂.₅, and NDIR monitor basics — explained for renters who cannot replace
          building HVAC. Guides cite{" "}
          <a href="https://www.epa.gov/indoor-air-quality-iaq" className="text-sky-700 underline-offset-2 hover:underline" rel="noopener noreferrer" target="_blank">EPA</a>
          ,{" "}
          <a href="https://www.ashrae.org" className="text-sky-700 underline-offset-2 hover:underline" rel="noopener noreferrer" target="_blank">ASHRAE</a>
          , and{" "}
          <a href="https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" className="text-sky-700 underline-offset-2 hover:underline" rel="noopener noreferrer" target="_blank">WHO</a>{" "}
          public guidance.
        </p>
        <p className="mt-4 rounded-lg border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800">
          <strong className="text-slate-900">Direct answer: </strong>
          <RichText text="Apartment indoor air quality improves when you ventilate enough to keep CO₂ near or below about 1,000 ppm while occupied, reduce VOC sources from cooking and cleaning, and run HEPA filtration during wildfire smoke — because small units exchange air slowly without open windows or working exhaust fans ([EPA IAQ basics](https://www.epa.gov/indoor-air-quality-iaq))." />
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
        <h2 className="text-xl font-semibold text-slate-900">What pollutants matter in apartments?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          <RichText text="Indoor air quality (IAQ) is the mix of CO₂, volatile organic compounds (VOCs), PM₂.₅ fine particles, and humidity in a closed unit — ASHRAE ventilation guidance often uses roughly 1,000 ppm CO₂ indoors as a design reference for acceptable dilution when people are present." />
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>CO₂ — exhaled by occupants; rises above 1,000 ppm when ventilation lags</li>
          <li>VOCs — from cleaners, paint, and new furniture; reduced by source control</li>
          <li>PM₂.₅ — smoke and cooking particles; HEPA filters help when outdoor air is unsafe</li>
          <li>Humidity — target roughly 30–50% RH to limit mold risk in small baths and kitchens</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900">Which guide should you read first?</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">What topic-specific guides are available?</h2>
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
          <RichText text="Start with an NDIR CO₂ monitor if stuffiness is the problem — readings above 1,000 ppm usually mean ventilation is lagging behind occupancy. Add PM₂.₅ monitoring if wildfire smoke or urban dust is the concern, because particles require filtration rather than fresh air alone ([EPA air cleaners guidance](https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home))." />
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Place the sensor 3–6 feet high in the room you occupy most (breathing zone).</li>
          <li>Log a 10–15 minute flush ventilation when CO₂ stays above 1,000 ppm.</li>
          <li>Run kitchen exhaust during frying; PM₂.₅ can spike above 200 µg/m³ locally.</li>
        </ol>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900">Key takeaways</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            CO₂ above ~1,000 ppm while occupied is a common signal to ventilate — outdoor air
            is typically 400–450 ppm.
          </li>
          <li>
            VOCs come from cleaners, cooking, and new furniture; 10–15 minute flush ventilation
            beats leaving windows cracked all day.
          </li>
          <li>
            One monitor cannot represent a whole apartment — kitchen PM₂.₅ spikes during
            frying while bedrooms may read under 20 µg/m³.
          </li>
          <li>
            <RichText text="Use HEPA filtration during wildfire smoke; ventilation alone does not remove fine particles ([WHO household air pollution](https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health))." />
          </li>
        </ul>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-medium text-slate-900">What CO₂ level means an apartment needs ventilation?</dt>
            <dd className="mt-1 text-slate-700">
              Readings above about 1,000 ppm while people are present usually mean fresh air is
              lagging. Outdoor air is often 400–450 ppm; brief window flushing for 5–15 minutes
              can reset stuffy bedrooms.
            </dd>
          </div>
          <div>
            <dt className="font-medium text-slate-900">Do air purifiers replace opening windows?</dt>
            <dd className="mt-1 text-slate-700">
              <RichText text="HEPA filters remove particles but not most gases — ventilation lowers CO₂ while filtration helps with smoke ([NIST indoor air research](https://www.nist.gov))." />
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
