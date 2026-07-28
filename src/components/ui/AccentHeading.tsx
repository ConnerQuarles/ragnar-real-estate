import { motion } from "framer-motion";
import type { ReactNode } from "react";
import RevealText from "./RevealText";

interface AccentHeadingProps {
  /** Plain (ink) line, rendered first. */
  line: ReactNode;
  /** Color-accented phrase — always rendered on its own line per brand rule. */
  accent: ReactNode;
  /** Optional supporting copy below the heading. */
  subtext?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "md";
  className?: string;
}

const sizes = {
  lg: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
  md: "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight",
};

export default function AccentHeading({
  line,
  accent,
  subtext,
  as: Tag = "h2",
  size = "md",
  className = "",
}: AccentHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className={`relative inline-block px-4 ${sizes[size]}`}>
        <Tag className={`${sizes[size]} leading-[1.3]`}>
          <RevealText className="text-ink">{line}</RevealText>
          <RevealText delay={0.08} className="accent-text mt-1 sm:mt-2">
            {accent}
          </RevealText>
        </Tag>
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative mt-5 text-lg leading-relaxed text-fog-100 max-w-2xl mx-auto"
          >
            {subtext}
          </motion.p>
        )}
      </div>
    </div>
  );
}
