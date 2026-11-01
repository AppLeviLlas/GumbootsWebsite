# Gumboots SEO — Far North Cleanup + Coromandel Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:subagent-driven-development (recommended) or superpowers-extended-cc:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix existing Far North SEO technical issues and CTR problems, add missing planning/consent content, improve thin pages, then build 48 new Coromandel Peninsula pages to establish Gumboots Engineers' presence in their new Whangamata service area.

**Architecture:** Phase 1 cleans up existing Far North pages (technical, CTR rewrites, new content, thin page improvements). Phase 2 builds Coromandel using the same static HTML template patterns. All pages copy the Bootstrap+Inter CSS in `css/styles.css` with inline `<style>` blocks following the pattern established in `kerikeri.html` (town hubs) and `geotechnical-engineering-kerikeri.html` (service×location pages).

**Tech Stack:** Static HTML, Bootstrap 5, Font Awesome 6, Google Fonts (Inter), LocalBusiness + FAQPage JSON-LD schema, Apache .htaccess redirects

**Key templates to reference:**
- Town hub: `kerikeri.html`
- Service×location: `geotechnical-engineering-kerikeri.html`
- Regional service hub: `geotechnical-engineering-northland.html`

**Coordinates reference:**
- Kerikeri (Far North): `-35.2280;173.9480`
- Whangamata: `-37.2000;175.8667`
- Thames: `-37.1333;175.5333`
- Tairua: `-37.0000;175.8500`
- Hahei: `-36.8667;175.8000`
- Hot Water Beach: `-36.9000;175.8333`
- Waihi Beach: `-37.3667;175.9333`
- Coromandel Town: `-36.7667;175.5000`

---

### Task 1: Technical Fixes — 301 Redirects + Sitemap Cleanup

**Goal:** Add 3 remaining 301 redirects to `.htaccess` and remove the redirected duplicate from `sitemap.xml`.

**Files:**
- Modify: `.htaccess`
- Modify: `sitemap.xml`

**Acceptance Criteria:**
- [ ] `.htaccess` contains 301 redirects for all 4 consolidation pairs (geotechnical-kerikeri already done; 3 new ones added)
- [ ] `sitemap.xml` no longer contains the `geotechnical-kerikeri.html` entry
- [ ] `sitemap.xml` `<lastmod>` for homepage updated to `2026-06-17`

**Verify:** `grep "Redirect 301" .htaccess` → shows 4 Redirect 301 lines; `grep "geotechnical-kerikeri.html" sitemap.xml` → no matches

**Steps:**

- [ ] **Step 1: Add 3 new 301 redirects to `.htaccess`**

Open `.htaccess`. After the existing `Redirect 301 /geotechnical-kerikeri.html` line, add:

```apache
# Redirect thin Coopers Beach geotech page — only 2 impressions, pos 77.5
Redirect 301 /geotechnical-engineering-coopers-beach.html https://www.gumbootsconsulting.co.nz/coopers-beach.html

# Redirect thin Paihia soil testing page — pos 44.5, 10 impressions
Redirect 301 /soil-testing-paihia.html https://www.gumbootsconsulting.co.nz/paihia.html

# Redirect thin Coopers Beach soil testing page — pos 16.5, 2 impressions
Redirect 301 /soil-testing-coopers-beach.html https://www.gumbootsconsulting.co.nz/coopers-beach.html
```

- [ ] **Step 2: Remove redirected duplicate from sitemap.xml**

In `sitemap.xml`, delete the entire `<url>` block for `geotechnical-kerikeri.html` (lines containing `/geotechnical-kerikeri.html`). Also remove the entry for `soil-testing-paihia.html` and `soil-testing-coopers-beach.html` and `geotechnical-engineering-coopers-beach.html` since these are now redirected.

- [ ] **Step 3: Update sitemap homepage lastmod**

Change the homepage `<lastmod>` to `2026-06-17`.

- [ ] **Step 4: Verify**

Run: `grep "Redirect 301" .htaccess`
Expected: 4 lines (index.html, geotechnical-kerikeri, geotechnical-engineering-coopers-beach, soil-testing-paihia, soil-testing-coopers-beach)

Run: `grep "geotechnical-kerikeri.html" sitemap.xml`
Expected: no output

```json:metadata
{"files": [".htaccess", "sitemap.xml"], "verifyCommand": "grep \"Redirect 301\" .htaccess", "acceptanceCriteria": ["4 Redirect 301 rules in .htaccess", "geotechnical-kerikeri.html removed from sitemap.xml", "3 redirected pages removed from sitemap"]}
```

---

### Task 2: CTR Rewrites P1 — Top 2 Priority Pages

**Goal:** Rewrite title tags and meta descriptions on the two highest-priority pages to fix broken CTR (strong positions, almost no clicks).

**Files:**
- Modify: `erosion-control-northland.html`
- Modify: `civil-engineering-bay-of-islands.html`

**Acceptance Criteria:**
- [ ] `erosion-control-northland.html` title starts with "Erosion Control Northland" and is under 65 characters
- [ ] `civil-engineering-bay-of-islands.html` title starts with "Civil Engineer Bay of Islands" and is under 65 characters
- [ ] Both meta descriptions under 160 characters, include "020 4 GUMMYS"
- [ ] No content body changes — title/meta only

**Verify:** `grep "<title>" erosion-control-northland.html civil-engineering-bay-of-islands.html`

**Steps:**

- [ ] **Step 1: Update `erosion-control-northland.html`**

Replace existing `<title>` tag with:
```html
<title>Erosion Control Northland | Erosion Engineer Far North | Gumboots</title>
```

Replace existing `<meta name="title"` with:
```html
<meta name="title" content="Erosion Control Northland | Erosion Engineer Far North | Gumboots" />
```

Replace existing `<meta name="description"` with:
```html
<meta name="description" content="Erosion control engineers in Northland — earthworks erosion management, revegetation & sediment control across the Far North. Call 020 4 GUMMYS." />
```

Update OG/Twitter title tags to match:
```html
<meta property="og:title" content="Erosion Control Northland | Erosion Engineer Far North | Gumboots" />
<meta property="twitter:title" content="Erosion Control Northland | Erosion Engineer Far North | Gumboots" />
```

- [ ] **Step 2: Update `civil-engineering-bay-of-islands.html`**

Replace existing `<title>` tag with:
```html
<title>Civil Engineer Bay of Islands | Civil Engineering BOI | Gumboots</title>
```

Replace existing `<meta name="title"`:
```html
<meta name="title" content="Civil Engineer Bay of Islands | Civil Engineering BOI | Gumboots" />
```

Replace existing `<meta name="description"`:
```html
<meta name="description" content="Civil engineer Bay of Islands — site grading, drainage, stormwater & land development for Paihia, Kerikeri & Russell. Call 020 4 GUMMYS." />
```

Update OG/Twitter title tags to match.

- [ ] **Step 3: Verify changes**

Run: `grep "<title>" erosion-control-northland.html civil-engineering-bay-of-islands.html`
Expected output:
```
erosion-control-northland.html:    <title>Erosion Control Northland | Erosion Engineer Far North | Gumboots</title>
civil-engineering-bay-of-islands.html:    <title>Civil Engineer Bay of Islands | Civil Engineering BOI | Gumboots</title>
```

```json:metadata
{"files": ["erosion-control-northland.html", "civil-engineering-bay-of-islands.html"], "verifyCommand": "grep \"<title>\" erosion-control-northland.html civil-engineering-bay-of-islands.html", "acceptanceCriteria": ["erosion-control-northland title starts with 'Erosion Control Northland'", "civil-engineering-bay-of-islands title starts with 'Civil Engineer Bay of Islands'", "both meta descriptions under 160 chars with phone number"]}
```

---

### Task 3: CTR Rewrites P2/P3 — 7 Remaining Pages

**Goal:** Rewrite title tags and meta descriptions on 7 more pages with strong positions but low CTR. Title/meta only — no content changes.

**Files:**
- Modify: `tp58-wastewater-whangarei.html`
- Modify: `stormwater-design-dargaville.html`
- Modify: `stormwater-design-mangonui.html`
- Modify: `civil-engineering-coopers-beach.html`
- Modify: `mangonui.html`
- Modify: `coopers-beach.html`
- Modify: `tp58-wastewater-northland.html`

**Acceptance Criteria:**
- [ ] All 7 pages have updated titles matching the table below
- [ ] All meta descriptions under 160 characters and include "020 4 GUMMYS"
- [ ] OG/Twitter title tags updated to match on each page

**Verify:** `grep "<title>" tp58-wastewater-whangarei.html stormwater-design-dargaville.html stormwater-design-mangonui.html civil-engineering-coopers-beach.html mangonui.html coopers-beach.html tp58-wastewater-northland.html`

**Steps:**

- [ ] **Step 1: Apply title/meta updates per this table**

| File | New `<title>` | New `<meta name="description">` |
|------|--------------|--------------------------------|
| `tp58-wastewater-whangarei.html` | `TP58 Whangarei \| Wastewater Design Whangarei \| Gumboots` | `TP58 wastewater designer in Whangarei — onsite wastewater systems, soakage testing & WDC consent reports. Call 020 4 GUMMYS.` |
| `stormwater-design-dargaville.html` | `Stormwater Design Dargaville \| Stormwater Engineer \| Gumboots` | `Stormwater design Dargaville — stormwater management plans, detention & drainage solutions for KDC consents. Call 020 4 GUMMYS.` |
| `stormwater-design-mangonui.html` | `Stormwater Design Mangonui \| Stormwater Engineer Mangonui \| Gumboots` | `Stormwater design Mangonui — stormwater management plans and drainage solutions for FNDC consents. Call 020 4 GUMMYS.` |
| `civil-engineering-coopers-beach.html` | `Civil Engineer Coopers Beach \| Civil Engineering \| Gumboots` | `Civil engineer Coopers Beach — drainage, site grading & land development for Coopers Beach & Mangonui. Call 020 4 GUMMYS.` |
| `mangonui.html` | `Engineering Services Mangonui \| Geotechnical, Civil & TP58 \| Gumboots` | `Gumboots engineers in Mangonui — geotechnical, civil, structural & TP58 wastewater for Mangonui & Coopers Beach. 020 4 GUMMYS.` |
| `coopers-beach.html` | `Engineering Services Coopers Beach \| Geotechnical & Civil \| Gumboots` | `Gumboots engineers in Coopers Beach — geotechnical, civil, structural & TP58 wastewater for Coopers Beach & Mangonui. 020 4 GUMMYS.` |
| `tp58-wastewater-northland.html` | `TP58 Northland \| Wastewater Design Northland \| Gumboots` | `TP58 wastewater design across Northland — onsite systems, soakage testing & council consent reports. Call 020 4 GUMMYS.` |

For each file: find and replace `<title>...</title>`, `<meta name="title" content="...">`, `<meta name="description" content="...">`, `<meta property="og:title" content="...">`, and `<meta property="twitter:title" content="...">`.

- [ ] **Step 2: Verify**

Run: `grep "<title>" tp58-wastewater-whangarei.html stormwater-design-dargaville.html stormwater-design-mangonui.html civil-engineering-coopers-beach.html mangonui.html coopers-beach.html tp58-wastewater-northland.html`

Each line should match the table above.

