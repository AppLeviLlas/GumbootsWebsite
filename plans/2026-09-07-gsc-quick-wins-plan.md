# GSC Quick-Wins Plan — 7 Sep 2026 (PLAN ONLY, nothing shipped)

**Data:** GSC CSV export, Web, last 7 days (29 Aug – 4 Sep 2026), from `gsc data/`.
**Live GSC MCP:** OAuth token expired again (7-day Testing-mode limit) — re-auth with the standalone script before the next live audit.
**Not available:** DataForSEO (no KD / SERP validation). Country split per query is not in the export; site-wide it is 86% NZ (1,802 of 2,092 impressions) and the July live checks showed the clusters below are all-NZ.

## Site totals (7d)

| Metric | This export | 11 Jul 7-day | Note |
|---|---|---|---|
| Clicks | 30 | 23 | +30% |
| Impressions | 2,092 | ~2,000 | flat |
| CTR | 1.43% | ~1.1% | |
| Avg position | 17.6 | — | |
| Mobile | 369 imps, 3.52% CTR, pos 8.7 | | real customers are on mobile |
| Desktop | 1,712 imps, 0.99% CTR, pos 19.9 | | most impressions, almost no clicks |

## Quick-wins table (Pos 4–15, NZ, meaningful impressions)

| Keyword cluster | Page | GSC Pos | Imps/7d | Clicks | KD | Action | Priority |
|---|---|---|---|---|---|---|---|
| geotech(nical) report cost nz / cost of geotech report nz / how much is a geotech report (nz) | geotechnical-report.html | 3.5–10.1 | ~180 (cluster) | 0 | n/a | Content depth (price table by report type, price answer above the fold) + internal link push | **1** |
| how much does a geotech report cost (national) | geotechnical-report.html | 19.5 | 47 | 0 | n/a | Same page work; will follow | 1 |
| geotechnical report nz / geotech report near me | geotechnical-report.html | 14.8 / 12.6 | 38 / 35 | 0 | n/a | Same page work; "near me" is GBP territory — no on-page fix | 1 |
| structural engineer whangarei | structural-engineering-whangarei.html | 11.0 | 18 | (page: 2) | n/a | Internal link push — page has only 2 inbound files | **2** |
| erosion control northland / services northland / services whangarei / whangarei | erosion-control-northland.html | 1.85 / 3.12 / 4.31 / 9.67 | 118 (cluster) | 0 | n/a | Title + H2 add "Whangarei"; manual NZ SERP check first | 3 |
| tp58 / tp58 wastewater | wastewater-design.html | 4.7 / 3.6 | 40 / 12 | (page: 2) | n/a | Title tweak (Pos 1–5 rule) + add missing schema | 4 |
| subdivision consultants northland / whangarei | subdivision-engineering-northland.html | 20.6 / 23.2 | 17 / 17 | 0 | n/a | Consolidate: 301 subdivision-consultant-northland.html → engineering page | 5 |
| engineered retaining walls / retaining wall examples northland | retaining-wall-design.html | 7.9 / 7.4 | 14 / 7 | (page: 1) | n/a | Trim title, add examples section with photos, cost band | 6 |
| wdc engineering standards / fndc engineering standards | civil-engineering-whangarei.html (likely) | 8.7 / 9.0 | 6 / 3 | 0 | n/a | Low volume — leave | — |
| resource consent process/help bay of islands | resource-consent-northland.html | 4.1 / 11 | 7 / 12 | 0 | n/a | Low volume — leave | — |

