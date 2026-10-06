# Blackline Roofing — Image Placement Guide

Every image used on the site lives in [`/public/images`](./public/images), and the **same files with the same names** will be uploaded to the GoHighLevel Media Library.

**How to place them:** find the file in the GHL Media Library by its **exact filename** and use its GHL URL wherever this guide (or the code) references `/images/<filename>`.

The single source of truth in code is [`src/data/images.ts`](./src/data/images.ts). Each key there maps to one filename below.

---

## 1. Brand assets

| File | Where it goes | Notes |
|---|---|---|
| `blackline-logo-white.png` | Header logo (every page, top-left) and footer logo | Transparent PNG with white text + baby-blue mark. **Only use it on dark backgrounds.** |
| `blackline-logo-roof-mark.png` | Optional decorative roof mark | Transparent. Use it for loaders, social cards and similar places. |
| `blackline-favicon.png` | Browser tab icon / favicon | 512×512, transparent |

---

## 2. Global sections (repeat on several pages)

| Section | File |
|---|---|
| Services **mega-menu** promo card ("$1,000 OFF") | `aerial-tile-reroof-pool-home.jpg` |
| Default **final CTA banner** ("Get a straight answer about your roof") | `team-on-roof-mountain.jpg` |
| 404 page background | `home-aerial-drone-desert-home.jpg` |

---

## 3. Home page (`/`)

Listed top to bottom:

| # | Section | File(s) |
|---|---|---|
| 1 | **Hero** — full-screen background (slow zoom) | `home-hero-desert-tile-roof-crew.jpg` |
| 2 | **Intro** "A small repair gets the same attention…" — large photo (top-right) | `team-laughing-closeup.jpg` |
| 2 | Intro — small overlapping photo (bottom-left) | `happy-homeowner-blackline-dumpster.jpg` |
| 3 | **Services explorer** ("Every roof. Every problem.") — tabbed cards. Each card uses the service's hero image (see section 5) | — |
| 4 | **Offers** ($1,000 / $500 / 0%) | no images (solid cards) |
| 5 | **"Nobody prices a roof from the driveway"**: tablet report mockup, 4 photos in order | `broken-clay-tile-damage.jpg`, `tile-new-underlayment-battens.jpg`, `inspector-measuring-tile-roof.jpg`, `tile-roof-valley-finished.jpg` |
| 6 | **Why homeowners call Blackline** (light section) | no images |
| 7 | **How it works**: sticky image that changes per step | Step 01 `inspector-with-homeowner-front-yard.jpg` · 02 `inspector-clay-tile-roof.jpg` · 03 `inspectors-pointing-roof-detail.jpg` · 04 `crew-passing-tiles-blue-sky.jpg` · 05 `happy-homeowner-blackline-dumpster.jpg` |
| 8 | **Anatomy of an Arizona tile roof**: 3D layers | Layer 1 "Tile" `tile-roof-valley-finished.jpg` · Layer 2 "Underlayment" `tile-new-underlayment-battens.jpg` · Layer 3 "Decking" = CSS wood texture (no image) |
| 9 | **"What Arizona does to a roof"** (background, dark overlay) | `home-aerial-drone-desert-home.jpg` |
| 10 | **"Real crews. Real roofs."** gallery (8 tiles, in order) | `crew-passing-tiles-blue-sky.jpg` (tall), `aerial-tile-reroof-pool-home.jpg` (wide), `roofer-nail-gun-straw-hat.jpg` (tall), `inspector-clay-tile-roof.jpg`, `shingle-roof-new-architectural.jpg`, `aerial-underlayment-tile-rows.jpg` (wide), `team-three-tablet-laughing.jpg`, `roofer-circular-saw.jpg` |
| 11 | **Service area** radar map | no images (SVG) |
| 12 | **FAQ** | no images |
| 13 | **Schedule your free roof inspection** (background behind form) | `home-mountain-crew-underlayment.jpg` |

---

## 4. Inner page heroes

| Page | Hero background | Other images |
|---|---|---|
| `/services` | `aerial-underlayment-tile-rows.jpg` | Service cards use each service hero (section 5). Final CTA: `team-on-roof-mountain.jpg` |
| `/service-areas` | `home-mountain-crew-underlayment.jpg` | Final CTA: `aerial-ridge-underlayment-desert.jpg` |
| `/about` | `team-three-tablet-laughing.jpg` | Crew gallery: `team-laughing-closeup.jpg` (big), `team-three-on-roof.jpg`, `inspector-tablet-blackline-shirt.jpg`, `crew-briefing-straw-hat.jpg` (wide), `roofer-nail-gun-closeup.jpg`, `happy-homeowner-blackline-dumpster.jpg`. Final CTA: `team-three-on-roof.jpg` |
| `/offers` | `aerial-tile-reroof-pool-home.jpg` | Financing section photo: `inspector-with-homeowner-front-yard.jpg` |
| `/blog` | `aerial-blue-underlayment-reroof.jpg` | Post cards use each post image (section 6). Final CTA: `team-on-roof-mountain.jpg` |
| `/contact` | `inspector-clay-tile-roof.jpg` | — |

---

## 5. Service pages (`/services/<slug>`)

Each service page uses three photos:

- **Hero:** the full-width background at the top. The same image is used on that service's card everywhere.
- **Intro large:** the tall photo next to the intro text. It is also the background of the final CTA on that page.
- **Intro small:** the square photo overlapping the large one.

