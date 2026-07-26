import { motion } from "framer-motion";
import { Home, Users, CalendarCheck, ShieldCheck } from "lucide-react";
import AccentHeading from "../components/ui/AccentHeading";
import ProcessSteps from "../components/sections/ProcessSteps";
import WhyUsComparison from "../components/sections/WhyUsComparison";
import ContactSection from "../components/sections/ContactSection";
import { PROCESS_STEPS } from "../data/process";

const REASONS = [
  {
    icon: Home,
    title: "Any Condition, Any Price",
    description: "We buy exactly as-is — no repairs, no cleanouts, no staging. What you see is what we buy.",
  },
  {
    icon: Users,
    title: "No Showings, No Strangers",
    description: "No open houses, no lockboxes, no strangers walking through your home. Just a private conversation, on your terms.",
  },
  {
    icon: CalendarCheck,
    title: "A Real Closing Date",
    description: "No waiting on a buyer's financing or a bank's approval. You'll know exactly when you're closing, and we stick to it.",
  },
  {
    icon: ShieldCheck,
    title: "Clarity, Not Pressure",
    description: "One clear offer, explained plainly, with time to think it over. No script, no countdown clock.",
  },
];

export default function FairOffer() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pt-[45px] sm:px-6 lg:px-8">
        <AccentHeading
          as="h1"
          size="lg"
          line="Ready to Sell,"
          accent="No Agents. No Showings. No Repairs."
          subtext="The uncertainty of a traditional sale — will it close, and when — is gone. We offer real clarity: a fair number in any condition, a firm closing date, and a simple, clean process from start to finish."
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="eyebrow mb-3 block text-center text-gold-600">Why It's Simple</span>
        <AccentHeading
          line="A Clean, Straightforward Sale,"
          accent="However Your Home Looks Right Now."
          subtext="No listing, no strangers walking through your home, no money spent getting it ready. Here's what actually happens instead."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="glass-card glass-card-hover flex items-start gap-4 rounded-2xl p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600">
                <reason.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog-100">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProcessSteps steps={PROCESS_STEPS} />
      <WhyUsComparison />

      <ContactSection
        line="Let's Talk Through"
        accent="Your Home."
        subtext="Free, no-pressure consultation. Tell us about the property — any condition, any situation — and we'll respond fast."
        defaultSituation="Just want a fair offer"
      />
    </>
  );
}
