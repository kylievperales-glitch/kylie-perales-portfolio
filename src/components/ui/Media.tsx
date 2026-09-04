import Image from "next/image";
import type { Aspect, ImageAsset } from "@/lib/types";

const ASPECT_RATIO: Record<Exclude<Aspect, "auto">, string> = {
  square: "1 / 1",
  portrait: "4 / 5",
  landscape: "3 / 2",
  wide: "16 / 9",
  video: "16 / 9",
};

/** "auto" uses the source file's real dimensions so it displays at its true
 * proportions with no cropping; falls back to a portrait box if dimensions
 * weren't supplied. */
function resolveAspectRatio(asset: ImageAsset): string {
  if (asset.aspect === "auto") {
    if (asset.width && asset.height) return `${asset.width} / ${asset.height}`;
    return ASPECT_RATIO.portrait;
  }
  return ASPECT_RATIO[asset.aspect];
}

export function Media({
  asset,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  dark = false,
  grayscale = false,
}: {
  asset: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  dark?: boolean;
  grayscale?: boolean;
}) {
  if (asset.src) {
    return (
      <div
        className={`relative overflow-hidden bg-paper-dim ${className}`}
        style={{ aspectRatio: resolveAspectRatio(asset) }}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${grayscale ? "grayscale" : ""}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-end overflow-hidden border ${
        dark
          ? "border-line-on-ink bg-charcoal"
          : "border-line bg-paper-dim"
      } ${className}`}
      style={{
        aspectRatio: resolveAspectRatio(asset),
        backgroundImage: dark
          ? "repeating-linear-gradient(135deg, rgba(247,245,241,0.05) 0px, rgba(247,245,241,0.05) 1px, transparent 1px, transparent 14px)"
          : "repeating-linear-gradient(135deg, rgba(10,10,10,0.05) 0px, rgba(10,10,10,0.05) 1px, transparent 1px, transparent 14px)",
      }}
      role="img"
      aria-label={asset.alt}
    >
      <span
        className={`m-3 inline-block max-w-[85%] font-mono text-[10px] uppercase leading-snug tracking-[0.1em] ${
          dark ? "text-muted-on-ink" : "text-muted"
        }`}
      >
        [ {asset.label} ]
      </span>
    </div>
  );
}
