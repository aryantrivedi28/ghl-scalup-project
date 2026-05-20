// app/services/membership-sites/page.tsx
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CtaBand from '@/components/sections/CtaBand';
import { 
  Users, 
  ClipboardList, 
  Video, 
  GraduationCap, 
  HelpCircle, 
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Target,
  Zap,
  BarChart3,
  Settings,
  PlayCircle,
  FileText
} from 'lucide-react';

export const metadata = {
  title: 'GHL Training & Onboarding Services | GHL Scale Up',
  description: 'End-to-end GHL training and onboarding for your team CRM, automations, reporting, funnels, and best practices. 200+ teams trained. Get a free training consultation.',
  keywords: 'GHL training, GoHighLevel onboarding, team training, GHL certification, SOPs',
  alternates: {
    canonical: 'https://www.ghlscaleup.com/services/training-onboarding',
  },
};

// Service Schema Component
const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GoHighLevel Training & Onboarding",
    "alternateName": "GHL Team Training",
    "description": "Complete team training and onboarding for GoHighLevel including live team training sessions, custom SOPs, recorded video training, role-based training, Q&A sessions, and ongoing support. Get your team from 20% to 100% GHL usage with expert-led training.",
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
    "serviceType": "Team Training & Onboarding",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Training Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Team Training"
          },
          "price": "997",
          "priceCurrency": "USD",
          "description": "2-hour live training + SOPs for up to 5 team members"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Onboarding"
          },
          "price": "2497",
          "priceCurrency": "USD",
          "description": "Full team training + SOPs + recordings + follow-up"
        }
      ]
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Agencies, Businesses, Sales Teams, Marketing Teams"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free training consultation"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function TrainingOnboardingPage() {
  // Related blog posts for this service
  const relatedBlogs = [
    {
      slug: 'how-to-set-up-gohighlevel-workflow-automation',
      title: 'How to Set Up GoHighLevel Workflow Automation for Beginners',
      excerpt: 'A step-by-step beginner\'s guide to GoHighLevel workflow automation. Learn what workflows are, how triggers and actions work, and build your first automation.',
      readTime: '19 min read',
      date: 'May 6, 2026'
    },
    {
      slug: 'where-to-hire-gohighlevel-experts',
      title: 'Where to Hire GoHighLevel Experts in 2026: 6 Best Places',
      excerpt: 'Looking for a GoHighLevel expert? Here are the 6 best places to find GHL professionals with a vetting checklist and red flags to avoid.',
      readTime: '21 min read',
      date: 'May 11, 2026'
    },
    {
      slug: 'gohighlevel-funnel-builder-features',
      title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use',
      excerpt: 'Discover the GoHighLevel funnel builder features most agencies overlook version control, global sections, custom values, and more.',
      readTime: '9 min read',
      date: 'April 7, 2026'
    }
  ];

  return (
    <>
      {/* Add Service Schema to Head */}
      <ServiceSchema />
      
      <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'GHL Training & Onboarding' }]} />

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
                GHL Training &<br />
                <span className="text-[#F8D000]">Onboarding</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We provide <strong className="text-white/90 font-medium">end-to-end training and onboarding for your team CRM, automations, reporting, funnels, and best practices</strong> so your team knows exactly how to use GHL from day one.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
                  Get a Free Training Consultation →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Training Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">200+</div>
                  <div className="text-[0.78rem] text-white/50">Teams trained</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Customized to your business</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">SOPs</div>
                  <div className="text-[0.78rem] text-white/50">Documentation included</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">Videos</div>
                  <div className="text-[0.78rem] text-white/50">Recorded training sessions</div>
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
              <span className="text-[#0E9BF0]">Team Success</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Your GHL system is only as good as your team's ability to use it. We make sure everyone knows exactly what to do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Users className="w-5 h-5" />, color: 'blue', title: 'Live Team Training', description: 'Live, interactive training sessions with your team. We cover exactly what they need to know based on their role sales, marketing, admin, or leadership.' },
              { icon: <FileText className="w-5 h-5" />, color: 'green', title: 'Custom SOPs', description: 'Written standard operating procedures for every process adding leads, managing pipelines, sending campaigns, running reports. Your team has a reference guide.' },
              { icon: <Video className="w-5 h-5" />, color: 'yellow', title: 'Recorded Video Training', description: 'Recorded sessions your team can watch anytime. Perfect for new hires or refresher training. Accessible on demand.' },
              { icon: <GraduationCap className="w-5 h-5" />, color: 'blue', title: 'Role-Based Training', description: 'Different training for different roles sales reps, marketing managers, admins, and executives. Everyone learns what they need.' },
              { icon: <HelpCircle className="w-5 h-5" />, color: 'green', title: 'Q&A Sessions', description: 'Dedicated Q&A time for your team to ask questions about their specific workflows. We make sure everyone leaves confident.' },
              { icon: <RefreshCw className="w-5 h-5" />, color: 'yellow', title: 'Ongoing Support', description: 'Follow-up support after training. Questions that come up as your team starts using GHL we are here to help.' },
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
                Is GHL Training & Onboarding<br />
                <span className="text-[#0E9BF0]">Right for Your Team?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                You've invested in GHL now make sure your team knows how to use it. Without proper training, even the best system won't deliver results. We bridge the gap between setup and adoption.
              </p>
              <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2E4A]">Training makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> An agency that just set up GHL for your clients</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> A business that recently migrated to GHL</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Adding new team members who need to learn GHL</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> A business owner wanting to delegate GHL management</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Already using GHL but not getting the results you expected</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of No Training</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Without proper training, your team will use 20% of GHL's capabilities. Leads will be missed. Automations will break. Reports won't be used. Your investment won't deliver ROI.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">With our training, your team becomes GHL experts. They know how to add leads, manage pipelines, run campaigns, and generate reports. Your system works as designed.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">20%</div>
                  <div className="text-[0.78rem] text-white/50">Average usage without training</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Usage with proper training</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">ROI</div>
                  <div className="text-[0.78rem] text-white/50">Maximized with trained team</div>
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
              Our Training Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
              How We Train Your<br />
              <span className="text-[#0E9BF0]">GHL Team</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A structured approach that ensures every team member knows exactly what to do.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Needs Assessment', description: 'We understand your team structure, roles, and responsibilities. We identify what each role needs to know and where the gaps are.' },
              { title: 'Custom Curriculum', description: 'We build a training plan tailored to your business sales processes, marketing workflows, reporting needs. No generic training.' },
              { title: 'Live Training Sessions', description: 'We deliver live, interactive training to your team. Role-based sessions ensure everyone learns what they need. Recordings for future reference.' },
              { title: 'SOP Creation', description: 'We document every process in clear, step-by-step SOPs. Your team has a reference guide for everything they need to do.' },
              { title: 'Q&A & Follow-up', description: 'We answer questions, review progress, and provide follow-up support. Your team gets confident using GHL.' },
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
              <span className="text-[#0E9BF0]">Training & Onboarding Guides</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
              Learn more about training your team and getting the most from GoHighLevel with these in-depth articles.
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
                    <span className="text-[#0E9BF0] font-semibold">Training & Onboarding</span>
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
            Ready to Empower Your Team<br />
            <span className="text-[#F8D000]">with GHL Expertise?</span>
          </h2>
          <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
            Book a free training consultation. We'll assess your team's needs, create a custom training plan, and show you how we can get your team up to speed quickly.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
              Book Your Free Training Consultation →
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
              <span className="text-[#0E9BF0]">GHL Training</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does training take?', a: 'Basic training for small teams takes 2-3 hours. Comprehensive training with SOPs and recordings takes 1-2 days. We work around your schedule.' },
              { q: 'Can you train different roles separately?', a: 'Yes. We provide role-based training sales reps, marketing managers, admins, executives. Each group learns what they need for their role.' },
              { q: 'Do you provide documentation?', a: 'Yes. We provide written SOPs for every process we cover. Your team has a reference guide they can use anytime.' },
              { q: 'What if we have new hires later?', a: 'You will have recordings and SOPs to onboard new team members. We also offer refresher training if needed.' },
              { q: 'Can you train on our specific processes?', a: 'Yes. Training is 100% customized to your business your pipelines, your automations, your workflows. No generic training.' },
              { q: 'Is training done live or recorded?', a: 'Live training with your team. We record everything so you have videos for future reference. Q&A included.' },
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
              Build on Your Training<br />
              <span className="text-[#0E9BF0]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'CRM Setup', description: 'Start with a properly configured CRM that makes training easier and processes clear.', href: '/services/crm-setup', icon: <Settings className="w-5 h-5" /> },
              { title: 'Workflow Automation', description: 'Train your team on automation workflows that save time and ensure consistency.', href: '/services/workflow-automation', icon: <Zap className="w-5 h-5" /> },
              { title: 'Reporting & Dashboards', description: 'Teach your team how to use dashboards to track performance and make data-driven decisions.', href: '/services/reporting', icon: <BarChart3 className="w-5 h-5" /> },
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
        title='Your GHL System Is Only as Good<br /><span class="hl-yellow">as Your Teams Ability to Use It.</span>'
        description="Invest in training to maximize your GHL investment. Book your free consultation and let us help your team become GHL experts."
        primaryText="Book Your Free Training Consultation →"
        primaryHref="/contact-us"
      />
    </>
  );
}