# Multi-Agent Implementation — Gumboots BOFU Plan

**Date:** 2026-11-02
**Implements:** `2026-11-02-bofu-compact-keyword-plan.md`
**Setup:** Haiku agents edit pages. Opus (the main session) writes briefs, reviews every change, and is the only one who commits and deploys.

## Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Manager | Opus (main session) | Writes briefs with exact copy decisions · assigns files · reviews diffs · runs checks · edits shared files · commits and pushes (pushing deploys) · records results | Hands shared files to agents |
| Implementer | Haiku (Agent tool, `model: "haiku"`) | Edits only its assigned pages · copies structure from a named template page · marks unknown facts as TODOs · reports back | Runs git, pushes, deploys, edits shared files, invents facts |

### Shared files (manager only)

`.htaccess` · `sitemap.xml` · `css/site-fixes.css` · `css/icons.css` · `js/site-fixes.js` · nav and footer changes that span many pages · `.github/`

## How a wave runs

1. **Brief.** Manager writes one brief per agent (template below), with a disjoint file list
2. **Launch.** Agents in the same wave run in parallel in this checkout. No two agents share a file, so no worktrees are needed.
3. **Gate.** Manager runs the review gate on each agent's diff
4. **Fix loop.** On failure, manager sends specific fixes back to the same agent (SendMessage), at most two rounds, then fixes it directly
5. **Shared edits.** Manager does the redirects, sitemap, hub links and nav
6. **Ship.** Manager commits the wave, pushes (deploys), checks the live pages and records the change for the GSC follow-up

## Waves

### Wave A — no inputs needed

| Agent | Files | Work |
|---|---|---|
| A1 | `geotechnical-report`, `wastewater-design`, `stormwater-design-kerikeri`, `geotechnical-engineering-whangarei`, `structural-engineering-whangarei`, `civil-engineering-kerikeri`, `geotechnical-engineering` | Titles, meta descriptions and H1s from exact strings in the brief (plan 1.1, 1.2, 1.5, 1.6, geotech hub retitle) · "drainage design" intro on Kerikeri stormwater · one resourceconsent.co.nz link on `geotechnical-report` |
| A2 | `subdivision-engineering-northland`, `stormwater-design`, `bay-of-islands`, `coopers-beach`, `dargaville`, `kerikeri`, `mangonui`, `paihia`, `whangarei` | Point the 18 internal consent links at resourceconsent.co.nz (plan 2.1) · one contextual link each on subdivision and stormwater (2.2) · link `kerikeri` → `stormwater-design-kerikeri` (1.5) |
| Manager | `sitemap.xml` | Remove the three already-redirected URLs |

### Wave B — after GSC re-auth confirms query→page pairs

| Agent | Files | Work |
|---|---|---|
| B1 | new `pre-purchase-site-assessment-northland` | Build from the `geotechnical-report` template using the manager's content brief (plan 3.2) |
| B2 | `wastewater-design` | Merge unique content from `tp58-wastewater-northland` |
| B3 | `stormwater-design` | Merge unique content from `stormwater-design-northland` |
| B4 | `geotechnical-engineering-coromandel`, `tp58-wastewater-coromandel`, `geotechnical-engineering-northland` | Fold each FAQ page into its service page as an FAQ section |
| Manager | `.htaccess`, `sitemap.xml`, nav/hubs | 301s for plan 2.1 and 2.3 · new page into sitemap and hubs · update links to removed URLs |

### Wave C — after Paul's inputs

| Agent | Files | Needs |
|---|---|---|
| C1 | `erosion-control-northland` | ESCP yes/no, SERP check, ESCP price |
| C2 | `retaining-wall-design` | Wall photos (manager resizes and adds them to `img/`) |
| C3 | `soil-testing`, `geotechnical-report` (price table) | Prices |

### Wave D — new pages, one or two at a time

| Agent | File | Brief source |
|---|---|---|
| D1 | `subdivision-engineering-whangarei` | Plan 3.1, after the "subdivision consultants" decision |
| D2 | `whitianga` | Plan 3.3, after confirming Gumboots works there |
| D3 | `slope-stability-northland` | Plan 3.4 |
| D4 | `foundation-design-northland` | Plan 3.5 (optional) |

Each new page gets a GSC check 4–6 weeks after launch, and a retitle toward the queries it actually shows for.

## Brief template

Every agent brief has these sections. The manager fills in everything above "Rules".

```
GOAL         One sentence: the search intent this page must win.
FILES        Exact list you may edit. Touch nothing else.
TEMPLATE     Existing page to copy structure, classes and head from.
EXACT TEXT   Title, meta description, H1, link anchors and URLs. Use verbatim.
OUTLINE      Sections in order, with the facts each may state.
FACTS        Everything you may claim (prices, councils, standards, turnaround).
             Anything not listed: write <!-- TODO(Paul): ... --> instead.
RULES
- No git commands. No pushing. No new files unless FILES lists one.
- Keep the head: canonical (update for new pages), css/site-fixes.css, css/icons.css,
  js/site-fixes.js, skip link, <main id="main">, footer.
- One h1. No skipped heading levels. Set visual size with Bootstrap h4/h5/h6 classes.
- Icons: only classes defined in css/icons.css. Images: only files in img/, with the
  approved alt text from the manager's list.
- Colours: existing page tokens only (--g-*). No new hex values.
- No "resource consent" or "planning" in title, H1 or meta description.
- NZ English. Plain, specific copy. No filler, no keyword stuffing.
- Ignore design-hook findings marked "attribution unknown"; report any new ones.
DONE WHEN    Checklist the manager will verify.
REPORT       Files changed · TODOs left · anything you were unsure about.
```

## Review gate

The manager runs every check on every agent diff before committing.

| Check | How |
|---|---|
| Scope | `git diff --name-only` ⊆ assigned files |
| HTML integrity | Parse each changed page; no unclosed tags; head assets present |
| Title and meta | ≤60 chars; contains the target phrase; matches the brief verbatim |
| Consent hand-off | No consent/planning terms in title, H1 or meta; links to resourceconsent.co.nz go to the brief's URLs |
| Headings | One h1; no skipped levels |
| Links | Every internal href resolves; external links limited to the brief's list |
| Icons and images | Icon classes exist in `icons.css`; alt text from the approved list |
| Contrast and layout | Existing browser scans: text at rest and on hover, at 390px and 1280px; no sideways scroll |
| Facts | Manager reads the copy against the brief's FACTS list; every unlisted claim becomes a TODO or is cut |
| Visual | Screenshot of each changed page at phone and desktop width |

## Cost and fit

- Haiku is fast and cheap for drafting pages and moving content between pages (waves B and D)
- For one-line title swaps (wave A1), writing the brief and reviewing the result costs about as much as making the edit directly. The manager can absorb A1 if speed matters more than delegation.
- Review is the expensive part, and it's where errors get caught: invented prices, wrong council rules, broken markup

## Risks

| Risk | Guard |
|---|---|
| Invented facts (prices, Building Code rules, project claims) | FACTS list in the brief; TODO markers; manager fact-read |
| Two agents editing one file | Disjoint file lists per wave; shared files are manager-only |
| Accidental deploy | Agents never run git; only the manager pushes |
| Broken page structure | Template page; HTML integrity and visual checks |
| Consent targeting creeping back | Explicit rule; gate check on title, H1 and meta |
| Single-quoted attributes on Coromandel pages | Gate scripts match both quote styles |
