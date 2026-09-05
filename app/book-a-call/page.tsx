'use client'

import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Calendar,
  User,
  Building,
  AlertCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'


// export const metadata = {
//   title: 'Contact Us | Your GHL Expert',
//   description: 'Get in touch with our GoHighLevel expert team. Book a strategy call, ask questions, or request a quote for GHL services.',
// }

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  service: string
}

export default function ContactPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission - replace with your actual endpoint
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtext: 'Mon-Fri, 9am-6pm EST',
      href: 'tel:+15551234567',
      color: 'text-nurture-blue',
      bgColor: 'bg-nurture-blue/10',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@yourghlexpert.com',
      subtext: 'Response within 24 hours',
      href: 'mailto:hello@yourghlexpert.com',
      color: 'text-capture-yellow',
      bgColor: 'bg-capture-yellow/10',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Business Avenue',
      subtext: 'Suite 100, New York, NY 10001',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
  ]


  const services = [
    'GoHighLevel Setup & Configuration',
    'Workflow Automation',
    'CRM Pipeline Management',
    'Email & SMS Campaigns',
    'GHL Virtual Assistant',
    'Sub-Account Management',
    'Custom Integration',
    'Training & Support',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-space-blue pt-32 pb-16 lg:pt-[120px] lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(14, 155, 240, 0.08) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-capture-yellow" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-capture-yellow/12 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-capture-yellow">
            <MessageSquare className="h-3 w-3" />
            Get In Touch
          </span>
          <h1 className="mb-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
            Let's Talk About Your
            <span className="mt-2 block text-capture-yellow">GoHighLevel Success.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-white/72">
            Whether you need a quick question answered, a strategy consultation, or a dedicated GHL VA we're here to help.
          </p>
        </div>
      </section>


      {/* Main Contact Section: Form + Calendar */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
            

            {/* Right Column: Booking Calendar */}
            <div>
              <div className="rounded-2xl border border-[#E8EDF4] bg-white p-6 shadow-sm md:p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-space-blue">Book a Strategy Call</h2>
                    <p className="text-sm text-muted">
                      Select a time that works for you. Free 45-minute consultation.
                    </p>
                  </div>
                  <Calendar className="h-6 w-6 text-nurture-blue" />
                </div>


                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/v3X1VeODz2sPjpKbySyx"
                  title="Booking Calendar"
                  className={cn(
                    "h-[850px] w-full border-0",
                    !iframeLoaded && "hidden"
                  )}
                  onLoad={() => setIframeLoaded(true)}
                />

                <div className="mt-4 rounded-lg bg-nurture-blue/5 p-3 text-center">
                  <p className="text-xs text-muted">
                    <Clock className="mr-1 inline h-3 w-3" />
                    All times are in your local timezone. Calls are conducted via Zoom or Google Meet.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>



      {/* Office Location / Map Section */}
      {/* <section className="bg-off-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="mb-3 text-2xl font-bold text-space-blue">Visit Our Office</h2>
              <p className="mb-6 text-muted">
                We'd love to meet you in person. Schedule a visit or drop by during business hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-nurture-blue" />
                  <div>
                    <p className="font-medium text-space-blue">123 Business Avenue</p>
                    <p className="text-sm text-muted">Suite 100, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-nurture-blue" />
                  <div>
                    <p className="font-medium text-space-blue">Business Hours</p>
                    <p className="text-sm text-muted">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-sm text-muted">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline" className="border-nurture-blue text-nurture-blue hover:bg-nurture-blue/5">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="h-[300px] bg-space-blue/5 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7bdd3%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="h-full min-h-[300px] w-full"
              />
            </div>
          </div>
        </div>
      </section> */}

    </>
  )
}