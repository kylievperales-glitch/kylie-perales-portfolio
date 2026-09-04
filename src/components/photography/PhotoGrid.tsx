"use client";

import { useCallback, useEffect, useState } from "react";
import { Media } from "@/components/ui/Media";
import type { Photo } from "@/lib/types";

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((col) => (
          <div key={col} className="flex flex-col gap-4">
            {photos
              .map((photo, i) => ({ photo, i }))
              .filter(({ i }) => i % 3 === col)
              .map(({ photo, i }) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group block w-full overflow-hidden text-left"
                >
                  <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <Media asset={photo} sizes="(min-width: 1024px) 33vw, 50vw" />
                  </div>
                </button>
              ))}
          </div>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex flex-col bg-ink p-4 md:p-10"
        >
          <div className="flex items-center justify-between text-paper">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-on-ink">
              {openIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="font-mono text-xs uppercase tracking-[0.14em] underline underline-offset-4"
            >
              Close
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="hidden font-mono text-2xl text-paper/70 hover:text-paper md:block"
            >
              ←
            </button>
            <div className="w-full max-w-3xl">
              <Media asset={photos[openIndex]} dark priority sizes="90vw" />
              {photos[openIndex].caption ? (
                <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.1em] text-muted-on-ink">
                  {photos[openIndex].caption}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="hidden font-mono text-2xl text-paper/70 hover:text-paper md:block"
            >
              →
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
