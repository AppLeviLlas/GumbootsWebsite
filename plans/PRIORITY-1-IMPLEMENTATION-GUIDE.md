# Priority 1 Implementation Guide
## Fix TP58 CTR Problem - wastewater-design.html

**Current Performance:** 157 impressions, position 9.62, 1 click (0.64% CTR)  
**Target:** 5% CTR = 8 clicks/month  
**Expected Impact:** +7 clicks/month  
**Time Required:** 30 minutes

---

## Changes Required

### 1. Update Title Tag (Line 9)

**CURRENT:**
```html
<title>TP58 Wastewater Design Services | Gumboots Consulting Engineers | Kerikeri, Paihia, Bay of Islands</title>
```

**CHANGE TO:**
```html
<title>TP58 Kerikeri | TP58 Wastewater Design Northland | TP58 Engineer</title>
```

**Why:** 
- "TP58" in first 5 characters (high-intent compact keyword)
- "Kerikeri" adds local specificity
- Removes redundant "Services" and verbose brand name
- Under 60 characters for full display in search results

---

### 2. Update Meta Title (Line 10-11)

**CURRENT:**
```html
<meta name="title"
    content="TP58 Wastewater Design Services | Gumboots Consulting Engineers | Kerikeri, Paihia, Bay of Islands" />
```

**CHANGE TO:**
```html
<meta name="title"
    content="TP58 Kerikeri | TP58 Wastewater Design Northland | TP58 Engineer" />
```

---

### 3. Update Meta Description (Line 12-13)

**CURRENT:**
```html
<meta name="description"
    content="Expert TP58 wastewater design services in Kerikeri, Paihia, and Bay of Islands. Onsite wastewater systems, septic system design, and land application systems for the Far North District." />
```

**CHANGE TO:**
```html
<meta name="description"
    content="TP58 wastewater design in Kerikeri, Paihia & Northland. Expert TP58 engineer for septic systems, onsite wastewater. TP58 reports for council consent. Call 020 4 GUMMYS." />
```

**Why:**
- "TP58" in first 5 characters
- More compact language
- Clear call-to-action with phone number
- 157 characters (under 160 limit)
- Emphasizes "TP58 engineer" (professional credential)

---

### 4. Update Open Graph Title (Line 36)

**CURRENT:**
```html
<meta property="og:title" content="TP58 Wastewater Design Services | Gumboots Consulting Engineers" />
```

**CHANGE TO:**
```html
<meta property="og:title" content="TP58 Kerikeri | TP58 Wastewater Design Northland | TP58 Engineer" />
```

---

### 5. Update Open Graph Description (Line 37-38)

**CURRENT:**
```html
<meta property="og:description"
    content="Expert TP58 wastewater design services in Kerikeri, Paihia, and Bay of Islands. Onsite wastewater systems and septic system design." />
```

**CHANGE TO:**
```html
<meta property="og:description"
    content="TP58 wastewater design in Kerikeri, Paihia & Northland. Expert TP58 engineer for septic systems, onsite wastewater. Call 020 4 GUMMYS." />
```

---

### 6. Update Twitter Title (Line 46)

**CURRENT:**
```html
<meta property="twitter:title" content="TP58 Wastewater Design Services | Gumboots Consulting Engineers" />
```

**CHANGE TO:**
```html
<meta property="twitter:title" content="TP58 Kerikeri | TP58 Wastewater Design Northland | TP58 Engineer" />
```

---

### 7. Update Twitter Description (Line 47-48)

**CURRENT:**
```html
<meta property="twitter:description"
    content="Expert TP58 wastewater design services in Kerikeri, Paihia, and Bay of Islands. Onsite wastewater systems and septic system design." />
```

**CHANGE TO:**
```html
<meta property="twitter:description"
    content="TP58 wastewater design in Kerikeri, Paihia & Northland. Expert TP58 engineer for septic systems, onsite wastewater. Call 020 4 GUMMYS." />
```

---

### 8. Find and Update H1 Tag

You'll need to find the H1 tag in the body section (likely around line 200-300).

**CURRENT (likely):**
```html
<h1>TP58 Wastewater Design Services</h1>
```

**CHANGE TO:**
```html
<h1>TP58 Wastewater Design - Kerikeri, Paihia & Northland</h1>
```

**Why:**
- Adds location specificity
- Removes redundant "Services"
- More compelling for local searchers

---

### 9. Update First Paragraph

Find the first paragraph after the H1 (likely around line 210-220).

**ADD "TP58 Kerikeri" to the first sentence.**

**Example:**
```html
<p>Looking for <strong>TP58 wastewater design in Kerikeri</strong>? Gumboots Consulting Engineers provides expert <strong>TP58 engineering</strong> services throughout Kerikeri, Paihia, Bay of Islands, and the Far North District.</p>
```

---

### 10. Add or Update First H2

Find the first H2 heading (likely around line 220-240).

**CHANGE TO:**
```html
<h2>TP58 Wastewater Design Services in Kerikeri & Northland</h2>
```

Or if you want to be more specific:
```html
<h2>Expert TP58 Engineer - Kerikeri, Paihia & Bay of Islands</h2>
```

---

## Implementation Steps

### Step 1: Make the Changes
1. Open `wastewater-design.html` in your code editor
2. Make all 10 changes listed above
3. Save the file

