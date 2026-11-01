# Design Spec: Far North SEO Cleanup + Coromandel Build

**Date:** 2026-06-17
**Project:** Gumboots Consulting Engineers — gumbootsconsulting.co.nz
**Scope:** Two-phase work: (1) clean up and strengthen existing Far North pages using live GSC data, then (2) build out Coromandel Peninsula location using the cleaned model.

---

## Context

Gumboots Consulting Engineers is a geotechnical and civil engineering firm based in Kerikeri, Far North. They offer: geotechnical engineering, civil engineering, structural engineering, TP58 wastewater design, stormwater design, soil testing, erosion control, subdivision engineering, and planning/resource consent consulting.

They have opened a new office in Whangamata (registered address, by appointment — not permanently staffed) serving the wider Coromandel Peninsula.

**GSC baseline (last 90 days):**
- 1,888 clicks, 239,185 impressions, 0.79% CTR, average position 9.4
- Prior period: 3,283 clicks — traffic has dropped ~42%
- ~74 pages indexed; impression spike May 2026 when thin pages were indexed

**Critical issues identified from GSC data:**
1. www/non-www homepage split — 104 clicks split across two versions, non-www ranks position 5, www ranks position 38
2. Sitemap missing ~60 of the 74 pages
3. One confirmed duplicate page (geotechnical-kerikeri.html)
4. Three thin/weak pages to consolidate via 301
5. Nine page-1 or near-page-1 pages with broken CTR (title/meta issues)
6. Untapped planning/resource consent query cluster (~2,000 monthly impressions, 0 clicks)

---

## Phase 1: Far North SEO Cleanup

### 1A — Technical fixes (do first)

**1. www/non-www 301 redirect**
- Add rule to `.htaccess`: redirect all `http://gumbootsconsulting.co.nz/*` and `https://gumbootsconsulting.co.nz/*` to `https://www.gumbootsconsulting.co.nz/*`
- Audit all internal links site-wide — update any that reference the non-www version
- Confirm all canonical tags already use www (they do on checked pages — verify remainder)
- Resubmit homepage to GSC after redirect is live

**2. Sitemap rebuild**
- Regenerate `sitemap.xml` to include all 74 current pages
- Exclude: `sitemap-visual.html`, `404.html`, `img/icons/generate-favicon.html`
- Add `<lastmod>` dates
- Resubmit to GSC via Search Console

**3. 301 consolidations**

| From | To | Reason |
|---|---|---|
| `geotechnical-kerikeri.html` | `geotechnical-engineering-kerikeri.html` | Exact duplicate, not indexed |
| `geotechnical-engineering-coopers-beach.html` | `coopers-beach.html` | Position 77.5, 2 impressions |
| `soil-testing-paihia.html` | `paihia.html` | Position 44.5, 10 impressions |
| `soil-testing-coopers-beach.html` | `coopers-beach.html` | Position 16.5, 2 impressions |

Implement via `.htaccess` `Redirect 301` rules. Where the source page has unique content, merge that content into the destination page first.

---

### 1B — CTR rewrites

Nine pages with strong positions but broken title/meta. Each requires: new title tag, new meta description. No content changes — title/meta only. Format: `[Compact keyword] [Location] | [Differentiator] | Gumboots Engineers`. Meta description must lead with the compact keyword, include location, include phone CTA (020 4 GUMMYS), stay under 160 characters.

| Page | Current pos | Impr | Priority | New title direction |
|---|---|---|---|---|
| `erosion-control-northland.html` | 6.4 | 1,212 | P1 — biggest win | Lead with "Erosion Control Northland" |
| `civil-engineering-bay-of-islands.html` | 13.6 | 880 | P1 — almost page 1 | Lead with "Civil Engineer Bay of Islands" |
| `tp58-wastewater-whangarei.html` | 10.7 | 72 | P2 | Lead with "TP58 Whangarei" |
| `stormwater-design-dargaville.html` | 5.2 | 18 | P2 | Lead with "Stormwater Design Dargaville" |
| `stormwater-design-mangonui.html` | 6.7 | 24 | P2 | Lead with "Stormwater Design Mangonui" |
| `civil-engineering-coopers-beach.html` | 6.3 | 18 | P2 | Lead with "Civil Engineer Coopers Beach" |
| `mangonui.html` | 4.9 | 50 | P2 — best hub position | Expand content + CTR fix |
| `coopers-beach.html` | 6.1 | 57 | P2 | Expand content + CTR fix |
| `tp58-wastewater-northland.html` | 14.7 | 42 | P3 | Lead with "TP58 Northland" |

After each update: submit URL to GSC for reindexing.

---

### 1C — New planning/resource consent pages

Four new pages targeting the untapped planning/consent query cluster. Each page: 800+ words, FAQ schema markup, internal links from relevant location hub pages and from `subdivision-engineering-northland.html`.

