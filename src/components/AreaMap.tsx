import { useState } from "react";
import { AREAS, BUSINESS } from "../data/site";

/**
 * Radar-style service-area map. Cities are plotted from real lat/lng
 * inside the 50-mile radius centered on ZIP 85225 — no map API needed.
 */
const SIZE = 600;
const C = SIZE / 2;
const { lat: cLat, lng: cLng, radiusMiles } = BUSINESS.serviceCenter;
const MI_PER_LAT = 69;
const MI_PER_LNG = 69 * Math.cos((cLat * Math.PI) / 180);
const R = 280; // px for the full radius
const scale = R / radiusMiles;

const project = (lat: number, lng: number) => ({
  x: C + (lng - cLng) * MI_PER_LNG * scale,
  y: C - (lat - cLat) * MI_PER_LAT * scale,
});

// Label placement per city so dense clusters stay readable.
// [dx, dy, anchor]; cities not listed only show their label on hover.
const LABELS: Record<string, [number, number, "start" | "end" | "middle"]> = {
  Mesa: [0, -11, "middle"],
  Gilbert: [10, 4, "start"],
  Chandler: [10, 16, "start"],
  "Queen Creek": [10, 4, "start"],
  Tempe: [0, -11, "middle"],
  "San Tan Valley": [10, 4, "start"],
  "Apache Junction": [10, 4, "start"],
  Scottsdale: [10, -3, "start"],
  "Sun Lakes": [-10, 12, "end"],
  Phoenix: [-9, -7, "end"],
  Ahwatukee: [0, 17, "middle"],
  Glendale: [10, -3, "start"],
  Peoria: [12, -9, "start"],
  Goodyear: [-10, 4, "end"],
  Laveen: [-9, 4, "end"],
};

export default function AreaMap() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-auto w-full" role="img" aria-label="Map of Blackline Roofing service area: 50 miles around Chandler, Arizona">
        <defs>
          <radialGradient id="radar" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00b3fe" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#00b3fe" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00b3fe" stopOpacity="0" />
            <stop offset="100%" stopColor="#00b3fe" stopOpacity="0.28" />
          </linearGradient>
          <clipPath id="disc">
            <circle cx={C} cy={C} r={R} />
          </clipPath>
        </defs>

        <circle cx={C} cy={C} r={R} fill="url(#radar)" stroke="#00b3fe" strokeOpacity="0.55" strokeDasharray="4 6" />
        {[0.25, 0.5, 0.75].map((f) => (
          <circle key={f} cx={C} cy={C} r={R * f} fill="none" stroke="#fff" strokeOpacity="0.08" />
        ))}
        <line x1={C - R} y1={C} x2={C + R} y2={C} stroke="#fff" strokeOpacity="0.06" />
        <line x1={C} y1={C - R} x2={C} y2={C + R} stroke="#fff" strokeOpacity="0.06" />

        {/* Rotating radar sweep */}
        <g clipPath="url(#disc)">
          <path d={`M ${C} ${C} L ${C + R} ${C} A ${R} ${R} 0 0 0 ${C + R * Math.cos(-Math.PI / 4)} ${C + R * Math.sin(-Math.PI / 4)} Z`} fill="url(#sweep)">
            <animateTransform attributeName="transform" type="rotate" from={`0 ${C} ${C}`} to={`360 ${C} ${C}`} dur="8s" repeatCount="indefinite" />
          </path>
        </g>

        <text x={C + R * 0.5 * Math.cos(Math.PI / 4) + 4} y={C + R * 0.5 * Math.sin(Math.PI / 4) + 4} fill="#8b97a6" fontSize="10" fontFamily="Michroma">25 mi</text>
        <text x={C + R * Math.cos(Math.PI / 4) + 6} y={C + R * Math.sin(Math.PI / 4) + 6} fill="#00b3fe" fontSize="11" fontFamily="Michroma">50 mi</text>

        {AREAS.map((a) => {
          const { x, y } = project(a.lat, a.lng);
          const on = hover === a.name;
          const lab = LABELS[a.name];
          const [dx, dy, anchor] = lab ?? [10, 4, "start"];
          return (
            <g key={a.name} onMouseEnter={() => setHover(a.name)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
              <circle cx={x} cy={y} r={12} fill="transparent" />
              <circle cx={x} cy={y} r={on ? 6.5 : 3.5} fill={on ? "#00b3fe" : "#ffffff"} />
              {(lab || on) && (
                <text
                  x={x + dx}
                  y={y + dy}
                  textAnchor={anchor}
                  fill={on ? "#00b3fe" : "#ffffffc0"}
                  fontSize={on ? 15 : 11.5}
                  fontWeight={on ? 700 : 500}
                  fontFamily="Inter"
                  paintOrder="stroke"
                  stroke="#0d1116"
                  strokeWidth={on ? 4 : 3}
                >
                  {a.name}
                </text>
              )}
            </g>
          );
        })}

        {/* HQ pulse */}
        <circle cx={C} cy={C} r="10" fill="#00b3fe">
          <animate attributeName="r" values="8;34;8" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".6;0;.6" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="glass absolute bottom-2 left-2 rounded-2xl px-4 py-3 text-xs">
        <p className="font-tech text-[9px] tracking-[0.2em] text-sky uppercase">Coverage</p>
        <p className="font-display text-lg font-bold">{radiusMiles}-mile radius</p>
        <p className="text-fog">Maricopa & Pinal County · hover a dot</p>
      </div>
    </div>
  );
}
