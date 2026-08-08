// app/case-studies/gohighlevel-website-setup-automation-fix/page.tsx
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
  Users
} from 'lucide-react';

export default function WebsiteSetupAutomationFixCaseStudyPage() {
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
      <WebsiteBuildSection />
      <SurveyFixSection />
      <WorkflowRebuildSection />
      <CampaignOptimizationSection />
      <CustomWorkflowsSection />
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
          <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Service Business</span>
          <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Website Setup</span>
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Automation Fix</span>
        </div>

        <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
          GoHighLevel Website Setup & Automation Fix Case Study:{' '}
          <span className="text-[#F8D000]">How GHL Scale Up Rebuilt a Broken System for a Service-Based Business</span>
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
          A service-based business had adopted GoHighLevel but was suffering from broken surveys, unreliable email automation, and inconsistent campaign delivery — with no dedicated GoHighLevel website to support lead capture.
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
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Website</td>
                <td className="py-2 px-2 text-white/60 text-xs">No dedicated GoHighLevel website</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Custom responsive website built inside GoHighLevel, integrated for lead capture</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Surveys</td>
                <td className="py-2 px-2 text-white/60 text-xs">Not functioning correctly</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Diagnosed and fixed</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Email automation</td>
                <td className="py-2 px-2 text-white/60 text-xs">Broken workflows, inconsistent delivery</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Rebuilt and stabilized</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Client sign-up & follow-up</td>
                <td className="py-2 px-2 text-white/60 text-xs">Manual, inconsistent</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Automated with custom GoHighLevel workflows</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Email campaigns</td>
                <td className="py-2 px-2 text-white/60 text-xs">Inconsistent deliverability</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Restructured for reliability and engagement</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Client communication</td>
                <td className="py-2 px-2 text-white/60 text-xs">Unpredictable</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Consistent and reliable</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-white/40 mt-3 italic">
            *This summary reflects the scope of work completed by GHL Scale Up. Specific quantitative metrics beyond what is listed above were not published in the original engagement and are not estimated here.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
            <Rocket className="w-4 h-4" />
            Get Your Free Audit
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
    { icon: User, label: 'Client', value: 'Confidential', sub: 'Service-Based Business' },
    { icon: Building2, label: 'Industry', value: 'Service-Based', sub: 'Professional Services' },
    { icon: Settings2, label: 'Engagement', value: 'Website + Automation', sub: 'Full System Rebuild' },
    { icon: Clock, label: 'Focus', value: 'Stabilization', sub: 'Broken System Repair' },
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
              <span className="font-semibold">A service-based business had adopted GoHighLevel but was suffering from broken surveys, unreliable email automation, and inconsistent campaign delivery.</span> 
              There was no dedicated GoHighLevel-integrated website supporting lead capture, leaving a critical gap in their client acquisition process. 
              <span className="font-semibold text-[#0E9BF0]"> GHL Scale Up diagnosed the broken systems, built a custom GoHighLevel website, and rebuilt the automation from the ground up — establishing a reliable end-to-end communication system.</span>
            </p>
          </div>
        </div>
        
        <p className="text-[#5C6880] mt-6 text-center max-w-3xl mx-auto text-sm md:text-base">
          This case study covers the full rebuild — custom GoHighLevel website development, survey diagnostics, email workflow rebuild, campaign optimization, and custom sign-up workflows.
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
              See how we transformed this service-based business's GoHighLevel system from broken automations 
              to a fully functioning website and automation platform.
            </p>
          </div>
          
          <div className="relative w-full aspect-video bg-[#0B1628] rounded-xl overflow-hidden shadow-lg border border-[#DDE1E9]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YgSBBP37b0M?autoplay=0&rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3"
              title="GHL Scale Up Client Testimonial - Website & Automation Case Study"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          <p className="text-xs md:text-sm text-[#5C6880] text-center mt-3">
            Real client testimonial - See how we transformed their GoHighLevel system
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
              Got a Broken GoHighLevel System?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              GHL Scale Up audits, fixes, and rebuilds GoHighLevel accounts for service-based businesses. From broken surveys and email workflows to custom websites and automation stabilization.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Get Your Free System Audit
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
              A GoHighLevel System That Wasn't Working as Intended
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">About the Client</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The client is a service-based business that had already adopted GoHighLevel as its core CRM and marketing automation platform but was not getting reliable performance from it. Like many service businesses running GoHighLevel, the client depended on the platform for lead capture, client onboarding, and ongoing communication — which meant that broken automation wasn't a minor inconvenience, it was a direct risk to client experience and retention.
            </p>

            <h4 className="font-semibold text-[#1A2236] text-base mb-3">The Initial Challenge: A GoHighLevel System That Wasn't Working as Intended</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before engaging GHL Scale Up, the client's GoHighLevel setup had three compounding problems:
            </p>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">GoHighLevel surveys were not functioning correctly</h5>
                    <p className="text-sm text-[#5C6880]">which meant lead and client data collected through forms and surveys couldn't be trusted.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">GoHighLevel email automation workflows were broken</h5>
                    <p className="text-sm text-[#5C6880]">so triggered sequences — onboarding emails, follow-ups, nurture sequences — either failed to fire or fired incorrectly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Campaign delivery was inconsistent</h5>
                    <p className="text-sm text-[#5C6880]">meaning email campaigns sent through GoHighLevel were not reliably reaching client inboxes.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mt-4">
              There was no dedicated, GoHighLevel-integrated website supporting lead capture either, which left a gap between how the client generated interest and how that interest fed into the CRM.
            </p>
          </div>

          {/* Why Automation Breaks Down */}
          <div className="mt-6 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">Why GoHighLevel Automation Breaks Down in the First Place</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This kind of breakdown is common in GoHighLevel accounts that have grown organically without a structured build. A few recurring causes:
            </p>
            <ul className="space-y-2 text-sm text-[#5C6880]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Survey and form logic errors.</strong> GoHighLevel surveys rely on correctly mapped custom fields and conditional logic. A single misconfigured field mapping can cause a survey to submit without triggering the intended workflow.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Workflow trigger conflicts.</strong> When multiple workflows are built over time without a clear map of triggers and exit conditions, contacts can end up in the wrong workflow, get stuck, or trigger duplicate automations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Email deliverability configuration gaps.</strong> Inconsistent campaign delivery in GoHighLevel is frequently tied to sending domain authentication (SPF, DKIM, DMARC), sender reputation, or workflow-level throttling issues rather than the platform itself.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">No dedicated GoHighLevel website.</strong> Businesses using external website builders alongside GoHighLevel often lose data continuity between the site and the CRM, since forms and tracking aren't natively integrated.</span>
              </li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mt-4">
              Understanding these root causes is what shaped the approach GHL Scale Up took with this client — treating the website and the automation as one connected system rather than fixing symptoms in isolation.
            </p>
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
              🔧 Need a Full GoHighLevel System Audit?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              We'll audit your GoHighLevel account, identify every broken system — surveys, workflows, email deliverability — and provide a clear roadmap to fix your automation and website.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Book Your Free Audit
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
              The GHL Scale Up Solution: Website Build + Automation Stabilization
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              GHL Scale Up's approach combined a <strong className="text-[#1A2236]">new GoHighLevel website build</strong> with a <strong className="text-[#1A2236]">full audit and repair of the client's existing automation</strong>, rather than treating them as two separate projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== WEBSITE BUILD SECTION ====================
function WebsiteBuildSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Website Build
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              1. Custom GoHighLevel Website Development
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              GHL Scale Up designed and launched a <strong className="text-[#1A2236]">custom, responsive website built and hosted directly inside GoHighLevel</strong>. Building the website natively inside GoHighLevel — rather than on a separate platform connected by third-party integrations — ensured that every form submission, survey response, and lead capture point fed directly into the GoHighLevel CRM without sync delays or broken webhooks.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Native Integration</span>
                </div>
                <p className="text-sm text-[#5C6880]">Every form submission feeds directly into GoHighLevel CRM</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">No Sync Delays</span>
                </div>
                <p className="text-sm text-[#5C6880]">Eliminates reliance on third-party integrations or webhooks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SURVEY FIX SECTION ====================
function SurveyFixSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Survey Fix
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              2. GoHighLevel Survey and Form Diagnostics
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              The existing survey issues were traced and resolved so that data collected from prospective and existing clients flowed correctly into GoHighLevel contact records and triggered the right downstream automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== WORKFLOW REBUILD SECTION ====================
function WorkflowRebuildSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Workflow Rebuild
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              3. GoHighLevel Email Workflow Automation Rebuild
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Broken email automation workflows were rebuilt to restore reliable triggering. This included re-mapping workflow logic for client sign-ups and follow-up sequences so that every new contact moved through onboarding and nurture steps predictably instead of falling through gaps in the automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CAMPAIGN OPTIMIZATION SECTION ====================
function CampaignOptimizationSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Campaign Optimization
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              4. Email Campaign Structure Optimization
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              GHL Scale Up optimized the structure of the client's email campaigns to improve deliverability and engagement — addressing the inconsistent campaign delivery that had been affecting client communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CUSTOM WORKFLOWS SECTION ====================
function CustomWorkflowsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Custom Workflows
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              5. Custom Workflows for Sign-Up and Follow-Up
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              New, purpose-built GoHighLevel workflows were created specifically for client sign-ups and post-sign-up follow-up, replacing the ad hoc processes that had been causing inconsistency.
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
    { title: 'Audit', description: 'Reviewed the existing GoHighLevel account to identify why surveys, email automation, and campaign delivery were failing' },
    { title: 'Website Build', description: 'Designed and launched a custom responsive website inside GoHighLevel' },
    { title: 'Automation Repair', description: 'Diagnosed and fixed broken survey and email workflow logic' },
    { title: 'Workflow Build', description: 'Created new automation workflows for client sign-up and follow-up' },
    { title: 'Campaign Optimization', description: 'Restructured email campaigns to improve deliverability and engagement' },
    { title: 'Stabilization', description: 'Established a reliable end-to-end communication system across the website, CRM, and automations' },
  ];

  return (
    <section className="py-16 md:py-20">
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
    'Launched a custom responsive website integrated natively with GoHighLevel for seamless lead capture',
    'Resolved survey and email automation issues that had been undermining system reliability',
    'Built custom GoHighLevel automation workflows for client sign-ups and follow-ups',
    'Optimized email campaign structure to improve engagement and deliverability',
    'Established a consistent, dependable communication system for the client',
    'Improved the overall client experience through smoother onboarding and follow-up'
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
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
              📊 Want Results Like This for Your Service-Based Business?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              From broken surveys and email workflows to custom websites and automation stabilization — we build GoHighLevel systems that actually work and deliver reliable results.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Start Your Project
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
    "A broken GoHighLevel automation setup is rarely a single-cause problem. Surveys, workflows, and email deliverability are interconnected, and fixing one without auditing the others often leaves gaps.",
    "A GoHighLevel website built natively inside the platform reduces the risk of data loss between lead capture and CRM records compared to bolting on an external site.",
    "Workflow logic needs to be mapped, not patched. Sustainable fixes come from rebuilding trigger logic cleanly, not from adding workarounds on top of broken automations.",
    "Deliverability issues are a configuration problem, not a platform limitation. GoHighLevel campaigns can run reliably once sending setup and workflow throttling are correctly configured."
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Key Takeaways
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Key Takeaways: What This GoHighLevel Case Study Shows
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
      question: "Why are my GoHighLevel surveys not submitting or triggering workflows correctly?",
      answer: "This is usually caused by incorrect custom field mapping, conditional logic errors within the survey builder, or a workflow trigger that isn't correctly linked to the survey's submission event. A full audit of the survey's field mapping and its connected workflow is the fastest way to isolate the cause."
    },
    {
      question: "Why is my GoHighLevel email automation not sending or sending inconsistently?",
      answer: "Common causes include conflicting workflow triggers, contacts entering a workflow at the wrong step, workflow 'if/else' branches with missing exit paths, or account-level sending limits. Reviewing the workflow's trigger and action history in GoHighLevel usually reveals where contacts are getting stuck."
    },
    {
      question: "Why are my GoHighLevel email campaigns not reaching inboxes consistently?",
      answer: "Inconsistent campaign delivery is typically tied to sending domain authentication (SPF, DKIM, DMARC not fully configured), a damaged sender reputation, or campaign sending speed that triggers spam filtering. Deliverability issues need to be diagnosed at the domain and account level, not just the campaign level."
    },
    {
      question: "Should I build my website directly inside GoHighLevel or connect an external website?",
      answer: "Building the website natively inside GoHighLevel keeps lead capture, forms, and tracking connected to the CRM without relying on third-party integrations or webhooks that can fail silently. For service-based businesses that depend on GoHighLevel for client communication, this reduces the risk of losing leads or data between systems."
    },
    {
      question: "How long does it take to fix a broken GoHighLevel automation system?",
      answer: "Timelines vary depending on how many workflows, surveys, and integrations are involved, but the process generally starts with a full account audit, followed by targeted fixes to the highest-impact broken workflows before a full rebuild of sign-up and follow-up sequences."
    },
    {
      question: "What is included in a GoHighLevel automation audit?",
      answer: "A GoHighLevel automation audit typically reviews workflow trigger and exit logic, custom field and tag mapping, survey and form configuration, email sending domain authentication, and campaign delivery settings to identify where the system is breaking down."
    },
    {
      question: "Can GoHighLevel handle both website hosting and CRM automation for a service business?",
      answer: "Yes. GoHighLevel supports building and hosting a full website alongside CRM, workflow automation, and campaign tools, which allows a service-based business to run lead capture, client onboarding, and follow-up communication from a single connected system."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]" id="faq">
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
            Need a GoHighLevel System That Actually Works for Your Service-Based Business?
          </h2>
          
          <p className="text-base md:text-xl text-white/60 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            If your GoHighLevel account has broken surveys, unreliable email automation, or inconsistent campaign delivery, GHL Scale Up can audit the account, rebuild the workflows, and connect a properly integrated GoHighLevel website — the same approach used in this case study.
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
              Get Your Free Audit
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