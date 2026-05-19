// app/services/ai-voice-agent/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import { 
  Phone, 
  Target, 
  Calendar, 
  MessageSquare, 
  FileText, 
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mic,
  Bot,
  Users,
  Zap,
  Sparkles,
  Headphones
} from 'lucide-react';

export const metadata = {
  title: 'GHL AI Voice Agent & Call Handling Services | GHL Scale Up',
  description: '24/7 AI receptionist that answers calls, qualifies leads, books appointments, and handles missed calls. 200+ projects. Get a free AI voice consultation.',
  keywords: 'AI voice agent, GHL call handling, AI receptionist, missed call text back, voice AI automation',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/ai-voice-agent',
  },
};

// Service Schema Component
const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GoHighLevel AI Voice Agent & Call Handling",
    "alternateName": "GHL AI Receptionist",
    "description": "Complete AI voice agent deployment for GoHighLevel including 24/7 AI receptionist, lead qualification, appointment booking, missed call text-back, call transcription and notes, and CRM integration. Answer 100% of calls and book appointments 24/7 with natural-sounding AI that qualifies leads automatically.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "GHL Scale Up",
      "url": "https://www.ghlscaleup.com",
      "logo": "https://www.ghlscaleup.com/web-app-manifest-192x192.png",
      "sameAs": [
        "https://www.linkedin.com/company/ghl-scale-up",
        "https://x.com/GHLScaleUp"
      ]
    },
    "serviceType": "AI Voice Automation",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Voice Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic AI Voice Agent"
          },
          "price": "1497",
          "priceCurrency": "USD",
          "description": "Single call flow AI receptionist"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced Voice AI Suite"
          },
          "price": "2997",
          "priceCurrency": "USD",
          "description": "Multi-flow AI with full integration"
        }
      ]
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Service Businesses, Real Estate, Medical Practices, Home Services"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free AI voice consultation"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function AIVoiceAgentPage() {
  // Related blog posts for this service
  const relatedBlogs = [
    {
      slug: 'gohighlevel-conversational-ai-data-storage',
      title: 'Does GoHighLevel Conversation AI Save Data to Your CRM?',
      excerpt: 'GoHighLevel Conversation AI does save some data to your CRM. Here\'s exactly what gets captured, what doesn\'t, and how AI voice agents integrate with your system.',
      readTime: '15 min read',
      date: 'May 12, 2026'
    },
    {
      slug: 'gohighlevel-missed-call-text-back',
      title: 'GoHighLevel Missed Call Text Back: How It Works + Full Setup Guide',
      excerpt: 'GoHighLevel\'s missed call text back sends an automatic SMS within 15 seconds of a missed call recovering leads before they call a competitor.',
      readTime: '16 min read',
      date: 'May 7, 2026'
    },
    {
      slug: 'how-to-set-up-gohighlevel-workflow-automation',
      title: 'How to Set Up GoHighLevel Workflow Automation for Beginners',
      excerpt: 'Step-by-step guide to workflow automation that integrates perfectly with your AI voice agent for follow-ups and lead nurturing.',
      readTime: '19 min read',
      date: 'May 6, 2026'
    }
  ];

  return (
    <>
      {/* Add Service Schema to Head */}
      <ServiceSchema />
      
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'AI Voice Agent & Call Handling' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                <Sparkles className="h-3 w-3" />
                GHL Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                AI Voice Agent &<br />
                <span className="text-[#F8D000]">Call Handling</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We deploy <strong className="text-white/90 font-medium">24/7 AI receptionists that answer inbound calls, qualify leads, book appointments, and trigger missed-call text-backs</strong> so you never miss a call, day or night.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Voice AI Consultation →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Voice AI Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Calls answered, never missed</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">&lt;10s</div>
                  <div className="text-[0.78rem] text-white/50">Response time to inbound calls</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">24/7</div>
                  <div className="text-[0.78rem] text-white/50">Availability without hiring night staff</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">70%</div>
                  <div className="text-[0.78rem] text-white/50">Less time spent on phone qualification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              What's Included
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Everything You Need for<br />
              <span className="text-[#0E9BF0]">Intelligent Call Handling</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Your AI voice agent handles calls like a human receptionist but works 24/7, never gets tired, and always follows your script.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Phone className="w-5 h-5" />, color: 'blue', title: '24/7 AI Receptionist', description: 'Your AI voice agent answers every call, day or night. No more voicemail, no more missed opportunities. The AI engages callers in natural conversation.' },
              { icon: <Target className="w-5 h-5" />, color: 'green', title: 'Lead Qualification', description: 'AI asks qualifying questions, captures caller information, and scores leads based on responses. Only qualified leads are forwarded to your sales team.' },
              { icon: <Calendar className="w-5 h-5" />, color: 'yellow', title: 'Appointment Booking', description: 'AI checks calendar availability, books appointments in real-time, and sends confirmation texts or emails. Reduce no-shows with automated reminders.' },
              { icon: <MessageSquare className="w-5 h-5" />, color: 'blue', title: 'Missed Call Text-Back', description: 'When you miss a call, AI automatically sends a text message to the caller: "Sorry we missed you! Click here to book a time." No lead goes cold.' },
              { icon: <FileText className="w-5 h-5" />, color: 'green', title: 'Call Transcription & Notes', description: 'Every conversation is transcribed and summarized. Key details, qualifications, and action items are logged directly in your CRM for follow-up.' },
              { icon: <RefreshCw className="w-5 h-5" />, color: 'yellow', title: 'CRM Integration', description: 'AI logs calls, creates contacts, updates pipelines, and triggers automations in your GoHighLevel CRM. Seamless handoff to your team.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 ${
                  item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' : 
                  item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]' : 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
                <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                Is AI Voice Agent & Call Handling<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Every missed call is a missed opportunity. Studies show that 80% of callers who reach voicemail hang up and don't leave a message. AI voice agents ensure every call is answered, every lead is captured.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">AI voice agents make sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> A service business that books appointments (home services, real estate, medical)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Getting calls during off-hours that go to voicemail</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Spending too much time on qualifying calls</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Wanting to scale without hiring additional receptionists</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Losing leads because your team can't answer every call immediately</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Missed Calls</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">80% of callers hang up when they reach voicemail. They don't leave a message. They call your competitor instead. If you're missing calls, you're losing revenue.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our AI voice agents answer every call, qualify every lead, and book appointments 24/7. No more voicemail. No more missed opportunities.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">80%</div>
                  <div className="text-[0.78rem] text-white/50">Callers hang up on voicemail</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">More appointments booked with AI</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">$10k+</div>
                  <div className="text-[0.78rem] text-white/50">Saved annually vs. human receptionist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our Voice AI Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Deploy Your<br />
              <span className="text-[#0E9BF0]">AI Voice Agent</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A proven process to deploy AI that sounds human and delivers results.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Call Flow Design', description: 'We map out every call scenario new leads, existing customers, appointment requests, questions, and escalations. Your AI voice agent follows a script designed for your business.' },
              { title: 'Voice & Personality Training', description: 'We train your AI voice agent with your brand voice. Choose from natural voices that sound human, not robotic. We customize greetings, tone, and conversation style.' },
              { title: 'Integration Setup', description: 'We connect your AI voice agent to GoHighLevel CRM, calendar systems, and phone lines. Calls are logged, leads are captured, and appointments are booked automatically.' },
              { title: 'Testing & Calibration', description: 'We test every call path, edge case, and integration. We fine-tune responses, improve accuracy, and ensure the AI handles calls naturally and effectively.' },
              { title: 'Launch & Monitoring', description: 'We launch your AI voice agent and monitor performance. Continuous improvement ensures the agent gets smarter and more helpful over time.' },
            ].map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[#E8EDF4] last:border-b-0">
                <div className="w-16 h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center text-[0.9rem] font-extrabold text-[#F8D000] flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Free Resources
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Read Our<br />
              <span className="text-[#0E9BF0]">AI Voice & Automation Guides</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Learn more about AI voice agents and call handling automation with these in-depth articles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((blog, index) => (
              <Link 
                key={index}
                href={`/blog/${blog.slug}`}
                className="group bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-[0.65rem] text-[#5C6880] mb-2">
                    <span className="text-[#0E9BF0] font-semibold">AI Voice & Automation</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[0.75rem] text-[#5C6880] leading-relaxed mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all mt-auto">
                    Read Full Guide <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Answer Every Call<br />
            <span className="text-[#F8D000]">24 Hours a Day, 7 Days a Week?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free AI voice consultation. We'll show you how an AI voice agent can capture more leads, book more appointments, and save your team hours every week.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Voice AI Consultation →
            </Link>
            <Link href="mailto:aryan@finzie.co" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
              Or Email Us Directly
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Common Questions About<br />
              <span className="text-[#0E9BF0]">AI Voice Agents</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'Does the AI voice agent sound robotic?', a: 'No. We use advanced natural language processing and realistic AI voices that sound human. Callers often don\'t realize they\'re talking to AI. You can choose from multiple voices to match your brand.' },
              { q: 'Can the AI book appointments directly in my calendar?', a: 'Yes. The AI voice agent integrates with your calendar system and can check availability, book appointments, and send confirmations in real-time. No manual entry required.' },
              { q: 'What happens if the AI can\'t answer a question?', a: 'You can set up escalation rules. The AI can offer to transfer to a human, collect contact info for follow-up, or email the question to your team. You control how it handles every scenario.' },
              { q: 'Does the AI work with my existing phone number?', a: 'Yes. We can set up the AI voice agent to answer calls to your existing business number, or provide a new number. No phone system changes required.' },
              { q: 'How long does setup take?', a: 'Basic voice agent setup takes 1-2 weeks. More complex setups with multiple call flows, custom integrations, and advanced logic take 2-3 weeks.' },
              { q: 'What about missed calls?', a: 'The AI voice agent answers every call there are no missed calls. If it can\'t help, it collects caller info for follow-up or transfers to your team if available.' },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#E8EDF4]">
                <details className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors">
                    {faq.q}
                    <span className="text-[0.7rem] text-[#8A9BB0] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed pt-2 pb-3">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Related GHL Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Maximize Your Voice AI Potential<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Capture leads from your AI voice agent and manage them effectively with a properly configured GHL CRM system.', href: '/services/crm-setup', icon: <Users className="w-5 h-5" /> },
              { title: 'Workflow Automation', description: 'Trigger follow-up automations based on voice agent conversations assign tasks, send emails, update pipelines.', href: '/services/workflow-automation', icon: <Zap className="w-5 h-5" /> },
              { title: 'AI Chatbot', description: 'Combine voice AI with text-based chatbots for complete 24/7 omnichannel lead capture and support.', href: '/services/ai-chatbot', icon: <Bot className="w-5 h-5" /> },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3 text-[#0E9BF0]">
                  {service.icon}
                </div>
                <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand 
        title='Stop Missing Calls.<br /><span class="hl-yellow">Let AI Answer Every One.</span>'
        description="Every call is a potential customer. Our AI voice agents answer 100% of your calls, 24/7, and book appointments while you sleep. Book your free consultation today."
        primaryText="Book Your Free Voice AI Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}