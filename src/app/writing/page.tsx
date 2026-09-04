import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Eight articles written for Parlance, seven ghostwritten, one under Kylie Perales's own name, presented as an editorial archive.",
};

export default function WritingPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionLabel label="Writing" />
      <h1 className="mt-3 max-w-3xl text-4xl tracking-tight md:text-6xl">
        Things I&apos;ve written.
      </h1>
      <p className="mt-5 max-w-xl text-base text-muted">
        Eight articles written for Parlance as part of a broader marketing role. Seven
        were ghostwritten for the Parlance team; one was published under my own name.
        Each is labeled below rather than presented as independent publishing.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        <span className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-ink" aria-hidden />
          Under my byline
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 border border-ink" aria-hidden />
          Ghostwritten for Parlance
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
