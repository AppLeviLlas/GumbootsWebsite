# Priority 4: Fix Duplicate URL Issue
## Consolidate www vs non-www Versions

**Issue:** Your website is accessible via both:
- https://gumbootsconsulting.co.nz (43 clicks)
- https://www.gumbootsconsulting.co.nz (10 clicks)

This splits your SEO authority and confuses search engines.

**Solution:** Choose one canonical version and redirect the other.

**Recommendation:** Use **www.gumbootsconsulting.co.nz** as your canonical version.

---

## Why This Matters

### Current Problem:
- **Authority Split:** Google treats these as two separate websites
- **Link Equity Dilution:** Backlinks split between both versions
- **Duplicate Content:** Same content on two URLs
- **Confused Analytics:** Traffic split across two properties

### After Fix:
- ✅ All authority consolidated to one URL
- ✅ All backlinks count toward single domain
- ✅ No duplicate content issues
- ✅ Cleaner analytics and tracking
- ✅ Better rankings across all pages

---

## Implementation Methods

### Method 1: .htaccess (Apache Server) - RECOMMENDED

If your server uses Apache (most common), add this to your `.htaccess` file:

```apache
# Redirect non-www to www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^gumbootsconsulting\.co\.nz [NC]
RewriteRule ^(.*)$ https://www.gumbootsconsulting.co.nz/$1 [L,R=301]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://www.gumbootsconsulting.co.nz/$1 [L,R=301]
```

**What this does:**
1. Redirects `gumbootsconsulting.co.nz` → `www.gumbootsconsulting.co.nz`
2. Forces HTTPS (secure connection)
3. Uses 301 redirect (permanent, passes SEO value)

---

### Method 2: Nginx Server

If your server uses Nginx, add this to your server configuration:

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name gumbootsconsulting.co.nz;
    return 301 https://www.gumbootsconsulting.co.nz$request_uri;
}

server {
    listen 443 ssl;
    server_name www.gumbootsconsulting.co.nz;
    
    # Your existing configuration here
}
```

---

### Method 3: cPanel Redirect

If you use cPanel hosting:

1. Log into cPanel
2. Go to "Domains" section
3. Click "Redirects"
4. Set up redirect:
   - Type: Permanent (301)
   - From: gumbootsconsulting.co.nz
   - To: https://www.gumbootsconsulting.co.nz
   - Redirect with or without www: Only redirect with www
   - Wild Card Redirect: Yes

---

### Method 4: Cloudflare (If Using)

If you use Cloudflare:

1. Log into Cloudflare dashboard
2. Go to "Rules" → "Page Rules"
3. Create new page rule:
   - URL: `http://gumbootsconsulting.co.nz/*`
   - Setting: Forwarding URL
   - Status Code: 301 - Permanent Redirect
   - Destination: `https://www.gumbootsconsulting.co.nz/$1`
4. Save and deploy

---

## Step-by-Step Implementation

### Step 1: Backup Current Configuration
Before making changes:
- [ ] Backup your `.htaccess` file (if it exists)
- [ ] Backup your server configuration
- [ ] Note your current hosting setup

### Step 2: Implement Redirect
Choose the method that matches your server:
- [ ] Add redirect code to `.htaccess` OR
- [ ] Configure redirect in cPanel OR
- [ ] Set up redirect in Cloudflare OR
- [ ] Contact your hosting provider for help

### Step 3: Test the Redirect
After implementation, test:

**Test 1: Non-www to www**
- [ ] Visit: http://gumbootsconsulting.co.nz
- [ ] Should redirect to: https://www.gumbootsconsulting.co.nz
- [ ] Check browser address bar confirms www version

**Test 2: HTTP to HTTPS**
- [ ] Visit: http://www.gumbootsconsulting.co.nz
- [ ] Should redirect to: https://www.gumbootsconsulting.co.nz
- [ ] Check for padlock icon in browser

**Test 3: Deep Links**
- [ ] Visit: http://gumbootsconsulting.co.nz/wastewater-design.html
- [ ] Should redirect to: https://www.gumbootsconsulting.co.nz/wastewater-design.html
- [ ] Verify page loads correctly

### Step 4: Update Internal Links
Update all internal links to use www version:
- [ ] Check homepage links
- [ ] Check navigation menu links
- [ ] Check footer links
- [ ] Check sitemap.xml (see Step 5)

### Step 5: Update Sitemap.xml
- [ ] Open sitemap.xml
- [ ] Find and replace all instances of:
  - `https://gumbootsconsulting.co.nz/` 
  - WITH: `https://www.gumbootsconsulting.co.nz/`
- [ ] Save file
- [ ] Upload to server

### Step 6: Update Google Search Console
- [ ] Log into Google Search Console
- [ ] Add www.gumbootsconsulting.co.nz as a property (if not already added)
- [ ] Set www version as preferred domain
- [ ] Submit updated sitemap to www property
- [ ] Keep monitoring both properties for 30 days during transition

### Step 7: Update Google Business Profile
- [ ] Log into Google Business Profile
- [ ] Update website URL to: https://www.gumbootsconsulting.co.nz
- [ ] Save changes

