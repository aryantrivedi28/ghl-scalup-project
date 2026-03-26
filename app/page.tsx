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

export default function Home() {
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
      <Testimonials />
      <Blog />
      <FinalCTA />
      {/* <Footer /> */}
    </main>
  )
}