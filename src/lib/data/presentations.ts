import type { Presentation } from "@/lib/types";

export const presentations: Presentation[] = [
  {
    slug: "bufc-productivity-software",
    title: "Productivity Software Industry Analysis",
    organization: "Boston University Finance and Investment Club (BUFC)",
    team: false,
    year: "2024",
    summary:
      "An industry and company analysis of productivity software, centered on Salesforce, developed as a research deliverable for BUFC's TMT sector team.",
    approach:
      "The deck covers the industry's growth drivers, a Salesforce-focused overview, and a Porter's Five Forces analysis of competitive dynamics in productivity software.",
    slideCount: 3,
    slides: [
      {
        src: "/images/bufc-slides/slide-01.jpg",
        alt: "Productivity Software Industry Analysis, slide 1",
        label: "ADD SLIDE 1",
        aspect: "wide",
      },
      {
        src: "/images/bufc-slides/slide-02.jpg",
        alt: "Productivity Software Industry Analysis, slide 2",
        label: "ADD SLIDE 2",
        aspect: "wide",
      },
      {
        src: "/images/bufc-slides/slide-03.jpg",
        alt: "Productivity Software Industry Analysis, slide 3",
        label: "ADD SLIDE 3",
        aspect: "wide",
      },
    ],
    cover: {
      src: "/images/bufc-slides/slide-01.jpg",
      alt: "Productivity Software Industry Analysis, cover slide",
      label: "ADD PRESENTATION COVER SLIDE",
      aspect: "wide",
    },
    pdfURL: "/documents/bufc-tmt-deliverable-3.pdf",
  },
  {
    slug: "chipotle-case-competition",
    title: "Chipotle International Expansion Strategy",
    organization: "Boston University Consulting Group",
    result: "First Place",
    team: true,
    collaborators: "Team project, Boston University Consulting Group",
    year: "2024",
    summary:
      "A year-by-year international expansion strategy for Chipotle, developed for the Boston University Consulting Group case competition and awarded first place.",
    problem:
      "Where should Chipotle expand internationally, in what order, and on what basis? The brief asked for a defensible, sequenced recommendation, not just a list of promising markets.",
    approach:
      "The team scored candidate markets on market opportunity, brand strength, and supply-chain advantages, then built a year-by-year rollout instead of proposing every market at once.",
    outcome: "First place.",
    slideCount: 18,
    slides: [
      {
        src: "/images/chipotle-cover-slide.jpg",
        alt: "Chipotle's Market Expansion Strategy, slide 1",
        label: "ADD PRESENTATION COVER SLIDE",
        aspect: "wide",
      },
      ...Array.from({ length: 17 }, (_, i) => ({
        src: `/images/chipotle-slides/slide-${String(i + 2).padStart(2, "0")}.jpg`,
        alt: `Chipotle International Expansion Strategy, slide ${i + 2}`,
        label: `ADD SLIDE ${i + 2}`,
        aspect: "wide" as const,
      })),
    ],
    cover: {
      src: "/images/chipotle-cover-slide.jpg",
      alt: "Chipotle's Market Expansion Strategy, cover slide",
      label: "ADD PRESENTATION COVER SLIDE",
      aspect: "wide",
    },
    pdfURL: "/documents/chipotle-expansion-strategy.pdf",
  },
  {
    slug: "questrom-sm131",
    title: "Questrom SM131 Presentation",
    organization: "Boston University Questrom School of Business",
    result: "First Place",
    team: false,
    year: "2024",
    summary:
      "A first-place class presentation developed for Questrom course SM131.",
    // Slide 1 of the source PDF is a team-intro slide; slide 2 works better as
    // the cover, so the in-browser viewer leads with slide 2 and moves slide 1
    // to second. The downloadable PDF itself keeps its original page order.
    slideCount: 32,
    slides: [
      {
        src: "/images/sm131-slides/slide-02.jpg",
        alt: "Questrom SM131 Presentation, slide 2 (cover)",
        label: "ADD PRESENTATION COVER SLIDE",
        aspect: "wide",
      },
      {
        src: "/images/sm131-slides/slide-01.jpg",
        alt: "Questrom SM131 Presentation, slide 1 (team)",
        label: "ADD SLIDE 1",
        aspect: "wide",
      },
      ...Array.from({ length: 30 }, (_, i) => ({
        src: `/images/sm131-slides/slide-${String(i + 3).padStart(2, "0")}.jpg`,
        alt: `Questrom SM131 Presentation, slide ${i + 3}`,
        label: `ADD SLIDE ${i + 3}`,
        aspect: "wide" as const,
      })),
    ],
    cover: {
      src: "/images/sm131-slides/slide-02.jpg",
      alt: "Questrom SM131 Presentation, cover slide",
      label: "ADD PRESENTATION COVER SLIDE",
      aspect: "wide",
    },
    pdfURL: "/documents/questrom-sm131-presentation.pdf",
  },
  {
    slug: "questrom-mo221",
    title: "Questrom MO221 Final Presentation",
    organization: "Boston University Questrom School of Business",
    team: false,
    year: "2024",
    summary:
      "A final class presentation developed for Questrom course MO221.",
    slideCount: 30,
    slides: [
      {
        src: "/images/mo221-slides/slide-01.jpg",
        alt: "Questrom MO221 Final Presentation, slide 1 (cover)",
        label: "ADD PRESENTATION COVER SLIDE",
        aspect: "wide",
      },
      ...Array.from({ length: 29 }, (_, i) => ({
        src: `/images/mo221-slides/slide-${String(i + 2).padStart(2, "0")}.jpg`,
        alt: `Questrom MO221 Final Presentation, slide ${i + 2}`,
        label: `ADD SLIDE ${i + 2}`,
        aspect: "wide" as const,
      })),
    ],
    cover: {
      src: "/images/mo221-slides/slide-01.jpg",
      alt: "Questrom MO221 Final Presentation, cover slide",
      label: "ADD PRESENTATION COVER SLIDE",
      aspect: "wide",
    },
    pdfURL: "/documents/questrom-mo221-presentation.pdf",
  },
];

export function getPresentationBySlug(slug: string) {
  return presentations.find((p) => p.slug === slug);
}
