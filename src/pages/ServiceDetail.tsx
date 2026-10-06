import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import Marquee from "../components/Marquee";
import { getService, SERVICES } from "../data/services";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const s = getService(slug);

  useSEO({
    title: s ? `${s.title} in Mesa, AZ | Blackline Roofing & Contracting` : "Service not found | Blackline Roofing",
    description: s?.tagline ?? "",
  });

  if (!s) return <Navigate to="/services" replace />;
  const related = s.related.map((r) => SERVICES.find((x) => x.slug === r)!).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={s.group}
        title={s.title}
        sub={s.tagline}
        image={IMG[s.hero]}
        crumbs={[{ label: "Services", to: "/services" }, { label: s.title }]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-sky">
            Free inspection <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-ghost">
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {s.badges.map((b) => (
            <span key={b} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
              <Check className="h-3.5 w-3.5 text-sky" /> {b}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Mesa, Arizona</p>
            <h2 className="mt-5 text-4xl leading-[1.04] font-extrabold sm:text-5xl">{s.headline}</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{s.intro}</p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <img src={IMG[s.images[0]]} alt={`${s.title} project by Blackline Roofing`} className="aspect-[4/5] w-[80%] rounded-3xl object-cover" loading="lazy" />
            <img
              src={IMG[s.images[1]]}
              alt={`${s.title} detail`}
              className="absolute right-0 -bottom-8 aspect-square w-[48%] rounded-3xl border-[6px] border-ink object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="grid-lines bg-carbon py-24 lg:py-32">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">The Blackline way</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">{s.processTitle}</h2>
          </Reveal>
          <div className={`mt-14 grid gap-4 sm:grid-cols-2 ${s.process.length >= 5 ? "lg:grid-cols-5" : s.process.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {s.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="group relative rounded-3xl border border-white/10 bg-ink/60 p-7 transition hover:border-sky">
                <p className="font-display text-6xl font-extrabold text-white/10 transition group-hover:text-sky">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* List + deep dive */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{s.listTitle}</h2>
            <ul className="mt-8 space-y-3">
              {s.list.map((l) => (
                <li key={l} className="flex gap-4 rounded-2xl border border-white/10 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky/15">
                    <Check className="h-4 w-4 text-sky" />
                  </span>
                  <span className="text-white/85">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] bg-paper p-8 text-ink sm:p-12">
            <p className="eyebrow !text-sky-deep">Straight talk</p>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{s.deepTitle}</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-slate">
              {s.deep.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-ink p-6 text-white">
              <p className="font-tech text-[10px] tracking-[0.25em] text-sky uppercase">Financing available</p>
              <p className="mt-2 text-sm text-white/75">
                $1,000 off full replacements, $500 military discount, and financing through Hearth & Upgrade — including 0% options.
              </p>
              <Link to="/offers" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                See offers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">{s.title}: common questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={s.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="bg-carbon py-24">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Related services</p>
            <h2 className="mt-5 text-4xl font-extrabold">Keep exploring.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <ServiceCard s={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={s.ctaTitle} body={s.ctaBody} image={IMG[s.images[0]]} />
    </>
  );
}
