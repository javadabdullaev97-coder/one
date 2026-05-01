import { getAllPublicationSlugs } from "@/lib/publications";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return getAllPublicationSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticlePageClient slug={slug} />;
}
