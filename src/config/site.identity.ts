export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'aw7v2m9q4x',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Arcanum Webs',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Editorial publishing with a sharper voice',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'An article-focused platform for insight-driven publishing, commentary, and feature writing.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'arcanumwebs.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arcanumwebs.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

