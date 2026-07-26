import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import AccentHeading from "../ui/AccentHeading";
import GlassCard from "../ui/GlassCard";
import { OTHER_BUYERS_POINTS, RAGNAR_POINTS } from "../../data/whyUs";

export default function WhyUsComparison() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <span className="eyebrow mb-3 block text-center text-gold-600">The Difference</span>
      <AccentHeading
        line="Not Every Cash Offer"
        accent="Comes With Someone Who Listens."
        subtext="It's not about who calls the most. It's about what actually happens between here and closing."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <GlassCard hoverGlow={false} className="p-8">
          <h3 className="text-center text-lg font-semibold text-fog-100">A Typical Cash Buyer</h3>
          <ul className="mt-6 space-y-4">
            {OTHER_BUYERS_POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 text-sm text-fog-100"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-fog" strokeWidth={2} />
                {point}
              </motion.li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="p-8 relative overflow-hidden">
          <h3 className="text-center text-lg font-semibold text-ink">With Ragnar Real Estate</h3>
          <ul className="mt-6 space-y-4">
            {RAGNAR_POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex items-start gap-3 text-sm text-ink"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.5} />
                {point}
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
