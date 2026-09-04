export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
      {children}
    </span>
  );
}
