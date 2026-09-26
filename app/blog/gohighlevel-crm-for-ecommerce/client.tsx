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
      AlertTriangle,
      Rocket,
      CheckCircle2,
      Image as ImageIcon,
      Link2,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelCRMForEcommerceClient() {
      const [activeId, setActiveId] = useState<string>('');
      const [openBooking, setOpenBooking] = useState(false);

      const handleOpenBooking = () => {
            setOpenBooking(true);
      };

      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'direct-answer',
                        'how-gohighlevel-fits',
                        'is-it-actually-ecommerce-crm',
                        'shopify-vs-woocommerce',
                        'what-can-it-automate',
                        'where-crm-layer-matters',
                        'where-it-may-not-replace',
                        'gohighlevel-vs-klaviyo',
                        'native-vs-integration',
                        'implementation-risks',
                        'decision-framework',
                        'the-actual-fit-question',
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
                  q: "Can GoHighLevel be used for ecommerce?",
                  a: "Yes, as a CRM and automation layer connected to an ecommerce platform it doesn't run the storefront, catalog, or checkout itself."
            },
            {
                  q: "Is GoHighLevel an ecommerce CRM?",
                  a: "It's a general-purpose CRM that becomes ecommerce-relevant once connected to Shopify or WooCommerce; it isn't purpose-built for ecommerce the way a dedicated ecommerce marketing platform is."
            },
            {
                  q: "Does GoHighLevel integrate with Shopify?",
                  a: "Yes, natively through a Shopify custom app and Admin API token, supporting customer sync, order sync, revenue tracking, abandoned checkout recovery, and optional pipeline mapping."
            },
            {
                  q: "Does GoHighLevel integrate with WooCommerce?",
                  a: "Not natively. WooCommerce connects through Zapier, Make, GoHighLevel's webhook trigger paired with WooCommerce's native webhooks, or a third-party WordPress plugin."
            },
            {
                  q: "Can GoHighLevel replace Shopify?",
                  a: "No. GoHighLevel has its own small-scale store feature, but it isn't built to compete with Shopify for large catalogs, complex variants, or high order volume."
            },
            {
                  q: "Can GoHighLevel replace Klaviyo?",
                  a: "Not entirely for ecommerce-native marketing depth GoHighLevel offers native CRM and pipeline capability Klaviyo doesn't, while Klaviyo currently offers stronger native ecommerce segmentation and abandoned-cart automation."
            },
            {
                  q: "What are GoHighLevel's limitations for ecommerce?",
                  a: "Weaker native ecommerce segmentation and merchandising automation than dedicated ecommerce marketing tools, no native WooCommerce integration, and a store feature not intended for large catalogs."
            }
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'direct-answer', title: 'Direct Answer: Can GoHighLevel Work for Ecommerce?' },
            { id: 'how-gohighlevel-fits', title: 'How GoHighLevel Fits Into an Ecommerce CRM and Automation Stack' },
            { id: 'is-it-actually-ecommerce-crm', title: 'Is GoHighLevel Actually an Ecommerce CRM?' },
            { id: 'shopify-vs-woocommerce', title: 'Shopify vs. WooCommerce Connection' },
            { id: 'what-can-it-automate', title: 'What GoHighLevel Can Actually Automate' },
            { id: 'where-crm-layer-matters', title: 'Where a CRM Layer Matters More: High-Ticket Ecommerce' },
            { id: 'where-it-may-not-replace', title: 'Where GoHighLevel May Not Replace a Dedicated Platform' },
            { id: 'gohighlevel-vs-klaviyo', title: 'GoHighLevel vs. Klaviyo for Ecommerce' },
            { id: 'native-vs-integration', title: 'Native vs. Integration-Dependent Capabilities' },
            { id: 'implementation-risks', title: 'Practical Implementation Risks' },
            { id: 'decision-framework', title: 'A Decision Framework for Your Ecommerce Business' },
            { id: 'the-actual-fit-question', title: 'The Actual Fit Question' },
            { id: 'faq', title: 'Frequently Asked Questions' }
      ];

      const klaviyoComparisonData = [
            { capability: 'Core design', ghl: 'General CRM + workflow automation', klaviyo: 'Purpose-built ecommerce marketing platform' },
            { capability: 'Shopify data', ghl: 'Native integration (customers, orders, revenue)', klaviyo: 'Native, ecommerce-specific data model' },
            { capability: 'Abandoned cart', ghl: 'Native for Shopify; integration-dependent for WooCommerce', klaviyo: 'Native, purpose-built' },
            { capability: 'Sales pipeline / opportunities', ghl: 'Native CRM feature', klaviyo: 'Not a core capability' },
            { capability: 'SMS + email in one platform', ghl: 'Yes, native', klaviyo: 'Yes, native' },
            { capability: 'Lead nurture before purchase', ghl: 'Native (forms, workflows, pipelines)', klaviyo: 'Limited outside of email flows' },
            { capability: 'Product-level segmentation depth', ghl: 'Basic, built from synced order/tag data', klaviyo: 'Deep, ecommerce-native' },
      ];

      const nativeVsIntegrationData = [
            { useCase: 'Shopify customer/order sync', nativeToGHL: 'Yes', requires: 'Shopify custom app + Admin API token' },
            { useCase: 'Shopify abandoned checkout recovery', nativeToGHL: 'Yes', requires: 'Same native Shopify integration' },
            { useCase: 'WooCommerce customer/order sync', nativeToGHL: 'No', requires: 'Zapier, Make, webhook, or third-party plugin' },
            { useCase: 'WooCommerce abandoned checkout', nativeToGHL: 'No', requires: 'Depends entirely on the integration path chosen' },
            { useCase: 'Order-to-pipeline mapping', nativeToGHL: 'Yes (Shopify)', requires: 'Configured during Shopify integration setup' },
            { useCase: 'Product catalog / inventory', nativeToGHL: 'No', requires: 'Stays in Shopify/WooCommerce; not a GoHighLevel function' },
            { useCase: 'Post-purchase email/SMS workflows', nativeToGHL: 'Yes', requires: 'Standard GoHighLevel workflow engine, once order data exists' },
      ];

      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
                  <Link
                        // onClick={handleOpenBooking}
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel CRM for Ecommerce: What It Can and Can't Do</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Ecommerce</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">CRM</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel CRM for Ecommerce Businesses:<br />
                                    <span className="text-[#F8D000]">What It Can and Can't Do</span>
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
                                    Can GoHighLevel work as an ecommerce CRM? <strong className="text-white">Yes, as a CRM and customer-automation layer that sits alongside your ecommerce platform, not in place of it.</strong> GoHighLevel doesn't run your storefront, catalog, checkout, or inventory Shopify or WooCommerce still does that. What it can do is take the customer and order data those platforms generate and turn it into segmented, automated follow-up: post-purchase sequences, abandoned-checkout recovery, winback campaigns, and, for stores that involve any sales conversation before or after the purchase, an actual sales pipeline. Whether that's worth adding to your stack depends on how much of your ecommerce business runs on relationship and follow-up versus pure transactional volume.
                              </p>

                              <div className="flex flex-wrap gap-3">
                                    <Link
                                          href="/contact"
                                          className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
                                    >
                                          <Rocket className="w-4 h-4" />
                                          Get Ecommerce CRM Advice
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                          href="#decision-framework"
                                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                                    >
                                          See Decision Framework
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
                                                5+ years GHL experience · 200+ systems built globally. All integration details verified as of September 2026.
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
                                          <div className="text-sm font-bold text-white mb-2">Need Ecommerce CRM Help?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">We help ecommerce businesses evaluate and set up GoHighLevel for CRM and automation.</p>
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

                                    {/* Section: How GoHighLevel Fits */}
                                    <h2 id="how-gohighlevel-fits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          How GoHighLevel Fits Into an Ecommerce CRM and Automation Stack
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The architecture is straightforward once it's explicit: your ecommerce platform (Shopify or WooCommerce) remains the system of record for products, orders, inventory, and payments. GoHighLevel sits downstream of it as the customer relationship and automation layer receiving customer and order events, organizing them into contact records, and triggering communication and sales workflows based on what happens.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The flow looks like: <strong className="text-[#0E9BF0]">ecommerce platform event (new customer, new order, checkout started) → integration → GoHighLevel contact record → segmentation/tagging → workflow → email/SMS/pipeline action → customer outcome.</strong> Nothing about a purchase, a product, or inventory lives natively inside GoHighLevel in this model it lives in Shopify or WooCommerce, and GoHighLevel works with a copy of the relevant data once it arrives.
                                    </p>

                                    {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
                                    <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                          <div className="relative w-full h-auto bg-[#F8F9FB]">
                                                <Image
                                                      src="/blog/gohighlevel-crm-for-ecommerce.png"
                                                      alt="GoHighLevel CRM for Ecommerce: How GoHighLevel fits alongside Shopify and WooCommerce as a CRM and automation layer"
                                                      width={1200}
                                                      height={500}
                                                      className="w-full h-auto object-cover"
                                                      priority
                                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                                />
                                          </div>
                                          <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                                                <ImageIcon className="w-3.5 h-3.5" />
                                                <span>GoHighLevel CRM for Ecommerce: How GoHighLevel fits alongside Shopify and WooCommerce as a CRM and automation layer</span>
                                          </div>
                                    </div>

                                    {/* Section: Is It Actually Ecommerce CRM */}
                                    <h2 id="is-it-actually-ecommerce-crm" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Is GoHighLevel Actually an Ecommerce CRM, or a General CRM Ecommerce Businesses Use?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This distinction matters more than it sounds. A CRM built specifically for ecommerce typically ships with product-level purchase history, native abandoned-cart tracking, and purpose-built ecommerce segmentation out of the box. GoHighLevel is a general-purpose CRM and automation platform contacts, opportunities, pipelines, tags, custom fields, workflows that becomes ecommerce-relevant once connected to a store.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          That's not a disqualifier, but it changes what "using GoHighLevel for ecommerce" actually means in practice: you're not getting a purpose-built ecommerce CRM's default reporting and segmentation, you're building ecommerce-specific automation on top of general CRM primitives, using whatever order and customer data your integration passes through.
                                    </p>

                                    {/* Section: Shopify vs WooCommerce */}
                                    <h2 id="shopify-vs-woocommerce" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          GoHighLevel's Native Shopify Integration vs. Its Non-Native WooCommerce Connection
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is the single clearest technical distinction in the whole evaluation, and it's worth getting right before anything else.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">Shopify has a native, officially supported GoHighLevel integration.</strong> It connects via a Shopify custom app and Admin API access token at the sub-account level, and HighLevel's own documentation confirms it handles customer sync (new and updated customers into Contacts), order sync (order details, values, products), revenue tracking for reporting, optional mapping of orders to pipelines/opportunities with configurable handling for paid, pending, and refunded orders, <strong className="text-[#1A2236]">abandoned checkout recovery</strong>, and Shopify variables usable inside emails and SMS once a Shopify-based workflow fires.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">WooCommerce has no equivalent native integration.</strong> Every credible source on this including GoHighLevel's own integration ecosystem writers agrees it has to be connected through Zapier, Make, GoHighLevel's inbound webhook trigger paired with WooCommerce's native outbound webhooks, or a third-party WordPress plugin. Webhook-based setups are lower latency than polling-based Zapier automations but require more manual field mapping; plugin-based options are convenient but need to be checked for active maintenance, since they can break when either platform updates.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          If your store runs on Shopify, this is a meaningfully more direct setup than if it runs on WooCommerce that's worth knowing before you scope the build.
                                    </p>

                                    {/* Section: What Can It Automate */}
                                    <h2 id="what-can-it-automate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What GoHighLevel Can Actually Automate Once Ecommerce Data Is Connected
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Once customer and order data is flowing in natively from Shopify, or via integration from WooCommerce the automation itself runs on GoHighLevel's standard workflow engine, using the same triggers, filters, and actions that power every other kind of automation on the platform. In practice, that means:
                                    </p>
                                    <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li><strong className="text-[#1A2236]">Post-purchase sequences</strong> order confirmation follow-up, delivery-timed review requests, product education, triggered off the order-sync event.</li>
                                          <li><strong className="text-[#1A2236]">Abandoned checkout recovery</strong> natively supported for Shopify; for WooCommerce, dependent on whatever webhook or plugin path was set up to pass the checkout-started event through.</li>
                                          <li><strong className="text-[#1A2236]">Customer lifecycle segmentation</strong> tagging and custom fields built from purchase count, product category, or order value, used to branch workflows differently for first-time versus repeat customers.</li>
                                          <li><strong className="text-[#1A2236]">Winback/reactivation</strong> workflows triggered by the absence of a new order event within a defined window.</li>
                                          <li><strong className="text-[#1A2236]">Sales pipeline visibility</strong> orders optionally mapped into opportunities and pipeline stages, giving a team a CRM-style view of ecommerce revenue alongside whatever pre-sale nurture is happening.</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          None of this replaces Shopify's or WooCommerce's own order and inventory management it's what happens to the customer relationship once an order event exists.
                                    </p>

                                    {/* Section: Where CRM Layer Matters */}
                                    <h2 id="where-crm-layer-matters" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Where a CRM Layer Matters More: High-Ticket and Sales-Assisted Ecommerce
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Not every ecommerce business needs a CRM in the traditional sense, and this is where GoHighLevel's fit genuinely diverges by business model. A low-touch, low-price storefront product page → cart → checkout → order mostly needs marketing automation and transactional messaging, which is exactly the territory where dedicated ecommerce tools tend to be stronger out of the box.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A store where purchases involve consultation, qualification, custom quoting, or a sales call before the sale closes high-ticket physical products, made-to-order goods, B2B ecommerce, wholesale looks structurally more like: <strong className="text-[#0E9BF0]">lead → qualification → sales process → purchase → post-purchase</strong>, rather than a pure transactional funnel. That's the model a CRM's pipeline, opportunity stages, and lead-nurture workflows are actually built for, and it's where GoHighLevel's general CRM strength becomes a genuine advantage over a purely ecommerce-native marketing tool that has no concept of a sales pipeline at all.
                                    </p>

                                    {/* Section: Where It May Not Replace */}
                                    <h2 id="where-it-may-not-replace" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Where GoHighLevel May Not Replace a Dedicated Ecommerce Marketing Platform
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Being direct about this matters more than covering it briefly. For a high-volume, low-touch Shopify or WooCommerce store, GoHighLevel's own ecosystem including GHL Scale Up's own published comparison content is upfront that dedicated ecommerce marketing platforms like Klaviyo or ActiveCampaign currently offer stronger native abandoned-cart handling, deeper product-based segmentation, and more mature purchase-behavior triggers built specifically for ecommerce data. GoHighLevel's own store builder is explicitly positioned, in GHL Scale Up's own published guidance, as suited to a small catalog or a service business selling a handful of add-on products not as a competitor to Shopify for large catalogs, complex variants, or high order volume.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Where this actually shows up in practice: sophisticated product-level segmentation (browse behavior, specific SKU affinity), advanced merchandising or recommendation logic, and deep ecommerce-specific analytics are areas where a purpose-built ecommerce marketing stack is still likely to outperform a general CRM adapted to the job.
                                    </p>

                                    {/* Section: GoHighLevel vs Klaviyo */}
                                    <h2 id="gohighlevel-vs-klaviyo" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          GoHighLevel vs. Klaviyo for Ecommerce Customer Automation
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Capability</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">GoHighLevel</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#F8D000]">Klaviyo (ecommerce-native)</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {klaviyoComparisonData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.capability}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.ghl}</td>
                                                                  <td className="py-3 px-3 text-[#F8D000]">{item.klaviyo}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Neither platform is universally better the table above is descriptive, not a scorecard. A business needing a CRM and sales pipeline alongside ecommerce automation has a reason to lean toward GoHighLevel; a business needing deep, ecommerce-native segmentation and merchandising-level automation has a reason to lean toward a dedicated tool like Klaviyo.
                                    </p>

                                    {/* Section: Native vs Integration */}
                                    <h2 id="native-vs-integration" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Native vs. Integration-Dependent Ecommerce Capabilities: A Quick Reference
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Ecommerce Use Case</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Native to GoHighLevel?</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What It Actually Requires</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {nativeVsIntegrationData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.useCase}</td>
                                                                  <td className={`py-3 px-3 font-semibold ${item.nativeToGHL === 'Yes' || item.nativeToGHL === 'Yes (Shopify)' ? 'text-[#25C97D]' : 'text-[#DC3545]'}`}>{item.nativeToGHL}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.requires}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: Implementation Risks */}
                                    <h2 id="implementation-risks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Practical Implementation Risks Worth Planning For
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Ecommerce automation is only as reliable as the data feeding it, and a few failure points come up repeatedly regardless of which platform you're connecting:
                                    </p>
                                    <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li><strong className="text-[#1A2236]">Duplicate contacts</strong> from a customer checking out as a guest multiple times with slightly different details.</li>
                                          <li><strong className="text-[#1A2236]">Missing or delayed order data</strong> on WooCommerce setups running through polling-based Zapier plans rather than real-time webhooks.</li>
                                          <li><strong className="text-[#1A2236]">Incorrect order-to-pipeline mapping,</strong> especially around refunded or partially fulfilled orders, if that mapping wasn't deliberately configured.</li>
                                          <li><strong className="text-[#1A2236]">Two systems both acting as "source of truth" for the same customer field,</strong> creating silent conflicts decide upfront which platform owns which data.</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          None of these are reasons to avoid the integration; they're reasons to test it deliberately before relying on it for live customer communication.
                                    </p>

                                    {/* Section: Decision Framework */}
                                    <h2 id="decision-framework" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          A Decision Framework for Evaluating GoHighLevel for Your Ecommerce Business
                                    </h2>

                                    <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-4">
                                          <h3 className="text-base font-bold text-[#25C97D] mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Consider GoHighLevel if your ecommerce business needs:
                                          </h3>
                                          <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                                                <li>A CRM and sales pipeline alongside marketing automation</li>
                                                <li>Lead nurture or qualification before a purchase happens</li>
                                                <li>SMS and email in one platform rather than several separate tools</li>
                                                <li>High-ticket, custom, or sales-assisted ecommerce workflows</li>
                                                <li>A single platform already used for other parts of the business (booking, forms, funnels)</li>
                                          </ul>
                                    </div>

                                    <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-5 my-4">
                                          <h3 className="text-base font-bold text-[#DC3545] mb-3 flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4" />
                                                A dedicated ecommerce platform or marketing tool may be more appropriate if you primarily need:
                                          </h3>
                                          <ul className="space-y-1 text-sm text-[#1A2236] list-disc list-inside">
                                                <li>Deep, ecommerce-native product segmentation and merchandising automation</li>
                                                <li>Large catalog management with complex variants</li>
                                                <li>The most mature, purpose-built abandoned-cart and browse-behavior automation available</li>
                                                <li>High order volume with minimal sales-assisted touchpoints</li>
                                          </ul>
                                    </div>

                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Many ecommerce businesses land in between using Shopify or WooCommerce as the platform of record, GoHighLevel for CRM and follow-up, and accepting that certain deep ecommerce-marketing capabilities may still be better served elsewhere. If you're weighing that build against your current tool stack, <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">GHL Scale Up's integrations work</Link> covers how Shopify, WooCommerce, and other systems connect into a GoHighLevel setup.
                                    </p>

                                    {/* Section: The Actual Fit Question */}
                                    <h2 id="the-actual-fit-question" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          The Actual Fit Question
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          GoHighLevel isn't an ecommerce platform, and it isn't a purpose-built ecommerce marketing tool either it's a general CRM and automation layer that becomes genuinely useful for ecommerce once connected to Shopify (natively) or WooCommerce (via integration). The businesses that get the most out of it are the ones where a sales pipeline, lead nurture, or unified CRM actually matters high-ticket, custom, or sales-assisted stores especially. For high-volume, low-touch transactional stores that mainly need deep ecommerce-native segmentation and merchandising automation, a dedicated tool may still do more of that work natively. The right answer depends on which of those two shapes your business actually is.
                                    </p>

                                    {/* Section: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          Frequently Asked Questions About GoHighLevel for Ecommerce
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
                                          Still unsure if GoHighLevel fits your ecommerce business?{' '}
                                          <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
                                    </div>

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/services/integrations" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Integrations and API Services →</Link>
                                          </div>
                                    </div>

                                    {/* Final CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Evaluating GoHighLevel for Ecommerce?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      We help ecommerce businesses decide if GoHighLevel fits their stack and set up the right integrations.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                                                      Book Your Free Assessment
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
                                                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience helping ecommerce businesses evaluate and set up GoHighLevel for CRM and automation. All integration details verified against official documentation as of September 2026.
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