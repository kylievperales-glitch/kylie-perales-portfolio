import type { Video } from "@/lib/types";

export const videos: Video[] = [
  {
    slug: "lawn-on-d",
    title: "Boston's Hidden Event Space | The Lawn on D",
    youtubeId: "7f9znZZ5y5M",
    event: "The Lawn on D, Boston",
    description:
      "A look at The Lawn on D as an event space, the setup, the atmosphere, and what makes it work as a venue.",
    category: "Venue",
    featured: true,
  },
  {
    slug: "great-gatsby-musical-review",
    title: "The Great Gatsby Musical Review | Did It Live Up to the Movie?",
    youtubeId: "XUHkmlSphvg",
    event: "The Great Gatsby: A New Musical, Citizens Opera House (Broadway in Boston)",
    description:
      "A review of The Great Gatsby musical, staging, production, and how it holds up against the film.",
    category: "Performance",
  },
  {
    slug: "miami-networking-events",
    title: "I Compared 5 Miami Networking Events. Here's What Stood Out.",
    youtubeId: "N0lvfVkl76c",
    event: "5 Miami Networking Events",
    description:
      "Five different Miami networking events, compared, what each one got right about bringing a room together.",
    category: "Networking",
  },
  {
    slug: "sail-boston-2026",
    title: "What Made Sail Boston 2026 So Successful? | Event Breakdown",
    youtubeId: "X4UtJjHAuUg",
    event: "Sail Boston 2026",
    description:
      "A breakdown of Sail Boston 2026, what made the event work, from production to audience experience.",
    category: "Festival",
  },
];

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@kylie_perales";

export function getVideoBySlug(slug: string) {
  return videos.find((v) => v.slug === slug);
}
