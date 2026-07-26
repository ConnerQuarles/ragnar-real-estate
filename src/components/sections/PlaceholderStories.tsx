import { Quote } from "lucide-react";
import AccentHeading from "../ui/AccentHeading";

interface PlaceholderStoriesProps {
  headingLine: string;
  headingAccent: string;
  label: string;
  count?: number;
}

/**
 * Dashed placeholder slots for a page whose real stories haven't been
 * supplied yet. Never reuse another situation's stories here — the label
 * makes clear which real story is expected to land in each slot.
 */
export default function PlaceholderStories({ headingLine, headingAccent, label, count = 3 }: PlaceholderStoriesProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AccentHeading line={headingLine} accent={headingAccent} />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-gold-500/25 bg-ink/[0.02] p-8 text-center"
          >
            <Quote className="h-8 w-8 text-gold-500/40" strokeWidth={1.5} />
            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-fog">
              [{label} Story Slot {i + 1}]
            </p>
            <p className="mt-2 text-xs text-fog/70">Reserved for a real story — to be added.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
