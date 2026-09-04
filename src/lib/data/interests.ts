import type { Interest } from "@/lib/types";

export const interests: Interest[] = [
  {
    index: "01",
    label: "AI",
    sentence:
      "Less interested in the trend than in who's actually using it well, the products, the AI-native companies, the specific ways it changes how people work.",
  },
  {
    index: "02",
    label: "Fashion",
    sentence:
      "Brand strategy, campaigns, shows, retail experiences, fashion as a running study in culture, identity, and consumer behavior.",
    image: {
      alt: "Fashion or event photo",
      label: "ADD FASHION / EVENT PHOTO",
      aspect: "portrait",
    },
  },
  {
    index: "03",
    label: "Economics",
    sentence:
      "Why markets, cities, housing, and consumer behavior work the way they do. Genuinely enjoyable, not a résumé skill.",
  },
  {
    index: "04",
    label: "Skiing",
    sentence: "One of my favorite ways to spend a weekend.",
    image: {
      src: "/images/kylie-skiing.jpg",
      alt: "Kylie skiing",
      label: "ADD SKIING PHOTO",
      aspect: "portrait",
    },
  },
  {
    index: "05",
    label: "Running",
    sentence: "Usually somewhere on Strava.",
    image: {
      src: "/images/kylie-strava-half-marathon.jpg",
      alt: "Kylie's half marathon activity card from Strava",
      label: "ADD RUNNING PHOTO OR STRAVA VISUAL",
      aspect: "auto",
      width: 1170,
      height: 1402,
    },
  },
  {
    index: "06",
    label: "Yoga + Pilates",
    sentence: "How I stay moving between everything else.",
    image: {
      alt: "Yoga or Pilates photo",
      label: "ADD YOGA / PILATES PHOTO",
      aspect: "square",
    },
  },
  {
    index: "07",
    label: "House Music",
    sentence:
      "Specifically the songs that have an element that stands out and doesn't blend with some of the typical sounds and rhythms used in house music.",
  },
  {
    index: "08",
    label: "The Ocean",
    sentence: "I'll always choose the coast.",
    image: {
      src: "/images/kylie-ocean.jpg",
      alt: "Rocky coastline and ocean view",
      label: "ADD OCEAN / BEACH PHOTO",
      aspect: "auto",
      width: 1169,
      height: 873,
    },
  },
  {
    index: "09",
    label: "Drive-In Movies",
    sentence:
      "Entertainment, nostalgia, real estate, hospitality, and a business model that mostly disappeared, I can't stop thinking about whether it should come back.",
    image: {
      alt: "Drive-in movie theater",
      label: "ADD DRIVE-IN MOVIE IMAGE",
      aspect: "wide",
    },
  },
];
