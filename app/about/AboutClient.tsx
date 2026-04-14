// app/about/AboutClient.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CtaBand from '@/components/sections/CtaBand';
import ContactForm from '@/components/ContactForm';

export default function AboutClient() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const coreTeam = [
    {
      initials: 'KS',
      image: '/team/kunal.png',
      linkedin: 'https://www.linkedin.com/in/kunal-kumar-2ab402263',
      name: 'Kunal Sharma',
      role: 'Tech Lead',
      bio: 'Kunal is the technical brain behind GHL Scale Up. He owns the architecture decisions, internal tooling, system design, and engineering standards across the organization. He does not work on client projects directly — instead, he builds the frameworks, templates, and processes that every client project is built on top of. When a system scales without breaking, it is because Kunal designed the foundation.'
    },
    {
      initials: 'RD',
      image: '/team/radhika.jpg',
      linkedin: 'https://www.linkedin.com/in/radhika-agrawal-22238a201',
      name: 'Radhika',
      role: 'Growth Associate',
      bio: 'Drives client acquisition, partnerships, and brand growth for GHL Scale Up. Radhika connects the dots between what clients need and what we deliver — handling outreach, onboarding coordination, and making sure every project starts with clear goals and ends with measurable outcomes. She is the first person most clients speak with.'
    },
  ];

  const experts = [
    {
      initials: 'SG',
      image: '/team/sangram.png',
      linkedin: 'https://www.linkedin.com/in/sangram-singh-shekhawat-b045a4132',
      // website: 'https://sangram-bits-seo-consultant.netlify.app/',
      name: 'Sangram',
      role: 'SEO Expert',
      bio: 'Specialist in technical SEO, on-page optimization, keyword strategy, and organic growth for agencies and businesses. Sangram builds SEO systems that deliver consistent, compounding traffic — not one-time spikes.',
      skills: ['Technical SEO', 'On-Page', 'Keyword Research', 'Local SEO', 'Link Building'],
      results: [
        '11.5x ROAS for a US electronics retailer ($1.17M revenue)',
        '90% CPA reduction for US home services in 2 months',
        '5.44x ROAS for 8-figure German e-commerce in 30 days'
      ]
    },
    {
      initials: 'KP',
      image: '/team/kunal_image.jpeg',
      linkedin: 'https://www.linkedin.com/in/kunal-p',
      name: 'Kunal',
      role: 'PPC & Performance Marketing',
      bio: '4+ years managing Google Ads and Meta Ads across agency and freelance roles. Specializes in diagnosing underperforming ad accounts and fixing what is actually broken — whether it is tracking, structure, or bidding strategy.',
      skills: ['Google Ads', 'Meta Ads', 'GA4', 'GTM', 'Shopping Ads'],
      results: [
        '11.5x ROAS for a US electronics retailer ($1.17M revenue)',
        '90% CPA reduction for US home services in 2 months',
        '5.44x ROAS for 8-figure German e-commerce in 30 days'
      ]
    },
    {
      initials: 'AB',
      image: '/team/apoorv.jpg',
      linkedin: 'https://www.linkedin.com/in/apoorv-bhatt-4b65b41a9',
      name: 'Apoorv Bhaat',
      role: 'GHL & Shopify Expert',
      bio: 'Detail-oriented developer specializing in custom Liquid coding, Shopify Online Store 2.0 theme development, and GoHighLevel configurations. Experienced in building dynamic storefronts with custom sections, metafields, and responsive design for startups and growing brands.',
      skills: ['Shopify Liquid', 'GoHighLevel', 'Store 2.0', 'HTML/CSS/JS', 'GA4', 'Git'],
      results: []
    },
    {
      initials: 'JV',
      image: '/team/jaanvi.jpeg',
      linkedin: 'https://www.linkedin.com/in/jaanvi',
      name: 'Jaanvi',
      role: 'Social Media Expert',
      bio: 'Manages social media strategy and execution for client accounts — from content calendar creation and daily posting to community management, engagement, and performance reporting across Instagram, Facebook, LinkedIn, and TikTok.',
      skills: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Content Strategy'],
      results: []
    }
  ];

  const stats = [
    { value: '200+', label: 'GHL Projects' },
    { value: '50+', label: 'Active Clients' },
    { value: '6', label: 'Countries' },
    { value: '5+', label: 'Years on GHL' },
  ];

  const timeline = [
    { year: '2020', text: 'Started as a freelance network for startups' },
    { year: '2022', text: 'First GoHighLevel project delivered for an agency in the US' },
    { year: '2023', text: '50+ GHL projects completed — AI automation becomes core offering' },
    { year: '2024', text: 'Crossed 150 projects. Clients across 6 countries.' },
    { year: '2025', text: 'GHL Scale Up launched as a dedicated GoHighLevel brand' }
  ];

  const values = [
    { icon: '⚡', title: 'GHL-Native First', description: 'We live inside GoHighLevel. Every team member, every day. That depth is why our systems hold up at scale.' },
    { icon: '📈', title: 'Revenue Over Vanity', description: 'We don\'t measure success by tickets closed. We measure it by whether your MRR goes up.' },
    { icon: '🔍', title: 'No-Fluff Communication', description: 'Short sentences. Strong verbs. We say what we mean and deliver what we promise.' },
    { icon: '🤝', title: 'Partner, Not Vendor', description: 'We care about your business growing, not just closing the project. That\'s why clients stay.' },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(14,155,240,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="text-center max-w-[720px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
              About GHL Scale Up
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] leading-[1.2] md:leading-[1.05] mb-3 sm:mb-4">
              The People Behind Your<br />
              <span className="text-[#F8D000]">GoHighLevel Growth</span>
            </h1>
            <p className="text-sm sm:text-base font-light text-white/55 leading-relaxed max-w-[560px] mx-auto px-4">
              We are not a faceless agency. We are a small, focused team of GoHighLevel specialists who care about your revenue as much as you do. Here is who we are, why we started, and what drives us.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="fade-in order-2 md:order-1">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Our Story
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] md:leading-[1.12] mb-4 text-[#1C2E4A]">
                How a Frustration with<br />
                <span className="text-[#0E9BF0]">Broken GHL Setups</span> Became a Business
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  GHL Scale Up started from a problem we kept seeing again and again — businesses and agencies were investing in GoHighLevel but their setups were a mess. Pipelines that didn't match their sales process. Automations that broke at 50 contacts. Tags nobody could remember. Templates copied from YouTube tutorials that fell apart in production.
                </p>
                <p className="text-sm sm:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  We were already solving this as an execution-first agency based in Indore, India, serving startups and agencies across 6 countries. After delivering 200+ GoHighLevel projects, we realized this problem was too big and too common to solve on the side.
                </p>
                <p className="text-sm sm:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  So in 2025, we launched <strong className="font-semibold text-[#1C2E4A]">GHL Scale Up</strong> as a dedicated brand focused entirely on one thing: helping businesses get GoHighLevel right — from first setup to full-scale SaaS.
                </p>
                <p className="text-sm sm:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  Today, we work with marketing agencies, SaaS founders, real estate firms, home-service businesses, coaches, and enterprises across the US, UK, Australia, and India. Every system we build is designed around a single question: <strong className="font-semibold text-[#1C2E4A]">does this grow your revenue?</strong>
                </p>
              </div>
            </div>
            <div className="fade-in order-1 md:order-2">
              <div className="bg-[#1C2E4A] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute right-[-10px] bottom-[-20px] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white/5 tracking-[-0.05em] pointer-events-none">
                  GHL
                </div>
                <blockquote className="text-sm sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem] italic font-normal text-white/75 leading-relaxed border-l-4 border-[#F8D000] pl-4 sm:pl-5 mb-4 sm:mb-5 relative z-10">
                  We don't just set up GoHighLevel. We build the growth engine that sits underneath your entire business — from lead capture to closed deal.
                </blockquote>
                <cite className="text-[0.7rem] sm:text-[0.78rem] font-semibold text-[#F8D000] not-italic relative z-10">— Aryan Trivedi, Founder</cite>
                <div className="flex flex-col gap-0 mt-4 sm:mt-6 relative z-10">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-1 sm:gap-3 py-2 sm:py-2.5 border-t border-white/10">
                      <div className="text-[0.7rem] sm:text-[0.75rem] font-extrabold text-[#F8D000] sm:min-w-[50px]">{item.year}</div>
                      <div className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.78rem] font-light text-white/50">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#0B1421] py-6 sm:py-8 md:py-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-xl sm:text-2xl md:text-[2.2rem] font-black text-[#F8D000] tracking-[-0.04em] leading-none">{stat.value}</div>
                <div className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.72rem] text-[#8A9BB0] font-medium mt-1 sm:mt-1.5 uppercase tracking-[0.05em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 lg:gap-14 items-center">
            <div className="relative fade-in order-1 md:order-1 mx-auto md:mx-0">
              <div className="max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px] mx-auto bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl flex flex-col items-center justify-center gap-3 p-6 sm:p-8 md:p-10 text-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gradient-to-br from-[#0E9BF0] to-[#25C97D]">
                  <Image
                    src="/team/aryan_t.jpg"
                    alt="Aryan Trivedi - Founder & CEO"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                  />
                </div>
                <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.78rem] text-[#8A9BB0] font-normal">Founder & CEO</p>
              </div>
              <div className="absolute bottom-2 right-2 sm:bottom-3 md:bottom-5 bg-[#F8D000] text-[#0B1421] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg sm:rounded-xl text-[0.55rem] sm:text-[0.6rem] md:text-[0.68rem] font-bold shadow-lg whitespace-nowrap">
                Founder & CEO
              </div>
            </div>
            <div className="fade-in order-2 md:order-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#F8D000] mb-3">
                <span className="w-[22px] h-[2px] bg-[#F8D000] rounded"></span>
                Meet the Founder
              </div>
              <div className="text-2xl sm:text-[1.6rem] md:text-[1.8rem] font-extrabold text-[#1C2E4A] tracking-[-0.03em] mb-1">Aryan Trivedi</div>
              <div className="text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] font-medium text-[#0E9BF0] mb-3 md:mb-4">Founder & CEO, GHL Scale Up</div>
              <div className="space-y-3">
                <p className="text-sm sm:text-[0.85rem] md:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  Aryan is a product strategist and entrepreneur who built GHL Scale Up from the ground up — starting as a freelancer network for startups and evolving it into a full-stack execution partner specializing in GoHighLevel CRM systems, automation, and white-label agency delivery.
                </p>
                <p className="text-sm sm:text-[0.85rem] md:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  After personally overseeing 200+ GoHighLevel projects across real estate, home services, SaaS, energy, and marketing agencies in 6 countries, Aryan launched <strong className="font-semibold text-[#1C2E4A]">GHL Scale Up</strong> to solve a recurring problem: most businesses invest in GoHighLevel but never get the architecture right.
                </p>
                <p className="text-sm sm:text-[0.85rem] md:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  His approach is simple — <strong className="font-semibold text-[#1C2E4A]">understand how the business sells, then build the GHL system that makes that process faster and more automated.</strong> No generic templates. No overengineered setups. Just systems that hold up at scale and grow revenue.
                </p>
                <p className="text-sm sm:text-[0.85rem] md:text-[0.9rem] font-light text-[#4A5568] leading-relaxed">
                  Based in Indore, India, Aryan leads a team of GHL specialists, automation engineers, and marketing strategists who work inside GoHighLevel every single day.
                </p>
              </div>
              <div className="flex justify-center md:justify-start gap-2.5 mt-5">
                <Link href="https://www.linkedin.com/in/aryantrivedi" target="_blank" className="w-10 h-10 rounded-lg bg-[#F8D000] border border-[#E8EDF4] flex items-center justify-center text-[1.5rem] font-semibold text-[#4A5568] hover:bg-[#0E9BF0] hover:text-white transition-all">in</Link>
                <Link href="mailto:aryan@ghlscaleup.com" className="w-10 h-10 rounded-lg bg-[#F8D000] border border-[#E8EDF4] flex items-center justify-center text-[1.5rem] font-semibold text-black hover:bg-[#0E9BF0] hover:text-white transition-all">✉</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-8 md:mb-12 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Core Team
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2E4A]">
              The Leadership Behind<br />
              <span className="text-[#0E9BF0]">GHL Scale Up</span>
            </h2>
            <p className="text-sm sm:text-[0.85rem] md:text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto px-4">
              The internal team that drives strategy, technology, operations, and growth across every project we take on. These are the people who make sure the machine runs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(28,46,74,0.1)] hover:border-[#0E9BF0] transition-all fade-in">
                <div className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] bg-[#F4F7FA] border-b border-[#E8EDF4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 text-center">
                  <div className="text-base sm:text-lg md:text-[1.05rem] font-bold text-[#1C2E4A] mb-1">{member.name}</div>
                  <div className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.78rem] font-medium text-[#0E9BF0] mb-2 md:mb-3">{member.role}</div>
                  <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.82rem] font-light text-[#4A5568] leading-relaxed line-clamp-4">{member.bio}</p>
                  <div className="flex justify-center gap-2 mt-3 md:mt-4">
                    <Link href={member.linkedin} target="_blank" className="w-10 h-10 rounded-md bg-[#F4F7FA] border border-[#E8EDF4] flex items-center justify-center text-[1.2rem] font-bold text-[#4A5568] hover:bg-[#0E9BF0] hover:text-white transition-all">in</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Matter Experts */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-8 md:mb-12 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#F8D000] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#F8D000] rounded"></span>
              Subject Matter Experts
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2E4A]">
              The Specialists Who<br />
              <span className="text-[#F8D000]">Execute Your Projects</span>
            </h2>
            <p className="text-sm sm:text-[0.85rem] md:text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto px-4">
              These are the hands-on experts who work directly on client deliverables. Each one is a domain specialist — vetted, tested, and trusted across dozens of projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white border border-[#E8EDF4] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(28,46,74,0.1)] hover:border-[#F8D000] transition-all fade-in">
                <div className="relative w-full aspect-square bg-[#F4F7FA] border-b border-[#E8EDF4] overflow-hidden">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="text-sm sm:text-[0.85rem] md:text-[0.95rem] font-bold text-[#1C2E4A] mb-0.5">{expert.name}</div>
                  <div className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.72rem] font-semibold text-[#F8D000] uppercase tracking-[0.06em] mb-1 sm:mb-2">{expert.role}</div>
                  <p className="text-[0.65rem] sm:text-[0.7rem] md:text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-2 sm:mb-2.5 line-clamp-3">{expert.bio}</p>
                  {expert.results && expert.results.length > 0 && (
                    <div className="flex flex-col gap-1 mb-2 pt-2 border-t border-[#E8EDF4]">
                      {expert.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.7rem] font-normal text-[#4A5568] flex gap-1.5">
                          <span className="text-[#25C97D] font-bold">✓</span> {result}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {expert.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="bg-[#F4F7FA] border border-[#E8EDF4] px-1 py-0.5 rounded-full text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] font-medium text-[#4A5568]">{skill}</span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-2 mt-2">
                    <Link href={expert.linkedin} target="_blank" className="w-10 h-10 rounded-md bg-[#F4F7FA] border border-[#E8EDF4] flex items-center justify-center text-[1rem] font-bold text-[#4A5568] hover:bg-[#0E9BF0] hover:text-white transition-all">in</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Network Banner */}
          <div className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-br from-[rgba(14,155,240,0.06)] to-[rgba(37,201,125,0.04)] border border-[rgba(14,155,240,0.12)] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-5 md:gap-6 lg:gap-8 fade-in">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">👥</div>
            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#1C2E4A] mb-1.5">Our Vetted Expert Network</h3>
              <p className="text-xs sm:text-sm md:text-[0.85rem] font-light text-[#4A5568] leading-relaxed">
                Beyond our subject matter experts, GHL Scale Up operates through a vetted expert network — one of India's most agile talent networks for automation, development, and marketing. Every expert in our network is pre-screened, tested on real projects, and matched to your specific requirements. This gives us the ability to scale teams up or down instantly — so whether you need a single GHL build or a 10-person sprint, we deliver without delays or quality drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              What Drives Us
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2E4A]">
              Our Mission & <span className="text-[#0E9BF0]">Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="bg-[#1C2E4A] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 text-white relative overflow-hidden fade-in">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-base sm:text-lg md:text-[1.2rem] font-extrabold tracking-[-0.02em] mb-2 md:mb-3 text-[#F8D000]">Our Mission</h3>
              <p className="text-sm sm:text-[0.88rem] font-light text-white/60 leading-relaxed">To help ambitious agencies and businesses build real recurring revenue on GoHighLevel — not through generic playbooks, but through proven systems tailored to their niche, their market, and their goals. Every deliverable we ship is benchmarked against one metric: does it grow your MRR?</p>
            </div>
            <div className="bg-gradient-to-br from-[rgba(14,155,240,0.08)] to-[rgba(37,201,125,0.05)] border border-[rgba(14,155,240,0.12)] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 fade-in">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔭</div>
              <h3 className="text-base sm:text-lg md:text-[1.2rem] font-extrabold tracking-[-0.02em] mb-2 md:mb-3 text-[#0E9BF0]">Our Vision</h3>
              <p className="text-sm sm:text-[0.88rem] font-light text-[#4A5568] leading-relaxed">To be the most trusted GoHighLevel partner in the world — the team agencies call when they are ready to stop duct-taping tools and start building a system that scales. We want every client who works with us to look back and say: "That's when things actually started working."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0B1421] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12 fade-in">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Our Values
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-white">
              What We <span className="text-[#F8D000]">Stand For</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-7 text-center hover:border-[rgba(248,208,0,0.25)] hover:-translate-y-1 transition-all fade-in">
                <div className="text-2xl sm:text-[1.5rem] md:text-[1.8rem] mb-2 md:mb-3">{value.icon}</div>
                <h4 className="text-sm sm:text-[0.85rem] md:text-[0.88rem] font-bold mb-1.5">{value.title}</h4>
                <p className="text-xs sm:text-[0.7rem] md:text-[0.75rem] text-[#8A9BB0] font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1C2E4A] to-[#111E30]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            <div className="fade-in text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Want to Work With a Team<br />
                That <span className="text-[#F8D000]">Actually Gets GHL?</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                We are a small team on purpose — so every client gets senior-level attention,
                not a junior passed off as an expert. Fill out the form and let's see if we're a good fit.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-white/40 text-xs sm:text-sm">
                <span className="flex items-center gap-1">✓ No obligation</span>
                <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1">✓ Free consultation</span>
                <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></span>
                <span className="flex items-center gap-1">✓ Response within 24h</span>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8">
                <ContactForm
                  variant="dark"
                  title="Let's Talk"
                  subtitle="Fill out the form and our team will reach out within 24 hours."
                  buttonText="Send Message →"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}