// app/blog/ghl-ai-workflows-lead-response/client.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Bot,
  MessageCircle,
  Phone,
  Calendar,
  Mail,
  Users,
  TrendingUp,
  ArrowRight,
  Copy,
  Linkedin,
  Twitter,
  BookOpen,
  Settings,
  Brain,
  Rocket,
  Target,
  Gauge,
  Timer,
  ThumbsUp
} from 'lucide-react';
import CopyButton from '@/components/blog/CopyButton';

export default function GHLAIWorkflowsClient() {
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
    { id: 'why-ai-matters', title: '1. Why AI Lead Response Matters' },
    { id: 'ai-chatbot', title: '2. AI Chatbot for Instant Qualification' },
    { id: 'ai-voice-agent', title: '3. AI Voice Agent for Call Handling' },
    { id: 'sms-automation', title: '4. SMS & WhatsApp Automation' },
    { id: 'email-sequences', title: '5. AI-Powered Email Sequences' },
    { id: 'booking-system', title: '6. Automated Booking System' },
    { id: 'follow-up', title: '7. Smart Follow-Up Sequences' },
    { id: 'lead-scoring', title: '8. AI Lead Scoring & Routing' },
    { id: 'analytics', title: '9. Tracking & Optimization' },
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
          <span className="text-[#1A2236] font-medium">GHL AI Workflows Guide</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(14,155,240,0.15)] border border-[rgba(14,155,240,0.3)] text-[#0E9BF0] text-[11px] md:text-xs font-semibold tracking-wide uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-4 md:mb-6">
            <Brain className="w-3 h-3" />
            AI · Automation
          </div>
          
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-3 md:mb-5 tracking-[-0.02em]">
            GHL AI Workflows to Respond<br />
            to Leads in <span className="text-[#F8D000]">Under 10 Seconds</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 md:mb-9 max-w-[620px]">
            Build an AI-powered lead response system that qualifies, books, and follows up automatically. 
            Transform your lead response time from hours to seconds.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white text-sm md:text-base">GS</div>
              <div>
                <div className="text-xs md:text-sm font-medium text-white">GHL Scale Up Team</div>
                <div className="text-[10px] md:text-xs text-white/50">Published April 1, 2026</div>
              </div>
            </div>
            <div className="w-px h-6 md:h-8 bg-white/15" />
            <div className="flex gap-3 md:gap-5">
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <Clock className="w-3 h-3" />
                6 min read
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
              Most businesses take hours — sometimes days — to respond to leads. By then, the lead has already contacted three competitors. 
              <strong className="text-[#1A2236]"> GoHighLevel's AI workflows change this completely.</strong> You can build systems that respond in under 10 seconds, qualify leads automatically, and book meetings while you sleep.
            </p>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 my-8 md:my-10">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <Timer className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">10</span>sec</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">average response time with AI workflows</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <Rocket className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">5</span>x</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">higher conversion rate with instant response</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                <ThumbsUp className="w-8 h-8 text-[#0E9BF0] mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0">24</span>/7</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">lead qualification without human intervention</div>
              </div>
            </div>

            {/* Section 1 */}
            <h2 id="why-ai-matters" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">1. Why AI Lead Response Matters</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Research shows that responding to a lead within 5 minutes increases conversion rates by 9x compared to responding after 30 minutes. But most businesses can't maintain that speed manually — especially after hours.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">AI workflows inside GoHighLevel solve this by automating the entire first touch. When a lead fills out a form, sends an SMS, or calls your number, AI can respond instantly — qualifying them, answering questions, and moving them toward a booked call.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">01</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                  <Target className="w-3 h-3 text-[#0E9BF0]" />
                </div>
                The Speed Advantage
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">First to Respond Wins 78% of the Time</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">When you respond within 10 seconds, you're not just answering a question — you're building trust and momentum. The lead feels valued, and you've already differentiated yourself from competitors who take hours to reply.</p>
            </div>

            {/* Section 2 */}
            <h2 id="ai-chatbot" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">2. AI Chatbot for Instant Qualification</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GoHighLevel's AI chatbot can be embedded on your website, landing pages, or even within funnels. When a visitor arrives, the chatbot can initiate a conversation, ask qualifying questions, and route qualified leads directly to your calendar.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Set up your chatbot to ask 2-3 key questions: "What service are you interested in?", "What's your budget?", "When would you like to start?" Based on the answers, the chatbot can book a call, send a quote, or escalate to a human.</p>

            <div className="bg-[#0B1628] rounded-xl p-5 md:p-7 lg:p-8 my-8 md:my-9 flex gap-3 md:gap-4 items-start">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-[rgba(37,201,125,0.15)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                <Bot className="w-4 h-4 text-[#25C97D]" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-[#25C97D] mb-1">Pro Tip</div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">Don't try to replace human conversation completely. Use the chatbot to qualify and schedule — then let a human handle the actual sales conversation. This gives you speed without losing the personal touch.</p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 id="ai-voice-agent" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">3. AI Voice Agent for Call Handling</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">One of GHL's most powerful features is the AI voice agent. It can answer inbound calls 24/7, have natural conversations with callers, and book appointments directly into your calendar.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The voice agent can handle common questions: "What are your hours?", "How much does it cost?", "Do you serve my area?" — and when a lead is ready to book, it sends them a calendar link or books them directly.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">03</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F8D000] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#a07a00] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFFBE6] rounded flex items-center justify-center">
                  <Phone className="w-3 h-3 text-[#a07a00]" />
                </div>
                Real-World Example
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Home Service Business — 70% Call Automation</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">A home services client installed GHL's AI voice agent and now 70% of their inbound calls are handled completely by AI — booking appointments, answering pricing questions, and routing emergency calls to a human. Their response time dropped from 2 hours to under 30 seconds.</p>
            </div>

            {/* Section 4 */}
            <h2 id="sms-automation" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">4. SMS & WhatsApp Automation</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Text messages have a 98% open rate and are typically read within 3 minutes. GHL's SMS and WhatsApp automation lets you respond to inbound texts instantly with pre-built workflows.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Set up keyword triggers:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Lead texts "pricing" → AI sends pricing guide + calendar link',
                'Lead texts "hours" → AI sends business hours + contact info',
                'Lead texts "book" → AI sends scheduling link',
                'Lead texts "help" → AI escalates to human agent',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The entire conversation happens without any human intervention — and the lead feels like they're talking to a real person.</p>

            {/* Section 5 */}
            <h2 id="email-sequences" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">5. AI-Powered Email Sequences</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">When a lead fills out a form, GHL can trigger an email sequence immediately. The first email goes out in under 10 seconds — faster than any human can type.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Structure your email sequence:</p>
            
            <ol className="list-decimal list-inside my-6 md:my-8 space-y-2 md:space-y-3 text-sm md:text-base text-[#5C6880] ml-2 md:ml-4">
              <li>Email 1 (0 min): "Thanks for reaching out — here's what happens next"</li>
              <li>Email 2 (2 hours): "Quick question about your project"</li>
              <li>Email 3 (24 hours): "Case study from a similar client"</li>
              <li>Email 4 (48 hours): "Final opportunity to book a call"</li>
            </ol>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The sequence runs automatically, nurturing leads while you focus on other work.</p>

            <div className="border-l-4 border-[#0E9BF0] my-8 md:my-10 pl-4 md:pl-7 py-1">
              <p className="text-base md:text-[22px] font-semibold text-[#1C2E4A] leading-relaxed italic">"The money is in the follow-up. AI doesn't get tired, doesn't forget, and doesn't hesitate to send that fourth email."</p>
            </div>

            {/* Section 6 */}
            <h2 id="booking-system" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">6. Automated Booking System</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The end goal of most AI workflows is to book a call. GHL's calendar integration lets you embed scheduling links in chatbots, SMS responses, and emails.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">When a lead is qualified, the AI can:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Send a personalized calendar link',
                'Check availability in real-time',
                'Send calendar invites automatically',
                'Add events to your Google Calendar',
                'Send reminders before the call',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">The lead books their own call without ever speaking to a human — and shows up ready to talk because they've already been qualified.</p>

            {/* Section 7 */}
            <h2 id="follow-up" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">7. Smart Follow-Up Sequences</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Not every lead books immediately. That's where smart follow-up sequences come in. GHL's AI can track lead behavior and trigger different follow-up messages based on what they did or didn't do.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">For example:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Lead opened email but didnt book → Send a reminder 2 hours later',
                'Lead clicked pricing link → Send a case study about ROI',
                'Lead visited website 3 times → Send a special offer',
                'Lead didnt open any emails → Try SMS follow-up',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <Sparkles className="w-4 h-4 text-[#0E9BF0] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">This is where AI truly shines — not just sending messages, but sending the right message at the right time based on lead behavior.</p>

            {/* Section 8 */}
            <h2 id="lead-scoring" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">8. AI Lead Scoring & Routing</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GHL's AI can score leads based on their interactions — how many emails they opened, which pages they visited, what questions they answered.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">High-scoring leads can be routed directly to your calendar. Low-scoring leads go into a nurture sequence. This ensures your sales team only talks to leads who are actually ready to buy.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">You can also route leads to different team members based on location, budget, or service interest — all automatically.</p>

            {/* Section 9 */}
            <h2 id="analytics" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">9. Tracking & Optimization</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">GHL provides detailed analytics on your AI workflows:</p>
            
            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'Response time metrics',
                'Qualification rate',
                'Booking rate',
                'Email open and click rates',
                'SMS delivery and response rates',
                'AI vs human handoff rates',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <TrendingUp className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Use these metrics to continuously improve your workflows. Test different messaging, timing, and channels to find what converts best for your audience.</p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">Conclusion: Respond Faster, Win More</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">AI workflows inside GoHighLevel aren't complicated to set up. Start with one channel — chatbot, SMS, or voice agent — and build from there.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The goal isn't to replace humans. It's to handle the first touch, qualify leads, and book calls so your team only talks to people who are ready to buy.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">In a world where most businesses take hours to respond, being the one that responds in seconds is a massive competitive advantage.</p>

            {/* CTA Block */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden my-12 md:my-16">
              <div className="absolute -top-14 -right-14 w-72 h-72 bg-[radial-gradient(circle,rgba(248,208,0,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-3.5 py-1 md:py-1.5 rounded-full mb-4 md:mb-5">GHL Scale Up</div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3">Ready to Automate Your Lead Response?</h2>
                <p className="text-sm md:text-base text-white/65 max-w-md mx-auto mb-6 md:mb-8">We've built AI workflows for 50+ agencies. Let us help you respond to leads in under 10 seconds.</p>
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
                Want us to build your AI workflows?
              </div>
              <div className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 md:mb-5">We've built AI lead response systems for 50+ agencies. Chatbots, voice agents, SMS — all integrated.</div>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1628] font-bold py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] transition-all">
                Get a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this guide</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ghlscaleup.com/blog/ghl-ai-workflows-lead-response" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://ghlscaleup.com/blog/ghl-ai-workflows-lead-response&text=GHL+AI+Workflows+to+Respond+to+Leads+in+Under+10+Seconds" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
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
            <Link href="/blog/ghl-white-label-saas-guide" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">SaaS</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">How to Set Up GoHighLevel White-Label SaaS: Complete Guide</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
            <Link href="/blog/freelancer-to-ghl-saas-founder" className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">Business</div>
              <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">From Freelancer to GHL SaaS Founder: Recurring Revenue</h4>
              <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}