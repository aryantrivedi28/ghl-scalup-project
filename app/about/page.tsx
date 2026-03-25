// app/about/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'About GHL Scale Up — GoHighLevel Expert Agency by Finzie',
  description: 'Meet the team behind GHL Scale Up. Founded by Aryan Trivedi. 200+ projects, 6 countries. Learn our story, team, and values.'
};

const founder = {
  name: 'Aryan Trivedi',
  initials: 'AT',
  gradient: 'linear-gradient(135deg, #0E9BF0, #25C97D)',
  bio: 'Aryan started Finzie as a freelancer network in 2020, working with US and UK agencies. After building 200+ GoHighLevel systems personally, he saw the need for a dedicated GHL agency. GHL Scale Up was born to give businesses a partner who knows the platform inside out — and nothing else.'
};

const coreTeam = [
  {
    name: 'Priya Sharma',
    role: 'GHL Solutions Architect',
    initials: 'PS',
    gradient: 'linear-gradient(135deg, #F8D000, #0E9BF0)',
    bio: 'Leads CRM architecture and pipeline design. 4+ years of GHL experience.'
  },
  {
    name: 'Rahul Mehta',
    role: 'Head of Automation',
    initials: 'RM',
    gradient: 'linear-gradient(135deg, #25C97D, #0E9BF0)',
    bio: 'Specializes in AI workflows and complex automation logic.'
  },
  {
    name: 'Neha Gupta',
    role: 'Funnel & Design Lead',
    initials: 'NG',
    gradient: 'linear-gradient(135deg, #0E9BF0, #F8D000)',
    bio: 'Creates high-converting landing pages and sales funnels.'
  }
];

