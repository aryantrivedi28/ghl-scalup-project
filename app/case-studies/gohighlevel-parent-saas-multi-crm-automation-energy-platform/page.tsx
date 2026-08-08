// app/case-studies/gohighlevel-parent-saas-multi-crm-automation-energy-platform/page.tsx
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
  Layers,
  GitBranch,
  Globe,
  MessageSquare,
  DollarSign,
  Shield
} from 'lucide-react';

export default function ParentSaaSCaseStudyPage() {
  return (
    <article className="min-h-screen bg-white">
      <HeroSection />
      <ClientSummary />
      <ShortVersion />

      {/* Video Section */}
      {/* <VideoSection /> */}
      
      {/* CTA 1 - After Short Version */}
      <CTAOne />
      
      <ProblemSection />
      
      {/* CTA 2 - After Problem */}
      <CTATwo />
      
      <SolutionSection />
      <SetupSection />
      <SnapshotsSection />
      <IntegrationsSection />
      <PipelineSection />
      <ResultsSection />
      
      {/* CTA 3 - After Results */}
      <CTAThree />
      
      <BeforeAfterSection />
      <WhyItMattersSection />
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
          <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Energy Platform</span>
          <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Parent SaaS</span>
          <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Multi-CRM</span>
        </div>

        <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
          How GHL Scale Up Built a GoHighLevel Parent SaaS System for{' '}
          <span className="text-[#F8D000]">Multi-Brand CRM Automation</span>
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
          Unified multiple business verticals under one GoHighLevel SaaS structure, with AI-driven automation cutting lead response time to under a minute.
        </p>

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
    { icon: User, label: 'Client', value: 'RiverEnergia', sub: 'Energy & Legal-Finance Platform' },
    { icon: Building2, label: 'Industry', value: 'Energy + Legal-Finance', sub: 'Multi-Vertical Business' },
    { icon: Settings2, label: 'Engagement', value: 'Parent SaaS Architecture', sub: 'GoHighLevel Build' },
    { icon: GitBranch, label: 'Structure', value: 'Parent SaaS', sub: 'Multi-Brand CRM Management' },
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
              <span className="font-semibold">RiverEnergia was operating multiple business verticals without a unified automation backbone.</span> 
              Lead handling, follow-ups, payments, and reporting were fragmented across systems, making it difficult to maintain consistency, speed, and operational visibility. 
              <span className="font-semibold text-[#0E9BF0]"> GHL Scale Up architected a parent SaaS structure inside GoHighLevel, letting them manage multiple CRM brands under a single, branded ecosystem — with AI-driven automation cutting lead response time to under a minute.</span>
            </p>
          </div>
        </div>
        
        <p className="text-[#5C6880] mt-6 text-center max-w-3xl mx-auto text-sm md:text-base">
          This case study covers the full build — parent SaaS account setup, reusable snapshots, Stripe/Twilio/Mailgun integrations, CRM pipeline design, and AI-driven automation results.
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
              See how we unified multiple business verticals under one GoHighLevel parent SaaS system 
              with AI-driven automation.
            </p>
          </div>
          
          <div className="relative w-full aspect-video bg-[#0B1628] rounded-xl overflow-hidden shadow-lg border border-[#DDE1E9]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YgSBBP37b0M?autoplay=0&rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3"
              title="GHL Scale Up Client Testimonial - Parent SaaS Case Study"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          <p className="text-xs md:text-sm text-[#5C6880] text-center mt-3">
            Real client testimonial - See how we transformed their multi-brand CRM system
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
              Need a Unified GoHighLevel System for Multiple Brands?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              GHL Scale Up architects parent SaaS structures that let you manage multiple CRM brands from one central account — with consistent automation, billing, and reporting across every vertical.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Book Your Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PROBLEM SECTION ====================
function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              The Problem
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Running Multiple Business Verticals Without a Unified GoHighLevel CRM
            </h2>
            <div className="bg-white border-l-4 border-[#0E9BF0] p-3 md:p-4 rounded-r-lg max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-[#5C6880] italic">
                "Lead handling, follow-ups, payments, and reporting were fragmented across systems, which made it difficult to maintain consistency, speed, and operational visibility."
              </p>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Our client, <strong className="text-[#1A2236]">RiverEnergia</strong>, was operating multiple business verticals — an energy platform and a parallel Legal-Finance CRM brand — independently, without a shared automation backbone. Lead handling, follow-ups, payments, and reporting were fragmented across systems, which made it difficult to maintain consistency, speed, and operational visibility. As the business scaled, the absence of a unified CRM and automation framework had become a major bottleneck.
            </p>
            
            <div className="mt-4 bg-[#F8F9FB] rounded-lg p-4 border border-[#0E9BF0]/20">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">The pattern GHL Scale Up sees often:</strong> Businesses running more than one brand or vertical end up choosing between two flawed defaults — merging unrelated business lines into a single CRM instance (which blurs branding and reporting), or standing up fully separate CRM tools per brand (which multiplies cost and blocks cross-business visibility). Neither approach scales cleanly. The real fix isn't a bigger CRM — it's a different account structure.
              </p>
            </div>
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
              🏗️ Running Multiple Brands Without a Unified System?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              We architect parent SaaS structures that let you manage multiple CRM brands from one central account — with consistent automation, billing, and reporting across every vertical.
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
              Architecting a Parent SaaS Structure for Multi-Brand CRM Management
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              To solve this, GHL Scale Up architected and implemented a <strong className="text-[#1A2236]">parent SaaS structure inside GoHighLevel</strong>, letting RiverEnergia manage multiple CRM brands under a single, branded ecosystem instead of disconnected tools.
            </p>
            
            <div className="mt-4 bg-[#F8F9FB] rounded-lg p-4 border border-[#0E9BF0]/20">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">How it works:</strong> In GoHighLevel's account model, an agency-level "parent" account can govern multiple branded sub-accounts — each with its own domain, branding, and user access — while automation, templates, and billing logic are controlled centrally. That parent/sub-account model is what let RiverEnergia's energy CRM and legal-finance CRM operate as distinct client-facing brands while sharing the same underlying infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SETUP SECTION ====================
function SetupSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              The Setup
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              How We Set Up the GoHighLevel Parent SaaS Account
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              We set up the <strong className="text-[#1A2236]">RiverConnect</strong> parent SaaS inside GoHighLevel with full branding and domain configuration, giving RiverEnergia a central, branded hub from which every CRM brand under it could be managed and deployed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-[#0E9BF0]">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="font-semibold text-[#1A2236] text-sm">Full Branding</span>
              </div>
              <p className="text-sm text-[#5C6880]">RiverConnect branded hub for managing all CRM brands</p>
            </div>
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-[#0E9BF0]">
                  <Settings2 className="w-4 h-4" />
                </div>
                <span className="font-semibold text-[#1A2236] text-sm">Domain Configuration</span>
              </div>
              <p className="text-sm text-[#5C6880]">Custom domain setup for parent and sub-accounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SNAPSHOTS SECTION ====================
function SnapshotsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Snapshots
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              How We Used GoHighLevel Snapshots to Speed Up Sub-Account Deployment
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              To make future rollouts fast and repeatable, we built <strong className="text-[#1A2236]">reusable GoHighLevel SaaS snapshots</strong>. A snapshot in GoHighLevel is a saved configuration — pipelines, workflows, and automations — that can be pushed into a new sub-account instead of rebuilding that setup by hand each time a business line is added.
            </p>
            
            <div className="mt-4 bg-[#F8F9FB] rounded-lg p-4 border border-[#0E9BF0]/20">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">For RiverEnergia, this meant:</strong> New CRM brands or business units could be brought online consistently, without re-creating automation logic from scratch for each one.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Consistent Rollouts</span>
                </div>
                <p className="text-sm text-[#5C6880]">Every new sub-account inherits proven pipelines and workflows</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-[#25C97D]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Faster Deployment</span>
                </div>
                <p className="text-sm text-[#5C6880]">No need to rebuild automation logic from scratch each time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== INTEGRATIONS SECTION ====================
function IntegrationsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Integrations
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              How We Integrated Stripe, Twilio, and Mailgun Into the GoHighLevel Automation Layer
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Payments and communication needed to work the same way across every brand in the ecosystem, so we configured core integrations to support automated workflows:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Stripe</h4>
                <p className="text-xs text-[#5C6880] mt-1">Payment processing</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Twilio</h4>
                <p className="text-xs text-[#5C6880] mt-1">SMS & Voice</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#DDE1E9] text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FB] flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-[#0E9BF0]" />
                </div>
                <h4 className="font-semibold text-[#1A2236] text-sm">Mailgun</h4>
                <p className="text-xs text-[#5C6880] mt-1">Email delivery</p>
              </div>
            </div>

            <div className="mt-4 bg-[#F8F9FB] rounded-lg p-4 border border-[#0E9BF0]/20">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">Centralising these at the parent-account level</strong> meant RiverEnergia didn't need to reconfigure payment and messaging infrastructure separately for each CRM brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PIPELINE SECTION ====================
function PipelineSection() {
  const pipelineStages = [
    { stage: 'Lead', color: 'blue' },
    { stage: 'Offer', color: 'yellow' },
    { stage: 'Contract', color: 'orange' },
    { stage: 'Active', color: 'green' },
    { stage: 'Closed', color: 'gray' },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              CRM Pipeline
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              How We Built a Structured GoHighLevel CRM Pipeline for Lead-to-Close Tracking
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              Finally, we built a structured CRM pipeline to track leads and customers across every stage of the business lifecycle:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
              {pipelineStages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    stage.color === 'blue' ? 'bg-[#F8F9FB] text-[#0E9BF0] border border-[#0E9BF0]/30' :
                    stage.color === 'yellow' ? 'bg-[#FFFBE6] text-[#8B6B00] border border-[#F8D000]/30' :
                    stage.color === 'orange' ? 'bg-[#FFF5E6] text-[#B85C00] border border-[#F8A000]/30' :
                    stage.color === 'green' ? 'bg-[#E6FAF2] text-[#1A7A4A] border border-[#25C97D]/30' :
                    'bg-[#F8F9FB] text-[#5C6880] border border-[#DDE1E9]'
                  }`}>
                    {stage.stage}
                  </div>
                  {idx < pipelineStages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#5C6880] flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-4 bg-[#F8F9FB] rounded-lg p-4 border border-[#0E9BF0]/20">
              <p className="text-sm text-[#5C6880] leading-relaxed">
                <strong className="text-[#1A2236]">The result:</strong> This gave RiverEnergia's team one consistent, stage-based view of deal status across the business, rather than tracking that status informally or inconsistently between brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== RESULTS SECTION ====================
function ResultsSection() {
  const results = [
    { metric: 'Parent SaaS account', outcome: 'RiverConnect launched inside GoHighLevel with full branding and domain configuration' },
    { metric: 'Snapshot-based deployment', outcome: 'Reusable SaaS snapshots created for fast, consistent sub-account rollout' },
    { metric: 'Payment & messaging integrations', outcome: 'Stripe, Twilio, and Mailgun integrated for payments and multi-channel messaging' },
    { metric: 'CRM pipeline structure', outcome: 'Lead → Offer → Contract → Active → Closed built and standardized' },
    { metric: 'Follow-up consistency', outcome: '2.5× improvement across Email, SMS, and WhatsApp' },
    { metric: 'Lead response time', outcome: 'Reduced to under 1 minute using AI-driven automation' },
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
              What This GoHighLevel Multi-CRM Automation System Delivered
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#DDE1E9] mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-[500px] md:min-w-full divide-y divide-[#DDE1E9]">
                <thead className="bg-[#F8F9FB]">
                  <tr>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[#1A2236]">What we built</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[#1A2236]">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDE1E9]">
                  {results.map((result, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FB]/50'}>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium text-[#1A2236]">{result.metric}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-[#5C6880]">{result.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-[#DDE1E9] p-4 md:p-6">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              <strong className="text-[#1A2236]">Note:</strong> I do not have a verified figure for RiverEnergia's pre-engagement response time or follow-up-consistency baseline — the case study states the 2.5× improvement and the under-1-minute response time as outcomes but doesn't publish the starting numbers. If you need the exact baseline, that would have to be confirmed directly with GHL Scale Up or RiverEnergia rather than assumed here.
            </p>
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
              📊 Want Results Like This for Your Multi-Brand Business?
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed">
              From parent SaaS architecture to AI-driven automation — we build GoHighLevel systems that unify multiple brands, standardize operations, and deliver real results.
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

// ==================== BEFORE VS AFTER ====================
function BeforeAfterSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Before vs After
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              The Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">✕</span>
                </div>
                <h3 className="text-lg font-bold text-red-800">Before</h3>
              </div>
              <p className="text-sm text-red-700 leading-relaxed">
                Lead handling, follow-ups, payments, and reporting fragmented across independent systems per business vertical, with no shared automation backbone.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-800">After</h3>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                One GoHighLevel parent SaaS ecosystem managing multiple CRM brands, with centralized payment and messaging integrations, a standardized pipeline, and automated, faster lead response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== WHY IT MATTERS ====================
function WhyItMattersSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-[#0E9BF0]/10 text-[#0E9BF0] font-semibold text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
              Why It Matters
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2236] mt-2 mb-3 md:mb-4">
              Why a GoHighLevel Parent SaaS Structure Solves Multi-Brand CRM Fragmentation
            </h2>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-[#DDE1E9]">
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">
              The core of this solution was <strong className="text-[#1A2236]">structural, not cosmetic</strong>. Instead of automating each business vertical's CRM in isolation, we built one parent SaaS system capable of supporting multiple branded CRM instances from shared infrastructure.
            </p>
            
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#0E9BF0]/20">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Brand Separation</span>
                </div>
                <p className="text-sm text-[#5C6880]">Each CRM brand looks and operates as a distinct client experience</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4 border border-[#0E9BF0]/20">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-[#0E9BF0]" />
                  <span className="font-semibold text-[#1A2236] text-sm">Operational Consolidation</span>
                </div>
                <p className="text-sm text-[#5C6880]">Payments, messaging, and pipeline logic don't need to be rebuilt per brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== KEY TAKEAWAYS ====================
function KeyTakeawaysSection() {
  const takeaways = [
    "Use a GoHighLevel parent SaaS structure, not separate standalone accounts, when a business runs more than one brand or vertical.",
    "Build reusable snapshots so every new sub-account inherits proven pipelines, workflows, and automations instead of being configured from scratch.",
    "Centralize payment (Stripe) and messaging (Twilio, Mailgun) integrations at the parent level so every brand automates the same way.",
    "Standardize the CRM pipeline (e.g., Lead → Offer → Contract → Active → Closed) so deal status means the same thing regardless of which brand a lead came from.",
    "Put AI-driven automation in front of new leads first — it's what actually compresses response time down to the sub-1-minute range this build achieved for RiverEnergia."
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
              How to Replicate This GoHighLevel Multi-CRM Setup
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
      question: "How do I manage multiple brands or business verticals in one GoHighLevel account?",
      answer: "Use GoHighLevel's parent/sub-account structure: a central agency-level account governs multiple branded sub-accounts, each with its own domain and branding, while automations, snapshots, and billing are controlled centrally. This is the approach GHL Scale Up used to give RiverEnergia's energy and legal-finance brands separate client-facing identities on shared infrastructure."
    },
    {
      question: "What's the difference between GoHighLevel sub-accounts and SaaS Mode?",
      answer: "A standard sub-account is an isolated workspace for one client or brand inside your agency account. SaaS Mode builds on that by adding white-label billing and self-serve subscription management, letting an agency package GoHighLevel access as its own branded software product. A parent SaaS structure like RiverConnect uses this model to run multiple CRM brands from one governed account."
    },
    {
      question: "How do GoHighLevel snapshots reduce sub-account setup time?",
      answer: "A snapshot saves a sub-account's pipelines, workflows, and automations as a reusable template that can be deployed into a new sub-account, instead of rebuilding that configuration manually every time. GHL Scale Up used this to deploy new CRM brands for RiverEnergia faster and more consistently than building each one from scratch."
    },
    {
      question: "How can I integrate Stripe, Twilio, and Mailgun with GoHighLevel?",
      answer: "GoHighLevel supports native and API-based integrations with Stripe for payment processing, Twilio for SMS and voice, and Mailgun for email delivery, so these can be connected once at the account level and used across every automation and sub-account built on top of it — which is how they were configured in the RiverEnergia build."
    },
    {
      question: "How do I reduce lead response time using GoHighLevel automation?",
      answer: "Routing new leads into an AI-driven workflow — one that responds instantly across the channel the lead came in on (chat, SMS, email, or missed call) — is what removes the manual delay between a lead arriving and a business acknowledging it. In RiverEnergia's case, this kind of AI-driven automation is what brought lead response time down to under 1 minute."
    },
    {
      question: "Can one GoHighLevel account run more than one CRM brand without mixing client data?",
      answer: "Yes — because each sub-account under a parent SaaS structure is a separate workspace with its own contacts, pipelines, and automations, brands don't share client data even though they're managed from one central account."
    },
    {
      question: "What CRM pipeline stages should a multi-vertical business use in GoHighLevel?",
      answer: "There's no single required structure, but a clear, sequential pipeline that every brand uses consistently — such as Lead → Offer → Contract → Active → Closed, as built for RiverEnergia — gives leadership one shared way to read deal status across every business line instead of interpreting each brand's pipeline differently."
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
            Need a GoHighLevel Parent SaaS System for Your Multi-Brand Business?
          </h2>
          
          <p className="text-base md:text-xl text-white/60 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            If your business runs more than one brand or vertical and needs a single, scalable GoHighLevel system instead of fragmented tools, GHL Scale Up can architect a parent SaaS structure the way we did for RiverEnergia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#F8D000] text-[#0B1421] font-bold rounded-xl hover:bg-[#FFE44D] transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 text-base md:text-lg border-2 border-white/20 hover:border-white/40 transform hover:-translate-y-0.5"
            >
              Book a Call
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