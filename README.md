# Blackline Roofing & Contracting — Website

The new marketing website for **Blackline Roofing & Contracting**, a family-owned roofing company in Mesa, Arizona.

This repository is the **approved design source**. It is meant to be cloned into GoHighLevel.

- 👉 **Building in GoHighLevel?** Read [`GHL-MASTER-PROMPT.md`](./GHL-MASTER-PROMPT.md) and [`GHL-IMAGE-GUIDE.md`](./GHL-IMAGE-GUIDE.md).

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (the design tokens are in `src/index.css`)
- `motion` for animations, `lucide-react` for icons, `react-router-dom` for routing

## Run locally

```bash
npm install
npm run dev
```

## Structure

```
public/images/        All 44 site images, with descriptive filenames
src/
  index.css           Design system: colors, fonts, buttons, signature "black lines"
  data/
    site.ts           Business info, offers, value props, process, service areas, FAQ
    services.ts       All 14 service pages (copy, process, lists, FAQs, images)
    blog.ts           5 blog articles migrated from the original site
    images.ts         Single source of truth: image key → filename
  components/         Navbar (mega-menu), Footer, LeadForm (multi-step),
                      RoofAnatomy (3D), InspectionReport, AreaMap (radar),
                      Gallery (lightbox), FAQ, CTASection, PageHero, …
  pages/              Home, Services, ServiceDetail, ServiceAreas, About,
                      Offers, Blog, BlogPost, Contact, NotFound
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services hub |
| `/services/:slug` | 14 service detail pages |
| `/service-areas` | Service areas, radar map |
| `/about` | About |
| `/offers` | Offers & financing |
| `/blog`, `/blog/:slug` | Blog and 5 articles |
| `/contact` | Contact and inspection form |

## Brand

| Token | Value |
|---|---|
| Ink (page black) | `#07090C` |
| Brand baby blue | `#00B3FE` |
| Headings | Bricolage Grotesque 800 |
| Body | Inter |
| Labels | Michroma |
