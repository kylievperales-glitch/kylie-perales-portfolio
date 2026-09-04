import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PhotoGrid } from "@/components/photography/PhotoGrid";
import { photos, PHOTOGRAPHY_SOURCE_URL } from "@/lib/data/photos";

export const metadata: Metadata = {
  title: "Photography",
  description: "Personal photography, a creative interest, presented as an editorial grid.",
};

export default function PhotographyPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionLabel label="Photography" />
      <h1 className="mt-3 max-w-3xl text-4xl tracking-tight md:text-6xl">
        Through my lens.
      </h1>
      <p className="mt-5 max-w-xl text-base text-muted">
        A personal creative interest. Click any image to view it
        larger.
      </p>
      <a
        href={PHOTOGRAPHY_SOURCE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm underline underline-offset-4 text-muted hover:text-ink"
      >
        Full set (PDF) ↗
      </a>

      <div className="mt-14">
        <PhotoGrid photos={photos} />
      </div>
    </Container>
  );
}
