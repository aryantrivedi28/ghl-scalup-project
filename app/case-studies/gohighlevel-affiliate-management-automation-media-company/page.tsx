// app/case-studies/gohighlevel-affiliate-management-automation-media-company/page.tsx
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
  TrendingUp,
  Target,
  Sparkles,
  GitBranch,
  Link2,
  PieChart
} from 'lucide-react';

export default function AffiliateManagementCaseStudyPage() {
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
      <AutomationSystemSection />
      <DripCampaignsSection />
      <AffiliateSystemSection />
      <ReportingDashboardsSection />
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
          <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Media Company</span>
          <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Affiliate Management</span>
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Automation</span>
        </div>

        <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
          GoHighLevel Affiliate Management System Case Study:{' '}
          <span className="text-[#F8D000]">How GHL Scale Up Automated Affiliate Tracking and Lead Nurturing for a Media Company</span>
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
          A media and performance-driven business was running multiple affiliate campaigns manually — creating bottlenecks in lead nurturing, affiliate tracking, and reporting. GHL Scale Up built a custom GoHighLevel affiliate management system with automated lead nurturing and real-time reporting dashboards.
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
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Affiliate campaign management</td>
                <td className="py-2 px-2 text-white/60 text-xs">Multiple campaigns run manually</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Complete GoHighLevel automation system for lead generation, follow-ups, and conversions</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Lead nurturing</td>
                <td className="py-2 px-2 text-white/60 text-xs">Inconsistent follow-ups</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Structured email and SMS drip campaigns</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Affiliate management</td>
                <td className="py-2 px-2 text-white/60 text-xs">No centralized system</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Custom affiliate management system fully integrated within GoHighLevel</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Performance tracking & reporting</td>
                <td className="py-2 px-2 text-white/60 text-xs">Manual, effort-intensive</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Automated reporting dashboards for real-time visibility</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Operational effort</td>
                <td className="py-2 px-2 text-white/60 text-xs">High manual dependency</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Reduced through automation of routine tasks and reporting</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Lead engagement & conversions</td>
                <td className="py-2 px-2 text-white/60 text-xs">Inconsistent across campaigns</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Improved lead engagement and increased conversion rates</td>
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
    { icon: User, label: 'Client', value: 'Crump Media LLC', sub: 'Media & Performance Marketing' },
    { icon: Building2, label: 'Industry', value: 'Media & Performance', sub: 'Affiliate-Driven Business' },
    { icon: Settings2, label: 'Engagement', value: 'Affiliate System', sub: 'Automation & Reporting Build' },
    { icon: Link2, label: 'Focus', value: 'Affiliate Management', sub: 'Lead Nurturing & Tracking' },
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
              <span className="font-semibold">A media and performance-driven business was running multiple affiliate campaigns simultaneously, but managing them manually created operational bottlenecks.</span> 
              Inconsistent lead follow-ups, unclear affiliate performance tracking, and reporting that required significant manual effort were limiting growth. 
              <span className="font-semibold text-[#0E9BF0]"> GHL Scale Up designed and implemented a custom GoHighLevel affiliate management system with structured email and SMS drip campaigns, automated reporting dashboards, and centralized affiliate tracking — improving lead engagement and increasing conversion rates.</span>
            </p>
          </div>
        </div>
        
        <p className="text-[#5C6880] mt-6 text-center max-w-3xl mx-auto text-sm md:text-base">
          This case study covers the full build — complete GoHighLevel automation system, email and SMS drip campaigns, custom affiliate management system, and automated reporting dashboards.
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
              See how we transformed this media company's affiliate operations with 
              automated tracking, lead nurturing, and real-time reporting dashboards.
            </p>
          </div>
          
          <div className="relative w-full aspect-video bg-[#0B1628] rounded-xl overflow-hidden shadow-lg border border-[#DDE1E9]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YgSBBP37b0M?autoplay=0&rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3"
              title="GHL Scale Up Client Testimonial - Affiliate Management Case Study"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          <p className="text-xs md:text-sm text-[#5C6880] text-center mt-3">
            Real client testimonial - See how we transformed their affiliate operations
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
              Is Your Affiliate Campaign Management Still Manual?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              GHL Scale Up builds custom GoHighLevel affiliate management systems with automated lead nurturing, real-time reporting dashboards, and centralized affiliate tracking — enabling consistent lead engagement and increased conversions.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Get Your Free Consultation
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
              Manual Affiliate Campaign Management Couldn't Scale
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">About the Client</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The client is <strong className="text-[#1A2236]">Crump Media LLC</strong>, a media and performance-driven business. Performance and affiliate-driven media businesses run on a different operational model than a typical service business: revenue depends on coordinating leads, campaigns, and a network of affiliates simultaneously, which means the systems behind lead capture, nurturing, and affiliate performance tracking need to work together as one connected engine rather than as separate tools.
            </p>

            <h4 className="font-semibold text-[#1A2236] text-base mb-3">The Initial Challenge: Manual Affiliate Campaign Management Couldn't Scale</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Crump Media LLC was running multiple affiliate campaigns simultaneously, but managing them manually created operational bottlenecks. This showed up in three specific ways:
            </p>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Inconsistent lead follow-ups</h5>
                    <p className="text-sm text-[#5C6880]">since nurturing wasn't running on structured, automated sequences.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Unclear affiliate performance tracking</h5>
                    <p className="text-sm text-[#5C6880]">making it difficult to see which affiliates and campaigns were actually driving results.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Reporting that required significant manual effort</h5>
                    <p className="text-sm text-[#5C6880]">pulling time away from campaign execution and strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mt-4">
              Without a structured automation system, it became difficult to scale campaigns, monitor performance accurately, and maintain consistent communication with both leads and affiliates at the same time.
            </p>
          </div>

          {/* Why Affiliate-Driven Media Businesses Outgrow Manual Systems */}
          <div className="mt-6 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">Why Affiliate-Driven Media Businesses Outgrow Manual Systems</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This challenge is common among media and performance marketing businesses running multiple affiliate campaigns at once:
            </p>
            <ul className="space-y-2 text-sm text-[#5C6880]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Affiliate tracking and lead nurturing are two different systems that need to work together.</strong> Affiliate performance data (clicks, conversions, commissions) and lead nurturing workflows (follow-up emails, SMS sequences) are often managed separately, which makes it hard to connect affiliate activity to actual lead outcomes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Manual reporting doesn't scale with campaign volume.</strong> As the number of active affiliate campaigns grows, manually compiling performance data becomes a full-time task on its own rather than a byproduct of the system.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Inconsistent nurturing undermines affiliate results.</strong> An affiliate can drive a strong lead, but if that lead isn't followed up with consistently afterward, the value of the referral is lost — meaning nurturing automation directly affects affiliate program performance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">No centralized visibility makes optimization guesswork.</strong> Without real-time dashboards, it's difficult to identify which campaigns or affiliates are underperforming until well after the fact.</span>
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
              🔗 Ready to Automate Your Affiliate Campaign Management?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              We build custom GoHighLevel affiliate management systems with automated lead nurturing, real-time reporting dashboards, and centralized affiliate tracking — enabling consistent lead engagement and increased conversions.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Book Your Free Consultation
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
              The GHL Scale Up Solution: A Centralized Affiliate and Automation System Inside GoHighLevel
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              GHL Scale Up designed and implemented a <strong className="text-[#1A2236]">custom GoHighLevel setup tailored to Crump Media LLC's affiliate-driven workflows</strong>, centralizing lead capture, communication, and performance tracking within a single platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AUTOMATION SYSTEM SECTION ====================
function AutomationSystemSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Automation System
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              1. Complete GoHighLevel Automation System
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              A full automation system was built to support lead generation, follow-ups, and conversions, replacing the manual processes that had been creating bottlenecks across campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== DRIP CAMPAIGNS SECTION ====================
function DripCampaignsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Drip Campaigns
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              2. Structured Email and SMS Drip Campaigns
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Structured email and SMS drip campaigns were designed to improve lead nurturing and engagement, ensuring that leads generated through affiliate campaigns received consistent, automated follow-up rather than inconsistent manual outreach.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Email Drip Campaigns</span>
                </div>
                <p className="text-sm text-[#5C6880]">Structured email sequences for consistent lead engagement</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">SMS Drip Campaigns</span>
                </div>
                <p className="text-sm text-[#5C6880]">SMS sequences for automated follow-up and nurturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AFFILIATE SYSTEM SECTION ====================
function AffiliateSystemSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Affiliate System
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              3. Custom Affiliate Management System
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              A <strong className="text-[#1A2236]">custom affiliate management system</strong> was developed and fully integrated within GoHighLevel, giving Crump Media LLC a way to manage affiliate onboarding and campaign participation from inside the same platform used for lead and client communication — rather than running affiliate tracking as a disconnected process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== REPORTING DASHBOARDS SECTION ====================
function ReportingDashboardsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Reporting Dashboards
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              4. Automated Reporting Dashboards
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Automated reporting dashboards were created for tracking affiliate and campaign performance, providing real-time visibility into how each campaign and affiliate was performing without requiring manual data compilation.
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
    { title: 'Discovery', description: 'Reviewed Crump Media LLC\'s existing affiliate campaigns and manual lead-follow-up processes' },
    { title: 'Automation Build', description: 'Built the core GoHighLevel automation system for lead generation, follow-up, and conversion tracking' },
    { title: 'Nurture Sequence Design', description: 'Designed structured email and SMS drip campaigns for consistent lead engagement' },
    { title: 'Affiliate System Build', description: 'Developed a custom affiliate management system integrated directly within GoHighLevel' },
    { title: 'Reporting Setup', description: 'Built automated dashboards for real-time affiliate and campaign performance tracking' },
    { title: 'Rollout', description: 'Reduced manual operational effort and improved lead engagement and conversion across affiliate-driven campaigns' },
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
    'Built a complete GoHighLevel automation system for lead generation, follow-ups, and conversions',
    'Designed structured email and SMS drip campaigns to improve lead nurturing and engagement',
    'Developed a custom affiliate management system fully integrated within GoHighLevel',
    'Created automated reporting dashboards for tracking affiliate and campaign performance',
    'Reduced manual operational effort by automating routine tasks and reporting',
    'Improved lead engagement and increased conversion rates across affiliate-driven campaigns'
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
              📊 Want to Automate Your Affiliate Campaign Management?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              From automated lead nurturing and real-time reporting dashboards to centralized affiliate tracking — we build GoHighLevel systems that connect affiliate activity to actual lead outcomes and improve conversion rates.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Start Your Affiliate Automation Project
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
    "Affiliate tracking and lead nurturing perform better as one connected system. Running affiliate performance tracking and lead follow-up on the same platform means every affiliate-driven lead gets consistent nurturing instead of falling through the gap between two disconnected tools.",
    "Automated reporting turns performance data into something usable in real time. Manual reporting tells you what happened after the fact; automated dashboards make it possible to adjust campaigns and affiliate strategy while they're still running.",
    "Drip campaigns protect the value of affiliate-driven leads. A lead referred by an affiliate is only as valuable as the follow-up it receives — structured, automated nurturing sequences are what convert affiliate traffic into actual results.",
    "A custom-built affiliate system fits real business workflows better than a generic one. Building the affiliate management system around Crump Media LLC's specific campaign structure, rather than a one-size-fits-all setup, is what allowed it to integrate cleanly with existing lead and communication workflows."
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
              Key Takeaways: What This GoHighLevel Affiliate Management Case Study Shows
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
      question: "How do you set up an affiliate management system inside GoHighLevel?",
      answer: "An affiliate management system inside GoHighLevel is typically built around campaign-based tracking, where each affiliate program or offer is set up with its own commission structure, tracking links, and automated onboarding workflow, then connected to the same lead and communication tools used for the rest of the business."
    },
    {
      question: "Can GoHighLevel track affiliate commissions and conversions?",
      answer: "Yes. GoHighLevel's Affiliate Manager supports tracking clicks, conversions, and commissions per campaign, with options for flat, percentage, recurring, or tiered commission structures depending on how the program is configured."
    },
    {
      question: "Can affiliates have their own login to track their performance in GoHighLevel?",
      answer: "Yes. GoHighLevel supports a self-service affiliate portal where partners can log in to view their own earnings, tracking links, and performance stats without needing access to the main account."
    },
    {
      question: "How does GoHighLevel automate lead nurturing for affiliate-driven leads?",
      answer: "Leads generated through affiliate campaigns can be routed into structured email and SMS drip sequences automatically, ensuring consistent follow-up regardless of which affiliate or campaign the lead originated from."
    },
    {
      question: "Why is manual affiliate campaign management difficult to scale?",
      answer: "As the number of active affiliate campaigns grows, manually tracking performance, following up with leads, and compiling reports becomes increasingly time-consuming, which is why centralizing these processes inside an automated system becomes necessary once a business is running multiple campaigns at once."
    },
    {
      question: "What is the difference between running affiliate tracking manually versus inside GoHighLevel?",
      answer: "Manual affiliate tracking typically relies on spreadsheets or separate tools disconnected from lead communication, making it hard to see how affiliate activity connects to actual conversions. Building affiliate tracking inside GoHighLevel keeps affiliate data, lead nurturing, and reporting in one connected system."
    },
    {
      question: "Can GoHighLevel generate real-time reporting dashboards for affiliate and campaign performance?",
      answer: "Yes. Custom dashboards can be built inside GoHighLevel to show live affiliate and campaign performance data, removing the need to manually compile reports from multiple sources."
    },
    {
      question: "How do structured email and SMS drip campaigns improve conversion rates for affiliate-driven leads?",
      answer: "Drip campaigns keep leads engaged with consistent, timed follow-up messaging after the initial referral, which increases the likelihood that an affiliate-driven lead converts instead of going cold from a lack of follow-up."
    },
    {
      question: "Is a custom-built affiliate system better than a generic affiliate plugin or third-party tool?",
      answer: "A custom affiliate management system built inside GoHighLevel can be tailored to a business's specific campaign structure and integrated directly with existing lead and communication workflows, which reduces the data gaps that come from running affiliate tracking on a separate, disconnected platform."
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
            Ready to Automate Your Affiliate Campaign Management?
          </h2>
          
          <p className="text-base md:text-xl text-white/60 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            If your business is running affiliate or partner-driven campaigns manually, GHL Scale Up can build a centralized GoHighLevel system that connects affiliate tracking, lead nurturing, and real-time reporting — the same approach used in this case study.
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
              Get Your Free Consultation
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