// app/case-studies/gohighlevel-ai-automation-customer-management-marketing-agency/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Quote, 
  User, 
  Building2, 
  Settings2, 
  Clock, 
  Mail, 
  Phone, 
  Calendar, 
  Database, 
  BarChart3, 
  CheckCircle, 
  ChevronDown,
  Rocket,
  BookOpen,
  Star,
  Award,
  ThumbsUp,
  Youtube,
  Globe,
  FileText,
  Zap,
  Shield,
  Layers,
  MessageSquare,
  DollarSign,
  Users,
  Bot,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';

export default function AIAutomationCaseStudyPage() {
  return (
    <article className="min-h-screen bg-white">
      <HeroSection />
      <ClientSummary />
      <ShortVersion />

      {/* Video Section */}
      {/* <VideoSection /> */}
      
      {/* CTA 1 - After Short Version */}
      <CTAOne />
      
      <ChallengeSection />
      
      {/* CTA 2 - After Challenge */}
      <CTATwo />
      
      <SolutionSection />
      <AgencySystemBuildSection />
      <CustomerManagementSection />
      <AIWorkflowSection />
      <AutomatedCampaignsSection />
      <ImplementationProcessSection />
      <ResultsSection />
      
      {/* CTA 3 - After Results */}
      <CTAThree />
      
      <KeyTakeawaysSection />
      <FAQSection />
      
      {/* CTA 4 - Final CTA */}
      <CTASection />
    </article>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  return (
    <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
      <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[760px] mx-auto relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Case Study</span>
          <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Marketing Agency</span>
          <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI Automation</span>
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">70% Less Manual Work</span>
        </div>

        <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
          GoHighLevel AI Automation Case Study:{' '}
          <span className="text-[#F8D000]">How GHL Scale Up Cut Manual Workload by 70% for a Marketing Agency</span>
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
            <div className="text-xs text-white/50">GoHighLevel Expert Agency · Updated August 2026</div>
          </div>
        </div>

        <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
          A performance marketing agency was relying on disconnected tools and manual workflows to manage leads, clients, and communication — until GHL Scale Up built a complete GoHighLevel agency system with AI-powered workflows, cutting manual operational workload by 70%.
        </p>

        {/* Quick Results Summary Table */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 mb-6 overflow-x-auto">
          <h3 className="text-xs font-bold text-[#F8D000] uppercase tracking-wider mb-3">Quick Results Summary</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-2 text-white/60 font-medium text-xs">Area</th>
                <th className="text-left py-2 px-2 text-white/60 font-medium text-xs">Before</th>
                <th className="text-left py-2 px-2 text-white/60 font-medium text-xs">After GHL Scale Up</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Operational workload</td>
                <td className="py-2 px-2 text-white/60 text-xs">High manual load across leads, clients, and follow-ups</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Reduced by <strong className="font-bold">70%</strong> through end-to-end automation</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Lead response</td>
                <td className="py-2 px-2 text-white/60 text-xs">Delayed, manual</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Instant, AI-powered lead response</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Client tracking</td>
                <td className="py-2 px-2 text-white/60 text-xs">Disconnected tools</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Centralized customer management system inside GoHighLevel</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">GHL account structure</td>
                <td className="py-2 px-2 text-white/60 text-xs">Not built out for agency scale</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Full agency system: brand setup, pipelines, workflows, triggers, automations</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Nurturing & retention</td>
                <td className="py-2 px-2 text-white/60 text-xs">Inconsistent follow-ups</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Automated email and SMS campaigns</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Onboarding</td>
                <td className="py-2 px-2 text-white/60 text-xs">Slow, inconsistent</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Faster, more consistent across all touchpoints</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
            <Rocket className="w-4 h-4" />
            Get Your Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#faq" className="inline-flex items-center gap-2 bg-white/10 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/10">
            <BookOpen className="w-4 h-4" />
            Skip to FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==================== CLIENT SUMMARY ====================
function ClientSummary() {
  const stats = [
    { icon: User, label: 'Client', value: 'Capviax', sub: 'Performance Marketing Agency' },
    { icon: Building2, label: 'Industry', value: 'Marketing Agency', sub: 'Performance-Focused' },
    { icon: Settings2, label: 'Engagement', value: 'Full Agency System', sub: 'AI Automation Build' },
    { icon: TrendingUp, label: 'Result', value: '70% Less Work', sub: 'Manual Operational Workload' },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8F9FB] border-b border-[#DDE1E9]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#DDE1E9] hover:border-[#0E9BF0]/20 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F8F9FB] rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#0E9BF0] transition-colors duration-300">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#0E9BF0] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-xs md:text-sm font-medium text-[#5C6880] uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-base md:text-lg font-semibold text-[#1A2236]">{stat.value}</p>
                <p className="text-xs md:text-sm text-[#5C6880]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SHORT VERSION ====================
function ShortVersion() {
  return (
    <section className="py-12 md:py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#F8F9FB] border-l-4 border-[#0E9BF0] p-4 md:p-8 rounded-r-xl shadow-sm">
          <div className="absolute -top-3 -left-3 bg-[#0E9BF0] text-white rounded-full p-1.5 md:p-2">
            <Quote className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="pl-2 md:pl-4">
            <p className="text-sm md:text-lg text-[#1A2236] leading-relaxed">
              <span className="font-semibold">A performance marketing agency was relying on disconnected tools and manual workflows to manage leads, clients, and communication.</span> 
              Delayed lead responses, inconsistent follow-ups, and a heavy operational workload were limiting growth. 
              <span className="font-semibold text-[#0E9BF0]"> GHL Scale Up designed and implemented a complete GoHighLevel agency system with AI-powered workflows, centralizing customer management and automating lead response, scheduling, and follow-ups — reducing manual operational workload by 70%.</span>
            </p>
          </div>
        </div>
        
        <p className="text-[#5C6880] mt-6 text-center max-w-3xl mx-auto text-sm md:text-base">
          This case study covers the full agency system build — brand setup, pipelines, workflows, AI-powered automation, centralized customer management, and automated email/SMS campaigns.
        </p>
      </div>
    </section>
  );
}

// ==================== VIDEO SECTION ====================
function VideoSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB] border-t border-[#DDE1E9] border-b border-[#DDE1E9]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 bg-white text-[#0E9BF0] text-xs font-semibold px-3 py-1 rounded-full border border-[#DDE1E9]">
              <Youtube className="w-3.5 h-3.5" />
              Client Testimonial
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2236] mt-3">
              Watch Our Client's Experience
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] mt-2 max-w-2xl mx-auto">
              See how we transformed this marketing agency's GoHighLevel system with AI-powered automation, 
              cutting manual workload by 70%.
            </p>
          </div>
          
          <div className="relative w-full aspect-video bg-[#0B1628] rounded-xl overflow-hidden shadow-lg border border-[#DDE1E9]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YgSBBP37b0M?autoplay=0&rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3"
              title="GHL Scale Up Client Testimonial - AI Automation Case Study"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          <p className="text-xs md:text-sm text-[#5C6880] text-center mt-3">
            Real client testimonial - See how we transformed their agency operations
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== CTA 1 ====================
function CTAOne() {
  return (
    <section className="py-8 md:py-12 bg-[#0B1628]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Is Your Agency Still Relying on Manual Processes?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              GHL Scale Up builds complete GoHighLevel agency systems with AI-powered automation — cutting manual workload, accelerating lead response, and centralizing client management.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Get Your Free Agency Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CHALLENGE SECTION ====================
function ChallengeSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              The Challenge
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Manual Processes Couldn't Keep Pace With Agency Growth
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">About the Client</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The client is <strong className="text-[#1A2236]">Capviax</strong>, a performance-focused marketing agency. As a marketing agency, Capviax's own growth depended on how well it could manage leads and client relationships at volume — which meant the GoHighLevel system it ran on needed to function less like a basic CRM and more like the operational backbone of the business.
            </p>

            <h4 className="font-semibold text-[#1A2236] text-base mb-3">The Initial Challenge: Manual Processes Couldn't Keep Pace With Agency Growth</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before working with GHL Scale Up, Capviax was relying on disconnected tools and manual workflows to manage leads, clients, and communication. This created three compounding problems as the agency scaled:
            </p>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Delayed lead responses</h5>
                    <p className="text-sm text-[#5C6880]">since incoming leads were being handled manually rather than routed and responded to automatically.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Inconsistent follow-ups</h5>
                    <p className="text-sm text-[#5C6880]">because there was no centralized system tracking where each lead or client stood in the pipeline.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">A heavy operational workload</h5>
                    <p className="text-sm text-[#5C6880]">with team members spending time on repetitive tasks — data entry, scheduling, follow-up messages — that could have been automated.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mt-4">
              As Capviax scaled, these inefficiencies made it harder to maintain speed, consistency, and control across client interactions — a common ceiling for marketing agencies that outgrow manual, tool-fragmented operations.
            </p>
          </div>

          {/* Why This Happens */}
          <div className="mt-6 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">Why This Happens to Growing Marketing Agencies on GoHighLevel</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This pattern is common among agencies that adopt GoHighLevel but never build it out to match their actual operating scale:
            </p>
            <ul className="space-y-2 text-sm text-[#5C6880]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">No centralized customer management system.</strong> Without a structured system inside GoHighLevel for tracking leads and clients, teams fall back on spreadsheets, inboxes, or disconnected point tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">No AI-powered response layer.</strong> Manual lead response is the biggest bottleneck for agencies — every minute of delay measurably lowers lead conversion, and a human team can't match instant automated response at scale.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Fragmented pipelines and workflows.</strong> Without properly mapped pipelines, triggers, and automations built for agency-specific processes (client onboarding, service delivery, retention), GoHighLevel ends up used as a basic inbox rather than an operating system for the business.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Manual nurturing.</strong> Sending follow-up emails and SMS one-by-one instead of through automated sequences caps how many leads and clients an agency can meaningfully stay in touch with.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CTA 2 ====================
function CTATwo() {
  return (
    <section className="py-8 md:py-12 bg-[#0B1628]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              🤖 Ready to Automate Your Agency Operations?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              We build complete GoHighLevel agency systems with AI-powered workflows — cutting manual workload, accelerating lead response, and centralizing client management.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Book Your Free Agency Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SOLUTION SECTION ====================
function SolutionSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Our Solution
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              The GHL Scale Up Solution: A Complete GoHighLevel Agency System With AI Automation
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              GHL Scale Up designed and implemented a <strong className="text-[#1A2236]">complete GoHighLevel setup tailored specifically to Capviax's agency workflows</strong>, built from the ground up rather than patched onto the existing account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AGENCY SYSTEM BUILD SECTION ====================
function AgencySystemBuildSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Agency System Build
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              1. Full GoHighLevel Agency System Build
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              The system was built from the ground up, covering brand setup, pipelines, workflows, and automations — giving Capviax a GoHighLevel account structured around how a marketing agency actually operates, not a generic CRM template.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Brand Setup</h4>
                <p className="text-xs text-[#5C6880]">Full agency branding configuration</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <Layers className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Pipelines</h4>
                <p className="text-xs text-[#5C6880]">Custom pipelines for agency workflows</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <Settings2 className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Automations</h4>
                <p className="text-xs text-[#5C6880]">Workflows and triggers for automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CUSTOMER MANAGEMENT SECTION ====================
function CustomerManagementSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Customer Management
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              2. Centralized Customer Management System
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              A custom system for managing customers was created inside GoHighLevel to streamline client tracking, onboarding, and communication, replacing the disconnected tools Capviax had been relying on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AI WORKFLOW SECTION ====================
function AIWorkflowSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              AI Workflow
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              3. AI-Powered Workflow Automation
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              AI-powered workflows were integrated to handle instant lead responses, scheduling, and follow-ups. This meant leads were engaged the moment they came in rather than waiting on a team member to be available, and scheduling and follow-up steps ran automatically once a lead or client reached the right stage in the pipeline.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Instant Lead Response</h4>
                <p className="text-xs text-[#5C6880]">AI-powered engagement the moment leads come in</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Automated Scheduling</h4>
                <p className="text-xs text-[#5C6880]">Scheduling runs automatically at the right stage</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Automated Follow-Ups</h4>
                <p className="text-xs text-[#5C6880]">Follow-up steps run without manual intervention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AUTOMATED CAMPAIGNS SECTION ====================
function AutomatedCampaignsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Campaign Automation
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              4. Automated Email and SMS Campaigns
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Automated email and SMS campaigns were set up to ensure consistent nurturing and client retention, replacing manual, inconsistent outreach with structured, triggered sequences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== IMPLEMENTATION PROCESS SECTION ====================
function ImplementationProcessSection() {
  const stages = [
    { title: 'Discovery', description: 'Mapped Capviax\'s existing lead, client, and communication processes to identify where manual work was creating bottlenecks' },
    { title: 'Agency System Build', description: 'Set up brand configuration, pipelines, workflows, and triggers inside GoHighLevel from the ground up' },
    { title: 'Customer Management Build', description: 'Built a centralized system inside GHL for tracking leads and clients through onboarding and ongoing service' },
    { title: 'AI Workflow Integration', description: 'Implemented AI-powered workflows for instant lead response, scheduling, and follow-up' },
    { title: 'Campaign Automation', description: 'Set up automated email and SMS sequences for nurturing and retention' },
    { title: 'Rollout', description: 'Enabled faster onboarding and consistent communication across every client touchpoint' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Implementation Process
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Implementation Process
            </h2>
            <div className="bg-white border-l-4 border-[#0E9BF0] p-3 md:p-4 rounded-r-lg max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-[#5C6880] italic">
                "What GHL Scale Up Did"
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                  <th className="text-left py-3 px-4 font-semibold text-[#1A2236]">Stage</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1A2236]">What GHL Scale Up Did</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((stage, index) => (
                  <tr key={index} className="border-b border-[#DDE1E9] hover:bg-[#F8F9FB]/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-[#1A2236]">{stage.title}</td>
                    <td className="py-3 px-4 text-[#5C6880]">{stage.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== RESULTS SECTION ====================
function ResultsSection() {
  const results = [
    'Built a complete GoHighLevel agency system including pipelines, workflows, triggers, and automations',
    'Developed a centralized customer management system inside GoHighLevel for seamless lead and client tracking',
    'Implemented AI-powered workflows for instant lead responses, scheduling, and follow-ups',
    'Automated email and SMS campaigns to improve lead nurturing and client retention',
    <span key="5"><strong className="text-[#1A2236]">Reduced manual operational workload by 70%</strong> through end-to-end automation</span>,
    'Enabled faster client onboarding and more consistent communication across all touchpoints'
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              The Results
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Results & Impact
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-[#DDE1E9] p-4 md:p-6">
            <ul className="space-y-3">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CTA 3 ====================
function CTAThree() {
  return (
    <section className="py-8 md:py-12 bg-[#0B1628]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              📊 Want to Cut Manual Workload by 70% for Your Agency?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              From AI-powered workflows and centralized customer management to automated campaigns — we build GoHighLevel agency systems that eliminate manual work and accelerate growth.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Start Your Agency Transformation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== KEY TAKEAWAYS ====================
function KeyTakeawaysSection() {
  const takeaways = [
    "Manual workload reduction comes from system design, not point fixes. Capviax's 70% reduction in manual work came from rebuilding the account structure — pipelines, workflows, and triggers — not from adding one automation on top of a fragmented setup.",
    "AI-powered lead response closes the speed gap manual teams can't. Instant automated response to new leads removes the delay that typically costs agencies conversions.",
    "A centralized customer management system is what makes automation reliable. AI workflows and automated campaigns only work consistently when there's a single structured system inside GoHighLevel tracking every lead and client — not disconnected tools.",
    "Agencies scale further on GoHighLevel when it's built for their actual workflow. A generic CRM setup breaks down under agency-scale lead volume; a system built around the agency's specific onboarding, service delivery, and retention process holds up."
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Key Takeaways
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Key Takeaways: What This GoHighLevel AI Automation Case Study Shows
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {takeaways.map((takeaway, index) => (
              <div key={index} className="group bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#0E9BF0] hover:border-[#0E9BF0]">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#F8F9FB] rounded-full flex items-center justify-center group-hover:bg-[#0E9BF0] transition-colors duration-300">
                    <span className="text-[#0E9BF0] group-hover:text-white font-bold text-xs md:text-sm">{index + 1}</span>
                  </div>
                  <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">{takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ SECTION ====================
function FAQSection() {
  const faqs = [
    {
      question: "How can a marketing agency reduce manual workload using GoHighLevel?",
      answer: "By centralizing lead and client management inside GoHighLevel and building out pipelines, workflows, and triggers around the agency's actual processes, then layering AI-powered automation on top for lead response, scheduling, and follow-ups. Capviax reduced manual operational workload by 70% using this approach."
    },
    {
      question: "What is an AI-powered workflow in GoHighLevel?",
      answer: "An AI-powered workflow in GoHighLevel uses automation and AI tools to handle tasks like responding to new leads instantly, booking appointments, and sending follow-up messages without a team member manually initiating each step."
    },
    {
      question: "How does AI lead response work in GoHighLevel?",
      answer: "When a new lead enters the system — through a form, survey, or ad — an AI-powered workflow can respond immediately, qualify the lead through conversation, and route it to the appropriate pipeline stage or team member, removing the delay of manual response."
    },
    {
      question: "What is a centralized customer management system inside GoHighLevel?",
      answer: "It's a structured setup inside GoHighLevel — built around custom pipelines, tags, and workflows — that tracks every lead and client from first contact through onboarding and ongoing service, replacing the need for separate spreadsheets or disconnected tools."
    },
    {
      question: "Can GoHighLevel automate both email and SMS follow-ups for client retention?",
      answer: "Yes. GoHighLevel supports automated, triggered email and SMS sequences that can be built around a lead's or client's stage in the pipeline, keeping nurturing and retention communication consistent without manual sending."
    },
    {
      question: "Is GoHighLevel suitable for marketing agencies managing high lead volume?",
      answer: "Yes, when the account is properly built out for agency-scale operations — with dedicated pipelines, automated lead routing, and AI-powered response workflows — GoHighLevel can handle significantly higher lead and client volume than a manually managed setup."
    },
    {
      question: "How long does it take to build a full GoHighLevel automation system for an agency?",
      answer: "Timelines depend on the complexity of the agency's existing processes and how many pipelines, workflows, and integrations are required, but a full agency system build typically starts with mapping current processes before building pipelines, automations, and AI workflows from the ground up."
    },
    {
      question: "What causes agencies to rely on manual processes instead of automation in GoHighLevel?",
      answer: "This usually happens when a GoHighLevel account is set up with default or minimal configuration rather than being built around the agency's specific lead management, onboarding, and retention workflows, leaving teams to fill the gaps manually."
    }
  ];

  return (
    <section className="py-16 md:py-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-[#DDE1E9] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-5 text-left cursor-pointer hover:bg-[#F8F9FB] transition-colors duration-200">
                    <span className="text-sm md:text-base font-semibold text-[#1A2236] pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 text-[#0E9BF0] group-open:rotate-180 transition-transform duration-300">
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-[#5C6880] leading-relaxed border-t border-[#DDE1E9] pt-3 md:pt-4">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FINAL CTA SECTION ====================
function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1628]"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 bg-[#0E9BF0]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-64 md:w-96 h-64 md:h-96 bg-[#0E9BF0]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0E9BF0]/10 rounded-full filter blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#0E9BF0]/20 text-white font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6 border border-[#0E9BF0]/30">
            Work With GHL Scale Up
          </span>
          
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Cut Manual Workload and Scale Your Agency?
          </h2>
          
          <p className="text-base md:text-xl text-white/60 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            If your agency is still relying on manual processes and disconnected tools to manage leads and clients, GHL Scale Up can build a complete GoHighLevel system — pipelines, automation, and AI-powered workflows — designed around how your agency actually operates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#F8D000] text-[#0B1421] font-bold rounded-xl hover:bg-[#FFE44D] transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Book a Call
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 text-base md:text-lg border-2 border-white/20 hover:border-white/40 transform hover:-translate-y-0.5"
            >
              Get Your Free Agency Audit
            </Link>
          </div>
          
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/50 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#0E9BF0]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#0E9BF0]" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#0E9BF0]" />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}