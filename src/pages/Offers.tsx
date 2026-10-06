import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import OffersGrid from "../components/OffersGrid";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const FIN_FAQ = [
  { q: "Who provides the financing?", a: "We offer financing through Hearth and Upgrade, including 0% options for qualified buyers. We review the options with you during your consultation." },
  { q: "Can I combine offers?", a: "Ask us when you book — we'll walk through which savings apply to your specific project." },
  { q: "Who qualifies for the military discount?", a: "Military service members and veterans. Just let us know when you book." },
];

export default function Offers() {
  useSEO({
    title: "Roofing Offers & Financing | $1,000 OFF + 0% Options | Blackline Roofing",
    description: "Save $1,000 on a full roof replacement, $500 military discount, and roof financing through Hearth & Upgrade including 0% options. Mesa, AZ.",
  });

  return (
    <>
      <PageHero
        eyebrow="Offers & financing"
        title={<>Save on your roof. <span className="text-sky">Pay your way.</span></>}
        sub="Real savings on full replacements, a thank-you for those who served, and financing that lets the work happen when the roof needs it."
        image={IMG.aerialPool}
        crumbs={[{ label: "Offers & Financing" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap">
          <OffersGrid />
        </div>
      </section>

      <section className="bg-carbon py-24 lg:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Financing</p>
            <h2 className="mt-5 text-4xl leading-[1.04] font-extrabold sm:text-5xl">Roofs don't fail on a convenient schedule.</h2>
            <p className="mt-6 text-lg text-white/70">
              Financing lets the replacement happen when the roof needs it, rather than months later after more damage. We review the options with you
              during your consultation — no pressure.
            </p>
            <ul className="mt-8 space-y-3">
              {["Financing through Hearth and Upgrade", "0% options for qualified buyers", "Reviewed with you during your consultation", "Fair, straightforward pricing"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-sky text-ink"><Check className="h-3.5 w-3.5" /></span>
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-sky mt-10">
              Ask about financing <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <img src={IMG.inspectorHomeowner} alt="Blackline inspector reviewing options with a homeowner" className="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
              <div className="glass absolute -bottom-6 left-6 rounded-2xl p-5">
                <p className="font-display text-4xl font-extrabold text-sky">0%</p>
                <p className="text-sm text-white/80">financing options</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-4xl font-extrabold sm:text-5xl">Offer FAQs</h2>
            </Reveal>
            <div className="mt-8">
              <FAQ items={FIN_FAQ} />
            </div>
          </div>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
