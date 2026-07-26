import AccentHeading from "../components/ui/AccentHeading";
import ProcessSteps from "../components/sections/ProcessSteps";
import WhyUsComparison from "../components/sections/WhyUsComparison";
import PlaceholderStories from "../components/sections/PlaceholderStories";
import ContactSection from "../components/sections/ContactSection";
import { PROCESS_STEPS } from "../data/process";

export default function Distressed() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="Whatever the Situation,"
          accent="There's a Way Through."
          subtext="Code violations, deferred repairs, liens, or a property that's just become too much to manage — we buy as-is. Repairs, cleanouts, and rehabs are on us. Leave behind whatever you want. Any condition."
        />
      </section>

      <ProcessSteps steps={PROCESS_STEPS} />
      <WhyUsComparison />
      <PlaceholderStories
        headingLine="Real Stories,"
        headingAccent="Real Properties, Any Condition"
        label="Distressed Property"
      />

      <ContactSection
        line="Let's Talk Through"
        accent="Your Property."
        subtext="Free, no-pressure consultation. Whatever shape it's in, we'll take a look."
        defaultSituation="Distressed"
      />
    </>
  );
}
