import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CategoryFilter } from "@/components/work/CategoryFilter";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A portfolio archive spanning entrepreneurship, strategy, marketing, writing, presentations, and real estate.",
};

export default function WorkPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionLabel label="Archive" />
      <h1 className="mt-3 max-w-3xl text-4xl tracking-tight md:text-6xl">
        Things I&apos;ve made.
      </h1>
      <p className="mt-5 max-w-xl text-base text-muted">
        Company building, strategy, writing, presentations, and real estate marketing,
        filtered by category, not chronology.
      </p>

      <div className="mt-14">
        <CategoryFilter projects={projects} />
      </div>
    </Container>
  );
}
