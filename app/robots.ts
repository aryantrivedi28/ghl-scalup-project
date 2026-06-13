// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*', '/studio/*'],
    },
    sitemap: [
      'https://www.ghlscaleup.com/sitemap.xml',
      'https://www.ghlscaleup.com/sitemap-video.xml',
    ],
  }
}