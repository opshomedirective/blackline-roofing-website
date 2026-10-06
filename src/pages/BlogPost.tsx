import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { getPost, POSTS } from "../data/blog";
import { getService } from "../data/services";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";
import { fmtDate } from "./Blog";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);

  useSEO({
    title: post ? `${post.title} | Blackline Roofing` : "Article not found | Blackline Roofing",
    description: post?.excerpt ?? "",
  });

  if (!post) return <Navigate to="/blog" replace />;
  const svc = getService(post.service);
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${fmtDate(post.date)} · ${post.category}`}
        title={<span className="text-5xl sm:text-6xl lg:text-7xl">{post.title}</span>}
        image={IMG[post.image]}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: post.category }]}
      />

      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_320px]">
          <article className="max-w-3xl">
            <p className="text-xl leading-relaxed text-white/85">{post.excerpt}</p>
            <div className="mt-10 space-y-6">
              {post.blocks.map((b, i) =>
                b.t === "p" ? (
                  <p key={i} className="text-lg leading-relaxed text-white/70">{b.x}</p>
                ) : b.t === "h2" ? (
                  <h2 key={i} className="pt-6 text-3xl font-extrabold">{b.x}</h2>
                ) : (
                  <h3 key={i} className="pt-2 text-xl font-bold text-sky">{b.x}</h3>
                ),
              )}
            </div>
            <Link to="/blog" className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-sky">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-36 lg:self-start">
            <div className="rounded-3xl bg-sky p-7 text-ink">
              <p className="font-display text-2xl font-extrabold">Want eyes on your roof?</p>
              <p className="mt-2 text-sm text-ink/75">Free inspection with photos of everything we find.</p>
              <Link to="/contact" className="btn btn-dark mt-5 w-full !py-3">
                Book inspection
              </Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="mt-3 flex items-center justify-center gap-2 text-sm font-bold">
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
            {svc && (
              <Link to={`/services/${svc.slug}`} className="group block overflow-hidden rounded-3xl border border-white/10">
                <img src={IMG[svc.hero]} alt={svc.title} className="aspect-video w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="font-tech text-[10px] tracking-[0.2em] text-sky uppercase">Related service</p>
                  <p className="mt-1 flex items-center justify-between font-bold">
                    {svc.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            )}
          </aside>
        </div>
      </section>

      <section className="bg-carbon py-20">
        <div className="wrap">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Keep reading</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 transition hover:border-sky">
                <img src={IMG[p.image]} alt={p.title} loading="lazy" className="aspect-video w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs text-fog">{fmtDate(p.date)}</p>
                  <h3 className="mt-2 text-lg leading-snug font-bold">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
