/**
 * Central content/data for the Santhosh Racharla portfolio.
 * Images live in /public/images and are referenced by absolute path.
 */

/** Flip to true to render editorial SVG placeholders instead of real photos. */
export const useDummyImages = false

const IMG = (name: string) => `/images/${name}`

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Published', href: '#published' },
  { label: 'Testimonial', href: '#testimonial' },
] as const

export const hero = {
  eyebrow: 'Fashion Photographer based in Jakarta  |  Editorial  •  Campaign  •  Runway',
  title: ['Capturing Beauty in', 'Every Frame'],
  ctas: {
    primary: { label: 'View My Portfolio', href: '#portfolio' },
    secondary: { label: 'About Me', href: '#about' },
  },
}

export const collageImages = [
  { src: IMG('san_2105.jpg'), alt: 'Editorial portrait in monochrome' },
  { src: IMG('san_2423.jpg'), alt: 'Fashion campaign shot' },
  { src: IMG('wba_5646.jpg'), alt: 'Studio fashion portrait' },
  { src: IMG('san_2471.jpg'), alt: 'Fashion portrait' },
  { src: IMG('san_2492.jpg'), alt: 'Studio portrait' },
]

export const about = {
  eyebrow: 'About Me',
  title: ['The Art Behind', 'the Lens'],
  studioThumbs: [
    { src: IMG('san_2385.jpg'), alt: 'On-location shoot' },
    { src: IMG('san_2434.jpg'), alt: 'Behind-the-scenes setup' },
  ],
  portrait: {
    src: IMG('santosh_dp.jpg'),
    alt: 'Santhosh Racharla holding a camera',
  },
  bio:
    "Hello, I'm Santhosh — a wedding photographer who believes that the most powerful images are born from authentic connections. My approach to wedding photography goes beyond documenting clothing—it's about capturing moments where design, identity, and emotion intersect. I believe in minimal intervention, allowing natural light and authentic movement to guide my compositions. Every shoot begins with a concept board, evolves through collaborative energy on set, and culminates in images that honor both the designer's vision and the model's unique presence.",
  stats: [
    { value: '98%', label: 'Client Return Rate for repeat collaborations' },
    { value: '85+', label: 'Weddings documented' },
    { value: '12+', label: 'Clients served' },
  ],
}

export const portfolioIntro = {
  eyebrow: 'Portfolio Gallery',
  title: ['Stories Through the', 'Lens Collection'],
  subtitle: 'Selected works that define my aesthetic and vision in fashion photography',
}

export const projects = [
  {
    title: "Vintage-Modern Fusion in Jakarta's Old Quarter",
    image: IMG('san_2148.jpg'),
    tags: ['Editorial', 'Natural Light', 'Intimate'],
    description:
      "Capturing the feeling of finding grandmother's vintage coat in a modern city. Shot at dawn in Old Jakarta, blending weathered walls with luxury fabrics. Each frame tells stories of timeless elegance meeting edge.",
    href: '#portfolio',
  },
  {
    title: 'Minimalist Natural Light Fashion Editorial',
    image: IMG('san_2224.jpg'),
    tags: ['Editorial', 'Natural Light', 'Intimate'],
    description:
      "Returning to photography's essence: the dance between light and darkness. Using only window light and minimal styling, we created portraits that feel like intimate conversations through subtraction.",
    href: '#portfolio',
  },
  {
    title: 'Cultural Heritage Fashion with Traditional Batik',
    image: IMG('san_2412.jpg'),
    tags: ['Editorial', 'Natural Light', 'Intimate'],
    description:
      'Working with traditional craftswomen in Solo, we created dialogue between centuries-old techniques and contemporary silhouettes. Model Sari brought personal stories to each frame, honoring cultural continuity.',
    href: '#portfolio',
  },
]

export const published = {
  eyebrow: '',
  title: ['Published Works', '& Recognition'],
  description:
    'My work has been featured in leading fashion and lifestyle publications, showcasing editorial projects and creative collaborations that define contemporary fashion photography.',
}

export const imageRow = [
  { src: IMG('san_2497.jpg'), alt: 'Editorial portrait' },
  { src: IMG('san_2445.jpg'), alt: 'Fashion in motion' },
  { src: IMG('san_2148.jpg'), alt: 'Editorial moment' },
  { src: IMG('san_2434.jpg'), alt: 'Close-up portrait' },
]

export const cta = {
  title: "Let's Work Together",
}

export const footer = {
  tagline: 'Every face tells a story. Every moment carries emotion. I capture both, creating images that speak beyond words.',
  address: ['Level 1, 12 Sample St, Sydney NSW 2000'],
  contactEmail: 'hello@maxmorgan.photo',
  utility: [
    { label: 'Password', href: '#' },
    { label: '404 Not Found', href: '#' },
    { label: 'Style Guide', href: '#' },
    { label: 'Licenses', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  social: [
    { label: 'Facebook', href: '#', icon: 'facebook' as const },
    { label: 'Instagram', href: '#', icon: 'instagram' as const },
    { label: 'X', href: '#', icon: 'x' as const },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' as const },
    { label: 'YouTube', href: '#', icon: 'youtube' as const },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookies Settings', href: '#' },
  ],
  credit: 'Designed by @rsakami',
  copyright: `© ${new Date().getFullYear()} All rights reserved`,
}
