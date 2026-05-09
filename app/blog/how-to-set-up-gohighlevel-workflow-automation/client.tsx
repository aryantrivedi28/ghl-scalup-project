// app/blog/how-to-set-up-gohighlevel-workflow-automation/client.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
      ArrowRight,
      CheckCircle2,
      ChevronDown,
      Copy,
      Linkedin,
      Twitter,
      BookOpen,
      Zap,
      GitBranch,
      Clock,
      GitMerge,
      AlertCircle,
      Smartphone,
      Mail,
      MessageCircle,
      Calendar,
      UserPlus,
      Phone,
      Settings,
      Award,
      Shield,
      PlayCircle,
      Sparkles
} from 'lucide-react';

export default function WorkflowAutomationClient() {
      const [activeId, setActiveId] = useState<string>('');

      // Handle scroll detection for active section
      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'what-is-workflow',
                        'building-blocks',
                        'step-by-step',
                        'important-workflows',
                        'beginner-mistakes',
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

      const tocItems = [
            { id: 'what-is-workflow', title: '1. What Is a GoHighLevel Workflow?' },
            { id: 'building-blocks', title: '2. The 4 Building Blocks of Every GHL Workflow' },
            { id: 'step-by-step', title: '3. How to Create Your First Workflow (Step-by-Step)' },
            { id: 'important-workflows', title: '4. The 3 Most Important Workflows to Build First' },
            { id: 'beginner-mistakes', title: '5. 5 Beginner Mistakes to Avoid' },
            { id: 'faq', title: '6. Frequently Asked Questions' },
      ];

      const triggers = [
            { name: 'Form Submitted', description: 'Fires when someone fills in any form on your site or funnel' },
            { name: 'Contact Created', description: 'Fires whenever a new contact is added to your CRM' },
            { name: 'Tag Added', description: 'Fires when a specific tag is applied to a contact' },
            { name: 'Appointment Status', description: 'Fires when someone books, confirms, or cancels a booking' },
            { name: 'Missed Call', description: 'Fires when an inbound call goes unanswered' },
            { name: 'Pipeline Stage Changed', description: 'Fires when a contact moves to a new stage in your pipeline' },
      ];

      const actions = [
            { name: 'Send SMS', description: 'Sends a text message to the contact' },
            { name: 'Send Email', description: 'Sends an email from your connected email account' },
            { name: 'Add Tag / Remove Tag', description: 'Applies or removes a tag to segment contacts' },
            { name: 'Add to Pipeline', description: 'Creates an opportunity in your sales pipeline' },
            { name: 'Assign to User', description: 'Assigns the contact to a team member' },
            { name: 'Create Task', description: 'Creates a manual reminder task for your team' },
            { name: 'Send to Workflow', description: 'Moves the contact into a different workflow' },
      ];

      const beginnerMistakes = [
            { mistake: 'Too many actions firing too fast', fix: 'Space your actions out with wait steps. A follow-up 24 hours later converts better than a message flood.' },
            { mistake: 'No exit conditions', fix: 'Add an exit condition when someone books an appointment so nurture sequences stop.' },
            { mistake: 'One giant workflow for everything', fix: 'Keep workflows small and focused. One workflow per job, connected by tags.' },
            { mistake: 'Forgetting trigger filters', fix: 'Add a filter specifying the exact form name so the workflow only fires when intended.' },
            { mistake: 'Not testing all branches', fix: 'Test every branch the Yes path, No path, and timeout path before publishing.' },
      ];

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
                              <span className="text-[#1A2236] font-medium">How to Set Up GHL Workflow Automation</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-[760px] mx-auto relative z-10">
                              {/* Post Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL How-To</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Workflow Automation</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Beginners</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Tutorial</span>
                              </div>

                              {/* H1 Headline */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    How to Set Up GoHighLevel<br />
                                    <span className="text-[#F8D000]">Workflow Automation for Beginners</span>
                                    <span className="text-sm text-white/50 block mt-2">(Step-by-Step 2026)</span>
                              </h1>

                              {/* Author Byline */}
                              <div className="flex items-center gap-3 mb-6">
                                    <div className="w-7 h-7 overflow-hidden bg-white flex items-center justify-center">
                                          <img
                                                src="/ghlscalicon.png"
                                                alt="GHL Scale Up"
                                                className="w-full h-full object-cover"
                                          />
                                    </div>
                                    <div>
                                          <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated May 2026</div>
                                    </div>
                              </div>

                              {/* Introductory Paragraph */}
                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
                                    If you're logging into GoHighLevel and not sure where to start with automation this guide is for you.
                                    In the next 10 minutes, you'll understand exactly what GHL workflows are, how they work, and how to build
                                    your very first one from scratch.
                              </p>
                        </div>
                  </section>

                  {/* Main Layout */}
                  <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
                        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">

                              {/* Article Content */}
                              <main className="min-w-0">

                                    {/* BLUF / Quick Answer Box */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Zap className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
                                          </div>
                                          <p className="text-base font-semibold text-[#1A2236] mb-2">
                                                A GoHighLevel workflow is an automated sequence that runs when a specific event happens.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                You set a trigger (the event that starts it) and a series of actions (what happens after).
                                                Once built and published, it runs 24/7 with zero manual effort. To create one: go to Automation → Workflows
                                                → Create Workflow, choose your trigger, add your actions, test it, then publish.
                                          </p>
                                    </div>

                                    {/* Table of Contents */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
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

                                    {/* Section 1: What Is a GoHighLevel Workflow? */}
                                    <h2 id="what-is-workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          1. What Is a GoHighLevel Workflow?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          A workflow is your <strong className="text-[#1A2236]">digital team member that never sleeps, never forgets, and never needs a day off.</strong>
                                          You define a set of rules "when this happens, do that" and GHL follows them automatically for every contact, every time.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          Most GHL users do the same manual tasks on repeat: sending a welcome text after someone fills out a form,
                                          following up after a missed call, sending appointment reminders. Workflows eliminate all of that.
                                    </p>

                                    <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-6">
                                          <div className="flex items-center gap-2 mb-2">
                                                <PlayCircle className="w-5 h-5 text-[#0E9BF0]" />
                                                <span className="text-sm font-bold text-[#0E9BF0]">Example</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                A lead fills out your contact form at 11pm on a Sunday. Without a workflow, they wait until Monday.
                                                With a workflow: they get an instant SMS, an email with next steps, and they're added to your pipeline automatically.
                                                You wake up to a booked appointment.
                                          </p>
                                    </div>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 md:p-6 my-6 text-white">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Award className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">From 200+ GHL Builds</span>
                                          </div>
                                          <p className="text-sm text-white/80 leading-relaxed">
                                                The majority of GHL accounts we audit are running 2-3 basic workflows at best. Businesses running
                                                8-10 properly configured workflows typically reduce manual follow-up time by <strong className="text-[#F8D000]">60-70%</strong>
                                                not because they're doing more, but because they've stopped doing things manually that GHL can handle automatically.
                                          </p>
                                    </div>

                                    {/* Section 2: The 4 Building Blocks */}
                                    <h2 id="building-blocks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          2. The 4 Building Blocks of Every GHL Workflow
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Before you build anything, understand these four elements. Every workflow in GoHighLevel simple or complex
                                          is made from the same components.
                                    </p>

                                    {/* Trigger */}
                                    <div className="mb-6">
                                          <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center">
                                                      <GitBranch className="w-4 h-4 text-[#0E9BF0]" />
                                                </div>
                                                <h3 className="text-lg font-bold text-[#1A2236]">1. Trigger What Starts the Workflow</h3>
                                          </div>
                                          <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                                                The trigger is the event that fires the workflow. GHL has <strong className="text-[#1A2236]">30+ trigger types</strong> in 2026.
                                                The most useful for beginners:
                                          </p>
                                          <div className="grid sm:grid-cols-2 gap-3">
                                                {triggers.map((trigger, idx) => (
                                                      <div key={idx} className="flex items-start gap-2">
                                                            <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                  <span className="text-sm font-medium text-[#1A2236]">{trigger.name}</span>
                                                                  <p className="text-xs text-[#5C6880]">{trigger.description}</p>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mb-6">
                                          <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-[rgba(37,201,125,0.1)] flex items-center justify-center">
                                                      <Zap className="w-4 h-4 text-[#25C97D]" />
                                                </div>
                                                <h3 className="text-lg font-bold text-[#1A2236]">2. Actions What the Workflow Does</h3>
                                          </div>
                                          <p className="text-sm text-[#5C6880] leading-relaxed mb-3">
                                                Actions are the tasks that execute after the trigger fires. GHL has <strong className="text-[#1A2236]">100+ action types.</strong>
                                                The ones beginners use most:
                                          </p>
                                          <div className="grid sm:grid-cols-2 gap-3">
                                                {actions.map((action, idx) => (
                                                      <div key={idx} className="flex items-start gap-2">
                                                            <MessageCircle className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                  <span className="text-sm font-medium text-[#1A2236]">{action.name}</span>
                                                                  <p className="text-xs text-[#5C6880]">{action.description}</p>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Wait Steps */}
                                    <div className="mb-6">
                                          <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-[rgba(248,208,0,0.1)] flex items-center justify-center">
                                                      <Clock className="w-4 h-4 text-[#F8D000]" />
                                                </div>
                                                <h3 className="text-lg font-bold text-[#1A2236]">3. Wait Steps Timing and Spacing</h3>
                                          </div>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                Wait steps control the timing between actions. Without them, your entire workflow fires in seconds
                                                and your contact gets three texts and two emails within 60 seconds of filling out a form. That feels like spam.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                                                Good rule of thumb: wait 5-10 minutes before a follow-up text, and 24-48 hours before a follow-up email.
                                                You can also set waits to trigger <strong>based on an event</strong> for example, 'wait until the contact replies'
                                                or 'wait until 1 hour before their appointment.'
                                          </p>
                                    </div>

                                    {/* If/Else Conditions */}
                                    <div className="mb-6">
                                          <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center">
                                                      <GitMerge className="w-4 h-4 text-[#0E9BF0]" />
                                                </div>
                                                <h3 className="text-lg font-bold text-[#1A2236]">4. If/Else Conditions Smart Branching</h3>
                                          </div>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                If/Else conditions are where workflows get powerful. Instead of treating every lead the same,
                                                you split them into different paths based on their behaviour.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed mt-2">
                                                <strong className="text-[#1A2236]">Example:</strong> Send an SMS → wait 24 hours → check: did they reply?
                                                If YES: send them a booking link. If NO: send a different follow-up message. If/Else handles this automatically
                                                for every contact.
                                          </p>
                                    </div>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Sparkles className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">2026 Tip</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                GHL now has a <strong>Workflow AI Builder</strong> you describe your automation in plain English and GHL builds
                                                the workflow for you. It's still worth understanding the basics so you can review and edit what the AI generates
                                                but it dramatically speeds up the building process.
                                          </p>
                                    </div>

                                    {/* Section 3: Step-by-Step */}
                                    <h2 id="step-by-step" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          3. How to Create Your First Workflow in GoHighLevel (Step-by-Step)
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          This walkthrough builds a simple new lead follow-up workflow from scratch. It takes about 15 minutes.
                                    </p>

                                    <div className="space-y-6">
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Go to Automation → Workflows</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">In your GHL sub-account dashboard, click 'Automation' in the left sidebar, then click 'Workflows'. Click the blue 'Create Workflow' button in the top right.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Choose how to start</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">You have three options: Start from Scratch, use a pre-built Recipe (GHL has 17 recipe templates), or use the AI Builder. For your first workflow, click 'Start from Scratch' so you understand every step.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Name your workflow</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Click the title at the top and give it a clear name. Example: 'New Lead Follow-Up Form Submission'. Good naming prevents confusion when you have 20+ workflows running.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Set your trigger</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Click 'Add New Trigger'. A panel opens on the right. Search for 'Form Submitted' and select it. If you have multiple forms, add a filter: select the specific form name so the workflow only fires for that form.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Add your first action Send SMS</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Click the '+' icon below your trigger. Select 'Send SMS'. Write a short, friendly text message. Use personalisation tokens: {'{{contact.first_name}}'} pulls their first name automatically.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Add a Wait step</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Click '+', select 'Wait', and set it to 5 minutes. This gives the contact time to read the text before the next message arrives.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">7</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Add a Send Email action</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Click '+', select 'Send Email'. Write a slightly longer follow-up introducing your services and next steps. Include your booking link.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">8</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Add a pipeline action</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Click '+', select 'Add to Pipeline'. Choose your pipeline and the starting stage (e.g. 'New Lead'). Now every form submission automatically creates an opportunity in your sales pipeline.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">9</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Test before publishing</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Click 'Test Workflow' in the top bar. Add your own phone number as a test contact. Run the test and check that the SMS arrives, the email sends, and the pipeline opportunity is created correctly.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">10</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Publish</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Once you're satisfied with the test, click 'Publish' in the top right. The workflow is now live and will fire automatically for every new form submission.</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-6">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Shield className="w-5 h-5 text-[#25C97D]" />
                                                <span className="text-sm font-bold text-[#25C97D]">Important</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                Always test with yourself first. Send a test submission through your actual form, not just the built-in workflow test
                                                this confirms the trigger fires correctly in real conditions. Check your phone for the SMS and your email inbox for the
                                                confirmation email before going live with real leads.
                                          </p>
                                    </div>

                                    {/* Section 4: The 3 Most Important Workflows */}
                                    <h2 id="important-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          4. The 3 Most Important Workflows to Build First
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Every GHL account has dozens of possible automations. These are the three to build first they produce the most impact for the least complexity.
                                    </p>

                                    <div className="space-y-4 mb-6">
                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                                                <div className="flex items-center gap-2 mb-3">
                                                      <UserPlus className="w-5 h-5 text-[#0E9BF0]" />
                                                      <h3 className="text-base font-bold text-[#1A2236]">Workflow 1: New Lead Instant Follow-Up</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>Trigger:</strong> Form Submitted (or Contact Created)</p>
                                                <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>What it does:</strong> Sends a welcome SMS within 60 seconds of someone submitting a lead form, followed by an email with next steps, and adds them to your pipeline.</p>
                                                <p className="text-sm text-[#5C6880] leading-relaxed"><strong>Why it matters:</strong> Speed-to-lead is one of the biggest conversion factors. Leads contacted within 5 minutes are 21x more likely to convert than those contacted after 30 minutes.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                                                <div className="flex items-center gap-2 mb-3">
                                                      <Calendar className="w-5 h-5 text-[#25C97D]" />
                                                      <h3 className="text-base font-bold text-[#1A2236]">Workflow 2: Appointment Reminder Sequence</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>Trigger:</strong> Appointment Status: Booked</p>
                                                <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>What it does:</strong> Sends a confirmation SMS immediately after booking, an email reminder 24 hours before, and a final SMS reminder 1 hour before.</p>
                                                <p className="text-sm text-[#5C6880] leading-relaxed"><strong>Why it matters:</strong> Automated appointment reminders reduce no-shows by 60-80%. For a business charging $300/appointment, preventing 5 no-shows per month is $1,500 in protected revenue.</p>
                                          </div>

                                          <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
                                                <div className="flex items-center gap-2 mb-3">
                                                      <Phone className="w-5 h-5 text-[#F8D000]" />
                                                      <h3 className="text-base font-bold text-[#1A2236]">Workflow 3: Missed Call Text-Back</h3>
                                                </div>
                                                <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>Trigger:</strong> Missed Call</p>
                                                <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>What it does:</strong> When an inbound call goes unanswered, the workflow sends an automatic SMS within 60 seconds.</p>
                                                <p className="text-sm text-[#5C6880] leading-relaxed"><strong>Why it matters:</strong> The text arrives while the person is still looking at their phone. Response rates are 40-60% higher than a voicemail. This single workflow recovers leads that would otherwise go to a competitor.</p>
                                          </div>
                                    </div>

                                    {/* Section 5: Beginner Mistakes */}
                                    <h2 id="beginner-mistakes" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          5. The 5 Most Common Beginner Mistakes
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          These are the mistakes we fix most often in GHL account audits at GHL Scale Up.
                                    </p>

                                    <div className="space-y-4">
                                          {beginnerMistakes.map((item, idx) => (
                                                <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                                                      <div className="flex items-start gap-3">
                                                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                  <p className="text-sm font-semibold text-[#1A2236] mb-1">{item.mistake}</p>
                                                                  <p className="text-sm text-[#5C6880] leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Settings className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">GHL Scale Up Tip</span>
                                          </div>
                                          <p className="text-sm text-white/80 leading-relaxed">
                                                The fastest way to avoid these mistakes is to build a separate <strong>test sub-account</strong> in your agency dashboard.
                                                Build and test every workflow there first before deploying to a client account or your live business.
                                                It's free on Unlimited and Agency Pro plans.
                                          </p>
                                    </div>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6 text-center">
                                          <p className="text-sm text-[#1A2236] leading-relaxed mb-3">
                                                → Already on GHL and not sure if your workflows are configured correctly?
                                          </p>
                                          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] transition-all">
                                                Book a free 30-minute GHL audit
                                                <ArrowRight className="w-4 h-4" />
                                          </Link>
                                    </div>

                                    {/* Section 6: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          6. Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-3">
                                          {[
                                                {
                                                      q: "What is a workflow in GoHighLevel?",
                                                      a: "A GoHighLevel workflow is an automated sequence of actions triggered by a specific event. When a defined trigger occurs such as a form submission, missed call, or appointment booking GHL automatically executes the actions you've configured, like sending SMS messages, emails, assigning to a pipeline, or tagging the contact. Workflows run 24/7 without any manual input."
                                                },
                                                {
                                                      q: "Do I need coding or technical skills to build GHL workflows?",
                                                      a: "No. GoHighLevel's workflow builder is a visual drag-and-drop interface with no coding required. In 2026, GHL also added the Workflow AI Builder you describe what you want in plain English and it generates the workflow for you to review and customise. Beginners can build their first working workflow in under 30 minutes."
                                                },
                                                {
                                                      q: "How many workflows can I create in GoHighLevel?",
                                                      a: "GoHighLevel allows unlimited workflows with unlimited automation steps on every plan, including the $97 Starter plan. There is no cap on the number of workflows you can create or the number of contacts they can process."
                                                },
                                                {
                                                      q: "What is the difference between a trigger and an action in GHL?",
                                                      a: "A trigger is the event that starts the workflow for example, someone submitting a form or missing a call. An action is what happens after the trigger fires for example, sending an SMS, adding a tag, or creating a pipeline opportunity. Every workflow needs at least one trigger and one action."
                                                },
                                                {
                                                      q: "What is an If/Else condition in a GoHighLevel workflow?",
                                                      a: "An If/Else condition is a decision point inside your workflow that routes contacts down different paths based on their behaviour or attributes. For example: after sending an SMS, wait 24 hours, then check if the contact replied. If yes, send a booking link. If no, send a different follow-up. This lets your automation respond differently to different people."
                                                },
                                                {
                                                      q: "Why is my GoHighLevel workflow not firing?",
                                                      a: "The most common reasons are: (1) the workflow is not published make sure it is set to Active; (2) the trigger filter is too narrow and excluding contacts; (3) the contact already went through the workflow and the 'Allow Re-entry' setting is off; (4) the form connected to your trigger is not the same form you're testing with. Check each of these in order before troubleshooting further."
                                                },
                                                {
                                                      q: "What are GoHighLevel workflow recipes?",
                                                      a: "Workflow recipes are pre-built automation templates provided by GoHighLevel inside the workflow builder. In 2026, GHL offers 17 native recipe templates covering common use cases like appointment booking, lead nurturing, email drip sequences, and webinar registration. You can import a recipe, customise it for your business, and publish it without building from scratch."
                                                },
                                                {
                                                      q: "How do I test a GoHighLevel workflow before going live?",
                                                      a: "In the workflow builder, click 'Test Workflow' in the top bar and add your own contact details. GHL will run the workflow against your test contact, compressing wait timers to seconds. After the test, open the History tab and check each step green means success, red means error. Fix all errors before publishing, and always run a real form submission test to confirm the trigger fires correctly in live conditions."
                                                },
                                          ].map((faq, index) => (
                                                <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                                                      <summary className="flex justify-between items-center cursor-pointer list-none py-4 text-[0.92rem] font-semibold text-[#1A2236] hover:text-[#0E9BF0] transition-colors">
                                                            {faq.q}
                                                            <ChevronDown className="w-4 h-4 text-[#8A9BB0] transition-transform group-open:rotate-180" />
                                                      </summary>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed pb-4">{faq.a}</p>
                                                </details>
                                          ))}
                                    </div>

                                    {/* Internal Links */}
                                    <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
                                          <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
                                          <div className="flex flex-wrap gap-3">
                                                <Link href="/blog/what-is-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">What Is GoHighLevel? Complete 2026 Guide →</Link>
                                                {/* <Link href="/blog/gohighlevel-missed-call-text-back" className="text-sm text-[#0E9BF0] hover:underline">How Does GHL Missed Call Text-Back Work? →</Link> */}
                                                {/* <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link> */}
                                                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                                                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Service →</Link>
                                          </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Already on GoHighLevel?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      Is Your GHL Automation Actually Working? Most GHL accounts run 2-3 workflows and leave the rest of the platform untouched.
                                                      Book a free 30-minute strategy call and we'll audit your setup and show you exactly what's missing.
                                                </p>
                                                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
                                                      Book Your Free GHL Audit
                                                      <ArrowRight className="w-4 h-4" />
                                                </Link>
                                          </div>
                                    </div>
                              </main>

                              {/* Sidebar */}
                              <aside className="hidden lg:block lg:sticky lg:top-20 h-fit transition-all duration-300 ease-out">
                                    {/* Table of Contents */}
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
                                                                  <span className={`flex items-start gap-2`}>
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
                                    <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2">
                                          <div className="flex items-center gap-3 mb-4">
                                                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
                                                      <img
                                                            src="/ghlscalicon.png"
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
                                                5+ years GHL experience · 200+ workflow builds delivered across real estate, healthcare, SaaS, agencies, and home services globally.
                                          </p>
                                          <Link href="https://ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    {/* CTA Card */}
                                    <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2">
                                          <div className="text-sm font-bold text-white mb-2">Need Help with GHL Workflows?</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">From basic automations to complex AI workflows we build complete GHL systems that actually work.</p>
                                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                                                Talk to Us
                                                <ArrowRight className="w-3 h-3" />
                                          </Link>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="bg-white border border-[#DDE1E9] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
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
