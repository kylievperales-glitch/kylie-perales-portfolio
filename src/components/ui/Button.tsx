import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-200 border";

const variants = {
  primary: "bg-ink text-paper border-ink hover:bg-transparent hover:text-ink",
  ghost: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  onInk: "bg-paper text-ink border-paper hover:bg-transparent hover:text-paper",
  ghostOnInk: "bg-transparent text-paper border-line-on-ink hover:border-paper",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (type) {
    return (
      <button type={type} className={classes}>
        {children}
      </button>
    );
  }

  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}
