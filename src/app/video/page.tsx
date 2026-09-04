import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoCard } from "@/components/cards/VideoCard";
import { videos, YOUTUBE_CHANNEL_URL } from "@/lib/data/videos";

export const metadata: Metadata = {
  title: "Video",
  description:
    "Event analysis videos, production, branding, logistics, and audience experience, observed on location.",
};

export default function VideoPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionLabel label="Events, Observed" />
      <h1 className="mt-3 max-w-3xl text-4xl tracking-tight md:text-6xl">
        Events, observed.
      </h1>
      <p className="mt-5 max-w-xl text-base text-muted">
        I attend events and analyze them, production, branding,
        logistics, hospitality, and what actually makes the experience land. This isn&apos;t
        vlogging; it&apos;s the same curiosity that shows up in the strategy work,
        pointed at a room full of people.
      </p>
      <a
        href={YOUTUBE_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm underline underline-offset-4 text-muted hover:text-ink"
      >
        Watch on YouTube ↗
      </a>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        {videos.map((video) => (
          <VideoCard key={video.slug} video={video} />
        ))}
      </div>
    </Container>
  );
}
