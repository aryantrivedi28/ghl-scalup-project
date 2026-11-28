// // app/services/training/page.tsx
// import Link from 'next/link';
// import Breadcrumb from '@/components/layout/Breadcrumb';
// import CtaBand from '@/components/sections/CtaBand';
// import {
//   Lock,
//   Clock,
//   CreditCard,
//   Users,
//   Mail,
//   BarChart3,
//   ArrowRight,
//   CheckCircle2,
//   BookOpen,
//   GraduationCap,
//   Video,
//   Layers,
//   Zap,
//   DollarSign,
//   Shield,
//   TrendingUp,
//   Star
// } from 'lucide-react';
// import { useFaqSchema } from '@/hooks/useFaqSchema';
// import { generateFaqSchema } from '@/lib/faqSchema';

// export const metadata = {
//   title: 'GHL Training and Onboarding for Teams | GHL Scale Up',
//   description: 'End-to-end GHL training and onboarding for your team CRM, automations, funnels, AI, and best practices. 200+ teams trained. Book a free training consultation.',
//   keywords: 'GHL membership site, GoHighLevel course platform, online course builder, membership site setup, digital products',
//   alternates: {
//     canonical: 'https://www.ghlscaleup.com/services/training',
//   },
// };

// // Service Schema Component
// const ServiceSchema = () => {
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     "name": "GoHighLevel Training and Onboarding",
//     "alternateName": "GHL Training Program",
//     "description": "Comprehensive training and onboarding for GoHighLevel CRM, automations, funnels, and best practices. Learn how to maximize your GHL potential with our expert-led sessions.",
//     "provider": {
//       "@type": "LocalBusiness",
//       "name": "GHL Scale Up",
//       "url": "https://www.ghlscaleup.com",
//       "logo": "https://www.ghlscaleup.com/web-app-manifest-192x192.png",
//       "sameAs": [
//         "https://www.linkedin.com/company/ghl-scale-up",
//         "https://x.com/GHLScaleUp"
//       ]
//     },
//     "serviceType": "Training and Onboarding",
//     "areaServed": {
//       "@type": "Country",
//       "name": "United States"
//     },
//     "hasOfferCatalog": {
//       "@type": "OfferCatalog",
//       "name": "Course Site Packages",
//       "itemListElement": [
//         {
//           "@type": "Offer",
//           "itemOffered": {
//             "@type": "Service",
//             "name": "Basic Membership Site"
//           },
//           "price": "1997",
//           "priceCurrency": "USD",
//           "description": "Single-tier membership with 10+ modules"
//         },
//         {
//           "@type": "Offer",
//           "itemOffered": {
//             "@type": "Service",
//             "name": "Advanced Course Platform"
//           },
//           "price": "3497",
//           "priceCurrency": "USD",
//           "description": "Multi-tier memberships with drip content and community"
//         }
//       ]
//     },
//     "audience": {
//       "@type": "BusinessAudience",
//       "audienceType": "Coaches, Consultants, Educators, Course Creators"
//     },
//     "offers": {
//       "@type": "Offer",
//       "price": "0",
//       "priceCurrency": "USD",
//       "description": "Free course consultation"
//     }
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//     />
//   );
// };

// export default function MembershipCoursesPage() {
//   // Related blog posts for this service
//   const relatedBlogs = [
//     {
//       slug: 'ghl-white-label-saas-guide',
//       title: 'How to Set Up GoHighLevel White-Label SaaS: Complete Guide',
//       excerpt: 'Domains, snapshots, Stripe billing, sub-account provisioning, and pricing strategies for your SaaS or course platform.',
//       readTime: '8 min read',
//       date: 'April 7, 2026'
//     },
//     {
//       slug: 'freelancer-to-ghl-saas-founder',
//       title: 'From Freelancer to GHL SaaS Founder: Recurring Revenue',
//       excerpt: 'Transition from one-off projects to a scalable recurring revenue business using GHL white-label for courses and memberships.',
//       readTime: '7 min read',
//       date: 'March 25, 2026'
//     },
//     {
//       slug: 'gohighlevel-funnel-builder-features',
//       title: 'GoHighLevel Funnel Builder: 7 Features Top Agencies Use',
//       excerpt: 'Discover the GoHighLevel funnel builder features for creating high-converting course sales pages and member onboarding.',
//       readTime: '9 min read',
//       date: 'April 7, 2026'
//     }
//   ];

//   const faqs = [
//     { q: 'Can I host videos in GHL?', a: 'Yes. GHL supports video hosting. You can upload videos directly or embed from YouTube, Vimeo, and other platforms. Videos are protected and only accessible to members.' },
//     { q: 'How does drip content work?', a: 'You can schedule content to release based on signup date. For example, Module 1 on day 1, Module 2 on day 7, etc. Keeps students engaged and prevents overwhelm.' },
//     { q: 'Can I create multiple membership tiers?', a: 'Yes. You can create free tiers, basic, premium, and VIP levels. Each tier can have different content access and pricing.' },
//     { q: 'What about quizzes and assessments?', a: 'GHL includes form and survey tools for quizzes, assessments, and feedback. You can create custom quizzes with scoring and conditional logic.' },
//     { q: 'Can students have profiles?', a: 'Yes. Students have member profiles where they can track progress, access content, and manage their account settings.' },
//     { q: 'How much does this cost?', a: 'GHL costs $97-$297/month for the platform. There are no transaction fees on your member payments. We provide fixed-price quotes for setup based on your needs.' },
//   ];

//   generateFaqSchema(faqs);
//   return (
//     <>
//       {/* Add Service Schema to Head */}
//       <ServiceSchema />

//       <Breadcrumb items={[{ label: 'GHL Services', href: '/services' }, { label: 'Membership & Course Sites' }]} />

