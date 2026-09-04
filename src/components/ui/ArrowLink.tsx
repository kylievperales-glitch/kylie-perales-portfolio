import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const content = (
    <span
      className={`group inline-flex items-center gap-2 text-sm font-medium tracking-tight ${className}`}
    >
      <span className="border-b border-current/0 transition-colors duration-300 group-hover:border-current/60">
        {children}
      </span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
