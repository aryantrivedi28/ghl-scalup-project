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
      Zap,
      Award,
      AlertTriangle,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';

export default function GoHighLevelAlternativesClient() {
      const [activeId, setActiveId] = useState<string>('');

      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'what-makes-ghl-different',
                        'alternatives-list',
                        'comparison-table',
                        'how-to-decide',
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
                  q: "What is the best GoHighLevel alternative?",
                  a: "There is no single best GoHighLevel alternative. The right platform depends on which GHL features you actually need. For agencies managing multiple client accounts with sub-account architecture and white-label capability, Vendasta is the closest structural match. For email automation depth, ActiveCampaign is stronger. For pure funnel building, ClickFunnels is more refined and faster. For digital products and courses, Kartra is better suited. For enterprise CRM, HubSpot is deeper. For budget all-in-one, Systeme.io offers a free plan."
            },
            {
                  q: "What is most similar to GoHighLevel?",
                  a: "Vendasta is the most structurally similar platform to GoHighLevel for agencies. Both offer white-label dashboards, multi-client management, and the ability to resell digital services under your own brand. For overall feature coverage (CRM plus funnels plus automation plus reputation), Kartra is the closest all-in-one alternative for non-agency businesses. No platform combines CRM, native SMS, funnel builder, AI Voice Agent, white-label SaaS resale, and sub-account architecture at GoHighLevel's price point."
            },
            {
                  q: "Is there a cheaper alternative to GoHighLevel?",
                  a: "Yes. Systeme.io has a free plan that includes funnel building, email automation, and basic course hosting. It is significantly less capable than GoHighLevel for SMS, CRM, and multi-client management. But for a bootstrapped solopreneur who needs the basic funnel-to-email workflow, it works. ActiveCampaign starts at $15/month for email-only use. HubSpot has a free CRM tier. ClickFunnels starts at $97/month but has no CRM or SMS. The trade-off for all cheaper alternatives is less automation depth, no native SMS, and no multi-client architecture."
            },
            {
                  q: "Does anything replace GoHighLevel for agencies?",
                  a: "For the specific combination of sub-account architecture, white-label branding, native SMS, AI features, and flat-rate pricing for unlimited clients, no platform fully replaces GoHighLevel at this price point. Vendasta covers the agency reseller model but lacks SMS and AI Voice Agent. HubSpot covers enterprise CRM but has no white-label option and charges per client account. Most alternatives solve one piece of what GoHighLevel covers holistically. Agencies who evaluate alternatives seriously and still choose GoHighLevel are typically making the decision based on the sub-account model and the AI features."
            },
            {
                  q: "Is GoHighLevel better than HubSpot?",
                  a: "For marketing agencies managing multiple client accounts, yes. GoHighLevel's sub-account model, flat-rate pricing, native SMS, and white-label capability make it significantly more cost-effective and operationally suitable than HubSpot. For B2B companies with a dedicated inbound marketing team, content strategy, and enterprise integration requirements, HubSpot's reporting depth, CMS quality, and 1,500+ native integrations are genuinely superior. The comparison depends entirely on whether you are a single-brand internal marketing team or an agency managing multiple clients."
            },
            {
                  q: "Is GoHighLevel better than ActiveCampaign?",
                  a: "For multi-channel marketing automation that includes SMS, booking, and funnels alongside email, GoHighLevel is more capable than ActiveCampaign. For email-specific depth (deliverability infrastructure, behavioral segmentation, and predictive send timing), ActiveCampaign is more mature. The choice comes down to whether you need email excellence specifically, or email as one channel in a broader omnichannel system. Businesses that move from ActiveCampaign to GoHighLevel typically do so because they need SMS and booking automation alongside email."
            },
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'what-makes-ghl-different', title: '1. What Makes GoHighLevel Different from These Alternatives?' },
            { id: 'alternatives-list', title: '2. The 8 Best GoHighLevel Alternatives Compared' },
            { id: 'comparison-table', title: '3. Master Comparison Table' },
            { id: 'how-to-decide', title: '4. How to Decide Which Platform Is Right for You' },
            { id: 'faq', title: '5. Frequently Asked Questions' },
      ];

      const alternatives = [
            {
                  name: 'HubSpot',
                  price: 'Free CRM · Marketing Hub Pro at $890/mo',
                  better: 'HubSpot\'s CRM depth, reporting sophistication, content management system, and enterprise-grade governance are genuinely superior. Native integration library (1,500+ integrations) dwarfs GHL\'s 200+.',
                  missing: 'No native SMS. No white-label option at any tier. No sub-account model. No AI Voice Agent. For agencies managing 3+ clients, per-account pricing makes HubSpot cost-prohibitive.',
                  choose: 'You run a B2B company with a dedicated marketing team, a content and inbound strategy, and a budget that can absorb $1,300+ per month.',
                  link: '/blog/gohighlevel-vs-hubspot'
            },
            {
                  name: 'ActiveCampaign',
                  price: 'Starter at $15/mo · Professional at $149/mo',
                  better: 'ActiveCampaign\'s email deliverability infrastructure is more mature. Automation logic, behavioral segmentation, and predictive send-time optimization are genuinely more sophisticated.',
                  missing: 'No native SMS (requires Twilio). No funnel builder. No booking calendar. No sub-account model. No white-label option. No AI Voice Agent.',
                  choose: 'Email deliverability is your single top priority and you send high volumes to a maintained list.',
                  link: null
            },
            {
                  name: 'ClickFunnels',
                  price: 'Launch at $97/mo · Optimize at $297/mo',
                  better: 'Pages load in approximately 1.2 seconds versus GHL\'s 4 to 5 second average. Funnel template library is more extensive. FunnelHacker community and training ecosystem is more developed.',
                  missing: 'No native SMS. No sub-account architecture. No white-label option. No AI features. Basic CRM only not suitable for pipeline management at scale.',
                  choose: 'You primarily need high-converting funnels and simple email sequences, and you do not manage multiple client accounts.',
                  link: '/blog/gohighlevel-vs-clickfunnels'
            },
            {
                  name: 'Vendasta',
                  price: 'Starter at $99/mo · Professional at $499/mo',
                  better: 'Vendasta\'s marketplace of third-party services (SEO, advertising, listings management) that agencies can resell is more developed. Most structurally similar to GHL for the agency reseller model.',
                  missing: 'No native SMS. No AI Voice Agent. No funnel builder. Platform leans more toward marketing services reselling than operational automation.',
                  choose: 'Your agency model is primarily reselling digital marketing services to local businesses rather than building their marketing automation systems.',
                  link: null
            },
            {
                  name: 'Kartra',
                  price: 'Starter at $119/mo · Professional at $549/mo',
                  better: 'Kartra\'s course and membership experience, video hosting with student analytics, and e-commerce features (order bumps, one-click upsells) are more refined.',
                  missing: 'No native SMS. No sub-account model. No white-label capability. No AI features. Not designed for multi-client agency management.',
                  choose: 'Your business model is primarily selling courses, memberships, or digital products and the student experience is a core part of your brand.',
                  link: null
            },
            {
                  name: 'Keap',
                  price: 'Pro at $299/mo for 2 users',
                  better: 'Keap has strong invoicing, payment collection, and proposal tools built in. Client management workflow for service businesses is more polished at the small business level.',
                  missing: 'No native SMS (basic only). No sub-account model. No white-label option. No AI features. At $299/mo for 2 users, it is more expensive than GHL Unlimited.',
                  choose: 'You run a small service business that needs strong invoicing and payment tools built into the CRM and are not concerned with SMS, funnels, or multi-client management.',
                  link: null
            },
            {
                  name: 'Systeme.io',
                  price: 'Free plan · Unlimited at $97/mo',
                  better: 'Systeme.io offers a free plan with genuine functionality (funnels, email automation, course hosting). Interface is simpler and easier to learn than GHL.',
                  missing: 'No native SMS. No sub-account model. No white-label option. No AI features. Automation depth and CRM capability are significantly limited.',
                  choose: 'You are bootstrapping a simple online business and need the basic funnel-to-email workflow at minimum cost.',
                  link: null
            },
            {
                  name: 'Zoho CRM',
                  price: 'Standard at $14/mo/user · Enterprise at $40/mo',
                  better: 'Zoho CRM\'s sales pipeline features, lead scoring, and analytics are more mature and customisable. The Zoho suite creates an integrated business operating system.',
                  missing: 'No native SMS in the base CRM. No funnel builder. No sub-account model. No white-label option. No AI Voice Agent.',
                  choose: 'You have a growing sales team that needs deep pipeline analytics, lead scoring, and a CRM that integrates with accounting.',
                  link: null
            },
      ];

      const comparisonTableData = [
            { platform: 'GoHighLevel', price: '$97/mo', sms: 'Yes', whiteLabel: 'Yes (higher plans)', subAccounts: 'Yes unlimited', ai: 'Voice AI, Chat AI, Reviews AI', bestFor: 'Agencies managing multiple clients' },
            { platform: 'HubSpot', price: '$20/mo per seat', sms: 'No', whiteLabel: 'No', subAccounts: 'No', ai: 'Basic AI content', bestFor: 'B2B inbound marketing teams' },
            { platform: 'ActiveCampaign', price: '$15/mo', sms: 'No (Twilio)', whiteLabel: 'No', subAccounts: 'No', ai: 'Send-time optimisation', bestFor: 'Email-first businesses' },
            { platform: 'ClickFunnels', price: '$97/mo', sms: 'No', whiteLabel: 'No', subAccounts: 'No', ai: 'Smart Funnel Builder', bestFor: 'Solo funnel builders' },
            { platform: 'Vendasta', price: '$99/mo', sms: 'No', whiteLabel: 'Yes', subAccounts: 'Yes (agency model)', ai: 'Limited', bestFor: 'Agency services resellers' },
            { platform: 'Kartra', price: '$119/mo', sms: 'No', whiteLabel: 'No', subAccounts: 'No', ai: 'Basic', bestFor: 'Course and membership creators' },
            { platform: 'Keap', price: '$299/mo', sms: 'Basic only', whiteLabel: 'No', subAccounts: 'No', ai: 'Limited', bestFor: 'Small service businesses' },
            { platform: 'Systeme.io', price: 'Free', sms: 'No', whiteLabel: 'No', subAccounts: 'No', ai: 'None', bestFor: 'Bootstrapped solopreneurs' },
            { platform: 'Zoho CRM', price: '$14/mo/user', sms: 'Add-on only', whiteLabel: 'No', subAccounts: 'No', ai: 'Zia AI (analytics)', bestFor: 'Growing SMB sales teams' },
      ];

      const decisionQuestions = [
            { q: 'Do you manage multiple client accounts?', ifYes: 'GoHighLevel or Vendasta', ifNo: 'All platforms qualify' },
            { q: 'Is native SMS a requirement?', ifYes: 'GoHighLevel is the only platform with native 2-way SMS built in', ifNo: 'All platforms qualify' },
            { q: 'Do you want to resell the platform under your own brand?', ifYes: 'Only GoHighLevel and Vendasta offer white-label capability', ifNo: 'All platforms qualify' },
            { q: 'Is email deliverability your top priority?', ifYes: 'ActiveCampaign has more mature email deliverability infrastructure', ifNo: 'GoHighLevel offers omnichannel capabilities' },
      ];

      const recommendationTable = [
            { situation: 'Agency managing 3+ clients, needs SMS and white-label', platform: 'GoHighLevel Unlimited ($297/mo)' },
            { situation: 'Solo entrepreneur building funnels only', platform: 'ClickFunnels Launch ($97/mo) or Systeme.io (Free)' },
            { situation: 'B2B company with inbound marketing strategy and budget', platform: 'HubSpot Marketing Hub Pro' },
            { situation: 'Email-first business, deliverability is critical', platform: 'ActiveCampaign Professional' },
            { situation: 'Agency reselling digital marketing services', platform: 'Vendasta Professional' },
            { situation: 'Course creator, membership and digital products primary', platform: 'Kartra Starter or Kajabi' },
            { situation: 'Small service business needing invoicing plus CRM', platform: 'Keap Pro' },
            { situation: 'Bootstrapped solopreneur, no budget for tools', platform: 'Systeme.io (Free plan)' },
      ];

      // Project Help Card Component
      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your project.</p>
                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel Alternatives 2026</span>
                        </div>
                  </nav>

                  {/* Hero Section - WIDE */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              {/* Post Tags / Category Labels */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Alternatives</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              {/* H1 Headline */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel Alternatives (2026):<br />
                                    <span className="text-[#F8D000]">Best Tools to Compare Before You Decide</span>
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
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated June 2026</div>
                                    </div>
                              </div>

                              {/* Introductory Paragraphs - NO max-w constraints */}
                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6">
                                    GoHighLevel is a strong platform for agencies. It is not the right platform for everyone.
                                    If you are evaluating it against other tools, this guide gives you the honest comparison
                                    including where the alternatives genuinely win. <strong className="text-white"> GHL Scale Up</strong>
                                    has built on GHL and migrated from most of the platforms listed here. This is the version of
                                    the comparison that tells you what actually matters before you make the call.
                              </p>
                              <p className="text-sm text-white/50 leading-relaxed">
                                    For a detailed review of GoHighLevel itself before diving into the alternatives:
                                    <Link href="/blog/gohighlevel-review" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Review 2026 →</Link>
                              </p>
                        </div>
                  </section>

                  {/* MAIN LAYOUT - Sidebar on LEFT, Content on RIGHT */}
                  <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-16">
                        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
                              
                              {/* ==================== LEFT COLUMN: SIDEBAR ==================== */}
                              <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
                                    {/* Project Help Card - AT THE TOP */}
                                    <div className="mb-6">
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
                                                                        {activeId === item.id && <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />}
                                                                        <span className="flex-1">{item.title}</span>
                                                                  </span>
                                                            </button>
                                                      </li>
                                                ))}
                                          </ul>
                                    </nav>

                                    <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
                                          <div className="flex items-center gap-3 mb-4">
                                                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
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
                                                5+ years GHL experience · 200+ systems built and migrated globally from HubSpot, ActiveCampaign, ClickFunnels,
                                                Kajabi, Zoho, and Keap. All pricing and feature details verified from official platform pages as of June 2026.
                                          </p>
                                          <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-4">
                                          <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Follow Us</div>
                                          <div className="flex gap-2 flex-wrap">
                                                <a href="https://www.linkedin.com/company/ghl-scale-up" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Linkedin className="w-3 h-3" /> LinkedIn</a>
                                                <a href="https://x.com/GHLScaleUp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 hover:shadow-md transition-all"><Twitter className="w-3 h-3" /> X</a>
                                                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="flex items-center gap-1.5 text-xs font-semibold bg-[#F0F2F5] text-[#1A2236] px-3 py-1.5 rounded-md hover:bg-[#DDE1E9] transition-colors"><Copy className="w-3 h-3" /> Copy link</button>
                                          </div>
                                    </div>
                              </aside>

                              {/* ==================== RIGHT COLUMN: BLOG CONTENT ==================== */}
                              <main className="min-w-0 order-2">

                                    {/* BLUF Box */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Zap className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Direct Answer</span>
                                          </div>
                                          <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                                                There is no single best GoHighLevel alternative. The right tool depends entirely on which GHL features you actually need.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                For email depth: ActiveCampaign. For funnels only: ClickFunnels or Systeme.io. For enterprise CRM: HubSpot or Salesforce.
                                                For agency white-label: Vendasta is the only close match. For digital products: Kartra or Kajabi. For small business CRM: Keap.
                                                No platform combines CRM, native SMS, funnels, AI Voice Agent, white-label SaaS resale, and sub-account architecture in one
                                                platform at GoHighLevel's price point.
                                          </p>
                                    </div>

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

                                    {/* Mobile Project Help Card */}
                                    <div className="lg:hidden mb-8">
                                          <ProjectHelpCard />
                                    </div>

                                    {/* Section 1: What Makes GHL Different */}
                                    <h2 id="what-makes-ghl-different" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          1. What Makes GoHighLevel Different from These Alternatives?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Before comparing the alternatives, understanding what GoHighLevel actually does differently prevents
                                          the mistake of evaluating it on the wrong criteria.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D]" />
                                                      <h3 className="text-base font-bold text-[#1A2236]">Where GHL Wins</h3>
                                                </div>
                                                <ul className="space-y-2 text-sm text-[#5C6880] list-disc list-inside">
                                                      <li>Sub-account architecture: one agency dashboard managing unlimited client accounts</li>
                                                      <li>Native SMS built in on every plan</li>
                                                      <li>White-label SaaS resale on Agency Pro tier</li>
                                                      <li>AI Employee suite: Voice AI, Conversation AI, Reviews AI</li>
                                                      <li>Flat-rate pricing for unlimited contacts and users</li>
                                                </ul>
                                          </div>
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                      <AlertTriangle className="w-5 h-5 text-[#F8D000]" />
                                                      <h3 className="text-base font-bold text-[#1A2236]">Where GHL Does Not Win</h3>
                                                </div>
                                                <ul className="space-y-2 text-sm text-[#5C6880] list-disc list-inside">
                                                      <li>Page load speed (ClickFunnels is faster)</li>
                                                      <li>Email deliverability infrastructure (ActiveCampaign is more mature)</li>
                                                      <li>Enterprise reporting (HubSpot is deeper)</li>
                                                      <li>Learning curve (most alternatives are easier to start with)</li>
                                                      <li>Third-party integration breadth (HubSpot has 1,500+ vs GHL's 200+)</li>
                                                </ul>
                                          </div>
                                    </div>

                                    {/* Section 2: Alternatives List */}
                                    <h2 id="alternatives-list" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          2. The 8 Best GoHighLevel Alternatives Compared
                                    </h2>

                                    {alternatives.map((alt, idx) => (
                                          <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-5 mb-6">
                                                <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                                                      <h3 className="text-xl font-bold text-[#1A2236]">{alt.name}</h3>
                                                      <span className="text-sm font-semibold text-[#0E9BF0] bg-[rgba(14,155,240,0.1)] px-3 py-1 rounded-full">{alt.price}</span>
                                                </div>
                                                <div className="mb-3">
                                                      <p className="text-sm text-[#25C97D] font-semibold mb-1">What it does better than GHL:</p>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">{alt.better}</p>
                                                </div>
                                                <div className="mb-3">
                                                      <p className="text-sm text-[#DC3545] font-semibold mb-1">What it does not have:</p>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">{alt.missing}</p>
                                                </div>
                                                <div className="mb-3">
                                                      <p className="text-sm text-[#F8D000] font-semibold mb-1">Choose {alt.name} if:</p>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">{alt.choose}</p>
                                                </div>
                                                {alt.link && (
                                                      <Link href={alt.link} className="text-sm text-[#0E9BF0] hover:underline inline-flex items-center gap-1 mt-2">
                                                            → Full comparison <ArrowRight className="w-3 h-3" />
                                                      </Link>
                                                )}
                                          </div>
                                    ))}

                                    {/* Section 3: Comparison Table */}
                                    <h2 id="comparison-table" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          3. Master Comparison Table: All 8 Alternatives vs GoHighLevel
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Platform</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Starting price</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Native SMS</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">White-label</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Sub-accounts</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">AI features</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best for</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {comparisonTableData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className={`py-3 px-3 font-medium ${item.platform === 'GoHighLevel' ? 'text-[#0E9BF0]' : 'text-[#1A2236]'}`}>{item.platform}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.price}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.sms}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.whiteLabel}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.subAccounts}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.ai}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.bestFor}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          For the full white-label guide:
                                          <Link href="/blog/gohighlevel-white-label" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel White Label Setup →</Link>
                                    </p>

                                    {/* Section 4: How to Decide */}
                                    <h2 id="how-to-decide" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          4. How to Decide Which Platform Is Right for You
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Use these four questions to narrow the decision before trialing anything.
                                    </p>

                                    <div className="space-y-3 mb-6">
                                          {decisionQuestions.map((item, idx) => (
                                                <div key={idx} className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4">
                                                      <h3 className="text-base font-bold text-[#0E9BF0] mb-2">Question {idx + 1}: {item.q}</h3>
                                                      <p className="text-sm text-[#1A2236]"><strong className="text-[#1A2236]">If yes:</strong> {item.ifYes}</p>
                                                      <p className="text-sm text-[#1A2236] mt-1"><strong className="text-[#1A2236]">If no:</strong> {item.ifNo}</p>
                                                </div>
                                          ))}
                                    </div>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your situation</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Recommended platform</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {recommendationTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.situation}</td>
                                                                  <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.platform}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Award className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">ALREADY ON GHL OR CONSIDERING IT</span>
                                          </div>
                                          <p className="text-sm text-white/80 leading-relaxed mb-3">
                                                If you are already using GoHighLevel and want to see what properly configured systems look like, or if you want
                                                help deciding whether to switch from one of these alternatives:
                                                <Link href="/case-studies" className="text-[#0E9BF0] hover:underline ml-1">see real GoHighLevel results and case studies →</Link>
                                          </p>
                                          <p className="text-sm text-white/80 leading-relaxed">
                                                For a full breakdown of what each GHL plan includes:
                                                <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline ml-1">GoHighLevel Pricing 2026 →</Link>
                                          </p>
                                    </div>

                                    {/* Section 5: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          5. Frequently Asked Questions
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

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                                                <Link href="/blog/gohighlevel-vs-clickfunnels" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs ClickFunnels: Honest 2026 Comparison →</Link>
                                                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026: Honest Verdict →</Link>
                                                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                                                <Link href="/blog/gohighlevel-white-label" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel White Label: How It Works →</Link>
                                                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                                          </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Still deciding between GoHighLevel and an alternative?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      GHL Scale Up gives you an honest answer based on your setup. Book a free 30-minute strategy call.
                                                      We look at your current stack, your client model, and your growth goals and tell you honestly whether
                                                      GoHighLevel makes sense or whether a different tool serves you better.
                                                </p>
                                                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                                                      Book Your Free Strategy Call
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