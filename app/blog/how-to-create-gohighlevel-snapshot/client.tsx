'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Settings,
  Zap,
  Shield,
  Clock,
  Users,
  Building2,
  Package,
  RefreshCw,
  AlertTriangle,
  Save,
  FolderTree,
  CloudDownload,
  Award,
  DollarSign
} from 'lucide-react';

export default function CreateSnapshotClient() {
  const [activeId, setActiveId] = useState<string>('');

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-snapshot',
        'whats-included',
        'how-to-create',
        'how-to-deploy',
        'maintain-version',
        'common-mistakes',
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

  const tocItems = [
    { id: 'what-is-snapshot', title: '1. What Is a GoHighLevel Snapshot?' },
    { id: 'whats-included', title: '2. What\'s Included in a Snapshot (and What\'s Not)' },
    { id: 'how-to-create', title: '3. How to Create a Snapshot (Step-by-Step)' },
    { id: 'how-to-deploy', title: '4. How to Deploy a Snapshot to a Client Sub-Account' },
    { id: 'maintain-version', title: '5. How to Maintain and Version Your Snapshots' },
    { id: 'common-mistakes', title: '6. Four Common Snapshot Mistakes to Avoid' },
    { id: 'faq', title: '7. Frequently Asked Questions' },
  ];

  const includedItems = [
    'Workflows and automation sequences',
    'Funnels, landing pages, and websites',
    'Email templates and campaigns',
    'SMS templates',
    'CRM pipelines and opportunity stages',
    'Calendars and booking settings',
    'Forms and surveys',
    'Custom fields and custom values',
    'Tags and contact segmentation rules',
    'Membership site structures',
    'Custom reports (as of April 2026)',
  ];

  const notIncludedItems = [
    'Contacts and contact data',
    'Conversations and call logs',
    'Reputation data (reviews)',
    'Stripe / payment connections',
    'Third-party API keys and integrations',
    'Users and team members',
    'Appointment history',
    'Reporting and analytics data',
    'Private dashboards',
    'Lead Gen Forms (LinkedIn)',
    'Contact-to-contact associations',
  ];

  const creationSteps = [
    { step: 'Switch to Agency View', desc: 'From your GHL dashboard, click your agency name in the top-left corner and select \'Switch to Agency View\'. You must be in Agency View to create Snapshots this is not available from inside a sub-account.' },
    { step: 'Go to Accounts → Snapshots', desc: 'In the left sidebar, click \'Accounts\', then select \'Snapshots\' from the submenu. This opens your Snapshot library.' },
    { step: 'Click Create New Snapshot', desc: 'Click the \'Create New Snapshot\' button (top right). A panel will open asking you to name the Snapshot and select the source sub-account.' },
    { step: 'Name it clearly and select source', desc: 'Use a descriptive name that includes the niche, version, and date: \'Dental Practice Full Setup v1.0 (Apr 2026)\'. Then select the template sub-account you prepared.' },
    { step: 'Choose which assets to include', desc: 'Click \'Select All\' to include everything, or expand each category to choose specific workflows, funnels, or templates. For a complete client Snapshot, select all.' },
    { step: 'Click Create', desc: 'Click \'Create\' to generate the Snapshot. GHL packages everything and saves it to your library in 1–5 minutes.' },
  ];

  const deploySteps = [
    { step: 'Go to Sub-Accounts', desc: 'Click \'Accounts\' in the left sidebar, then \'Sub-Accounts\'. Click the \'+\' or \'Create Sub-Account\' button to start a new account.' },
    { step: 'Fill in client details', desc: 'Enter the client\'s business name, email, and phone. Then in setup options, look for \'Snapshot\' or \'Start from Snapshot\' and select your prepared Snapshot from the dropdown.' },
    { step: 'Create the account', desc: 'Click Create. GHL will build the new sub-account and automatically deploy all Snapshot assets into it. This takes 1–5 minutes.' },
    { step: 'Customise for the client', desc: 'Update business name and logo across all funnels, phone number and email address in workflows, calendar link, placeholder copy, and pipeline stage names.' },
  ];

  const mistakesList = [
    { 
      mistake: 'Building the Snapshot from a live client account',
      cause: 'Captures placeholder business names, test contacts, or client-specific custom values',
      fix: 'Always Snapshot from a clean, dedicated template account built specifically for this purpose.'
    },
    { 
      mistake: 'Not testing the Snapshot before deploying to paying clients',
      cause: 'Broken workflows or funnels discovered after deployment damage client trust',
      fix: 'Deploy to a fresh test sub-account and fully test every workflow triggered, every funnel page checked.'
    },
    { 
      mistake: 'Including too many assets for one Snapshot',
      cause: 'Overwhelming for clients and hard to maintain',
      fix: 'Build focused Snapshots around specific services or client types. One per niche, not one \'all industries\' Snapshot.'
    },
    { 
      mistake: 'Forgetting that integrations need reconnecting after deployment',
      cause: 'API keys, Stripe connections, and third-party integrations do not transfer',
      fix: 'After deploying to a client, reconnect email domain for sending, Stripe for billing, and any third-party tools.'
    },
  ];

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
          <span className="text-[#1A2236] font-medium">How to Create a GoHighLevel Snapshot</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Post Tags / Category Labels */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Agency</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Snapshots</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Client Onboarding</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">How-to</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Create and Use a GoHighLevel Snapshot to<br />
            <span className="text-[#F8D000]">Onboard Clients Faster (2026)</span>
            <span className="text-sm text-white/50 block mt-2">(2026)</span>
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/web-app-manifest-192x192.png"
                alt="GHL Scale Up"
                className="w-8 h-8 object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated April 2026</div>
            </div>
          </div>

          {/* Introductory Paragraph */}
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
            If you are an agency owner manually rebuilding funnels, workflows, and pipelines for every new client, you are losing 8–40 hours per onboarding that you will never get back. GoHighLevel Snapshots are the fix and this guide explains exactly how to build and use them.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

          {/* Article Content */}
          <main className="min-w-0">

            {/* TL;DR / Quick Answer Box (BLUF) */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#F8D000]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
              </div>
              <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                A GoHighLevel Snapshot is a reusable template of an entire sub-account's configuration funnels, workflows, pipelines, email templates, calendars, and more packaged into a single file you can deploy to any new client account in minutes.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                To create one: go to Agency View → Accounts → Snapshots → Create New Snapshot → select your template sub-account → choose assets → save.
                Deployment takes under 5 minutes. Customisation takes 30–60 minutes. Building from scratch takes 8–40 hours. Snapshots eliminate the rebuild every time.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

            {/* Section 1: What Is a Snapshot? */}
            <h2 id="what-is-snapshot" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              1. What Is a GoHighLevel Snapshot?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">A GoHighLevel Snapshot is a complete copy of a sub-account's configuration packaged into a single deployable template.</strong>
              Think of it as a business-in-a-box for a specific industry or use case. You build the perfect system once, capture it as a Snapshot,
              and deploy it to new client accounts in minutes instead of rebuilding everything from scratch.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Snapshots are not just for large agencies. Any GHL user managing more than one account or expecting to onboard more than one client
              benefits from building a Snapshot. Even a single well-built Snapshot saves weeks of work over 12 months.
            </p>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">THE TIME SAVING IN REAL NUMBERS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-2">
                At a conservative agency rate of <strong className="text-white">\$75/hour</strong>: building a client account from scratch takes 8–40 hours
                costing <strong className="text-white">\$600–\$3,000 in billable time per client</strong>.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Deploying and customising a Snapshot takes <strong className="text-white">5–60 minutes</strong>.
                For a 10-client agency, that is <strong className="text-white">\$6,000–\$30,000 per year</strong> in recovered time.
                One well-built Snapshot pays for itself with the first deployment.
              </p>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <FolderTree className="w-5 h-5 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">How Snapshots fit the agency workflow</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Most agencies build one Snapshot per niche or service type: a dental Snapshot, a real estate Snapshot, a home services Snapshot.
                Each captures the proven setup for that industry. When a new client signs up in that niche, you load the Snapshot,
                customise the brand details, and the account is live.
              </p>
              <p className="text-sm text-[#1A2236] leading-relaxed mt-2">
                For agencies on the Agency Pro (SaaS) plan, Snapshots also power <strong>automated client provisioning</strong>
                when a client signs up and pays through your white-label platform, a Snapshot deploys to their account automatically.
                No manual work at all.
              </p>
            </div>

            {/* Section 2: What's Included */}
            <h2 id="whats-included" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              2. What's Included in a GoHighLevel Snapshot (and What's Not)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Before you build your first Snapshot, understand exactly what gets captured. Knowing this prevents surprises during deployment.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Included in a GHL Snapshot
                </h3>
                <ul className="space-y-2">
                  {includedItems.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#DC3545] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  NOT Included in a GHL Snapshot
                </h3>
                <ul className="space-y-2">
                  {notIncludedItems.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1A2236] flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">IMPORTANT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Snapshots capture <strong>system configuration, not live data.</strong> Contacts, conversations, and billing settings never transfer.
                This is intentional and a privacy feature each client gets a fresh workspace with your system architecture installed,
                not another client's data. Always build your Snapshot from a clean, dedicated template sub-account, never from a live client account.
              </p>
            </div>

            {/* Section 3: How to Create */}
            <h2 id="how-to-create" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              3. How to Create a GoHighLevel Snapshot (Step-by-Step)
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Before you start:</strong> You need a template sub-account that contains the setup you want to save.
              Create a dedicated sub-account named clearly, for example: <strong className="text-[#0E9BF0]">'TEMPLATE Dental Practice v1.0 (Apr 2026)'</strong>.
              Build all your funnels, workflows, pipelines, and templates inside this account. Test everything. Then create the Snapshot from it.
            </p>

            <div className="space-y-4 mb-6">
              {creationSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{idx + 1}</div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A2236] mb-1">{step.step}</h3>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <Save className="w-5 h-5 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">VERSION CONTROL TIP</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Include a version number and date in every Snapshot name: <strong>'Dental v1.0 (Apr 2026)'</strong>, <strong>'Dental v2.0 (Jul 2026)'</strong>.
                This prevents confusion when you have multiple Snapshots for the same niche and makes it immediately clear which one is the current production version.
              </p>
            </div>

            {/* Section 4: How to Deploy */}
            <h2 id="how-to-deploy" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              4. How to Deploy a GoHighLevel Snapshot to a Client Sub-Account
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Deployment is the fastest part. The Snapshot loads the entire system into the client's sub-account in minutes.
              Customisation replacing placeholder brand details with the client's real information takes 30–60 minutes.
            </p>

            <h3 className="text-lg font-bold text-[#1A2236] mb-3">Deploying to a new sub-account</h3>
            <div className="space-y-4 mb-6">
              {deploySteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#25C97D] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{idx + 1}</div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A2236] mb-1">{step.step}</h3>
                    <p className="text-sm text-[#5C6880] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 my-6">
              <h3 className="text-base font-bold text-[#1A2236] mb-2">Deploying to an existing sub-account</h3>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-2">
                You can also load a Snapshot into an account that already has content.
                Go to Agency View → Sub-Accounts → find the account → click Actions → Load Snapshot.
              </p>
              <p className="text-sm text-[#DC3545] leading-relaxed">
                <strong>Important:</strong> loading a Snapshot into an existing account adds the Snapshot's elements alongside whatever is already there.
                It does not overwrite. This can create duplicates if the account already has workflows or funnels from a previous Snapshot.
                Review and clean up after loading.
              </p>
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">SaaS Mode Automation</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                If you use Agency Pro (SaaS Mode), you can assign a Snapshot to a pricing plan so it deploys <strong>automatically when a client pays</strong>
                zero manual work needed. See our guide: 
                {/* <Link href="/blog/gohighlevel-saas-mode" className="text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup →</Link> */}
              </p>
            </div>

            {/* Section 5: Maintain and Version */}
            <h2 id="maintain-version" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              5. How to Maintain and Version Your Snapshots
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A Snapshot is not a one-time build. As you improve your systems better workflows, stronger funnels, new automations
              your Snapshot should evolve with them.
            </p>

            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 mb-4">
              <h3 className="text-base font-bold text-[#1A2236] mb-2 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#0E9BF0]" />
                How Snapshot updates work
              </h3>
              <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                Creating a new Snapshot version does not automatically update sub-accounts that were previously onboarded with an older version.
                Each deployed sub-account is independent.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong>Option 1 Manual update:</strong> Apply specific changes directly inside each client's sub-account. Best for small improvements.
              </p>
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong>Option 2 Re-deploy Snapshot:</strong> Load the new Snapshot version into the existing sub-account. Best for major overhauls.
              </p>
            </div>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-6">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-[#25C97D]" />
                <span className="text-sm font-bold text-[#25C97D]">Best practices for Snapshot maintenance</span>
              </div>
              <ul className="space-y-2 mt-2">
                <li className="text-sm text-[#1A2236] flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  Keep a master template sub-account per niche. Never build directly in a client account.
                </li>
                <li className="text-sm text-[#1A2236] flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  Update your master whenever you make a significant improvement.
                </li>
                <li className="text-sm text-[#1A2236] flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  Create a new Snapshot version don't overwrite. Keep previous versions for rollback.
                </li>
                <li className="text-sm text-[#1A2236] flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  Test every new Snapshot version in a clean sub-account before deploying to a paying client.
                </li>
              </ul>
            </div>

            {/* Section 6: Common Mistakes */}
            <h2 id="common-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              6. Four Common GoHighLevel Snapshot Mistakes to Avoid
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              These are the mistakes we fix most often when auditing agency GHL accounts at GHL Scaleup.
            </p>

            <div className="space-y-4 mb-6">
              {mistakesList.map((item, idx) => (
                <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#F8D000] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.mistake}</p>
                      <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>Cause:</strong> {item.cause}</p>
                      <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-[#F8D000]" />
                <span className="text-sm font-bold text-[#F8D000]">FROM 200+ GHL BUILDS</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                The Snapshot is only as good as the sub-account it was built from. We spend a significant part of our client onboarding sessions
                improving the master template cleaning up workflow logic, removing duplicate funnels, standardising naming conventions.
                A well-maintained Snapshot library is one of the most valuable operational assets an agency can have.
              </p>
            </div>

            {/* Section 7: FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
              7. Frequently Asked Questions About GoHighLevel Snapshots
            </h2>

            <div className="space-y-3">
              {[
                { 
                  q: "What is a GoHighLevel Snapshot?", 
                  a: "A GoHighLevel Snapshot is a reusable template that captures the complete configuration of a sub-account including workflows, funnels, pipelines, email and SMS templates, calendars, forms, custom fields, and tags and packages it for deployment to any new or existing sub-account in minutes. Snapshots do not include contacts, conversations, or billing data. They capture system architecture only." 
                },
                { 
                  q: "How long does it take to create a GoHighLevel Snapshot?", 
                  a: "Creating the Snapshot itself takes 5–10 minutes once your template sub-account is fully built and tested. Building the template sub-account the workflows, funnels, and pipelines you want to capture typically takes 8–40 hours depending on complexity. The one-time build investment is recovered with the very first client deployment." 
                },
                { 
                  q: "Does a GoHighLevel Snapshot include contacts?", 
                  a: "No. Snapshots capture system configuration only. Contacts, conversations, call logs, appointment history, and reputation data are never included in a Snapshot. This is intentional it ensures client data privacy and means every deployment starts with a clean workspace." 
                },
                { 
                  q: "How do I deploy a GoHighLevel Snapshot to a new client?", 
                  a: "In Agency View, go to Accounts → Sub-Accounts and create a new sub-account. During the setup, select your Snapshot from the dropdown. GHL deploys all Snapshot assets to the new account automatically. After creation, spend 30–60 minutes customising business name, phone number, logo, email templates, and any placeholder copy for that specific client." 
                },
                { 
                  q: "Can I load a Snapshot into an existing sub-account?", 
                  a: "Yes. Go to Agency View → Sub-Accounts → find the account → Actions → Load Snapshot. Loading adds Snapshot assets alongside existing ones it does not overwrite. Be aware this can create duplicate workflows or funnels if the account already has similar items from a previous Snapshot. Review the account after loading and remove any duplicates." 
                },
                { 
                  q: "Can I sell my GoHighLevel Snapshot?", 
                  a: "Yes. You can publish your Snapshot to the GoHighLevel Marketplace and sell access to other GHL users. Pricing models available include one-time purchase, monthly subscription, and annual subscription. Well-built, industry-specific Snapshots typically sell for $97–$997 depending on complexity. GoHighLevel's Marketplace Earning Dashboard, released March 2026, provides real-time revenue tracking for listed Snapshots." 
                },
                { 
                  q: "What happens if I update my Snapshot after deploying it to clients?", 
                  a: "Creating a new Snapshot version does not automatically update previously deployed client accounts. Each deployed sub-account is independent. To apply improvements to existing clients, either manually add the changes inside each client's sub-account, or re-deploy the new Snapshot (which adds new elements alongside existing ones and may create duplicates). Most agencies manually apply significant updates rather than redeploying the full Snapshot." 
                },
              ].map((faq, index) => (
                <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                  <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-[0.92rem] font-semibold text-[#1A2236] hover:text-[#0E9BF0] transition-colors">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-[#8A9BB0] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-sm text-[#5C6880] leading-relaxed pb-4">{faq.a}</p>
                </details>
              ))}
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation for Beginners →</Link>
                <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Missed Call Text Back: How It Works + Full Setup →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Running a GHL Agency?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We build Snapshots that deploy correctly every time. We've built and deployed 200+ GHL systems across every major industry.
                  If you want a production-quality Snapshot built to your exact niche or an audit of your existing one book a free call.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                  Book Your Free GHL Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
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
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/web-app-manifest-192x192.png"
                    alt="GHL Scaleup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GHL Scale Up Team</div>
                  <div className="text-xs text-white/50">GoHighLevel Expert Agency</div>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                5+ years GHL experience · 200+ systems built across dental, real estate, home services, SaaS, and agencies globally.
                We have built and deployed Snapshots in 6 countries.
              </p>
              <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
            </div>

            {/* CTA Card */}
            <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
              <div className="text-sm font-bold text-white mb-2">Want a Production-Ready Snapshot?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We'll build you a custom Snapshot for your niche that deploys perfectly every time.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                Get a Custom Snapshot
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
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
          </aside>
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