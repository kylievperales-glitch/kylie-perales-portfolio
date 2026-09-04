import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { VideoCard } from "@/components/cards/VideoCard";
import { getFeaturedProjects, getProjectBySlug } from "@/lib/data/projects";
import { getPresentationBySlug } from "@/lib/data/presentations";
import { articles } from "@/lib/data/articles";
import { videos } from "@/lib/data/videos";
import { photos } from "@/lib/data/photos";
import { whatDrivesMe, coreValues } from "@/lib/data/drives-and-values";
import { curiosities } from "@/lib/data/curiosities";
import { peoplePhotos } from "@/lib/data/people";
import { WhatDrivesMe } from "@/components/about/WhatDrivesMe";
import { PresentationViewer } from "@/components/work/PresentationViewer";

export default function Home() {
  const featured = getFeaturedProjects();
  const chipotle = getProjectBySlug("chipotle-expansion-strategy");
  const chipotlePresentation = getPresentationBySlug("chipotle-case-competition");
  const featuredArticles = articles.slice(0, 3);
  const featuredVideos = videos.slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Entrepreneurship · Strategy · Marketing · Relationship Building
            </p>
            <h1 className="mt-5 text-[15vw] font-black leading-[0.92] tracking-normal sm:text-7xl md:text-8xl">
              Kylie
              <br />
              Perales
            </h1>
            <p className="mt-3 max-w-lg font-serif text-2xl italic leading-snug text-ink md:text-3xl">
              I am driven to take on challenges.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              My work moves between building a company, writing for one, developing
              strategy, and presenting it, with a running interest in brands, events,
              cities, and the businesses built around them.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ArrowLink href="/work">See the work</ArrowLink>
              <ArrowLink href="/about">About Kylie</ArrowLink>
            </div>

            <div className="mt-14 border-t border-line pt-8">
              <SectionLabel label="Words I Come Back To" />
              <div className="mt-6 space-y-5">
                {[
                  {
                    quote: "If it doesn't scare you, you're probably not dreaming big enough.",
                    attribution: "Tory Burch",
                  },
                  {
                    quote: "The best investment you can make is in yourself.",
                    attribution: "Warren Buffett",
                  },
                  {
                    quote: "The way to get started is to quit talking and begin doing.",
                    attribution: "Walt Disney",
                  },
                ].map((q) => (
                  <div key={q.attribution}>
                    <p className="font-serif text-lg italic leading-snug text-ink sm:whitespace-nowrap">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      {q.attribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <Media
              asset={{
                src: "/images/kylie-hero-portrait.jpg",
                alt: "Kylie Perales",
                label: "ADD HERO PORTRAIT / EDITORIAL PHOTO OF KYLIE",
                aspect: "portrait",
              }}
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* SELECTED WORK */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between border-b border-line pb-6">
              <div>
                <SectionLabel index="01" label="Selected Work" />
                <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">
                  Work I&apos;m proud of.
                </h2>
              </div>
              <div className="hidden md:block">
                <ArrowLink href="/work">All work</ArrowLink>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <ArrowLink href="/work">All work</ArrowLink>
          </div>
        </Container>
      </section>


      {/* WHAT DRIVES ME */}
      <section data-surface="ink" className="on-ink bg-ink py-20 text-paper md:py-28">
        <Container>
          <Reveal>
            <SectionLabel index="02" label="What Drives Me" className="text-muted-on-ink" dark />
            <h2 className="mt-3 max-w-2xl text-3xl tracking-tight md:text-5xl">
              What drives me.
            </h2>
          </Reveal>

          <WhatDrivesMe items={whatDrivesMe} peoplePhotos={peoplePhotos} />
        </Container>
      </section>

      {/* FEATURED WRITING */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between border-b border-line pb-6">
              <div>
                <SectionLabel index="03" label="Featured Writing" />
                <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">
                  Things I&apos;ve written.
                </h2>
                <p className="mt-3 max-w-lg text-sm text-muted">
                  Eight articles written for Parlance, seven ghostwritten, one under my
                  own name, presented as a proper archive rather than a folder of links.
                </p>
              </div>
              <div className="hidden md:block">
                <ArrowLink href="/writing">All writing</ArrowLink>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredArticles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <ArrowLink href="/writing">All writing</ArrowLink>
          </div>
        </Container>
      </section>

      {/* SELECTED PRESENTATION */}
      {chipotle && chipotlePresentation ? (
        <section className="border-t border-line bg-paper-dim py-20 md:py-28">
          <Container>
            <Reveal>
              <SectionLabel index="04" label="Selected Presentation" />
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {chipotle.organization} · {chipotle.award} · Team Project
                </p>
                <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                  {chipotle.title}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                  {chipotle.context}
                </p>
                <div className="mt-8">
                  <ArrowLink href={`/work/${chipotle.slug}`}>Read the case study</ArrowLink>
                </div>
              </Reveal>

              <Reveal className="md:col-span-7" delay={100}>
                <PresentationViewer presentation={chipotlePresentation} />
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      {/* EVENTS, OBSERVED */}
      <section data-surface="ink" className="on-ink bg-ink py-20 text-paper md:py-28">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between border-b border-line-on-ink-soft pb-6">
              <div>
                <SectionLabel index="05" label="Video" className="text-muted-on-ink" dark />
                <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">Events, observed.</h2>
                <p className="mt-3 max-w-lg text-sm text-muted-on-ink">
                  I go to events and end up thinking about production, branding,
                  logistics, and what actually makes the experience memorable. This is
                  where that thinking lives.
                </p>
              </div>
              <div className="hidden md:block">
                <ArrowLink href="/video">All videos</ArrowLink>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {featuredVideos.map((video, i) => (
              <Reveal key={video.slug} delay={i * 80}>
                <VideoCard video={video} featured dark />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <ArrowLink href="/video">All videos</ArrowLink>
          </div>
        </Container>
      </section>

      {/* PHOTOGRAPHY VISUAL BREAK */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between border-b border-line pb-6">
              <SectionLabel index="06" label="Photography" />
              <div className="hidden md:block">
                <ArrowLink href="/photography">Through my lens</ArrowLink>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 items-start gap-4 md:grid-cols-4">
            {photos.slice(0, 4).map((photo, i) => (
              <Reveal key={photo.id} delay={i * 60} className={i % 3 === 1 ? "md:mt-8" : ""}>
                <Media asset={photo} sizes="(min-width: 768px) 25vw, 50vw" />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <ArrowLink href="/photography">Through my lens</ArrowLink>
          </div>
        </Container>
      </section>

      {/* CORE VALUES */}
      <section className="border-y border-line py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionLabel index="07" label="My Core Values" />
            <h2 className="mt-3 max-w-2xl text-3xl tracking-tight md:text-5xl">
              A few things I believe.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 divide-y divide-line md:grid-cols-2 md:divide-y-0">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 50}>
                <div className="py-6 md:py-2 first:pt-0">
                  <h3 className="text-xl tracking-tight">{value.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CURRENTLY CURIOUS ABOUT */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionLabel index="08" label="Currently Curious About" />
          </Reveal>

          <div className="mt-10 divide-y divide-line border-t border-line">
            {curiosities.map((c, i) => (
              <Reveal key={c.label} delay={i * 40}>
                <div className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-10">
                  <span className="w-40 shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {c.label}
                  </span>
                  <p className="max-w-2xl text-lg tracking-tight md:text-xl">
                    {c.sentence}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT CTA */}
      <section data-surface="ink" className="on-ink bg-ink py-24 text-paper md:py-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-on-ink">
              Get in touch
            </p>
            <div className="mt-6 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-4xl leading-[0.98] tracking-tight md:text-7xl">
                Let&apos;s talk.
              </h2>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-paper px-7 py-4 text-base font-medium tracking-tight transition-colors hover:bg-paper hover:text-ink"
              >
                Contact
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
