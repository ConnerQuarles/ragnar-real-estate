import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Sparkles, Quote } from "lucide-react";
import AccentHeading from "../ui/AccentHeading";
import PlaceholderPhoto from "../ui/PlaceholderPhoto";
import type { CaseStudy } from "../../data/caseStudies";

function CaseCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="glass-card glass-card-hover flex flex-col overflow-hidden rounded-2xl"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        className="flex flex-col text-left"
        aria-expanded={open}
      >
        <PlaceholderPhoto label={study.imageSlotLabel} alt={study.imageAlt} className="h-44 w-full" />
        <div className="px-6 pt-5">
          <h3 className="text-center text-base font-semibold text-ink">{study.title}</h3>
          <p className="mt-2 text-center text-sm italic text-fog-100">"{study.hook}"</p>
        </div>
        <span className="mx-auto mt-3 mb-1 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-gold-600">
          <Plus className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
          {open ? "Collapse" : "Read the story"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink/10 px-6 py-6">
              {study.body.map((paragraph) => (
                <p key={paragraph} className="mb-3 text-sm leading-relaxed text-fog-100 last:mb-0">
                  {paragraph}
                </p>
              ))}

              <div className="mt-4 space-y-2 rounded-xl border border-gold-500/25 bg-gold-500/10 p-4">
                {study.highlights.map((highlight) => (
                  <p key={highlight} className="flex items-start gap-2 text-sm font-medium text-ink">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {highlight}
                  </p>
                ))}
              </div>

              {study.closing && (
                <p className="mt-4 text-center text-sm font-semibold text-gold-700">{study.closing}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function PlaceholderCard({ label }: { label: string }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-gold-500/25 bg-ink/[0.02] p-8 text-center">
      <Quote className="h-8 w-8 text-gold-500/40" strokeWidth={1.5} />
      <p className="mt-4 text-sm font-medium uppercase tracking-wide text-fog">{label}</p>
      <p className="mt-2 text-xs text-fog/70">Reserved for a real story — to be added.</p>
    </div>
  );
}

interface CaseStudyCardsProps {
  studies: CaseStudy[];
  headingLine: string;
  headingAccent: string;
  /** Extra dashed placeholder cards rendered alongside the real ones (e.g. real story + "more coming soon"). */
  placeholderCount?: number;
  placeholderLabel?: string;
}

export default function CaseStudyCards({
  studies,
  headingLine,
  headingAccent,
  placeholderCount = 0,
  placeholderLabel = "More Stories Coming Soon",
}: CaseStudyCardsProps) {
  const total = studies.length + placeholderCount;
  const gridCols = total >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <AccentHeading line={headingLine} accent={headingAccent} />
      <div className={`mt-14 grid gap-6 ${gridCols} ${total <= 2 ? "mx-auto max-w-3xl" : ""}`}>
        {studies.map((study) => (
          <CaseCard key={study.slug} study={study} />
        ))}
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <PlaceholderCard key={i} label={`${placeholderLabel}${placeholderCount > 1 ? ` ${i + 1}` : ""}`} />
        ))}
      </div>
    </section>
  );
}