```json:metadata
{"files": ["tp58-wastewater-whangarei.html", "stormwater-design-dargaville.html", "stormwater-design-mangonui.html", "civil-engineering-coopers-beach.html", "mangonui.html", "coopers-beach.html", "tp58-wastewater-northland.html"], "verifyCommand": "grep \"<title>\" tp58-wastewater-whangarei.html stormwater-design-dargaville.html mangonui.html coopers-beach.html", "acceptanceCriteria": ["all 7 title tags updated", "all meta descriptions under 160 chars", "all OG/Twitter title tags updated to match"]}
```

---

### Task 4: New Page — subdivision-consultant-northland.html

**Goal:** Create a new 800+ word page targeting the untapped subdivision/planning query cluster (~2,000 monthly impressions, 0 clicks currently going to no page).

**Files:**
- Create: `subdivision-consultant-northland.html`
- Modify: `sitemap.xml` (add new entry)
- Modify: `subdivision-engineering-northland.html` (add internal link to new page)

**Acceptance Criteria:**
- [ ] File created with correct title, meta, geo tags, canonical
- [ ] H1 = `Subdivision Consultant Northland — Far North District`
- [ ] 800+ words of unique content covering RMA subdivision, FNDC requirements, lot creation, survey coordination, consent timeline
- [ ] FAQPage schema markup with 4 questions
- [ ] LocalBusiness schema markup
- [ ] Internal links to: `geotechnical-engineering-northland.html`, `engineering-consulting.html`, `kerikeri.html`, `paihia.html`, `coopers-beach.html`, `mangonui.html`
- [ ] Added to `sitemap.xml`

**Verify:** `grep "<title>" subdivision-consultant-northland.html && grep "FAQPage" subdivision-consultant-northland.html`

**Steps:**

- [ ] **Step 1: Create `subdivision-consultant-northland.html`**

Copy `kerikeri.html` as the starting template. Make the following changes:

**Head section replacements:**
```html
<title>Subdivision Consultant Northland | Subdivision Planning Far North | Gumboots</title>
<meta name="title" content="Subdivision Consultant Northland | Subdivision Planning Far North | Gumboots" />
<meta name="description" content="Subdivision consultant Northland — RMA subdivision planning, FNDC consent, lot creation & survey coordination for Far North land development. Call 020 4 GUMMYS." />
<meta name="keywords" content="subdivision consultant northland, subdivision consultant kerikeri, subdivision consultant paihia, land development consultant northland, subdivision planning northland, FNDC subdivision" />
<meta name="geo.region" content="NZ-NTL" />
<meta name="geo.placename" content="Northland, New Zealand" />
<meta name="geo.position" content="-35.7251;174.3237" />
<meta name="ICBM" content="-35.7251, 174.3237" />
<meta property="og:url" content="https://www.gumbootsconsulting.co.nz/subdivision-consultant-northland.html" />
<meta property="og:title" content="Subdivision Consultant Northland | Gumboots Engineers" />
<meta property="og:description" content="Subdivision consultant Northland — RMA subdivision planning, FNDC consent & lot creation for Far North land development. Call 020 4 GUMMYS." />
<meta property="twitter:url" content="https://www.gumbootsconsulting.co.nz/subdivision-consultant-northland.html" />
<meta property="twitter:title" content="Subdivision Consultant Northland | Gumboots Engineers" />
<link rel="canonical" href="https://www.gumbootsconsulting.co.nz/subdivision-consultant-northland.html" />
```

**Hero section:**
```html
<div class="location-badge"><i class="fas fa-map-marker-alt me-2"></i>Northland</div>
<h1 class="display-4 fw-bold text-white mb-4">Subdivision Consultant Northland — Far North District</h1>
<p class="lead text-white mb-5">Gumboots Consulting Engineers provides subdivision consulting services across Northland — from concept feasibility through to title issue. RMA process expertise, FNDC consent management, and engineering design under one roof.</p>
```

**Main content body** (replace the kerikeri service cards section with this content):

```html
<section class="py-5 bg-light" id="about">
    <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-10">
                <h2 class="fw-bolder text-gumboots mb-4 text-center logo-border">Subdivision Consulting Across Northland</h2>
                <p class="lead mb-4">Subdividing land in Northland involves navigating the Resource Management Act, Far North District Council (FNDC) or Kaipara District Council (KDC) requirements, and coordinating between engineers, surveyors, and planners. Gumboots Consulting Engineers handles the full engineering and planning side — from initial feasibility through to engineering plan approval.</p>
                <p class="mb-4">Our subdivision consultants are based in Kerikeri, giving us deep familiarity with FNDC processing requirements, typical consent conditions in the Far North District Plan, and the terrain and servicing challenges specific to Northland lots. Whether you're creating two lots from an existing rural title or undertaking a larger residential subdivision, we can assess feasibility, design the engineering solutions, and prepare the reports required for consent.</p>
                <p class="mb-4">We work alongside surveyors to ensure that subdivision designs are engineerable before the survey plan is lodged, and we continue through to construction monitoring and engineering sign-off for the 224(c) certificate. One engineering firm covering geotech, civil, stormwater, and wastewater design means fewer coordination gaps and a faster consent pathway.</p>
                <div class="cta-box text-center">
                    <h3 class="mb-3">Northland Subdivision Enquiry?</h3>
                    <p class="mb-4">Call Gumboots — your local subdivision engineering consultants for the Far North.</p>
                    <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                        <a href="tel:0204486697" class="btn btn-light btn-lg px-5"><i class="fas fa-phone me-2"></i> Call Now</a>
                        <a href="#contact" class="btn btn-outline-light btn-lg px-5"><i class="fas fa-envelope me-2"></i> Email Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5" id="services">
    <div class="container px-5 my-5">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
                <h2 class="fw-bolder text-gumboots mb-4 logo-border">What We Do in a Northland Subdivision</h2>
            </div>
        </div>
        <div class="row gx-4 row-cols-1 row-cols-md-2">
            <div class="col mb-4">
                <div class="card h-100">
                    <div class="card-body p-4">
                        <div class="service-icon"><i class="fas fa-search-location"></i></div>
                        <h3 class="h5 fw-bolder text-gumboots-light mb-2">Subdivision Feasibility</h3>
                        <p class="mb-0">Before committing to survey costs, we assess whether your land can practically be subdivided — checking minimum lot sizes under the FNDC District Plan, required setbacks, infrastructure servicing options (water, wastewater, stormwater, access), and any geotechnical constraints.</p>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                    <div class="card-body p-4">
                        <div class="service-icon"><i class="fas fa-file-alt"></i></div>
                        <h3 class="h5 fw-bolder text-gumboots-light mb-2">Resource Consent Engineering</h3>
                        <p class="mb-0">We prepare the engineering assessment of environmental effects (AEE) and all supporting reports for subdivision resource consent — geotechnical assessment, stormwater management plan, wastewater design, and infrastructure design. Coordinated to match FNDC's processing requirements.</p>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                    <div class="card-body p-4">
                        <div class="service-icon"><i class="fas fa-hard-hat"></i></div>
                        <h3 class="h5 fw-bolder text-gumboots-light mb-2">Engineering Plan Approval</h3>
                        <p class="mb-0">Once resource consent is granted, subdivision works must be approved via engineering plan approval with FNDC. We design the roading, drainage, water reticulation, and earthworks plans, then manage the approval process through to construction.</p>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                    <div class="card-body p-4">
                        <div class="service-icon"><i class="fas fa-certificate"></i></div>
                        <h3 class="h5 fw-bolder text-gumboots-light mb-2">224(c) Certificate Engineering</h3>
                        <p class="mb-0">The 224(c) certificate is the final FNDC sign-off that allows titles to issue. We carry out the construction monitoring, compile as-built information, and provide the engineer's memorandum confirming subdivision conditions have been met. We coordinate directly with the surveyor to ensure a smooth title issue.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 bg-light" id="process">
    <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-10">
                <h2 class="fw-bolder text-gumboots mb-4 text-center logo-border">The FNDC Subdivision Process</h2>
                <p class="mb-4">A typical rural or residential subdivision in the Far North follows these stages. Gumboots can be involved from Stage 1 through to Stage 5:</p>
                <ol class="mb-4">
                    <li class="mb-3"><strong>Feasibility &amp; concept design</strong> — Assess District Plan rules, lot layout, servicing options. Identify any geotechnical, stormwater, or wastewater constraints before money is spent on survey.</li>
                    <li class="mb-3"><strong>Pre-application meeting with FNDC</strong> — For complex subdivisions, a pre-application meeting clarifies consent requirements and reduces RFI rounds. We can attend and provide engineering input.</li>
                    <li class="mb-3"><strong>Resource consent application</strong> — We prepare the engineering reports (geotechnical, stormwater, wastewater, access), and coordinate with the planner preparing the AEE and the surveyor preparing the scheme plan.</li>
                    <li class="mb-3"><strong>Engineering plan approval</strong> — Detailed design of all infrastructure (roading, drainage, retaining, services). FNDC approval required before earthworks begin.</li>
                    <li class="mb-3"><strong>Construction monitoring &amp; 224(c)</strong> — On-site monitoring during earthworks and infrastructure construction. Final engineering sign-off for title issue.</li>
                </ol>
                <p class="mb-4">Consent timeframes vary. A straightforward two-lot rural subdivision may take 4–6 months. A larger residential subdivision with new roading could take 18–24 months from consent to title. We'll give you a realistic timeline at feasibility stage.</p>
                <h3 class="h5 fw-bolder text-gumboots mb-3">Our Subdivision Locations in Northland</h3>
                <ul class="service-area-links">
                    <li><a href="kerikeri.html">Kerikeri Subdivision</a></li>
                    <li><a href="paihia.html">Paihia &amp; Bay of Islands Subdivision</a></li>
                    <li><a href="mangonui.html">Mangonui Subdivision</a></li>
                    <li><a href="coopers-beach.html">Coopers Beach Subdivision</a></li>
                    <li><a href="dargaville.html">Dargaville Subdivision</a></li>
                    <li><a href="engineering-consulting.html">All Engineering Services</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

**FAQ section** (replace the kerikeri FAQ section):
```html
<section class="py-5" id="faq">
    <div class="container px-5 my-5">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
                <h2 class="fw-bolder text-gumboots mb-5 logo-border">Subdivision FAQ — Northland</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="faq-item mb-4">
                    <h3 class="h5 fw-bolder text-gumboots-light">Do I need resource consent to subdivide in the Far North?</h3>
                    <p>Yes — all land subdivision in New Zealand requires resource consent under the Resource Management Act 1991. In the Far North, this is processed by FNDC for most areas. If your land is near a waterway or the coast, you may also need Northland Regional Council consent for earthworks and stormwater discharge.</p>
                </div>
                <div class="faq-item mb-4">
                    <h3 class="h5 fw-bolder text-gumboots-light">What is the minimum lot size for subdivision in FNDC?</h3>
                    <p>It depends on your zone. Rural zones typically require a minimum lot area of 4 hectares for standard rural subdivision, though rural lifestyle zones may allow smaller lots (typically 1–2 ha). Residential zones in serviced areas can go down to 350–450 sqm. Check the FNDC District Plan for your specific zone and overlay rules — we can do this as part of a feasibility assessment.</p>
                </div>
                <div class="faq-item mb-4">
                    <h3 class="h5 fw-bolder text-gumboots-light">How long does FNDC subdivision consent take?</h3>
                    <p>A non-notified subdivision consent typically takes 20 working days once a complete application is lodged. However, applications are frequently put on hold for requests for further information (RFIs). A well-prepared application with complete engineering reports minimises RFI rounds. Notified applications (where public notification is required) take significantly longer — typically 3–6+ months.</p>
                </div>
                <div class="faq-item mb-4">
                    <h3 class="h5 fw-bolder text-gumboots-light">What engineering reports are required for FNDC subdivision consent?</h3>
                    <p>For most subdivisions you'll need: a geotechnical site assessment (confirming lot buildability), a stormwater management plan, wastewater design (TP58 report for each new lot if not connecting to reticulated sewer), and an access design. Larger subdivisions with new roading or significant earthworks will need additional reports. Gumboots can prepare all of these under one engagement.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Schema markup** (add before closing `</body>` tag):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gumboots Consulting Engineers",
  "description": "Subdivision consultant Northland — RMA subdivision planning, FNDC consent, lot creation and survey coordination for Far North land development.",
  "url": "https://www.gumbootsconsulting.co.nz/subdivision-consultant-northland.html",
  "telephone": "020 4 486 697",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kerikeri",
    "addressRegion": "Northland",
    "addressCountry": "NZ"
  },
  "areaServed": "Northland, New Zealand",
  "serviceType": "Subdivision Consulting"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need resource consent to subdivide in the Far North?",
      "acceptedAnswer": {"@type": "Answer", "text": "Yes — all land subdivision in New Zealand requires resource consent under the Resource Management Act 1991. In the Far North, this is processed by FNDC for most areas. If your land is near a waterway or the coast, you may also need Northland Regional Council consent for earthworks and stormwater discharge."}
    },
    {
      "@type": "Question",
      "name": "What is the minimum lot size for subdivision in FNDC?",
      "acceptedAnswer": {"@type": "Answer", "text": "It depends on your zone. Rural zones typically require a minimum lot area of 4 hectares for standard rural subdivision, though rural lifestyle zones may allow smaller lots (typically 1–2 ha). Residential zones in serviced areas can go down to 350–450 sqm."}
    },
    {
      "@type": "Question",
      "name": "How long does FNDC subdivision consent take?",
      "acceptedAnswer": {"@type": "Answer", "text": "A non-notified subdivision consent typically takes 20 working days once a complete application is lodged. However, applications are frequently put on hold for requests for further information (RFIs). A well-prepared application with complete engineering reports minimises RFI rounds."}
    },
    {
      "@type": "Question",
      "name": "What engineering reports are required for FNDC subdivision consent?",
      "acceptedAnswer": {"@type": "Answer", "text": "For most subdivisions you'll need: a geotechnical site assessment, a stormwater management plan, wastewater design (TP58 report for each new lot), and an access design. Gumboots can prepare all of these under one engagement."}
    }
  ]
}
</script>
```

- [ ] **Step 2: Add to sitemap.xml**

Add before the closing `</urlset>` tag:
```xml
<!-- Planning & Consent Pages -->
<url>
    <loc>https://www.gumbootsconsulting.co.nz/subdivision-consultant-northland.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