### Step 2: Verify Changes
1. Open the file in a browser locally
2. Check that:
   - Title appears correctly in browser tab
   - H1 displays correctly on page
   - First paragraph includes "TP58 Kerikeri"

### Step 3: Upload to Server
1. Upload the updated file to your web server
2. Clear any caching (if applicable)
3. Visit the live page to confirm changes

### Step 4: Submit to Google Search Console
1. Go to Google Search Console
2. Use URL Inspection tool
3. Enter: `https://www.gumbootsconsulting.co.nz/wastewater-design.html`
4. Click "Request Indexing"
5. Wait for confirmation

---

## Expected Timeline

| Timeframe | Expected Result |
|-----------|----------------|
| **Immediately** | Changes live on website |
| **1-3 days** | Google re-crawls and re-indexes page |
| **3-7 days** | New title/meta appears in search results |
| **7-14 days** | CTR starts improving |
| **14-30 days** | Full impact: 5% CTR, 8 clicks/month |

---

## How to Verify Success

### Week 1 (After Implementation):
- [ ] Check Google Search Console → Performance
- [ ] Filter by page: wastewater-design.html
- [ ] Look for "TP58" query
- [ ] Check if CTR has increased from 0.64%

### Week 2:
- [ ] CTR should be 2-3%
- [ ] Clicks should be 3-5

### Week 3-4:
- [ ] CTR should be 4-5%
- [ ] Clicks should be 6-8

---

## Troubleshooting

### If CTR doesn't improve after 2 weeks:

**Check:**
1. Are changes live on the website?
2. Has Google re-indexed the page? (Check GSC)
3. Is the new title showing in search results? (Search "TP58" and look for your listing)

**If new title isn't showing:**
- Request indexing again in GSC
- Check robots.txt isn't blocking the page
- Verify canonical URL is correct

**If title is showing but CTR still low:**
- Consider adding pricing info to meta description
- Add year (2026) for freshness
- Test alternative meta description

---

## Alternative Meta Descriptions to Test

If the primary one doesn't work, try these:

**Option 2 (Price Focus):**
```
TP58 wastewater design Kerikeri from $X. Expert TP58 engineer for septic systems, onsite wastewater. Fast council-approved TP58 reports. Call 020 4 GUMMYS.
```

**Option 3 (Urgency Focus):**
```
Need TP58 wastewater design in Kerikeri? Local TP58 engineer - fast turnaround, council-approved reports. Serving Kerikeri, Paihia & Northland. Call 020 4 GUMMYS.
```

**Option 4 (Authority Focus):**
```
TP58 wastewater design Kerikeri - Engineering NZ registered TP58 specialist. 100+ TP58 reports completed. Serving Northland since 2018. Call 020 4 GUMMYS.
```

---

## Before & After Comparison

### BEFORE:
- **Title:** TP58 Wastewater Design Services | Gumboots Consulting Engineers | Kerikeri, Paihia, Bay of Islands
- **Meta:** Expert TP58 wastewater design services in Kerikeri, Paihia, and Bay of Islands. Onsite wastewater systems, septic system design, and land application systems for the Far North District.
- **Performance:** 157 impressions, 1 click, 0.64% CTR

### AFTER:
- **Title:** TP58 Kerikeri | TP58 Wastewater Design Northland | TP58 Engineer
- **Meta:** TP58 wastewater design in Kerikeri, Paihia & Northland. Expert TP58 engineer for septic systems, onsite wastewater. TP58 reports for council consent. Call 020 4 GUMMYS.
- **Expected:** 157 impressions, 8 clicks, 5% CTR

---

## Why This Works

### 1. Compact Keywords in First 30 Characters
- "TP58 Kerikeri" appears immediately
- Searchers see their exact query in the title
- Higher relevance = higher CTR

### 2. Location Specificity
- "Kerikeri" signals local service
- Reduces bounce rate (people know you serve their area)
- Better conversion (local intent)

### 3. Professional Credential
- "TP58 Engineer" establishes expertise
- More compelling than generic "services"
- Builds trust

### 4. Clear Call-to-Action
- Phone number in meta description
- "Call 020 4 GUMMYS" is memorable
- Reduces friction (can call directly from search results)

### 5. Removes Fluff
- No "Expert" (implied by "Engineer")
- No "Services" (redundant)
- No verbose brand name in prime position
- Every word earns its place

---

## Next Steps After Priority 1

Once you've completed this and seen results (7-14 days), move to:

**Priority 2:** Fix Kerikeri Page CTR (20 minutes)
**Priority 3:** Enhance Paihia Page (20 minutes)
**Priority 4:** Fix Duplicate URLs (1 hour)
**Priority 5:** Optimize Structural Page (15 minutes)

---

## Questions?

If you need help with any step:
1. Refer to the full prioritized to-do list
2. Check the compact keyword formulas in quick-reference.md
3. Review before/after examples in the framework document

**This single change will add 7 clicks/month - that's potentially 1-2 new leads!** 🎯

---

## Switch to Code Mode

To actually make these changes, you should:
1. Switch to Code mode
2. Ask: "Please implement Priority 1 from the implementation guide"
3. Code mode will make all the changes for you

Or you can make the changes manually using this guide.
