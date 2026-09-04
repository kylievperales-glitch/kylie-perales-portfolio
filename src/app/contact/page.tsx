import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kylie Perales.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-28">
      <div className="max-w-xl">
        <SectionLabel label="Contact" />
        <h1 className="mt-4 text-4xl leading-[1.02] tracking-tight md:text-6xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
          The fastest way to reach me is email. I&apos;m always glad to hear from
          founders, collaborators, and anyone building something interesting.
        </p>

        <dl className="mt-10 space-y-6">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Email
            </dt>
            <dd className="mt-1">
              <a href={`mailto:${SITE.email}`} className="text-lg underline underline-offset-4">
                {SITE.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              LinkedIn
            </dt>
            <dd className="mt-1">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline underline-offset-4"
              >
                linkedin.com/in/kylieperales
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              YouTube
            </dt>
            <dd className="mt-1">
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline underline-offset-4"
              >
                @kylie_perales
              </a>
            </dd>
          </div>
          {SITE.resumeUrl ? (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Résumé
              </dt>
              <dd className="mt-1">
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg underline underline-offset-4"
                >
                  View Résumé
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </Container>
  );
}
