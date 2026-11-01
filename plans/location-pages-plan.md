# Location Pages Plan

## Goal
Create targeted landing pages for "Geotechnical Engineering" and "TP58 Wastewater Design" services in key Northland locations to capture local search traffic.

## Target Locations
Based on `Queries.csv` and user feedback:
1.  **Kerikeri** (High intent: "drainage infrastructure kerikeri", "earthworks kerikeri")
2.  **Paihia** (High intent: "retaining walls paihia")
3.  **Bay of Islands** (Broader regional term)
4.  **Northland** (Regional catch-all, "northland geotechnical specialists")

## URL Structure
We will create flat URLs to keep them close to the root domain, as they are key service pages.

### Geotechnical Engineering
*   `geotechnical-engineering-kerikeri.html`
*   `geotechnical-engineering-paihia.html`
*   `geotechnical-engineering-bay-of-islands.html`
*   `geotechnical-engineering-northland.html`

### TP58 Wastewater Design
*   `tp58-wastewater-kerikeri.html`
*   `tp58-wastewater-paihia.html`
*   `tp58-wastewater-bay-of-islands.html`
*   `tp58-wastewater-northland.html`

## Content Strategy (Avoiding Duplication)
To avoid "duplicate content" penalties, each page must have unique elements:

1.  **Local Context:** Mention specific local geology (e.g., Kerikeri's volcanic soils vs. coastal Paihia conditions).
2.  **Local Regulations:** Reference specific Far North District Council (FNDC) or Northland Regional Council (NRC) nuances if applicable to that specific area (though they largely overlap).
3.  **Projects:** If possible, feature projects specifically from that location.
4.  **H1 & Meta Data:** unique titles and descriptions.

## Implementation Steps

### 1. Create Geotechnical Pages
*   **Template:** Use `geotechnical-engineering.html` as the base.
*   **Modifications:**
    *   **Title/Meta:** "Geotechnical Engineering [Location] | ..."
    *   **H1:** "Geotechnical Engineering Services in [Location]"
    *   **Intro Text:** Rewrite to mention [Location] specific challenges (e.g., "Building on Kerikeri's volcanic soils...").
    *   **Images:** Select images that look like the location if possible (or keep generic high-quality ones).
    *   **CTA:** "Get your [Location] Geotech Report".

### 2. Create TP58 Pages
*   **Template:** Use `wastewater-design.html` as the base.
*   **Modifications:**
    *   **Title/Meta:** "TP58 Wastewater Design [Location] | ..."
    *   **H1:** "TP58 Wastewater Design in [Location]"
    *   **Intro Text:** Focus on [Location] specific wastewater needs (e.g., "Septic systems for Paihia's coastal properties...").
    *   **CTA:** "Book your [Location] Site Assessment".

### 3. Navigation & Internal Linking
*   **Footer:** Add a "Areas We Serve" section or columns for "Geotech [Location]" and "TP58 [Location]" to the footer to ensure crawlability.
*   **Service Pages:** Add a "Serving [Location 1], [Location 2]..." section with links to the new pages on the main `geotechnical-engineering.html` and `wastewater-design.html` pages.
*   **Sitemap:** Update `sitemap.xml` with the 8 new URLs.

## Verification
*   Check all internal links.
*   Verify unique titles and meta descriptions.
*   Ensure mobile responsiveness (using existing Bootstrap classes).