const experts = [
  {
    name: 'Vikram Singh',
    role: 'Senior GHL Developer',
    initials: 'VS',
    gradient: 'linear-gradient(135deg, #0E9BF0, #25C97D)',
    bio: 'Custom API integrations, webhooks, and SaaS mode.'
  },
  {
    name: 'Anjali Nair',
    role: 'AI Automation Specialist',
    initials: 'AN',
    gradient: 'linear-gradient(135deg, #25C97D, #F8D000)',
    bio: 'Builds AI chatbots and voice agent systems.'
  },
  {
    name: 'Kunal Desai',
    role: 'Migration Expert',
    initials: 'KD',
    gradient: 'linear-gradient(135deg, #F8D000, #0E9BF0)',
    bio: 'Handles data migration from HubSpot, Salesforce, Zoho.'
  },
  {
    name: 'Sneha Reddy',
    role: 'Client Success Manager',
    initials: 'SR',
    gradient: 'linear-gradient(135deg, #0E9BF0, #F8D000)',
    bio: 'Ensures smooth onboarding and ongoing support.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                About GHL Scale Up
              </div>
              <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                The People Behind Your<br />
                <span className="text-[#F8D000]">GoHighLevel Growth</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px]">
                <strong className="text-white/90 font-medium">200+ GoHighLevel projects across 6 countries</strong>. Not a general agency — GHL is all we do.
              </p>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">At a Glance</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[70px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Projects delivered</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[70px]">50+</div>
                  <div className="text-[0.78rem] text-white/50">Active clients</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[70px]">6</div>
                  <div className="text-[0.78rem] text-white/50">Countries</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[70px]">2020</div>
                  <div className="text-[0.78rem] text-white/50">Founded as Finzie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Our Story
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
                From Freelancer Network to<br />
                <span className="text-[#0E9BF0]">GHL Powerhouse</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                GHL Scale Up started as <strong className="font-semibold text-[#1C2E4A]">Finzie</strong> — a freelancer network in Indore, India. 
                After 200+ projects, the highest-impact work was always GoHighLevel. 
                So we launched <strong className="font-semibold text-[#1C2E4A]">GHL Scale Up</strong> as a dedicated GHL-native agency.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                Today, we're a team of GHL specialists who don't just use the platform — we know 
                what breaks at scale, what automations actually convert, and how to architect 
                systems that grow with your business.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-[#1C2E4A] rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-[1rem] md:text-[1.1rem] font-bold mb-4">Timeline</h3>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.1rem] md:text-[1.3rem] font-extrabold text-[#F8D000] min-w-[60px] md:min-w-[70px]">2020</div>
                  <div className="text-[0.75rem] md:text-[0.78rem] text-white/50">Finzie founded</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.1rem] md:text-[1.3rem] font-extrabold text-[#F8D000] min-w-[60px] md:min-w-[70px]">2022</div>
                  <div className="text-[0.75rem] md:text-[0.78rem] text-white/50">100th GHL project</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.1rem] md:text-[1.3rem] font-extrabold text-[#F8D000] min-w-[60px] md:min-w-[70px]">2024</div>
                  <div className="text-[0.75rem] md:text-[0.78rem] text-white/50">GHL Scale Up launched</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.1rem] md:text-[1.3rem] font-extrabold text-[#F8D000] min-w-[60px] md:min-w-[70px]">2025</div>
                  <div className="text-[0.75rem] md:text-[0.78rem] text-white/50">200+ projects, 50+ clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Founder */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Leadership
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Meet the <span className="text-[#0E9BF0]">Founder</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-white"
                style={{ background: founder.gradient }}
              >
                {founder.initials}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-[rgba(14,155,240,0.1)] text-[#0E9BF0] text-[0.68rem] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-3">
                Founder & CEO
              </div>
              <h3 className="text-2xl md:text-[1.4rem] font-extrabold text-[#1C2E4A] mb-3">{founder.name}</h3>
              <p className="text-[0.88rem] md:text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">{founder.bio}</p>
              <Link 
                href="mailto:aryan@finzie.co" 
                className="text-[0.82rem] font-semibold text-[#0E9BF0] hover:text-[#1C2E4A] transition-colors inline-flex items-center gap-1"
              >
                aryan@finzie.co →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Core Team
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              The Team <span className="text-[#0E9BF0]">Behind the Scenes</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member) => (
              <div key={member.name} className="bg-white border border-[#E8EDF4] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4"
                    style={{ background: member.gradient }}
                  >
                    {member.initials}
                  </div>
                  <div className="font-bold text-[1rem] text-[#1C2E4A] mb-1">{member.name}</div>
                  <div className="text-[0.72rem] text-[#0E9BF0] font-semibold uppercase tracking-wide mb-2">{member.role}</div>
                  <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Experts
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Specialists on <span className="text-[#0E9BF0]">Your Projects</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {experts.map((expert) => (
              <div key={expert.name} className="bg-white border border-[#E8EDF4] rounded-2xl p-5 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-1.4rem font-bold text-white mb-3"
                    style={{ background: expert.gradient }}
                  >
                    {expert.initials}
                  </div>
                  <div className="font-bold text-[0.9rem] text-[#1C2E4A] mb-1">{expert.name}</div>
                  <div className="text-[0.68rem] text-[#0E9BF0] font-semibold uppercase tracking-wide mb-2">{expert.role}</div>
                  <p className="text-[0.75rem] font-light text-[#4A5568] leading-relaxed">{expert.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Values
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              What We Stand <span className="text-[#0E9BF0]">For</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[rgba(248,208,0,0.12)] flex items-center justify-center text-[1.4rem] mx-auto mb-4">⚡</div>
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">GHL-Native First</h3>
              <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">GoHighLevel is our primary platform. Every team member specializes in GHL.</p>
            </div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center text-[1.4rem] mx-auto mb-4">📈</div>
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">Revenue Over Vanity</h3>
              <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">Pipeline value and closed deals. Not impressions and follower counts.</p>
            </div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[rgba(37,201,125,0.1)] flex items-center justify-center text-[1.4rem] mx-auto mb-4">💬</div>
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">No-Fluff Communication</h3>
              <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">Direct updates. Weekly reports. No jargon.</p>
            </div>
            <div className="bg-white border border-[#E8EDF4] rounded-2xl p-6 text-center hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[rgba(248,208,0,0.12)] flex items-center justify-center text-[1.4rem] mx-auto mb-4">🤝</div>
              <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] mb-2">Partner, Not Vendor</h3>
              <p className="text-[0.8rem] font-light text-[#4A5568] leading-relaxed">We optimize month over month. Not deliver and disappear.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand 
        title='Ready to Work With a Team That<br /><span class="hl-yellow">Lives and Breathes GHL?</span>'
        description="Book a free strategy call and tell us what you need."
        primaryText="Book Your Free Call →"
        primaryHref="/contact"
        secondaryText="Email Us"
        secondaryHref="mailto:aryan@finzie.co"
      />
    </>
  );
}