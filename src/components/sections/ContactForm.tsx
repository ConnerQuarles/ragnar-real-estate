import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { SITUATION_OPTIONS, PHONE_DISPLAY, PHONE_TEL, LEAD_WEBHOOK_URL } from "../../lib/constants";
import CTAButton from "../ui/CTAButton";
import GlassCard from "../ui/GlassCard";

interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  address: string;
  situation: string;
  message: string;
}

const initialState: LeadPayload = {
  name: "",
  phone: "",
  email: "",
  address: "",
  situation: SITUATION_OPTIONS[0],
  message: "",
};

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return { firstName: trimmed, lastName: "" };
  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  };
}

async function submitLead(payload: LeadPayload): Promise<void> {
  const { firstName, lastName } = splitName(payload.name);

  // Flat, top-level fields (not nested) so each one shows up as its own
  // token in GoHighLevel's webhook field mapper.
  const ghlPayload = {
    firstName,
    lastName,
    fullName: payload.name,
    email: payload.email,
    phone: payload.phone,
    address: payload.address,
    situation: payload.situation,
    message: payload.message,
    source: "Ragnar Real Estate Website",
    page: typeof window !== "undefined" ? window.location.href : "",
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(LEAD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ghlPayload),
  });
  if (!response.ok) {
    throw new Error(`Webhook responded with ${response.status}`);
  }
}

interface ContactFormProps {
  defaultSituation?: string;
}

export default function ContactForm({ defaultSituation }: ContactFormProps) {
  const [values, setValues] = useState<LeadPayload>({
    ...initialState,
    situation: defaultSituation ?? initialState.situation,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit() {
    if (!values.name || !values.phone) return;
    setStatus("submitting");
    try {
      await submitLead(values);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <GlassCard className="mx-auto max-w-xl p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-600" strokeWidth={1.5} />
        <h3 className="mt-4 text-xl font-semibold text-ink">We've got your info.</h3>
        <p className="mt-2 text-fog-100">
          Someone from our team will reach out shortly for your free, no-pressure consultation.
        </p>
        <p className="mt-4 text-sm text-fog">Need to talk right now?</p>
        <CTAButton href={PHONE_TEL} className="mt-3">
          <Phone className="h-4 w-4" /> Call or Text — {PHONE_DISPLAY}
        </CTAButton>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="mx-auto max-w-2xl p-6 sm:p-10" hoverGlow={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-fog">Name</label>
          <input
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5 text-ink placeholder:text-fog focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
            placeholder="Full name"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-fog">Phone</label>
          <input
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            type="tel"
            className="w-full rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5 text-ink placeholder:text-fog focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
            placeholder="(860) 000-0000"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-fog">Email</label>
          <input
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            type="email"
            className="w-full rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5 text-ink placeholder:text-fog focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
            placeholder="you@email.com"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-fog">Property Address</label>
          <input
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
            className="w-full rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5 text-ink placeholder:text-fog focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
            placeholder="Street, City, CT"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-fog">Situation</label>
          <select
            value={values.situation}
            onChange={(e) => update("situation", e.target.value)}
            className="w-full rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5 text-ink focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
          >
            {SITUATION_OPTIONS.map((option) => (
              <option key={option} value={option} className="bg-paper-soft text-ink">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-fog">Message (optional)</label>
          <textarea
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            className="w-full resize-none rounded-xl border border-ink/10 bg-ink/5 px-4 py-2.5 text-ink placeholder:text-fog focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
            placeholder="Tell us a bit about your situation..."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col items-center gap-4 text-center">
        <CTAButton
          onClick={handleSubmit}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Get My Free Consultation"}
        </CTAButton>
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong sending that — please try again, or call/text us instead.
          </p>
        )}
        <p className="text-xs text-fog">Free, no-pressure consultation. We respond fast.</p>
        <div className="flex items-center gap-2 text-sm text-fog-100">
          <span>or</span>
          <a href={PHONE_TEL} className="inline-flex items-center gap-1.5 font-medium text-gold-600 hover:text-gold-700">
            <Phone className="h-3.5 w-3.5" /> Call or Text — {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
