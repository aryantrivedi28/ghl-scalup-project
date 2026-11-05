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
  Target,
  Split,
  FlaskConical,
  TestTube,
  Inbox,
  MousePointerClick,
  MailOpen,
  Users,
  FileSpreadsheet,
  CopyCheck,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function EmailCampaignPerformanceClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'track',
      'metrics-meaning',
      'open-rate-accuracy',
      'opens-no-clicks',
      'improve-engagement',
      'ab-testing',
      'improvement-loop',
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
      q: 'Where can I see email campaign reports in GoHighLevel?',
      a: 'Marketing, then Emails, then Statistics for campaigns. Workflow emails report on the Email action\'s Statistics panel, and bulk sends under Contacts, Bulk Actions.'
    },
    {
      q: 'Does GoHighLevel have email analytics?',
      a: 'Yes. The Statistics dashboard and Settings, Email Services, Email Analytics show delivery and engagement. Full visibility depends on the sending provider.'
    },
    {
      q: 'What email metrics should I track?',
      a: "Delivery first, then unique clicks and your campaign's real outcome. Opens are a secondary signal."
    },
    {
      q: 'What is a good email open rate?',
      a: 'There is no reliable universal number. Compare against your own recent campaigns.'
    },
    {
      q: 'Why are people opening my emails but not clicking?',
      a: 'Possible causes include machine opens, broken or untracked links, no clear call to action, too many links, a mismatch between subject and content, or the wrong audience.'
    },
    {
      q: 'Are email open rates accurate?',
      a: "Not precisely. Apple's Mail Privacy Protection and other tools can register opens no person triggered, and image blocking can hide real ones."
    },
    {
      q: 'Can bots inflate email click rates?',
      a: 'They can. Security scanners may follow links. Look for clicks seconds after delivery and for clicks without matching outcomes.'
    },
    {
      q: 'Can I A/B test subject lines in GoHighLevel?',
      a: 'Yes, in an email campaign through the A/B testing tab, with up to six subject lines and a winner chosen by unique open rate or unique click rate.'
    },
    {
      q: 'Does GoHighLevel support content A/B testing?',
      a: 'Yes, as the Email Content test type. Subject and content cannot be tested together. A workflow A/B Test action covers conversions across paths.'
    },
    {
      q: 'How many contacts do I need for an A/B test?',
      a: "HighLevel's pages say at least 40 contacts or at least 10 per variation. That lets the test run. It does not make the result reliable."
    },
    {
      q: 'How long should I run an email A/B test?',
      a: 'HighLevel allows 30 minutes to 24 hours for a campaign test. The right length depends on how quickly your audience responds.'
    },
    {
      q: 'What should I test first?',
      a: 'The element nearest your weakest metric, one change at a time. Subject line for opens, call to action for clicks.'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'track', title: 'How Do I Track Email Campaign Performance in GoHighLevel?' },
    { id: 'metrics-meaning', title: 'What Do My GoHighLevel Email Metrics Mean?' },
    { id: 'open-rate-accuracy', title: 'Are Email Open Rates Accurate?' },
    { id: 'opens-no-clicks', title: 'Why Are People Opening My Emails but Not Clicking?' },
    { id: 'improve-engagement', title: 'How Do I Improve Email Engagement in GoHighLevel?' },
    { id: 'ab-testing', title: 'Can I A/B Test Emails in GoHighLevel?' },
    { id: 'improvement-loop', title: 'How Do I Use Campaign Data to Improve My Next Email?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'what-next', title: 'What Should I Do Next?' },
  ];

  const reportLocations = [
    { sent: 'A one-time or scheduled email campaign', look: 'Marketing, then Emails, then Statistics', see: 'Engagement Summary, Performance Analysis (delivery rate, bounce rate, unsubscribes, spam complaints and a choice of engagement metrics over a date range) and Top Performing Emails' },
    { sent: 'An email inside a workflow', look: 'Automation, then Workflows. Open the workflow, select the Email action, then Statistics in the right-hand panel', see: 'Delivered, Opened, Clicked, Replied, Bounced, Unsubscribed, Complained, Accepted and Rejected. Defaults to the last 30 days' },
    { sent: 'A bulk send', look: 'Contacts, then Bulk Actions. Find the send in the activity list', see: 'Total Attempts, Delivered, Opened, Clicked, Replied, Bounced, Unsubscribed, and performance by individual recipient' },
  ];

  const metricTable = [
    { metric: 'Delivered', type: 'Reported (HighLevel: accepted by recipient servers)', measures: "The recipient's server took the message", tells: 'Whether sending worked at the server level', cannot: 'That it reached the inbox' },
    { metric: 'Bounced (hard and soft)', type: 'Reported', measures: 'Permanent versus temporary delivery failure', tells: 'List quality problems', cannot: 'Why a message was refused, without the error text' },
    { metric: 'Opened', type: 'Reported (HighLevel: one or more views)', measures: 'A tracking image loaded', tells: 'A rough, directional signal and relative comparisons', cannot: 'That a person read it (see the accuracy section)' },
    { metric: 'Clicked', type: 'Reported', measures: 'A tracked link was followed', tells: 'Interest in the offer', cannot: 'That a human clicked, or that they converted' },
    { metric: 'Replied', type: 'Reported on workflow and bulk views', measures: 'A contact answered', tells: 'Strong engagement, especially for conversational emails', cannot: 'The sentiment of the reply' },
    { metric: 'Unsubscribed', type: 'Reported', measures: 'The contact opted out', tells: 'Relevance and expectation problems', cannot: 'That the campaign failed. Some unsubscribes are a healthy list clean-up' },
    { metric: 'Spam complaints', type: 'Reported', measures: 'A recipient marked it as spam', tells: 'A reputation risk', cannot: 'How many people merely ignored it' },
    { metric: 'Delivery, open and click rates', type: "Shown on the dashboard. HighLevel's pages give no formula or denominator", measures: 'Shares of a total', tells: 'Trends across your own sends', cannot: 'Comparability with other tools, unless you know the denominator' },
    { metric: 'Click-to-open rate', type: 'Calculated by you', measures: 'Clicks as a share of opens', tells: 'Whether those who opened found the content compelling', cannot: 'Anything reliable when opens are inflated' },
    { metric: 'Conversion', type: 'Tracked outside email reporting, or through a workflow goal', measures: 'A booking, lead, sale or other result', tells: 'Whether the campaign did its job', cannot: 'Which email deserves the credit, unless you track it' },
  ];

  const goalMetrics = [
    { type: 'Newsletter', start: 'Clicks on the main link, replies, unsubscribes over time', then: 'Opens as a trend', notBy: 'A single open-rate number' },
    { type: 'Event invitation', start: 'Registrations', then: 'Clicks to the registration page', notBy: 'Opens' },
    { type: 'Sales promotion', start: 'Purchases or bookings and revenue', then: 'Clicks, unsubscribes', notBy: 'Clicks alone' },
    { type: 'Appointment reminder', start: 'Confirmations and show-ups', then: 'Delivery and replies', notBy: 'Click rate, because the message may not need a click' },
    { type: 'Re-engagement', start: 'Replies and clicks from contacts who had gone quiet', then: 'Unsubscribes and complaints', notBy: 'Opens' },
  ];

  const opensNoClicks = [
    { cause: 'Inflated opens', looks: 'High opens within seconds, low clicks, low outcomes', check: 'Whether the audience skews to Apple Mail; whether outcomes match clicks', change: 'Judge by clicks and outcomes' },
    { cause: 'Link tracking off or links broken', looks: 'Zero or very low clicks across every email', check: 'Link tracking settings and a test click on each link (HighLevel notes opens and clicks can be missing when tracking is off)', change: 'Fix links and re-send a test' },
    { cause: 'No clear next step', looks: 'Skimmed, not acted on', check: 'Does the email have one obvious primary action?', change: 'One main call to action, written as an outcome' },
    { cause: 'Competing links', looks: 'Clicks scattered or none', check: 'Count the links', change: 'Cut secondary links' },
    { cause: 'Subject promise does not match the content', looks: 'Opens, then unsubscribes or silence', check: 'Read the subject, then the first paragraph', change: "Make the opening deliver the subject's promise" },
    { cause: 'Audience mismatch', looks: 'Opens from people who do not need the offer', check: 'Who received it', change: 'Segment (see the next section)' },
    { cause: 'Mobile layout', looks: 'Buttons hard to tap', check: 'Open the preview on a phone', change: 'Larger button, shorter email' },
    { cause: 'Offer or landing page weak', looks: 'Clicks but no outcome', check: 'Page match and form friction', change: 'Fix the page before the email' },
  ];

  const ctaTable = [
    { weak: 'Click here', strong: 'Book your free 15-minute website review', why: 'Says what happens next' },
    { weak: 'Learn more', strong: 'See the three packages and pricing', why: 'Sets the expectation' },
    { weak: "Don't miss out", strong: "Reserve your seat for Thursday's workshop", why: 'Names the action and the event' },
    { weak: 'Check out our blog', strong: 'Read the guide to reducing no-shows', why: "Specific to the reader's problem" },
  ];

  const segmentationTable = [
    { business: 'Marketing agency', weak: 'One newsletter to all prospects and clients', better: 'Separate segments for prospects and current clients, each with its own offer' },
    { business: 'Local service business', weak: 'A discount sent to everyone', better: 'Past customers get a reminder to rebook; new leads get a first-visit offer' },
    { business: 'Consultant or coach', weak: 'A broad promotion to the whole list', better: 'Segment by topic they signed up for, and invite recent clickers to a call' },
    { business: 'Promotional campaign', weak: 'The same blast at the same time to all contacts', better: 'Start with engaged contacts, then follow up with those who have not responded' },
  ];

  const abComparison = [
    { aspect: 'Where', campaign: 'Marketing, Email, Campaigns. Open the campaign, A/B testing tab in the Email Builder', workflow: 'Automation, Workflows. Add action, A/B Test' },
    { aspect: 'What you test', campaign: 'One thing per test: Email Subject or Email Content', workflow: 'Different paths of actions (emails, SMS, waits). Each path can differ' },
    { aspect: 'How many versions', campaign: 'Up to six variations', workflow: '2 to 10 paths' },
    { aspect: 'How the winner is chosen', campaign: 'Unique Open Rate or Unique Click Rate', workflow: 'A goal event (such as email activity, trigger link click, appointment, form, payment, invoice) or a custom condition. Winner is the highest conversion %' },
    { aspect: 'Test length', campaign: '30 minutes to 24 hours', workflow: 'Total contacts entered, goal completions, or a date and time' },
    { aspect: 'After the test', campaign: 'The winner is sent to the rest of the audience automatically', workflow: 'Send new contacts to the winning path, or keep splitting and show the result' },
    { aspect: 'Limits', campaign: 'Not available with batch or RSS schedules. Minimum contacts stated differently on different pages', workflow: 'Pages read do not describe plan limits or editing after publish' },
  ];

  const testExamples = [
    { test: 'Subject line specificity', a: 'Generic promotional', b: 'Specific benefit', metric: 'Unique click rate', reveals: 'Whether specificity moves action, not just opens' },
    { test: 'Call to action wording', a: 'Learn more', b: 'Book a free 15-minute review', metric: 'Unique click rate', reveals: 'Whether a concrete next step draws clicks' },
    { test: 'Number of links', a: 'Five links', b: 'One main link', metric: 'Unique click rate and bookings', reveals: 'Whether focus helps' },
    { test: 'Sender name', a: 'Company name', b: 'Named person at the company', metric: 'Unique open rate (manual test)', reveals: 'Whether familiarity affects opens. Not a native HighLevel test option' },
    { test: 'Workflow follow-up', a: 'Reminder after two days', b: 'Reminder after four days', metric: 'Bookings (A/B Test action goal)', reveals: 'Whether timing affects the outcome' },
  ];

  const sampleTable = [
    { sample: '200 recipients each', a: '40 opens (20%)', b: '46 opens (23%)', result: 'Difference is well within what chance produces (about a 47% chance of seeing a gap this large if the versions were equal). Not enough evidence' },
    { sample: '1,000 recipients each', a: '200 opens (20%)', b: '230 opens (23%)', result: 'About a 10% chance if equal. Suggestive, still not strong evidence' },
    { sample: '5,000 recipients each', a: '1,000 opens (20%)', b: '1,150 opens (23%)', result: 'Under 0.1% chance if equal. Strong evidence the versions differ on this measure' },
  ];

  const loopSteps = [
    "Review the results. Open the campaign's report (see the tracking section) and note delivery, bounces, unique clicks and the outcome.",
    'Find the weakest stage. Follow the flow from delivery to opens to clicks to outcome. Compare with your own recent sends.',
    'Investigate why. Think about audience, subject line, message, call to action, timing, frequency and the tracking limits above.',
    'Choose one change. Pick the change most likely to fix that stage.',
    'Test it. Use the campaign A/B test or a workflow A/B Test where it fits, or send two comparable campaigns by hand and say honestly that it was a manual comparison.',
    'Review the outcome. Compare the right metric, allow for audience size and measurement limits.',
    "Apply it. Use what you learned next time, and note it in a running log so the result does not live only in someone's head.",
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
          <span className="text-[#1A2236] font-medium">GoHighLevel Email Campaign Performance</span>
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
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Campaign Performance</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">A/B Testing</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Track and Improve GoHighLevel Email Campaign Results
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Prepared 4 November 2026 · HighLevel help pages and idea board read 4 November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              You sent the campaign. Now there is a page of numbers, and the real question is what to do with them. This guide follows one path: find your GoHighLevel email reports, work out what the numbers mean (and where they mislead), fix whatever is weakest, and then test the fix so you are not guessing.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>Where this comes from: HighLevel's help pages and idea board (read 4 November 2026), Apple's support page, and email vendors' guidance on open tracking and testing. Nothing here was tested in a live HighLevel account, menu names can change, and HighLevel's pages disagree in a few places (the disagreements are shown). No percentage in this guide is a benchmark or a promise. The numbers you compare against should be your own past campaigns.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Help Reading Your Results? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#track"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to the Tracking Section
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
                  src="/blog/gohighlevel-email-campaign-performance.png"
                  alt="Funnel of email campaign stages from delivered to converted with a magnifying glass on the weakest step, for tracking GoHighLevel email campaign results"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>In-article diagram: Decision path for finding the weakest stage of a GoHighLevel email campaign.</span>
              </div>
            </div>

            {/* Section: Track */}
            <h2 id="track" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Track Email Campaign Performance in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with where each kind of email reports, because they do not share one screen.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you sent</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Where to look</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you see</th>
                  </tr>
                </thead>
                <tbody>
                  {reportLocations.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.sent}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.look}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.see}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sources: <a href="https://help.gohighlevel.com" target="_blank" rel="noopener noreferrer" className="text-[#0E9BF0] hover:underline">HighLevel Email Statistics</a> (9 February 2026) and the dashboard page (9 September 2026). The first writes the location as Marketing &gt; Emails and the second as Marketing &gt; Emails &gt; Statistics. Your account's labels are the ones to trust.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Where can I see email campaign statistics in GoHighLevel?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Statistics page is a dashboard with a source dropdown at the top left (All Campaigns, Email Campaigns, Workflow Campaigns, Bulk Action Campaigns). Performance Analysis lets you compare those sources in the current view. HighLevel's pages do not describe comparing against an earlier period, so for before-and-after questions, export and compare yourself. A "Try Sample Data" option shows demonstration values, so do not mistake them for your own.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Where can I find workflow email performance data?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Workflow email statistics live on each Email action, not on the campaign dashboard. In the dashboard they are grouped as Workflow Campaigns, where Top Performing Emails reports each email action separately. If a workflow email looks missing from your campaign numbers, that is by design: it is a different report.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Can I see which contacts opened or clicked an email?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, in two ways, and one has a limit.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">From a campaign's Statistics:</strong> open the three-dot menu on a sent campaign, choose Statistics, then Load More, pick an interaction category (Opened and Clicked are the ones named), select contacts or All, and choose Add Tags (HighLevel's tagging page). Tags let you build a follow-up audience. Auto-tagging applies only to future interactions, so past engagers need manual tagging.</li>
              <li><strong className="text-[#1A2236]">From Email Analytics:</strong> Settings, then Email Services, then Email Analytics. It shows metric boxes (Sent, Delivered, Opened, Clicked, Complained, Bounced, Unsubscribed, Failed). Set a date range, pick a source type (Campaign, Workflow or Bulk Request), choose a source name (required, or no results appear), then click a metric to see the contacts (HighLevel's filtering page). HighLevel says this is available for LC Email sub-accounts only.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two limits to know. HighLevel says only Mailgun gives full visibility into key metrics and other SMTP providers may show only opens and clicks. It also says opened and clicked data may be incomplete or missing if open or link tracking is disabled. If your numbers look oddly empty, check those two things first. I did not find a HighLevel page describing a link-by-link click report, so I do not claim one.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Can I export GoHighLevel email reports?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Yes. From Marketing, Emails, Statistics, choose the type (All Campaigns, Email Marketing Campaigns Only, Workflows Only at the individual email action level, or Bulk Actions Only), pick the date range and click Export. Enter the email address that should receive the file. HighLevel sends a download link for a CSV that stays valid for 30 days (export page, 21 September 2026). The page does not list every column, so open one export before you build a reporting routine around it.
            </p>

            {/* Section: Metrics Meaning */}
            <h2 id="metrics-meaning" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Do My GoHighLevel Email Metrics Mean?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Each metric answers one question. Used together they show where people drop out between "we sent it" and "they did what we hoped." The table marks which values HighLevel reports and which you calculate.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Metric</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Reported or calculated</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it measures</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it can tell you</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it cannot tell you</th>
                  </tr>
                </thead>
                <tbody>
                  {metricTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.metric}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.type}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.measures}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.tells}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.cannot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What is the difference between sent and delivered emails?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sent means HighLevel tried. Delivered means the recipient's server accepted the message. Neither means inbox. A delivered email can still land in spam or another tab, so look at delivery before you judge engagement: a low open rate on a campaign with a weak delivery rate is a deliverability problem, not a subject line problem. The bulk view also shows Total Attempts, which HighLevel does not define on the pages I read. If bounces or complaints look high, (Planned link, not yet published: how to stop emails going to spam and improve inbox placement) covers what to do.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What is the difference between click rate and click-to-open rate?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Click rate (often called click-through rate) divides clicks by a total, usually delivered emails. Click-to-open rate divides clicks by opens. The first tells you how the campaign did overall. The second tells you how the content did among people who opened, which is why it is useful for judging the message separately from the subject line.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here is the catch. HighLevel does not publish a formula or denominator for its rates, and I could not confirm that click-to-open is a native field. If you want it, calculate it yourself from unique clickers and unique openers, and use the same method every time. Because opens can be inflated (see the next section), treat click-to-open as a comparison between your own sends, not a score.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Which email metrics should I track for my campaign goal?</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Campaign type</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Start here</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Then check</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Do not judge it by</th>
                  </tr>
                </thead>
                <tbody>
                  {goalMetrics.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.type}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.start}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.then}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.notBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Open Rate Accuracy */}
            <h2 id="open-rate-accuracy" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Are Email Open Rates Accurate?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not precisely, and not in one direction. An open is recorded when a tiny tracking image loads. That can happen without a person reading the email, and a person can read it without the image loading. So treat opens as a directional signal, useful for comparing one subject line with another, and never as proof that someone read your message. This does not make open rate useless. It makes it a weaker measure than it looks.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How does Apple Mail Privacy Protection affect open rates?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Apple says Mail Privacy Protection hides the recipient's IP address and "prevents senders from seeing if you've opened the email message" (Apple Support). Email vendors explain the effect on your numbers: Apple's feature can load images, including tracking images, without the person opening the email, so opens are recorded that no human triggered (Customer.io, Bird). The result is that reported opens can run higher than real ones, especially for contacts using Apple's Mail app.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's pages I read do not say whether it filters these machine opens, so assume it may not. I also have no figure for how much of your list this touches, and neither does anyone who has not looked at your audience. What you can do: compare like with like (the same audience and timing), look at clicks and outcomes, and avoid removing contacts just because they "never opened."
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Can bots and security scanners inflate click rates?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, they can. Security tools and spam filters often follow the links in an email to check them, and a tracking system can record that as a click. Vendors describe a few signs: clicks within seconds of delivery, several different links clicked almost at once, and clicks recorded for people who never opened (Customer.io, Mailmodo). These are vendor observations, not data from HighLevel, and an unusual click is not automatically a bot.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              How much of this you can check depends on what your report shows. The pages I read do not document per-click timestamps or sources, so what you can realistically do is look at the pattern: a campaign where clicks spike with no matching rise in form submissions, bookings or page visits deserves a second look. Use unique clicks and the outcome on your landing page as the tiebreaker.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What should I measure instead of open rate?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Whichever result the campaign exists to produce: a booking, a form submission, a purchase, a reply, a qualified lead, or revenue. Clicks are a middle step. Replies are often a stronger signal than opens (Bird and Customer.io both recommend moving toward clicks, replies and conversions). Open rate still has a role: as a relative comparison between two subject lines sent at the same time to similar audiences, and as a clue that something is wrong when it suddenly drops.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What is a good email open rate and click rate?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              There is no number I can give you that is both reliable and useful. The benchmark pages I found disagree with each other, mix industries and list types, and are mostly published by vendors and aggregators, and open rates have been unreliable since privacy features began inflating them. A better answer is to build your own baseline. Take your last five to ten comparable sends (same audience type, same kind of email), record delivery, unique clicks and your outcome for each, and call the typical range your normal. A good result is one that beats your normal for that kind of campaign and produces the outcome you wanted.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For delivery health, HighLevel's own guidance (covered in (Planned link, not yet published: how to stop emails going to spam and improve inbox placement)) gives targets for delivered mail, hard bounces and complaints. Those are guidelines, not rules.
            </p>

            {/* Section: Opens No Clicks */}
            <h2 id="opens-no-clicks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Are People Opening My Emails but Not Clicking?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              First rule out the measurement. Some of those opens may be machine opens, and some clicks may be missed, so check that link tracking is on and the links work. Then look at the message. Work down this table and stop at the first row that fits.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Possible cause</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What it looks like</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to change</th>
                  </tr>
                </thead>
                <tbody>
                  {opensNoClicks.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.cause}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.looks}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: Improve Engagement */}
            <h2 id="improve-engagement" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Improve Email Engagement in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use the flow below to find the weakest stage first. Improving everything at once is how teams lose track of what worked.
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-6">
              <p className="text-sm text-[#1A2236] italic">
                Diagram: Decision path for finding the weakest stage of a GoHighLevel email campaign. Open the campaign's statistics and ask which stage loses the most people. If delivery is low or bounces are high, it is a list or deliverability problem — fix this first, because engagement advice will not help yet. If opens are low compared with your own past campaigns, look at reach or first impression (sender name, subject, audience fit, timing, spam placement). If opens are fine but clicks are low, look at the message or offer (one clear call to action, content match, mobile layout, machine opens). If clicks are fine but few bookings, leads or sales, look at the landing page or offer (promotion-to-page match, form friction, tracking set up outside the email). Then pick one change, write a hypothesis, test it, and apply what you learned.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How can I increase email open rates?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Opens depend mostly on what the recipient sees before opening: who it is from, the subject line and the preview text, plus whether they expect to hear from you. No subject line overcomes poor sender reputation or a list that did not ask for your email.
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Sender name:</strong> use a name people recognize, ideally a person or brand they signed up with.</li>
              <li><strong className="text-[#1A2236]">Subject line:</strong> state the specific benefit or topic. Avoid vague teasers that the opening paragraph cannot pay off.</li>
              <li><strong className="text-[#1A2236]">Preview text:</strong> treat it as a second subject line. Be aware that I did not find HighLevel documentation that lets you test it.</li>
              <li><strong className="text-[#1A2236]">Audience expectations:</strong> send what the signup promised.</li>
              <li><strong className="text-[#1A2236]">Timing and frequency:</strong> consistent sending is easier on recipients than bursts. Test timing against your own history before copying anyone's rule.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How can I improve email click-through rates?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Clicks reward clarity. Give the email one job, say what the click will give the reader, and make the link easy to find and tap.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Weak call to action</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Stronger call to action</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {ctaTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.weak}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.strong}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are illustrative wordings, not tested results. Also match the email to the page it leads to: if the email promises a price list and the page opens with a long story, the click is wasted.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How does segmentation improve email engagement?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The same email to everyone treats a new lead, a past client and a cold contact as one person. In a campaign, open the send step, and under Recipient choose Build Segments. HighLevel says segments can filter on tags, contact fields, email activity and engagement, and you can combine conditions with AND and OR, then save the segment to reuse it (HighLevel segments page, 2 October 2026). A segment can also reference a pre-built segment such as contacts engaged in the last seven days. Smart Lists are a separate feature managed in Contacts.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start simple: two or three segments built on something you already track, such as service interest, customer stage, or whether they clicked in the last campaign. Segments built from tags you assign after campaigns (for example, tagging clickers) are a practical way to separate the engaged from the quiet.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Business</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Weak approach</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Better approach (illustrative)</th>
                  </tr>
                </thead>
                <tbody>
                  {segmentationTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.business}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.weak}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.better}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How often should I send marketing emails?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              No universal frequency fits every list. What matters is that frequency matches what people expected when they joined, and that quiet contacts are not hammered. HighLevel's spam guidance (Why Are My Emails Going To Spam?) suggests sending more often to newly opted-in contacts for a short period, slowing down if they do not engage after a week or two, and stopping if there is still no engagement after more than two months of weekly sends. If a segment stops responding, reduce its frequency rather than continuing to send, since low engagement can also hurt future inbox placement (more in (Planned link, not yet published: how to stop emails going to spam and improve inbox placement)).
            </p>

            {/* Section: A/B Testing */}
            <h2 id="ab-testing" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can I A/B Test Emails in GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Yes, in two ways, and they measure different things.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]"></th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Campaign A/B test</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Workflow A/B Test action</th>
                  </tr>
                </thead>
                <tbody>
                  {abComparison.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.aspect}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.campaign}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.workflow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Sources: setup page (30 September 2026), A/B page (9 October 2026), Email AI page (27 October 2026) and workflow A/B Test page (27 October 2026). The workflow action is newer than the idea-board thread (thread) that was still describing it as planned in August 2026, so confirm it appears in your account before you rely on it. The older Split action sends contacts down random paths with percentages that must total 100, up to five paths, which can also be used for tests but does not pick a winner for you.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How do I A/B test email subject lines in GoHighLevel?</h3>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Go to Marketing, Email, Campaigns and open your campaign.</li>
              <li>In the Email Builder, open the A/B testing tab and turn on Enable A/B testing.</li>
              <li>Choose Email Subject as the test type.</li>
              <li>Set the test duration. HighLevel's pages give a range of 30 minutes to 24 hours.</li>
              <li>Choose the number of variations, up to six, and write the subject lines. Content AI can draft alternatives.</li>
              <li>Use the Test Size slider to set how much of the audience joins the test. The rest receive the winner.</li>
              <li>Choose the winning criterion. HighLevel's page recommends Unique Open Rate for subject line tests.</li>
              <li>Save, then use Send or Schedule.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Know before you start: the campaign needs enough contacts. HighLevel's setup page says at least 40, while the changelog and Email AI page say at least 10 per variation, so check what your account allows. If the chosen metric records no result during the test, HighLevel's documentation says the first variation wins, which means a test on a tiny list can "pick" a winner with no evidence. Open rate as a criterion is also exposed to the machine opens described earlier. If you want a safer signal, a click-based test on an email whose goal is a click is harder to inflate.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Can I A/B test email content, or run a test inside a workflow?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a campaign, choose Email Content as the test type. HighLevel's page says this covers changes such as images, buttons or copy, and recommends Unique Click Rate as the criterion. Subject and content cannot be tested in the same test. I found no HighLevel page that lists sender name or preview text as testable, so do not plan a test around them unless you see the option in your account.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              For a workflow, the A/B Test action splits contacts across paths and measures a conversion you define, which makes it the better fit when the real goal is a booking or a purchase. Contacts are distributed evenly, and HighLevel notes counts can vary with few contacts. Use Declare winner in Statistics to end it early, and Reset test to start again, which clears previous results.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">What should I test in an email campaign?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Test one thing at a time, because if you change the subject, the opening and the button together you will not know which caused the difference. A reasonable order is the item closest to your weakest metric: subject line or sender name for opens, the call to action or the number of links for clicks, and the offer or landing page for outcomes. Remember what HighLevel's native campaign test can change (subject or content) and what you would have to test by hand (sender name, preview text, send time).
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How do I design an email A/B test?</h3>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Identify the problem. For example, a promotional email gets opens but few clicks.</li>
              <li>Write a hypothesis. "A subject line that names a specific benefit will earn more clicks than a generic promotional subject."</li>
              <li>Pick one variable. The subject line.</li>
              <li>Create version A and B. A: "Our spring sale is here." B: "Cut your reporting time with these three templates." (Hypothetical.)</li>
              <li>Keep conditions comparable. Same audience type, same send window, same content.</li>
              <li>Choose the deciding metric before sending. Unique clicks, because the goal is a click.</li>
              <li>Set the split and the duration. Based on your list size and how quickly your audience usually responds.</li>
              <li>Collect the results. Do not stop the moment one version leads.</li>
              <li>Compare. Look at the difference and at how big your audience was.</li>
              <li>Decide whether the evidence is strong enough to act on. If not, run it again or treat the result as a hint.</li>
            </ol>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Test (hypothetical)</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Version A</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Version B</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Primary metric</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What the result could reveal</th>
                  </tr>
                </thead>
                <tbody>
                  {testExamples.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.test}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.a}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.b}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.metric}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.reveals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are examples to illustrate test design. They are not HighLevel test results.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How large should an email A/B test sample be?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel sets a minimum so a test can run. That minimum is not a promise that the result means anything. Small audiences produce noisy results, and a small gap between versions can easily be chance. Here is a hypothetical example with the arithmetic shown, using a standard two-proportion comparison of open rates.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Sample</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Version A</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Version B</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.sample}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.a}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.b}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Assumptions: the same three-point gap in every row, a two-sided comparison and a pooled estimate. I calculated these myself. They are illustrations of how sample size changes confidence, not data from any account, and they apply to opens, which carry the measurement problems described earlier.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Published rules of thumb disagree. Customer.io suggests at least 500 recipients per variation (Customer.io). A HubSpot article's example needs about 20,000 per variation, because it assumes a 2 percent baseline rate and a 20 percent relative lift (HubSpot). The gap is the point: the right size depends on your baseline and the size of the difference you care about. If your list is small, HubSpot suggests running the same kind of test over several sends and combining what you learn. Only call a result reliable when a calculator or the numbers support it.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How long should an email A/B test run?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Long enough for most of your audience's responses to arrive, and no longer than the campaign's timing allows. HighLevel's campaign test accepts 30 minutes to 24 hours. Opens arrive faster than clicks, and clicks arrive faster than purchases, so a short window can favor whichever version simply got opened sooner. HubSpot's article says most results arrive in the first 24 hours in typical cases and suggests checking this against your own past sends, with slower audiences needing 48 or 72 hours. A campaign test cannot exceed 24 hours in HighLevel, so if your audience is slow, a workflow A/B Test with a longer window may fit better. There is no universal duration.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">How do I know which email version performed better?</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Start with the goal you set before sending. A subject line that wins on opens has won on opens, not on business value. More clicks do not always mean more bookings. Where the outcome matters, compare the outcome. Then check three things: was the audience large enough to trust the gap, did the winner hold up outside the test group, and does the result make sense? If the winner leads by a small margin on a small list, treat it as a hint and repeat the test. HighLevel's own page says A/B testing does not guarantee higher opens or clicks, since results depend on audience relevance, content, deliverability and engagement.
            </p>

            {/* Section: Improvement Loop */}
            <h2 id="improvement-loop" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Use Campaign Data to Improve My Next Email?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the loop that ties the sections together. Run it after every campaign, not just the big ones.
            </p>
            <ol className="space-y-3 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              {loopSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              A manual comparison is not the same as the native test. Two separate sends may differ in timing, audience and external factors, so keep what you can the same and treat the result as weaker evidence.
            </p>

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
              What Should I Do Next?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Open your most recent campaign's statistics and answer one question: where did most people drop out? Pick one change for that stage, write the hypothesis in a sentence, and test it on your next send. If the drop is at delivery, start with (Planned link, not yet published: how to stop emails going to spam and improve inbox placement) and then come back. If you have not set up sending yet, (Planned link, not yet published: the complete GoHighLevel email setup checklist) covers the foundation.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about GoHighLevel email campaign performance?</strong>
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">One change, one hypothesis, one test.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up implements GoHighLevel for agencies and service businesses. If you need help setting up reporting, reading your numbers, or designing your first A/B test, get in touch.
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
                Prepared 4 November 2026. HighLevel help pages and idea board read 4 November 2026. Nothing here was tested in a live HighLevel account, menu names can change, and HighLevel's pages disagree in a few places (the disagreements are shown). No percentage in this guide is a benchmark or a promise. The numbers you compare against should be your own past campaigns.
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