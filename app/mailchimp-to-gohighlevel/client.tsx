// app/mailchimp-to-gohighlevel/client.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'What happens to Mailchimp unsubscribes when I migrate to GoHighLevel?',
      a: 'Every contact marked as unsubscribed, cleaned, or non-subscribed in Mailchimp must be imported into GoHighLevel as Email DND (Do Not Disturb) before any email is sent through GHL. This is not optional it is a legal requirement under CAN-SPAM and GDPR. Sending an email through GHL to a contact who previously unsubscribed from your Mailchimp list is a compliance violation regardless of which platform sends it. GHL Scale Up processes all unsubscribe data before the subscriber import runs no contact is ever emailed through GHL who has not consented to receive email from you.',
    },
    {
      q: 'How does the Mailchimp Audience model translate to GoHighLevel?',
      a: 'Mailchimp organises contacts in separate Audiences the same person in your main list and your lead magnet list are treated as entirely separate records, even if they share the same email address. GoHighLevel uses a single unified contact database where all contacts live together, segmented by tags and smart lists. When migrating multiple Mailchimp Audiences to GHL, the same person can appear in multiple exports as duplicate rows. GHL Scale Up de-duplicates contacts across all exported Audiences before import, merging Audience memberships and tags from each Audience onto a single GHL contact record.',
    },
    {
      q: 'Can Mailchimp Customer Journeys be imported into GoHighLevel?',
      a: 'No. Mailchimp Customer Journeys cannot be exported and imported into GoHighLevel. Each automation welcome series, nurture sequences, re-engagement flows, conditional branches must be manually rebuilt inside GHL\'s workflow builder. GHL Scale Up documents every Customer Journey before migration and rebuilds each one natively in GHL, including email timing, conditional branches, goal steps, and exit conditions. Rebuilding automations is typically the most time-consuming part of any Mailchimp migration.',
    },
    {
      q: 'Will my email deliverability drop when I move from Mailchimp to GoHighLevel?',
      a: 'Mailchimp is known for strong inbox placement because of its mature shared IP reputation and strict compliance enforcement. When you move to GoHighLevel\'s sending infrastructure, your domain needs to re-establish its reputation with inbox providers. GHL Scale Up includes SPF, DKIM, and DMARC configuration and a structured email domain warm-up as part of every Mailchimp migration starting at 50 to 100 emails per day and scaling to full volume over 2 to 3 weeks. We also clean your list before migration to remove bounces and inactive subscribers, which protects your new sending reputation from the start.',
    },
    {
      q: 'What is the difference between Mailchimp Audiences and GoHighLevel tags?',
      a: 'A Mailchimp Audience is a siloed list where contacts exist independently the same email address in two different Audiences is treated as two separate records. GoHighLevel uses a single contact database where everyone lives together, with tags and smart lists for segmentation. When migrating, each Mailchimp Audience becomes a GHL tag applied to the imported contacts. If someone was in three different Mailchimp Audiences, they get three corresponding tags in GHL and exist as a single unified contact record which is actually more efficient for targeting and automation than Mailchimp\'s siloed approach.',
    },
    {
      q: 'Does GoHighLevel replace everything Mailchimp does?',
      a: 'GoHighLevel replaces Mailchimp\'s core email marketing functionality contact management, email campaign sending, list segmentation, automation, signup forms, and landing pages. GHL goes significantly further with two-way SMS, AI voice agents, CRM pipelines, appointment booking, reputation management, and white-label SaaS mode. The one area where Mailchimp still has an advantage for certain businesses is its native Shopify integration product block email elements, purchase history segmentation, and per-campaign revenue reporting are more refined in Mailchimp. For heavy Shopify e-commerce businesses, we flag this on the assessment call and confirm whether GHL\'s Shopify integration meets your specific needs.',
    },
    {
      q: 'How long does a Mailchimp to GoHighLevel migration take?',
      a: 'A standard Mailchimp to GoHighLevel migration takes 2 to 3 weeks. A simple migration with one Audience, under 5,000 contacts, and fewer than 5 Customer Journeys takes 1 to 2 weeks. A complex migration with multiple Audiences, large lists, and 15+ Customer Journeys takes 3 to 4 weeks. Mailchimp migrations are typically the fastest in our portfolio because there is no complex CRM data model translation required the main time factors are Customer Journey rebuild count and list volume.',
    },
    {
      q: 'Should I clean my Mailchimp list before migrating to GoHighLevel?',
      a: 'Yes. Before migrating, remove hard bounces, soft bounce contacts with multiple failures, and contacts who have not engaged in 12 or more months from your export. Importing a dirty list into GHL damages your new sending reputation immediately. GHL Scale Up reviews your Mailchimp audience health report during the assessment call and advises specifically on which contacts to migrate and which to exclude. A cleaner list imported into GHL consistently produces better deliverability than a large, unclean list which is the opposite of what most businesses assume.',
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F4F7FA] border-b border-[#E8EDF4] py-3" aria-label="Breadcrumb">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="flex items-center gap-2 text-[13px] text-[#8A9BB0] flex-wrap">
            <Link href="/" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">Home</Link>
            <span className="text-[#E8EDF4]">›</span>
            <Link href="/services/migration" className="text-[#0E9BF0] hover:text-[#1C2E4A] transition">GHL Migration Services</Link>
            <span className="text-[#E8EDF4]">›</span>
            <span>Mailchimp to GoHighLevel</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-[72px] md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1fr_360px] gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-[18px]">
                <div className="w-7 h-0.5 bg-[#F8D000] rounded"></div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#F8D000]">Mailchimp to GoHighLevel Migration</span>
              </div>
              <h1 className="text-[clamp(28px,3.8vw,44px)] font-extrabold tracking-[-0.5px] leading-[1.13] mb-4">
                Mailchimp to GoHighLevel
                <span className="text-[#F8D000] block">Migration Service</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed mb-7 max-w-[540px] pl-4 border-l-[3px] border-[#F8D000]">
                We migrate your Mailchimp contacts, audiences, tags, and automations into GoHighLevel with full unsubscribe compliance processed before any email is sent. We de-duplicate contacts across multiple Mailchimp Audiences, rebuild every Customer Journey in GHL workflows, and manage a structured domain warm-up to protect deliverability. No compliance risk. No data loss. Fixed price.
              </p>
              <div className="flex gap-3.5 flex-wrap mb-8">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-[14px] rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                  Book a Free Migration Assessment → <span className="text-lg">→</span>
                </Link>
                <Link href="#compliance" className="bg-transparent text-white px-8 py-[14px] rounded-xl text-[15px] font-medium border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all">
                  See How We Handle Unsubscribes
                </Link>
              </div>
              <p className="text-[13px] text-white/45 flex items-center gap-2 flex-wrap">
                <span className="text-[#25C97D]">✦</span> 200+ GHL builds and migrations delivered
                <span className="text-white/30">·</span> Zero compliance violations across all migrations
                <span className="text-white/30">·</span> 6 countries served
                <span className="text-white/30">·</span> Fixed price, no hourly billing
              </p>
            </div>

            {/* Hero Card */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-7">
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#F8D000] mb-5">Mailchimp pricing scales steeply GHL does not</div>
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                  <span className="text-[12px] text-white/65">Mailchimp Standard 500 contacts</span>
                  <span className="text-[13px] font-bold text-white">$13/mo</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                  <span className="text-[12px] text-white/65">Mailchimp Standard 5,000 contacts</span>
                  <span className="text-[13px] font-bold text-white">$75/mo</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-2.5">
                  <span className="text-[12px] text-white/65">Mailchimp Standard 20,000 contacts</span>
                  <span className="text-[13px] font-bold text-white">$230/mo</span>
                </div>
                <div className="flex justify-between items-center bg-[rgba(229,62,62,0.1)] border border-[rgba(229,62,62,0.2)] rounded-lg p-2.5">
                  <span className="text-[12px] text-[#FCA5A5]">Mailchimp Premium unlimited seats</span>
                  <span className="text-[13px] font-bold text-[#FCA5A5]">$350/mo</span>
                </div>
                <div className="flex justify-between items-center bg-[rgba(37,201,125,0.1)] border border-[rgba(37,201,125,0.2)] rounded-lg p-2.5">
                  <span className="text-[12px] text-[#25C97D]">GoHighLevel Unlimited unlimited contacts, unlimited users</span>
                  <span className="text-[13px] font-bold text-[#25C97D]">$297/mo</span>
                </div>
              </div>
              <div className="h-px bg-white/10 my-5"></div>
              <div className="text-[13px] text-white/55 text-center">
                <strong className="text-[#25C97D] block text-[15px] font-bold mb-1">GHL at $297 flat beats Mailchimp Standard at 20k contacts.</strong>
                And GHL adds CRM, SMS, AI, funnels, and booking. Migration from $1,500.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Block */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="bg-[#E6F4FF] border-l-4 border-[#0E9BF0] rounded-r-xl p-[22px_28px] mb-12">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#0E9BF0] mb-2">What this service is</div>
            <p className="text-base text-[#1A202C] leading-relaxed font-medium">GHL Scale Up migrates businesses from Mailchimp to GoHighLevel exporting all Mailchimp Audiences with tags, groups, and merge fields, de-duplicating contacts across multiple Audiences, processing all unsubscribes as Email DND in GHL before a single email is sent, rebuilding Customer Journey automations in GHL workflows, migrating email templates, and managing a structured domain warm-up to protect your sending reputation. Standard migrations deliver in 2 to 3 weeks at a fixed price. Mailchimp stays live throughout no downtime.</p>
          </div>

          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Why Businesses Switch</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Why Mailchimp Users Move to GoHighLevel</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Mailchimp is where most businesses start with email marketing. It is accessible, easy, and generous on the free tier. The limitations become apparent once your list grows past free, your automation needs exceed basic Customer Journeys, or you need a CRM alongside your email tool.</p>
          </div>

          <div className="bg-[#E6F4FF] border-l-4 border-[#0E9BF0] rounded-r-xl p-[18px_22px]">
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-1.5">The core limitation of Mailchimp for growing businesses</div>
            <p className="text-[15px] text-[#1A202C] leading-relaxed font-medium">Mailchimp is an email-first platform. It has no native CRM pipeline, no two-way SMS, no AI voice agents, no appointment booking, no reputation management, and no white-label capability. Every tool you add alongside Mailchimp a CRM, a texting tool, a calendar, a funnel builder is another subscription, another login, and another manual integration. GoHighLevel replaces Mailchimp and the entire stack you have built around it.</p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="py-20 bg-[#F4F7FA]" id="compliance">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#E53E3E] bg-[rgba(229,62,62,0.1)] px-3.5 py-1 rounded-full mb-3.5">Legal Compliance Priority</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">The Most Important Step in Any Mailchimp Migration Unsubscribe Compliance</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Every unsubscribed, cleaned, or non-subscribed contact in Mailchimp must be marked as Email DND in GoHighLevel before you send a single email. This is not optional. It is a legal requirement under CAN-SPAM and GDPR. Skipping this step and accidentally emailing an unsubscribed contact is a compliance violation regardless of which platform sends it.</p>
          </div>

          <div className="bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.07)] mb-8">
            <div className="bg-[#E53E3E] py-4 px-6">
              <p className="text-sm font-bold text-white">The compliance step sequence in this exact order, before any email sends in GHL</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {[
                { num: 1, title: 'Export Unsubscribes First', desc: 'Before exporting active subscribers, export all contacts with status "Unsubscribed" and "Cleaned" from every Mailchimp Audience' },
                { num: 2, title: 'Import as Email DND', desc: 'Import the unsubscribe CSV into GHL with the "Mark as Email DND" option activated these contacts can never be emailed through GHL' },
                { num: 3, title: 'Verify DND Status', desc: 'Spot-check 50 unsubscribed contacts in GHL to confirm Email DND is active on each record before proceeding with subscriber import' },
                { num: 4, title: 'Then Import Subscribers', desc: 'Only after unsubscribes are confirmed DND do active subscriber imports begin preventing any risk of emailing an unsubscribed contact' },
              ].map((step) => (
                <div key={step.num} className="p-6 text-center border-r border-[#E8EDF4] last:border-r-0">
                  <div className="w-9 h-9 rounded-full bg-[#E53E3E] text-white text-sm font-extrabold flex items-center justify-center mx-auto mb-3">{step.num}</div>
                  <h3 className="text-[13px] font-bold text-[#1A202C] mb-1.5">{step.title}</h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FFF5F5] border-l-4 border-[#E53E3E] rounded-r-xl p-[18px_22px]">
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#E53E3E] mb-1.5">What happens if you skip this step</div>
            <p className="text-[15px] text-[#742A2A] leading-relaxed font-medium">If you import your active Mailchimp subscribers into GHL without first importing unsubscribes as Email DND, and then run an email campaign, you risk emailing contacts who previously opted out. Under CAN-SPAM this can result in fines of up to $50,988 per violation in the US. Under GDPR, penalties can reach 4% of annual global turnover. GHL Scale Up processes every unsubscribe list before any subscriber is imported this step is non-negotiable in every Mailchimp migration we deliver.</p>
          </div>
        </div>
      </section>

      {/* AUDIENCE TO TAG TRANSLATION */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Unique to Mailchimp Migrations</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">The Mailchimp Audience-to-Tag Translation Why It Creates Duplicates</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">Mailchimp uses "Audiences" siloed contact lists where the same person can exist as a separate record in each Audience. This is Mailchimp's fundamental architecture and the source of the most common Mailchimp migration failure.</p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">When you export three Mailchimp Audiences and import them into GoHighLevel's single unified contact database, the same email address can appear three times as three separate contacts. GHL deduplicates on email address during import but the tags from each Audience need to be merged onto the unified contact record, not just from whichever Audience was imported last.</p>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">GHL Scale Up runs a cross-Audience deduplication pass before any import building a merged contact file where each unique email address appears once with all of its Audience memberships converted to GHL tags and all of its custom field values preserved.</p>
              <div className="bg-[#FFFBEB] border-l-4 border-[#D69E2E] rounded-r-xl p-4 mt-4">
                <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#D69E2E] mb-1.5">The duplicate contact problem</div>
                <p className="text-[14px] text-[#744210] leading-relaxed">Importing multiple Mailchimp Audiences without pre-deduplication creates ghost contacts in GHL the same person in your database twice or three times, receiving every email two or three times. Most DIY Mailchimp migrations discover this problem after the first broadcast campaign.</p>
              </div>
            </div>

            {/* Audience Map Visualization */}
            <div>
              <div className="border border-[#E8EDF4] rounded-xl overflow-hidden">
                <div className="bg-[#FFE01B] p-4 text-center">
                  <span className="text-sm font-bold text-[#1F2022]">Mailchimp Three Audiences</span>
                </div>
                <div className="bg-[#FFF8CC] px-5 py-3 text-xs font-bold text-[#1F2022] border-b border-[#E8EDF4]">Audience 1: Main List</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FFE01B]"></span>sarah@example.com Tag: customer</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FFE01B]"></span>john@example.com Tag: vip</div>
                <div className="bg-[#FFF8CC] px-5 py-3 text-xs font-bold text-[#1F2022] border-b border-[#E8EDF4]">Audience 2: Lead Magnet</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FFE01B]"></span>sarah@example.com Tag: lead (SAME PERSON)</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FFE01B]"></span>mike@example.com Tag: new-lead</div>
                <div className="bg-[#FFF8CC] px-5 py-3 text-xs font-bold text-[#1F2022] border-b border-[#E8EDF4]">Audience 3: Past Customers</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FFE01B]"></span>sarah@example.com Tag: past-buyer (SAME PERSON)</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FFE01B]"></span>lisa@example.com Tag: past-buyer</div>
              </div>
              <div className="text-center text-2xl text-[#8A9BB0] py-3">↓</div>
              <div className="border border-[#E8EDF4] rounded-xl overflow-hidden">
                <div className="bg-[#1C2E4A] p-4 text-center">
                  <span className="text-sm font-bold text-[#F8D000]">GoHighLevel One Unified Database</span>
                </div>
                <div className="bg-[#E6F4FF] px-5 py-3 text-xs font-bold text-[#0E9BF0] border-b border-[#E8EDF4]">After deduplication and tag merge</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></span>sarah@example.com Tags: customer, lead, past-buyer</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></span>john@example.com Tag: vip</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></span>mike@example.com Tag: new-lead</div>
                <div className="px-5 py-2.5 text-[13px] text-[#4A5568] border-b border-[#E8EDF4] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></span>lisa@example.com Tag: past-buyer</div>
                <div className="bg-[rgba(37,201,125,0.07)] px-5 py-3 border-t border-[#E8EDF4]">
                  <p className="text-xs text-[#25C97D] font-bold">4 unique contacts. Sarah appears once with all 3 tags merged.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFER TABLE */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Data Migration</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">What Transfers from Mailchimp to GoHighLevel and What We Rebuild</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Every Mailchimp element mapped against GoHighLevel's capabilities confirmed against GHL's official Mailchimp migration documentation and real migration projects in 2026.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-4 text-left text-[13px] font-bold">Mailchimp Element</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#25C97D]">Status in GHL</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#FCA5A5]">What Breaks or Changes</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#F8D000]">How We Handle It</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { element: 'Subscribers and contacts', status: '✓ CSV export per Audience, GHL import', breaks: 'Multiple Audiences create duplicates', handle: 'Cross-Audience deduplication before import each email address appears once with merged tags' },
                  { element: 'Unsubscribed contacts', status: '✓ Imported as Email DND in GHL', breaks: 'Must be done BEFORE active subscriber import', handle: 'Unsubscribes imported first as Email DND compliance verified before any subscriber import' },
                  { element: 'Cleaned contacts (hard bounces)', status: '✓ Imported as Email DND in GHL', breaks: 'Same legal requirement as unsubscribes', handle: 'Cleaned contacts imported as Email DND never emailed through GHL' },
                  { element: 'Tags', status: '✓ Included in CSV export', breaks: 'Tags from multiple Audiences must be merged', handle: 'Tags from all Audiences merged onto single contact record during deduplication pass' },
                  { element: 'Groups and Interests', status: '⚠ Converted to GHL tags', breaks: 'No direct Groups equivalent in GHL', handle: 'Each Mailchimp Group/Interest category converted to a GHL tag during import' },
                  { element: 'Merge fields (custom fields)', status: '✓ Export as CSV columns', breaks: 'Custom fields must exist in GHL before import', handle: 'All merge fields created as GHL custom fields, field mapping completed before import' },
                  { element: 'Customer Journey automations', status: '✗ Cannot be imported', breaks: 'Every Journey must be manually rebuilt', handle: 'Each Customer Journey documented and rebuilt natively in GHL workflow builder' },
                  { element: 'Email templates', status: '⚠ HTML can be adapted', breaks: 'Mailchimp drag-and-drop does not port 1:1', handle: 'Templates rebuilt in GHL email builder using same content and brand structure' },
                  { element: 'Signup forms and embedded forms', status: '✗ Must be rebuilt in GHL', breaks: 'All website form embeds break at cutover', handle: 'Rebuilt in GHL form builder, new embed code published on website before Mailchimp forms are retired' },
                  { element: 'Landing pages (Mailchimp Pages)', status: '✗ Must be rebuilt in GHL', breaks: 'Mailchimp-hosted landing page URLs stop working', handle: 'Pages rebuilt in GHL funnel builder; custom domain connected; old Mailchimp URLs redirected' },
                  { element: 'Sending domain reputation', status: '⚠ Warm-up required', breaks: 'New sending infrastructure needs reputation re-established', handle: 'SPF, DKIM, DMARC configured; structured warm-up from 50 to full volume over 2 to 3 weeks' },
                  { element: 'Shopify integration', status: '⚠ GHL Shopify less featured', breaks: 'Product blocks and purchase history segmentation differ', handle: 'Flagged on assessment call for heavy Shopify users GHL Shopify integration configured and tested' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                    <td className="p-4 text-[#1A202C] font-semibold border-r border-[#E8EDF4]">{item.element}</td>
                    <td className="p-4 text-[#25C97D] font-semibold">{item.status}</td>
                    <td className="p-4 text-[#E53E3E] font-semibold">{item.breaks}</td>
                    <td className="p-4 text-[#D69E2E] font-semibold">{item.handle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MAILCHIMP PRICING VS GHL */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">The Cost Comparison</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Mailchimp Pricing vs GoHighLevel The List Size Problem</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">Mailchimp charges by contacts. GoHighLevel charges a flat rate. As your list grows, Mailchimp's cost climbs while GHL stays at $297 and GHL includes CRM, SMS, AI, and booking that Mailchimp does not.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(28,46,74,0.08)] text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#1C2E4A] text-white">
                  <th className="p-4 text-left text-[13px] font-bold">Contact Count</th>
                  <th className="p-4 text-left text-[13px] font-bold">Mailchimp Essentials</th>
                  <th className="p-4 text-left text-[13px] font-bold">Mailchimp Standard</th>
                  <th className="p-4 text-left text-[13px] font-bold text-[#25C97D]">GoHighLevel Unlimited</th>
                  <th className="p-4 text-left text-[13px] font-bold">What GHL Adds That Mailchimp Does Not</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { contacts: '500 contacts', essentials: '$5/mo', standard: '$13/mo', ghl: '$297/mo', add: 'GHL costs more at small lists' },
                  { contacts: '2,500 contacts', essentials: '$28/mo', standard: '$35/mo', ghl: '$297/mo', add: 'GHL still more but adds CRM, SMS, AI, booking' },
                  { contacts: '10,000 contacts', essentials: '$80/mo', standard: '$100/mo', ghl: '$297/mo', add: 'Getting close. Add SMS and CRM tool costs to Mailchimp.' },
                  { contacts: '25,000 contacts', essentials: '$230/mo', standard: '$270/mo', ghl: '$297/mo', add: 'Essentially equal. GHL includes unlimited users.' },
                  { contacts: '50,000 contacts', essentials: '$385/mo', standard: '$450/mo', ghl: '$297/mo', add: 'GHL saves $88 to $153/mo and replaces entire stack' },
                  { contacts: '100,000+ contacts', essentials: 'Scales up further', standard: 'Scales up further', ghl: '$297/mo always', add: 'Saving grows with every new subscriber' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#E8EDF4] last:border-b-0 even:bg-[#F4F7FA]">
                    <td className="p-4 text-[#1A202C] font-semibold border-r border-[#E8EDF4]">{row.contacts}</td>
                    <td className="p-4 text-[#E53E3E] font-semibold">{row.essentials}</td>
                    <td className="p-4 text-[#E53E3E] font-semibold">{row.standard}</td>
                    <td className="p-4 text-[#25C97D] font-semibold">{row.ghl}</td>
                    <td className="p-4 text-[#4A5568]">{row.add}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-[#8A9BB0] text-center mt-3">Mailchimp pricing approximate as of May 2026. You may want to verify current Mailchimp pricing at mailchimp.com. Add your current SMS tool, CRM, and calendar tool costs alongside Mailchimp to see the full stack comparison.</p>
        </div>
      </section>

      {/* DELIVERABILITY SECTION */}
      <section className="py-20 bg-[#1C2E4A]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000]/20 px-3.5 py-1 rounded-full mb-3.5">Email Deliverability</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-white leading-[1.22] tracking-[-0.4px] mb-3">Protecting Your Email Deliverability After Moving from Mailchimp</h2>
            <p className="text-base text-white/65 leading-relaxed">Mailchimp is known for strong inbox placement. Moving to a new sending infrastructure means your domain needs to re-establish its reputation. We manage this with a structured warm-up that prevents the deliverability dip most businesses experience when they switch email platforms without a plan.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Three things configured before your first GHL email send</h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">1</div><span className="text-[15px] text-white/85 leading-relaxed"><strong className="text-white">SPF, DKIM, and DMARC records configured on your sending domain.</strong> All three DNS authentication records set up before a single email leaves GHL. Without these, a significant portion of your emails go straight to spam from day one.</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">2</div><span className="text-[15px] text-white/85 leading-relaxed"><strong className="text-white">List cleaned before migration.</strong> Hard bounces, multi-failure soft bounces, and contacts inactive for 12 or more months removed before import. A clean list protects your new GHL sending reputation from the start.</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">3</div><span className="text-[15px] text-white/85 leading-relaxed"><strong className="text-white">Structured warm-up plan managed by GHL Scale Up.</strong> Start at 50 to 100 emails per day to your most engaged contacts and increase volume gradually. Do not send a broadcast to your full list on day one in GHL.</span></div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-5">Email warm-up schedule included in every Mailchimp migration</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { week: 'Days 1 to 3', vol: '50–100', label: 'emails/day to highest-engagement contacts only' },
                  { week: 'Days 4 to 7', vol: '100–500', label: 'emails/day monitor opens, bounces, and complaints' },
                  { week: 'Week 2', vol: '500–2,000', label: 'emails/day expanding to broader subscriber segments' },
                  { week: 'Week 3+', vol: 'Full', label: 'volume reached full broadcast capability confirmed' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#E8EDF4] rounded-xl p-4 text-center relative">
                    <div className="text-[10px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-1.5">{item.week}</div>
                    <div className="text-2xl font-extrabold text-[#0E9BF0] leading-none mb-1">{item.vol}</div>
                    <div className="text-xs text-[#4A5568] leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-xl p-4 mt-4">
                <p className="text-sm text-white/70 leading-relaxed">This warm-up plan is included as standard in every Mailchimp to GoHighLevel migration GHL Scale Up delivers. Running it in parallel with the automation rebuild phase adds no extra weeks to the overall timeline.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Who This Is For</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Who Moves from Mailchimp to GoHighLevel and Why</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-3">Most Common</div>
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-1.5">Growing Businesses Hitting Mailchimp's Pricing</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">Lists that have grown past 10,000 contacts where Mailchimp's per-contact pricing starts approaching GHL's flat rate. Once you add the cost of a separate CRM, SMS tool, and calendar booking alongside Mailchimp, GHL is cheaper and simpler at almost any list size.</p>
            </div>
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-3">Adding Channels</div>
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-1.5">Businesses Needing SMS and CRM Alongside Email</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">Businesses using Mailchimp for email but paying separately for a CRM, a texting tool, and a calendar app. GoHighLevel unifies all of these in one platform. If you are stitching Mailchimp together with HubSpot Free, Twilio, and Calendly, GHL replaces the entire stack at a lower combined cost.</p>
            </div>
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] transition-all">
              <div className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-2.5 py-1 rounded-full mb-3">Agency Owners</div>
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] mb-1.5">Agencies Managing Email Marketing for Multiple Clients</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">Agencies managing Mailchimp accounts for multiple clients separate accounts, separate billing, separate reporting. GoHighLevel's sub-account model puts all clients in one place with one monthly bill, white-label branding, and a unified dashboard for reporting across clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-14">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Deliverables</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">Everything We Deliver in Your <span className="text-[#0E9BF0]">Mailchimp to GoHighLevel Migration</span></h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">Every Mailchimp migration includes full compliance processing, cross-Audience deduplication, automation rebuilds, template migration, and the domain warm-up. Nothing is optional. Nothing is left for you to configure post-handover.</p>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Unsubscribes imported as Email DND before any subscriber moves</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Cross-Audience deduplication no duplicate contacts in GHL</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Mailchimp stays live zero downtime, no missed sends during migration</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Email warm-up managed by GHL Scale Up deliverability protected</span></div>
                <div className="flex gap-2.5"><div className="w-5.5 h-5.5 rounded-full bg-[rgba(37,201,125,0.12)] text-[#25C97D] flex items-center justify-center text-[11px] mt-0.5 flex-shrink-0 font-bold">✓</div><span className="text-[15px] text-[#1A202C] leading-relaxed">Fixed price agreed before work starts</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { icon: '⚖️', title: 'Unsubscribe Compliance Processing', desc: 'All unsubscribed and cleaned contacts exported first and imported as Email DND in GHL zero compliance risk' },
                { icon: '🔗', title: 'Cross-Audience Deduplication', desc: 'All Mailchimp Audiences combined, deduplicated on email address, tags merged one clean contact per person in GHL' },
                { icon: '👥', title: 'Contact Database Import', desc: 'Full subscriber import with merge fields as custom fields, Audience membership as tags, Groups and Interests converted' },
                { icon: '⚡', title: 'Customer Journey Rebuilds', desc: 'Every Mailchimp Customer Journey documented and rebuilt natively in GHL\'s workflow builder' },
                { icon: '📧', title: 'Email Template Migration', desc: 'All reusable Mailchimp templates rebuilt in GHL\'s email builder using the same content, brand colours, and structure' },
                { icon: '🔥', title: 'Domain Warm-Up Plan', desc: 'SPF, DKIM, DMARC configured. Structured 3-week warm-up managed open rates, bounce rates, and complaint rates monitored daily' },
                { icon: '📝', title: 'Form and Landing Page Rebuild', desc: 'All signup forms rebuilt in GHL, new embed code published on your website, Mailchimp-hosted pages rebuilt in GHL funnel builder' },
                { icon: '🎓', title: 'Team Training and Handover', desc: 'Live training on GHL email campaigns, automation management, contact management, and reporting. Written documentation included.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E8EDF4] rounded-xl p-[18px_20px] flex gap-3 shadow-sm">
                  <div className="text-xl flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <strong className="block text-[14px] font-bold text-[#1C2E4A] mb-1">{item.title}</strong>
                    <span className="text-[13px] text-[#4A5568] leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS + TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Left Column - Process Steps */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Migration Process</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">The <span className="text-[#0E9BF0]">Mailchimp to GoHighLevel Migration</span> Process 5 Steps</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Mailchimp migrations are typically faster than CRM migrations because there is no complex data model translation required. The compliance processing step and the email warm-up are the two steps that make Mailchimp migrations distinct.</p>
              <div className="flex flex-col">
                {[
                  { num: 1, title: 'Mailchimp Account Audit and Migration Scoping', desc: 'We review your Mailchimp account Audience count, subscriber volume, tag structure, Customer Journey count, Shopify integration status, and email template count. You receive a scope document with exact deliverables, timeline, and fixed price. The Shopify assessment is always included for e-commerce businesses.', tag: 'Free Before any payment' },
                  { num: 2, title: 'Unsubscribe Export and Email DND Processing', desc: 'Before any subscriber is imported into GHL, every Mailchimp Audience is exported for its unsubscribed and cleaned contacts. These are imported into GHL with Email DND activated and verified on 50 spot-check records. This step happens on day one of the project and is completed before the subscriber import begins.', tag: 'Day 1 Before anything else' },
                  { num: 3, title: 'Cross-Audience Deduplication, Contact Import, and Domain Setup', desc: 'All Mailchimp Audiences are exported and merged into a single deduplicated file each unique email address appears once with all Audience memberships converted to GHL tags. Custom fields created in GHL, contact file imported and validated. SPF, DKIM, and DMARC configured on sending domain. GHL email warm-up begins at 50 to 100 emails per day.', tag: 'Week 1' },
                  { num: 4, title: 'Automation Rebuilds, Templates, and Form Migration', desc: 'Every Mailchimp Customer Journey rebuilt natively in GHL\'s workflow builder. Email templates rebuilt in GHL email builder. Signup forms rebuilt and new embed code published on your website. Mailchimp-hosted landing pages rebuilt in GHL funnel builder. Email warm-up continues through this phase.', tag: 'Week 1 to 2' },
                  { num: 5, title: 'Testing, Full Volume Cutover, and Mailchimp Wind-Down', desc: 'Every automation triggered and tested end-to-end. Email warm-up reaches full sending volume. Team training delivered. Mailchimp Customer Journeys paused traffic switches to GHL. Mailchimp account kept open for historical reporting reference for 30 days before cancellation. We tell you the exact date it is safe to cancel Mailchimp.', tag: 'Week 2 to 3' },
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

            {/* Right Column - Timeline & Pricing */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Timeline</span>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[#1C2E4A] leading-[1.25] tracking-[-0.3px] mb-3">How Long Does a <span className="text-[#0E9BF0]">Mailchimp to GoHighLevel Migration</span> Take?</h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">Mailchimp migrations are typically the fastest in our migration portfolio the absence of a complex CRM data model means most of the timeline is driven by automation rebuild count and list size.</p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  { tier: 'Simple', time: '1–2 weeks', desc: '1 Audience, under 5,000 contacts, fewer than 5 Customer Journeys, basic welcome series and broadcast emails, no Shopify integration', color: 'bg-[#E6F4FF]' },
                  { tier: 'Standard', time: '2–3 weeks', desc: '2 to 5 Audiences requiring deduplication, 5,000 to 25,000 contacts, 5 to 15 Customer Journeys to rebuild, multiple form and landing page rebuilds', color: 'bg-[#1C2E4A] text-white' },
                  { tier: 'Complex', time: '3–4 weeks', desc: '5+ Audiences, 25,000+ contacts, 15+ Customer Journeys with advanced branching, Shopify integration requiring configuration, large template library requiring rebuilding', color: 'bg-[#162235] text-white' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(28,46,74,0.07)]">
                    <div className={`${item.color} p-[18px_22px]`}>
                      <div className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1">{item.tier}</div>
                      <div className="text-[28px] font-extrabold leading-none">{item.time}</div>
                    </div>
                    <div className="bg-white border border-t-0 border-[#E8EDF4] p-4">
                      <div className="flex flex-col gap-2">
                        {item.desc.split(', ').map((point, i) => (
                          <div key={i} className="flex items-start gap-2 text-[13px] text-[#4A5568]"><span className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0] flex-shrink-0 mt-1.5"></span>{point}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[#E8EDF4] rounded-2xl p-8 shadow-[0_4px_28px_rgba(28,46,74,0.08)]">
                <div className="text-[12px] font-bold tracking-[1px] uppercase text-[#8A9BB0] mb-2">Mailchimp to GHL Migration</div>
                <div className="text-[56px] font-extrabold text-[#1C2E4A] leading-none mb-1.5">$1,500 <span className="text-[20px] font-normal text-[#8A9BB0]">USD</span></div>
                <div className="text-[13px] text-[#8A9BB0] mb-6">Starting price · Fixed fee · Delivered in 2 to 3 weeks</div>
                <div className="h-px bg-[#E8EDF4] mb-5"></div>
                <div className="flex flex-col gap-2.5 mb-7">
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Unsubscribe DND processing before any subscriber import</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Cross-Audience deduplication and tag merge</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Contact import with full merge field and tag mapping</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>All Customer Journeys rebuilt in GHL workflows</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Email domain warm-up managed for 3 weeks</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Forms, landing pages, and templates rebuilt in GHL</div>
                  <div className="flex gap-2 text-[14px] text-[#1A202C]"><span className="text-[#25C97D] text-[13px] mt-0.5">✓</span>Team training and handover documentation</div>
                </div>
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] w-full justify-center inline-flex items-center gap-2 py-4 px-8 rounded-xl text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
                  Book a Free Migration Assessment → <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#25C97D] bg-[rgba(37,201,125,0.12)] px-3.5 py-1 rounded-full mb-3.5">Real Results</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Mailchimp to GoHighLevel Migration Results</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">200+</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">GHL Builds and Migrations Delivered</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">0</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Compliance Violations Across All Migrations</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">6</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Countries US, UK, UAE, AU, SG, IN</div></div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_18px] text-center shadow-[0_2px_12px_rgba(28,46,74,0.06)]"><div className="text-[32px] font-extrabold text-[#0E9BF0] leading-none mb-1">2–3wks</div><div className="text-[12px] text-[#8A9BB0] uppercase tracking-wide">Average Mailchimp Migration Delivery Time</div></div>
          </div>

          {/* Case Study */}
          <div className="bg-[#F4F7FA] rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2.5">Migration Case Study Service Business</div>
              <p className="text-[17px] font-semibold text-[#1C2E4A] leading-relaxed mb-4 italic">"I had 18,000 contacts across three Mailchimp Audiences and had no idea I had thousands of duplicates because the same person had signed up through different lead magnets. GHL Scale Up ran the deduplication before the import and we went from 18,000 to 11,400 unique contacts. Our open rates in GHL are better than they were in Mailchimp because we are finally sending to clean, real people. The compliance processing gave me peace of mind too I knew every unsubscribe was honoured."</p>
              <p className="text-[13px] text-[#8A9BB0]"> Service Business Owner, Canada</p>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="bg-white rounded-xl p-4 flex items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] leading-none">36%</div><div className="text-[13px] text-[#4A5568] leading-tight">Fewer contacts after deduplication cleaner list, better deliverability</div></div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] leading-none">2.5wks</div><div className="text-[13px] text-[#4A5568] leading-tight">Full Mailchimp to GHL migration including 3 Audiences and 8 Customer Journeys</div></div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4 border border-[#E8EDF4]"><div className="text-[28px] font-extrabold text-[#25C97D] leading-none">$0</div><div className="text-[13px] text-[#4A5568] leading-tight">Compliance risk every unsubscribe processed as Email DND before first send</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Free Migration Assessment</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Ready to Move from <span className="text-[#F8D000]">Mailchimp to GoHighLevel?</span></h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">Book a free 30-minute migration assessment. We review your Mailchimp account, confirm your Audience count, automation complexity, and any Shopify considerations and give you a fixed price scope document before any work begins.</p>
          <p className="text-[13px] text-white/40 mb-8">No commitment required. Aryan personally responds within a few hours.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
              Book a Free Migration Assessment → <span className="text-lg">→</span>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="text-[14px] text-white/60 flex items-center gap-1.5">📧 <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5">📞 <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5">💬 <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">FAQ</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Mailchimp to GoHighLevel Migration Frequently Asked Questions</h2>
            <p className="text-base text-[#4A5568] leading-relaxed max-w-[620px] mx-auto">Every question below is specific to Mailchimp migrations. These are the questions Mailchimp users ask most before migrating to GHL.</p>
          </div>
          <div className="flex flex-col gap-2.5 max-w-[820px] mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-white border border-[#E8EDF4] rounded-xl overflow-hidden ${openFaqIndex === index ? 'open' : ''}`}>
                <button
                  className="w-full bg-transparent border-none cursor-pointer flex items-center justify-between py-5 px-6 font-semibold text-[15px] text-[#1C2E4A] text-left gap-4 hover:bg-[#F4F7FA] transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  {faq.q}
                  <span className="w-7 h-7 min-w-7 rounded-full bg-[#E6F4FF] text-[#0E9BF0] flex items-center justify-center text-lg font-bold transition-transform flex-shrink-0">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="pt-4 pb-5 px-6 text-[15px] text-[#4A5568] leading-relaxed border-t border-[#E8EDF4]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READ OUR ARTICLES */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#0E9BF0] bg-[#E6F4FF] px-3.5 py-1 rounded-full mb-3.5">Further Reading</span>
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Read Our Articles on Mailchimp to GoHighLevel Migration</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/mailchimp-to-gohighlevel-migration" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">BOFU Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">Mailchimp to GoHighLevel Migration: The Complete Guide Including Compliance</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">The full technical walkthrough unsubscribe DND processing, cross-Audience deduplication, Customer Journey rebuild order, and the email warm-up schedule that protects deliverability.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the Mailchimp migration guide →</span>
            </Link>
            <Link href="/blog/ghl-migration-timeline" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Planning Guide</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">GHL Migration Timeline Explained: How Long Does It Actually Take?</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">Honest timelines by platform and complexity tier including why Mailchimp migrations are typically the fastest in the GHL migration portfolio.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the migration timeline guide →</span>
            </Link>
            <Link href="/blog/ghl-migration-mistakes" className="bg-white border border-[#E8EDF4] rounded-2xl p-[22px_20px] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0]/30 transition-all group">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0E9BF0] mb-2">Common Mistakes</div>
              <h3 className="text-[15px] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 leading-tight">Common GHL Migration Mistakes and How to Avoid Them</h3>
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-3.5">The six most damaging migration mistakes including importing Mailchimp contacts without processing unsubscribes first, and why this is both a legal and deliverability problem.</p>
              <span className="text-[13px] font-semibold text-[#0E9BF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read the migration mistakes guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER PLATFORMS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-7 md:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="text-[clamp(23px,3vw,36px)] font-extrabold text-[#1C2E4A] leading-[1.22] tracking-[-0.4px] mb-3">Also Migrating from Another Platform?</h2>
            <p className="text-base text-[#4A5568] leading-relaxed">We migrate from all major email marketing platforms, CRMs, and funnel builders into GoHighLevel.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/hubspot-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">HubSpot to GoHighLevel →</Link>
            <Link href="/activecampaign-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ActiveCampaign to GoHighLevel →</Link>
            <Link href="/clickfunnels-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">ClickFunnels to GoHighLevel →</Link>
            <Link href="/kajabi-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Kajabi to GoHighLevel →</Link>
            <Link href="/zoho-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Zoho to GoHighLevel →</Link>
            <Link href="/keap-to-gohighlevel" className="bg-white border border-[#E8EDF4] rounded-lg px-4 py-2 text-[13px] font-semibold text-[#1C2E4A] hover:border-[#0E9BF0] hover:text-[#0E9BF0] transition-all">Keap to GoHighLevel →</Link>
          </div>
          <p className="text-center mt-5 text-sm text-[#8A9BB0]">See all supported platforms on our <Link href="/services/migration" className="text-[#0E9BF0] font-semibold hover:underline">GHL Migration Services hub page</Link>.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1C2E4A] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-7 md:px-8 relative z-10">
          <span className="inline-block text-[11px] font-bold tracking-[1.6px] uppercase text-[#1C2E4A] bg-[#F8D000] px-3.5 py-1 rounded-full mb-4">Start Your Migration</span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-[-0.4px] leading-[1.2] mb-3.5">Book Your Free <span className="text-[#F8D000]">Mailchimp to GoHighLevel</span> Migration Assessment</h2>
          <p className="text-base text-white/65 max-w-[520px] mx-auto mb-2 leading-relaxed">30 minutes. We review your Mailchimp account, confirm Audience count and automation complexity, and give you a fixed price scope document. No obligation to proceed.</p>
          <p className="text-[13px] text-white/40 mb-8">Aryan personally reviews every inquiry and responds within a few hours not an automated sequence.</p>
          <div className="flex gap-3.5 justify-center flex-wrap mb-7">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-xl text-[0.92rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.3)] transition-all">
              Book a Free Migration Assessment → <span className="text-lg">→</span>
            </Link>
            <Link href="/services/migration" className="bg-transparent text-white px-10 py-4 rounded-xl text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              View All Migration Services
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="text-[14px] text-white/60 flex items-center gap-1.5">📧 <a href="mailto:aryan@ghlscaleup.com" className="text-[#0E9BF0] hover:underline">aryan@ghlscaleup.com</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5">📞 <a href="tel:+919893270210" className="text-[#0E9BF0] hover:underline">+91 98932 70210</a></span>
            <span className="text-[14px] text-white/60 flex items-center gap-1.5">💬 <a href="https://wa.me/919893270210" className="text-[#0E9BF0] hover:underline">WhatsApp: +91 98932 70210</a></span>
          </div>
        </div>
      </section>
    </>
  );
}