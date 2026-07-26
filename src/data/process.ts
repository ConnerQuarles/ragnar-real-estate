export interface ProcessStep {
  title: string;
  description: string;
}

// Shared across every situation page — process-first framing, not offer-first.
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Reach Out",
    description: "Call or text, or send the form. No pressure, no obligation — just a conversation.",
  },
  {
    title: "We Listen First",
    description: "We learn your situation, your timeline, and what matters most before talking about anything else. No agenda.",
  },
  {
    title: "Explore Your Options",
    description: "We walk you through every path — staying in your home restructured on your terms, or moving on and closing with certainty. Options, not an ultimatum.",
  },
  {
    title: "We Handle the Hard Part",
    description: "Repairs, cleanups, rehabs, leave-behind, attorney coordination, moving logistics. You don't lift a finger.",
  },
  {
    title: "Close On Your Timeline",
    description: "A real, certain close date. No bank limbo, no showings. You stay in control.",
  },
];
