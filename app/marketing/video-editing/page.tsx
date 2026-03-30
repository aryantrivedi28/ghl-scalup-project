// app/services/marketing/video-editing/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';

export const metadata = {
  title: 'Video Editing & Production Services | GHL Scale Up',
  description: 'Professional video editing and production services. Reels, YouTube videos, ad creative, UGC editing, and promotional videos. Get a free video consultation.',
  keywords: 'video editing, video production, reel editing, YouTube editing, ad creative, UGC editing'
};

export default function VideoEditingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Marketing Services', href: '/services/marketing' }, { label: 'Video Editing & Production' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Marketing Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Video Editing &<br />
                <span className="text-[#F8D000]">Production</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We deliver <strong className="text-white/90 font-medium">professional video editing and production services</strong> — reels, YouTube videos, ad creative, UGC editing, and promotional videos. High-quality visuals that capture attention and drive engagement.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Video Consultation →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Video Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">500+</div>
                  <div className="text-[0.78rem] text-white/50">Videos edited</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Ad creatives produced</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">3x</div>
                  <div className="text-[0.78rem] text-white/50">Higher engagement with video</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">24h</div>
                  <div className="text-[0.78rem] text-white/50">Average turnaround time</div>
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
              Complete Video Production<br />
              <span className="text-[#0E9BF0]">That Captures Attention</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Professional video editing that transforms raw footage into engaging content that drives results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📱', color: 'blue', title: 'Reel & Short-Form Editing', description: 'Fast-paced, engaging edits for TikTok, Instagram Reels, and YouTube Shorts. Hook-driven content optimized for maximum retention and engagement.' },
              { icon: '▶️', color: 'green', title: 'YouTube Video Editing', description: 'Full-length video editing for YouTube channels. Intros, outros, transitions, B-roll, sound design, and color grading. Professional content that builds audiences.' },
              { icon: '📢', color: 'yellow', title: 'Ad Creative Production', description: 'High-converting video ads for Meta, TikTok, Google, and LinkedIn. Ad formats optimized for each platform with compelling hooks and clear CTAs.' },
              { icon: '🎬', color: 'blue', title: 'UGC Editing', description: 'Authentic user-generated content editing that feels native to each platform. Raw footage transformed into polished, relatable content that builds trust.' },
              { icon: '🎨', color: 'green', title: 'Motion Graphics & Animation', description: 'Custom motion graphics, lower thirds, text animations, and visual effects that enhance storytelling and brand identity.' },
              { icon: '🎵', color: 'yellow', title: 'Sound Design & Mixing', description: 'Professional audio editing, background music selection, sound effects, and voice-over enhancement. Clear, engaging audio that keeps viewers watching.' },
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
                Is Video Editing & Production<br />
                <span className="text-[#0E9BF0]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                Video is the most engaging content format online. 91% of consumers want to see more video content from brands. If you're not using video, you're missing the opportunity to connect with your audience.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Video editing makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A content creator or influencer needing regular video content</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A brand running video ads that need professional editing</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> A business with raw footage that needs to be transformed into content</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D} font-bold flex-shrink-0">✓</span> A YouTube creator needing consistent, high-quality edits</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><span className="text-[#25C97D] font-bold flex-shrink-0">✓</span> An ecommerce brand needing product showcase videos</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Power of Video</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Video content gets 48% more views than other content formats. Social media algorithms favor video. People remember 95% of a message when they watch it in a video, compared to 10% when reading it.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our video editing services turn raw footage into polished, engaging content that captures attention and drives action.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">91%</div>
                  <div className="text-[0.78rem] text-white/50">Consumers want more video content</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">48%</div>
                  <div className="text-[0.78rem] text-white/50">More views than other content types</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">95%</div>
                  <div className="text-[0.78rem] text-white/50">Message retention with video</div>
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
              Our Video Production Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Create<br />
              <span className="text-[#0E9BF0]">Engaging Video Content</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A streamlined process that turns raw footage into professional content.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Content Strategy & Brief', description: 'We understand your goals, audience, and brand voice. We create a creative brief outlining the video style, format, and key messages for your project.' },
              { title: 'Raw Footage Review', description: 'We review all raw footage, identify the best takes, and create a rough cut for your review. We ensure we capture the story you want to tell.' },
              { title: 'Editing & Post-Production', description: 'We edit video, add transitions, B-roll, graphics, text overlays, and sound design. Professional color grading and audio enhancement for polished results.' },
              { title: 'Review & Revisions', description: 'We deliver your first cut for review. We incorporate feedback and refine until the video meets your vision. Up to 2 rounds of revisions included.' },
              { title: 'Final Delivery & Optimization', description: 'We deliver final videos in formats optimized for your platforms — TikTok, Instagram, YouTube, or ads. Ready to publish.' },
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
            Ready to Transform Your<br />
            <span className="text-[#F8D000]">Raw Footage into Engaging Content?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free video consultation. We'll review your content goals, discuss your video needs, and show you how professional editing can elevate your brand.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Video Consultation →
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
              <span className="text-[#0E9BF0]">Video Editing & Production</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What video formats do you edit?', a: 'We edit all formats — TikTok (9:16), Instagram Reels (9:16), YouTube (16:9), YouTube Shorts (9:16), landscape for websites, and custom dimensions for ads. We deliver optimized for your platform.' },
              { q: 'How long does video editing take?', a: 'Short-form videos (reels, shorts): 24-48 hours. YouTube videos: 3-5 days. Complex projects: 5-7 days. We work with your timeline and provide rush options when needed.' },
              { q: 'Do you provide raw footage?', a: 'We work with footage you provide. We can also help source stock footage, B-roll, and music to enhance your content. If you need production, we can connect you with videographers.' },
              { q: 'What software do you use?', a: 'We use professional editing software including Adobe Premiere Pro, After Effects, DaVinci Resolve, and Final Cut Pro. High-quality output guaranteed.' },
              { q: 'Can you add captions?', a: 'Yes. We add professional captions and subtitles to all videos. Captions increase engagement and make content accessible to viewers watching without sound.' },
              { q: 'How much does video editing cost?', a: 'Pricing varies by video length, complexity, and turnaround time. Short-form reels start at $150-300. YouTube videos start at $300-800. We provide custom quotes based on your needs.' },
              { q: 'Do you offer bulk packages?', a: 'Yes. We offer monthly retainer packages for regular content creators. Packages include 4-20 videos per month with priority turnaround and discounted rates.' },
              { q: 'What if I need revisions?', a: 'We include 2 rounds of revisions with every project. We want you to be completely satisfied with the final product.' },
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
              Related Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              Amplify Your Video Content<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Social Media Management', description: 'Distribute your video content across platforms to maximize reach and engagement.', href: '/services/marketing/social-media-management' },
              { title: 'Content Creation & Copywriting', description: 'Scriptwriting and captions that hook viewers and drive action.', href: '/services/marketing/content-copywriting' },
              { title: 'TikTok Ads Management', description: 'Turn your video content into high-performing ad campaigns.', href: '/services/marketing/tiktok-ads' },
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
        title="Stop Letting Great Footage Go to Waste.<br /><span class='hl-yellow'>Start Creating Engaging Video Content.</span>"
        description="Professional video editing transforms raw footage into content that captures attention and drives results. Book your free consultation today."
        primaryText="Book Your Free Video Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}