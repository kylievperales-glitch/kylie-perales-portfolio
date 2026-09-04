export interface DriveItem {
  index: string;
  title: string;
  body: string;
}

export const whatDrivesMe: DriveItem[] = [
  {
    index: "01",
    title: "Building something from nothing",
    body: "I'm energized by taking an idea that doesn't exist yet and turning it into something tangible, a company, a piece of writing, a strategy someone can actually act on.",
  },
  {
    index: "02",
    title: "People",
    body: "Relationships, networks, communities, the way people create opportunities for each other still fascinates me more than almost anything else in business.",
  },
  {
    index: "03",
    title: "Momentum",
    body: "I want to be somewhere things are happening: decisions matter, there's a next step, and standing still isn't an option.",
  },
  {
    index: "04",
    title: "Understanding why things work",
    body: "A company, an event, a brand, a city, a business model, a consumer experience, I want to know why it works, or why it doesn't.",
  },
  {
    index: "05",
    title: "Ambition",
    body: "I'm drawn to people and organizations that set unusually high goals and are willing to do the work required to reach them.",
  },
  {
    index: "06",
    title: "Experiences",
    body: "Business and physical experience meet at events, hospitality, cities, fashion, and real estate, the places where people come together. That crossover is where I pay the closest attention.",
  },
];

export interface ValueItem {
  title: string;
  body: string;
}

export const coreValues: ValueItem[] = [
  {
    title: "Initiative",
    body: "If I think something could exist, improve, or happen, my instinct is to figure out how to move it forward rather than wait for someone else to.",
  },
  {
    title: "Curiosity",
    body: "I ask questions constantly, about industries, businesses, cities, people, and why things are run the way they are.",
  },
  {
    title: "Follow-through",
    body: "Ideas are easy to have. What I value is doing the work required to turn one into something real.",
  },
  {
    title: "Relationships",
    body: "Strong professional relationships come from trust, responsiveness, consistency, and genuine interest in other people. Networking may start the conversation; the relationship is what matters afterward.",
  },
  {
    title: "High standards",
    body: "Details matter. Presentation matters. How something feels to the person receiving it matters.",
  },
  {
    title: "Growth",
    body: "I look for environments, people, and experiences that expose me to more than what I already know.",
  },
];
