import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleCheck } from "lucide-react";
import AccentHeading from "../ui/AccentHeading";
import CTAButton from "../ui/CTAButton";
import { TWO_PATHS } from "../../data/twoPaths";

export default function TwoPathFramework() {
  const [openKey, setOpenKey] = useState<string | null>(TWO_PATHS[0]?.key ?? null);

  return (
    <section className="mx-auto max-w-5xl px-4 pt-24 sm:px-6 lg:px-8">
      <AccentHeading
        line="You Have Two"
        accent="Real Paths Forward"
        subtext="Neither one is the 'wrong' choice. Pick the one that fits your life right now — and see exactly what it involves."
      />

      <div className="mt-12 space-y-5">
        {TWO_PATHS.map((path) => {
          const isOpen = openKey === path.key;
          return (
            <div
              key={path.key}
              className={`glass-card overflow-hidden rounded-2xl transition-colors duration-300 ${
                isOpen ? "border-gold-500/50" : "border-ink/10 hover:border-gold-500/30"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenKey(isOpen ? null : path.key)}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-8"
                aria-expanded={isOpen}
              >
                <div>
                  <p className="font-heading text-lg font-semibold text-ink sm:text-xl">{path.label}</p>
                  <p className="mt-1 text-sm text-fog-100">{path.tagline}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-ink/10 px-6 py-6 sm:px-8">
                      <ul className="space-y-3">
                        {path.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-sm text-fog-100">
                            <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2} />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-5 rounded-xl border border-gold-500/20 bg-gold-500/5 px-4 py-3 text-sm italic text-fog-100">
                        Best for: {path.bestFor}
                      </p>

                      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-fog-100">{path.nextStep}</p>
                        <CTAButton href="#contact" variant="ghost">
                          Talk to Us About This Path
                        </CTAButton>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
