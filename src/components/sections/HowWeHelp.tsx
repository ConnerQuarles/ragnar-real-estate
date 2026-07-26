import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Truck, HandCoins, ArrowRight, ArrowUpRight } from "lucide-react";
import AccentHeading from "../ui/AccentHeading";
import { HELP_BUCKETS } from "../../data/howWeHelp";

const [stay, move, sell] = HELP_BUCKETS;

/**
 * A bento-style trio, not three matching cards: Stay gets the big featured
 * block (it's the breadwinner message), Move gets a standard card, Sell
 * gets a compact solid-fill banner. Same content shape, three different
 * visual treatments so the section doesn't read as copy-pasted.
 */
export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 scroll-mt-24">
      <span className="eyebrow mb-3 block text-center text-gold-600">How We Help</span>
      <AccentHeading line="Wherever You're Starting," accent="There's a Path for You." />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* STAY — big featured block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="md:col-span-7 md:row-span-2"
        >
          <Link
            to={stay.to}
            className="glass-card glass-card-hover group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-9"
          >
            <div className="relative">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-600">
                <Home className="h-8 w-8" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-heading text-3xl font-semibold text-ink sm:text-4xl">{stay.title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-fog-100">{stay.description}</p>
            </div>
            <span className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 transition-transform group-hover:translate-x-1">
              {stay.cta} <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>

        {/* MOVE — standard card, icon-inline layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-5"
        >
          <Link to={move.to} className="glass-card glass-card-hover group flex h-full items-start gap-4 rounded-3xl p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600">
              <Truck className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-ink">{move.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-100">{move.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 transition-transform group-hover:translate-x-1">
                {move.cta} <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* SELL — compact solid banner, distinct from the glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-5"
        >
          <Link
            to={sell.to}
            className="group flex h-full items-center justify-between gap-4 rounded-3xl bg-clay-500 p-7 text-paper transition-transform duration-300 hover:scale-[1.015]"
          >
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper/10">
                <HandCoins className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-paper">{sell.title}</h3>
              <p className="mt-1.5 max-w-[26ch] text-sm leading-snug opacity-80">{sell.description}</p>
            </div>
            <ArrowUpRight className="h-6 w-6 shrink-0 self-start transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
