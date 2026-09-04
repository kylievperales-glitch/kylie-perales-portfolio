import Link from "next/link";
import { Media } from "@/components/ui/Media";
import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  const isPlaceholder = article.status === "placeholder";

  return (
    <Link href={`/writing/${article.slug}`} className="group block">
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <Media asset={article.hero} sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>
      </div>

      <div className="mt-4 border-t border-line pt-4">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{article.category}</span>
          {article.date ? <span>{article.date}</span> : null}
        </div>
        <h3
          className={`mt-2 text-lg leading-snug tracking-tight md:text-xl ${
            isPlaceholder ? "text-muted" : ""
          }`}
        >
          {article.headline}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted">{article.excerpt}</p>
        <div className="mt-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          <span className="flex items-center gap-1.5">
            <span
              className={`inline-block h-2 w-2 shrink-0 ${
                article.byline ? "bg-ink" : "border border-ink"
              }`}
              aria-hidden
            />
            {article.attribution}
          </span>
          {article.readTime ? (
            <>
              <span aria-hidden>·</span>
              <span>{article.readTime}</span>
            </>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
