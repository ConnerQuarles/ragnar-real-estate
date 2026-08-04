import { Link } from "react-router-dom";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, COMPANY_NAME } from "../lib/constants";

const EFFECTIVE_DATE = "July 29, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-fog-100 sm:text-base">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-[45px] sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-fog">Effective date: {EFFECTIVE_DATE}</p>

      <p className="mt-6 text-sm leading-relaxed text-fog-100 sm:text-base">
        {COMPANY_NAME} ("Ragnar," "we," "us," or "our") respects your privacy. This Privacy Policy explains what
        information we collect through ragnar.realestate (the "Site"), how we use and share it, and the choices you
        have. By using the Site or submitting information to us, you agree to the practices described here.
      </p>

      <Section title="1. Information We Collect">
        <p>
          <strong className="text-ink">Information you give us.</strong> When you fill out a form on the Site, we
          collect the information you provide, which may include your name, phone number, email address, property
          address, your situation (e.g., foreclosure, probate, tax auction), and any message you send us.
        </p>
        <p>
          <strong className="text-ink">Information collected automatically.</strong> Like most websites, we
          automatically collect certain technical information when you visit, such as your IP address, browser and
          device type, pages viewed, referring page, and the date and time of your visit. We may use cookies or
          similar technologies (including analytics tools) to collect this information.
        </p>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc space-y-2 pl-6">
          <li>To respond to your inquiry and provide a consultation or offer;</li>
          <li>To communicate with you by phone, text message, or email about your situation and our services;</li>
          <li>To operate, maintain, and improve the Site;</li>
          <li>To detect, prevent, and address fraud, abuse, or security issues; and</li>
          <li>To comply with applicable law.</li>
        </ul>
      </Section>

      <Section title="3. Text Messaging and Call Communications">
        <p>
          If you provide your phone number, you may separately opt in to two categories of text messages, each with
          its own consent:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-ink">Marketing messages</strong> — about special offers, discounts, and service
            updates from {COMPANY_NAME}; and
          </li>
          <li>
            <strong className="text-ink">Non-marketing (transactional) messages</strong> — such as appointment
            reminders, confirmations, and account notifications related to your inquiry.
          </li>
        </ul>
        <p>
          Opting into one category does not opt you into the other. For either category, message frequency may
          vary, message and data rates may apply, and consent is not a condition of any purchase. You may opt out of
          text messages at any time by replying <strong className="text-ink">STOP</strong>, or request help by
          texting <strong className="text-ink">HELP</strong>.
        </p>
        <p>
          No mobile information will be shared with third parties or affiliates for marketing or promotional
          purposes. All other categories of information described in this policy exclude text messaging originator
          opt-in data and consent — that information is not shared with any third parties.
        </p>
      </Section>

      <Section title="4. How We Share Information">
        <p>
          We do not sell your personal information. We may share information with:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Service providers who support our operations, such as our customer relationship management (CRM),
            phone/texting, and website hosting providers, solely to help us provide our services;
          </li>
          <li>Professionals we work with on your behalf (e.g., title companies, attorneys) when relevant to your inquiry;</li>
          <li>Government authorities or other parties when required by law or legal process; and</li>
          <li>A successor entity in the event of a merger, acquisition, or sale of assets.</li>
        </ul>
      </Section>

      <Section title="5. Cookies and Similar Technologies">
        <p>
          We may use cookies and similar technologies to understand how visitors use the Site and to improve your
          experience. You can control cookies through your browser settings; disabling cookies may affect how the
          Site functions.
        </p>
      </Section>

      <Section title="6. Data Retention">
        <p>
          We retain personal information for as long as reasonably necessary to fulfill the purposes described in
          this policy, maintain business records, and comply with legal obligations.
        </p>
      </Section>

      <Section title="7. Your Privacy Choices">
        <p>
          You may ask us to access, correct, or delete the personal information we hold about you, or ask us to stop
          contacting you, by reaching out using the contact information below. If you are a Connecticut resident,
          you may have additional rights under the Connecticut Data Privacy Act. We will respond to verifiable
          requests consistent with applicable law.
        </p>
      </Section>

      <Section title="8. Data Security">
        <p>
          We use reasonable administrative, technical, and physical safeguards designed to protect your information.
          No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          The Site is not directed to children under 13, and we do not knowingly collect personal information from
          children under 13.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The "Effective date" above reflects when this policy
          was last revised. Continued use of the Site after a revision means you accept the updated policy.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>
          If you have questions about this Privacy Policy or how we handle your information, contact us:
        </p>
        <p>
          {COMPANY_NAME}
          <br />
          Email:{" "}
          <a href={`mailto:${EMAIL}`} className="text-gold-600 underline hover:text-gold-700">
            {EMAIL}
          </a>
          <br />
          Phone:{" "}
          <a href={PHONE_TEL} className="text-gold-600 underline hover:text-gold-700">
            {PHONE_DISPLAY}
          </a>
        </p>
      </Section>

      <p className="mt-12 text-sm text-fog">
        See also our{" "}
        <Link to="/terms-and-conditions" className="text-gold-600 underline hover:text-gold-700">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </section>
  );
}