### Step 8: Update Social Media Profiles
- [ ] Facebook: Update website URL
- [ ] LinkedIn: Update company website
- [ ] Any other social profiles

### Step 9: Update Canonical Tags (Already Done!)
Your HTML files already have canonical tags. Verify they use www:
- [ ] Check that canonical tags point to www version
- [ ] Example: `<link rel="canonical" href="https://www.gumbootsconsulting.co.nz/..." />`

---

## Verification Checklist

### Immediate Verification (Day 1):
- [ ] Non-www redirects to www
- [ ] HTTP redirects to HTTPS
- [ ] All pages redirect correctly
- [ ] No redirect loops
- [ ] Website loads normally
- [ ] No broken links

### Week 1 Verification:
- [ ] Check Google Search Console for crawl errors
- [ ] Verify redirect is working in GSC Coverage report
- [ ] Monitor traffic doesn't drop
- [ ] Check that www version is being indexed

### Week 2-4 Verification:
- [ ] Non-www URLs being removed from Google index
- [ ] www URLs gaining impressions
- [ ] Overall traffic stable or increasing
- [ ] No duplicate content warnings in GSC

---

## Expected Timeline

| Timeframe | What Happens |
|-----------|--------------|
| **Day 1** | Redirect implemented and working |
| **Day 2-7** | Google starts recognizing redirect |
| **Week 2-3** | Non-www URLs begin dropping from index |
| **Week 4-6** | Authority fully consolidated to www version |
| **Month 2-3** | Rankings improve across all pages |

---

## Troubleshooting

### Problem: Redirect Loop
**Symptom:** Page keeps redirecting endlessly
**Solution:** Check your redirect rules don't conflict. Remove any duplicate redirect rules.

### Problem: Some Pages Don't Redirect
**Symptom:** Homepage redirects but other pages don't
**Solution:** Ensure wildcard redirect is enabled. Check `.htaccess` has `RewriteRule ^(.*)$` pattern.

### Problem: HTTPS Not Working
**Symptom:** Redirect works but shows "Not Secure" warning
**Solution:** Ensure SSL certificate is installed. Contact hosting provider.

### Problem: Website Down After Changes
**Symptom:** Website shows error after implementing redirect
**Solution:** 
1. Restore backup of `.htaccess` or configuration
2. Check for syntax errors in redirect code
3. Contact hosting provider for assistance

---

## Alternative: If You Can't Implement Redirect

If you can't implement server-side redirect, you can:

### Option A: Contact Hosting Provider
- Call or email your hosting provider
- Ask them to: "Set up a 301 redirect from non-www to www version"
- They should be able to do this for you

### Option B: Use Canonical Tags Only (Not Ideal)
Your pages already have canonical tags pointing to www version. This helps but doesn't fully solve the issue. Google will eventually consolidate, but it takes longer.

---

## Impact of This Fix

### SEO Benefits:
- ✅ **Authority Consolidation:** All link equity goes to one URL
- ✅ **Better Rankings:** Stronger domain authority = better positions
- ✅ **No Duplicate Content:** Eliminates duplicate content penalty risk
- ✅ **Cleaner Analytics:** All traffic tracked under one property

### Expected Results:
- **Week 1-2:** No visible change (transition period)
- **Week 3-4:** Rankings start improving
- **Month 2-3:** 5-10% traffic increase from consolidated authority
- **Long-term:** Stronger foundation for all future SEO efforts

---

## Quick Start Guide

**Don't know your server type?** Try this:

1. **Look for .htaccess file** in your website root directory
   - If it exists → You likely have Apache (use Method 1)
   - If it doesn't exist → You might have Nginx or use cPanel

2. **Check your hosting control panel**
   - cPanel → Use Method 3
   - Plesk → Similar to cPanel method
   - Custom panel → Contact hosting provider

3. **When in doubt:**
   - Contact your hosting provider
   - Show them this document
   - Ask: "Can you set up a 301 redirect from non-www to www?"

---

## After Implementation

Once redirect is working:

1. ✅ Test all redirect scenarios
2. ✅ Update sitemap.xml
3. ✅ Submit to Google Search Console
4. ✅ Update Google Business Profile
5. ✅ Monitor for 2-4 weeks
6. ✅ Move to Priority 5 (Optimize Structural Page)

---

## Need Help?

If you're not comfortable implementing this yourself:

**Option 1:** Contact your web hosting provider
- They can implement this for you (usually free)
- Show them this document

**Option 2:** Hire a web developer
- This is a 15-30 minute job for a developer
- Should cost $50-$150

**Option 3:** Use your website platform's built-in tools
- Many hosting platforms have redirect tools in their control panel
- Check your hosting documentation

---

## Summary

**What:** Redirect non-www to www version
**Why:** Consolidate SEO authority, eliminate duplicate content
**How:** Add redirect code to .htaccess or use hosting control panel
**Time:** 15-30 minutes to implement, 4-6 weeks for full effect
**Impact:** 5-10% traffic increase long-term, stronger domain authority

This is a critical SEO foundation fix that will benefit all your other optimization efforts!
