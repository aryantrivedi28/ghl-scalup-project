// app/services/agency-setup/page.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  XCircle,
  CheckCircle,
  AlertTriangle,
  Check,
  X,
  Building2,
  AlertCircle,
  Rocket,
  Handshake,
} from 'lucide-react';

// Import reusable schema components
import {
  OrganizationSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from '@/lib/schemas';

// Import existing FAQ schema hook
import { useFaqSchema } from '@/hooks/useFaqSchema';

// FAQ data
const faqs = [
  {
    q: 'What happens to my GHL sub-account when I get ejected?',
    a: 'When your agency ejects your sub-account, GoHighLevel creates a brand new agency account for you at the $97 per month Starter plan. Your contacts, pipelines, and conversations transfer to the new account. However, all integrations must be reconnected from scratch — including Google, Facebook, Twilio, Mailgun or LC Email, Stripe, and any third-party tools. Your workflows and automations remain in the account but need to be reviewed and re-tested because the triggers referencing deleted integrations will be broken.',
  },
  {
    q: 'What transfers from my sub-account to my new GHL agency account?',
    a: 'The following data transfers when a sub-account is ejected: all contacts and contact records, pipeline stages and opportunity data, conversations and message history, workflow and automation logic, funnels and websites, forms and surveys, and calendar settings. What does not transfer automatically: all third-party integration connections (Google, Facebook, Stripe, Twilio, Mailgun), SaaS mode configuration, any active subscriptions attached to the sub-account, and agency-level settings. Your integrations all need reconnecting — this is the most time-consuming part of going independent.',
  },
  {
    q: 'Can my old agency still see my data after I leave?',
    a: 'Once the eject or transfer is complete, your old agency no longer has access to your sub-account. The sub-account moves entirely to your new agency account. Your former agency cannot view your contacts, conversations, pipelines, or any data inside the account. However, if they had previously exported your data, that export remains in their possession — GoHighLevel does not retroactively remove exported data.',
  },
  {
    q: 'Do I need to ask my agency to eject me, or can I do it myself?',
    a: 'The eject process must be initiated by the agency — you cannot eject yourself from within the sub-account. You need to ask your current agency to go to Agency Level, find your sub-account, and select Eject to New Agency under the transfer options. They nominate you as the new agency owner and you receive an email to sign up for your own $97 per month account. If your agency is unresponsive or has gone out of business, you need to contact GoHighLevel support directly at support.gohighlevel.com with proof that you are the business owner.',
  },
  {
    q: 'What if my agency has gone out of business and I cannot get ejected?',
    a: 'This is one of the most urgent situations we deal with. If your agency is unresponsive or has closed, your sub-account is technically locked to their defunct agency account. Your immediate options are: contact GoHighLevel support at support.gohighlevel.com with proof that you are the business owner and the agency is no longer operating, or export as much of your data as you can access from within the sub-account before you lose access entirely. GHL Scale Up can help you rebuild your system in a new account even if the formal transfer cannot happen — we work from what you can export and rebuild from there.',
  },
  {
    q: 'How long does GoHighLevel agency account setup take?',
    a: 'A complete GoHighLevel agency account setup for a business moving from a sub-account takes 2 to 3 weeks with GHL Scale Up. This includes reconnecting all integrations, configuring CRM pipelines, rebuilding automation workflows, setting up Twilio for SMS, Mailgun or LC Email for outbound email, Stripe for payments, team user roles, and delivering a full team onboarding session. If you need faster delivery due to an urgent business situation, contact us to discuss priority setup.',
  },
  {
    q: 'How much does GoHighLevel agency setup cost?',
    a: 'GoHighLevel agency account setup with GHL Scale Up starts from $1,500 for a complete end-to-end configuration. This includes all integration reconnections, CRM setup, pipeline configuration, workflow repair and testing, domain setup, user roles, and team training. Projects are fixed price with a full scope document agreed before work begins. No hourly billing. Complex setups involving SaaS mode, white-label configuration, or Shopify integration are scoped separately after a free discovery call.',
  },
  {
    q: 'What GoHighLevel plan do I need for my new independent account?',
    a: 'When you are ejected from a sub-account, GoHighLevel defaults to the Starter plan at $97 per month. For most business owners running their own operations, this is the right starting point. If you want to create sub-accounts for your own clients or use multi-location features, you need the Unlimited plan at $297 per month. If you want to white-label the platform and resell it as your own branded software, you need the Agency Pro plan at $497 per month. We advise on the right plan during the free discovery call based on how you plan to use GHL going forward.',
  },
];

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2.5 max-w-[820px] mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className={`bg-white border border-[#E8EDF4] rounded-xl overflow-hidden ${openIndex === index ? 'open' : ''}`}>
          <button
            className="w-full bg-transparent border-none cursor-pointer flex items-center justify-between py-5 px-6 font-semibold text-[15px] text-[#1C2E4A] text-left gap-4 hover:bg-[#F4F7FA] transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            {faq.q}
            <span className="w-7 h-7 min-w-7 rounded-full bg-[#E6F4FF] text-[#0E9BF0] flex items-center justify-center text-lg font-bold transition-transform flex-shrink-0">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="pt-4 pb-5 px-6 text-[15px] text-[#4A5568] leading-relaxed border-t border-[#E8EDF4]">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AgencySetupPage() {
  useFaqSchema(faqs);

  const transferData = [
    { element: 'Contacts and contact records', transfers: true, breaks: false, needsFresh: false },
    { element: 'Pipeline stages and opportunity data', transfers: true, breaks: false, needsFresh: false },
    { element: 'Conversation history (SMS, email, chat)', transfers: true, breaks: false, needsFresh: false },
    { element: 'Workflow and automation logic', transfers: true, breaks: true, needsFresh: false },
    { element: 'Funnels, websites, and landing pages', transfers: true, breaks: false, needsFresh: false },
    { element: 'Forms and surveys', transfers: true, breaks: false, needsFresh: false },
    { element: 'Calendar settings', transfers: true, breaks: true, needsFresh: false },
    { element: 'Google and Facebook integrations', transfers: false, breaks: true, needsFresh: true },
    { element: 'Twilio SMS configuration', transfers: false, breaks: true, needsFresh: true },
    { element: 'LC Email / Mailgun / SMTP', transfers: false, breaks: true, needsFresh: true },
    { element: 'Stripe payment integration', transfers: false, breaks: true, needsFresh: true },
    { element: 'WhatsApp Business integration', transfers: false, breaks: true, needsFresh: true },
    { element: 'Team users and permissions', transfers: false, breaks: true, needsFresh: true },
    { element: 'Domain and DNS connections', transfers: false, breaks: true, needsFresh: true },
    { element: 'SaaS mode configuration', transfers: false, breaks: true, needsFresh: true },
    { element: 'Active platform subscriptions (Yext, WordPress)', transfers: false, breaks: true, needsFresh: true },
  ];

  return (
    <>
      <OrganizationSchema />
      <ServiceSchema
        name="GoHighLevel Agency Account Setup Service"
        description="End-to-end GoHighLevel agency account setup for business owners moving from a GHL sub-account to their own independent agency account. Includes CRM setup, pipeline configuration, workflow automation, Twilio, Stripe, Mailgun integration, and full team training. Fixed price. Delivered in 2 to 3 weeks."
        url="https://www.ghlscaleup.com/services/agency-setup"
        serviceType={['GoHighLevel Agency Setup', 'GHL Account Configuration', 'Sub-Account Independence', 'GoHighLevel CRM Setup']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.ghlscaleup.com/' },
          { name: 'GHL Services', url: 'https://www.ghlscaleup.com/services' },
          { name: 'GoHighLevel Agency Setup', url: 'https://www.ghlscaleup.com/services/agency-setup' },
        ]}
      />
      <SpeakableSchema cssSelector={['.bluf-block', '.faq-a']} />

      {/* Breadcrumb */}
      <nav className="bg-[#F4F7FA] border-b border-[#E8EDF4] py-3" aria-label="Breadcrumb">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[#8A9BB0] flex-wrap">
            <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">Home</Link>
            <span className="text-[#E8EDF4]">›</span>
            <Link href="/services" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">GHL Services</Link>
            <span className="text-[#E8EDF4]">›</span>
            <span>GoHighLevel Agency Setup</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-[72px] md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1fr_360px] gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-[18px]">
                <div className="w-7 h-0.5 bg-[#F8D000] rounded"></div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#F8D000]">GoHighLevel Agency Setup Service</span>
              </div>
              <h1 className="text-[clamp(28px,3.8vw,44px)] font-extrabold tracking-[-0.5px] leading-[1.13] mb-4">
                GoHighLevel Agency Setup Service
                <span className="text-[#F8D000] block">for Sub-Account Owners Going Independent</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed mb-7 max-w-[540px] pl-4 border-l-[3px] border-[#F8D000]">
                You have just been ejected from your agency's GHL sub-account — or you are about to be. You now have your own $97 per month GoHighLevel account with zero configuration inside it. No pipelines, no automations, no integrations connected. We set up your entire GoHighLevel agency account end-to-end so your business runs from day one. Fixed price. 2 to 3 weeks delivery.
              </p>
              <div className="flex gap-3.5 flex-wrap mb-8">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-[14px] rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                  Book a Free Setup Discovery Call → <ArrowRight size={16} />
                </Link>
                <Link href="#what-we-set-up" className="bg-transparent text-white px-8 py-[14px] rounded-xl text-[15px] font-medium border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all">
                  See What We Configure
                </Link>
              </div>
              <p className="text-[13px] text-white/45 flex items-center gap-2 flex-wrap">
                <span className="text-[#25C97D]">✦</span> 200+ GHL builds delivered
                <span className="text-white/30">·</span> 6 countries
                <span className="text-white/30">·</span> Fixed price, no hourly billing
                <span className="text-white/30">·</span> Zero data loss
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-7">
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-5">What you are dealing with right now</div>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5"><XCircle size={16} className="text-[#FCA5A5] flex-shrink-0 mt-0.5" /><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">No pipelines or workflows</strong>Your new account is completely empty</div></div>
                <div className="flex gap-2.5"><XCircle size={16} className="text-[#FCA5A5] flex-shrink-0 mt-0.5" /><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">Integrations disconnected</strong>Google, Facebook, Twilio, Stripe — all need reconnecting</div></div>
                <div className="flex gap-2.5"><XCircle size={16} className="text-[#FCA5A5] flex-shrink-0 mt-0.5" /><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">Automations not firing</strong>All trigger connections broken from the move</div></div>
                <div className="flex gap-2.5"><XCircle size={16} className="text-[#FCA5A5] flex-shrink-0 mt-0.5" /><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">No email or SMS sending</strong>LC Email, Mailgun, and Twilio need fresh setup</div></div>
                <div className="flex gap-2.5"><XCircle size={16} className="text-[#FCA5A5] flex-shrink-0 mt-0.5" /><div className="text-[13px] text-white/80 leading-relaxed"><strong className="text-white block text-[13px]">Team has no access</strong>User roles and permissions start from scratch</div></div>
              </div>
              <div className="h-px bg-white/10 my-5"></div>
              <div className="text-[13px] text-white/55 text-center">
                <strong className="text-[#25C97D] block text-[15px] font-bold mb-1">GHL Scale Up fixes all of this.</strong>
                End-to-end. Fixed price. Starting from $1,500.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Block & What Happens Section */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="bg-[#E6F4FF] border-l-4 border-[#0E9BF0] rounded-r-xl p-[22px_28px] mb-12">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#0E9BF0] mb-2">What this service is</div>
            <p className="text-base text-[#1A202C] leading-relaxed font-medium">GHL Scale Up configures new GoHighLevel agency accounts for business owners who have moved — or are moving — out of a GHL sub-account. We handle every technical step: reconnecting all integrations, rebuilding your CRM pipelines, configuring automations, setting up Twilio, Stripe, and email delivery, and training your team. You go from a blank account to a fully operational GoHighLevel system in 2 to 3 weeks.</p>
          </div>

          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#E53E3E] bg-[rgba(229,62,62,0.1)] px-3.5 py-1 rounded-full mb-3.5">The Problem</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What Actually Happens the Moment GoHighLevel Ejects Your Sub-Account</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Most people do not know what they are walking into until they log into their new account and see it is completely empty. Here is the reality of what happens technically when GHL ejects a sub-account.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(28,46,74,0.07)]">
              <div className="p-[18px_20px] bg-[rgba(37,201,125,0.08)] border-l-4 border-[#25C97D]">
                <CheckCircle size={24} className="mb-2 text-[#25C97D]" />
                <h3 className="text-[15px] font-bold text-[#25C97D] mb-1.5">What Comes With You</h3>
                <p className="text-[13px] text-[#4A5568] leading-relaxed">Your contacts, pipeline stages, conversation history, existing workflows and automation logic, funnels and websites, forms and surveys, and calendar configurations all transfer to your new account.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(28,46,74,0.07)]">
              <div className="p-[18px_20px] bg-[#FFF5F5] border-l-4 border-[#E53E3E]">
                <XCircle size={24} className="mb-2 text-[#E53E3E]" />
                <h3 className="text-[15px] font-bold text-[#E53E3E] mb-1.5">What Breaks Immediately</h3>
                <p className="text-[13px] text-[#4A5568] leading-relaxed">Every integration disconnects. Google, Facebook, Stripe, Twilio, Mailgun, WhatsApp, Quickbooks — all authentication is severed the moment the sub-account moves. Your automations reference broken connections and stop firing.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(28,46,74,0.07)]">
              <div className="p-[18px_20px] bg-[#FFFBEB] border-l-4 border-[#D69E2E]">
                <AlertTriangle size={24} className="mb-2 text-[#D69E2E]" />
                <h3 className="text-[15px] font-bold text-[#D69E2E] mb-1.5">What You Must Set Up Fresh</h3>
                <p className="text-[13px] text-[#4A5568] leading-relaxed">Twilio for SMS, LC Email or Mailgun for outbound email, Stripe for payments, all Facebook and Google ad integrations, user roles and team permissions, sub-account-level domain connections, and SaaS mode if applicable.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#FFF5F5] border-l-4 border-[#E53E3E] rounded-r-xl p-[18px_22px]">
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#E53E3E] mb-1.5">Critical — Read Before You Cancel Your Agency</div>
            <p className="text-[15px] text-[#742A2A] leading-relaxed font-medium">Do not cancel your relationship with your current agency until your new GHL account is fully set up and tested. If your agency closes or becomes unresponsive before the eject is complete, your sub-account becomes locked and GoHighLevel support is the only route to recovery. Book a discovery call before you make any changes.</p>
          </div>
        </div>
      </section>

      {/* What Transfers Table */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Data Transfer</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What Transfers from Your Sub-Account — and What We Configure from Scratch</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Understanding this list before you move saves weeks of confusion after. Every item below is based on GoHighLevel's documented eject and transfer behaviour confirmed in 2026.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-4 text-left text-[13px] font-bold">GHL Element</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#25C97D]">Transfers to New Account</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#FCA5A5]">Breaks on Transfer</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#F8D000]">Needs Fresh Setup</th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((item, index) => (
                  <tr key={index} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                    <td className="p-4 text-[#1A202C] font-semibold border-r border-[#E8EDF4]">{item.element}</td>
                    <td className="p-4 text-[#25C97D] font-semibold">{item.transfers ? <Check size={14} className="inline mr-1" /> : ''}{item.transfers ? 'Transfers' : ''}</td>
                    <td className="p-4 text-[#E53E3E] font-semibold">{item.breaks ? <X size={14} className="inline mr-1" /> : ''}{item.breaks ? 'Breaks' : ''}</td>
                    <td className="p-4 text-[#D69E2E] font-semibold">{item.needsFresh ? 'Needs fresh setup' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-[#1C2E4A]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000]/20 px-3.5 py-1 rounded-full mb-3.5">Who This Is For</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-white leading-[1.22] tracking-[-0.4px] mb-3">Who GHL Scale Up Sets Up New Agency Accounts For</h2>
            <p className="text-base text-white/65 leading-relaxed">You do not need to be a tech expert or know anything about GoHighLevel configuration. You just need to be in one of these situations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Most Common</div>
              <Building2 size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Business Owners Leaving an Agency Sub-Account</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">You have been running your business from inside your marketing agency's GHL sub-account for 1 to 3 years. You want full independence — your own account, your own data, your agency has no access. You have been ejected or are about to be, and your new account is empty.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Urgent</div>
              <AlertCircle size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Clients Whose Agency Has Closed or Gone Silent</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">Your agency went out of business, stopped responding, or changed their model. Your sub-account is locked. You need a new GHL account set up from scratch as fast as possible because your business is running on an account you cannot fully control.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Ready to Scale</div>
              <Rocket size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Freelancers and VAs Starting Their Own GHL Agency</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">You have been doing GHL work inside other agencies' accounts. You know the platform but you have never set up your own account from the agency level. You want to start taking your own clients and need your own properly configured GHL agency account.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#F8D000]/30 hover:-translate-y-1 transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#F8D000] bg-[rgba(248,208,0,0.12)] px-2.5 py-1 rounded-full mb-2">Agency Side</div>
              <Handshake size={26} className="text-[#F8D000] mb-3" />
              <h3 className="text-[15px] font-bold text-white mb-1.5">Agencies Ejecting a Client Who Needs Setup Help</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">You are an agency ejecting a client sub-account. You earn 40% affiliate commission on their new $97/month plan. But your client needs someone to configure their new empty account. Refer them to GHL Scale Up and we handle the full setup — you keep the relationship and the commission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Set Up - Deliverables */}
      <section className="py-20 bg-white" id="what-we-set-up">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Deliverables</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">Everything We Configure in Your New <span className="text-[#0E9BF0]">GoHighLevel Agency Account</span></h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3.5">We do not hand you a setup checklist and leave you to it. We build everything inside your account, test every component, and hand over a fully operational system with your team trained and ready.</p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every setup starts with a discovery call where we review your previous sub-account situation, understand how your business operates, and map out exactly what needs to be built before we touch a single setting.</p>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Everything is built and tested before handover — no half-configured systems</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Both your old sub-account (if accessible) and new account reviewed before we start</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Fixed price agreed in writing — no billing surprises</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Team training included so your people can operate the account from day one</span></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🔌</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Integration Reconnections</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Google, Facebook, Stripe at sub-account level, Twilio A2P registration, Mailgun or LC Email — all reconnected and tested</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🗂️</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">CRM Pipelines Rebuilt</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Pipeline stages recreated to match your sales process, opportunity automation attached to each stage, smart lists configured</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">⚡</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Automation Workflows Fixed</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Every workflow reviewed, broken trigger connections repaired, speed-to-lead sequences tested end-to-end</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📱</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Twilio SMS Setup</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Twilio account registered or reconnected, A2P 10DLC campaign registration handled, test messages sent before handover</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">📧</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Email Sending Configuration</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">LC Email activated or Mailgun connected under your domain, SPF, DKIM and DMARC records configured, deliverability tested</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">👥</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">User Roles and Permissions</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Team members added with correct role levels, admin access configured, conversation assignments and round-robin routing set up</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🌐</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Domain and DNS Setup</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Your own domain connected to GHL, funnel and website URLs updated, calendar links updated with new account domain</span></div></div>
              <div className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm"><div className="text-xl flex-shrink-0 mt-0.5">🎓</div><div><strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">Team Training Session</strong><span className="text-[13px] text-[#4A5568] leading-relaxed">Live onboarding covering pipeline management, inbox handling, workflow overview, and calendar management inside your new GHL account</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps + Pricing */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Left Column - Process Steps */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Our Process</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">How We Set Up Your New <span className="text-[#0E9BF0]">GoHighLevel Agency Account</span> — 5 Steps</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every setup follows the same five-step process. Each step is completed and confirmed before the next begins so you always know exactly where your account stands.</p>
              <div className="flex flex-col">
                {[
                  { num: 1, title: 'Discovery Call and Account Review', desc: 'We review your situation — whether you have been ejected, are about to be, or are starting fresh. We look at your previous sub-account setup if accessible, understand your business workflow, and define exactly what needs to be built. You receive a fixed-price scope document before any work begins.', tag: 'Before any payment — Free' },
                  { num: 2, title: 'Account Audit and Integration Reconnections', desc: 'We access your new GHL agency account and systematically reconnect every broken integration — Google, Facebook, Stripe at sub-account level, Twilio with A2P 10DLC registration, and email sending via LC Email or Mailgun. We document every reconnection before moving on.', tag: 'Day 1 to 3' },
                  { num: 3, title: 'CRM Build, Pipeline Setup, and Workflow Repair', desc: 'We rebuild your CRM pipelines to match your sales process, repair every broken workflow trigger, configure automation sequences, set up user roles and team permissions, connect your domain, and update all calendar and funnel URLs to point to your new account.', tag: 'Day 3 to 10' },
                  { num: 4, title: 'End-to-End Testing', desc: 'Every workflow is triggered and tested in a live environment. Test SMS messages sent and received. Test emails checked for deliverability and inbox landing. Every form submission tested end-to-end through the pipeline. Calendar bookings tested with reminder automations. No component goes live untested.', tag: 'Day 10 to 14' },
                  { num: 5, title: 'Handover, Training, and Go-Live', desc: 'Your team receives a live training session covering pipeline management, the unified conversation inbox, workflow overview, and calendar handling. We deliver written documentation mapping every part of your new setup. Your account is fully operational and your team knows how to run it.', tag: 'Day 14 to 21' },
                ].map((step) => (
                  <div key={step.num} className="relative pl-14 pb-9 last:pb-0 border-l-2 border-[#E8EDF4] ml-[25px]">
                    <div className="absolute left-[-23px] top-0 w-[42px] h-[42px] rounded-full bg-[#1C2E4A] border-2.5 border-[#F8D000] flex items-center justify-center text-[14px] font-extrabold text-[#F8D000]">{step.num}</div>
                    <div className="inline-block text-[11px] font-semibold text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-1.5">{step.tag}</div>
                    <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                    <p className="text-[14px] text-[#4A5568] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Pricing */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Pricing</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">GoHighLevel Agency Setup Pricing — <span className="text-[#0E9BF0]">Fixed Price</span>, No Hourly Billing</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Every setup project is fixed price with a scope document agreed before work starts. No hourly billing. No scope creep.</p>
              <div className="bg-white border border-[#E8EDF4] rounded-2xl p-8 shadow-[0_4px_28px_rgba(28,46,74,0.08)]">
                <div className="text-[12px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-2">Complete GHL Agency Account Setup</div>
                <div className="text-[56px] font-extrabold text-[#1C2E4A] leading-none mb-1.5">$1,500 <span className="text-[20px] font-normal text-[#8A9BB0]">USD</span></div>
                <div className="text-[13px] text-[#8A9BB0] mb-6">One-time fixed fee. Delivered in 2 to 3 weeks.</div>
                <div className="h-px bg-[#E8EDF4] mb-5"></div>
                <div className="flex flex-col gap-2.5 mb-7">
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>All integrations reconnected (Google, Facebook, Twilio, Stripe, Mailgun)</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>CRM pipelines and opportunity stages configured</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Workflow automation review, repair, and testing</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Domain setup, user roles, and team permissions</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>End-to-end testing of all components</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Team training session and handover documentation</div>
                </div>
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] w-full justify-center inline-flex items-center gap-2 py-4 px-8 rounded-xl text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all mb-3.5">
                  Book a Free Discovery Call → <ArrowRight size={16} />
                </Link>
                <p className="text-[12px] text-[#8A9BB0] text-center">Complex setups (SaaS mode, white-label, Shopify integration) are scoped separately after the discovery call.</p>
              </div>

              <div className="mt-5">
                <p className="text-[13px] font-bold text-[#1C2E4A] mb-3">Which GoHighLevel plan do you need?</p>
                <div className="flex flex-col gap-3">
                  <div className="bg-[#F4F7FA] rounded-xl p-4"><div className="text-[14px] font-bold text-[#1C2E4A] mb-0.5">Starter Plan</div><div className="text-xl font-extrabold text-[#0E9BF0] mb-1">$97/mo</div><div className="text-[12px] text-[#8A9BB0] leading-relaxed">You run one business. No need to manage client sub-accounts. Most ejected sub-account owners start here.</div></div>
                  <div className="bg-[#F4F7FA] rounded-xl p-4"><div className="text-[14px] font-bold text-[#1C2E4A] mb-0.5">Unlimited Plan</div><div className="text-xl font-extrabold text-[#0E9BF0] mb-1">$297/mo</div><div className="text-[12px] text-[#8A9BB0] leading-relaxed">You want to create sub-accounts for your own clients or manage multiple locations.</div></div>
                  <div className="bg-[#F4F7FA] rounded-xl p-4"><div className="text-[14px] font-bold text-[#1C2E4A] mb-0.5">Agency Pro (SaaS)</div><div className="text-xl font-extrabold text-[#0E9BF0] mb-1">$497/mo</div><div className="text-[12px] text-[#8A9BB0] leading-relaxed">You want to white-label GHL and resell it as your own branded software to clients.</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#25C97D] bg-[rgba(37,201,125,0.12)] px-3.5 py-1 rounded-full mb-3.5">Why GHL Scale Up</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">GHL Scale Up Sets Up GoHighLevel Accounts That Actually Work</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">We do not configure accounts and leave you to figure out why something is broken two weeks later. Every setup is tested before handover.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">200+</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">GHL Accounts Configured and Delivered</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">0</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Setups Delivered with Broken Integrations</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">6</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Countries — US, UK, UAE, AU, SG, IN</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">2-3wks</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Average Delivery from Brief to Live Account</div></div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Free Discovery Call</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Your New GoHighLevel Account Is Empty.<br /><span className="text-[#F8D000]">We Fill It in 2 to 3 Weeks.</span></h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">Book a free 30-minute discovery call. We review your account situation, tell you exactly what needs to be configured, and give you a fixed price before any work starts.</p>
          <p className="text-[13px] text-white/40 mb-8">No commitment required. No automated follow-up. Aryan responds personally within a few hours.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
              Book a Free Discovery Call → <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Mail size={14} /> <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Phone size={14} /> <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><MessageCircle size={14} /> <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">FAQ</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">GoHighLevel Sub-Account to Agency Account — Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5568] leading-relaxed max-w-[620px] mx-auto">Every question below comes from real sub-account owners who have been through this process. Answers are specific to the eject and transfer situation.</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Read Our Articles */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Further Reading</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Read Our Articles on GHL Sub-Account Independence</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Research-backed guides on moving from a GHL sub-account to your own agency account, understanding the eject process, and setting up GHL from scratch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/ghl-sub-account-to-own-agency-account" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Step-by-Step Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">How to Move from a GHL Sub-Account to Your Own Agency Account (2026)</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">The complete process for going independent — from requesting the eject to what to configure first in your new account.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the step-by-step guide → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/how-to-eject-ghl-sub-account" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Complete Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">How to Eject a GoHighLevel Sub-Account: The Complete Guide for Agencies and Clients</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">What happens technically when a sub-account is ejected, what the receiving user must do next, and what breaks in the process.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the eject guide → <ArrowRight size={12} /></span>
            </Link>
            <Link href="/blog/what-happens-ghl-sub-account-agency-closes" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Urgent Scenario</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">What Happens to Your GHL Sub-Account If Your Agency Closes?</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">What your options are if the agency holding your sub-account goes out of business, becomes unresponsive, or stops cooperating.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the recovery guide → <ArrowRight size={12} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Once Your Account Is Set Up — What Comes Next</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Most clients who come to us for agency account setup go on to expand their GHL system within 60 days. Here is what they add.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services/migration" className="bg-[#0E9BF0] text-white px-[22px] py-3 rounded-xl text-[14px] font-semibold inline-flex items-center gap-2 hover:bg-[#0a88d8] hover:-translate-y-[2px] transition-all">GHL Migration Services →</Link>
            <Link href="/blog/gohighlevel-white-label" className="bg-[#0E9BF0] text-white px-[22px] py-3 rounded-xl text-[14px] font-semibold inline-flex items-center gap-2 hover:bg-[#0a88d8] hover:-translate-y-[2px] transition-all">GoHighLevel White Label Setup →</Link>
            <Link href="/blog/gohighlevel-for-agencies" className="bg-[#0E9BF0] text-white px-[22px] py-3 rounded-xl text-[14px] font-semibold inline-flex items-center gap-2 hover:bg-[#0a88d8] hover:-translate-y-[2px] transition-all">GoHighLevel for Agencies →</Link>
            <Link href="/services" className="bg-[#0E9BF0] text-white px-[22px] py-3 rounded-xl text-[14px] font-semibold inline-flex items-center gap-2 hover:bg-[#0a88d8] hover:-translate-y-[2px] transition-all">View All GHL Services →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Get Your Account Configured</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Book a Free Call with a <span className="text-[#F8D000]">GoHighLevel Setup Expert</span></h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">Tell us about your sub-account situation. Aryan personally reviews every inquiry and responds within a few hours — via phone or email, not an automated sequence.</p>
          <p className="text-[13px] text-white/40 mb-8">Free discovery call. Fixed price agreed before work starts. No commitment required.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
              Book a Free Discovery Call → <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="bg-transparent text-white px-10 py-4 rounded-xl text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              View All GHL Services
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Mail size={14} /> <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><Phone size={14} /> <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5"><MessageCircle size={14} /> <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </section>
    </>
  );
}