// Public business information only. Everything here already appears
// on the company's current public website or is meant for customers.
export const BUSINESS = {
  name: "Blackline Roofing & Contracting",
  shortName: "Blackline Roofing",
  phoneDisplay: "(480) 427-2480",
  phoneTel: "+14804272480",
  email: "info@blackline-roofing.com",
  address: {
    street: "7931 E Pecos Rd STE 198B",
    city: "Mesa",
    state: "AZ",
    zip: "85212",
  },
  hours: "Mon – Fri · 9AM – 5PM",
  hoursNote: "Active leaks & storm damage are prioritized",
  warrantyYears: 10,
  social: {
    facebook: "https://www.facebook.com/p/Blackline-Roofing-61586971841234/",
    instagram: "https://www.instagram.com/blackline_roofing/",
    google: "https://www.google.com/maps?cid=10837845710747504719",
  },
  // Service area: 50-mile radius around ZIP 85225 (Chandler, AZ)
  serviceCenter: { lat: 33.3203, lng: -111.8318, radiusMiles: 50 },
} as const;

export const OFFERS = [
  {
    tag: "Roof Replacement",
    value: "$1,000",
    unit: "OFF",
    title: "Full roof replacement",
    body: "Take $1,000 off a complete roof replacement — tile, shingle, metal, or flat.",
  },
  {
    tag: "Military",
    value: "$500",
    unit: "OFF",
    title: "Military discount",
    body: "Military members and veterans: our thank-you for your service, on any qualifying project.",
  },
  {
    tag: "Financing",
    value: "0%",
    unit: "APR",
    title: "Financing options",
    body: "Flexible financing through Hearth and Upgrade, including 0% options for qualified buyers.",
  },
] as const;

export const UVP = [
  { title: "Family owned", body: "A local Mesa family business. You deal with people who care about your home, not a call center." },
  { title: "Your roof, treated like ours", body: "We install the same materials we would put on our own homes — no shortcuts we wouldn't accept ourselves." },
  { title: "10-year warranty", body: "Our work is backed by a 10-year warranty, so you're covered long after the crew drives away." },
  { title: "Photos, not promises", body: "We get on the roof, identify the problem, and share photos and notes so you see exactly what we see." },
  { title: "Fair pricing + financing", body: "Straight pricing, no manufactured urgency, and financing options including 0% for qualified buyers." },
  { title: "With you at every inspection", body: "We're there for the first inspection and the post inspection — including meeting your insurance adjuster." },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Book an inspection",
    body: "Call or send a message. Active leaks and storm damage move to the front of the line.",
  },
  {
    step: "02",
    title: "We get on the roof",
    body: "Nobody prices a roof from the driveway. We walk it, check the attic where access allows, and photograph everything.",
  },
  {
    step: "03",
    title: "You see what we found",
    body: "Photos, notes, and a plain-English recommendation you can verify with your own eyes. If it's a repair, we say so.",
  },
  {
    step: "04",
    title: "We build it right",
    body: "Decking, underlayment, valleys, flashing, pipe boots — the hidden work gets done properly, to spec.",
  },
  {
    step: "05",
    title: "Clean walkthrough",
    body: "Magnetic nail sweeps, debris hauled off, a final walkthrough with you — and a 10-year warranty.",
  },
] as const;

export type Area = { name: string; lat: number; lng: number; region: "East Valley" | "Phoenix Area" | "West Valley"; county: "Maricopa" | "Pinal" };

