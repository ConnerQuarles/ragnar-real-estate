import { motion } from "framer-motion";
import { CallOrTextButton } from "../ui/CTAButton";
import CTAButton from "../ui/CTAButton";

interface CalloutBandProps {
  line: string;
  accent: string;
  subtext?: string;
  formHref?: string;
}

export default function CalloutBand({ line, accent, subtext, formHref = "#contact" }: CalloutBandProps) {
  return (
    <section className="relative mx-4 my-16 overflow-hidden rounded-3xl border border-ink/8 bg-paper-soft px-6 py-16 text-center sm:mx-6 lg:mx-auto lg:max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
          {line}
          <span className="accent-text block mt-1">{accent}</span>
        </h2>
        {subtext && <p className="mx-auto mt-4 max-w-xl text-fog-100">{subtext}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={formHref} variant="ghost">
            Get My Free Consultation
          </CTAButton>
          <CallOrTextButton />
        </div>
      </motion.div>
    </section>
  );
}
