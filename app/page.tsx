import Navigation from '@/components/ghlscalup/Navigation'
import Hero from '@/components/ghlscalup/Hero'
import Features from '@/components/ghlscalup/Features'
import Services from '@/components/ghlscalup/Services'
import WhyChooseUs from '@/components/ghlscalup/WhyChooseUs'
import Process from '@/components/ghlscalup/Process'
import Testimonials from '@/components/ghlscalup/Testimonials'
import CTA from '@/components/ghlscalup/CTA'
import Footer from '@/components/ghlscalup/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
