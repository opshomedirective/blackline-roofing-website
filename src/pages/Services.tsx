import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Sun, Zap } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { SERVICES, SERVICE_GROUPS } from "../data/services";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const GROUP_COPY: Record<string, string> = {
  "Core Services": "Replacement, repair, inspections and coatings — the work every roof eventually needs.",
  "Property Type": "Homes, commercial buildings and new construction each get a different kind of care.",
  Materials: "Tile, shingle, metal, flat and foam — installed to spec for Arizona sun.",
  "Storm & Claims": "Monsoon damage secured fast, documented thoroughly, and walked through with your adjuster.",
};

export default function Services() {
  useSEO({
    title: "Roofing Services in Mesa, AZ | Blackline Roofing & Contracting",
    description: "Roof replacement, repair, inspections, coatings, tile, shingle, metal, flat and foam roofing, storm damage and insurance claim assistance across the Valley.",
  });

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Roofing services, <span className="text-sky">done right.</span></>}
        sub="Fourteen specialties, one standard: inspect first, photograph everything, recommend only what the roof actually needs."
        image={IMG.aerialTileRows}
        crumbs={[{ label: "Services" }]}
      />

      {SERVICE_GROUPS.map((g, gi) => {
        const list = SERVICES.filter((s) => s.group === g);
        return (
          <section key={g} className={`py-20 lg:py-28 ${gi % 2 ? "bg-carbon" : ""}`}>
            <div className="wrap">
              <Reveal className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
                <div>
                  <p className="font-tech text-xs text-sky">0{gi + 1}</p>
                  <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">{g}</h2>
                </div>
                <p className="text-lg text-white/65">{GROUP_COPY[g]}</p>
              </Reveal>
              <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${list.length >= 4 ? "lg:grid-cols-4" : list.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
                {list.map((s, i) => (
                  <Reveal key={s.slug} delay={i * 0.06}>
                    <ServiceCard s={s} index={i} tall />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-20 lg:py-28">
        <div className="wrap">
          <Reveal className="overflow-hidden rounded-[2rem] border border-white/10 bg-steel p-8 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow">Beyond the roof</p>
                <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">More ways we help around the home.</h2>
                <p className="mt-5 text-lg text-white/65">
                  As a full contracting company, we also take on solar and interior drywall & plaster work — often the natural next step after a leak or a
                  re-roof.
                </p>
                <Link to="/contact" className="btn btn-sky mt-8">
                  Ask about your project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-3">
                {[
                  { icon: Sun, t: "Solar", b: "Coordinated with your roof so panels go up on a roof built to outlast them." },
                  { icon: Hammer, t: "Drywall & plaster", b: "Ceiling and wall repair after a leak — so the house is finished, not just the roof." },
                  { icon: Zap, t: "One team", b: "One point of contact from the roof down to the ceiling." },
                ].map(({ icon: I, t, b }) => (
                  <div key={t} className="flex gap-4 rounded-2xl border border-white/10 p-5">
                    <I className="h-6 w-6 shrink-0 text-sky" strokeWidth={1.75} />
                    <div>
                      <p className="font-display text-lg font-bold">{t}</p>
                      <p className="text-sm text-white/60">{b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
