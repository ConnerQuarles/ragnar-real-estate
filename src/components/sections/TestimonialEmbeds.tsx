import AccentHeading from "../ui/AccentHeading";
import InstagramEmbed from "../ui/InstagramEmbed";
import { TESTIMONIAL_POST_PERMALINKS } from "../../data/testimonialEmbeds";

export default function TestimonialEmbeds() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <span className="eyebrow mb-3 block text-center text-gold-600">More From Our Clients</span>
      <AccentHeading
        line="Their Situations Were Different."
        accent="Our Care Wasn't."
        subtext="A few more families who let us walk with them, in their own words."
      />

      <div className="mt-14 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIAL_POST_PERMALINKS.map((permalink) => (
          <InstagramEmbed
            key={permalink}
            permalink={permalink}
            className="glass-card w-full max-w-sm overflow-hidden rounded-2xl p-3"
          />
        ))}
      </div>
    </section>
  );
}
