import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Landmark, ScrollText, HandHeart, ArrowRight } from "lucide-react";
import AccentHeading from "../ui/AccentHeading";

const paths = [
  {
    to: "/foreclosure",
    icon: Landmark,
    title: "Facing Foreclosure or Tax Auction",
    description: "Stop the calls, letters, and clock. Understand every option before you decide anything.",
  },
  {
    to: "/probate",
    icon: ScrollText,
    title: "Inherited Property or Probate",
    description: "Dealing with an estate is hard enough. Let us make the property side simple.",
  },
  {
    to: "/fair-offer",
    icon: HandHeart,
    title: "I Just Want a Fair, Simple Offer",
    description: "No pressure, no obligation — just a straightforward conversation about your house.",
  },
];

export default function PathSelector() {
  return (
    <section id="get-started" className="mx-auto max-w-6xl px-4 pb-[81px] sm:px-6 lg:px-8 scroll-mt-24">
      <span className="eyebrow mb-3 block text-center text-gold-600">Get Started</span>
      <AccentHeading
        as="h2"
        line="What Are You"
        accent="Currently Experiencing?"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {paths.map((path, i) => (
          <motion.div
            key={path.to}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
          >
            <Link
              to={path.to}
              className="glass-card glass-card-hover group flex h-full flex-col items-center rounded-2xl p-8 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-600 transition-colors group-hover:bg-gold-500/25">
                <path.icon className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-100">{path.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 transition-transform group-hover:translate-x-1">
                Get Started <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