**1. `subdivision-consultant-northland.html`**
- Target: "subdivision consultants northland", "subdivision consultant kerikeri/paihia/whangarei", "land development consultant northland"
- H1: `Subdivision Consultant Northland — Far North District`
- Content: RMA subdivision process, FNDC requirements, lot creation, survey coordination, consent timeline
- Links to: `geotechnical-engineering-northland.html`, `engineering-consulting.html`, all town hub pages

**2. `planning-consultant-kerikeri.html`**
- Target: "planning consultant kerikeri", "resource consent consultant kerikeri", "development consultant kerikeri", "consent consultant kerikeri"
- H1: `Planning Consultant Kerikeri — Resource Consent & Development`
- Content: FNDC consent process, RMA requirements, site feasibility, development advisory
- Links to: `kerikeri.html`, `subdivision-consultant-northland.html`

**3. `planning-consultant-paihia.html`**
- Target: "planning consultant paihia", "resource consent consultant paihia", "consent consultant paihia", "development consultant paihia"
- H1: `Planning Consultant Paihia — Resource Consent & Development`
- Content: Same structure as Kerikeri page but Paihia/Bay of Islands context, coastal property considerations
- Links to: `paihia.html`, `subdivision-consultant-northland.html`

**4. `resource-consent-northland.html`**
- Target: "resource consent northland", "resource consent consultant northland", "resource consent advice northland"
- H1: `Resource Consent Northland — Expert Consent Consultants`
- Content: What resource consent is, when you need it, RMA process, Northland Regional Council vs FNDC roles, timeline and costs
- Links to: `subdivision-consultant-northland.html`, all town hub pages

---

### 1D — Content improvements on high-impression underperformers

Five existing pages with strong impression counts but weak positions due to thin content. Each needs genuine content depth — local specifics, process detail, FAQ section added.

| Page | Impr | Pos | Key content to add |
|---|---|---|---|
| `engineering-consulting.html` | 1,682 | 18 | Define all service types clearly, add service cards with links, clarify what "engineering consulting" means at Gumboots |
| `subdivision-engineering-northland.html` | 1,144 | 25 | Add planning process steps, FNDC consent timeline, lot creation requirements, link to new planning pages |
| `civil-engineering-whangarei.html` | 1,136 | 33 | Add Whangarei-specific content: WDC council info, local projects, infrastructure context |
| `geotechnical-engineering-kerikeri.html` | 659 | 39 | Add Kerikeri soil types (clay-rich volcanic), local terrain notes, case examples, FAQ |
| `kerikeri.html` (hub) | 166 | 47 | Major rewrite — currently very thin. Add full service overview, local context, internal links to all Kerikeri service pages |

---

## Phase 2: Coromandel Peninsula Build

### Structure

Mirrors the Far North structure exactly. Every page uses TCDC and Waikato Regional Council references instead of FNDC and Northland Regional Council. Whangamata office address included on all pages with "by appointment" note.

**Coromandel-specific regulatory content to include on relevant pages:**
- Building consents: Thames-Coromandel District Council (TCDC)
- Resource consents (stormwater, wastewater discharge, earthworks): Waikato Regional Council
- TP58 wastewater: TCDC requirements (different approval pathway to FNDC)
- Coastal/marine: Additional coastal hazard considerations for Hahei, Hot Water Beach, Waihi Beach, Whangamata
- Terrain notes: volcanic/coastal soils, steep Coromandel ranges, high rainfall

**Whangamata office address:** Include on all Coromandel pages. Framing: "Whangamata office — serving the Coromandel Peninsula by appointment."

---

### Regional hub

**`coromandel-peninsula.html`**
- Equivalent to `geotechnical-engineering-northland.html` for the region
- Title: `Engineering Services Coromandel Peninsula | Geotechnical, Civil & Structural | Gumboots`
- H1: `Engineering Services Coromandel Peninsula`
- Covers all services, all 7 towns, TCDC + Waikato RC context
- Links to all 7 town hub pages and all main service pages
- Mentions Whangamata office address

---

### Town hub pages (7)

Equivalent to `kerikeri.html`, `paihia.html` etc. Full service overview per town, local context, internal links to all service+location pages for that town.

| File | Town | Key local notes |
|---|---|---|
| `whangamata.html` | Whangamata | Primary office town; surfing/holiday town; coastal soils; high rainfall |
| `tairua.html` | Tairua | Estuary/harbour town; coastal development; steep terrain |
| `thames.html` | Thames | Largest town; gateway to peninsula; Hauraki Plains edge; industrial/residential mix |
| `hahei.html` | Hahei | Small coastal; Cathedral Cove area; high-value holiday properties; limited infrastructure |
| `hot-water-beach.html` | Hot Water Beach | Tourism-heavy; geothermal activity nearby; challenging ground conditions |
| `waihi-beach.html` | Waihi Beach | Coastal strip; holiday homes; sandy soils; Waihi/Coromandel border |
| `coromandel-town.html` | Coromandel Town | Remote; limited council services; rural/lifestyle blocks |

