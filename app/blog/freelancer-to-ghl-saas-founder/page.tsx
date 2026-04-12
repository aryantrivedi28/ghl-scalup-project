// app/blog/freelancer-to-ghl-saas-founder/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue | GHL Scale Up',
  description: 'Transition from one-off projects to a scalable SaaS business using GHL white-label.',
};

export default function FreelancerToSaaSFounder() {
  return (
    <>
      <div className="fixed top-0 left-0 h-1 bg-[#0E9BF0] z-50 transition-all duration-100" id="progress-bar" />

      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-sm text-[#5C6880]">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <span className="text-[#96A0B5]">›</span>
          <Link href="/blog" className="hover:text-[#0E9BF0] transition-colors">Blog</Link>
          <span className="text-[#96A0B5]">›</span>
          <span className="text-[#1A2236] font-medium">Freelancer to GHL SaaS Founder</span>
        </div>
      </nav>

      <section className="bg-[#0B1628] py-[72px] px-6 relative overflow-hidden">
        <div className="max-w-[760px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[rgba(14,155,240,0.15)] border border-[rgba(14,155,240,0.3)] text-[#0E9BF0] text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full mb-6">
            Business · SaaS
          </div>
          <h1 className="text-[clamp(30px,5vw,46px)] font-extrabold leading-[1.15] text-white mb-5">
            From Freelancer to<br />
            <span className="text-[#F8D000]">GHL SaaS Founder</span>: Recurring Revenue
          </h1>
          <p className="text-lg text-white/65 leading-relaxed mb-9 max-w-[620px] mx-auto">
            Transition from one-off projects to a scalable SaaS business using GHL white-label.
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#0E9BF0] to-[#25C97D] flex items-center justify-center font-bold text-white">GS</div>
              <div>
                <div className="text-sm font-medium text-white">GHL Scale Up Team</div>
                <div className="text-xs text-white/50">Published March 25, 2026</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div className="flex gap-5">
              <span className="flex items-center gap-1.5 text-xs text-white/50">7 min read</span>
              <span className="flex items-center gap-1.5 text-xs text-white/50">Advanced</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1080px] mx-auto px-6 py-16">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[19px] leading-relaxed text-[#2D3748] mb-8">Coming soon. This guide is currently being written and will be published shortly.</p>
          
          <div className="bg-[#F8F9FB] border border-[#DDE1E9] rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">💼</div>
            <h2 className="text-xl font-bold text-[#1C2E4A] mb-2">Guide Coming Soon</h2>
            <p className="text-[#5C6880] mb-4">We're working on a comprehensive guide for transitioning to GHL SaaS.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 bg-[#F8D000] text-[#0B1628] font-bold px-6 py-3 rounded-lg hover:bg-[#FFE44D] transition-all">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

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