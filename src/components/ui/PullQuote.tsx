export function PullQuote({
  children,
  attribution,
}: {
  children: string;
  attribution?: string;
}) {
  return (
    <figure className="my-10 border-l-2 border-ink py-1 pl-6 md:my-14 md:pl-10">
      <blockquote className="font-serif text-2xl leading-snug text-ink text-balance md:text-3xl">
        &ldquo;{children}&rdquo;
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
