import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AccentHeading from "../components/ui/AccentHeading";
import RagnarMark from "../components/ui/RagnarMark";
import HowWeHelp from "../components/sections/HowWeHelp";
import PathSelector from "../components/sections/PathSelector";

export default function Home() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 pb-[205px] text-center sm:px-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex justify-center"
          >
            <RagnarMark className="h-[280px] sm:h-[320px]" />
          </motion.div>

          <AccentHeading
            as="h1"
            size="lg"
            line="We Know This Is Hard."
            accent="Let's Walk Through It Together."
            subtext="No pressure, no scripts, no cash-fast pitches — just someone who will actually listen and help you find what's right for your family."
          />
        </div>

        <motion.a
          href="#get-started"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-6 flex flex-col items-center gap-1 text-fog"
          aria-label="Scroll to get started"
        >
          <span className="eyebrow">Explore your options</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </section>

      <PathSelector />
      <HowWeHelp />
    </>
  );
}
