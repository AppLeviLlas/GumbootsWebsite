# SEO Technical Foundation + CTR Optimization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:subagent-driven-development (recommended) or superpowers-extended-cc:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix orphaned internal link graph and rewrite meta snippets to turn existing impressions into clicks, with no new page content.

**Architecture:** Pure HTML edits across static files. No build system. All files in `C:\Users\pjwri\Desktop\Website\Gumboots\`. Each task modifies a defined file set. Tasks 3 and 4 depend on Tasks 1 and 2 completing first (overlapping files). Task 5 runs last.

**Tech Stack:** Static HTML, Bootstrap 5, inline `<style>` blocks per page. No JS build step. Edits are direct file modifications.

---

## CSS Snippet — Add Once Per Modified Page

Every page modified in Tasks 1 and 2 needs this CSS added to its existing `<style>` block (before the closing `</style>` tag). Do not add it twice if already present.

```css
.service-area-links { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.6rem; margin: 0; }
.service-area-links a { display: block; padding: 0.75rem 1rem; background: #fff; border: 1px solid #e2e8d8; border-radius: 6px; color: #2A3517; text-decoration: none; font-weight: 500; font-size: 0.875rem; transition: all 0.15s; }
.service-area-links a:hover { background: #f5f7f2; border-color: #729827; color: #557222; }
```

---

### Task 1: Add "Areas We Serve" sections to service hub pages

**Goal:** Each of the 7 service hub pages links to all its location-specific variants so Google can discover and rank those orphaned pages.

**Files:**
- Modify: `stormwater-design.html`
- Modify: `geotechnical-engineering.html`
- Modify: `structural-engineering.html`
- Modify: `wastewater-design.html`
- Modify: `civil-engineering.html`
- Modify: `geotechnical-report.html`
- Modify: `soil-testing.html`

**Acceptance Criteria:**
- [ ] Each service hub page contains a section with id="areas-we-serve"
- [ ] Every location variant for each service is linked with anchor text "[Service] in [Location]"
- [ ] CSS `.service-area-links` is present in each modified page's `<style>` block
- [ ] No existing content is removed or altered

**Verify:**
```powershell
$base = "C:\Users\pjwri\Desktop\Website\Gumboots"
@("stormwater-design","geotechnical-engineering","structural-engineering","wastewater-design","civil-engineering","geotechnical-report","soil-testing") | ForEach-Object {
    $count = (Select-String -Path "$base\$_.html" -Pattern 'areas-we-serve|service-area-links').Count
    Write-Host "$_`: $count matches"
}
```
Expected: each file shows 2+ matches (the id and the CSS class).

**Steps:**

- [ ] **Step 1: Add CSS to `stormwater-design.html` style block**

Find the closing `</style>` tag in the `<head>` and insert before it:
```css
        .service-area-links { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.6rem; margin: 0; }
        .service-area-links a { display: block; padding: 0.75rem 1rem; background: #fff; border: 1px solid #e2e8d8; border-radius: 6px; color: #2A3517; text-decoration: none; font-weight: 500; font-size: 0.875rem; transition: all 0.15s; }
        .service-area-links a:hover { background: #f5f7f2; border-color: #729827; color: #557222; }
```

- [ ] **Step 2: Add "Areas We Serve" section to `stormwater-design.html`**

Find `<footer class="site-footer">` and insert this section immediately before it:
```html
    <section class="py-5" id="areas-we-serve">
        <div class="container px-5">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <h2 class="fw-bolder text-gumboots mb-3 text-center">Stormwater Design Across Northland</h2>
                    <ul class="service-area-links">
                        <li><a href="stormwater-design-kerikeri.html">Stormwater Design in Kerikeri</a></li>
                        <li><a href="stormwater-design-whangarei.html">Stormwater Design in Whangarei</a></li>
                        <li><a href="stormwater-design-paihia.html">Stormwater Design in Paihia</a></li>
                        <li><a href="stormwater-design-bay-of-islands.html">Stormwater Design in Bay of Islands</a></li>
                        <li><a href="stormwater-design-dargaville.html">Stormwater Design in Dargaville</a></li>
                        <li><a href="stormwater-design-mangonui.html">Stormwater Design in Mangonui</a></li>
                        <li><a href="stormwater-design-coopers-beach.html">Stormwater Design in Coopers Beach</a></li>
                        <li><a href="stormwater-design-northland.html">Stormwater Design — Northland Overview</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 3: Repeat Steps 1–2 for the remaining 6 service hub pages**

Apply the same pattern (CSS in `<style>`, section before `<footer class="site-footer">`). Use the data table below for each file's heading and link list:

| File | Section heading | Links (filename → anchor text) |
|------|----------------|-------------------------------|
| `geotechnical-engineering.html` | Geotechnical Engineering Across Northland | geotechnical-engineering-kerikeri.html → "Geotechnical Engineering in Kerikeri"<br>geotechnical-engineering-whangarei.html → "Geotechnical Engineering in Whangarei"<br>geotechnical-engineering-paihia.html → "Geotechnical Engineering in Paihia"<br>geotechnical-engineering-bay-of-islands.html → "Geotechnical Engineering in Bay of Islands"<br>geotechnical-engineering-dargaville.html → "Geotechnical Engineering in Dargaville"<br>geotechnical-engineering-mangonui.html → "Geotechnical Engineering in Mangonui"<br>geotechnical-engineering-coopers-beach.html → "Geotechnical Engineering in Coopers Beach"<br>geotechnical-engineering-northland.html → "Geotechnical Engineering — Northland Overview" |
| `structural-engineering.html` | Structural Engineering Across Northland | structural-engineering-kerikeri.html → "Structural Engineering in Kerikeri"<br>structural-engineering-whangarei.html → "Structural Engineering in Whangarei"<br>structural-engineering-paihia.html → "Structural Engineering in Paihia"<br>structural-engineering-bay-of-islands.html → "Structural Engineering in Bay of Islands"<br>structural-engineering-dargaville.html → "Structural Engineering in Dargaville"<br>structural-engineering-mangonui.html → "Structural Engineering in Mangonui"<br>structural-engineering-coopers-beach.html → "Structural Engineering in Coopers Beach" |
| `wastewater-design.html` | TP58 Wastewater Design Across Northland | tp58-wastewater-kerikeri.html → "TP58 Wastewater Design in Kerikeri"<br>tp58-wastewater-whangarei.html → "TP58 Wastewater Design in Whangarei"<br>tp58-wastewater-paihia.html → "TP58 Wastewater Design in Paihia"<br>tp58-wastewater-bay-of-islands.html → "TP58 Wastewater Design in Bay of Islands"<br>tp58-wastewater-dargaville.html → "TP58 Wastewater Design in Dargaville"<br>tp58-wastewater-mangonui.html → "TP58 Wastewater Design in Mangonui"<br>tp58-wastewater-coopers-beach.html → "TP58 Wastewater Design in Coopers Beach"<br>tp58-wastewater-northland.html → "TP58 Wastewater Design — Northland Overview" |
| `civil-engineering.html` | Civil Engineering Across Northland | civil-engineering-kerikeri.html → "Civil Engineering in Kerikeri"<br>civil-engineering-whangarei.html → "Civil Engineering in Whangarei"<br>civil-engineering-paihia.html → "Civil Engineering in Paihia"<br>civil-engineering-bay-of-islands.html → "Civil Engineering in Bay of Islands"<br>civil-engineering-dargaville.html → "Civil Engineering in Dargaville"<br>civil-engineering-mangonui.html → "Civil Engineering in Mangonui"<br>civil-engineering-coopers-beach.html → "Civil Engineering in Coopers Beach" |
| `geotechnical-report.html` | Geotechnical Engineering by Location | geotechnical-engineering-kerikeri.html → "Geotechnical Engineering in Kerikeri"<br>geotechnical-engineering-whangarei.html → "Geotechnical Engineering in Whangarei"<br>geotechnical-engineering-paihia.html → "Geotechnical Engineering in Paihia"<br>geotechnical-engineering-bay-of-islands.html → "Geotechnical Engineering in Bay of Islands"<br>geotechnical-engineering-dargaville.html → "Geotechnical Engineering in Dargaville"<br>geotechnical-engineering-mangonui.html → "Geotechnical Engineering in Mangonui"<br>geotechnical-engineering-coopers-beach.html → "Geotechnical Engineering in Coopers Beach" |
| `soil-testing.html` | Soil Testing Across Northland | soil-testing-kerikeri.html → "Soil Testing in Kerikeri"<br>soil-testing-whangarei.html → "Soil Testing in Whangarei"<br>soil-testing-paihia.html → "Soil Testing in Paihia"<br>soil-testing-bay-of-islands.html → "Soil Testing in Bay of Islands"<br>soil-testing-dargaville.html → "Soil Testing in Dargaville"<br>soil-testing-mangonui.html → "Soil Testing in Mangonui"<br>soil-testing-coopers-beach.html → "Soil Testing in Coopers Beach" |

- [ ] **Step 4: Verify all 7 files**

```powershell
$base = "C:\Users\pjwri\Desktop\Website\Gumboots"
@("stormwater-design","geotechnical-engineering","structural-engineering","wastewater-design","civil-engineering","geotechnical-report","soil-testing") | ForEach-Object {
    $count = (Select-String -Path "$base\$_.html" -Pattern 'areas-we-serve').Count
    Write-Host "$_`: $count"
}
```
Expected: each shows 1.

- [ ] **Step 5: Commit**
```
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" add stormwater-design.html geotechnical-engineering.html structural-engineering.html wastewater-design.html civil-engineering.html geotechnical-report.html soil-testing.html
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" commit -m "seo: add location variant links to service hub pages"
```

---

### Task 2: Add "Our Services" sections to location hub pages

**Goal:** Each location hub page links to all its service+location combination pages so users (and Google) can navigate from the location overview to specific services.

**Files:**
- Modify: `kerikeri.html`
- Modify: `paihia.html`
- Modify: `whangarei.html`
- Modify: `bay-of-islands.html`
- Modify: `dargaville.html`
- Modify: `mangonui.html`
- Modify: `coopers-beach.html`

**Acceptance Criteria:**
- [ ] Each location hub page contains a section with id="local-services"
- [ ] All 6 service+location pages for that location are linked
- [ ] Anchor text follows pattern "[Service Name] in [Location]"
- [ ] CSS `.service-area-links` present in each page's `<style>` block

**Verify:**
```powershell
$base = "C:\Users\pjwri\Desktop\Website\Gumboots"
@("kerikeri","paihia","whangarei","bay-of-islands","dargaville","mangonui","coopers-beach") | ForEach-Object {
    $count = (Select-String -Path "$base\$_.html" -Pattern 'local-services').Count
    Write-Host "$_`: $count"
}
```
Expected: each shows 1.

**Steps:**

- [ ] **Step 1: Add CSS and section to `kerikeri.html`**

Add `.service-area-links` CSS to the `<style>` block (see CSS Snippet at top of plan), then insert before `<footer class="site-footer">`:

```html
    <section class="py-5" id="local-services">
        <div class="container px-5">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <h2 class="fw-bolder text-gumboots mb-3 text-center">Our Engineering Services in Kerikeri</h2>
                    <ul class="service-area-links">
                        <li><a href="geotechnical-engineering-kerikeri.html">Geotechnical Engineering in Kerikeri</a></li>
                        <li><a href="civil-engineering-kerikeri.html">Civil Engineering in Kerikeri</a></li>
                        <li><a href="structural-engineering-kerikeri.html">Structural Engineering in Kerikeri</a></li>
                        <li><a href="stormwater-design-kerikeri.html">Stormwater Design in Kerikeri</a></li>
                        <li><a href="tp58-wastewater-kerikeri.html">TP58 Wastewater Design in Kerikeri</a></li>
                        <li><a href="soil-testing-kerikeri.html">Soil Testing in Kerikeri</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Repeat for remaining 6 location hub pages**

| File | Section heading | Links |
|------|----------------|-------|
| `paihia.html` | Our Engineering Services in Paihia | geotechnical-engineering-paihia.html, civil-engineering-paihia.html, structural-engineering-paihia.html, stormwater-design-paihia.html, tp58-wastewater-paihia.html, soil-testing-paihia.html |
| `whangarei.html` | Our Engineering Services in Whangarei | geotechnical-engineering-whangarei.html, civil-engineering-whangarei.html, structural-engineering-whangarei.html, stormwater-design-whangarei.html, tp58-wastewater-whangarei.html, soil-testing-whangarei.html |
| `bay-of-islands.html` | Our Engineering Services in Bay of Islands | geotechnical-engineering-bay-of-islands.html, civil-engineering-bay-of-islands.html, structural-engineering-bay-of-islands.html, stormwater-design-bay-of-islands.html, tp58-wastewater-bay-of-islands.html, soil-testing-bay-of-islands.html |
| `dargaville.html` | Our Engineering Services in Dargaville | geotechnical-engineering-dargaville.html, civil-engineering-dargaville.html, structural-engineering-dargaville.html, stormwater-design-dargaville.html, tp58-wastewater-dargaville.html, soil-testing-dargaville.html |
| `mangonui.html` | Our Engineering Services in Mangonui | geotechnical-engineering-mangonui.html, civil-engineering-mangonui.html, structural-engineering-mangonui.html, stormwater-design-mangonui.html, tp58-wastewater-mangonui.html, soil-testing-mangonui.html |
| `coopers-beach.html` | Our Engineering Services in Coopers Beach | geotechnical-engineering-coopers-beach.html, civil-engineering-coopers-beach.html, structural-engineering-coopers-beach.html, stormwater-design-coopers-beach.html, tp58-wastewater-coopers-beach.html, soil-testing-coopers-beach.html |

For each file: anchor text is "[Service Label] in [Location]", matching the pattern from Step 1. Service labels: "Geotechnical Engineering", "Civil Engineering", "Structural Engineering", "Stormwater Design", "TP58 Wastewater Design", "Soil Testing".

- [ ] **Step 3: Commit**
```
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" add kerikeri.html paihia.html whangarei.html bay-of-islands.html dargaville.html mangonui.html coopers-beach.html
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" commit -m "seo: add service links to location hub pages"
```

---

### Task 3: CTR meta rewrites — Priority A (positions 5–15)

**Goal:** Rewrite `<title>`, `<meta name="description">`, `<meta name="title">`, `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="twitter:title">`, `<meta property="twitter:description">` on 5 pages currently ranking positions 5–15 to lift CTR from existing impressions.

**Files:**
- Modify: `erosion-control-northland.html`
- Modify: `wastewater-design.html`
- Modify: `civil-engineering-bay-of-islands.html`
- Modify: `soil-testing-kerikeri.html`
- Modify: `dargaville.html`

**Acceptance Criteria:**
- [ ] All 7 meta tag types updated for each file (title, meta name=title, meta name=description, og:title, og:description, twitter:title, twitter:description)
- [ ] `<title>` tag under 60 characters for each page
- [ ] `<meta name="description">` under 155 characters for each page
- [ ] No body content changed

**Verify:**
```powershell
$base = "C:\Users\pjwri\Desktop\Website\Gumboots"
@("erosion-control-northland","wastewater-design","civil-engineering-bay-of-islands","soil-testing-kerikeri","dargaville") | ForEach-Object {
    $title = (Select-String -Path "$base\$_.html" -Pattern '<title>(.*?)</title>').Matches[0].Groups[1].Value
    Write-Host "$_`: $($title.Length) chars — $title"
}
```
Expected: all titles under 60 characters.

**Steps:**

- [ ] **Step 1: Update `erosion-control-northland.html`**

Replace all 7 meta tag values with:
- `<title>`: `Erosion Control Northland — Bank & Slope Erosion | Gumboots`
- `<meta name="title">`: same as title
- `<meta name="description">`: `Slipping banks, eroding slopes or hillside damage? Licensed engineers across Whangarei, Kerikeri & Far North. Free consult. Call 020 4 GUMMYS.`
- `<meta property="og:title">`: same as title
- `<meta property="og:description">`: `Slipping banks, eroding slopes or hillside damage? Licensed Northland engineers. Free consult. Call 020 4 GUMMYS.`
- `<meta property="twitter:title">`: same as title
- `<meta property="twitter:description">`: same as og:description

- [ ] **Step 2: Update `wastewater-design.html`**

- `<title>`: `TP58 Wastewater Design Northland — Council-Ready | Gumboots`
- `<meta name="title">`: same as title
- `<meta name="description">`: `TP58-compliant wastewater reports accepted by FNDC & NRC. Fast turnaround for Northland properties. Call 020 4 GUMMYS for a free consult.`
- `<meta property="og:title">`: same as title
- `<meta property="og:description">`: `TP58 wastewater reports for Northland — FNDC & NRC accepted. Fast turnaround. Call 020 4 GUMMYS.`
- `<meta property="twitter:title">`: same as title
- `<meta property="twitter:description">`: same as og:description

- [ ] **Step 3: Update `civil-engineering-bay-of-islands.html`**

- `<title>`: `Civil Engineering Bay of Islands — Drainage & Consents`
- `<meta name="title">`: same as title
- `<meta name="description">`: `Civil engineering for Bay of Islands — subdivision, stormwater, drainage & resource consents. Local licensed engineers. Call 020 4 GUMMYS.`
- `<meta property="og:title">`: same as title
- `<meta property="og:description">`: `Civil engineering for Bay of Islands — subdivision, drainage & resource consents. Licensed engineers. Call 020 4 GUMMYS.`
- `<meta property="twitter:title">`: same as title
- `<meta property="twitter:description">`: same as og:description

- [ ] **Step 4: Update `soil-testing-kerikeri.html`**

- `<title>`: `Soil Testing Kerikeri — Reports for Building Consents`
- `<meta name="title">`: same as title
- `<meta name="description">`: `Soil testing and geotechnical assessments in Kerikeri. FNDC-accepted reports for building & land consents. Call 020 4 GUMMYS.`
- `<meta property="og:title">`: same as title
- `<meta property="og:description">`: `Soil testing in Kerikeri — FNDC-accepted reports for building & land consents. Call 020 4 GUMMYS.`
- `<meta property="twitter:title">`: same as title
- `<meta property="twitter:description">`: same as og:description

- [ ] **Step 5: Update `dargaville.html`**

- `<title>`: `Engineering Services Dargaville | Gumboots Consulting`
- `<meta name="title">`: same as title
- `<meta name="description">`: `Geotechnical, civil, structural & stormwater engineering in Dargaville. Licensed NZ engineers. Call 020 4 GUMMYS for a free consult.`
- `<meta property="og:title">`: same as title
- `<meta property="og:description">`: `Geotechnical, civil & structural engineering in Dargaville. Licensed NZ engineers. Call 020 4 GUMMYS.`
- `<meta property="twitter:title">`: same as title
- `<meta property="twitter:description">`: same as og:description

- [ ] **Step 6: Verify character counts**

```powershell
$base = "C:\Users\pjwri\Desktop\Website\Gumboots"
@("erosion-control-northland","wastewater-design","civil-engineering-bay-of-islands","soil-testing-kerikeri","dargaville") | ForEach-Object {
    $content = Get-Content "$base\$_.html" -Raw
    $title = [regex]::Match($content, '<title>(.*?)</title>').Groups[1].Value
    $desc = [regex]::Match($content, 'name="description"\s+content="(.*?)"').Groups[1].Value
    Write-Host "$_`:"
    Write-Host "  title ($($title.Length) chars): $title"
    Write-Host "  desc ($($desc.Length) chars): $desc"
}
```

- [ ] **Step 7: Commit**
```
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" add erosion-control-northland.html wastewater-design.html civil-engineering-bay-of-islands.html soil-testing-kerikeri.html dargaville.html
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" commit -m "seo: rewrite meta snippets for priority-A CTR pages"
```

---

### Task 4: CTR meta rewrites — Priority B (positions 15–25)

**Goal:** Rewrite meta snippets on 7 high-impression pages currently at positions 15–25 so they are ready to convert when Phase 1 internal linking pushes their rankings up.

**Files:**
- Modify: `engineering-consulting.html`
- Modify: `stormwater-design.html`
- Modify: `geotechnical-report.html`
- Modify: `civil-engineering-kerikeri.html`
- Modify: `geotechnical-engineering-paihia.html`
- Modify: `structural-engineering.html`
- Modify: `geotechnical-engineering-northland.html`

**Acceptance Criteria:**
- [ ] All 7 meta tag types updated for each file
- [ ] `<title>` under 60 characters for all pages
- [ ] `<meta name="description">` under 155 characters for all pages
- [ ] No body content changed

**Verify:**
```powershell
$base = "C:\Users\pjwri\Desktop\Website\Gumboots"
$pages = @("engineering-consulting","stormwater-design","geotechnical-report","civil-engineering-kerikeri","geotechnical-engineering-paihia","structural-engineering","geotechnical-engineering-northland")
foreach ($p in $pages) {
    $content = Get-Content "$base\$p.html" -Raw
    $title = [regex]::Match($content, '<title>(.*?)</title>').Groups[1].Value
    $desc = [regex]::Match($content, 'name="description"\s+content="(.*?)"').Groups[1].Value
    Write-Host "$p`: title=$($title.Length)c, desc=$($desc.Length)c"
}
```
Expected: all title lengths ≤60, all desc lengths ≤155.

**Steps:**

- [ ] **Step 1: Update `engineering-consulting.html`**
- `<title>`: `Engineering Consulting Northland | Geotech & Civil`
- `<meta name="title">`: same
- `<meta name="description">`: `Engineering consulting across Northland — geotechnical, civil, structural & environmental. Feasibility studies & council consents. Call 020 4 GUMMYS.`
- All og: and twitter: tags: same pattern as above (title → og:title and twitter:title; description → og:description and twitter:description)

- [ ] **Step 2: Update `stormwater-design.html`**
- `<title>`: `Stormwater Design Northland — FNDC & NRC Compliant`
- `<meta name="description">`: `Stormwater design and management plans for Northland. Council-compliant for FNDC, NRC & Auckland Council. Call 020 4 GUMMYS.`

- [ ] **Step 3: Update `geotechnical-report.html`**
- `<title>`: `Geotechnical Reports Northland — Fast, Council-Ready`
- `<meta name="description">`: `Geotechnical reports for Northland building consents. Licensed engineers, FNDC & NRC accepted. Fast turnaround. Call 020 4 GUMMYS.`

- [ ] **Step 4: Update `civil-engineering-kerikeri.html`**
- `<title>`: `Civil Engineering Kerikeri — Site Works & Consents`
- `<meta name="description">`: `Civil engineering in Kerikeri — subdivisions, stormwater, drainage & resource consents. Local licensed engineers. Call 020 4 GUMMYS.`

- [ ] **Step 5: Update `geotechnical-engineering-paihia.html`**
- `<title>`: `Geotechnical Engineering Paihia — Site Assessments`
- `<meta name="description">`: `Geotechnical engineering for Paihia & Bay of Islands. Soil testing, site assessments & foundation design. Call 020 4 GUMMYS.`

- [ ] **Step 6: Update `structural-engineering.html`**
- `<title>`: `Structural Engineering Northland — Walls & Buildings`
- `<meta name="description">`: `Structural engineering across Northland. Retaining wall design, foundation assessments & building consents. Licensed engineers. Call 020 4 GUMMYS.`

- [ ] **Step 7: Update `geotechnical-engineering-northland.html`**
- `<title>`: `Geotechnical Engineering Northland — Licensed Engineers`
- `<meta name="description">`: `Geotechnical engineering throughout Northland. Site assessments, soil testing & reports accepted by FNDC & NRC. Call 020 4 GUMMYS.`

For all pages in Steps 2–7: set `<meta name="title">` = same as `<title>`, `<meta property="og:title">` = same as `<title>`, `<meta property="og:description">` = slightly shortened version of description (remove trailing sentence if needed to fit), `<meta property="twitter:title">` = same as `<title>`, `<meta property="twitter:description">` = same as og:description.

- [ ] **Step 8: Commit**
```
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" add engineering-consulting.html stormwater-design.html geotechnical-report.html civil-engineering-kerikeri.html geotechnical-engineering-paihia.html structural-engineering.html geotechnical-engineering-northland.html
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" commit -m "seo: rewrite meta snippets for priority-B CTR pages"
```

---

### Task 5: Update sitemap.xml with current lastmod dates

**Goal:** Update `<lastmod>` dates in `sitemap.xml` for all 21 pages modified in Tasks 1–4 so Google re-crawls them promptly.

**Files:**
- Modify: `sitemap.xml`

**Acceptance Criteria:**
- [ ] All 21 modified pages appear in sitemap.xml
- [ ] Their `<lastmod>` value is `2026-05-22`
- [ ] No pages removed from the sitemap

**Verify:**
```powershell
$count = (Select-String -Path "C:\Users\pjwri\Desktop\Website\Gumboots\sitemap.xml" -Pattern '2026-05-22').Count
Write-Host "Pages with updated lastmod: $count"
```
Expected: 21 or more.

**Steps:**

- [ ] **Step 1: Read current sitemap**

Open `sitemap.xml` and confirm all 21 modified pages are present. The pages are:
`stormwater-design.html`, `geotechnical-engineering.html`, `structural-engineering.html`, `wastewater-design.html`, `civil-engineering.html`, `geotechnical-report.html`, `soil-testing.html`, `kerikeri.html`, `paihia.html`, `whangarei.html`, `bay-of-islands.html`, `dargaville.html`, `mangonui.html`, `coopers-beach.html`, `erosion-control-northland.html`, `civil-engineering-bay-of-islands.html`, `soil-testing-kerikeri.html`, `engineering-consulting.html`, `civil-engineering-kerikeri.html`, `geotechnical-engineering-paihia.html`, `geotechnical-engineering-northland.html`

- [ ] **Step 2: Update lastmod for all 21 pages**

For each `<url>` block whose `<loc>` matches one of the 21 pages above, set its `<lastmod>` to `2026-05-22`. If a page is missing from the sitemap entirely, add a `<url>` block:
```xml
<url>
    <loc>https://www.gumbootsconsulting.co.nz/PAGE.html</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

- [ ] **Step 3: Commit**
```
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" add sitemap.xml
git -C "C:\Users\pjwri\Desktop\Website\Gumboots" commit -m "seo: update sitemap lastmod for all modified pages"
```

---

## After Deploying

Once changes are live, submit the updated sitemap in Google Search Console:
**Search Console → Sitemaps → https://www.gumbootsconsulting.co.nz/sitemap.xml → Resubmit**

Monitor GSC impressions and clicks weekly. Expect:
- Service+location combo pages appearing in impressions within 2–4 weeks
- CTR uplift on erosion control and wastewater pages within 4–6 weeks
- Overall click volume toward 150+ within 90 days
