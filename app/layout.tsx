// app/layout.tsx
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ghlscalup/Navigation'
import Footer from '@/components/ghlscalup/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ghlscaleup.com'),

  title: 'GHL Scale Up | GoHighLevel Expert Agency — CRM Setup, Automation & White-Label SaaS',

  description:
    'Hire GoHighLevel experts for CRM setup, workflow automation, funnel building, AI lead systems, and white-label SaaS.',

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/ghlscalicon.png',
  },

  openGraph: {
    title: 'GHL Scale Up',
    description:
      'GoHighLevel experts for CRM setup, automation, funnels, and SaaS.',
    url: 'https://www.ghlscaleup.com',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GHL Scale Up',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ghlscaleup.com/#organization",
        "name": "GHL Scale Up",
        "url": "https://www.ghlscaleup.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ghlscaleup.com/ghlscalicon.png"
        },
        "sameAs": [
          "https://www.linkedin.com/company/ghlscaleup"
        ]
      },
    ]
  }

  return (
    <html
      lang="en"
      className={poppins.variable}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans">
        
        {/* ✅ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}