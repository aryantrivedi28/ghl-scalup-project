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
  AlertTriangle,
  MessageCircle,
  Phone,
  Image as ImageIcon,
  Mail,
  Server,
  Globe,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Rocket,
  ListChecks,
  Route,
  Settings,
  Search,
  Filter,
  Lock,
  Clock,
  Network,
  Cloud,
  BarChart3,
  TrendingUp,
  Gauge,
  Thermometer,
  ShieldCheck,
  ShieldAlert,
  Ban,
  Repeat,
  Inbox,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function EmailDeliverabilityClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'why-not-reaching',
      'what-is-happening',
      'why-spam',
      'why-not-delivered',
      'how-to-improve',
      'how-to-warm-up',
      'sending-limit',
      'sender-reputation',
      'check-monitor',
      'improve-poor',
      'keep-good',
      'faq',
      'checklist',
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
      q: 'Does GoHighLevel guarantee email deliverability?',
      a: 'No. HighLevel says authentication is necessary but not sufficient, and no provider can promise inbox placement.'
    },
    {
      q: 'How do I improve email deliverability in GoHighLevel?',
      a: 'Authenticate a domain you own, send only to opted-in and validated contacts, control volume, keep complaints and bounces low, and monitor weekly.'
    },
    {
      q: 'Does GoHighLevel automatically warm up email domains?',
      a: 'Sometimes. New verified dedicated domains can enter the fixed-stage warm-up automatically where available, and an automated warm-up is in beta for approved users. Existing domains need to be enabled manually.'
    },
    {
      q: 'What is the daily email sending limit in GoHighLevel?',
      a: 'It depends on your account group, domain type and stage. Documented figures include 25,000 per day on a shared LC Email domain after the first week, and up to 550,000 on a dedicated one.'
    },
    {
      q: 'Are LC Email and custom SMTP limits different?',
      a: 'Yes. With custom SMTP your provider sets the limits, and dedicated domain features are not available.'
    },
    {
      q: 'What is the difference between domain and IP reputation?',
      a: 'Domain reputation follows your sending domain. IP reputation follows the sending address, which is shared on LC Email unless you buy a dedicated IP.'
    },
    {
      q: 'How do I check my sender reputation?',
      a: 'Use Postmaster Tools for Gmail, SNDS if you have a dedicated IP, MXToolbox for blacklists, and your delivery statistics. No tool covers every provider.'
    },
    {
      q: 'Can emails go to spam when SPF, DKIM and DMARC pass?',
      a: 'Yes. Passing authentication does not stop filtering based on reputation, complaints, list quality or content.'
    },
    {
      q: 'What should I check if emails show as sent but are not received?',
      a: "Look at that message's status for a bounce, failure or rejection, then check spam and other folders, then verification and limit banners."
    },
    {
      q: 'How often should I clean my email list?',
      a: "HighLevel's spam page suggests at least every 6 to 12 months, and suppressing contacts with no engagement for 90 or more days."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-not-reaching', title: 'Why Are My GoHighLevel Emails Not Reaching the Inbox?' },
    { id: 'what-is-happening', title: 'What Exactly Is Happening to My GoHighLevel Emails?' },
    { id: 'why-spam', title: 'Why Are My GoHighLevel Emails Going to Spam?' },
    { id: 'why-not-delivered', title: 'Why Are My GoHighLevel Emails Not Being Delivered?' },
    { id: 'how-to-improve', title: 'How Do I Improve Email Deliverability in GoHighLevel?' },
    { id: 'how-to-warm-up', title: 'How Do I Warm Up a GoHighLevel Email Domain?' },
    { id: 'sending-limit', title: 'What Is the GoHighLevel Email Sending Limit?' },
    { id: 'sender-reputation', title: 'What Is Sender Reputation, and How Do Domain and IP Reputation Differ?' },
    { id: 'check-monitor', title: 'How Do I Check My Sender Reputation and Monitor Deliverability?' },
    { id: 'improve-poor', title: 'How Do I Improve a Poor Sender Reputation?' },
    { id: 'keep-good', title: 'How Do I Keep a Good Sender Reputation?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'checklist', title: 'GoHighLevel Email Deliverability Checklist' },
    { id: 'what-next', title: 'What Should I Do Next?' },
  ];

  const diagnosisTable = [
    { see: 'Contacts find emails in spam', means: 'Spam placement: reputation, authentication alignment, list quality, content or a recent volume change', check: 'Which providers (Gmail, Outlook, Yahoo)? One contact or many? Authentication results on a real message', next: 'Spam section below' },
    { see: 'Contacts never receive them', means: 'Not sent, failed, bounced or rejected', check: "Status of that message; any limit or block banner; contact's address", next: 'Not-delivered section below' },
    { see: 'Used to reach inboxes, now spam', means: 'Volume increase, list change, more complaints or bounces, a change of domain or sending service', check: 'What changed in the last few weeks; complaint and bounce trend', next: 'Spam section, then reputation recovery' },
    { see: 'A new domain is not reaching inboxes', means: 'No sending history, too much too soon, setup or authentication incomplete', check: 'Verification and authentication (Planned link, not yet published: how to fix a sending domain that will not verify) if it will not verify); warm-up status; volume sent so far', next: 'Warm-up section' },
    { see: 'Delays or rejections after a large send', means: 'Throttling, a sending limit, a bounce block or provider rejection', check: 'Limit banner; bounce rate; error text on failed messages', next: 'Sending-limit section' },
  ];

  const spamCauses = [
    { cause: 'Authentication or alignment problems', recognize: "Failures in a message's headers; From domain differs from the authenticated domain", check: 'Headers of a real message (see (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC))', change: 'Fix records; send from your own domain, not a free mailbox domain' },
    { cause: 'Free-mail From address (Gmail, Yahoo, Outlook)', recognize: 'Spam placement even with correct setup', check: 'The From address', change: "Send from a domain you own. HighLevel says providers route free-mail senders to spam because those domains' DMARC policies forbid others sending as them" },
    { cause: 'Poor list health or no real consent', recognize: 'High bounces; low engagement; purchased or old lists', check: 'Source of contacts; bounce rate; inactivity', change: 'Remove hard bounces; suppress long-inactive contacts; use opt-in' },
    { cause: 'Sudden volume or frequency spikes', recognize: 'Problems start right after a big send', check: 'Volume trend by week', change: 'Ramp gradually; see warm-up and limits' },
    { cause: 'High complaints or bounces', recognize: 'Rising complaint or bounce rates', check: 'Statistics; Postmaster for Gmail', change: 'Stop sending to the unengaged; see recovery' },
    { cause: 'Content and links', recognize: 'Problems tied to specific templates', check: 'Image-only layouts, shortened links, broken HTML, misleading subject lines', change: 'Plain, honest, balanced content. No single word decides' },
    { cause: 'Missing unsubscribe', recognize: 'Complaints rise; bulk-sender rules failed', check: 'Visible footer link and List-Unsubscribe header', change: 'Add both. Google and Yahoo ask bulk senders for one-click unsubscribe' },
    { cause: 'Role-based or dormant addresses', recognize: 'Bounces and traps', check: 'info@, admin@, sales@ and old addresses', change: 'Filter or validate before sending' },
    { cause: 'Internal mail', recognize: 'Mail from and to the same domain flagged', check: 'Sender and recipient on the same domain', change: 'Avoid using campaigns for internal mail' },
  ];

  const statusTerms = [
    { term: 'Delivered', def: 'Successfully accepted by recipient servers', tells: 'Accepted, not necessarily in the inbox' },
    { term: 'Soft bounce', def: 'Temporary issue, for example a full inbox', tells: 'May be retried; watch for patterns' },
    { term: 'Hard bounce', def: 'Permanent failure, for example the address does not exist', tells: 'Remove the address' },
    { term: 'Failed', def: 'Invalid emails, bad API keys', tells: 'A problem on the sending side or with the address' },
    { term: 'Spam complaints', def: 'Marked as spam by the recipient', tells: 'A direct reputation signal' },
    { term: 'Accepted and Rejected', def: 'SMTP-level acceptance outcome', tells: "Whether the recipient's server took the message" },
    { term: 'Sent', def: 'Not defined on the page; bulk stats show "Total Attempts", also undefined', tells: 'Do not read it as delivered' },
  ];

  const deliveryIssues = [
    { issue: 'Sent but not received', cause: 'Rejected, spam placement, typo', investigate: "Message status; recipient's spam and other tabs", do: 'Fix the address or follow the status' },
    { issue: 'Hard bounce', cause: 'Invalid or nonexistent address', investigate: "Bounce statistics and the contact's address", do: 'Remove the contact; validate the list' },
    { issue: 'Soft bounce or delay', cause: 'Full inbox, server busy, throttling', investigate: 'Whether it repeats across providers', do: 'Slow volume; watch the trend' },
    { issue: 'Message blocked as spam-like', cause: "Content, behavior or reputation (HighLevel lists error texts such as 'the message was blocked because it was detected as spam')", investigate: 'The error text; the same message to other providers', do: 'Audit content, clean the list, reduce volume (HighLevel: Spam Filter Blocks)' },
    { issue: "'Domain is not allowed to send'", cause: 'Sending domain not verified', investigate: 'Dedicated Domain & IP page', do: '(Planned link, not yet published: how to fix a sending domain that will not verify)' },
    { issue: 'Campaign emails fail after a certain number', cause: 'Daily limit reached', investigate: 'Banner and Sending Limit panel', do: 'See the sending-limit section' },
    { issue: 'All outbound email disabled for a sub-account', cause: 'Bounce block', investigate: 'Error text and bounce rate', do: 'See below' },
    { issue: 'No delivery data for custom SMTP', cause: 'Provider reports only opens and clicks', investigate: "Provider's own logs", do: 'Contact the provider' },
  ];

  const warmupApproaches = [
    { approach: 'LC Email ramp-up, days 1 to 7', who: 'Per the LC Email page (20 Aug 2026)', how: 'Daily limit rises 250, 500, 1,000, 2,500, 5,000, 7,500, 10,000', limits: 'A sending limit, not a warm-up feature. Applicability by account not stated' },
    { approach: 'Smart sending ramp-up (shared domains)', who: 'New agencies created on or after 27 April 2026, shared domains', how: 'Sub-accounts start at Stage 1 and move up or down automatically', limits: 'A sending limit. Existing agencies unaffected. Migration plan promised for Q2 2026, outcome not confirmed' },
    { approach: 'Fixed-stage warm-up', who: 'Dedicated domains, agency and sub-account; phased rollout, so availability varies', how: "15 stages. Automatic for new verified domains where available. Manual 'Start Warmup' for existing domains", limits: 'Thresholds, not blocks, for now. Strict enforcement expected later' },
    { approach: 'Automated warm-up (beta)', who: 'Approved beta users with dedicated domains', how: 'You set a daily goal; warm-up mailboxes send to build reputation', limits: 'Beta. Free for approved users, later pricing not announced. Only the sender name is editable' },
  ];

  const fixedStages = [
    { stage: 1, threshold: '1,000' }, { stage: 2, threshold: '2,500' }, { stage: 3, threshold: '5,000' },
    { stage: 4, threshold: '6,500' }, { stage: 5, threshold: '8,000' }, { stage: 6, threshold: '10,000' },
    { stage: 7, threshold: '14,000' }, { stage: 8, threshold: '20,000' }, { stage: 9, threshold: '25,000' },
    { stage: 10, threshold: '35,000' }, { stage: 11, threshold: '50,000' }, { stage: 12, threshold: '80,000' },
    { stage: 13, threshold: '125,000' }, { stage: 14, threshold: '175,000' }, { stage: 15, threshold: '250,000' },
  ];

  const volumeTerms = [
    { term: 'Daily threshold', meaning: 'Volume a warm-up stage expects before moving on', example: 'Fixed-stage Stage 1: 1,000' },
    { term: 'Actual sending restriction', meaning: 'A limit the platform enforces', example: 'Shared-domain ramp-up: campaign emails over the ceiling fail' },
    { term: 'Progression requirement', meaning: 'What must happen before the next stage', example: 'Reaching the full threshold' },
    { term: 'Recommended volume', meaning: 'What is sensible for your list and engagement', example: 'HighLevel suggests 100 to 500 to engaged contacts to start' },
  ];

  const sendingLimits = [
    { config: 'LC Email ramp-up, days 1 to 7', controls: 'Daily limit for a new setup', info: '250, 500, 1,000, 2,500, 5,000, 7,500, 10,000 (20 Aug 2026)', qual: 'Which accounts it covers is not stated' },
    { config: 'LC Email after day 7, shared domain', controls: 'Daily limit', info: '25,000 per day; adjustable range 250 to 25,000', qual: 'Higher needs a dedicated domain. Sub-accounts without their own dedicated domain are treated as shared' },
    { config: 'LC Email, dedicated domain', controls: 'Daily limit', info: '550,000 per day in the table. The same page says to contact support above 450,000', qual: 'Page conflicts with itself; confirm with support' },
    { config: 'Shared-domain smart ramp-up', controls: 'Daily limit by stage', info: 'Nine stages: 1,000; 2,500; 5,000; 6,500; 8,000; 10,000; 14,000; 15,000; 25,000 (15 Sep 2026)', qual: 'New agencies from 27 April 2026 only. Page says eight stages, lists nine' },
    { config: 'Trial agency', controls: 'Daily cap', info: '500 per day', qual: 'Raised from 100 in April, per the page' },
    { config: 'Fixed-stage warm-up', controls: 'Progress thresholds, dedicated domains', info: '1,000 to 250,000 per day. No hourly limits', qual: 'Not a block for now' },
    { config: 'Hourly figures in the Sending Guide', controls: 'Stage 1 and 2 pace', info: '100 and 300 per hour (Stage 1 and 2)', qual: "Conflicts with the 'no hourly limits' statement. Dated 30 Jun 2026, so the 8 Oct page may supersede it; confirm in your account" },
    { config: 'Automated warm-up (beta)', controls: 'Goal ceiling and mailbox caps', info: "Goal examples 10,000 and 25,000; per-mailbox cap 5,000 in HighLevel's example", qual: "'Applicable sending limits' not defined" },
    { config: 'Custom SMTP', controls: 'Set by your provider', info: 'HighLevel publishes no limit', qual: "Check the provider's documentation" },
    { config: 'Mailbox-provider rate limits', controls: 'Throttling by Gmail, Yahoo, Microsoft', info: 'No numbers in the pages read', qual: 'Cause deferrals, not platform limits' },
    { config: 'Compliance and account blocks', controls: 'Bounce suspension, AUP locks', info: '3% warning, 5% block for 12 hours; AUP lock first strike 12 hours, second 24 hours, then permanent pending review', qual: 'Reported rates differ by page' },
  ];

  const lcVsSmtp = [
    { aspect: 'Who sets limits', lc: 'HighLevel (ramp-up, stage or daily limits)', smtp: 'Your SMTP provider' },
    { aspect: 'Dedicated domain feature', lc: 'Available', smtp: 'HighLevel says custom SMTP users do not have this option' },
    { aspect: 'Delivery statistics', lc: 'Full', smtp: 'Mailgun: full visibility. Others may report opens and clicks only' },
    { aspect: 'Support', lc: 'Includes assistance', smtp: 'Limited for compliance and best practices not managed by the platform' },
  ];

  const limitResults = [
    { limit: 'Shared-domain ramp-up ceiling', result: 'Campaign and bulk emails over the ceiling fail and are not queued or retried. One-to-one, payment, calendar and system emails still go. A red banner appears. Counter resets at midnight UTC', source: 'Limits page' },
    { limit: 'LC Email daily limit', result: 'Account is locked for the rest of the period; resets 00:00 UTC. A scheduled send that would exceed it shows an inline error: reduce recipients or split the send', source: 'LC Email page' },
    { limit: 'Fixed-stage threshold', result: 'Nothing is blocked now; stricter enforcement is expected later', source: 'Fixed-stage page' },
    { limit: 'Bounce block', result: 'Outbound email disabled for 12 hours or permanently', source: 'Bounce page' },
    { limit: "Provider throttling", result: "Deferrals or temporary rejections by the recipient's provider", source: 'General behavior; not documented in the pages read' },
  ];

  const reputationTable = [
    { aspect: 'What it attaches to', domain: 'The domain in your sending identity', ip: 'The IP address that sends your mail' },
    { aspect: 'Who shares it on LC Email', domain: 'Your own if you use a dedicated domain. Shared domains share reputation across agencies', ip: 'HighLevel says that even a shared LC Email dedicated domain still shares the sending IP with other platform users' },
    { aspect: 'How to isolate it', domain: 'Use your own dedicated sending domain', ip: 'A dedicated IP costs $59 a month per IP, billed to the agency, which HighLevel says isolates reputation and matters most at high volume' },
    { aspect: 'Who can see it', domain: 'Postmaster Tools for Gmail, with limits', ip: 'SNDS for Microsoft, which is organized around IPs' },
  ];

  const providerThresholds = [
    { source: 'Google', complaint: 'Keep below 0.1%. Never reach 0.3%. Above 0.3% for bulk senders removes eligibility for mitigation until it stays below 0.3% for 7 days', bounce: 'Not given', other: 'Bulk is close to 5,000 a day to personal Gmail. SPF, DKIM, DMARC (at least none), alignment, one-click unsubscribe on marketing mail' },
    { source: 'Yahoo', complaint: 'Keep below 0.3%', bounce: 'Remove invalid recipients promptly', other: 'Bulk senders: SPF, DKIM, DMARC at least none, one-click unsubscribe, honor unsubscribes in 2 days. Bulk size not defined' },
    { source: 'Microsoft (Outlook.com)', complaint: 'Not given in the page read', bounce: 'Not given', other: 'Over 5,000 a day: SPF and DKIM pass, DMARC at least none and aligned. Non-compliant mail rejected (550 5.7.515). The post dates this from 5 May 2025' },
    { source: 'HighLevel: spam page', complaint: 'About 0.3%', bounce: 'Above 5%', other: 'Recovery 4 to 8 weeks' },
    { source: 'HighLevel: spam filter page', complaint: 'Below 0.1%', bounce: 'Not given', other: 'Spam test score above 8 of 10' },
    { source: 'HighLevel: stats page', complaint: '0.04% or higher is a red flag; AUP threshold 0.05%', bounce: "Hard bounce AUP threshold 5%; delivered 98% or higher is healthy", other: "'Guidelines, not rules'" },
    { source: 'HighLevel: bounce page', complaint: 'Not given', bounce: '3% warning; 5% 12-hour block', other: 'Updated 13 Aug 2026' },
  ];

  const monitoringTools = [
    { tool: 'HighLevel email statistics', checks: 'Delivered, bounces, complaints, opens, clicks by send', when: 'Every send, weekly review', cannot: 'Inbox placement. Full visibility only with Mailgun. Opens are unreliable as a placement signal' },
    { tool: 'Google Postmaster Tools', checks: 'Spam rate, authentication, delivery errors, compliance for mail to personal Gmail accounts', when: 'Any sender with meaningful Gmail volume', cannot: 'Other providers. Data can be missing at low volume. Needs a verified domain. HighLevel says data can take up to two days' },
    { tool: 'Microsoft SNDS', checks: "Microsoft's data on traffic from IP addresses you control (named by HighLevel)", when: 'If you have a dedicated IP', cannot: 'Domain reputation. I have not read its documentation beyond the FAQ link; it is IP-oriented' },
    { tool: 'MXToolbox', checks: 'DNS records, blacklists, an Email Health report (named by HighLevel)', when: 'After setup changes; when delivery drops', cannot: 'Inbox placement or reputation at Gmail or Microsoft' },
    { tool: 'Mail-Tester (named by HighLevel)', checks: 'A spam-style score and authentication for one test message', when: 'Before a campaign or template change', cannot: 'Real-world inbox placement across providers' },
    { tool: 'DMARC checker, for example dmarcan (named by HighLevel)', checks: 'Whether a DMARC record is published and valid', when: 'After DNS changes', cannot: 'Whether real messages align' },
    { tool: 'Seed or placement testers such as GlockApps or Litmus (named by HighLevel; not evaluated here)', checks: 'Sample placement across mailboxes', when: 'When you suspect placement trouble', cannot: "Your actual list's placement" },
    { tool: 'HighLevel automated warm-up dashboard (beta)', checks: 'Health score, deliverability, inbox chart for warm-up', when: 'While warming a dedicated domain', cannot: 'Reputation outside the warm-up traffic' },
  ];

  const checklist = [
    { area: 'Sending domain', check: 'Domain you own, verified, one per sub-account' },
    { area: 'Authentication', check: 'SPF, DKIM and DMARC published and aligned; checked on a real message' },
    { area: 'Sending provider', check: 'You know whether you are on LC Email or custom SMTP, and who supports what' },
    { area: 'Warm-up', check: 'You know which system applies; new domains start low and to engaged contacts' },
    { area: 'Volume plan', check: 'Batches, no spikes, limits and stage checked before big sends' },
    { area: 'Permission', check: 'Every contact opted in; no purchased lists' },
    { area: 'List validation', check: 'Validation on first send and re-validation on; hard bounces removed' },
    { area: 'Sender identity', check: 'Own domain, recognizable From name, working Reply-To' },
    { area: 'Content and links', check: 'Honest subject, balanced layout, no shortened links, plain-text version' },
    { area: 'Consistency', check: 'A steady cadence; no long silences followed by blasts' },
    { area: 'Complaints and bounces', check: 'Reviewed weekly; below the lowest threshold you use' },
    { area: 'Reputation', check: 'Postmaster set up for Gmail volume; blacklist check after problems' },
    { area: 'Delivery logs', check: "Statistics reviewed; custom SMTP provider's logs available" },
    { area: 'Review', check: 'Monthly review of volume, engagement and anything that changed' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Emails Going to Spam</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Email Marketing</span>
            <span className="bg-[rgba(220,53,69,0.15)] text-[#DC3545] text-[11px] font-semibold px-2.5 py-1 rounded-full">Troubleshooting</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Deliverability</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Emails Going to Spam? How to Fix Deliverability
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Prepared 4 November 2026 · HighLevel, Google, Yahoo and Microsoft pages read 4 November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Your emails left GoHighLevel, but your contacts say they never arrived, or they find them in spam. Those can be two different problems with two different fixes, and treating them as one is how people end up warming up a domain that was actually blocked, or cleaning a list that was actually fine. This guide starts by helping you work out what is happening to your emails, then covers the causes, the fixes, domain warm-up, sending limits and sender reputation, in that order.
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Nobody can promise inbox placement, including HighLevel and including this guide. Mailbox providers decide for themselves, using signals you cannot see in full. What you can do is remove the avoidable causes and build a clean sending history.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Where this comes from: HighLevel's help pages, Google, Yahoo and Microsoft sender documentation (all read 4 November 2026), and HighLevel's idea board. Nothing here was tested in a live HighLevel account, HighLevel's pages sometimes disagree with each other (the disagreements are shown), and menu names can change. Setup steps are in (Planned link, not yet published: the complete GoHighLevel email setup checklist), (Planned link, not yet published: step-by-step guide to connecting a sending domain) and (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC) so they are not repeated here.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Help With Deliverability? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#what-is-happening"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to the Diagnosis
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

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/gohighlevel-email-deliverability.png"
                  alt="Email envelope at a fork between an inbox and a spam folder, for diagnosing GoHighLevel email deliverability problems"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>In-article diagram: Decision path for GoHighLevel emails that are not reaching the inbox.</span>
              </div>
            </div>

            {/* Section: Why Not Reaching */}
            <h2 id="why-not-reaching" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Are My GoHighLevel Emails Not Reaching the Inbox?
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What is email deliverability, and how is it different from delivery?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Delivery means the recipient's mail server accepted your message. HighLevel defines Delivered as "successfully accepted by recipient servers" (Email Statistics). Deliverability is the bigger question of whether an accepted message reaches the inbox, goes to spam, or lands in another tab. A message can count as delivered and still never be seen. That distinction runs through the rest of this guide.
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What do mailbox providers look at?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              No provider publishes its full formula, and they do not all behave alike. The signals HighLevel's own guidance keeps coming back to are: whether the message is authenticated and the sender domain matches; the reputation of the sending domain and IP; spam complaints and bounces; whether contacts opted in and engage; sudden changes in volume; and content and links (HighLevel: Why Are My Emails Going To Spam?). Each section below takes one of these in turn.
            </p>

            {/* Section: What Is Happening */}
            <h2 id="what-is-happening" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Exactly Is Happening to My GoHighLevel Emails?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Answer this first, because the fix depends on it. Follow the path for one affected message, not for your campaign as a whole.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you see</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it may mean</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Check first</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Next step</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosisTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.see}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.means}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              More than one of these can be true at once. A new domain can be blocked by a limit and also in spam for those messages that do go through.
            </p>

            {/* Section: Why Spam */}
            <h2 id="why-spam" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Are My GoHighLevel Emails Going to Spam?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's guidance lists several contributing causes. None of them works alone, and none is a switch. Providers weigh many signals together.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Cause</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">How to recognize it</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to change</th>
                  </tr>
                </thead>
                <tbody>
                  {spamCauses.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.cause}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.recognize}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Can emails go to spam even when SPF, DKIM and DMARC pass?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes. HighLevel says authentication is "necessary but not sufficient." Passing proves you are who you say you are. It says nothing about whether recipients want your mail. A perfectly authenticated sender with a poor list will still be filtered.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Does a poor sender reputation cause emails to go to spam?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It is one of the biggest factors. HighLevel's low-reputation page compares domain reputation to a credit score built from sending practices, engagement and complaints, and says low reputation can lead Gmail, Outlook and Yahoo to block, defer or spam-folder messages. Reputation is covered fully below.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Can sending too many emails damage deliverability?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A sudden jump can. HighLevel lists volume or frequency spikes, especially from new or dormant domains, among the causes. The volume you can safely send depends on your sending history, not on what the platform lets you send. See the warm-up and sending-limit sections.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Do email content and links affect spam placement?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              They can contribute. HighLevel lists promotional wording, image-heavy layouts, link shorteners, large attachments, broken HTML, and excessive capitals, punctuation or emoji. It also says the filters weigh many things. No word list guarantees either result. Test a real message instead of guessing (see monitoring).
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Why do emails to opted-in contacts still go to spam?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              This is the problem one agency owner described in a community thread: leads opt in, then the automated emails land in spam from a new dedicated domain. Consent is necessary but it is not the only signal. Likely contributors are a domain with no history, a sudden volume pattern, content, authentication alignment, and engagement on the first messages. I could not find a documented HighLevel fix for this specific case, so treat it as a diagnosis task: check warm-up status, authentication on a real message, and whether the first sends went to engaged contacts.
            </p>

            {/* Section: Why Not Delivered */}
            <h2 id="why-not-delivered" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Are My GoHighLevel Emails Not Being Delivered?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is a separate problem from spam placement. Here the message was never accepted, was refused, or was delayed. The status tells you which.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How do I check whether a GoHighLevel email was delivered?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel shows statistics in three places (Email Statistics, 9 February 2026): Marketing, Emails for email marketing; Automation, Workflows, then an email action and its Statistics panel for workflow emails; and Contacts, Bulk Actions for bulk sends. Most figures update in near real time. Clicks, unsubscribes and spam complaints can take a few minutes.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Term</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">HighLevel's definition</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it tells you</th>
                  </tr>
                </thead>
                <tbody>
                  {statusTerms.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.term}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.def}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.tells}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two limits to know. First, HighLevel's page says only Mailgun gives full visibility into delivered, bounced, unsubscribed and spam-complaint metrics, and that other SMTP providers may report only opens and clicks. If you use custom SMTP, your provider's own logs matter more. Second, I did not find a HighLevel page describing an email log with per-message error text in the way a mail server log would, so use the statistics above and any error shown on the message itself.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What do hard and soft bounces mean?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A hard bounce is permanent: the address does not exist or cannot receive. A soft bounce is temporary: the mailbox is full or the server is busy. HighLevel says to remove hard-bounced contacts immediately, and says soft bounces may be retried automatically. Repeated bounces feed reputation and can trigger a bounce block.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Why do emails show as sent but never arrive?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The message was rejected or bounced, and the statistic is easier to miss than the 'sent' count. It was delivered to spam or another tab. Delivered still counts it as accepted. The domain is not verified. HighLevel's error list includes "Domain is not allowed to send: The domain is unverified and requires DNS configuration" (common unsuccessful email errors). See (Planned link, not yet published: how to fix a sending domain that will not verify). A limit or block stopped it (see below). The address has a typo or is role-based. You use custom SMTP, and HighLevel cannot see the outcome.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Delivery issue</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Possible cause</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">How to investigate</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to do</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryIssues.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.issue}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.cause}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.investigate}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.do}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What does 'Email sending is blocked due to a high bounce rate' mean?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's bounce-suspension page (17 September 2026) describes thresholds: 0 to 3% is the healthy range; at 3% a warning is sent; at 5% email sending is suspended for 12 hours. After the first block, a 3% warning and a 5% rate triggers a second 12-hour block, and after the second block a third trigger becomes a permanent suspension. Only outbound email is disabled. SMS, calls, workflows and calendars keep working. A permanent block shows "Email sending is blocked due to a high bounce rate."
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel's suggested fixes: run contacts through its email verification service, clean the list, pause bulk and cold campaigns, and, for a permanent block, open a support ticket with the sub-account ID and a screenshot. Review is manual and approval is not guaranteed. A 13 August 2026 update raised the minimums for the separate bounce AUP lock to at least 500 sends and 25 bounces.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              When to contact whom. HighLevel support for a permanent bounce block or a blacklisted dedicated IP. Your SMTP provider for anything on a custom SMTP setup: HighLevel says support for compliance and best practices not managed by the platform is limited there.
            </p>

            {/* Section: How to Improve */}
            <h2 id="how-to-improve" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Improve Email Deliverability in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In order of effect, with the detail living in the sections shown.
            </p>
            <ol className="space-y-3 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Get the foundation right.</strong> A verified sending domain you own, authenticated, and a sending service that fits your volume. See (Planned link, not yet published: the complete GoHighLevel email setup checklist), (Planned link, not yet published: step-by-step guide to connecting a sending domain) and (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC).</li>
              <li><strong className="text-[#1A2236]">Fix the list.</strong> Send only to people who opted in. Turn on validation: HighLevel charges $2.50 per 1,000 checks, and offers verification at first send and a 90-day re-validation setting (Email Sending Guide).</li>
              <li><strong className="text-[#1A2236]">Control volume.</strong> Warm up where it applies, and send in batches. HighLevel suggests starting with 100 to 500 emails to your most engaged contacts and increasing gradually (Spam Filter Blocks).</li>
              <li><strong className="text-[#1A2236]">Use a sensible cadence.</strong> HighLevel's guidance: send daily to newly opted-in contacts for a short window; slow to weekly if there is no engagement after one to two weeks; stop sending if there is still none after more than two months of weekly sends.</li>
              <li><strong className="text-[#1A2236]">Make mail easy to leave.</strong> A visible unsubscribe link and the List-Unsubscribe header.</li>
              <li><strong className="text-[#1A2236]">Watch the numbers weekly.</strong> Bounces, complaints, delivery. See monitoring.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Skipping to content tweaks first is common and rarely the cause.
            </p>

            {/* Section: How to Warm Up */}
            <h2 id="how-to-warm-up" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Warm Up a GoHighLevel Email Domain?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Mailbox providers have no history for a new domain. Warm-up means sending gradually, consistently and to people who engage, so a pattern builds up. It does not guarantee inbox placement, and it is not permission to send to any audience.
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">When is warm-up needed?</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Situation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sit: 'Newly registered domain or new sending subdomain', app: 'No history. Start low and to your most engaged contacts' },
                    { sit: 'Existing domain with a long, healthy sending history', app: 'May need less. For existing HighLevel domains, enabling warm-up uses past activity and Google Postmaster data (if connected) to suggest a starting stage' },
                    { sit: 'Previously inactive domain', app: 'Treat as largely new. General practice, not a HighLevel rule' },
                    { sit: 'Domain with damaged reputation', app: 'Warm-up alone will not repair it. HighLevel says raising volume too early often resets recovery. See the recovery section' },
                    { sit: 'Change of provider or infrastructure', app: 'New sending infrastructure carries new history. Start cautiously. General practice, not documented by HighLevel' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.sit}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.app}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Does GoHighLevel warm up email domains automatically?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It depends on which feature your account has, and HighLevel describes four different mechanisms. They are not one process.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Approach</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Who it applies to</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">How it works</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Important limitations</th>
                  </tr>
                </thead>
                <tbody>
                  {warmupApproaches.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.approach}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.who}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.how}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.limits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Which one do I have? Open Dedicated Domain & IP under Email Services at your account level and see what your domain card shows. I could not establish how the systems interact, beyond HighLevel's note that enabling the automated warm-up removes the existing daily sending-limit ramp shown on dedicated domains.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How does the fixed-stage domain warm-up work?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The stages and daily thresholds (30 June 2026, confirmed by the 8 October 2026 page):
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Stage</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Daily threshold</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Stage</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Daily threshold</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Stage</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Daily threshold</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 5, 10].map((start, colIdx) => (
                    <tr key={colIdx} className="border-b border-[#DDE1E9] last:border-b-0">
                      {fixedStages.slice(start, start + 5).map((s) => (
                        <>
                          <td key={`s${s.stage}`} className="p-3 text-[#1A2236] font-medium align-top">{s.stage}</td>
                          <td key={`t${s.stage}`} className="p-3 text-[#5C6880] align-top">{s.threshold}</td>
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A domain moves up only when it reaches the full daily threshold of its current stage. Time alone does not advance it. A domain that sends 600 emails at Stage 1 stays at Stage 1. Missed days pause progress and do not reset the stage. Only emails sent through the warming domain count. New dedicated domains start automatically once created and verified, where the feature is available. Existing domains need Start Warmup (Agency or Sub-Account Settings, Email Services, SMTP Service, Dedicated Domain and IP). Stage 15 shows "Warmup Complete."
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Because progression needs the full threshold, a small sender that sends a few hundred emails a day may sit at Stage 1 for a long time. That is my reading of HighLevel's rule, not a statement it makes. It does not mean something is wrong.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How does the automated warm-up (beta) work?</h3>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Request access. If approved, a "Start warm-up" option appears on dedicated domain cards.</li>
              <li>Make sure the domain is verified and its SSL shows "SSL Issued."</li>
              <li>Choose Start warm-up, set a daily goal (HighLevel's examples are 10,000 and 25,000), and confirm. The badge changes to "Warming up."</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The goal is a ceiling, not a guaranteed volume. Sending ramps up gradually toward it. A confirmation screen shows how many warm-up mailboxes will be used (HighLevel's example: a 25,000 goal uses five mailboxes with a 5,000-a-day cap each). Those mailboxes are not your customers' inboxes, and contacts do not receive warm-up emails. Campaigns and workflows continue while it runs.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You can see a health score (0 to 100), deliverability, a sent-today figure against the goal, DNS status and a landed-in-inbox chart, though results can take one or two days to appear. You can pause or stop from the domain card. HighLevel warns that stopping early can slow reputation building. The page gives no ramp formula and no numeric health thresholds. Treat the numbers as indicators, not as a guarantee.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How long does it take to warm up a sending domain?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's Sending Guide says a domain can take up to four weeks. The fixed-stage page says warm-up does not advance simply because days have passed. The automated warm-up page gives no schedule. So there is no universal answer, and anyone quoting you a fixed number is guessing. Your timeline depends on how fast you send enough, to engaged people, without problems.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How many emails should I send while warming up?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use the four terms below separately, because HighLevel's numbers are not all the same kind of number.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Term</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Meaning</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {volumeTerms.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.term}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.meaning}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sending less than a threshold can be the right call when engagement is low or reputation is weak. The thresholds are not targets you must hit each day.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What happens if I send too many emails from a new domain?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Possible outcomes include throttling or deferral by providers, spam placement, rising bounces and complaints, and eventually a bounce block. Under the fixed-stage model HighLevel does not currently stop you at a threshold, which means the platform will not protect you from yourself. One idea-board commenter notes that a drip can unintentionally send thousands of emails to a warming domain, and asks for daily caps. Use your own caps.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What are the common warm-up mistakes?</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Sending too much too soon.</li>
              <li>Using purchased, unverified or non-opted-in lists.</li>
              <li>Treating a schedule as permission to send to everyone.</li>
              <li>Raising volume without checking bounces, complaints and delivery.</li>
              <li>Ignoring complaints.</li>
              <li>Continuing to send to unengaged contacts.</li>
              <li>Assuming warm-up repairs a damaged reputation.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How do I know my sending domain is ready for more emails?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Look for stable signals before each increase: bounces and complaints staying low, delivery staying high, no new blocks, and stage or warm-up status moving. HighLevel's benchmark table lists delivered at 98% or higher as healthy, hard bounces well under 1%, and complaints as close to zero as possible, and calls them guidelines, not rules (29 May 2026). Do not rely on opens alone, because open tracking is unreliable as an inbox signal (general knowledge, as mail apps can load images automatically).
            </p>

            {/* Section: Sending Limit */}
            <h2 id="sending-limit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is the GoHighLevel Email Sending Limit?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              There is no single number. HighLevel documents several different things, some for different groups of accounts, and they do not all agree. Use this table to see what applies, then check the Sending Limit panel in your own account, which is the source of truth.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Configuration or restriction</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it controls</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Documented information</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {sendingLimits.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.config}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.controls}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.info}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.qual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Are warm-up thresholds the same as sending limits?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              No. A fixed-stage threshold is a progression target and, for now, does not block sending. A shared-domain ramp-up ceiling does. HighLevel's fixed-stage page says thresholds are separate from account-level restrictions, recipient-provider rate limits and compliance controls, and that passing a threshold does not guarantee delivery.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How many emails can I send through LC Email?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That depends on your account group, your domain type and the stage you are at. The numbers above are the documented ones. They are ceilings, not recommendations, and a new setup should be nowhere near them.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Are LC Email and custom SMTP sending limits different?</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]"></th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">LC Email</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Custom SMTP</th>
                  </tr>
                </thead>
                <tbody>
                  {lcVsSmtp.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.aspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.lc}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.smtp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What happens when a GoHighLevel email sending limit is reached?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              It depends on which limit you hit.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Limit</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Result</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {limitResults.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.limit}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.result}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How do I plan sending volume safely?</h3>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Segment large lists and start with your most engaged contacts.</li>
              <li>Send in batches and spread them over the day. HighLevel describes drip sending through Bulk Actions or Workflows.</li>
              <li>Avoid sudden spikes after quiet periods.</li>
              <li>Check your limit panel and provider limits before a big send.</li>
              <li>Give each sub-account its own dedicated domain. HighLevel says not to share sending domains across sub-accounts.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Do not try to get around limits by splitting sends across domains or accounts. The documented routes to higher volume are consistent healthy sending, a dedicated domain, and contacting support above the top figures.
            </p>

            {/* Section: Sender Reputation */}
            <h2 id="sender-reputation" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Is Sender Reputation, and How Do Domain and IP Reputation Differ?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sender reputation is how providers rate you based on your history. It is not one universal score. Different providers assess you differently, and HighLevel's low-reputation page notes that Google Postmaster no longer shows a direct reputation score, so it recommends relying on performance and placement metrics too.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]"></th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Domain reputation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">IP reputation</th>
                  </tr>
                </thead>
                <tbody>
                  {reputationTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.aspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.domain}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What damages sender reputation?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              High complaint rates, many invalid recipients, sudden spikes, poor list quality, unengaged recipients, inconsistent patterns, authentication problems, repeated provider rejections and sending without permission. Complaints and bounces are the fastest ways to lose ground, which is why HighLevel's blocks key off them.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What thresholds do providers and HighLevel use?</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Source</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Complaint or spam rate</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Bounce</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Other requirements</th>
                  </tr>
                </thead>
                <tbody>
                  {providerThresholds.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.source}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.complaint}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.bounce}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">How to read this.</strong> The figures measure different things: Google's is the share of delivered mail that users mark as spam; HighLevel's AUP numbers are its own account controls. When they differ, use the lowest as your working target. For a bulk sender that means aiming under 0.1% complaints, which matches Google, and treating 0.3% as a limit you should never approach. Microsoft's page, as I read it, gives no complaint figure, so I do not quote one.
            </p>

            {/* Section: Check and Monitor */}
            <h2 id="check-monitor" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Check My Sender Reputation and Monitor Deliverability?
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Tool</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it checks</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">When to use it</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it cannot confirm</th>
                  </tr>
                </thead>
                <tbody>
                  {monitoringTools.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.tool}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.checks}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.when}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.cannot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Keep the layers apart. DNS health, authentication, delivery, inbox placement, domain reputation, IP reputation and content testing are different questions. No single tool answers all of them, and none can guarantee inbox placement.
            </p>

            {/* Section: Improve Poor */}
            <h2 id="improve-poor" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Improve a Poor Sender Reputation?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's low-reputation page and the sections above point to the same order of work:
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Stop the damage.</strong> Stop sending to invalid and clearly unengaged contacts. HighLevel suggests removing hard bounces, contacts with no opens or clicks in 90 or more days and role-based addresses.</li>
              <li><strong className="text-[#1A2236]">Find the pattern.</strong> Look at complaint and bounce trends and what changed.</li>
              <li><strong className="text-[#1A2236]">Check authentication on a real message</strong> ((Planned link, not yet published: how to set up and check SPF, DKIM and DMARC)).</li>
              <li><strong className="text-[#1A2236]">Cut volume to the minimum</strong> and then review consistency.</li>
              <li><strong className="text-[#1A2236]">Rebuild with permission-based, engaged contacts only.</strong></li>
              <li><strong className="text-[#1A2236]">Review content and what recipients expect from you.</strong></li>
              <li><strong className="text-[#1A2236]">Monitor domain and IP signals weekly.</strong></li>
              <li><strong className="text-[#1A2236]">Raise volume only when performance supports it.</strong> HighLevel says increasing volume too early often resets recovery.</li>
              <li><strong className="text-[#1A2236]">Escalate infrastructure problems.</strong> A blacklisted dedicated IP goes to HighLevel support, and custom SMTP issues go to your provider. HighLevel says blacklist removal can take 24 hours to 7 days.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              <strong className="text-[#1A2236]">How long does it take?</strong> HighLevel's spam page says recovery typically takes 4 to 8 weeks. Its low-reputation page says 30 to 90 days. Neither is a promise, and the real time depends on the cause and your behavior. Anyone quoting a fixed number is guessing. Some senders consider moving to a fresh subdomain, but I found no HighLevel guidance for it. It would restart your history, need warm-up and would not fix the list problem that caused the damage.
            </p>

            {/* Section: Keep Good */}
            <h2 id="keep-good" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Keep a Good Sender Reputation?
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li>Use permission-based lists, with double opt-in or reCAPTCHA where it fits.</li>
              <li>Keep sender identity clear: your own domain and a recognizable From name.</li>
              <li>Turn on validation at first send and the 90-day re-validation (Sending Guide).</li>
              <li>Send relevant content on a consistent cadence and avoid sudden jumps.</li>
              <li>Monitor complaints and bounces weekly (HighLevel's spam-filter page suggests checking its named tools weekly).</li>
              <li>Suppress hard bounces and long-inactive contacts. HighLevel's spam page suggests cleaning at least every 6 to 12 months.</li>
              <li>Respect unsubscribers. Google and Yahoo both give a window of about two days.</li>
              <li>Review performance regularly, and change one thing at a time.</li>
            </ul>

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

            {/* Section: Checklist */}
            <h2 id="checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              GoHighLevel Email Deliverability Checklist
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Area</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Check</th>
                  </tr>
                </thead>
                <tbody>
                  {checklist.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.area}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: What Next */}
            <h2 id="what-next" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should I Do Next?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Pick one affected message and follow the decision path at the top: sent, status, then folder. Fix that cause, not the one you assumed. If you are on a new domain, find out which warm-up and limit system applies to your account before you plan a campaign. Then set up weekly monitoring so the next problem is visible when it is small. If the cause turns out to be setup, (Planned link, not yet published: step-by-step guide to connecting a sending domain) and (Planned link, not yet published: how to set up and check SPF, DKIM and DMARC) cover it.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about GoHighLevel email deliverability?</strong>
              </p>
              <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto">
                Talk to our GHL experts directly. We're here to help.
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Fix the cause, not the one you assumed.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up implements GoHighLevel for agencies and service businesses. If you need help diagnosing deliverability, get in touch.
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
                Prepared 4 November 2026. HighLevel, Google, Yahoo and Microsoft pages read 4 November 2026. Nothing here was tested in a live HighLevel account, HighLevel's pages sometimes disagree with each other (the disagreements are shown), and menu names can change.
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