---

### Service × location pages (36 pages)

URL pattern: `[service]-[location].html` — consistent with Far North convention.

**Whangamata and Thames — full 6-service treatment:**

| Service | Whangamata file | Thames file |
|---|---|---|
| Geotechnical engineering | `geotechnical-engineering-whangamata.html` | `geotechnical-engineering-thames.html` |
| Civil engineering | `civil-engineering-whangamata.html` | `civil-engineering-thames.html` |
| TP58 wastewater | `tp58-wastewater-whangamata.html` | `tp58-wastewater-thames.html` |
| Stormwater design | `stormwater-design-whangamata.html` | `stormwater-design-thames.html` |
| Structural engineering | `structural-engineering-whangamata.html` | `structural-engineering-thames.html` |
| Soil testing | `soil-testing-whangamata.html` | `soil-testing-thames.html` |

**Tairua, Hahei, Hot Water Beach, Waihi Beach, Coromandel Town — 4-service treatment:**

| Service | Tairua | Hahei | Hot Water Beach | Waihi Beach | Coromandel Town |
|---|---|---|---|---|---|
| Geotechnical engineering | ✓ | ✓ | ✓ | ✓ | ✓ |
| Civil engineering | ✓ | ✓ | ✓ | ✓ | ✓ |
| TP58 wastewater | ✓ | ✓ | ✓ | ✓ | ✓ |
| Stormwater design | ✓ | ✓ | ✓ | ✓ | ✓ |

Files follow pattern: `geotechnical-engineering-tairua.html`, `tp58-wastewater-hahei.html` etc.

Total service+location pages: 12 (Whangamata+Thames full) + 20 (5 towns × 4 services) = **32 pages**

---

### Internal linking

**New Coromandel pages → existing main service pages:**
Every Coromandel service+location page links to the relevant main service page (`geotechnical-engineering.html`, `wastewater-design.html`, `stormwater-design.html`, `structural-engineering.html`, `retaining-wall-design.html`, `soil-testing.html`).

**Existing main service pages → Coromandel:**
Each main service page adds a Coromandel section to its existing location list, linking to the relevant Coromandel service+location pages. This passes authority from established pages to new ones.

**Homepage:**
Add Coromandel Peninsula to the service area section. Link to `coromandel-peninsula.html`.

**Sitemap:**
All 44 new Coromandel pages added to `sitemap.xml` on completion. Batch-submit to GSC.

---

## Page count summary

| Work item | Pages |
|---|---|
| Phase 1A: Technical (301s, sitemap, canonicals) | 4 consolidated/redirected |
| Phase 1B: CTR rewrites (title/meta only) | 9 updated |
| Phase 1C: New planning/consent pages | 4 created |
| Phase 1D: Content improvements | 5 updated |
| Phase 2: Coromandel regional hub | 1 created |
| Phase 2: Coromandel town hubs | 7 created |
| Phase 2: Coromandel service+location pages | 36 created |
| **Total new pages** | **48** |
| **Total updated pages** | **14** |

---

## Quality checklist — every new page must have

- [ ] Compact keyword in first 30 characters of title tag
- [ ] Location in title
- [ ] Meta description under 160 chars with phone CTA (020 4 GUMMYS)
- [ ] H1 with compact keyword + location
- [ ] First paragraph includes compact keyword
- [ ] 800+ words of unique content with local specifics
- [ ] Correct council references (TCDC + Waikato RC for Coromandel; FNDC for Far North)
- [ ] 2–3 images with descriptive alt text
- [ ] FAQ section (3–5 questions) with FAQPage schema markup
- [ ] LocalBusiness or Service schema markup
- [ ] Canonical tag pointing to own www URL
- [ ] 3–5 internal links to/from related pages
- [ ] Added to sitemap.xml
- [ ] Submitted to GSC after publish

---

## Geo meta tags — Coromandel pages

All Coromandel pages use:
```html
<meta name="geo.region" content="NZ-WKO" />
<meta name="geo.placename" content="[Town], Thames-Coromandel District" />
```

Whangamata coordinates: `-37.2000; 175.8667`
Thames coordinates: `-37.1333; 175.5333`
Tairua coordinates: `-37.0000; 175.8500`

---

## Files touched summary

**Modified:** `.htaccess`, `sitemap.xml`, `index.html`, all 9 CTR-rewrite pages, all 5 content-improvement pages, all main service pages (add Coromandel to location lists)

**Created:** 4 planning/consent pages, 1 regional hub, 7 town hubs, 36 service+location pages

**Redirected:** `geotechnical-kerikeri.html`, `geotechnical-engineering-coopers-beach.html`, `soil-testing-paihia.html`, `soil-testing-coopers-beach.html`
