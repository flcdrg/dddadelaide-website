const fs = require('fs')
const globby = require('globby')
function addPage(page) {
  const path = page.replace('src/pages', '').replace('.tsx', '')
  const route = path === '/index' ? '' : path

  const baseUrl = process.env.TESTING_MODE === 'true' ? 'https://dddadelaide-website-test.azurewebsites.net' : 'https://dddadelaide.com'

  const priority = route === '' ? '1.0' : '0.5'
  return `  <url>
    <loc>${`${baseUrl}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.

  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/**/_*.tsx',
    '!src/pages/api',
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}
generateSitemap()
