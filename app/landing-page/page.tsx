"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    practiceName: '',
    practiceType: '',
    biggestChallenge: '',
    currentCrm: '',
    numberOfLocations: '',
    monthlyEnquiries: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const scrollToForm = () => {
    setShowForm(true);
    document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const challenges = [
    'Missed calls',
    'Slow lead follow-up',
    'Leads not booking',
    'Appointment cancellations/no-shows',
    'Patient follow-up',
    'Reactivation',
    'Front-desk workload',
    'CRM/lead management',
    'Multiple disconnected systems',
    'Other',
  ];

  return (
    <>
      <Head>
        <title>GoHighLevel for Doctors & Medical Practices | GHL Scale Up</title>
        <meta
          name="description"
          content="GoHighLevel implementation for medical practices. Automate lead response, missed calls, appointments, follow-up, reviews and reactivation with GHL Scale Up."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#0B1421] font-poppins text-white">
        {/* ─── HEADER ─── */}
        <header className="sticky top-0 z-50 bg-[#0B1421]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] px-4 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F8D000] rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10C3 6.13 6.13 3 10 3H14V6.5H10C8.07 6.5 6.5 8.07 6.5 10C6.5 11.93 8.07 13.5 10 13.5H12V11.5H10V9.5H14.5V17H10C6.13 17 3 13.87 3 10Z" fill="#1C2E4A"/>
              </svg>
            </div>
            <span className="font-bold text-sm tracking-tight">GHL Scale Up</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[#8A9BB0] text-xs font-medium uppercase tracking-widest hover:text-[#F8D000] transition-colors">How It Works</a>
            <a href="#workflows" className="text-[#8A9BB0] text-xs font-medium uppercase tracking-widest hover:text-[#F8D000] transition-colors">Workflows</a>
            <a href="#why-scaleup" className="text-[#8A9BB0] text-xs font-medium uppercase tracking-widest hover:text-[#F8D000] transition-colors">Why GHL Scale Up</a>
            <a href="#faq" className="text-[#8A9BB0] text-xs font-medium uppercase tracking-widest hover:text-[#F8D000] transition-colors">FAQs</a>
          </nav>

          <button
            onClick={scrollToForm}
            className="bg-[#F8D000] text-[#1C2E4A] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#FFE44D] transition-colors"
          >
            Request Assessment
          </button>
        </header>

        {/* ─── MOBILE STICKY CTA ─── */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1421]/95 backdrop-blur-xl border-t border-[rgba(255,255,255,0.06)] p-4">
          <button
            onClick={scrollToForm}
            className="w-full bg-[#F8D000] text-[#1C2E4A] py-3 rounded-lg font-bold text-sm hover:bg-[#FFE44D] transition-colors"
          >
            Request a Practice Automation Assessment
          </button>
        </div>

        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(14,155,240,0.15)] via-transparent to-transparent opacity-70" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.1)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-[#F8D000] rounded-full animate-pulse" />
              GoHighLevel for Doctors & Medical Practices
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="block text-white">Turn Missed Calls,</span>
              <span className="block text-[#F8D000]">Unworked Enquiries</span>
              <span className="block text-[#0E9BF0]">Into a System</span>
            </h1>

            <p className="text-[rgba(255,255,255,0.4)] text-base md:text-lg max-w-xl mx-auto mt-6 font-light leading-relaxed">
              Your practice generates calls, website enquiries and appointment requests.
              But what happens when the front desk is busy?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={scrollToForm}
                className="bg-[#F8D000] text-[#1C2E4A] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#FFE44D] transition-all transform hover:scale-105 shadow-lg shadow-[rgba(248,208,0,0.2)]"
              >
                Request a Practice Automation Assessment
              </button>
              <a
                href="#how-it-works"
                className="text-[rgba(255,255,255,0.5)] text-sm font-medium hover:text-white transition-colors"
              >
                See How It Works →
              </a>
            </div>

            <p className="text-[rgba(255,255,255,0.3)] text-xs mt-3 font-light">
              20–30 minute assessment • No patient health information required
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-8">
              <div>
                <span className="block text-2xl font-extrabold text-[#F8D000] tracking-tight">200+</span>
                <span className="text-[#8A9BB0] text-xs font-medium uppercase tracking-wider">GHL Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#F8D000] tracking-tight">50+</span>
                <span className="text-[#8A9BB0] text-xs font-medium uppercase tracking-wider">Clients</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#F8D000] tracking-tight">6</span>
                <span className="text-[#8A9BB0] text-xs font-medium uppercase tracking-wider">Countries</span>
              </div>
            </div>
            <p className="text-[rgba(255,255,255,0.2)] text-[10px] mt-3 font-light max-w-md mx-auto">
              These published figures refer to GHL Scale Up's overall client/project base, not exclusively medical practices.
            </p>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            The Problem
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            Your Practice May Be Losing<br />
            <span className="text-[#F8D000]">Opportunities Between the Steps</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.4)] text-base max-w-xl font-light leading-relaxed mb-12">
            Getting the enquiry is only the beginning.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'A patient calls while your receptionist is with someone else. The call is missed.',
              'Someone fills out your website form after hours. The enquiry waits until someone gets to it.',
              'A prospective patient asks a question but doesn\'t book. No structured follow-up.',
              'A patient cancels an appointment. No defined rescheduling workflow.',
              'An appropriate inactive contact hasn\'t returned. No consistent re-engagement process.',
              'Your front desk handles confirmations, reminders, follow-ups manually.',
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 flex items-start gap-4 hover:border-[rgba(14,155,240,0.2)] transition-colors">
                <span className="text-[#F8D000] text-sm font-black mt-0.5">0{i+1}</span>
                <p className="text-sm font-light text-[rgba(255,255,255,0.6)] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-[rgba(255,255,255,0.4)] text-sm font-light mt-6 max-w-2xl border-l-2 border-[rgba(248,208,0,0.3)] pl-4">
            The issue isn't necessarily that your team isn't working hard enough. It may be that too much of the patient journey depends on someone remembering what to do next.
          </p>
        </section>

        {/* ─── HIDDEN COST ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            The Hidden Cost
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            The Hidden Cost Is Not Just<br />
            <span className="text-[#F8D000]">Another Missed Call</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { label: 'Marketing spend without a completed appointment', icon: '💰' },
              { label: 'Staff time spent chasing enquiries manually', icon: '⏱️' },
              { label: 'Open appointment capacity after cancellations', icon: '📅' },
              { label: 'Prospective patients who never receive a second response', icon: '📝' },
              { label: 'Existing contacts who are never appropriately re-engaged', icon: '🔄' },
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center hover:border-[rgba(37,201,125,0.2)] transition-colors">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-[rgba(255,255,255,0.5)] font-light leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-[rgba(255,255,255,0.4)] text-sm font-light mt-6 max-w-2xl border-l-2 border-[rgba(37,201,125,0.3)] pl-4">
            The goal of automation isn't to guarantee more revenue. It's to make the process more consistent, measurable and less dependent on manual follow-up.
          </p>
        </section>

        {/* ─── SOLUTION ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            The Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            What If Every New Enquiry Had<br />
            <span className="text-[#F8D000]">A Defined Next Step?</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.4)] text-base max-w-xl font-light leading-relaxed mb-8">
            This is where GoHighLevel fits.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'CRM and contact management',
              'Lead pipelines',
              'Forms and landing pages',
              'Appointment calendars',
              'SMS and email',
              'Missed-call text-back',
              'Automated follow-up',
              'Appointment reminders',
              'Review-request workflows',
              'Reactivation campaigns',
              'Conversation AI',
              'Voice AI',
              'Reporting',
              'Integrations',
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-2.5 text-center text-sm text-[rgba(255,255,255,0.5)] font-light hover:border-[rgba(14,155,240,0.15)] transition-colors">
                {item}
              </div>
            ))}
          </div>

          <p className="text-[rgba(255,255,255,0.3)] text-xs font-light mt-6 text-center max-w-2xl mx-auto">
            But the feature list isn't the important part. The important part is what you connect them to.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            {[
              'A missed call becomes a response.',
              'A new enquiry becomes a follow-up sequence.',
              'A qualified lead becomes a booking opportunity.',
              'A booking becomes a confirmation and reminder workflow.',
              'A cancellation becomes a rescheduling opportunity.',
              'An appropriate dormant segment becomes a reactivation campaign.',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[rgba(37,201,125,0.05)] border border-[rgba(37,201,125,0.1)] rounded-lg px-4 py-3">
                <span className="text-[#25C97D] text-lg">✓</span>
                <span className="text-sm text-[rgba(255,255,255,0.6)] font-light">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── GROWTH SYSTEM ─── */}
        <section id="how-it-works" className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            The Practice Growth System
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-12">
            One Connected <span className="text-[#F8D000]">Patient Journey</span>
          </h2>

          <div className="flex flex-col md:flex-row items-stretch gap-2">
            {[
              { num: '01', label: 'Capture', desc: 'Calls, forms, landing pages enter structured system' },
              { num: '02', label: 'Respond', desc: 'Trigger appropriate first response when new enquiry arrives' },
              { num: '03', label: 'Qualify', desc: 'Collect administrative info to determine next step' },
              { num: '04', label: 'Book', desc: 'Move enquiry toward appropriate appointment calendar' },
              { num: '05', label: 'Confirm', desc: 'Send appointment confirmation' },
              { num: '06', label: 'Remind', desc: 'Keep appointment visible through scheduled communication' },
              { num: '07', label: 'Follow Up', desc: 'Handle cancellations, no-shows, configured follow-up paths' },
              { num: '08', label: 'Review', desc: 'Request feedback after appropriate completed interactions' },
              { num: '09', label: 'Reactivate', desc: 'Create campaigns for appropriate dormant leads or patients' },
              { num: '10', label: 'Measure', desc: 'See where enquiries come from and what happens after they enter' },
            ].map((step, i) => (
              <div
                key={i}
                className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-4 text-center hover:border-[rgba(248,208,0,0.2)] transition-colors group"
              >
                <div className="text-[#F8D000] text-sm font-black mb-1 group-hover:text-[#FFE44D]">{step.num}</div>
                <div className="text-sm font-bold text-white mb-1">{step.label}</div>
                <div className="text-[10px] text-[rgba(255,255,255,0.3)] font-light leading-relaxed hidden md:block">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── WORKFLOWS ─── */}
        <section id="workflows" className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            High-Value Workflows
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-12">
            Workflows That <span className="text-[#F8D000]">Drive Results</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Missed Call → Immediate Response → Booking',
                problem: "Your receptionist can't answer every call.",
                automation: 'Missed call → automatic acknowledgement → conversation → booking or staff handoff.',
                benefit: 'A missed call no longer has to depend entirely on someone remembering to return it.',
                icon: '📞',
              },
              {
                title: 'New Enquiry → Booking',
                problem: 'A website enquiry arrives and someone must notice it, respond, answer questions, follow up and provide a booking option.',
                automation: 'Form/enquiry → CRM → immediate response → qualification → calendar → confirmation.',
                benefit: 'The enquiry enters a defined process rather than relying on one staff member to remember every next step.',
                icon: '📝',
              },
              {
                title: 'Booking → Confirmation → Reminder → Reschedule',
                problem: 'Booking does not guarantee attendance; patients may forget, cancel, reschedule or not attend.',
                automation: 'Booking → confirmation → reminder → appointment; cancellation → follow-up → reschedule; no-show → follow-up → rebooking.',
                benefit: 'Staff have a defined process around the appointment.',
                icon: '📅',
              },
              {
                title: 'Enquiry → Nurture → Booking',
                problem: 'Not every prospective patient is ready to book immediately.',
                automation: 'Enquiry → relevant follow-up → reminder → booking opportunity → human handoff when needed.',
                benefit: 'The practice can maintain structured follow-up without asking staff to remember every contact manually.',
                icon: '🌱',
              },
              {
                title: 'Dormant Contact → Reactivation → Appointment',
                problem: 'Appropriate dormant leads or patient segments may sit untouched.',
                automation: 'Inactive contact → segment → relevant outreach → response → booking.',
                benefit: 'Creates a controlled process for reconnecting with appropriate existing opportunities.',
                icon: '🔄',
              },
            ].map((workflow, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(14,155,240,0.2)] transition-colors">
                <div className="text-2xl mb-3">{workflow.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{workflow.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.4)] font-light mb-2">
                  <span className="text-[rgba(255,255,255,0.3)]">Problem:</span> {workflow.problem}
                </p>
                <p className="text-sm text-[rgba(255,255,255,0.4)] font-light mb-2">
                  <span className="text-[rgba(255,255,255,0.3)]">Automation:</span> {workflow.automation}
                </p>
                <p className="text-sm text-[#25C97D] font-light">
                  ✓ {workflow.benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── AI SECTION ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            AI
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            Use AI for Administrative Work.<br />
            <span className="text-[#F8D000]">Keep Clinical Decisions With Clinicians.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[rgba(37,201,125,0.05)] border border-[rgba(37,201,125,0.1)] rounded-xl p-6">
              <h4 className="text-[#25C97D] font-bold text-sm mb-3">✓ Appropriate AI Uses</h4>
              <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.5)] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#25C97D] mt-0.5">•</span> Appointment booking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25C97D] mt-0.5">•</span> Basic practice information
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25C97D] mt-0.5">•</span> Configured FAQs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25C97D] mt-0.5">•</span> Lead qualification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#25C97D] mt-0.5">•</span> Routing and administrative follow-up
                </li>
              </ul>
            </div>
            <div className="bg-[rgba(255,80,80,0.05)] border border-[rgba(255,80,80,0.1)] rounded-xl p-6">
              <h4 className="text-[rgba(255,100,100,0.8)] font-bold text-sm mb-3">✗ Not Appropriate For</h4>
              <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.3)] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[rgba(255,100,100,0.8)] mt-0.5">•</span> Diagnosis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgba(255,100,100,0.8)] mt-0.5">•</span> Medical advice
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgba(255,100,100,0.8)] mt-0.5">•</span> Treatment recommendations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgba(255,100,100,0.8)] mt-0.5">•</span> Replacement for clinical judgment
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── WHY GHL SCALE UP ─── */}
        <section id="why-scaleup" className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            Why GHL Scale Up
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            The Difference Between Having GHL<br />
            <span className="text-[#F8D000]">And Having It Properly Implemented</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.4)] text-base max-w-xl font-light leading-relaxed mb-8">
            GoHighLevel gives you the platform. GHL Scale Up builds the system around it.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'GHL-only specialization', desc: 'Core focus rather than one platform among many' },
              { label: '200+ implementations', desc: '200+ projects, 50+ clients, 6 countries, 5+ years experience' },
              { label: 'One implementation team', desc: 'CRM, automation, funnels, AI, integrations and reporting' },
              { label: 'Built around your process', desc: 'No generic templates — configured to your practice' },
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center hover:border-[rgba(248,208,0,0.15)] transition-colors">
                <div className="text-[#F8D000] text-2xl font-black mb-2">{i+1}</div>
                <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                <p className="text-xs text-[rgba(255,255,255,0.3)] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[rgba(255,255,255,0.2)] text-[10px] mt-4 text-center max-w-xl mx-auto">
            These are overall GHL figures and must not be presented as medical-specific implementation volume.
          </p>
        </section>

        {/* ─── EXISTING SYSTEMS ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            Existing Systems
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            We Don't Start by Asking You<br />
            <span className="text-[#F8D000]">To Replace Everything</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.4)] text-base max-w-xl font-light leading-relaxed">
            Already have an EHR, CRM or booking system? That's not automatically a problem.
          </p>

          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 mt-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="text-[rgba(255,255,255,0.5)]">Existing Practice Systems</span>
              <span className="text-[#F8D000] text-2xl">+</span>
              <span className="text-[#0E9BF0] font-bold">GoHighLevel</span>
              <span className="text-[#F8D000] text-2xl">→</span>
              <span className="text-[#25C97D] font-bold">Connected Workflow</span>
            </div>
          </div>
        </section>

        {/* ─── IMPLEMENTATION PROCESS ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            Implementation Process
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-12">
            From Discovery <span className="text-[#F8D000]">To Deployment</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-3">
            {[
              { num: '01', label: 'Discover', desc: 'Understand lead sources, calls, booking, follow-up, software and staff workflow' },
              { num: '02', label: 'Map', desc: 'Identify where enquiries, appointments and follow-up currently get stuck' },
              { num: '03', label: 'Design', desc: 'Build the proposed workflow around the actual practice process' },
              { num: '04', label: 'Implement', desc: 'Configure GHL components, workflows, calendars, messaging, integrations and AI' },
              { num: '05', label: 'Test', desc: 'Test the system and important workflow paths before launch' },
              { num: '06', label: 'Train & Optimize', desc: 'Train the team and refine the system as it is used' },
            ].map((step, i) => (
              <div
                key={i}
                className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-4 text-center hover:border-[rgba(14,155,240,0.2)] transition-colors group"
              >
                <div className="text-[#0E9BF0] text-sm font-black mb-1 group-hover:text-[#4DB8FF]">{step.num}</div>
                <div className="text-sm font-bold text-white mb-1">{step.label}</div>
                <div className="text-[10px] text-[rgba(255,255,255,0.3)] font-light leading-relaxed hidden md:block">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── MID-PAGE CTA ─── */}
        <section className="max-w-4xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)] text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            See Where Automation Could<br />
            <span className="text-[#F8D000]">Fit in Your Practice</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.4)] text-base max-w-xl mx-auto font-light leading-relaxed mb-6">
            You don't need to decide whether GoHighLevel is right for you from a feature list.
            Let's look at your current process.
          </p>

          <p className="text-sm text-[rgba(255,255,255,0.3)] max-w-md mx-auto font-light leading-relaxed">
            We'll discuss where new enquiries come from, how missed calls are handled, how leads are followed up, how appointments are booked, what happens after cancellation or no-show, how existing software fits into the picture, and where automation could reduce repetitive work.
          </p>

          <button
            onClick={scrollToForm}
            className="mt-8 bg-[#F8D000] text-[#1C2E4A] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#FFE44D] transition-all transform hover:scale-105 shadow-lg shadow-[rgba(248,208,0,0.2)]"
          >
            Request a Practice Automation Assessment
          </button>
          <p className="text-[rgba(255,255,255,0.3)] text-xs mt-3 font-light">
            20–30 minutes • No patient health information required
          </p>
        </section>

        {/* ─── CAPABILITIES ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            Capability Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-12">
            What GHL Scale Up <span className="text-[#F8D000]">Can Build</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Lead Management', desc: 'CRM, pipelines, contact organization, segmentation and lead-source tracking' },
              { label: 'Lead Response', desc: 'Forms, enquiries, missed-call workflows and automated follow-up' },
              { label: 'Appointment Workflows', desc: 'Booking, confirmation, reminders, cancellation and rescheduling workflows' },
              { label: 'Communication', desc: 'SMS, email, conversations and configured AI-assisted communication' },
              { label: 'Reputation', desc: 'Structured review-request workflows' },
              { label: 'Reactivation', desc: 'Appropriate campaigns for dormant leads and patient segments' },
              { label: 'Reporting', desc: 'Visibility into leads, opportunities, appointments and sources' },
              { label: 'Integrations', desc: 'Connections with relevant systems where a verified integration exists' },
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 hover:border-[rgba(14,155,240,0.15)] transition-colors">
                <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                <p className="text-xs text-[rgba(255,255,255,0.3)] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[rgba(255,255,255,0.2)] text-xs font-light mt-6 text-center max-w-xl mx-auto">
            The exact build is determined by the practice's workflow, systems and requirements.
          </p>
        </section>

        {/* ─── PROOF ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            Proof
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            GoHighLevel Expertise<br />
            <span className="text-[#F8D000]">You Can Verify</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.4)] text-base max-w-xl font-light leading-relaxed mb-8">
            We won't invent healthcare case studies to make this page look stronger.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: '200+', desc: 'GoHighLevel Projects Delivered' },
              { label: '50+', desc: 'Clients' },
              { label: '6', desc: 'Countries Served' },
              { label: '5+', desc: 'Years of GoHighLevel Experience' },
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 text-center">
                <span className="block text-3xl font-extrabold text-[#F8D000] tracking-tight">{item.label}</span>
                <span className="text-sm text-[rgba(255,255,255,0.4)] font-light">{item.desc}</span>
              </div>
            ))}
          </div>

          <p className="text-[rgba(255,255,255,0.2)] text-[10px] mt-4 text-center max-w-xl mx-auto">
            These published figures refer to GHL Scale Up's overall client/project base, not exclusively medical practices.
          </p>
        </section>

        {/* ─── HIPAA ─── */}
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            Security & HIPAA
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            Healthcare Data Requires<br />
            <span className="text-[#F8D000]">The Right Configuration</span>
          </h2>

          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-6">
              <span className="text-[rgba(255,255,255,0.5)]">Practice</span>
              <span className="text-[#F8D000] text-2xl">↔</span>
              <span className="text-[#0E9BF0] font-bold">GHL Scale Up</span>
              <span className="text-[#F8D000] text-2xl">↔</span>
              <span className="text-[rgba(255,255,255,0.5)]">HighLevel</span>
            </div>

            <p className="text-sm text-[rgba(255,255,255,0.4)] font-light leading-relaxed max-w-2xl mx-auto text-center">
              GoHighLevel accounts are <span className="text-[#F8D000]">not HIPAA compliant by default</span>. HighLevel currently offers an optional, account-wide HIPAA Compliance add-on with capabilities including ePHI encryption, a Business Associate Agreement, audit logging and MFA enforcement.
            </p>

            <div className="mt-6 p-4 bg-[rgba(248,208,0,0.05)] border border-[rgba(248,208,0,0.1)] rounded-xl">
              <p className="text-xs text-[rgba(255,255,255,0.3)] font-light text-center">
                GHL Scale Up does not provide legal or compliance advice. Practices should assess their specific requirements and obtain appropriate professional guidance before using systems to process protected health information.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="max-w-4xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-7 h-0.5 bg-[#0E9BF0] rounded" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-12">
            Frequently Asked <span className="text-[#F8D000]">Questions</span>
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'What is GoHighLevel for doctors?',
                a: 'GoHighLevel is a CRM and marketing automation platform that can be configured to manage parts of a medical practice\'s lead, communication and appointment journey, including enquiry capture, follow-up, booking workflows, reminders and reactivation. It is not an EHR or clinical system.'
              },
              {
                q: 'Can GoHighLevel recover missed calls?',
                a: 'Yes. HighLevel\'s Missed Call Text Back can automatically send an SMS when an inbound call is missed, including after-hours calls. The workflow can then direct the conversation toward booking or human follow-up.'
              },
              {
                q: 'Can GoHighLevel automate appointment follow-up?',
                a: 'Yes. Appointment-related workflows can be configured around bookings, cancellations and other appointment statuses. Conversation AI can also assist with booking, cancellation and rescheduling when appropriately configured.'
              },
              {
                q: 'Can GoHighLevel reactivate patients?',
                a: 'It can support appropriate reactivation workflows using contact segmentation, messaging, workflows and appointment booking. The practice should determine which contacts are appropriate to contact and what communication is permitted.'
              },
              {
                q: 'Can AI talk to patients?',
                a: 'AI can be configured for administrative communication such as approved questions, information collection and appointment booking. It should not be positioned as a substitute for clinical judgment, diagnosis or treatment advice.'
              },
              {
                q: 'We already have a CRM. Do we need GHL?',
                a: 'Not necessarily. The first step is to assess your existing system and identify what is working and where workflow gaps exist. GHL may complement existing technology rather than replace it.'
              },
              {
                q: 'We already have online booking. Is GHL still useful?',
                a: 'Potentially. The value may be connecting booking to enquiry response, confirmation, reminders, cancellation, follow-up and reactivation rather than replacing the calendar itself.'
              },
              {
                q: 'Is GoHighLevel HIPAA compliant?',
                a: 'Not by default. HighLevel currently offers a paid HIPAA Compliance add-on with capabilities including ePHI encryption, BAA support, audit logging and MFA enforcement. Appropriate configuration and shared responsibilities still matter.'
              },
              {
                q: 'Does GoHighLevel replace an EHR?',
                a: 'No. It should be positioned as a marketing, communication and workflow layer rather than a clinical records system.'
              },
              {
                q: 'Will automation replace our receptionist?',
                a: 'No. The goal is to automate predictable, repetitive steps while leaving situations requiring judgment, clinical context or human interaction with your team.'
              },
              {
                q: 'Will this work with our existing software?',
                a: 'That depends on the specific platform and integration path. The current technology stack should be reviewed before recommending an implementation.'
              },
              {
                q: 'How much does it cost?',
                a: 'There isn\'t one appropriate implementation price for every practice. Scope can depend on existing systems, workflows, locations, integrations, migration, AI, reporting and training. The assessment is used to determine what actually needs to be built.'
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
                <button
                  className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 hover:bg-[rgba(255,255,255,0.03)] transition-colors group"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling as HTMLDivElement;
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                  }}
                >
                  <span className="text-sm font-medium text-white">{faq.q}</span>
                  <span className="text-[#F8D000] text-xl group-hover:rotate-180 transition-transform flex-shrink-0">+</span>
                </button>
                <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="px-5 pb-5 text-sm text-[rgba(255,255,255,0.4)] font-light leading-relaxed border-t border-[rgba(255,255,255,0.06)] pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section id="assessment-form" className="max-w-4xl mx-auto px-4 py-20 md:py-28 border-t border-[rgba(255,255,255,0.06)]">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-center mb-6">
            Find the Gaps in Your Practice's<br />
            <span className="text-[#F8D000]">Patient Journey</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.4)] text-center max-w-2xl mx-auto font-light leading-relaxed mb-8">
            You may already have the website, advertising, EHR, booking system and front-desk team. The question is what happens between those systems and those interactions.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8">
            {[
              'Where do enquiries wait?',
              'Where do missed calls go?',
              'What happens when someone doesn\'t book?',
              'What happens after a cancellation?',
              'What happens to appropriate dormant contacts?',
              'How much still depends on someone remembering to do it manually?',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.3)] font-light">
                <span className="text-[#F8D000]">✦</span> {item}
              </div>
            ))}
          </div>

          {/* ─── FORM ─── */}
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="jane@practice.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-1">Practice / Clinic Name *</label>
                  <input
                    type="text"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="Smith Family Practice"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-1">Practice Type / Specialty *</label>
                  <input
                    type="text"
                    name="practiceType"
                    value={formData.practiceType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="Family Medicine, Dermatology, etc."
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-1">Biggest Challenge *</label>
                  <select
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0E9BF0] transition-colors"
                  >
                    <option value="" className="bg-[#0B1421]">Select your biggest challenge</option>
                    {challenges.map((c) => (
                      <option key={c} value={c} className="bg-[#0B1421]">{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.3)] uppercase tracking-wider mb-1">Current CRM / Software</label>
                  <input
                    type="text"
                    name="currentCrm"
                    value={formData.currentCrm}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.3)] uppercase tracking-wider mb-1">Number of Locations</label>
                  <input
                    type="text"
                    name="numberOfLocations"
                    value={formData.numberOfLocations}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[rgba(255,255,255,0.3)] uppercase tracking-wider mb-1">Monthly Enquiries</label>
                  <input
                    type="text"
                    name="monthlyEnquiries"
                    value={formData.monthlyEnquiries}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-sm text-white placeholder-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="bg-[rgba(248,208,0,0.05)] border border-[rgba(248,208,0,0.1)] rounded-lg p-4 text-center">
                <p className="text-xs text-[rgba(255,255,255,0.3)] font-light">
                  ⚠️ Please do not submit patient health information or protected health information through this form.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F8D000] text-[#1C2E4A] py-4 rounded-xl font-bold text-base hover:bg-[#FFE44D] transition-all transform hover:scale-[1.02] shadow-lg shadow-[rgba(248,208,0,0.2)]"
              >
                Request a Practice Automation Assessment
              </button>

              <p className="text-center text-[rgba(255,255,255,0.2)] text-xs font-light">
                20–30 minutes • No patient health information required
              </p>
            </form>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="border-t border-[rgba(255,255,255,0.06)] py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#F8D000] rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10C3 6.13 6.13 3 10 3H14V6.5H10C8.07 6.5 6.5 8.07 6.5 10C6.5 11.93 8.07 13.5 10 13.5H12V11.5H10V9.5H14.5V17H10C6.13 17 3 13.87 3 10Z" fill="#1C2E4A"/>
                    </svg>
                  </div>
                  <span className="font-bold text-sm tracking-tight">GHL Scale Up</span>
                </div>
                <p className="text-xs text-[rgba(255,255,255,0.3)] font-light max-w-xs">
                  GoHighLevel implementation, automation and systems support for lead-driven businesses.
                </p>
              </div>

              <div className="text-center text-xs text-[rgba(255,255,255,0.2)] font-light max-w-sm">
                <p className="mb-2">CRM • Lead Management • Appointment Automation • Follow-Up • Reviews • Reactivation • AI • Reporting</p>
                <p>GoHighLevel is not an EHR or clinical decision-making system. Healthcare practices are responsible for determining their own legal, regulatory and compliance requirements.</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Privacy Policy</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Terms</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Contact</a>
                <a href="#" className="text-[rgba(255,255,255,0.3)] hover:text-[#F8D000] transition-colors">Case Studies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}