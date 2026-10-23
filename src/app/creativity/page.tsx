import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WebsiteScreenshots } from "@/components/creativity/WebsiteScreenshots";
import { VideoCard } from "@/components/cards/VideoCard";
import { PhotoGrid } from "@/components/photography/PhotoGrid";
import { videos, YOUTUBE_CHANNEL_URL } from "@/lib/data/videos";
import { photos, PHOTOGRAPHY_SOURCE_URL } from "@/lib/data/photos";
import { websites } from "@/lib/data/websites";
import { fashionDrawings } from "@/lib/data/fashion-drawings";

export const metadata: Metadata = {
  title: "Creativity",
  description:
    "Video, photography, websites, and fashion drawings, the creative side of Kylie Perales.",
};

const SECTIONS = [
  { id: "websites", label: "Websites" },
  { id: "video", label: "Video" },
  { id: "photography", label: "Photography" },
  { id: "fashion", label: "Fashion Drawings" },
];

export default function CreativityPage() {
  return (
    <>
      {/* INTRO */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <SectionLabel label="Creativity" />
          <h1 className="mt-3 max-w-3xl text-4xl tracking-tight md:text-6xl">
            Things I make for fun.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted">
            The creative side of the work, websites, videos, photographs, and
            fashion drawings.
          </p>
          <nav aria-label="Creativity sections" className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-ink"
              >
                <span className="text-ink/40">0{i + 1}</span> {s.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* WEBSITES */}
      <section id="websites" className="scroll-mt-20 bg-paper-dim py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <SectionLabel index="01" label="Websites" />
              <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">Sites I&apos;ve built.</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {websites.map((site, i) => (
              <Reveal key={site.slug} delay={(i % 2) * 80}>
                <article>
                  <WebsiteScreenshots screenshots={site.screenshots} />
                  {site.year ? (
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      {site.year}
                    </p>
                  ) : null}
                  <h3 className="mt-2 text-2xl tracking-tight">{site.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {site.description}
                  </p>
                  {site.url ? (
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-muted underline underline-offset-4 hover:text-ink"
                    >
                      Visit site ↗
                    </a>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VIDEO */}
      <section
        id="video"
        data-surface="ink"
        className="on-ink scroll-mt-20 bg-ink py-20 text-paper md:py-28"
      >
        <Container>
          <Reveal>
            <div className="flex items-end justify-between border-b border-line-on-ink-soft pb-6">
              <div>
                <SectionLabel index="02" label="Video" className="text-muted-on-ink" dark />
                <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">Events, observed.</h2>
                <p className="mt-3 max-w-lg text-sm text-muted-on-ink">
                  I go to events and end up thinking about production, branding,
                  logistics, and what actually makes the experience memorable. This is
                  where that thinking lives.
                </p>
              </div>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-sm text-muted-on-ink underline underline-offset-4 hover:text-paper md:block"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {videos.map((video, i) => (
              <Reveal key={video.slug} delay={(i % 2) * 80}>
                <VideoCard video={video} dark />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PHOTOGRAPHY */}
      <section id="photography" className="scroll-mt-20 py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between border-b border-line pb-6">
              <div>
                <SectionLabel index="03" label="Photography" />
                <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">Through my lens.</h2>
                <p className="mt-3 max-w-lg text-sm text-muted">
                  A personal creative interest. Click any image to view it larger.
                </p>
              </div>
              <a
                href={PHOTOGRAPHY_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-sm text-muted underline underline-offset-4 hover:text-ink md:block"
              >
                Full set (PDF) ↗
              </a>
            </div>
          </Reveal>

          <div className="mt-12">
            <PhotoGrid photos={photos} />
          </div>
        </Container>
      </section>

      {/* FASHION DRAWINGS */}
      <section id="fashion" className="scroll-mt-20 border-t border-line py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <SectionLabel index="04" label="Fashion Drawings" />
              <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">On paper.</h2>
              <p className="mt-3 max-w-lg text-sm text-muted">
                Sketches from my notebooks. Click any drawing to view it larger.
              </p>
            </div>
          </Reveal>

          <div className="mt-12">
            <PhotoGrid photos={fashionDrawings} />
          </div>
        </Container>
      </section>
    </>
  );
}
