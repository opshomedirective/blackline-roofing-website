import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type Shot = { src: string; alt: string; span?: string };

/** Mosaic photo grid with a keyboard-friendly lightbox. */
export default function Gallery({ shots }: { shots: Shot[] }) {
  const [i, setI] = useState<number | null>(null);
  const n = shots.length;

  useEffect(() => {
    if (i === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((v) => (v === null ? v : (v + 1) % n));
      if (e.key === "ArrowLeft") setI((v) => (v === null ? v : (v - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, n]);

  return (
    <>
      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
        {shots.map((s, k) => (
          <button key={s.src + k} onClick={() => setI(k)} className={`group relative overflow-hidden rounded-2xl ${s.span ?? ""}`}>
            <img src={s.src} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/30" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {i !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4 backdrop-blur"
            onClick={() => setI(null)}
          >
            <motion.img
              key={i}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={shots[i].src}
              alt={shots[i].alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 w-[90%] -translate-x-1/2 text-center text-sm text-white/70">{shots[i].alt}</p>
            <button className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/20" aria-label="Close">
              <X />
            </button>
            <button
              className="absolute top-1/2 left-4 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/60"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setI((i - 1 + n) % n);
              }}
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute top-1/2 right-4 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink/60"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setI((i + 1) % n);
              }}
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
