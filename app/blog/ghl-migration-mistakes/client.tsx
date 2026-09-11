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
  Shield,
  Rocket,
  Target,
  HeartHandshake,
  MessageCircle,
  Phone,
  Search,
  XCircle,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GHLMigrationMistakesClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'mistake-1',
        'mistake-2',
        'mistake-3',
        'mistake-4',
        'mistake-5',
        'mistake-6',
        'mistake-7',
        'mistake-8',
        'mistake-9',
        'red-flags',
        'framework',
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

  // Handle TOC click with smooth scroll
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
      q: "What are the most common GoHighLevel migration mistakes?",
      a: "Importing dirty data without cleaning it, assuming automations can be copied instead of rebuilt, migrating every old automation instead of auditing which ones matter, overlooking integrations and hidden dependencies, treating email warmup as a fixed formula rather than understanding how it actually works, skipping parallel running, cancelling the old platform too early, going live without full testing, and optimizing while migrating instead of after."
    },
    {
      q: "Why do GoHighLevel migrations fail?",
      a: "Most failures come from planning gaps rather than anything the platform cannot do: skipping the audit phase, not cleaning data before import, not testing the full customer journey before go live, and cancelling the old platform before the new one is validated. A structured process with parallel running and real testing avoids nearly all of them."
    },
    {
      q: "Do GoHighLevel workflows need to be rebuilt?",
      a: "Generally yes. Workflow logic is platform specific, and there is no universal path for importing automation logic the way there is for contact data. Some platforms have narrow, specific import tools for particular content types, but the trigger and action logic behind an automation almost always needs to be recreated by hand in GHL's workflow builder."
    },
    {
      q: "Should I cancel my old CRM immediately after migrating?",
      a: "No. Keep it active until contacts are validated, automations are tested with real activity, you have run both platforms in parallel for a period, and every lead source points to GHL. Take a final data export before cancelling."
    },
    {
      q: "How do I avoid email deliverability problems during migration?",
      a: "Complete DKIM, SPF, and DMARC authentication first. If you are using GHL's own LC Email on a dedicated domain, its fixed stage warmup will manage sending caps automatically as you send real mail. If you are using external SMTP, warmup is manual: start with smaller sends to engaged contacts and increase gradually while watching bounce and complaint rates."
    },
    {
      q: "What should I do if my GoHighLevel migration has already gone wrong?",
      a: "Identify which category the problem falls into: bad data, misfiring automations, deliverability, an early cancellation, or phone and SMS issues, and address the specific cause rather than a generic fix. In most cases this means pausing the affected system, checking what actually happened against what should have happened, and correcting the specific gap before resuming."
    },
    {
      q: "Can phone numbers and SMS be affected during migration?",
      a: "Yes, if your business uses GHL for calls or texting. Number porting, A2P 10DLC registration for US SMS, and toll free verification all have their own processing times and requirements. This is not universal to every migration, but if messaging or calling matters to your business, test inbound and outbound behavior before relying on it in production."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'mistake-1', title: '1. Importing Data Before Cleaning and Mapping It' },
    { id: 'mistake-2', title: '2. Assuming Automations Can Be Copied Instead of Rebuilt' },
    { id: 'mistake-3', title: '3. Migrating Every Automation Instead of Auditing First' },
    { id: 'mistake-4', title: '4. Overlooking Integrations and Hidden Dependencies' },
    { id: 'mistake-5', title: '5. Treating Email Warmup as a Fixed Formula' },
    { id: 'mistake-6', title: '6. Skipping the Parallel Running Phase' },
    { id: 'mistake-7', title: '7. Cancelling the Old Platform Before GHL Is Validated' },
    { id: 'mistake-8', title: '8. Going Live Without Testing the Full Customer Journey' },
    { id: 'mistake-9', title: '9. Trying to Migrate and Optimize at the Same Time' },
    { id: 'red-flags', title: 'Before You Start: Migration Red Flags' },
    { id: 'framework', title: 'A Simple Framework for Preventing Migration Failures' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const mistakes = [
    {
      id: 'mistake-1',
      title: 'Importing Data Before Cleaning and Mapping It',
      what: 'Contacts with duplicate entries, missing fields, inconsistent phone formats, or outdated email addresses get imported directly into GHL. Automations then fire on bad contacts, some customers receive duplicate messages from duplicated records, and deliverability suffers from invalid addresses.',
      why: 'Teams treat the export file as ready to import rather than as raw material that needs preparation first.',
      breaks: 'Duplicate contact records can trigger duplicate workflow enrollment if your automation and integration logic allow it, which in turn can produce duplicate notifications or, depending on how a payment workflow is built, duplicate charges. This is a downstream risk created by the duplicates, not an automatic consequence of dirty data on its own.',
      fix: 'Before importing, remove hard bounces and unsubscribes, deduplicate records sharing the same email or phone number, standardize phone numbers to a consistent international format, and fill in missing required fields where possible. Import a clean list into a properly configured account rather than cleaning up after the fact.',
      alreadyHappened: 'Pause any workflow that enrolls contacts automatically, identify the duplicate records by matching email or phone, merge or remove the duplicates, and check whether any downstream action (a payment, a notification, a booking) fired more than once because of them before resuming normal automation activity.'
    },
    {
      id: 'mistake-2',
      title: 'Assuming Automations Can Be Copied Instead of Rebuilt',
      what: 'Teams expect to move automations across the same way they moved contacts, as a direct transfer. It does not work that way. GHL\'s trigger model, conditional logic, and action library are platform specific, and there is no universal import path for workflow logic.',
      why: 'Contacts feel like data, so automations get assumed to be data too. In practice, an automation is closer to a small program than a spreadsheet row.',
      breaks: 'Imagine a business that tried to recreate an email-only follow-up sequence by copying its structure directly into GHL without adapting it to GHL\'s own trigger model. The sequence could fail silently if the trigger conditions do not match GHL\'s logic, leaving something like appointment confirmations not firing at all until someone notices missed appointments.',
      fix: 'Treat every automation as a rebuild, not a copy. Document the trigger, conditions, and each action step from the old platform, then recreate that same intent using GHL\'s own trigger types and action library. For the setup mechanics, see the GoHighLevel workflow automation guide.',
      alreadyHappened: 'Pause the broken workflow, compare its actual trigger and conditions against what the old platform\'s automation did, rebuild the specific step that is misfiring, and test with one real contact before reactivating it for everyone.'
    },
    {
      id: 'mistake-3',
      title: 'Migrating Every Automation Instead of Auditing First',
      what: 'A business migrates all of its existing automations, including sequences that have not run in years, flows built for a product that no longer exists, and follow-ups tied to a campaign that ended long ago.',
      why: 'Auditing feels like extra work when the goal is just to get everything moved.',
      breaks: 'Dead automations that get rebuilt anyway waste rebuild time that should go toward the sequences that actually matter, and some can misfire against current contacts in ways nobody is watching for because nobody expected them to still be active.',
      fix: 'Before migration starts, list every automation and ask whether it has fired recently, whether it serves something that still exists, and whether another automation already covers the same purpose. Leave behind anything that fails those questions. Many businesses that have been on a platform for a couple of years or more find a meaningful share of their automations qualify, though the exact proportion depends entirely on how disciplined the team has been about retiring old ones, not a fixed industry number.',
      alreadyHappened: 'It is fine to deactivate a rebuilt automation later once you realize it serves no purpose. Review your active workflow list a few weeks after go live and retire anything that has not fired.'
    },
    {
      id: 'mistake-4',
      title: 'Overlooking Integrations and Hidden Dependencies',
      what: 'A migration plan accounts for contacts and automations but misses the third-party tools connected to the old platform, such as payment processors, Zapier or Make scenarios, webhooks, lead source integrations, and forms embedded on external pages.',
      why: 'Integrations are often set up once, years earlier, by someone no longer on the team, and nobody maintains a current list of what is actually connected.',
      breaks: 'A payment integration that never gets reconnected means completed purchases do not register anywhere. A webhook nobody remembered means a lead source stops reaching the CRM entirely, silently, with no error message to notice.',
      fix: 'During the audit phase, list every tool currently connected to your marketing, CRM, or client communication, and make an explicit decision for each one: keep it and simply reconnect it to GHL, replace it with a native GHL feature, rebuild its logic using GHL\'s own tools, or retire it if it no longer serves a purpose.',
      alreadyHappened: 'Check every integration that touched money, lead capture, or client communication on the old platform, confirm each one is either reconnected or intentionally retired, and test the actual downstream behavior rather than just checking that a connection shows as active.'
    },
    {
      id: 'mistake-5',
      title: 'Treating Email Warmup as a Fixed Formula',
      what: 'A business completes their contact import, reconnects email sending, and sends a full campaign immediately. Open rates can drop sharply within days, and the sender reputation built up over years does not automatically carry over to a new sending setup.',
      why: 'Warmup gets treated as a single universal schedule that applies the same way to every account, when the reality is more conditional.',
      breaks: null,
      fix: 'What is actually true: GoHighLevel documents a fixed stage warmup model, but it applies specifically to eligible dedicated domains using GHL\'s own LC Email sending infrastructure. On that path, GHL automatically increases your daily sending caps as you send real mail, and you do not need to invent your own schedule for it. If you connect external SMTP instead, such as Mailgun, Google Workspace, or Microsoft 365, GHL\'s native warmup does not apply at all, and building sending volume gradually is entirely your responsibility. Either way, authentication, address quality, and complaint rates matter more than any specific daily number, so treat a fixed day by day formula as a rough starting point rather than a guarantee. Complete DKIM, SPF, and DMARC authentication before sending anything. Start with smaller sends to your most engaged contacts rather than your full list, and increase gradually while watching bounce rates and spam complaints rather than following a calendar blindly.',
      alreadyHappened: 'Stop sending to your full list immediately. Review authentication, list quality, bounce rate, and complaint rate together rather than assuming slower sending alone will fix it, and reduce volume back to your most engaged segment while reputation recovers.'
    },
    {
      id: 'mistake-6',
      title: 'Skipping the Parallel Running Phase',
      what: 'A business treats migration as a single day cutover, old platform off, GHL on, with no overlap. Any gap in the new setup becomes an immediate, live business problem with no fallback.',
      why: 'Parallel running feels like unnecessary delay when the new system already looks ready.',
      breaks: 'A broken trigger or missing integration that would have been caught during a quiet overlap period instead shows up as a missed lead or a customer who never received a confirmation.',
      fix: 'Route new leads into GHL while keeping the old platform active for existing contacts already partway through a sequence there. Use that overlap period, typically a couple of weeks, to catch setup gaps while a working fallback still exists, and only fully cut over once GHL has performed reliably for several consecutive business days.',
      alreadyHappened: 'If the old platform is still accessible, consider reactivating it temporarily while you finish validating GHL, even if that means a short period running both again.'
    },
    {
      id: 'mistake-7',
      title: 'Cancelling the Old Platform Before GHL Is Validated',
      what: 'A business cancels its previous subscription as soon as GHL looks set up, before every automation has actually been tested with real activity. If a gap surfaces afterward, there may be no way back. HubSpot specifically enforces a 25 day window after cancellation before data is permanently deleted, and other platforms have their own retention limits.',
      why: 'Cancelling feels like the natural finish line, and ongoing subscription cost creates pressure to cut it as soon as possible.',
      breaks: 'Imagine discovering, two weeks after cancelling, that a post purchase sequence had a broken trigger the entire time. Without access to the old platform, there may be no way to recover the original configuration to compare against.',
      fix: 'Keep the old platform active until contacts are validated, automations are rebuilt and tested, parallel running is complete, and every lead source points to GHL. Only then cancel, and take a final full data export first as a backup.',
      alreadyHappened: 'Check whether any export or backup was taken before cancellation, contact the platform\'s support team to ask about data recovery options if the retention window has not fully closed, and document clearly what cannot be recovered so you can rebuild it deliberately rather than guessing.'
    },
    {
      id: 'mistake-8',
      title: 'Going Live Without Testing the Full Customer Journey',
      what: 'Individual pieces get checked in isolation, a form here, an email there, but nobody runs the complete path a real customer would take before real leads start arriving.',
      why: 'Testing each component feels sufficient, but a working form and a working automation do not guarantee they work correctly together.',
      breaks: 'A follow up sequence that never fires because a trigger was configured slightly wrong is often invisible until someone notices leads going cold.',
      fix: 'Before any real lead touches the new system, submit a real form on your live funnel, confirm the contact appears correctly in GHL with the right tags, confirm the follow up sequence fires as expected, complete a real booking and confirm reminders send, and check the entire flow on mobile as well as desktop.',
      alreadyHappened: 'Run the same end to end test now, even after go live, and compare against your actual lead activity to identify how many contacts may have fallen through a gap that testing would have caught earlier.'
    },
    {
      id: 'mistake-9',
      title: 'Trying to Migrate and Optimize at the Same Time',
      what: 'Migration turns into an opportunity to rewrite email copy, redesign funnels, and add new channels to every automation at once. When something underperforms after go live, there is no way to tell whether migration broke it or the redesign changed it.',
      why: 'Since everything is already being touched, improving it at the same time feels efficient.',
      breaks: 'Your ability to diagnose problems. A performance drop could be a migration error or a deliberate change, and without a stable baseline there is no way to tell which.',
      fix: 'Rebuild each automation to do exactly what it did before, go live, and confirm performance is comparable to the old platform. Only then begin optimizing, one change at a time, so any effect can be attributed to something specific.',
      alreadyHappened: 'If possible, roll a changed element back to its original version temporarily to establish whether the current performance reflects the migration or the change, then reintroduce improvements one at a time.'
    }
  ];

  const redFlags = [
    'Nobody has documented the current automation logic',
    'Nobody knows which workflows are actually active versus dormant',
    'No one has identified the external integrations connected to the current platform',
    'No backup or export of current data exists',
    'No field mapping has been worked out between the old platform and GHL',
    'No one is clearly responsible for validating the migrated data',
    'The plan is to cancel the source platform immediately after setup',
    'There is no defined cutover point or fallback plan',
    'The team wants to redesign funnels, copy, and automation logic simultaneously with the platform change',
    'Nobody has tested a small sample migration before committing to the full one'
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
          <span className="text-[#1A2236] font-medium">GHL Migration Mistakes 2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Mistakes to Avoid</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Migration Mistakes:<br />
            <span className="text-[#F8D000]">Common Problems and How to Avoid Them</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ migrations delivered · Updated September 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Migrating to GoHighLevel goes wrong in predictable ways. The same problems show up across platform types, business sizes, and industries, and almost all of them trace back to planning gaps rather than anything GHL itself cannot do. This guide covers what commonly goes wrong, why it happens, what it can break, how to prevent it, and what to do if you are reading this because it already happened.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              the most common GoHighLevel migration mistakes are importing dirty data without cleaning it first, assuming automations can be copied instead of rebuilt, migrating every old automation instead of auditing which ones still matter, overlooking integrations and hidden dependencies, treating email warmup as a fixed formula instead of understanding how it actually works, skipping the parallel running phase, cancelling the old platform before GHL is validated, going live without testing the full customer journey, and trying to optimize everything while migrating instead of after. Every one of these is avoidable, and none of them requires a different platform. They require a better process.
            </p>
          </div>

          {/* CTA Button 1: Hero Section */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Avoid These Mistakes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#mistake-1"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Mistakes
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
                  <div className="text-xs text-white/50">GoHighLevel Migration & Setup Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems migrated globally from HubSpot, ClickFunnels, ActiveCampaign, Kajabi, Zoho, and Salesforce. All mistakes in this guide are documented from real migration projects.
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
              <div className="text-sm font-bold text-white mb-2">Planning a Migration?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">Get a free audit that identifies your specific risks before you start.</p>
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

            {/* Section: Why Migrations Go Wrong */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Why GoHighLevel Migrations Go Wrong
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Most failures come from a small set of underlying causes that repeat across almost every problem migration: planning gaps where nobody documented what currently exists, poor data preparation before import, unclear dependencies between systems that only surface after go live, incorrect assumptions about how automations translate between platforms, weak testing that checks individual pieces but not the full customer journey, cutting over before the new system is actually validated, and scope creep where migration quietly turns into a full rebuild. Nearly every mistake below is one of these root causes showing up in a specific place.
            </p>

            {/* Mistakes 1-4 */}
            {mistakes.slice(0, 4).map((mistake) => (
              <div key={mistake.id} id={mistake.id} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-4">
                  {mistake.title}
                </h2>

                <div className="mb-4">
                  <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                    <strong className="text-[#1A2236]">What happens:</strong> {mistake.what}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                    <strong className="text-[#1A2236]">Why it happens:</strong> {mistake.why}
                  </p>
                </div>

                {mistake.breaks && (
                  <div className="mb-4">
                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                      <strong className="text-[#1A2236]">What it can break:</strong> {mistake.breaks}
                    </p>
                  </div>
                )}

                <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
                  <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                    <strong className="text-[#1A2236]">How to prevent it:</strong> {mistake.fix}
                  </p>
                </div>

                <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                    <strong className="text-[#DC3545]">If this has already happened:</strong> {mistake.alreadyHappened}
                  </p>
                </div>
              </div>
            ))}

            {/* 
              ============================================================
              🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
              ============================================================
            */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/ghl-migration-mistakes-infographic.png"
                  alt="GoHighLevel Migration Mistakes: Common problems, why they happen, and how to avoid them"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Migration Mistakes: Common problems, why they happen, what they break, and how to avoid them</span>
              </div>
            </div>

            {/* Mistakes 5-9 */}
            {mistakes.slice(4).map((mistake) => (
              <div key={mistake.id} id={mistake.id} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mb-4">
                  {mistake.title}
                </h2>

                <div className="mb-4">
                  <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                    <strong className="text-[#1A2236]">What happens:</strong> {mistake.what}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                    <strong className="text-[#1A2236]">Why it happens:</strong> {mistake.why}
                  </p>
                </div>

                {mistake.breaks && (
                  <div className="mb-4">
                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                      <strong className="text-[#1A2236]">What it can break:</strong> {mistake.breaks}
                    </p>
                  </div>
                )}

                <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
                  <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                    <strong className="text-[#1A2236]">How to prevent it:</strong> {mistake.fix}
                  </p>
                </div>

                <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4">
                  <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                    <strong className="text-[#DC3545]">If this has already happened:</strong> {mistake.alreadyHappened}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button 2: After Mistakes */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#111E30] rounded-xl p-6 text-center my-6 text-white">
              <p className="text-sm font-medium mb-2">🔍 Already started your migration and hit a problem?</p>
              <p className="text-sm text-white/80 mb-4">We can step in and get your migration back on track. Our team has fixed every one of these mistakes before.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Search className="w-4 h-4" />
                Get Migration Rescue
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Red Flags Section */}
            <h2 id="red-flags" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Before You Start: Migration Red Flags
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If any of these are true, address them before starting a production migration:
            </p>
            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5 mb-8">
              <div className="space-y-2">
                {redFlags.map((flag, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC3545] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A2236]">{flag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Framework Section */}
            <h2 id="framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              A Simple Framework for Preventing Migration Failures
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Audit, map, back up, rebuild, test, run in parallel, cut over, monitor. Each stage exists specifically to prevent one or more of the mistakes above: the audit catches dead automations and undocumented dependencies, mapping prevents data errors, the backup protects against an early cancellation, rebuilding and testing catch broken automation logic, parallel running provides a fallback, and monitoring catches anything that slips through after go live.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For the detailed, step by step version of this framework, use the{' '}
              <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel migration checklist</Link>. For estimating how long each stage takes for your specific setup, see the{' '}
              <Link href="/blog/ghl-migration-timeline" className="text-[#0E9BF0] hover:underline">GHL migration timeline guide</Link>. For what migration means at a foundational level, see{' '}
              <Link href="/blog/what-is-ghl-migration" className="text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration?</Link>.
            </p>

            {/* CTA Button 3: Before FAQ */}
            <div className="bg-[#1C2E4A] rounded-xl p-6 text-center text-white mb-8">
              <p className="text-sm font-medium mb-2">📊 Want to see exactly what mistakes you might be making?</p>
              <p className="text-sm text-white/80 mb-4">Get a free migration audit that identifies your specific risks and gives you a clear path forward.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                <Shield className="w-4 h-4" />
                Get Your Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
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

            {/* Closing paragraph */}
            <div className="mt-8 mb-6">
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
                A successful migration is not simply moving contacts from one system to another. It means preserving the business logic, data integrity, communication, and integrations that actually run your operations while the platform underneath changes. Most of what goes wrong comes down to skipping a step under time pressure, not a limitation in GHL itself.
              </p>
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                <Link href="/blog/ghl-migration-timeline" className="text-sm text-[#0E9BF0] hover:underline">GHL Migration Timeline Guide →</Link>
                <Link href="/blog/what-is-ghl-migration" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration? →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
              </div>
            </div>

            {/* Final CTA Section - Single closing CTA */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Planning a GHL migration and want to avoid these mistakes?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up has done this 200+ times. We know what goes wrong. Book a free migration assessment. We review your current setup, identify the risks specific to your account, and give you a clear plan.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Assessment
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