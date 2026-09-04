import Link from "next/link";
import { Media } from "@/components/ui/Media";
import { CATEGORY_LABELS, type Project } from "@/lib/types";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <Media asset={project.cover} sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 border-t border-line pt-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {index !== undefined ? `${String(index).padStart(2, "0")}, ` : ""}
            {project.category.map((c) => CATEGORY_LABELS[c]).join(" / ")}
          </p>
          <h3 className="mt-1.5 text-xl tracking-tight md:text-2xl">{project.title}</h3>
          <p className="mt-1 max-w-md text-sm text-muted">{project.summary}</p>
        </div>
        <span className="whitespace-nowrap font-mono text-xs text-muted">{project.year}</span>
      </div>
    </Link>
  );
}
