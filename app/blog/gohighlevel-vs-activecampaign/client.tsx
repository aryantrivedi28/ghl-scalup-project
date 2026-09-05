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
      Shield,
      DollarSign,
      Mailbox,
      Search,
      Award,
      CheckCircle2,
      MessageCircle,
      Phone,
      HeartHandshake,
      BarChart3,
      AlertTriangle,
      Rocket,
      Target,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import BookingModal from '@/components/BookingModal'
import { Button } from '../../../components/ui/button';

export default function GoHighLevelVsActiveCampaignClient() {
      const [activeId, setActiveId] = useState<string>('');
      const [openBooking, setOpenBooking] = useState(false);

      const handleOpenBooking = () => {
            setOpenBooking(true);
      };

      // Handle scroll detection for active section
      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'what-built-for',
                        'understanding-pricing-models',
                        'email-depth-vs-multi-channel-breadth',
                        'feature-comparison',
                        'where-activecampaign-wins-ecommerce',
                        'when-switch',
                        'when-stay',
                        'verdict',
                        'already-decided-to-switch',
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

      const faqs = [
            {
                  q: "Is GoHighLevel better than ActiveCampaign?",
                  a: "For agencies needing sub-accounts, native SMS, and white-label capability, GoHighLevel is the stronger platform. For businesses where email is the primary channel and deliverability and automation depth matter most, ActiveCampaign is more capable. Neither is objectively better — it depends on whether you need multi-channel breadth or single-channel depth."
            },
            {
                  q: "How does GoHighLevel vs ActiveCampaign pricing compare?",
                  a: "GoHighLevel charges a flat rate — $97 to $497/month regardless of contact count. ActiveCampaign charges by contact volume, starting around $15/month at 1,000 contacts and climbing into the hundreds per month as a list grows into the tens of thousands. For agencies or any business with a large or growing list, GoHighLevel's flat pricing becomes significantly more cost-effective over time."
            },
            {
                  q: "Can GoHighLevel replace ActiveCampaign?",
                  a: "For most agency use cases, yes — GoHighLevel covers email automation, CRM, and contact tagging while adding SMS, AI voice, funnels, and multi-client management. The genuine trade-off: GoHighLevel's email automation is functional but less sophisticated than ActiveCampaign's. Businesses where email deliverability is a primary revenue metric should weigh that trade-off carefully rather than assume GoHighLevel matches it."
            },
            {
                  q: "Does GoHighLevel have better email automation than ActiveCampaign?",
                  a: "No. ActiveCampaign's conditional branching, goal-based triggers, and predictive send-time optimization are more advanced than what GoHighLevel offers at this price point. GoHighLevel's strength is combining email with other channels, not out-performing ActiveCampaign at email specifically."
            },
            {
                  q: "What happens to my ActiveCampaign automations if I switch?",
                  a: "They don't transfer automatically — each automation has to be rebuilt manually in GoHighLevel's workflow builder, since the underlying trigger models differ. For the full breakdown of what transfers, what breaks, and how long it takes, see the full migration guide."
            },
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'what-built-for', title: 'What Each Platform Is Actually Built For' },
            { id: 'understanding-pricing-models', title: 'Understanding the Two Pricing Models' },
            { id: 'email-depth-vs-multi-channel-breadth', title: 'Email Depth vs. Multi-Channel Breadth: The Real Trade-Off' },
            { id: 'feature-comparison', title: 'Feature Comparison' },
            { id: 'where-activecampaign-wins-ecommerce', title: 'Where ActiveCampaign Has a Real Edge: E-Commerce' },
            { id: 'when-switch', title: 'When Should You Switch to GoHighLevel?' },
            { id: 'when-stay', title: 'When Should You Stay on ActiveCampaign?' },
            { id: 'verdict', title: 'The Verdict: GoHighLevel vs ActiveCampaign' },
            { id: 'already-decided-to-switch', title: 'Already Decided to Switch?' },
            { id: 'faq', title: 'Frequently Asked Questions' },
      ];

      const pricingData = [
            { label: 'Billing basis', ghl: 'Flat rate per plan, unlimited contacts', ac: 'Scales by contact count, billed annually (~20% higher month-to-month)' },
            { label: 'Entry tier (approx. 1,000 contacts)', ghl: '$97/mo (Starter, 3 sub-accounts)', ac: '~$15/mo (Starter — email/automation only, no CRM)' },
            { label: 'Mid tier', ghl: '$297/mo (Unlimited, unlimited sub-accounts)', ac: '~$49–$79/mo (Plus/Pro, adds CRM and landing pages)' },
            { label: 'At 10,000 contacts', ghl: 'No change — still $297/mo (Unlimited)', ac: '~$240–$420/mo depending on tier' },
            { label: 'Top tier', ghl: '$497/mo (Agency Pro, SaaS Mode)', ac: '~$145+/mo at 1,000 contacts, rising further with volume' },
      ];

      const featureData = [
            { feature: 'Email automation sophistication', ghl: 'Visual builder, unlimited sequences, functional deliverability', ac: 'Advanced conditional logic, predictive send timing, deeper segmentation', winner: 'ActiveCampaign' },
            { feature: 'Email deliverability', ghl: 'Requires manual DKIM/SPF setup and domain warmup', ac: 'More mature infrastructure, stronger out of the box', winner: 'ActiveCampaign' },
            { feature: 'Native SMS', ghl: 'Yes, on every plan', ac: 'No — requires third-party Twilio integration', winner: 'GoHighLevel' },
            { feature: 'CRM & pipelines', ghl: 'Full CRM built in on every plan', ac: 'Available, but Pipelines is now a separate paid add-on', winner: 'GoHighLevel' },
            { feature: 'Funnel/landing pages', ghl: 'Included on every plan', ac: 'Landing pages on Plus+; no dedicated funnel builder', winner: 'GoHighLevel' },
            { feature: 'Booking calendar', ghl: 'Native, with automated reminders', ac: 'Not available natively', winner: 'GoHighLevel' },
            { feature: 'Multi-client management', ghl: 'Native sub-account architecture', ac: 'No equivalent — separate account per client', winner: 'GoHighLevel' },
            { feature: 'White-label / resale', ghl: 'Full white-label + SaaS Mode', ac: 'Not available at any tier', winner: 'GoHighLevel' },
            { feature: 'Third-party integrations', ghl: '200+ native + Zapier/API', ac: '1,000+ native apps (per ActiveCampaign\'s own published figure)', winner: 'ActiveCampaign' },
            { feature: 'E-commerce integrations', ghl: 'Limited — not GHL\'s strength', ac: 'Deep Shopify/WooCommerce integration, abandoned-cart automation', winner: 'ActiveCampaign' },
      ];

      const verdictData = [
            { situation: 'Agency managing 3+ client accounts', recommendation: 'GoHighLevel Unlimited — not close' },
            { situation: 'Solo, email-first business under ~5,000 contacts', recommendation: 'ActiveCampaign — better email depth, lower entry cost' },
            { situation: 'Service business needing SMS, booking, and CRM together', recommendation: 'GoHighLevel Starter' },
            { situation: 'E-commerce brand running high-volume email', recommendation: 'ActiveCampaign — stronger e-commerce integrations' },
            { situation: 'Agency wanting to resell the platform as SaaS', recommendation: 'GoHighLevel Agency Pro — ActiveCampaign has no equivalent' },
            { situation: 'Currently on ActiveCampaign, list growing, adding SMS need', recommendation: 'Switching to GoHighLevel likely favors both cost and capability' },
      ];

      // Reusable Project Help Card Component
      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
                  <Button
                        onClick={handleOpenBooking}
                        // href="/contact" 
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel vs ActiveCampaign 2026</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              {/* Post Tags / Category Labels */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Comparison</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL vs ActiveCampaign</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Agency Software</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              {/* H1 Headline */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel vs ActiveCampaign (2026):<br />
                                    <span className="text-[#F8D000]">Honest Comparison</span>
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
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ builds and migrations delivered · Pricing independently verified against current sources, September 2026</div>
                                    </div>
                              </div>

                              {/* Introductory Paragraph */}
                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
                                    GoHighLevel and ActiveCampaign both run CRM and email automation, which makes them look interchangeable on the surface. They aren't. ActiveCampaign is built around email as the primary channel; GoHighLevel is built around agencies running multiple channels and multiple clients. The right choice depends on which of those two things your business actually needs — not on which platform has more total features.
                              </p>

                              {/* Direct Answer Box */}
                              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                          <Zap className="w-5 h-5 text-[#F8D000]" />
                                          <span className="text-xs font-bold uppercase tracking-wider text-white/60">Direct answer</span>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                          GoHighLevel is the stronger fit for agencies managing multiple client accounts and businesses that need SMS, booking, or white-label capability alongside email. ActiveCampaign is the stronger fit for single businesses where email is the primary revenue channel, especially e-commerce brands, where its automation depth and deliverability infrastructure are genuinely more advanced than GoHighLevel's. The clearest structural difference is billing: ActiveCampaign charges per contact and that cost climbs steeply with list size; GoHighLevel charges a flat rate with unlimited contacts on every plan.
                                    </p>
                              </div>

                              {/* CTA Button 1: Hero Section */}
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
                                          href="#verdict"
                                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                                    >
                                          See the Verdict
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
                                    {/* Project Help Card */}
                                    <div className="hidden lg:block mb-6">
                                          <ProjectHelpCard />
                                    </div>

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
                                                5+ years GHL experience · 200+ systems built and migrated globally including ActiveCampaign to GoHighLevel migrations. All pricing figures verified from official platform pages as of June 2026.
                                          </p>
                                          <Link href="https://www.ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    {/* Share Buttons */}
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

                                    {/* CTA Card */}
                                    <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-4">
                                          <div className="text-sm font-bold text-white mb-2">Not Sure Which Platform Is Right?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">We help you choose the right platform and set it up correctly.</p>
                                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                                                Get Advice
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

                                    {/* Mobile Project Help Card - visible on mobile only */}
                                    <div className="lg:hidden mb-8">
                                          <ProjectHelpCard />
                                    </div>

                                    {/* Section 1: What Each Platform Is Built For */}
                                    <h2 id="what-built-for" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          What Each Platform Is Actually Built For
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          GoHighLevel was designed for agencies managing systems for other businesses. Sub-accounts, Snapshots, white-labeling, and SaaS Mode all exist because the platform assumes one operator is running many separate client environments from a single dashboard.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          ActiveCampaign was designed for businesses running customer communication primarily through email. Its automation builder, behavioral segmentation, predictive send-time optimization, and e-commerce integrations all center on email as the primary channel — SMS and voice are either unavailable natively or bolted on through third-party add-ons.
                                    </p>

                                    {/* Section 2: Understanding the Two Pricing Models */}
                                    <h2 id="understanding-pricing-models" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Understanding the Two Pricing Models
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The headline prices ($97 vs. $15) don't mean much on their own, because the two platforms don't charge for the same thing. GoHighLevel charges a flat rate for the platform regardless of contact count. ActiveCampaign charges primarily by how many contacts you store — the platform itself is cheap to start, but the bill grows as your list does, independent of how much you actually use it.
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]"> </th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ActiveCampaign</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {pricingData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.label}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.ac}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-6">
                                          <p className="text-sm md:text-base text-[#1A2236] leading-relaxed">
                                                <strong>A note on precision:</strong> ActiveCampaign's pricing page renders tiers dynamically by contact band rather than publishing one static table, so the figures above are directional and confirmed against multiple current sources rather than ActiveCampaign's live checkout — confirm exact numbers for your contact count before budgeting. GoHighLevel's flat-rate structure has no such variability: the same three prices apply regardless of contact volume.
                                          </p>
                                          <p className="text-sm md:text-base text-[#1A2236] leading-relaxed mt-3">
                                                For an agency managing 10 client accounts, this structural difference compounds: GoHighLevel Unlimited covers all 10 in separate sub-accounts for $297/month total. ActiveCampaign has no sub-account model, so 10 clients would require 10 separate accounts — at even the modest Plus tier, that's well over $2,000/month before any client's list grows. For the full GoHighLevel pricing breakdown, see the{' '}
                                                <Link href="/blog/gohighlevel-pricing" className="text-[#0E9BF0] hover:underline">GoHighLevel pricing guide</Link>.
                                          </p>
                                    </div>

                                    {/* Section 3: Email Depth vs. Multi-Channel Breadth */}
                                    <h2 id="email-depth-vs-multi-channel-breadth" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Email Depth vs. Multi-Channel Breadth: The Real Trade-Off
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong>This is the actual decision, more specific than "which platform is better."</strong> ActiveCampaign's email automation is genuinely more sophisticated than GoHighLevel's. Conditional branching, goal-based triggers, predictive send-time optimization, and deliverability infrastructure are all more mature in ActiveCampaign — this isn't a close call. If your business runs entirely on email sequences and deliverability is a primary revenue driver, that depth matters and GoHighLevel does not fully match it at this price point.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          GoHighLevel's advantage isn't better email — it's that email is only one of several channels the platform runs natively. Native two-way SMS, an AI Voice Agent that answers and qualifies inbound calls, a booking calendar, and sub-account architecture for managing multiple clients all exist inside one flat-rate platform. Most businesses that move from ActiveCampaign to GoHighLevel aren't doing it because GHL's email is better — they're doing it because they need channels ActiveCampaign doesn't provide at any price.
                                    </p>

                                    {/* Section 4: Feature Comparison */}
                                    <h2 id="feature-comparison" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Feature Comparison
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Feature</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ActiveCampaign</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Winner</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {featureData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.feature}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.ghl}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.ac}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0] font-medium">{item.winner}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section 5: Where ActiveCampaign Has a Real Edge: E-Commerce */}
                                    <h2 id="where-activecampaign-wins-ecommerce" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Where ActiveCampaign Has a Real Edge: E-Commerce
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          If your business runs on Shopify or WooCommerce, this deserves its own consideration rather than a footnote. ActiveCampaign's e-commerce integrations include abandoned-cart automation, purchase-behavior triggers, and product-based segmentation that are built specifically for online retail. GoHighLevel's e-commerce capabilities exist but are not its area of strength — for a business where online store revenue is the primary driver, ActiveCampaign's depth here is a genuine reason to stay, not just a minor trade-off against GoHighLevel's other advantages.
                                    </p>

                                    {/* Section 6: When Should You Switch to GoHighLevel? */}
                                    <h2 id="when-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          When Should You Switch to GoHighLevel?
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">You manage 3 or more client accounts.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">ActiveCampaign has no sub-account model — each client needs a separate account, and the cost compounds quickly. GoHighLevel Unlimited covers unlimited clients at a flat $297/month.</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">You need native SMS in your automations.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">ActiveCampaign requires a third-party Twilio integration; GoHighLevel includes two-way SMS natively on every plan.</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">You're losing leads to slow follow-up.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">GoHighLevel's AI Voice Agent can answer inbound calls, qualify leads, and book appointments automatically — ActiveCampaign has no equivalent voice capability.</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <CheckCircle2 className="w-5 h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">Your contact list is growing and the bill is climbing.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">Because ActiveCampaign bills per contact, list growth directly increases cost. GoHighLevel's flat rate doesn't change as your list grows.</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          For the full technical walkthrough of making this switch, see{' '}
                                          <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration</Link>.
                                    </p>

                                    {/* Section 7: When Should You Stay on ActiveCampaign? */}
                                    <h2 id="when-stay" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          When Should You Stay on ActiveCampaign?
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">Email deliverability is your primary revenue driver.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">ActiveCampaign's more mature sending infrastructure is a genuine advantage that a migration would temporarily disrupt during GoHighLevel's required domain warmup period.</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">You run a Shopify or WooCommerce store.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">ActiveCampaign's e-commerce integrations are meaningfully stronger, as covered above.</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">You're a small, email-only operation.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">At a small contact count, ActiveCampaign's entry pricing is hard to beat, and GoHighLevel's broader platform is more than a single-channel business needs.</p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <div className="flex items-start gap-3">
                                                      <Shield className="w-5 h-5 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                      <div>
                                                            <p className="text-sm font-semibold text-[#1A2236]">You've built 30+ sophisticated automations.</p>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">The migration effort to rebuild deep automation logic may outweigh the benefit of switching, at least in the near term.</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Section 8: The Verdict */}
                                    <h2 id="verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          The Verdict: GoHighLevel vs ActiveCampaign
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Your Situation</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Recommendation</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {verdictData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.situation}</td>
                                                                  <td className="py-3 px-3 font-semibold text-[#0E9BF0]">{item.recommendation}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section 9: Already Decided to Switch? */}
                                    <h2 id="already-decided-to-switch" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Already Decided to Switch?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          If the comparison above points toward GoHighLevel, the next step is execution. Migrating means exporting contacts and tags, rebuilding automations from scratch in GHL's workflow builder, and running both platforms in parallel through a domain warmup period. For the complete technical walkthrough and realistic timeline by account size, see{' '}
                                          <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration</Link>.
                                    </p>

                                    {/* Section 10: FAQ */}
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

                                    {/* Closing section with links */}
                                    <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
                                          Still comparing options? See our{' '}
                                          <Link href="/blog/gohighlevel-alternatives" className="text-[#0E9BF0] hover:underline">GoHighLevel alternatives roundup</Link> or our standalone{' '}
                                          <Link href="/blog/gohighlevel-review" className="text-[#0E9BF0] hover:underline">GoHighLevel review</Link>. Want a direct recommendation for your specific setup?{' '}
                                          <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free platform strategy call</Link>.
                                    </div>

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/activecampaign-to-gohighlevel-migration" className="text-sm text-[#0E9BF0] hover:underline">ActiveCampaign to GoHighLevel Migration Guide →</Link>
                                                <Link href="/blog/gohighlevel-alternatives" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Alternatives Roundup →</Link>
                                                <Link href="/blog/gohighlevel-review" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Review 2026 →</Link>
                                                <Link href="/blog/gohighlevel-pricing" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Pricing: All Plans Explained →</Link>
                                                <Link href="/blog/gohighlevel-vs-hubspot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel vs HubSpot: Honest 2026 Comparison →</Link>
                                          </div>
                                    </div>

                                    {/* Final CTA Section - Single closing CTA */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Deciding between GoHighLevel and ActiveCampaign?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      GHL Scale Up will tell you honestly which one fits your business. Book a free 30-minute strategy call. We review your current setup and give you a direct recommendation, including if staying on ActiveCampaign makes more sense for your situation.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                                                      Book Your Free Strategy Call
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                          </div>
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