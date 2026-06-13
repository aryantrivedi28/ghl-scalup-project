// app/video/[id]/page.tsx
import { notFound } from 'next/navigation'
import { youtubeVideosData, getVideoSchemaData } from '@/data/youtube-videos'
import { Metadata } from 'next'

// Generate static paths for all videos at build time
export async function generateStaticParams() {
  return youtubeVideosData.map((video) => ({
    id: video.id,
  }))
}

// Generate metadata for each video page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const video = youtubeVideosData.find(v => v.id === params.id)
  
  if (!video) {
    return {
      title: 'Video Not Found',
    }
  }
  
  return {
    title: `${video.title} | GHL Scale Up`,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      images: [`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`],
      type: 'video.other',
    },
  }
}

// Video Page Component
export default function VideoPage({ params }: { params: { id: string } }) {
  const video = youtubeVideosData.find(v => v.id === params.id)
  
  if (!video) {
    notFound()
  }
  
  // Get complete video data for schema
  const videosWithUrls = getVideoSchemaData()
  const currentVideo = videosWithUrls.find(v => v.id === params.id)
  
  // Generate video schema for THIS specific video
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
    "embedUrl": `https://www.youtube.com/embed/${video.id}`,
    "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
    "url": `https://www.ghlscaleup.com/video/${video.id}`,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": "1000"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GHL Scale Up",
      "url": "https://www.ghlscaleup.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ghlscaleup.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ghlscaleup.com/video/${video.id}`
    }
  }
  
  return (
    <>
      {/* Video Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />
      
      {/* Video Page Content */}
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <a 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            ← Back to Home
          </a>
          
          {/* Video Player */}
          <div className="max-w-5xl mx-auto">
            <div className="relative pb-[56.25%] mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
              <p className="text-gray-700 text-lg mb-4">{video.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Uploaded: {new Date(video.uploadDate).toLocaleDateString()}</span>
                <span>Duration: {formatDuration(video.duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

// Helper function to format duration
function formatDuration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  const hours = match?.[1] ? parseInt(match[1]) : 0
  const minutes = match?.[2] ? parseInt(match[2]) : 0
  const seconds = match?.[3] ? parseInt(match[3]) : 0
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}