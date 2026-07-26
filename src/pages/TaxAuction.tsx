import AccentHeading from "../components/ui/AccentHeading";
import ProcessSteps from "../components/sections/ProcessSteps";
import WhyUsComparison from "../components/sections/WhyUsComparison";
import PlaceholderStories from "../components/sections/PlaceholderStories";
import ContactSection from "../components/sections/ContactSection";
import { PROCESS_STEPS } from "../data/process";

export default function TaxAuction() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="Facing a Tax Auction?"
          accent="A Hard Deadline Isn't the End of Your Options."
          subtext="A tax auction date is a fixed deadline — so speed matters. The goal is finding the fastest path to certainty before the date arrives. The sooner you act, the more room you have to work with."
        />
      </section>

      <ProcessSteps steps={PROCESS_STEPS} />
      <WhyUsComparison />
      <PlaceholderStories
        headingLine="Real Stories,"
        headingAccent="Real Tax Auctions Stopped"
        label="Tax Auction"
      />

      <ContactSection
        line="Let's Talk Through"
        accent="Your Timeline."
        subtext="Free, no-pressure consultation. We respond fast — every day matters before an auction date."
        defaultSituation="Tax Auction"
      />
    </>
  );
}
