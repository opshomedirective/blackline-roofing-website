# Master Prompt — GoHighLevel AI Builder

Copy everything inside the box below and paste it into the GoHighLevel AI builder.

---

```text
You are rebuilding a finished, approved website inside GoHighLevel. Do NOT redesign it — CLONE it.

SOURCE REPOSITORY (public):
https://github.com/opshomedirective/blackline-roofing-website

1. ACCESS & STUDY THE PROJECT
- Open the repository and read it completely before building anything.
- Start with README.md, then GHL-IMAGE-GUIDE.md, then everything inside /src.
- The site is React + Vite + Tailwind CSS v4. All content (text, services, FAQs, offers,
  service areas, blog posts) lives in /src/data. All pages live in /src/pages, all
  reusable sections in /src/components, and the full design system lives in /src/index.css.

2. RECREATE IT EXACTLY
Reproduce the same pages, sections, order, copy, layout, colors, fonts, spacing,
animations and responsive behavior. Do not invent new sections, do not remove sections,
and do not rewrite the copy. Use the text in /src/data/*.ts word for word.

Pages to build (same URLs):
- /                                   Home
- /services                           Services hub
- /services/<slug>                    14 service pages, all from src/data/services.ts:
    roof-replacement, roof-repair, roof-inspections, roof-coatings,
    residential-roofing, commercial-roofing, new-construction-roofing,
    tile-roofing, shingle-roofing, metal-roofing, flat-roofing, foam-roofing,
    storm-damage-restoration, insurance-claim-assistance
- /service-areas                      Service Areas
- /about                              About
- /offers                             Offers & Financing
- /blog                               Blog index
- /blog/<slug>                        5 articles from src/data/blog.ts
- /contact                            Contact
- 404 page

Design system (from src/index.css). Keep it identical:
- Colors: page black #07090C, dark section #0D1116, card #151B23, borders #232B36,
  muted text #8B97A6, light section #F4F7FA, BRAND BABY BLUE #00B3FE
  (hover/deep #0090D4, soft #7FD9FF).
- Fonts (Google Fonts): "Bricolage Grotesque" (headings, 800 weight), "Inter" (body),
  "Michroma" (small uppercase eyebrow labels with wide letter-spacing).
- Signature element: three skewed (-35deg) bars, white / baby-blue / white, taken from
  the logo. They appear in the hero, the CTAs, list bullets and the marquee separators.
- Rounded cards (24px radius), pill buttons, glassmorphism panels, a subtle grid-line
  background on some dark sections, and alternating dark/light section rhythm.
- Motion: hero background slow zoom ("Ken Burns"), headline word-by-word reveal,
  sections fade-up on scroll, an infinite city marquee, a sticky "How it works"
  image that swaps per step, a 3D exploded "Anatomy of a tile roof" (hover a layer to
  pull the layers apart), a radar-style service-area map with a rotating sweep, and an
  image gallery with a lightbox. If a specific animation is impossible in GHL, use the
  closest equivalent rather than dropping the section.

Global elements:
- Top offer ribbon (baby blue): "$1,000 OFF roof replacements · $500 OFF for military · 0% financing options".
- Sticky header: logo, nav (Services with mega-menu, Service Areas, About, Offers & Financing,
  Blog, Contact), phone (480) 427-2480, "Free Inspection" button. Transparent over the hero,
  dark glass after scrolling.
- Mobile: hamburger full-screen menu + a sticky bottom bar with "Call now" and "Free inspection".
- Footer with logo, services, company links, contact info, social icons and a giant
  outlined "BLACKLINE" wordmark.

3. IMAGES
I have uploaded every image to the GHL Media Library using the EXACT same filenames as
the files in /public/images. Follow GHL-IMAGE-GUIDE.md in the repository. It lists
which file goes in every page and section. For each image, find the Media Library file with
the same filename and use its GHL URL. Do not use stock photos, placeholders, or any
image that is not in that list. The logo (blackline-logo-white.png) is white + blue on
a transparent background and must only sit on dark backgrounds.

4. FORMS, CALENDAR & CRM (important)
- The multi-step "free inspection" form in the code (src/components/LeadForm.tsx) is a
  design reference. Replace it with a native GHL multi-step Form/Survey that asks the same
  questions in the same order, styled to match:
    Step 1 "What's going on with your roof?" Active leak / Storm-monsoon damage /
           Want a full replacement / Inspection-not sure / Insurance claim help / New construction
    Step 2 "What type of roof do you have?" Tile / Shingle / Metal / Flat-foam / Not sure
    Step 3 "Tell us about the property." Home I own / Commercial building / Rental-investment / Property I'm buying
    Step 4 "When do you want this handled?" ASAP / Within 30 days / 1–3 months / Just planning ahead
    Step 5 Name, Phone, Email, Property address, checkbox "I served in the military"
- Map every answer to custom contact fields so the details show on the contact record
  and on the inspection calendar booking.
- After submit, show the same confirmation message or redirect to the inspection calendar.
- Every "Book a free inspection / Free Inspection / Book inspection" button links to
  that form (or the calendar). Every phone button uses tel:+14804272480.

5. BUSINESS DATA (use exactly; do not add anything else)
- Name: Blackline Roofing & Contracting
- Phone: (480) 427-2480 | Email: info@blackline-roofing.com
- Address: 7931 E Pecos Rd STE 198B, Mesa, AZ 85212
- Hours: Mon – Fri · 9AM – 5PM (active leaks & storm damage prioritized)
- Offers: $1,000 OFF full roof replacement · $500 OFF military · financing through Hearth
  and Upgrade incl. 0% options · 10-year warranty · family owned
- Social: Facebook https://www.facebook.com/p/Blackline-Roofing-61586971841234/
          Instagram https://www.instagram.com/blackline_roofing/
          Google https://www.google.com/maps?cid=10837845710747504719
- Service area: 50-mile radius around Mesa/Chandler (Maricopa & Pinal County).
  Do NOT add testimonials, review counts, star ratings, license numbers, awards or any
  claim that is not already in the repository.

6. SEO
Use the page titles and meta descriptions defined in each page's useSEO(...) call.
Use one H1 per page, keep the H2/H3 hierarchy, add alt text to every image (use the
alt text in the code), and set the favicon to blackline-favicon.png.

7. QUALITY CHECK BEFORE YOU FINISH
- Every page in the list above exists and matches the repo, desktop and mobile.
- No placeholder text, no lorem ipsum, no broken links, no missing images.
- All CTAs go to the GHL form or calendar; all phone links work on mobile.
- Mobile at 375px: no horizontal scroll, sticky bottom call bar visible, menu works.
```
