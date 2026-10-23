"use client";

import { useState } from "react";
import { Media } from "@/components/ui/Media";
import type { ImageAsset } from "@/lib/types";

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous screenshot" : "Next screenshot"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-muted transition-colors duration-200 hover:bg-line/40 hover:text-ink"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
        <path
          d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/**
 * One screenshot at a time with previous/next buttons that wrap around. Every
 * slide is framed at the first screenshot's proportions so the card doesn't
 * change height as you click through.
 */
export function WebsiteScreenshots({ screenshots }: { screenshots: ImageAsset[] }) {
  const [index, setIndex] = useState(0);
  const count = screenshots.length;
  const first = screenshots[0];
  const shown: ImageAsset = { ...screenshots[index], width: first.width, height: first.height };

  return (
    <div>
      <Media asset={shown} sizes="(min-width: 768px) 50vw, 100vw" />
      {count > 1 ? (
        <div className="mt-3 flex items-center justify-end gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted" aria-live="polite">
            {index + 1} / {count}
          </span>
          <ArrowButton direction="prev" onClick={() => setIndex((i) => (i - 1 + count) % count)} />
          <ArrowButton direction="next" onClick={() => setIndex((i) => (i + 1) % count)} />
        </div>
      ) : null}
    </div>
  );
}
