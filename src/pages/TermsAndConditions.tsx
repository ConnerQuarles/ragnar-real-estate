import { Link } from "react-router-dom";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, COMPANY_NAME, SERVICE_AREA } from "../lib/constants";

const EFFECTIVE_DATE = "July 29, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-fog-100 sm:text-base">{children}</div>
    </section>
  );
}

export default function TermsAndConditions() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-[45px] sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-fog">Effective date: {EFFECTIVE_DATE}</p>

      <p className="mt-6 text-sm leading-relaxed text-fog-100 sm:text-base">
        These Terms & Conditions ("Terms") govern your use of ragnar.realestate (the "Site"), operated by{" "}
        {COMPANY_NAME} ("Ragnar," "we," "us," or "our"). By using the Site or submitting information through it, you
        agree to these Terms. If you do not agree, please do not use the Site.
      </p>

      <Section title="1. Our Services">
        <p>
          The Site provides information about, and a way to request, services related to foreclosure, tax auction,
          probate, inherited property, and other distressed real estate situations in {SERVICE_AREA}, including the
          potential purchase of real property. Submitting a form on the Site is a request for us to contact you — it
          is not an offer, application, or guarantee of any specific outcome, price, or service.
        </p>
      </Section>

      <Section title="2. Not Legal, Financial, or Tax Advice">
        <p>
          {COMPANY_NAME} is not a law firm, financial advisory firm, or credit counseling agency, and nothing on the
          Site is legal, financial, tax, or credit advice. Foreclosure, tax auction, and probate situations can have
          serious legal and financial consequences. We encourage you to consult a licensed attorney, financial
          advisor, or housing counselor about your specific situation.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>
          You must be at least 18 years old to submit information through the Site. By submitting a form, you
          represent that you are 18 or older and that the information you provide is accurate.
        </p>
      </Section>

      <Section title="4. Communications Consent">
        <p>
          If you provide your phone number and check the applicable consent box, you agree that we may contact you
          by phone call or text message, including using automated technology, about your inquiry. Message and data
          rates may apply, and message frequency varies. You may opt out of texts at any time by replying{" "}
          <strong className="text-ink">STOP</strong>. This consent is not required to use the Site generally and is
          not a condition of any purchase. See our{" "}
          <Link to="/privacy-policy" className="text-gold-600 underline hover:text-gold-700">
            Privacy Policy
          </Link>{" "}
          for more detail on how we handle your information.
        </p>
      </Section>

      <Section title="5. No Guarantee of Offer or Outcome">
        <p>
          Any consultation, discussion, or preliminary offer is not binding until reflected in a signed written
          agreement. All potential purchases remain subject to our due diligence, inspection, title review, and
          mutual agreement on terms. We do not guarantee that we will be able to make an offer on your property or
          resolve your situation.
        </p>
      </Section>

      <Section title="6. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide false or misleading information through the Site;</li>
          <li>Use the Site for any unlawful purpose or in violation of these Terms;</li>
          <li>Attempt to interfere with the proper functioning of the Site; or</li>
          <li>Scrape, copy, or reuse Site content without our permission.</li>
        </ul>
      </Section>

      <Section title="7. Intellectual Property">
        <p>
          The Site, including its text, graphics, logos, and design, is owned by {COMPANY_NAME} or its licensors and
          is protected by applicable intellectual property laws. You may not use our name, logo, or content without
          our prior written permission.
        </p>
      </Section>

      <Section title="8. Third-Party Links and Content">
        <p>
          The Site may link to or embed content from third-party platforms (for example, social media posts or
          videos). We do not control and are not responsible for third-party content, sites, or services, and
          including them does not imply our endorsement.
        </p>
      </Section>

      <Section title="9. Disclaimer of Warranties">
        <p>
          The Site is provided "as is" and "as available," without warranties of any kind, express or implied,
          including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We
          do not warrant that the Site will be uninterrupted, error-free, or secure.
        </p>
      </Section>

      <Section title="10. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {COMPANY_NAME} will not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising out of or related to your use of the Site, even if we
          have been advised of the possibility of such damages.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms are governed by the laws of the State of Connecticut, without regard to its conflict-of-laws
          principles. Any dispute arising from these Terms or the Site will be subject to the exclusive jurisdiction
          of the state or federal courts located in Connecticut.
        </p>
      </Section>

      <Section title="12. Changes to These Terms">
        <p>
          We may update these Terms from time to time. The "Effective date" above reflects when these Terms were
          last revised. Continued use of the Site after a revision means you accept the updated Terms.
        </p>
      </Section>

      <Section title="13. Contact Us">
        <p>Questions about these Terms can be directed to:</p>
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
        <Link to="/privacy-policy" className="text-gold-600 underline hover:text-gold-700">
          Privacy Policy
        </Link>
        .
      </p>
    </section>
  );
}
