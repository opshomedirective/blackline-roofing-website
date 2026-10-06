import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight, ArrowUpRight, BadgeDollarSign, Camera, HeartHandshake, Medal, Phone, ShieldCheck, Sun, Thermometer, Wind,
} from "lucide-react";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import ServiceCard from "../components/ServiceCard";
import OffersGrid from "../components/OffersGrid";
import InspectionReport from "../components/InspectionReport";
import RoofAnatomy from "../components/RoofAnatomy";
import AreaMap from "../components/AreaMap";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
import { BUSINESS, HOME_FAQ, PROCESS, REGIONS, UVP } from "../data/site";
import { SERVICES, SERVICE_GROUPS, type ServiceGroup } from "../data/services";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const PROCESS_IMAGES = [IMG.inspectorHomeowner, IMG.inspectorClayTile, IMG.inspectorsPointing, IMG.crewPassingTiles, IMG.happyHomeowner];

export default function Home() {
  useSEO({
    title: "Blackline Roofing & Contracting | Roofing Contractor in Mesa, AZ",
    description:
      "Family-owned roofing contractor in Mesa, AZ. Roof replacement, repair, inspections, tile, shingle, metal, flat & foam roofing across the Valley. 10-year warranty, $1,000 off replacements, 0% financing options.",
  });

  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <ServicesExplorer />
      <OffersSection />
      <PhotoProof />
      <WhyBlackline />
      <ProcessSticky />
      <AnatomySection />
      <DesertSection />
      <GallerySection />
      <AreaSection />
      <FaqSection />
      <LeadSection />
    </>
  );
}