</url>
```

- [ ] **Step 3: Add internal link from `subdivision-engineering-northland.html`**

In `subdivision-engineering-northland.html`, find the last paragraph before the FAQ or CTA section and add:
```html
<p>For full subdivision planning and resource consent support, see our <a href="subdivision-consultant-northland.html">subdivision consultant Northland</a> page.</p>
```

- [ ] **Step 4: Verify**

Run: `grep "<title>" subdivision-consultant-northland.html && grep "FAQPage" subdivision-consultant-northland.html`
Expected: title line + "FAQPage" appearing in the schema script.

```json:metadata
{"files": ["subdivision-consultant-northland.html", "sitemap.xml", "subdivision-engineering-northland.html"], "verifyCommand": "grep \"<title>\" subdivision-consultant-northland.html && grep \"FAQPage\" subdivision-consultant-northland.html", "acceptanceCriteria": ["file created with correct title", "FAQPage schema present", "added to sitemap.xml", "internal link added from subdivision-engineering-northland.html"]}
```

---

### Task 5: New Pages — planning-consultant-kerikeri.html + planning-consultant-paihia.html

**Goal:** Create two new planning consultant pages targeting local consent queries with 0 clicks despite hundreds of impressions.

**Files:**
- Create: `planning-consultant-kerikeri.html`
- Create: `planning-consultant-paihia.html`
- Modify: `sitemap.xml`
- Modify: `kerikeri.html` (add internal link)
- Modify: `paihia.html` (add internal link)

**Acceptance Criteria:**
- [ ] Both files created with correct titles, metas, geo tags, canonicals
- [ ] Both H1s match spec
- [ ] Both pages 800+ words, local content (FNDC, coastal for Paihia)
- [ ] Both have FAQPage schema + LocalBusiness schema
- [ ] Both link to `subdivision-consultant-northland.html`
- [ ] Both added to sitemap.xml

**Verify:** `grep "<title>" planning-consultant-kerikeri.html planning-consultant-paihia.html`

**Steps:**

- [ ] **Step 1: Create `planning-consultant-kerikeri.html`**

Base on `geotechnical-engineering-kerikeri.html` template. Key values:

```html
<title>Planning Consultant Kerikeri | Resource Consent Kerikeri | Gumboots</title>
<meta name="description" content="Planning consultant Kerikeri — resource consent, development feasibility & FNDC consent support for Kerikeri & Waipapa. Call 020 4 GUMMYS." />
<meta name="geo.region" content="NZ-NTL" />
<meta name="geo.placename" content="Kerikeri, Far North District" />
<meta name="geo.position" content="-35.2280;173.9480" />
<meta name="ICBM" content="-35.2280, 173.9480" />
<link rel="canonical" href="https://www.gumbootsconsulting.co.nz/planning-consultant-kerikeri.html" />
```

H1: `Planning Consultant Kerikeri — Resource Consent & Development`

Intro paragraph: `Planning consultant Kerikeri — Gumboots Consulting Engineers provides resource consent support, development feasibility assessments, and engineering input for Kerikeri and Waipapa projects. We work alongside planners and surveyors to ensure engineering requirements are met at every stage of the consent process.`

Content sections to include:
1. **What a planning consultant does at Gumboots** — Explain that Gumboots provides the engineering side of planning (geotech, stormwater, wastewater, civil design) which is required by FNDC for most resource consents. 200 words.
2. **FNDC consent process** — Outline: pre-application, application lodgement, processing (20 working days non-notified), conditions, sign-off. Mention FNDC's online portal. 150 words.
3. **Development types we support** — New dwelling on vacant lot, multi-lot subdivision, commercial development, retaining walls requiring consent, earthworks over threshold. 150 words.
4. **Why get engineering input early** — Saves RFI rounds, avoids redesign costs, speeds consent. 100 words.
5. **Service area links** — Links to kerikeri.html, subdivision-consultant-northland.html, engineering-consulting.html.

FAQ (4 questions):
- "Do I need resource consent for a new house in Kerikeri?" — Answer: Usually not for a complying single dwelling, but if on sloped land, near a waterway, or requiring earthworks over 250 sqm, engineering reports may be required as conditions.
- "What does FNDC require for a building consent on a steep Kerikeri section?" — Answer: Geotechnical assessment confirming ground suitability, possible retaining wall design, stormwater management plan.
- "How much does resource consent engineering cost in Kerikeri?" — Answer: Varies by project scope. A standard geotech report starts from $1,500–$3,000. TP58 wastewater reports from $2,000. Full subdivision engineering from $8,000+. Contact us for a free scope discussion.
- "Can you attend pre-application meetings with FNDC?" — Answer: Yes — we regularly attend pre-app meetings with clients and FNDC processing officers to clarify engineering requirements before a formal application is lodged.

Schema: same LocalBusiness + FAQPage pattern as Task 4 but with Kerikeri address details and Kerikeri description.

- [ ] **Step 2: Create `planning-consultant-paihia.html`**

Same structure as Kerikeri page but Paihia/Bay of Islands context. Key values:

```html
<title>Planning Consultant Paihia | Resource Consent Paihia | Gumboots</title>
<meta name="description" content="Planning consultant Paihia — resource consent, coastal development feasibility & Bay of Islands FNDC consent support. Call 020 4 GUMMYS." />
<meta name="geo.region" content="NZ-NTL" />
<meta name="geo.placename" content="Paihia, Far North District" />
<meta name="geo.position" content="-35.2780;174.0890" />
<meta name="ICBM" content="-35.2780, 174.0890" />
<link rel="canonical" href="https://www.gumbootsconsulting.co.nz/planning-consultant-paihia.html" />
```

H1: `Planning Consultant Paihia — Resource Consent & Development`

Unique Paihia content to include (on top of the Kerikeri base structure):
- Coastal and marine considerations: NZCPS (National Coastal Policy Statement), setbacks from coastal marine area, Northland Regional Council coastal permits
- Bay of Islands Coastal Precinct under FNDC District Plan
- Steep terrain around Paihia — earthworks triggers lower on coastal sections
- Heritage overlays around Russell/Paihia affecting development

FAQ variations for Paihia:
- "Do I need extra consent for building near the Paihia waterfront?" — Coastal setbacks, FNDC coastal precinct, NRC coastal permit requirements.
- "What is the coastal marine area setback in Paihia?" — FNDC typically requires buildings to be set back from the coastal marine area boundary. Geotech and stormwater reports often required for coastal sections.
- "Can I build on a steep section in Paihia?" — Yes, but geotechnical assessment and retaining wall design required. FNDC consent may be required for earthworks over 250 sqm.
- "What is the difference between FNDC and NRC consents in the Bay of Islands?" — FNDC processes land use consents and subdivision. Northland Regional Council processes consents for activities affecting water, coastal marine area, and earthworks near waterways.

- [ ] **Step 3: Add to sitemap.xml**

```xml
<url>
    <loc>https://www.gumbootsconsulting.co.nz/planning-consultant-kerikeri.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
</url>
<url>
    <loc>https://www.gumbootsconsulting.co.nz/planning-consultant-paihia.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
