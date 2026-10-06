import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import Social from "./Social";
import { AREAS, BUSINESS, NAV } from "../data/site";
import { SERVICES } from "../data/services";

export default function Footer() {
  const a = BUSINESS.address;
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink pb-24 lg:pb-0">
      {/* Giant wordmark */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center">
        <span className="font-display text-outline block translate-y-[28%] text-[22vw] leading-none font-extrabold tracking-tighter opacity-40">
          BLACKLINE
        </span>
      </div>

      <div className="wrap relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Logo className="h-14" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-fog">
            Family-owned roofing contractor based in Mesa, Arizona. We treat every roof like it's our own — and back it with a {BUSINESS.warrantyYears}-year warranty.
          </p>
          <Social className="mt-6" />
        </div>

        <div>
          <p className="font-tech mb-5 text-[10px] tracking-[0.25em] text-sky uppercase">Services</p>
          <ul className="space-y-2.5 text-sm text-white/75">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition hover:text-sky">{s.title}</Link>
              </li>
            ))}
            <li><Link to="/services" className="text-sky">View all →</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-tech mb-5 text-[10px] tracking-[0.25em] text-sky uppercase">Company</p>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><Link to="/" className="transition hover:text-sky">Home</Link></li>
            {NAV.filter((n) => n.to !== "/services").map((n) => (
              <li key={n.to}><Link to={n.to} className="transition hover:text-sky">{n.label}</Link></li>
            ))}
          </ul>
          <p className="font-tech mt-8 mb-3 text-[10px] tracking-[0.25em] text-sky uppercase">Top areas</p>
          <p className="text-sm leading-relaxed text-white/60">{AREAS.slice(0, 8).map((x) => x.name).join(" · ")}</p>
        </div>

        <div>
          <p className="font-tech mb-5 text-[10px] tracking-[0.25em] text-sky uppercase">Contact</p>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex gap-3 text-white transition hover:text-sky">
                <Phone className="h-4 w-4 shrink-0 text-sky" />
                <span className="font-display text-xl font-bold">{BUSINESS.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex gap-3 text-white/75 transition hover:text-sky">
                <Mail className="h-4 w-4 shrink-0 text-sky" /> {BUSINESS.email}
              </a>
            </li>
            <li className="flex gap-3 text-white/75">
              <MapPin className="h-4 w-4 shrink-0 text-sky" />
              <span>{a.street}<br />{a.city}, {a.state} {a.zip}</span>
            </li>
            <li className="flex gap-3 text-white/75">
              <Clock className="h-4 w-4 shrink-0 text-sky" />
              <span>{BUSINESS.hours}<br /><span className="text-white/50">{BUSINESS.hoursNote}</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row">
        <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