| URL | Service | Hero | Intro large | Intro small |
|---|---|---|---|---|
| `/services/roof-replacement` | Roof Replacement | `crew-passing-tiles-blue-sky.jpg` | `aerial-underlayment-tile-rows.jpg` | `aerial-tile-reroof-pool-home.jpg` |
| `/services/roof-repair` | Roof Repair | `broken-clay-tile-damage.jpg` | `inspector-clay-tile-roof.jpg` | `roofer-nail-gun-closeup.jpg` |
| `/services/roof-inspections` | Roof Inspections | `inspector-tablet-blackline-shirt.jpg` | `inspectors-pointing-roof-detail.jpg` | `inspector-measuring-tile-roof.jpg` |
| `/services/roof-coatings` | Roof Coatings | `coating-crew-rolling-white.jpg` | `coating-aerial-white-roof.jpg` | `metal-roof-reflective-panels.jpg` |
| `/services/residential-roofing` | Residential Roofing | `tile-roof-crew-pool-home.jpg` | `inspector-with-homeowner-front-yard.jpg` | `happy-homeowner-blackline-dumpster.jpg` |
| `/services/commercial-roofing` | Commercial Roofing | `flat-roof-commercial-aerial.jpg` | `flat-roof-tpo-rolls.jpg` | `coating-crew-rolling-white.jpg` |
| `/services/new-construction-roofing` | New Construction | `home-mountain-crew-underlayment.jpg` | `crew-tile-stacks-mountain.jpg` | `roofer-circular-saw.jpg` |
| `/services/tile-roofing` | Tile Roofing | `tile-roof-valley-finished.jpg` | `tile-new-underlayment-battens.jpg` | `tile-stack-underlayment-job.jpg` |
| `/services/shingle-roofing` | Shingle Roofing | `shingle-roof-new-architectural.jpg` | `shingle-roof-roofer-ridge.jpg` | `shingle-roof-finished-neighborhood.jpg` |
| `/services/metal-roofing` | Metal Roofing | `metal-roof-worker-installing.jpg` | `metal-roof-standing-seam.jpg` | `metal-roof-reflective-panels.jpg` |
| `/services/flat-roofing` | Flat Roofing | `flat-roof-tpo-rolls.jpg` | `flat-roof-membrane-cutting.jpg` | `flat-roof-commercial-aerial.jpg` |
| `/services/foam-roofing` | Foam Roofing | `foam-roof-spray-coated.jpg` | `coating-aerial-white-roof.jpg` | `flat-roof-commercial-aerial.jpg` |
| `/services/storm-damage-restoration` | Storm Damage Restoration | `aerial-ridge-underlayment-desert.jpg` | `inspector-measuring-tile-roof.jpg` | `broken-clay-tile-damage.jpg` |
| `/services/insurance-claim-assistance` | Insurance Claim Assistance | `inspector-with-homeowner-front-yard.jpg` | `team-three-tablet-laughing.jpg` | `inspector-measuring-tile-roof.jpg` |

---

## 6. Blog posts (`/blog/<slug>`)

The image is both the post hero and the post card thumbnail.

| URL | Image |
|---|---|
| `/blog/roof-coating-mesa-az` | `coating-crew-rolling-white.jpg` |
| `/blog/foam-vs-shingle-roof-arizona-homes` | `home-aerial-drone-desert-home.jpg` |
| `/blog/best-time-of-year-to-replace-a-roof-phoenix` | `aerial-blue-underlayment-reroof.jpg` |
| `/blog/tile-underlayment-replacement-mesa` | `tile-new-underlayment-battens.jpg` |
| `/blog/monsoon-roof-damage-repair-arizona` | `inspector-clay-tile-roof.jpg` |

---

## 7. Full file list (44 files)

```
blackline-logo-white.png              blackline-logo-roof-mark.png          blackline-favicon.png
home-hero-desert-tile-roof-crew.jpg   home-mountain-crew-underlayment.jpg   home-aerial-drone-desert-home.jpg
aerial-tile-reroof-pool-home.jpg      aerial-underlayment-tile-rows.jpg     aerial-ridge-underlayment-desert.jpg
aerial-blue-underlayment-reroof.jpg   crew-passing-tiles-blue-sky.jpg       crew-tile-stacks-mountain.jpg
crew-briefing-straw-hat.jpg           crew-installing-underlayment-desert.jpg
team-three-tablet-laughing.jpg        team-laughing-closeup.jpg             team-on-roof-mountain.jpg
team-three-on-roof.jpg                happy-homeowner-blackline-dumpster.jpg
inspector-tablet-blackline-shirt.jpg  inspectors-pointing-roof-detail.jpg   inspector-with-homeowner-front-yard.jpg
inspector-clay-tile-roof.jpg          inspector-measuring-tile-roof.jpg
roofer-nail-gun-straw-hat.jpg         roofer-nail-gun-closeup.jpg           roofer-circular-saw.jpg
broken-clay-tile-damage.jpg           tile-stack-underlayment-job.jpg       tile-new-underlayment-battens.jpg
tile-roof-valley-finished.jpg         tile-roof-crew-pool-home.jpg
shingle-roof-roofer-ridge.jpg         shingle-roof-new-architectural.jpg    shingle-roof-finished-neighborhood.jpg
foam-roof-spray-coated.jpg            flat-roof-commercial-aerial.jpg       flat-roof-tpo-rolls.jpg
flat-roof-membrane-cutting.jpg        metal-roof-worker-installing.jpg      metal-roof-standing-seam.jpg
metal-roof-reflective-panels.jpg      coating-crew-rolling-white.jpg        coating-aerial-white-roof.jpg
```

`crew-installing-underlayment-desert.jpg` is a spare photo that the current layout doesn't use. Use it anywhere an extra job-site photo helps, for example in a gallery.
