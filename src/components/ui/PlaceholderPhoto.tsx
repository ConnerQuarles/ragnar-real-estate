import { Home } from "lucide-react";

interface PlaceholderPhotoProps {
  label: string;
  alt: string;
  className?: string;
}

/**
 * Stand-in for a real photo. Swap for <img src={...} alt={alt} /> once the
 * asset named in `label` is supplied — the label is visible so editors can
 * find the right slot at a glance.
 */
export default function PlaceholderPhoto({ label, alt, className = "" }: PlaceholderPhotoProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gold-900/40 via-paper-soft to-smoke ${className}`}
    >
      <Home className="h-10 w-10 text-gold-600/50" strokeWidth={1.25} />
      <span className="absolute bottom-2 left-2 right-2 truncate text-[10px] uppercase tracking-wide text-fog/70">
        {label}
      </span>
    </div>
  );
}
