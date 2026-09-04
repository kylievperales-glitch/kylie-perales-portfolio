export interface Curiosity {
  label: string;
  sentence: string;
}

/**
 * Meant to be updated often — a quick pulse of what's currently on Kylie's
 * mind, distinct from the more permanent "Interests" index.
 */
export const curiosities: Curiosity[] = [
  {
    label: "Events",
    sentence: "How cities build recurring cultural events people actually care about.",
  },
  {
    label: "Fashion",
    sentence: "The relationship between physical experiences and modern luxury brands.",
  },
  {
    label: "Cities",
    sentence: "Why some neighborhoods become centers of economic and cultural activity.",
  },
  {
    label: "Business",
    sentence: "How traditional industries can be redesigned around better customer experiences.",
  },
  {
    label: "Technology",
    sentence: "Where AI meaningfully improves businesses rather than merely being added to them.",
  },
];