//       {/* Page Hero */}
//       <section className="bg-gradient-to-b from-[#1C2E4A] to-[#111E30] text-white py-16 md:py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(14,155,240,0.1),transparent)] pointer-events-none"></div>
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
//           <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.2)] text-[#F8D000] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
//                 GHL Service
//               </div>
//               <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
//                 Membership &<br />
//                 <span className="text-[#F8D000]">Course Sites</span>
//               </h1>
//               <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
//                 We build <strong className="text-white/90 font-medium">fully functional membership platforms and online course sites inside GoHighLevel</strong> with drip content, gated access, payment integration, and student management.
//               </p>
//               <div className="flex gap-3.5 flex-wrap">
//                 <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
//                   Get a Free Course Consultation →
//                 </Link>
//                 <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
//                   What's Included
//                 </Link>
//               </div>
//             </div>
//             <div>
//               <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
//                 <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Course Results</h3>
//                 <div className="flex items-center gap-4 py-3 border-b border-white/10">
//                   <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">100%</div>
//                   <div className="text-[0.78rem] text-white/50">Gated content protection</div>
//                 </div>
//                 <div className="flex items-center gap-4 py-3 border-b border-white/10">
//                   <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">Drip</div>
//                   <div className="text-[0.78rem] text-white/50">Content release scheduling</div>
//                 </div>
//                 <div className="flex items-center gap-4 py-3 border-b border-white/10">
//                   <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">24/7</div>
//                   <div className="text-[0.78rem] text-white/50">Student access from anywhere</div>
//                 </div>
//                 <div className="flex items-center gap-4 py-3">
//                   <div className="text-[1.4rem] font-extrabold text-[#F8D000] tracking-[-0.03em] min-w-[80px]">MRR</div>
//                   <div className="text-[0.78rem] text-white/50">Recurring subscription revenue</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What's Included */}
//       <section className="py-16 md:py-20 bg-[#F4F7FA]" id="included">
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8">
//           <div className="text-center max-w-[640px] mx-auto mb-12">
//             <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
//               <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
//               What's Included
//             </div>
//             <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
//               Everything You Need for<br />
//               <span className="text-[#0E9BF0]">Your Membership Site</span>
//             </h2>
//             <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
//               Launch a professional membership platform or course site without expensive third-party tools.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {[
//               { icon: <Lock className="w-5 h-5" />, color: 'blue', title: 'Gated Content Areas', description: 'Password-protected pages and content that only members can access. Restrict content by membership level or subscription plan.' },
//               { icon: <Clock className="w-5 h-5" />, color: 'green', title: 'Drip Content Scheduling', description: 'Release content on a schedule daily, weekly, or based on signup date. Keep members engaged and prevent overwhelm.' },
//               { icon: <CreditCard className="w-5 h-5" />, color: 'yellow', title: 'Subscription Payments', description: 'Connect Stripe for monthly or annual subscriptions. One-time payments, trial periods, and payment plans all supported.' },
//               { icon: <Users className="w-5 h-5" />, color: 'blue', title: 'Student Management', description: 'Track member progress, engagement, and activity. Manage student accounts, reset passwords, and handle cancellations.' },
//               { icon: <Mail className="w-5 h-5" />, color: 'green', title: 'Automated Emails', description: 'Welcome sequences, progress reminders, renewal notices, and re-engagement campaigns for your members.' },
//               { icon: <BarChart3 className="w-5 h-5" />, color: 'yellow', title: 'Analytics & Tracking', description: 'Track enrollments, cancellations, churn rate, and lifetime value. Know exactly how your membership business is performing.' },
//             ].map((item, index) => (
//               <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
//                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 ${item.color === 'blue' ? 'bg-[rgba(14,155,240,0.1)] text-[#0E9BF0]' :
//                     item.color === 'green' ? 'bg-[rgba(37,201,125,0.1)] text-[#25C97D]' : 'bg-[rgba(248,208,0,0.12)] text-[#F8D000]'
//                   }`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-[0.92rem] font-bold text-[#1C2E4A] mb-1.5">{item.title}</h3>
//                 <p className="text-[0.82rem] font-light text-[#4A5568] leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Who Is This For */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8">
//           <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
//                 <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
//                 Who Is This For
//               </div>
//               <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2E4A]">
//                 Is Membership & Course Sites<br />
//                 <span className="text-[#0E9BF0]">Right for Your Business?</span>
//               </h2>
//               <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
//                 If you have knowledge to share, a community to build, or recurring revenue to generate a membership site or course platform is the answer. GHL gives you everything you need in one place.
//               </p>
//               <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed mb-4">
//                 <strong className="font-semibold text-[#1C2E4A]">Membership sites make sense if you are:</strong>
//               </p>
//               <ul className="list-none flex flex-col gap-2.5 mt-5">
//                 <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> A coach, consultant, or expert with knowledge to monetize</li>
//                 <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> An agency wanting to add a recurring revenue stream</li>
//                 <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> A business with an existing audience to serve</li>
//                 <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Currently using Kajabi or Teachable and want more features</li>
//                 <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#4A5568] leading-relaxed"><CheckCircle2 className="w-4 h-4 text-[#25C97D] flex-shrink-0 mt-0.5" /> Looking to build a community around your expertise</li>
//               </ul>
//             </div>
//             <div>
//               <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
//                 <h3 className="text-[1.1rem] font-bold mb-4">The Membership Economy</h3>
//                 <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">The subscription economy is growing 5x faster than traditional businesses. Membership sites create predictable, recurring revenue that builds wealth over time.</p>
//                 <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">With GHL, you get course hosting, membership management, payments, email marketing, and community features all in one platform. No more paying for multiple tools.</p>
//                 <div className="flex items-center gap-3 py-3 border-t border-white/10">
//                   <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">5x</div>
//                   <div className="text-[0.78rem] text-white/50">Subscription economy growth rate</div>
//                 </div>
//                 <div className="flex items-center gap-3 py-3 border-t border-white/10">
//                   <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">$0</div>
//                   <div className="text-[0.78rem] text-white/50">Transaction fees with GHL</div>
//                 </div>
//                 <div className="flex items-center gap-3 py-3 border-t border-white/10">
//                   <div className="text-[1.3rem] font-extrabold text-[#F8D000] min-w-[70px]">All-in-1</div>
//                   <div className="text-[0.78rem] text-white/50">Course + CRM + Email + Payments</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-16 md:py-20 bg-[#F4F7FA]">
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8">
//           <div className="max-w-[600px] mb-12">
//             <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
//               <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
//               Our Course Build Process
//             </div>
//             <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
//               How We Build Your<br />
//               <span className="text-[#0E9BF0]">Membership Site</span>
//             </h2>
//             <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed">A systematic approach to launching a membership platform that students love.</p>
//           </div>
//           <div className="flex flex-col">
//             {[
//               { title: 'Content Strategy', description: 'We map your course content modules, lessons, videos, worksheets. We design the learning path and decide drip schedule to keep students engaged.' },
//               { title: 'Platform Architecture', description: 'We set up your membership structure free vs paid tiers, content access levels, and member management system.' },
//               { title: 'Course Build & Design', description: 'We build your course pages, video hosting, and lesson structure inside GHL. Clean, professional design that showcases your content.' },
//               { title: 'Payment Integration', description: 'We connect Stripe for payments subscriptions, one-time, trials, and payment plans. Automated billing and member provisioning.' },
//               { title: 'Launch & Support', description: 'We launch your membership site and train you on managing members, adding content, and tracking engagement. Ongoing support available.' },
//             ].map((step, index) => (
//               <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[#E8EDF4] last:border-b-0">
//                 <div className="w-16 h-16 rounded-full bg-[#1C2E4A] flex items-center justify-center text-[0.9rem] font-extrabold text-[#F8D000] flex-shrink-0">
//                   {String(index + 1).padStart(2, '0')}
//                 </div>
//                 <div>
//                   <h3 className="text-base font-bold text-[#1C2E4A] mb-1.5">{step.title}</h3>
//                   <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Related Blog Posts Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8">
//           <div className="text-center max-w-[600px] mx-auto mb-10">
//             <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
//               <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
//               Free Resources
//             </div>
//             <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
//               Read Our<br />
//               <span className="text-[#0E9BF0]">Membership & Course Guides</span>
//             </h2>
//             <p className="text-[0.9rem] font-light text-[#4A5568] leading-relaxed max-w-[580px] mx-auto">
//               Learn more about building passive income streams and recurring revenue with membership sites.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {relatedBlogs.map((blog, index) => (
//               <Link
//                 key={index}
//                 href={`/blog/${blog.slug}`}
//                 className="group bg-[#F8F9FB] border border-[#E8EDF4] rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all"
//               >
//                 <div className="flex flex-col">
//                   <div className="flex items-center gap-2 text-[0.65rem] text-[#5C6880] mb-2">
//                     <span className="text-[#0E9BF0] font-semibold">Membership & Courses</span>
//                     <span>•</span>
//                     <div className="flex items-center gap-1">
//                       <Clock className="w-3 h-3" />
//                       <span>{blog.readTime}</span>
//                     </div>
//                   </div>
//                   <h3 className="text-[0.95rem] font-bold text-[#1C2E4A] group-hover:text-[#0E9BF0] transition-colors mb-2 line-clamp-2">
//                     {blog.title}
//                   </h3>
//                   <p className="text-[0.75rem] text-[#5C6880] leading-relaxed mb-3 line-clamp-2">
//                     {blog.excerpt}
//                   </p>
//                   <div className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#0E9BF0] group-hover:gap-2 transition-all mt-auto">
//                     Read Full Guide <ArrowRight className="w-3 h-3" />
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="bg-[#1C2E4A] py-16 text-center text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(14,155,240,0.08),transparent)] pointer-events-none"></div>
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
//           <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5">
//             Ready to Turn Your Knowledge<br />
//             <span className="text-[#F8D000]">Into Recurring Revenue?</span>
//           </h2>
//           <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
//             Book a free course consultation. We'll help you structure your content, design your membership tiers, and launch a platform that generates passive income.
//           </p>
//           <div className="flex gap-3.5 justify-center flex-wrap">
//             <Link href="/contact" className="bg-[#F8D000] text-[#0B1421] px-10 py-4 rounded-[10px] text-[0.92rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(248,208,0,0.2)] transition-all">
//               Book Your Free Course Consultation →
//             </Link>
//             <Link href="mailto:aryan@finzie.co" className="bg-transparent text-white px-10 py-4 rounded-[10px] text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
//               Or Email Us Directly
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* FAQ */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8">
//           <div className="text-center max-w-[600px] mx-auto mb-12">
//             <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
//               <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
//               Frequently Asked Questions
//             </div>
//             <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
//               Common Questions About<br />
//               <span className="text-[#0E9BF0]">GHL Membership Sites</span>
//             </h2>
//           </div>

