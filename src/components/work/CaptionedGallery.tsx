"use client";

import { useState } from "react";
import { Media } from "@/components/ui/Media";
import type { ImageAsset } from "@/lib/types";

function GalleryItem({ asset }: { asset: ImageAsset }) {
  const [flipped, setFlipped] = useState(false);
  const shown: ImageAsset =
    flipped && asset.flipSrc
      ? { ...asset, src: asset.flipSrc, alt: asset.flipAlt ?? asset.alt }
      : asset;

  return (
    <div className="mb-6">
      <Media asset={shown} sizes="(min-width: 640px) 50vw, 100vw" />
      {asset.caption ? (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {asset.caption}
        </p>
      ) : null}
      {asset.flipSrc ? (
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => setFlipped((v) => !v)}
            aria-label={flipped ? "Show previous page" : "Show next page"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper-dim text-muted transition-colors duration-200 hover:bg-line/40 hover:text-ink"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}

/**
 * Two explicit columns (alternating left/right by source order) rather than
 * CSS `columns` auto-balancing — so an item's position is fully determined
 * by where it sits in the data array, not by the browser's height heuristic.
 * On mobile everything collapses to one column in source order.
 */
export function CaptionedGallery({ items }: { items: ImageAsset[] }) {
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="sm:hidden">
        {items.map((asset, i) => (
          <GalleryItem key={i} asset={asset} />
        ))}
      </div>
      <div className="hidden sm:block">
        {left.map((asset, i) => (
          <GalleryItem key={i} asset={asset} />
        ))}
      </div>
      <div className="hidden sm:block">
        {right.map((asset, i) => (
          <GalleryItem key={i} asset={asset} />
        ))}
      </div>
    </div>
  );
}
