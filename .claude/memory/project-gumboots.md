---
name: project-gumboots
description: "Gumboots Consulting Engineers website — static HTML site, SEO improvements"
metadata: 
  node_type: memory
  type: project
  originSessionId: 7476bf4f-f30a-47fb-b2ce-1bb4f5da90b0
---

Static HTML website for Gumboots Consulting Engineers (gumbootsconsulting.co.nz). Geotechnical/civil engineering firm in Northland NZ.

**Location:** `C:\Users\pjwri\Desktop\Website\Gumboots`

**Stack:** Static HTML, Bootstrap 5, inline `<style>` blocks per page, no build system. Files uploaded directly to server.

**Site structure:** ~80 pages — 7 service hub pages, 7 location hub pages, ~60 service+location combo pages (e.g. stormwater-design-kerikeri.html).

**Why:** No git repo. CSS variables differ between page types: service hub pages use `--gumboots-dark-green` etc.; location hub pages use `--g-dark`, `--g-mid`, `--g-accent`, `--g-border`, `--g-surface`.

**SEO work completed 2026-05-22:**
- Added "Areas We Serve" internal link sections to 7 service hub pages → links to all location variants
- Added "Our Services in [Location]" sections to 7 location hub pages → links to all service+location combos
- Rewrote meta title/description for 12 high-impression pages (Priority A: positions 5-15; Priority B: positions 15-25)
- Updated sitemap.xml lastmod for all 21 modified pages
- Fixed homepage logo sizing (100px height, width:auto) and corrected text "Whangarei to the top of the Far North"

**Plans/specs saved at:** `docs/superpowers/plans/` and `docs/superpowers/specs/`

**Next phase:** Content-based SEO — new pages, keyword targeting, internal linking expansion. Spec at `docs/superpowers/specs/2026-05-22-seo-technical-ctr-design.md` covers what was deferred.

**How to apply:** When working on this site, check CSS variable names match the page type before editing styles.