</url>
```

- [ ] **Step 4: Add internal links**

In `kerikeri.html`, add a service card or text link to `planning-consultant-kerikeri.html`.
In `paihia.html`, add a service card or text link to `planning-consultant-paihia.html`.

- [ ] **Step 5: Verify**

Run: `grep "<title>" planning-consultant-kerikeri.html planning-consultant-paihia.html`

```json:metadata
{"files": ["planning-consultant-kerikeri.html", "planning-consultant-paihia.html", "sitemap.xml", "kerikeri.html", "paihia.html"], "verifyCommand": "grep \"<title>\" planning-consultant-kerikeri.html planning-consultant-paihia.html", "acceptanceCriteria": ["both files created", "both have FAQPage schema", "both added to sitemap", "internal links added from kerikeri.html and paihia.html"]}
```

---

### Task 6: New Page — resource-consent-northland.html

**Goal:** Create a top-of-funnel resource consent explainer page targeting the "resource consent northland" query cluster with high informational intent.

**Files:**
- Create: `resource-consent-northland.html`
- Modify: `sitemap.xml`
- Modify: `subdivision-consultant-northland.html` (add internal link)

**Acceptance Criteria:**
- [ ] File created with correct head, geo, canonical
- [ ] H1 = `Resource Consent Northland — Expert Consent Consultants`
- [ ] 800+ words covering: what resource consent is, when you need it, RMA process, FNDC vs NRC roles, timeline and costs
- [ ] FAQPage schema + LocalBusiness schema
- [ ] Links to: `subdivision-consultant-northland.html`, all Far North town hub pages
- [ ] Added to sitemap.xml

**Verify:** `grep "<title>" resource-consent-northland.html`

**Steps:**

- [ ] **Step 1: Create `resource-consent-northland.html`**

Base on `geotechnical-engineering-northland.html` template (regional page, not town-specific).

```html
<title>Resource Consent Northland | Resource Consent Consultants | Gumboots</title>
<meta name="description" content="Resource consent Northland — expert engineering support for FNDC & NRC resource consent applications. Site assessments, reports & consent management. Call 020 4 GUMMYS." />
<meta name="geo.region" content="NZ-NTL" />
<meta name="geo.placename" content="Northland, New Zealand" />
<meta name="geo.position" content="-35.7251;174.3237" />
<meta name="ICBM" content="-35.7251, 174.3237" />
<link rel="canonical" href="https://www.gumbootsconsulting.co.nz/resource-consent-northland.html" />
```

H1: `Resource Consent Northland — Expert Consent Consultants`

Content sections:
1. **What is resource consent?** — Definition under RMA. Activities that are permitted (don't need consent), controlled, restricted discretionary, discretionary, non-complying. 150 words.
2. **When do you need resource consent in Northland?** — Building near waterways, earthworks over threshold, subdivision, coastal development, discharge to land or water. 150 words.
3. **FNDC vs Northland Regional Council — who processes what?** — FNDC: land use consents, subdivision consents, building consents. NRC: water takes, discharge to water/land, coastal permits, earthworks near waterways. You may need both. 150 words.
4. **The resource consent process** — Pre-application, application, s92 RFI, decision (non-notified 20 working days), conditions, sign-off. 150 words.
5. **Engineering reports for resource consent** — What Gumboots provides: geotech, stormwater, wastewater, civil design. Why complete applications process faster. 100 words.
6. **Service area links** — All Far North town hub pages + subdivision-consultant-northland.html.

FAQ (4 questions):
- "How long does resource consent take in Northland?" — Non-notified: 20 working days from lodgement (frequently extended by RFIs). Limited notification: 20–40 working days. Full notification: can take 6+ months.
- "How much does resource consent cost in Northland?" — FNDC charges application fees plus processing costs. Non-notified application fee typically $500–$2,000 depending on activity. Engineering reports add $2,000–$15,000+ depending on scope. Contact Gumboots for a project estimate.
- "Do I need resource consent to do earthworks on my Northland property?" — It depends. Under FNDC District Plan rules, earthworks over certain thresholds (typically 250 sqm or 100 m³) may require resource consent. Earthworks near waterways require NRC consent. We can advise on your specific site.
- "Can Gumboots manage the whole resource consent process?" — We provide the engineering input: site assessment, reports, and responses to RFIs. We recommend working with a planning consultant for the planning report and overall consent management. We can refer you to trusted planning consultants in Northland.

- [ ] **Step 2: Add schema, sitemap entry, and internal link** — same pattern as Task 4.

- [ ] **Step 3: Verify**

Run: `grep "<title>" resource-consent-northland.html && grep "FAQPage" resource-consent-northland.html`

```json:metadata
{"files": ["resource-consent-northland.html", "sitemap.xml", "subdivision-consultant-northland.html"], "verifyCommand": "grep \"<title>\" resource-consent-northland.html && grep \"FAQPage\" resource-consent-northland.html", "acceptanceCriteria": ["file created with correct title", "FAQPage schema present", "added to sitemap", "internal link added from subdivision-consultant-northland.html"]}
```

---

### Task 7: Content Improvements — engineering-consulting.html + subdivision-engineering-northland.html

**Goal:** Improve two high-impression underperforming pages with thin content that's diluting topical authority.

**Files:**
- Modify: `engineering-consulting.html` (1,682 impressions, pos 18, 1 click)
- Modify: `subdivision-engineering-northland.html` (1,144 impressions, pos 25, 0 clicks)

**Acceptance Criteria:**
- [ ] `engineering-consulting.html`: service types clearly defined with service cards linking to each service page, 400+ words added
- [ ] `subdivision-engineering-northland.html`: FNDC consent timeline added, lot creation requirements, link to `subdivision-consultant-northland.html` and new planning pages
- [ ] No regressions to existing title/meta (don't change titles — positions are reasonable)

**Verify:** `grep -c "</p>" engineering-consulting.html` → count increases from current baseline

**Steps:**

- [ ] **Step 1: Improve `engineering-consulting.html`**

Read the current file first. Add or expand the following sections:

Add a clear service type overview section with cards for each discipline Gumboots offers. Each card should have: service name, 2-sentence description, and a link to the relevant main service page. Services to card: Geotechnical Engineering → `geotechnical-engineering.html`, Civil Engineering → `civil-engineering.html`, Structural Engineering → `structural-engineering.html`, TP58 Wastewater Design → `wastewater-design.html`, Stormwater Design → `stormwater-design.html`, Soil Testing → `soil-testing.html`, Erosion Control → `erosion-control-northland.html`, Subdivision Engineering → `subdivision-engineering-northland.html`, Retaining Wall Design → `retaining-wall-design.html`.

Add a "Why one engineering firm for everything?" section explaining the coordination benefits. 150 words.

Add a "What makes Gumboots different?" section emphasising local Far North knowledge, fast turnaround, FNDC expertise. 150 words.

- [ ] **Step 2: Improve `subdivision-engineering-northland.html`**

Read the current file first. Add:
- FNDC consent timeline steps (pre-app → resource consent → engineering plan approval → 224c)
- Lot creation requirements: survey, engineering, consent conditions
- Section on types of subdivision Gumboots handles: rural two-lot, residential, lifestyle block
- Internal links: add links to `subdivision-consultant-northland.html`, `planning-consultant-kerikeri.html`, `resource-consent-northland.html`

```json:metadata
{"files": ["engineering-consulting.html", "subdivision-engineering-northland.html"], "verifyCommand": "grep -c \"</p>\" engineering-consulting.html", "acceptanceCriteria": ["engineering-consulting.html has service cards for all 9 service types", "subdivision-engineering-northland.html has FNDC consent timeline", "internal links to new planning pages added to subdivision-engineering-northland.html"]}
```

---

### Task 8: Content Improvements — civil-engineering-whangarei.html + geotechnical-engineering-kerikeri.html

**Goal:** Improve two high-impression pages at poor positions due to thin content.

**Files:**
- Modify: `civil-engineering-whangarei.html` (1,136 impressions, pos 33, 1 click)
- Modify: `geotechnical-engineering-kerikeri.html` (659 impressions, pos 39, 3 clicks)

**Acceptance Criteria:**
- [ ] `civil-engineering-whangarei.html`: Whangarei-specific content added — WDC council references, local infrastructure context, 300+ words added
- [ ] `geotechnical-engineering-kerikeri.html`: Kerikeri soil types added (clay-rich volcanic soils), local terrain notes, case examples, FAQ expanded — 300+ words added

**Verify:** `grep -c "</p>" civil-engineering-whangarei.html geotechnical-engineering-kerikeri.html`

**Steps:**

- [ ] **Step 1: Improve `civil-engineering-whangarei.html`**

Read the current file. Add a Whangarei-specific section including:
- Whangarei District Council (WDC) infrastructure standards reference — note that civil engineering in Whangarei must comply with WDC's engineering standards (different from FNDC)
- Whangarei's growth context: fastest-growing city in Northland, large residential development pipeline
- Infrastructure types Gumboots handles in Whangarei: site grading, driveway design, stormwater, retaining walls for residential builds
- Note on Whangarei terrain: varies from flat Hatea River catchment to steep residential ridgelines

- [ ] **Step 2: Improve `geotechnical-engineering-kerikeri.html`**

Read the current file. Add:
- Kerikeri soil types section: the region is dominated by red clay soils derived from volcanic basalt (Kerikeri Basalt). These clays have good bearing capacity when dry but can become expansive and unstable when saturated. Deep profile weathering in some areas. Sandy loams on river terraces near the Kerikeri River.
- Common geotechnical issues in Kerikeri: expansive clay movement affecting foundations, slope instability on the volcanic scarp edges, seasonal groundwater variations
- FAQ expansion: add question "What soil types are in Kerikeri?" with the volcanic clay answer above

```json:metadata
{"files": ["civil-engineering-whangarei.html", "geotechnical-engineering-kerikeri.html"], "verifyCommand": "grep -c \"</p>\" civil-engineering-whangarei.html geotechnical-engineering-kerikeri.html", "acceptanceCriteria": ["civil-engineering-whangarei.html has WDC reference and Whangarei context", "geotechnical-engineering-kerikeri.html has Kerikeri volcanic soil content", "geotechnical-engineering-kerikeri.html FAQ includes soil types question"]}
```

---

### Task 9: Major Rewrite — kerikeri.html Hub

**Goal:** Rewrite `kerikeri.html` from its currently thin state (pos 47, 0 clicks from 166 impressions) to a full-service hub page with local depth.

**Files:**
- Modify: `kerikeri.html`

**Acceptance Criteria:**
- [ ] Title updated to lead with "Engineering Services Kerikeri" more compactly: `Engineering Services Kerikeri | Geotechnical, Civil & TP58 | Gumboots`
- [ ] 600+ words of content (currently very thin)
- [ ] All Kerikeri service pages linked (including new planning pages)
- [ ] Local context section: Kerikeri soils, FNDC knowledge, local projects context
- [ ] Service cards updated to include planning-consultant-kerikeri.html

**Verify:** `grep -c "</p>" kerikeri.html`

**Steps:**

- [ ] **Step 1: Update title/meta**

```html
<title>Engineering Services Kerikeri | Geotechnical, Civil & TP58 | Gumboots</title>
<meta name="description" content="Engineering services in Kerikeri — geotechnical, civil, structural, TP58 wastewater, stormwater & resource consent. Local Kerikeri engineers since 2018. Call 020 4 GUMMYS." />
```

- [ ] **Step 2: Add planning consultant service card**

In the services grid, add a new card:
```html
<div class="col mb-4">
    <a href="planning-consultant-kerikeri.html" class="service-hub-card">
        <div class="card h-100">
            <div class="card-body p-4 text-center">
                <div class="service-icon"><i class="fas fa-clipboard-list"></i></div>
                <h3 class="h5 fw-bolder text-gumboots-light mb-2">Planning & Resource Consent</h3>
                <p class="small text-muted mb-0">Resource consent engineering, development feasibility and FNDC consent support for Kerikeri projects.</p>
            </div>
            <div class="card-footer bg-transparent border-0 text-center pb-3">
                <span class="small fw-bold text-gumboots-light">Learn More <i class="fas fa-arrow-right ms-1"></i></span>
            </div>
        </div>
    </a>
</div>
```

- [ ] **Step 3: Expand the "About Kerikeri" intro section**

The current intro is adequate. Expand with:
- Specific mention of Kerikeri Basalt soils and what that means for engineering
- FNDC processing familiarity (faster consents)
- Mention Waipapa as service area alongside Kerikeri
- Add sentence about planning/resource consent support being available

- [ ] **Step 4: Add a "Kerikeri area links" section**

Add a section with links to neighbouring pages:
```html
<section class="py-4 bg-light">
    <div class="container px-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <h3 class="h5 fw-bolder text-gumboots mb-3">Nearby Areas We Serve from Kerikeri</h3>
                <ul class="service-area-links">
                    <li><a href="paihia.html">Paihia & Bay of Islands</a></li>
                    <li><a href="mangonui.html">Mangonui</a></li>
                    <li><a href="coopers-beach.html">Coopers Beach</a></li>
                    <li><a href="geotechnical-engineering-northland.html">All Northland Services</a></li>
                    <li><a href="subdivision-consultant-northland.html">Subdivision Consulting</a></li>
                    <li><a href="planning-consultant-kerikeri.html">Resource Consent</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

