import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/article-page";
import { articles, getArticle } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    pathname: `/${slug}`,
    title: article.title,
    description: article.description,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticlePage article={article} pathname={`/${slug}`} />;
}
