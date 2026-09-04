"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CATEGORY_LABELS, type Category, type Project } from "@/lib/types";

export function CategoryFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | "all">("all");

  const categories = useMemo(() => {
    const set = new Set<Category>();
    projects.forEach((p) => p.category.forEach((c) => set.add(c)));
    return Array.from(set);
  }, [projects]);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter work by category"
        className="flex flex-wrap gap-2 border-b border-line pb-8"
      >
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
            active === "all"
              ? "border-ink bg-ink text-paper"
              : "border-line text-muted hover:border-ink hover:text-ink"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
              active === c
                ? "border-ink bg-ink text-paper"
                : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {CATEGORY_LABELS[c]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 md:grid-cols-2">
        <div className="md:hidden">
          {filtered.map((project, i) => (
            <div key={project.slug} className="mb-14 last:mb-0">
              <ProjectCard project={project} index={i + 1} />
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          {filtered
            .map((project, i) => ({ project, i }))
            .filter((_, i) => i % 2 === 0)
            .map(({ project, i }) => (
              <div key={project.slug} className="mb-14 last:mb-0">
                <ProjectCard project={project} index={i + 1} />
              </div>
            ))}
        </div>
        <div className="hidden md:block">
          {filtered
            .map((project, i) => ({ project, i }))
            .filter((_, i) => i % 2 === 1)
            .map(({ project, i }) => (
              <div key={project.slug} className="mb-14 last:mb-0">
                <ProjectCard project={project} index={i + 1} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
