import { motion } from "framer-motion";
import { HandCoins, PackageCheck, Scale } from "lucide-react";
import { PROBATE_STEP_CARDS } from "../../data/probateSteps";

const icons = [HandCoins, PackageCheck, Scale];

export default function ProbateSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {PROBATE_STEP_CARDS.map((card, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover flex flex-col items-center rounded-2xl p-8 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-100">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
