// app/blog/gohighlevel-funnel-builder-features/client.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import CopyButton from '@/components/blog/CopyButton';

export default function GHLFunnelBuilderClient() {
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

    // Progress bar
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
    { id: 'template-library', title: '1. Template Library' },
    { id: 'version-two', title: '2. Upgrade to Version 2' },
    { id: 'version-control', title: '3. Version Control' },
    { id: 'global-sections', title: '4. Global Sections' },
    { id: 'custom-values', title: '5. Custom Values' },
    { id: 'collaboration', title: '6. Real-Time Collaboration' },
    { id: 'html-rendering', title: '7. In-Editor HTML Rendering' },
    { id: 'bonus', title: 'Bonus: Page Toggle' },
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
          <span className="text-[#96A0B5]">›</span>
          <Link href="/blog" className="hover:text-[#0E9BF0] transition-colors">Blog</Link>
          <span className="text-[#96A0B5]">›</span>
          <span className="text-[#1A2236] font-medium">GoHighLevel Funnel Builder Features</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B1628] py-12 md:py-[72px] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-[120px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,155,240,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[80px] -left-[80px] w-[360px] h-[360px] bg-[radial-gradient(circle,rgba(37,201,125,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(14,155,240,0.15)] border border-[rgba(14,155,240,0.3)] text-[#0E9BF0] text-[11px] md:text-xs font-semibold tracking-wide uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 bg-[#0E9BF0] rounded-full" />
            GoHighLevel · Funnel Builder
          </div>
          
          <h1 className="text-[clamp(28px,6vw,46px)] font-extrabold leading-[1.2] md:leading-[1.15] text-white mb-3 md:mb-5 tracking-[-0.02em]">
            GoHighLevel Funnel Builder:<br />
            <span className="text-[#F8D000]">7 Features</span> Top Agencies<br />
            Use to Build Faster
          </h1>
          
          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-6 md:mb-9 max-w-[620px]">
            Most agencies use 20% of what GHL's funnel builder can do — and wonder why things feel slow. 
            Here's what the other 80% looks like, and how to use it every day.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white text-sm md:text-base">GS</div>
              <div>
                <div className="text-xs md:text-sm font-medium text-white">GHL Scale Up Team</div>
                <div className="text-[10px] md:text-xs text-white/50">Published April 7, 2026</div>
              </div>
            </div>
            <div className="w-px h-6 md:h-8 bg-white/15" />
            <div className="flex gap-3 md:gap-5">
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M7 4v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                7 min read
              </span>
              <span className="flex items-center gap-1 text-[10px] md:text-xs text-white/50">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1.5C4 1.5 1.5 4 1.5 7s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5S10 1.5 7 1.5z" stroke="currentColor" strokeWidth="1.5"/><path d="M5 7l1.5 1.5L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Beginner-friendly
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
              GoHighLevel's funnel builder gets talked about a lot. But most of the conversation stays surface-level — 
              drag and drop, templates, basic pages. <strong className="text-[#1A2236]">The agencies that actually build faster and convert better 
              aren't using a different tool.</strong> They're using the same tool, but going deeper than everyone else.
            </p>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 my-8 md:my-10">
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">70</span>%</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">reduction in manual workload for agencies using full GHL automation</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">50</span>+</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">agencies we've built full GHL systems for across 6 countries</div>
              </div>
              <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                <div className="text-3xl md:text-4xl font-extrabold text-[#1C2E4A] mb-1 md:mb-2"><span className="text-[#0E9BF0]">10</span>x</div>
                <div className="text-xs md:text-sm text-[#5C6880] leading-relaxed">faster funnel deployment using GHL's template library correctly</div>
              </div>
            </div>

            {/* Feature 1 */}
            <h2 id="template-library" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">1. The Template Library Most Agencies Walk Right Past</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">When you go to <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">Sites → Funnels → New Funnel</span>, the fastest move is the one most people skip: the Template Library. GHL has an organised collection of vertical and industry-specific funnels — not just generic designs, but actual offer funnels, sales pages, calendar funnels, and agency-specific layouts.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Instead of starting from a blank canvas and building for two hours, you pick a template that's close to what your client needs, add it to the account in seconds, and start editing from a working structure. For a busy agency, that alone changes the timeline on a project.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">01</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="4" height="4" rx="1" fill="#0E9BF0"/><rect x="7" y="1" width="4" height="4" rx="1" fill="#0E9BF0"/><rect x="1" y="7" width="4" height="4" rx="1" fill="#0E9BF0"/><rect x="7" y="7" width="4" height="4" rx="1" fill="#0E9BF0"/></svg>
                </div>
                Template Library
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Go from brief to live funnel in under 10 minutes</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Browse by industry, pick the closest match, add to account, and start editing. No blank canvas. No wasted setup time. The library is organised by vertical — so if you're building for a real estate client or a marketing agency, there's already a starting point.</p>
            </div>

            {/* Feature 2 */}
            <h2 id="version-two" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">2. Upgrade to Version Two — Before You Do Anything Else</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">When you open a funnel in GHL, look for the <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">Upgrade to Version 2</span> button in the top right. This migrates the funnel to GHL's newer builder — one that uses a faster CDN, supports one-step order forms, PayPal integration, Stripe Connect, and Global Products.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">It's a quick migration, not a rebuild. Old funnels come across cleanly. And the performance improvement on load times alone is worth doing it immediately on every funnel you touch.</p>

            <div className="bg-[#0B1628] rounded-xl p-5 md:p-7 lg:p-8 my-8 md:my-9 flex gap-3 md:gap-4 items-start">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-[rgba(248,208,0,0.15)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M9 2L11.5 7H16.5L12.5 10.5L14 16L9 13L4 16L5.5 10.5L1.5 7H6.5L9 2Z" fill="#F8D000"/></svg>
              </div>
              <div>
                <div className="text-xs md:text-sm font-bold text-[#F8D000] mb-1">Operator tip</div>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">Make upgrading to Version 2 a standard step in your funnel onboarding checklist. Never build on the old version for a new client — you're creating technical debt before the project even starts.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <h2 id="version-control" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">3. Version Control — Your Safety Net for Every Build</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This is one of those features that sounds like a nice-to-have until the first time you need it. Inside the GoHighLevel funnel builder, every edit you make is tracked. You can see the full version history and revert to any previous state with one click.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">For agencies working fast — especially with multiple team members in the same account — this is essential. You no longer have to fear making changes, testing things, or trying something different. You can always go back.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">03</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#25C97D] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#25C97D] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8FAF2] rounded flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="3" r="1.5" fill="#25C97D"/><circle cx="6" cy="9" r="1.5" fill="#25C97D"/><line x1="6" y1="4.5" x2="6" y2="7.5" stroke="#25C97D" strokeWidth="1.2"/></svg>
                </div>
                Version Control
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Every edit tracked. Every mistake reversible.</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Accidentally delete a section? Realised the old layout was better? Revert in one click. Version history means you can build with confidence — and your clients don't have to worry about what happens when someone on your team makes an error mid-project.</p>
            </div>

            {/* Feature 4 */}
            <h2 id="global-sections" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">4. Global Sections — Change One Thing, Update Everything</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This is one of the biggest time-savers in the GoHighLevel funnel builder, and most agencies don't use it. When you hover over a section in the editor, you'll see a small save icon on the left. Click it and you can turn that section into a <span className="bg-[#E8FAF2] text-[#0f7a4a] px-1.5 py-0.5 rounded font-medium">Global Section</span>.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">Once a section is global, any change you make to it automatically applies to every page it appears on. Headers, footers, offer stacks, pricing sections — anything that appears across multiple pages in a funnel becomes a single source of truth.</p>

            <div className="border-l-4 border-[#0E9BF0] my-8 md:my-10 pl-4 md:pl-7 py-1">
              <p className="text-base md:text-[22px] font-semibold text-[#1C2E4A] leading-relaxed italic">"Edit in one place, show up correctly everywhere. That's the difference between a 30-minute update and a 3-hour one."</p>
            </div>

            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">For agencies building funnels for multiple clients, this is particularly powerful. You can standardise elements across a client's funnel while still customising the parts that need to be unique per page.</p>

            {/* Feature 5 */}
            <h2 id="custom-values" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">5. Custom Values — One Funnel, Infinitely Personalised</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Inside GHL's funnel builder, you can reference <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">custom values</span> and <span className="bg-[#FFFBE6] text-[#1A2236] px-1.5 py-0.5 rounded font-medium">location values</span> directly in your text elements. The syntax looks like <code className="bg-[#F0F2F5] px-1.5 py-0.5 rounded text-xs md:text-sm">{'{{location.name}}'}</code> or <code className="bg-[#F0F2F5] px-1.5 py-0.5 rounded text-xs md:text-sm">{'{{today}}'}</code> — and these pull in real data on the front end automatically.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">What this means in practice: you can build one funnel template and deploy it across multiple clients. Each client's location name, logo, brand colour, and contact details are stored in their subaccount as custom values — and the funnel pulls them in automatically. You're not rebuilding anything. You're just filling in values.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">05</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F8D000] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#a07a00] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFFBE6] rounded flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="1" y="3" width="10" height="2" rx="1" fill="#a07a00"/><rect x="1" y="7" width="7" height="2" rx="1" fill="#a07a00"/></svg>
                </div>
                Custom Values
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Build once. Deploy for any client, automatically personalised.</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Custom values and location values let you reference client-specific information directly inside funnel text, images, and even SVG elements. Colours, logos, names, dates — all dynamic, all automatic. The result is a funnel that feels bespoke, built from a template.</p>
            </div>

            {/* Feature 6 */}
            <h2 id="collaboration" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">6. Real-Time Collaboration — See Who's In the Funnel</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">If you run a team, you've probably experienced the moment where two people were working on the same funnel at the same time and one person's changes disappeared. GHL now shows you who is inside a funnel in real time — both at the funnel overview level and inside the page editor itself.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">It sounds like a small thing. It prevents a surprisingly large amount of chaos, especially when you're managing multiple team members across different client funnels simultaneously.</p>

            <ul className="list-none my-6 md:my-8 space-y-2 md:space-y-3">
              {[
                'See other users\' presence before entering the editor',
                'Know immediately if someone else is editing the same page',
                'Avoid overwriting changes on active builds',
                'Manage team workflows without constant check-ins',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-[#5C6880]">
                  <span className="w-4 h-4 md:w-5 md:h-5 bg-[#E8FAF2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 12 9" fill="none"><path d="M1 4L4.5 7.5L11 1" stroke="#25C97D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Feature 7 */}
            <h2 id="html-rendering" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">7. In-Editor HTML Rendering — See Custom Code Without Previewing</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">If you use custom HTML, custom JavaScript, or embed code inside GHL funnels, you'll know the old pain: paste in your code, then toggle to preview just to see if it actually works. For complex elements, this adds up fast.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">GHL's funnel builder now has a <span className="bg-[#E8F5FE] text-[#0870b0] px-1.5 py-0.5 rounded font-medium">render toggle</span> inside the editor. Click it and your custom HTML renders directly in the builder — exactly as it will appear on the live page. No preview tab. No back-and-forth. You see what you get, in real time, while you're editing.</p>

            <div className="bg-white border border-[#DDE1E9] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 my-8 md:my-9 relative overflow-hidden">
              <div className="absolute top-4 right-4 md:top-7 md:right-7 text-3xl md:text-5xl font-extrabold text-[#F0F2F5]">07</div>
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0E9BF0] rounded-l" />
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E8F5FE] rounded flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><polyline points="4,4 1.5,6 4,8" stroke="#0E9BF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8,4 10.5,6 8,8" stroke="#0E9BF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="6.5" y1="3" x2="5.5" y2="9" stroke="#0E9BF0" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                In-Editor HTML Rendering
              </div>
              <h3 className="text-base md:text-xl font-bold text-[#1A2236] mb-2 md:mb-3">Custom code rendered live — no preview tab needed.</h3>
              <p className="text-sm md:text-base text-[#5C6880] leading-relaxed">Paste in custom HTML or JavaScript and toggle the render button. GHL shows you exactly what it will look like on the published page, right inside the editor. For developers and advanced builders, this alone saves significant time on every custom build.</p>
            </div>

            {/* Bonus */}
            <h2 id="bonus" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">Bonus: Page Toggle — The Small Feature That Changes Your Editing Speed</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">This one barely gets mentioned, but it deserves a spot: in the top right of the funnel editor, there's a page toggle that lets you jump between every page in your funnel without leaving the editor.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">No navigating back to the overview. No clicking into a different step. Just switch pages and keep editing. When you're deep in a multi-page funnel build and need to check consistency across steps, this saves more time than you'd expect.</p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-xl md:text-2xl lg:text-[26px] font-bold text-[#1C2E4A] mt-10 md:mt-14 mb-3 md:mb-4">The Agencies That Win on GHL Aren't Using a Different Tool</h2>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">Everything in this article is already inside GoHighLevel. There's nothing to add, no plugin to buy, no workaround required. These features are built in — and most agencies never touch them.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-4 md:mb-5">The agencies that build faster, make fewer mistakes, and deliver better results are the ones who've gone deep into a platform they're already paying for. That's the edge.</p>
            <p className="text-sm md:text-base text-[#5C6880] leading-relaxed mb-6 md:mb-8">If you're using GoHighLevel and still building funnels the slow way — that's worth fixing.</p>

            {/* CTA Block */}
            <div className="bg-gradient-to-br from-[#0B1628] to-[#1C2E4A] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden my-12 md:my-16">
              <div className="absolute -top-14 -right-14 w-72 h-72 bg-[radial-gradient(circle,rgba(248,208,0,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-block bg-[rgba(248,208,0,0.15)] text-[#F8D000] text-[10px] md:text-xs font-bold tracking-wider uppercase px-3 md:px-3.5 py-1 md:py-1.5 rounded-full mb-4 md:mb-5">GHL Scale Up</div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3">We Build GHL Systems That Actually Work</h2>
                <p className="text-sm md:text-base text-white/65 max-w-md mx-auto mb-6 md:mb-8">From full funnel builds to complete CRM automation — we set up GoHighLevel for agencies and businesses that want results, not just a platform.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1628] font-bold px-5 md:px-7 py-2.5 md:py-3.5 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] hover:-translate-y-0.5 transition-all">
                    Book a free strategy call
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
              <div className="text-xs font-bold tracking-wider uppercase text-[#5C6880] mb-4">In this article</div>
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
              <div className="text-sm md:text-base font-bold text-white mb-2">Need your GHL built right?</div>
              <div className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 md:mb-5">We've set up GoHighLevel for 50+ agencies across 6 countries. Funnels, automations, CRM, AI workflows — done properly.</div>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#F8D000] text-[#0B1628] font-bold py-2.5 md:py-3 rounded-lg text-sm md:text-base hover:bg-[#FFE44D] transition-all">
                Talk to us
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5h8M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="bg-white border border-[#DDE1E9] rounded-xl p-5">
              <div className="text-xs font-semibold text-[#5C6880] mb-3 uppercase tracking-wide">Share this article</div>
              <div className="flex gap-2 flex-wrap">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ghlscaleup.com/blog/gohighlevel-funnel-builder-features" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-[#0A66C2] text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <svg width="12" height="12" viewBox="0 0 13 13" fill="currentColor"><path d="M1.5 4.5h2V11h-2zM2.5 3.5a1 1 0 110-2 1 1 0 010 2zM5 4.5h1.9v.9h.02C7.2 4.8 8 4.3 9.1 4.3c2.1 0 2.4 1.4 2.4 3.1V11H9.6V7.8c0-.8 0-1.8-1.1-1.8-1.1 0-1.3.9-1.3 1.7V11H5V4.5z"/></svg>
                  LinkedIn
                </a>
                <a href="https://twitter.com/intent/tweet?url=https://ghlscaleup.com/blog/gohighlevel-funnel-builder-features&text=GoHighLevel+Funnel+Builder%3A+7+features+top+agencies+use+to+build+faster" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-md hover:opacity-85 transition-opacity">
                  <svg width="12" height="12" viewBox="0 0 13 13" fill="currentColor"><path d="M10.2 1.5h1.9L7.9 5.9 12.8 12H8.6L5.3 7.8 1.6 12H-.3l4.5-4.8L-.3 1.5h4.3l3 3.9 3.2-3.9zm-.7 9.4h1L3.6 2.6H2.5l7 8.3z"/></svg>
                  X
                </a>
                <CopyButton />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      {/* <section className="border-t border-[#DDE1E9] py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#1C2E4A] mb-6 md:mb-8">Related articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { tag: 'GHL Automation', title: 'How to Build a GHL CRM Pipeline That Actually Converts Leads', link: '/blog/ghl-crm-pipeline' },
              { tag: 'Agency Growth', title: 'GHL SaaS Mode: How to White-Label GoHighLevel for Your Agency', link: '/blog/ghl-saas-mode-setup' },
              { tag: 'AI + GHL', title: 'AI Workflows Inside GoHighLevel: What\'s Actually Worth Building', link: '/blog/ghl-ai-workflows' },
            ].map((post, idx) => (
              <Link key={idx} href={post.link} className="group block bg-white border border-[#DDE1E9] rounded-xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#0E9BF0] mb-2 md:mb-3">{post.tag}</div>
                <h4 className="text-sm md:text-base font-semibold text-[#1A2236] mb-2 md:mb-3 group-hover:text-[#0E9BF0] transition-colors line-clamp-2">{post.title}</h4>
                <p className="text-xs md:text-sm text-[#5C6880] mb-3 md:mb-4 line-clamp-2">Read more about {post.tag.toLowerCase()} and how to implement it effectively.</p>
                <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all">Read article →</div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}