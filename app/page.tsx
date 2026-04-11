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
import Footer from '@/components/ghlscalup/Footer'
import { getAllTestimonialsForHomepage } from '@/lib/sanity'

export default async function Home() {
  // Fetch testimonials from Sanity
  let testimonials = [];
  try {
    testimonials = await getAllTestimonialsForHomepage();
    console.log('Loaded testimonials:', testimonials.length);
  } catch (error) {
    console.error('Failed to load testimonials:', error);
  }

  return (
    <main>
      {/* <Navigation /> */}
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <ContactCTA />
      <Industries />
      {/* Pass testimonials data to the component */}
      <Testimonials testimonials={testimonials} />
      <Blog />
      <FinalCTA />
      {/* <Footer /> */}
    </main>
  )
}