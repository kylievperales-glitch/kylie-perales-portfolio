export function SectionLabel({
  index,
  label,
  className = "",
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted ${className}`}
    >
      {index ? <span className="text-ink/40">{index}</span> : null}
      <span>{label}</span>
    </div>
  );
}
