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
  Database,
  Mail,
  Workflow,
  FileText,
  Users,
  Tag,
  Building2,
  GitBranch,
  Settings,
  Shield,
  FileCheck,
  ListChecks,
  ClipboardCheck,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function WhatMigrationServiceMigratesClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'data-assets-automation',
        'can-contacts-be-migrated',
        'can-html-email-templates-be-migrated',
        'are-automation-workflows-transferred',
        'transfer-vs-rebuild',
        'why-this-gets-more-complicated-for-agencies',
        'what-a-complete-migration-service-should-cover',
        'questions-to-ask-a-migration-provider',
        'testing-and-validation',
        'faq',
        'the-takeaway'
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
      q: "Can migration services move contacts automatically?",
      a: "Largely yes. Contacts, custom fields, tags, and opportunities move through CSV export and import with field mapping — a well-documented, largely mechanical process, though it still requires clean source data and correctly mapped fields to avoid dropped or duplicated records."
    },
    {
      q: "Can HTML email templates be migrated directly, or do they need to be rebuilt?",
      a: "It depends on the source platform. GoHighLevel's own documentation confirms a direct share-link import from ActiveCampaign, but manual recreation (copying content into GoHighLevel's builder) from Mailchimp. Ask specifically about your source platform rather than assuming either answer."
    },
    {
      q: "Do automation workflows transfer automatically?",
      a: "No. Every official GoHighLevel migration guide reviewed describes workflow migration as a manual rebuild process — documenting the original logic, then recreating triggers, actions, and conditions inside GoHighLevel's own Workflows builder."
    },
    {
      q: "What's the difference between data migration and automation migration?",
      a: "Data migration moves structured records (contacts, fields, tags) through export/import with mapping. Automation migration recreates behavioral logic (triggers, conditions, actions) that has to be rebuilt because source and destination platforms use different underlying automation architectures — it's a redesign exercise, not a file transfer."
    },
    {
      q: "How much of a CRM can actually be migrated without manual work?",
      a: "Structured data — contacts, custom fields, tags, and opportunities — is the part that transfers with the least manual effort, provided the data is clean beforehand. Almost everything else (automations always, email templates and forms on most platforms) requires some level of manual recreation."
    },
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'data-assets-automation', title: 'Data, Assets, and Automation Are Three Different Problems' },
    { id: 'can-contacts-be-migrated', title: 'Can Contacts Be Migrated Automatically?' },
    { id: 'can-html-email-templates-be-migrated', title: 'Can HTML Email Templates Be Migrated?' },
    { id: 'are-automation-workflows-transferred', title: 'Are Automation Workflows Ever Transferred Automatically?' },
    { id: 'transfer-vs-rebuild', title: 'Transfer vs. Rebuild: The Full Picture' },
    { id: 'why-this-gets-more-complicated-for-agencies', title: 'Why This Gets More Complicated for Agencies' },
    { id: 'what-a-complete-migration-service-should-cover', title: 'What a Complete Migration Service Should Cover' },
    { id: 'questions-to-ask-a-migration-provider', title: 'Questions to Ask a Migration Provider' },
    { id: 'testing-and-validation', title: 'Testing and Validation' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'the-takeaway', title: 'The Takeaway' },
  ];

  const transferData = [
    { component: 'Contacts', transfersDirectly: 'Yes (CSV)', requiresMapping: 'Yes', requiresRebuild: 'No', keyConsideration: 'Data must be cleaned and formatted before import or the import fails or drops rows' },
    { component: 'Custom fields', transfersDirectly: 'Once field exists', requiresMapping: 'Yes', requiresRebuild: 'Only to create the field first', keyConsideration: 'Create the destination field before importing, or that column\'s data has nowhere to go' },
    { component: 'Tags', transfersDirectly: 'Yes', requiresMapping: 'Minor', requiresRebuild: 'No', keyConsideration: 'Often applied during the same import step' },
    { component: 'Opportunities / pipelines', transfersDirectly: 'Yes (CSV)', requiresMapping: 'Yes (pipeline & stage)', requiresRebuild: 'No', keyConsideration: 'Each record needs a matching contact already present in the destination' },
    { component: 'HTML email templates', transfersDirectly: 'Depends on source', requiresMapping: 'Yes, where importer exists', requiresRebuild: 'Often, without an importer', keyConsideration: 'Confirmed via share-link import from ActiveCampaign; confirmed to require manual recreation from Mailchimp' },
    { component: 'Forms', transfersDirectly: 'No', requiresMapping: 'N/A', requiresRebuild: 'Yes', keyConsideration: 'Rebuilt in GoHighLevel\'s own form builder; not imported from third-party platforms' },
    { component: 'Landing pages / funnels', transfersDirectly: 'Generally no', requiresMapping: 'N/A', requiresRebuild: 'Yes', keyConsideration: 'ClickFunnels is a documented exception via a native URL importer; most others require a manual rebuild' },
    { component: 'Workflow triggers/conditions/actions', transfersDirectly: 'No', requiresMapping: 'N/A', requiresRebuild: 'Yes', keyConsideration: 'Confirmed across multiple official GoHighLevel migration guides as manual recreation, not import' },
    { component: 'Third-party integrations', transfersDirectly: 'No', requiresMapping: 'N/A', requiresRebuild: 'Reconnect', keyConsideration: 'Credentials and API connections must be re-authenticated in the new platform, not carried over' },
  ];

  const questionsData = [
    'Do you migrate contacts only, or do you also rebuild automation logic?',
    'For my specific source platform, can email templates be imported directly, or do they need to be manually recreated?',
    'How do you handle custom fields that don\'t already exist in the destination account?',
    'What is your process for testing a rebuilt workflow before it goes live with real contacts?',
    'What happens to my existing automations during the cutover period — do both systems run in parallel, or is there a gap?',
    'Which parts of my current setup do you expect will need to be rebuilt rather than imported, based on what I\'ve described?',
    'How do you validate that migrated data matches the source, beyond a total record count?',
    'What\'s explicitly included in the quoted scope, and what would trigger an additional cost?',
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
      <Button
        onClick={handleOpenBooking}
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Button>
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
          <span className="text-[#1A2236] font-medium">What a GoHighLevel Migration Actually Includes (2026)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Migration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Data Migration</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            What Does a Migration Service Actually Migrate?<br />
            <span className="text-[#F8D000]">Contacts, Emails, and Workflows Explained</span>
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
              <div className="text-xs text-white/50">GoHighLevel Migration Specialists · 200+ builds and migrations delivered · Verified against GoHighLevel's official migration documentation, September 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            "Migration" gets used as if it means one thing. It doesn't. A CRM migration that moves your contacts perfectly can still leave you rebuilding every email template by hand and recreating every automation from scratch — and depending on the provider, that might be exactly what you signed up for without realizing it.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">The honest answer, checked against GoHighLevel's own migration documentation rather than assumed: contacts and structured data transfer with field mapping, HTML email templates transfer directly only on some source platforms and require manual recreation on others, and automation workflows are essentially never transferred as working logic — they get rebuilt.</strong> Whether a migration service is worth what it charges comes down to how well it handles that middle category and that last one, because the first one is the easy part.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This article breaks down what actually happens to each type of system component during a migration, why the differences exist, and what to ask a provider before you hire them — specifically for agencies weighing a move into <Link href="/blog/what-is-ghl-migration" className="text-[#0E9BF0] hover:underline">GoHighLevel</Link>, where several platforms' migration behavior has been directly documented and can be checked rather than guessed at.
          </p>

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
              href="#what-a-complete-migration-service-should-cover"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See What's Included
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
                  <div className="text-xs text-white/50">GoHighLevel Migration & Setup Specialists</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built and migrated globally. All migration claims verified against GoHighLevel's official documentation as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Migrating?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We handle complete migrations from any platform to GoHighLevel.</p>
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

            {/* Section: Data, Assets, and Automation Are Three Different Problems */}
            <h2 id="data-assets-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Data, Assets, and Automation Are Three Different Problems
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before anything else, it helps to stop using "migrate" as a single verb and start treating it as three separate technical problems, because a provider — or a piece of software — can be good at one and bad at the other two.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Data</strong> is structured records: contacts, custom fields, tags, lists, and opportunities. This is the category CRMs are built to move in and out of, because it's just rows and columns.</li>
              <li><strong className="text-[#1A2236]">Assets</strong> are the things your marketing content lives in: HTML email templates, forms, and landing pages. These aren't structured data — they're a mix of design, content, and platform-specific formatting, which is exactly why they don't always survive a straight export/import.</li>
              <li><strong className="text-[#1A2236]">Automation</strong> is the logic that runs your follow-up: triggers, conditions, branches, delays, and actions strung together into a sequence. This is a program, not a record, and different platforms build that program on fundamentally different architectures.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The relationship each one follows during a real migration looks like this:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Source CRM → exported data → field mapping → destination CRM</strong> (data)</li>
              <li><strong className="text-[#1A2236]">Source email template → HTML/content → destination email builder</strong> (assets)</li>
              <li><strong className="text-[#1A2236]">Source automation → trigger/logic/action structure → destination workflow</strong> (automation)</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Only the first one is genuinely a transfer. The other two are closer to translation — and translation loses things a straight copy wouldn't.
            </p>

            {/* Section: Can Contacts Be Migrated Automatically? */}
            <h2 id="can-contacts-be-migrated" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can Contacts Be Migrated Automatically?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Yes, largely. Contacts, custom fields, tags, and opportunities all move through the same basic mechanism: export as CSV from the source platform, then import with field mapping into the destination.</strong> This is confirmed directly in GoHighLevel's own migration documentation for multiple source platforms — the process is consistently described as export, clean, map, import, not a one-click sync.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What that process actually involves:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Export.</strong> The source platform generates a CSV (or several, if contacts, deals, and other objects export separately).</li>
              <li><strong className="text-[#1A2236]">Cleaning.</strong> Date formats, character encoding, line breaks, and duplicate entries need to be standardized before the file will import cleanly. GoHighLevel's own ActiveCampaign migration guide is specific about this: dates need to be in YYYY-MM-DD format, the file needs UTF-8 encoding, and emojis and line breaks need to be stripped out before upload.</li>
              <li><strong className="text-[#1A2236]">Field mapping.</strong> Each CSV column gets matched to a GoHighLevel field during import. If a field doesn't already exist on the destination side — a custom property that only existed in the old platform — it needs to be created first, or that data has nowhere to go and gets dropped.</li>
              <li><strong className="text-[#1A2236]">Tags and lists.</strong> These typically get applied during the same import step, often used to mark which batch or source a contact came from.</li>
              <li><strong className="text-[#1A2236]">Deduplication.</strong> Reimporting the same contact twice (which happens constantly during testing) is one of the more common ways migrations produce messy duplicate records. It's worth asking a provider how they handle this specifically, since exact matching behavior can vary and is worth confirming in your own account rather than assuming a fixed rule.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The practical implication: contact migration is close to "solved" as a technical problem. Where it goes wrong is almost always process, not technology — dirty source data, custom fields created after contacts were already imported, or skipping the mapping step and letting data land in the wrong fields.
            </p>

            {/* Section: Can HTML Email Templates Be Migrated? */}
            <h2 id="can-html-email-templates-be-migrated" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can HTML Email Templates Be Migrated?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Sometimes directly, sometimes not — and the difference depends entirely on which platform you're migrating from, not on GoHighLevel's capability alone.</strong> This is one of the more commonly misunderstood parts of a migration scope, because "email migration" sounds like one thing and is actually two very different outcomes depending on the source.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's own documentation shows both cases:
            </p>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">DIRECT IMPORT — ActiveCampaign</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Migrating from ActiveCampaign, GoHighLevel's official guide describes generating a shareable link from an ActiveCampaign template (Campaigns → Campaign Templates → Share) and pasting that link directly into GoHighLevel's own template importer (Marketing → Emails → Email Templates → Import Template). The template — including its HTML structure — comes across without being rebuilt by hand.
              </p>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">MANUAL RECREATION — Mailchimp</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Migrating from Mailchimp, the same official documentation describes a completely different process: export the campaign content, then manually copy the text, images, and links into GoHighLevel's own email builder, matching the layout by eye. There's no share-link importer for Mailchimp templates in the current documented process — the content moves, but the "migration" is really a rebuild with the original as a reference.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reason this varies isn't arbitrary — it comes down to whether the source platform exposes a template format GoHighLevel's importer can read, or whether the only option is a rendered HTML export that has to be manually reconstructed. This is exactly the kind of detail worth confirming for your specific source platform rather than assuming either outcome. GHL Scale Up's <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign</Link> and <Link href="/blog/mailchimp-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">Mailchimp</Link> migration guides cover the platform-specific process in full if you're moving from either one.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Forms and landing pages follow the second pattern almost universally. GoHighLevel's own ActiveCampaign guide states plainly that direct import of landing pages isn't supported — they're documented, screenshotted for reference, and rebuilt in GoHighLevel's page builder. The one notable exception is ClickFunnels, where GoHighLevel provides a native URL-based importer that can pull in existing funnel pages directly, which is a meaningfully different (and easier) starting point than a from-scratch rebuild.
            </p>

            {/* Section: Are Automation Workflows Transferred? */}
            <h2 id="are-automation-workflows-transferred" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Are Automation Workflows Ever Transferred Automatically?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">No — not as working logic. Every official GoHighLevel migration guide reviewed for this article describes automation migration as manual recreation, not import.</strong> This is the single most important thing to understand before scoping a migration, because it's the part most likely to be underestimated.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reasoning is structural, not a GoHighLevel limitation specifically: source platforms build their automation engines on their own internal trigger/condition/action architecture, and that architecture doesn't map cleanly onto a different platform's equivalent system. GoHighLevel's own ActiveCampaign guide is direct about this: automations must be manually recreated using HighLevel's own Workflows feature. The documented process is to export or manually document each automation's triggers, actions, and conditional branches from the source platform, then rebuild that same logic — trigger by trigger, action by action — inside GoHighLevel's Workflows builder, using pre-built recipe templates as a starting point where one happens to match.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What this means in practice for scoping a migration:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Every workflow needs to be documented before it's touched.</strong> If a workflow only exists as configured logic in a platform you're about to leave, and nobody writes down what it does, that logic is genuinely gone the moment the account is closed.</li>
              <li><strong className="text-[#1A2236]">"Similar" isn't "identical."</strong> GoHighLevel supports if/else conditional branching and timed delays, similar in concept to most other automation platforms, but the specific trigger types, available actions, and branching mechanics differ enough that a one-to-one rebuild is closer to a redesign exercise than a copy job.</li>
              <li><strong className="text-[#1A2236]">Complexity, not contact volume, drives the real cost.</strong> A list of 200,000 contacts imports in roughly the same effort as a list of 2,000. Forty branching workflows with conditional logic take meaningfully longer to rebuild and test than five simple ones, regardless of how many contacts flow through them.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you're comparing this across several possible source platforms at once, GHL Scale Up's <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-[#0E9BF0] hover:underline">platform-by-platform migration comparison</Link> walks through what specifically transfers and what breaks for each one.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/migration-transfer-vs-rebuild.png"
                  alt="Migration transfer vs rebuild comparison: Data transfers, HTML email templates depend on source, automation workflows always require rebuild"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Data transfers with mapping, email templates vary by source platform, automation workflows always require rebuild</span>
              </div>
            </div>

            {/* Section: Transfer vs. Rebuild - The Full Picture */}
            <h2 id="transfer-vs-rebuild" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Transfer vs. Rebuild: The Full Picture
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Putting the three categories together, here's how the major components of a typical marketing system behave during a migration into GoHighLevel, based on GoHighLevel's own documented migration processes:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Component</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Transfers Directly?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requires Mapping?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Requires Rebuild?</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Key Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {transferData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.component}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.transfersDirectly}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.requiresMapping}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.requiresRebuild}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.keyConsideration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Why This Gets More Complicated for Agencies */}
            <h2 id="why-this-gets-more-complicated-for-agencies" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why This Gets More Complicated for Agencies
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Everything above assumes one account moving to one destination. An agency migration is usually several accounts moving at once, and that changes the shape of the problem rather than just the size of it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A few considerations specific to agency-scale migrations:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Multiple source platforms in one project.</strong> It's common for an agency's client base to be spread across different CRMs and email tools — one client on ActiveCampaign, another on Mailchimp, another on a spreadsheet and a separate booking tool. Each source platform behaves differently for the email and automation categories above, so a single "migration process" document doesn't cover every client the same way.</li>
              <li><strong className="text-[#1A2236]">Reusable automation templates.</strong> Rebuilding the same category of workflow (a lead-response sequence, a review-request flow) for every client individually wastes the exact effort a well-built template — a <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">GoHighLevel Snapshot</Link>, configured once and deployed repeatedly — is meant to eliminate. Agencies that skip this step end up rebuilding the same logic from scratch for every account.</li>
              <li><strong className="text-[#1A2236]">Naming and structure standardization.</strong> When one person is managing dozens of sub-accounts, inconsistent field names, tag conventions, and workflow naming between clients turn a manageable system into one nobody can maintain six months later.</li>
              <li><strong className="text-[#1A2236]">Repeatable QA.</strong> Testing needs to happen the same way for every client migration, not improvised fresh each time — otherwise the quality of a given migration depends entirely on which team member happened to run it.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              None of this changes what transfers versus what gets rebuilt at the technical level — it changes how much of that rebuild work is genuinely necessary to repeat versus standardize.
            </p>

            {/* Section: What a Complete Migration Service Should Cover */}
            <h2 id="what-a-complete-migration-service-should-cover" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What a Complete Migration Service Should Cover
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Given the distinction above, a migration quote that only discusses contact volume is answering the easiest 20% of the question. A provider capable of handling the full scope should be able to speak specifically to each of these before quoting a price:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Data</h3>
                </div>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside ml-9">
                  <li>Contact volume and which fields, tags, and segments exist</li>
                  <li>Opportunity/pipeline data and how source stages map to destination stages</li>
                  <li>Data quality issues (duplicates, missing required fields) and how they'll be cleaned before import</li>
                </ul>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Email assets</h3>
                </div>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside ml-9">
                  <li>How many templates exist, and whether the source platform supports a direct template import or requires manual recreation</li>
                  <li>What happens to personalization tokens, images, and links during the move</li>
                  <li>How sending domain and deliverability setup is handled during cutover, not just template design</li>
                </ul>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Workflow className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">Automation</h3>
                </div>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside ml-9">
                  <li>How many workflows exist and their relative complexity (a linear 3-step sequence versus a 15-branch conditional tree are very different scopes)</li>
                  <li>Which triggers and actions the destination platform supports natively, and which require an alternate approach</li>
                  <li>How external integrations tied to those workflows get reconnected</li>
                </ul>
              </div>

              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <ClipboardCheck className="w-5 h-5 text-[#0E9BF0]" />
                  <h3 className="text-base font-bold text-[#1A2236]">QA</h3>
                </div>
                <ul className="space-y-1 text-sm text-[#5C6880] list-disc list-inside ml-9">
                  <li>How test records are used to validate the migration before real contacts are touched</li>
                  <li>Whether workflows are tested branch by branch, not just on the "happy path"</li>
                  <li>Whether there's a documented pre- and post-migration comparison, not just an assurance that "everything transferred"</li>
                </ul>
              </div>
            </div>

            {/* Section: Questions to Ask a Migration Provider */}
            <h2 id="questions-to-ask-a-migration-provider" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Questions to Ask a Migration Provider Before You Hire One
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A short, direct list is more useful here than a long one. These specifically separate providers who understand the data/asset/automation distinction from providers who are quoting based on contact count alone:
            </p>

            <div className="space-y-2 mb-6">
              {questionsData.map((question, idx) => (
                <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-3 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                  <p className="text-sm text-[#1A2236] leading-relaxed">{question}</p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A provider who can answer these specifically — not generically — is telling you they've actually scoped your system rather than quoting a template price.
            </p>

            {/* Section: Testing and Validation */}
            <h2 id="testing-and-validation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Testing and Validation
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Testing a migration means checking more than whether the import ran without an error message. A useful validation pass checks each category separately: spot-check a sample of imported contacts against the source for field accuracy, send a real test through each rebuilt email template to confirm rendering and personalization tokens work, and run actual test contacts through every rebuilt workflow — including branches that don't represent the most common path — before it touches a live lead.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is intentionally a summary, not the full process. GHL Scale Up's <Link href="/blog/gohighlevel-migration-checklist" className="text-[#0E9BF0] hover:underline">GoHighLevel migration checklist</Link> covers the complete phase-by-phase testing and go-live sequence in detail, including the parallel-running period most migrations should include before the source platform is switched off. And if you want to see how migrations commonly go wrong at each of these stages, the <Link href="/blog/ghl-migration-mistakes" className="text-[#0E9BF0] hover:underline">common migration mistakes</Link> guide documents the specific, recurring failure points.
            </p>

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
              Want the migration handled end-to-end — contacts, email templates, and automation rebuild included?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free migration assessment</Link>.
            </div>

            {/* Section: The Takeaway */}
            <h2 id="the-takeaway" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              The Takeaway
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A migration service should be evaluated by what it can preserve and rebuild across your entire system — data, email assets, and automation logic — not by whether it can import a contact CSV. Contact import is the easiest part of the job and the part every provider can do. The real difference between migration providers shows up in how carefully they handle the parts that don't transfer cleanly: recreating email templates without losing your design, and rebuilding automation logic that actually behaves the way your old workflows did, tested branch by branch before it touches a real lead.
            </p>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-ghl-migration" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel Migration? →</Link>
                <Link href="/blog/gohighlevel-migration-checklist" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Checklist →</Link>
                <Link href="/blog/ghl-migration-mistakes" className="text-sm text-[#0E9BF0] hover:underline">8 Common GHL Migration Mistakes →</Link>
                <Link href="/blog/best-crm-to-migrate-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Best CRM to Migrate Into GoHighLevel →</Link>
                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration →</Link>
                <Link href="/blog/mailchimp-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Mailchimp to GoHighLevel Migration →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Migrating to GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We handle complete migrations — contacts, email templates, automations, and everything in between. Book a free migration assessment.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Migration Assessment
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
                GHL Scale Up is a specialised GoHighLevel implementation and migration agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds and migrations delivered. This guide reflects direct experience migrating from ActiveCampaign, Mailchimp, HubSpot, Kajabi, and other platforms. All migration claims verified against GoHighLevel's official documentation as of September 2026.
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