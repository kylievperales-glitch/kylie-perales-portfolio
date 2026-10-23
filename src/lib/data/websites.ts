import type { ImageAsset, Website } from "@/lib/types";

/** Screenshots live in public/images/websites/. All are full-width browser
 * captures, so they share one helper for the uncropped "auto" aspect. */
function shot(file: string, alt: string, label: string, height: number): ImageAsset {
  return { src: `/images/websites/${file}`, alt, label, aspect: "auto", width: 2880, height };
}

export const websites: Website[] = [
  {
    slug: "vision",
    title: "Vision",
    description:
      "My own personal vision, goal tracking, and prioritization system, the one I use to organize my life. It brings priorities, habit tracking, scheduling, a timeline, boards, a journal, a reading library, and the people in my life into one place.",
    screenshots: [
      shot("vision-library.jpg", "The Library page of Vision, showing books in progress with reading percentages", "VISION — LIBRARY", 1564),
      shot("vision-scheduling.jpg", "The Scheduling page of Vision, a day planner in half-hour blocks", "VISION — SCHEDULING", 1570),
      shot("vision-home.jpg", "The Vision home page, a vision board of quotes, outfits, and city views", "VISION — HOME", 1568),
    ],
  },
  {
    slug: "kylie-vanessa",
    title: "Kylie Vanessa",
    description:
      "A showcase of hypothetical fashion collections I designed. Each look pairs my original sketch with an AI-generated version that brings the sketch to life on a model, so you can see the idea on paper next to the finished vision.",
    screenshots: [
      shot("kylie-vanessa-flame-line.jpg", "The Flame Line, an AI-generated orange fringe dress beside the original sketch", "KYLIE VANESSA — THE FLAME LINE", 1572),
      shot("kylie-vanessa-blue-orbit.jpg", "Blue Orbit, an AI-generated blue sculptural loop dress beside the original sketch", "KYLIE VANESSA — BLUE ORBIT", 1566),
      shot("kylie-vanessa-moss-after-dark.jpg", "Moss After Dark, an AI-generated green top and flared trousers beside the original sketch", "KYLIE VANESSA — MOSS AFTER DARK", 1570),
    ],
  },
  {
    slug: "miami-beach-games",
    title: "Miami Beach Games",
    description:
      "A website I designed for the Miami Athletic Association's 2028 Miami Beach Games concept, a new multi-sport event bringing sport, fitness, wellness, and destination experiences together under one annual Games identity.",
    screenshots: [
      shot("miami-beach-games.jpg", "The Miami Beach Games homepage, with a beach volleyball hero image", "MIAMI BEACH GAMES — HOME", 1570),
      shot("miami-beach-games-the-games.jpg", "The Games page, an aerial view of Miami Beach under the headline The Vision Behind the Games", "MIAMI BEACH GAMES — THE GAMES", 1572),
      shot("miami-beach-games-beach-sports.jpg", "The Sports & Experiences page, showing the Beach Sports category", "MIAMI BEACH GAMES — BEACH SPORTS", 1570),
    ],
  },
  {
    slug: "american-x-history",
    title: "American X History Tour",
    description:
      "A website I designed for the Miami Athletic Association's American X History Tour, a community experience centered on Muhammad Ali's 1964 Miami story, told through movement, history, and the city connected to it.",
    screenshots: [
      shot("american-x-history.jpg", "The American X History Tour homepage, with a black-and-white portrait of Muhammad Ali", "AMERICAN X HISTORY — HOME", 1560),
      shot("american-x-history-1964.jpg", "The 1964 Miami Beach section, with archival photos of the fight and the convention hall", "AMERICAN X HISTORY — 1964", 1542),
      shot("american-x-history-the-story.jpg", "The Story page, The Miami Chapter of a Champion's Story", "AMERICAN X HISTORY — THE STORY", 1572),
    ],
  },
];
