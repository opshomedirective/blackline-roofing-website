import { motion } from "motion/react";
import { Camera, CircleCheck, TriangleAlert } from "lucide-react";
import { IMG } from "../data/images";

/**
 * Stylized "photo report" tablet mockup — visualizes the promise that
 * every inspection ends with photos + notes the homeowner can verify.
 * (Illustrative example, not a real customer report.)
 */
const FINDINGS = [
  { img: IMG.brokenTile, tag: "Needs attention", ok: false, title: "Cracked tile at hip", note: "Water path to underlayment. Replace 3 pcs." },
  { img: IMG.tileBattens, tag: "Good", ok: true, title: "Underlayment — south slope", note: "Pliable, sealed laps. Years of life left." },
  { img: IMG.inspectorMeasuring, tag: "Needs attention", ok: false, title: "Pipe boot, dry-rotted", note: "Ring crack. #1 Valley leak source." },
  { img: IMG.tileValley, tag: "Good", ok: true, title: "Valley metal", note: "Clear of debris, no corrosion." },
];

export default function InspectionReport() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 rounded-[3rem] bg-sky/15 blur-3xl" />
      <motion.div
        initial={{ rotate: -4, y: 40, opacity: 0 }}
        whileInView={{ rotate: -2, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative rounded-[2rem] border border-white/15 bg-[#0b0f14] p-3 shadow-[0_60px_120px_-30px_rgba(0,0,0,.9)]"
      >
        <div className="rounded-[1.4rem] bg-paper p-4 text-ink sm:p-5">
          <div className="flex items-center justify-between border-b border-mist pb-3">
            <div>
              <p className="font-tech text-[9px] tracking-[0.2em] text-sky-deep uppercase">Blackline · Roof Report</p>
              <p className="font-display text-lg font-bold">Inspection findings</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold text-white">
              <Camera className="h-3 w-3 text-sky" /> 42 photos
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {FINDINGS.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="overflow-hidden rounded-xl border border-mist bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <img src={f.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                  <span
                    className={`absolute top-2 left-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold ${
                      f.ok ? "bg-emerald-500 text-white" : "bg-amber-400 text-ink"
                    }`}
                  >
                    {f.ok ? <CircleCheck className="h-2.5 w-2.5" /> : <TriangleAlert className="h-2.5 w-2.5" />}
                    {f.tag}
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="text-[11px] leading-tight font-bold">{f.title}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-slate">{f.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-ink p-3 text-white">
            <p className="text-[10px] text-fog">Recommendation</p>
            <p className="text-xs font-semibold">Targeted repair — roof has years left. No replacement needed.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
