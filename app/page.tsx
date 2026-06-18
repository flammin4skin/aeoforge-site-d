import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { articles, getPillar } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  pathname: "/",
  title: "Indoor Air Quality for Apartments — Guides & Definitions",
  description:
    "Plain-language guides on CO₂, VOCs, ventilation, and air monitors for renters in small apartments. Source-grounded, no invented stats.",
});

export default function HomePage() {
  const pillar = getPillar();
  const supporting = articles.filter((a) => !a.pillar);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <section className="mb-12">
        <p className="text-sm font-medium text-sky-700">Indoor air quality · Apartments</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Understand the air in your apartment
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          CO₂, VOCs, ventilation, and monitors — explained for renters who cannot knock down
          walls or replace the HVAC. Every guide leads with a direct answer and links to EPA and
          ASHRAE public guidance.
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

      <section>
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
    </div>
  );
}
