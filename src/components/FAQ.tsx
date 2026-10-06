import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

export default function FAQ({ items, light = false }: { items: readonly { q: string; a: string }[]; light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`divide-y border-y ${light ? "divide-mist border-mist" : "divide-white/10 border-white/10"}`}>
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q}>
            <button onClick={() => setOpen(on ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={on}>
              <span className="font-display text-lg font-bold sm:text-xl">{f.q}</span>
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${
                  on ? "rotate-45 border-sky bg-sky text-ink" : light ? "border-mist" : "border-white/20"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className={`max-w-3xl pb-6 leading-relaxed ${light ? "text-slate" : "text-white/70"}`}>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
