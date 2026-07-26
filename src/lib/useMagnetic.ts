import { useEffect, useRef } from "react";
import { gsap } from "./gsap";

/**
 * Magnetic hover: the element eases toward the cursor within its own
 * bounds, then springs back on leave. Skipped for touch devices and
 * prefers-reduced-motion. Returns a ref to attach to the target element.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const setX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      setX((e.clientX - (rect.left + rect.width / 2)) * strength);
      setY((e.clientY - (rect.top + rect.height / 2)) * strength);
    }
    function onLeave() {
      setX(0);
      setY(0);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
