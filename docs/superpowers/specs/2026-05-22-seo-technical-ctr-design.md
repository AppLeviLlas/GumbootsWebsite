# SEO Improvement Plan — Technical Foundation + CTR Optimization
**Date:** 2026-05-22
**Site:** gumbootsconsulting.co.nz
**Scope:** No new content — technical fixes and on-page meta tag rewrites only

---

## Problem Statement

The site has ~80 pages but nearly all service+location combination pages (~60 pages) are orphaned — they appear in the sitemap but receive no internal links from any other page. Google has no signal to crawl, index, or rank them. Separately, several pages with strong impression counts at positions 6–15 are converting at far below expected CTR, meaning even current rankings aren't generating traffic.

**Total GSC clicks across all pages: ~50. Root causes:**
1. ~60 pages orphaned from internal link graph
2. Meta snippets on near-page-1 pages not compelling clicks
3. A subset of high-impression pages stuck at position 20+ waiting for authority signals that internal linking will provide

---

## Phase 1: Technical Foundation

### 1.1 Internal Linking — Service Hubs → Location Variants

**What:** Add an "Areas We Serve" section to each service hub page, linking to all its location-specific variants using descriptive anchor text.

**Why:** `stormwater-design.html` and `geotechnical-engineering.html` currently have zero links to any of their location variants. Those location pages have no inbound internal links at all, so Google treats them as low-priority.

**Files to modify (service hub pages):**
- `stormwater-design.html` → links to 7 stormwater-design-[location].html pages
- `geotechnical-engineering.html` → links to 8 geotechnical-engineering-[location].html pages
- `structural-engineering.html` → links to 7 structural-engineering-[location].html pages
- `wastewater-design.html` → links to 8 tp58-wastewater-[location].html pages
- `civil-engineering.html` → links to 7 civil-engineering-[location].html pages
- `geotechnical-report.html` → links to geotechnical-engineering-[location].html pages (7 locations)
- `retaining-wall-design.html` → links to relevant location pages
- `erosion-control-northland.html` → links to location pages where applicable
- `soil-testing.html` → links to 7 soil-testing-[location].html pages

**Section design:** A simple two-column link grid near the bottom of each page, above the footer. Each item: linked location name + one-line service description. Plain `<ul>` with CSS grid layout — not the `.when-you-need` card style (that's for problem descriptions, not navigation links).

**Anchor text pattern:** "[Service] in [Location]" — e.g. "Stormwater Design in Kerikeri", "Geotechnical Engineering in Paihia". Never generic "click here".

---

### 1.2 Internal Linking — Location Hubs → Service+Location Pages

**What:** Add a "Our Services in [Location]" section to each location hub page, linking to all available service+location combination pages for that area.

**Why:** `kerikeri.html` has no links to `stormwater-design-kerikeri.html`, `geotechnical-engineering-kerikeri.html`, etc. Users landing on the location page can't navigate to the specific service they need, and those service+location pages receive no PageRank from the most relevant page on the site.

**Files to modify (location hub pages):**
- `kerikeri.html` → links to all kerikeri service+location pages
- `paihia.html` → links to all paihia service+location pages
- `whangarei.html` → links to all whangarei service+location pages
- `bay-of-islands.html` → links to all bay-of-islands service+location pages
- `dargaville.html` → links to all dargaville service+location pages
- `mangonui.html` → links to all mangonui service+location pages
- `coopers-beach.html` → links to all coopers-beach service+location pages

**Section design:** A service card grid matching Phase 1.1 style. Each card shows service name, brief description, and links to the location-specific page.

---

### 1.3 Sitemap Update

**What:** Audit `sitemap.xml` to confirm all ~80 pages are present with accurate `<lastmod>` dates. Update any missing pages and set lastmod to 2026-05-22 for all modified files.

**Why:** Internal linking changes make pages crawlable, but a current sitemap accelerates re-indexing.

---

## Phase 2: CTR Optimization

**Scope:** Head tag rewrites only (`<title>`, `<meta name="description">`, `<meta name="title">`, `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="twitter:title">`, `<meta property="twitter:description">`). No body content changes.

### Priority A — Positions 5–15 (immediate CTR impact)

These pages are visible on page 1 or top of page 2. Better snippets will generate more clicks from existing rankings.

| Page | Impressions | Avg Position | Current Problem |
|------|------------|--------------|-----------------|
| `erosion-control-northland.html` | 372 | 6.65 | Position ~7, only 1 click. Title is keyword-stuffed, description doesn't differentiate. |
| `wastewater-design.html` | 437 | 9.93 | 7 clicks but 430 missed. Description buries the TP58-specific angle. |
| `civil-engineering-bay-of-islands.html` | 159 | 9.13 | Position ~9, zero clicks. Title too generic. |
| `soil-testing-kerikeri.html` | 53 | 8.92 | Near page 1, no urgency or hook. |
| `dargaville.html` | 47 | 5.15 | Position 5, only 1 click. Location page title not compelling. |

**Title rewrite pattern:** Lead with the problem or outcome, not the service name. Include location. Under 60 characters.
- Before: "Erosion Control Northland | Slope Stabilisation Whangarei, Kerikeri, Far North"
- After: "Erosion Control Northland — Stop Slips & Bank Erosion | Gumboots"

**Description rewrite pattern:** One concrete benefit, credentials, CTA. Under 155 characters.
- Before: "Erosion control and slope stabilisation services throughout Northland. Gumboots Consulting Engineers provides erosion assessments..."
- After: "Slipping banks, eroding slopes? Licensed engineers serving Whangarei, Kerikeri & Far North. Fast assessments. Call 020 4 GUMMYS."

---

### Priority B — Positions 15–25 (fix now, benefit after Phase 1 lifts rankings)

These pages have the highest impression volumes on the site. Phase 1 internal linking will push them toward page 1; good snippets need to be ready when they arrive.

| Page | Impressions | Avg Position |
|------|------------|--------------|
| `engineering-consulting.html` | 474 | 20.72 |
| `stormwater-design.html` | 438 | 30.13 |
| `geotechnical-report.html` | 348 | 29.48 |
| `civil-engineering-kerikeri.html` | 270 | 20.70 |
| `geotechnical-engineering-paihia.html` | 220 | 30.61 |
| `structural-engineering.html` | 214 | 31.51 |
| `geotechnical-engineering-northland.html` | 162 | 19.87 |

---

## What This Does NOT Include

- New page creation
- Body content rewrites
- Blog or FAQ additions
- Link building
- Google Business Profile changes

These are deferred to Phase 2 of the broader strategy (content-based work).

---

## Success Metrics

- Erosion control pages reaching top 5 for "erosion control northland/whangarei"
- Wastewater/TP58 pages: clicks double within 60 days
- Service+location combo pages appearing in GSC impressions (currently near zero)
- Overall site clicks increase from ~50 to 150+ within 90 days
