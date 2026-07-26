import AccentHeading from "../components/ui/AccentHeading";
import ProbateSteps from "../components/sections/ProbateSteps";
import ProcessSteps from "../components/sections/ProcessSteps";
import WhyUsComparison from "../components/sections/WhyUsComparison";
import PlaceholderStories from "../components/sections/PlaceholderStories";
import ContactSection from "../components/sections/ContactSection";
import { CallOrTextButton } from "../components/ui/CTAButton";
import { PROCESS_STEPS } from "../data/process";

export default function Probate() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="We Buy Homes —"
          accent="Simple, Fair, and On Your Timeline."
          subtext="Dealing with an estate is hard enough. We make the property side simple. No repairs. No showings. No waiting. We buy as-is, on your schedule."
        />
      </section>

      <ProbateSteps />
      <ProcessSteps steps={PROCESS_STEPS} />
      <WhyUsComparison />
      <PlaceholderStories
        headingLine="Real Stories,"
        headingAccent="Real Families"
        label="Probate"
      />

      <section className="mx-auto max-w-3xl px-4 pb-8 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
          You focus on the family.
          <span className="accent-text block mt-1">We'll take care of the property.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <CallOrTextButton />
        </div>
      </section>

      <ContactSection
        line="Let's Talk Through"
        accent="The Estate."
        subtext="Free, no-pressure consultation. Call or text anytime — we're here to help."
        defaultSituation="Probate"
      />
    </>
  );
}
