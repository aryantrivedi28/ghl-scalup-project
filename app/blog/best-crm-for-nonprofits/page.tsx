import { Metadata } from 'next';
import Script from 'next/script';
import BestCRMForNonprofitsClient from './client';

export const metadata: Metadata = {
  title: 'The Complete Guide to Choosing a CRM for Nonprofit Organisations (2026) | GHL Scale Up',
  description: 'GoHighLevel, Salesforce, Bloomerang or HubSpot? An honest comparison of the best CRMs for nonprofits by donor management, fundraising, automation, pricing and total cost of ownership.',
  keywords: 'best crm for nonprofits, nonprofit crm, donor management software, fundraising crm, gohighlevel for nonprofits, salesforce nonprofit cloud, bloomerang, neon one, hubspot nonprofit, crm for charities, nonprofit donor management, best crm for small nonprofits, nonprofit fundraising software',
  authors: [{ name: 'GHL Scale Up Team' }],
  openGraph: {
    title: 'The Complete Guide to Choosing a CRM for Nonprofit Organisations (2026)',
    description: 'GoHighLevel, Salesforce, Bloomerang or HubSpot? An honest comparison of the best CRMs for nonprofits by donor management, fundraising, automation, pricing and total cost of ownership.',
    type: 'article',
    publishedTime: '2026-08-20T00:00:00Z',
    modifiedTime: '2026-08-20T00:00:00Z',
    authors: ['GHL Scale Up Team'],
    tags: ['Nonprofit', 'CRM', 'Donor Management', 'Fundraising', 'GoHighLevel', 'Salesforce', 'Bloomerang', 'HubSpot', '2026'],
    images: [{ url: 'https://www.ghlscaleup.com/images/blog/best-crm-for-nonprofits-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghlscaleup',
    title: 'The Complete Guide to Choosing a CRM for Nonprofit Organisations (2026)',
    description: 'GoHighLevel, Salesforce, Bloomerang or HubSpot? An honest comparison of the best CRMs for nonprofits by donor management, fundraising, automation, pricing and total cost of ownership.',
    images: ['https://www.ghlscaleup.com/images/blog/best-crm-for-nonprofits-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.ghlscaleup.com/blog/best-crm-for-nonprofits',
  },
};

export default function BestCRMForNonprofitsPage() {
  return (
    <>
      {/* Article Schema JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Complete Guide to Choosing a CRM for Nonprofit Organisations (2026)",
            "description": "GoHighLevel, Salesforce, Bloomerang or HubSpot? An honest comparison of the best CRMs for nonprofits by donor management, fundraising, automation, pricing and total cost of ownership.",
            "image": "https://www.ghlscaleup.com/images/blog/best-crm-for-nonprofits-og.jpg",
            "datePublished": "2026-08-20",
            "dateModified": "2026-08-20",
            "author": {
              "@type": "Organization",
              "name": "GHL Scale Up Team",
              "url": "https://www.ghlscaleup.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GHL Scale Up",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ghlscaleup.com/web-app-manifest-192x192.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.ghlscaleup.com/blog/best-crm-for-nonprofits"
            }
          })
        }}
      />

      {/* FAQPage Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best CRM for a nonprofit organisation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There is no universal winner. Salesforce and Blackbaud are strong for complex or enterprise nonprofit operations, Bloomerang and Neon One are strong nonprofit-specific options for donor and fundraising workflows, and HubSpot, Zoho and GoHighLevel can be better fits when marketing automation, flexibility and integration are priorities."
                }
              },
              {
                "@type": "Question",
                "name": "What CRM is best for small nonprofits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Small nonprofits should prioritise ease of use, total cost, support and the ability to run core workflows without heavy technical administration. Neon One, Bloomerang, Zoho, HubSpot and GoHighLevel are all worth evaluating depending on the organisation's requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Is Salesforce free for nonprofits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Eligible nonprofits can receive 10 Salesforce Nonprofit Cloud or Sales/Service Cloud licenses at no cost through the Power of Us program, subject to eligibility. Additional products, licenses and implementation can still create costs."
                }
              },
              {
                "@type": "Question",
                "name": "Is GoHighLevel suitable for nonprofits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It can be suitable when the nonprofit needs CRM, forms, communication, calendars and workflow automation in one system. It is less suitable as a standalone solution when the organisation requires highly specialised fundraising, grantmaking or nonprofit data structures."
                }
              },
              {
                "@type": "Question",
                "name": "What features should a nonprofit CRM have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At minimum, evaluate constituent management, donation history, fundraising, segmentation, communication, automation, reporting, integrations, permissions and data migration. Add volunteer, membership, grant or event functionality if those are core processes."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between a nonprofit CRM and a regular CRM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A nonprofit CRM is designed around constituent relationships and often includes fundraising, donor stewardship, campaigns, volunteer or program workflows. A general-purpose CRM can manage relationships well but may require customisation or integrations for specialised nonprofit processes."
                }
              },
              {
                "@type": "Question",
                "name": "How much does nonprofit CRM software cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Costs range widely. Current examples include Neon CRM from $99/month, Bloomerang CRM from $125/month, Zoho CRM from $14/user/month annually for Standard, and Salesforce Nonprofit Cloud from $60/user/month for Enterprise nonprofit pricing. Total cost depends on modules, users, implementation, integrations and other services."
                }
              },
              {
                "@type": "Question",
                "name": "Can a nonprofit use HubSpot as its CRM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. HubSpot provides a free CRM foundation and a nonprofit discount program for eligible organisations in specified regions. It is especially relevant for nonprofits with strong marketing, content and engagement requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Do nonprofits need a CRM for donor management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not every very small organisation needs a dedicated CRM immediately. However, once donor records, communications, campaigns and follow-ups become difficult to manage across spreadsheets and disconnected tools, a centralised CRM can significantly improve visibility and consistency."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to implement a nonprofit CRM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There is no universal timeline. A simple CRM with clean data can be configured relatively quickly, while enterprise implementations involving migration, integrations, custom objects, permissions and complex fundraising workflows can take substantially longer. The complexity of the organisation's processes matters more than the number of contacts alone."
                }
              }
            ]
          })
        }}
      />

      {/* BreadcrumbList Schema JSON-LD */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ghlscaleup.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.ghlscaleup.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Best CRM for Nonprofits",
                "item": "https://www.ghlscaleup.com/blog/best-crm-for-nonprofits"
              }
            ]
          })
        }}
      />
      <BestCRMForNonprofitsClient />
    </>
  );
}