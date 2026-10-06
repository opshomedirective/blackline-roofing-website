import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import Icon from "./Icon";
import { BUSINESS, NAV } from "../data/site";
import { SERVICES, SERVICE_GROUPS } from "../data/services";
import { IMG } from "../data/images";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Offer ribbon */}
      <div className="relative overflow-hidden bg-sky text-ink">
        <div className="wrap flex h-9 items-center justify-center gap-3 text-[11px] font-semibold sm:justify-between sm:text-xs">
          <p className="truncate">
            <span className="font-tech mr-2 tracking-widest">LIMITED</span>
            $1,000 OFF roof replacements · $500 OFF for military · 0% financing options
          </p>
          <Link to="/offers" className="hidden items-center gap-1 underline-offset-4 hover:underline sm:inline-flex">
            See offers <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled || mega ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "bg-gradient-to-b from-ink/70 to-transparent"
        }`}
        onMouseLeave={() => setMega(false)}
      >
        <nav className="wrap flex h-20 items-center justify-between gap-6">
          <Logo className="h-10 sm:h-12" />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.to === "/services" ? (
                <li key={item.to} onMouseEnter={() => setMega(true)}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive || mega ? "text-sky" : "text-white/85 hover:text-white"
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition ${mega ? "rotate-180" : ""}`} />
                  </NavLink>
                </li>
              ) : (
                <li key={item.to} onMouseEnter={() => setMega(false)}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? "text-sky" : "text-white/85 hover:text-white"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-3">
            <a href={`tel:${BUSINESS.phoneTel}`} className="hidden items-center gap-2 text-sm font-semibold text-white xl:inline-flex">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20">
                <Phone className="h-4 w-4 text-sky" />
              </span>
              {BUSINESS.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-sky hidden !py-3 sm:inline-flex">
              Free Inspection
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Services mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="hidden border-t border-white/10 lg:block"
            >
              <div className="wrap grid grid-cols-[1fr_1fr_1fr_1fr_1.1fr] gap-8 py-10">
                {SERVICE_GROUPS.map((g) => (
                  <div key={g}>
                    <p className="font-tech mb-4 text-[10px] tracking-[0.25em] text-fog uppercase">{g}</p>
                    <ul className="space-y-1">
                      {SERVICES.filter((s) => s.group === g).map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="group flex items-center gap-3 rounded-xl px-2 py-2 text-sm text-white/85 transition hover:bg-white/5 hover:text-white"
                          >
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-sky transition group-hover:bg-sky group-hover:text-ink">
                              <Icon name={s.icon} className="h-4 w-4" />
                            </span>
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link to="/offers" className="group relative overflow-hidden rounded-2xl">
                  <img src={IMG.aerialPool} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  <div className="relative flex h-full min-h-56 flex-col justify-end p-5">
                    <p className="font-tech text-[10px] tracking-[0.25em] text-sky uppercase">This month</p>
                    <p className="font-display mt-1 text-3xl font-extrabold">$1,000 OFF</p>
                    <p className="text-sm text-white/75">any full roof replacement</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-ink lg:hidden"
          >
            <div className="wrap flex h-20 items-center justify-between">
              <Logo className="h-10" />
              <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="wrap pb-16">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {NAV.map((item, i) => (
                  <motion.li key={item.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <Link to={item.to} className="font-display flex items-center justify-between py-5 text-3xl font-bold">
                      {item.label} <ArrowUpRight className="h-6 w-6 text-sky" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <p className="font-tech mt-8 mb-3 text-[10px] tracking-[0.25em] text-fog uppercase">All services</p>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-xl border border-white/10 px-3 py-3 text-sm text-white/85">
                    {s.title}
                  </Link>
                ))}
              </div>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-sky mt-8 w-full">
                <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
