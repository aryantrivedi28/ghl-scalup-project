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
  Rocket,
  Image as ImageIcon,
  ExternalLink,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelVsDubsadoClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'short-answer',
        'how-built-differently',
        'where-they-overlap',
        'what-gohighlevel-asks',
        'pricing',
        'which-platform-fits',
        'solo-consultants',
        'photographers-creative',
        'marketing-agencies',
        'service-businesses-pipeline',
        'when-dubsado-better',
        'can-use-both-together',
        'stay-improve-switch',
        'which-easier-to-use',
        'how-to-choose-six-questions',
        'getting-set-up',
        'if-decided-dubsado-fits',
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
      q: "What is the difference between GoHighLevel and Dubsado?",
      a: "GoHighLevel is organized around leads and communication: forms, funnels, pipelines, workflows, email and SMS, with agency features. Dubsado is organized around client projects: proposals, contracts, invoices, scheduling, portals and Flows for small service businesses."
    },
    {
      q: "Is GoHighLevel better than Dubsado?",
      a: "Neither is better in general. GoHighLevel suits lead generation, pipelines, campaigns and multi-client operations. Dubsado suits a structured client flow for a solo or small service business."
    },
    {
      q: "Is Dubsado a CRM?",
      a: "It has client records and project management, but Dubsado states it is not a sales CRM. It does not provide prospecting or an outbound pipeline."
    },
    {
      q: "Is GoHighLevel suitable for freelancers?",
      a: "It can be, particularly for freelancers who rely on lead generation and follow-up. It involves more configuration and usage-based charges for messaging, so check whether you need that breadth."
    },
    {
      q: "Is Dubsado suitable for marketing agencies?",
      a: "For an agency's own proposals, contracts and invoices, possibly. For running client campaigns or multiple client accounts, Dubsado is not designed for it."
    },
    {
      q: "Which is better for proposals and contracts?",
      a: "Both support proposals, contracts and e-signatures. Dubsado's approach centers on packages and a project; GoHighLevel's Documents & Contracts has no conditional logic. Test each with your own contract."
    },
    {
      q: "Which is better for marketing automation?",
      a: "GoHighLevel, if you need email and SMS campaigns, funnels and multi-channel follow-up. Dubsado states it is not a mass email platform."
    },
    {
      q: "Can GoHighLevel replace Dubsado, or Dubsado replace GoHighLevel?",
      a: "GoHighLevel can cover much of Dubsado's client flow with more setup. Dubsado cannot replace GoHighLevel's marketing, pipeline and agency features. Whether a replacement is worthwhile depends on your process, not on feature coverage."
    },
    {
      q: "Can GoHighLevel and Dubsado work together?",
      a: "Via Zapier or custom work, within the limits above. We found no native integration, and Dubsado's Zapier integration requires Premier. Decide record ownership before connecting them."
    },
    {
      q: "Which is cheaper?",
      a: "On subscription alone, Dubsado's published plans cost less than GoHighLevel's. That is not the whole cost: GoHighLevel adds usage-based charges and Dubsado adds user and brand add-ons. Compare what you need to use."
    },
    {
      q: "Is it worth switching from Dubsado to GoHighLevel?",
      a: "Only if you have a requirement Dubsado cannot meet, such as outbound campaigns or multi-client operation. If the issue is an inconsistent setup, improving it is usually cheaper than migrating."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'short-answer', title: 'The Short Answer' },
    { id: 'how-built-differently', title: 'How the Two Platforms Are Built Differently' },
    { id: 'where-they-overlap', title: 'Where They Overlap, and Why Overlap Is Not Equivalence' },
    { id: 'what-gohighlevel-asks', title: 'What GoHighLevel Asks of You Before It Pays Off' },
    { id: 'pricing', title: 'GoHighLevel vs Dubsado Pricing' },
    { id: 'which-platform-fits', title: 'Which Platform Fits Which Business' },
    { id: 'solo-consultants', title: 'Solo Consultants' },
    { id: 'photographers-creative', title: 'Photographers and Creative Businesses' },
    { id: 'marketing-agencies', title: 'Marketing Agencies' },
    { id: 'service-businesses-pipeline', title: 'Service Businesses With a Strong Sales Pipeline' },
    { id: 'when-dubsado-better', title: 'When Dubsado Is the Better Fit, and When GoHighLevel Is' },
    { id: 'can-use-both-together', title: 'Can You Use GoHighLevel and Dubsado Together?' },
    { id: 'stay-improve-switch', title: 'Should You Stay, Improve or Switch?' },
    { id: 'which-easier-to-use', title: 'Which Is Easier to Use? It Depends on the Work' },
    { id: 'how-to-choose-six-questions', title: 'How to Choose: Six Questions' },
    { id: 'getting-set-up', title: 'Getting the Platform Set Up Properly' },
    { id: 'if-decided-dubsado-fits', title: 'If You Have Decided Dubsado Fits Better' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const shortAnswerData = [
    { problem: 'Turning an inquiry into a signed, paid, onboarded client with less admin', lean: 'Dubsado', why: 'Its model is the client project: proposal, contract, invoice, scheduler and portal in one flow' },
    { problem: 'Getting more leads and following up with them quickly by email and SMS', lean: 'GoHighLevel', why: 'Multi-channel communication, funnels, forms and pipelines are central to it' },
    { problem: 'Managing a sales pipeline with several stages and a team', lean: 'GoHighLevel', why: 'Pipelines and opportunities are core. Dubsado states it is not a sales CRM' },
    { problem: 'Running campaigns or bulk email', lean: 'GoHighLevel', why: 'Dubsado states it is not a mass email platform' },
    { problem: 'Running many client accounts as an agency', lean: 'GoHighLevel', why: 'Sub-accounts, SaaS mode and API access on higher plans' },
    { problem: 'A repeatable client flow for a solo or small team, without a marketing stack', lean: 'Dubsado', why: 'A narrower tool can be easier to keep consistent' },
    { problem: 'Both lead generation and a polished client flow', lean: 'Depends', why: 'One platform configured well, or two with a defined hand-off. See the section on using both' },
  ];

  const overlapData = [
    { need: 'Lead capture', ghl: 'Forms, funnels and websites; contacts enter pipelines and workflows', dubsado: 'Lead capture forms that start a project; 1 active form on Starter, unlimited on Premier', comparable: 'Partly. GoHighLevel is stronger on acquisition; Dubsado on routing into a client project' },
    { need: 'Contact and client records', ghl: 'Contacts with opportunities, tags and custom fields', dubsado: 'Clients and projects with statuses, tags and a portal', comparable: 'Different models' },
    { need: 'Sales pipeline', ghl: 'Pipelines with stages; opportunities tied to contacts', dubsado: 'Project statuses; Dubsado says it is not a sales CRM', comparable: 'GoHighLevel is the stronger fit for pipeline work' },
    { need: 'Proposals and packages', ghl: 'Documents & Contracts: proposals and estimates with text blocks and pricing tables', dubsado: 'Proposals and packages clients select; public proposals on Premier only', comparable: 'Both exist. Experience for the client differs; test with your own offer' },
    { need: 'Contracts and e-signature', ghl: 'E-signature with a certificate recording signer details, IP address and timestamp; no conditional logic in documents', dubsado: 'Contract templates with e-signature, one contract per project', comparable: 'Comparable. Check your own contract rules' },
    { need: 'Invoices and payments', ghl: 'Invoices generated from signed documents; one-time or recurring; payment gateways you connect', dubsado: 'Invoices, payment plans and reminders; Dubsado Payments (Stripe), PayPal, Square', comparable: 'Comparable for common cases. Verify your processor and region' },
    { need: 'Scheduling', ghl: 'Calendars, including round robin and group calendars', dubsado: 'Scheduler on Premier only, linked to calendars', comparable: 'GoHighLevel is broader; Dubsado simpler' },
    { need: 'Automation', ghl: 'Workflows with triggers, conditions and many action types; some actions carry usage costs', dubsado: 'Flows on Premier: 15 documented actions (email, forms, contracts, scheduler, invoices, tasks, status, tags, portal, flow control)', comparable: 'Not directly comparable. Dubsado conditional branching not confirmed from documentation reviewed' },
    { need: 'Email and SMS', ghl: 'Email and SMS marketing and conversations, with usage-based charges', dubsado: 'Email within client workflows; SMS not mentioned in the documentation reviewed', comparable: 'GoHighLevel is stronger for outbound messaging' },
    { need: 'Client portal', ghl: 'A branded client portal app is listed as a paid add-on; scope not compared here', dubsado: 'Branded portals on all plans, with optional custom domain', comparable: 'Needs checking against your needs' },
    { need: 'Reporting', ghl: 'Agency and user reporting on higher plans; scope not compared', dubsado: 'Project status, dashboards and basic income tracking', comparable: 'Needs verification' },
    { need: 'Integrations', ghl: 'Webhooks and API (Basic on Unlimited, Advanced on Agency Pro)', dubsado: 'Zapier and QuickBooks Online on Premier; Gmail, calendars and payments on all plans', comparable: 'Different approach. See combined-use section' },
    { need: 'Multi-client operation', ghl: 'Sub-accounts, SaaS mode, white-label options', dubsado: 'Multi-brand (extra brands $10 a month); not designed for agencies', comparable: 'GoHighLevel' },
  ];

  const dubsadoPricingData = [
    { plan: 'Starter', annualPrice: '$335', annualPerMonth: 'about $27.92', monthlyPrice: '$35*', includesExcludes: 'Unlimited projects and clients, invoicing and payment plans, templates, client portals, calendar connection. One active lead capture form. No scheduling, automated workflows, public proposals, Zapier or bookkeeping integration' },
    { plan: 'Premier', annualPrice: '$525', annualPerMonth: 'about $43.75', monthlyPrice: '$55*', includesExcludes: 'Everything in Starter plus scheduling, automated workflows, public proposals, unlimited lead capture forms, Zapier and bookkeeping integration' },
  ];

  const gohighlevelPricingData = [
    { plan: 'Starter', monthly: '$97', annual: '$970', annualPerMonth: 'about $80.83', notes: '3 sub-accounts; no SaaS mode; API not listed' },
    { plan: 'Unlimited', monthly: '$297', annual: '$2,970', annualPerMonth: 'about $247.50', notes: 'Unlimited sub-accounts; basic API access' },
    { plan: 'Agency Pro', monthly: '$497', annual: '$4,970', annualPerMonth: 'about $414.17', notes: 'Unlimited sub-accounts with automated creation; SaaS mode; advanced API access' },
    { plan: 'Enterprise', monthly: 'Not published', annual: 'Not published', annualPerMonth: '-', notes: 'White-label mobile app included; contact HighLevel' },
  ];

  const betterFitData = [
    { dubsadoBetter: 'Your process is a repeatable path from inquiry to signed, paid, scheduled client', ghlBetter: 'Lead generation and follow-up are your main constraint' },
    { dubsadoBetter: 'You are a solo operator or a small team', ghlBetter: 'You manage a sales pipeline with several stages or people' },
    { dubsadoBetter: 'You want package selection, contracts and payment plans without a marketing stack', ghlBetter: 'You send email and SMS campaigns and need a funnel builder' },
    { dubsadoBetter: 'You value a focused tool you can keep consistent', ghlBetter: 'You run multiple client accounts, or want white-label or SaaS operation' },
    { dubsadoBetter: 'Your marketing sits elsewhere (a website, email tool, social)', ghlBetter: 'You want lead capture, communication and pipeline in one connected system' },
  ];

  const usingBothData = [
    { question: 'Is there a native integration?', whatWeCouldVerify: 'None found', whatItMeans: 'Plan on a connector or custom work' },
    { question: 'Via Zapier?', whatWeCouldVerify: 'Dubsado\'s Zapier integration requires Premier. Triggers: Contract Signed, New Project as Lead, Project Status Updated, New Project as Job, New Payment Received. Actions: Create Project and API Request (Beta)', whatItMeans: 'A new lead in GoHighLevel can create a Dubsado project. Changes in Dubsado can notify GoHighLevel. Two-way sync is not provided' },
    { question: 'Known limits', whatWeCouldVerify: 'Manually applied payments do not fire New Payment Received; Contract Signed fires for any signed contract or sub-agreement; Project Status Updated does not fire when a project is created with a status already set', whatItMeans: 'Design around them and test' },
    { question: 'Does HighLevel accept data from other tools?', whatWeCouldVerify: 'HighLevel documents webhooks, including with Zapier, and API access depends on plan', whatItMeans: 'Possible, with configuration' },
    { question: 'Who owns each record?', whatWeCouldVerify: 'Not defined by either platform', whatItMeans: 'You must decide: for example, GoHighLevel owns the lead until the contract is signed, Dubsado owns the client afterwards' },
    { question: 'Duplicate risk', whatWeCouldVerify: 'A person can exist as a contact and as a client', whatItMeans: 'Match on email and agree which system is authoritative' },
    { question: 'Extra cost', whatWeCouldVerify: 'Dubsado Premier, a connector subscription if needed, both platform fees, maintenance', whatItMeans: 'Often more than either alone' },
  ];

  const stayImproveSwitchData = [
    { decision: 'Stay', makesSenseWhen: 'The platform supports your core workflow and the problems are about use', evidenceToGather: 'A list of specific failures, and whether each is a platform limit or a setup issue', risksAndWork: 'Complacency; problems continue if no one owns them' },
    { decision: 'Improve', makesSenseWhen: 'The platform fits, but templates, forms and automations are inconsistent or undocumented', evidenceToGather: 'An audit of forms, templates, workflows, statuses and recent client journeys', risksAndWork: 'Rework time; some automations may need rebuilding and testing' },
    { decision: 'Switch', makesSenseWhen: 'A core requirement cannot be met, or the cost of adapting outweighs the benefit', evidenceToGather: 'A written requirement the current platform cannot meet, and a test on the new one', risksAndWork: 'Migration, retraining, lost history, rebuilt integrations' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get help choosing between GoHighLevel and Dubsado.</p>
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
          <span className="text-[#1A2236] font-medium">GoHighLevel vs Dubsado: An Honest Comparison (2026)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Dubsado</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel vs Dubsado:<br />
            <span className="text-[#F8D000]">Which Platform Is Right for Your Business?</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Facts checked against official documentation and pricing pages on 12 October 2026</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Short answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">GoHighLevel is built around getting and converting leads:</strong> capturing inquiries, following up by email and SMS, moving people through a sales pipeline, and running campaigns, often for many clients at once. <strong className="text-white">Dubsado is built around what happens after someone says yes:</strong> the proposal, contract, invoice, scheduling and onboarding that turn an inquiry into a booked, paid client. Both can do some of the other's work. Choose by where your business actually struggles, not by which list of features is longer.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            <strong className="text-white">A note on perspective.</strong> GHL Scale Up is a GoHighLevel implementation agency, so GoHighLevel is the platform we know best and the one we sell services around. That shapes what we can explain in depth, and it is a fair reason to check our claims against the official documentation we cite. We have tried to describe Dubsado on its own terms, and in several situations below the honest answer is Dubsado, or not switching at all.
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
              href="#how-to-choose-six-questions"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Six Questions
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

            {/* Section: Short Answer */}
            <h2 id="short-answer" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              GoHighLevel vs Dubsado: The Short Answer
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
                  {shortAnswerData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className={`py-3 px-3 font-semibold ${item.lean === 'Dubsado' ? 'text-[#25C97D]' : item.lean === 'GoHighLevel' ? 'text-[#0E9BF0]' : 'text-[#F8D000]'}`}>{item.lean}</td>
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
                  src="/blog/gohighlevel-vs-dubsado.png"
                  alt="GoHighLevel vs Dubsado: Platform architecture, overlap, pricing, and fit comparison"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel vs Dubsado: Platform architecture, overlap, pricing, and fit comparison</span>
              </div>
            </div>

            {/* Section: How Built Differently */}
            <h2 id="how-built-differently" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How the Two Platforms Are Built Differently
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The useful difference is not the feature list. It is what each platform treats as its main record, because that shapes how everything else is set up.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">GoHighLevel</strong> is organized around the contact. People enter through forms, funnels, calendars or imports, and move through pipelines as opportunities. Workflows act on contacts when something happens. It is sold as an agency platform: plans differ by the number of sub-accounts (client accounts), and higher plans add SaaS mode and API access. Because it is a broad platform, a business typically configures the parts it needs and ignores the rest.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Dubsado</strong> is organized around the project. A project holds messages, invoices, forms, tasks, events and notes for one client engagement, and Flows (its automation feature) apply a sequence of steps to a project. Dubsado describes itself as a client management platform for small service businesses, and is explicit about what it is not: "not a sales CRM", not an internal project management platform, and not a mass email platform. Dubsado's own help center goes into the project model in detail.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Practical difference:</strong> in GoHighLevel you design the journey out of general building blocks. In Dubsado the journey (lead, proposal, contract, payment, scheduling, onboarding) is already the shape of the tool, and you fill it with your own services and wording.
            </p>

            {/* Section: Where They Overlap */}
            <h2 id="where-they-overlap" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where They Overlap, and Why Overlap Is Not Equivalence
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both platforms list forms, contracts, invoices, scheduling and automation. Matching labels do not mean matching depth, so the table describes what each documents and whether the two are directly comparable.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Need</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Dubsado</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Comparable?</th>
                  </tr>
                </thead>
                <tbody>
                  {overlapData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.need}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                      <td className="py-3 px-3 text-[#F8D000]">{item.dubsado}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.comparable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two limits are worth stating without softening. Dubsado's own documentation says what it is not, so a business that needs outbound campaigns, SMS marketing or a funnel builder should not expect those from it. GoHighLevel's Documents & Contracts has no conditional logic, which means contracts with many variations need separate templates or workflows that choose between them. Neither limit makes either platform worse overall; each matters only if your process needs it.
            </p>

            {/* Section: What GoHighLevel Asks */}
            <h2 id="what-gohighlevel-asks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What GoHighLevel Asks of You Before It Pays Off
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's breadth is the reason to choose it and also the cost of choosing it. It gives you building blocks (contacts, pipelines, forms, calendars, workflows, email and SMS), and you decide how they fit together. For a lead-driven business that is the point. For a business that mainly wants a standard client flow, it can mean making many decisions Dubsado has already made. For a general overview of the platform, see <Link href="/blog/what-is-gohighlevel" className="text-[#0E9BF0] hover:underline">what GoHighLevel is</Link>.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Configuration is yours.</strong> The platform does not arrive shaped like your sales or onboarding process. Expect to design pipelines, fields, forms and automations, and to maintain them.</li>
              <li><strong className="text-[#1A2236]">Messaging has a running cost.</strong> Email, SMS, calling and AI features carry usage-based charges on top of the plan price, so volume changes the bill.</li>
              <li><strong className="text-[#1A2236]">Documents are static.</strong> Documents & Contracts has no conditional logic, so a contract with many variations needs separate templates or workflows that choose between them.</li>
              <li><strong className="text-[#1A2236]">Not every workflow is worth building.</strong> A broad platform becomes harder to maintain when a business builds automations it does not need.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Whether that trade-off pays off for a smaller business depends on complexity more than size; our guide on <Link href="/blog/gohighlevel-for-small-business" className="text-[#0E9BF0] hover:underline">GoHighLevel for small businesses</Link> covers that question directly.
            </p>

            {/* Section: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel vs Dubsado Pricing: What Is Documented and What It Leaves Out
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              All prices below are in dollars as published by each vendor on 12 October 2026. Dubsado states USD; the GoHighLevel page shows the "$" sign without naming a currency. Annual-equivalent figures are our arithmetic (annual price divided by twelve), shown only to put plans on the same basis.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">Dubsado</h3>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annual price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annual, per month</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly price</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What it includes and excludes</th>
                  </tr>
                </thead>
                <tbody>
                  {dubsadoPricingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.annualPrice}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.annualPerMonth}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.monthlyPrice}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.includesExcludes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              *Monthly rates appear on Dubsado's AI-information page, which says prices apply to new subscribers from 1 December 2025. They did not appear on the pricing page when we reviewed it, which listed annual prices and said annual billing gives "2 months worth of savings". Confirm monthly billing at checkout. Add-ons: extra brands $10 a month each; three additional users free, then $25 a month for 4 to 10 users, $45 for 11 to 20 and $60 for 21 to 30. Trial: 21 days with full Premier access, no card required. Payment processing fees are set by the processor you use and are not covered here.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">GoHighLevel</h3>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Plan</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Monthly</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annual</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Annual, per month</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {gohighlevelPricingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.plan}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.monthly}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.annual}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.annualPerMonth}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel says it operates month to month and offers a 14-day trial on self-serve plans. Usage-based charges apply to email and SMS marketing, inbound and outbound calling, and its AI products, and telecom or third-party fees may apply during the trial. Add-ons are priced separately: for example a branded client portal app at $49 a month per sub-account, a white-label mobile app at $497 a month and premium support at $500 a month.
            </p>

            <h3 className="text-lg font-bold text-[#1C2E4A] mt-6 mb-3">What the subscription price leaves out</h3>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A subscription is not the cost of running a system. Both platforms need set-up time, template and workflow building, training and ongoing maintenance, and migration if you move. On GoHighLevel, volume of messages and calls changes the bill. On Dubsado, extra brands and users change it, and some tasks may need Zapier or a bookkeeping integration, which means Premier. We have not estimated a total cost, because the figure depends on your message volume, team size and how much you build yourself. For a deeper breakdown of GoHighLevel plans and usage charges, see our <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link>.
            </p>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A fair reading: for a business whose main need is proposals, contracts, invoices and onboarding, Dubsado's pricing is easier to predict and the capabilities you pay for are the ones you use. For a business that needs campaigns, pipelines and multi-channel follow-up, or several client accounts, GoHighLevel's higher price buys capabilities Dubsado does not claim to offer. "Cheaper" and "better value" are not the same question.
            </p>

            {/* Section: Which Platform Fits */}
            <h2 id="which-platform-fits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Platform Fits Which Business
            </h2>

            {/* Section: Solo Consultants */}
            <h2 id="solo-consultants" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Solo Consultants
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The deciding question is whether your constraint is client operations or lead acquisition. A consultant who already has steady inquiries and loses time on proposals, contracts, invoices and onboarding emails is describing Dubsado's territory. A consultant who relies on outbound follow-up, a funnel and nurture sequences is describing GoHighLevel's. If it is genuinely both, start with the one that removes your largest current delay, and resist building the other half until the first works. For coaches who sell through calls, our guide to <Link href="/blog/gohighlevel-for-coaches" className="text-[#0E9BF0] hover:underline">GoHighLevel for coaches</Link> covers the lead-driven model in more detail.
            </p>

            {/* Section: Photographers and Creative */}
            <h2 id="photographers-creative" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Photographers and Creative Businesses
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These businesses tend to run a consistent sequence: inquiry, package choice, contract, deposit, questionnaire, booking, delivery. When that sequence is the work, a focused client-management process can matter more than the number of marketing features. Dubsado's package selection, contracts, payment plans, questionnaires and portal map onto it directly. GoHighLevel can be configured to do much of the same, with more setup and more choices to make.
            </p>

            {/* Section: Marketing Agencies */}
            <h2 id="marketing-agencies" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Marketing Agencies
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Agencies usually need lead capture, a pipeline, automated follow-up, multi-channel campaigns, separate accounts per client, and reporting. Sub-accounts, SaaS mode and API access on higher GoHighLevel plans are built for that, and Dubsado is not designed for multi-client agency operation. An agency could still use Dubsado internally for its own proposals and contracts, but that is a different question from running client campaigns.
            </p>

            {/* Section: Service Businesses Pipeline */}
            <h2 id="service-businesses-pipeline" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Service Businesses With a Strong Sales Pipeline
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Work out whether the bottleneck is selling or administering. A team with many open opportunities, several salespeople and a need to see pipeline stages points to GoHighLevel, because Dubsado states it is not a sales CRM. A team whose sales are fine but whose contracting and onboarding are inconsistent may need the client flow more than the pipeline. Many have both problems, which is covered in the section on using both.
            </p>

            {/* Section: When Dubsado Better */}
            <h2 id="when-dubsado-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Dubsado Is the Better Fit, and When GoHighLevel Is
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">Dubsado is likely the better fit when</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel is likely the better fit when</th>
                  </tr>
                </thead>
                <tbody>
                  {betterFitData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.dubsadoBetter}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.ghlBetter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neither column is a rule. Plenty of solo businesses use GoHighLevel well, and some agencies run on simpler tools. If the left column describes you and you have decided on Dubsado, the next question is how to configure lead capture forms, proposals, contracts, invoices, scheduling and client onboarding workflows so they match your real process. That is a separate job from choosing the platform. For Dubsado specifically, <Link href="https://www.sagekite.com/platforms/dubsado" className="text-[#0E9BF0] hover:underline" target="_blank" rel="noopener">Dubsado setup and implementation services</Link> are offered by Sage Kite, a separate website that describes itself as an independent Dubsado implementation partner. If GoHighLevel is the better fit, the setup section later in this guide applies instead.
            </p>

            {/* Section: Can Use Both Together */}
            <h2 id="can-use-both-together" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Use GoHighLevel and Dubsado Together?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sometimes, for a specific reason. The pattern people describe is GoHighLevel handling lead capture, campaigns and follow-up, with Dubsado handling the proposal, contract, invoice and onboarding once someone says yes. It is a possible architecture, not a default recommendation, and it carries costs.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Question</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What we could verify</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {usingBothData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.question}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatWeCouldVerify}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatItMeans}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Using both is justified when each platform does something the other does not do well for you, and when someone will maintain the hand-off. It is a poor choice when the real reason is that nobody decided. We have not tested the integration end to end, so treat any sync as something to prove with a pilot before relying on it. Connecting two platforms usually means connector or webhook work; our <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">integration services</Link> cover Zapier, Make and custom webhooks.
            </p>

            {/* Section: Stay Improve Switch */}
            <h2 id="stay-improve-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Stay, Improve or Switch?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Switching is not the default answer. Most platform complaints are partly setup problems: inconsistent forms, templates written for a service you no longer sell, automations nobody has reviewed. A poorly configured account tends to disappoint again on the next platform, so audit what is actually failing before you decide it is the software.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Decision</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Makes sense when</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Evidence to gather</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Risks and work involved</th>
                  </tr>
                </thead>
                <tbody>
                  {stayImproveSwitchData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.decision}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.makesSenseWhen}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.evidenceToGather}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.risksAndWork}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Migration is more than exporting contacts.</strong> From Dubsado, the help center describes exporting clients and projects as a CSV file from the desktop app, with project data such as contract status and primary invoice columns. It does not describe exporting forms, contract templates or Flows as portable data, so those usually need rebuilding. We did not verify the import side on GoHighLevel, or the reverse direction. Workflows, forms, templates, contracts, payment arrangements, integrations and historical records should each be checked individually before anyone commits. For what a GoHighLevel-side migration typically carries over (contacts, fields and tags move by CSV with field mapping; workflows, forms and most pages are rebuilt), see our guide to <Link href="/blog/what-a-gohighlevel-migration-service-migrates" className="text-[#0E9BF0] hover:underline">what a GoHighLevel migration service migrates</Link>. It does not discuss Dubsado, so treat it as a general guide rather than a Dubsado-specific one.
            </p>

            {/* Section: Which Easier to Use */}
            <h2 id="which-easier-to-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Is Easier to Use? It Depends on the Work
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neither "Dubsado is always easier" nor "GoHighLevel is always complicated" holds up. A narrow tool is easier to learn when your process matches its model, and Dubsado's own page acknowledges there is more to configure than in simpler tools. A broad platform becomes harder to maintain when a business builds workflows it does not need. A focused platform still needs deliberate configuration to match how your clients actually move through your process. Judge usability on the tasks you will do weekly: sending a proposal, chasing a payment, onboarding a client, adding a new service.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both vendors offer trials (21 days for Dubsado with Premier access, 14 days for GoHighLevel), and a trial is the only reliable test. Use it with a real, current client journey from start to finish, not a demo.
            </p>

            {/* Section: How to Choose Six Questions */}
            <h2 id="how-to-choose-six-questions" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Choose: Six Questions
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Where does the business lose time or money today?</strong> Finding leads, following up, or administering clients after they say yes.</li>
              <li><strong className="text-[#1A2236]">Do you need outbound campaigns, SMS or funnels?</strong> If yes, Dubsado does not claim to cover them.</li>
              <li><strong className="text-[#1A2236]">How complex is your pipeline?</strong> Several stages and several salespeople favour GoHighLevel.</li>
              <li><strong className="text-[#1A2236]">How repeatable is your client onboarding?</strong> A fixed path from package to contract to payment favours Dubsado.</li>
              <li><strong className="text-[#1A2236]">Do you manage other businesses' accounts?</strong> That points to GoHighLevel's agency plans.</li>
              <li><strong className="text-[#1A2236]">Is your current platform actually failing?</strong> If not, improve it first.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Write down your answers, then run a trial with one real client journey on the platform they point to. If you are weighing GoHighLevel against all-in-one marketing platforms rather than a client-flow tool, our <Link href="/blog/gohighlevel-alternatives" className="text-[#0E9BF0] hover:underline">GoHighLevel alternatives comparison</Link> and <Link href="/blog/gohighlevel-vs-hubspot" className="text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot</Link> guide are the better starting points.
            </p>

            {/* Section: Getting Set Up */}
            <h2 id="getting-set-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Getting the Platform Set Up Properly, Whichever You Choose
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Most platform disappointments are setup problems rather than software problems. Many people can set up either platform themselves, especially with a few simple services and time to learn. Help becomes more useful when you have several services with different journeys, many exceptions, heavy automation, a messy existing account, a migration from another system, or a team that needs consistent processes.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If GoHighLevel is the better fit, setup usually means designing pipelines, custom fields, forms and workflows around how you actually sell, and, if you are moving from another system, planning what gets rebuilt. GHL Scale Up's <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">GoHighLevel CRM setup service</Link> covers pipelines, custom fields and lead capture forms connected to the CRM, and the <Link href="/services/migration" className="text-[#0E9BF0] hover:underline">migration service</Link> covers moving from platforms that can export their data. Dubsado is not on that page's list of platforms, so confirm it first if you are moving from Dubsado.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If Dubsado is your answer, the last section of this guide points to an independent resource.
            </p>

            {/* Section: If Decided Dubsado Fits */}
            <h2 id="if-decided-dubsado-fits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              If You Have Decided Dubsado Fits Better
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Decided that Dubsado fits your business better? Explore Sage Kite's Dubsado setup and implementation services to learn how your client management workflows can be configured around your business processes. Sage Kite is a separate website from GHL Scale Up, and GHL Scale Up does not provide Dubsado services.
            </p>
            <div className="my-6">
              <a
                href="https://www.sagekite.com/platforms/dubsado"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#1C2E4A] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2A3F5F] transition-all"
              >
                Visit Sage Kite
                <ExternalLink className="w-4 h-4" />
              </a>
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
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing Guide →</Link>
                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? →</Link>
                <Link href="/blog/gohighlevel-for-small-business" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Small Businesses →</Link>
                <Link href="/blog/gohighlevel-for-coaches" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Coaches →</Link>
                <Link href="/blog/gohighlevel-alternatives" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Alternatives Comparison →</Link>
                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot →</Link>
                <Link href="/blog/what-a-gohighlevel-migration-service-migrates" className="text-sm text-[#0E9BF0] hover:underline">What a GoHighLevel Migration Service Migrates →</Link>
                <Link href="/services/integrations" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Integrations and API Development →</Link>
                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                <Link href="/services/migration" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Migration Service →</Link>
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