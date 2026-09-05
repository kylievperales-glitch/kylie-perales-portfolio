export type Category =
  | "strategy"
  | "entrepreneurship"
  | "marketing"
  | "writing"
  | "presentations"
  | "video"
  | "photography"
  | "academic"
  | "real-estate";

export const CATEGORY_LABELS: Record<Category, string> = {
  strategy: "Strategy",
  entrepreneurship: "Entrepreneurship",
  marketing: "Marketing",
  writing: "Writing",
  presentations: "Presentations",
  video: "Video",
  photography: "Photography",
  academic: "Academic",
  "real-estate": "Real Estate",
};

export type Aspect = "square" | "portrait" | "landscape" | "wide" | "video" | "auto";

/**
 * Every image in the site routes through this shape. When `src` is empty the
 * Media component renders a labeled placeholder instead of a broken image —
 * see components/ui/Media.tsx. Use aspect: "auto" with `width`/`height` set
 * to the source file's real pixel dimensions to display an image at its
 * native proportions instead of being cropped into one of the standard
 * boxes (useful for screenshots, e.g. a Strava activity card).
 */
export interface ImageAsset {
  src?: string;
  alt: string;
  label: string;
  aspect: Aspect;
  width?: number;
  height?: number;
  /** A second page/side of the same document (e.g. a brochure's next page).
   * When set, the gallery renders a small arrow below the caption that flips
   * between `src` and `flipSrc` in place — see components/work/CaptionedGallery.tsx. */
  flipSrc?: string;
  flipAlt?: string;
  /** Optional caption shown below the image in a gallery grid. */
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  organization?: string;
  category: Category[];
  role?: string;
  team?: boolean;
  award?: string;
  summary: string;
  context?: string;
  myRole?: string;
  approach?: string;
  outcome?: string;
  tags?: string[];
  featured?: boolean;
  cover: ImageAsset;
  gallery?: ImageAsset[];
  /** Overrides the default "The Work" heading above `gallery`. */
  galleryTitle?: string;
  /** Personal/on-the-ground moments — conferences, award ceremonies, interviews —
   * shown above Data Partnerships as "The Experiences". */
  experiences?: ImageAsset[];
  /** Grouped photo sets — e.g. one group per property leased — shown above
   * `gallery` as their own titled subsections. `columns` overrides the
   * automatic column count (based on photo count) when set. */
  photoGroups?: { title: string; photos: ImageAsset[]; columns?: 1 | 2 | 3 }[];
  /** Heading shown above `photoGroups`. */
  photoGroupsTitle?: string;
  documents?: { label: string; url: string }[];
  relatedArticleSlugs?: string[];
  relatedPresentationSlug?: string;
  videos?: Video[];
  partners?: {
    name: string;
    logoSrc: string;
    logoWidth: number;
    logoHeight: number;
    url: string;
  }[];
  ctaLabel?: string;
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "label"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; asset: ImageAsset };

export interface Article {
  slug: string;
  headline: string;
  deck?: string;
  publication: string;
  attribution: string;
  date?: string;
  category: string;
  excerpt: string;
  readTime?: string;
  hero: ImageAsset;
  body: ArticleBlock[];
  status: "placeholder" | "published";
  featured?: boolean;
  /** Link back to the article as it appears on the original publisher's site. */
  sourceURL?: string;
  /** Set when the piece was published under Kylie's own name rather than
   * ghostwritten — drives the "under my byline" badge on the writing archive. */
  byline?: string;
}

export interface Video {
  slug: string;
  title: string;
  youtubeId?: string;
  event: string;
  date?: string;
  description: string;
  category?: string;
  takeaway?: string;
  featured?: boolean;
}

export interface Presentation {
  slug: string;
  title: string;
  organization?: string;
  result?: string;
  team: boolean;
  collaborators?: string;
  year: string;
  summary: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  slideCount: number;
  slides: ImageAsset[];
  pdfURL?: string;
  cover: ImageAsset;
}

export interface Photo {
  id: string;
  alt: string;
  label: string;
  aspect: Aspect;
  caption?: string;
  src?: string;
  width?: number;
  height?: number;
}

export interface Interest {
  index: string;
  label: string;
  sentence: string;
  image?: ImageAsset;
}

export interface TimelineEntry {
  year: string;
  label: string;
  /** Shown when this entry is expanded. */
  body: string;
}
