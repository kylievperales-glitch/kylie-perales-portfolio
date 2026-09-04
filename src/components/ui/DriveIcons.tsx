/** Simple white line-icons for the "What Drives Me" section — one per theme. */

const shared = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BuildIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <rect x="4" y="4" width="16" height="16" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

export function MomentumIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <line x1="5" y1="19" x2="19" y2="5" />
      <polyline points="9 5 19 5 19 15" />
    </svg>
  );
}

export function UnderstandIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.5" y1="15.5" x2="20.5" y2="20.5" />
    </svg>
  );
}

export function AmbitionIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <polyline points="4 18 10 8 14 13 20 4" />
      <polyline points="20 10 20 4 14 4" />
    </svg>
  );
}

export function PeopleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.6-3.4 3-5.3 5.5-5.3s4.9 1.9 5.5 5.3" />
      <circle cx="16.5" cy="9" r="2.4" />
      <path d="M15.2 14.9c1.9.4 3.5 2 4 4.9" />
    </svg>
  );
}

export function ExperiencesIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <path d="M12 21s7-6.1 7-11.5a7 7 0 0 0-14 0C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}
