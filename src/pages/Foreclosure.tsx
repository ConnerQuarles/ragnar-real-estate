import TwoPathFramework from "../components/sections/TwoPathFramework";
import ProcessSteps from "../components/sections/ProcessSteps";
import WhyUsComparison from "../components/sections/WhyUsComparison";
import CalloutBand from "../components/sections/CalloutBand";
import ContactSection from "../components/sections/ContactSection";
import AccentHeading from "../components/ui/AccentHeading";
import { PROCESS_STEPS } from "../data/process";

export default function Foreclosure() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="Behind on Payments or Already in Foreclosure?"
          accent="Let's Find the Path That Fits Your Goals."
          subtext="Whether you've already missed a payment or you can just see it coming, the earlier we talk, the more paths stay open. Staying in your home is possible, and if moving on is the right call, you can do it on your terms, with dignity."
        />
      </section>

      <TwoPathFramework />
      <ProcessSteps steps={PROCESS_STEPS} />
      <WhyUsComparison />
      <CalloutBand
        line="You Still Have Time —"
        accent="Act Now."
        subtext="The earlier you reach out, the more options you have. Free consultation, no pressure."
      />
      <ContactSection
        line="Let's Talk Through"
        accent="Your Situation."
        subtext="Tell us a bit about what's going on. We'll respond fast, and there's never any pressure."
        defaultSituation="Foreclosure"
      />
    </>
  );
}
