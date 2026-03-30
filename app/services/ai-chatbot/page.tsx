// app/services/ghl/ai-chatbot/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'GHL AI Chatbot & Conversation AI Services | GHL Scale Up',
  description: 'AI-powered chatbots for lead qualification, FAQ handling, appointment booking, and 24/7 customer support. 200+ projects. Get a free AI consultation.',
  keywords: 'GHL AI chatbot, conversation AI, lead qualification chatbot, AI appointment booking, GoHighLevel AI'
};

export default function AIChatbotPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'AI Chatbot & Conversation AI' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                GHL Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                AI Chatbot &<br />
                <span className="text-[#F8D000]">Conversation AI</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We build <strong className="text-white/90 font-medium">AI-powered chatbots that qualify leads, answer FAQs, book appointments, and provide 24/7 customer support</strong> — all integrated directly with your GoHighLevel CRM.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free AI Consultation →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">AI Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">24/7</div>
                  <div className="text-[0.78rem] text-white/50">Lead qualification never sleeps</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">&lt;10s</div>
                  <div className="text-[0.78rem] text-white/50">Instant lead responses</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">70%</div>
                  <div className="text-[0.78rem] text-white/50">Less time spent on lead qualification</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Consistent lead experience</div>
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
              <span className="text-[#0E9BF0]">Intelligent AI Conversations</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Your AI chatbot works 24/7 to qualify leads, answer questions, and book appointments — so your team focuses on closing deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🤖', color: 'blue', title: 'Lead Qualification Chatbot', description: 'AI-powered chatbot that asks qualifying questions, captures contact info, and scores leads based on responses. Only qualified leads reach your sales team.' },
              { icon: '❓', color: 'green', title: 'FAQ & Knowledge Base', description: 'Train your AI on your products, services, and common questions. The chatbot answers customer queries instantly — 24/7 — without human intervention.' },
              { icon: '📅', color: 'yellow', title: 'Appointment Booking Bot', description: 'AI chatbot that checks availability, books appointments, and sends calendar invites. Reduce no-shows with automated reminders.' },
              { icon: '🎯', color: 'blue', title: 'Lead Routing & Tagging', description: 'Auto-tag leads based on conversation data and route them to the right sales rep or pipeline stage. Personalized follow-ups start immediately.' },
              { icon: '🔗', color: 'green', title: 'CRM Integration', description: 'Seamless integration with GoHighLevel CRM. Every conversation is logged, contacts are created or updated, and follow-up automations are triggered.' },
              { icon: '📊', color: 'yellow', title: 'Analytics & Insights', description: 'Track conversation volume, qualification rates, common questions, and conversion metrics. Data-driven optimization for better results.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-3.5 ${
                  item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 
                  item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)]' : 'bg-[rgba(248,208,0,0.12)]'
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
                Is AI Chatbot & Conversation AI<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Your website visitors expect instant answers. If you're not available 24/7, you're losing leads to competitors who are. An AI chatbot ensures every visitor gets immediate response — no matter the time or day.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">AI chatbots make sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Getting traffic but not capturing leads after hours</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Receiving the same questions repeatedly from customers</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Looking to scale lead qualification without hiring more staff</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Wanting to book appointments automatically from your website</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> Needing to provide 24/7 customer support without overnight staff</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Missed Leads</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Leads expect instant responses. If they visit your website and don't get an answer within minutes, they move to your competitor. Most businesses lose 30-50% of after-hours leads because no one is available.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our AI chatbots capture every lead, answer every question, and book appointments 24/7 — so you never miss an opportunity, no matter when it comes in.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">50%</div>
                  <div className="text-[0.78rem] text-white/50">Leads lost without instant response</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">24/7</div>
                  <div className="text-[0.78rem] text-white/50">Availability without hiring night staff</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">70%</div>
                  <div className="text-[0.78rem] text-white/50">Time saved on lead qualification</div>
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
              Our AI Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Build Your<br />
              <span className="text-[#0E9BF0]">AI Chatbot</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A strategic approach to building AI that understands your business and serves your customers.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Conversation Design', description: 'We map out your customer journey and design conversation flows for every scenario — lead qualification, FAQ, appointment booking, and escalation to human agents.' },
              { title: 'AI Training', description: 'We train your AI on your products, services, policies, and common questions. The chatbot learns your business and delivers accurate, helpful responses.' },
              { title: 'Integration Setup', description: 'We connect your chatbot to GoHighLevel CRM, calendar systems, and other tools. Leads are captured, tagged, and routed automatically.' },
              { title: 'Testing & Refinement', description: 'We test every conversation path, edge case, and integration. We refine responses based on real interactions to improve accuracy and conversion.' },
              { title: 'Launch & Monitoring', description: 'We launch your AI chatbot and monitor performance. Continuous learning ensures the bot gets smarter and more helpful over time.' },
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

      {/* CTA */}
      <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
            Ready to Work 24/7<br />
            <span className="text-[#F8D000]">With Your AI Assistant?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free AI consultation. We'll show you how an AI chatbot can capture more leads, answer more questions, and book more appointments — while your team sleeps.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free AI Consultation →
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
              <span className="text-[#0E9BF0]">AI Chatbots</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How smart is the AI chatbot?', a: 'Our AI chatbots are trained on your specific business — your products, services, policies, and common questions. They understand context, handle complex questions, and escalate to humans when needed. The more conversations it has, the smarter it gets.' },
              { q: 'Can the chatbot book appointments?', a: 'Yes. The AI chatbot can check availability, book appointments, and send calendar invites — all integrated with your calendar system. It can also handle rescheduling and cancellations.' },
              { q: 'What happens if the chatbot can\'t answer a question?', a: 'You can set up escalation rules. When the AI can\'t answer, it can offer to connect to a human, collect contact information for follow-up, or email the question to your team.' },
              { q: 'Where can I put the chatbot?', a: 'Your AI chatbot can be embedded on your website, in your GHL funnels, or connected to WhatsApp and Facebook Messenger. It works anywhere you have traffic.' },
              { q: 'How long does AI setup take?', a: 'Basic chatbots with FAQ and lead qualification take 1-2 weeks. More complex chatbots with booking, integrations, and advanced logic take 2-3 weeks. We provide a timeline during consultation.' },
              { q: 'Do I need technical skills to manage the chatbot?', a: 'No. We provide training on how to update responses, add new FAQs, and review conversations. You can easily manage your chatbot without technical skills.' },
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
              Maximize Your AI's Potential<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Capture leads from your AI chatbot and manage them effectively with a properly configured GHL CRM system.', href: '/services/ghl/crm-setup' },
              { title: 'Workflow Automation', description: 'Trigger follow-up automations based on chatbot conversations — assign tasks, send emails, update pipelines.', href: '/services/ghl/workflow-automation' },
              { title: 'AI Voice Agent', description: 'Extend AI to phone calls with voice agents that answer calls, qualify leads, and book appointments just like your chatbot.', href: '/services/ghl/ai-voice-agent' },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
                <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand 
        title='Stop Losing Leads While You Sleep.<br /><span class="hl-yellow">Let AI Work 24/7.</span>'
        description="Every visitor to your website is a potential customer. Our AI chatbots capture, qualify, and convert them — even when your team is offline. Book your free consultation today."
        primaryText="Book Your Free AI Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}