import Link from "next/link";

import type { Article } from "@/lib/articles";
import { articleJsonLd, faqJsonLd } from "@/lib/schema";

type Props = {
  article: Article;
  pathname: string;
};

export function ArticlePage({ article, pathname }: Props) {
  const faqSchema = faqJsonLd(article);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article, pathname)) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-sky-700">
          Home
        </Link>
        <span aria-hidden> / </span>
        <span className="text-slate-700">{article.title}</span>
      </nav>

      <header className="mb-8">
        {article.pillar ? (
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-sky-700">
            Pillar guide
          </p>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-lg text-slate-600">{article.description}</p>
        <p className="mt-4 rounded-lg border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800">
          <strong className="text-slate-900">Direct answer: </strong>
          {article.directAnswer}
        </p>
        <p className="mt-3 text-sm text-slate-500">Updated {article.updated}</p>
      </header>

      <div className="prose prose-slate max-w-none">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {article.faqs.length > 0 ? (
        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold text-slate-900">Frequently asked questions</h2>
          <dl className="mt-4 space-y-6">
            {article.faqs.map((f) => (
              <div key={f.question}>
                <dt className="font-medium text-slate-900">{f.question}</dt>
                <dd className="mt-1 text-slate-700">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {article.sources.length > 0 ? (
        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Sources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {article.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  className="text-sky-700 underline-offset-2 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
