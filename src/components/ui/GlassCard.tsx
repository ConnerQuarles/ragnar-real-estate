import type { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverGlow = true,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl ${hoverGlow ? "glass-card-hover" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
