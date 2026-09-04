import type { Video } from "@/lib/types";
import { YOUTUBE_CHANNEL_URL } from "@/lib/data/videos";

export function VideoCard({
  video,
  featured = false,
  dark = false,
}: {
  video: Video;
  featured?: boolean;
  dark?: boolean;
}) {
  const hasVideo = Boolean(video.youtubeId);
  const youtubeUrl = video.youtubeId
    ? `https://www.youtube.com/watch?v=${video.youtubeId}`
    : undefined;

  return (
    <div className="group">
      <div
        className="relative overflow-hidden bg-charcoal"
        style={{ aspectRatio: "16 / 9" }}
      >
        {hasVideo ? (
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 block h-full w-full"
            aria-label={`Watch ${video.title} on YouTube`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN thumbnail, not an optimizable local/remote asset */}
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>
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

      {hasVideo ? (
        <div className="mt-3 text-right">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-xs uppercase tracking-[0.14em] underline underline-offset-4 transition-colors ${
              dark ? "text-muted-on-ink hover:text-paper" : "text-muted hover:text-ink"
            }`}
          >
            Watch on YouTube
          </a>
        </div>
      ) : null}

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