```json:metadata
{"files": ["kerikeri.html"], "verifyCommand": "grep -c \"</p>\" kerikeri.html", "acceptanceCriteria": ["title updated", "planning consultant card added to service grid", "600+ words of content", "nearby area links section added"]}
```

---

### Task 10: Coromandel Regional Hub + 7 Town Hub Pages

**Goal:** Create the `coromandel-peninsula.html` regional hub and all 7 Coromandel town hub pages. These are the foundational pages for all Coromandel content.

**Files:**
- Create: `coromandel-peninsula.html`
- Create: `whangamata.html`
- Create: `tairua.html`
- Create: `thames.html`
- Create: `hahei.html`
- Create: `hot-water-beach.html`
- Create: `waihi-beach.html`
- Create: `coromandel-town.html`
- Modify: `index.html` (add Coromandel to service area section)
- Modify: `sitemap.xml` (add 8 new entries)

**Acceptance Criteria:**
- [ ] All 8 files created with correct geo, canonical, title, meta
- [ ] All use `NZ-WKO` geo region
- [ ] Whangamata page includes "by appointment" office framing
- [ ] All 7 town hubs link to `coromandel-peninsula.html` and to all relevant service×location pages for that town
- [ ] Regional hub links to all 7 town hubs
- [ ] Homepage updated to mention Coromandel Peninsula
- [ ] All 8 pages added to sitemap.xml

**Verify:** `ls whangamata.html tairua.html thames.html hahei.html hot-water-beach.html waihi-beach.html coromandel-town.html coromandel-peninsula.html`

**Steps:**

- [ ] **Step 1: Create `coromandel-peninsula.html`**

Base on `geotechnical-engineering-northland.html` (regional hub template).

```html
<title>Engineering Services Coromandel Peninsula | Geotechnical, Civil & Structural | Gumboots</title>
<meta name="description" content="Engineering services across the Coromandel Peninsula — geotechnical, civil, structural, TP58 wastewater & stormwater. Whangamata office. Call 020 4 GUMMYS." />
<meta name="geo.region" content="NZ-WKO" />
<meta name="geo.placename" content="Coromandel Peninsula, Thames-Coromandel District" />
<meta name="geo.position" content="-37.2000;175.8667" />
<meta name="ICBM" content="-37.2000, 175.8667" />
<link rel="canonical" href="https://www.gumbootsconsulting.co.nz/coromandel-peninsula.html" />
```

H1: `Engineering Services Coromandel Peninsula`

Content:
- Intro: Gumboots has opened a Whangamata office serving the Coromandel Peninsula. All services: geotechnical, civil, structural, TP58 wastewater, stormwater, soil testing, erosion control. By appointment — servicing the full Coromandel.
- Council context section: Thames-Coromandel District Council (TCDC) for building/resource consents and subdivision. Waikato Regional Council (WRC) for water, coastal, and stormwater discharge consents. TP58 wastewater follows TCDC requirements (different approval pathway to FNDC in the Far North).
- Terrain section: volcanic/coastal soils, steep Coromandel ranges, high rainfall, coastal hazard considerations for Hahei, Hot Water Beach, Waihi Beach, Whangamata.
- Town links grid (7 towns)
- Main service links

- [ ] **Step 2: Create `whangamata.html`** (primary Coromandel town)

Base on `kerikeri.html`. Key substitutions:

| Field | Value |
|-------|-------|
| Title | `Engineering Services Whangamata \| Geotechnical, Civil & Structural \| Gumboots` |
| Meta desc | `Engineering services in Whangamata — geotechnical, civil, structural, TP58 wastewater & stormwater. Whangamata office. Call 020 4 GUMMYS.` |
| geo.region | `NZ-WKO` |
| geo.placename | `Whangamata, Thames-Coromandel District` |
| geo.position | `-37.2000;175.8667` |
| ICBM | `-37.2000, 175.8667` |
| canonical | `.../whangamata.html` |
| H1 | `Engineering Services in Whangamata` |
| location-badge | `Whangamata` |

Office mention — add in the intro paragraph: *"Gumboots has a registered Whangamata office serving the Coromandel Peninsula by appointment. Our engineers visit Whangamata and surrounding Coromandel towns for site assessments, monitoring, and project work."*

Council references throughout: replace FNDC → TCDC, replace Northland Regional Council → Waikato Regional Council.

Service cards: link to `geotechnical-engineering-whangamata.html`, `civil-engineering-whangamata.html`, `tp58-wastewater-whangamata.html`, `stormwater-design-whangamata.html`, `structural-engineering-whangamata.html`, `soil-testing-whangamata.html`, `coromandel-peninsula.html`.

- [ ] **Step 3: Create remaining 6 town hub pages**

Use the same substitution pattern as Whangamata. Key values per town:

| File | Title prefix | geo.placename | Coordinates | Special notes |
|------|-------------|---------------|-------------|---------------|
| `tairua.html` | `Engineering Services Tairua` | `Tairua, Thames-Coromandel District` | `-37.0000;175.8500` | Estuary town; coastal development; steep terrain |
| `thames.html` | `Engineering Services Thames` | `Thames, Thames-Coromandel District` | `-37.1333;175.5333` | Gateway to peninsula; WDC proximity; industrial mix |
| `hahei.html` | `Engineering Services Hahei` | `Hahei, Thames-Coromandel District` | `-36.8667;175.8000` | Cathedral Cove area; high-value holiday; limited infrastructure |
| `hot-water-beach.html` | `Engineering Services Hot Water Beach` | `Hot Water Beach, Thames-Coromandel District` | `-36.9000;175.8333` | Geothermal activity; tourism; challenging ground conditions |
| `waihi-beach.html` | `Engineering Services Waihi Beach` | `Waihi Beach, Thames-Coromandel District` | `-37.3667;175.9333` | Holiday homes; sandy coastal soils; seasonal population |
| `coromandel-town.html` | `Engineering Services Coromandel Town` | `Coromandel, Thames-Coromandel District` | `-36.7667;175.5000` | Remote; limited services; rural/lifestyle blocks |

For each file, the service cards link to:
- `geotechnical-engineering-[town-slug].html`
- `civil-engineering-[town-slug].html`
- `tp58-wastewater-[town-slug].html`
- `stormwater-design-[town-slug].html`
- `coromandel-peninsula.html`
- (Tairua, Hahei, HWB, Waihi Beach, Coromandel Town do NOT have structural or soil testing pages)
- Thames and Whangamata also link to `structural-engineering-[town].html` and `soil-testing-[town].html`

Meta description pattern: `Engineering services in [Town] — geotechnical, civil, TP58 wastewater & stormwater design for [Town] & Coromandel Peninsula. Call 020 4 GUMMYS.`

- [ ] **Step 4: Update `index.html`**

Read `index.html`. Find the service areas / locations section. Add Coromandel Peninsula as a new area with a link to `coromandel-peninsula.html`.

- [ ] **Step 5: Add to sitemap.xml**

