import AccentHeading from "../ui/AccentHeading";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  line: string;
  accent: string;
  subtext?: string;
  defaultSituation?: string;
}

export default function ContactSection({ line, accent, subtext, defaultSituation }: ContactSectionProps) {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 scroll-mt-24">
      <AccentHeading line={line} accent={accent} subtext={subtext} />
      <div className="mt-12">
        <ContactForm defaultSituation={defaultSituation} />
      </div>
    </section>
  );
}
