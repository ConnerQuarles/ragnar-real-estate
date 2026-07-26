export interface PathOption {
  key: string;
  label: string;
  tagline: string;
  bullets: string[];
  bestFor: string;
  nextStep: string;
}

export const TWO_PATHS: PathOption[] = [
  {
    key: "stay",
    label: "PATH 1 — Stay In Your Home",
    tagline: "Keep your home. Restructure the situation, not your address.",
    bullets: [
      "Stop the foreclosure — and all the calls, texts, and letters that come with it",
      "Protect the equity you've built",
      "Keep you in your home, restructured on your terms",
    ],
    bestFor: "You want to stay if there's any way to make it work — you just need someone to show you how.",
    nextStep: "Let's talk through what staying could look like for you.",
  },
  {
    key: "move",
    label: "PATH 2 — Move On Your Terms",
    tagline: "Sell before it escalates. Control the outcome — not the bank.",
    bullets: [
      "Sell before it escalates — control the outcome, not the bank",
      "Get into your next home — approval, lease, deposit & moving handled",
      "Walk away with money in hand",
    ],
    bestFor: "You're ready for a fresh start and want it handled with speed and certainty.",
    nextStep: "Let's map out your next home and your close date.",
  },
];
