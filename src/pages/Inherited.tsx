import AccentHeading from "../components/ui/AccentHeading";
import ProcessSteps from "../components/sections/ProcessSteps";
import WhyUsComparison from "../components/sections/WhyUsComparison";
import ContactSection from "../components/sections/ContactSection";
import { PROCESS_STEPS } from "../data/process";

export default function Inherited() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="Inherited a Property"
          accent="You Don't Want to Manage?"
          subtext="No repairs, no cleanouts — we buy as-is. Out-of-state, outdated, full of belongings, or shared between siblings, it doesn't have to become a second job. You focus on the family. We'll take care of the property."
        />
      </section>

      <ProcessSteps steps={PROCESS_STEPS} />
      <WhyUsComparison />

      <ContactSection
        line="Let's Talk Through"
        accent="The Property."
        subtext="Free, no-pressure consultation. We respond fast, and there's never any pressure."
        defaultSituation="Inherited"
      />
    </>
  );
}