/* ───────────────────────────────────────────── HERO */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 220]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);
  const words = ["We", "treat", "your", "roof"];

  return (
    <section className="noise relative flex min-h-[100svh] items-center overflow-hidden pt-36 pb-28">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={IMG.heroDesertTile}
          alt="Blackline Roofing crew re-roofing a tile home in the Arizona desert"
          className="animate-kenburns h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      {/* Signature diagonal lines */}
      <div aria-hidden className="pointer-events-none absolute top-0 right-[8%] hidden h-full gap-6 lg:flex">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: [0.7, 0, 0.2, 1] }}
            className={`block h-full w-3 origin-top skew-x-[-35deg] ${i === 1 ? "bg-sky/80" : "bg-white/10"}`}
          />
        ))}
      </div>

      <motion.div style={{ opacity: fade }} className="wrap relative grid items-center gap-14 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow">
            Family-owned · Mesa, Arizona
          </motion.p>

          <h1 className="mt-6 text-[3.1rem] leading-[0.92] font-extrabold sm:text-7xl lg:text-[5.2rem] xl:text-[5.6rem]">
            <span className="block lg:whitespace-nowrap">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="mr-[0.22em] inline-block"
                  initial={{ opacity: 0, y: 40, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.25 + i * 0.09, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="text-gradient block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              like it's ours.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Roof replacement, repair and photo-documented inspections for homes and businesses across Mesa, Gilbert, Chandler, Queen Creek and the
            Valley — backed by a {BUSINESS.warrantyYears}-year warranty.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-sky">
              Book a free inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-ghost">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </motion.div>
        </div>

        {/* Offer card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="hidden lg:block"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-8">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-sky/30 blur-3xl" />
            <p className="font-tech relative text-[10px] tracking-[0.25em] text-sky uppercase">Limited offer</p>
            <p className="font-display relative mt-4 text-7xl leading-none font-extrabold tracking-tighter">$1,000</p>
            <p className="relative mt-1 text-lg font-semibold">OFF any full roof replacement</p>
            <div className="relative my-6 h-px bg-white/15" />
            <ul className="relative space-y-3 text-sm">
              <li className="flex items-center gap-3"><Medal className="h-4 w-4 text-sky" /> $500 OFF for military & veterans</li>
              <li className="flex items-center gap-3"><BadgeDollarSign className="h-4 w-4 text-sky" /> 0% financing options available</li>
              <li className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-sky" /> {BUSINESS.warrantyYears}-year warranty</li>
            </ul>
            <Link to="/offers" className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
              Claim the offer <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom trust row */}
      <div className="absolute inset-x-0 bottom-0 hidden md:block">
        <div className="wrap grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {[
            { k: "10-Yr", v: "Warranty" },
            { k: "0%", v: "Financing options" },
            { k: "Family", v: "Owned & operated" },
            { k: "50 mi", v: "Valley coverage" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.08 }}
              className={`py-5 ${i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""} ${i % 2 === 1 ? "border-l border-white/10 pl-5 md:pl-6" : ""}`}
            >
              <p className="font-display text-2xl font-extrabold sm:text-3xl">{s.k}</p>
              <p className="text-xs text-white/60">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── INTRO */
function Intro() {
  return (
    <section className="relative py-24 lg:py-36">
      <div className="wrap grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Roofing for homes & businesses</p>
          <h2 className="mt-6 text-4xl leading-[1.02] font-extrabold sm:text-6xl">
            A small repair gets the <span className="text-sky">same attention</span> as a full replacement.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/70">
            Whether you've noticed a stain that wasn't there last month or you're planning to replace an entire roof, every project starts the same
            way: we get on the roof, identify the problem, and photograph what we find before determining the scope. We install and repair tile,
            shingle, metal and flat roofs on homes and commercial buildings across the East Valley.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              { icon: Camera, t: "Photo-documented" },
              { icon: HeartHandshake, t: "Honest recommendations" },
              { icon: ShieldCheck, t: "10-year warranty" },
            ].map(({ icon: I, t }) => (
              <div key={t}>
                <I className="h-6 w-6 text-sky" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative h-[520px] sm:h-[600px]">
          <Reveal className="absolute top-0 right-0 h-[72%] w-[72%] overflow-hidden rounded-3xl">
            <img src={IMG.teamCloseup} alt="Blackline Roofing team laughing during a job walk" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.15} className="absolute bottom-0 left-0 h-[55%] w-[58%] overflow-hidden rounded-3xl border-[6px] border-ink">
            <img src={IMG.happyHomeowner} alt="Happy homeowner with the Blackline Roofing team" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.3} className="absolute right-4 bottom-10 sm:right-10">
            <div className="rounded-2xl bg-sky p-5 text-ink shadow-2xl">
              <p className="font-display text-4xl font-extrabold">Family</p>
              <p className="text-sm font-semibold">owned · Mesa, AZ</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── SERVICES */
function ServicesExplorer() {
  const [tab, setTab] = useState<ServiceGroup>("Core Services");
  const list = SERVICES.filter((s) => s.group === tab);

  return (
    <section className="grid-lines relative bg-carbon py-24 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-[1.02] font-extrabold sm:text-6xl">
              Every roof. <span className="text-outline">Every problem.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {SERVICE_GROUPS.map((g) => (
                <button
                  key={g}
                  onClick={() => setTab(g)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition ${tab === g ? "text-ink" : "text-white/70 hover:text-white"}`}
                >
                  {tab === g && <motion.span layoutId="svc-tab" className="absolute inset-0 rounded-full bg-sky" transition={{ type: "spring", stiffness: 300, damping: 28 }} />}
                  <span className="relative">{g}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className={`mt-12 grid gap-5 sm:grid-cols-2 ${list.length >= 4 ? "lg:grid-cols-4" : list.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}
          >
            {list.map((s, i) => (
              <ServiceCard key={s.slug} s={s} index={i} tall />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 p-6 sm:flex-row sm:p-8">
          <p className="text-white/75">
            <span className="font-semibold text-white">Beyond the roof:</span> we also handle solar, drywall & plaster for our customers.
          </p>
          <Link to="/services" className="btn btn-ghost !py-3">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── OFFERS */
function OffersSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/10 blur-[120px]" />
      <div className="wrap relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Offers & financing</p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">
            A new roof that <span className="text-sky">fits your budget.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Fair pricing, real savings, and financing through Hearth and Upgrade — so the work happens on the roof's schedule, not months later.
          </p>
        </Reveal>
        <div className="mt-14">
          <OffersGrid />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── PHOTO PROOF */
function PhotoProof() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 lg:py-32">
      <div className="wrap grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Photos, not promises</p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">
            Nobody prices a roof <span className="text-outline">from the driveway.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            We get on your roof, identify the problem, and take pictures and notes to share with you. You see exactly what we see — and if the roof is
            sound, we say so and leave it alone.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Every finding photographed and explained in plain English",
              "A repair recommended when a repair is the right answer",
              "Documentation that's yours — even to take to another contractor",
              "We're there for the first inspection and the post inspection",
            ].map((t) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1.5 h-3 w-1.5 shrink-0 skew-x-[-35deg] bg-sky" />
                <span className="text-white/85">{t}</span>
              </li>
            ))}
          </ul>
          <Link to="/services/roof-inspections" className="btn btn-sky mt-10">
            About our inspections <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div>
          <InspectionReport />
          <p className="mt-6 text-center text-xs text-fog">Example of the photo report format every customer receives.</p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── WHY (light) */
function WhyBlackline() {
  return (
    <section className="grid-lines-light relative bg-paper py-24 text-ink lg:py-32">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <Reveal>
            <p className="eyebrow !text-sky-deep">Why Blackline</p>
            <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">Why homeowners call Blackline.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate">
              We're a family business, and we run it like one. We install the materials we'd put on our own homes, we tell you what the roof actually
              needs, and we make the whole process a breeze — from the first inspection to the final walkthrough.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-3">
          {UVP.map((u, i) => (
            <Reveal key={u.title} delay={(i % 3) * 0.08} className="group bg-white p-8 transition hover:bg-ink hover:text-white sm:p-10">
              <p className="font-tech text-xs text-sky-deep group-hover:text-sky">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-2xl font-bold">{u.title}</h3>
              <p className="mt-3 leading-relaxed text-slate group-hover:text-white/70">{u.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── PROCESS (sticky) */
function ProcessSticky() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">
            From first call to <span className="text-sky">final sweep.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="relative hidden lg:block">
            <div className="sticky top-36 aspect-[4/5] overflow-hidden rounded-3xl">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={active}
                  src={PROCESS_IMAGES[active]}
                  alt={PROCESS[active].title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <p className="font-display absolute bottom-6 left-6 text-[7rem] leading-none font-extrabold text-white/90">{PROCESS[active].step}</p>
            </div>
          </div>

          <ol className="space-y-4">
            {PROCESS.map((p, i) => (
              <motion.li
                key={p.step}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className={`rounded-3xl border p-8 transition duration-500 lg:min-h-[260px] ${
                  active === i ? "border-sky bg-sky/[0.06]" : "border-white/10"
                }`}
              >
                <img src={PROCESS_IMAGES[i]} alt="" className="mb-6 aspect-video w-full rounded-2xl object-cover lg:hidden" loading="lazy" />
                <span className="font-tech text-sm text-sky">{p.step}</span>
                <h3 className="mt-3 text-3xl font-bold">{p.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-white/70">{p.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── ROOF ANATOMY */
function AnatomySection() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 lg:py-32">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Anatomy of an Arizona tile roof</p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">
            The tile isn't what keeps the water out.
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Brittle underlayment beneath thirty squares of perfectly intact tile is invisible until someone lifts it — and it's what has been keeping water
            out of your house all along.
          </p>
        </Reveal>
        <div className="mt-16">
          <RoofAnatomy />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── DESERT */
function DesertSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <img src={IMG.aerialDrone} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="wrap relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Desert roofing</p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">What Arizona does to a roof.</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: Thermometer, k: "115°F", t: "Afternoons", b: "UV breaks down asphalt binders and dries out underlayment year after year while nothing visible changes." },
            { icon: Sun, k: "Day ↔ Night", t: "Thermal swing", b: "The daily swing from a scorching afternoon to a cool desert night works fasteners loose and opens seams a fraction at a time." },
            { icon: Wind, k: "60 MPH", t: "Monsoon gusts", b: "Then monsoon season arrives and finds every weak point in a single evening — often invisible from the street." },
          ].map(({ icon: I, k, t, b }, i) => (
            <Reveal key={t} delay={i * 0.1} className="glass rounded-3xl p-8">
              <I className="h-7 w-7 text-sky" strokeWidth={1.75} />
              <p className="font-display mt-8 text-5xl font-extrabold">{k}</p>
              <p className="font-tech mt-2 text-[10px] tracking-[0.25em] text-sky uppercase">{t}</p>
              <p className="mt-4 leading-relaxed text-white/70">{b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── GALLERY */
function GallerySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow">On the job</p>
            <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">Real crews. Real roofs.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-3">
              Follow on Instagram <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <Gallery
            shots={[
              { src: IMG.crewPassingTiles, alt: "Crew passing tiles across new underlayment", span: "row-span-2" },
              { src: IMG.aerialPool, alt: "Aerial view of a tile re-roof on a desert home with a pool", span: "col-span-2" },
              { src: IMG.nailGunStrawHat, alt: "Roofer fastening battens on a tile roof", span: "row-span-2" },
              { src: IMG.inspectorClayTile, alt: "Inspector checking a clay tile roof" },
              { src: IMG.shingleNew, alt: "New architectural shingle roof" },
              { src: IMG.aerialTileRows, alt: "Drone shot of tile staged on new underlayment", span: "col-span-2" },
              { src: IMG.teamTabletLaughing, alt: "The Blackline team reviewing a job on a tablet" },
              { src: IMG.circularSaw, alt: "Roofer cutting battens with a circular saw" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── AREAS */
function AreaSection() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 lg:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Service area</p>
            <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">Serving Mesa and the whole Valley.</h2>
            <p className="mt-6 text-lg text-white/70">
              We work out of Mesa and cover a 50-mile radius across Maricopa and Pinal County — homeowners, property managers and builders alike.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {REGIONS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06} className="rounded-2xl border border-white/10 p-5">
                <p className="font-display text-lg font-bold">{r.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{r.body}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/service-areas" className="btn btn-sky mt-10">
            See all service areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Reveal delay={0.1}>
          <AreaMap />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── FAQ */
function FaqSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-6xl">Common questions.</h2>
          <p className="mt-6 text-white/70">Still unsure? Call us — a real person who knows roofs will pick up.</p>
          <a href={`tel:${BUSINESS.phoneTel}`} className="font-display mt-6 inline-block text-3xl font-bold text-sky">
            {BUSINESS.phoneDisplay}
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ items={HOME_FAQ} />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── LEAD */
function LeadSection() {
  return (
    <section id="book" className="relative overflow-hidden py-24 lg:py-32">
      <img src={IMG.mountainCrew} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-sky/20" />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="slashes mb-8"><span /><span /><span /></div>
          <h2 className="text-5xl leading-[0.98] font-extrabold sm:text-7xl">
            Schedule your <span className="text-gradient">free roof inspection.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/75">
            Answer four quick questions so we arrive prepared — then we'll confirm a time that works for you.
          </p>
          <div className="mt-10 space-y-3 text-white/80">
            <p className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-sky" /> {BUSINESS.warrantyYears}-year warranty on our work</p>
            <p className="flex items-center gap-3"><BadgeDollarSign className="h-5 w-5 text-sky" /> $1,000 off replacements · 0% financing options</p>
            <p className="flex items-center gap-3"><Medal className="h-5 w-5 text-sky" /> $500 military discount</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
