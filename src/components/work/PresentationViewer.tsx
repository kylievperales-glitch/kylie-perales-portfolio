"use client";

import { useState } from "react";
import { Media } from "@/components/ui/Media";
import type { Presentation } from "@/lib/types";

export function PresentationViewer({ presentation }: { presentation: Presentation }) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const slide = presentation.slides[index];
  const total = presentation.slides.length;

  const go = (delta: number) => {
    setIndex((i) => Math.min(Math.max(i + delta, 0), total - 1));
  };

  return (
    <div>
      <div
        className={
          fullscreen
            ? "fixed inset-0 z-[100] flex flex-col bg-ink p-4 md:p-10"
            : "relative"
        }
      >
        {fullscreen ? (
          <div className="mb-4 flex items-center justify-between text-paper">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-on-ink">
              {presentation.title}
            </p>
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="font-mono text-xs uppercase tracking-[0.14em] underline underline-offset-4"
            >
              Close
            </button>
          </div>
        ) : null}

        <div className={fullscreen ? "flex flex-1 items-center justify-center" : ""}>
          <Media
            asset={slide}
            dark={fullscreen}
            className={fullscreen ? "w-full max-w-5xl" : "w-full"}
            sizes="(min-width: 1024px) 70vw, 100vw"
            priority={index === 0}
          />
        </div>

        <div
          className={`mt-4 flex items-center justify-between ${
            fullscreen ? "text-paper" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={index === 0}
            className="font-mono text-xs uppercase tracking-[0.14em] disabled:opacity-30"
          >
            ← Prev
          </button>

          <span className="font-mono text-xs tracking-[0.14em] text-muted">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === total - 1}
              className="font-mono text-xs uppercase tracking-[0.14em] disabled:opacity-30"
            >
              Next →
            </button>
            {!fullscreen ? (
              <button
                type="button"
                onClick={() => setFullscreen(true)}
                className="hidden font-mono text-xs uppercase tracking-[0.14em] underline underline-offset-4 md:inline"
              >
                Fullscreen
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {presentation.pdfURL ? (
        <a
          href={presentation.pdfURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-medium tracking-tight transition-colors hover:bg-ink hover:text-paper"
        >
          Open Presentation (PDF)
        </a>
      ) : null}
    </div>
  );
}