export const AREAS: Area[] = [
  { name: "Mesa", lat: 33.4152, lng: -111.8315, region: "East Valley", county: "Maricopa" },
  { name: "Gilbert", lat: 33.3528, lng: -111.789, region: "East Valley", county: "Maricopa" },
  { name: "Chandler", lat: 33.3062, lng: -111.8413, region: "East Valley", county: "Maricopa" },
  { name: "Queen Creek", lat: 33.2487, lng: -111.6343, region: "East Valley", county: "Maricopa" },
  { name: "Tempe", lat: 33.4255, lng: -111.94, region: "East Valley", county: "Maricopa" },
  { name: "San Tan Valley", lat: 33.17, lng: -111.5679, region: "East Valley", county: "Pinal" },
  { name: "Apache Junction", lat: 33.4151, lng: -111.5496, region: "East Valley", county: "Pinal" },
  { name: "Scottsdale", lat: 33.4942, lng: -111.9261, region: "East Valley", county: "Maricopa" },
  { name: "Sun Lakes", lat: 33.2109, lng: -111.8754, region: "East Valley", county: "Maricopa" },
  { name: "Chandler Heights", lat: 33.2134, lng: -111.6807, region: "East Valley", county: "Maricopa" },
  { name: "Phoenix", lat: 33.4484, lng: -112.074, region: "Phoenix Area", county: "Maricopa" },
  { name: "Ahwatukee", lat: 33.3417, lng: -111.9845, region: "Phoenix Area", county: "Maricopa" },
  { name: "Paradise Valley", lat: 33.531, lng: -111.9426, region: "Phoenix Area", county: "Maricopa" },
  { name: "Laveen", lat: 33.3628, lng: -112.1699, region: "Phoenix Area", county: "Maricopa" },
  { name: "Glendale", lat: 33.5387, lng: -112.186, region: "West Valley", county: "Maricopa" },
  { name: "Peoria", lat: 33.5806, lng: -112.2374, region: "West Valley", county: "Maricopa" },
  { name: "Goodyear", lat: 33.4353, lng: -112.3977, region: "West Valley", county: "Maricopa" },
  { name: "Avondale", lat: 33.4356, lng: -112.3496, region: "West Valley", county: "Maricopa" },
  { name: "Litchfield Park", lat: 33.4934, lng: -112.358, region: "West Valley", county: "Maricopa" },
  { name: "Tolleson", lat: 33.45, lng: -112.2593, region: "West Valley", county: "Maricopa" },
  { name: "Sun City", lat: 33.5975, lng: -112.2718, region: "West Valley", county: "Maricopa" },
];

export const REGIONS = [
  {
    name: "East Valley",
    body: "Tile dominates. Master-planned communities built through the late '90s and 2000s went up with concrete tile almost universally — and those roofs are now old enough that underlayment is the central question.",
  },
  {
    name: "Phoenix Area",
    body: "A wider mix by age. Older neighborhoods carry shingle and flat sections, and low-slope roofs are common on mid-century construction and commercial corridors.",
  },
  {
    name: "Scottsdale & North",
    body: "Custom homes and larger properties, with a heavier share of standing seam metal alongside tile. Architectural standards often shape material selection first.",
  },
  {
    name: "West Valley",
    body: "Shingle is more common across much of the area, and Sun City's older inventory brings a fair amount of low-slope and foam work.",
  },
] as const;

export const HOME_FAQ = [
  {
    q: "How long does a roof last in Arizona?",
    a: "It depends on the system and the original installation. Sun exposure is the limiting factor here, not storms — and the underlayment beneath tile almost always needs attention before the tile does. An inspection tells you where yours stands.",
  },
  {
    q: "Do I need a full replacement or will a repair hold?",
    a: "Both are legitimate answers. If damage is isolated and the rest of the roof is sound, a repair is the right call. If underlayment has gone brittle across the whole roof, repairs become a recurring expense. We show you photos either way.",
  },
  {
    q: "How soon can someone look at my roof?",
    a: "Call (480) 427-2480 and we'll get you scheduled. Active leaks and storm damage are prioritized.",
  },
  {
    q: "Do you work with insurance claims?",
    a: "Yes. We document damage thoroughly, meet adjusters on site, and review the adjuster's scope for missing items. We'll also tell you honestly if what we find is wear rather than storm damage.",
  },
  {
    q: "Is financing available?",
    a: "Yes — through Hearth and Upgrade, including 0% options for qualified buyers. We walk through the options during your consultation.",
  },
  {
    q: "Do you offer any discounts?",
    a: "Yes: $1,000 off a full roof replacement, and $500 off for military members and veterans. Ask us for details when you book.",
  },
  {
    q: "What warranty do you offer?",
    a: "Our work is backed by a 10-year warranty. We install materials we'd put on our own homes, so we're comfortable standing behind them.",
  },
] as const;

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "About", to: "/about" },
  { label: "Offers & Financing", to: "/offers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;
