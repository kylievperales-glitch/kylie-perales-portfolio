import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-surface="ink" className="on-ink bg-ink text-paper">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-on-ink">
              Let&apos;s talk
            </p>
            <h2 className="mt-3 max-w-xl text-3xl leading-tight tracking-tight md:text-5xl">
              Kylie Perales
            </h2>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm md:items-end">
            <a
              href={`mailto:${SITE.email}`}
              className="border-b border-transparent hover:border-line-on-ink"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent hover:border-line-on-ink"
            >
              LinkedIn
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent hover:border-line-on-ink"
            >
              YouTube
            </a>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-on-ink-soft pt-6 text-xs text-muted-on-ink md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/work" className="hover:text-paper">
              Work
            </Link>
            <Link href="/writing" className="hover:text-paper">
              Writing
            </Link>
            <Link href="/video" className="hover:text-paper">
              Video
            </Link>
            <Link href="/photography" className="hover:text-paper">
              Photography
            </Link>
            <Link href="/about" className="hover:text-paper">
              About
            </Link>
          </div>
          <p>© {year} Kylie Perales</p>
        </div>
        <p className="mt-4 text-[10px] tracking-wide text-muted-on-ink/70">
          website built using Claude Code
        </p>
      </Container>
    </footer>
  );
}
