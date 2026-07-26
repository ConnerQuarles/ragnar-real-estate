import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Masked line reveal: the line clips behind an overflow-hidden band and
 * slides up into place, instead of a plain fade. The classic Awwwards-style
 * text entrance — built with Framer Motion, no paid SplitText plugin.
 *
 * Animates on mount rather than `whileInView`: this component is used for
 * both above-the-fold heroes and below-the-fold section titles, and
 * nested-viewport IntersectionObserver detection proved unreliable here
 * (the line stayed clipped at its initial offset). Mount-triggered animation
 * always resolves correctly; the trade-off is that a heading far down the
 * page will have already revealed by the time it's scrolled to.
 */
export default function RevealText({ children, delay = 0, className = "" }: RevealTextProps) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
