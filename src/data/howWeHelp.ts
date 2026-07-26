export interface HelpBucket {
  key: string;
  title: string;
  description: string;
  to: string;
  cta: string;
}

// Lead with STAY — it's the breadwinner message.
export const HELP_BUCKETS: HelpBucket[] = [
  {
    key: "stay",
    title: "Want to Stay?",
    description: "We stop the foreclosure, protect your equity, and keep you in your home — restructured on your terms.",
    to: "/foreclosure",
    cta: "See how staying works",
  },
  {
    key: "move",
    title: "Need to Move but Feel Stuck?",
    description: "We move you with dignity — into a new place, not the street. Deposit, first month, and moving costs handled.",
    to: "/foreclosure",
    cta: "See how moving works",
  },
  {
    key: "sell",
    title: "Ready to Sell?",
    description: "A fair, simple offer. Fast, any condition, no games.",
    to: "/fair-offer",
    cta: "Get a fair, simple offer",
  },
];
