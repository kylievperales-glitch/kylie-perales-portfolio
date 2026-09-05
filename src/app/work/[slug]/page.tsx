import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Tag } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PresentationViewer } from "@/components/work/PresentationViewer";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { VideoCard } from "@/components/cards/VideoCard";
import { PartnerLogos } from "@/components/work/PartnerLogos";
import { CaptionedGallery } from "@/components/work/CaptionedGallery";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { getPresentationBySlug } from "@/lib/data/presentations";
import { getArticleBySlug } from "@/lib/data/articles";
import { CATEGORY_LABELS } from "@/lib/types";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const presentation = project.relatedPresentationSlug
    ? getPresentationBySlug(project.relatedPresentationSlug)
    : undefined;

  const relatedArticles = (project.relatedArticleSlugs ?? [])
    .map(getArticleBySlug)
    .filter(Boolean);

  const meta = [
    project.role ? { label: "Role", value: project.role } : null,
    { label: "Year", value: project.year },
    { label: "Category", value: project.category.map((c) => CATEGORY_LABELS[c]).join(", ") },
    project.organization ? { label: "Organization", value: project.organization } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article>
      <Container className="pb-14 pt-16 md:pb-20 md:pt-24">
        <ArrowLink href="/work" className="text-muted">
          ← Back to work
        </ArrowLink>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.team ? <Tag>Team Project</Tag> : null}
          {project.award ? <Tag>{project.award}</Tag> : null}
        </div>

        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-line py-6 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container className="pb-14">
        <Media
          asset={project.cover}
          priority
          sizes="100vw"
          className={`w-full ${project.coverClassName ?? ""}`}
        />
      </Container>

      {project.tags && project.tags.length > 0 ? (
        <Container className="pb-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Tags</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Container>
      ) : null}

      <Container className="grid grid-cols-1 gap-x-12 gap-y-14 pb-20 md:grid-cols-2">
        {project.context ? (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Context
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{project.context}</p>
          </section>
        ) : null}

        {project.myRole ? (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              My Role
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{project.myRole}</p>
          </section>
        ) : null}

        {project.approach ? (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Approach
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{project.approach}</p>
          </section>
        ) : null}

        {project.outcome ? (
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Outcome
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{project.outcome}</p>
          </section>
        ) : null}
      </Container>

      {project.documents && project.documents.length > 0 ? (
        <Container className="pb-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Source Material
          </h2>
          <ul className="mt-3 space-y-2">
            {project.documents.map((doc) => (
              <li key={doc.url}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-line text-sm hover:border-ink"
                >
                  {doc.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Container>
      ) : null}

      {project.experiences && project.experiences.length > 0 ? (
        <Container className="pb-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            The Experiences (Some of Them)
          </h2>
          <div className="mt-6">
            <CaptionedGallery items={project.experiences} />
          </div>
        </Container>
      ) : null}

      {project.partners && project.partners.length > 0 ? (
        <Container
          className={
            project.experiences?.length ? "border-t border-line py-20" : "pb-20"
          }
        >
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Data Partnerships We Secured
          </h2>
          <div className="mt-6">
            <PartnerLogos partners={project.partners} />
          </div>
        </Container>
      ) : null}

      {project.videos && project.videos.length > 0 ? (
        <Container className="border-t border-line py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Podcasts &amp; Video
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
            {project.videos.map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
        </Container>
      ) : null}

      {project.photoGroups && project.photoGroups.length > 0 ? (
        <Container
          className={
            project.experiences?.length || project.partners?.length || project.videos?.length
              ? "border-t border-line py-20"
              : "pb-20"
          }
        >
          {project.photoGroupsTitle ? (
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {project.photoGroupsTitle}
            </h2>
          ) : null}
          <div className={`space-y-16 ${project.photoGroupsTitle ? "mt-6" : ""}`}>
            {project.photoGroups.map((group) => {
              const columns =
                group.columns ??
                (group.photos.length >= 3 && group.photos.length % 3 === 0 ? 3 : 2);
              const colClass = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3" }[
                columns
              ];
              const sizes =
                columns === 1
                  ? "(min-width: 640px) 66vw, 100vw"
                  : columns === 3
                    ? "(min-width: 640px) 33vw, 100vw"
                    : "(min-width: 640px) 50vw, 100vw";

              return (
                <div key={group.title}>
                  <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {group.title}
                  </h2>
                  <div className={`mt-6 grid grid-cols-1 gap-6 ${colClass}`}>
                    {group.photos.map((asset, i) => (
                      <Media key={i} asset={asset} sizes={sizes} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      ) : null}

      {project.gallery && project.gallery.length > 0 ? (
        <Container
          className={
            project.experiences?.length ||
            project.partners?.length ||
            project.videos?.length ||
            project.photoGroups?.length
              ? "border-t border-line py-20"
              : "pb-20"
          }
        >
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {project.galleryTitle ?? "The Work"}
          </h2>
          <div className="mt-6">
            <CaptionedGallery items={project.gallery} />
          </div>
        </Container>
      ) : null}

      {presentation ? (
        <Container className="border-t border-line py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Presentation
          </h2>
          <div className="mt-6 max-w-4xl">
            <PresentationViewer presentation={presentation} />
          </div>
        </Container>
      ) : null}

      {relatedArticles.length > 0 ? (
        <Container className="border-t border-line py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Related Writing
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {relatedArticles.map((a) => (
              <ArticleCard key={a!.slug} article={a!} />
            ))}
          </div>
        </Container>
      ) : null}

      <Container className="border-t border-line py-16">
        <Link href="/work" className="text-sm text-muted hover:text-ink">
          ← Back to all work
        </Link>
      </Container>
    </article>
  );
}
