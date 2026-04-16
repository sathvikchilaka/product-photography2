/**
 * Central content/data for the Max Morgan portfolio.
 * Swap image URLs here when real Figma exports become available.
 *
 * Image convention: stable Unsplash photo IDs rendered at fixed widths.
 * Keeping query string centralized so tone can be tuned globally.
 */

const UNSPLASH = (id: string, w: number, extra = '') =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop${extra}`

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
  { src: UNSPLASH('1524504388940-b1c1722653e1', 700), alt: 'Editorial portrait in monochrome' },
  { src: UNSPLASH('1521572163474-6864f9cf17ab', 700), alt: 'Street fashion campaign shot' },
  { src: UNSPLASH('1509631179647-0177331693ae', 1000), alt: 'Studio fashion portrait, yellow suit' },
  { src: UNSPLASH('1519699047748-de8e457a634e', 600), alt: 'Fashion portrait with florals' },
  { src: UNSPLASH('1515886657613-9f3515b0c78f', 600), alt: 'Studio portrait on white backdrop' },
]

export const displayName = 'MAX MORGAN'

export const about = {
  eyebrow: 'About Me',
  title: ['The Art Behind', 'the Lens'],
  studioThumbs: [
    { src: UNSPLASH('1533228876829-65c94e7b5025', 520), alt: 'Studio setup with strobe' },
    { src: UNSPLASH('1542038784456-1ea8e935640e', 520), alt: 'Studio lighting and stands' },
  ],
  portrait: {
    src: UNSPLASH('1507003211169-0a1dd7228f2d', 900),
    alt: 'Max Morgan holding a camera',
  },
  bio:
    "Hello, I'm Max — a fashion photographer who believes that the most powerful images are born from authentic connections. My approach to fashion photography goes beyond documenting clothing—it's about capturing moments where design, identity, and emotion intersect. I believe in minimal intervention, allowing natural light and authentic movement to guide my compositions. Every shoot begins with a concept board, evolves through collaborative energy on set, and culminates in images that honor both the designer's vision and the model's unique presence.",
  stats: [
    { value: '98%', label: 'Client Return Rate for repeat collaborations' },
    { value: '85+', label: 'Professional Models have worked' },
    { value: '12+', label: 'Fashion Weeks documented' },
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
    image: UNSPLASH('1529139574466-a303027c1d8b', 1400),
    tags: ['Editorial', 'Natural Light', 'Intimate'],
    description:
      "Capturing the feeling of finding grandmother's vintage coat in a modern city. Shot at dawn in Old Jakarta, blending weathered walls with luxury fabrics. Each frame tells stories of timeless elegance meeting edge.",
    href: '#portfolio',
  },
  {
    title: 'Minimalist Natural Light Fashion Editorial',
    image: UNSPLASH('1496440737103-cd596325d314', 1400),
    tags: ['Editorial', 'Natural Light', 'Intimate'],
    description:
      "Returning to photography's essence: the dance between light and darkness. Using only window light and minimal styling, we created portraits that feel like intimate conversations through subtraction.",
    href: '#portfolio',
  },
  {
    title: 'Cultural Heritage Fashion with Traditional Batik',
    image: UNSPLASH('1488426862026-3ee34a7d66df', 1400),
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
  { src: UNSPLASH('1519699047748-de8e457a634e', 900), alt: 'Editorial, b&w silhouette' },
  { src: UNSPLASH('1533227268428-f9ed0900fb3b', 900), alt: 'Red dress in motion' },
  { src: UNSPLASH('1522673607200-164d1b6ce486', 900), alt: 'Model lounging editorial' },
  { src: UNSPLASH('1506863530036-1efeddceb993', 900), alt: 'Close-up beauty portrait' },
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
