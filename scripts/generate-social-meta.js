const fs = require('fs')
const path = require('path')

// Import the routes metadata from the shared config
const { routesMeta } = require('../src/config/routes-meta.js')

// Convert routesMeta to routes array format
const routes = Object.entries(routesMeta).map(([path, meta]) => ({
  path,
  meta
}))

function generateStaticHTML() {
  function updateMetaTags(html, meta) {
    let updatedHtml = html

    // Update og:image
    updatedHtml = updatedHtml.replace(
      /<meta property="og:image" content="[^"]*"/,
      `<meta property="og:image" content="${meta.ogImage}"`
    )

    // Update og:title
    updatedHtml = updatedHtml.replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${meta.ogTitle}"`
    )

    // Update og:description
    updatedHtml = updatedHtml.replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${meta.ogDescription}"`
    )

    // Update og:url if provided
    if (meta.ogUrl) {
      updatedHtml = updatedHtml.replace(
        /<meta property="og:url" content="[^"]*"/,
        `<meta property="og:url" content="${meta.ogUrl}"`
      )
    }

    // Update twitter:image
    updatedHtml = updatedHtml.replace(
      /<meta name="twitter:image" content="[^"]*"/,
      `<meta name="twitter:image" content="${meta.ogImage}"`
    )

    // Update twitter:title
    updatedHtml = updatedHtml.replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${meta.ogTitle}"`
    )

    // Update twitter:description
    updatedHtml = updatedHtml.replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${meta.ogDescription}"`
    )

    // Update page title
    updatedHtml = updatedHtml.replace(
      /<title>[^<]*<\/title>/,
      `<title>${meta.ogTitle}</title>`
    )

    // Update meta description
    updatedHtml = updatedHtml.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${meta.ogDescription}"`
    )

    return updatedHtml
  }

  // Read the base index.html
  const distPath = path.join(__dirname, '..', 'dist')
  const indexPath = path.join(distPath, 'index.html')

  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run npm run build first.')
    process.exit(1)
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8')

  console.log('Generating route-specific HTML files with OG meta tags...\n')

  // Generate HTML for each route
  routes.forEach((route) => {
    const updatedHtml = updateMetaTags(baseHtml, route.meta)

    if (route.path === '/') {
      // Update the root index.html
      fs.writeFileSync(indexPath, updatedHtml)
      console.log(`✓ Updated / (index.html)`)
    } else {
      // Create directory for the route
      const routePath = route.path.replace(/^\//, '')
      const routeDir = path.join(distPath, routePath)

      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true })
      }

      // Write the route-specific index.html
      const routeIndexPath = path.join(routeDir, 'index.html')
      fs.writeFileSync(routeIndexPath, updatedHtml)
      console.log(`✓ Created ${route.path}/index.html`)
    }
  })

  console.log('\n✨ Done! All route-specific HTML files generated.')
  console.log(
    'Social media crawlers will now see the correct OG images for each page.\n'
  )
}

// Run the function
try {
  generateStaticHTML()
} catch (error) {
  console.error('Error generating static HTML:', error)
  process.exit(1)
}
