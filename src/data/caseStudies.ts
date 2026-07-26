export interface CaseStudy {
  slug: string;
  imageSlotLabel: string; // [IMAGE SLOT] — swap PlaceholderPhoto for a real <img> once supplied
  imageAlt: string;
  title: string;
  hook: string;
  body: string[];
  highlights: string[];
  closing?: string;
}

// Real client stories — foreclosure path, whether the case was already filed
// or caught early. Deal mechanics kept intentionally vague.
export const FORECLOSURE_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ledyard",
    imageSlotLabel: "IMAGE SLOT: Ledyard",
    imageAlt: "The Ledyard property where a homeowner cleared $75,000 in arrears",
    title: "Ledyard — $75K Behind, Wiped Clean",
    hook: "Auction approaching, deep in arrears. He walked away with his life back.",
    body: [
      "The auction was approaching and the arrears kept climbing — the kind of situation that feels impossible to see a way out of.",
    ],
    highlights: [
      "$75,000 in arrears — cleared",
      "Foreclosure removed from the record",
      "Credit intact — no bankruptcy, no deficiency",
      "Moved on, on his own terms",
    ],
    closing: "He got his life back. Everybody wins.",
  },
  {
    slug: "east-hartford",
    imageSlotLabel: "IMAGE SLOT: East Hartford blue house",
    imageAlt: "The East Hartford home where we helped a homeowner avoid a foreclosure auction",
    title: "East Hartford — Foreclosure Auction Prevented",
    hook: "Days from losing his home. We turned it into a fresh start.",
    body: [
      "Our client was facing the loss of his home, with the auction date closing in fast.",
      "We got him approved and settled into his next place — covering the security deposit, first month's rent, and moving costs — and moved him into a new chapter with pride.",
      "Then we took care of the property so he could move on.",
    ],
    highlights: ["Everybody wins. That's the Ragnar way."],
  },
  {
    slug: "plainville",
    imageSlotLabel: "IMAGE SLOT: Plainville / Janet",
    imageAlt: "The Plainville property where we supported Janet's family through foreclosure",
    title: "Plainville — Showing Up for Janet's Family",
    hook: "Foreclosure was the least of what she was facing.",
    body: [
      "We met Janet in foreclosure — losing her sight, her father battling late-stage cancer, income gone, and a 17-year-old son trying to finish high school.",
      "Janet didn't just need a real estate solution — she needed someone to show up for her family. That's what Ragnar does.",
    ],
    highlights: [
      "Helped her get cataract surgery — and restored her sight",
      "Secured state caregiver income for her father",
      "Signed her family into a new home — deposit, move-in, and moving costs all covered",
    ],
    closing: "Then we took care of the property. Everybody wins.",
  },
];
