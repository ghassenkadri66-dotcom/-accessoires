import fs from 'fs'
import path from 'path'

const productsFile = path.resolve(
  'src/data/products.js'
)

const sitemapFile = path.resolve(
  'public/sitemap.xml'
)

const content = fs.readFileSync(
  productsFile,
  'utf8'
)

const references = [
  ...content.matchAll(
    /reference:\s*['"]([^'"]+)['"]/g
  )
].map(match => match[1])

const uniqueReferences = [
  ...new Set(references)
]

const baseUrl =
  'https://accessoires-foryou.netlify.app'

const productUrls = uniqueReferences
  .map(
    reference => `
  <url>
    <loc>${baseUrl}/product/${reference}</loc>
  </url>`
  )
  .join('')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>

  <url>
    <loc>${baseUrl}/</loc>
  </url>

${productUrls}

</urlset>
`

fs.mkdirSync('public', { recursive: true })

fs.writeFileSync(
  sitemapFile,
  sitemap.trim()
)

console.log(
  `Sitemap generated with ${uniqueReferences.length} products.`
)