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
} from 'lucide-react';
import { useFaqSchema } from '@/hooks/useFaqSchema';
import Image from 'next/image';
import BookingModal from '@/components/BookingModal';
import { Button } from '../../../components/ui/button';

export default function ConnectClickUpToGoHighLevelClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [openBooking, setOpenBooking] = useState(false);

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'can-you-integrate',
        'how-integration-works',
        'how-do-you-connect',
        'what-clickup-triggers',
        'what-can-gohighlevel-create',
        'how-do-you-create-tasks',
        'how-do-you-trigger-workflows',
        'what-data-can-you-pass',
        'best-use-cases',
        'can-replace-handoffs',
        'do-you-need-zapier',
        'limitations',
        'why-not-triggering',
        'what-stays-where',
        'is-it-worth-using',
        'final-verdict',
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
      q: "Can ClickUp integrate with GoHighLevel?",
      a: "Yes, through a native integration built into Workflows no third-party tool is required."
    },
    {
      q: "How do I connect ClickUp to GoHighLevel?",
      a: "Add a ClickUp trigger or action inside a workflow, click Connect Now, and authorize via ClickUp's OAuth login. You can also connect globally under Settings → Integrations → ClickUp."
    },
    {
      q: "Is ClickUp integration native in GoHighLevel?",
      a: "Yes it runs inside the Workflows builder using ClickUp-specific triggers and actions, distinct from routing the connection through Zapier or Make."
    },
    {
      q: "Can GoHighLevel create ClickUp tasks automatically?",
      a: "Yes, via the Create Task action, triggered by events like a form submission or an opportunity stage change."
    },
    {
      q: "Can ClickUp trigger GoHighLevel workflows?",
      a: "Yes. Events like New Task or Task Changes can start a workflow, though the trigger is contactless by default and needs an added step to associate with a CRM contact."
    },
    {
      q: "What ClickUp triggers are available in GoHighLevel?",
      a: "Nine are currently documented: New Task, Task Changes, New List, New Folder, New Comment on a Task, New Attachment Added to Task, New Reaction on Chat Message, New Reaction on Task Comment, and New Time Entry."
    },
    {
      q: "What ClickUp actions are available in GoHighLevel?",
      a: "Task creation and updates, space/folder/list creation, comments and attachments, document creation and editing, and several lookup actions. Create Custom Field and Update Custom Field Value are listed as Coming Soon."
    },
    {
      q: "Do I need Zapier to connect ClickUp and GoHighLevel?",
      a: "Not if the native trigger, action, and field mapping already cover the need. Zapier or Make becomes relevant when a specific capability isn't natively supported yet, or another app needs to join the same automation."
    },
    {
      q: "Can GoHighLevel and ClickUp sync data both ways?",
      a: "Not as continuous synchronization. The integration triggers specific workflows in each direction on a defined event it doesn't keep every field permanently matched."
    },
    {
      q: "Why isn't my ClickUp workflow triggering in GoHighLevel?",
      a: "Most often a scoping issue (wrong workspace or list), a lapsed authorization, or an overly narrow filter. Check Execution Logs & Enrollment History for the specific run."
    }
  ];

  useFaqSchema(faqs);

  const tocItems = [
    { id: 'can-you-integrate', title: 'Can You Integrate ClickUp With GoHighLevel?' },
    { id: 'how-integration-works', title: 'How Does the ClickUp and GoHighLevel Integration Work?' },
    { id: 'how-do-you-connect', title: 'How Do You Connect ClickUp to GoHighLevel?' },
    { id: 'what-clickup-triggers', title: 'What ClickUp Triggers Can Start a GoHighLevel Workflow?' },
    { id: 'what-can-gohighlevel-create', title: 'What Can GoHighLevel Create or Update in ClickUp?' },
    { id: 'how-do-you-create-tasks', title: 'How Do You Create ClickUp Tasks Automatically From GoHighLevel?' },
    { id: 'how-do-you-trigger-workflows', title: 'How Do You Trigger GoHighLevel Workflows From ClickUp?' },
    { id: 'what-data-can-you-pass', title: 'What Data Can You Pass From GoHighLevel to ClickUp?' },
    { id: 'best-use-cases', title: 'What Are the Best ClickUp and GoHighLevel Automation Use Cases?' },
    { id: 'can-replace-handoffs', title: 'Can GoHighLevel and ClickUp Replace Manual Sales-to-Delivery Handoffs?' },
    { id: 'do-you-need-zapier', title: 'Do You Need Zapier to Connect ClickUp and GoHighLevel?' },
    { id: 'limitations', title: 'What Are the Limitations of the ClickUp GoHighLevel Integration?' },
    { id: 'why-not-triggering', title: 'Why Is My ClickUp to GoHighLevel Workflow Not Triggering?' },
    { id: 'what-stays-where', title: 'What Should Stay in GoHighLevel and What Should Stay in ClickUp?' },
    { id: 'is-it-worth-using', title: 'Is the ClickUp and GoHighLevel Integration Worth Using?' },
    { id: 'final-verdict', title: 'Final Verdict' },
    { id: 'faq', title: 'Frequently Asked Questions' }
  ];

  const triggerData = [
    { trigger: 'New Task', whatItDetects: 'A task is created', practicalUse: 'Notify a team lead or log the task into a CRM record' },
    { trigger: 'Task Changes', whatItDetects: 'Status, due date, or priority changes', practicalUse: 'Update a contact\'s stage when their project task completes' },
    { trigger: 'New List', whatItDetects: 'A new list is created', practicalUse: 'Confirm a project structure was set up correctly' },
    { trigger: 'New Folder', whatItDetects: 'A new folder is created', practicalUse: 'Track new client workspaces as they\'re built' },
    { trigger: 'New Comment on a Task', whatItDetects: 'Someone comments on a task', practicalUse: 'Alert an account manager to client-facing task activity' },
    { trigger: 'New Attachment Added to Task', whatItDetects: 'A file is added to a task', practicalUse: 'Flag deliverables ready for client review' },
    { trigger: 'New Reaction on Chat Message', whatItDetects: 'Someone reacts to a chat message', practicalUse: 'Lightweight team-engagement signal, limited standalone use' },
    { trigger: 'New Reaction on Task Comment', whatItDetects: 'Someone reacts to a task comment', practicalUse: 'Same as above, scoped to task discussion' },
    { trigger: 'New Time Entry', whatItDetects: 'Time is logged on a task', practicalUse: 'Feed logged hours into internal reporting workflows' },
  ];

  const actionData = [
    { action: 'Create Task', whatItDoes: 'Creates a task with name, assignee, due date', example: 'New task when a form is submitted' },
    { action: 'Update Task', whatItDoes: 'Changes status, due date, or priority on an existing task', example: 'Move a task forward when a deal stage changes' },
    { action: 'Archive or Delete Task', whatItDoes: 'Archives or permanently removes a task', example: 'Clean up a task tied to a lost opportunity' },
    { action: 'Create Space', whatItDoes: 'Creates a workspace-level space', example: 'Spin up a client workspace on contract signing' },
    { action: 'Create Folder', whatItDoes: 'Adds a folder inside a space', example: 'Organize a new client\'s lists by project phase' },
    { action: 'Create List', whatItDoes: 'Creates a new task list', example: 'Start a fresh project list per opportunity type' },
    { action: 'Post Task Comment', whatItDoes: 'Adds a comment to a task', example: 'Attach client-submitted notes to the task automatically' },
    { action: 'Post Attachment', whatItDoes: 'Uploads a file to a task', example: 'Push a signed contract to the relevant task' },
    { action: 'Create New Document', whatItDoes: 'Creates a ClickUp Doc', example: 'Save an AI-generated proposal for internal review' },
    { action: 'Edit Document Page', whatItDoes: 'Updates an existing document page', example: 'Keep a living project brief current' },
    { action: 'Create New Document Page', whatItDoes: 'Adds a page to an existing document', example: 'Log each new deliverable under one project doc' },
    { action: 'Find Task by ID', whatItDoes: 'Looks up a specific task', example: 'Confirm a task exists before updating it' },
    { action: 'Find Documents', whatItDoes: 'Searches for documents', example: 'Locate the right doc before editing it' },
    { action: 'Find Custom Fields', whatItDoes: 'Locates a custom field', example: 'Confirm a field exists before referencing it' },
    { action: 'Find a List of All Tasks', whatItDoes: 'Returns all tasks in a workspace/list', example: 'Pull a task count into a reporting workflow' },
    { action: 'Find User by Name or Email', whatItDoes: 'Looks up a ClickUp user', example: 'Confirm the correct assignee before assigning a task' },
    { action: 'Create Custom Field (Coming Soon)', whatItDoes: 'Will add a custom field to a space/folder/task', example: 'Not yet available' },
    { action: 'Update Custom Field Value (Coming Soon)', whatItDoes: 'Will set a value on an existing custom field', example: 'Not yet available' },
  ];

  const zapierDecisionData = [
    { situation: 'Required trigger and action both exist natively, field mapping covers the need', bestOption: 'Native ClickUp integration' },
    { situation: 'Native integration lacks the specific action (e.g., writing a ClickUp custom field today)', bestOption: 'Zapier or Make' },
    { situation: 'A third application needs to be part of the same automation', bestOption: 'Zapier or Make' },
    { situation: 'Requirement needs custom data transformation or logic beyond workflow conditions', bestOption: 'Zapier or Make' },
    { situation: 'Requirement is genuinely custom system-to-system logic', bestOption: 'Webhooks / direct API' },
  ];

  const platformOwnershipData = [
    { function: 'Contacts, leads, opportunities', recommendedPlatform: 'GoHighLevel', reason: 'This is CRM data GoHighLevel is built to track and act on' },
    { function: 'Sales pipeline and stages', recommendedPlatform: 'GoHighLevel', reason: 'Pipeline logic and follow-up automation live here natively' },
    { function: 'Conversations and appointments', recommendedPlatform: 'GoHighLevel', reason: 'Multi-channel communication is a core GoHighLevel function' },
    { function: 'Marketing automation', recommendedPlatform: 'GoHighLevel', reason: 'Workflow triggers and actions are native to this platform' },
    { function: 'Internal tasks and checklists', recommendedPlatform: 'ClickUp', reason: 'Task management and assignment are ClickUp\'s core function' },
    { function: 'Project execution and delivery', recommendedPlatform: 'ClickUp', reason: 'Structured lists, folders, and spaces belong here' },
    { function: 'Team assignments on delivery work', recommendedPlatform: 'ClickUp', reason: 'Internal work distribution, not customer-facing' },
    { function: 'Project documents', recommendedPlatform: 'ClickUp', reason: 'Docs, briefs, and internal references live natively here' },
  ];

  const troubleshootingData = [
    { problem: 'ClickUp won\'t connect', likelyCause: 'OAuth authorization incomplete or revoked', whatToCheck: 'Reconnect via Settings → Integrations → ClickUp' },
    { problem: 'Trigger never fires', likelyCause: 'Wrong workspace/list scoped, or filter too narrow', whatToCheck: 'Confirm the trigger is scoped to the list where the event actually happens' },
    { problem: 'Action fails silently', likelyCause: 'Missing permission on the target ClickUp item', whatToCheck: 'Confirm the connected ClickUp user can create/edit in that workspace' },
    { problem: 'Fields import blank', likelyCause: 'Dynamic value mapped to a field that wasn\'t populated on that record', whatToCheck: 'Check the source record has the mapped field filled in' },
    { problem: 'Duplicate tasks appear', likelyCause: 'Same trigger firing on repeated test runs, or two workflows watching the same event', whatToCheck: 'Check Enrollment History for repeat runs; disable duplicate workflows' },
    { problem: 'Workflow doesn\'t associate with a contact', likelyCause: 'Trigger is contactless by default', whatToCheck: 'Add a Find Contact/Create Contact step using the trigger\'s email value' },
    { problem: 'Execution shows an error', likelyCause: 'Field mapping or permission issue on that specific run', whatToCheck: 'Open Execution Logs & Enrollment History for that run\'s inputs and outputs' },
  ];

  const ProjectHelpCard = () => (
    <div className="bg-[#0B1628] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2A3F5F]">
      <div className="text-xl font-bold text-white mb-2 flex justify-center">Project Help</div>
      <p className="text-[15px] text-white/60 leading-relaxed mb-4">Get quick guidance for your ClickUp integration.</p>
      <Button
        onClick={handleOpenBooking}
        className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1421] font-bold py-2.5 rounded-lg text-sm hover:bg-[#FFE44D] hover:shadow-lg transition-all duration-200">
        Book a 30 min Free Call
        <ArrowRight className="w-3 h-3" />
      </Button>
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
          <span className="text-[#1A2236] font-medium">Connect ClickUp to GoHighLevel: Setup & Automation (2026)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Integration</span>
            <span className="bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[11px] font-semibold px-2.5 py-1 rounded-full">ClickUp</span>
            <span className="bg-[rgba(37,201,125,0.15)] text-[#25C97D] text-[11px] font-semibold px-2.5 py-1 rounded-full">GoHighLevel</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">Workflow Automation</span>
            <span className="bg-[rgba(14,155,240,0.15)] text-[#0E9BF0] text-[11px] font-semibold px-2.5 py-1 rounded-full">2026</span>
          </div>

          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-4 md:mb-5 tracking-[-0.02em]">
            How to Connect ClickUp to GoHighLevel:<br />
            <span className="text-[#F8D000]">Setup, Triggers, Actions & Automation</span>
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
            GoHighLevel holds the customer-facing side of the business: contacts, opportunities, pipeline stages, forms, appointments. ClickUp holds the internal side: tasks, projects, lists, documents. When a deal closes in GoHighLevel, someone still has to open ClickUp and manually create the project. That manual handoff is what the native integration removes.
          </p>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 max-w-6xl">
            This article covers how the ClickUp integration is actually implemented: what it can trigger, what it can create or update, how to set it up, where it stops, and when you need something other than the native connection.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Get Integration Help
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-do-you-connect"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Jump to Setup
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
                5+ years GHL experience · 200+ systems built globally. All integration details verified against official documentation as of September 2026.
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
              <div className="text-sm font-bold text-white mb-2">Need Help Integrating?</div>
              <p className="text-xs text-white/60 leading-relaxed mb-4">We help agencies connect ClickUp and GoHighLevel with custom workflows.</p>
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

            {/* Section: Can You Integrate */}
            <h2 id="can-you-integrate" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-8 mb-4">
              Can You Integrate ClickUp With GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Yes. GoHighLevel provides a native ClickUp integration built into Workflows, with no third-party tool required.</strong> It's configured from inside a workflow (or from Settings → Integrations → ClickUp), and it works in both directions: ClickUp events can start a HighLevel workflow, and HighLevel workflows can create or update items in ClickUp.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is distinct from connecting the two platforms through Zapier or Make, which route data through a separate middleware layer instead of running inside GoHighLevel's own workflow builder. The native integration is available to all accounts with access to Workflows and Integrations; some actions are billed as premium executions, covered below.
            </p>

            {/* Section: How Integration Works */}
            <h2 id="how-integration-works" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Does the ClickUp and GoHighLevel Integration Work?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel manages CRM and customer automation. ClickUp manages project and task execution. The integration is the automation layer connecting the two, and it runs in two distinct directions rather than one continuous sync.
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Direction 1 - ClickUp → HighLevel:</strong> a ClickUp event (a new task, a status change) fires a webhook, which starts a HighLevel trigger, which runs a HighLevel workflow.</li>
              <li><strong className="text-[#1A2236]">Direction 2 - HighLevel → ClickUp:</strong> a HighLevel event (an opportunity stage change, a form submission) runs a workflow, which executes a ClickUp action creating or updating a task, list, or document.</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Both directions use the same building blocks as any other GoHighLevel workflow triggers, actions, filters, and conditions which are covered in full in <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-[#0E9BF0] hover:underline">GHL Scale Up's workflow automation guide</Link>. This article only covers what's specific to the ClickUp steps themselves.
            </p>

            {/* ============================================================
                🖼️ IMAGE INSERTED HERE - Full width, responsive, interactive
                ============================================================ */}
            <div className="my-8 md:my-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-auto bg-[#F8F9FB]">
                <Image
                  src="/blog/clickup-gohighlevel-integration.png"
                  alt="ClickUp and GoHighLevel integration: Native workflow triggers and actions for bidirectional automation"
                  width={1200}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="bg-[#F8F9FB] px-4 py-2.5 text-xs text-[#5C6880] border-t border-[#DDE1E9] flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>ClickUp → GoHighLevel triggers and GoHighLevel → ClickUp actions for native workflow automation</span>
              </div>
            </div>

            {/* Section: How Do You Connect */}
            <h2 id="how-do-you-connect" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Connect ClickUp to GoHighLevel?
            </h2>
            <ol className="space-y-1 mb-4 text-sm text-[#5C6880] list-decimal list-inside">
              <li><strong className="text-[#1A2236]">Check access.</strong> You need Workflows and Integrations access at the sub-account level, plus a ClickUp user with permission to create or update items in the target workspace. Some ClickUp actions run as premium executions, which an agency enables (and can optionally rebill to clients).</li>
              <li><strong className="text-[#1A2236]">Open Workflows.</strong> Automation → Workflows → create or open a workflow.</li>
              <li><strong className="text-[#1A2236]">Add a ClickUp trigger or action.</strong> Search "ClickUp" in the trigger or action list depending on the direction you're building.</li>
              <li><strong className="text-[#1A2236]">Connect ClickUp.</strong> Click Connect Now on the step, or go to Settings → Integrations → ClickUp → Connect, and authorize via OAuth.</li>
              <li><strong className="text-[#1A2236]">Select the workspace/list.</strong> Choose the ClickUp workspace, space, or list the step reads from or writes to.</li>
              <li><strong className="text-[#1A2236]">Configure the step.</strong> Fill in the fields the trigger or action requires task name, assignee, due date, and so on.</li>
              <li><strong className="text-[#1A2236]">Map the data.</strong> Use dynamic values (contact name, opportunity value, form fields) instead of static text, so each run reflects the real record.</li>
              <li><strong className="text-[#1A2236]">Add conditions and filters.</strong> Use If/Else branches to scope execution for example, only create a task for a specific pipeline stage or service type.</li>
              <li><strong className="text-[#1A2236]">Test it.</strong> Run the workflow against a test record, or trigger a small real event for a trigger, then check Execution Logs & Enrollment History for the actual inputs and outputs.</li>
              <li><strong className="text-[#1A2236]">Publish and monitor.</strong> Publish, then watch the same execution logs as real records flow through it.</li>
            </ol>

            {/* Section: What ClickUp Triggers */}
            <h2 id="what-clickup-triggers" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What ClickUp Triggers Can Start a GoHighLevel Workflow?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              These are the triggers currently documented by HighLevel. Each fires from a ClickUp webhook the moment the event happens.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">ClickUp Trigger</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Detects</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Practical Use</th>
                  </tr>
                </thead>
                <tbody>
                  {triggerData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.trigger}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItDetects}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.practicalUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8F5FE] border border-[rgba(14,155,240,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#0E9BF0]" />
                <span className="text-sm font-bold text-[#0E9BF0]">CONTACTLESS BY DEFAULT</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                One detail that matters for every trigger on this list: <strong className="text-[#1A2236]">triggers are contactless by default.</strong> A ClickUp event doesn't automatically attach to a HighLevel contact record. If you need that link, add a Find Contact (or Create Contact) action inside the workflow and pass the email address from the trigger response into it.
              </p>
            </div>

            {/* Section: What Can GoHighLevel Create */}
            <h2 id="what-can-gohighlevel-create" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Can GoHighLevel Create or Update in ClickUp?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              HighLevel's current documentation lists these actions. Not all of them behave the same way some create new objects, some update existing ones, and two are not live yet.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">HighLevel Action</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What It Does in ClickUp</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {actionData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className={`py-3 px-3 font-medium ${item.action.includes('Coming Soon') ? 'text-[#F8D000]' : 'text-[#1A2236]'}`}>{item.action}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.whatItDoes}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FEF2F0] border border-[rgba(220,53,69,0.2)] rounded-xl p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#DC3545]" />
                <span className="text-sm font-bold text-[#DC3545]">COMING SOON NOT YET AVAILABLE</span>
              </div>
              <p className="text-sm text-[#1A2236] leading-relaxed">
                Because two actions are still listed as Coming Soon, any workflow depending on setting a ClickUp custom field value natively isn't fully supported yet treat that specific gap as a current limitation, not an oversight in setup.
              </p>
            </div>

            {/* Section: How Do You Create Tasks */}
            <h2 id="how-do-you-create-tasks" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Create ClickUp Tasks Automatically From GoHighLevel?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              A realistic example, based on HighLevel's own documented use case pattern:
            </p>
            <p className="text-sm md:text-base font-semibold text-[#1A2236] mb-4">
              <strong className="text-[#0E9BF0]">Opportunity moves to "Contract Signed"</strong> → workflow starts → <strong className="text-[#0E9BF0]">condition checks the opportunity's service type</strong> → branches to the matching path → <strong className="text-[#0E9BF0]">Create Space</strong> in ClickUp named for the client → <strong className="text-[#0E9BF0]">Create List</strong> for that service type → <strong className="text-[#0E9BF0]">Create Task</strong> with the first delivery step, assignee, and due date mapped from the opportunity → <strong className="text-[#0E9BF0]">internal notification</strong> sent to the assigned team.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The branching matters here: a single workflow can route "SEO," "Landing Page," and "Google Ads" opportunities into different ClickUp lists and starting tasks based on the opportunity name or a custom field, rather than building a separate workflow per service line.
            </p>

            {/* Section: How Do You Trigger Workflows */}
            <h2 id="how-do-you-trigger-workflows" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              How Do You Trigger GoHighLevel Workflows From ClickUp?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The reverse direction starts with a ClickUp trigger instead of a CRM event: <strong className="text-[#1A2236]">a task's status changes to "Complete"</strong> → the ClickUp trigger fires → <strong className="text-[#1A2236]">a HighLevel workflow starts</strong> → a Find Contact step attaches the record (since the trigger itself is contactless) → the workflow moves the linked opportunity to the next pipeline stage or sends a client update.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              This is triggering a workflow, not synchronizing data. The ClickUp event starts one specific automation it doesn't keep every field on both platforms continuously matched. If you need broader reporting on ClickUp activity, build it deliberately with these triggers rather than assuming it happens automatically.
            </p>

            {/* Section: What Data Can You Pass */}
            <h2 id="what-data-can-you-pass" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Data Can You Pass From GoHighLevel to ClickUp?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Field mapping runs through dynamic values pulled from the record that triggered the workflow:
            </p>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Contact fields</strong> — name, email, phone</li>
              <li><strong className="text-[#1A2236]">Opportunity fields</strong> — name, value, pipeline stage</li>
              <li><strong className="text-[#1A2236]">Form field values</strong> — whatever was submitted</li>
              <li><strong className="text-[#1A2236]">Due dates</strong> — supports relative math (for example, "+7 days" from the trigger date)</li>
              <li><strong className="text-[#1A2236]">Assignees</strong> — via Find User by Name or Email, then mapped into the action</li>
              <li><strong className="text-[#1A2236]">Custom fields</strong> — readable via Find Custom Fields, but writing a new custom field value on the ClickUp side is one of the two Coming Soon actions, so this direction isn't fully supported yet</li>
            </ul>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Anything not exposed as a standard field or a GoHighLevel custom field has to be handled with static values or left out — don't assume every CRM field has a matching ClickUp destination.
            </p>

            {/* Section: Best Use Cases */}
            <h2 id="best-use-cases" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Are the Best ClickUp and GoHighLevel Automation Use Cases?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">New client project creation</strong> — Contract Signed → Create Space, List, and first Task.</li>
              <li><strong className="text-[#1A2236]">Sales-to-delivery handoff</strong> — Opportunity marked Closed Won → Create Task in the delivery team's list with the deal details attached.</li>
              <li><strong className="text-[#1A2236]">Client onboarding tasks</strong> — Onboarding form submitted → Create Task in a "Client Setup" list, comment added with their requirements.</li>
              <li><strong className="text-[#1A2236]">AI-drafted proposals</strong> — Opportunity reaches "Proposal" stage → AI generates the draft → Create New Document saves it to ClickUp for review.</li>
              <li><strong className="text-[#1A2236]">Project-status-driven CRM updates</strong> — ClickUp task marked complete → linked opportunity moves to the next pipeline stage.</li>
              <li><strong className="text-[#1A2236]">Internal notifications</strong> — New comment or attachment on a task → notify the relevant internal team inside the same workflow.</li>
              <li><strong className="text-[#1A2236]">Time-based reporting</strong> — New Time Entry trigger feeds logged hours into an internal tracking workflow.</li>
            </ul>

            {/* Section: Can Replace Handoffs */}
            <h2 id="can-replace-handoffs" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Can GoHighLevel and ClickUp Replace Manual Sales-to-Delivery Handoffs?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              For the moment a deal closes, yes Closed Won can trigger space, list, and task creation in ClickUp without anyone touching either platform. What it doesn't replace is judgment on work that doesn't fit a fixed rule, like scoping a genuinely custom project. The integration handles the repeatable part of the handoff; a human still owns the exceptions.
            </p>

            {/* Section: Do You Need Zapier */}
            <h2 id="do-you-need-zapier" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Do You Need Zapier to Connect ClickUp and GoHighLevel?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Situation</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Best Option</th>
                  </tr>
                </thead>
                <tbody>
                  {zapierDecisionData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 text-[#5C6880]">{item.situation}</td>
                      <td className="py-3 px-3 font-medium text-[#0E9BF0]">{item.bestOption}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              Use the native integration whenever the trigger, action, and field mapping you need already exist it's one less system to maintain and troubleshoot. Reach for Zapier or Make specifically when a required capability, like writing to a ClickUp custom field, isn't live yet, or when a third app needs to sit in the same automation. <Link href="/blog/connect-zapier-to-gohighlevel" className="text-[#0E9BF0] hover:underline">GHL Scale Up's Zapier guide</Link> covers that setup in full, including when native GoHighLevel automation is the better call generally this section is specifically about the ClickUp gap, not Zapier setup itself.
            </p>

            {/* Section: Limitations */}
            <h2 id="limitations" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Are the Limitations of the ClickUp GoHighLevel Integration?
            </h2>
            <ul className="space-y-1 mb-4 text-sm text-[#5C6880] list-disc list-inside">
              <li><strong className="text-[#1A2236]">Two actions are Coming Soon, not live:</strong> Create Custom Field and Update Custom Field Value don't work yet, per HighLevel's own documentation.</li>
              <li><strong className="text-[#1A2236]">Triggers are contactless by default:</strong> a ClickUp event needs an explicit Find Contact/Create Contact step to associate with a CRM record it isn't automatic.</li>
              <li><strong className="text-[#1A2236]">Premium billing applies:</strong> ClickUp actions and triggers run as premium executions billed at standard rates, which an agency can enable and optionally rebill to clients.</li>
              <li><strong className="text-[#1A2236]">ClickUp plan limits some capability:</strong> the integration works on free and paid ClickUp plans, but time tracking and some custom-field behavior may require a paid plan.</li>
              <li><strong className="text-[#1A2236]">Rate limits apply to bulk actions:</strong> creating many ClickUp objects in a burst can hit ClickUp's API rate caps; HighLevel's own guidance recommends spacing bulk actions and using Wait steps between dependent creates (like a list before its tasks).</li>
              <li><strong className="text-[#1A2236]">This is triggered automation, not continuous sync:</strong> an event starts a defined workflow it does not keep every field on both platforms permanently matched in real time.</li>
            </ul>

            {/* Section: Why Not Triggering */}
            <h2 id="why-not-triggering" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Why Is My ClickUp to GoHighLevel Workflow Not Triggering?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Problem</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Likely Cause</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {troubleshootingData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.problem}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.likelyCause}</td>
                      <td className="py-3 px-3 text-[#0E9BF0]">{item.whatToCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: What Stays Where */}
            <h2 id="what-stays-where" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              What Should Stay in GoHighLevel and What Should Stay in ClickUp?
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F8F9FB] border-b border-[#DDE1E9]">
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Function</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Recommended Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-[#1A2236]">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {platformOwnershipData.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#DDE1E9]">
                      <td className="py-3 px-3 font-medium text-[#1A2236]">{item.function}</td>
                      <td className={`py-3 px-3 font-semibold ${item.recommendedPlatform === 'GoHighLevel' ? 'text-[#0E9BF0]' : 'text-[#F8D000]'}`}>{item.recommendedPlatform}</td>
                      <td className="py-3 px-3 text-[#5C6880]">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The integration exists to move specific triggers and data between these two ownership zones not to let either platform take over the other's job.
            </p>

            {/* Section: Is It Worth Using */}
            <h2 id="is-it-worth-using" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Is the ClickUp and GoHighLevel Integration Worth Using?
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Good fit:</strong> agencies and service businesses with a real handoff between a sales/CRM function and a separate delivery team, repeatable onboarding or delivery processes, and existing investment in both platforms.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              <strong className="text-[#1A2236]">Less useful:</strong> businesses barely using ClickUp, or where project execution is simple enough to manage inside GoHighLevel's own task and calendar features without a second system.
            </p>

            {/* Section: Final Verdict */}
            <h2 id="final-verdict" className="text-2xl md:text-3xl font-bold text-[#1C2E4A] mt-10 mb-4">
              Final Verdict
            </h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              GoHighLevel and ClickUp don't need to do the same job. GoHighLevel owns CRM, leads, opportunities, conversations, and customer automation. ClickUp owns tasks, projects, internal execution, and delivery. The integration is worth setting up when the business genuinely needs to move information and trigger action between those two layers not because both platforms happen to offer automation features.
            </p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4">
              The right implementation follows one sequence: what triggers the workflow, what data needs to move, what action needs to happen on the other side, and which platform should permanently own the result.
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
              Need help setting up your ClickUp to GoHighLevel integration?{' '}
              <Link href="/contact" className="text-[#0E9BF0] hover:underline font-medium">Book a free integration assessment</Link>.
            </div>

            {/* Internal Links */}
            <div className="mt-8 pt-6 border-t border-[#DDE1E9]">
              <h3 className="text-base font-bold text-[#1A2236] mb-4">Related Articles in This Series</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-set-up-gohighlevel-workflow-automation" className="text-sm text-[#0E9BF0] hover:underline">GoHighLevel Workflow Automation Guide →</Link>
                <Link href="/blog/connect-zapier-to-gohighlevel" className="text-sm text-[#0E9BF0] hover:underline">Connect Zapier to GoHighLevel →</Link>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl p-8 text-center relative overflow-hidden my-12">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Need Help Integrating ClickUp and GoHighLevel?</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                  We help agencies build custom ClickUp to GoHighLevel workflows for seamless sales-to-delivery handoffs.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1421] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all hover:shadow-lg hover:scale-105">
                  Book Your Free Integration Assessment
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
                GHL Scale Up is a specialised GoHighLevel implementation and SaaS growth agency. Based in India, we serve agencies and businesses across 6 countries with 200+ GoHighLevel builds delivered. This guide reflects direct experience integrating ClickUp with GoHighLevel for seamless sales-to-delivery handoffs. All integration details verified against official documentation as of September 2026.
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