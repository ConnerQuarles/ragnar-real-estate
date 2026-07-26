import { motion } from "framer-motion";
import AccentHeading from "../ui/AccentHeading";
import type { ProcessStep } from "../../data/process";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <span className="eyebrow mb-3 block text-center text-gold-600">Our Process</span>
      <AccentHeading
        line="Want to Understand"
        accent="How This Works?"
        subtext="No surprises. Here's exactly what working with Ragnar looks like, start to finish."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="glass-card glass-card-hover rounded-2xl p-6"
          >
            <span className="step-number accent-text text-3xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fog-100">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
