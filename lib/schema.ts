import type { Article } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";

export function articleJsonLd(article: Article, pathname: string) {
  const url = `${getSiteUrl()}${pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    dateModified: article.updated,
    author: { "@type": "Organization", name: "Apartment Air Guide" },
    mainEntityOfPage: url,
    about: "Indoor air quality in apartments",
  };
}

export function faqJsonLd(article: Article) {
  if (!article.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
