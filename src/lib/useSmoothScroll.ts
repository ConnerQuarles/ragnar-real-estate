import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

/**
 * Wires Lenis smooth scrolling into gsap's ticker so ScrollTrigger and Lenis
 * share one rAF loop, resets scroll position on route change, and refreshes
 * ScrollTrigger afterward (page height/content differs per route). Skips
 * Lenis entirely under prefers-reduced-motion — native instant scroll is the
 * accessible default there.
 */
export function useSmoothScroll(pathname: string) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({ autoRaf: false });
    lenisRef.current = lenis;

    function raf(time: number) {
      // gsap.ticker reports elapsed time in seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);
}
