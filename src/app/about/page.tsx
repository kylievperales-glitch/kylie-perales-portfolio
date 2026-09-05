import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { whatDrivesMe, coreValues } from "@/lib/data/drives-and-values";
import { interests } from "@/lib/data/interests";
import { curiosities } from "@/lib/data/curiosities";
import { timeline } from "@/lib/data/timeline";
import { peoplePhotos } from "@/lib/data/people";
import { WhatDrivesMe } from "@/components/about/WhatDrivesMe";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kylie Perales, Boston University Questrom, co-founder of Vetra Technologies, writer, and licensed real estate agent.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-7">
          <SectionLabel label="About" />
          <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-normal md:text-6xl">
            Business, brands, people, and the ideas that connect them.
          </h1>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I graduated from Boston University&apos;s Questrom School of Business
              in May 2026, in three years. Along the way, I co-founded a
              logistics startup, wrote for a marketing team, and worked as a
              licensed real estate agent in Boston.
            </p>
            <p>
              I was drawn to business because I love building things people
              actually want and figuring out how to make their value clear. I
              wanted to understand how ideas become companies, products find
              markets, brands earn trust, and businesses navigate competition,
              collaboration, and change.
            </p>
            <p>Questrom gave me the framework; building a company gave me the chance to apply it.</p>
            <p>This page is the story behind that, not the résumé version of it.</p>
          </div>
        </div>
        <div className="md:col-span-5">
          <Media
            asset={{
              src: "/images/kylie-about-portrait.jpg",
              alt: "Kylie Perales at Boston University graduation, holding her diploma",
              label: "ADD PORTRAIT OF KYLIE",
              aspect: "portrait",
            }}
            priority
            grayscale
            className="border-[6px] border-pink-800"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </Container>

      <Container className="border-t border-line py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel label="What I've Done" />
          </div>
          <div className="md:col-span-8">
            {timeline.length > 0 ? <Timeline entries={timeline} /> : null}
          </div>
        </div>
      </Container>

      <section data-surface="ink" className="on-ink bg-ink py-16 text-paper md:py-24">
        <Container>
          <SectionLabel label="What Drives Me" className="text-muted-on-ink" />
          <WhatDrivesMe items={whatDrivesMe} peoplePhotos={peoplePhotos} />
        </Container>
      </section>

      <Container className="border-b border-line py-16 md:py-24">
        <SectionLabel label="My Core Values" />
        <div className="mt-10 grid grid-cols-1 divide-y divide-line md:grid-cols-2 md:divide-y-0">
          {coreValues.map((value) => (
            <div key={value.title} className="py-6 md:py-2 first:pt-0">
              <h3 className="text-xl tracking-tight">{value.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="border-b border-line py-16 md:py-24">
        <SectionLabel label="Beyond the Work" />
        <p className="mt-4 max-w-xl text-base text-muted">
          Interests that don&apos;t fit neatly on a résumé but are still a real part
          of how I think and what I pay attention to.
        </p>
        <div className="mt-10 divide-y divide-line border-t border-line">
          {interests.map((interest) => (
            <Reveal key={interest.label}>
              <div className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-10">
                <span className="w-10 shrink-0 font-mono text-xs text-muted">
                  {interest.index}
                </span>
                <span className="w-48 shrink-0 text-xl tracking-tight md:text-2xl">
                  {interest.label}
                </span>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {interest.sentence}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="py-16 md:py-24">
        <SectionLabel label="Currently Curious About" />
        <div className="mt-10 divide-y divide-line border-t border-line">
          {curiosities.map((c) => (
            <div
              key={c.label}
              className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-10"
            >
              <span className="w-40 shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {c.label}
              </span>
              <p className="max-w-2xl text-lg tracking-tight md:text-xl">{c.sentence}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
