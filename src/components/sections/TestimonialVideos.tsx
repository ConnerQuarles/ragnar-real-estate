import AccentHeading from "../ui/AccentHeading";
import InstagramEmbed from "../ui/InstagramEmbed";
import { FEATURED_REEL_PERMALINK } from "../../data/testimonialEmbeds";

/**
 * The two video testimonials get their own spotlight, ahead of the photo
 * grid below — a voice and a face carry more of the "you're not alone"
 * feeling than a quote card can.
 */
export default function TestimonialVideos() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <span className="eyebrow mb-3 block text-center text-gold-600">In Their Own Voice</span>
      <AccentHeading
        line="Hearing It Straight"
        accent="From the Family Who Lived It."
        subtext="Nothing carries the feeling of being heard quite like hearing it in someone's own voice."
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <div className="glass-card overflow-hidden rounded-2xl p-3">
          <video
            src="/videos/testimonial-1.mp4"
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-full rounded-xl bg-ink/5 object-cover"
          />
        </div>
        <InstagramEmbed permalink={FEATURED_REEL_PERMALINK} className="glass-card flex items-center justify-center overflow-hidden rounded-2xl p-3" />
      </div>
    </section>
  );
}
