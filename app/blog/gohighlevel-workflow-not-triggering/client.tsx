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
      Target,
      GitCompare,
      BarChart3,
      Layers,
      Workflow,
      Mailbox,
      ListChecks,
      ClipboardCheck,
      Settings,
      Users,
      Calendar,
      MessageCircle,
      Phone,
      Layout,
      GitBranch,
      Sparkles,
      Award,
      TrendingUp,
      Star,
      Server,
      Globe,
      CreditCard,
      Smartphone,
      Briefcase,
      Compass,
      Database,
      DollarSign,
      Users2,
      Search,
      XCircle,
      HelpCircle,
      FileQuestion,
      AlertCircle,
      Filter,
      ToggleLeft,
      ToggleRight,
      Eye,
      RefreshCw,
      PlayCircle,
      PauseCircle,
      ExternalLink,
      FileText,
      ListOrdered,
      GitMerge,
      Split,
      Clock as ClockIcon,
      CalendarClock,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function GoHighLevelWorkflowNotTriggeringClient() {
      const [activeId, setActiveId] = useState<string>('');
      const [openBooking, setOpenBooking] = useState(false);

      const handleOpenBooking = () => {
            setOpenBooking(true);
      };

      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'why-is-my-workflow-not-triggering',
                        'start-here',
                        'two-different-problems',
                        'did-the-trigger-event-happen',
                        'how-do-trigger-filters-prevent',
                        'how-do-you-find-which-filter',
                        'why-test-mode-not-live',
                        'how-do-you-test-with-fresh-contact',
                        'how-can-you-tell-if-contact-entered',
                        'what-if-workflow-used-to-work',
                        'common-trigger-problems',
                        'quick-checklist',
                        'decision-tree',
                        'when-is-problem-no-longer-trigger',
                        'the-bottom-line',
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
                  q: "Why is my GoHighLevel workflow not triggering?",
                  a: "Most often because the event that occurred doesn't fully match the trigger's configured filters, the workflow isn't published, or the test contact's history is affecting the result. Enrollment History tells you definitively whether the trigger fired."
            },
            {
                  q: "Why is my GHL workflow not firing?",
                  a: "Same diagnosis regardless of phrasing confirm the workflow is active, verify the real event occurred, check it against every trigger filter, and test with a fresh contact."
            },
            {
                  q: "Why does my GoHighLevel workflow work in test mode but not live?",
                  a: "Test conditions are often cleaner than real-world data. A live event can fail a filter that a controlled test never exercises. Compare the actual live event's data against the trigger's filters directly."
            },
            {
                  q: "How do I know if my GoHighLevel workflow triggered?",
                  a: "Check Enrollment History for the contact. If they appear there, the workflow triggered regardless of what happened afterward."
            },
            {
                  q: "Why is my GoHighLevel workflow not enrolling a contact?",
                  a: "The event likely doesn't satisfy every configured trigger filter, or the contact isn't eligible to enter given the workflow's re-entry settings and their existing history with it."
            },
            {
                  q: "How do trigger filters affect GoHighLevel workflows?",
                  a: "They narrow a general event category down to the specific version the workflow should respond to. An event can happen and still fail to qualify if it doesn't match every filter condition."
            },
            {
                  q: "How do I test a GoHighLevel workflow?",
                  a: "Use a fresh contact with no history in the workflow, trigger the real event rather than a simulated one, and check Enrollment History for the result."
            },
            {
                  q: "What should I check first when a GHL workflow stops triggering?",
                  a: "Compare what changed trigger filters, workflow status, referenced forms or pipeline stages, custom fields, tags, or integrations rather than assuming which one caused it."
            }
      ];

      useFaqSchema(faqs);

      const tocItems = [
            { id: 'why-is-my-workflow-not-triggering', title: 'Why Is My GoHighLevel Workflow Not Triggering?' },
            { id: 'start-here', title: 'Start Here: Find Out Where the Workflow Is Failing' },
            { id: 'two-different-problems', title: 'Two Different Problems That Look the Same' },
            { id: 'did-the-trigger-event-happen', title: 'Did the Trigger Event Actually Happen?' },
            { id: 'how-do-trigger-filters-prevent', title: 'How Do Trigger Filters Prevent a Workflow From Triggering?' },
            { id: 'how-do-you-find-which-filter', title: 'How Do You Find Which Filter Is Blocking Enrollment?' },
            { id: 'why-test-mode-not-live', title: 'Why Does My Workflow Work in Test Mode but Not Live?' },
            { id: 'how-do-you-test-with-fresh-contact', title: 'How Do You Test a GoHighLevel Workflow With a Fresh Contact?' },
            { id: 'how-can-you-tell-if-contact-entered', title: 'How Can You Tell if a Contact Actually Entered the Workflow?' },
            { id: 'what-if-workflow-used-to-work', title: 'What If My Workflow Used to Work but Suddenly Stopped?' },
            { id: 'common-trigger-problems', title: 'Common GoHighLevel Workflow Trigger Problems' },
            { id: 'quick-checklist', title: 'GoHighLevel Workflow Not Triggering: Quick Checklist' },
            { id: 'decision-tree', title: 'Workflow Not Triggering: The Decision Tree' },
            { id: 'when-is-problem-no-longer-trigger', title: 'When Is the Problem No Longer the Trigger?' },
            { id: 'the-bottom-line', title: 'The Bottom Line' },
            { id: 'faq', title: 'Frequently Asked Questions' }
      ];

      const triggerProblemsData = [
            { problem: 'Workflow inactive', whatToCheck: 'Workflow status', whatResultMeans: 'A draft never processes live events this alone explains a total lack of enrollment' },
            { problem: 'Wrong event', whatToCheck: 'The actual event that occurred vs. the event type the trigger is configured for', whatResultMeans: 'The category may match while the specific event doesn\'t confirm it\'s the exact one' },
            { problem: 'Trigger filter mismatch', whatToCheck: 'Real event data against every configured filter condition', whatResultMeans: 'One unmatched condition is enough to block qualification, even if everything else matches' },
            { problem: 'Contact does not qualify', whatToCheck: 'Contact/record fields referenced by the trigger\'s filters', whatResultMeans: 'The event and trigger type can be correct while the contact\'s data still fails a condition' },
            { problem: 'Testing with an unsuitable contact', whatToCheck: 'Whether the test contact has prior history with this workflow', whatResultMeans: 'Prior enrollment or completion can affect whether the same contact can enter again' },
            { problem: 'Re-entry limitation', whatToCheck: 'Allow Re-entry setting, and whether this trigger type has its own re-entry behavior', whatResultMeans: 'Some trigger types (appointment- and invoice-based) allow re-entry regardless of this setting' },
            { problem: 'Test/live mismatch', whatToCheck: 'Real live event data vs. the data used in a test run', whatResultMeans: 'A test can succeed under conditions a live event doesn\'t actually reproduce' },
            { problem: 'Enrollment exists but nothing downstream happened', whatToCheck: 'Execution Logs, not the trigger', whatResultMeans: 'The trigger worked this is an execution problem, not a trigger problem' },
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel Workflow Not Triggering? Find the Fix</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-7xl mx-auto relative z-10">
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Troubleshooting</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Workflows</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
                              </div>

                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel Workflow Not Triggering?<br />
                                    <span className="text-[#F8D000]">How to Find and Fix the Problem</span>
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
                                    A workflow that isn't firing usually isn't broken. It's rejecting the exact event you're testing it with, and nothing on the workflow canvas tells you that directly. This article gives you the sequence to find out which one it is before you touch a single setting.
                              </p>

                              <div className="flex flex-wrap gap-3">
                                    <Link
                                          href="/contact"
                                          className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
                                    >
                                          <Rocket className="w-4 h-4" />
                                          Get Workflow Help
                                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                          href="#decision-tree"
                                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                                    >
                                          See the Decision Tree
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
                                                5+ years GHL experience · 200+ systems built globally. All troubleshooting details verified against official documentation as of September 2026.
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
                                          <div className="text-sm font-bold text-white mb-2">Need Workflow Help?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">We diagnose and fix workflow trigger issues for agencies and businesses.</p>
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

                                    {/* Section: Why Is My Workflow Not Triggering */}
                                    <h2 id="why-is-my-workflow-not-triggering" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          Why Is My GoHighLevel Workflow Not Triggering?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">Start by confirming the workflow is active, verify the expected event actually happened, compare that event against every configured trigger filter, and test with a fresh contact. If the contact shows up in Enrollment History, the workflow triggered the problem has moved past the trigger and into execution.</strong> That last sentence is the single most useful thing in this article, so keep it in mind through everything below.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The reason this matters: <strong className="text-[#1A2236]">"the workflow didn't trigger" and "the workflow triggered but something inside it failed" are different problems with different fixes.</strong> Rebuilding a trigger that was never the issue wastes time and risks breaking something that was working. Enrollment History is what tells you which one you're actually dealing with, and most of this article is about getting a clean answer from it.
                                    </p>

                                    {/* BLUF Box */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Zap className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">The Single Most Useful Thing</span>
                                          </div>
                                          <p className="text-base md:text-lg font-semibold text-[#1A2236] mb-2">
                                                If the contact shows up in Enrollment History, the workflow triggered.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                The problem has moved past the trigger and into execution. "The workflow didn't trigger" and "the workflow triggered but something inside it failed" are different problems with different fixes.
                                          </p>
                                    </div>

                                    {/* Section: Start Here */}
                                    <h2 id="start-here" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Start Here: Find Out Where the Workflow Is Failing
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Work through these in order before changing anything:
                                    </p>
                                    <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li><strong className="text-[#1A2236]">Is the workflow active?</strong></li>
                                          <li><strong className="text-[#1A2236]">Did the exact triggering event happen?</strong></li>
                                          <li><strong className="text-[#1A2236]">Does the event match every trigger filter?</strong></li>
                                          <li><strong className="text-[#1A2236]">Are you testing with the right contact or record?</strong></li>
                                          <li><strong className="text-[#1A2236]">Does Enrollment History show that the contact entered the workflow?</strong></li>
                                    </ol>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">If there's no enrollment,</strong> keep working questions 1–4 the event, the trigger, or the filters are the likely cause, and the rest of this article walks through each one.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">If Enrollment History shows the contact entered,</strong> the workflow triggered. The problem is now inside execution a skipped step, a failed action, a branch that went somewhere unexpected which is a different troubleshooting process than anything below.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          That five-question sequence is the fastest way through this, and everything after it is detail on how to answer each question correctly.
                                    </p>

                                    {/* Section: Two Different Problems */}
                                    <h2 id="two-different-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Two Different Problems That Look the Same
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Worth naming precisely, since the fix differs: <strong className="text-[#1A2236]">Case A the workflow did not trigger</strong> (the contact never qualified; check status, event, trigger, filters, and the test contact's history the bulk of this article). <strong className="text-[#1A2236]">Case B the workflow triggered, but something after that didn't happen</strong> (the contact is enrolled, so the trigger worked; what's left is execution actions, branches, waits, conditions a separate process built around Execution Logs, not covered in depth here).
                                    </p>




                                    {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
                                    <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                          <div className="relative w-full h-auto bg-[#F8F9FB]">
                                                <Image
                                                      src="/blog/gohighlevel-workflow-not-triggering.png"
                                                      alt="GoHighLevel workflow not triggering: Diagnostic sequence from event verification to Enrollment History check"
                                                      width={1200}
                                                      height={500}
                                                      className="w-full h-auto object-cover"
                                                      priority
                                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                                />
                                          </div>
                                          <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                                                <ImageIcon className="w-3.5 h-3.5" />
                                                <span>GoHighLevel workflow not triggering: The diagnostic sequence from event verification to Enrollment History check</span>
                                          </div>
                                    </div>

                                    {/* Section: Did the Trigger Event Happen */}
                                    <h2 id="did-the-trigger-event-happen" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Did the Trigger Event Actually Happen?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Before touching workflow settings, confirm the source event actually occurred the way you think it did. A form submission happening somewhere doesn't confirm it was that form. An opportunity changing doesn't confirm it moved to the specific pipeline and stage your trigger is watching for. An appointment happening doesn't confirm it matched the trigger's configured conditions.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This sounds obvious, but it's the step people skip most often they see evidence the general category of event happened and assume the trigger should have fired, when the actual configured event never occurred at all.
                                    </p>

                                    {/* Section: How Do Trigger Filters Prevent */}
                                    <h2 id="how-do-trigger-filters-prevent" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do Trigger Filters Prevent a Workflow From Triggering?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A trigger fires on a category of event "Form Submitted," "Opportunity Status Changed," "Tag Added." Filters narrow that down to the specific version of the event the workflow cares about. <strong className="text-[#1A2236]">The event happening is not the same as the event qualifying</strong>, and filters are where that distinction actually lives.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">Concrete example:</strong> a contact submits a form. You expect the workflow to fire. But the trigger is filtered to <em>Form = Consultation Form</em>, and the contact actually submitted <em>Contact Us Form</em>. The event happened. It didn't satisfy the filter. The workflow isn't broken the contact never qualified.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This applies across trigger types, though not every trigger exposes the same filters a Form Submitted trigger filters on form identity, an Opportunity trigger on pipeline and stage, a Tag Added trigger on the specific tag, an appointment trigger on calendar and appointment status. Verify what your specific trigger actually filters on rather than assuming.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A trigger with multiple conditions needs every one satisfied, not most. Compare the real event data against each configured condition individually rather than eyeballing the whole trigger at once.
                                    </p>

                                    {/* Section: How Do You Find Which Filter */}
                                    <h2 id="how-do-you-find-which-filter" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do You Find Which Filter Is Blocking Enrollment?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          When a trigger has several conditions and you don't know which one is failing, isolate it rather than guessing:
                                    </p>
                                    <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li><strong className="text-[#1A2236]">Record the current trigger configuration</strong> so you can restore it exactly.</li>
                                          <li><strong className="text-[#1A2236]">Temporarily simplify the trigger</strong> to its smallest valid configuration.</li>
                                          <li><strong className="text-[#1A2236]">Use a fresh test contact or record.</strong></li>
                                          <li><strong className="text-[#1A2236]">Perform the exact live event.</strong></li>
                                          <li><strong className="text-[#1A2236]">Check Enrollment History.</strong></li>
                                          <li><strong className="text-[#1A2236]">If enrollment occurs, reintroduce the removed conditions one at a time.</strong></li>
                                          <li><strong className="text-[#1A2236]">Test again after each one you add back.</strong></li>
                                          <li><strong className="text-[#1A2236]">The condition that stops enrollment from happening again is the one causing the problem.</strong></li>
                                          <li><strong className="text-[#1A2236]">Restore the intended production configuration once you've identified it.</strong></li>
                                    </ol>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          This is a diagnostic technique for finding the problem, not a recommendation to leave a production workflow running with weakened filters.
                                    </p>

                                    {/* Section: Why Test Mode Not Live */}
                                    <h2 id="why-test-mode-not-live" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Why Does My Workflow Work in Test Mode but Not Live?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A successful test demonstrates that the workflow can execute under the conditions used in that test. It doesn't confirm that a real production event will reach the trigger with data that satisfies every filter, because test conditions are often cleaner and more controlled than what actually happens live. A test contact might have a field pre-filled that a real lead doesn't. A test submission might go through a form path a real visitor doesn't use.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          When test mode works but a live event doesn't produce the same result, don't assume the workflow itself is fine or broken either way treat it as a qualification question like any other, and compare the actual live event's data against every condition configured in the trigger.
                                    </p>

                                    {/* Section: How Do You Test With Fresh Contact */}
                                    <h2 id="how-do-you-test-with-fresh-contact" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Do You Test a GoHighLevel Workflow With a Fresh Contact?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A contact with history previously enrolled, already active, already completed the workflow can behave differently than a brand-new one, depending on the workflow's re-entry settings. Test clean whenever possible:
                                    </p>
                                    <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li><strong className="text-[#1A2236]">Use or create a contact</strong> that has no prior history with this specific workflow.</li>
                                          <li><strong className="text-[#1A2236]">Trigger the real event</strong> submit the actual form, make the actual pipeline change, apply the actual tag.</li>
                                          <li><strong className="text-[#1A2236]">Check whether the contact qualifies</strong> against the trigger's filters.</li>
                                          <li><strong className="text-[#1A2236]">Check Enrollment History</strong> for that contact.</li>
                                          <li><strong className="text-[#1A2236]">Enrolled → the trigger worked;</strong> stop troubleshooting it.</li>
                                          <li><strong className="text-[#1A2236]">Not enrolled → return to the trigger and filter configuration.</strong></li>
                                    </ol>

                                    {/* Section: How Can You Tell If Contact Entered */}
                                    <h2 id="how-can-you-tell-if-contact-entered" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          How Can You Tell if a Contact Actually Entered the Workflow?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Open the workflow, go to Enrollment History, and look for the contact. For the purpose of trigger troubleshooting, the question it answers is simple: <strong className="text-[#1A2236]">did this contact actually enter the workflow, yes or no?</strong>
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">No enrollment record:</strong> the problem is still upstream status, event, filters, or qualification. Keep working the trigger.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">Enrollment record exists:</strong> the workflow triggered successfully. Whatever the remaining problem is, it lives in execution, not in the trigger a separate diagnostic process that uses Execution Logs rather than trigger filters. Treating it as a trigger problem from here just wastes time re-testing something that already works.
                                    </p>

                                    {/* Section: What If Workflow Used to Work */}
                                    <h2 id="what-if-workflow-used-to-work" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          What If My Workflow Used to Work but Suddenly Stopped?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Don't guess compare. The question worth asking is specific: <strong className="text-[#1A2236]">what changed between the last successful enrollment and the first one that failed?</strong> Check recently for edits to:
                                    </p>
                                    <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
                                          <li>Trigger filters or conditions</li>
                                          <li>Workflow published/active status</li>
                                          <li>The source form, pipeline, or stage names referenced by the trigger</li>
                                          <li>Custom fields or tags the trigger depends on</li>
                                          <li>Connected integrations</li>
                                          <li>The workflow's re-entry setting</li>
                                          <li>Any recent edit to the workflow itself</li>
                                    </ul>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          One important, easy-to-miss case: <strong className="text-[#1A2236]">Allow Re-entry doesn't behave identically for every trigger type.</strong> Appointment-based and invoice-based triggers allow re-entry for each new appointment or invoice by design, regardless of how the Allow Re-entry setting is configured so if this is an appointment workflow specifically, that setting may not be your issue at all.
                                    </p>

                                    {/* Section: Common Trigger Problems */}
                                    <h2 id="common-trigger-problems" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Common GoHighLevel Workflow Trigger Problems
                                    </h2>

                                    <div className="overflow-x-auto my-6">
                                          <table className="w-full border-collapse text-sm">
                                                <thead>
                                                      <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                                                            <th className="text-left py-3 px-3 font-semibold text-[#0E9BF0]">What the Result Means</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {triggerProblemsData.map((item, idx) => (
                                                            <tr key={idx} className="border-b border-[#DDE1E9]">
                                                                  <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                                                                  <td className="py-3 px-3 text-[#5C6880]">{item.whatToCheck}</td>
                                                                  <td className="py-3 px-3 text-[#0E9BF0]">{item.whatResultMeans}</td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>

                                    <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
                                          <div className="flex items-center gap-2 mb-2">
                                                <AlertCircle className="w-4 h-4 text-[#0E9BF0]" />
                                                <span className="text-sm font-bold text-[#0E9BF0]">RESOLVE ERRORS SIDEBAR</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                Worth knowing: HighLevel's Resolve Errors sidebar catches supported configuration problems missing required fields, disconnected integrations before you publish. It's useful, but it validates configuration, not live execution; passing it doesn't guarantee every real event will process cleanly, and it won't catch a filter that's simply narrower than you intended.
                                          </p>
                                    </div>

                                    {/* Section: Quick Checklist */}
                                    <h2 id="quick-checklist" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          GoHighLevel Workflow Not Triggering: Quick Checklist
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Before changing anything:
                                    </p>
                                    <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
                                          <li><strong className="text-[#1A2236]">Is the workflow published/active?</strong></li>
                                          <li><strong className="text-[#1A2236]">Did the expected event actually happen specifically, not generally?</strong></li>
                                          <li><strong className="text-[#1A2236]">Is it the correct event type for this trigger?</strong></li>
                                          <li><strong className="text-[#1A2236]">Does it match every configured filter, not just most?</strong></li>
                                          <li><strong className="text-[#1A2236]">Is your test contact appropriate, or does prior history complicate the result?</strong></li>
                                          <li><strong className="text-[#1A2236]">Could re-entry settings affect this specific contact or trigger type?</strong></li>
                                          <li><strong className="text-[#1A2236]">Does live behavior differ from a test-mode run?</strong></li>
                                          <li><strong className="text-[#1A2236]">Does Enrollment History show the contact?</strong></li>
                                          <li><strong className="text-[#1A2236]">If not simplify the trigger and isolate the failing filter.</strong></li>
                                          <li><strong className="text-[#1A2236]">If yes stop troubleshooting the trigger; the problem is execution.</strong></li>
                                    </ol>

                                    {/* Section: Decision Tree */}
                                    <h2 id="decision-tree" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          Workflow Not Triggering: The Decision Tree
                                    </h2>

                                    <div className="space-y-4 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <p className="text-sm font-bold text-[#1A2236] mb-2">Did the event actually happen?</p>
                                                <p className="text-sm text-[#5C6880]">→ No reproduce the event before doing anything else.</p>
                                                <p className="text-sm text-[#5C6880]">→ Yes continue.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <p className="text-sm font-bold text-[#1A2236] mb-2">Is the workflow published/active?</p>
                                                <p className="text-sm text-[#5C6880]">→ No publish or activate it.</p>
                                                <p className="text-sm text-[#5C6880]">→ Yes continue.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <p className="text-sm font-bold text-[#1A2236] mb-2">Does the event satisfy every trigger filter?</p>
                                                <p className="text-sm text-[#5C6880]">→ No correct the filter, or confirm you're reproducing the intended event.</p>
                                                <p className="text-sm text-[#5C6880]">→ Yes continue.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <p className="text-sm font-bold text-[#1A2236] mb-2">Is the contact eligible to enter no conflicting prior enrollment or re-entry limitation?</p>
                                                <p className="text-sm text-[#5C6880]">→ No investigate re-entry and enrollment conditions.</p>
                                                <p className="text-sm text-[#5C6880]">→ Yes continue.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                                                <p className="text-sm font-bold text-[#1A2236] mb-2">Does Enrollment History show the contact?</p>
                                                <p className="text-sm text-[#5C6880]">→ No return to the trigger and qualification questions above.</p>
                                                <p className="text-sm text-[#5C6880]">→ Yes the workflow triggered. Move to execution troubleshooting.</p>
                                          </div>
                                    </div>

                                    {/* Section: When Is Problem No Longer Trigger */}
                                    <h2 id="when-is-problem-no-longer-trigger" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          When Is the Problem No Longer the Trigger?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The moment Enrollment History shows the contact, the trigger did its job. Continuing to rebuild triggers, filters, or the <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">workflow itself</Link> at that point won't fix anything, because the trigger isn't what's broken. What's left to check is what happened <em>after</em> enrollment whether a step was skipped, a condition branched somewhere unexpected, or an action failed outright. That's a distinct diagnostic process from everything above it, built around Execution Logs rather than trigger filters.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          If the workflow depends on data arriving from outside HighLevel a <Link href="/blog/connect-zapier-to-gohighlevel" className="text-[#0E9BF0] hover:underline">Zapier connection</Link> or another external integration and enrollment still isn't happening, confirm the external side is actually sending the event before assuming the HighLevel trigger itself is misconfigured. That's a different failure point than anything covered here.
                                    </p>

                                    {/* Section: The Bottom Line */}
                                    <h2 id="the-bottom-line" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          The Bottom Line
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Don't start rebuilding a workflow because it didn't fire. Work the sequence: did the event happen, did it match the trigger, did it match every filter, was the workflow active, was the contact eligible, did it actually enroll. Only once you have a real answer to each of those should you decide what to change. Once a workflow is reliably triggering, the next question worth asking is what else is worth automating <Link href="/blog/gohighlevel-automation" className="text-[#0E9BF0] hover:underline">GHL Scale Up's automation guide</Link> covers build order for that once this problem is solved.
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
                                          Still stuck on a workflow that won't trigger?{' '}
                                          <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free troubleshooting session</Link>.
                                    </div>

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Setup Guide →</Link>
                                                <Link href="/blog/connect-zapier-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Connect Zapier to GoHighLevel →</Link>
                                                <Link href="/blog/gohighlevel-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Automation: Workflows Worth Building First →</Link>
                                          </div>
                                    </div>

                                    {/* Final CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Fixing a Workflow Trigger Issue?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      We diagnose and fix GoHighLevel workflow trigger problems for agencies and businesses.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                                                      Book Your Free Troubleshooting Session
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
                                                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience troubleshooting workflow trigger issues across hundreds of GHL accounts. All troubleshooting details verified against official documentation as of September 2026.
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