```xml
<!-- Coromandel Regional Hub -->
<url>
    <loc>https://www.gumbootsconsulting.co.nz/coromandel-peninsula.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
</url>

<!-- Coromandel Town Hub Pages -->
<url>
    <loc>https://www.gumbootsconsulting.co.nz/whangamata.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://www.gumbootsconsulting.co.nz/tairua.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://www.gumbootsconsulting.co.nz/thames.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://www.gumbootsconsulting.co.nz/hahei.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://www.gumbootsconsulting.co.nz/hot-water-beach.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://www.gumbootsconsulting.co.nz/waihi-beach.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://www.gumbootsconsulting.co.nz/coromandel-town.html</loc>
    <lastmod>2026-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

- [ ] **Step 6: Verify**

Run: `ls whangamata.html tairua.html thames.html hahei.html hot-water-beach.html waihi-beach.html coromandel-town.html coromandel-peninsula.html`
Expected: all 8 files listed with no errors.

Run: `grep "NZ-WKO" whangamata.html tairua.html thames.html`
Expected: each file has one `NZ-WKO` entry.

```json:metadata
{"files": ["coromandel-peninsula.html", "whangamata.html", "tairua.html", "thames.html", "hahei.html", "hot-water-beach.html", "waihi-beach.html", "coromandel-town.html", "index.html", "sitemap.xml"], "verifyCommand": "ls whangamata.html tairua.html thames.html hahei.html hot-water-beach.html waihi-beach.html coromandel-town.html coromandel-peninsula.html", "acceptanceCriteria": ["all 8 files created", "all use NZ-WKO geo region", "all 8 added to sitemap.xml", "homepage updated with Coromandel link", "whangamata.html includes by-appointment office mention"]}
```

---

### Task 11: Coromandel Geotechnical Engineering Pages (7 pages)

**Goal:** Create 7 geotechnical engineering service×location pages for the Coromandel Peninsula.

**Files:**
- Create: `geotechnical-engineering-whangamata.html`
- Create: `geotechnical-engineering-tairua.html`
- Create: `geotechnical-engineering-thames.html`
- Create: `geotechnical-engineering-hahei.html`
- Create: `geotechnical-engineering-hot-water-beach.html`
- Create: `geotechnical-engineering-waihi-beach.html`
- Create: `geotechnical-engineering-coromandel-town.html`
- Modify: `sitemap.xml`
- Modify: `geotechnical-engineering.html` (add Coromandel section)

**Acceptance Criteria:**
- [ ] All 7 files created
- [ ] All use `NZ-WKO` geo region
- [ ] All titles start with "Geotechnical Engineer [Town]"
- [ ] All link to `geotechnical-engineering.html` and their town hub page
- [ ] `geotechnical-engineering.html` updated with Coromandel location list
- [ ] All 7 added to sitemap.xml

**Verify:** `ls geotechnical-engineering-whangamata.html geotechnical-engineering-tairua.html geotechnical-engineering-thames.html geotechnical-engineering-hahei.html geotechnical-engineering-hot-water-beach.html geotechnical-engineering-waihi-beach.html geotechnical-engineering-coromandel-town.html`

**Steps:**

- [ ] **Step 1: Create all 7 pages using `geotechnical-engineering-kerikeri.html` as template**

For each file, substitute the following values. All other HTML structure remains identical to the Kerikeri template.

| File | Title | Meta description | geo.placename | geo.position | H1 | Town hub link | Local soil notes |
|------|-------|-----------------|---------------|-------------|-----|---------------|-----------------|
| `geotechnical-engineering-whangamata.html` | `Geotechnical Engineer Whangamata \| Geotech Coromandel \| Gumboots` | `Geotechnical engineer in Whangamata — site assessments, soil testing & foundation design for Coromandel builds. Call 020 4 GUMMYS.` | `Whangamata, Thames-Coromandel District` | `-37.2000;175.8667` | `Geotechnical Engineer Whangamata — Coromandel Peninsula` | `whangamata.html` | Coastal sandy/volcanic soils; high water table in low areas; TCDC consent |
| `geotechnical-engineering-tairua.html` | `Geotechnical Engineer Tairua \| Geotech Tairua \| Gumboots` | `Geotechnical engineer in Tairua — site assessments, soil testing & foundation design for Tairua & Coromandel. Call 020 4 GUMMYS.` | `Tairua, Thames-Coromandel District` | `-37.0000;175.8500` | `Geotechnical Engineer Tairua — Coromandel Peninsula` | `tairua.html` | Estuary margins; coastal clays; steep hill terrain |
| `geotechnical-engineering-thames.html` | `Geotechnical Engineer Thames \| Geotech Thames \| Gumboots` | `Geotechnical engineer in Thames — site assessments, soil testing & foundation design for Thames & Coromandel. Call 020 4 GUMMYS.` | `Thames, Thames-Coromandel District` | `-37.1333;175.5333` | `Geotechnical Engineer Thames — Coromandel` | `thames.html` | Hauraki Plains alluvial soils; variable compressibility; peat in low areas |
| `geotechnical-engineering-hahei.html` | `Geotechnical Engineer Hahei \| Geotech Hahei \| Gumboots` | `Geotechnical engineer in Hahei — site assessments & foundation design for Hahei holiday properties. Call 020 4 GUMMYS.` | `Hahei, Thames-Coromandel District` | `-36.8667;175.8000` | `Geotechnical Engineer Hahei — Coromandel Peninsula` | `hahei.html` | Coastal cliffs; sandy/shell soils; steep hillside sections |
| `geotechnical-engineering-hot-water-beach.html` | `Geotechnical Engineer Hot Water Beach \| Geotech Coromandel \| Gumboots` | `Geotechnical engineer Hot Water Beach — site assessments for challenging Coromandel ground conditions. Call 020 4 GUMMYS.` | `Hot Water Beach, Thames-Coromandel District` | `-36.9000;175.8333` | `Geotechnical Engineer Hot Water Beach — Coromandel` | `hot-water-beach.html` | Geothermal influence; variable ground temp; coastal sand |
| `geotechnical-engineering-waihi-beach.html` | `Geotechnical Engineer Waihi Beach \| Geotech Waihi Beach \| Gumboots` | `Geotechnical engineer in Waihi Beach — site assessments & soil testing for coastal Coromandel properties. Call 020 4 GUMMYS.` | `Waihi Beach, Thames-Coromandel District` | `-37.3667;175.9333` | `Geotechnical Engineer Waihi Beach — Coromandel` | `waihi-beach.html` | Sandy coastal soils; dune stability; variable water table |
| `geotechnical-engineering-coromandel-town.html` | `Geotechnical Engineer Coromandel Town \| Geotech Coromandel \| Gumboots` | `Geotechnical engineer in Coromandel Town — site assessments & soil testing for rural Coromandel properties. Call 020 4 GUMMYS.` | `Coromandel, Thames-Coromandel District` | `-36.7667;175.5000` | `Geotechnical Engineer Coromandel Town` | `coromandel-town.html` | Hard volcanic rock; steep terrain; remote site access |

All pages:
- Replace `NZ-NTL` with `NZ-WKO`
- Replace FNDC references with TCDC
- Replace Northland Regional Council with Waikato Regional Council
- Replace Kerikeri phone context with Whangamata office context: *"Gumboots operates a Whangamata office serving the Coromandel Peninsula by appointment."*
- Replace "Based in Kerikeri" with "Serving [Town] from our Whangamata office"
- Include 1 Coromandel-specific soil/terrain paragraph per the notes above
- Internal links: `coromandel-peninsula.html`, `[town-hub].html`, `geotechnical-engineering.html`
- FAQPage schema: reuse the Kerikeri FAQ questions but replace FNDC with TCDC and Kerikeri references with [Town] references

- [ ] **Step 2: Update `geotechnical-engineering.html`**

Read the current file. Find the locations list. Add a "Coromandel Peninsula" section with links to all 7 new pages.

- [ ] **Step 3: Add to sitemap.xml**

Add 7 entries following the established pattern with `lastmod>2026-06-17`.

- [ ] **Step 4: Verify**

Run: `ls geotechnical-engineering-whangamata.html geotechnical-engineering-tairua.html geotechnical-engineering-thames.html geotechnical-engineering-hahei.html geotechnical-engineering-hot-water-beach.html geotechnical-engineering-waihi-beach.html geotechnical-engineering-coromandel-town.html`

Run: `grep "NZ-WKO" geotechnical-engineering-whangamata.html geotechnical-engineering-thames.html`

```json:metadata
{"files": ["geotechnical-engineering-whangamata.html", "geotechnical-engineering-tairua.html", "geotechnical-engineering-thames.html", "geotechnical-engineering-hahei.html", "geotechnical-engineering-hot-water-beach.html", "geotechnical-engineering-waihi-beach.html", "geotechnical-engineering-coromandel-town.html", "geotechnical-engineering.html", "sitemap.xml"], "verifyCommand": "ls geotechnical-engineering-whangamata.html geotechnical-engineering-tairua.html geotechnical-engineering-thames.html geotechnical-engineering-hahei.html geotechnical-engineering-hot-water-beach.html geotechnical-engineering-waihi-beach.html geotechnical-engineering-coromandel-town.html", "acceptanceCriteria": ["all 7 files created", "all use NZ-WKO", "all link to geotechnical-engineering.html", "geotechnical-engineering.html updated with Coromandel section", "all 7 in sitemap.xml"]}
```

---

### Task 12: Coromandel Civil Engineering Pages (7 pages)

**Goal:** Create 7 civil engineering service×location pages for the Coromandel Peninsula.

**Files:**
- Create: `civil-engineering-whangamata.html`
- Create: `civil-engineering-tairua.html`
- Create: `civil-engineering-thames.html`
- Create: `civil-engineering-hahei.html`
- Create: `civil-engineering-hot-water-beach.html`
- Create: `civil-engineering-waihi-beach.html`
- Create: `civil-engineering-coromandel-town.html`
- Modify: `civil-engineering.html` (add Coromandel section)
- Modify: `sitemap.xml`

**Acceptance Criteria:**
- [ ] All 7 files created with correct titles, geo (NZ-WKO), canonicals
- [ ] `civil-engineering.html` updated with Coromandel location links
- [ ] All 7 added to sitemap.xml

**Verify:** `ls civil-engineering-whangamata.html civil-engineering-tairua.html civil-engineering-thames.html civil-engineering-hahei.html civil-engineering-hot-water-beach.html civil-engineering-waihi-beach.html civil-engineering-coromandel-town.html`

**Steps:**

- [ ] **Step 1: Create all 7 pages using `civil-engineering-kerikeri.html` as template**

Substitution table:

| File | Title | Meta description | geo.placename | Coordinates | H1 |
|------|-------|-----------------|---------------|-------------|-----|
| `civil-engineering-whangamata.html` | `Civil Engineer Whangamata \| Civil Engineering Coromandel \| Gumboots` | `Civil engineer Whangamata — site grading, drainage, stormwater & land development for Coromandel Peninsula. Call 020 4 GUMMYS.` | `Whangamata, Thames-Coromandel District` | `-37.2000;175.8667` | `Civil Engineer Whangamata — Coromandel Peninsula` |
| `civil-engineering-tairua.html` | `Civil Engineer Tairua \| Civil Engineering Tairua \| Gumboots` | `Civil engineer in Tairua — site grading, drainage & land development for Tairua & Coromandel. Call 020 4 GUMMYS.` | `Tairua, Thames-Coromandel District` | `-37.0000;175.8500` | `Civil Engineer Tairua — Coromandel Peninsula` |
| `civil-engineering-thames.html` | `Civil Engineer Thames \| Civil Engineering Thames Coromandel \| Gumboots` | `Civil engineer in Thames — site grading, infrastructure design & land development for Thames & Coromandel. Call 020 4 GUMMYS.` | `Thames, Thames-Coromandel District` | `-37.1333;175.5333` | `Civil Engineer Thames — Coromandel Peninsula` |
| `civil-engineering-hahei.html` | `Civil Engineer Hahei \| Civil Engineering Hahei \| Gumboots` | `Civil engineer in Hahei — site access, drainage & coastal land development for Hahei properties. Call 020 4 GUMMYS.` | `Hahei, Thames-Coromandel District` | `-36.8667;175.8000` | `Civil Engineer Hahei — Coromandel Peninsula` |
| `civil-engineering-hot-water-beach.html` | `Civil Engineer Hot Water Beach \| Civil Engineering Coromandel \| Gumboots` | `Civil engineer Hot Water Beach — site access, drainage & land development for Hot Water Beach properties. Call 020 4 GUMMYS.` | `Hot Water Beach, Thames-Coromandel District` | `-36.9000;175.8333` | `Civil Engineer Hot Water Beach — Coromandel` |
| `civil-engineering-waihi-beach.html` | `Civil Engineer Waihi Beach \| Civil Engineering Waihi Beach \| Gumboots` | `Civil engineer in Waihi Beach — site grading, drainage & coastal development for Waihi Beach. Call 020 4 GUMMYS.` | `Waihi Beach, Thames-Coromandel District` | `-37.3667;175.9333` | `Civil Engineer Waihi Beach — Coromandel Peninsula` |
| `civil-engineering-coromandel-town.html` | `Civil Engineer Coromandel Town \| Civil Engineering Coromandel \| Gumboots` | `Civil engineer in Coromandel Town — rural site access, drainage & land development consulting. Call 020 4 GUMMYS.` | `Coromandel, Thames-Coromandel District` | `-36.7667;175.5000` | `Civil Engineer Coromandel Town` |

All pages:
- geo.region: `NZ-WKO`
- Replace FNDC → TCDC, Northland RC → Waikato RC
- Office context: "Whangamata office serving the Coromandel Peninsula by appointment"
- Internal links: `coromandel-peninsula.html`, `[town-hub].html`, `civil-engineering.html`

- [ ] **Step 2: Update `civil-engineering.html`** with Coromandel section + 7 links.

- [ ] **Step 3: Add 7 entries to sitemap.xml.**

- [ ] **Step 4: Verify**

Run: `ls civil-engineering-whangamata.html civil-engineering-tairua.html civil-engineering-thames.html civil-engineering-hahei.html civil-engineering-hot-water-beach.html civil-engineering-waihi-beach.html civil-engineering-coromandel-town.html`

```json:metadata
{"files": ["civil-engineering-whangamata.html", "civil-engineering-tairua.html", "civil-engineering-thames.html", "civil-engineering-hahei.html", "civil-engineering-hot-water-beach.html", "civil-engineering-waihi-beach.html", "civil-engineering-coromandel-town.html", "civil-engineering.html", "sitemap.xml"], "verifyCommand": "ls civil-engineering-whangamata.html civil-engineering-tairua.html civil-engineering-thames.html civil-engineering-hahei.html civil-engineering-hot-water-beach.html civil-engineering-waihi-beach.html civil-engineering-coromandel-town.html", "acceptanceCriteria": ["all 7 files created", "all use NZ-WKO", "civil-engineering.html updated with Coromandel links", "all 7 in sitemap.xml"]}
```

---

### Task 13: Coromandel TP58 Wastewater Pages (7 pages)

**Goal:** Create 7 TP58 wastewater design service×location pages for the Coromandel Peninsula. TCDC has a different TP58 approval pathway than FNDC — this must be reflected in the content.

**Files:**
- Create: `tp58-wastewater-whangamata.html`
- Create: `tp58-wastewater-tairua.html`
- Create: `tp58-wastewater-thames.html`
- Create: `tp58-wastewater-hahei.html`
- Create: `tp58-wastewater-hot-water-beach.html`
- Create: `tp58-wastewater-waihi-beach.html`
- Create: `tp58-wastewater-coromandel-town.html`
- Modify: `wastewater-design.html` (add Coromandel section)
- Modify: `sitemap.xml`

**Acceptance Criteria:**
- [ ] All 7 files created with TCDC references (not FNDC)
- [ ] Content mentions TCDC approval pathway for TP58 (different to FNDC)
- [ ] All use NZ-WKO
- [ ] `wastewater-design.html` updated with Coromandel links
- [ ] All 7 added to sitemap.xml

**Verify:** `ls tp58-wastewater-whangamata.html tp58-wastewater-tairua.html tp58-wastewater-thames.html tp58-wastewater-hahei.html tp58-wastewater-hot-water-beach.html tp58-wastewater-waihi-beach.html tp58-wastewater-coromandel-town.html`

**Steps:**

- [ ] **Step 1: Create all 7 pages using `tp58-wastewater-kerikeri.html` as template**

Substitution table:

| File | Title | Meta description | geo.placename | Coordinates |
|------|-------|-----------------|---------------|-------------|
| `tp58-wastewater-whangamata.html` | `TP58 Whangamata \| Wastewater Design Coromandel \| Gumboots` | `TP58 wastewater designer in Whangamata — onsite wastewater systems, soakage testing & TCDC consent reports. Call 020 4 GUMMYS.` | `Whangamata, Thames-Coromandel District` | `-37.2000;175.8667` |
| `tp58-wastewater-tairua.html` | `TP58 Tairua \| Wastewater Design Tairua \| Gumboots` | `TP58 wastewater designer in Tairua — onsite wastewater systems, soakage testing & TCDC consent reports. Call 020 4 GUMMYS.` | `Tairua, Thames-Coromandel District` | `-37.0000;175.8500` |
| `tp58-wastewater-thames.html` | `TP58 Thames \| Wastewater Design Thames Coromandel \| Gumboots` | `TP58 wastewater designer in Thames — onsite wastewater systems, soakage testing & TCDC consent reports. Call 020 4 GUMMYS.` | `Thames, Thames-Coromandel District` | `-37.1333;175.5333` |
| `tp58-wastewater-hahei.html` | `TP58 Hahei \| Wastewater Design Hahei \| Gumboots` | `TP58 wastewater designer in Hahei — onsite wastewater systems & TCDC consent reports for Hahei properties. Call 020 4 GUMMYS.` | `Hahei, Thames-Coromandel District` | `-36.8667;175.8000` |
| `tp58-wastewater-hot-water-beach.html` | `TP58 Hot Water Beach \| Wastewater Design Coromandel \| Gumboots` | `TP58 wastewater designer Hot Water Beach — onsite wastewater systems & TCDC consent for Coromandel. Call 020 4 GUMMYS.` | `Hot Water Beach, Thames-Coromandel District` | `-36.9000;175.8333` |
| `tp58-wastewater-waihi-beach.html` | `TP58 Waihi Beach \| Wastewater Design Waihi Beach \| Gumboots` | `TP58 wastewater designer Waihi Beach — onsite wastewater systems, soakage testing & TCDC consent. Call 020 4 GUMMYS.` | `Waihi Beach, Thames-Coromandel District` | `-37.3667;175.9333` |
| `tp58-wastewater-coromandel-town.html` | `TP58 Coromandel Town \| Wastewater Design Coromandel \| Gumboots` | `TP58 wastewater designer Coromandel Town — onsite wastewater systems & TCDC consent for rural Coromandel. Call 020 4 GUMMYS.` | `Coromandel, Thames-Coromandel District` | `-36.7667;175.5000` |

All H1s follow pattern: `TP58 Wastewater Design [Town] — Coromandel Peninsula`

All pages must replace FNDC references with TCDC. Add one paragraph on TCDC vs FNDC TP58 pathway: *"Thames-Coromandel District Council processes TP58 wastewater design reports differently to Far North District Council. TCDC approval is integrated into the building consent process — your TP58 report is submitted with the building consent application and assessed by TCDC's environmental health team. Soakage testing is typically required before design can be completed."*

All pages:
- geo.region: `NZ-WKO`
- Internal links: `coromandel-peninsula.html`, `[town-hub].html`, `wastewater-design.html`

- [ ] **Step 2: Update `wastewater-design.html`** with Coromandel section.

- [ ] **Step 3: Add 7 entries to sitemap.xml.**

- [ ] **Step 4: Verify**

Run: `ls tp58-wastewater-whangamata.html tp58-wastewater-tairua.html tp58-wastewater-thames.html tp58-wastewater-hahei.html tp58-wastewater-hot-water-beach.html tp58-wastewater-waihi-beach.html tp58-wastewater-coromandel-town.html`

```json:metadata
{"files": ["tp58-wastewater-whangamata.html", "tp58-wastewater-tairua.html", "tp58-wastewater-thames.html", "tp58-wastewater-hahei.html", "tp58-wastewater-hot-water-beach.html", "tp58-wastewater-waihi-beach.html", "tp58-wastewater-coromandel-town.html", "wastewater-design.html", "sitemap.xml"], "verifyCommand": "ls tp58-wastewater-whangamata.html tp58-wastewater-tairua.html tp58-wastewater-thames.html tp58-wastewater-hahei.html tp58-wastewater-hot-water-beach.html tp58-wastewater-waihi-beach.html tp58-wastewater-coromandel-town.html", "acceptanceCriteria": ["all 7 files created", "TCDC references throughout (not FNDC)", "all use NZ-WKO", "wastewater-design.html updated", "all 7 in sitemap.xml"]}
```

---

### Task 14: Coromandel Stormwater Design Pages (7 pages)

**Goal:** Create 7 stormwater design service×location pages for the Coromandel Peninsula. Waikato Regional Council handles stormwater discharge consents (not FNDC/NRC).

**Files:**
- Create: `stormwater-design-whangamata.html`
- Create: `stormwater-design-tairua.html`
- Create: `stormwater-design-thames.html`
- Create: `stormwater-design-hahei.html`
- Create: `stormwater-design-hot-water-beach.html`
- Create: `stormwater-design-waihi-beach.html`
- Create: `stormwater-design-coromandel-town.html`
- Modify: `stormwater-design.html` (add Coromandel section)
- Modify: `sitemap.xml`

**Acceptance Criteria:**
- [ ] All 7 files created with Waikato Regional Council references
- [ ] All use NZ-WKO
- [ ] `stormwater-design.html` updated with Coromandel links
- [ ] All 7 added to sitemap.xml

**Verify:** `ls stormwater-design-whangamata.html stormwater-design-tairua.html stormwater-design-thames.html stormwater-design-hahei.html stormwater-design-hot-water-beach.html stormwater-design-waihi-beach.html stormwater-design-coromandel-town.html`

**Steps:**

- [ ] **Step 1: Create all 7 pages using `stormwater-design-kerikeri.html` as template**

Substitution table:

| File | Title | Meta description | geo.placename | Coordinates |
|------|-------|-----------------|---------------|-------------|
| `stormwater-design-whangamata.html` | `Stormwater Design Whangamata \| Stormwater Engineer Coromandel \| Gumboots` | `Stormwater design Whangamata — stormwater management plans, detention & drainage for TCDC & WRC consents. Call 020 4 GUMMYS.` | `Whangamata, Thames-Coromandel District` | `-37.2000;175.8667` |
| `stormwater-design-tairua.html` | `Stormwater Design Tairua \| Stormwater Engineer Tairua \| Gumboots` | `Stormwater design Tairua — stormwater management plans & drainage for TCDC consents. Call 020 4 GUMMYS.` | `Tairua, Thames-Coromandel District` | `-37.0000;175.8500` |
| `stormwater-design-thames.html` | `Stormwater Design Thames \| Stormwater Engineer Thames \| Gumboots` | `Stormwater design Thames — stormwater management plans, detention & drainage for TCDC consents. Call 020 4 GUMMYS.` | `Thames, Thames-Coromandel District` | `-37.1333;175.5333` |
| `stormwater-design-hahei.html` | `Stormwater Design Hahei \| Stormwater Engineer Hahei \| Gumboots` | `Stormwater design Hahei — stormwater management plans & drainage for Hahei coastal properties. Call 020 4 GUMMYS.` | `Hahei, Thames-Coromandel District` | `-36.8667;175.8000` |
| `stormwater-design-hot-water-beach.html` | `Stormwater Design Hot Water Beach \| Stormwater Coromandel \| Gumboots` | `Stormwater design Hot Water Beach — drainage solutions & stormwater management for Coromandel consents. Call 020 4 GUMMYS.` | `Hot Water Beach, Thames-Coromandel District` | `-36.9000;175.8333` |
| `stormwater-design-waihi-beach.html` | `Stormwater Design Waihi Beach \| Stormwater Engineer Waihi Beach \| Gumboots` | `Stormwater design Waihi Beach — stormwater management plans & coastal drainage for TCDC consents. Call 020 4 GUMMYS.` | `Waihi Beach, Thames-Coromandel District` | `-37.3667;175.9333` |
| `stormwater-design-coromandel-town.html` | `Stormwater Design Coromandel Town \| Stormwater Coromandel \| Gumboots` | `Stormwater design Coromandel Town — drainage & stormwater management for rural Coromandel properties. Call 020 4 GUMMYS.` | `Coromandel, Thames-Coromandel District` | `-36.7667;175.5000` |

All H1s: `Stormwater Design [Town] — Coromandel Peninsula`

All pages: replace NRC references with Waikato Regional Council (WRC). Add note: *"Waikato Regional Council processes stormwater discharge consents for activities affecting waterways and coastal areas in the Coromandel. TCDC manages stormwater requirements for building and subdivision consents."*

All pages:
- geo.region: `NZ-WKO`
- Internal links: `coromandel-peninsula.html`, `[town-hub].html`, `stormwater-design.html`

- [ ] **Step 2: Update `stormwater-design.html`** with Coromandel section.

- [ ] **Step 3: Add 7 entries to sitemap.xml.**

- [ ] **Step 4: Verify**

Run: `ls stormwater-design-whangamata.html stormwater-design-tairua.html stormwater-design-thames.html stormwater-design-hahei.html stormwater-design-hot-water-beach.html stormwater-design-waihi-beach.html stormwater-design-coromandel-town.html`

```json:metadata
{"files": ["stormwater-design-whangamata.html", "stormwater-design-tairua.html", "stormwater-design-thames.html", "stormwater-design-hahei.html", "stormwater-design-hot-water-beach.html", "stormwater-design-waihi-beach.html", "stormwater-design-coromandel-town.html", "stormwater-design.html", "sitemap.xml"], "verifyCommand": "ls stormwater-design-whangamata.html stormwater-design-tairua.html stormwater-design-thames.html stormwater-design-hahei.html stormwater-design-hot-water-beach.html stormwater-design-waihi-beach.html stormwater-design-coromandel-town.html", "acceptanceCriteria": ["all 7 files created", "Waikato RC references throughout", "all use NZ-WKO", "stormwater-design.html updated", "all 7 in sitemap.xml"]}
```

---

### Task 15: Coromandel Structural Engineering + Soil Testing Pages (4 pages)

**Goal:** Create structural engineering and soil testing pages for Whangamata and Thames only (the two primary Coromandel towns with full-service treatment).

**Files:**
- Create: `structural-engineering-whangamata.html`
- Create: `structural-engineering-thames.html`
- Create: `soil-testing-whangamata.html`
- Create: `soil-testing-thames.html`
- Modify: `structural-engineering.html` (add Coromandel section)
- Modify: `soil-testing.html` (add Coromandel section)
- Modify: `sitemap.xml`

**Acceptance Criteria:**
- [ ] All 4 files created with NZ-WKO, TCDC references
- [ ] `structural-engineering.html` and `soil-testing.html` updated with Coromandel links
- [ ] All 4 added to sitemap.xml

**Verify:** `ls structural-engineering-whangamata.html structural-engineering-thames.html soil-testing-whangamata.html soil-testing-thames.html`

**Steps:**

- [ ] **Step 1: Create 4 pages using Far North equivalents as templates**

| File | Template | Title | Meta description | geo.placename | Coordinates |
|------|----------|-------|-----------------|---------------|-------------|
| `structural-engineering-whangamata.html` | `structural-engineering-kerikeri.html` | `Structural Engineer Whangamata \| Structural Engineering Coromandel \| Gumboots` | `Structural engineer in Whangamata — retaining walls, foundation design & producer statements for Coromandel builds. Call 020 4 GUMMYS.` | `Whangamata, Thames-Coromandel District` | `-37.2000;175.8667` |
| `structural-engineering-thames.html` | `structural-engineering-kerikeri.html` | `Structural Engineer Thames \| Structural Engineering Thames \| Gumboots` | `Structural engineer in Thames — retaining walls, foundation design & producer statements for Thames & Coromandel. Call 020 4 GUMMYS.` | `Thames, Thames-Coromandel District` | `-37.1333;175.5333` |
| `soil-testing-whangamata.html` | `soil-testing-kerikeri.html` | `Soil Testing Whangamata \| Soil Test Coromandel \| Gumboots` | `Soil testing in Whangamata — residential soil testing, percolation testing & geotechnical investigation for Coromandel. Call 020 4 GUMMYS.` | `Whangamata, Thames-Coromandel District` | `-37.2000;175.8667` |
| `soil-testing-thames.html` | `soil-testing-kerikeri.html` | `Soil Testing Thames \| Soil Test Thames Coromandel \| Gumboots` | `Soil testing in Thames — residential soil testing, percolation testing & geotechnical investigation for Thames. Call 020 4 GUMMYS.` | `Thames, Thames-Coromandel District` | `-37.1333;175.5333` |

All pages: geo.region `NZ-WKO`, replace FNDC → TCDC, internal links to `coromandel-peninsula.html`, town hub, and main service page.

- [ ] **Step 2: Update main service pages** with Coromandel section (Whangamata + Thames links).

- [ ] **Step 3: Add 4 entries to sitemap.xml.**

- [ ] **Step 4: Verify**

Run: `ls structural-engineering-whangamata.html structural-engineering-thames.html soil-testing-whangamata.html soil-testing-thames.html`

```json:metadata
{"files": ["structural-engineering-whangamata.html", "structural-engineering-thames.html", "soil-testing-whangamata.html", "soil-testing-thames.html", "structural-engineering.html", "soil-testing.html", "sitemap.xml"], "verifyCommand": "ls structural-engineering-whangamata.html structural-engineering-thames.html soil-testing-whangamata.html soil-testing-thames.html", "acceptanceCriteria": ["all 4 files created", "all use NZ-WKO and TCDC references", "structural-engineering.html and soil-testing.html updated", "all 4 in sitemap.xml"]}
```

---

### Task 16: Update Existing Main Service Pages + Homepage

**Goal:** Add Coromandel sections to remaining main service pages and update the homepage service area, so authority flows from established pages to the new Coromandel pages.

**Files:**
- Modify: `index.html`
- Modify: `geotechnical-engineering-northland.html` (note: Coromandel pages use `geotechnical-engineering.html`, but the northland hub should mention Coromandel expansion)
- Modify: `retaining-wall-design.html` (add Coromandel mention)
- Modify: `erosion-control-northland.html` (add Coromandel note)

**Acceptance Criteria:**
- [ ] `index.html` has Coromandel Peninsula in service areas with link to `coromandel-peninsula.html`
- [ ] `geotechnical-engineering-northland.html` mentions Coromandel expansion with link
- [ ] No regressions to existing content on any modified pages

**Verify:** `grep "coromandel-peninsula" index.html geotechnical-engineering-northland.html`

**Steps:**

- [ ] **Step 1: Update `index.html`**

Read the current `index.html`. Find the service areas / regions section. Add Coromandel Peninsula to the areas list. Add a link to `coromandel-peninsula.html`. This should appear as an equal entry alongside Far North / Bay of Islands / Northland.

- [ ] **Step 2: Update `geotechnical-engineering-northland.html`**

Find the locations section or the intro text. Add a sentence/paragraph: *"Gumboots has also expanded to the Coromandel Peninsula, with a registered office in Whangamata. View our <a href="coromandel-peninsula.html">Coromandel Peninsula engineering services</a> page."*

- [ ] **Step 3: Update `retaining-wall-design.html`**

Add Whangamata and Thames to any locations list. Add link to `coromandel-peninsula.html`.

- [ ] **Step 4: Update `erosion-control-northland.html`**

Add a note that Gumboots also provides erosion control services on the Coromandel Peninsula. Link to `coromandel-peninsula.html`.

- [ ] **Step 5: Verify**

Run: `grep "coromandel-peninsula" index.html geotechnical-engineering-northland.html`
Expected: each file shows one or more matches.

```json:metadata
{"files": ["index.html", "geotechnical-engineering-northland.html", "retaining-wall-design.html", "erosion-control-northland.html"], "verifyCommand": "grep \"coromandel-peninsula\" index.html geotechnical-engineering-northland.html", "acceptanceCriteria": ["index.html has Coromandel in service areas with link", "geotechnical-engineering-northland.html mentions Coromandel expansion", "no content regressions on modified pages"]}
```

---

### Task 17: Final Sitemap Audit + GSC Submission Notes

**Goal:** Verify `sitemap.xml` contains all pages created in Tasks 4–16, remove any remaining redirected pages, update all `<lastmod>` dates, and prepare GSC submission checklist.

**Files:**
- Modify: `sitemap.xml`

**Acceptance Criteria:**
- [ ] Sitemap contains all 48 new pages (4 planning, 1 regional hub, 7 town hubs, 36 service×location)
- [ ] No redirected pages remain in sitemap (geotechnical-kerikeri, soil-testing-paihia, soil-testing-coopers-beach, geotechnical-engineering-coopers-beach)
- [ ] All new pages have `lastmod` of `2026-06-17`
- [ ] Sitemap total count: ~116 entries (current ~68, minus 4 redirected, plus 48 new = ~112)

**Verify:** `grep -c "<loc>" sitemap.xml` → should return 110–116

**Steps:**

- [ ] **Step 1: Audit sitemap for completeness**

Check that all of the following are present in sitemap.xml (new pages from this implementation):

Far North new pages (4):
- `subdivision-consultant-northland.html`
- `planning-consultant-kerikeri.html`
- `planning-consultant-paihia.html`
- `resource-consent-northland.html`

Coromandel hub (1):
- `coromandel-peninsula.html`

Coromandel town hubs (7):
- `whangamata.html`, `tairua.html`, `thames.html`, `hahei.html`, `hot-water-beach.html`, `waihi-beach.html`, `coromandel-town.html`

Coromandel geotechnical (7): all 7 `geotechnical-engineering-[town].html` files

Coromandel civil (7): all 7 `civil-engineering-[town].html` files

Coromandel TP58 (7): all 7 `tp58-wastewater-[town].html` files

Coromandel stormwater (7): all 7 `stormwater-design-[town].html` files

Coromandel structural + soil (4): `structural-engineering-whangamata.html`, `structural-engineering-thames.html`, `soil-testing-whangamata.html`, `soil-testing-thames.html`

For any missing, add the entry now.

- [ ] **Step 2: Remove redirected page entries if still present**

Ensure these are not in the sitemap:
- `geotechnical-kerikeri.html`
- `geotechnical-engineering-coopers-beach.html`
- `soil-testing-paihia.html`
- `soil-testing-coopers-beach.html`

- [ ] **Step 3: Verify count**

Run: `grep -c "<loc>" sitemap.xml`
Expected: 110–116 (depending on any pages already added in previous tasks)

- [ ] **Step 4: GSC submission checklist**

After sitemap is verified, perform these actions in Google Search Console (manual, cannot be automated):

1. Go to GSC → Sitemaps
2. Submit or resubmit `https://www.gumbootsconsulting.co.nz/sitemap.xml`
3. Use URL Inspection → Request Indexing for the 9 highest-priority new/updated pages:
   - `erosion-control-northland.html` (biggest CTR win, 1,212 impressions)
   - `civil-engineering-bay-of-islands.html` (880 impressions)
   - `subdivision-consultant-northland.html` (new page targeting high-impression cluster)
   - `resource-consent-northland.html`
   - `coromandel-peninsula.html`
   - `whangamata.html`
   - `kerikeri.html` (after rewrite)
   - `engineering-consulting.html` (after content improvement)
   - `subdivision-engineering-northland.html` (after content improvement)

