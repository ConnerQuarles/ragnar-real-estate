import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "../../lib/constants";
import { useMagnetic } from "../../lib/useMagnetic";

interface CTAButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading font-semibold text-sm tracking-wide transition-all duration-300 whitespace-nowrap disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none";

const variants = {
  primary:
    "bg-clay-500 hover:bg-clay-600 text-paper shadow-[0_4px_14px_rgba(46,40,34,0.18)] hover:shadow-[0_6px_20px_rgba(46,40,34,0.24)] hover:scale-[1.02]",
  ghost:
    "border border-ink/15 text-ink hover:border-clay-500/50 hover:bg-clay-500/5",
};

export default function CTAButton({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const magneticRef = useMagnetic<HTMLElement>();

  if (to) {
    return (
      <Link ref={magneticRef as React.Ref<HTMLAnchorElement>} to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={magneticRef as React.Ref<HTMLAnchorElement>} href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      ref={magneticRef as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

/** Standing "Call or Text" CTA used in the nav, callouts, and forms. */
export function CallOrTextButton({ className = "" }: { className?: string }) {
  return (
    <CTAButton href={PHONE_TEL} variant="primary" className={className}>
      <Phone className="h-4 w-4" strokeWidth={2} />
      Call or Text — {PHONE_DISPLAY}
    </CTAButton>
  );
}
