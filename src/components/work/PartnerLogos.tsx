import Image from "next/image";
import type { Project } from "@/lib/types";

export function PartnerLogos({ partners }: { partners: NonNullable<Project["partners"]> }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${partner.name}`}
          className="flex h-28 items-center justify-center border border-line bg-white px-6 transition-colors hover:border-ink md:h-32"
        >
          <Image
            src={partner.logoSrc}
            alt={partner.name}
            width={partner.logoWidth}
            height={partner.logoHeight}
            className="h-16 w-auto object-contain md:h-20"
          />
        </a>
      ))}
    </div>
  );
}
