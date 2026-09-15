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

export default function ZohoToGoHighLevelMigrationClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-migrate',
        'data-structure',
        'nine-components',
        'export-data',
        'field-mapping',
        'rebuild-workflows',
        'campaigns-forms-phones',
        'historical-data',
        'parallel-cutover',
        'mistakes',
        'timeline',
        'should-you-migrate',
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
      q: "Can Zoho CRM be migrated to GoHighLevel?",
      a: "Yes, though not as a single automatic transfer. Contact, Lead, Account, and Deal records export as CSV and import into GHL. Users, custom modules, forms, sites, contracts, and automation logic do not transfer automatically and need to be manually recreated."
    },
    {
      q: "How do I migrate contacts from Zoho CRM to GoHighLevel?",
      a: "Export from Setup, then Data Administration, then Export, selecting the Contacts module. Recreate your custom fields in GHL first, then import a test batch of 100 to 200 records before running the full import, checking field mapping, date formats, and phone number formatting along the way."
    },
    {
      q: "Can Zoho workflows and Blueprints be moved to GoHighLevel?",
      a: "No. Neither Workflows nor Blueprints export or import automatically. Document each one's trigger, actions, and exit condition, then rebuild the same intent manually using GHL's own workflow builder."
    },
    {
      q: "What happens to Zoho custom modules during migration?",
      a: "There is no automatic equivalent. Each custom module needs individual assessment: data that must remain queryable on its own is usually represented through carefully designed GHL custom fields, while data tied to a discontinued process may not need migrating at all."
    },
    {
      q: "What is the Zoho export limit I need to plan around?",
      a: "Each export is capped at 200,000 records and always contains the oldest 200,000 in that module. Larger databases need staged exports. The download link for a completed export expires after 7 days, so download and store it promptly."
    },
    {
      q: "Can I keep my Zoho phone numbers after migrating?",
      a: "If they are Twilio numbers, generally yes, either by porting them into GHL or keeping them on Twilio and connecting through GHL's integration. Numbers on Zoho's PhoneBridge or another gateway may need to be replaced with new GHL numbers. US numbers used for SMS need A2P 10DLC registration regardless of origin."
    },
    {
      q: "How long does a Zoho to GoHighLevel migration take?",
      a: "Typically 2 to 4 weeks. Simple accounts with few custom modules and workflows can complete in about a week; complex accounts with heavy customization and phone porting can take 4 to 6 weeks."
    },
    {
      q: "Should I keep Zoho active after migrating to GoHighLevel?",
      a: "Yes, for a period. Keep it active through parallel running and for a stretch afterward as a backup and historical archive before cancelling, and take one final full export first."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-migrate', title: 'Why Do Businesses Migrate From Zoho to GoHighLevel?' },
    { id: 'data-structure', title: 'Understanding Zoho\'s Data Structure Before You Migrate' },
    { id: 'nine-components', title: 'What Actually Gets Migrated? The Official Component List' },
    { id: 'export-data', title: 'How Do You Export Data From Zoho Correctly?' },
    { id: 'field-mapping', title: 'How Do You Prepare and Map Fields for GoHighLevel?' },
    { id: 'rebuild-workflows', title: 'How Do You Rebuild Zoho Automation in GoHighLevel?' },
    { id: 'campaigns-forms-phones', title: 'What Happens to Zoho Campaigns, Forms, and Phone Numbers?' },
    { id: 'historical-data', title: 'Historical Data: What Should Actually Move' },
    { id: 'parallel-cutover', title: 'What Is the Parallel Running and Cutover Process?' },
    { id: 'mistakes', title: 'Common Zoho to GoHighLevel Migration Mistakes' },
    { id: 'timeline', title: 'How Long Does a Zoho to GoHighLevel Migration Take?' },
    { id: 'should-you-migrate', title: 'Should You Migrate From Zoho to GoHighLevel?' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const componentList = [
    { component: 'Contacts, Leads, Accounts', contains: 'Contact records, custom fields, tags', method: 'CSV export from Zoho, then CSV import to GHL with fields mapped' },
    { component: 'Deals', contains: 'Pipeline records, stages, deal values', method: 'CSV export from the Deals module, mapped to GHL Opportunities and pipeline stages built in advance' },
    { component: 'Custom Modules', contains: 'Business-specific record types', method: 'No direct equivalent; assess case by case, often represented as Contact custom fields' },
    { component: 'Users', contains: 'Team accounts, roles, permissions', method: 'Manually recreated in GHL; not importable' },
    { component: 'Calendars', contains: 'Booking pages, availability, appointment types', method: 'Manually recreated in GHL Calendar and Booking' },
    { component: 'Forms', contains: 'Lead capture forms and fields', method: 'Manually recreated in GHL\'s Forms Builder' },
    { component: 'Contracts', contains: 'Signed agreements, e-signature records', method: 'Manually re-uploaded where still needed; historical contracts generally stay in Zoho\'s archive' },
    { component: 'Sites', contains: 'Landing pages, websites', method: 'Manually rebuilt in GHL\'s funnel or website builder' },
    { component: 'Automations (Workflows, Blueprints, Assignment Rules)', contains: 'Triggers, actions, business logic', method: 'Not importable; documented and manually rebuilt in GHL\'s Workflow Builder' },
    { component: 'Analytics', contains: 'Reports and dashboards', method: 'Manually reconfigured in GHL\'s reporting' }
  ];

  const migrationMistakes = [
    'Treating Leads, Contacts, and Accounts as if they were all the same object, instead of deciding deliberately how each maps into GHL\'s single Contact model',
    'Ignoring custom modules entirely, or importing their data without deciding whether it still needs to exist',
    'Assuming Blueprints and Assignment Rules will transfer the way Contacts do',
    'Exporting contacts before custom fields exist in GHL, which causes the import to drop or misplace that data',
    'Testing only the contact import and skipping a full journey test (a real lead capture, a real booking, a real deal moving through the pipeline)'
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
          <span className="text-[#1A2236] font-medium">Zoho to GoHighLevel Migration</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Zoho</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM Guide</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Zoho to GoHighLevel Migration:<br />
            <span className="text-[#F8D000]">Complete 2026 Guide</span>
          </h1>

          {/* Author */}
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ builds delivered · Verified against GoHighLevel's official Zoho migration documentation, September 2026</div>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Zoho CRM and GoHighLevel organize data in genuinely different ways. Zoho separates Leads from Contacts from Accounts from Deals, often with custom modules layered on top for a business's specific processes. GoHighLevel is built around a single Contact record that everything else attaches to. Migrating well means understanding that difference before you export a single file, not discovering it partway through.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              to migrate from Zoho to GoHighLevel, audit your Zoho account first, including Leads, Contacts, Accounts, Deals, and any custom modules. Export each module separately as CSV through Zoho's Data Administration tools, keeping in mind a 200,000 record limit per export and a 7 day download window. Recreate your custom fields, pipelines, and tags in GHL before importing anything. Test import 100 to 200 records to confirm mapping, then run the full import. Rebuild workflows, Blueprints, and assignment logic manually in GHL's workflow builder, since none of this transfers automatically. Run Zoho and GHL in parallel for a few weeks before fully cutting over. Typical timeline is 2 to 4 weeks depending on data volume, custom modules, and automation complexity.
            </p>
          </div>

          {/* CTA Button 1 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Zoho Migration Help?
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#nine-components"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See 9 Components
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

          {/* SIDEBAR */}
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
                  <div className="text-xs text-white/50">GoHighLevel Migration Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built and migrated globally. All technical details verified as of July 2026.
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
              <div className="text-sm font-bold text-white mb-2">Migrating from Zoho?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle Zoho migrations end-to-end — audit, staged export, field mapping, workflow rebuild, and phone porting.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get Help
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* MAIN CONTENT */}
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

            {/* Mobile Project Help Card */}
            <div className="lg:hidden mb-8">
              <ProjectHelpCard />
            </div>

            {/* Section 1: Why Migrate */}
            <h2 id="why-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Why Do Businesses Migrate From Zoho to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zoho CRM is a genuinely capable platform, and the decision to leave it is usually about consolidation rather than Zoho being deficient. Zoho's ecosystem is a suite of separate applications, CRM, Campaigns, Bookings, Forms, Desk, that need to be purchased and managed individually. GoHighLevel consolidates equivalent functionality into one subscription with a single contact record tying email, SMS, calls, bookings, and pipeline stages together.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Agency architecture:</strong> GHL's sub account model manages multiple clients from one dashboard. Zoho generally requires a separate CRM instance per client.</li>
              <li><strong className="text-[#1A2236]">Native SMS and WhatsApp:</strong> built into every GHL plan. Zoho typically requires a third party SMS gateway.</li>
              <li><strong className="text-[#1A2236]">Flat pricing regardless of contact volume:</strong> Zoho's pricing scales with users and, for some products, contact volume. GHL charges a flat rate per plan.</li>
              <li><strong className="text-[#1A2236]">White label and SaaS reselling:</strong> available on GHL's higher tiers. Zoho does not offer white label reselling of its CRM.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              As an illustration, imagine an agency currently paying separately for Zoho CRM, Zoho Campaigns, and Zoho Bookings across a small team. Consolidating those into a single GoHighLevel plan can meaningfully reduce total software cost while adding native SMS and AI features Zoho does not include. The actual savings depend entirely on your specific Zoho plan mix and team size, so treat this as a framework for your own comparison rather than an expected number.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              None of this means Zoho is the wrong platform for every business. Zoho's individual modules, particularly its CRM customization depth, are genuinely strong. The decision usually comes down to whether unifying several tools into one platform is worth more to your business than the depth Zoho's separate modules provide.
            </p>

            {/* Section 2: Data Structure */}
            <h2 id="data-structure" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Understanding Zoho's Data Structure Before You Migrate
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zoho CRM's core objects are Leads, Contacts, Accounts, and Deals, and they relate to each other in a specific way that GoHighLevel does not mirror directly.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Leads are unqualified prospects.</strong> In Zoho, a Lead is typically converted into a Contact (and often an Account and a Deal at the same time) once it is qualified. In GHL, there is no separate Lead object, everything is a Contact from the start, so the practical effect of Zoho's Lead to Contact conversion has to be represented some other way, usually with a tag or a pipeline stage indicating qualification status.</li>
              <li><strong className="text-[#1A2236]">Contacts in Zoho</strong> typically represent individual people, often linked to an Account. GHL Contacts map to this most directly of any Zoho object.</li>
              <li><strong className="text-[#1A2236]">Accounts in Zoho</strong> represent a company or organization that one or more Contacts belong to. GoHighLevel does not have a dedicated Account object in the same relational sense, so Account level information is usually represented as a custom field or tag on the Contact, or, for businesses that genuinely need company level grouping, structured as a naming convention across related contacts.</li>
              <li><strong className="text-[#1A2236]">Deals are Zoho's sales records,</strong> tied to a pipeline and a stage. These map to GHL Opportunities, provided your GHL pipeline stages are built to match before you import.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Custom modules are the least straightforward part of a Zoho migration. If your Zoho account has custom modules built for a specific business process, there is no automatic equivalent in GoHighLevel. Before migrating, assess each custom module honestly: does this need to remain independently queryable as its own record type, in which case a GHL custom field structure on the Contact may need to be designed carefully to represent it, or was it created for a process that has since changed or ended, in which case it may not need migrating at all. Importing custom module data without this assessment tends to produce a GHL account with data attached to contacts in ways nobody can make sense of six months later.
            </p>

            {/* CTA Button 2 */}
            <div className="bg-gradient-to-r from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 mb-8 text-center">
              <p className="text-white/80 text-sm mb-3">
                <span className="font-bold text-white">Ready to consolidate your Zoho stack?</span> Let us help you migrate without data loss.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <BarChart3 className="w-4 h-4" />
                Get a Migration Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/zoho-to-ghl-migration-guide.png"
                  alt="Zoho to GoHighLevel migration: Data structure mapping, component list, field mapping, and workflow rebuild overview"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Zoho → GoHighLevel: Data structure mapping, component list, field mapping, and workflow rebuild workflow</span>
              </div>
            </div>

            {/* Section 3: Official Component List */}
            <h2 id="nine-components" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Actually Gets Migrated? The Official Component List
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's own Zoho migration documentation identifies nine distinct components involved in a complete migration. Treating all nine as equally automatic is the most common planning mistake.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Component</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Contains</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Transfer Method</th>
                  </tr>
                </thead>
                <tbody>
                  {componentList.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.component}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.contains}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 4: Export Data */}
            <h2 id="export-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Export Data From Zoho Correctly?
            </h2>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Document your Zoho custom fields.</strong> Go to Setup, then Customization, then Modules, and list every custom field per module with its data type and any picklist values.</li>
              <li><strong className="text-[#1A2236]">Navigate to Setup, then Data Administration, then Export, then Start an Export.</strong></li>
              <li><strong className="text-[#1A2236]">Select the module</strong> (Contacts, Leads, Deals, or Accounts) and choose which fields to export. Every exported contact record needs either an email address or a phone number for GoHighLevel to accept it during import.</li>
              <li><strong className="text-[#1A2236]">Run the export, wait for the status to change to Completed</strong> in the Export History table, then download the file promptly. The download link is only available for 7 days.</li>
              <li><strong className="text-[#1A2236]">Repeat separately for each module.</strong> Do not combine modules into a single export, since each has a different field structure.</li>
            </ol>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE TWO LIMITS WORTH PLANNING AROUND</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Zoho caps each export at 200,000 records, and an export always contains the oldest 200,000 records in the module. If your database exceeds this, you will need staged exports, archiving the oldest batch safely and then either removing it from Zoho or using a date filtered export to reach the next batch. Because the download link expires in 7 days, download and securely store every export immediately rather than letting it sit.
              </p>
            </div>

            {/* Section 5: Field Mapping */}
            <h2 id="field-mapping" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Prepare and Map Fields for GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Field mapping has to happen before import, not during it. Two formatting requirements matter in particular: dates need to be in YYYY-MM-DD format regardless of Zoho's regional default, and phone numbers should be standardized to E.164 format (a plus sign, country code, then the number with no spaces or punctuation) so that GHL's SMS features work correctly against imported contacts.
            </p>
            <ul className="space-y-1 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Recreate every Zoho custom field in GHL's Settings, Custom Fields area first, matching data type and any dropdown values exactly.</li>
              <li>Build your GHL pipeline stages to match your Zoho Deal stages before importing Deals, so historical position is preserved accurately.</li>
              <li>Map Zoho tags, list memberships, and segment memberships to a Tags column in your export so they carry over as GHL tags.</li>
              <li>Import a test batch of 100 to 200 contacts first. Confirm every field lands correctly, dates display properly, phone numbers are formatted right, and tags attach as expected before running the full import.</li>
            </ul>

            {/* Section 6: Rebuild Automation */}
            <h2 id="rebuild-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Rebuild Zoho Automation in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Zoho's automation tools include Workflows, Blueprints (structured, guided sales processes with mandatory steps), Assignment Rules, Cadences, scoring rules, and Custom Functions for more advanced logic. None of these export, and none have a direct one to one equivalent inside GHL. GHL's own automation model is built around Workflows using its own trigger and action system.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The right approach is documenting what each piece of Zoho automation was actually supposed to achieve, then rebuilding that outcome using GHL's tools, rather than trying to replicate Zoho's specific structure. For each workflow or Blueprint, write down the business intent, the trigger condition that starts it, the actions in order, and the condition that ends it. Then recreate that logic in GHL Automation, using the closest matching trigger and building out the action sequence.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the full walkthrough of GHL's workflow builder, see{' '}
              <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GoHighLevel's workflow automation guide</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This rebuild is also a natural opportunity to retire automation that no longer serves a purpose. Many Zoho accounts that have been active for a few years carry Workflows or Blueprints tied to processes that have since changed, and migrating only what is genuinely active reduces rebuild time without losing anything that matters.
            </p>

            {/* CTA Button 3 */}
            <div className="bg-gradient-to-r from-[#0E9BF0] to-[#0C8AD8] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">⚡ Don't want to rebuild Zoho Blueprints and workflows manually?</p>
              <p className="text-sm text-white/80 mb-4">We'll document and rebuild every automation in GHL Workflow Builder.</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#0E9BF0] font-bold px-6 py-2.5 rounded-lg hover:bg-[#F8F9FB] transition-all hover:shadow-lg hover:scale-105 text-sm"
              >
                <Workflow className="w-4 h-4" />
                Get Automation Rebuild
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Section 7: Campaigns, Forms, Phone Numbers */}
            <h2 id="campaigns-forms-phones" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Happens to Zoho Campaigns, Forms, and Phone Numbers?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These fall outside the standard Contacts export and each need separate handling.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Zoho Campaigns:</strong> export your email templates as HTML, or copy the template content directly into GHL's email builder. Segment lists from Campaigns become GHL tags. Before sending anything meaningful in GHL, configure your sending domain with DKIM, SPF, and DMARC, and warm the domain gradually rather than sending to your full list on day one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Zoho Forms:</strong> these do not export into GHL Forms directly. Rebuild each form manually in GHL's Forms Builder, keeping field names aligned to your Contact custom fields, then update the embed code on your website to point at the new form.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">Phone numbers:</strong> if you connected Twilio numbers to Zoho, those can generally be ported to GHL or kept on Twilio and connected through GHL's Twilio integration. If you used Zoho's own PhoneBridge or another third party gateway, you may need new numbers in GHL. Any US number used for SMS needs A2P 10DLC registration in GHL's Trust Center regardless of where it came from, and porting itself can take one to two weeks, so start this during parallel running rather than waiting until cutover.
            </p>

            {/* Section 8: Historical Data */}
            <h2 id="historical-data" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Historical Data: What Should Actually Move
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Not every historical record needs to live inside your new GHL account. Separate what you operationally need going forward, active contacts, open deals, current custom field values, from what is purely historical, closed deal history, old activity logs, past call notes. Operational data should be cleaned and imported. Historical data that has no ongoing operational use is often better handled by keeping Zoho accessible as a read only archive for a period after cutover, rather than trying to force every past record into GHL's structure.
            </p>

            {/* Section 9: Parallel Cutover */}
            <h2 id="parallel-cutover" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is the Parallel Running and Cutover Process?
            </h2>
            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Route new leads to GHL</strong> while existing Zoho contacts continue in their current Zoho workflows.</li>
              <li><strong className="text-[#1A2236]">Migrate contacts that are actively in open deals or active sequences,</strong> then rebuild the specific workflows they depend on in GHL.</li>
              <li><strong className="text-[#1A2236]">Validate for at least a week or two:</strong> confirm new leads are arriving correctly, workflows are firing, emails are delivering, and appointments are booking.</li>
              <li><strong className="text-[#1A2236]">Cut over fully once GHL has performed reliably for several consecutive business days,</strong> then keep Zoho active for a period afterward as a backup before final cancellation.</li>
              <li><strong className="text-[#1A2236]">Take one last full export from Zoho before cancelling,</strong> and store it securely.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a fuller breakdown of how migration duration scales with complexity, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>. For the general preparation and validation framework this process builds on, see the{' '}
              <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel migration checklist</Link>.
            </p>

            {/* Section 10: Common Mistakes */}
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Common Zoho to GoHighLevel Migration Mistakes
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              {migrationMistakes.map((mistake, idx) => (
                <li key={idx}>{mistake}</li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the broader set of mistakes that apply across any GHL migration, not specific to Zoho, see{' '}
              <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">common GHL migration mistakes</Link>.
            </p>

            {/* Section 11: Timeline */}
            <h2 id="timeline" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Long Does a Zoho to GoHighLevel Migration Take?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Typical range is 2 to 4 weeks, driven primarily by the number of custom modules, the volume of automation to rebuild, and whether phone number porting is involved, more than by contact count alone. A simple account, under 5,000 contacts, minimal custom modules, fewer than 10 workflows, can complete in about a week. A complex account with heavy customization, many active workflows, and phone porting can take 4 to 6 weeks.
            </p>

            {/* Section 12: Should You Migrate */}
            <h2 id="should-you-migrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Migrate From Zoho to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Migration tends to make sense when your business is paying for several separate Zoho products that overlap with what GHL provides natively, when you need native SMS or agency style multi client management Zoho does not offer, or when your Zoho setup has grown simpler over time than the platform itself, making the depth no longer worth the separate subscriptions.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Staying with Zoho often makes more sense when your CRM relies heavily on custom modules and Blueprints that would require significant redesign, when your team depends on Zoho specific integrations with no clean GHL equivalent, or when the complexity and disruption of migrating outweighs the consolidation benefit for your specific situation. This is not a case of one platform being universally better, it depends on how deeply your operations are built around Zoho's specific structure.
            </p>

            {/* Section 13: FAQ */}
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
              Want this handled end to end, including custom module assessment, Blueprint rebuild, and phone porting?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">Common GHL Migration Mistakes →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to migrate from Zoho to GoHighLevel without losing data?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up runs end-to-end Zoho migrations. Data audit, staged export, field mapping, workflow rebuild, phone number porting with A2P registration, and parallel running phase management.
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