# Open Graph Images Fix - Summary

## Problem

When sharing links in iMessage (and other social media platforms), only the homepage OG image was being shown for all pages. This is because social media crawlers don't execute JavaScript, so they only saw the static HTML with default meta tags.

## Solution

Created a post-build script that generates route-specific static HTML files with correct Open Graph meta tags for each page.

## Architecture

### 1. Centralized Configuration

**File:** `src/config/routes-meta.js`

- Single source of truth for all route metadata
- Contains `ogImage`, `ogTitle`, `ogDescription`, and `displayName` for each route
- Used by both Vue Router and the build script

### 2. Vue Router Integration

**File:** `src/router/index.js`

- Imports metadata from shared config
- Updates meta tags dynamically during client-side navigation
- Ensures page titles and meta descriptions update in browser

### 3. Static HTML Generation

**File:** `scripts/generate-social-meta.js`

- Runs automatically after `npm run build`
- Creates individual HTML files for each route with correct meta tags
- Structure: `/dist/[route]/index.html`

### 4. Build Process

**File:** `package.json`

```json
"build": "vue-cli-service build && node scripts/generate-social-meta.js"
```

## How It Works

1. **For Social Media Crawlers:**

   - Crawler requests `https://rkdvis.com/chase-travel`
   - Netlify serves `/dist/chase-travel/index.html` with correct OG tags
   - Crawler sees the proper image and metadata ✅

2. **For Real Users:**
   - Initial page load uses static HTML (correct meta tags)
   - Client-side navigation updates meta tags via Vue Router
   - Browser tab title and SEO meta tags stay current ✅

## Adding New Routes

When adding a new route, update **one file only**:

1. Edit `src/config/routes-meta.js` - add your route metadata
2. Edit `src/router/index.js` - add the route with `meta: routesMeta['/your-route']`
3. Run `npm run build` - script automatically generates the static HTML

## Testing

To test OG images locally:

1. Run `npm run build`
2. Check `dist/[route]/index.html` files
3. Verify meta tags are correct

To test on iMessage:

1. Deploy to Netlify
2. Share a link (e.g., `https://rkdvis.com/chase-travel`)
3. Check preview shows correct image

## Files Modified

- ✅ `src/config/routes-meta.js` (new)
- ✅ `src/router/index.js` (refactored)
- ✅ `scripts/generate-social-meta.js` (new)
- ✅ `package.json` (updated build script)
- ✅ `src/main.js` (added prerender-ready event)
- ✅ `netlify.toml` (simplified)

## Benefits

- ✅ Proper OG images in iMessage, Facebook, Twitter, LinkedIn, etc.
- ✅ No duplicate configuration (DRY principle)
- ✅ No external dependencies or deprecated packages
- ✅ Works with Netlify's standard SPA hosting
- ✅ Fast builds (no Puppeteer/headless browser required)
- ✅ Easy to maintain and extend
