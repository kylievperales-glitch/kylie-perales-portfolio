"use client";

import { useState } from "react";
import type { Video } from "@/lib/types";
import { YOUTUBE_CHANNEL_URL } from "@/lib/data/videos";

export function VideoCard({ video, featured = false }: { video: Video; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(video.youtubeId);

  return (
    <div className="group">
      <div
        className="relative overflow-hidden bg-charcoal"
        style={{ aspectRatio: "16 / 9" }}
      >
        {playing && video.youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerate-compute; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : hasVideo ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex h-full w-full items-center justify-center"
            aria-label={`Play ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN thumbnail, not an optimizable local/remote asset */}
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="relative z-10 h-14 w-14 text-paper/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110"
            >
              <polygon points="7,4 20,12 7,20" fill="currentColor" />
            </svg>
          </button>
        ) : (
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 border border-line-on-ink text-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(247,245,241,0.05) 0px, rgba(247,245,241,0.05) 1px, transparent 1px, transparent 14px)",
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-on-ink">
              [ ADD YOUTUBE VIDEO ID ]
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper underline underline-offset-4">
              View channel →
            </span>
          </a>
        )}
      </div>

      <div className="mt-4 border-t border-line pt-4">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>{video.category ?? "Event Analysis"}</span>
          {video.date ? <span>{video.date}</span> : null}
        </div>
        <h3
          className={`mt-2 tracking-tight ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}
        >
          {video.title}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
          {video.event}
        </p>
        <p className="mt-2 max-w-lg text-sm text-muted">{video.description}</p>
        {video.takeaway ? (
          <p className="mt-3 border-l-2 border-ink pl-3 text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Takeaway,{" "}
            </span>
            {video.takeaway}
          </p>
        ) : null}
      </div>
    </div>
  );
}
