"use client";

import { useState } from "react";
import type { TimelineEntry } from "@/lib/types";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const [openYear, setOpenYear] = useState<string | null>(null);

  return (
    <ol className="flex flex-col divide-y divide-line border-t border-line">
      {entries.map((entry) => {
        const open = openYear === entry.year;
        return (
          <li key={entry.year}>
            <button
              type="button"
              onClick={() => setOpenYear(open ? null : entry.year)}
              aria-expanded={open}
              className="flex w-full items-baseline gap-6 py-5 text-left md:gap-10"
            >
              <span className="font-mono text-sm text-muted">{entry.year}</span>
              <span className="text-lg tracking-tight md:text-xl">{entry.label}</span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="max-w-2xl pb-6 pl-[calc(3ch+1.5rem)] text-base leading-relaxed text-muted md:pl-[calc(3ch+2.5rem)]">
                {entry.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
