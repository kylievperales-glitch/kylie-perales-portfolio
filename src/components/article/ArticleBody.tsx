import { Media } from "@/components/ui/Media";
import { PullQuote } from "@/components/ui/PullQuote";
import type { ArticleBlock } from "@/lib/types";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-article">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="mb-6 text-lg leading-relaxed text-ink/90">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="mb-4 mt-12 text-2xl tracking-tight md:text-3xl">
                {block.text}
              </h2>
            );
          case "label":
            return (
              <h3
                key={i}
                className="mb-2 mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted"
              >
                {block.text}
              </h3>
            );
          case "quote":
            return (
              <PullQuote key={i} attribution={block.attribution}>
                {block.text}
              </PullQuote>
            );
          case "image":
            return (
              <figure key={i} className="my-10">
                <Media asset={block.asset} sizes="(min-width: 1024px) 720px, 100vw" />
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
