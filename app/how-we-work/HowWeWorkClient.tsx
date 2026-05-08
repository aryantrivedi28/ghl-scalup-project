// app/how-we-work/HowWeWorkClient.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Calendar, 
  ArrowRight, 
  DollarSign, 
  FileText, 
  BarChart, 
  FlaskConical, 
  BookOpen, 
  Handshake,
  Sparkles,
  Target,
  Rocket,
  Users
} from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import BookingModal from '@/components/BookingModal';

export default function HowWeWorkClient() {
  const [openBooking, setOpenBooking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
    
    // Setup intersection observer for fade-in elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Understand Needs',
      description: 'Free 30-minute discovery call. We dig into your business model, tools, pain points, and goals.',
      icon: Target
    },
    {
      number: '02',
      title: 'Design Systems',
      description: 'Pipeline stages, automation logic, funnel structure, integration mapping all planned before building.',
      icon: FileText
    },
    {
      number: '03',
      title: 'Build & Integrate',
      description: 'CRM, workflows, pages, calendars, AI agents all implemented inside GHL with third-party connections.',
      icon: Rocket
    },
    {
      number: '04',
      title: 'Test & Refine',
      description: 'Live testing with real data. Every automation path triggered, every form submitted, every edge case checked.',
      icon: FlaskConical
    },
    {
      number: '05',
      title: 'Train & Scale',
      description: 'Live training, SOPs, recorded walkthroughs. Monthly support plans available for ongoing optimization.',
      icon: Users
    }
  ];

  const standards = [
    {
      icon: DollarSign,
      iconBg: 'yellow',
      title: 'Fixed-Price Quotes',
      description: 'Know the cost upfront. No hourly billing.'
    },
    {
      icon: FileText,
      iconBg: 'blue',
      title: 'Scope Document',
      description: 'Every deliverable and timeline listed before work starts.'
    },
    {
      icon: BarChart,
      iconBg: 'green',
      title: 'Weekly Updates',
      description: 'You always know where the project stands.'
    },
    {
      icon: FlaskConical,
      iconBg: 'yellow',
      title: 'QA & Testing',
      description: 'Every build tested with live data before launch.'
    },
    {
      icon: BookOpen,
      iconBg: 'blue',
      title: 'Training & SOPs',
      description: 'Live training, recordings, and written docs.'
    },
    {
      icon: Handshake,
      iconBg: 'green',
      title: 'Post-Launch Support',
      description: 'Bug fixes covered. Monthly retainers available.'
    }
  ];

  const timelineWeeks = [
    { week: '1', title: 'Discovery', desc: 'Call + Scope Document' },
    { week: '2', title: 'Design & Plan', desc: 'Architecture & Mapping' },
    { week: '3-4', title: 'Build & Test', desc: 'Implementation + QA' },
    { week: '5', title: 'Launch & Train', desc: 'Go-live + Handover' }
  ];

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  return (
    <>
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <Breadcrumb items={[{ label: 'How We Work' }]} />

      {/* Page Hero */}
      <section className="bg-linear-to-b from-[#1C2E4A] to-space-dark text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-14 items-center">
            <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                <Sparkles className="w-3 h-3" />
                Our Process
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-3 sm:mb-4">
                How We <span className="text-[#F8D000]">Deliver</span>
              </h1>
              <p className="text-sm sm:text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-6 sm:mb-8">
                Every project follows the same 5-step framework. <strong className="text-white/90 font-medium">Transparent timelines, fixed pricing, clear scope</strong> before any code.
              </p>
              <div className="flex flex-col sm:flex-row gap-3.5">
                <button
                  onClick={handleOpenBooking}
                  className="bg-[#0E9BF0] text-white px-6 sm:px-8 py-3 rounded-[10px] text-[0.85rem] sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#0E9BF0]/90 hover:-translate-y-[2px] transition-all justify-center cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book Free Strategy Call →
                </button>
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-6 sm:px-8 py-3 rounded-[10px] text-[0.85rem] sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] transition-all justify-center">
                  Start a Project →
                </Link>
              </div>
            </div>
            <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-4 sm:mb-5">Delivery Standards</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.2rem] sm:text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[70px] sm:min-w-[80px]">100%</div>
                  <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Fixed-price — no hourly surprises</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.2rem] sm:text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[70px] sm:min-w-[80px]">1-3w</div>
                  <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Typical turnaround</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.2rem] sm:text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[70px] sm:min-w-[80px]">Weekly</div>
                  <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Progress updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-[640px] mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              5-Step Framework
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.2] sm:leading-[1.12] mb-2 sm:mb-3.5 text-[#1C2E4A]">
              From First Call to <span className="text-[#0E9BF0]">Working System</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-4 sm:gap-6 py-5 sm:py-8 border-b border-[#E8EDF4] last:border-b-0 fade-in">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8D000]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1C2E4A] mb-1 sm:mb-1.5">{step.title}</h3>
                    <p className="text-[0.8rem] sm:text-[0.85rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Standards */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Standards
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.2] sm:leading-[1.12] mb-2 sm:mb-3.5 text-[#1C2E4A]">
              Every Project <span className="text-[#0E9BF0]">Includes</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {standards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:-translate-y-1 transition-all fade-in">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 ${
                    standard.iconBg === 'yellow' ? 'bg-[rgba(248,208,0,0.12)]' :
                    standard.iconBg === 'blue' ? 'bg-[rgba(14,155,240,0.1)]' : 'bg-[rgba(37,201,125,0.1)]'
                  }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ 
                      color: standard.iconBg === 'yellow' ? '#F8D000' : 
                             standard.iconBg === 'blue' ? '#0E9BF0' : '#25C97D'
                    }} />
                  </div>
                  <h3 className="text-[0.85rem] sm:text-[0.95rem] font-bold text-[#1C2E4A] mb-1 sm:mb-2">{standard.title}</h3>
                  <p className="text-[0.75rem] sm:text-[0.82rem] font-light text-[#4A5568] leading-relaxed">{standard.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Typical Timeline
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.2] sm:leading-[1.12] mb-2 sm:mb-3.5 text-[#1C2E4A]">
              What to Expect <span className="text-[#0E9BF0]">Week by Week</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {timelineWeeks.map((item, index) => (
              <div key={index} className="bg-[#F4F7FA] rounded-xl p-3 sm:p-5 text-center fade-in">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F8D000] text-[#0B1421] flex items-center justify-center text-base sm:text-xl font-bold mx-auto mb-2 sm:mb-3">
                  {item.week}
                </div>
                <h3 className="text-[0.75rem] sm:text-[0.85rem] font-bold text-[#1C2E4A] mb-0.5 sm:mb-1">{item.title}</h3>
                <p className="text-[0.65rem] sm:text-[0.72rem] text-[#4A5568]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-[0.7rem] sm:text-[0.82rem] text-[#8A9BB0]">
              *Timelines vary based on project complexity. We'll give you a clear estimate during discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Why It Works
              </div>
              <h2 className="text-xl sm:text-2xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.2] sm:leading-[1.12] mb-3 sm:mb-4 text-[#1C2E4A]">
                No Scope Creep.<br />
                <span className="text-[#0E9BF0]">No Surprises.</span>
              </h2>
              <ul className="space-y-3">
                {[
                  'Everything documented before we build',
                  'Fixed price — you know the cost upfront',
                  'Weekly updates, not vague timelines',
                  'Tested with real data before handover',
                  'Your team trained — no black box'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25C97D] flex-shrink-0 mt-0.5" />
                    <span className="text-[0.8rem] sm:text-[0.88rem] text-[#4A5568]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-6 sm:p-8 text-white fade-in">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-[1.6rem] sm:text-[2rem] font-extrabold text-[#F8D000]">200+</div>
                  <div className="text-[0.65rem] sm:text-[0.78rem] text-white/50">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-[1.6rem] sm:text-[2rem] font-extrabold text-[#F8D000]">100%</div>
                  <div className="text-[0.65rem] sm:text-[0.78rem] text-white/50">Fixed-Price</div>
                </div>
                <div>
                  <div className="text-[1.6rem] sm:text-[2rem] font-extrabold text-[#F8D000]">0</div>
                  <div className="text-[0.65rem] sm:text-[0.78rem] text-white/50">Surprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1C2E4A] to-[#111E30]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="fade-in text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mb-4">
                <Sparkles className="w-3 h-3" />
                Ready to Start?
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Want to Work With a Team<br />
                That <span className="text-[#F8D000]">Actually Gets GHL?</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                We are a small team on purpose — so every client gets senior-level attention,
                not a junior passed off as an expert.
              </p>
              
              {/* Direct Booking Button */}
              <button
                onClick={handleOpenBooking}
                className="w-full sm:w-auto mb-4 bg-gradient-to-r from-[#0E9BF0] to-[#0878C4] text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-[#0878C4] hover:to-[#0E9BF0] hover:-translate-y-0.5 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Book Your Free Strategy Call Instantly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-white/40 mb-6">
                Instant booking • 30-min free consultation • No commitment
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-white/40 text-xs sm:text-sm">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#25C97D]" />
                  No obligation
                </span>
                <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#25C97D]" />
                  Free consultation
                </span>
                <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#25C97D]" />
                  Response within 24h
                </span>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
                <ContactForm
                  variant="dark"
                  title="Let's Talk"
                  subtitle="Fill out the form and our team will reach out within 24 hours."
                  buttonText="Send Message →"
                  showDirectBooking={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />
    </>
  );
}