"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { PhotoGrid } from "@/components/photography/PhotoGrid";
import type { DriveItem } from "@/lib/data/drives-and-values";
import type { Photo } from "@/lib/types";
import {
  BuildIcon,
  MomentumIcon,
  UnderstandIcon,
  AmbitionIcon,
  PeopleIcon,
  ExperiencesIcon,
} from "@/components/ui/DriveIcons";

const DRIVE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "Building something from nothing": BuildIcon,
  Momentum: MomentumIcon,
  "Understanding why things work": UnderstandIcon,
  Ambition: AmbitionIcon,
  People: PeopleIcon,
  Experiences: ExperiencesIcon,
};

const DISPLAY_ORDER = [
  "Building something from nothing",
  "Momentum",
  "Understanding why things work",
  "Ambition",
  "People",
  "Experiences",
];

export function WhatDrivesMe({
  items,
  peoplePhotos,
}: {
  items: DriveItem[];
  peoplePhotos: Photo[];
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const ordered = DISPLAY_ORDER.map((title) => items.find((item) => item.title === title)).filter(
    (item): item is DriveItem => Boolean(item)
  );

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {ordered.map((item) => {
          const Icon = DRIVE_ICONS[item.title];
          const isPeople = item.title === "People";
          return (
            <div key={item.title} className="border-t border-line-on-ink-soft pt-5">
              {Icon ? <Icon className="h-10 w-10 text-paper" /> : null}
              <h3 className="mt-4 text-xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-on-ink">{item.body}</p>
              {isPeople ? (
                <button
                  type="button"
                  onClick={() => setGalleryOpen((v) => !v)}
                  aria-expanded={galleryOpen}
                  className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-paper underline underline-offset-4 hover:text-muted-on-ink"
                >
                  {galleryOpen ? "Hide gallery" : "Click to see gallery"}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          galleryOpen ? "mt-16 max-h-[6000px] opacity-100 md:mt-20" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-line-on-ink-soft pt-12">
          <PhotoGrid photos={peoplePhotos} />
        </div>
      </div>
    </>
  );
}
