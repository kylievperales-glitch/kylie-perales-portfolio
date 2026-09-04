import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ArticleBody } from "@/components/article/ArticleBody";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.headline,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);

  return (
    <article>
      <Container className="pb-10 pt-16 md:pb-16 md:pt-24">
        <ArrowLink href="/writing" className="text-muted">
          ← Back to writing
        </ArrowLink>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          {article.category}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {article.headline}
        </h1>
        {article.deck ? (
          <p className="mt-5 max-w-2xl text-xl text-muted">{article.deck}</p>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line py-4 font-mono text-xs uppercase tracking-[0.1em] text-muted">
          <span className="flex items-center gap-1.5">
            <span
              className={`inline-block h-2 w-2 shrink-0 ${
                article.byline ? "bg-ink" : "border border-ink"
              }`}
              aria-hidden
            />
            {article.attribution}
          </span>
          {article.date ? <span>{article.date}</span> : null}
          {article.readTime ? <span>{article.readTime}</span> : null}
          {article.sourceURL ? (
            <a
              href={article.sourceURL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-ink"
            >
              Read on Parlance ↗
            </a>
          ) : null}
        </div>
      </Container>

      <Container className="pb-14">
        <Media asset={article.hero} priority sizes="100vw" className="w-full" />
      </Container>

      <Container className="pb-20">
        <div className="mx-auto max-w-2xl">
          <ArticleBody blocks={article.body} />
        </div>
      </Container>

      {related.length > 0 ? (
        <Container className="border-t border-line py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Related Writing
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      ) : null}
    </article>
  );
}
