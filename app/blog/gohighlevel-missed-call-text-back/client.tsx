// app/blog/gohighlevel-missed-call-text-back/client.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
      ArrowRight,
      CheckCircle2,
      ChevronDown,
      Copy,
      Linkedin,
      Twitter,
      BookOpen,
      Phone,
      MessageCircle,
      Zap,
      AlertCircle,
      Settings,
      Clock,
      Calendar,
      Users,
      Building2,
      Home,
      Heart,
      Award,
      Shield,
      FileText,
      Target
} from 'lucide-react';

export default function MissedCallTextBackClient() {
      const [activeId, setActiveId] = useState<string>('');

      useEffect(() => {
            const handleScroll = () => {
                  const sections = [
                        'what-is-missed-call-text-back',
                        'setup-guide',
                        'write-effective-message',
                        'message-templates',
                        'connect-to-workflow',
                        'troubleshooting',
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

      const tocItems = [
            { id: 'what-is-missed-call-text-back', title: '1. What Is GoHighLevel Missed Call Text Back?' },
            { id: 'setup-guide', title: '2. How to Set It Up in GoHighLevel (Step-by-Step)' },
            { id: 'write-effective-message', title: '3. How to Write an Effective Message' },
            { id: 'message-templates', title: '4. 5 Copy-Paste Message Templates by Industry' },
            { id: 'connect-to-workflow', title: '5. How to Connect It to a Booking Workflow' },
            { id: 'troubleshooting', title: '6. Why Your Missed Call Text Back Might Not Be Sending' },
            { id: 'faq', title: '7. Frequently Asked Questions' },
      ];

      const messageTemplates = [
            {
                  industry: 'General Service Business',
                  icon: Building2,
                  template: 'Hi {{contact.name}}, sorry we just missed your call! We\'re with a client right now. What can we help you with? We\'ll get back to you shortly.',
            },
            {
                  industry: 'Dental / Healthcare Practice',
                  icon: Heart,
                  template: 'Hi thanks for calling [Practice Name]. We\'re with a patient right now. Are you a new or existing patient and what can we help you with? We\'ll return your call today.',
            },
            {
                  industry: 'Home Services (HVAC, Plumbing, Roofing)',
                  icon: Home,
                  template: 'Hi! Thanks for calling [Company Name]. Our team\'s on a job right now. What\'s going on? Text us here and we\'ll call you back as soon as we\'re free.',
            },
            {
                  industry: 'Real Estate Agent',
                  icon: Users,
                  template: 'Hi, this is [Name] from [Agency] I\'m showing a property right now. Were you calling about buying, selling, or renting? I\'ll call you back within the hour.',
            },
            {
                  industry: 'After-Hours Message',
                  icon: Clock,
                  template: 'Hi! Thanks for calling [Business Name]. Our office is closed right now but we\'ll call you first thing tomorrow morning. What can we help you with?',
            },
      ];

      const troubleshootingIssues = [
            {
                  problem: 'A2P 10DLC registration is incomplete or pending',
                  cause: 'US carriers block SMS from unregistered numbers',
                  fix: 'Check Settings → Phone Numbers → Compliance. If status is not "Approved", complete registration first. This is the #1 reason texts silently fail.'
            },
            {
                  problem: 'The feature is not enabled for the correct phone number',
                  cause: 'Missed call text back is configured per phone number, not per account',
                  fix: 'Check Settings → Phone Numbers → select the number → Advanced Settings → enable missed call text back.'
            },
            {
                  problem: 'The caller is an existing contact with SMS opted out',
                  cause: 'GHL honors opt-out preferences and will not send SMS to opted-out numbers',
                  fix: 'Check the contact record in your CRM for SMS compliance status. You cannot override a contact\'s opt-out.'
            },
            {
                  problem: 'A duplicate workflow is conflicting',
                  cause: 'Both native missed call text back AND a workflow with Missed Call trigger may be firing simultaneously',
                  fix: 'Disable one. Native version is faster to set up; workflow version gives more control. Don\'t run both.'
            },
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
                              <span className="text-[#1A2236] font-medium">GoHighLevel Missed Call Text Back</span>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
                        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

                        <div className="max-w-[760px] mx-auto relative z-10">
                              {/* Post Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">GHL Features</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">Automation</span>
                                    <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Service Business</span>
                                    <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Lead Recovery</span>
                                    <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">SMS</span>
                              </div>

                              {/* H1 Headline */}
                              <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
                                    GoHighLevel Missed Call Text Back:<br />
                                    <span className="text-[#F8D000]">How It Works + Full Setup Guide</span>
                                    <span className="text-sm text-white/50 block mt-2">(2026)</span>
                              </h1>

                              {/* Author Byline */}
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
                                          <div className="text-xs text-white/50">GoHighLevel Specialists · 200+ Builds Delivered · Updated May 2026</div>
                                    </div>
                              </div>

                              {/* Introductory Paragraph */}
                              <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-[620px]">
                                    Every time your phone rings and no one answers, you're not just missing a call.
                                    You're losing a lead who is about to Google '[your service] near me' and call whoever picks up.
                                    GoHighLevel's missed call text back feature fixes this automatically, in 15 seconds,
                                    without any manual effort from your team.
                              </p>
                        </div>
                  </section>

                  {/* Main Layout */}
                  <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
                        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16">

                              {/* Article Content */}
                              <main className="min-w-0">

                                    {/* BLUF / Quick Answer Box */}
                                    <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6 mb-8">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Zap className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6880]">Quick Answer Read This First</span>
                                          </div>
                                          <p className="text-base font-semibold text-[#1A2236] mb-2">
                                                GoHighLevel's missed call text back automatically sends a pre-written SMS to any caller whose call goes unanswered within 15 seconds.
                                          </p>
                                          <p className="text-sm text-[#5C6880] leading-relaxed">
                                                To set it up: go to Settings → Business Profile → scroll to Missed Call Text Back → toggle it on → write your message → save.
                                                It takes 5 minutes and requires no workflow. Once active, it runs 24/7 on its own.
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

                                    {/* Section 1: What Is Missed Call Text Back? */}
                                    <h2 id="what-is-missed-call-text-back" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
                                          1. What Is GoHighLevel Missed Call Text Back?
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">GoHighLevel missed call text back is a built-in feature that sends an automatic SMS to a caller the moment their call goes unanswered.</strong>
                                          No workflow needed. No staff required. The text fires within <strong className="text-[#0E9BF0]">15 seconds</strong> fast enough that the person is still looking at their phone when it arrives.
                                    </p>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The message is sent from your GHL phone number the same number they just called and replies land directly in your GHL Conversations inbox for your team to respond.
                                    </p>

                                    <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-5 my-6">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Phone className="w-5 h-5 text-[#0E9BF0]" />
                                                <span className="text-sm font-bold text-[#0E9BF0]">Why This Matters for Service Businesses</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed mb-2">
                                                According to GoHighLevel's own data, <strong>62% of inbound calls go unanswered.</strong> When callers hit voicemail, most of them don't leave a message and don't call back they call the next business in their search results.
                                          </p>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                US businesses lose an estimated <strong>\$75 billion annually</strong> to missed calls and poor follow-up. Missed call text back closes this gap.
                                          </p>
                                    </div>

                                    <div className="bg-[#E8FAF2] border border-[rgba(37,201,125,0.2)] rounded-xl p-5 my-6">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Award className="w-5 h-5 text-[#25C97D]" />
                                                <span className="text-sm font-bold text-[#25C97D]">Real Example</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                A dental practice client of ours was missing an average of 14 inbound calls per day most of them from new patient enquiries.
                                                After activating missed call text back with a booking link in the message, they booked <strong>9 new patient appointments in their first week</strong> from calls they would previously have lost entirely.
                                          </p>
                                    </div>

                                    {/* Section 2: Setup Guide */}
                                    <h2 id="setup-guide" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          2. How to Set Up Missed Call Text Back in GoHighLevel (Step-by-Step)
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          <strong className="text-[#1A2236]">Before you start:</strong> make sure you have a phone number connected in your GHL sub-account.
                                          Go to Settings → Phone Numbers. If you haven't added a number yet, click 'Add Number' and purchase a local number for your area code.
                                    </p>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 mb-6">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Shield className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">Important A2P 10DLC</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                If you're in the US and your missed call texts are not delivering, the most common reason is <strong>incomplete A2P 10DLC registration.</strong>
                                                US carriers require this for all business SMS. Check Settings → Phone Numbers → Compliance. If your status shows 'Pending' or 'Unregistered',
                                                complete registration first approval takes 1-5 business days and is required for SMS to send reliably.
                                          </p>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Open your sub-account settings</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">In your GHL dashboard, click your sub-account name in the top left, then click 'Settings' in the left sidebar (the gear icon at the bottom of the menu).</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Go to Business Profile</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Inside Settings, select 'Business Profile'. This is the main settings panel for your sub-account.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Find Missed Call Text Back</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Scroll down on the right-hand side until you see the 'Missed Call Text Back' section.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Toggle it on and click Customize</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">If the toggle is off, switch it on. Then click the 'Customize' button to open the message editor.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Write your message</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Type your automated response. Keep it short, human, and include a clear next step. Use {'{{contact.name}}'} to personalise.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Send yourself a test message</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Enter your own phone number and click Send Test. Within 15 seconds you should receive the message.</p>
                                                </div>
                                          </div>
                                          <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-[#0E9BF0] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">7</div>
                                                <div>
                                                      <h3 className="text-base font-bold text-[#1A2236] mb-1">Click Save</h3>
                                                      <p className="text-sm text-[#5C6880] leading-relaxed">Hit Save to activate. From this point, every missed call to your GHL number will trigger the automated text.</p>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Section 3: Write Effective Message */}
                                    <h2 id="write-effective-message" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          3. How to Write an Effective Missed Call Text Back Message
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The default GHL message works. A well-written custom message works significantly better.
                                          Here is what separates a message that starts a conversation from one that gets ignored.
                                    </p>

                                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                          <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 text-center">
                                                <div className="w-10 h-10 rounded-full bg-[rgba(14,155,240,0.1)] flex items-center justify-center mx-auto mb-3">
                                                      <MessageCircle className="w-5 h-5 text-[#0E9BF0]" />
                                                </div>
                                                <h3 className="text-sm font-bold text-[#1A2236] mb-1">Sound Like a Human</h3>
                                                <p className="text-xs text-[#5C6880] leading-relaxed">Write the way you'd text a friend. Conversational messages convert better than robotic ones.</p>
                                          </div>
                                          <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 text-center">
                                                <div className="w-10 h-10 rounded-full bg-[rgba(37,201,125,0.1)] flex items-center justify-center mx-auto mb-3">
                                                      <Target className="w-5 h-5 text-[#25C97D]" />
                                                </div>
                                                <h3 className="text-sm font-bold text-[#1A2236] mb-1">One Clear Next Step</h3>
                                                <p className="text-xs text-[#5C6880] leading-relaxed">Ask a question or include your booking link. Don't do both pick one.</p>
                                          </div>
                                          <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 text-center">
                                                <div className="w-10 h-10 rounded-full bg-[rgba(248,208,0,0.1)] flex items-center justify-center mx-auto mb-3">
                                                      <FileText className="w-5 h-5 text-[#F8D000]" />
                                                </div>
                                                <h3 className="text-sm font-bold text-[#1A2236] mb-1">Keep It Under 160 Characters</h3>
                                                <p className="text-xs text-[#5C6880] leading-relaxed">One SMS segment is 160 characters. Avoid splitting into two texts.</p>
                                          </div>
                                    </div>

                                    {/* Section 4: Message Templates */}
                                    <h2 id="message-templates" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          4. 5 Copy-Paste Message Templates by Industry
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          Copy any of these directly into your GHL missed call text back message editor.
                                          Personalise the business name and booking link.
                                    </p>

                                    <div className="space-y-4 mb-6">
                                          {messageTemplates.map((template, idx) => {
                                                const IconComponent = template.icon;
                                                return (
                                                      <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                                                            <div className="flex items-center gap-2 mb-3">
                                                                  <IconComponent className="w-5 h-5 text-[#0E9BF0]" />
                                                                  <h3 className="text-base font-bold text-[#1A2236]">{template.industry}</h3>
                                                            </div>
                                                            <div className="bg-white border border-[#DDE1E9] rounded-lg p-4 font-mono text-sm text-[#1A2236] break-words">
                                                                  {template.template}
                                                            </div>
                                                            <p className="text-xs text-[#25C97D] mt-2 flex items-center gap-1">
                                                                  <CheckCircle2 className="w-3 h-3" />
                                                                  Copy-paste this template
                                                            </p>
                                                      </div>
                                                );
                                          })}
                                    </div>

                                    {/* Section 5: Connect to Booking Workflow */}
                                    <h2 id="connect-to-workflow" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          5. How to Connect Missed Call Text Back to a Booking Workflow
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
                                          The native missed call text back sends one message and stops. If you want to do more add the contact to your CRM,
                                          send a follow-up if they don't reply, or route them into a booking sequence build a workflow instead.
                                    </p>

                                    <div className="bg-[#1C2E4A] rounded-xl p-5 my-6 text-white">
                                          <div className="flex items-center gap-2 mb-3">
                                                <Settings className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">Workflow Version: Step-by-Step</span>
                                          </div>
                                          <div className="space-y-2 text-sm text-white/80">
                                                <p>1. Go to Automation → Workflows → Create Workflow</p>
                                                <p>2. Set the trigger: Inbound Call → filter by Call Status: Missed</p>
                                                <p>3. Add action Send SMS: Your personalised missed call message with booking link</p>
                                                <p>4. Add Wait: Wait 20 minutes (prevents duplicate texts)</p>
                                                <p>5. Add If/Else: Did the contact reply? If YES → end workflow. If NO → send follow-up SMS after 2 hours</p>
                                                <p>6. Add action Add to Pipeline: Create opportunity in 'Missed Call' pipeline stage</p>
                                                <p>7. Add action Create Task: Call back <span>{'{{'}</span>contact.name<span>{'}}'}</span> assigned to team member</p>
                                          </div>
                                    </div>

                                    <div className="bg-[#FFFBE6] border border-[rgba(248,208,0,0.2)] rounded-xl p-5 my-6">
                                          <div className="flex items-center gap-2 mb-2">
                                                <Zap className="w-5 h-5 text-[#F8D000]" />
                                                <span className="text-sm font-bold text-[#F8D000]">GHL Scale Up Tip</span>
                                          </div>
                                          <p className="text-sm text-[#1A2236] leading-relaxed">
                                                Enable 'Run Once Per Contact' on the workflow trigger to prevent the same person from triggering the workflow multiple times
                                                if they call and hang up repeatedly within a short period.
                                          </p>
                                    </div>

                                    <p className="text-sm text-[#5C6880] leading-relaxed mb-6">
                                          → Want to understand GHL workflows more broadly first? Read: <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation for Beginners</Link>
                                    </p>

                                    {/* Section 6: Troubleshooting */}
                                    <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
                                          6. Why Your Missed Call Text Back Might Not Be Sending
                                    </h2>
                                    <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
                                          These are the four most common reasons the feature fails in order of frequency from our audits.
                                    </p>

                                    <div className="space-y-4">
                                          {troubleshootingIssues.map((issue, idx) => (
                                                <div key={idx} className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5">
                                                      <div className="flex items-start gap-3">
                                                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                  <p className="text-sm font-semibold text-[#1A2236] mb-1">{issue.problem}</p>
                                                                  <p className="text-sm text-[#5C6880] leading-relaxed mb-2"><strong>Cause:</strong> {issue.cause}</p>
                                                                  <p className="text-sm text-[#25C97D] leading-relaxed"><strong>Fix:</strong> {issue.fix}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>

                                    {/* Section 7: FAQ */}
                                    <h2 id="faq" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-6">
                                          7. Frequently Asked Questions
                                    </h2>

                                    <div className="space-y-3">
                                          {[
                                                {
                                                      q: "What is GoHighLevel missed call text back?",
                                                      a: "GoHighLevel missed call text back is a built-in feature that automatically sends a pre-written SMS to any caller whose call goes unanswered. The text fires within 15 seconds while the caller is still looking at their phone and replies land in your GHL Conversations inbox. It requires no workflow to activate and works 24/7."
                                                },
                                                {
                                                      q: "How fast does GoHighLevel send the missed call text back?",
                                                      a: "GoHighLevel sends the missed call text back within 15 seconds of the call going unanswered. This is intentionally fast enough to reach the caller while they are still holding their phone, before they open a search engine to find a competitor."
                                                },
                                                {
                                                      q: "Does missed call text back work after business hours?",
                                                      a: "Yes. Missed call text back fires 24 hours a day, 7 days a week, regardless of your business hours settings. For after-hours calls, customise the message to set appropriate expectations for example: 'Our office is closed right now but we'll call you first thing tomorrow morning.'"
                                                },
                                                {
                                                      q: "How much does GoHighLevel missed call text back cost?",
                                                      a: "The feature itself is included on all GoHighLevel plans at no extra cost. You pay the standard GHL SMS usage rate for each text sent, which is approximately $0.0079 per SMS segment (160 characters). For a business receiving 50 missed calls per month, that's under $0.50 per month in SMS costs."
                                                },
                                                {
                                                      q: "Can I use missed call text back with my own Twilio number?",
                                                      a: "Yes. Missed call text back works with both GoHighLevel's native LC Phone numbers and your own Twilio numbers. Whichever number the caller dials, the text will be sent from that same number if the feature is enabled on it."
                                                },
                                                {
                                                      q: "What is the difference between the native missed call text back and building a workflow for it?",
                                                      a: "The native feature sends one text and stops. A workflow version gives you more control: you can add the contact to a CRM pipeline, send a follow-up if they don't reply, assign a task to your team, and add conditional logic. For most businesses, start with the native feature for speed, then upgrade to a workflow once you understand the basics."
                                                },
                                                {
                                                      q: "Why is my GoHighLevel missed call text back not sending?",
                                                      a: "The most common reasons are: (1) incomplete A2P 10DLC registration for US numbers, (2) the feature is not enabled for the specific phone number the caller dialed, (3) the caller has previously opted out of SMS, or (4) you have both the native feature and a workflow running simultaneously, causing conflicts. Check each in order."
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
                                                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">How to Set Up GoHighLevel Workflow Automation for Beginners →</Link>
                                                <Link href="/blog/how-to-create-gohighlevel-snapshot" className="text-sm text-[#0E9BF0] hover:underline">How to Create a GoHighLevel Snapshot →</Link>
                                                <Link href="/services/crm-setup" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel CRM Setup Service →</Link>
                                                <Link href="/services/workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Service →</Link>
                                          </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
                                          <div className="relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Already on GoHighLevel?</h3>
                                                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                                                      Not sure if your GHL is set up to catch every lead? We audit GHL accounts every week.
                                                      Missed call text back, workflows, pipelines we'll review your whole setup and show you what's missing in 30 minutes.
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

                                    {/* About the Author */}
                                    <div className="bg-[#0B1628] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 mt-2" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>

                                          <div className="flex items-center gap-3 mb-4">
                                                <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
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
                                                5+ years GHL experience · 200+ builds delivered across dental, home services, real estate, SaaS, and agencies globally.
                                          </p>
                                          <Link href="https://ghlscaleup.com" className="text-[#0E9BF0] text-xs hover:underline">ghlscaleup.com</Link>
                                    </div>

                                    {/* CTA Card */}
                                    <div className="bg-[#1C2E4A] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2A3F5F] mt-2" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>

                                          <div className="text-sm font-bold text-white mb-2">Missing Calls = Missing Revenue</div>
                                          <p className="text-xs text-white/60 leading-relaxed mb-4">Set up missed call text back in 5 minutes. We'll help you configure it correctly.</p>
                                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
                                                Get Help Setting Up
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
