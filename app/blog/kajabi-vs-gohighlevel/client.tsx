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
  GraduationCap,
  Users,
  Building2,
  Calendar,
  MessageCircle,
  Phone,
  Layout,
  GitBranch,
  Sparkles,
  Award,
  TrendingUp,
  Star,
  Server,
  Globe,
  CreditCard,
  Smartphone,
  Briefcase,
  Target,
  Compass,
  GitCompare,
  BarChart3,
  Layers,
  Workflow,
  Mailbox,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function KajabiVsGoHighLevelClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'at-a-glance',
        'what-each-platform-is-built-for',
        'courses-and-course-delivery',
        'memberships-and-communities',
        'crm-and-lead-management',
        'marketing-automation',
        'funnels-landing-pages',
        'coaching-and-high-ticket',
        'agency-and-multi-client',
        'ease-of-use',
        'pricing',
        'where-kajabi-is-better',
        'where-gohighlevel-is-better',
        'decision-matrix',
        'which-platform-should-you-choose',
        'should-you-switch',
        'final-verdict',
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
      q: "Which is better, Kajabi or GoHighLevel?",
      a: "Neither is universally better Kajabi is stronger for course and membership delivery; GoHighLevel is stronger for CRM, sales pipelines, and multi-channel follow-up. The right choice depends on whether your product or your sales process is the center of your business."
    },
    {
      q: "Is GoHighLevel better than Kajabi for courses?",
      a: "No Kajabi's course builder is more polished and purpose-built. GoHighLevel's course module is functional and included free on every plan, with the advantage of tying course events directly into CRM workflows, but it isn't as refined as Kajabi's dedicated course experience."
    },
    {
      q: "Is Kajabi better than GoHighLevel for coaching?",
      a: "It depends on the coaching model. For a single packaged coaching program sold and delivered with minimal ongoing sales process, Kajabi is simpler. For a coaching business built on an active sales funnel discovery calls, follow-up, multiple touchpoints GoHighLevel's CRM is the more important capability."
    },
    {
      q: "Can GoHighLevel replace Kajabi?",
      a: "For course delivery specifically, yes, on a functional level but a business relying heavily on Kajabi's more advanced community and course polish will notice the difference. It replaces Kajabi more completely for businesses where the CRM and automation gap matters more than course-builder refinement."
    },
    {
      q: "Which is cheaper, Kajabi or GoHighLevel?",
      a: "For a single creator, compare the plan tier you'd actually need on each rather than the entry price the answer varies by contact volume and features required. For anyone running more than one client business, GoHighLevel is substantially cheaper, since Kajabi charges per business while GoHighLevel charges per agency with unlimited sub-accounts."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'at-a-glance', title: 'Kajabi vs GoHighLevel at a Glance' },
    { id: 'what-each-platform-is-built-for', title: 'What Each Platform Is Actually Built For' },
    { id: 'courses-and-course-delivery', title: 'Courses and Course Delivery' },
    { id: 'memberships-and-communities', title: 'Memberships and Communities' },
    { id: 'crm-and-lead-management', title: 'CRM and Lead Management' },
    { id: 'marketing-automation', title: 'Marketing Automation and Follow-Up' },
    { id: 'funnels-landing-pages', title: 'Funnels, Landing Pages and Conversion' },
    { id: 'coaching-and-high-ticket', title: 'Coaching and High-Ticket Offers' },
    { id: 'agency-and-multi-client', title: 'Agency and Multi-Client Businesses' },
    { id: 'ease-of-use', title: 'Ease of Use and Setup' },
    { id: 'pricing', title: 'Pricing and Total Cost of Ownership' },
    { id: 'where-kajabi-is-better', title: 'Where Kajabi Is Better' },
    { id: 'where-gohighlevel-is-better', title: 'Where GoHighLevel Is Better' },
    { id: 'decision-matrix', title: 'Decision Matrix' },
    { id: 'which-platform-should-you-choose', title: 'Which Platform Should You Choose?' },
    { id: 'should-you-switch', title: 'Should You Switch From Kajabi to GoHighLevel?' },
    { id: 'final-verdict', title: 'Final Verdict' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const atAGlanceData = [
    { category: 'Built primarily for', kajabi: 'Course/membership delivery', ghl: 'CRM, lead management, automation' },
    { category: 'Starting price', kajabi: '$179/mo ($143/mo annual)', ghl: '$97/mo' },
    { category: 'Top plan', kajabi: '$499/mo ($399/mo annual)', ghl: '$497/mo (Agency Pro, SaaS Mode)' },
    { category: 'Contact/CRM depth', kajabi: 'Tag-based contact list, no pipelines', ghl: 'Full CRM with visual sales pipelines' },
    { category: 'Native SMS/calls', kajabi: 'No', ghl: 'Yes' },
    { category: 'Course & community polish', kajabi: 'Strong, purpose-built', ghl: 'Functional, less refined' },
    { category: 'Multi-client / agency use', kajabi: 'Not designed for it', ghl: 'Core use case (sub-accounts, white label)' },
  ];

  const decisionMatrixData = [
    { category: 'Course creation', betterChoice: 'Kajabi', why: 'More mature course builder, more polished student experience' },
    { category: 'Student experience', betterChoice: 'Kajabi', why: 'Purpose-built for learners; more refined than a CRM add-on module' },
    { category: 'Memberships', betterChoice: 'Tie', why: 'Both support tiered, gated membership access adequately' },
    { category: 'Community', betterChoice: 'Kajabi', why: 'Live streaming, native group coaching calls; more developed feature' },
    { category: 'CRM', betterChoice: 'GoHighLevel', why: 'Kajabi has no visual pipeline or deal-stage tracking at all' },
    { category: 'Sales pipelines', betterChoice: 'GoHighLevel', why: 'Not a Kajabi feature in the CRM sense (its "Pipelines" are funnels)' },
    { category: 'Email automation', betterChoice: 'Tie', why: 'Both support behavior-triggered sequences and segmentation' },
    { category: 'SMS / multi-channel follow-up', betterChoice: 'GoHighLevel', why: 'Kajabi has no native SMS or call tracking' },
    { category: 'Funnels', betterChoice: 'Tie', why: 'Comparable page-building capability; GHL\'s ties directly into CRM data' },
    { category: 'Appointment-based businesses', betterChoice: 'GoHighLevel', why: 'Native calendar for any use case, not just coaching products' },
    { category: 'Coaching businesses', betterChoice: 'Depends', why: 'Packaged program → Kajabi; active sales process → GoHighLevel' },
    { category: 'Digital products', betterChoice: 'Kajabi', why: 'Broader native product types with more polish' },
    { category: 'Agency operations', betterChoice: 'GoHighLevel', why: 'Sub-accounts and multi-client management; not a Kajabi use case' },
    { category: 'White labeling', betterChoice: 'GoHighLevel', why: 'Full platform resale via SaaS Mode vs. Kajabi\'s app/domain branding only' },
    { category: 'Ease of setup', betterChoice: 'Kajabi', why: 'Narrower scope means faster time to a published course' },
    { category: 'Pricing/value', betterChoice: 'Depends', why: 'Per-business (Kajabi) vs. per-agency (GoHighLevel) pricing winner depends on business count' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your platform decision.</p>
      <Link
      //   onClick={handleOpenBooking}
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
          <span className="text-[#1A2236] font-medium">Kajabi vs GoHighLevel (2026): Honest Comparison</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Kajabi vs GoHighLevel</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Course Platform</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            Kajabi vs GoHighLevel:<br />
            <span className="text-[#F8D000]">Which Platform Is Better for Your Business?</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated September 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Kajabi and GoHighLevel get compared constantly, but they weren't built to solve the same problem. Kajabi is built to deliver and sell a knowledge product a course, a membership, a coaching program. GoHighLevel is built to acquire, convert, and follow up with customers, with courses as one feature inside a much larger CRM and automation system.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            The question that actually matters isn't which platform has more features. It's: <strong className="text-white">what is the center of gravity of your business?</strong> If the product itself is the course or membership, Kajabi is usually the stronger choice. If the business runs on leads, appointments, and follow-up and the course is one piece of a bigger sales system GoHighLevel usually wins. This article compares both directly, including where Kajabi genuinely beats GoHighLevel, so you can place your own business correctly before you commit to either.
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
              href="#decision-matrix"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See Decision Matrix
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
                5+ years GHL experience · 200+ systems built globally. All feature comparisons verified against official documentation as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Deciding?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses choose the right platform and set it up correctly.</p>
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
              Kajabi vs GoHighLevel at a Glance
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Kajabi</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                  </tr>
                </thead>
                <tbody>
                  {atAGlanceData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.kajabi}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: What Each Platform Is Built For */}
            <h2 id="what-each-platform-is-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Each Platform Is Actually Built For
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi's product center is content: courses, coaching programs, memberships, communities, and digital downloads, wrapped in a website builder, email marketing, and a funnel tool it calls Pipelines (more on the naming collision below). Everything is oriented around turning expertise into a sellable, deliverable product with a clean student experience.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's product center is the customer relationship: a full CRM with visual sales pipelines, multi-channel communication (SMS, email, calls, WhatsApp, Facebook/Instagram), calendar and appointment booking for any use case, and a workflow automation engine that ties all of it together. Courses, memberships, and communities exist inside GoHighLevel too they're included on every plan starting at $97/month but they're a module inside a CRM-first platform, not the platform's reason for existing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Neither platform lacks the other's core feature entirely. The difference is depth and architecture, not presence or absence.
            </p>

            {/* Section: Courses and Course Delivery */}
            <h2 id="courses-and-course-delivery" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Courses and Course Delivery
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is Kajabi's strongest category, and independent comparisons consistently agree: Kajabi's course builder is more mature, with a more polished student experience, more granular drip scheduling, quizzes and assessments, and completion certificates that have been refined for years specifically for this use case.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's course module (under Memberships) covers the same fundamentals video hosting, categories and lessons, quizzes, drip content, and certificates and it's included at no extra cost on every plan. What sets it apart architecturally rather than cosmetically: course events are native workflow triggers, so "course completed" can automatically tag a contact, move them to a different pipeline stage, or trigger a follow-up sequence the course and the CRM are the same system. But reviewers who've used both are consistent that the raw course-building experience itself feels more refined on Kajabi.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#25C97D]">Winner: Kajabi</span>, for course-building polish specifically. GoHighLevel wins if what happens <em>after</em> course completion matters as much as the course itself.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/kajabi-vs-gohighlevel-comparison.png"
                  alt="Kajabi vs GoHighLevel comparison: Course delivery, CRM, automation, pricing, and agency use"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Kajabi vs GoHighLevel: Course delivery, CRM, automation, and agency use compared</span>
              </div>
            </div>

            {/* Section: Memberships and Communities */}
            <h2 id="memberships-and-communities" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Memberships and Communities
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi Communities is a genuine differentiator: live streaming, native group coaching calls, and challenge-based programs built directly into the community experience, positioned as a real alternative to running a separate Facebook Group or Skool community.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's Communities feature (launched 2023) covers the basics a post feed, groups, and a Learning tab that can host free or paid courses inside the community itself but it's a newer, less developed feature than Kajabi's, and it isn't positioned as a core part of GoHighLevel's roadmap the way it is for Kajabi.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#25C97D]">Winner: Kajabi</span>, clearly, for community-first businesses. If community engagement is your retention strategy rather than a nice-to-have, this matters more than most other categories in this comparison.
            </p>

            {/* Section: CRM and Lead Management */}
            <h2 id="crm-and-lead-management" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              CRM and Lead Management
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is where the comparison stops being close. Kajabi's "CRM" is a contact list: every person who buys, enrolls, or opts in becomes a taggable, segmentable contact, and you can see engagement and purchase history. There's no visual pipeline showing where a lead sits in a sales process, no native SMS or call tracking, and no built-in calendar for anything except a coaching product specifically booking a webinar or a sales call requires a third-party tool like Calendly layered on top.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel is a CRM in the fuller sense: visual pipelines with customizable stages, native two-way SMS and calling, a calendar system that handles any kind of appointment, and a unified conversation inbox across channels. A lead can move from "New" to "Booked Call" to "Client" with the whole history calls, texts, emails, form submissions visible on one contact record.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#0E9BF0]">Winner: GoHighLevel</span>, decisively, for any business where tracking a sales process (not just an email list) matters.
            </p>

            {/* Section: Marketing Automation */}
            <h2 id="marketing-automation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Marketing Automation and Follow-Up
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi's automation is genuinely useful for what it's built for: behavior-triggered email sequences (someone buys, attends a webinar, completes a lesson), tag-based segmentation, and standard broadcast and sequence tools. It's an email-first automation system.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's workflow engine spans SMS, email, voice, WhatsApp, and social channels from one trigger-and-action builder, with conditional branching and delays that can route a contact differently based on behavior across any of those channels not just email opens and clicks.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#0E9BF0]">Winner: GoHighLevel</span>, for anything beyond email-only follow-up. If your nurture sequence never needs to leave email, this gap won't matter to you.
            </p>

            {/* Section: Funnels, Landing Pages and Conversion */}
            <h2 id="funnels-landing-pages" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Funnels, Landing Pages and Conversion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Confusingly, Kajabi calls its funnel builder "Pipelines" a name that has nothing to do with a CRM sales pipeline. It's a connected system of landing pages, checkout, and email that guides a visitor from opt-in to purchase, with 14 pre-built templates covering common launch and sales scenarios.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's funnel and website builder covers the same territory pages, forms, checkout with the advantage that every funnel step feeds directly into the CRM pipeline and workflow engine rather than a separate "Pipelines" product with its own logic.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#F8D000]">Roughly tied</span> on raw page-building capability; GoHighLevel's advantage is that funnel activity and CRM activity are the same data, not two systems that need to agree with each other.
            </p>

            {/* Section: Coaching and High-Ticket Offers */}
            <h2 id="coaching-and-high-ticket" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Coaching and High-Ticket Offers
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a coach selling one structured program a fixed-price course or group coaching offer that people buy, access, and complete Kajabi's native scheduling, community, and delivery tools make for a more polished, faster setup with less to configure.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For a coaching business built on an active sales process discovery calls, application funnels, lead nurture before someone ever books, multi-touch follow-up after a missed call <Link href="/blog/gohighlevel-for-coaches" className="text-[#0E9BF0] hover:underline">GoHighLevel's CRM and multi-channel communication</Link> become the more important capability, and it's not something Kajabi is designed to replicate.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#F8D000]">Depends on the model.</span> Selling a packaged program → Kajabi. Running an ongoing sales and follow-up process around coaching → GoHighLevel.
            </p>

            {/* Section: Agency and Multi-Client Businesses */}
            <h2 id="agency-and-multi-client" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Agency and Multi-Client Businesses
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi is not designed for managing multiple client businesses inside one account, and doesn't attempt to be. There's no sub-account architecture, no way to isolate client workspaces, and no reseller model.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is a core GoHighLevel use case: sub-accounts isolate each client, and <Link href="/blog/gohighlevel-saas-mode-setup" className="text-[#0E9BF0] hover:underline">Agency Pro's SaaS Mode</Link> lets an agency fully white-label the platform and resell it under its own brand, with automated sub-account provisioning.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#0E9BF0]">Winner: GoHighLevel</span>, and it isn't close. If you manage more than one business or client account, Kajabi isn't a realistic option regardless of how the rest of this comparison reads.
            </p>

            {/* Section: Ease of Use */}
            <h2 id="ease-of-use" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Ease of Use and Setup
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              More capability generally means more setup, and that holds here. Kajabi's narrower scope means a creator can go from signup to a published course noticeably faster, with fewer decisions to make along the way.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's broader <Link href="/services/crm-setup" className="text-[#0E9BF0] hover:underline">CRM and automation surface</Link> takes longer to configure properly pipelines, workflows, and calendars all need setup decisions a course-only platform doesn't ask for in exchange for meaningfully more control over the customer journey once it's built.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#25C97D]">Winner: Kajabi</span>, for time-to-launch on a single course. GoHighLevel asks for more setup time and gives back more operational control.
            </p>

            {/* Section: Pricing */}
            <h2 id="pricing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Pricing and Total Cost of Ownership
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi's current plans: Basic at $179/month ($143 annual) with 5 products and 2,500 contacts, Growth at $249/month ($199 annual) with 50 products and 25,000 contacts, and Pro at $499/month ($399 annual) with unlimited products and 100,000 contacts. Kajabi Payments carries no platform transaction fee, though a surcharge applies when using a third-party processor.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel's plans, per <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GHL Scale Up's pricing breakdown</Link>: Starter at $97/month, Unlimited at $297/month with unlimited sub-accounts, and Agency Pro at $497/month adding SaaS Mode. Usage-based fees apply for SMS, email, and phone numbers on top of the base plan.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              At face value, GoHighLevel's entry price looks cheaper but the plans aren't solving the same problem, so a direct dollar comparison at the entry tier is close to meaningless. The real difference shows up at scale: <strong className="text-[#1A2236]">Kajabi is priced per business, GoHighLevel is priced per agency.</strong> A single creator selling one course under one brand pays Kajabi's price regardless of GoHighLevel's sub-account model it doesn't apply. But an operator running two or more client businesses hits a crossover point fast: past roughly two Kajabi accounts, a single GoHighLevel Unlimited subscription becomes the cheaper option, and the gap widens sharply from there.
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <span className="text-[#F8D000]">No universal winner.</span> One creator, one course: compare the actual plan tier you'd need on each, not the cheapest headline number. Multiple client accounts: GoHighLevel wins on cost by a wide and growing margin.
            </p>

            {/* Section: Where Kajabi Is Better */}
            <h2 id="where-kajabi-is-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where Kajabi Is Better
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Course-building polish and student experience</li>
              <li>Community features (live streaming, native group coaching calls)</li>
              <li>Time to launch a single course or membership</li>
              <li>A more turnkey, self-contained affiliate program for course creators</li>
            </ul>

            {/* Section: Where GoHighLevel Is Better */}
            <h2 id="where-gohighlevel-is-better" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where GoHighLevel Is Better
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>CRM and visual sales pipeline tracking</li>
              <li>Multi-channel automation (SMS, calls, WhatsApp not just email)</li>
              <li>Appointment and calendar infrastructure for any use case, not just coaching</li>
              <li>Agency and multi-client operations, including white-label resale</li>
              <li>Cost at scale across more than one business</li>
            </ul>

            {/* Section: Decision Matrix */}
            <h2 id="decision-matrix" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Decision Matrix
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Category</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Better Choice</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionMatrixData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.category}</td>
                      <td className={`py-3 px-3 font-semibold ${
                        item.betterChoice === 'Kajabi' ? 'text-[#25C97D]' :
                        item.betterChoice === 'GoHighLevel' ? 'text-[#0E9BF0]' :
                        'text-[#F8D000]'
                      }`}>{item.betterChoice}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Which Platform Should You Choose */}
            <h2 id="which-platform-should-you-choose" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Which Platform Should You Choose?
            </h2>

            <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Choose Kajabi if:
              </h3>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Your product is the course, membership, or digital learning experience</li>
                <li>Community engagement is central to how you retain members</li>
                <li>You don't need a visual pipeline or multi-channel sales follow-up</li>
                <li>You're one creator running one brand and want to launch fast</li>
              </ul>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#0E9BF0] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Choose GoHighLevel if:
              </h3>
              <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                <li>Lead generation, sales calls, or appointments drive your revenue</li>
                <li>You need to track where every lead sits in an actual sales process</li>
                <li>Follow-up needs to happen over SMS or calls, not just email</li>
                <li>You run an agency or manage more than one client account</li>
                <li>Courses are one part of a larger customer-acquisition system, not the whole business</li>
              </ul>
            </div>

            <div className="bg-[#FEF9E7] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-4">
              <h3 className="text-base font-bold text-[#F8D000] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Use both if:
              </h3>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                your business genuinely needs Kajabi's course depth and GoHighLevel's CRM and follow-up infrastructure some course-first businesses with a serious sales process do run both, syncing data between them. Be honest about the cost: two subscriptions, added integration work, and a second system to keep in sync. This only makes sense once the revenue justifies it; it's not a starting-point recommendation.
              </p>
            </div>

            {/* Section: Should You Switch */}
            <h2 id="should-you-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Should You Switch From Kajabi to GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Switching makes the most sense when your business has outgrown Kajabi's actual limits you need a sales pipeline, multi-channel follow-up, or agency-level account management that Kajabi structurally doesn't offer. Staying on Kajabi makes more sense when your business is genuinely just the course, and the CRM gap has never actually cost you a sale.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Switching platforms is an operational project, not a plan change content, automations, and community all need to move, and some of that has to be rebuilt rather than imported. If you're seriously considering it, <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">GHL Scale Up's Kajabi to GoHighLevel migration guide</Link> covers exactly what transfers and what breaks before you commit to the switch.
            </p>

            {/* Section: Final Verdict */}
            <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Verdict
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Kajabi is generally the stronger choice when the product itself is the course, membership, or learning experience it's more polished at the thing it was built to do, and a single creator will launch faster on it. GoHighLevel becomes the stronger choice once the business needs the infrastructure around that product: a real CRM, sales pipelines, multi-channel follow-up, appointment infrastructure, and for agencies specifically the ability to run more than one client business under one platform.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The exception that swallows the rule for a lot of businesses: if you're a coach or course creator whose growth depends on an active sales process rather than passive content sales, GoHighLevel's infrastructure advantage often outweighs Kajabi's course-delivery polish, even though the course itself may feel slightly less refined. Match the platform to where your business actually makes money, not to which one has the nicer course builder.
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
              Still unsure which platform is right for you?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free platform assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-for-coaches" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel for Coaches and Consultants →</Link>
                <Link href="/blog/gohighlevel-saas-mode-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel SaaS Mode Setup →</Link>
                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing 2026 →</Link>
                <Link href="/blog/kajabi-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">Kajabi to GoHighLevel Migration →</Link>
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience comparing platforms and migrating businesses from Kajabi to GoHighLevel. All feature comparisons verified against official documentation as of September 2026.
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