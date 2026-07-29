import { Quote } from "lucide-react";
import AccentHeading from "../ui/AccentHeading";
import PlaceholderPhoto from "../ui/PlaceholderPhoto";

interface TestimonialSpotlightsProps {
  count?: number;
}

/**
 * Reserved photo + story slots for testimonials we don't have yet — same
 * "coming soon" convention as PlaceholderStories, just with a photo slot
 * added since a testimonial needs a face, not only a quote.
 */
export default function TestimonialSpotlights({ count = 3 }: TestimonialSpotlightsProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <span className="eyebrow mb-3 block text-center text-gold-600">Testimonials</span>
      <AccentHeading
        line="Their Situations Were Different."
        accent="Our Care Wasn't."
        subtext="We're gathering permission from families to share their stories here, in their own words and photos. Check back soon — and if you've worked with us and would like to share yours, we'd be honored."
      />

      <div className="mt-16 space-y-12">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-6 md:flex-row md:gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <PlaceholderPhoto
              label={`Testimonial Photo Slot ${i + 1}`}
              alt="Reserved for a client photo"
              className="h-64 w-full shrink-0 rounded-2xl md:w-72"
            />
            <div className="flex min-h-[220px] flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-gold-500/25 bg-ink/[0.02] p-8 text-center md:items-start md:p-10 md:text-left">
              <Quote className="h-8 w-8 text-gold-500/40" strokeWidth={1.5} />
              <p className="mt-4 text-sm font-medium uppercase tracking-wide text-fog">
                Family Story Slot {i + 1}
              </p>
              <p className="mt-2 max-w-sm text-sm text-fog/70">
                Reserved for a real family's story — coming soon, in their own words.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
