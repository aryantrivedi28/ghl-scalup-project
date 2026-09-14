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
  Star,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Shield,
  BarChart3,
  Workflow,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function MailchimpToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'what-transfers',
        'export-audience',
        'tags-fields',
        'rebuild-automations',
        'email-templates',
        'forms-integrations',
        'deliverability',
        'should-you-migrate',
        'timeline',
        'mistakes',
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
      q: "Can Mailchimp be migrated to GoHighLevel?",
      a: "Yes, though not as a single automatic transfer. Contacts, tags, merge fields, and subscription status export from Mailchimp and import into GHL. Customer Journeys, campaign statistics, forms, and landing pages do not transfer and need to be manually rebuilt."
    },
    {
      q: "How do I migrate Mailchimp contacts to GoHighLevel?",
      a: "Export each audience separately from Mailchimp's Audience section, recreate your custom fields and tags in GHL first, then import the CSV, checking that subscription status is preserved and that unsubscribed contacts are not treated as active."
    },
    {
      q: "Can Mailchimp automations be migrated to GoHighLevel?",
      a: "No, not automatically. Document each Customer Journey's trigger, steps, and exit condition, then rebuild the same logic manually in GHL's workflow builder."
    },
    {
      q: "What happens to unsubscribed Mailchimp contacts when I migrate?",
      a: "Their status should carry through the export, but it needs to be actively preserved and configured in GHL rather than assumed. Mark unsubscribed and cleaned contacts as suppressed from marketing in GHL to avoid re-enrolling people who opted out."
    },
    {
      q: "Do Mailchimp email templates work in GoHighLevel?",
      a: "Not directly. Copy the HTML source of each active template into GHL's HTML template editor and translate every merge field to GHL's syntax. Some CSS may render slightly differently and need minor adjustment."
    },
    {
      q: "What happens to my Mailchimp campaign history?",
      a: "Open rates, click data, and A/B test results stay in Mailchimp and do not transfer. Export or screenshot anything you want to reference later before cancelling, and consider keeping Mailchimp accessible as an archive for a period after migration."
    },
    {
      q: "How long does a Mailchimp to GoHighLevel migration take?",
      a: "Roughly a week for a simple single audience account, one to two weeks for a standard migration, and three to four weeks for a complex account with multiple audiences and many automations, with domain warmup continuing afterward."
    },
    {
      q: "Should I keep Mailchimp after migrating to GoHighLevel?",
      a: "Yes, for a period. Keep it accessible as a read-only archive for your historical campaign data and as a fallback during parallel running, and cancel only once GHL is fully validated."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: 'Why Do Businesses Migrate From Mailchimp to GoHighLevel?' },
    { id: 'what-transfers', title: 'What Actually Transfers, and What Needs Rebuilding' },
    { id: 'subscription-status', title: 'Subscription Status Is Not Just a Data Field' },
    { id: 'export-audience', title: 'How Do You Export Your Mailchimp Audience?' },
    { id: 'tags-fields', title: 'How Do Mailchimp Tags, Segments, and Groups Map to GoHighLevel?' },
    { id: 'rebuild-automations', title: 'How Do You Rebuild Mailchimp Automations in GoHighLevel?' },
    { id: 'email-templates', title: 'How Do You Migrate Email Templates?' },
    { id: 'forms-integrations', title: 'Forms, Website Signups, and Integrations' },
    { id: 'deliverability', title: 'How Do You Protect Deliverability During Cutover?' },
    { id: 'should-you-migrate', title: 'Should You Migrate From Mailchimp to GoHighLevel?' },
    { id: 'timeline', title: 'How Long Does a Mailchimp to GoHighLevel Migration Take?' },
    { id: 'mistakes', title: 'Common Mailchimp to GoHighLevel Migration Mistakes' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const transfers = [
    { asset: 'Contacts (audience data)', transfers: 'Yes', how: 'CSV export from Mailchimp, CSV import to GHL' },
    { asset: 'Merge fields', transfers: 'Yes, as custom fields', how: 'Recreate matching custom fields in GHL before import' },
    { asset: 'Tags', transfers: 'Yes', how: 'Included in the audience export, imported as GHL tags' },
    { asset: 'Subscription status', transfers: 'Yes, but needs careful handling', how: 'Subscribed, unsubscribed, and cleaned status carries through the export; see below' },
    { asset: 'Email templates', transfers: 'Manual copy', how: 'Copy the HTML source into GHL and translate merge field syntax' },
    { asset: 'Customer Journeys and automations', transfers: 'No', how: 'Document the logic, then manually rebuild in GHL\'s workflow builder' },
    { asset: 'Campaign statistics and A/B test history', transfers: 'No', how: 'Stays in Mailchimp; export or screenshot anything you need to reference later' },
    { asset: 'Signup forms and landing pages', transfers: 'No', how: 'Rebuild in GHL\'s Forms and Funnel builder' },
    { asset: 'Sending domain reputation', transfers: 'No', how: 'A new sending domain starts with no reputation and needs to build it' }
  ];

  const mergeFields = [
    { mailchimp: '*|FNAME|*', ghl: '{{contact.first_name}}' },
    { mailchimp: '*|LNAME|*', ghl: '{{contact.last_name}}' },
    { mailchimp: '*|EMAIL|*', ghl: '{{contact.email}}' },
    { mailchimp: '*|UNSUB|*', ghl: '{{unsubscribe_url}}' },
    { mailchimp: 'Custom merge fields', ghl: '{{custom_values.field_name}}, referencing the custom field you created' }
  ];

  const migrationMistakes = [
    'Importing every contact as active without preserving unsubscribed and cleaned status, risking re-enrollment of people who opted out',
    'Assuming Customer Journeys will transfer the way contacts do',
    'Forgetting website forms still pointed at Mailchimp after the migration is considered finished',
    'Sending to a full list immediately on a new, unauthenticated sending domain',
    'Treating segments and tags as the same thing when they need different migration treatment'
  ];

  // Reusable Project Help Card Component
  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Link
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
          <span className="text-[#1A2236] font-medium">Mailchimp to GoHighLevel Migration</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Mailchimp</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Marketing</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Mailchimp to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide</span>
          </h1>

          {/* Author Byline */}
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ builds delivered · Verified against GoHighLevel's official Mailchimp migration documentation, September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Mailchimp is built around a single channel, email, and a single audience structure. GoHighLevel is built around a CRM with pipelines, SMS, calendars, and workflows, where email is one of several channels rather than the whole platform. Moving from Mailchimp to GoHighLevel is usually less about transferring data and more about deciding how much of your marketing process you want to rebuild using capabilities Mailchimp never offered.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              to migrate from Mailchimp to GoHighLevel, export each Mailchimp audience separately (Audience, then Manage Audience, then Export Audience), recreate your custom fields and tags in GHL before importing, import contacts with subscription status preserved, translate your email templates by copying HTML into GHL and converting merge field syntax, and document then manually rebuild any Customer Journeys or automations, since none of that transfers. Set up and authenticate a new sending domain, build sending volume gradually rather than blasting your full list on day one, and run both platforms in parallel for a week or two before fully cutting over. Simple migrations, a single audience under 10,000 contacts with few automations, typically take about a week. Larger or more automation-heavy accounts take 2 to 4 weeks.
            </p>
          </div>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Migration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#deliverability"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Deliverability Guide
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
            {/* Project Help Card */}
            <div className="hidden lg:block mb-6">
              <ProjectHelpCard />
            </div>

            {/* Table of Contents - Sticky */}
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

            {/* About the Author */}
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
                  <div className="text-xs text-white/50">GoHighLevel Migration Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built and migrated globally. All technical details verified as of July 2026.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* Share Buttons */}
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

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
              <div className="text-sm font-bold text-white mb-2">Migrating from Mailchimp?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle Mailchimp migrations end-to-end — audience export, template HTML translation, automation rebuild, and deliverability warmup.</p>
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

            {/* Mobile Project Help Card - visible on mobile only */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section 1: Why Migrate */}
            <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Why Do Businesses Migrate From Mailchimp to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Mailchimp is where a lot of businesses start with email marketing, and the reasons to move usually show up once the business has outgrown email as its only channel.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Email-only ceiling:</strong> once a business needs to track leads through a sales process, book appointments, or follow up by text message, Mailchimp becomes one tool in a growing stack rather than the whole system.</li>
              <li><strong className="text-[#1A2236]">Limited CRM depth:</strong> Mailchimp's contact management does not include true sales pipelines, deal values, or team assignment logic the way a dedicated CRM does.</li>
              <li><strong className="text-[#1A2236]">Simpler automation logic:</strong> Mailchimp's Customer Journeys handle straightforward triggers well, but GoHighLevel's workflow builder supports more complex branching, multi-channel actions, and conditional logic natively.</li>
              <li><strong className="text-[#1A2236]">Pricing that scales with contact count:</strong> Mailchimp's cost climbs as your list grows. GoHighLevel charges a flat rate per plan regardless of contact volume.</li>
              <li><strong className="text-[#1A2236]">No native SMS:</strong> Mailchimp offers texting as a limited add-on. GHL includes native SMS and WhatsApp on every plan.</li>
              <li><strong className="text-[#1A2236]">No agency reseller model:</strong> GHL's SaaS Mode lets agencies resell the platform under their own brand, something Mailchimp does not support.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              None of this means Mailchimp is a weak platform for what it does. If your entire operation genuinely runs on email newsletters, Mailchimp's simplicity can be a real advantage rather than a limitation.
            </p>

            {/* Section 2: What Transfers */}
            <h2 id="what-transfers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Actually Transfers, and What Needs Rebuilding
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's own Mailchimp migration documentation identifies which parts of a Mailchimp account move through the standard process and which do not.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Mailchimp Asset</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Transfers?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">How</th>
                  </tr>
                </thead>
                <tbody>
                  {transfers.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.asset}</td>
                      <td className={`py-3 px-3 font-semibold ${item.transfers === 'No' ? 'text-[#DC3545]' : item.transfers === 'Yes' ? 'text-[#25C97D]' : 'text-[#F8D000]'}`}>{item.transfers}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/mailchimp-to-ghl-migration-guide.png"
                  alt="Mailchimp to GoHighLevel migration: Data transfer, merge field mapping, automation rebuild, and deliverability overview"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Mailchimp → GoHighLevel: Data transfer, merge field mapping, automation rebuild, and deliverability warmup workflow</span>
              </div>
            </div>

            {/* Section: Subscription Status */}
            <h2 id="subscription-status" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Subscription Status Is Not Just a Data Field
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is worth treating carefully rather than as a routine part of the import. Mailchimp separates contacts into subscribed, unsubscribed, non-subscribed (never opted in), and cleaned (hard bounced or otherwise invalid) states. These are not interchangeable, and importing every record into GHL as an active marketing contact without preserving that distinction can mean re-enrolling people who unsubscribed for a reason, which creates both a deliverability problem and, depending on your jurisdiction, a compliance one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Preserve the subscription status field through export and import, and configure your GHL contacts accordingly, marking unsubscribed and cleaned contacts as suppressed from marketing rather than active. This is not legal advice, and requirements vary by region, so review applicable email marketing and privacy rules for your business rather than relying solely on this guide.
            </p>

            {/* CTA Button 2: After Subscription Status */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Not sure what will transfer from your Mailchimp account?</span> Let our team help you audit.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get Migration Advice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 3: Export Audience */}
            <h2 id="export-audience" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Export Your Mailchimp Audience?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">In Mailchimp, go to Audience</strong> in the main navigation.</li>
              <li><strong className="text-[#1A2236]">If you have more than one audience, select the one to export.</strong> Mailchimp exports one audience at a time, so repeat this process for each.</li>
              <li><strong className="text-[#1A2236]">Open the Manage Audience dropdown and select Export Audience.</strong></li>
              <li><strong className="text-[#1A2236]">Include tags, merge fields, and subscription status</strong> in the export options rather than accepting bare defaults, since these fields are harder to recreate later than to export correctly the first time.</li>
              <li><strong className="text-[#1A2236]">Wait for Mailchimp to email you a download link.</strong> Small exports process in minutes; very large exports can take longer.</li>
              <li><strong className="text-[#1A2236]">Download the ZIP archive and open the CSV</strong> to check data quality before doing anything else.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Before importing, check three things: every contact has a valid email address, since GHL will reject or ignore invalid ones; your merge field column headers match the custom field names you have already created in GHL, since any column without a matching field gets silently dropped during import; and your tags column uses a single, clean delimiter rather than mixed formatting.
            </p>

            {/* Section 4: Tags, Segments, Groups */}
            <h2 id="tags-fields" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do Mailchimp Tags, Segments, and Groups Map to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Mailchimp uses three overlapping mechanisms for organizing contacts, and they map to GHL differently.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Tags apply directly.</strong> They export in the audience CSV and import as GHL tags with no real translation needed.</li>
              <li><strong className="text-[#1A2236]">Segments are saved filters</strong> in Mailchimp, not stored data, so they do not export as a file. Recreate each one as a GHL Smart List using the same filter logic after your contacts are imported.</li>
              <li><strong className="text-[#1A2236]">Groups (interest categories) are Mailchimp-specific.</strong> Depending on how you use them, migrate each group as a GHL tag, or as a custom field with matching picklist values if you need to preserve the structure more precisely.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For merge fields specifically, every Mailchimp field name in the export needs a matching GHL custom field created before import. Standard fields like first name and email map directly; custom merge fields need custom fields created with matching names so the import recognizes them.
            </p>

            {/* Section 5: Rebuild Automations */}
            <h2 id="rebuild-automations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Rebuild Mailchimp Automations in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Mailchimp Customer Journeys and Classic Automations do not export. They need to be documented and manually rebuilt using GHL's own trigger and action system.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For each automation you plan to keep, write down what it is meant to achieve, what starts it, the steps in order including any wait times, any branching logic based on contact behavior, and what causes it to end. Then rebuild that same intent in GHL's workflow builder: choose the closest matching trigger, such as a tag being added or a form being submitted, add the actions in the same order using GHL's email and SMS actions, and use If/Else conditions to replicate any branching. Test with yourself as a contact before turning it on for real subscribers.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the full walkthrough of building workflows in GHL, see{' '}
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel's workflow automation guide</Link>. Most Mailchimp automations are simpler than what you will find migrating from a heavier automation platform, so this rebuild phase is often measured in days rather than weeks.
            </p>

            {/* Section 6: Email Templates */}
            <h2 id="email-templates" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Migrate Email Templates?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Templates do not transfer as files. For each template still in active use, open it in Mailchimp's editor and copy the HTML source, then paste it into a new template in GHL's email builder using HTML mode. Every Mailchimp merge tag needs to be translated into GHL's syntax.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Mailchimp Merge Field</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">GHL Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {mergeFields.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.mailchimp}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Mailchimp's drag-and-drop editor sometimes produces CSS that does not render identically once copied elsewhere, so preview and test each template rather than assuming it will look the same. Prioritize your most used templates for careful review, and treat rarely used ones as good enough rather than spending equal time on every template you have ever created.
            </p>

            {/* Section 7: Forms and Integrations */}
            <h2 id="forms-integrations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Forms, Website Signups, and Integrations
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If your website, landing pages, or embedded forms currently send new signups into Mailchimp, replacing Mailchimp without updating those connections means new leads keep arriving in a platform you have stopped checking. Audit every form and integration that currently feeds Mailchimp, rebuild the equivalent form or connection in GHL, and update the destination before you consider the migration complete. If Mailchimp is connected to Shopify, WooCommerce, or another store, note that migrating your email marketing does not migrate the store itself. The store stays the source of truth for orders and customers; what moves is how that customer data is used for marketing, so map out which store-triggered emails and segments need to be rebuilt in GHL rather than assuming e-commerce automation carries over on its own.
            </p>

            {/* CTA Button 3: After Forms */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">🏷️ Overwhelmed by Mailchimp merge field translation?</p>
              <p className="text-sm text-white/80 mb-4">We'll handle your tag mapping, custom field recreation, and merge field translation.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                Get Field Mapping Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 8: Deliverability */}
            <h2 id="deliverability" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Protect Deliverability During Cutover?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Switching to GoHighLevel means switching sending infrastructure, and a new sending domain starts with no reputation with mail providers regardless of how well established your old Mailchimp sending was.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">WHAT GOHIGHLEVEL ACTUALLY PROVIDES</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                HighLevel documents a fixed-stage warmup model, but it applies specifically to eligible dedicated domains using GHL's own LC Email sending infrastructure, where sending caps increase automatically as you send real mail. If you connect external SMTP instead, that native warmup does not apply, and building volume gradually is your responsibility. Either way, authentication matters more than any specific daily number.
              </p>
            </div>

            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Configure SPF, DKIM, and DMARC for your new sending domain before sending anything, and use a different subdomain than the one Mailchimp used to avoid conflicting DNS records during the transition.</li>
              <li>Start with your most engaged contacts, those who have opened or clicked recently, rather than your full list.</li>
              <li>Increase volume gradually over a couple of weeks while watching bounce rates and spam complaints, adjusting pace based on what you actually observe rather than a fixed calendar.</li>
              <li>Keep an eye on open rates during this period. A meaningful drop compared to your Mailchimp baseline is a signal to slow down, not push through.</li>
            </ul>

            {/* CTA Button 4: After Deliverability */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">📧 Worried about losing email deliverability?</p>
              <p className="text-sm text-white/80 mb-4">We'll set up your sending domain, configure SPF/DKIM/DMARC, and manage the warmup process.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Shield className="w-4 h-4" />
                Get Deliverability Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 9: Should You Migrate */}
            <h2 id="should-you-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Migrate From Mailchimp to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Migration tends to make sense when you need CRM depth, SMS, appointment booking, or workflow automation beyond what Mailchimp offers, when your operation has grown into managing leads and sales rather than just sending newsletters, or when consolidating several tools into one platform would genuinely simplify your stack.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Staying with Mailchimp can still make sense if your operation is primarily newsletter-focused with straightforward email needs, if you rely on Mailchimp-specific functionality that would be disruptive to rebuild elsewhere, or if the migration effort simply is not justified by what you would gain. This is a decision based on what your business actually needs day to day, not a case of one platform being objectively better than the other.
            </p>

            {/* Section 10: Timeline */}
            <h2 id="timeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Long Does a Mailchimp to GoHighLevel Migration Take?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A simple migration, a single audience under 10,000 contacts with only a handful of automations and templates, typically takes about a week. A standard migration with a larger list and a moderate number of automations runs one to two weeks. A complex migration with multiple audiences, ten or more automations, and heavy template customization can take three to four weeks, with sending domain warmup continuing in the background afterward before you reach full volume.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the general framework these estimates build on, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>.
            </p>

            {/* Section 11: Common Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Mailchimp to GoHighLevel Migration Mistakes
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {migrationMistakes.map((mistake, idx) => (
                <li key={idx}>{mistake}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For mistakes that apply across any GHL migration rather than specifically Mailchimp, see{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">common GHL migration mistakes</Link>.
            </p>

            {/* Section 12: FAQ */}
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
              Want this handled end to end, including subscription status handling, template translation, and deliverability warmup?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Mailchimp to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up handles Mailchimp migrations end-to-end. Audience audit, tag consolidation, custom field mapping, email template HTML translation, automation rebuild in GHL Workflow Builder, and deliverability warmup phase management.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

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