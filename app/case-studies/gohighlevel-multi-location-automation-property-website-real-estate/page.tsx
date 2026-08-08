// app/case-studies/gohighlevel-multi-location-automation-property-website-real-estate/page.tsx
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
  MapPin,
  Home,
  TrendingUp,
  Target,
  Sparkles,
  GitBranch
} from 'lucide-react';

export default function MultiLocationRealEstateCaseStudyPage() {
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
      <SubAccountArchitectureSection />
      <PropertyWebsitesSection />
      <AutomatedWorkflowsSection />
      <ReportingSystemSection />
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
          <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Real Estate</span>
          <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Multi-Location</span>
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Property Websites</span>
        </div>

        <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
          GoHighLevel Multi-Location Real Estate Case Study:{' '}
          <span className="text-[#F8D000]">How GHL Scale Up Built a Scalable Sub-Account System With Property Websites</span>
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
          A growing real estate brand operating across multiple locations needed a structured, location-aware system — not a patchwork of spreadsheets and inboxes per office. GHL Scale Up built a multi-subaccount GoHighLevel architecture with location-based property websites and automated buyer/seller workflows.
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
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Location management</td>
                <td className="py-2 px-2 text-white/60 text-xs">Manual, handled separately per location</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Multi-subaccount GoHighLevel architecture, one sub-account per location</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Property websites</td>
                <td className="py-2 px-2 text-white/60 text-xs">No centralized, region-specific web presence</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Dynamic, location-based property websites integrated with GoHighLevel</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Lead capture & follow-up</td>
                <td className="py-2 px-2 text-white/60 text-xs">Manual, delayed</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Automated workflows for both buyers and sellers</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Lead tracking</td>
                <td className="py-2 px-2 text-white/60 text-xs">Fragmented across locations</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Internal lead management and reporting system</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Response time</td>
                <td className="py-2 px-2 text-white/60 text-xs">Delayed</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Faster response across all locations</td>
              </tr>
              <tr>
                <td className="py-2 px-2 text-white/80 text-xs font-medium">Client experience</td>
                <td className="py-2 px-2 text-white/60 text-xs">Inconsistent across regions</td>
                <td className="py-2 px-2 text-[#25C97D] text-xs">Consistent, improved across all touchpoints</td>
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
    { icon: User, label: 'Client', value: 'BLLR', sub: 'Growing Real Estate Brand' },
    { icon: Building2, label: 'Industry', value: 'Real Estate', sub: 'Multi-Location Operations' },
    { icon: Settings2, label: 'Engagement', value: 'Sub-Account System', sub: 'Property Website Build' },
    { icon: GitBranch, label: 'Structure', value: 'Multi-Subaccount', sub: 'Location-Based Architecture' },
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
              <span className="font-semibold">A growing real estate brand was managing property listings and client inquiries manually across different locations.</span> 
              Delayed responses, fragmented lead tracking, and operational complexity were limiting growth as the brand expanded into new regions. 
              <span className="font-semibold text-[#0E9BF0]"> GHL Scale Up implemented a multi-subaccount GoHighLevel architecture with location-based property websites and automated buyer/seller workflows — enabling faster response times, consistent client experience, and simplified multi-location management.</span>
            </p>
          </div>
        </div>
        
        <p className="text-[#5C6880] mt-6 text-center max-w-3xl mx-auto text-sm md:text-base">
          This case study covers the full build — multi-subaccount architecture, location-based property websites, automated buyer and seller workflows, and internal reporting systems.
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
              See how we transformed this multi-location real estate brand's operations with 
              sub-account architecture and location-based property websites.
            </p>
          </div>
          
          <div className="relative w-full aspect-video bg-[#0B1628] rounded-xl overflow-hidden shadow-lg border border-[#DDE1E9]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YgSBBP37b0M?autoplay=0&rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3"
              title="GHL Scale Up Client Testimonial - Multi-Location Real Estate Case Study"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          <p className="text-xs md:text-sm text-[#5C6880] text-center mt-3">
            Real client testimonial - See how we transformed their multi-location real estate operations
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
              Is Your Real Estate Brand Managing Multiple Locations Without a Centralized System?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              GHL Scale Up builds multi-subaccount GoHighLevel architectures with location-based property websites and automated buyer/seller workflows — enabling faster response times and consistent client experience across every region.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Get Your Free Real Estate Consultation
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
              Manual, Fragmented Multi-Location Operations
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">About the Client</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The client is <strong className="text-[#1A2236]">BLLR</strong>, a growing real estate brand operating across multiple locations. Multi-location real estate businesses face a structural challenge that single-location businesses don't: every region generates its own listings, its own leads, and its own buyer and seller conversations, but the brand still needs one coherent system behind all of it — not a patchwork of spreadsheets and inboxes per office.
            </p>

            <h4 className="font-semibold text-[#1A2236] text-base mb-3">The Initial Challenge: Manual, Fragmented Multi-Location Operations</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Before working with GHL Scale Up, BLLR was managing property listings and client inquiries manually across different locations. This created three compounding problems as the brand grew into new regions:
            </p>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Delayed responses</h5>
                    <p className="text-sm text-[#5C6880]">since inquiries in each location were being handled manually rather than routed and followed up automatically.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Fragmented lead tracking</h5>
                    <p className="text-sm text-[#5C6880]">with no centralized way to see how leads were moving across every location at once.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Settings2 className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#1A2236] text-sm">Operational complexity</h5>
                    <p className="text-sm text-[#5C6880]">as handling multiple regions without a centralized system made it difficult to maintain consistency, track performance, or scale operations efficiently.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mt-4">
              Without a structured, location-aware system, growth into new regions added operational strain instead of scaling smoothly — a common pattern for real estate brands expanding into multiple markets on a single, undifferentiated setup.
            </p>
          </div>

          {/* Why Multi-Location Real Estate Businesses Struggle */}
          <div className="mt-6 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <h4 className="font-semibold text-[#1A2236] text-base mb-3">Why Multi-Location Real Estate Businesses Struggle With a Single GoHighLevel Account</h4>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is a structural problem, not just a workload problem:
            </p>
            <ul className="space-y-2 text-sm text-[#5C6880]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">One account, multiple markets.</strong> A single GoHighLevel account without sub-accounts forces all locations to share pipelines, workflows, and contact data, making it hard to isolate performance or tailor follow-up by region.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">No region-specific web presence.</strong> A single generic website can't effectively showcase location-specific property listings, which hurts both lead relevance and local SEO.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">Buyer and seller workflows aren't the same.</strong> Real estate inquiries split into fundamentally different journeys — buyers need property matching and viewing follow-up, sellers need listing and valuation follow-up — and a single generic workflow can't serve both well.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                <span><strong className="text-[#1A2236]">No cross-location visibility.</strong> Without centralized reporting, leadership can't see which locations are converting well and which need support, making it difficult to make informed, timely decisions.</span>
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
              🏢 Need a Scalable Multi-Location Real Estate System?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              We build multi-subaccount GoHighLevel architectures with location-based property websites and automated buyer/seller workflows — enabling consistent client experience across every region.
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
              The GHL Scale Up Solution: Multi-Subaccount Architecture + Location-Based Property Websites
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              GHL Scale Up implemented a <strong className="text-[#1A2236]">multi-location GoHighLevel architecture designed specifically for real estate operations</strong>, rather than adapting a single generic account across every region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SUB-ACCOUNT ARCHITECTURE SECTION ====================
function SubAccountArchitectureSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Sub-Account Architecture
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              1. Multi-Subaccount GoHighLevel Architecture
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Separate GoHighLevel sub-accounts were created for each location to maintain clarity and control. This structure let each location run its own pipelines, workflows, and contact records independently, while still rolling up under one centralized brand.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <GitBranch className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Independent Pipelines</h4>
                <p className="text-xs text-[#5C6880]">Each location runs its own pipelines and workflows</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Contact Records</h4>
                <p className="text-xs text-[#5C6880]">Separate contact records per location</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-5 h-5 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Centralized Brand</h4>
                <p className="text-xs text-[#5C6880]">All locations roll up under one brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PROPERTY WEBSITES SECTION ====================
function PropertyWebsitesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Property Websites
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              2. Dynamic, Location-Based Property Websites
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Dynamic property websites were developed to showcase region-specific listings, integrated directly with GoHighLevel. This gave each location a web presence built around its own inventory rather than a single generic site trying to represent every market at once.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== AUTOMATED WORKFLOWS SECTION ====================
function AutomatedWorkflowsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Automated Workflows
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              3. Automated Buyer and Seller Lead Workflows
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Automated lead capture and follow-up workflows were put in place for both buyers and sellers, reflecting the fact that these are two distinct client journeys that need separate automation logic rather than a single shared sequence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Buyer Workflows</span>
                </div>
                <p className="text-sm text-[#5C6880]">Property matching, viewing follow-up, and nurturing sequences</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Seller Workflows</span>
                </div>
                <p className="text-sm text-[#5C6880]">Listing inquiries, valuation follow-up, and listing nurturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== REPORTING SYSTEM SECTION ====================
function ReportingSystemSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Reporting System
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              4. Internal Lead Management and Reporting System
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Internal tracking and reporting systems were implemented to improve visibility and decision-making — giving BLLR a way to see lead activity and performance across every location from one place.
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
    { title: 'Discovery', description: 'Assessed BLLR\'s per-location processes for property listings, client inquiries, and follow-up' },
    { title: 'Sub-Account Architecture', description: 'Built separate GoHighLevel sub-accounts for each real estate location' },
    { title: 'Website Development', description: 'Developed dynamic, location-based property websites integrated with GoHighLevel' },
    { title: 'Workflow Automation', description: 'Built automated lead capture and follow-up workflows separately for buyers and sellers' },
    { title: 'Reporting Setup', description: 'Implemented internal lead management and reporting for cross-location visibility' },
    { title: 'Rollout', description: 'Enabled faster response times and a more consistent client experience across regions' },
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
    'Built a multi-subaccount GoHighLevel setup to manage each real estate location independently',
    'Created location-based property websites integrated directly with GoHighLevel',
    'Automated lead capture and follow-up workflows for buyers and sellers',
    'Implemented an internal lead management and reporting system for better tracking',
    'Enabled faster response times and improved client experience',
    'Simplified multi-location property and inquiry management'
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
              🏠 Want to Scale Your Multi-Location Real Estate Brand?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              From multi-subaccount architecture and location-based property websites to automated buyer/seller workflows — we build GoHighLevel systems that enable consistent client experience across every region.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Start Your Real Estate Transformation
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
    "Sub-accounts, not shared accounts, are the right architecture for multi-location businesses. Separating each location into its own GoHighLevel sub-account keeps pipelines and data clean while still supporting a centralized brand structure.",
    "Location-specific property websites outperform one generic site. Dynamic, region-based websites integrated with GoHighLevel let each location showcase relevant listings without competing for space with every other market.",
    "Buyer and seller journeys need separate automation. Real estate lead workflows aren't one-size-fits-all — treating buyer and seller follow-up as distinct sequences improves relevance and response.",
    "Centralized reporting is what makes multi-location scaling manageable. Without cross-location visibility, leadership can't identify which regions need attention — internal reporting closes that gap."
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
              Key Takeaways: What This GoHighLevel Multi-Location Case Study Shows
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
      question: "How does GoHighLevel handle multiple business locations?",
      answer: "GoHighLevel supports multi-location businesses through sub-accounts, where each location gets its own independent CRM, pipelines, and workflows while still rolling up under a centralized agency or brand account for oversight and reporting."
    },
    {
      question: "Should each real estate office have its own GoHighLevel sub-account?",
      answer: "Yes, in most cases. A separate sub-account per location keeps leads, pipelines, and workflows specific to that market, which avoids mixing contact data and makes it easier to track performance location by location."
    },
    {
      question: "How do you build a property website for real estate inside GoHighLevel?",
      answer: "A property website inside GoHighLevel is built using GoHighLevel's website and funnel builder, connected to location-specific listing data and lead capture forms so that inquiries flow directly into the correct sub-account's pipeline."
    },
    {
      question: "Can GoHighLevel automate follow-up for both real estate buyers and sellers?",
      answer: "Yes. GoHighLevel workflows can be built separately for buyer leads (property matching, viewing follow-up) and seller leads (listing inquiries, valuation follow-up), since these require different messaging and different next steps."
    },
    {
      question: "How do multi-location businesses track leads across all locations in one place?",
      answer: "By building internal reporting and lead management on top of each location's GoHighLevel sub-account data, giving leadership a consolidated view of lead volume, response times, and conversion across every location without logging into each sub-account separately."
    },
    {
      question: "What is the difference between a GoHighLevel sub-account and a single shared account for multiple locations?",
      answer: "A single shared account mixes all locations' contacts, pipelines, and workflows together, making it hard to isolate performance or customize follow-up by region. Separate sub-accounts keep each location's data and automation independent while still allowing centralized oversight."
    },
    {
      question: "Why is a generic real estate website not enough for a multi-location brand?",
      answer: "A single generic website can't effectively showcase location-specific property listings or rank well for local searches in each market. Dynamic, location-based websites let each region highlight its own inventory and improve local search relevance."
    },
    {
      question: "How long does it take to set up a multi-location GoHighLevel system for real estate?",
      answer: "Timelines depend on how many locations are involved and how much existing data needs to be structured, but the process generally starts with mapping each location's process, followed by building sub-accounts, workflows, and location-specific websites."
    },
    {
      question: "Can GoHighLevel scale with a real estate brand as it expands into new regions?",
      answer: "Yes, when the account is built on a sub-account architecture from the start. New locations can be added as new sub-accounts using a repeatable setup, rather than requiring a rebuild of the existing system each time the brand expands."
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
            Ready to Scale Your Multi-Location Real Estate Brand?
          </h2>
          
          <p className="text-base md:text-xl text-white/60 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            If your real estate brand is managing multiple locations without a centralized system, GHL Scale Up can build a multi-subaccount GoHighLevel architecture with location-based property websites and automated buyer and seller workflows — the same approach used in this case study.
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
              Get Your Free Real Estate Consultation
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