//           <div className="max-w-[800px] mx-auto">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border-b border-[#E8EDF4]">
//                 <details className="group py-5">
//                   <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors">
//                     {faq.q}
//                     <span className="text-[0.7rem] text-[#8A9BB0] group-open:rotate-180 transition-transform">▼</span>
//                   </summary>
//                   <p className="text-[0.85rem] font-light text-[#4A5568] leading-relaxed pt-2 pb-3">{faq.a}</p>
//                 </details>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Related Services */}
//       <section className="py-16 md:py-20 bg-[#F4F7FA]">
//         <div className="max-w-[1200px] mx-auto px-4 md:px-8">
//           <div className="text-center max-w-[600px] mx-auto mb-10">
//             <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
//               <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
//               Related GHL Services
//             </div>
//             <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2E4A]">
//               Enhance Your Membership Site<br />
//               <span className="text-[#0E9BF0]">With These Services</span>
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-5">
//             {[
//               { title: 'Sales Funnel Development', description: 'Build high-converting sales funnels to attract new members and convert visitors into subscribers.', href: '/services/funnel-development', icon: <Zap className="w-5 h-5" /> },
//               { title: 'Email & SMS Automation', description: 'Engage members with welcome sequences, renewal reminders, and re-engagement campaigns.', href: '/services/campaign-automation', icon: <Mail className="w-5 h-5" /> },
//               { title: 'CRM Setup', description: 'Manage your member database with proper segmentation and tracking for better retention.', href: '/services/crm-setup', icon: <Users className="w-5 h-5" /> },
//             ].map((service, index) => (
//               <div key={index} className="bg-white border border-[#E8EDF4] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,46,74,0.08)] hover:border-[#0E9BF0] transition-all">
//                 <div className="w-10 h-10 rounded-lg bg-[rgba(14,155,240,0.1)] flex items-center justify-center mb-3 text-[#0E9BF0]">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-1.5">{service.title}</h3>
//                 <p className="text-[0.78rem] font-light text-[#4A5568] leading-relaxed mb-3">{service.description}</p>
//                 <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0E9BF0] hover:gap-2 transition-all">
//                   Learn More <ArrowRight className="w-3 h-3" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CtaBand
//         title='Build a Passive Income Stream<br /><span class="hl-yellow">With Your Knowledge.</span>'
//         description="Turn your expertise into recurring revenue. Let us build your membership site or course platform so you can focus on creating great content."
//         primaryText="Book Your Free Course Consultation →"
//         primaryHref="/book-a-call"
//       />
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function TrainingPage() {
  // SEO / FAQ Data matching the screenshot exactly
  const FAQS = [
    {
      q: "What is included in GoHighLevel training?",
      a: "Personalised, practical training sessions for your team, taught on your own account. Every engagement also includes session recordings, customised SOPs and a defined follow-up support period.",
    },
    {
      q: "Can you train our team from beginner to advanced levels?",
      a: "Yes. We can train your team across GoHighLevel, from the basics to advanced features. Your roadmap is customised around the areas your team needs, so nobody has to complete every module.",
    },
    {
      q: "Do you provide training on our own GoHighLevel account?",
      a: "Yes. Training takes place on your own GoHighLevel account, so your team learns the setup it will actually use.",
    },
    {
      q: "Can the training roadmap be customised?",
      a: "Yes. We shape the roadmap around your business, your team's current knowledge, your business model and your learning priorities. It is not a fixed curriculum.",
    },
    {
      q: "Do you provide session recordings?",
      a: "Yes. You receive recordings of your sessions to refer back to, or in case a team member misses one. Because training is personalised, we generally prefer to adjust or reschedule a session with you rather than use a recording as a replacement for live training.",
    },
    {
      q: "Will we receive customised SOPs?",
      a: "Yes. We provide practical documentation tailored to your training requirements and workflows, so team members can refer back to the processes they learned.",
    },
    {
      q: "Is follow-up support included after training?",
      a: "Yes. A defined follow-up support period is included. The exact period and scope are discussed and agreed with you as part of the engagement.",
    },
    {
      q: "How much does GoHighLevel training cost?",
      a: "Our GoHighLevel training generally starts with an hourly engagement model, with rates typically ranging from $15 to $20 USD per hour. The final quote depends on your training requirements, the areas you want to cover, and the level of guidance your team needs. We discuss the requirements first and recommend a suitable engagement model during consultation.",
    },
    {
      q: "Can you schedule training according to our time zone?",
      a: "Yes. We work with your team's time zone and availability to agree on suitable sessions. Sessions are scheduled through mutual discussion rather than a fixed classroom timetable.",
    },
    {
      q: "What happens if a team member misses a session?",
      a: "If a team member cannot attend, we can discuss adjusting or rescheduling the session based on mutual availability. You also receive the session recording for future reference.",
    },
    {
      q: "Can you train us on SaaS Mode, AI agents, Voice AI and A2P compliance?",
      a: "Yes. SaaS Mode, AI Studio, AI agents and conversational AI, Voice AI and A2P registration and compliance are all part of what we can teach. Which of them your team covers depends on your goals. They form part of your training scope rather than separate services to buy.",
    },
    {
      q: "Is this a fixed course or personalised training?",
      a: "It is personalised training, not a fixed course or group class. We build the plan around your business, team and priorities, then teach it in practical, guided sessions.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ---------------- SEO & SCHEMAS ---------------- */}
      <title>GoHighLevel Training &amp; Onboarding for Teams | GHL Scale Up</title>
      <meta
        name="description"
        content="Hands-on GoHighLevel team training and onboarding on your own account, with role-based sessions, SOPs, recordings and follow-up support. Book a training consultation."
      />
      <link rel="canonical" href="https://www.ghlscaleup.com/services/training" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.ghlscaleup.com/#organization",
                name: "GHL Scale Up",
                url: "https://www.ghlscaleup.com/",
              },
              {
                "@type": "Service",
                "@id": "https://www.ghlscaleup.com/services/training#service",
                name: "GoHighLevel Training Services",
                serviceType: "GoHighLevel team training and onboarding",
                description:
                  "Personalised GoHighLevel team training and onboarding delivered on the client's own account, with session recordings, customised SOPs and a defined follow-up support period.",
                provider: { "@id": "https://www.ghlscaleup.com/#organization" },
                url: "https://www.ghlscaleup.com/services/training",
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />

      <div className="font-sans text-[#1C2E4A] bg-white min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-[#1C2E4A] text-white pt-24 pb-20">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                GoHighLevel Training Services
              </div>
              <h1 className="text-5xl md:text-[54px] font-bold leading-[1.1] mb-6">
                GoHighLevel <br />
                Training Services for <br />
                <span className="text-[#0E9BF0]">Teams and <br />Agencies</span>
              </h1>
              <p className="text-lg text-white font-medium mb-8 max-w-md">
                Personalised GoHighLevel training that teaches your team to run the platform, on your own account.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "A customised learning roadmap built around your business and team",
                  "Practical, guided sessions, from the basics to advanced features",
                  "Session recordings, customised SOPs and follow-up support included",
                  "Scheduled around your time zone. Typically $15 to $20 USD per hour",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-[#DCE6F2]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#25C97D]/20 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-[#25C97D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="#book" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition flex items-center gap-2">
                  Book a Training Consultation <span className="text-lg">→</span>
                </a>
                <a href="#story" className="border-2 border-white/30 px-6 py-3 rounded-md font-semibold hover:border-white transition">
                  See a real example
                </a>
              </div>
              <p className="text-sm text-[#8A9BB0] mt-6">
                For businesses and agencies. Personalised training for your team, not a fixed course or classroom timetable.
              </p>
            </div>

            {/* Mock Window */}
            <div className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-[#F4F7FA] px-4 py-3 flex items-center gap-2 border-b border-[#E8EDF4]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium ml-2">Your GoHighLevel account - Guided session</span>
                </div>
                <div className="flex min-h-[320px]">
                  <div className="w-1/3 bg-white border-r border-[#E8EDF4] p-4 flex flex-col gap-2">
                    <div className="text-xs text-gray-500 py-1 px-2">Dashboard</div>
                    <div className="text-xs text-gray-500 py-1 px-2">Contacts</div>
                    <div className="text-xs text-gray-500 py-1 px-2">Conversations</div>
                    <div className="text-xs text-white bg-[#1C2E4A] rounded py-1 px-2 font-medium">Opportunities</div>
                    <div className="text-xs text-gray-500 py-1 px-2">Workflows</div>
                    <div className="text-xs text-gray-500 py-1 px-2">Reporting</div>
                  </div>
                  <div className="w-2/3 p-6 bg-[#F4F7FA]">
                    <h4 className="text-sm font-semibold mb-4">Sales pipeline: walkthrough</h4>
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 bg-white rounded shadow-sm p-2">
                        <div className="text-[10px] font-bold text-gray-400 mb-2">NEW</div>
                        <div className="h-6 bg-[#F4F7FA] rounded mb-1 border-l-2 border-[#0E9BF0]"></div>
                        <div className="h-6 bg-[#F4F7FA] rounded mb-1 border-l-2 border-[#0E9BF0]"></div>
                        <div className="h-6 bg-[#F4F7FA] rounded mb-1 border-l-2 border-[#0E9BF0]"></div>
                      </div>
                      <div className="flex-1 bg-white rounded shadow-sm p-2">
                        <div className="text-[10px] font-bold text-gray-400 mb-2">CONTACTED</div>
                        <div className="h-6 bg-[#F4F7FA] rounded mb-1 border-l-2 border-[#F8D000]"></div>
                        <div className="h-6 bg-[#F4F7FA] rounded mb-1 border-l-2 border-[#F8D000]"></div>
                      </div>
                      <div className="flex-1 bg-white rounded shadow-sm p-2">
                        <div className="text-[10px] font-bold text-gray-400 mb-2">BOOKED</div>
                        <div className="h-6 bg-[#F4F7FA] rounded mb-1 border-l-2 border-[#25C97D]"></div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {["Admin", "Sales", "Marketing", "Support"].map((role) => (
                        <span key={role} className="text-[10px] bg-[#E3F4FE] text-[#0A74B8] px-2 py-1 rounded-full font-semibold">{role}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 ml-2">Illustration of a guided training session</p>
              <div className="absolute -bottom-6 right-8 bg-[#0E9BF0] text-white text-sm font-semibold px-4 py-3 rounded-xl rounded-br-sm shadow-lg max-w-[200px]">
                Learning on the account your team will use
              </div>
            </div>
          </div>
        </section>

        {/* ================= STORY SECTION ================= */}
        <section id="story" className="py-24 bg-[#F4F7FA]">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#F8D000]"></span>
              A Real Training Story
            </div>
            <h2 className="text-4xl font-bold mb-6">
              From Learning GoHighLevel to Building a <br /> White-Label Agency
            </h2>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl">
              Not every team starts with GoHighLevel experience. Some know what they want to build and need the right guidance to get there. Major Marketing came to GHL Scale Up from Canada with a clear goal: learn GoHighLevel, build their own white-label agency, and gain the skills to serve their clients with confidence.
            </p>

            <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#E8EDF4] before:to-transparent">
              {/* Step 1 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1C2E4A] text-white flex items-center justify-center font-bold relative z-10 shadow-[0_0_0_6px_#F4F7FA]">1</div>
                <div className="flex-1 grid md:grid-cols-2 gap-8">
                  <h3 className="text-2xl font-bold text-[#1C2E4A]">The beginning: a team that wanted practical training</h3>
                  <div>
                    <p className="text-gray-600 mb-4">
                      Muhammad Shahid wrote to Aryan after reading our articles. He was not from a technical background and had spent a month learning from YouTube and other online resources. He and his team wanted hands-on training and a clear roadmap, not more introductory videos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Agency and CRM setup", "Sub-accounts", "Workflows and automations", "AI agents (voice and chat)", "A2P registration", "Snapshots", "Payments", "Integrations", "AI search optimisation"].map((tag) => (
                        <span key={tag} className="text-xs bg-white border border-[#E8EDF4] px-3 py-1 rounded-full text-[#1C2E4A]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Image 1 (Email Mock) */}
              <div className="pl-16 w-full">
                <div className="bg-gray-800 rounded-xl p-2 shadow-xl overflow-hidden">
                  <div className="bg-white rounded-lg h-[400px] overflow-hidden flex flex-col">
                     <div className="bg-gray-100 border-b p-3 flex justify-between items-center text-xs text-gray-500">
                        <span>GoHighLevel Training Session Inquiry</span>
                        <div className="flex gap-2"><span>↗</span><span>⋮</span></div>
                     </div>
                     <div className="p-6 flex-1 overflow-y-auto">
                        <div className="flex items-center gap-3 mb-6 border-b pb-4">
                           <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                           <div>
                              <div className="font-bold text-sm">Zubair <span className="text-gray-400 font-normal">To: Aryan Trivedi</span></div>
                              <div className="text-xs text-gray-400">11:03 AM</div>
                           </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-4">
                           <p>Dear Aryan,</p>
                           <p>Good morning. I hope you are doing well. My name is Muhammad Shahid. I am originally from Pakistan and currently residing in Saskatoon, Saskatchewan, Canada.</p>
                           <p>I am reaching out to discuss the possibility of working with your team and to seek guidance on developing a structured learning roadmap for my team to become proficient in GoHighLevel while building a white-label GHL marketing agency.</p>
                           <p>Over the past month, I have been studying GoHighLevel through YouTube videos and other online resources. The more I learn about the platform, the more I appreciate its capabilities. I believe it provides an outstanding solution for local businesses, and I have decided to pursue this opportunity seriously.</p>
                           <p>Although I am not from a technical background, my daughter is currently completing her Bachelor's degree in Computer Science and lives with me. I also have a trusted friend in Pakistan who has a computer background. Both have watched introductory GHL videos but need practical, hands-on training to develop real-world skills.</p>
                           <p>While researching training providers, I came across your website. After reading your articles and learning more about your team's experience and mindset, I felt that GHL Scale Up could be a good fit for helping us achieve our goals.</p>
                           <p>Before booking a call, I wanted to share my thoughts and seek your recommendations regarding the best path forward.</p>
                           <p>Our immediate goal is to learn and implement the core areas required to start serving clients, including:</p>
                           <ul className="list-disc pl-5">
                              <li>Agency and CRM Setup</li>
                              <li>Sub-Account Creation and Management</li>
                              <li>AI Studio and Integrations - A2P Registration and Compliance</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-8 pt-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1C2E4A] text-white flex items-center justify-center font-bold relative z-10 shadow-[0_0_0_6px_#F4F7FA]">2</div>
                <div className="flex-1 grid md:grid-cols-2 gap-8">
                  <h3 className="text-2xl font-bold text-[#1C2E4A]">What they wanted to achieve</h3>
                  <div>
                    <p className="text-gray-600">
                      Their follow-up showed the plan behind the learning. They wanted to offer smart websites, call-back and text automation, online booking, AI voice bots, chatbots, payment integrations and social media integration. They asked for a realistic timeline, a structured curriculum and two live sessions a week, and asked about pricing and whether our team could help with client projects while they learned.
                    </p>
                  </div>
                </div>
              </div>
              {/* Image 2 (Email Mock) */}
              <div className="pl-16 w-full relative">
                <div className="bg-gray-800 rounded-xl p-2 shadow-xl overflow-hidden relative">
                  <div className="bg-white rounded-lg h-[400px] overflow-hidden flex flex-col">
                     <div className="bg-gray-100 border-b p-3 flex justify-between items-center text-xs text-gray-500">
                        <span>Re: GoHighLevel Training Session Inquiry</span>
                        <div className="flex gap-2"><span>↗</span><span>⋮</span></div>
                     </div>
                     <div className="p-6 flex-1 overflow-y-auto text-sm text-gray-600 space-y-4">
                        <p>Initially, we would like to offer the following services:</p>
                        <ul className="list-disc pl-5">
                           <li>Smart Websites</li>
                           <li>Call Back and Text Automation</li>
                           <li>Online Booking Systems</li>
                           <li>AI Voice Bots</li>
                           <li>Conversational AI Chatbots</li>
                           <li>Payment Integrations</li>
                           <li>SEO and LLM Optimisation</li>
                           <li>Social Media Integration</li>
                        </ul>
                        <p>My original intention was to launch within one month. However, after reviewing my research, I understand that becoming fully competent in advanced GHL functions such as AI Studio, Voice AI, A2P compliance, advanced automations, integrations, and LLM SEO will realistically take approximately 8 to 10 weeks of structured learning and implementation.</p>
                        <p>With that understanding, I would appreciate your recommendation regarding a realistic learning timeline and curriculum.</p>
                        <p>My preferred training structure would be:</p>
                        <ul className="list-disc pl-5">
                           <li>Monday - 90 minute live training session introducing new concepts and implementation steps.</li>
                           <li>Friday - 60 minute practical review session focused on hands-on execution, troubleshooting, and reviewing the week's work.</li>
                        </ul>
                        <p>We have not yet purchased a GHL plan, as I wanted to hear your advice regarding the most appropriate package for our situation.</p>
                        <p>My longer term vision is not only to learn the platform but also to build a sustainable agency. Therefore, I would also like to explore the possibility of partnering with your team for fulfilment work. If we acquire clients while we are still learning, I would be interested in having your team complete projects on our behalf while we co-manage those clients.</p>
                        <p>I would appreciate your guidance on the following:</p>
                        <ol className="list-decimal pl-5">
                           <li>Based on our background, what learning path would you recommend?</li>
                           <li>How many weeks would you estimate are required before my team can independently build websites, workflows, AI chatbots, AI voice agents, booking systems, and automation solutions for clients?</li>
                           <li>What would be your associated costs (per hour) during the training session?</li>
                           <li>Will you provide fulfilment services, and if so, what would be your fee?</li>
                           <li>Since my team member in Pakistan works during daytime hours, would it be possible to schedule training sessions around 8:00 PM in your local time zone?</li>
                        </ol>
                        <p>Thank you for taking the time. I look forward to hearing your recommendations and hopefully building a long-term relationship with your team.</p>
                        <p>Best regards,<br/>Muhammad Shahid</p>
                     </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#1C2E4A] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer shadow-lg">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                     Click to read full size
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-8 pt-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1C2E4A] text-white flex items-center justify-center font-bold relative z-10 shadow-[0_0_0_6px_#F4F7FA]">3</div>
                <div className="flex-1 grid md:grid-cols-2 gap-8">
                  <h3 className="text-2xl font-bold text-[#1C2E4A]">What the experience meant to them</h3>
                  <div>
                    <p className="text-gray-600">
                      We began guiding the team through the platform, helping them learn by working through practical requirements and their agency goals. <br/><br/>
                      Major Marketing later shared their experience in a Google review. They said they started completely new to the platform, were guided from scratch, gained considerable knowledge, and value the ongoing support and accessibility of the team.
                    </p>
                  </div>
                </div>
              </div>
              {/* Image 3 (Google Review Mock) */}
              <div className="pl-16 w-full">
                <div className="bg-[#202124] rounded-xl p-2 shadow-xl overflow-hidden max-w-2xl mx-auto">
                  <div className="bg-[#202124] rounded-lg p-8">
                     <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                           <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.8l7.5 14.2H4.5L12 5.8z"/></svg>
                        </div>
                        <div>
                           <div className="text-white font-medium flex items-center gap-2">Major Marketing <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></div>
                           <div className="text-gray-400 text-sm">1 review • 0 photos</div>
                        </div>
                        <div className="ml-auto text-gray-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                     </div>
                     <div className="flex items-center gap-2 mb-4">
                        <div className="text-yellow-400 text-lg">★★★★★</div>
                        <div className="text-gray-400 text-sm">2 weeks ago</div>
                        <div className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded">NEW</div>
                     </div>
                     <div className="text-gray-200 text-sm space-y-4 leading-relaxed">
                        <p>We came across GHL Scale Up online and reached out to Aryan, who was extremely accommodating and encouraging when we expressed our interest in starting our white-label business, Major Marketing.</p>
                        <p>As we were completely new to the platform, Aryan kindly assigned Pavan to guide us and help us learn from scratch. Since then, we have gained considerable knowledge and continue to grow and develop Major Marketing with confidence.</p>
                        <p>We truly appreciate the ongoing support and accessibility of the GHL Scale Up team whenever we need assistance. We look forward to benefit from their expertise.</p>
                        <p>I would also like to sincerely appreciate Radhika for her excellent coordination and for facilitating our meeting.</p>
                        <p>Based on our experience, I have no hesitation in recommending GHL Scale Up to anyone looking for professional guidance, business assessment and support in building their business.</p>
                        <p>Looking forward to a long and mutually rewarding association!</p>
                     </div>
                     <div className="mt-6 flex items-center gap-2 text-gray-400 text-sm hover:text-white cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg> Reply
                     </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-[#F8D000]"></span>
                  Their experience, in their own words. A Google review from Major Marketing.
                </p>
              </div>
            </div>

            {/* After Story CTA */}
            <div className="mt-20 bg-[#1C2E4A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <h3 className="text-white text-2xl font-bold max-w-md leading-tight">
                Want to build your team's GoHighLevel skills with practical guidance?
              </h3>
              <a href="#book" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition flex items-center gap-2 whitespace-nowrap">
                Book a Training Consultation <span className="text-lg">→</span>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">Personal contact details have been removed from these screenshots.</p>
          </div>
        </section>

        {/* ================= WHAT YOU GET ================= */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                What You Get
              </div>
              <h2 className="text-4xl font-bold mb-6">What does GoHighLevel training include?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                GHL Scale Up's GoHighLevel training services are personalised, practical sessions that teach your team to use GoHighLevel on your own account. We are an implementation team that also trains, so you learn from people who build in the platform.
              </p>
              <div className="bg-[#F4F7FA] p-6 rounded-xl border border-[#E8EDF4]">
                <h4 className="font-bold mb-2">What this is, and what it is not</h4>
                <p className="text-gray-600 text-sm">
                  This is personalised team training built around your business. It is not a fixed course, a group classroom or a certification programme.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              {[
                { t: "A personalised roadmap", d: "We start with your business, your team and what each person already knows, then plan the sessions around that.", icon: "M4 6h16M4 12h16M4 18h16" },
                { t: "Practical, guided sessions", d: "A trainer works through the platform with your team and answers questions as you go.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                { t: "Training on your own account", d: "People learn on the setup they will really use, not on a demo.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { t: "Beginner to advanced", d: "From platform basics to SaaS Mode, AI agents and Voice AI. We cover the areas your team needs.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { t: "Tied to how you work", d: "Contacts, pipelines, calendars, workflows and integrations, explained in plain language and linked to your real processes.", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
                { t: "Recordings, SOPs and follow-up", d: "Every engagement includes session recordings, customised SOPs and a defined follow-up support period.", icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E3F4FE] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0E9BF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHO IT IS FOR ================= */}
        <section className="py-24 bg-[#F4F7FA]">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#F8D000]"></span>
              Who It Is For
            </div>
            <h2 className="text-4xl font-bold mb-4">Who is GoHighLevel training for?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              We train teams at businesses and agencies, not just individuals, so everyone who uses GoHighLevel can use it with confidence.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border border-[#E8EDF4] shadow-sm hover:border-[#0E9BF0] transition-colors">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2 block">Most Common</span>
                <h3 className="text-xl font-bold mb-3">Businesses already using GoHighLevel</h3>
                <p className="text-gray-600 text-sm">Your team has access to the platform but is not using it well. Training shows people how to work in it day to day, so the system you pay for actually gets used.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#E8EDF4] shadow-sm hover:border-[#0E9BF0] transition-colors">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2 block">Agencies</span>
                <h3 className="text-xl font-bold mb-3">Marketing agencies building with GoHighLevel</h3>
                <p className="text-gray-600 text-sm">You want your staff to understand the platform and manage client accounts with confidence, without every question going to one person.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#E8EDF4] shadow-sm hover:border-[#0E9BF0] transition-colors">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2 block">Getting Started</span>
                <h3 className="text-xl font-bold mb-3">Teams new to GoHighLevel</h3>
                <p className="text-gray-600 text-sm">You want structured onboarding instead of relying on scattered videos and tutorials. We help you learn the right things in the right order.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#E8EDF4] shadow-sm hover:border-[#0E9BF0] transition-colors">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2 block">Growing Teams</span>
                <h3 className="text-xl font-bold mb-3">Agencies onboarding their staff or clients</h3>
                <p className="text-gray-600 text-sm">New hires and clients need to understand the systems and processes they will use. Training gets them there faster.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT WILL YOUR TEAM LEARN ================= */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#F8D000]"></span>
              What Your Team Will Learn
            </div>
            <h2 className="text-4xl font-bold mb-6">What will your team learn?</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              We can train your team across GoHighLevel, from the basics to advanced features. Your learning roadmap is customised around the areas your team needs to understand and implement.
            </p>

            <div className="mb-12">
              <h3 className="text-xs font-bold tracking-widest text-[#0A74B8] uppercase mb-2">Foundations</h3>
              <p className="text-gray-600 text-sm mb-6">The platform and the everyday tools your team works in.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Platform navigation" },
                  { t: "Agency account and sub-account management" },
                  { t: "Contacts, conversations, CRM and opportunities", link: "Related service →" },
                  { t: "Pipelines and sales processes" },
                  { t: "Calendars and appointment management" },
                  { t: "Forms, websites and funnels" },
                  { t: "Email and SMS" },
                  { t: "Payments and integrations" },
                  { t: "Snapshots and account organisation" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#F4F7FA] p-4 rounded-lg flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0E9BF0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <span className="font-semibold text-sm">{item.t}</span>
                      {item.link && <div className="text-xs text-[#0A74B8] underline mt-1 cursor-pointer">{item.link}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-widest text-[#0A74B8] uppercase mb-2">Advanced</h3>
              <p className="text-gray-600 text-sm mb-6">For teams ready to automate, add AI or run GoHighLevel for clients.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "SaaS Mode configuration and management", link: "Related service →" },
                  { t: "White-label agency operations" },
                  { t: "Advanced workflows and automation", link: "Related service →" },
                  { t: "AI Studio" },
                  { t: "AI agents and conversational AI" },
                  { t: "Voice AI setup and implementation" },
                  { t: "A2P registration and compliance" },
                  { t: "Advanced integrations" },
                  { t: "Troubleshooting and workflow debugging" },
                  { t: "Account management and optimisation" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#F4F7FA] p-4 rounded-lg flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0E9BF0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <span className="font-semibold text-sm">{item.t}</span>
                      {item.link && <div className="text-xs text-[#0A74B8] underline mt-1 cursor-pointer">{item.link}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Nobody has to complete every module. The advanced areas are part of our training, not separate services to buy. We agree the scope with you during your consultation.
            </p>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="py-24 bg-[#1C2E4A] text-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#F8D000]"></span>
              How It Works
            </div>
            <h2 className="text-4xl font-bold mb-6">How does GoHighLevel training work?</h2>
            <p className="text-lg text-[#C9D6E6] mb-16 max-w-2xl">
              Six steps, from your first conversation to a team that can run GoHighLevel on its own. Every plan is personalised, so no two engagements look the same.
            </p>

            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mb-12">
              {[
                { n: "1", t: "Understand your business and goals", d: "We learn about your business, your team and what you want to achieve with GoHighLevel." },
                { n: "2", t: "Assess current knowledge", d: "We find out what your team already knows, so sessions focus on what you still need." },
                { n: "3", t: "Identify priority learning areas", d: "Together we choose the features and systems your team most needs to learn and use." },
                { n: "4", t: "Create a customised roadmap", d: "You get a plan built around your business, your team and your priorities, not a fixed curriculum." },
                { n: "5", t: "Personalised practical sessions", d: "Guided sessions, scheduled with you, where your team works through real tasks in GoHighLevel." },
                { n: "6", t: "Recordings, SOPs and follow-up", d: "You receive session recordings, customised SOPs and a defined follow-up support period." },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-[#0E9BF0] flex items-center justify-center text-xl font-bold mb-6 bg-[#1C2E4A]">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.t}</h3>
                  <p className="text-[#C9D6E6] text-sm leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
              <a href="#book" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition flex items-center gap-2">
                Book a Training Consultation <span className="text-lg">→</span>
              </a>
              <p className="text-[#C9D6E6] text-sm">Tell us about your team and we will suggest a plan.</p>
            </div>
          </div>
        </section>

        {/* ================= SCHEDULING ================= */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                Scheduling
              </div>
              <h2 className="text-4xl font-bold mb-6">Personalised sessions, scheduled around your team</h2>
              <p className="text-gray-600 text-lg">
                We work with your team's time zone and availability to agree on suitable training sessions. Since our training is personalised, sessions are scheduled through mutual discussion rather than a fixed classroom timetable.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { t: "Built around your team", d: "Sessions follow your roadmap, your business and your team's existing knowledge, not a set public class." },
                { t: "Your time zone", d: "We agree session times with you, based on your team's time zone and our trainers' availability." },
                { t: "If someone is unavailable", d: "If a team member cannot attend, we can discuss adjusting or rescheduling the session based on mutual availability." },
                { t: "Recordings for reference", d: "You also receive session recordings, to look back on or in case someone misses a session." },
                { t: "Your own account", d: "Sessions are taught on your own GoHighLevel account, so what the team learns applies straight away." },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-[140px_1fr] gap-6 border-b border-[#E8EDF4] pb-6 last:border-0 last:pb-0">
                  <h4 className="font-bold text-sm text-[#1C2E4A]">{item.t}</h4>
                  <p className="text-gray-600 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AFTER TRAINING ================= */}
        <section className="py-24 bg-[#F4F7FA]">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#F8D000]"></span>
              Included With Every Engagement
            </div>
            <h2 className="text-4xl font-bold mb-6">What happens after the training?</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              Training only helps if your team keeps using what it learns. Three things are included so that the knowledge stays with your team.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "Session recordings", d: "You receive recordings of your sessions to refer back to later, or in case a team member misses one.", sm: "Because training is personalised, we generally prefer to adjust or reschedule a session with you rather than use a recording as a replacement for live training.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
                { t: "Customised SOPs", d: "Practical documentation tailored to your training requirements and workflows, so your team can refer back to the processes it learned.", sm: "Written around how your business actually uses GoHighLevel, not generic guides.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { t: "Follow-up support period", d: "A defined follow-up support period is included, so questions that come up when your team starts applying what it learned do not go unanswered.", sm: "The exact period and scope are discussed and agreed with you as part of the engagement.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border-t-4 border-[#0E9BF0] shadow-sm flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#E3F4FE] flex items-center justify-center mb-6 text-[#0E9BF0]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.d}</p>
                  <p className="text-gray-400 text-xs mt-auto pt-4 border-t border-gray-100">{item.sm}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="bg-[#F4F7FA] rounded-2xl p-8 md:p-12 border border-[#E8EDF4] grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                  <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                  Pricing
                </div>
                <h2 className="text-4xl font-bold mb-6">GoHighLevel training cost</h2>
                <p className="text-gray-600 mb-4 text-lg">
                  Our GoHighLevel training generally starts with an hourly engagement model, with rates typically ranging from $15 to $20 USD per hour. The final quote depends on your training requirements, the areas you want to cover, and the level of guidance your team needs.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  We discuss the requirements first and recommend a suitable engagement model during consultation. Hourly is where most conversations start, and we have other engagement models too.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Your training requirements", "Areas you want to cover", "Level of guidance needed", "Complexity and scope"].map(tag => (
                    <span key={tag} className="bg-white border border-[#E8EDF4] px-4 py-2 rounded-lg text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-center text-white shadow-xl">
                <p className="text-[#C9D6E6] text-sm mb-2">Typical rate</p>
                <div className="text-5xl font-bold mb-2">$15–$20</div>
                <p className="text-[#C9D6E6] mb-8">USD per hour</p>
                <p className="text-xs text-[#8A9BB0] mb-8 leading-relaxed">
                  Final rate and engagement structure vary with scope and complexity. Quote shared after consultation.
                </p>
                <a href="#book" className="bg-[#0E9BF0] text-white w-full block py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition">
                  Book a Training Consultation →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPARISON ================= */}
        <section className="py-24 bg-[#F4F7FA]">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#F8D000]"></span>
              Choosing The Right Service
            </div>
            <h2 className="text-4xl font-bold mb-6">GoHighLevel training vs setup vs consulting</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              They sound similar, but they solve different problems. This page is about training.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl border border-[#E8EDF4]">
                <h3 className="text-xl font-bold mb-3 text-[#1C2E4A]">Setup</h3>
                <p className="text-gray-600 text-sm mb-8">We configure your GoHighLevel account and systems for you: the CRM, pipelines, fields and automation your business needs.</p>
                <a href="#" className="text-[#0A74B8] text-sm font-semibold hover:underline mt-auto inline-block">GoHighLevel CRM setup →</a>
              </div>
              <div className="bg-[#1C2E4A] text-white p-8 rounded-xl shadow-xl relative">
                <span className="absolute -top-3 left-8 bg-[#F8D000] text-[#1C2E4A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">This Page</span>
                <h3 className="text-xl font-bold mb-3">Training</h3>
                <p className="text-[#C9D6E6] text-sm mb-8">We teach your team how to use GoHighLevel, on your own account, through personalised sessions, so they can run it themselves.</p>
                <a href="#story" className="text-[#0E9BF0] text-sm font-semibold hover:underline mt-auto inline-block">See a real training story →</a>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#E8EDF4]">
                <h3 className="text-xl font-bold mb-3 text-[#1C2E4A]">Consulting</h3>
                <p className="text-gray-600 text-sm mb-8">We help you decide what to build and how to approach it: strategy, structure and implementation choices.</p>
                <a href="#" className="text-[#0A74B8] text-sm font-semibold hover:underline mt-auto inline-block">Talk to a GoHighLevel expert →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-24">
          <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                Why GHL Scale Up
              </div>
              <h2 className="text-4xl font-bold mb-8">Why choose GHL Scale Up?</h2>
              <ul className="space-y-6">
                {[
                  { t: "Personalised, not a fixed course", d: "Your roadmap is built around your business, your team and your priorities." },
                  { t: "Practical, guided sessions on your own account", d: "Your team practises on the setup it will really use." },
                  { t: "An implementation team that also trains", d: "GHL Scale Up builds and manages GoHighLevel systems, so training draws on real project work." },
                  { t: "Experience with teams new to GoHighLevel", d: "We have guided a team from the very beginning, as the Major Marketing story shows." },
                  { t: "Recordings, customised SOPs and follow-up support", d: "Included, so the knowledge stays with your team." },
                  { t: "Transparent pricing", d: "A typical hourly range of $15 to $20 USD, shown up front." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <svg className="w-5 h-5 text-[#25C97D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <h4 className="font-bold text-[#1C2E4A]">{item.t}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
                <div className="text-[#F8D000] text-xl mb-4 tracking-widest">★★★★★</div>
                <h3 className="text-xl font-bold mb-4">A five-star Google review from Major Marketing</h3>
                <p className="text-[#C9D6E6] mb-6">
                  They came to us as a team that was completely new to GoHighLevel and wanted to learn it from scratch. Read the screenshots and their review in the story above.
                </p>
                <div className="space-y-3">
                  <a href="#story" className="block text-[#0E9BF0] hover:underline font-medium">Back to the Major Marketing story →</a>
                  <div className="flex gap-4 text-sm pt-2">
                    <a href="#" className="text-[#0E9BF0] hover:underline">More client testimonials →</a>
                    <a href="#" className="text-[#0E9BF0] hover:underline">Case studies →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-24 bg-[#F4F7FA]">
          <div className="max-w-[860px] mx-auto px-6">
            <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#F8D000]"></span>
              Questions
            </div>
            <h2 className="text-4xl font-bold mb-10">GoHighLevel training: common questions</h2>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className={`bg-white border rounded-xl overflow-hidden transition-colors ${openFaq === i ? 'border-[#0E9BF0]' : 'border-[#E8EDF4]'}`}>
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-bold text-[15px]">{faq.q}</span>
                    <span className={`text-2xl text-[#0A74B8] transition-transform duration-200 ${openFaq === i ? '-rotate-180' : ''}`}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= GET STARTED / FORM ================= */}
        <section id="book" className="py-24 bg-[#1C2E4A] text-white">
          <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                Get Started
              </div>
              <h2 className="text-4xl font-bold mb-6">Ready to Help Your Team Get More Out of GoHighLevel?</h2>
              <p className="text-lg text-[#C9D6E6] mb-6">
                Tell us about your team, your goals and how much GoHighLevel experience you have. We will suggest a training plan that fits.
              </p>
              <p className="text-[#C9D6E6] mb-8">
                This enquiry is for live, practical training for your team, not a self-paced course.
              </p>
              <a href="#" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition inline-flex items-center gap-2">
                Book a Training Consultation <span className="text-lg">→</span>
              </a>
            </div>
            
            <form className="bg-white rounded-xl p-8 shadow-2xl text-gray-800" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-bold mb-1 text-[#1C2E4A]">Training enquiry</h3>
              <p className="text-sm text-gray-500 mb-6">A few details help us understand your team. It takes about a minute.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0]" required />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0]" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold mb-1">Company name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0]" />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Team size</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0] text-gray-600">
                    <option>Select</option>
                    <option>1</option>
                    <option>2-5</option>
                    <option>6-15</option>
                    <option>16+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold mb-2">Who needs training?</label>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                  {["Owner or manager", "Sales", "Marketing", "Operations or admin", "Support or client-facing"].map(role => (
                    <label key={role} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-[#0E9BF0] focus:ring-[#0E9BF0]" /> {role}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold mb-2">Do you already use GoHighLevel?</label>
                <div className="flex gap-6 text-sm text-gray-600">
                  {["Yes", "Setting up now", "Not yet"].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="ghl_status" className="border-gray-300 text-[#0E9BF0] focus:ring-[#0E9BF0]" /> {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold mb-1">Your team's time zone</label>
                <input type="text" placeholder="For example: Eastern Time, GMT+5:30" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0]" />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold mb-1">What would you like your team to learn?</label>
                <textarea placeholder="A few lines about your goals and where your team is starting from" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0] h-24 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0E9BF0] text-white font-semibold py-3 rounded-md hover:bg-[#0A74B8] transition">
                Send my training enquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}