export const SITE = {
  name: "Kylie Perales",
  title: "Kylie Perales — Portfolio",
  description:
    "Kylie Perales, entrepreneurship, strategy, marketing, and writing. Work worth showing, not a résumé.",
  url: "https://kylieperales.com",
  email: "kylievperales@gmail.com",
  linkedin: "https://www.linkedin.com/in/kylieperales/",
  youtube: "https://www.youtube.com/@kylie_perales",
  /** Set to a real PDF path (e.g. "/resume.pdf") once a résumé file is added — the
   * Contact page link appears automatically. Left undefined until then. */
  resumeUrl: undefined as string | undefined,
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Real routes that exist but live one level down from primary nav — reached
 * via the Work archive filters, homepage feature sections, and the footer. */
export const SECONDARY_LINKS = [
  { href: "/video", label: "Video" },
  { href: "/photography", label: "Photography" },
];
