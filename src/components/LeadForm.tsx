import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { BUSINESS } from "../data/site";

/**
 * Multi-step qualifier form (design placeholder).
 * In GoHighLevel, replace this component with a native GHL multi-step
 * Form/Survey that asks the same questions, so every lead lands in the
 * CRM pre-qualified and the details show on the calendar booking.
 */
const STEPS = [
  {
    key: "need",
    q: "What's going on with your roof?",
    options: ["Active leak", "Storm / monsoon damage", "Want a full replacement", "Inspection / not sure", "Insurance claim help", "New construction"],
  },
  {
    key: "roof",
    q: "What type of roof do you have?",
    options: ["Tile", "Shingle", "Metal", "Flat / foam", "Not sure"],
  },
  {
    key: "property",
    q: "Tell us about the property.",
    options: ["Home I own", "Commercial building", "Rental / investment", "Property I'm buying"],
  },
  {
    key: "timeline",
    q: "When do you want this handled?",
    options: ["ASAP — it's urgent", "Within 30 days", "1–3 months", "Just planning ahead"],
  },
] as const;

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const total = STEPS.length + 1;
  const pct = ((step + (done ? 1 : 0)) / total) * 100;

  const pick = (key: string, v: string) => {
    setAnswers((a) => ({ ...a, [key]: v }));
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-steel ${compact ? "p-6" : "p-6 sm:p-10"}`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-white/5">
        <motion.div className="h-full bg-sky" animate={{ width: `${Math.max(pct, 6)}%` }} transition={{ duration: 0.5 }} />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="font-tech text-[10px] tracking-[0.25em] text-sky uppercase">
          {done ? "All set" : `Step ${step + 1} of ${total}`}
        </p>
        {step > 0 && !done && (
          <button onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-1 text-xs text-fog hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="py-6 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sky text-ink">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display mt-6 text-3xl font-bold">You're on the list.</h3>
            <p className="mx-auto mt-3 max-w-sm text-fog">
              We'll reach out shortly to lock in your inspection time. Need us sooner? Call us directly.
            </p>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-sky mt-6">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </motion.div>
        ) : step < STEPS.length ? (
          <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">{STEPS[step].q}</h3>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {STEPS[step].options.map((o) => {
                const active = answers[STEPS[step].key] === o;
                return (
                  <button
                    key={o}
                    onClick={() => pick(STEPS[step].key, o)}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left text-sm font-medium transition ${
                      active ? "border-sky bg-sky/10 text-white" : "border-white/10 text-white/85 hover:border-sky/60 hover:bg-white/5"
                    }`}
                  >
                    {o}
                    <span className={`grid h-5 w-5 place-items-center rounded-full border ${active ? "border-sky bg-sky text-ink" : "border-white/25"}`}>
                      {active && <Check className="h-3 w-3" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="contact"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Where should we send your inspection details?</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { n: "name", l: "Full name", t: "text", ac: "name" },
                { n: "phone", l: "Phone", t: "tel", ac: "tel" },
                { n: "email", l: "Email", t: "email", ac: "email" },
                { n: "address", l: "Property address", t: "text", ac: "street-address" },
              ].map((f) => (
                <label key={f.n} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-fog">{f.l}</span>
                  <input
                    required
                    name={f.n}
                    type={f.t}
                    autoComplete={f.ac}
                    className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-sky"
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 flex items-start gap-3 text-xs text-fog">
              <input type="checkbox" className="mt-0.5 accent-[#00b3fe]" />
              <span>I served in the military (ask about our $500 military discount).</span>
            </label>
            <button type="submit" className="btn btn-sky mt-6 w-full">
              Request my free inspection <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] text-white/40">No pressure, no manufactured urgency. If your roof is sound, we'll tell you.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
