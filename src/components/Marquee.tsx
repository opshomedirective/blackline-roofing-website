import { AREAS } from "../data/site";

export default function Marquee({ items = AREAS.map((a) => a.name) }: { items?: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="mask-fade-x relative overflow-hidden border-y border-white/10 bg-carbon py-6">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-3xl font-bold whitespace-nowrap text-white/85 sm:text-4xl">{t}</span>
            <span className="h-6 w-2 skew-x-[-35deg] bg-sky" />
          </span>
        ))}
      </div>
    </div>
  );
}
