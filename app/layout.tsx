// app/layout.tsx - Updated to use the font properly
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'GHL Scale Up | #1 GoHighLevel Expert Agency — CRM Setup, Automation & White-Label SaaS',
  description: 'Hire GoHighLevel experts for CRM setup, workflow automation, funnel building, AI lead systems, and white-label SaaS. 200+ GHL projects delivered. Book a free strategy call today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}