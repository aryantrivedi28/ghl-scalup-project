// app/sitemap-video.xml/route.ts
import { youtubeVideosData } from '@/data/youtube-videos'

export async function GET() {
  const siteUrl = 'https://www.ghlscaleup.com'

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${youtubeVideosData.map((video) => `  <url>
    <loc>${siteUrl}/video/${video.id}</loc>
    <lastmod>${video.uploadDate.split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <video:video>
      <video:thumbnail_loc>https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg</video:thumbnail_loc>
      <video:title><![CDATA[${video.title}]]></video:title>
      <video:description><![CDATA[${video.description}]]></video:description>
      <video:player_loc>https://www.youtube.com/embed/${video.id}</video:player_loc>
      <video:publication_date>${video.uploadDate.split('T')[0]}</video:publication_date>
      <video:duration>${parseInt(video.duration.match(/\d+/g)?.[0] || '0')}</video:duration>
      <video:family_friendly>true</video:family_friendly>
      <video:requires_subscription>false</video:requires_subscription>
      <video:live>false</video:live>
    </video:video>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}