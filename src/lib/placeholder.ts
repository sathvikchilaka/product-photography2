/**
 * Generates a dark editorial SVG placeholder as a data URI.
 * Used as an onError fallback so images always render.
 */

const palettes: Array<[string, string]> = [
  ['#161616', '#2a2a2a'],
  ['#1c1815', '#2e2823'],
  ['#14181c', '#242a30'],
  ['#1a1613', '#2b2520'],
  ['#13171a', '#232a30'],
  ['#1b1b1b', '#333333'],
  ['#181414', '#2f2727'],
]

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

export function placeholderDataUri(label: string, width = 800, height = 1000): string {
  const h = hash(label || 'placeholder')
  const [a, b] = palettes[h % palettes.length]
  const angle = 20 + (h % 50)
  const fontSize = Math.max(12, Math.round(Math.min(width, height) * 0.035))
  const ringSize = Math.round(Math.min(width, height) * 0.28)
  const cx = Math.round(width / 2)
  const cy = Math.round(height / 2)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1" gradientTransform="rotate(${angle})">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.05)"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <rect width="${width}" height="${height}" fill="url(#dots)"/>
  <circle cx="${cx}" cy="${cy - ringSize * 0.15}" r="${ringSize}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <circle cx="${cx}" cy="${cy - ringSize * 0.15}" r="${ringSize * 0.7}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="${cx}" y="${height - Math.round(height * 0.06)}" fill="rgba(255,255,255,0.35)" font-family="Inter, system-ui, sans-serif" font-size="${fontSize}" font-weight="500" letter-spacing="0.04em" text-anchor="middle">${escapeXml(label.toUpperCase())}</text>
</svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function escapeXml(s: string): string {
  return s.replace(/[<>&"']/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case '"':
        return '&quot;'
      case "'":
        return '&apos;'
      default:
        return c
    }
  })
}
