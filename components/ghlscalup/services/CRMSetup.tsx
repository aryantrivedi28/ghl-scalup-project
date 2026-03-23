// components/ghlscalup/services/CRMSetup.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/ghlscalup/Navigation'
import Footer from '@/components/ghlscalup/Footer'

const ServiceCRMSetup = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const includedItems = [
    { icon: '🔧', iconBg: 'blue', title: 'Custom Pipeline Design', description: 'Sales pipelines with stages mapped to your actual deal flow — from new lead to closed won. Multiple pipelines for different services or teams.' },
    { icon: '👤', iconBg: 'green', title: 'Contact & Lead Management', description: 'Contact profiles, custom fields, smart lists, tag architecture, lead source tracking. Every lead organized and searchable from day one.' },
    { icon: '🏷️', iconBg: 'yellow', title: 'Tag & Segmentation Architecture', description: 'A structured tagging system so your contacts are segmented by source, interest, status, and behavior — not random labels nobody remembers.' },
    { icon: '👥', iconBg: 'blue', title: 'User Roles & Permissions', description: 'Team members, admins, and client users with role-based access. Control who sees what, who can edit, and who has view-only access.' },
    { icon: '🔗', iconBg: 'green', title: 'Third-Party Integrations', description: 'Stripe for payments, Google Calendar sync, Facebook Lead Ads, Google My Business, Zapier, Make.com — connected and tested.' },
    { icon: '🔄', iconBg: 'yellow', title: 'CRM Data Migration', description: 'Full migration from HubSpot, Salesforce, Zoho, Keap, ActiveCampaign, or spreadsheets. Contacts, deals, notes, and tags — all moved cleanly.' },
  ]

  const processSteps = [
    { number: '01', title: 'Discovery & Sales Process Mapping', description: 'We start by understanding how your team actually sells — lead sources, qualification steps, handoff points, deal stages, and reporting needs. This determines the entire CRM architecture.' },
    { number: '02', title: 'Pipeline & Field Configuration', description: 'We build your pipelines, custom fields, opportunity stages, and contact properties inside GoHighLevel. Every field has a purpose. Every stage reflects a real action in your sales process.' },
    { number: '03', title: 'Data Migration & Cleanup', description: 'We import your existing contacts, deals, notes, and tags from your previous CRM or spreadsheets. Duplicate removal, field mapping, and data validation included.' },
    { number: '04', title: 'Integrations & Automation Wiring', description: 'We connect Stripe, Google Calendar, lead sources, Zapier, and any third-party tools. Basic automations for lead assignment, stage changes, and notifications are configured here.' },
    { number: '05', title: 'Testing, Training & Handover', description: 'We test every pipeline, field, and integration with live data. Your team gets a walkthrough, written documentation, and a recorded training session so everyone knows how to use it.' },
  ]

  const faqs = [
    { question: 'How long does a GoHighLevel CRM setup take?', answer: 'A standard GHL CRM setup takes 5 to 10 business days depending on the complexity of your sales process, number of pipelines, and whether we are migrating data from another platform. Simple setups for single-location businesses can be done in under a week. Multi-location or multi-pipeline setups with heavy migration typically take 2 weeks.' },
    { question: 'Can you migrate my data from HubSpot, Salesforce, or Zoho into GoHighLevel?', answer: 'Yes. We handle full CRM migrations from HubSpot, Salesforce, Zoho, Keap, ActiveCampaign, Ontraport, and spreadsheets. This includes contacts, deals, notes, tags, custom fields, and deal stage history. We clean duplicate records and validate data integrity before import to ensure nothing breaks.' },
    { question: 'I already have a GoHighLevel account but it\'s a mess. Can you fix it?', answer: 'Absolutely. Many of our clients come to us with existing GHL accounts that were set up from templates or by someone without CRM strategy experience. We audit your current setup, identify structural issues (broken automations, redundant tags, misconfigured pipelines), and rebuild or restructure what needs fixing — without losing your existing data.' },
    { question: 'What is the difference between GoHighLevel CRM and HubSpot or Salesforce?', answer: 'GoHighLevel is an all-in-one platform that combines CRM, marketing automation, funnel building, SMS, email, calendars, and reputation management in a single tool. HubSpot and Salesforce are more established enterprise CRMs but require multiple add-ons and integrations to match GHL\'s built-in features. GHL is typically more cost-effective for agencies and small-to-mid businesses — especially those who want to white-label the platform.' },
    { question: 'Do I need GoHighLevel\'s Unlimited plan for CRM setup?', answer: 'Not necessarily. The Starter plan at $97/month supports up to 3 sub-accounts and includes full CRM functionality. If you are managing more than 3 clients or plan to offer white-label SaaS, you will need the Unlimited plan at $297/month. We recommend the right plan based on your business stage during our discovery call — we never upsell you on features you don\'t need yet.' },
    { question: 'Will my team be trained on how to use the CRM after setup?', answer: 'Yes. Every CRM setup includes a live training session with your team, written SOPs (standard operating procedures), and a recorded video walkthrough. We make sure your team knows how to add contacts, move deals through pipelines, use filters and smart lists, and interpret the dashboard — so you are not dependent on us for day-to-day operations.' },
    { question: 'What if I need automations and funnels along with CRM setup?', answer: 'Most clients combine CRM setup with workflow automation and funnel development. We offer these as separate services that integrate directly with your CRM architecture. Your pipelines, tags, and contact fields are designed from the start to work with automations — so adding AI workflows, email sequences, or sales funnels later is straightforward, not a rebuild.' },
    { question: 'How much does GoHighLevel CRM setup cost?', answer: 'Pricing depends on the scope: number of pipelines, whether migration is needed, integration requirements, and the complexity of your sales process. We provide a clear, fixed-price quote after a free 30-minute discovery call — no hourly billing surprises. Most standard CRM setups fall in a range that pays for itself within the first month through time savings alone.' },
    { question: 'Do you offer ongoing CRM support after the initial setup?', answer: 'Yes. We offer monthly maintenance plans for businesses that want ongoing optimization, new pipeline additions, reporting updates, and troubleshooting. Many clients start with a one-time setup and add ongoing support once they see the results and want to expand their GHL system.' },
    { question: 'What industries have you built GoHighLevel CRM systems for?', answer: 'We have built GHL CRM systems for marketing agencies, real estate firms, home-service businesses (HVAC, plumbing, roofing), coaches and consultants, SaaS companies, energy providers, legal firms, healthcare clinics, and e-commerce brands. Each setup is tailored to the industry\'s sales process — there is no one-size-fits-all template.' },
  ]

  const relatedServices = [
    { title: 'Workflow & Marketing Automation', description: 'Automate lead follow-ups, task assignments, and notifications directly from your CRM pipelines.', link: '/services/workflow-automation' },
    { title: 'Sales Funnel Development', description: 'Build high-converting landing pages that feed leads directly into your CRM pipelines.', link: '/services/funnel-development' },
    { title: 'Email, SMS & WhatsApp Campaigns', description: 'Set up nurture sequences triggered by CRM stages to convert leads on autopilot.', link: '/services/campaign-automation' },
  ]

  return (
    <>
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-[#F4F7FA] py-3.5 border-b border-[#E8EDF4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-[0.75rem] text-[#8A9BB0]">
            <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition-colors">Home</Link>
            <span className="text-[#E8EDF4]">›</span>
            <Link href="/services" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition-colors">GHL Services</Link>
            <span className="text-[#E8EDF4]">›</span>
            <span>CRM Setup & Configuration</span>
          </div>
        </div>
      </div>

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-[72px] md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                GHL Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4.5">
                GoHighLevel CRM Setup<br />&amp; <span className="text-[#F8D000]">Configuration</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We set up your GoHighLevel CRM from scratch — <strong className="text-white/90 font-medium">custom pipelines, deal stages, contact management, tag architecture, and user permissions</strong> — built around how your business actually sells. Already on HubSpot, Salesforce, or Zoho? We handle the full migration.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="#contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free CRM Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">CRM Setup Results</h3>
                <div className="flex items-center gap-4 py-3.5 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[60px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">GoHighLevel CRM systems built</div>
                </div>
                <div className="flex items-center gap-4 py-3.5 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[60px]">70%</div>
                  <div className="text-[0.78rem] text-white/50">Average reduction in manual workload</div>
                </div>
                <div className="flex items-center gap-4 py-3.5 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[60px]">&lt;10s</div>
                  <div className="text-[0.78rem] text-white/50">Lead response time after setup</div>
                </div>
                <div className="flex items-center gap-4 py-3.5">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[60px]">6</div>
                  <div className="text-[0.78rem] text-white/50">Countries served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#F4F7FA]" id="included" ref={sectionRef}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              What's Included
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Everything You Need for a<br /><span className="text-[#0E9BF0]">Production-Ready GHL CRM</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Every CRM setup is custom-built for your sales process. No templates copied from YouTube. Here is exactly what you get.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {includedItems.map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all fade-in">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-3.5 ${
                  item.iconBg === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 
                  item.iconBg === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
                Is GoHighLevel CRM<br /><span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                GoHighLevel CRM works best for businesses that rely on lead generation, follow-ups, and appointment booking. If your team is juggling spreadsheets, missing follow-ups, or paying for 5 different tools that don't talk to each other — this is for you.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2E4A]">GHL CRM setup makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A marketing agency managing multiple clients on GHL</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A service business that books appointments (real estate, home services, legal, health)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A coach or consultant running lead gen funnels</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A SaaS founder building on GoHighLevel's white-label platform</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Migrating from HubSpot, Salesforce, Zoho, or another CRM</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Tired of duct-taping tools that don't sync properly</li>
              </ul>
            </div>
            <div className="fade-in">
              <div className="bg-[#1C2E4A] rounded-2xl p-10 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">What Most Agencies Get Wrong</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Most GHL setups fail because they're built from templates with no strategy behind them. Pipelines don't match the real sales process. Tags are random. Automations break at 50 contacts.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">We build CRM systems that are tested in production — across 200+ projects. Every pipeline stage, every tag, every automation has a reason.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000]">3x</div>
                  <div className="text-[0.78rem] text-white/50">Faster client onboarding after CRM setup</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000]">42%</div>
                  <div className="text-[0.78rem] text-white/50">Average improvement in lead conversion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our CRM Setup Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Set Up Your<br /><span className="text-[#0E9BF0]">GoHighLevel CRM</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A structured process refined across 200+ GHL projects. No guesswork. No scope creep.</p>
          </div>
          <div className="flex flex-col">
            {processSteps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[#E8EDF4] last:border-b-0 fade-in">
                <div className="w-16 h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center text-[0.9rem] font-extrabold text-[#F8D000] flex-shrink-0">{step.number}</div>
                <div>
                  <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Get Your GoHighLevel CRM<br /><span className="text-[#F8D000]">Set Up the Right Way?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free 30-minute CRM audit. We'll review your current setup (or lack of one), identify what's missing, and map out exactly what your GHL CRM needs to look like.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="mailto:aryan@finzie.co" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free CRM Audit →
            </Link>
            <Link href="mailto:aryan@finzie.co" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              Or Email Us Directly
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Common Questions About<br /><span className="text-[#0E9BF0]">GoHighLevel CRM Setup</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-[#E8EDF4] ${openFaqIndex === index ? 'open' : ''}`}>
                <button
                  className="w-full bg-transparent border-none py-5 flex justify-between items-center cursor-pointer text-left font-['Poppins',sans-serif] text-[0.92rem] font-semibold text-[#1C2E4A] gap-4 hover:text-[#0E9BF0] transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  {faq.question}
                  <span className={`text-[0.7rem] text-[#8A9BB0] transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-[400px] pb-5' : 'max-h-0'}`}>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Related GHL Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Pair Your CRM With These<br /><span className="text-[#0E9BF0]">GHL Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedServices.map((service, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all fade-in">
                <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Stop Losing Leads to a<br /><span className="text-[#F8D000]">Broken CRM Setup.</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Your GoHighLevel CRM should work as hard as your sales team. Let our GHL experts build it right — so every lead is tracked, every follow-up is automated, and nothing falls through the cracks.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="mailto:aryan@finzie.co" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Schedule Your Free CRM Audit →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ServiceCRMSetup