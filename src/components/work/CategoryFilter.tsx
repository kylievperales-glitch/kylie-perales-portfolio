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

      <div className="mt-10 grid grid-cols-1 items-start gap-x-8 gap-y-14 md:grid-cols-2">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
