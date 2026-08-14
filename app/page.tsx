// app/page.tsx
import Navigation from '@/components/ghlscalup/Navigation'
import Hero from '@/components/ghlscalup/Hero'
import StatsBar from '@/components/ghlscalup/StatsBar'
import About from '@/components/ghlscalup/About'
import Services from '@/components/ghlscalup/Services'
import WhyChooseUs from '@/components/ghlscalup/WhyChooseUs'
import Process from '@/components/ghlscalup/Process'
import ContactCTA from '@/components/ghlscalup/ContactCTA'
import Industries from '@/components/ghlscalup/Industries'
import Testimonials from '@/components/ghlscalup/Testimonials'
import Blog from '@/components/ghlscalup/Blog'
import FinalCTA from '@/components/ghlscalup/FinalCTA'
import FAQ from '@/components/ghlscalup/FAQ'
import FAQSchema from '@/components/ghlscalup/FAQSchema'
import { getAllTestimonialsForHomepage } from '@/lib/sanity'
import { getVideoSchemaData } from '@/data/youtube-videos'
import CaseStudies from '@/components/ghlscalup/CaseStudies'
import { getCaseStudies } from '@/lib/caseStudiesData'

export default async function Home() {
  // Fetch testimonials from Sanity
  let testimonials = [];
  try {
    testimonials = await getAllTestimonialsForHomepage();
  } catch (error) {
    console.error('Failed to load testimonials:', error);
  }
  
  // Get video data from separate file
  const videos = getVideoSchemaData();

  const caseStudies = getCaseStudies();

  // Generate video schema for all YouTube videos
  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": videos.map((video) => ({
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": video.thumbnailUrl,
      "embedUrl": video.embedUrl,
      "url": video.url,
      "uploadDate": video.uploadDate,
      "duration": video.duration,
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WatchAction",
        "userInteractionCount": "1000" // Optional: Add if you have view counts
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
        "@id": "https://www.ghlscaleup.com/"
      }
    })),
  };

  // Optional: Add VideoGallery schema for better SEO when you have multiple videos
  const videoGallerySchema = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": "GHL Scale Up - YouTube Video Library",
    "description": "Collection of marketing automation, HighLevel tutorials, and business growth videos",
    "url": "https://www.ghlscaleup.com",
    "hasPart": videos.map(video => ({
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "url": video.url,
      "thumbnailUrl": video.thumbnailUrl,
      "uploadDate": video.uploadDate
    }))
  };

  return (
    <main>
      {/* FAQ Schema for SEO - This adds structured data to head */}
      <FAQSchema />

      {/* Video Schema for SEO - This makes YouTube videos visible on Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />

      {/* Video Gallery Schema - Optional but recommended for multiple videos */}
      {videos.length > 1 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoGallerySchema),
          }}
        />
      )}

      {/* <Navigation /> */}
      <Hero />
      <StatsBar />
      <About />
      <CaseStudies caseStudies={caseStudies} />
      <Testimonials testimonials={testimonials} />
      <Services />
      <WhyChooseUs />
      <Process />

      <ContactCTA />
      <Industries />
      
      {/* Pass testimonials data to the component */}

      <Blog />

      {/* FAQ Section - Visible on homepage */}
      <FAQ />

      <FinalCTA />
      {/* <Footer /> */}
    </main>
  )
}