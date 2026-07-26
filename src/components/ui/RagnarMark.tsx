import ragnarLogo from "../../assets/ragnar-logo.png";

interface RagnarMarkProps {
  className?: string;
  iconOnly?: boolean;
}

/**
 * The real Ragnar Real Estate logo — used in the nav, footer, and hero. The
 * source file is white linework on a transparent background (built for a
 * dark theme); `invert` flips it to warm-dark linework so it reads against
 * the light, warm-cream paper theme.
 */
export default function RagnarMark({ className = "", iconOnly = false }: RagnarMarkProps) {
  return (
    <img
      src={ragnarLogo}
      alt={iconOnly ? "" : "Ragnar Real Estate"}
      aria-hidden={iconOnly || undefined}
      className={`invert object-contain ${className}`}
      draggable={false}
    />
  );
}
