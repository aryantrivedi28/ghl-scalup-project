// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/ghlscalup/Navigation'
import Footer from '@/components/ghlscalup/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatBot from '@/components/ChatBot'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E9BF0',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ghlscaleup.com'),
  title: 'GoHighLevel Experts & GHL Agency Services | GHL Scale Up',
  description: 'Partner with GHL Scale Up, GoHighLevel agency with 200+ builds across 6 countries. We setup Ghl backend systems and automations, white-label SaaS. Book a free call.',

  alternates: {
    canonical: '/',
  },

  // Complete icons configuration for all devices
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },

  // Web Manifest for PWA support
  manifest: '/site.webmanifest',

  // Open Graph for social media (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'GoHighLevel Expert Agency | GHL Scale Up',
    description: 'GHL Scale Up builds complete GoHighLevel systems CRM setup, automation, AI agents & white-label SaaS.',
    url: 'https://www.ghlscaleup.com',
    siteName: 'GHL Scale Up',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'GHL Scale Up Logo',
      },
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'GHL Scale Up',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  // Twitter Card for Twitter sharing
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Expert Agency | GHL Scale Up',
    description: 'GHL Scale Up builds complete GoHighLevel systems CRM setup, automation, AI agents & white-label SaaS.',
    images: ['/web-app-manifest-512x512.png'],
    creator: '@ghlscaleup',
    site: '@ghlscaleup',
  },

  // Additional metadata for SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: '', // Add your Google Search Console verification code here
  },

  category: 'technology',

  // Apple specific
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'GHL Scale Up',
  },

  // Windows/Android
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // Other
  applicationName: 'GHL Scale Up',
  authors: [{ name: 'GHL Scale Up' }],
  generator: 'Next.js',
  keywords: ['GoHighLevel', 'GHL', 'CRM Setup', 'Automation', 'AI Agents', 'White Label SaaS', 'Marketing Automation'],
  referrer: 'origin-when-cross-origin',
  creator: 'GHL Scale Up',
  publisher: 'GHL Scale Up',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.ghlscaleup.com/#organization',
        name: 'GHL Scale Up',
        url: 'https://www.ghlscaleup.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.ghlscaleup.com/apple-touch-icon.png',
          width: 512,
          height: 512,
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.ghlscaleup.com/web-app-manifest-512x512.png',
          width: 512,
          height: 512,
        },
        sameAs: ['https://www.linkedin.com/company/ghlscaleup'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+919893270210',
          contactType: 'customer service',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.ghlscaleup.com/#website',
        url: 'https://www.ghlscaleup.com',
        name: 'GHL Scale Up',
        description: 'GoHighLevel Expert Agency for CRM setup, automation, funnels, and SaaS',
        publisher: {
          '@id': 'https://www.ghlscaleup.com/#organization',
        },
        inLanguage: 'en-US',
      },
    ],
  }

  return (
    <html lang="en" className={poppins.variable} data-scroll-behavior="smooth">
      <head>
        {/* Additional manual links for maximum compatibility */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GHL Scale Up" />
        <meta name="msapplication-TileColor" content="#0E9BF0" />
        <meta name="theme-color" content="#0E9BF0" />
        <meta name="msapplication-config" content="/site.webmanifest" />

        {/* For older browsers */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* Preload important icons for performance */}
        <link rel="preload" as="image" href="/apple-touch-icon.png" type="image/png" />
        <link rel="preload" as="image" href="/favicon.svg" type="image/svg+xml" />
      </head>

      <body className="font-sans">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MY2RD6PW46"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-MY2RD6PW46');
          `}
        </Script>

        {/* <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a0ffa0920e5a77e67132220"
          strategy="afterInteractive"
        /> */}


        <Navigation />
        {children}

        {/* Floating Buttons Container - Stacked */}
        <div className="fixed bottom-24 right-5 flex flex-col items-end gap-4 z-50">
          {/* <ChatBot /> */}
          <WhatsAppButton />
        </div>

        <Footer />
      </body>
    </html>
  )
}