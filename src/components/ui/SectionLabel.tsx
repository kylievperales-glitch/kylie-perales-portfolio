export function SectionLabel({
  index,
  label,
  className = "",
  dark = false,
}: {
  index?: string;
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted ${className}`}
    >
      {index ? (
        <span className={dark ? "text-paper/40" : "text-ink/40"}>{index}</span>
      ) : null}
      <span>{label}</span>
    </div>
  );
}
