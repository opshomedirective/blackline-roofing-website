import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { OFFERS } from "../data/site";

export default function OffersGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {OFFERS.map((o, i) => (
        <Reveal key={o.tag} delay={i * 0.1}>
          <Link
            to="/contact"
            className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition duration-500 hover:-translate-y-2 ${
              i === 0 ? "border-sky bg-sky text-ink" : "border-white/10 bg-steel hover:border-sky/60"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`font-tech text-[10px] tracking-[0.25em] uppercase ${i === 0 ? "text-ink/70" : "text-sky"}`}>{o.tag}</span>
              <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
            </div>
            <p className="font-display mt-10 flex items-start text-7xl leading-none font-extrabold tracking-tighter sm:text-8xl">
              {o.value}
              <span className="font-tech mt-2 ml-2 text-xs tracking-widest">{o.unit}</span>
            </p>
            <p className="font-display mt-6 text-xl font-bold">{o.title}</p>
            <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-ink/75" : "text-white/65"}`}>{o.body}</p>
            <p className={`mt-auto pt-6 text-[11px] ${i === 0 ? "text-ink/60" : "text-white/40"}`}>Restrictions may apply. Ask for details.</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
