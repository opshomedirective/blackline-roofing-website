import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import Social from "../components/Social";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function Contact() {
  useSEO({
    title: "Contact Blackline Roofing | Schedule a Free Roof Inspection in Mesa, AZ",
    description: "Schedule a free roof inspection with Blackline Roofing & Contracting in Mesa, AZ. Call (480) 427-2480 — active leaks and storm damage are prioritized.",
  });
  const a = BUSINESS.address;
  const mapQuery = encodeURIComponent(`${a.street}, ${a.city}, ${a.state} ${a.zip}`);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us what the <span className="text-sky">roof is doing.</span></>}
        sub="Water coming through the ceiling right now, or just want a straight answer about a roof of unknown age? An inspection is the place to start. For active leaks and storm damage, calling is fastest."
        image={IMG.inspectorClayTile}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-4">
            <a href={`tel:${BUSINESS.phoneTel}`} className="group flex items-center gap-5 rounded-3xl bg-sky p-7 text-ink">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-sky"><Phone className="h-6 w-6" /></span>
              <span>
                <span className="block text-sm font-semibold text-ink/70">Call us</span>
                <span className="font-display block text-3xl font-extrabold">{BUSINESS.phoneDisplay}</span>
              </span>
            </a>
            {[
              { icon: Mail, l: "Email", v: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
              { icon: MapPin, l: "Office", v: `${a.street}, ${a.city}, ${a.state} ${a.zip}`, href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
              { icon: Clock, l: "Hours", v: `${BUSINESS.hours} · ${BUSINESS.hoursNote}` },
            ].map(({ icon: I, l, v, href }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/5 text-sky"><I className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-xs text-fog">{l}</span>
                    <span className="block font-semibold">{v}</span>
                  </span>
                </>
              );
              return href ? (
                <a key={l} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-5 rounded-3xl border border-white/10 p-6 transition hover:border-sky">
                  {inner}
                </a>
              ) : (
                <div key={l} className="flex items-center gap-5 rounded-3xl border border-white/10 p-6">{inner}</div>
              );
            })}
            <div className="rounded-3xl border border-white/10 p-6">
              <p className="text-xs text-fog">Follow & review us</p>
              <Social className="mt-3" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Blackline Roofing office location"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`}
                className="h-72 w-full grayscale invert-[.92] hue-rotate-180"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} id="book">
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
