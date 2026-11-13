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
  Target,
  Key,
  Webhook,
  Workflow,
  FileCode,
  ArrowRightLeft,
  ListTodo,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ClipboardList,
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';

export default function ClickUpTaskFromTemplateClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [showFloatingProjectHelp, setShowFloatingProjectHelp] = useState(false);

  useEffect(() => {
    const sections = [
      'native-limit',
      'how-it-works',
      'prerequisites',
      'template-id',
      'list-id',
      'build-webhook',
      'use-task-id',
      'troubleshooting',
      'limits',
      'use-cases',
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
      q: 'Can GoHighLevel natively create a ClickUp task from a template?',
      a: "HighLevel's ClickUp actions page (11 March 2026) lists 18 actions and none applies a template. Check your account's action list, since it can change."
    },
    {
      q: 'What is the ClickUp API endpoint for creating a task from a template?',
      a: 'POST https://api.clickup.com/api/v2/list/{list_id}/taskTemplate/{template_id}, per ClickUp\'s reference. The body requires a name.'
    },
    {
      q: 'Do I need to make my template public?',
      a: "No. Public sharing is only a shortcut for reading the ID. ClickUp's Get Task Templates request lists templates without making any public."
    },
    {
      q: 'Where do I find the template ID?',
      a: "Use ClickUp's Get Task Templates request, or read it from a share link and switch public sharing off straight away."
    },
    {
      q: 'Which authorization header does ClickUp use?',
      a: 'Authorization: followed by your personal token, with no "Bearer," per ClickUp\'s authentication page.'
    },
    {
      q: 'Will subtasks and checklists come across?',
      a: "ClickUp's API page doesn't say. Test with your template."
    },
    {
      q: 'Can I send more than a name in the request?',
      a: "ClickUp's page lists only name. Don't assume others are supported."
    },
    {
      q: 'Does it cost extra?',
      a: "A mirror of HighLevel's help calls Custom Webhook a Premium action. Check your billing."
    },
    {
      q: 'Is there a rate limit?',
      a: 'Yes, per token per minute, depending on the ClickUp plan (100 to 10,000).'
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'native-limit', title: 'Can GoHighLevel Create a ClickUp Task From a Template?' },
    { id: 'how-it-works', title: 'How Does the Template Automation Work?' },
    { id: 'prerequisites', title: 'What Do I Need Before I Start?' },
    { id: 'template-id', title: 'How Do I Find My ClickUp Task Template ID?' },
    { id: 'list-id', title: 'How Do I Find My ClickUp List ID?' },
    { id: 'build-webhook', title: 'How Do I Create a ClickUp Task From a Template With a Custom Webhook?' },
    { id: 'use-task-id', title: 'How Do I Use the New ClickUp Task ID Later in the Workflow?' },
    { id: 'troubleshooting', title: "Why Isn't My ClickUp Task Being Created?" },
    { id: 'limits', title: 'What Are the Limits of This Approach?' },
    { id: 'use-cases', title: 'Where Is This Automation Useful?' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'what-next', title: 'What Should I Do Next?' },
  ];

  const troubleshootingTable = [
    { see: '401', cause: 'Missing or wrong token, or the wrong header format', check: "Header name and value; is 'Bearer' there?", try: "Remove 'Bearer', paste the token again, regenerate if needed" },
    { see: '403', cause: "The token's user can't access that list or Workspace", check: 'Can that user open the list in ClickUp? Was the token made in the right Workspace?', try: 'Give the user access or use a token from the right Workspace' },
    { see: '404', cause: 'Wrong list ID, wrong template ID, or the template is gone or not available', check: 'Compare both IDs; open the template in ClickUp', try: 'Fix the IDs; confirm the template is in your Workspace' },
    { see: '400 or 422', cause: 'Invalid JSON or an unsupported body field', check: "Quotes, commas, braces; only 'name' is documented", try: 'Paste the body into a JSON checker; remove extra fields' },
    { see: '429', cause: 'Too many requests in a minute', check: 'How many runs fired at once?', try: "Add a Wait step; run in batches. ClickUp limits are per token: 100 a minute on Free Forever, Unlimited and Business; 1,000 on Business Plus; 10,000 on Enterprise (ClickUp rate limits)" },
    { see: '5xx', cause: "A problem on ClickUp's side", check: 'Does it pass later?', try: "Retry later. HighLevel's page doesn't document automatic retries" },
    { see: 'Task made, subtasks missing', cause: 'The API may not copy everything the app does (not confirmed)', check: 'Compare the task to the template', try: 'Test other templates; ask ClickUp support' },
    { see: 'Success, but no task where you expected', cause: 'Wrong list ID', check: 'Search the Workspace for the task name', try: 'Recheck the list ID' },
    { see: 'Two tasks for one client', cause: 'The workflow ran twice', check: "Check the contact's workflow history", try: 'Add a guard (see limits below)' },
    { see: 'Saved response missing', cause: "The toggle isn't in your account, or the values aren't mapped", check: 'Is Save response on? What does the picker offer?', try: 'Re-test; check the logs for the reply' },
    { see: 'Body ignored or error about format', cause: 'Used the POST event form instead of CUSTOM, or the wrong Content-Type', check: 'Event type and Content-Type', try: 'Use CUSTOM with Content-Type application/json' },
  ];

  const useCases = [
    { situation: 'New client onboarding', trigger: 'A signed form or a new client tag', template: 'Kickoff, access requests, setup checklist' },
    { situation: 'Sales-to-delivery handoff', trigger: 'An opportunity moving to a won stage', template: 'Delivery tasks and a briefing checklist' },
    { situation: 'New project creation', trigger: 'A form with project details', template: 'Standard phases as subtasks' },
    { situation: 'Appointment-to-service workflow', trigger: 'An appointment booked or completed', template: 'Prep and follow-up tasks' },
    { situation: 'Internal fulfillment and operations', trigger: 'A tag or status change', template: 'A repeatable fulfillment checklist' },
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
          <span className="text-[#1A2236] font-medium">Create ClickUp Tasks From Templates Using GoHighLevel</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Post Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Integration</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">ClickUp</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">Webhook</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Create ClickUp Tasks From Templates Using GoHighLevel
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
              <div className="text-xs text-white/50">GoHighLevel Specialists · Prepared 2 November 2026 · HighLevel and ClickUp pages read 2 November 2026</div>
            </div>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#F8D000]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Quick Answer</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              There is a way to create a ClickUp task from a template using a Custom Webhook in your GoHighLevel workflow. We'll walk through it the way we'd explain it over a coffee: what's happening, why each step matters, and where people usually get stuck.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <em>An honest note before we start. This guide comes from reading ClickUp's and HighLevel's own documentation closely and working out the safest way to put the two together. We haven't run this exact setup in a live ClickUp workspace for this article, and a few details (we'll flag each one) aren't spelled out in the official docs. So please try it on a throwaway template in a test list first. It takes ten minutes and saves a lot of cleanup.</em>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Need Help Building This? Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#build-webhook"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to the Build
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

            {/* Intro */}
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Picture this. A new client signs up, and your team needs a ClickUp task for the onboarding. Not just any task: the one that already comes with the standard subtasks, checklists and instructions you saved as a task template. If GoHighLevel simply makes a blank task, someone still has to rebuild the structure by hand, and that is exactly the kind of chore you automated to avoid.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's the good news. There is a way to do it, using a Custom Webhook in your GoHighLevel workflow to ask ClickUp to build the task from your template. We'll walk through it the way we'd explain it over a coffee: what's happening, why each step matters, and where people usually get stuck.
            </p>

            {/* Full-width Image Block */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/create-clickup-task-from-template-gohighlevel.png"
                  alt="Task template being copied into a ClickUp list by an automated webhook from a GoHighLevel workflow"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>In-article diagram: How a GoHighLevel workflow creates a ClickUp task from a template.</span>
              </div>
            </div>

            {/* Section: Native Limit */}
            <h2 id="native-limit" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel Create a ClickUp Task From a Template?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Not with a ready-made action, as far as HighLevel's documentation shows. HighLevel's page on ClickUp actions (ClickUp - Actions &amp; Triggers in Workflows, updated 11 March 2026) lists 18 actions you can use in a workflow, including Create Task, Update Task, Archive or Delete Task, Create List, Post Task Comment and Find Task by ID. None of them applies a task template. The Create Task action's documented fields are the name, due date and assignee.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              That matches what a lot of people run into. Creating a normal task is easy. Creating a task from a template is a different request, and the native integration doesn't list it. We'd say "as of that page," because HighLevel adds features regularly, so it's worth a quick look at the action list in your own account before you build anything.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What's the difference, really? A blank task has a name and whatever you type into it. A task made from a template arrives with the structure you saved: subtasks, checklists, a description, custom fields and more, depending on what you included (ClickUp's task template help). ClickUp's own API has a request for exactly this, and that's the one we'll call.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">One possible shortcut worth testing first.</strong> ClickUp lets you set a default template for a List so it applies to every new task created there, and you can also use a ClickUp Automation to apply a template when a task is created (ClickUp's task template help). If that also applies to tasks created by HighLevel's regular Create Task action, you may not need a webhook at all. ClickUp's page doesn't say whether it does, so test it with one dummy task. If it works, you've saved yourself the rest of this guide. If it doesn't, read on.
            </p>

            {/* Section: How It Works */}
            <h2 id="how-it-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does the Template Automation Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Five steps, and only two of them are yours to build.
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4">
              <p className="text-sm text-[#1A2236] italic">
                Diagram: Five-step flow. 1. GoHighLevel workflow triggers (form, stage change, appointment...). 2. Custom Webhook action — POST request with your ClickUp token and a task name. 3. ClickUp API builds a new task from your template in the list. 4. ClickUp replies (success or an error message). 5. HighLevel saves the reply (if 'Save response' is on) and later steps can use it.
              </p>
            </div>
            <ol className="space-y-2 mb-6 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Something happens in GoHighLevel (a form is submitted, an opportunity moves stage, an appointment is booked) and your workflow starts.</li>
              <li>A Custom Webhook action sends a request to ClickUp. A webhook is just a way for one app to send a message to another over the internet. Ours is a POST request, which is the kind of request that means "please create something."</li>
              <li>ClickUp's API receives it. An API is the front door ClickUp offers to other software. The request says which list, which template and what to call the new task.</li>
              <li>ClickUp creates the task from your template and replies with either a success message or an error.</li>
              <li>If you turn on Save response, HighLevel keeps that reply so later steps can use it, for example to remember the new task's ID.</li>
            </ol>

            {/* Section: Prerequisites */}
            <h2 id="prerequisites" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Do I Need Before I Start?
            </h2>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>A HighLevel account where you can build workflows.</li>
              <li>A ClickUp account that can reach the list where the new tasks should appear. Whoever's token you use must be able to access that list.</li>
              <li>An existing task template in ClickUp.</li>
              <li>A ClickUp personal API token (we'll get it in a moment).</li>
              <li>Two IDs: the template ID and the list ID. Most of the fiddly work in this guide is finding these.</li>
              <li>A test list and a test template, so your first run doesn't create real tasks for real people.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Check one more thing: a mirror of HighLevel's help describes Custom Webhook as a Premium workflow action, and HighLevel's own page doesn't state pricing. Look at your billing settings so a test run doesn't surprise you. The native ClickUp actions can also be billed as premium.
            </p>

            {/* Section: Template ID */}
            <h2 id="template-id" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Find My ClickUp Task Template ID?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is the step the original video called out, and it's fair: ClickUp doesn't show a template's ID on the template itself. ClickUp's reference for the request we'll use says the template ID is required but doesn't say where to find it. Here are the two ways we found, safest first.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">The safer way: ask ClickUp's API for your template list</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              ClickUp has a documented request that lists the task templates in a Workspace (Get Task Templates). It looks like this:
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4 overflow-x-auto">
              <pre className="text-xs md:text-sm text-[#1A2236] whitespace-pre-wrap break-all font-mono">
{`GET https://api.clickup.com/api/v2/team/{team_id}/taskTemplate?page=0
Authorization: YOUR_CLICKUP_API_TOKEN`}
              </pre>
            </div>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><code className="text-[#1A2236]">team_id</code> is your Workspace ID (ClickUp's API still calls a Workspace a "team").</li>
              <li>The <code className="text-[#1A2236]">page</code> setting is required. We'd start with 0, the usual first page. ClickUp's page doesn't spell out the starting number, so if you get nothing back, try 1.</li>
              <li>ClickUp's page doesn't show the reply format. Expect a list of templates with names and IDs, and look for the name of yours.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              You can send this from a free tool like Postman or from a developer's terminal. If that sounds like too much, a developer or whoever manages your ClickUp can do it in a couple of minutes. The big plus: it never makes your template public.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">The shortcut: read the ID from a share link (and why we'd be careful)</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The video's method works like this: open the template in ClickUp's Template Center, click Share, switch on public sharing, copy the link and pull the ID out of it (ClickUp: Share a template). ClickUp staff and users mention the same trick on ClickUp's feedback board, where they describe the ID as a code starting with t-, and note that the only documented way to list IDs is the request above (ClickUp feedback). A Make community thread suggests the sharing can be switched off again afterward, since you only need it to read the ID (Make community).
            </p>
            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#DC3545] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#5C6880] leading-relaxed">
                  <strong className="text-[#1A2236]">Why we'd be careful.</strong> A public link means anyone who has the link can open the template, even people outside your Workspace, and they can save their own copy (ClickUp: Share a template, ClickUp: public versus internal links). Your onboarding template might include internal steps, client names or attachments you wouldn't want out in the world. If you use this method:
                </p>
              </div>
            </div>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Use it on a test template if you can.</li>
              <li>Copy the link, note the ID, and switch public sharing off straight away in the same Share window. ClickUp's page I read doesn't describe the off switch, so check it's really off.</li>
              <li>Don't paste the link in chats, tickets or screenshots.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Public sharing isn't necessary for the automation itself. It's only a way to read the ID. ClickUp also launched internal-only template links in April 2026, which don't create a public link (ClickUp feedback), but we couldn't confirm that those links contain the ID, so we're not relying on them.
            </p>

            {/* Section: List ID */}
            <h2 id="list-id" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Find My ClickUp List ID?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The list ID tells ClickUp where the new task should go. ClickUp says it must be a number. People mix it up with the Workspace, Space, Folder and task IDs, which all look similar.
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Open the list in ClickUp, the actual list, not a folder or space.</li>
              <li>Look at the address in your browser. A third-party help article (Elatly) describes the pattern as the following, where the list ID is the number right after /v/li/:
                <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-3 mt-2 overflow-x-auto">
                  <pre className="text-xs md:text-sm text-[#1A2236] whitespace-pre-wrap break-all font-mono">
{`https://app.clickup.com/1234567/v/li/9876543
                         ^ Workspace ID
                                ^ List ID
(fictional numbers)`}
                  </pre>
                </div>
              </li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              The first number (before /v/) is your Workspace ID. In the example, the list ID would be 9876543. ClickUp's own pages we read don't give this URL layout, so after you build the automation, a test run is your proof that it's right. If it creates the task in the wrong place, or you get a "not found" error, recheck this number first.
            </p>

            {/* Section: Build Webhook */}
            <h2 id="build-webhook" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Create a ClickUp Task From a Template With a Custom Webhook?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Now the main build. Do it in a test workflow first. Where we describe HighLevel's screens, we're using labels from HighLevel's help page for the action (Workflow Action - Custom webhook, updated 11 December 2025). Yours may look slightly different.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 1: Add the Custom Webhook action</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Open your workflow, add an action and choose Custom Webhook. Put it where you want the task created, such as right after a form submission or a stage change.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 2: Choose the method and enter the URL</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Choose the CUSTOM event and set the method to POST. This matters. HighLevel's page says the CUSTOM event gives you the method, the Content-Type and a Raw Body editor for JSON, while the POST event shows a simple key-and-value form without a Raw Body editor. We want to send JSON, so use CUSTOM.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Enter this address, swapping in your own IDs (the endpoint comes from ClickUp's reference):
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4 overflow-x-auto">
              <pre className="text-xs md:text-sm text-[#1A2236] whitespace-pre-wrap break-all font-mono">
{`https://api.clickup.com/api/v2/list/YOUR_LIST_ID/taskTemplate/YOUR_TEMPLATE_ID`}
              </pre>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Read it left to right: "In this list, using this template, create a task." ClickUp lists both IDs as required.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 3: Add ClickUp authorization</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              ClickUp needs to know who is asking. Create a personal API token: click your avatar in ClickUp, go to Settings, then Apps, then under API Token choose Generate (ClickUp authentication). It starts with pk_. Copy it somewhere safe.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Here's the detail that trips people up. ClickUp wants the token on its own in the Authorization header, with no "Bearer" in front of it. HighLevel's Bearer Token option sends the word "Bearer" first, so don't use it for this.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's page doesn't say which of its options sends a plain Authorization value. The safest approach we can see from its description is to choose No auth and add a header manually, as in the next step. If your account offers a better-fitting option, test it with a dummy run.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Protect that token. It acts as you in ClickUp, ClickUp says personal tokens never expire, and it's meant for individual or testing use. So:
            </p>
            <ul className="space-y-2 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li>Never put it in the body, the URL or a screenshot. HighLevel's page also advises keeping secrets out of query strings.</li>
              <li>Think about using a dedicated ClickUp user with access to only the lists the automation needs (that's our recommendation, not a ClickUp requirement).</li>
              <li>If it's ever exposed, regenerate it in the same Settings screen and update HighLevel.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 4: Add the headers</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Add two headers:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Header name</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Value</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#DDE1E9]">
                    <td className="p-3 text-[#1A2236] font-medium align-top">Authorization</td>
                    <td className="p-3 text-[#5C6880] align-top">YOUR_CLICKUP_API_TOKEN (no Bearer)</td>
                    <td className="p-3 text-[#5C6880] align-top">Proves who's asking</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#1A2236] font-medium align-top">Content-Type</td>
                    <td className="p-3 text-[#5C6880] align-top">application/json</td>
                    <td className="p-3 text-[#5C6880] align-top">Tells ClickUp the body is JSON</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 5: Build the JSON body</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The body is the information you send. ClickUp's reference lists exactly one body field, name, and marks it required. Nothing else is listed on that page, so don't assume other fields will work:
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-4 overflow-x-auto">
              <pre className="text-xs md:text-sm text-[#1A2236] whitespace-pre-wrap break-all font-mono">
{`{
  "name": "Client onboarding: <contact name from the picker>"
}`}
              </pre>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              JSON in plain English: curly braces wrap the whole message, the field name goes in quotes, then a colon, then the value in quotes. A missing quote or comma is the most common reason a request fails.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 6: Insert dynamic GoHighLevel values</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              To personalize the task name, use the tag icon next to the body field to open HighLevel's dynamic value picker. Don't type merge fields from memory. HighLevel's page shows examples like {`{{contact.id}}`} and {`{{contact.email}}`}, and the picker is the reliable way to see what your workflow offers (a contact name, an opportunity name and so on depend on the trigger you used). Insert the value inside the quotes, so the body stays valid JSON.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 7: Turn on Save response</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Switch on Save response from this Webhook if you see it. HighLevel's page says it's available "if available in your account." We'll use it in the next section.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mt-8 mb-3">Step 8: Save the action and test</h3>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Click Save Action first, because HighLevel's page says to save before testing. Then use Test Workflow in draft mode with a test contact, and look at the Execution Logs to see whether the action ran and what status came back. A successful ClickUp request returns a 200 status. Then open your test list and check the task appeared, was named as expected and looks like the template.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Check the subtasks specifically. ClickUp's reference page doesn't say that the API copies a template's subtasks, checklists and other pieces the way "Use Template" does inside the app. Compare your new task to the template. If something is missing, that's valuable to know before you go live.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Want to test outside HighLevel first? A developer can try the same request with a command-line tool (swap in your own test values):
            </p>
            <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 mb-6 overflow-x-auto">
              <pre className="text-xs md:text-sm text-[#1A2236] whitespace-pre-wrap break-all font-mono">
{`curl -X POST "https://api.clickup.com/api/v2/list/YOUR_LIST_ID/taskTemplate/YOUR_TEMPLATE_ID" \\
  -H "Authorization: YOUR_CLICKUP_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Test task from template"}'`}
              </pre>
            </div>

            {/* Section: Use Task ID */}
            <h2 id="use-task-id" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do I Use the New ClickUp Task ID Later in the Workflow?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Why bother? Because the task ID is the handle for that exact task. If you store it, later steps (or later workflows) can find, update or comment on the right task instead of guessing.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              What does ClickUp send back? The reference page shows a 200 status and an example, but it doesn't list the reply's fields. Plan to look at the real reply from your test run in the logs and find the task's ID there.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              How does HighLevel let you use it? This is where we have to be straight with you: HighLevel's help page mentions the Save response toggle but doesn't explain how to reference saved values afterwards. One third-party guide (HL Growth Partner) describes saving the response and then using an Update Contact Field action to write values into custom fields. We couldn't confirm the details in official documentation, so treat this as a way to try, not a promise:
            </p>
            <ol className="space-y-2 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li>Create a custom field (for example, "ClickUp Task ID") on the contact, or on the opportunity if that suits your process.</li>
              <li>Run your test so the response is saved.</li>
              <li>Add an action that updates that field, and open the value picker. If the saved response values show up there, choose the task ID.</li>
              <li>If you can't find them, don't force it. The response is also visible in the logs, and a developer can help map it.</li>
            </ol>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              Once an ID is stored, HighLevel's native ClickUp actions Find Task by ID, Update Task, Post Task Comment and Archive or Delete Task become useful (action list). We haven't confirmed that each one accepts a stored ID in its task field, so check that when you build.
            </p>

            {/* Section: Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Isn't My ClickUp Task Being Created?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Start with the Execution Logs and the status code, then match it here. The status code meanings come from HighLevel's page. The ClickUp-specific causes are our reading of the docs, so confirm against the actual error text.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What you see</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Likely cause</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to check</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What to try</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.see}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.cause}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.check}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.try}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              HighLevel also has no preview mode for this action. Its troubleshooting guidance suggests a dummy contact with known values and a mock endpoint such as Webhook.site when you want to inspect exactly what is being sent (a HighLevel help mirror).
            </p>

            {/* Section: Limits */}
            <h2 id="limits" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Are the Limits of This Approach?
            </h2>
            <ul className="space-y-2 mb-6 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">It depends on ClickUp's API.</strong> If ClickUp changes the request, this stops working until you update it. Re-test it after any ClickUp or HighLevel change that affects it.</li>
              <li><strong className="text-[#1A2236]">Credentials need care.</strong> A personal token acts as one person and doesn't expire. If that person leaves your Workspace or loses access, the automation can break.</li>
              <li><strong className="text-[#1A2236]">Permissions matter.</strong> The task is created with that user's access.</li>
              <li><strong className="text-[#1A2236]">Rate limits apply.</strong> Bulk runs can hit ClickUp's per-minute limits.</li>
              <li><strong className="text-[#1A2236]">Template changes can surprise you.</strong> Delete or rename a template and the request can fail.</li>
              <li><strong className="text-[#1A2236]">Response use is limited by documentation.</strong> See the section above.</li>
              <li><strong className="text-[#1A2236]">Duplicates are your job to prevent.</strong> HighLevel's pages don't describe a built-in guard. One approach we'd consider: store the task ID in a field, and before the webhook, add an If/Else step that skips it when the field already has a value. That's our recommendation, not a documented feature, so test it.</li>
              <li><strong className="text-[#1A2236]">It needs maintenance.</strong> Treat it as a small piece of software: name it clearly, note who owns it and recheck it now and then.</li>
            </ul>

            {/* Section: Use Cases */}
            <h2 id="use-cases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Where Is This Automation Useful?
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#DDE1E9] rounded-lg">
                <thead>
                  <tr className="bg-[#F8F9FB]">
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">Situation</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What triggers it</th>
                    <th className="text-left p-3 font-bold text-[#1A2236] border-b border-[#DDE1E9]">What the template holds</th>
                  </tr>
                </thead>
                <tbody>
                  {useCases.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9] last:border-b-0">
                      <td className="p-3 text-[#1A2236] font-medium align-top">{item.situation}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.trigger}</td>
                      <td className="p-3 text-[#5C6880] align-top">{item.template}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              These are illustrations of where the pattern fits, not customer results. HighLevel's page says any workflow trigger can be used with a Custom Webhook, so your trigger is up to you.
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
              Make a test template and test list, grab the two IDs, build the webhook, and run one dummy contact through it. Check the task, the subtasks and the saved response. Once that all behaves, switch it to your real list. For the basics of connecting the two tools first, our <Link href="/blog/connect-clickup-to-gohighlevel" className="text-[#0E9BF0] hover:underline">guide to connecting ClickUp to GoHighLevel</Link> covers the native setup, and for the workflow side, <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">how to set up GoHighLevel workflow automation</Link> is a good companion.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6">
              If you'd rather not write this up yourself, that's what our <Link href="/services/integrations" className="text-[#0E9BF0] hover:underline">GoHighLevel integrations</Link> and <Link href="/services/workflow-automation" className="text-[#0E9BF0] hover:underline">workflow automation</Link> services are for. No pressure, though: this guide should get you most of the way on its own.
            </p>

            {/* CTA - After FAQ */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-xl p-6 text-center my-6">
              <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">
                <strong className="text-white">Still have questions about creating ClickUp tasks from templates using GoHighLevel?</strong>
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Make a test template and test list. Build the webhook. Run one dummy contact through it.</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  GHL Scale Up implements GoHighLevel for agencies and service businesses. If you'd rather not write this up yourself, our integrations and workflow automation services are for it.
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
                Prepared 4 November 2026. HighLevel and ClickUp pages read 4 November 2026. This guide comes from reading ClickUp's and HighLevel's own documentation closely and working out the safest way to put the two together. We haven't run this exact setup in a live ClickUp workspace for this article, and a few details are not spelled out in the official docs. Please try it on a throwaway template in a test list first.
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