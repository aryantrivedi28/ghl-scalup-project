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
  AlertTriangle,
  Clock,
  Rocket,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function NotifyHumanGoHighLevelConversationAIClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'why-ai-may-stop',
        'can-you-notify-without-stopping',
        'handover-vs-workflow-notification',
        'how-to-notify-human-workflow',
        'phase-1-decide',
        'phase-2-prepare-bot',
        'phase-3-build-workflow',
        'staff-notification-settings',
        'how-to-connect-workflow',
        'how-to-check-ai-active',
        'check-status',
        'check-what-changed',
        'things-that-change-status',
        'example-notify-while-continuing',
        'phase-5-verify',
        'troubleshooting',
        'when-use-human-handover',
        'conclusion',
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
      q: "Can GoHighLevel notify a human without stopping Conversation AI?",
      a: "You can set up a notification separately from Human Handover. Whether the bot keeps replying afterward is not stated in the documentation we read, so test it in your account."
    },
    {
      q: "Does the Human Handover action pause the bot?",
      a: "Documented: it includes a Bot Pause Behaviour timer in days, hours and minutes. Whether a zero or empty value works is not stated."
    },
    {
      q: "What is the difference between Human Handover and Trigger a Workflow?",
      a: "Human Handover moves a conversation to a person and can pause the bot. Trigger a Workflow runs a published workflow when a condition is recognized, and the documentation does not say it pauses the bot."
    },
    {
      q: "Can a workflow notify a team member when a customer asks for a human?",
      a: "A workflow started from Bot Goals can contain internal actions, but the AI must recognize your condition, and triggering is not guaranteed. Test it and keep a backup alert."
    },
    {
      q: "Can Conversation AI keep answering after a workflow is triggered?",
      a: "Possibly. It depends on what the workflow does and your sleep settings. A message sent to the contact by the workflow can put the bot to sleep if that setting is on."
    },
    {
      q: "Why does my AI bot stop responding after a staff member replies?",
      a: "If sleep after a manual message is enabled, a staff reply pauses the bot. Check the contact's audit log and your sleep settings."
    },
    {
      q: "How can I tell whether Conversation AI is active, paused or inactive?",
      a: "Click the status icon in the conversation composer: Active, Inactive or Sleep/Snooze. The icon only appears in Suggestive or Auto-Pilot mode."
    },
    {
      q: "Can I notify a human when the AI does not know the answer?",
      a: "Yes, in two ways: Email Notification Settings in Bot Goals, or the Human Handover scenario Lack of Information. The second includes the pause."
    },
    {
      q: "How do I prevent duplicate human notifications?",
      a: "Do not attach a workflow to the bot if it already runs from the same trigger. Add a tag check at the start and review its re-entry setting."
    },
    {
      q: "When should I pause Conversation AI instead of letting it continue?",
      a: "When a person must take over, when the issue is sensitive, or when a conflicting AI answer would cause harm."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'why-ai-may-stop', title: 'Why GoHighLevel Conversation AI May Stop After Human Handover' },
    { id: 'can-you-notify-without-stopping', title: 'Can You Notify a Human Without Stopping Conversation AI?' },
    { id: 'handover-vs-workflow-notification', title: 'Human Handover vs. Workflow Notification in GoHighLevel' },
    { id: 'how-to-notify-human-workflow', title: 'How to Notify a Human Using a GoHighLevel Workflow' },
    { id: 'phase-1-decide', title: 'Phase 1: Decide What Should Happen' },
    { id: 'phase-2-prepare-bot', title: 'Phase 2: Prepare the Bot' },
    { id: 'phase-3-build-workflow', title: 'Phase 3: Build the Notification Workflow' },
    { id: 'staff-notification-settings', title: 'Staff Notification Settings' },
    { id: 'how-to-connect-workflow', title: 'How to Connect the Workflow to Conversation AI' },
    { id: 'how-to-check-ai-active', title: 'How to Check Whether Conversation AI Is Still Active' },
    { id: 'check-status', title: 'Check the Status' },
    { id: 'check-what-changed', title: 'Check What Changed It' },
    { id: 'things-that-change-status', title: 'Things That Can Change the Status' },
    { id: 'example-notify-while-continuing', title: 'Example: Notify a Human While the AI Continues Answering' },
    { id: 'phase-5-verify', title: 'Phase 5: Verify That the Bot Keeps Responding' },
    { id: 'troubleshooting', title: 'Troubleshooting GoHighLevel Conversation AI Human Handover' },
    { id: 'when-use-human-handover', title: 'When Should You Use Human Handover Instead?' },
    { id: 'conclusion', title: 'Conclusion' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const handoverVsWorkflowData = [
    { configuration: 'Native Human Handover', whatItIsFor: 'Escalate a conversation for human intervention', effectOnBot: 'Documented: includes a configurable pause. Flow Builder: bot stops', whatToVerify: 'How long the pause lasts and what happens when it ends' },
    { configuration: 'Trigger a Workflow', whatItIsFor: 'Start a published workflow when a plain-language condition occurs', effectOnBot: 'Not documented', whatToVerify: 'Whether the bot replies to the next message after the workflow runs' },
    { configuration: 'Email Notification Settings', whatItIsFor: 'Alert staff when the agent cannot answer or a conversation needs review', effectOnBot: 'Not documented as pausing', whatToVerify: 'Which conditions send the alert; whether it covers your cases' },
    { configuration: 'Conversation assignment', whatItIsFor: 'Route the conversation to a staff member', effectOnBot: 'Handover can assign. Whether assignment alone changes bot behavior is not documented', whatToVerify: 'Bot status before and after assignment' },
    { configuration: 'Bot status controls', whatItIsFor: 'Decide whether the bot may reply to a contact', effectOnBot: 'Directly controls replies: Active, Inactive, Sleep', whatToVerify: 'Whether a staff reply, a workflow message or a handover changed the status' },
  ];

  const troubleshootingData = [
    { symptom: 'The human receives no notification', likelyCauses: 'The workflow never ran; staff notification preferences are off; the notification action has no recipient', whereToLook: 'Workflow execution history; Settings > My Staff > Notification Settings', diagnosticFix: 'Check whether the run exists. If yes, check the recipient and preferences. Confirm the settings apply to workflow assignments (documented for handover only)' },
    { symptom: 'The workflow does not trigger', likelyCauses: 'Condition too vague or not met; workflow unpublished; another action took the condition; bot in the wrong mode', whereToLook: 'Bot Goals > Trigger a workflow; published status', diagnosticFix: 'Publish the workflow, tighten the condition, test with a direct request. Triggering is not guaranteed by the documentation, so keep an email notification as a backstop' },
    { symptom: 'The workflow triggers, but the bot stops', likelyCauses: 'The workflow sends a message to the contact and Workflow Message sleep is on; a handover scenario also fired; a workflow action set the bot Inactive; message limit reached', whereToLook: 'Audit logs; workflow actions; sleep settings; Human Handover scenarios', diagnosticFix: 'Read the audit log entry to see the cause. Remove customer messages and status actions from the workflow, or turn off the Workflow Message sleep setting. Whether a staff-only notification counts is unverified, so test it by removing actions one at a time' },
    { symptom: 'The bot continues, but the human lacks context', likelyCauses: 'The workflow receives limited data; notification body only uses basic fields', whereToLook: 'Execution log inputs; notification text', diagnosticFix: 'Use contact fields the bot populates (Contact Info with Update Contact Field), and enable Conversation Summary if you use it. Do not assume the question text is passed' },
    { symptom: 'Duplicate notifications', likelyCauses: 'The same trigger fires in Workflow Automation and in Bot Goals; the condition matches repeatedly; re-entry allowed', whereToLook: 'Workflow trigger; execution history; re-entry setting', diagnosticFix: 'Remove the duplicate trigger. Add a tag check at the start. See workflow re-entry' },
    { symptom: 'The bot keeps responding after a human takes control', likelyCauses: 'Staff reply sleep disabled; mode is Auto-Pilot; handover not used', whereToLook: 'Sleep settings (Manual Message); status icon', diagnosticFix: 'If a person must own the case, use a real handover or set the status to Inactive or Sleep for that contact' },
    { symptom: 'A manual staff reply changes the bot\'s status', likelyCauses: 'Manual Message sleep is on', whereToLook: 'Audit logs; sleep settings', diagnosticFix: 'Documented behavior. Decide whether you want it. If not, adjust the setting. The changelog does not give its location' },
    { symptom: 'The bot resumes only after a pause or sleep period', likelyCauses: 'Bot Pause Behaviour timer or \'Reactive bot after\' duration', whereToLook: 'Handover pause fields; status icon', diagnosticFix: 'Set the pause intentionally. Behavior at timer expiry is only partly documented, so test the resume' },
    { symptom: 'The bot catches a direct request for a human but misses other cases', likelyCauses: 'The condition describes only the explicit request', whereToLook: 'Trigger a workflow condition; handover scenarios', diagnosticFix: 'Add separate conditions for each case (pricing decision, custom arrangement) and consider Lack of Information with notification only if you accept its pause' },
    { symptom: 'Works in testing, differs in the live channel', likelyCauses: 'Different channel or bot enabled; test panel behaves differently; mode differences', whereToLook: 'Channel settings; bot assigned to channel', diagnosticFix: 'Test on the real channel with a real contact. The Advanced Settings article lets you enable or disable the bot per channel' },
  ];

  const whenUseHandoverData = [
    { useNotification: 'A customer wants more business information', useHandover: 'The customer expects a person to take over' },
    { useNotification: 'A person needs to review a lead while the AI answers routine questions', useHandover: 'The issue cannot be resolved safely or accurately by the AI' },
    { useNotification: 'The AI can still give accurate answers within its scope', useHandover: 'A complaint or sensitive issue needs judgment' },
    { useNotification: 'No person has taken responsibility for replying yet', useHandover: 'You need to prevent the AI contradicting a representative who is handling the case' },
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
          <span className="text-[#1A2236] font-medium">GoHighLevel: Notify a Human Without Stopping Conversation AI</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">AI</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Conversation AI</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Human Handover</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Notify a Human in GoHighLevel<br />
            <span className="text-[#F8D000]">Without Stopping Conversation AI</span>
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Facts checked against HighLevel documentation, 20 October 2026</div>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            You have built a Conversation AI bot that answers questions and collects lead details. When a prospect asks for something only a person can handle, such as a custom arrangement, you want a team member alerted. What you do not want is for the bot to go silent the moment the alert fires.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Short answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">In GoHighLevel, alerting a person and handing over the conversation are separate controls, and you can configure the alert without the handover.</strong> The closest documented design is to use a Trigger a Workflow action in Bot Goals that starts a workflow containing only internal actions, such as a staff notification, a task and a tag. What the documentation does not state is whether the bot keeps replying after that workflow runs. That depends on your bot's settings, so you need to test it. This guide shows how to build the setup and how to run that test.
            </p>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            In this article, <strong className="text-white">Conversation AI</strong> is HighLevel's AI agent that replies to contacts in channels such as SMS and chat. A <strong className="text-white">handover</strong> passes the conversation to a person. A <strong className="text-white">notification</strong> only tells a person something needs attention. <strong className="text-white">Bot status</strong> is whether the bot is allowed to reply to a given contact right now.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            Each claim below is labeled. <strong className="text-white">Documented</strong> means HighLevel's help articles say it. <strong className="text-white">Configuration-dependent</strong> means it varies with settings, bot type or account. <strong className="text-white">Unverified</strong> means we could not confirm it. We did not run a live test for this article, so nothing here is labeled 'verified in testing'. Run the tests in Phase 5 before relying on it.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get AI Setup Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-to-notify-human-workflow"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              See the Workflow Setup
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
                5+ years GHL experience · 200+ systems built globally. All product details verified against HighLevel documentation as of October 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need AI Setup Help?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help businesses build Conversation AI and workflow automation setups.</p>
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

            {/* Section: Why AI May Stop */}
            <h2 id="why-ai-may-stop" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Why GoHighLevel Conversation AI May Stop After Human Handover
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The native Human Handover action is built to move a conversation to a person, and it includes a pause. <strong className="text-[#1A2236]">Documented</strong> (Human Handover article, modified 2 June 2026):
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>It is configured in Bot Goals under Setup Your Actions, and it is released through Labs, so it may need enabling before it appears.</li>
              <li>It has three trigger scenarios, each with an Enable Scenario toggle: Human Requested, Lack of Information and Failed to Resolve Issue.</li>
              <li>After it fires it can assign the conversation, send a Final Message, create a task, add a tag and apply Bot Pause Behaviour, a timer set in days, hours and minutes.</li>
              <li>The article describes the timer as a way to resume bot interactions later, and its FAQ describes the period as one in which the bot will not respond.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              In Flow Builder, the guide says a Human Handover condition makes the bot stop and notify a person. So if your goal is a handover, a pause is expected. If your goal is only an alert, a handover action is the wrong tool, because the pause is part of what it does.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Two other mechanisms can pause the bot without any handover. <strong className="text-[#1A2236]">Documented</strong> (Bot Status for Individual Contacts, modified 12 October 2026): the bot can go to sleep after a manual staff reply, or after a workflow sends a message, if your sleep settings are configured that way. A HighLevel changelog says those two sleep triggers are now separate settings, called Manual Message and Workflow Message. It does not say where they are, so look in your Conversation AI settings rather than following a menu path from a third party.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/notify-human-gohighlevel-conversation-ai.png"
                  alt="GoHighLevel Conversation AI: Human Handover vs Workflow Notification - which pauses the bot"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>GoHighLevel Conversation AI: Human Handover vs Workflow Notification - which pauses the bot</span>
              </div>
            </div>

            {/* Section: Can You Notify Without Stopping */}
            <h2 id="can-you-notify-without-stopping" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can You Notify a Human Without Stopping Conversation AI?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Question</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Answer</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Can a notification be set up separately from Human Handover?</td>
                    <td className="py-3 px-3 text-[#5C6880]">Yes. Trigger a Workflow and Email Notification Settings are separate actions from Human Handover</td>
                    <td className="py-3 px-3 text-[#25C97D]">Documented</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Can a workflow started by the bot notify staff, assign, create a task or tag?</td>
                    <td className="py-3 px-3 text-[#5C6880]">Workflows can contain those actions. That a bot-triggered workflow can contain them is consistent with the documentation, but the actions' official pages were not reviewed for this article</td>
                    <td className="py-3 px-3 text-[#F8D000]">Configuration-dependent</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Does the bot keep replying after Trigger a Workflow runs?</td>
                    <td className="py-3 px-3 text-[#5C6880]">The documentation does not say</td>
                    <td className="py-3 px-3 text-[#DC3545]">Unverified</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Does a staff-only internal notification put the bot to sleep?</td>
                    <td className="py-3 px-3 text-[#5C6880]">Not documented. The sleep settings describe messages sent as workflow messages; whether an internal notification counts is unknown</td>
                    <td className="py-3 px-3 text-[#DC3545]">Unverified</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Does a message the workflow sends to the customer put the bot to sleep?</td>
                    <td className="py-3 px-3 text-[#5C6880]">It can, if the Workflow Message sleep setting is on</td>
                    <td className="py-3 px-3 text-[#F8D000]">Documented, configuration-dependent</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Can the bot's status be checked?</td>
                    <td className="py-3 px-3 text-[#5C6880]">Yes, from the conversation composer icon and audit logs</td>
                    <td className="py-3 px-3 text-[#25C97D]">Documented</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              So the direct answer is: yes, you can separate the alert from the handover, and the workflow route is the most promising design. Whether the AI keeps answering afterward is something to confirm in your own account, using the method below. We do not recommend labeling any setup 'always keeps the bot running' until you have seen it in a live conversation.
            </p>

            {/* Section: Handover vs Workflow Notification */}
            <h2 id="handover-vs-workflow-notification" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Human Handover vs. Workflow Notification in GoHighLevel
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are notification, assignment, handover and bot status. They are related but separate controls.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Configuration or Action</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Is For</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Effect on the Bot</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Verify</th>
                  </tr>
                </thead>
                <tbody>
                  {handoverVsWorkflowData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.configuration}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItIsFor}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.effectOnBot}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatToVerify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use notification alone when the bot can still give useful, accurate answers while a person prepares to respond. Use handover when a person must take over (see the last section before the FAQ).
            </p>

            {/* Section: How to Notify Human Workflow */}
            <h2 id="how-to-notify-human-workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Notify a Human Using a GoHighLevel Workflow
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These steps follow the documented requirement that the workflow exists and is published before the bot can use it. Action names and layouts in the workflow builder can differ by account, so confirm each action in your builder.
            </p>

            {/* Phase 1 */}
            <h2 id="phase-1-decide" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Phase 1: Decide What Should Happen
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Write down, before touching any settings:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Which questions the AI should answer on its own (services, hours, general information).</li>
              <li>Which requests should alert a person (custom arrangements, pricing decisions, a request for a specific person).</li>
              <li>Which situations need a real handover instead (a complaint, a sensitive issue, anything the AI could answer wrongly).</li>
              <li>What details must be collected first (name, email, phone, service requirements).</li>
              <li>Who gets the alert, and what they should do when it arrives.</li>
              <li>What happens once a person starts replying: does the bot step back?</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These decisions matter because the platform treats an alert, an assignment and a handover differently. If the last question has no answer, you may end up with a person and the bot both replying.
            </p>

            {/* Phase 2 */}
            <h2 id="phase-2-prepare-bot" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Phase 2: Prepare the Bot
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Open the bot (AI Agents `{'>'}` Conversation AI, then the bot) and review its Bot Goals, instructions and knowledge. Instruct the bot to:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Answer only from approved business information, and say so when it does not know.</li>
              <li>Collect the details you need naturally, without re-asking for what is already on the contact record.</li>
              <li>Recognize the situations that need a person.</li>
              <li>Tell the customer that the team has been <strong className="text-[#1A2236]">asked</strong> to follow up, not that someone has read the message or will reply by a specific time, unless your process guarantees that.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A prompt cannot override the platform's pause, sleep or stop controls. It can only change what the bot says.
            </p>

            {/* Phase 3 */}
            <h2 id="phase-3-build-workflow" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Phase 3: Build the Notification Workflow
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">In the correct sub-account, create a new workflow</strong> and name it clearly, for example 'Conversation AI: team follow-up needed'.</li>
              <li><strong className="text-[#1A2236]">Choose a start that does not duplicate the bot action.</strong> The documentation warns that attaching the bot action to a workflow that already runs from the same trigger will make it run twice. The simplest option is to leave the workflow without its own trigger conditions and let the Trigger a Workflow action start it (confirm your builder allows this).</li>
              <li><strong className="text-[#1A2236]">Add the internal actions you need.</strong> Standard options include a staff or internal notification, assigning the contact or conversation to a user, a task, and a tag (for example 'needs-human-review'). Confirm each in your builder.</li>
              <li><strong className="text-[#1A2236]">Put the contact's name, phone, email and the service they asked about in the notification body,</strong> using the builder's merge fields. The Trigger a Workflow article does not say what conversation data a bot-triggered workflow receives, so do not assume the question text is available. Check what appears in the execution log.</li>
              <li><strong className="text-[#1A2236]">Add a guard against repeat runs.</strong> Use a tag condition (skip if the contact already has the tag) or check the workflow's re-entry setting; see <Link href="/blog/gohighlevel-workflow-reentry" className="text-[#0E9BF0] hover:underline">workflow re-entry</Link>.</li>
              <li><strong className="text-[#1A2236]">Do NOT add:</strong> a message to the contact (it may count as a workflow message and put the bot to sleep), the 'Update Conversation AI Bot and Status' action set to Inactive, or any handover or stop action.</li>
              <li><strong className="text-[#1A2236]">Publish the workflow.</strong> The bot can only select published workflows.</li>
              <li><strong className="text-[#1A2236]">Run the workflow once against a test contact</strong> and read its execution history. See <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-[#0E9BF0] hover:underline">enrollment history and execution logs</Link> for how to read it.</li>
            </ol>

            {/* Staff Notification Settings */}
            <h2 id="staff-notification-settings" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Staff Notification Settings
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The Human Handover article says staff must turn on 'When a conversation gets assigned to me' and 'When a task gets assigned to me' under Settings `{'>'}` My Staff `{'>'}` Edit `{'>'}` Notification Settings. That is documented for handover. If your workflow assigns a conversation or creates a task, check the same settings, and test, because the article does not say they govern workflow actions too.
            </p>

            {/* How to Connect Workflow */}
            <h2 id="how-to-connect-workflow" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              How to Connect the Workflow to Conversation AI
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Documented</strong> (Trigger a Workflow within Conversation AI, modified 3 June 2025; Bot Goals configuration, modified 4 June 2026):
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Open the bot and go to the Bot Goals tab. Bot Goals apply to the one bot you selected.</li>
              <li>Under the actions, click <strong className="text-[#1A2236]">Trigger a workflow</strong>. If the bot is new, give it a name first.</li>
              <li>Enter an <strong className="text-[#1A2236]">Action Name</strong>, so you can recognize the action later.</li>
              <li>In <strong className="text-[#1A2236]">Select a published workflow to trigger</strong>, choose the workflow from Phase 3.</li>
              <li>In <strong className="text-[#1A2236]">When to trigger a workflow</strong>, describe the condition in plain language.</li>
              <li>Click <strong className="text-[#1A2236]">Save</strong>. Unsaved changes may be lost if you leave the page.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A good condition is specific. For example: 'The contact asks to speak with a team member, asks for a custom or non-standard arrangement, or asks for a pricing or contract decision that needs team review.' Do not treat this as an exact phrase. The documentation says the AI recognizes the condition from the description and that triggering is not guaranteed, so wording matters and testing is the only check.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Three cautions from the documentation:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>The condition can be met by the bot's or the contact's messages, so a bot reply that mentions the topic could fire it.</li>
              <li>If another action uses a similar trigger, such as a contact-information action, the AI decides which action runs. Keep conditions distinct.</li>
              <li>The article for this action is the oldest source (June 2025). Compare it with what you see on screen.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you use Flow Builder, note that the Flow Builder guide lists Human Handover as a condition and describes the Conversation AI workflow action in the other direction (workflows calling a bot). It does not list Trigger a Workflow. Whether your Flow Builder bot supports it is <strong className="text-[#1A2236]">unverified</strong>.
            </p>

            {/* How to Check AI Active */}
            <h2 id="how-to-check-ai-active" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How to Check Whether Conversation AI Is Still Active
            </h2>

            {/* Check Status */}
            <h2 id="check-status" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Check the Status
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Documented:</strong> open the contact's conversation in Conversations. The Conversation AI status icon sits in the message composer. Click it to see or change the status: <strong className="text-[#1A2236]">Active</strong> (replies or suggests replies), <strong className="text-[#1A2236]">Inactive</strong> (off until someone reactivates it) or <strong className="text-[#1A2236]">Sleep/Snooze</strong> (paused, optionally until a set time). The icon is available only when the bot is in Suggestive or Auto-Pilot mode. If it is missing, confirm Conversation AI is enabled for the sub-account, a bot is assigned to the channel, and the bot is in one of those modes.
            </p>

            {/* Check What Changed */}
            <h2 id="check-what-changed" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Check What Changed It
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Documented:</strong> open Audit logs at the bottom of the Contact Details panel to see when a status changed and what caused it. Sub-account-wide, go to Settings `{'>'}` Audit Logs and filter the Module to Conversation AI Activity.
            </p>

            {/* Things That Change Status */}
            <h2 id="things-that-change-status" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Things That Can Change the Status
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>A staff reply, if sleep settings pause the bot after manual messages.</li>
              <li>A message sent by a workflow, if sleep settings pause the bot after workflow messages.</li>
              <li>An opt-out keyword such as STOP from the contact.</li>
              <li>Reaching the maximum bot messages for the conversation (1 to 100, default 100 for new bots).</li>
              <li>A handover with Bot Pause Behaviour.</li>
              <li>A workflow action that updates the bot status.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A contact-level Inactive status overrides global settings until someone sets it back to Active, and bulk updates are not supported for this control; use workflows for large-scale changes.
            </p>

            {/* Example */}
            <h2 id="example-notify-while-continuing" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Example: Notify a Human While the AI Continues Answering
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A business has a bot that explains services, collects name, email, phone and requirements, and flags prospects who need a detailed discussion. The table shows what the setup is meant to do and what has to be confirmed. <strong className="text-[#1A2236]">This sequence has not been tested.</strong> Treat the right-hand column as your test script, not as a result.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Step</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What Should Happen</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What to Confirm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Customer: 'Can you explain what services you offer?'</td>
                    <td className="py-3 px-3 text-[#5C6880]">The bot answers from approved information</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Answer matches your knowledge base</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Customer: 'Can someone from your team discuss a custom arrangement with me?'</td>
                    <td className="py-3 px-3 text-[#5C6880]">The bot acknowledges the request. The condition in Trigger a Workflow is recognized</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Workflow ran once (execution log). Bot reply does not claim a person has already replied</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Internal action</td>
                    <td className="py-3 px-3 text-[#5C6880]">The designated person receives the notification, task and tag, with the contact's details</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Right person, right contact, enough context</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Customer: 'Also, what are your usual business hours?'</td>
                    <td className="py-3 px-3 text-[#5C6880]">If the bot is still Active, it answers</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Status icon still Active. Audit log shows no change. The reply is accurate, not invented</td>
                  </tr>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="py-3 px-3 font-medium text-[#1A2236]">Staff member replies</td>
                    <td className="py-3 px-3 text-[#5C6880]">Depends on your sleep settings</td>
                    <td className="py-3 px-3 text-[#0E9BF0]">Whether the bot sleeps after a manual message. Decide which you want</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If the bot does not answer the hours question, the documented causes to check are in the troubleshooting table: a workflow message that triggered sleep, a handover scenario that also fired, or a status change. The closest alternative then is to turn off the workflow's customer-facing message, or to accept a handover and pause for this scenario.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The point of the example is the difference it shows. In step two a person is told. In none of the steps was the conversation transferred.
            </p>

            {/* Phase 5 Verify */}
            <h2 id="phase-5-verify" className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">
              Phase 5: Verify That the Bot Keeps Responding
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the step that decides whether the setup works. Run it in a real, supported channel on a test contact, not in the workflow builder alone.
            </p>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Start a new conversation with a test contact on the channel you use (for example SMS or web chat).</li>
              <li>Ask a question the bot should answer. Confirm it replies.</li>
              <li>Send the message that should trigger the workflow.</li>
              <li>Open the workflow's execution history. Confirm it ran once, for the right contact, without errors.</li>
              <li>Confirm the right staff member received the notification and that it has enough context.</li>
              <li>Open the contact's conversation and check the bot status icon. It should still read Active.</li>
              <li>Open Audit logs for the contact. Confirm no unexpected status change was recorded.</li>
              <li>Send a second question the bot should answer, such as business hours. Confirm it replies with an accurate answer and does not invent one.</li>
              <li>Have a staff member reply manually. Check whether the status changes, and decide whether that matches what you want.</li>
              <li>If you also use Human Handover for other scenarios, trigger one and confirm the bot pauses as you intend and resumes (or not) as designed.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Repeat step 3 to 8 after any change to the prompt, the workflow, the Bot Goals or the sleep settings.
            </p>

            {/* Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Troubleshooting GoHighLevel Conversation AI Human Handover
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Causes are listed from most to least likely where the documentation supports a ranking. Several symptoms have more than one cause, so use the diagnostic column to tell them apart.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Symptom</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Causes</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Where to Look</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">Diagnostic and Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.symptom}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCauses}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whereToLook}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.diagnosticFix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* When Use Human Handover */}
            <h2 id="when-use-human-handover" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              When Should You Use Human Handover Instead?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Continuing the AI is not always right. These are decision principles, not rules.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#25C97D]">Use notification without handover when</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#DC3545]">Use a true handover when</th>
                  </tr>
                </thead>
                <tbody>
                  {whenUseHandoverData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.useNotification}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.useHandover}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A notification does not mean anyone has read or answered the message. Do not let the bot or any automated message say otherwise.
            </p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Conclusion
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Alerting a person and handing over a conversation are different controls in GoHighLevel. For the alert, use Trigger a Workflow with a published workflow containing only internal actions, add Email Notification Settings as a backstop, and keep Human Handover for conversations a person must own. The one thing the documentation cannot tell you is whether your bot keeps replying afterward, so run the Phase 5 test before you rely on it.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              If you want help designing or testing this, GHL Scale Up builds Conversation AI and workflow automation setups. You can <Link href="/services/ai-chatbot" className="text-[#0E9BF0] hover:underline">read about our AI chatbot service</Link> or <Link href="/contact" className="text-[#0E9BF0] hover:underline">get in touch</Link>. For the bigger picture of what GoHighLevel's AI features do, see <Link href="/blog/gohighlevel-ai-employee" className="text-[#0E9BF0] hover:underline">our GoHighLevel AI Employee guide</Link>.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Official documentation: <a href="https://help.gohighlevel.com/support/solutions/articles/155000005615-conversation-ai-human-handover-action" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Human Handover Action</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000004098" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Trigger a Workflow within Conversation AI</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000004095" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Configure Bot Goals</a>, <a href="https://help.gohighlevel.com/support/solutions/articles/155000004096-bot-status-for-individual-contacts" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Bot Status for Individual Contacts</a> and <a href="https://help.gohighlevel.com/support/solutions/articles/155000006515" target="_blank" rel="noopener" className="text-[#0E9BF0] hover:underline">Flow Builder setup</a>.
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

            {/* Contextual CTA inside FAQ */}
            <div className="mt-4 text-sm text-[#5C6880] leading-relaxed">
              Still unsure how to set up human notification without stopping Conversation AI?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/gohighlevel-workflow-reentry" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Re-Entry →</Link>
                <Link href="/blog/gohighlevel-enrollment-history-execution-logs" className="text-sm text-[#0E9BF0] hover:underline">Enrollment History and Execution Logs Guide →</Link>
                <Link href="/blog/gohighlevel-ai-employee" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Employee Guide →</Link>
                <Link href="/services/ai-chatbot" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel AI Chatbot Service →</Link>
                <Link href="/contact" className="text-sm text-[#0E9BF0] hover:underline">Get in Touch →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help With Conversation AI Setup?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help businesses build Conversation AI and workflow automation setups that actually work.
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience building Conversation AI and workflow automation setups. All product details verified against HighLevel documentation as of October 2026.
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