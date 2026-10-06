import { useState } from "react";
import { motion } from "motion/react";
import { IMG } from "../data/images";

/**
 * Interactive exploded view of an Arizona tile roof.
 * Pure CSS 3D — three stacked planes that separate on hover / tap.
 */
const LAYERS = [
  {
    name: "Tile",
    label: "The shield",
    body: "Concrete or clay tile takes the direct sun, sheds the bulk of the rain, and protects what's underneath. It can last decades — which is exactly why the rest of the system gets overlooked.",
    img: IMG.tileValley,
  },
  {
    name: "Underlayment",
    label: "The real waterproofing",
    body: "Rain that blows under tile during a monsoon lands on this membrane and gets carried off the roof. After years baking under tile it turns brittle — and the roof leaks while every tile looks perfect.",
    img: IMG.tileBattens,
  },
  {
    name: "Decking",
    label: "The foundation",
    body: "The plywood sheathing everything is fastened to. On every replacement we inspect it with the roof open and replace any soft, delaminated or water-damaged sections — never covered over.",
    img: null,
  },
] as const;

export default function RoofAnatomy() {
  const [active, setActive] = useState<number | null>(null);
  const exploded = active !== null;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* 3D stack */}
      <div
        className="relative mx-auto aspect-square w-full max-w-[520px] [perspective:1400px]"
        onMouseLeave={() => setActive(null)}
      >
        <div className="absolute inset-0 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(-35deg)_translateY(-6%)]">
          {LAYERS.map((l, i) => {
            const z = (LAYERS.length - 1 - i) * (exploded ? 160 : 95);
            return (
              <motion.button
                key={l.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ z, opacity: active === null || active === i ? 1 : 0.55 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`absolute inset-[16%] overflow-hidden rounded-2xl border-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,.8)] [transform-style:preserve-3d] ${
                  active === i ? "border-sky" : "border-white/20"
                }`}
                style={{
                  background: l.img
                    ? `center/cover url(${l.img})`
                    : "repeating-linear-gradient(90deg,#a8774a 0 46px,#8f6239 46px 48px), #a8774a",
                }}
                aria-label={l.name}
              >
                <span className="absolute inset-0 bg-ink/10" />
                <span className="font-tech absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-[9px] tracking-[0.2em] text-white uppercase">
                  0{i + 1} · {l.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {LAYERS.map((l, i) => (
          <button
            key={l.name}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(active === i ? null : i)}
            className={`group block w-full rounded-2xl border p-6 text-left transition ${
              active === i ? "border-sky bg-sky/[0.07]" : "border-white/10 hover:border-white/25"
            }`}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-tech text-xs text-sky">0{i + 1}</span>
              <div>
                <p className="font-display text-2xl font-bold">
                  {l.name} <span className="text-base font-medium text-fog">— {l.label}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{l.body}</p>
              </div>
            </div>
          </button>
        ))}
        <p className="pt-2 text-xs text-fog">Hover or tap a layer to pull the roof apart.</p>
      </div>
    </div>
  );
}
