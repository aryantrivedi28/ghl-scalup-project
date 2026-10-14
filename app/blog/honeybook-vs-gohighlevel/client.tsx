'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
      ArrowRight,
      ChevronDown,
      Copy,
      Linkedin,
      Twitter,
      BookOpen,
      Zap,
      AlertTriangle,
      Clock,
      Rocket,
      CheckCircle2,
      Image as ImageIcon,
      ExternalLink,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function HoneyBookVsGoHighLevelClient() {
      const [activeId, setActiveId] = useState<string>('');
      const [openBooking, setOpenBooking] = useState(false);

      const handleOpenBooking = () => {
            setOpenBooking(true);
      };

      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'quick-answer',
                        'at-a-glance',
                        'what-is-honeybook',
                        'what-is-gohighlevel',
                        '12-dimension-comparison',
                        'crm',
                        'lead-capture',
                        'proposals-contracts-booking',
                        'invoicing-payments',
                        'email-sms-marketing',
                        'workflow-flexibility',
                        'websites-funnels-forms',
                        'scheduling',
                        'reporting',
                        'integrations',
                        'ease-of-use',
                        'pricing-total-cost',
                        'which-better-business-type',
                        'when-honeybook-better',
                        'when-gohighlevel-better',
                        'can-use-both-together',
                        'should-switch',
                        'final-verdict',
                        'further-reading',
                        'faq'
                  ];

                  for (const id of sections) {
                        const element = document.getElementById(id);
                        if (element) {
                              const rect = element.getBoundingClientRect();
                              if (rect.top <= 150) {
                                    setActiveId(id);
                              }
                        }
                  }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollToHeading = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
      };

      const faqs = [
            {
                  q: "Is HoneyBook a CRM?",
                  a: "It has CRM functions: contacts, projects, tags and communication history. It is a client-management system rather than a sales-and-marketing CRM, so it has no campaigns or funnel tools."
            },
            {
                  q: "Is GoHighLevel cheaper than HoneyBook?",
                  a: "No, at list price. HoneyBook runs $29 to $109 per month billed yearly; GoHighLevel runs $97 to $497 per month plus usage. GoHighLevel can cost less overall if it replaces several paid tools."
            },
            {
                  q: "Is HoneyBook available outside the US?",
                  a: "HoneyBook states the US, Canada, the UK and Australia. One pricing-page pop-up says only the US and Canada. Confirm your country at sign-up."
            },
            {
                  q: "Can GoHighLevel do proposals and contracts like HoneyBook?",
                  a: "It can: templates, proposals, estimates, e-signature and payment collection. It has no conditional logic in documents and a different client experience, so test your own contract."
            },
            {
                  q: "Can HoneyBook send SMS campaigns?",
                  a: "It offers SMS reminders on Essentials and above. It is not designed for bulk SMS marketing. GoHighLevel is, with usage charges and carrier registration in the US."
            },
            {
                  q: "Can I export my data from HoneyBook?",
                  a: "Contacts can be exported as CSV, per HoneyBook's help article. We did not find a full project export; check your account and download signed files you need."
            },
            {
                  q: "Which is easier to learn?",
                  a: "HoneyBook, because its structure is already built. GoHighLevel takes longer because you design the structure."
            },
            {
                  q: "Should an agency use HoneyBook or GoHighLevel?",
                  a: "An agency serving clients usually needs GoHighLevel's sub-accounts. An agency could use HoneyBook to manage its own client contracts, but it is not built for client sub-accounts."
            },
            {
                  q: "Do you offer HoneyBook services?",
                  a: "No. GHL Scale Up does not provide HoneyBook services. Sage Kite, a separate website, publishes HoneyBook setup information."
            }
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'quick-answer', title: 'Quick Answer' },
            { id: 'at-a-glance', title: 'HoneyBook vs GoHighLevel at a Glance' },
            { id: 'what-is-honeybook', title: 'What Is HoneyBook?' },
            { id: 'what-is-gohighlevel', title: 'What Is GoHighLevel?' },
            { id: '12-dimension-comparison', title: '12-Dimension Comparison' },
            { id: 'crm', title: '1. CRM' },
            { id: 'lead-capture', title: '2. Lead Capture' },
            { id: 'proposals-contracts-booking', title: '3. Proposals, Contracts and Booking' },
            { id: 'invoicing-payments', title: '4. Invoicing and Payments' },
            { id: 'email-sms-marketing', title: '5. Email, SMS and Marketing' },
            { id: 'workflow-flexibility', title: '6. Workflow Flexibility' },
            { id: 'websites-funnels-forms', title: '7. Websites, Funnels and Forms' },
            { id: 'scheduling', title: '8. Scheduling' },
            { id: 'reporting', title: '9. Reporting' },
            { id: 'integrations', title: '10. Integrations' },
            { id: 'ease-of-use', title: '11. Ease of Use' },
            { id: 'pricing-total-cost', title: '12. Pricing and Total Cost' },
            { id: 'which-better-business-type', title: 'Which Is Better for Your Type of Business?' },
            { id: 'when-honeybook-better', title: 'When HoneyBook Is the Better Choice' },
            { id: 'when-gohighlevel-better', title: 'When GoHighLevel Is the Better Choice' },
            { id: 'can-use-both-together', title: 'Can You Use HoneyBook and GoHighLevel Together?' },
            { id: 'should-switch', title: 'Should You Switch From HoneyBook to GoHighLevel?' },
            { id: 'final-verdict', title: 'Final Verdict' },
            { id: 'further-reading', title: 'Further Reading for HoneyBook Users' },
            { id: 'faq', title: 'Frequently Asked Questions' }
      ];

      const atAGlanceData = [
            { problem: 'A clean path from inquiry to signed, paid client', lean: 'HoneyBook', why: 'Proposals, contracts, invoices, scheduling and a client portal are its core' },
            { problem: 'Following up with leads quickly by email and SMS', lean: 'GoHighLevel', why: 'Messaging and workflows are central to the platform' },
            { problem: 'Running a sales pipeline with several stages', lean: 'GoHighLevel', why: 'Pipelines and opportunities are core features' },
            { problem: 'Building landing pages, funnels or a full website', lean: 'GoHighLevel', why: 'Builders for sites, funnels and forms are part of the platform' },
            { problem: 'Running marketing for many client businesses', lean: 'GoHighLevel', why: 'Sub-accounts and SaaS mode are designed for agencies' },
            { problem: 'Keeping software simple and cost predictable as a solo operator', lean: 'HoneyBook', why: 'Lower list prices and a narrower tool to learn' },
            { problem: 'Both strong lead generation and a polished client flow', lean: 'Depends', why: 'One platform configured well, or two with a clear hand-off' },
      ];

      const businessTypeData = [
            { business: 'Solo photographer, planner or designer', usuallyBetterFit: 'HoneyBook', reason: 'Project-based, few contacts, high value on a smooth proposal and booking experience' },
            { business: 'Coach or consultant with a small group offer', usuallyBetterFit: 'Either', reason: 'HoneyBook for 1:1 clients; GoHighLevel if you run funnels, challenges or memberships. See best CRM for coaches' },
            { business: 'Small service firm with ads and a sales team', usuallyBetterFit: 'GoHighLevel', reason: 'Lead volume, speed to follow-up and pipeline reporting matter more' },
            { business: 'Local business (home services, clinics)', usuallyBetterFit: 'GoHighLevel', reason: 'Missed-call text-back, reviews and reminders are the core, not proposals' },
            { business: 'Marketing or web agency serving clients', usuallyBetterFit: 'GoHighLevel', reason: 'Sub-accounts and white label. See GoHighLevel for agencies' },
            { business: 'Business that needs both', usuallyBetterFit: 'Depends', reason: 'See the sections on using both and on switching' },
      ];

      const pricingData = [
            { costItem: 'Entry plan', honeybook: '$29 per month, billed yearly (Starter)', ghl: '$97 per month (check what it includes)' },
            { costItem: 'Mid plan', honeybook: '$49 per month, billed yearly (Essentials)', ghl: '$297 per month, or $2,970 annual' },
            { costItem: 'Top plan', honeybook: '$109 per month, billed yearly (Premium)', ghl: '$497 per month, or $4,970 annual' },
            { costItem: 'Monthly billing', honeybook: 'Available; prices not shown on the page we read', ghl: 'Month-to-month' },
            { costItem: 'Free trial', honeybook: '30 days per pricing page; 7 days per another FAQ section', ghl: '14 days' },
            { costItem: 'Payment processing', honeybook: 'Card from 2.7% + 10c or 2.9% + 25c (sources differ); ACH 1.5%', ghl: 'Your provider\'s fees (for example Stripe)' },
            { costItem: 'Usage charges', honeybook: 'Instant deposit 1% where eligible', ghl: 'Email, SMS, calls, AI, premium workflow actions' },
            { costItem: 'Setup effort', honeybook: 'Low', ghl: 'Moderate to high' },
      ];

      const whatMovesData = [
            { item: 'Contacts', typicallyMoves: 'Yes, by CSV', notes: 'Map fields and tags before importing; deduplicate' },
            { item: 'Signed contracts and files', typicallyMoves: 'Download manually', notes: 'Keep PDFs for your records; they are not workflow data' },
            { item: 'Invoices and payment history', typicallyMoves: 'Not as live records', notes: 'Keep exports for accounting; open balances need a plan' },
            { item: 'Project and stage history', typicallyMoves: 'Rebuild', notes: 'Recreate as pipeline stages and notes if needed' },
            { item: 'Proposal and contract templates', typicallyMoves: 'Rebuild', notes: 'Re-create in GoHighLevel documents; test signing and payment' },
            { item: 'Automations', typicallyMoves: 'Rebuild', notes: 'Redesign as workflows; do not copy step for step' },
            { item: 'Lead forms', typicallyMoves: 'Rebuild', notes: 'Re-create and re-embed on your site' },
      ];

      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
                  <Link
                        // onClick={handleOpenBooking}
                        href="/book-a-call"
                        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                        Book a 30 min Free Call
                        <ArrowRight className="w-3 h-3" />
                  </Link>
            </div>
      );

      return (
            <>
                  {/* Progress Bar */}
                  <div className="fixed top-0 left-0 h-1 bg-[#0E9BF0] z-50 transition-all duration-100" id="progress-bar" />

                  {/* Breadcrumb */}
                  <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
                        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
                              <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
                              <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
                              <Link href="/blog" className="hover:text-[#0E9BF0] transition-colors">Blog</Link>
                              <ArrowRight className="w-3 h-3 text-[#96A0B5]" />
                              <span className="text-[#1A2236] font-medium">HoneyBook vs GoHighLevel: Honest Comparison (2026)</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">HoneyBook</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    HoneyBook vs GoHighLevel:<br />
                                    <span className="text-[#F8D000]">Which Platform Fits Your Business?</span>
                              </h1>

                              <div className="flex items-center gap-3 mb-6">
                                    <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                                          <img
                                                src="/web-app-manifest-192x192.png"
                                                alt="GHL Scale Up"
                                                className="w-full h-full object-cover"
                                          />
                                    </div>
                                    <div>
                                          <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Facts checked against official documentation and pricing pages, 12 to 14 October 2026</div>
                                    </div>
                              </div>

                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
                                    If you run a service business, your day probably has two kinds of work in it. One is getting people to say yes: answering inquiries, following up, booking calls. The other is handling the yes: the proposal, the contract, the deposit, the reminders, the onboarding. HoneyBook and GoHighLevel both touch both kinds of work, but they start from opposite ends. That is the real difference, and it matters more than any feature checklist.
                              </p>

                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
                                    This guide compares them on twelve practical dimensions, says plainly where HoneyBook is the better choice, and covers the question many readers arrive with: should I leave HoneyBook at all?
                              </p>

                              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                          <Zap className="w-5 h-5 text-[#F8D000]" />
                                          <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                          <strong className="text-white">HoneyBook is built around the client project, from proposal to paid invoice.</strong> It is usually the simpler choice for a solo or small service business whose main need is a tidy, repeatable client flow. <strong className="text-white">GoHighLevel is built around leads and communication:</strong> capturing them, following up by email and SMS, moving them through a pipeline, and running campaigns, often for many clients. It suits businesses whose growth depends on marketing automation or agencies that serve other businesses. It asks for more setup, costs more at list price, and its documents are less specialized.
                                    </p>
                              </div>

                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
                                    <strong className="text-white">A note on perspective.</strong> GHL Scale Up is a GoHighLevel implementation agency, so GoHighLevel is the platform we know best and the one our services are built around. Weigh our claims accordingly and check them against the official documentation we cite. We describe HoneyBook on its own terms, and in several situations below the honest answer is to stay on it.
                              </p>

                              <div className="flex flex-wrap gap-3">
                                    <Link
                                          href="/contact"
                                          className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
                                    >
                                          <Rocket className="w-4 h-4" />
                                          Get Platform Advice
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                          href="#when-honeybook-better"
                                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                                    >
                                          See When HoneyBook Wins
                                          <ChevronDown className="w-4 h-4" />
                                    </Link>
                              </div>
                        </div>
                  </section>

                  {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
                  <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
                        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

                              {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
                              <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
                                    <div className="hidden lg:block mb-6">
                                          <ProjectHelpCard />
                                    </div>

                                    <nav className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                                          <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4 flex items-center gap-2">
                                                <BookOpen className="w-3 h-3" />
                                                In This Guide
                                          </div>
                                          <ul className="space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#DDE1E9] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-[#96A0B5]">
                                                {tocItems.map((item) => (
                                                      <li key={item.id}>
                                                            <button
                                                                  onClick={() => scrollToHeading(item.id)}
                                                                  className={`block w-full text-left text-xs md:text-sm py-2 px-3 rounded transition-all duration-200 ${activeId === item.id
                                                                        ? 'bg-[#0E9BF0] text-white font-medium shadow-sm'
                                                                        : 'text-[#5C6880] hover:text-[#0E9BF0] hover:bg-white'
                                                                        }`}
                                                            >
                                                                  <span className="flex items-start gap-2">
                                                                        {activeId === item.id && (
                                                                              <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                                                                        )}
                                                                        <span className="flex-1">{item.title}</span>
                                                                  </span>
                                                            </button>
                                                      </li>
                                                ))}
                                          </ul>
                                    </nav>

                                    <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
                                          <div className="flex items-center gap-3 mb-4">
                                                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                                                      <img
                                                            src="/web-app-manifest-192x192.png"
                                                            alt="GHL Scale Up"
                                                            className="w-full h-full object-cover"
                                                      />
                                                </div>
                                                <div>
                                                      <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                                                      <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                                                </div>
                                          </div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-3">
                                                5+ years GHL experience · 200+ systems built globally. All product details verified against official documentation as of October 2026.
                                          </p>
                                          <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
                                          <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
                                          <div className="flex gap-2 flex-wrap">
                                                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                                                      <Linkedin className="w-3 h-3" />
                                                      LinkedIn
                                                </a>
                                                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all">
                                                      <Twitter className="w-3 h-3" />
                                                      X
                                                </a>
                                                <button
                                                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                                                      className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"
                                                >
                                                      <Copy className="w-3 h-3" />
                                                      Copy link
                                                </button>
                                          </div>
                                    </div>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
                                          <div className="text-sm font-bold text-white mb-2">Need Help Choosing?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses decide which platform fits and set it up correctly.</p>
                                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                                                Get Help
                                                <ArrowRight className="w-3 h-3" />
                                          </Link>
                                    </div>
                              </aside>

                              {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
                              <main className="min-w-0 order-2">

                                    {/* Table of Contents - Mobile Only */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
                                          <div className="flex items-center gap-2 mb-4">
                                                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What's in this guide</span>
                                          </div>
                                          <div className="grid sm:grid-cols-2 gap-2">
                                                {tocItems.map((item) => (
                                                      <button
                                                            key={item.id}
                                                            onClick={() => scrollToHeading(item.id)}
                                                            className="text-left text-sm text-[#5C6880] hover:text-[#0E9BF0] transition-colors py-1"
                                                      >
                                                            {item.title}
                                                      </button>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="lg:hidden mb-8">
                                          <ProjectHelpCard />
                                    </div>

                                    {/* Section: At a Glance */}
                                    <h2 id="at-a-glance" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          HoneyBook vs GoHighLevel at a Glance
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">If your main problem is...</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Lean towards</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {atAGlanceData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                                                                  <td className={`py-3 px-3 font-semibold ${item.lean === 'HoneyBook' ? 'text-[#25C97D]' : item.lean === 'GoHighLevel' ? 'text-[#0E9BF0]' : 'text-[#F8D000]'}`}>{item.lean}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
                                    <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                          <div className="relative w-full h-auto bg-[#F8F9FB]">
                                                <Image
                                                      src="/blog/honeybook-vs-gohighlevel.png"
                                                      alt="HoneyBook vs GoHighLevel: Platform architecture, 12-dimension comparison, and fit by business type"
                                                      width={1200}
                                                      height={500}
                                                      className="w-full h-auto object-cover"
                                                      priority
                                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                                />
                                          </div>
                                          <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                                                <ImageIcon className="w-3.5 h-3.5" />
                                                <span>HoneyBook vs GoHighLevel: Platform architecture, 12-dimension comparison, and fit by business type</span>
                                          </div>
                                    </div>

                                    {/* Section: What Is HoneyBook */}
                                    <h2 id="what-is-honeybook" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What Is HoneyBook?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook is client-management software for independent service businesses such as photographers, planners, designers, consultants and coaches. Its model is the project: a client inquiry becomes a project that holds the proposal, contract, invoice, scheduled sessions, files and messages. The pitch is that you stop stitching these together from separate tools.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook sells three plans: Starter, Essentials and Premium. On its US pricing page they are $29, $49 and $109 per month when billed yearly. The first plan limits you to a small number of lead forms and one scheduling session, and automations, a fuller scheduler, SMS reminders and QuickBooks Online start on Essentials. Team members are capped at two on Essentials and unlimited on Premium.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">Availability by country.</strong> This matters if you are outside the United States. HoneyBook's sign-up selector and a May 2026 announcement list the United States, Canada, the United Kingdom and Australia, with pricing in USD, CAD, GBP and AUD. One pop-up on its US pricing page says only the United States and Canada, and other countries can join a waiting list. Treat the four-country list as what HoneyBook states, and confirm your country at sign-up before you plan around it. GoHighLevel is not limited this way, although payment providers and phone and SMS rules vary by region.
                                    </p>

                                    {/* Section: What Is GoHighLevel */}
                                    <h2 id="what-is-gohighlevel" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What Is GoHighLevel?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          GoHighLevel (now branded HighLevel) is an all-in-one sales and marketing platform. It combines a CRM, pipelines, calendars, forms, funnels and websites, email and SMS, workflows, payments and reporting. It is sold mainly to agencies: plans are $97, $297 and $497 per month, and the higher plans add unlimited client accounts and white-label options. Many ordinary businesses use it for their own marketing too. For background, see <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">what GoHighLevel is</Link> and <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">how its pricing works</Link>.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Its breadth is both the draw and the cost. You get building blocks, and you decide how they fit together. Nothing arrives shaped like your onboarding process.
                                    </p>

                                    {/* Section: 12-Dimension Comparison */}
                                    <h2 id="12-dimension-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          HoneyBook vs GoHighLevel: 12-Dimension Comparison
                                    </h2>

                                    {/* 1. CRM */}
                                    <h2 id="crm" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          1. CRM
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook's CRM is client-centered: contacts, projects, tags and a record of what was sent and signed. It works well when every contact is either a prospect for a project or an existing client. GoHighLevel's CRM is a general contact database with custom fields, tags, smart lists, pipelines and a unified conversation inbox, so it handles large lists and marketing segments better. If your contacts are a few dozen active clients, HoneyBook is enough. If they are thousands of leads at different stages, GoHighLevel is built for it.
                                    </p>

                                    {/* 2. Lead Capture */}
                                    <h2 id="lead-capture" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          2. Lead Capture
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook offers lead forms that start a project, with 2 live forms on Starter, 10 on Essentials and unlimited on Premium. GoHighLevel offers forms, surveys, funnels, landing pages and chat widgets, with triggers that start a workflow on submission. For a business that gets leads by referral, HoneyBook's forms are fine. For one that runs ads or SEO and tests pages, GoHighLevel gives far more control.
                                    </p>

                                    {/* 3. Proposals, Contracts and Booking */}
                                    <h2 id="proposals-contracts-booking" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          3. Proposals, Contracts and Booking
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is HoneyBook's home ground. Its Smart Files combine a proposal, contract, invoice and scheduler in one file the client works through, so the client can choose a package, sign, pay a deposit and pick a time in one sitting. GoHighLevel's Documents & Contracts handles templates, proposals and estimates, e-signature and payment collection, with an invoice generated after signing. It works, but it has no conditional logic inside documents, so contracts with many variations need separate templates or workflows that choose between them. Test your real offer in both before assuming parity.
                                    </p>

                                    {/* 4. Invoicing and Payments */}
                                    <h2 id="invoicing-payments" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          4. Invoicing and Payments
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Both support invoices, deposits, payment plans and card and bank payments. HoneyBook runs payments through its own processing: its pages state card fees from 2.7% + 10 cents in one place and 2.9% + 25 cents in another, and 1.5% for bank transfers, so confirm the current rate. In GoHighLevel you connect a payment provider such as Stripe, and that provider's fees apply; which providers work varies by product and region, so check HighLevel's payment-provider article for your country. The practical difference is that HoneyBook gives you one built-in path, while GoHighLevel gives you choices and more to configure.
                                    </p>

                                    {/* 5. Email, SMS and Marketing */}
                                    <h2 id="email-sms-marketing" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          5. Email, SMS and Marketing
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook sends project emails and, on Essentials and above, SMS reminders. It is not designed for bulk campaigns, newsletters or sequences aimed at a cold list. GoHighLevel is. It sends email and SMS campaigns, runs sequences, and keeps conversations in one inbox. The cost is usage-based: HighLevel lists email at $0.675 per 1,000 emails, and calls, SMS and AI carry their own charges. If you plan to text clients in the US, you will also need carrier registration; see <Link href="/blog/what-is-a2p-10dlc" className="text-[#0E9BF0] hover:underline">what A2P 10DLC is</Link>.
                                    </p>

                                    {/* 6. Workflow Flexibility */}
                                    <h2 id="workflow-flexibility" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          6. Workflow Flexibility
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook Automations are tied to project stages and activity. Its Automations 2.0 documentation describes triggers, actions, waits and conditions, and they are available from the Essentials plan. They cover the common client journey well and are quick to set up. GoHighLevel workflows are broader: more triggers, many action types, branching, webhooks and integrations, and they work across contacts, opportunities, appointments and payments. Some actions carry a charge (premium actions are $0.01 per execution, or lower with a Workflow Pro tier). The flexibility is real, and so is the need to maintain it; see <Link href="/blog/gohighlevel-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel automation explained</Link>.
                                    </p>

                                    {/* 7. Websites, Funnels and Forms */}
                                    <h2 id="websites-funnels-forms" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          7. Websites, Funnels and Forms
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook is not a website or funnel builder. It offers lead forms and a way to embed them on a site you build elsewhere. GoHighLevel includes website, funnel and membership builders. If you want one system for your site, forms and follow-up, that is a point for GoHighLevel. If you are happy with a Squarespace or WordPress site, it does not matter.
                                    </p>

                                    {/* 8. Scheduling */}
                                    <h2 id="scheduling" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          8. Scheduling
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook scheduling is part of the client flow: a scheduler block can sit inside a Smart File and book only after the client signs and pays. Round-robin session types can assign the next available team member. Starter allows one session type; paid tiers allow more (its pricing page and help article give different limits, so check). GoHighLevel's calendars are broader: round-robin, group and collective calendars, reminders, payments and workflow triggers, as covered in <Link href="/blog/gohighlevel-calendar-booking" className="text-[#0E9BF0] hover:underline">GoHighLevel calendar booking</Link>. For one person booking discovery calls and sessions, either works.
                                    </p>

                                    {/* 9. Reporting */}
                                    <h2 id="reporting" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          9. Reporting
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook offers basic reports on Starter, standard on Essentials and advanced on Premium, focused on revenue, projects and lead sources. GoHighLevel offers dashboards, pipeline, appointment and payment reports, and attribution views, with agency-level reporting on higher plans. Neither replaces your accounting software. If you need marketing attribution, GoHighLevel has more to offer; if you need to see what is booked and what is owed, HoneyBook's reports are usually enough.
                                    </p>

                                    {/* 10. Integrations */}
                                    <h2 id="integrations" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          10. Integrations
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook connects with QuickBooks Online (Essentials and above), Gmail, Google Calendar, Calendly and Zapier, which covers many everyday needs. GoHighLevel connects through Zapier, webhooks and an API, with more advanced API access on higher plans; see <Link href="/blog/connect-zapier-to-gohighlevel" className="text-[#0E9BF0] hover:underline">connecting Zapier to GoHighLevel</Link>. Neither is a closed system. If you rely on a niche tool, check for a native integration or a Zapier path before committing.
                                    </p>

                                    {/* 11. Ease of Use */}
                                    <h2 id="ease-of-use" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          11. Ease of Use
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook is easier to learn. A new user can send a first proposal within a day because the structure is already there. GoHighLevel has a steeper learning curve because you are building the structure. A business with no one to set it up or maintain it will often do better on the simpler tool, which is not a flaw in either product.
                                    </p>

                                    {/* 12. Pricing and Total Cost */}
                                    <h2 id="pricing-total-cost" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          12. Pricing and Total Cost
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Cost item</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">HoneyBook</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {pricingData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.costItem}</td>
                                                                  <td className="py-3 px-3 text-[#25C97D]">{item.honeybook}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A simple list-price comparison: HoneyBook Essentials at $49 per month is $588 a year before payment fees. GoHighLevel's $97 plan is $1,164 a year, or $970 on annual billing, before usage and payment fees. The gap narrows if GoHighLevel replaces tools you pay for separately, such as an email platform, a scheduler and a form builder, and it widens if you only use it as a proposal tool. Count what you would actually cancel, not what the platform could replace.
                                    </p>

                                    {/* Section: Which Better Business Type */}
                                    <h2 id="which-better-business-type" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Which Is Better for Your Type of Business?
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Business</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Usually a better fit</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Reason</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {businessTypeData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.business}</td>
                                                                  <td className={`py-3 px-3 font-semibold ${item.usuallyBetterFit === 'HoneyBook' ? 'text-[#25C97D]' : item.usuallyBetterFit === 'GoHighLevel' ? 'text-[#0E9BF0]' : 'text-[#F8D000]'}`}>{item.usuallyBetterFit}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.reason}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: When HoneyBook Is Better */}
                                    <h2 id="when-honeybook-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          When HoneyBook Is the Better Choice
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HoneyBook is the better fit when your bottleneck is the client experience after the inquiry, you have a small team, and you value simplicity over breadth. Specifically:
                                    </p>
                                    <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>You are a solo operator or have up to a couple of team members, and most of your revenue comes from projects you quote and invoice.</li>
                                          <li>Your leads mostly arrive by referral or social media, and you do not run campaigns or send newsletters to large lists.</li>
                                          <li>You want one clean client-facing file (proposal, contract and deposit) rather than separate documents.</li>
                                          <li>No one on your team wants to build and maintain automations.</li>
                                          <li>Your monthly software budget is tight, and a $29 to $109 plan beats $97 to $497 plus usage.</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          If that is you, moving to GoHighLevel will likely add complexity you will not use. The honest advice is to stay, and put effort into your HoneyBook templates and automations. If you want help with that, <Link href="https://www.sagekite.com/platforms/honeybook" className="text-[#0E9BF0] hover:underline" target="_blank" rel="noopener">HoneyBook setup and implementation services</Link> are offered by Sage Kite, a separate independent website that is not affiliated with or certified by HoneyBook, and not part of GHL Scale Up.
                                    </p>

                                    <div className="my-6">
                                          <a
                                                href="https://www.sagekite.com/platforms/honeybook"
                                                target="_blank"
                                                rel="noopener"
                                                className="inline-flex items-center gap-2 bg-[#1C2E4A] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2A3F5F] transition-all"
                                          >
                                                Explore HoneyBook Setup Services
                                                <ExternalLink className="w-4 h-4" />
                                          </a>
                                          <p className="text-xs text-[#5C6880] mt-2">Opens Sage Kite, a separate website, in a new page. It does not book or purchase anything.</p>
                                    </div>

                                    {/* Section: When GoHighLevel Is Better */}
                                    <h2 id="when-gohighlevel-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          When GoHighLevel Is the Better Choice
                                    </h2>
                                    <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Your growth depends on leads, and speed of follow-up by text and email decides who wins the job.</li>
                                          <li>You need pipelines, sales reporting or a team working a shared inbox.</li>
                                          <li>You want your website, forms, funnels, booking and follow-up in one system.</li>
                                          <li>You serve other businesses and want sub-accounts, snapshots or SaaS mode.</li>
                                          <li>You already pay for several tools (email, scheduler, forms, funnel builder) that one platform could replace.</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Even then, be clear on the trade: you take on configuration and maintenance, and usage costs rise with volume. <Link href="/blog/ghl-pipeline-management" className="text-[#0E9BF0] hover:underline">Pipeline management</Link> is a good first project because it shows quickly whether the platform fits how you sell.
                                    </p>

                                    {/* Section: Can Use Both Together */}
                                    <h2 id="can-use-both-together" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Can You Use HoneyBook and GoHighLevel Together?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Yes, and some businesses do. A common pattern is GoHighLevel for lead capture, follow-up and booking the first call, then HoneyBook for the proposal, contract and onboarding once the lead says yes. Zapier can pass new clients from one to the other, as both integrate with it.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The cost is two sets of contact records, two bills and a hand-off that can break. Decide which system is the source of truth for contact details, and write down what triggers the transfer. If you notice you are rebuilding client documents in GoHighLevel to avoid the hand-off, that is the signal to pick one platform.
                                    </p>

                                    {/* Section: Should You Switch */}
                                    <h2 id="should-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Should You Switch From HoneyBook to GoHighLevel?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Switch when the pain you feel is about marketing and volume, not about HoneyBook's documents. Use these questions:
                                    </p>
                                    <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li><strong className="text-[#1A2236]">Is the problem getting and following up with leads, or serving the ones you have?</strong> If the latter, switching will not help.</li>
                                          <li><strong className="text-[#1A2236]">Would you cancel other tools if GoHighLevel took over their work?</strong> If not, total cost goes up with no offsetting saving.</li>
                                          <li><strong className="text-[#1A2236]">Do you have the time, or someone else, to build and maintain the system?</strong> An unfinished GoHighLevel build is worse than a finished HoneyBook one.</li>
                                          <li><strong className="text-[#1A2236]">Do your contracts and proposals depend on conditional logic or polished client files that GoHighLevel documents may not match?</strong> Test one real contract first.</li>
                                          <li><strong className="text-[#1A2236]">Is HoneyBook available and priced acceptably in your country?</strong> If a limit or fee is the issue, compare total cost, not features.</li>
                                    </ol>

                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">What moves and what gets rebuilt</strong>
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Based on HoneyBook's help documentation reviewed for this article, contacts can be exported as a CSV file. We did not find a full export of projects, so plan on the rest being manual or rebuilt. Check your own account before you rely on this.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Item</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Typically moves?</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Notes</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {whatMovesData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.item}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.typicallyMoves}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.notes}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Run both systems side by side for a short period, move new inquiries first, and finish open projects where they started. For checklists and common mistakes, see <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">the GoHighLevel migration checklist</Link> and <Link href="/blog/what-a-gohighlevel-migration-service-migrates" className="text-[#0E9BF0] hover:underline">what a migration service moves</Link>. If you want help planning a move, <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">our migration service</Link> covers platforms with an export function; ask whether HoneyBook is in scope for your case. If you are comparing a similar tool, see <Link href="/blog/gohighlevel-vs-dubsado" className="text-[#0E9BF0] hover:underline">GoHighLevel vs Dubsado</Link>.
                                    </p>

                                    {/* Section: Final Verdict */}
                                    <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Final Verdict
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Choose HoneyBook if your business is project-based, small, and lives or dies on the client experience after the inquiry. Choose GoHighLevel if your business is lead-driven, needs marketing automation across email and SMS, or serves other businesses. Use both only if you can name who owns each record and what triggers the hand-off.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The most expensive mistake is not picking the wrong tool. It is moving for the features while the actual bottleneck is somewhere else. If you want a second opinion on your own setup before deciding, <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">our CRM setup service</Link> is where we would start.
                                    </p>

                                    {/* Section: Further Reading */}
                                    <h2 id="further-reading" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Further Reading for HoneyBook Users
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          If you decide to stay on HoneyBook, Sage Kite publishes independent guidance and setup information on it. Sage Kite is a separate website and is not part of GHL Scale Up.
                                    </p>
                                    <div className="my-6">
                                          <a
                                                href="https://www.sagekite.com/platforms/honeybook"
                                                target="_blank"
                                                rel="noopener"
                                                className="inline-flex items-center gap-2 bg-[#1C2E4A] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2A3F5F] transition-all"
                                          >
                                                Visit Sage Kite
                                                <ExternalLink className="w-4 h-4" />
                                          </a>
                                          <p className="text-xs text-[#5C6880] mt-2">Opens Sage Kite, a separate website. It does not book or purchase anything.</p>
                                    </div>

                                    {/* Section: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-3">
                                          {faqs.map((faq, index) => (
                                                <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                                                      <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-[0.92rem] font-semibold text-[#1A2236] hover:text-[#0E9BF0] transition-colors">
                                                            {faq.q}
                                                            <ChevronDown className="w-4 h-4 text-[#8A9BB0] transition-transform group-open:rotate-180" />
                                                      </summary>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed pb-4">{faq.a}</p>
                                                </details>
                                          ))}
                                    </div>

                                    {/* Contextual CTA inside FAQ */}
                                    <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
                                          Still unsure which platform is right for your business?{' '}
                                          <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free platform assessment</Link>.
                                    </div>

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? →</Link>
                                                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing Guide →</Link>
                                                <Link href="/blog/gohighlevel-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Automation Explained →</Link>
                                                <Link href="/blog/what-is-a2p-10dlc" className="text-sm text-[#0E9BF0] hover:underline">What Is A2P 10DLC? →</Link>
                                                <Link href="/blog/gohighlevel-calendar-booking" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Calendar Booking →</Link>
                                                <Link href="/blog/connect-zapier-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Connecting Zapier to GoHighLevel →</Link>
                                                <Link href="/blog/best-crm-for-coaches" className="text-sm text-[#0E9BF0] hover:underline">Best CRM for Coaches →</Link>
                                                <Link href="/blog/gohighlevel-for-agencies" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Agencies →</Link>
                                                <Link href="/blog/ghl-pipeline-management" className="text-sm text-[#0E9BF0] hover:underline">GHL Pipeline Management →</Link>
                                                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                                                <Link href="/blog/what-a-gohighlevel-migration-service-migrates" className="text-sm text-[#0E9BF0] hover:underline">What a GoHighLevel Migration Service Migrates →</Link>
                                                <Link href="/blog/gohighlevel-vs-dubsado" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs Dubsado →</Link>
                                                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Service →</Link>
                                                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                                          </div>
                                    </div>

                                    {/* Final CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Not Sure Which Platform to Choose?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      We help businesses compare platforms and set up the right system for their specific needs. Book a free assessment.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                                                      Book Your Free Platform Assessment
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                          </div>
                                    </div>

                                    {/* Author Section */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
                                          <div className="flex items-center gap-3 mb-3">
                                                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                                                      <img
                                                            src="/web-app-manifest-192x192.png"
                                                            alt="GHL Scale Up"
                                                            className="w-full h-full object-cover"
                                                      />
                                                </div>
                                                <div>
                                                      <div className="text-sm font-bold text-[#1A2236]">GHL Scale Up Team</div>
                                                      <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built and migrated globally</div>
                                                </div>
                                          </div>
                                          <p className="text-xs text-[#5C6880] leading-relaxed">
                                                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience comparing platforms and migrating businesses to GoHighLevel. All product details verified against official documentation as of October 2026.
                                          </p>
                                          <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
                                    </div>
                              </main>
                        </div>
                  </div>

                  {/* Booking Modal - Rendered at root level */}
                  <BookingModal open={openBooking} setOpen={setOpenBooking} />

                  {/* Progress Bar Script */}
                  <script dangerouslySetInnerHTML={{
                        __html: `
          const progressBar = document.getElementById('progress-bar');
          if (progressBar) {
            window.addEventListener('scroll', () => {
              const scrollTop = window.scrollY;
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const progress = (scrollTop / docHeight) * 100;
              progressBar.style.width = Math.min(progress, 100) + '%';
            });
          }
        `
                  }} />
            </>
      );
}