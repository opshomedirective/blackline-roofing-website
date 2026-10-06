import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import AreaMap from "../components/AreaMap";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { AREAS, REGIONS } from "../data/site";
import { SERVICES } from "../data/services";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const AREA_FAQ = [
  { q: "How far do you travel for a job?", a: "Across Maricopa and Pinal County — roughly a 50-mile radius around the East Valley. Distance affects scheduling more than anything else, and we'll give you a realistic window when you call." },
  { q: "Do you charge differently based on location?", a: "Scope drives the project, not the drive. If distance affects anything, it's timing." },
  { q: "Do you handle emergency calls outside Mesa?", a: "Yes. Active leaks are prioritized regardless of where they are." },
  { q: "Do you work with HOA communities?", a: "Regularly. Many Valley communities have color and profile standards, and those get confirmed before material is ordered." },
];

export default function ServiceAreas() {
  useSEO({
    title: "Roofing Service Areas | Mesa, Gilbert, Chandler, Phoenix & the Valley | Blackline Roofing",
    description: "Blackline Roofing serves a 50-mile radius across Maricopa and Pinal County: Mesa, Gilbert, Chandler, Queen Creek, Tempe, Scottsdale, Phoenix, San Tan Valley and more.",
  });
  const regions = ["East Valley", "Phoenix Area", "West Valley"] as const;

  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title={<>Roofing across <span className="text-sky">the Valley.</span></>}
        sub="Based in Mesa, covering a 50-mile radius across Maricopa and Pinal County — residential and commercial."
        image={IMG.mountainCrew}
        crumbs={[{ label: "Service Areas" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <AreaMap />
          </Reveal>
          <div className="space-y-8">
            {regions.map((r, i) => (
              <Reveal key={r} delay={i * 0.08}>
                <p className="font-tech text-[10px] tracking-[0.25em] text-sky uppercase">{r}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {AREAS.filter((a) => a.region === r).map((a) => (
                    <span key={a.name} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-sky hover:text-sky">
                      <MapPin className="h-3.5 w-3.5 text-sky" /> {a.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-lines-light bg-paper py-24 text-ink lg:py-32">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow !text-sky-deep">Local knowledge</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">How roofs differ across the Valley.</h2>
            <p className="mt-5 text-lg text-slate">
              The Valley is big enough that the work changes depending on where you are. Every inspection starts the same way — on the roof, with photos.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.07} className="rounded-3xl border border-mist bg-white p-8">
                <p className="font-tech text-xs text-sky-deep">0{i + 1}</p>
                <h3 className="mt-5 text-2xl font-bold">{r.name}</h3>
                <p className="mt-3 leading-relaxed text-slate">{r.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-3xl bg-ink p-8 text-white">
              <h3 className="text-2xl font-bold">Maricopa County</h3>
              <p className="mt-3 text-white/70">
                The bulk of our work: East Valley, the Phoenix core, Scottsdale and out through the West Valley — from concrete tile in newer master-planned
                communities to older shingle and low-slope systems closer to central Phoenix.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-3xl bg-ink p-8 text-white">
              <h3 className="text-2xl font-bold">Pinal County</h3>
              <p className="mt-3 text-white/70">
                San Tan Valley and Apache Junction grew fast over the past two decades — and those original roofs are now reaching the age where underlayment
                and original workmanship start to show.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Every service, everywhere we work</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">What we handle across the area.</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-sky hover:bg-sky hover:text-ink">
                {s.title}
              </Link>
            ))}
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <h2 className="text-4xl font-extrabold">Area FAQs</h2>
              <Link to="/contact" className="btn btn-sky mt-8">
                Book an inspection <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <FAQ items={AREA_FAQ} />
          </div>
        </div>
      </section>

      <CTASection title="Wherever you are in the Valley, we'll come look." image={IMG.aerialRidge} />
    </>
  );
}
