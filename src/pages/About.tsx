import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Gallery from "../components/Gallery";
import CTASection from "../components/CTASection";
import Marquee from "../components/Marquee";
import { UVP } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const PROMISES = [
  { k: "We inspect before we quote", b: "We get on the roof, into the attic where access allows, and photograph what we find before we discuss scope." },
  { k: "We tell you what the roof needs", b: "Sometimes that's a replacement. Often it's a repair — and we say so even when the bigger job would be easier to sell." },
  { k: "The hidden work gets done right", b: "Decking, underlayment, valleys, flashing and pipe boots: the parts that decide how long a roof lasts are the parts you never see again." },
  { k: "You're kept in the loop", b: "You know who's arriving, when, and what happens that day. If something changes, you hear it from us first." },
  { k: "We leave the property clean", b: "Magnetic nail sweeps, debris hauled off, landscaping and pool areas protected." },
];

export default function About() {
  useSEO({
    title: "About Blackline Roofing & Contracting | Family-Owned Roofer in Mesa, AZ",
    description: "Blackline Roofing is a family-owned roofing company in Mesa, Arizona. We treat your roof like it's ours, document every inspection with photos, and back our work with a 10-year warranty.",
  });

  return (
    <>
      <PageHero
        eyebrow="About Blackline"
        title={<>A family business that <span className="text-sky">cares about your roof.</span></>}
        sub="We treat every roof like it's ours — because that's the only way we know how to do this work."
        image={IMG.teamTabletLaughing}
        crumbs={[{ label: "About" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-5 text-4xl leading-[1.04] font-extrabold sm:text-5xl">Built in Mesa. Built on doing it right.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-white/75">
            <p>
              Blackline Roofing & Contracting is a family-owned company based in Mesa, Arizona. We started with a simple idea: a homeowner deserves the same
              honesty and care we'd want on our own house.
            </p>
            <p>
              That's why we install the materials we'd install on our own homes, why every inspection ends with photos and notes you can see for yourself,
              and why we're there for both the first inspection and the post inspection — including when your insurance adjuster comes out.
            </p>
            <p>
              We're fair with pricing, we offer financing, and we back our work with a 10-year warranty. Mostly, we just try to make the whole process a
              breeze.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["Family owned", "10-year warranty", "Photo-documented", "Fair pricing", "0% financing options", "Military discount", "Clean job sites"]} />

      <section className="py-24 lg:py-32">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our promise</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">Five things you can count on.</h2>
          </Reveal>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {PROMISES.map((p, i) => (
              <Reveal key={p.k} className="group grid gap-4 py-8 transition sm:grid-cols-[120px_1fr_1.3fr] sm:items-baseline">
                <span className="font-display text-5xl font-extrabold text-white/15 transition group-hover:text-sky">0{i + 1}</span>
                <h3 className="text-2xl font-bold">{p.k}</h3>
                <p className="leading-relaxed text-white/65">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-lines-light bg-paper py-24 text-ink lg:py-32">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow !text-sky-deep">What makes us different</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">The Blackline difference.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {UVP.map((u, i) => (
              <Reveal key={u.title} delay={(i % 3) * 0.07} className="rounded-3xl border border-mist bg-white p-8">
                <span className="block h-6 w-2 skew-x-[-35deg] bg-sky" />
                <h3 className="mt-6 text-xl font-bold">{u.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{u.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">The crew</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">The people on your roof.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <Gallery
              shots={[
                { src: IMG.teamCloseup, alt: "Blackline team on a job walk", span: "col-span-2 row-span-2" },
                { src: IMG.teamThreeRoof, alt: "Team on a tile roof", span: "row-span-2" },
                { src: IMG.inspectorTablet, alt: "Inspector reviewing findings on a tablet", span: "row-span-2" },
                { src: IMG.crewBriefing, alt: "Crew briefing before work starts", span: "col-span-2" },
                { src: IMG.nailGunCloseup, alt: "Roofer fastening battens" },
                { src: IMG.happyHomeowner, alt: "Happy homeowner with the Blackline team" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CTASection title="Let's take a look at your roof." image={IMG.teamThreeRoof} />
    </>
  );
}
