import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { POSTS } from "../data/blog";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export const fmtDate = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function Blog() {
  useSEO({
    title: "Roofing Advice for Arizona Homeowners | Blackline Roofing Blog",
    description: "Notes on roof maintenance, monsoon preparation, and what desert conditions do to the roof over your head — from a Mesa roofing company.",
  });
  const [first, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Roofing advice for <span className="text-sky">Arizona homeowners.</span></>}
        sub="Most roofing information online is written for climates that have nothing in common with this one. What follows is written for roofs here."
        image={IMG.aerialBlue}
        crumbs={[{ label: "Blog" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <Link to={`/blog/${first.slug}`} className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-steel lg:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img src={IMG[first.image]} alt={first.title} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="font-tech text-[10px] tracking-[0.25em] text-sky uppercase">Latest · {first.category}</p>
                <h2 className="mt-4 text-3xl leading-tight font-extrabold sm:text-5xl">{first.title}</h2>
                <p className="mt-5 text-white/65">{first.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-sky">
                  Read article <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link to={`/blog/${p.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-white/10 transition hover:border-sky">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={IMG[p.image]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-fog">{fmtDate(p.date)} · {p.category}</p>
                    <h3 className="mt-3 text-xl leading-snug font-bold">{p.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm text-white/60">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a question we haven't covered?" body="An inspection will answer it faster than reading will. We'll get on the roof, photograph what we find, and tell you what it needs." />
    </>
  );
}
