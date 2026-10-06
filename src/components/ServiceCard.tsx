import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "../data/services";
import { IMG } from "../data/images";

export default function ServiceCard({ s, index, tall = false }: { s: Service; index?: number; tall?: boolean }) {
  return (
    <Link
      to={`/services/${s.slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 ${tall ? "min-h-[460px]" : "min-h-[360px]"}`}
    >
      <img
        src={IMG[s.hero]}
        alt={`${s.title} by Blackline Roofing in Mesa, AZ`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/5 transition duration-500 group-hover:via-ink/75" />
      <div className="absolute top-5 right-5 left-5 flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink/60 text-sky backdrop-blur transition group-hover:bg-sky group-hover:text-ink">
          <Icon name={s.icon} className="h-5 w-5" />
        </span>
        {index !== undefined && <span className="font-tech text-xs text-white/60">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      <div className="relative p-6 sm:p-7">
        <h3 className="text-2xl font-bold sm:text-3xl">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:max-h-32 lg:group-hover:opacity-100">
          {s.short}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
          Explore <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}
