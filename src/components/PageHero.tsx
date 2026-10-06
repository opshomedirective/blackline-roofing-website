import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
  crumbs = [],
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  image: string;
  crumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="noise relative flex min-h-[78vh] items-end overflow-hidden pt-40 pb-16 lg:pb-24">
      <img src={image} alt="" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

      <div className="wrap relative">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {c.to ? (
                <Link to={c.to} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-extrabold text-balance sm:text-7xl lg:text-8xl">{title}</h1>
          {sub && <p className="mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">{sub}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
