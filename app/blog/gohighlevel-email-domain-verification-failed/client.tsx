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
      MessageCircle,
      Phone,
      Image as ImageIcon,
      Mail,
      Rocket,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function GoHighLevelEmailDomainNotVerifyingClient() {
      const [activeId, setActiveId] = useState<string>('');
      const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

      useEffect(() => {
            const sections = [
                  'introduction',
                  'why-not-verifying',
                  'which-sending-setup',
                  'what-status-means',
                  'which-record-failing',
                  'how-long-verification',
                  'fix-missing-incorrect-records',
                  'duplicate-conflicting-records',
                  'cloudflare',
                  'check-records-live',
                  'still-unverified',
                  'should-delete-records',
                  'error-cause-fixes',
                  'confirm-fixed',
                  'contact-support',
                  'faq',
                  'what-next',
            ];

            const handleScroll = () => {
                  let currentSection = sections[0];

                  for (const id of sections) {
                        const element = document.getElementById(id);
                        if (!element) continue;
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 180) {
                              currentSection = id;
                        } else {
                              break;
                        }
                  }

                  setActiveId(currentSection);

                  const heroSection = document.querySelector('section.bg-\\[\\#0B1628\\]');
                  if (heroSection) {
                        const heroBottom = heroSection.getBoundingClientRect().bottom;
                        setShowFloatingProjectHelp(heroBottom < 0);
                  }
            };

            handleScroll();
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
                  q: 'Why is my GoHighLevel email domain not verifying?',
                  a: "Usually the DNS changes are not visible yet, or a record's host, type or value does not match, or it is in the wrong DNS zone. Look up each record by its exact name before changing anything."
            },
            {
                  q: 'How long does GoHighLevel domain verification take?',
                  a: 'HighLevel says typically 1 to 10 minutes, and propagation can take up to 24 to 48 hours depending on your provider. Other pages quote different numbers.'
            },
            {
                  q: 'Why is my sending domain stuck on pending?',
                  a: "HighLevel's email pages do not define 'pending'. Treat it as not yet verified: check lookups and conflicts, and allow time."
            },
            {
                  q: 'Can incorrect MX records prevent verification?',
                  a: 'Yes, if the value or host does not match, or if existing MX records point to another service (the already pointing error). Do not remove live MX records without a plan.'
            },
            {
                  q: 'Can duplicate DNS records cause problems?',
                  a: "Yes for SPF, DMARC and DKIM, which must be unique per HighLevel's pages. Other duplicates are not automatically wrong."
            },
            {
                  q: 'Does Cloudflare affect verification?',
                  a: 'Yes. HighLevel says proxied CNAME records cause verification to fail. Set them to DNS only.'
            },
            {
                  q: 'My records are correct but it still says unverified. What now?',
                  a: 'Confirm lookups from two sources, rule out conflicts and proxying, allow for caching, click Verify domain again, then contact support with evidence.'
            },
            {
                  q: 'Should I delete my DNS records and start over?',
                  a: 'No. Edit only the failing row and keep a copy of what was there.'
            },
            {
                  q: 'When should I contact support?',
                  a: 'After the checks above and the longest documented wait (24 to 48 hours).'
            }
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'introduction', title: 'Introduction: What This Covers' },
            { id: 'why-not-verifying', title: 'Why is my GoHighLevel email domain not verifying?' },
            { id: 'which-sending-setup', title: 'Which sending setup am I verifying: LC Email, Mailgun or SMTP?' },
            { id: 'what-status-means', title: 'What does unverified, pending or failed mean in GoHighLevel?' },
            { id: 'which-record-failing', title: 'How do I find out which DNS record is failing?' },
            { id: 'how-long-verification', title: 'How long does GoHighLevel domain verification take?' },
            { id: 'fix-missing-incorrect-records', title: 'How do I fix missing or incorrect DNS records in GoHighLevel?' },
            { id: 'duplicate-conflicting-records', title: 'Can duplicate or conflicting DNS records stop verification?' },
            { id: 'cloudflare', title: 'Does Cloudflare stop GoHighLevel domain verification?' },
            { id: 'check-records-live', title: 'How do I check whether my GoHighLevel DNS records are live?' },
            { id: 'still-unverified', title: 'GoHighLevel still says unverified but my DNS records look right: what now?' },
            { id: 'should-delete-records', title: 'Should I delete my existing DNS records to fix verification?' },
            { id: 'error-cause-fixes', title: 'What causes each GoHighLevel domain verification error, and what fixes it?' },
            { id: 'confirm-fixed', title: 'How do I confirm the verification problem is fixed?' },
            { id: 'contact-support', title: 'When should I contact GoHighLevel support or my DNS provider?' },
            { id: 'faq', title: 'Frequently Asked Questions' },
            { id: 'what-next', title: 'What should I do next?' },
      ];

      const causeTable = [
            { seeing: 'Saved the records minutes or a few hours ago', cause: 'DNS changes not visible yet', where: 'How long does verification take?' },
            { seeing: 'One record shows as not verified, the rest are fine', cause: 'Wrong host, type or value on that record', where: 'How do I fix missing or incorrect DNS records?' },
            { seeing: 'Lookup tools show nothing at the name', cause: 'Record added in the wrong DNS zone, or did not save', where: 'Right DNS zone; Did the change save?' },
            { seeing: 'Error says the domain is already pointing to an email server', cause: 'Existing records for another mail service on that name', where: 'Duplicate or conflicting records' },
            { seeing: 'Error mentions a pre-existing record', cause: 'A wildcard record', where: 'Wildcards' },
            { seeing: 'Only the CNAME fails and you use Cloudflare', cause: 'CNAME is proxied (orange cloud)', where: 'Does Cloudflare stop verification?' },
            { seeing: 'Everything looks right and it is still unverified', cause: 'Caching, stale status, or something only support can see', where: 'Still says unverified' },
      ];

      const sendingSetupTable = [
            { setup: 'LC Email with a dedicated domain', where: "In HighLevel, under Settings, Email Services, Dedicated Domain & IP. HighLevel's Add and Verify page describes the flow, and each record shows its own verification status.", does: 'Everything in this guide applies.' },
            { setup: 'Your own Mailgun in the agency', where: "Domain verified through the Mailgun service. HighLevel's error page tells you to click Verify DNS Settings and check that all 5 records have a green checkmark, and to click again if the page may be showing a stale status. That page is undated.", does: "The DNS checks apply. The record values come from Mailgun and HighLevel's Mailgun screen." },
            { setup: 'Custom SMTP', where: 'HighLevel says dedicated domains apply to LC Email only. With SMTP, your provider decides which records to publish.', does: "The DNS checks apply, but you troubleshoot against the provider's list, not HighLevel's." },
      ];

      const timingTable = [
            { source: 'HighLevel: Add and Verify (30 Jun 2026)', says: 'Verification typically completes within 1 to 10 minutes. Propagation can take up to 24 to 48 hours depending on your provider. Recommended TTL: 300 seconds.', note: 'The most specific official statement' },
            { source: 'HighLevel: Dedicated Domains Overview (17 Apr 2026)', says: 'Propagation can take up to 24 hours. If it has been longer, double-check your DNS settings.', note: 'Gives a point at which to start doubting' },
            { source: 'HighLevel: Email Authentication Errors (1 Jul 2026)', says: 'DNS propagation: 2 to 48 hours.', note: 'Written about authentication, not the Verify step' },
            { source: 'Postbox Services (third party, updated 23 Oct 2025)', says: '5 to 30 minutes', note: 'Unsourced' },
            { source: 'Consultevo (third party, 28 Jun 2026)', says: 'Wait at least 30 to 60 minutes before verifying again', note: 'Unsourced' },
      ];

      const hostTable = [
            { behavior: 'Appends the domain automatically', type: 'abc.example.com', stored: 'abc.example.com.example.com (wrong)' },
            { behavior: 'Appends the domain automatically', type: 'abc', stored: 'abc.example.com (right)' },
      ];

      const checkTable = [
            { tool: 'Google Admin. Toolbox Dig', lookup: 'Type txt: before the name for TXT (Google documents this prefix).', see: 'The record with your value, in full', missing: 'Record absent or unexpected: DNS-side problem (zone, host, saved) or not visible yet', cannot: 'Whether HighLevel accepts it' },
            { tool: 'MXToolbox', lookup: 'DNS Lookup for CNAME and TXT; MX Lookup for MX (as one third-party guide describes)', see: 'Same', missing: 'Same', cannot: 'Whether HighLevel accepts it, or whether mail authenticates' },
            { tool: 'nslookup or dig on your computer', lookup: 'For example nslookup -q=txt name 8.8.8.8 (Google documents the nslookup form)', see: 'The same, from one resolver', missing: 'A different resolver may disagree during caching', cannot: 'Same' },
      ];

      const threeThingsTable = [
            { what: 'DNS visibility', question: 'Can a resolver find the record?', know: 'A lookup shows it with the right value' },
            { what: 'HighLevel verification', question: 'Does HighLevel recognize the setup?', know: 'The record or domain shows verified in HighLevel' },
            { what: 'Email authentication', question: 'Does a real email pass SPF, DKIM and DMARC?', know: "A test message's headers show passes. See (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC)" },
      ];

      const deleteGuideTable = [
            { record: 'The HighLevel records you added', guidance: 'Safe to edit. Copy the old value first.' },
            { record: 'A duplicate SPF, DMARC or DKIM', guidance: 'Merge or remove only after reading what each one allows' },
            { record: 'Existing MX or SPF on the same name', guidance: 'Identify what uses them first. Prefer a subdomain if anything is live' },
            { record: 'A wildcard record', guidance: 'Note what it points to. Consider adding records manually instead of removing it' },
            { record: 'Website A, AAAA and unrelated CNAME records', guidance: 'Do not touch unless one sits at the exact name HighLevel needs' },
            { record: 'Cloudflare proxy on website records', guidance: 'Leave as is. Only the HighLevel CNAME records need DNS only' },
            { record: 'Everything (delete all and start over)', guidance: "Don't. This is never needed for a single failing record" },
      ];

      const errorCauseTable = [
            { problem: 'Unverified minutes after saving', cause: 'Change not visible yet', check: 'Lookup of the exact name', action: 'Wait, recheck lookup, then Verify domain once' },
            { problem: 'One record not verified', cause: 'Wrong host, type or value', check: 'Compare against HighLevel character by character', action: 'Edit that row only' },
            { problem: 'Lookup returns nothing for any record', cause: 'Wrong DNS zone, or not saved', check: "Domain's NS records; DNS panel list", action: 'Add records at the zone the nameservers point to' },
            { problem: 'Records appear, domain still unverified', cause: 'Caching, conflict, or stale status', check: 'Duplicates, wildcard, proxy; second resolver', action: 'Fix conflict, wait, Verify domain again' },
            { problem: "'Domain already pointing to email server!'", cause: 'Existing mail records on that name', check: 'MX and SPF at that exact name', action: 'Identify what uses them; use a subdomain if live' },
            { problem: "'Pre-existing record'", cause: 'Wildcard record', check: 'Wildcard at the zone', action: 'Add per-subdomain records, or remove wildcard with care' },
      ];

      const supportTable = [
            { contact: 'Your DNS provider', when: 'Records will not save, do not appear in lookups, or you cannot tell which zone is live', bring: 'Domain, record name, screenshot of the panel, nameservers' },
            { contact: 'HighLevel support', when: 'Lookups show the right records from two sources, no conflicts, not proxied, and 24 to 48 hours have passed', bring: 'Domain or subdomain, sending setup, screenshots of per-record status, lookup results with dates, list of changes and times' },
      ];

      const ProjectHelpCard = () => (
            <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
                  <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your migration.</p>
                  <Link
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel Email Domain Not Verifying</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              {/* Post Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Setup</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">DNS</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Cloudflare</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              {/* H1 */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel Email Domain Not Verifying? How to Fix It
                              </h1>

                              {/* Author */}
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
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · Based on HighLevel&apos;s published documentation, read 28 to 30 October 2026</div>
                                    </div>
                              </div>

                              {/* Quick Answer Box */}
                              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                          <Zap className="w-5 h-5 text-[#F8D000]" />
                                          <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                                          Your sending domain is added in GoHighLevel, the DNS records are in place, and the status still will not change to verified. Before you delete anything, work out which of two situations you are in: the change has not reached everyone yet, or something in DNS does not match what HighLevel is looking for. This guide helps you tell the difference, find the one record that is causing it, fix it without touching records you depend on, and confirm the result.
                                    </p>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                          <em>By GHL Scale Up. Based on HighLevel&apos;s published documentation (read 28 to 30 October 2026), Cloudflare and Google documentation, and the DNS standards. Nothing here was tested in a live HighLevel account, and menu names can change, so trust the labels on your own screen if they differ.</em>
                                    </p>
                              </div>

                              {/* CTA Buttons */}
                              <div className="flex flex-wrap gap-3">
                                    <Link
                                          href="/contact"
                                          className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
                                    >
                                          <Rocket className="w-4 h-4" />
                                          Need Help With Domain Verification? Let&apos;s Talk
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                          href="#which-record-failing"
                                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                                    >
                                          Jump to the Diagnosis Steps
                                          <ChevronDown className="w-4 h-4" />
                                    </Link>
                              </div>
                        </div>
                  </section>

                  {/* MAIN LAYOUT */}
                  <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 md:py-10">
                        <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

                              {/* LEFT COLUMN: SIDEBAR */}
                              <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out order-1">
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
                                                5+ years GHL experience · 200+ systems built globally. We implement GoHighLevel for agencies and service businesses.
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
                              </aside>

                              {/* RIGHT COLUMN: BLOG CONTENT */}
                              <main className="min-w-0 order-2">

                                    {/* Mobile TOC */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8 lg:hidden">
                                          <div className="flex items-center gap-2 mb-4">
                                                <BookOpen className="w-4 h-4 text-[#0E9BF0]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">What&apos;s in this guide</span>
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


                                    {/* Introduction */}
                                    <h2 id="introduction" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          Introduction: What This Covers
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Your sending domain is added in GoHighLevel, the DNS records are in place, and the status still will not change to verified. Before you delete anything, work out which of two situations you are in: the change has not reached everyone yet, or something in DNS does not match what HighLevel is looking for. This guide helps you tell the difference, find the one record that is causing it, fix it without touching records you depend on, and confirm the result.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          It covers the email sending domain (the domain or subdomain you add under Dedicated Domain &amp; IP). It does not cover verifying recipient email addresses, or connecting a website domain, which are different features. If you have not finished setting up email at all, start with (Planned link, not yet published: the complete GoHighLevel email setup checklist). If you have not yet connected the domain, (Planned link, not yet published: step-by-step guide to connecting a sending domain) walks through it.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">Where this comes from:</strong> HighLevel&apos;s published help pages (read 28 to 30 October 2026), Cloudflare and Google documentation, and the DNS standards. Nothing here was tested in a live HighLevel account, and menu names can change, so trust the labels on your own screen if they differ.
                                    </p>

                                    {/* Full-width Image Block */}
                                    <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                          <div className="relative w-full h-auto bg-[#F8F9FB]">
                                                <Image
                                                      src="/blog/gohighlevel-email-domain-verification-failed.png"
                                                      alt="DNS records table with one record highlighted for review, for fixing a GoHighLevel email domain that is not verifying"
                                                      width={1200}
                                                      height={500}
                                                      className="w-full h-auto object-cover"
                                                      priority
                                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                                />
                                          </div>
                                          <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                                                <ImageIcon className="w-3.5 h-3.5" />
                                                <span>DNS records table with one record highlighted for review, for fixing a GoHighLevel email domain that is not verifying</span>
                                          </div>
                                    </div>

                                    {/* Section: Why Not Verifying */}
                                    <h2 id="why-not-verifying" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Why is my GoHighLevel email domain not verifying?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HighLevel marks a domain verified once the DNS records it gave you can be found, at the right names, with the right values. When it does not verify, the cause is almost always one of two things: the records have not become visible yet, or what is published does not match what HighLevel expects. Here are the documented and common causes, with where each is handled below.
                                    </p>
                                    <div className="overflow-x-auto mb-6">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you may be seeing</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Likely cause</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where to look</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {causeTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.seeing}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.cause}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.where}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The diagram follows the order this guide uses. The core idea: look at what is actually published before you change anything.
                                    </p>

                                    {/* Diagram */}
                                    <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-[#DDE1E9]">
                                          <Image
                                                src="/blog/gohighlevel-email-domain-verification-failed-diagram.png"
                                                alt="Diagnosis path for a GoHighLevel sending domain that will not verify"
                                                width={1200}
                                                height={800}
                                                className="w-full h-auto object-contain bg-white"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                          />
                                    </div>

                                    {/* Section: Which Sending Setup */}
                                    <h2 id="which-sending-setup" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Which sending setup am I verifying: LC Email, Mailgun or SMTP?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The three ways of sending do not verify the same way, so check which one you are on first.
                                    </p>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Setup</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where verification happens</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What this article does for it</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {sendingSetupTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.setup}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.where}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.does}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          If you are not sure which you use, check how email is configured in your account before changing anything. Switching between services can affect outgoing email for the whole agency in some setups, so confirm before you change anything there.
                                    </p>

                                    {/* Section: What Status Means */}
                                    <h2 id="what-status-means" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What does unverified, pending or failed mean in GoHighLevel?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          &apos;Pending&apos; and &apos;failed&apos; are the words people search with, but HighLevel&apos;s email documentation does not define them. What the pages I read do say:
                                    </p>
                                    <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Each record has its own verification status, and the domain is marked verified once all records check out. A fully verified domain shows as Verified / Active (Add and Verify, 30 June 2026).</li>
                                          <li>The overview names two errors: &apos;Domain already pointing to email server!&apos;, meaning the domain already has DNS records connected to a different service, and a &apos;pre-existing record&apos; error that a wildcard record can trigger (Dedicated Email Sending Domains Overview, 17 April 2026).</li>
                                          <li>A sending error can read &apos;Domain is not allowed to send: The domain is unverified and requires DNS configuration&apos; (common unsuccessful email errors, undated). That means the domain is not yet verified, not that anything is wrong with your message.</li>
                                          <li>The SSL certificate is generated automatically once the domain is verified, so a missing certificate on an unverified domain is expected.</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Two cautions. First, a &apos;Pending&apos; status appears in HighLevel&apos;s separate website-domain guide, which says to double-check DNS values or reach out to support if it stays pending for over 24 hours. That is a different feature, so do not assume the same rule applies to your sending domain. Second, one troubleshooting page I found lists &apos;SSL Pending&apos; and &apos;SSL Unknown&apos; statuses, but it shows no publisher or date, so I have not treated them as HighLevel&apos;s wording.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          <strong className="text-[#1A2236]">What a status does not tell you:</strong> &apos;unverified&apos; does not say whether the record is missing, wrong or just not visible yet. That is what the next sections are for.
                                    </p>

                                    {/* Section: Which Record Failing */}
                                    <h2 id="which-record-failing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How do I find out which DNS record is failing?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Check before you change. Deleting and re-adding records in a panic can reproduce the same mistake, removes the evidence of what was there, and may leave a not-found answer cached longer than necessary (more on that below).
                                    </p>
                                    <div className="space-y-3 mb-6">
                                          {[
                                                'In HighLevel, open Settings, Email Services, Dedicated Domain &amp; IP, and open your domain. Note which records are not verified.',
                                                'For each failing record, copy the record type, the host or name, and the value exactly as HighLevel shows them. Use HighLevel&apos;s Copy buttons instead of retyping.',
                                                'If you have just changed DNS, wait a few minutes before using Verify domain again, as HighLevel advises. Then use it once.',
                                                'Open your DNS provider and find the matching row. Compare type, host and value character by character.',
                                                'Look the record up with a public tool, using the exact name (see the checking section below). This tells you whether the problem is in DNS or in HighLevel.',
                                                'Run this checklist before editing: Is it the right domain or subdomain? Is it the right sending setup? Did the change save? Is the record in the zone your domain actually uses? Is the host correct? Is the value complete? Is another record in the way? Has enough time passed?',
                                          ].map((step, idx) => (
                                                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                      <div className="flex items-start gap-3">
                                                            <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Before you edit anything, copy the current records into a note. Some providers let you export the zone. If something later breaks, you will know what to restore.
                                    </p>

                                    {/* Section: How Long Verification */}
                                    <h2 id="how-long-verification" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How long does GoHighLevel domain verification take?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          There is no single documented number, and the sources disagree. Here is what each says.
                                    </p>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Source</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it says</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Note</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {timingTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.source}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.says}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.note}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">A practical way to use that.</strong> This is my reading of the sources, not a HighLevel rule:
                                    </p>
                                    <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Just saved, and a lookup does not show the record yet: wait. Recheck the lookup, not HighLevel, until the record appears.</li>
                                          <li>Lookup shows the correct record, HighLevel still unverified: wait a few minutes, click Verify domain once, and look for conflicts (below).</li>
                                          <li>Lookup shows nothing, or the wrong value, hours later: waiting will not fix this. It is a configuration problem.</li>
                                          <li>HighLevel&apos;s overview says to double-check DNS after 24 hours. Past 24 to 48 hours with everything checked: escalate (last section).</li>
                                    </ul>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          Why do DNS tools show different results?
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          DNS does not push updates. Resolvers keep a copy of each answer for its TTL and ask again when it expires, so a change is visible once the copies you are asking have expired (Julia Evans explains this well). Three things follow:
                                    </p>
                                    <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>A brand-new name that nobody has looked up before can show up immediately.</li>
                                          <li>A name that was looked up before the record existed can be remembered as not found. That negative answer is cached for a time set by the zone&apos;s SOA record (RFC 2308). The RFC suggests one to three hours as a sensible default and warns that more than a day has caused problems.</li>
                                          <li>Different resolvers behave differently. A lower TTL helps future changes. It does not shorten the time for copies already cached under the old TTL.</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          I do not know which resolver HighLevel uses for its check, so a public lookup showing the record is encouraging but not a guarantee.
                                    </p>

                                    {/* Section: Fix Missing Incorrect Records */}
                                    <h2 id="fix-missing-incorrect-records" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How do I fix missing or incorrect DNS records in GoHighLevel?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Compare three things for each failing record: the type (TXT, CNAME or MX), the host or name, and the value. HighLevel&apos;s guide is blunt about it: records must match exactly, because a single character difference can cause failure. Then work through these causes, most common first.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          Is the record in the right DNS zone?
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          DNS records only count at the provider whose nameservers your domain points to. A typical trap: the domain was bought at one company, the nameservers were later moved to Cloudflare (or another host), and the records were added in the original company&apos;s panel. They save without error, but nothing outside that panel can see them.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">How to check:</strong> look up the domain&apos;s NS records with a DNS lookup tool (most let you choose the record type). Whichever provider the nameservers belong to is where the records must live. <strong className="text-[#1A2236]">Fix:</strong> add the record there. Do not delete the copy in the other panel until you have confirmed what else uses it.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          Is the host or name field wrong?
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HighLevel&apos;s guide says a root domain uses @ and, for a subdomain, you enter only the subdomain part. It warns against extra @ symbols and against leaving out the subdomain. Many DNS panels add your domain automatically, so typing the full name can create a doubled hostname. The names below are illustrative only, not HighLevel values:
                                    </p>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Panel behavior</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you type</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What may actually be stored</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {hostTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.behavior}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.type}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.stored}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Providers differ. Google&apos;s own TXT troubleshooting page, for example, tells you to enter your full domain name in its hostname field, so do not assume one rule fits everywhere. <strong className="text-[#1A2236]">How to check:</strong> look up the exact name HighLevel expects. If the result is empty, look at how your panel displays the stored name and compare it with what you intended. <strong className="text-[#1A2236]">Fix:</strong> edit that one record&apos;s host and save.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          Is the record type or value wrong?
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Confirm the type matches HighLevel&apos;s (TXT, CNAME or MX). A value pasted into the wrong type will not verify. Look for a truncated value, a missing character at the start or end, or stray spaces or line breaks (a common copy-and-paste issue reported by third-party guides). Long values such as DKIM keys can be displayed in several pieces by lookup tools. Compare the start, the end and the overall length, not just whether it looks similar. If your panel asks for extra fields, such as an MX priority, follow what HighLevel shows. If it shows none, check the provider&apos;s guide before guessing. If you removed and re-added the domain in HighLevel, use the values it shows now. I could not confirm whether earlier values stay valid.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          Did the change actually save?
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Reload your DNS panel and confirm the record is listed. Some providers need a separate save or publish step. A record that is not listed cannot verify.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          <strong className="text-[#1A2236]">Fixing safely:</strong> edit only the row that is wrong. Leave website records (A, AAAA, and CNAMEs unrelated to this domain) and existing mail records alone. Note the time of your change.
                                    </p>

                                    {/* Section: Duplicate Conflicting Records */}
                                    <h2 id="duplicate-conflicting-records" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Can duplicate or conflicting DNS records stop verification?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Sometimes, but not every duplicate is a problem. Many records of the same type are normal. The trouble is with specific record types that must be unique, or with records that point the name at a different service.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          Two SPF, DMARC or DKIM records
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HighLevel says a domain should have only one SPF TXT record and one DMARC record, and that multiple DKIM records for the same domain are not supported. If you already had an SPF record before adding HighLevel&apos;s, do not add a second one and do not simply delete the old one: it may authorize your other senders. Merge the values into one record. (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC) covers how.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          &apos;Domain already pointing to email server&apos;
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HighLevel&apos;s overview says this error means the domain already has DNS records connected to a different service. Its fix is to remove existing MX or SPF records, and it says that applies even to HighLevel ones. Read that carefully before acting, because removing MX records on a domain that runs live mailboxes stops your incoming mail.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A safer order, which is my judgment and not HighLevel&apos;s wording:
                                    </p>
                                    <div className="space-y-3 mb-6">
                                          {[
                                                'Look up the MX and SPF records on the exact name you are connecting, and identify what uses them.',
                                                'If real mailboxes or another sender depend on them, do not remove them. Connect a subdomain instead. HighLevel&apos;s Add &amp; Verify page accepts a domain or a subdomain, and a subdomain keeps your main domain&apos;s mail untouched.',
                                                'If the records are leftovers from something you no longer use, follow HighLevel&apos;s fix: remove only those records, after copying them to a note.',
                                                'Add HighLevel&apos;s records and verify again.',
                                          ].map((step, idx) => (
                                                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                      <div className="flex items-start gap-3">
                                                            <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
                                                      </div>
                                                </div>
                                          ))}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          The &apos;pre-existing record&apos; error and wildcard records
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HighLevel says a wildcard record (for example one that applies to every subdomain) can trigger this error. Its two options are to remove the wildcard temporarily, verify, then add it back, or to add the DNS records for each subdomain manually. Removing a wildcard even briefly can change how other names resolve, so write down exactly what it points to first and consider the manual route if anything depends on it.
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          A CNAME and another record at the same name
                                    </h3>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Under the DNS standard, a name that has a CNAME may have no other data (apart from DNSSEC records) (RFC 2181, section 10.1). If HighLevel wants a CNAME at a name where a TXT, A or MX record already exists, the panel may refuse, or one of the two will not work. Look at what is at that exact name before adding the CNAME.
                                    </p>

                                    {/* Section: Cloudflare */}
                                    <h2 id="cloudflare" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Does Cloudflare stop GoHighLevel domain verification?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          It can. HighLevel&apos;s Add and Verify page says to set the records to DNS only (the grey cloud) rather than Proxied (orange cloud), and that proxying the CNAME records used for email authentication is not supported and will cause verification to fail.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          What Cloudflare&apos;s documentation adds (this is Cloudflare&apos;s general guidance for CNAME-based verification, not something HighLevel has confirmed for sending domains):
                                    </p>
                                    <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Only A, AAAA and CNAME records can be proxied. MX and TXT records are always DNS only (Cloudflare: proxy status). So if just the CNAME fails, check its cloud icon.</li>
                                          <li>CNAME flattening can also change how a CNAME resolves, even when it is DNS only. Cloudflare&apos;s remedy is to ensure the record has Flatten turned off. Its page also mentions turning flattening off for all CNAMEs in the zone, which affects every CNAME, so prefer the per-record setting if your plan offers it.</li>
                                          <li>If an NS record delegates the subdomain to another provider, the record you need to edit may live there (Cloudflare: CNAME domain verification).</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Change only the cloud icon and flattening on the HighLevel CNAME records. Leave your website records alone: an orange cloud on them is usually intentional. I did not find provider-specific behavior documented for other DNS hosts, so I make no claims about them.
                                    </p>

                                    {/* Section: Check Records Live */}
                                    <h2 id="check-records-live" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How do I check whether my GoHighLevel DNS records are live?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Use the exact full name from HighLevel (host plus domain), not the bare domain, except for records that really live at the domain itself such as MX.
                                    </p>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Tool</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to look up</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you should see</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">If missing or different</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it cannot tell you</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {checkTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.tool}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.lookup}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.see}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.missing}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.cannot}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Check from two tools or two resolvers. If one shows the record and the other does not, you are likely seeing caching, not a mistake.
                                    </p>
                                    {/* Section: Three different things to confirm */}
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
                                          Three different things to confirm
                                    </h3>
                                    <div className="overflow-x-auto mb-4">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Question</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">How you know</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {threeThingsTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.what}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.question}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.know}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          These are related but not interchangeable. A record can be visible and still not verified, and a verified domain can still send mail that fails authentication.
                                    </p>

                                    {/* Section: Still Unverified */}
                                    <h2 id="still-unverified" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          GoHighLevel still says unverified but my DNS records look right: what now?
                                    </h2>
                                    <div className="space-y-3 mb-6">
                                          {[
                                                'Confirm the exact record shows in lookups from two sources, with the right type, name and full value.',
                                                'Check there is no second SPF, DMARC or DKIM, no existing mail records on that name, and no wildcard (previous sections).',
                                                'For CNAMEs on Cloudflare: DNS only and no flattening.',
                                                'Allow for caching. If the name was looked up before the record existed, a not-found answer may linger for up to a few hours (roughly the range RFC 2308 suggests).',
                                                'Click Verify domain once more. For the Mailgun path, HighLevel notes the page may show green checkmarks that are not current and that you should click Verify DNS Settings again to refresh.',
                                                'Compare against the values HighLevel shows now, not an earlier copy.',
                                                'If all of that holds and the longest documented window (24 to 48 hours) has passed, escalate.',
                                          ].map((step, idx) => (
                                                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                      <div className="flex items-start gap-3">
                                                            <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">{step}</p>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          A public lookup showing the record does not guarantee HighLevel recognizes it right away. That is why the last step is escalation, not more deleting.
                                    </p>

                                    {/* Section: Should Delete Records */}
                                    <h2 id="should-delete-records" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Should I delete my existing DNS records to fix verification?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Usually not. DNS changes can affect your website, mailboxes and other services. Here is a quick guide to what is generally safe.
                                    </p>
                                    <div className="overflow-x-auto mb-6">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Record</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Guidance</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {deleteGuideTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.record}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.guidance}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: Error Cause Fixes */}
                                    <h2 id="error-cause-fixes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What causes each GoHighLevel domain verification error, and what fixes it?
                                    </h2>
                                    <div className="overflow-x-auto mb-6">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Problem or status</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Possible cause</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Recommended action</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {errorCauseTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.problem}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.cause}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.action}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: Confirm Fixed */}
                                    <h2 id="confirm-fixed" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How do I confirm the verification problem is fixed?
                                    </h2>
                                    <div className="space-y-3 mb-6">
                                          {[
                                                'DNS: a lookup of each record shows the right type, name and value.',
                                                'HighLevel: each record shows verified and the domain shows Verified / Active. The SSL certificate should follow automatically.',
                                                'Real mail: send a test email from the domain and read the authentication results. (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC) shows how.',
                                          ].map((step, idx) => (
                                                <div key={idx} className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                      <div className="flex items-start gap-3">
                                                            <div className="w-7 h-7 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</div>
                                                            <p className="text-sm text-[#5C6880] leading-relaxed">{step}</p>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Verified does not mean mail will reach the inbox. Authentication and verification only remove one set of obstacles.
                                    </p>

                                    {/* Section: Contact Support */}
                                    <h2 id="contact-support" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          When should I contact GoHighLevel support or my DNS provider?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          HighLevel&apos;s pages I read name the hosting provider as the escalation route for DNS or SSL problems and say common issues can be fixed without contacting support. They list no support contact, so use whichever HighLevel support channel your plan offers.
                                    </p>
                                    <div className="overflow-x-auto mb-6">
                                          <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB]">
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Contact</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">When</th>
                                                            <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to bring</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {supportTable.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                                                                  <td className="p-3 text-[#1A2236] font-medium align-top">{item.contact}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.when}</td>
                                                                  <td className="p-3 text-[#5C6880] align-top">{item.bring}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    {/* Section: FAQ */}
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

                                    {/* Section: What Next */}
                                    <h2 id="what-next" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What should I do next?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Start with a lookup of the one record that fails, using its exact name. If it is not there, fix the zone, host, type or value. If it is there, check for conflicts and a proxied CNAME, allow for caching, and verify again. Keep a copy of what you change. If you still cannot get it to verify, send support the evidence in the last section. Once it is verified, test a real message with (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC).
                                    </p>

                                    {/* Sources */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Sources</h3>
                                          <ul className="space-y-2 text-sm text-[#5C6880]">
                                                <li>
                                                      <a href="https://help.gohighlevel.com/support/solutions/articles/48001226115" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Dedicated Email Sending Domains Overview &amp; Setup</a> (HighLevel, modified 17 April 2026).
                                                </li>
                                                <li>
                                                      <a href="https://help.gohighlevel.com/support/solutions/articles/15500000220" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Add and Verify Domain DNS Records</a> (HighLevel, modified 30 June 2026).
                                                </li>
                                                <li>
                                                      <a href="https://help.gohighlevel.com/support/solutions/articles/48001209322" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Common Unsuccessful Email Errors</a> (HighLevel, undated).
                                                </li>
                                                <li>
                                                      <a href="https://help.gohighlevel.com/support/solutions/articles/155000006793" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Email Authentication Errors</a> (HighLevel, modified 1 July 2026).
                                                </li>
                                                <li>
                                                      <a href="https://help.gohighlevel.com/support/solutions/articles/155000005132" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Connecting Your Domain on GHL</a> (HighLevel, modified 25 March 2026).
                                                </li>
                                                <li>
                                                      <a href="https://developers.cloudflare.com/dns/proxy-status/" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Proxy status</a> and <a href="https://developers.cloudflare.com/dns/cname-domain-verification/" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">CNAME domain verification</a> (Cloudflare).
                                                </li>
                                                <li>
                                                      <a href="https://datatracker.ietf.org/doc/rfc2308/" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">RFC 2308</a> and <a href="https://datatracker.ietf.org/doc/html/rfc2181" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">RFC 2181</a> (IETF).
                                                </li>
                                                <li>
                                                      <a href="https://jvns.ca/blog/2021/12/06/dns-doesn-t-propagate/" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">DNS does not propagate</a> (Julia Evans).
                                                </li>
                                                <li>
                                                      <a href="https://knowledge.workspace.google.com/admin/domains/troubleshooting-txt-records" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Troubleshoot TXT records</a> and <a href="https://toolbox.googleapps.com/apps/dig/" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">Dig tool</a> (Google Workspace).
                                                </li>
                                                <li>
                                                      <a href="https://mxtoolbox.com" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">MXToolbox</a>.
                                                </li>
                                          </ul>
                                    </div>

                                    {/* CTA - After FAQ */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
                                          <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                                                <strong className="text-white">Still stuck on a domain that will not verify?</strong>
                                          </p>
                                          <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                                                Talk to our GHL experts directly. We&apos;re here to help.
                                          </p>
                                          <div className="flex flex-wrap justify-center gap-3">
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                                                      <MessageCircle className="w-4 h-4" />
                                                      Ask an Expert
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20">
                                                      <Phone className="w-4 h-4" />
                                                      Call Us
                                                </Link>
                                          </div>
                                    </div>

                                    {/* Final CTA */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Look at what is published before you change anything.</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      Find the failing record, fix it safely, and confirm the result. GHL Scale Up implements GoHighLevel for agencies and service businesses.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                                                      Book Your Free Call
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                          </div>
                                    </div>

                                    {/* Author / Verification Section */}
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
                                                      <div className="text-xs text-[#5C6880]">GoHighLevel expert agency · 5+ years GHL experience · 200+ systems built globally</div>
                                                </div>
                                          </div>
                                          <p className="text-xs text-[#5C6880] leading-relaxed">
                                                Based on HighLevel&apos;s published documentation (read 28 to 30 October 2026), Cloudflare and Google documentation, and the DNS standards. This guide was not tested in a live HighLevel account, and menu names can change. Features, limits and usage rates change; confirm in your own account.
                                          </p>
                                          <Link href="/" className="text-[#0E9BF0] text-xs hover:underline mt-2 inline-block">ghlscaleup.com</Link>
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