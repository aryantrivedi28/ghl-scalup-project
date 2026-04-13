// app/blog/ghl-pipeline-management/client.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  GitBranch,
  Target,
  Users,
  Calendar,
  MessageCircle,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Settings,
  Zap,
  PieChart,
  LineChart,
  BarChart,
  Filter,
  Eye,
  Flag,
  Trophy
} from 'lucide-react';
import CopyButton from '@/components/blog/CopyButton';

export default function GHLPipelineManagementClient() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = document.querySelectorAll('h2[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    headings.forEach((heading) => observer.observe(heading));

    const progressBar = document.getElementById('progress-bar');
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (progressBar) {
        progressBar.style.width = Math.min(progress, 100) + '%';
      }
    };
    window.addEventListener('scroll', updateProgress);
    
    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
      window.removeEventListener('scroll', updateProgress);
    };
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
    { id: 'why-pipeline', title: '1. Why Pipeline Management Matters' },
    { id: 'stages', title: '2. The 6 Essential Pipeline Stages' },
    { id: 'setup', title: '3. Setting Up Your GHL Pipeline' },
    { id: 'automation', title: '4. Automating Pipeline Movements' },
    { id: 'lead-scoring', title: '5. Lead Scoring & Prioritization' },
    { id: 'metrics', title: '6. Key Pipeline Metrics to Track' },
    { id: 'deal-stages', title: '7. Managing Multiple Deal Stages' },
    { id: 'team-collaboration', title: '8. Team Collaboration & Visibility' },
    { id: 'optimization', title: '9. Pipeline Optimization Strategies' },
    { id: 'conclusion', title: 'Conclusion' },
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
          <span className="text-[#1A2236] font-medium">GHL Pipeline Management Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(248,208,0,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(14,155,240,0.15)] border border-[rgba(14,155,240,0.3)] text-[#0E9BF0] text-[11px] md:text-xs font-semibold tracking-wide uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-4 md:mb-6">
            <GitBranch className="w-3 h-3" />
            Strategy · Pipeline Management
          </div>
          
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-3 md:mb-5 tracking-[-0.02em]">
            GHL Pipeline Management:<br />
            <span className="text-[#F8D000]">From Lead to Closed Deal</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 md:mb-9 max-w-[620px]">
            Master the art of pipeline management in GoHighLevel to track and convert more leads. 
            Build a sales pipeline that turns prospects into paying customers.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white text-sm md:text-base">GS</div>
              <div>
                <div className="text-xs md:text-sm font-medium text-white">GHL Scale Up Team</div>
                <div className="text-[10px] md:text-xs text-white/50">Published March 15, 2026</div>
              </div>
            </div>
            <div className="w-px h-6 md:h-8 bg-white/15" />
            <div className="flex gap-3 md:gap-5">
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <Clock className="w-3 h-3" />
                7 min read
              </span>
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <GraduationCap className="w-3 h-3" />
                Intermediate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 md:gap-16">
          
          {/* Article Content */}
          <main className="min-w-0">
            <p className="text-base md:text-[19px] leading-relaxed text-[#2D3748] mb-8 md:mb-12 pb-6 md:pb-10 border-b border-[#DDE1E9]">
              A sales pipeline is more than just a list of leads. It's a visual representation of your sales process — showing exactly where each lead is in their journey from prospect to customer. 
              <strong className="text-[#1A2236]"> GoHighLevel's pipeline management tools give you complete visibility and control.</strong> Here's how to build and optimize a pipeline that actually closes deals.
            </p>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 my-8 md:my-10">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <Target className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">50</span>%</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">faster deal closure with structured pipeline</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <TrendingUp className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0">3</span>x</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">higher conversion with pipeline automation</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                <Eye className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0">100</span>%</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">visibility into every deal's status</div>
              </div>
            </div>

            {/* Section 1 */}
            <h2 id="why-pipeline" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">1. Why Pipeline Management Matters</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Without a pipeline, leads fall through the cracks. You don't know who to follow up with, when to follow up, or which deals are most likely to close. Your sales process becomes reactive instead of proactive.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">A well-managed pipeline gives you predictability. You can forecast revenue, identify bottlenecks, and focus your energy on the deals that matter most. GHL's pipeline tools make this simple.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">01</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                  <Target className="w-3 h-3 text-[#0E9BF0]" />
                </div>
                The Predictability Principle
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">What Gets Measured Gets Managed</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">When you track every lead through a structured pipeline, you can measure conversion rates at each stage. This tells you exactly where leads are getting stuck — and what to fix.</p>
            </div>

            {/* Section 2 */}
            <h2 id="stages" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">2. The 6 Essential Pipeline Stages</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Every sales pipeline needs clear stages. Here's a proven structure that works for most businesses:</p>
            
            <div className="space-y-3 my-6 md:my-8">
              {[
                { stage: "Lead In", color: "#0E9BF0", description: "New lead enters the system (form fill, call, etc.)" },
                { stage: "Contacted", color: "#25C97D", description: "Initial outreach completed (call, email, SMS)" },
                { stage: "Qualified", color: "#F8D000", description: "Lead meets criteria and is ready for sales conversation" },
                { stage: "Proposal", color: "#0E9BF0", description: "Proposal or quote sent to lead" },
                { stage: "Negotiation", color: "#F8D000", description: "Active back-and-forth on terms" },
                { stage: "Closed Won / Closed Lost", color: "#25C97D", description: "Final outcome of the deal" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#F8F9FB] rounded-lg">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="font-semibold text-[#1C2E4A] text-sm min-w-[100px]">{item.stage}</span>
                  <span className="text-sm text-[#5C6880]">{item.description}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">You can customize these stages for your specific business. A real estate agency might have "Contract Signed" while a SaaS company might have "Demo Completed."</p>

            <div className="bg-[#0B1628] rounded-xl p-5 md:p-7 lg:p-8 my-8 md:my-9 flex gap-3 md:gap-4 items-start">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-[rgba(248,208,0,0.15)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                <Sparkles className="w-4 h-4 text-[#F8D000]" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-[#F8D000] mb-1">Pro Tip</div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">Don't create too many stages. 5-7 stages is optimal. More than that creates confusion and slows down your team. Each stage should represent a meaningful step forward in the sales process.</p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 id="setup" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">3. Setting Up Your GHL Pipeline</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Setting up a pipeline in GHL takes minutes:</p>
            
            <ol className="list-decimal list-inside my-6 md:my-8 space-y-2 md:space-y-3 text-sm md:text-base text-[#5C6880] ml-2 md:ml-4">
              <li>Go to <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">CRM → Pipelines</span></li>
              <li>Click "Create New Pipeline" and name it</li>
              <li>Add your stages in order (Lead In → Contacted → Qualified → etc.)</li>
              <li>Set automation rules for stage transitions</li>
              <li>Assign pipeline to your team members</li>
              <li>Start adding leads to the pipeline</li>
            </ol>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">You can create multiple pipelines for different products or services. For example, a separate pipeline for "High-Ticket Sales" and "Low-Ticket Sales."</p>

            {/* Section 4 */}
            <h2 id="automation" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">4. Automating Pipeline Movements</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This is where GHL shines. You can automate stage movements based on lead behavior:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Lead books a call → Auto-move to "Qualified" stage',
                'Lead opens proposal 3+ times → Auto-move to "Negotiation"',
                'Lead does not respond for 7 days → Auto-move to "Cold" stage',
                'Lead clicks "I am not interested" → Auto-move to "Closed Lost"',
                'Lead pays deposit → Auto-move to "Closed Won"',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Zap className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Automation ensures your pipeline stays accurate without manual data entry. Your team spends less time updating CRM and more time selling.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">04</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F8D000] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#a07a00] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFFBE6] rounded flex items-center justify-center">
                  <Settings className="w-3 h-3 text-[#a07a00]" />
                </div>
                Automation Example
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">The Follow-Up Workflow</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">When a lead enters "Proposal Sent" stage, trigger an automated sequence: Day 2 → Send reminder email, Day 5 → Send case study, Day 7 → If no response, move to "Cold" and notify sales rep.</p>
            </div>

            {/* Section 5 */}
            <h2 id="lead-scoring" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">5. Lead Scoring & Prioritization</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Not all leads are equal. GHL's lead scoring helps you prioritize:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 my-6 md:my-8">
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#25C97D]" />
                  <span className="font-semibold text-[#1C2E4A] text-sm">Hot Lead (80-100)</span>
                </div>
                <p className="text-xs text-[#5C6880]">Contact within 1 hour, prioritize for sales call</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#F8D000]" />
                  <span className="font-semibold text-[#1C2E4A] text-sm">Warm Lead (50-79)</span>
                </div>
                <p className="text-xs text-[#5C6880]">Nurture sequence, contact within 24 hours</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#0E9BF0]" />
                  <span className="font-semibold text-[#1C2E4A] text-sm">Cold Lead (20-49)</span>
                </div>
                <p className="text-xs text-[#5C6880]">Long-term nurture, low priority</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#96A0B5]" />
                  <span className="font-semibold text-[#1C2E4A] text-sm">Unqualified (0-19)</span>
                </div>
                <p className="text-xs text-[#5C6880]">Remove from pipeline or archive</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Score leads based on fit (industry, company size) and engagement (email opens, website visits, form fills). Focus your sales team's time on the highest-scoring leads.</p>

            {/* Section 6 */}
            <h2 id="metrics" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">6. Key Pipeline Metrics to Track</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GHL provides real-time analytics on your pipeline performance:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Conversion rate by stage (Lead In → Contacted, Contacted → Qualified, etc.)',
                'Average time in each stage (where are leads getting stuck?)',
                'Total pipeline value (sum of all open deal values)',
                'Win rate (Closed Won ÷ Total Closed)',
                'Sales velocity (how fast leads move through pipeline)',
                'Aging leads (leads stuck in same stage for too long)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <BarChart className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Review these metrics weekly. If leads are stuck in "Proposal Sent" for 10+ days, your follow-up process needs improvement. If "Qualified" to "Proposal" has low conversion, your qualification criteria might be wrong.</p>

            <div className="border-l-4 border-[#0E9BF0] my-8 md:my-10 pl-4 md:pl-7 py-1">
              <p className="text-base md:text-[22px] font-semibold text-[#1C2E4A] leading-relaxed italic">"Your pipeline metrics don't lie. They tell you exactly where your sales process is broken — if you're willing to listen."</p>
            </div>

            {/* Section 7 */}
            <h2 id="deal-stages" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">7. Managing Multiple Deal Stages</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Different deals require different approaches. GHL lets you create custom pipelines for:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 my-6 md:my-8">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4">
                <div className="font-semibold text-[#1C2E4A] mb-1">Enterprise Sales</div>
                <p className="text-xs text-[#5C6880]">Longer stages, multiple decision-makers, custom proposals</p>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4">
                <div className="font-semibold text-[#1C2E4A] mb-1">E-commerce</div>
                <p className="text-xs text-[#5C6880]">Cart abandonment, post-purchase upsell, retention</p>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4">
                <div className="font-semibold text-[#1C2E4A] mb-1">Real Estate</div>
                <p className="text-xs text-[#5C6880]">Showing scheduled, offer made, inspection, closing</p>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4">
                <div className="font-semibold text-[#1C2E4A] mb-1">SaaS</div>
                <p className="text-xs text-[#5C6880]">Demo booked, trial started, upgrade, churn prevention</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Each pipeline can have its own stages, automation rules, and team assignments. This keeps your sales process organized without forcing a one-size-fits-all approach.</p>

            {/* Section 8 */}
            <h2 id="team-collaboration" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">8. Team Collaboration & Visibility</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GHL's pipeline tools are built for teams:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Assign leads to specific team members',
                'Add internal notes and comments on deals',
                'Set task reminders for follow-ups',
                'Track team member performance metrics',
                'Get notified when deals move stages',
                'View team pipeline in real-time',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Users className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Everyone on your team sees the same data. No more "I thought you were following up with that lead." Complete transparency across your sales organization.</p>

            {/* Section 9 */}
            <h2 id="optimization" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">9. Pipeline Optimization Strategies</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Once your pipeline is running, continuously improve it:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'A/B test different follow-up sequences for each stage',
                'Remove stages that do not add value (keep it simple)',
                'Add qualification questions to prevent bad leads from entering',
                'Create win/loss analysis for deals that close',
                'Review pipeline weekly with your team',
                'Set pipeline targets for each team member',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <TrendingUp className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The best pipelines are never "finished." They evolve as your business grows, your products change, and your customers' needs shift.</p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">Conclusion: Build Your Pipeline Today</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">A structured pipeline is the difference between chaos and clarity in your sales process. Without it, you're guessing. With it, you're managing.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Start with the 6-stage pipeline above. Get it working. Then optimize based on your data. Within 30 days, you'll have a clear picture of your sales process — and a system for improving it.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">GHL gives you the tools. Now it's up to you to use them. Build your pipeline today and watch your conversion rates climb.</p>

            {/* CTA Block */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden my-12 md:my-16">
              <div className="absolute -top-14 -right-14 w-72 h-72 bg-[radial-gradient(circle,rgba(248,208,0,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-3.5 py-1 md:py-1.5 rounded-full mb-4 md:mb-5">GHL Scale Up</div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3">Ready to Optimize Your Sales Pipeline?</h2>
                <p className="text-sm md:text-base text-white/65 max-w-md mx-auto mb-6 md:mb-8">We've built pipelines for 50+ businesses. Let us help you create a sales process that actually closes deals.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1628] font-bold px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all">
                    Book a free strategy call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base hover:bg-white/20 transition-all">See our work</Link>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar - Sticky */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            {/* Table of Contents */}
            <nav className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-5 md:p-6">
              <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4 flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                In this guide
              </div>
              <ul className="space-y-0.5">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={`block w-full text-left text-xs md:text-sm py-1.5 px-2 rounded transition-all ${
                        activeId === item.id
                          ? 'bg-[#E8F5FE] text-[#0E9BF0] font-medium'
                          : 'text-[#5C6880] hover:bg-white hover:text-[#1A2236]'
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Card */}
            <div className="bg-[#0B1628] rounded-xl p-5 md:p-6">
              <div className="text-sm md:text-base font-bold text-white mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#F8D000]" />
                Want us to build your pipeline?
              </div>
              <div className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 md:mb-5">We've built sales pipelines for 50+ businesses. Stages, automation, scoring — all configured for your sales process.</div>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1628] font-bold py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] transition-all">
                Get a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ghlscaleup.com/blog/ghl-pipeline-management" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://ghlscaleup.com/blog/ghl-pipeline-management&text=GHL+Pipeline+Management%3A+From+Lead+to+Closed+Deal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <Twitter className="w-3 h-3" />
                  X
                </a>
                <CopyButton />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      <section className="border-t border-[#DDE1E9] py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mb-6 md:mb-8">Related articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <Link href="/blog/gohighlevel-funnel-builder-features" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">GoHighLevel</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">GoHighLevel Funnel Builder: 7 Features Top Agencies Use to Build Faster</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
            <Link href="/blog/ghl-lead-generation-strategies" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">Marketing</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">How to Generate High-Quality Leads Using GHL</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
            <Link href="/blog/ghl-ai-workflows-lead-response" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">AI</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">GHL AI Workflows to Respond to Leads in Under 10 Seconds</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}