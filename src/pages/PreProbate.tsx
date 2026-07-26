import AccentHeading from "../components/ui/AccentHeading";
import ProcessSteps from "../components/sections/ProcessSteps";
import WhyUsComparison from "../components/sections/WhyUsComparison";
import PlaceholderStories from "../components/sections/PlaceholderStories";
import ContactSection from "../components/sections/ContactSection";
import { PROCESS_STEPS } from "../data/process";

export default function PreProbate() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="Planning Ahead?"
          accent="Handle the Property Before It Becomes a Burden."
          subtext="You don't have to wait for the court process to finish before talking to us. Pre-probate situations are welcome — we get ahead of it with you, and we advance and cover attorney costs. No out-of-pocket cost to you."
        />
      </section>

      <ProcessSteps steps={PROCESS_STEPS} />
      <WhyUsComparison />
      <PlaceholderStories
        headingLine="Real Stories,"
        headingAccent="Real Families"
        label="Pre-Probate"
      />

      <ContactSection
        line="Let's Talk Through"
        accent="What's Ahead."
        subtext="Free, no-pressure consultation. We're comfortable working alongside pre-probate timelines."
        defaultSituation="Pre-Probate"
      />
    </>
  );
}