**Single highest-leverage action:** geotechnical-report.html. It is the site's #1 page by impressions (653/7d) at 0.46% CTR, and the cost-intent cluster sits at Pos 3.5–10 with zero clicks nine weeks after the July cost section went live. Position moved, clicks didn't — the searcher gets the price from the snippet/AI Overview and leaves. The fix is to make the page worth the click (price table by report type, what's included, an above-the-fold answer) and push more authority into it from the geotech hub pages, not another meta rewrite (Pos 6–10 → meta is not the lever).

---

## Task list

### 1. geotechnical-report.html — content depth + link push (Priority 1)
1. Move a two-sentence price answer (existing figures: $1,500–$2,500 + GST standard residential; subdivision packages from $8,000+) into the intro, directly under the H1. Keep the full `#cost` section where it is.
2. Add a price-by-report-type table under "How Much Does a Geotechnical Report Cost in NZ?" with rows for the four report types already on the page (Site Suitability, Subdivision, Investigation, Pre-Purchase). **Needs Paul's figures for the three non-standard rows — do not invent numbers.** If figures aren't available, use "from $1,500" for standard and "quoted per site" for the rest.
3. Add a short "What's included for that price" checklist (site walkover, hand augers/test pits, Scala penetrometer, written report accepted by FNDC/WDC/NRC — confirm wording against existing site copy).
4. Internal link push (all mid-paragraph, in-content, descriptive anchors):
   - `index.html` → in the Geotechnical service card text, anchor **"geotechnical report costs"**. Bridge: home visitors' first question is price.
   - `geotechnical-engineering-northland.html` → "Geotechnical Services Across Northland" section, anchor **"what a geotechnical report costs"**. Bridge: same service, cost sub-question.
   - `geotechnical-engineering-whangarei.html` and `geotechnical-engineering-kerikeri.html` → same anchor pattern with the town name. Bridge: local geotech searchers → report cost.
   - `soil-testing.html` → anchor **"geotechnical report pricing"** in the intro. Bridge: soil testing is the input to the report.
5. Do NOT change title/meta (currently correct and cost-led).
6. Ignore out-of-region impressions on this page (Kapiti 85, Wellington 38, Hawke's Bay/CHB/Hastings 94 imps/7d at Pos 23–44). They are a by-product of ranking nationally for "geotech report cost nz"; not serviceable, not an opportunity.

### 2. structural-engineering-whangarei.html — internal link push (Priority 2)
Page ranks Pos 11 for "structural engineer whangarei" (18 imps) but has only **2 inbound files** (structural-engineering.html, whangarei.html). Add in-content links from:
- `retaining-wall-design.html` → in "Retaining Wall Engineering Services", anchor **"structural engineer in Whangarei"**. Bridge: engineered walls need structural + geotech sign-off; Whangarei is the biggest market.
- `civil-engineering-whangarei.html` → in "Other Engineering Services in Whangarei", anchor **"Whangarei structural engineering"**. Bridge: same city, adjacent discipline.
- `geotechnical-engineering-whangarei.html` → in the services section, anchor **"structural engineering for Whangarei foundations"**. Bridge: geotech report → foundation design.
- `stormwater-design-whangarei.html` (the one Whangarei page earning clicks, Pos 13) → anchor **"structural engineer for retaining walls in Whangarei"**. Bridge: stormwater/drainage jobs on sloping sites need walls.
Target: 2 → 6 inbound. No title change (Pos 11).

### 3. erosion-control-northland.html — Whangarei angle + SERP check (Priority 3)
- Ranks Pos 1.85–4.31 for three queries and 9.67 for "erosion control whangarei" (118 imps total), still **0 clicks** nine weeks after the July meta rewrite. Meta is not fixing it.
- Before editing: search "erosion control whangarei" and "erosion control services northland" in an NZ incognito session. If the SERP is a map pack + earthmoving/landscaping contractors, the intent is installation, not engineering — accept low CTR and stop investing here.
- If organic is visible: change title to **"Erosion Control Northland & Whangarei | Engineer-Designed Fixes | Gumboots"** (≤65 chars) and add an H2 "Erosion Control Whangarei" with 2 paragraphs (WDC/NRC context, site-visit turnaround). 59 of the 118 imps are Whangarei-flavoured and the page mentions Whangarei only 5 times with none in the title.

### 4. wastewater-design.html — TP58 title tweak + schema (Priority 4)
- "tp58" moved 6.9 → 4.7 since the July explainer; page Pos 5.29, 170 imps, 2 clicks. Pos 1–5 → title is the sanctioned lever.
- Title: **"TP58 Wastewater Design Northland | What TP58 Means & Cost | Gumboots"** (63 chars). Meta: lead with "What is TP58? …" then the $2,000–$3,500 + GST design price.
- The page has **no structured data at all** (every sibling page has ProfessionalService + Service + BreadcrumbList). Add the same block for consistency.

### 5. Subdivision cannibalisation — consolidate (Priority 5)
- `subdivision-consultant-northland.html` has zero impressions in the export, self-canonical, 4 inbound files. `subdivision-engineering-northland.html` is flat at Pos 16–23 for "subdivision consultants northland/whangarei" (34 imps) since July.
- Add a 301 in `.htaccess`: `subdivision-consultant-northland.html` → `subdivision-engineering-northland.html`. Repoint the 4 inbound links, remove the old URL from `sitemap.xml`, resubmit sitemap via the direct API call (see memory notes).
- On the engineering page, add "subdivision consultants" wording to the intro paragraph and one H2 (e.g. "Subdivision Consultants for Whangarei & the Far North") so the surviving page carries both intents.

### 6. retaining-wall-design.html — title + examples (Priority 6)
- Impressions fell 259 → 109/7d since July; Pos ~25 flat despite the link push; 1 click. Pos 7.9 for "engineered retaining walls", 7.4 for "retaining wall examples northland".
- Title is 78 chars (truncated): change to **"Retaining Wall Design Northland | Engineered Walls | Gumboots"**.
- Add "Retaining Wall Examples — Northland" section: 3–4 project photos with one-line captions (wall type, height, location). **Needs photos from Paul** — the page currently has 2 images and no projects section.
- Add a cost band only if Paul supplies figures.

### 7. Housekeeping (no site edits)
- www vs non-www home split persists: `https://www.…/` Pos 35.8 / 124 imps vs `https://gumbootsconsulting.co.nz/` Pos 2.96 / 47 imps. Canonical and 301 are correct. Action: URL-inspect the non-www home in GSC and request indexing of the www home.
- Search-appearance export is empty → no rich results at all. Existing FAQPage schema (resource-consent) is producing nothing; don't invest in FAQ schema as a lever.
- Re-authorise the GSC MCP (standalone auth script → `~/.gsc-mcp/oauth-token.json`) before the next audit so query→page and per-query country splits can be verified live.

### Skip list (not opportunities)
Kapiti / Wellington / Hawke's Bay / CHB / Hastings geotech queries; all "near me" queries (GBP); stormwater modelling dunedin; septic design palmerston north / hamilton; water damage restoration dargaville; asbestos testing whangarei; geotechnical engineers mascot; retaining walls greymouth / waikato / north shore.

### Re-check
Run the next export ~5 Oct 2026 (28-day window) and compare geotechnical-report.html CTR, structural-engineering-whangarei.html position, and tp58 position.
