import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registered once at app root (imported by main.tsx before anything renders).
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
