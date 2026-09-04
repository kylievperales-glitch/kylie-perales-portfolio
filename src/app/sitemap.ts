import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { projects } from "@/lib/data/projects";
import { articles } from "@/lib/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/writing", "/video", "/photography", "/about", "/contact"];

  const dynamicRoutes = [
    ...projects.map((p) => `/work/${p.slug}`),
    ...articles.map((a) => `/writing/${a.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
  }));
}