```json:metadata
{"files": ["sitemap.xml"], "verifyCommand": "grep -c \"<loc>\" sitemap.xml", "acceptanceCriteria": ["sitemap count between 110-116", "no redirected pages in sitemap", "all 48 new pages present", "GSC submission checklist documented"]}
```

---

## Page Count Summary

| Phase | Task | Pages |
|-------|------|-------|
| 1A Technical | Task 1 | 4 redirected, sitemap cleaned |
| 1B CTR Rewrites | Tasks 2–3 | 9 updated |
| 1C New Planning Pages | Tasks 4–6 | 4 created |
| 1D Content Improvements | Tasks 7–9 | 5 updated |
| 2 Coromandel Hub + Towns | Task 10 | 8 created |
| 2 Geotechnical | Task 11 | 7 created |
| 2 Civil | Task 12 | 7 created |
| 2 TP58 | Task 13 | 7 created |
| 2 Stormwater | Task 14 | 7 created |
| 2 Structural + Soil | Task 15 | 4 created |
| 2 Link updates | Task 16 | 4 updated |
| Sitemap final | Task 17 | sitemap only |
| **Total new pages** | | **44** |
| **Total updated pages** | | **18** |

---

## Quality Checklist — Every New Page

- [ ] Compact keyword in first 30 chars of title
- [ ] Location in title
- [ ] Meta description under 160 chars with "020 4 GUMMYS"
- [ ] H1 = compact keyword + location
- [ ] First paragraph includes compact keyword
- [ ] Coromandel pages: `NZ-WKO` geo.region + `Thames-Coromandel District` in placename
- [ ] Far North pages: `NZ-NTL` geo.region + `Far North District` in placename
- [ ] Correct council: TCDC + Waikato RC (Coromandel) or FNDC + Northland RC (Far North)
- [ ] Canonical tag pointing to own www URL
- [ ] FAQPage schema (4 questions minimum)
- [ ] LocalBusiness schema
- [ ] 3–5 internal links
- [ ] Added to sitemap.xml
