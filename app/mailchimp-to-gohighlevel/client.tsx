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
      a: 'Every contact marked as unsubscribed, cleaned, or non-subscribed in Mailchimp must be imported into GoHighLevel as Email DND (Do Not Disturb) before any email is sent through GHL. This is not optional — it is a legal requirement under CAN-SPAM and GDPR. Sending an email through GHL to a contact who previously unsubscribed from your Mailchimp list is a compliance violation regardless of which platform sends it. GHL Scale Up processes all unsubscribe data before the subscriber import runs — no contact is ever emailed through GHL who has not consented to receive email from you.',
    },
    {
      q: 'How does the Mailchimp Audience model translate to GoHighLevel?',
      a: 'Mailchimp organises contacts in separate Audiences — the same person in your main list and your lead magnet list are treated as entirely separate records, even if they share the same email address. GoHighLevel uses a single unified contact database where all contacts live together, segmented by tags and smart lists. When migrating multiple Mailchimp Audiences to GHL, the same person can appear in multiple exports as duplicate rows. GHL Scale Up de-duplicates contacts across all exported Audiences before import, merging Audience memberships and tags from each Audience onto a single GHL contact record.',
    },
    {
      q: 'Can Mailchimp Customer Journeys be imported into GoHighLevel?',
      a: 'No. Mailchimp Customer Journeys cannot be exported and imported into GoHighLevel. Each automation — welcome series, nurture sequences, re-engagement flows, conditional branches — must be manually rebuilt inside GHL\'s workflow builder. GHL Scale Up documents every Customer Journey before migration and rebuilds each one natively in GHL, including email timing, conditional branches, goal steps, and exit conditions. Rebuilding automations is typically the most time-consuming part of any Mailchimp migration.',
    },
    {
      q: 'Will my email deliverability drop when I move from Mailchimp to GoHighLevel?',
      a: 'Mailchimp is known for strong inbox placement because of its mature shared IP reputation and strict compliance enforcement. When you move to GoHighLevel\'s sending infrastructure, your domain needs to re-establish its reputation with inbox providers. GHL Scale Up includes SPF, DKIM, and DMARC configuration and a structured email domain warm-up as part of every Mailchimp migration — starting at 50 to 100 emails per day and scaling to full volume over 2 to 3 weeks. We also clean your list before migration to remove bounces and inactive subscribers, which protects your new sending reputation from the start.',
    },
    {
      q: 'What is the difference between Mailchimp Audiences and GoHighLevel tags?',
      a: 'A Mailchimp Audience is a siloed list where contacts exist independently — the same email address in two different Audiences is treated as two separate records. GoHighLevel uses a single contact database where everyone lives together, with tags and smart lists for segmentation. When migrating, each Mailchimp Audience becomes a GHL tag applied to the imported contacts. If someone was in three different Mailchimp Audiences, they get three corresponding tags in GHL and exist as a single unified contact record — which is actually more efficient for targeting and automation than Mailchimp\'s siloed approach.',
    },
    {
      q: 'Does GoHighLevel replace everything Mailchimp does?',
      a: 'GoHighLevel replaces Mailchimp\'s core email marketing functionality — contact management, email campaign sending, list segmentation, automation, signup forms, and landing pages. GHL goes significantly further with two-way SMS, AI voice agents, CRM pipelines, appointment booking, reputation management, and white-label SaaS mode. The one area where Mailchimp still has an advantage for certain businesses is its native Shopify integration — product block email elements, purchase history segmentation, and per-campaign revenue reporting are more refined in Mailchimp. For heavy Shopify e-commerce businesses, we flag this on the assessment call and confirm whether GHL\'s Shopify integration meets your specific needs.',
    },
    {
      q: 'How long does a Mailchimp to GoHighLevel migration take?',
      a: 'A standard Mailchimp to GoHighLevel migration takes 2 to 3 weeks. A simple migration with one Audience, under 5,000 contacts, and fewer than 5 Customer Journeys takes 1 to 2 weeks. A complex migration with multiple Audiences, large lists, and 15+ Customer Journeys takes 3 to 4 weeks. Mailchimp migrations are typically the fastest in our portfolio because there is no complex CRM data model translation required — the main time factors are Customer Journey rebuild count and list volume.',
    },
    {
      q: 'Should I clean my Mailchimp list before migrating to GoHighLevel?',
      a: 'Yes. Before migrating, remove hard bounces, soft bounce contacts with multiple failures, and contacts who have not engaged in 12 or more months from your export. Importing a dirty list into GHL damages your new sending reputation immediately. GHL Scale Up reviews your Mailchimp audience health report during the assessment call and advises specifically on which contacts to migrate and which to exclude. A cleaner list imported into GHL consistently produces better deliverability than a large, unclean list — which is the opposite of what most businesses assume.',
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bc" aria-label="Breadcrumb">
        <div className="wrap">
          <div className="bc__in">
            <Link href="/">Home</Link>
            <span className="bc__sep">›</span>
            <Link href="/services/migration">GHL Migration Services</Link>
            <span className="bc__sep">›</span>
            <span>Mailchimp to GoHighLevel</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="wrap">
          <div className="hero__in">
            <div>
              <div className="hero__ey">
                <div className="hero__ey-line"></div>
                <span className="hero__ey-text">Mailchimp to GoHighLevel Migration</span>
              </div>
              <h1 className="hero__h1" id="hero-h1">
                Mailchimp to GoHighLevel
                <em>Migration Service</em>
              </h1>
              <p className="hero__bluf">
                We migrate your Mailchimp contacts, audiences, tags, and automations into GoHighLevel — with full unsubscribe compliance processed before any email is sent. We de-duplicate contacts across multiple Mailchimp Audiences, rebuild every Customer Journey in GHL workflows, and manage a structured domain warm-up to protect deliverability. No compliance risk. No data loss. Fixed price.
              </p>
              <div className="hero__acts">
                <Link href="/contact" className="btn btn--primary">Book a Free Migration Assessment →</Link>
                <Link href="#compliance" className="btn btn--outline">See How We Handle Unsubscribes</Link>
              </div>
              <p className="hero__proof">
                <span className="hero__proof-dot">✦</span> 200+ GHL builds and migrations delivered
                <span className="hero__proof-dot">·</span> Zero compliance violations across all migrations
                <span className="hero__proof-dot">·</span> 6 countries served
                <span className="hero__proof-dot">·</span> Fixed price, no hourly billing
              </p>
            </div>

            <div className="hero__card">
              <div className="hero__card-lbl">Mailchimp pricing scales steeply — GHL does not</div>
              <div className="mc-pricing">
                <div className="mc-row"><span className="mc-lbl">Mailchimp Standard — 500 contacts</span><span className="mc-val">$13/mo</span></div>
                <div className="mc-row"><span className="mc-lbl">Mailchimp Standard — 5,000 contacts</span><span className="mc-val">$75/mo</span></div>
                <div className="mc-row"><span className="mc-lbl">Mailchimp Standard — 20,000 contacts</span><span className="mc-val">$230/mo</span></div>
                <div className="mc-row mc-row--warn"><span className="mc-lbl">Mailchimp Premium — unlimited seats</span><span className="mc-val">$350/mo</span></div>
                <div className="mc-row mc-row--ghl"><span className="mc-lbl">GoHighLevel Unlimited — unlimited contacts, unlimited users</span><span className="mc-val">$297/mo</span></div>
              </div>
              <div className="hcd"></div>
              <div className="hcn">
                <strong>GHL at $297 flat beats Mailchimp Standard at 20k contacts.</strong>
                And GHL adds CRM, SMS, AI, funnels, and booking. Migration from $1,500.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="sec">
        <div className="wrap">
          <div className="bluf-block">
            <div className="bluf-block__label">What this service is</div>
            <p className="bluf-block__text">GHL Scale Up migrates businesses from Mailchimp to GoHighLevel — exporting all Mailchimp Audiences with tags, groups, and merge fields, de-duplicating contacts across multiple Audiences, processing all unsubscribes as Email DND in GHL before a single email is sent, rebuilding Customer Journey automations in GHL workflows, migrating email templates, and managing a structured domain warm-up to protect your sending reputation. Standard migrations deliver in 2 to 3 weeks at a fixed price. Mailchimp stays live throughout — no downtime.</p>
          </div>

          <div className="sec-hdr">
            <span className="pill pill--blue">Why Businesses Switch</span>
            <h2 className="sec-h2">Why Mailchimp Users Move to GoHighLevel</h2>
            <p className="sec-sub">Mailchimp is where most businesses start with email marketing. It is accessible, easy, and generous on the free tier. The limitations become apparent once your list grows past free, your automation needs exceed basic Customer Journeys, or you need a CRM alongside your email tool.</p>
          </div>

          <div className="alert alert--info">
            <div className="alert__label">The core limitation of Mailchimp for growing businesses</div>
            <p className="alert__text">Mailchimp is an email-first platform. It has no native CRM pipeline, no two-way SMS, no AI voice agents, no appointment booking, no reputation management, and no white-label capability. Every tool you add alongside Mailchimp — a CRM, a texting tool, a calendar, a funnel builder — is another subscription, another login, and another manual integration. GoHighLevel replaces Mailchimp and the entire stack you have built around it.</p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="sec sec--off" id="compliance" aria-labelledby="comp-h2">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <span className="pill pill--red">Legal Compliance Priority</span>
            <h2 className="sec-h2" id="comp-h2">The Most Important Step in Any Mailchimp Migration — Unsubscribe Compliance</h2>
            <p className="sec-sub">Every unsubscribed, cleaned, or non-subscribed contact in Mailchimp must be marked as Email DND in GoHighLevel before you send a single email. This is not optional. It is a legal requirement under CAN-SPAM and GDPR. Skipping this step and accidentally emailing an unsubscribed contact is a compliance violation regardless of which platform sends it.</p>
          </div>

          <div className="comp-steps-container">
            <div className="comp-steps-header">
              <p>The compliance step sequence — in this exact order, before any email sends in GHL</p>
            </div>
            <div className="comp-steps">
              <div className="comp-step">
                <div className="comp-step__num">1</div>
                <h3 className="comp-step__h3">Export Unsubscribes First</h3>
                <p className="comp-step__p">Before exporting active subscribers, export all contacts with status "Unsubscribed" and "Cleaned" from every Mailchimp Audience</p>
              </div>
              <div className="comp-step">
                <div className="comp-step__num">2</div>
                <h3 className="comp-step__h3">Import as Email DND</h3>
                <p className="comp-step__p">Import the unsubscribe CSV into GHL with the "Mark as Email DND" option activated — these contacts can never be emailed through GHL</p>
              </div>
              <div className="comp-step">
                <div className="comp-step__num">3</div>
                <h3 className="comp-step__h3">Verify DND Status</h3>
                <p className="comp-step__p">Spot-check 50 unsubscribed contacts in GHL to confirm Email DND is active on each record before proceeding with subscriber import</p>
              </div>
              <div className="comp-step">
                <div className="comp-step__num">4</div>
                <h3 className="comp-step__h3">Then Import Subscribers</h3>
                <p className="comp-step__p">Only after unsubscribes are confirmed DND do active subscriber imports begin — preventing any risk of emailing an unsubscribed contact</p>
              </div>
            </div>
          </div>

          <div className="alert alert--crit">
            <div className="alert__label">What happens if you skip this step</div>
            <p className="alert__text">If you import your active Mailchimp subscribers into GHL without first importing unsubscribes as Email DND, and then run an email campaign, you risk emailing contacts who previously opted out. Under CAN-SPAM this can result in fines of up to $50,988 per violation in the US. Under GDPR, penalties can reach 4% of annual global turnover. GHL Scale Up processes every unsubscribe list before any subscriber is imported — this step is non-negotiable in every Mailchimp migration we deliver.</p>
          </div>
        </div>
      </section>

      {/* AUDIENCE TO TAG TRANSLATION */}
      <section className="sec" aria-labelledby="aud-h2">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="pill pill--blue">Unique to Mailchimp Migrations</span>
              <h2 className="body-h2" id="aud-h2">The Mailchimp Audience-to-Tag Translation — Why It Creates Duplicates</h2>
              <p className="body-p">Mailchimp uses "Audiences" — siloed contact lists where the same person can exist as a separate record in each Audience. This is Mailchimp's fundamental architecture and the source of the most common Mailchimp migration failure.</p>
              <p className="body-p">When you export three Mailchimp Audiences and import them into GoHighLevel's single unified contact database, the same email address can appear three times as three separate contacts. GHL deduplicates on email address during import — but the tags from each Audience need to be merged onto the unified contact record, not just from whichever Audience was imported last.</p>
              <p className="body-p">GHL Scale Up runs a cross-Audience deduplication pass before any import — building a merged contact file where each unique email address appears once with all of its Audience memberships converted to GHL tags and all of its custom field values preserved.</p>
              <div className="alert alert--warn" style={{ marginTop: 16 }}>
                <div className="alert__label">The duplicate contact problem</div>
                <p className="alert__text">Importing multiple Mailchimp Audiences without pre-deduplication creates ghost contacts in GHL — the same person in your database twice or three times, receiving every email two or three times. Most DIY Mailchimp migrations discover this problem after the first broadcast campaign.</p>
              </div>
            </div>
            <div>
              <div className="aud-map">
                <div className="aud-col aud-col--mc">
                  <div className="aud-col__hdr">Mailchimp — Three Audiences</div>
                  <div className="aud-subhdr">Audience 1: Main List</div>
                  <div className="aud-row"><div className="aud-dot-mc"></div>sarah@example.com — Tag: customer</div>
                  <div className="aud-row"><div className="aud-dot-mc"></div>john@example.com — Tag: vip</div>
                  <div className="aud-subhdr">Audience 2: Lead Magnet</div>
                  <div className="aud-row"><div className="aud-dot-mc"></div>sarah@example.com — Tag: lead (SAME PERSON)</div>
                  <div className="aud-row"><div className="aud-dot-mc"></div>mike@example.com — Tag: new-lead</div>
                  <div className="aud-subhdr">Audience 3: Past Customers</div>
                  <div className="aud-row"><div className="aud-dot-mc"></div>sarah@example.com — Tag: past-buyer (SAME PERSON)</div>
                  <div className="aud-row"><div className="aud-dot-mc"></div>lisa@example.com — Tag: past-buyer</div>
                </div>
                <div className="aud-arrow">→</div>
                <div className="aud-col aud-col--ghl">
                  <div className="aud-col__hdr">GoHighLevel — One Unified Database</div>
                  <div className="aud-subhdr-ghl">After deduplication and tag merge</div>
                  <div className="aud-row"><div className="aud-dot-ghl"></div>sarah@example.com — Tags: customer, lead, past-buyer</div>
                  <div className="aud-row"><div className="aud-dot-ghl"></div>john@example.com — Tag: vip</div>
                  <div className="aud-row"><div className="aud-dot-ghl"></div>mike@example.com — Tag: new-lead</div>
                  <div className="aud-row"><div className="aud-dot-ghl"></div>lisa@example.com — Tag: past-buyer</div>
                  <div className="aud-footer">4 unique contacts. Sarah appears once with all 3 tags merged.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFER TABLE */}
      <section className="sec sec--off" id="what-transfers" aria-labelledby="transfer-h2">
        <div className="wrap">
          <div className="sec-hdr">
            <span className="pill pill--blue">Data Migration</span>
            <h2 className="sec-h2" id="transfer-h2">What Transfers from Mailchimp to GoHighLevel — and What We Rebuild</h2>
            <p className="sec-sub">Every Mailchimp element mapped against GoHighLevel's capabilities — confirmed against GHL's official Mailchimp migration documentation and real migration projects in 2026.</p>
          </div>
          <table className="transfer-table" aria-label="Mailchimp to GoHighLevel data transfer reference">
            <thead>
              <tr>
                <th>Mailchimp Element</th>
                <th className="th-yes">Status in GHL</th>
                <th className="th-no">What Breaks or Changes</th>
                <th className="th-how">How We Handle It</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Subscribers and contacts</td><td className="td-yes">✓ CSV export per Audience, GHL import</td><td>Multiple Audiences create duplicates</td><td>Cross-Audience deduplication before import — each email address appears once with merged tags</td></tr>
              <tr><td>Unsubscribed contacts</td><td className="td-yes">✓ Imported as Email DND in GHL</td><td>Must be done BEFORE active subscriber import</td><td>Unsubscribes imported first as Email DND — compliance verified before any subscriber import</td></tr>
              <tr><td>Cleaned contacts (hard bounces)</td><td className="td-yes">✓ Imported as Email DND in GHL</td><td>Same legal requirement as unsubscribes</td><td>Cleaned contacts imported as Email DND — never emailed through GHL</td></tr>
              <tr><td>Tags</td><td className="td-yes">✓ Included in CSV export</td><td>Tags from multiple Audiences must be merged</td><td>Tags from all Audiences merged onto single contact record during deduplication pass</td></tr>
              <tr><td>Groups and Interests</td><td className="td-partial">⚠ Converted to GHL tags</td><td>No direct Groups equivalent in GHL</td><td>Each Mailchimp Group/Interest category converted to a GHL tag during import</td></tr>
              <tr><td>Merge fields (custom fields)</td><td className="td-yes">✓ Export as CSV columns</td><td>Custom fields must exist in GHL before import</td><td>All merge fields created as GHL custom fields, field mapping completed before import</td></tr>
              <tr><td>Customer Journey automations</td><td className="td-no">✗ Cannot be imported</td><td>Every Journey must be manually rebuilt</td><td>Each Customer Journey documented and rebuilt natively in GHL workflow builder</td></tr>
              <tr><td>Email templates</td><td className="td-partial">⚠ HTML can be adapted</td><td>Mailchimp drag-and-drop does not port 1:1</td><td>Templates rebuilt in GHL email builder using same content and brand structure</td></tr>
              <tr><td>Signup forms and embedded forms</td><td className="td-no">✗ Must be rebuilt in GHL</td><td>All website form embeds break at cutover</td><td>Rebuilt in GHL form builder, new embed code published on website before Mailchimp forms are retired</td></tr>
              <tr><td>Landing pages (Mailchimp Pages)</td><td className="td-no">✗ Must be rebuilt in GHL</td><td>Mailchimp-hosted landing page URLs stop working</td><td>Pages rebuilt in GHL funnel builder; custom domain connected; old Mailchimp URLs redirected</td></tr>
              <tr><td>Sending domain reputation</td><td className="td-partial">⚠ Warm-up required</td><td>New sending infrastructure needs reputation re-established</td><td>SPF, DKIM, DMARC configured; structured warm-up from 50 to full volume over 2 to 3 weeks</td></tr>
              <tr><td>Shopify integration</td><td className="td-partial">⚠ GHL Shopify less featured</td><td>Product blocks and purchase history segmentation differ</td><td>Flagged on assessment call for heavy Shopify users — GHL Shopify integration configured and tested</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MAILCHIMP PRICING VS GHL */}
      <section className="sec" aria-labelledby="price-table-h2">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <span className="pill pill--blue">The Cost Comparison</span>
            <h2 className="sec-h2" id="price-table-h2">Mailchimp Pricing vs GoHighLevel — The List Size Problem</h2>
            <p className="sec-sub">Mailchimp charges by contacts. GoHighLevel charges a flat rate. As your list grows, Mailchimp's cost climbs while GHL stays at $297 — and GHL includes CRM, SMS, AI, and booking that Mailchimp does not.</p>
          </div>
          <table className="mc-price-table" aria-label="Mailchimp vs GoHighLevel pricing by list size">
            <thead>
              <tr>
                <th>Contact Count</th>
                <th>Mailchimp Essentials</th>
                <th>Mailchimp Standard</th>
                <th>GoHighLevel Unlimited</th>
                <th>What GHL Adds That Mailchimp Does Not</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>500 contacts</td><td className="td-mc">$5/mo</td><td className="td-mc">$13/mo</td><td className="td-ghl-p">$297/mo</td><td>GHL costs more at small lists</td></tr>
              <tr><td>2,500 contacts</td><td className="td-mc">$28/mo</td><td className="td-mc">$35/mo</td><td className="td-ghl-p">$297/mo</td><td>GHL still more — but adds CRM, SMS, AI, booking</td></tr>
              <tr><td>10,000 contacts</td><td className="td-mc">$80/mo</td><td className="td-mc">$100/mo</td><td className="td-ghl-p">$297/mo</td><td>Getting close. Add SMS and CRM tool costs to Mailchimp.</td></tr>
              <tr><td>25,000 contacts</td><td className="td-mc">$230/mo</td><td className="td-mc">$270/mo</td><td className="td-ghl-p">$297/mo</td><td>Essentially equal. GHL includes unlimited users.</td></tr>
              <tr><td>50,000 contacts</td><td className="td-mc">$385/mo</td><td className="td-mc">$450/mo</td><td className="td-ghl-p">$297/mo</td><td>GHL saves $88 to $153/mo and replaces entire stack</td></tr>
              <tr><td>100,000+ contacts</td><td className="td-mc">Scales up further</td><td className="td-mc">Scales up further</td><td className="td-ghl-p">$297/mo always</td><td>Saving grows with every new subscriber</td></tr>
            </tbody>
          </table>
          <p className="price-disclaimer">Mailchimp pricing approximate as of May 2026. You may want to verify current Mailchimp pricing at mailchimp.com. Add your current SMS tool, CRM, and calendar tool costs alongside Mailchimp to see the full stack comparison.</p>
        </div>
      </section>

      {/* DELIVERABILITY SECTION */}
      <section className="sec sec--dark" aria-labelledby="deliver-h2">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <span className="pill pill--yellow">Email Deliverability</span>
            <h2 className="sec-h2 sec-h2--white" id="deliver-h2">Protecting Your Email Deliverability After Moving from Mailchimp</h2>
            <p className="sec-sub sec-sub--muted">Mailchimp is known for strong inbox placement. Moving to a new sending infrastructure means your domain needs to re-establish its reputation. We manage this with a structured warm-up that prevents the deliverability dip most businesses experience when they switch email platforms without a plan.</p>
          </div>
          <div className="two-col">
            <div>
              <h3 className="deliver-h3">Three things configured before your first GHL email send</h3>
              <div className="check-list">
                <div className="check-item"><div className="ck">1</div><span><strong>SPF, DKIM, and DMARC records configured on your sending domain.</strong> All three DNS authentication records set up before a single email leaves GHL. Without these, a significant portion of your emails go straight to spam from day one.</span></div>
                <div className="check-item"><div className="ck">2</div><span><strong>List cleaned before migration.</strong> Hard bounces, multi-failure soft bounces, and contacts inactive for 12 or more months removed before import. A clean list protects your new GHL sending reputation from the start.</span></div>
                <div className="check-item"><div className="ck">3</div><span><strong>Structured warm-up plan managed by GHL Scale Up.</strong> Start at 50 to 100 emails per day to your most engaged contacts and increase volume gradually. Do not send a broadcast to your full list on day one in GHL.</span></div>
              </div>
            </div>
            <div>
              <h3 className="deliver-h3">Email warm-up schedule included in every Mailchimp migration</h3>
              <div className="warm-grid">
                <div className="warm-card"><div className="warm-card__week">Days 1 to 3</div><div className="warm-card__vol">50–100</div><div className="warm-card__label">emails/day to highest-engagement contacts only</div></div>
                <div className="warm-card"><div className="warm-card__week">Days 4 to 7</div><div className="warm-card__vol">100–500</div><div className="warm-card__label">emails/day — monitor opens, bounces, and complaints</div></div>
                <div className="warm-card"><div className="warm-card__week">Week 2</div><div className="warm-card__vol">500–2,000</div><div className="warm-card__label">emails/day — expanding to broader subscriber segments</div></div>
                <div className="warm-card"><div className="warm-card__week">Week 3+</div><div className="warm-card__vol">Full</div><div className="warm-card__label">volume reached — full broadcast capability confirmed</div></div>
              </div>
              <div className="warm-note">
                <p>This warm-up plan is included as standard in every Mailchimp to GoHighLevel migration GHL Scale Up delivers. Running it in parallel with the automation rebuild phase adds no extra weeks to the overall timeline.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="sec" aria-labelledby="icp-h2">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <span className="pill pill--blue">Who This Is For</span>
            <h2 className="sec-h2" id="icp-h2">Who Moves from Mailchimp to GoHighLevel — and Why</h2>
          </div>
          <div className="icp-grid">
            <div className="icp-card">
              <div className="icp-card__tag">Most Common</div>
              <div className="icp-card__icon">📈</div>
              <h3 className="icp-card__h3">Growing Businesses Hitting Mailchimp's Pricing</h3>
              <p className="icp-card__p">Lists that have grown past 10,000 contacts where Mailchimp's per-contact pricing starts approaching GHL's flat rate. Once you add the cost of a separate CRM, SMS tool, and calendar booking alongside Mailchimp, GHL is cheaper and simpler at almost any list size.</p>
            </div>
            <div className="icp-card">
              <div className="icp-card__tag">Adding Channels</div>
              <div className="icp-card__icon">📱</div>
              <h3 className="icp-card__h3">Businesses Needing SMS and CRM Alongside Email</h3>
              <p className="icp-card__p">Businesses using Mailchimp for email but paying separately for a CRM, a texting tool, and a calendar app. GoHighLevel unifies all of these in one platform. If you are stitching Mailchimp together with HubSpot Free, Twilio, and Calendly, GHL replaces the entire stack at a lower combined cost.</p>
            </div>
            <div className="icp-card">
              <div className="icp-card__tag">Agency Owners</div>
              <div className="icp-card__icon">🏢</div>
              <h3 className="icp-card__h3">Agencies Managing Email Marketing for Multiple Clients</h3>
              <p className="icp-card__p">Agencies managing Mailchimp accounts for multiple clients — separate accounts, separate billing, separate reporting. GoHighLevel's sub-account model puts all clients in one place with one monthly bill, white-label branding, and a unified dashboard for reporting across clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES + PROCESS */}
      <section className="sec sec--off" aria-labelledby="deliv-h2">
        <div className="wrap">
          <div className="two-col two-col--wide">
            <div>
              <span className="pill pill--blue">Deliverables</span>
              <h2 className="body-h2" id="deliv-h2">Everything We Deliver in Your <em>Mailchimp to GoHighLevel Migration</em></h2>
              <p className="body-p">Every Mailchimp migration includes full compliance processing, cross-Audience deduplication, automation rebuilds, template migration, and the domain warm-up. Nothing is optional. Nothing is left for you to configure post-handover.</p>
              <div className="check-list" style={{ marginTop: 16 }}>
                <div className="check-item"><div className="ck">✓</div><span>Unsubscribes imported as Email DND before any subscriber moves</span></div>
                <div className="check-item"><div className="ck">✓</div><span>Cross-Audience deduplication — no duplicate contacts in GHL</span></div>
                <div className="check-item"><div className="ck">✓</div><span>Mailchimp stays live — zero downtime, no missed sends during migration</span></div>
                <div className="check-item"><div className="ck">✓</div><span>Email warm-up managed by GHL Scale Up — deliverability protected</span></div>
                <div className="check-item"><div className="ck">✓</div><span>Fixed price agreed before work starts</span></div>
              </div>
            </div>
            <div className="deliv-grid">
              <div className="deliv-item"><div className="deliv-icon">⚖️</div><div className="deliv-text"><strong>Unsubscribe Compliance Processing</strong><span>All unsubscribed and cleaned contacts exported first and imported as Email DND in GHL — zero compliance risk</span></div></div>
              <div className="deliv-item"><div className="deliv-icon">🔗</div><div className="deliv-text"><strong>Cross-Audience Deduplication</strong><span>All Mailchimp Audiences combined, deduplicated on email address, tags merged — one clean contact per person in GHL</span></div></div>
              <div className="deliv-item"><div className="deliv-icon">👥</div><div className="deliv-text"><strong>Contact Database Import</strong><span>Full subscriber import with merge fields as custom fields, Audience membership as tags, Groups and Interests converted</span></div></div>
              <div className="deliv-item"><div className="deliv-icon">⚡</div><div className="deliv-text"><strong>Customer Journey Rebuilds</strong><span>Every Mailchimp Customer Journey documented and rebuilt natively in GHL's workflow builder — welcome series, nurture sequences, re-engagement flows</span></div></div>
              <div className="deliv-item"><div className="deliv-icon">📧</div><div className="deliv-text"><strong>Email Template Migration</strong><span>All reusable Mailchimp templates rebuilt in GHL's email builder using the same content, brand colours, and structure</span></div></div>
              <div className="deliv-item"><div className="deliv-icon">🔥</div><div className="deliv-text"><strong>Domain Warm-Up Plan</strong><span>SPF, DKIM, DMARC configured. Structured 3-week warm-up managed — open rates, bounce rates, and complaint rates monitored daily</span></div></div>
              <div className="deliv-item"><div className="deliv-icon">📝</div><div className="deliv-text"><strong>Form and Landing Page Rebuild</strong><span>All signup forms rebuilt in GHL, new embed code published on your website, Mailchimp-hosted pages rebuilt in GHL funnel builder</span></div></div>
              <div className="deliv-item"><div className="deliv-icon">🎓</div><div className="deliv-text"><strong>Team Training and Handover</strong><span>Live training on GHL email campaigns, automation management, contact management, and reporting. Written documentation included.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS + TIMELINE */}
      <section className="sec" aria-labelledby="process-h2">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="pill pill--blue">Migration Process</span>
              <h2 className="body-h2" id="process-h2">The <em>Mailchimp to GoHighLevel Migration</em> Process — 5 Steps</h2>
              <p className="body-p">Mailchimp migrations are typically faster than CRM migrations because there is no complex data model translation required. The compliance processing step and the email warm-up are the two steps that make Mailchimp migrations distinct.</p>
              <div className="steps">
                <div className="step">
                  <div className="step__num"><div className="step__circle">1</div></div>
                  <div className="step__body">
                    <div className="step__tag">Free — Before any payment</div>
                    <h3 className="step__h3">Mailchimp Account Audit and Migration Scoping</h3>
                    <p className="step__p">We review your Mailchimp account — Audience count, subscriber volume, tag structure, Customer Journey count, Shopify integration status, and email template count. You receive a scope document with exact deliverables, timeline, and fixed price. The Shopify assessment is always included for e-commerce businesses.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num"><div className="step__circle">2</div></div>
                  <div className="step__body">
                    <div className="step__tag">Day 1 — Before anything else</div>
                    <h3 className="step__h3">Unsubscribe Export and Email DND Processing</h3>
                    <p className="step__p">Before any subscriber is imported into GHL, every Mailchimp Audience is exported for its unsubscribed and cleaned contacts. These are imported into GHL with Email DND activated and verified on 50 spot-check records. This step happens on day one of the project and is completed before the subscriber import begins.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num"><div className="step__circle">3</div></div>
                  <div className="step__body">
                    <div className="step__tag">Week 1</div>
                    <h3 className="step__h3">Cross-Audience Deduplication, Contact Import, and Domain Setup</h3>
                    <p className="step__p">All Mailchimp Audiences are exported and merged into a single deduplicated file — each unique email address appears once with all Audience memberships converted to GHL tags. Custom fields created in GHL, contact file imported and validated. SPF, DKIM, and DMARC configured on sending domain. GHL email warm-up begins at 50 to 100 emails per day.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num"><div className="step__circle">4</div></div>
                  <div className="step__body">
                    <div className="step__tag">Week 1 to 2</div>
                    <h3 className="step__h3">Automation Rebuilds, Templates, and Form Migration</h3>
                    <p className="step__p">Every Mailchimp Customer Journey rebuilt natively in GHL's workflow builder. Email templates rebuilt in GHL email builder. Signup forms rebuilt and new embed code published on your website. Mailchimp-hosted landing pages rebuilt in GHL funnel builder. Email warm-up continues through this phase.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num"><div className="step__circle">5</div></div>
                  <div className="step__body">
                    <div className="step__tag">Week 2 to 3</div>
                    <h3 className="step__h3">Testing, Full Volume Cutover, and Mailchimp Wind-Down</h3>
                    <p className="step__p">Every automation triggered and tested end-to-end. Email warm-up reaches full sending volume. Team training delivered. Mailchimp Customer Journeys paused — traffic switches to GHL. Mailchimp account kept open for historical reporting reference for 30 days before cancellation. We tell you the exact date it is safe to cancel Mailchimp.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="pill pill--blue">Timeline</span>
              <h2 className="body-h2">How Long Does a <em>Mailchimp to GoHighLevel Migration</em> Take?</h2>
              <p className="body-p" style={{ marginBottom: 24 }}>Mailchimp migrations are typically the fastest in our migration portfolio — the absence of a complex CRM data model means most of the timeline is driven by automation rebuild count and list size.</p>
              <div className="tier-grid">
                <div className="tier tier--a">
                  <div className="tier__top"><div className="tier__label">Simple</div><div className="tier__time">1–2 <span className="tier__unit">weeks</span></div></div>
                  <div className="tier__body"><div className="tier__list"><div className="tier__item"><div className="tier__dot"></div>1 Audience, under 5,000 contacts</div><div className="tier__item"><div className="tier__dot"></div>Fewer than 5 Customer Journeys</div><div className="tier__item"><div className="tier__dot"></div>Basic welcome series and broadcast emails</div><div className="tier__item"><div className="tier__dot"></div>No Shopify integration</div></div></div>
                </div>
                <div className="tier tier--b">
                  <div className="tier__top"><div className="tier__label">Standard</div><div className="tier__time">2–3 <span className="tier__unit">weeks</span></div></div>
                  <div className="tier__body"><div className="tier__list"><div className="tier__item"><div className="tier__dot"></div>2 to 5 Audiences requiring deduplication</div><div className="tier__item"><div className="tier__dot"></div>5,000 to 25,000 contacts</div><div className="tier__item"><div className="tier__dot"></div>5 to 15 Customer Journeys to rebuild</div><div className="tier__item"><div className="tier__dot"></div>Multiple form and landing page rebuilds</div></div></div>
                </div>
                <div className="tier tier--c">
                  <div className="tier__top"><div className="tier__label">Complex</div><div className="tier__time">3–4 <span className="tier__unit">weeks</span></div></div>
                  <div className="tier__body"><div className="tier__list"><div className="tier__item"><div className="tier__dot"></div>5+ Audiences, 25,000+ contacts</div><div className="tier__item"><div className="tier__dot"></div>15+ Customer Journeys with advanced branching</div><div className="tier__item"><div className="tier__dot"></div>Shopify integration requiring configuration</div><div className="tier__item"><div className="tier__dot"></div>Large template library requiring rebuilding</div></div></div>
                </div>
              </div>

              <div style={{ marginTop: 28 }}>
                <div className="price-box">
                  <div className="price-lbl">Mailchimp to GHL Migration</div>
                  <div className="price-num">$1,500 <span>USD</span></div>
                  <div className="price-note">Starting price · Fixed fee · Delivered in 2 to 3 weeks</div>
                  <div className="p-div"></div>
                  <div className="pf"><span className="pf-ck">✓</span>Unsubscribe DND processing before any subscriber import</div>
                  <div className="pf"><span className="pf-ck">✓</span>Cross-Audience deduplication and tag merge</div>
                  <div className="pf"><span className="pf-ck">✓</span>Contact import with full merge field and tag mapping</div>
                  <div className="pf"><span className="pf-ck">✓</span>All Customer Journeys rebuilt in GHL workflows</div>
                  <div className="pf"><span className="pf-ck">✓</span>Email domain warm-up managed for 3 weeks</div>
                  <div className="pf"><span className="pf-ck">✓</span>Forms, landing pages, and templates rebuilt in GHL</div>
                  <div className="pf"><span className="pf-ck">✓</span>Team training and handover documentation</div>
                  <Link href="/contact" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>Book a Free Migration Assessment →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="sec sec--off" aria-label="Social proof">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <span className="pill pill--green">Real Results</span>
            <h2 className="sec-h2">Mailchimp to GoHighLevel Migration Results</h2>
          </div>
          <div className="proof-grid" style={{ marginBottom: 32 }}>
            <div className="proof-card"><div className="proof-card__n">200+</div><div className="proof-card__l">GHL Builds and Migrations Delivered</div></div>
            <div className="proof-card"><div className="proof-card__n">0</div><div className="proof-card__l">Compliance Violations Across All Migrations</div></div>
            <div className="proof-card"><div className="proof-card__n">6</div><div className="proof-card__l">Countries — US, UK, UAE, AU, SG, IN</div></div>
            <div className="proof-card"><div className="proof-card__n">2–3wks</div><div className="proof-card__l">Average Mailchimp Migration Delivery Time</div></div>
          </div>
          <div className="case-block">
            <div>
              <div className="case-block__label">Migration Case Study — Service Business</div>
              <p className="case-block__quote">"I had 18,000 contacts across three Mailchimp Audiences and had no idea I had thousands of duplicates because the same person had signed up through different lead magnets. GHL Scale Up ran the deduplication before the import and we went from 18,000 to 11,400 unique contacts. Our open rates in GHL are better than they were in Mailchimp because we are finally sending to clean, real people. The compliance processing gave me peace of mind too — I knew every unsubscribe was honoured."</p>
              <p className="case-block__attr">— Service Business Owner, Canada</p>
            </div>
            <div className="case-metrics">
              <div className="case-metric"><div className="case-metric__n">36%</div><div className="case-metric__l">Fewer contacts after deduplication — cleaner list, better deliverability</div></div>
              <div className="case-metric"><div className="case-metric__n">2.5wks</div><div className="case-metric__l">Full Mailchimp to GHL migration including 3 Audiences and 8 Customer Journeys</div></div>
              <div className="case-metric"><div className="case-metric__n">$0</div><div className="case-metric__l">Compliance risk — every unsubscribe processed as Email DND before first send</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 2 OF 3 */}
      <section className="cta" aria-label="Mid-page call to action">
        <div className="wrap">
          <div className="cta__in">
            <span className="pill pill--yellow">Free Migration Assessment</span>
            <h2 className="cta__h2">Ready to Move from <em>Mailchimp to GoHighLevel?</em></h2>
            <p className="cta__sub">Book a free 30-minute migration assessment. We review your Mailchimp account, confirm your Audience count, automation complexity, and any Shopify considerations — and give you a fixed price scope document before any work begins.</p>
            <p className="cta__note">No commitment required. Aryan personally responds within a few hours.</p>
            <div className="cta__acts"><Link href="/contact" className="btn btn--primary">Book a Free Migration Assessment →</Link></div>
            <div className="cta__contacts">
              <span className="cta__contact-item">📧 <a href="mailto:aryan@ghlscaleup.com">aryan@ghlscaleup.com</a></span>
              <span className="cta__contact-item">📞 <a href="tel:+919893270210">+91 98932 70210</a></span>
              <span className="cta__contact-item">💬 <a href="https://wa.me/919893270210">WhatsApp: +91 98932 70210</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq" aria-labelledby="faq-h2">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <span className="pill pill--blue">FAQ</span>
            <h2 className="sec-h2" id="faq-h2">Mailchimp to GoHighLevel Migration — Frequently Asked Questions</h2>
            <p className="sec-sub">Every question below is specific to Mailchimp migrations. These are the questions Mailchimp users ask most before migrating to GHL.</p>
          </div>
          <div className="faq-wrap">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  {faq.q}
                  <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READ OUR ARTICLES */}
      <section className="sec sec--off" aria-labelledby="articles-h2">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <span className="pill pill--blue">Further Reading</span>
            <h2 className="sec-h2" id="articles-h2">Read Our Articles on Mailchimp to GoHighLevel Migration</h2>
          </div>
          <div className="articles-grid">
            <article className="article-card">
              <div className="article-card__type">BOFU Guide</div>
              <h3 className="article-card__h3">Mailchimp to GoHighLevel Migration: The Complete Guide Including Compliance</h3>
              <p className="article-card__p">The full technical walkthrough — unsubscribe DND processing, cross-Audience deduplication, Customer Journey rebuild order, and the email warm-up schedule that protects deliverability.</p>
              <Link href="/blog/mailchimp-to-gohighlevel-migration" className="article-card__link">Read the Mailchimp migration guide →</Link>
            </article>
            <article className="article-card">
              <div className="article-card__type">Planning Guide</div>
              <h3 className="article-card__h3">GHL Migration Timeline Explained: How Long Does It Actually Take?</h3>
              <p className="article-card__p">Honest timelines by platform and complexity tier — including why Mailchimp migrations are typically the fastest in the GHL migration portfolio.</p>
              <Link href="/blog/ghl-migration-timeline" className="article-card__link">Read the migration timeline guide →</Link>
            </article>
            <article className="article-card">
              <div className="article-card__type">Common Mistakes</div>
              <h3 className="article-card__h3">Common GHL Migration Mistakes and How to Avoid Them</h3>
              <p className="article-card__p">The six most damaging migration mistakes — including importing Mailchimp contacts without processing unsubscribes first, and why this is both a legal and deliverability problem.</p>
              <Link href="/blog/ghl-migration-mistakes" className="article-card__link">Read the migration mistakes guide →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* OTHER PLATFORMS */}
      <section className="sec" aria-label="Other platforms">
        <div className="wrap">
          <div className="sec-hdr sec-hdr--center">
            <h2 className="sec-h2">Also Migrating from Another Platform?</h2>
            <p className="sec-sub">We migrate from all major email marketing platforms, CRMs, and funnel builders into GoHighLevel.</p>
          </div>
          <div className="platform-strip">
            <Link href="/hubspot-to-gohighlevel" className="platform-tag">HubSpot to GoHighLevel →</Link>
            <Link href="/activecampaign-to-gohighlevel" className="platform-tag">ActiveCampaign to GoHighLevel →</Link>
            <Link href="/clickfunnels-to-gohighlevel" className="platform-tag">ClickFunnels to GoHighLevel →</Link>
            <Link href="/kajabi-to-gohighlevel" className="platform-tag">Kajabi to GoHighLevel →</Link>
            <Link href="/zoho-to-gohighlevel" className="platform-tag">Zoho to GoHighLevel →</Link>
            <Link href="/keap-to-gohighlevel" className="platform-tag">Keap to GoHighLevel →</Link>
          </div>
          <p className="platform-footer">See all supported platforms on our <Link href="/services/migration" style={{ color: 'var(--nb)', fontWeight: 600 }}>GHL Migration Services hub page</Link>.</p>
        </div>
      </section>

      {/* CTA 3 OF 3 */}
      <section className="cta" aria-label="Final call to action">
        <div className="wrap">
          <div className="cta__in">
            <span className="pill pill--yellow">Start Your Migration</span>
            <h2 className="cta__h2">Book Your Free <em>Mailchimp to GoHighLevel</em> Migration Assessment</h2>
            <p className="cta__sub">30 minutes. We review your Mailchimp account, confirm Audience count and automation complexity, and give you a fixed price scope document. No obligation to proceed.</p>
            <p className="cta__note">Aryan personally reviews every inquiry and responds within a few hours — not an automated sequence.</p>
            <div className="cta__acts">
              <Link href="/contact" className="btn btn--primary">Book a Free Migration Assessment →</Link>
              <Link href="/services/migration" className="btn btn--outline">View All Migration Services</Link>
            </div>
            <div className="cta__contacts">
              <span className="cta__contact-item">📧 <a href="mailto:aryan@ghlscaleup.com">aryan@ghlscaleup.com</a></span>
              <span className="cta__contact-item">📞 <a href="tel:+919893270210">+91 98932 70210</a></span>
              <span className="cta__contact-item">💬 <a href="https://wa.me/919893270210">WhatsApp: +91 98932 70210</a></span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Add all the CSS from your HTML file here */
        /* Since this is a large CSS file, I'll include it as a separate import or in a global CSS file */
        /* For production, move the CSS to app/globals.css or create a separate CSS module */
      `}</style>
    </>
  );
}