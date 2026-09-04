import type { Project } from "@/lib/types";

const vetraVideos: Project["videos"] = [
  {
    slug: "vetra-freight-coach-podcast",
    title:
      "How Vetra Technologies Increases Revenue | Interview with Chris Jolly from The Freight Coach Podcast",
    youtubeId: "hCuo0JC56rQ",
    event: "The Freight Coach Podcast",
    category: "Podcast",
    description:
      "A conversation on The Freight Coach Podcast about how Vetra turns freight analytics into revenue.",
  },
  {
    slug: "vetra-eliminating-deadhead-interview",
    title: "How Vetra Technologies Is Eliminating Deadhead | Interview with Adrian Smith",
    youtubeId: "96zeJPMTJEY",
    event: "Podcast Interview",
    category: "Podcast",
    description: "An interview about how Vetra's approach reduces deadhead miles for carriers.",
  },
  {
    slug: "vetra-company-overview",
    title: "Redefining the Future of Freight: Eliminating Deadhead, Unlocking Efficiency",
    youtubeId: "iSh62uLH2BE",
    event: "Vetra Technologies",
    category: "Company Overview",
    description: "A short overview of Vetra's mission: eliminating deadhead and unlocking efficiency in freight.",
  },
];

export const projects: Project[] = [
  {
    slug: "vetra-technologies",
    title: "Vetra Technologies",
    year: "2024–2026",
    organization: "Vetra Technologies",
    category: ["entrepreneurship", "strategy", "marketing"],
    role: "Co-Founder & CEO",
    award: "Boston University's $5,000 Abdullah Almarzouq Environmental Entrepreneurship Award",
    featured: true,
    summary:
      "Co-founding an AI-powered logistics startup focused on transportation decision-making and fleet utilization, from the first pitch to partnerships with DAT Freight & Analytics, 123Loadboard, and LoadBoard Network.",
    context:
      "Freight capacity is fragmented and slow to price. Fleets and brokers make load and lane decisions with incomplete information, which leaves trucks running with less freight than they could be carrying. Vetra was built to close that gap with AI-driven decision support for transportation and fleet utilization.",
    myRole:
      "I co-founded and ran the business side of Vetra as CEO: business development, strategic partnerships, outreach, operations, and the presentations, proposals, and executive-facing materials that carried the company into rooms with partners and investors. I also owned product planning conversations, marketing, and company collateral, the brochure and business cards shown here are part of that broader body of work, not the work itself.",
    approach:
      "We found success in relationships, direct outreach to freight and logistics platforms, and iterating the pitch and materials as we learned what actually mattered to operators and brokers.",
    outcome:
      "Vetra built partnerships with DAT Freight & Analytics, 123Loadboard, and LoadBoard Network, and was awarded Boston University's $5,000 Abdullah Almarzouq Environmental Entrepreneurship Award.",
    tags: ["AI", "Logistics", "Startup", "Partnerships", "Business Development"],
    cover: {
      src: "/images/vetra-logo.png",
      alt: "Vetra Technologies logo",
      label: "ADD VETRA BRAND / PRODUCT VISUAL",
      aspect: "landscape",
    },
    experiences: [
      {
        src: "/images/vetra-manifest-interview.jpg",
        alt: "Kylie being interviewed on behalf of Vetra at Manifest, a supply chain and logistics conference",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        width: 920,
        height: 648,
        caption: "Interview at Manifest Vegas Conference 2026",
      },
      {
        src: "/images/vetra-manifest-2025.png",
        alt: "Kylie and a Vetra co-founder at the Manifest conference, 2025",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        width: 2232,
        height: 1250,
        caption: "Manifest Vegas Conference 2025",
      },
      {
        src: "/images/vetra-award-check-v3.jpg",
        alt: "Kylie and a Vetra co-founder receiving Boston University's Abdullah Almarzouq Environmental Entrepreneurship Award",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        caption:
          "Receiving the Boston University $5,000 Abdullah Almarzouq Environmental Entrepreneurship Award",
        width: 3024,
        height: 4032,
      },
      {
        src: "/images/vetra-nvidia-cofounder.png",
        alt: "Kylie meeting Chris Malachowsky, co-founder of NVIDIA",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        width: 1088,
        height: 1112,
        caption: "Meeting Co-Founder of NVIDIA, Chris Malachowsky",
      },
      {
        src: "/images/vetra-port-miami.jpg",
        alt: "Kylie and a Vetra co-founder meeting with Port Miami executives",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        width: 4032,
        height: 3024,
        caption:
          "Meeting with Executives at Port Miami to Discuss Project Opportunities (at the time CFO Andy Hecker on right)",
      },
      {
        src: "/images/vetra-roadtrip-research.jpg",
        alt: "Kylie standing in a truck lot during a road trip for industry research",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        width: 790,
        height: 996,
        caption: "Roadtrip for Industry Research",
      },
      {
        src: "/images/vetra-ata-conference-2025.jpg",
        alt: "A presentation slide on 2025 top industry issues at the American Trucking Association conference",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        width: 4032,
        height: 3024,
        caption: "American Trucking Association Conference 2025",
      },
      {
        src: "/images/vetra-singing-networking-party.jpg",
        alt: "Kylie singing on stage at a post-conference networking party",
        label: "ADD EXPERIENCE PHOTO",
        aspect: "auto",
        width: 2159,
        height: 3342,
        caption: "Singing at Post Conference Networking Party",
      },
    ],
    gallery: [
      {
        src: "/images/vetra-brochure-cover.jpg",
        alt: "Vetra Technologies printable brochure, cover spread",
        label: "ADD VETRA BROCHURE COVER",
        aspect: "auto",
        width: 1980,
        height: 1530,
        flipSrc: "/images/vetra-brochure-inside.jpg",
        flipAlt: "Vetra Technologies printable brochure, inside spread",
        caption: "2-Page Printable Pamphlet",
      },
      {
        src: "/images/vetra-business-card-2.jpg",
        alt: "Vetra Technologies business card, back",
        label: "ADD VETRA BUSINESS CARD MOCKUP",
        aspect: "auto",
        width: 1512,
        height: 864,
        flipSrc: "/images/vetra-business-card-1.jpg",
        flipAlt: "Vetra Technologies business card, front",
        caption: "Vetra Business Card",
      },
    ],
    galleryTitle: "Examples of Marketing/Sales Materials",
    videos: vetraVideos,
    partners: [
      {
        name: "DAT Freight & Analytics",
        logoSrc: "/images/dat-logo.png",
        logoWidth: 825,
        logoHeight: 262,
        url: "https://www.dat.com/home-1",
      },
      {
        name: "123Loadboard",
        logoSrc: "/images/123loadboard-logo.png",
        logoWidth: 890,
        logoHeight: 222,
        url: "https://www.123loadboard.com",
      },
      {
        name: "LoadBoard Network",
        logoSrc: "/images/loadboard-network-logo.png",
        logoWidth: 806,
        logoHeight: 286,
        url: "https://loadboardnetwork.com",
      },
    ],
    ctaLabel: "See the brochure & collateral",
  },
  {
    slug: "parlance",
    title: "Parlance",
    year: "2022–2026",
    organization: "Parlance",
    category: ["writing", "marketing"],
    role: "Marketing",
    featured: true,
    summary:
      "Eight articles for Parlance, seven ghostwritten, one under my own name, a rebuilt whitepaper, and the research underneath them.",
    context:
      "Parlance needed a steady stream of credible, well-researched content, articles, an aging whitepaper, and a large backlog of existing posts that no longer reflected the product or the market.",
    myRole:
      "I wrote eight articles for Parlance, seven ghostwritten for the team, one published under my own name, rewrote a legacy whitepaper, and updated roughly forty existing blog posts. That sat inside a wider marketing role that also included SEO work, competitive and social research, website and content work, video, and visual asset creation.",
    approach:
      "Each piece started with research, competitive positioning, audience questions, what was already being said in the space, before writing began. The goal was content that read as informed rather than promotional.",
    tags: ["Writing", "SEO", "Content Strategy", "Research"],
    cover: {
      src: "/images/parlance-logo.png",
      alt: "Parlance logo",
      label: "ADD PARLANCE ARTICLE SCREENSHOT",
      aspect: "landscape",
    },
    gallery: [
      {
        alt: "Website or content screenshot from Parlance",
        label: "ADD WEBSITE / CONTENT SCREENSHOT",
        aspect: "wide",
      },
    ],
    relatedArticleSlugs: [],
    ctaLabel: "Read the writing →",
  },
  {
    slug: "blackstone-williams-realty",
    title: "Blackstone Williams Realty",
    year: "2025",
    organization: "Blackstone Williams Realty",
    category: ["real-estate", "marketing"],
    role: "Licensed Real Estate Agent",
    featured: true,
    summary:
      "Marketing and social content created while working as a licensed Massachusetts real estate agent, one visible piece of a role built on relationships, prospecting, and client service.",
    context:
      "Marketing and social content created while working as a licensed Massachusetts real estate agent, one visible piece of a role built on relationships, prospecting, and client service.",
    myRole:
      "I created social media and marketing content for listings and the brand, alongside client-facing work as a licensed agent.",
    tags: ["Real Estate", "Social Media", "Marketing"],
    cover: {
      src: "/images/blackstone-williams-logo.png",
      alt: "Blackstone Williams Realty logo",
      label: "ADD SOCIAL MEDIA POST",
      aspect: "auto",
      width: 680,
      height: 286,
    },
    photoGroups: [
      {
        title: "Example Apartment 1",
        photos: [
          { src: "/images/apartments/apt2-photo-1.png", width: 940, height: 1072 },
          { src: "/images/apartments/apt2-photo-2.png", width: 940, height: 1072 },
          { src: "/images/apartments/apt2-photo-3.png", width: 940, height: 1072 },
          { src: "/images/apartments/apt2-photo-4.png", width: 940, height: 1072 },
          { src: "/images/apartments/apt2-photo-5.png", width: 940, height: 712 },
          { src: "/images/apartments/apt2-photo-6.png", width: 940, height: 1072 },
        ].map((p, i) => ({
          ...p,
          alt: `Example apartment 1, photo collage ${i + 1}`,
          label: "ADD APARTMENT PHOTO",
          aspect: "auto" as const,
        })),
      },
      {
        title: "Example Apartment 2",
        photos: [
          { src: "/images/apartments/apt3-photo-1.png", width: 942, height: 996 },
          { src: "/images/apartments/apt3-photo-2.png", width: 940, height: 994 },
          { src: "/images/apartments/apt3-photo-3.png", width: 940, height: 996 },
          { src: "/images/apartments/apt3-photo-4.png", width: 940, height: 992 },
        ].map((p, i) => ({
          ...p,
          alt: `Example apartment 2, photo collage ${i + 1}`,
          label: "ADD APARTMENT PHOTO",
          aspect: "auto" as const,
        })),
      },
      {
        title: "Example Apartment 3",
        columns: 1,
        photos: [
          { src: "/images/apartments/apt4-photo-1.png", width: 2748, height: 918 },
          { src: "/images/apartments/apt4-photo-2.png", width: 2754, height: 922 },
        ].map((p, i) => ({
          ...p,
          alt: `Example apartment 3, photo collage ${i + 1}`,
          label: "ADD APARTMENT PHOTO",
          aspect: "auto" as const,
        })),
      },
      {
        title: "Example Apartment 4",
        columns: 1,
        photos: [
          { src: "/images/apartments/apt5-photo-1.png", width: 2814, height: 762 },
          { src: "/images/apartments/apt5-photo-2.png", width: 2232, height: 760 },
        ].map((p, i) => ({
          ...p,
          alt: `Example apartment 4, photo collage ${i + 1}`,
          label: "ADD APARTMENT PHOTO",
          aspect: "auto" as const,
        })),
      },
      {
        title: "Example Apartment 5",
        photos: [
          { src: "/images/apartments/apt6-photo-1.png", width: 938, height: 854 },
          { src: "/images/apartments/apt6-photo-2.png", width: 942, height: 934 },
          { src: "/images/apartments/apt6-photo-3.png", width: 940, height: 1044 },
          { src: "/images/apartments/apt6-photo-4.png", width: 936, height: 990 },
        ].map((p, i) => ({
          ...p,
          alt: `Example apartment 5, photo collage ${i + 1}`,
          label: "ADD APARTMENT PHOTO",
          aspect: "auto" as const,
        })),
      },
      {
        title: "Example Apartment 6",
        columns: 1,
        photos: [
          {
            src: "/images/apartments/apt1-photo-1.png",
            alt: "Example apartment 6, photo collage 1",
            label: "ADD APARTMENT PHOTO",
            aspect: "auto",
            width: 1408,
            height: 676,
          },
          {
            src: "/images/apartments/apt1-photo-2.png",
            alt: "Example apartment 6, photo collage 2",
            label: "ADD APARTMENT PHOTO",
            aspect: "auto",
            width: 2114,
            height: 676,
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/blackstone-williams/slide-01.jpg",
        alt: "Blackstone Williams Realty social media post, 70 Pinckney St. #2",
        label: "ADD SOCIAL MEDIA POST",
        aspect: "auto",
        width: 2025,
        height: 3600,
      },
      {
        src: "/images/blackstone-williams/slide-02.jpg",
        alt: "Blackstone Williams Realty social media post 2",
        label: "ADD REAL ESTATE MARKETING EXAMPLE",
        aspect: "auto",
        width: 2025,
        height: 3600,
      },
      {
        src: "/images/blackstone-williams/slide-03.jpg",
        alt: "Blackstone Williams Realty social media post 3",
        label: "ADD REAL ESTATE / CITY IMAGE (IF RELEVANT)",
        aspect: "auto",
        width: 2025,
        height: 3600,
      },
    ],
    galleryTitle: "Examples of Social Media Posts",
    documents: [
      {
        label: "Social Media Posts for Blackstone Williams Realty (PDF)",
        url: "/documents/blackstone-williams-social-media.pdf",
      },
    ],
    ctaLabel: "See the marketing work",
  },
  {
    slug: "chipotle-expansion-strategy",
    title: "Chipotle International Expansion Strategy",
    year: "2024",
    organization: "Boston University Consulting Group",
    category: ["strategy", "academic", "presentations"],
    role: "Team Member",
    team: true,
    award: "First Place",
    featured: true,
    summary:
      "A year-by-year international expansion strategy for Chipotle, built with a team for the Boston University Consulting Group case competition. First place.",
    context:
      "The competition brief asked teams to solve a real strategic question facing Chipotle: where and how the company should expand internationally, and in what order.",
    myRole:
      "This was a team project, I'm presenting it here as one of the contributors, not as individual work. Our team built and presented the recommendation together.",
    approach:
      "The team evaluated candidate international markets across market opportunity, brand strength, and supply-chain advantages, then sequenced the recommendation year by year rather than proposing a single simultaneous push.",
    outcome: "First place, Boston University Consulting Group case competition.",
    tags: ["Strategy", "Case Competition", "Team Project", "Market Entry"],
    cover: {
      src: "/images/chipotle-cover-slide.jpg",
      alt: "Chipotle's Market Expansion Strategy, presentation cover slide",
      label: "ADD PRESENTATION COVER",
      aspect: "auto",
      width: 2198,
      height: 1230,
    },
    documents: [
      {
        label: "BUCG — 1st Place Chipotle Case Competition (PDF)",
        url: "/documents/chipotle-expansion-strategy.pdf",
      },
    ],
    relatedPresentationSlug: "chipotle-case-competition",
    ctaLabel: "Open the presentation",
  },
  {
    slug: "questrom-marketing-presentation",
    title: "Questrom Marketing Presentation — SM131",
    year: "2024",
    organization: "Boston University Questrom School of Business",
    category: ["academic", "presentations", "marketing"],
    role: "Presenter",
    award: "First Place",
    summary:
      "A first-place class presentation for Questrom course SM131, developed and delivered as a graded project.",
    context:
      "A Questrom School of Business course project built around a marketing problem, presented in class and ranked first.",
    tags: ["Marketing", "Academic", "Presentation"],
    cover: {
      src: "/images/sm131-slides/slide-02.jpg",
      alt: "Questrom SM131 presentation cover slide",
      label: "ADD PRESENTATION COVER",
      aspect: "auto",
      width: 1800,
      height: 1013,
    },
    documents: [
      {
        label: "OFFICIAL SM131 Presentation (PDF)",
        url: "/documents/questrom-sm131-presentation.pdf",
      },
    ],
    relatedPresentationSlug: "questrom-sm131",
    ctaLabel: "Open the presentation",
  },
  {
    slug: "questrom-management-presentation",
    title: "Questrom Management Presentation — MO221",
    year: "2024",
    organization: "Boston University Questrom School of Business",
    category: ["academic", "presentations", "strategy"],
    role: "Presenter",
    summary:
      "A final class presentation for Questrom course MO221, built and delivered as part of the course's capstone project work.",
    context:
      "A Questrom School of Business course project developed and presented as part of MO221's final coursework.",
    tags: ["Academic", "Presentation", "Strategy"],
    cover: {
      src: "/images/mo221-slides/slide-01.jpg",
      alt: "Questrom MO221 presentation cover slide",
      label: "ADD PRESENTATION COVER",
      aspect: "auto",
      width: 2160,
      height: 1215,
    },
    documents: [
      {
        label: "MO221 Slides Final Presentation (PDF)",
        url: "/documents/questrom-mo221-presentation.pdf",
      },
    ],
    relatedPresentationSlug: "questrom-mo221",
    ctaLabel: "Open the presentation",
  },
  {
    slug: "housing-policy-proposal",
    title: "Housing Policy Proposal — EC103",
    year: "2023",
    organization: "Boston University, EC103",
    category: ["academic", "writing", "strategy"],
    role: "Author",
    summary:
      "A written economic policy memo proposing a housing-policy intervention, produced for EC103 as an academic economics project.",
    context:
      "Written as a final policy memo for an introductory economics course, applying course concepts to a real housing-policy question.",
    myRole:
      "I researched and wrote the memo independently, framing a housing-policy problem in economic terms and proposing an intervention.",
    tags: ["Economics", "Housing Policy", "Writing", "Academic"],
    cover: {
      src: "/images/housing-policy-memo-preview.jpg",
      alt: "EC103 Final Policy Memo, document preview",
      label: "ADD DOCUMENT PREVIEW",
      aspect: "auto",
      width: 1530,
      height: 1980,
    },
    documents: [
      {
        label: "EC103 Final Policy Memo (PDF)",
        url: "/documents/ec103-housing-policy-memo.pdf",
      },
    ],
    ctaLabel: "Read the proposal",
  },
  {
    slug: "health-justice-campaign",
    title: "Health Justice Social Media Project",
    year: "2023",
    organization: "Boston University",
    category: ["academic", "marketing"],
    role: "Contributor",
    team: true,
    summary:
      "A social media campaign built around mental health services covered by insurance, produced for a Boston University health justice project.",
    context:
      "A course project translating health-policy information, what mental health services most insurance plans actually cover, into a social-media-ready format meant to inform rather than persuade.",
    tags: ["Health Justice", "Social Media", "Academic"],
    cover: {
      src: "/images/health-justice/slide-01.jpg",
      alt: "3 Mental Health Services Most Insurance Covers, carousel slide 1",
      label: "ADD SOCIAL MEDIA POST",
      aspect: "square",
    },
    gallery: [
      {
        src: "/images/health-justice/slide-02.jpg",
        alt: "3 Mental Health Services Most Insurance Covers, carousel slide 2",
        label: "ADD SOCIAL MEDIA POST",
        aspect: "square",
      },
      {
        src: "/images/health-justice/slide-03.jpg",
        alt: "3 Mental Health Services Most Insurance Covers, carousel slide 3",
        label: "ADD SOCIAL MEDIA POST",
        aspect: "square",
      },
      {
        src: "/images/health-justice/slide-04.jpg",
        alt: "3 Mental Health Services Most Insurance Covers, carousel slide 4",
        label: "ADD SOCIAL MEDIA POST",
        aspect: "square",
      },
    ],
    documents: [
      {
        label: "3 Mental Health Services Most Insurance Covers (PDF)",
        url: "/documents/health-justice-social-media.pdf",
      },
    ],
    ctaLabel: "View the project",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
