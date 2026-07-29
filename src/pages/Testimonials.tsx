import AccentHeading from "../components/ui/AccentHeading";
import TestimonialVideos from "../components/sections/TestimonialVideos";
import TestimonialEmbeds from "../components/sections/TestimonialEmbeds";
import CalloutBand from "../components/sections/CalloutBand";
import ContactSection from "../components/sections/ContactSection";

export default function Testimonials() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="Real Families."
          accent="Real Weight Lifted."
          subtext="Every homeowner who trusts us with their situation is going through something hard. Here's a look at a few of their stories, and what it felt like to finally have someone listen."
        />
      </section>

      <TestimonialVideos />
      <TestimonialEmbeds />

      <CalloutBand
        line="Maybe Your Story"
        accent="Is Next."
        subtext="Wherever you're starting from, we'd be honored to listen. No pressure, no scripts — just a real conversation about what's possible."
      />

      <ContactSection
        line="Let's Talk Through"
        accent="What You're Facing."
        subtext="Tell us a bit about your situation. We'll respond quickly, and there's never any pressure."
      />
    </>
  );
}
