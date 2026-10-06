import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";

export default function CTASection({
  title = "Get a straight answer about your roof.",
  body = "Tell us what you're seeing — a stain on the ceiling, tile in the yard after a storm, or a roof old enough that you want the truth. We'll get on it and show you what we find.",
  image = IMG.teamRoofMountain,
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-sky/20" />
      <div className="wrap relative">
        <Reveal className="max-w-3xl">
          <div className="slashes mb-8">
            <span />
            <span />
            <span />
          </div>
          <h2 className="text-4xl leading-[1.02] font-extrabold text-balance sm:text-6xl lg:text-7xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-white/75">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-sky">
              Book my free inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-ghost">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
