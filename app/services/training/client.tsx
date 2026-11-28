"use client";

import { useState } from "react";
import Image from "next/image";

export default function TrainingPageClient() {
      const [openFaq, setOpenFaq] = useState<number | null>(0);

      // FAQ data matched exactly from the screenshot
      const FAQS = [
            { q: "What is included in GoHighLevel training?", a: "Personalised, practical training sessions for your team, taught on your own account. Every engagement also includes session recordings, customised SOPs and a defined follow-up support period." },
            { q: "Can you train our team from beginner to advanced levels?", a: "Yes. We can train your team across GoHighLevel, from the basics to advanced features. Your roadmap is customised around the areas your team needs, so nobody has to complete every module." },
            { q: "Do you provide training on our own GoHighLevel account?", a: "Yes. Training takes place on your own GoHighLevel account, so your team learns the setup it will actually use." },
            { q: "Can the training roadmap be customised?", a: "Yes. We shape the roadmap around your business, your team's current knowledge, your business model and your learning priorities. It is not a fixed curriculum." },
            { q: "Do you provide session recordings?", a: "Yes. You receive recordings of your sessions to refer back to, or in case a team member misses one. Because training is personalised, we generally prefer to adjust or reschedule a session with you rather than use a recording as a replacement for live training." },
            { q: "Will we receive customised SOPs?", a: "Yes. We provide practical documentation tailored to your training requirements and workflows, so team members can refer back to the processes they learned." },
            { q: "Is follow-up support included after training?", a: "Yes. A defined follow-up support period is included. The exact period and scope are discussed and agreed with you as part of the engagement." },
            { q: "How much does GoHighLevel training cost?", a: "Our GoHighLevel training generally starts with an hourly engagement model, with rates typically ranging from $15 to $20 USD per hour. The final quote depends on your training requirements, the areas you want to cover, and the level of guidance your team needs. We discuss the requirements first and recommend a suitable engagement model during consultation." },
            { q: "Can you schedule training according to our time zone?", a: "Yes. We work with your team's time zone and availability to agree on suitable sessions. Sessions are scheduled through mutual discussion rather than a fixed classroom timetable." },
            { q: "What happens if a team member misses a session?", a: "If a team member cannot attend, we can discuss adjusting or rescheduling the session based on mutual availability. You also receive the session recording for future reference." },
            { q: "Can you train us on SaaS Mode, AI agents, Voice AI and A2P compliance?", a: "Yes. SaaS Mode, AI Studio, AI agents and conversational AI, Voice AI and A2P registration and compliance are all part of what we can teach. Which of them your team covers depends on your goals. They form part of your training scope rather than separate services to buy." },
            { q: "Is this a fixed course or personalised training?", a: "It is personalised training, not a fixed course or group class. We build the plan around your business, team and priorities, then teach it in practical, guided sessions." },
      ];

      return (
            <div className="font-sans text-[#1C2E4A] bg-white min-h-screen">

                  {/* ================= HERO SECTION ================= */}
                  <section className="bg-[#1C2E4A] text-white pt-16 md:pt-24 pb-16 md:pb-20 overflow-hidden">
                        <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                              <div>
                                    <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold tracking-widest uppercase mb-6">
                                          <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                          GoHighLevel Training Services
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] mb-6">
                                          GoHighLevel <br className="hidden md:block" />
                                          Training Services for <br className="hidden md:block" />
                                          <span className="text-[#0E9BF0]">Teams and <br className="hidden md:block" />Agencies</span>
                                    </h1>
                                    <p className="text-base md:text-lg text-white font-medium mb-8 max-w-md">
                                          Personalised GoHighLevel training that teaches your team to run the platform, on your own account.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                          {[
                                                "A customised learning roadmap built around your business and team",
                                                "Practical, guided sessions, from the basics to advanced features",
                                                "Session recordings, customised SOPs and follow-up support included",
                                                "Scheduled around your time zone. Typically $15 to $20 USD per hour",
                                          ].map((item, i) => (
                                                <li key={i} className="flex gap-4 items-start text-[#DCE6F2] text-sm md:text-base">
                                                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#25C97D]/20 flex items-center justify-center mt-0.5 md:mt-1">
                                                            <svg className="w-3 h-3 text-[#25C97D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                      </span>
                                                      <span className="leading-relaxed">{item}</span>
                                                </li>
                                          ))}
                                    </ul>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                          <a href="#book" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition flex items-center justify-center gap-2">
                                                Book a Training Consultation <span className="text-lg">→</span>
                                          </a>
                                          <a href="#story" className="border-2 border-white/30 px-6 py-3 rounded-md font-semibold hover:border-white transition text-center">
                                                See a real example
                                          </a>
                                    </div>
                                    <p className="text-xs md:text-sm text-[#8A9BB0] mt-6">
                                          For businesses and agencies. Personalised training for your team, not a fixed course or classroom timetable.
                                    </p>
                              </div>

                              {/* Hero Image Replacement */}
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
                  <section id="story" className="py-16 md:py-24 bg-[#F4F7FA]">
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                    A Real Training Story
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    From Learning GoHighLevel to Building a <br className="hidden md:block" /> White-Label Agency
                              </h2>
                              <p className="text-base md:text-lg text-gray-600 mb-12 md:mb-16 max-w-2xl">
                                    Not every team starts with GoHighLevel experience. Some know what they want to build and need the right guidance to get there. Major Marketing came to GHL Scale Up from Canada with a clear goal: learn GoHighLevel, build their own white-label agency, and gain the skills to serve their clients with confidence.
                              </p>

                              <div className="space-y-16 md:space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:to-transparent">

                                    {/* Step 1 */}
                                    <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-8">
                                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1C2E4A] text-white flex items-center justify-center font-bold relative z-10 shadow-[0_0_0_6px_#F4F7FA]">1</div>
                                          <div className="flex-1 grid md:grid-cols-2 gap-4 md:gap-8">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A]">The beginning: a team that wanted practical training</h3>
                                                <div>
                                                      <p className="text-sm md:text-base text-gray-600 mb-4">
                                                            Muhammad Shahid wrote to Aryan after reading our articles. He was not from a technical background and had spent a month learning from YouTube and other online resources. He and his team wanted hands-on training and a clear roadmap, not more introductory videos.
                                                      </p>
                                                      <div className="flex flex-wrap gap-2">
                                                            {["Agency and CRM setup", "Sub-accounts", "Workflows and automations", "AI agents (voice and chat)", "A2P registration", "Snapshots", "Payments", "Integrations", "AI search optimisation"].map((tag) => (
                                                                  <span key={tag} className="text-[11px] md:text-xs bg-white border border-[#E8EDF4] px-3 py-1 rounded-full text-[#1C2E4A]">{tag}</span>
                                                            ))}
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Image 1 Replacement */}
                                    {/* Image 1 */}
                                    <div className="pl-0 md:pl-16 w-full">
                                          <div className="bg-gray-800 rounded-xl p-2 md:p-4 shadow-xl overflow-hidden flex justify-center">
                                                <Image
                                                      src="/training/story-image-1.webp"
                                                      alt="Email inquiry from Muhammad Shahid"
                                                      width={1000}
                                                      height={800}
                                                      className="w-full h-auto object-contain rounded-lg bg-white"
                                                />
                                          </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-8 pt-4 md:pt-8">
                                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1C2E4A] text-white flex items-center justify-center font-bold relative z-10 shadow-[0_0_0_6px_#F4F7FA]">2</div>
                                          <div className="flex-1 grid md:grid-cols-2 gap-4 md:gap-8">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A]">What they wanted to achieve</h3>
                                                <div>
                                                      <p className="text-sm md:text-base text-gray-600">
                                                            Their follow-up showed the plan behind the learning. They wanted to offer smart websites, call-back and text automation, online booking, AI voice bots, chatbots, payment integrations and social media integration. They asked for a realistic timeline, a structured curriculum and two live sessions a week, and asked about pricing and whether our team could help with client projects while they learned.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Image 2 Replacement */}
                                    {/* Image 2 */}
                                    <div className="pl-0 md:pl-16 w-full relative">
                                          <div className="bg-gray-800 rounded-xl p-2 md:p-4 shadow-xl overflow-hidden relative flex justify-center">
                                                <Image
                                                      src="/training/story-image-2.webp"
                                                      alt="Follow-up email detailing training goals"
                                                      width={1000}
                                                      height={800}
                                                      className="w-full h-auto object-contain rounded-lg bg-white"
                                                />
                                          </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-8 pt-4 md:pt-8">
                                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1C2E4A] text-white flex items-center justify-center font-bold relative z-10 shadow-[0_0_0_6px_#F4F7FA]">3</div>
                                          <div className="flex-1 grid md:grid-cols-2 gap-4 md:gap-8">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#1C2E4A]">What the experience meant to them</h3>
                                                <div>
                                                      <p className="text-sm md:text-base text-gray-600">
                                                            We began guiding the team through the platform, helping them learn by working through practical requirements and their agency goals. <br className="hidden md:block" /><br className="hidden md:block" />
                                                            Major Marketing later shared their experience in a Google review. They said they started completely new to the platform, were guided from scratch, gained considerable knowledge, and value the ongoing support and accessibility of the team.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Image 3 Replacement */}
                                    {/* Image 3 */}
                                    <div className="pl-0 md:pl-16 w-full">
                                          <div className="bg-[#202124] rounded-xl p-2 md:p-4 shadow-xl overflow-hidden max-w-3xl mx-auto flex justify-center">
                                                <Image
                                                      src="/training/story-image-3.webp"
                                                      alt="Google review from Major Marketing"
                                                      width={1000}
                                                      height={800}
                                                      className="w-full h-auto object-contain rounded-lg bg-white"
                                                />
                                          </div>
                                          <p className="text-xs md:text-sm text-gray-500 mt-4 flex items-center gap-2">
                                                <span className="w-4 h-0.5 bg-[#F8D000]"></span>
                                                Their experience, in their own words. A Google review from Major Marketing.
                                          </p>
                                    </div>
                              </div>

                              {/* After Story CTA */}
                              <div className="mt-16 md:mt-20 bg-[#1C2E4A] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
                                    <h3 className="text-white text-xl md:text-2xl font-bold max-w-md leading-tight">
                                          Want to build your team's GoHighLevel skills with practical guidance?
                                    </h3>
                                    <a href="#book" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto">
                                          Book a Training Consultation <span className="text-lg">→</span>
                                    </a>
                              </div>
                              <p className="text-xs text-gray-500 mt-4">Personal contact details have been removed from these screenshots.</p>
                        </div>
                  </section >

                  {/* ================= WHAT YOU GET ================= */}
                  < section className="py-16 md:py-24" >
                        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
                              <div>
                                    <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                          <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                          What You Get
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">What does GoHighLevel training include?</h2>
                                    <p className="text-base md:text-lg text-gray-600 mb-8">
                                          GHL Scale Up's GoHighLevel training services are personalised, practical sessions that teach your team to use GoHighLevel on your own account. We are an implementation team that also trains, so you learn from people who build in the platform.
                                    </p>
                                    <div className="bg-[#F4F7FA] p-6 rounded-xl border border-[#E8EDF4]">
                                          <h4 className="font-bold mb-2 text-[#1C2E4A]">What this is, and what it is not</h4>
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
                                                      <h4 className="font-bold text-base md:text-lg mb-1">{item.t}</h4>
                                                      <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section >

                  {/* ================= WHO IT IS FOR ================= */}
                  < section className="py-16 md:py-24 bg-[#F4F7FA]" >
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                    Who It Is For
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who is GoHighLevel training for?</h2>
                              <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl">
                                    We train teams at businesses and agencies, not just individuals, so everyone who uses GoHighLevel can use it with confidence.
                              </p>
                              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                    {[
                                          { tag: "Most Common", t: "Businesses already using GoHighLevel", d: "Your team has access to the platform but is not using it well. Training shows people how to work in it day to day, so the system you pay for actually gets used." },
                                          { tag: "Agencies", t: "Marketing agencies building with GoHighLevel", d: "You want your staff to understand the platform and manage client accounts with confidence, without every question going to one person." },
                                          { tag: "Getting Started", t: "Teams new to GoHighLevel", d: "You want structured onboarding instead of relying on scattered videos and tutorials. We help you learn the right things in the right order." },
                                          { tag: "Growing Teams", t: "Agencies onboarding their staff or clients", d: "New hires and clients need to understand the systems and processes they will use. Training gets them there faster." },
                                    ].map((item, i) => (
                                          <div key={i} className="bg-white p-6 md:p-8 rounded-xl border border-[#E8EDF4] shadow-sm hover:border-[#0E9BF0] transition-colors">
                                                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2 block">{item.tag}</span>
                                                <h3 className="text-lg md:text-xl font-bold mb-3">{item.t}</h3>
                                                <p className="text-gray-600 text-sm">{item.d}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section >

                  {/* ================= WHAT WILL YOUR TEAM LEARN ================= */}
                  < section className="py-16 md:py-24" >
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                    What Your Team Will Learn
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">What will your team learn?</h2>
                              <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl">
                                    We can train your team across GoHighLevel, from the basics to advanced features. Your learning roadmap is customised around the areas your team needs to understand and implement.
                              </p>

                              <div className="mb-12">
                                    <h3 className="text-xs font-bold tracking-widest text-[#0A74B8] uppercase mb-2">Foundations</h3>
                                    <p className="text-gray-600 text-sm mb-6">The platform and the everyday tools your team works in.</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
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
                                    <div className="grid sm:grid-cols-2 gap-4">
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
                  </section >

                  {/* ================= HOW IT WORKS ================= */}
                  < section className="py-16 md:py-24 bg-[#1C2E4A] text-white" >
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                    How It Works
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">How does GoHighLevel training work?</h2>
                              <p className="text-base md:text-lg text-[#C9D6E6] mb-12 md:mb-16 max-w-2xl">
                                    Six steps, from your first conversation to a team that can run GoHighLevel on its own. Every plan is personalised, so no two engagements look the same.
                              </p>

                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12 mb-12">
                                    {[
                                          { n: "1", t: "Understand your business and goals", d: "We learn about your business, your team and what you want to achieve with GoHighLevel." },
                                          { n: "2", t: "Assess current knowledge", d: "We find out what your team already knows, so sessions focus on what you still need." },
                                          { n: "3", t: "Identify priority learning areas", d: "Together we choose the features and systems your team most needs to learn and use." },
                                          { n: "4", t: "Create a customised roadmap", d: "You get a plan built around your business, your team and your priorities, not a fixed curriculum." },
                                          { n: "5", t: "Personalised practical sessions", d: "Guided sessions, scheduled with you, where your team works through real tasks in GoHighLevel." },
                                          { n: "6", t: "Recordings, SOPs and follow-up", d: "You receive session recordings, customised SOPs and a defined follow-up support period." },
                                    ].map((step, i) => (
                                          <div key={i} className="relative">
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0E9BF0] flex items-center justify-center text-lg md:text-xl font-bold mb-4 md:mb-6 bg-[#1C2E4A]">
                                                      {step.n}
                                                </div>
                                                <h3 className="text-base md:text-lg font-bold mb-2">{step.t}</h3>
                                                <p className="text-[#C9D6E6] text-sm leading-relaxed">{step.d}</p>
                                          </div>
                                    ))}
                              </div>

                              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-12">
                                    <a href="#book" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition flex items-center justify-center gap-2 w-full sm:w-auto">
                                          Book a Training Consultation <span className="text-lg">→</span>
                                    </a>
                                    <p className="text-[#C9D6E6] text-sm text-center sm:text-left">Tell us about your team and we will suggest a plan.</p>
                              </div>
                        </div>
                  </section >

                  {/* ================= SCHEDULING ================= */}
                  < section className="py-16 md:py-24" >
                        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
                              <div>
                                    <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                          <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                          Scheduling
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Personalised sessions, scheduled around your team</h2>
                                    <p className="text-base md:text-lg text-gray-600">
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
                                          <div key={i} className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 border-b border-[#E8EDF4] pb-6 last:border-0 last:pb-0">
                                                <h4 className="font-bold text-sm md:text-base text-[#1C2E4A]">{item.t}</h4>
                                                <p className="text-gray-600 text-sm">{item.d}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section >

                  {/* ================= AFTER TRAINING ================= */}
                  < section className="py-16 md:py-24 bg-[#F4F7FA]" >
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                    Included With Every Engagement
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">What happens after the training?</h2>
                              <p className="text-base md:text-lg text-gray-600 mb-10 md:mb-12 max-w-2xl">
                                    Training only helps if your team keeps using what it learns. Three things are included so that the knowledge stays with your team.
                              </p>

                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                          { t: "Session recordings", d: "You receive recordings of your sessions to refer back to later, or in case a team member misses one.", sm: "Because training is personalised, we generally prefer to adjust or reschedule a session with you rather than use a recording as a replacement for live training.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
                                          { t: "Customised SOPs", d: "Practical documentation tailored to your training requirements and workflows, so your team can refer back to the processes it learned.", sm: "Written around how your business actually uses GoHighLevel, not generic guides.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                                          { t: "Follow-up support period", d: "A defined follow-up support period is included, so questions that come up when your team starts applying what it learned do not go unanswered.", sm: "The exact period and scope are discussed and agreed with you as part of the engagement.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                                    ].map((item, i) => (
                                          <div key={i} className="bg-white p-6 md:p-8 rounded-xl border-t-4 border-[#0E9BF0] shadow-sm flex flex-col h-full">
                                                <div className="w-10 h-10 rounded-lg bg-[#E3F4FE] flex items-center justify-center mb-6 text-[#0E9BF0]">
                                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                                      </svg>
                                                </div>
                                                <h3 className="text-lg md:text-xl font-bold mb-3">{item.t}</h3>
                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.d}</p>
                                                <p className="text-gray-400 text-xs mt-auto pt-4 border-t border-gray-100">{item.sm}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section >

                  {/* ================= PRICING ================= */}
                  < section className="py-16 md:py-24" >
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="bg-[#F4F7FA] rounded-2xl p-6 md:p-12 border border-[#E8EDF4] grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    <div>
                                          <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                                <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                                Pricing
                                          </div>
                                          <h2 className="text-3xl md:text-4xl font-bold mb-6">GoHighLevel training cost</h2>
                                          <p className="text-gray-600 mb-4 text-base md:text-lg">
                                                Our GoHighLevel training generally starts with an hourly engagement model, with rates typically ranging from $15 to $20 USD per hour. The final quote depends on your training requirements, the areas you want to cover, and the level of guidance your team needs.
                                          </p>
                                          <p className="text-gray-600 mb-8 text-base md:text-lg">
                                                We discuss the requirements first and recommend a suitable engagement model during consultation. Hourly is where most conversations start, and we have other engagement models too.
                                          </p>
                                          <div className="flex flex-wrap gap-2">
                                                {["Your training requirements", "Areas you want to cover", "Level of guidance needed", "Complexity and scope"].map(tag => (
                                                      <span key={tag} className="bg-white border border-[#E8EDF4] px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium">{tag}</span>
                                                ))}
                                          </div>
                                    </div>
                                    <div className="bg-[#1C2E4A] rounded-2xl p-6 md:p-8 text-center text-white shadow-xl w-full">
                                          <p className="text-[#C9D6E6] text-sm mb-2">Typical rate</p>
                                          <div className="text-4xl md:text-5xl font-bold mb-2">$15–$20</div>
                                          <p className="text-[#C9D6E6] mb-6 md:mb-8">USD per hour</p>
                                          <p className="text-xs text-[#8A9BB0] mb-6 md:mb-8 leading-relaxed px-4">
                                                Final rate and engagement structure vary with scope and complexity. Quote shared after consultation.
                                          </p>
                                          <a href="#book" className="bg-[#0E9BF0] text-white w-full block py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition">
                                                Book a Training Consultation →
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </section >

                  {/* ================= COMPARISON ================= */}
                  < section className="py-16 md:py-24 bg-[#F4F7FA]" >
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                    Choosing The Right Service
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">GoHighLevel training vs setup vs consulting</h2>
                              <p className="text-base md:text-lg text-gray-600 mb-10 md:mb-12 max-w-2xl">
                                    They sound similar, but they solve different problems. This page is about training.
                              </p>

                              <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E8EDF4] flex flex-col">
                                          <h3 className="text-xl font-bold mb-3 text-[#1C2E4A]">Setup</h3>
                                          <p className="text-gray-600 text-sm mb-8 flex-grow">We configure your GoHighLevel account and systems for you: the CRM, pipelines, fields and automation your business needs.</p>
                                          <a href="#" className="text-[#0A74B8] text-sm font-semibold hover:underline mt-auto inline-block">GoHighLevel CRM setup →</a>
                                    </div>
                                    <div className="bg-[#1C2E4A] text-white p-6 md:p-8 rounded-xl shadow-xl relative mt-4 md:mt-0 flex flex-col">
                                          <span className="absolute -top-3 left-6 md:left-8 bg-[#F8D000] text-[#1C2E4A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">This Page</span>
                                          <h3 className="text-xl font-bold mb-3">Training</h3>
                                          <p className="text-[#C9D6E6] text-sm mb-8 flex-grow">We teach your team how to use GoHighLevel, on your own account, through personalised sessions, so they can run it themselves.</p>
                                          <a href="#story" className="text-[#0E9BF0] text-sm font-semibold hover:underline mt-auto inline-block">See a real training story →</a>
                                    </div>
                                    <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E8EDF4] flex flex-col">
                                          <h3 className="text-xl font-bold mb-3 text-[#1C2E4A]">Consulting</h3>
                                          <p className="text-gray-600 text-sm mb-8 flex-grow">We help you decide what to build and how to approach it: strategy, structure and implementation choices.</p>
                                          <a href="#" className="text-[#0A74B8] text-sm font-semibold hover:underline mt-auto inline-block">Talk to a GoHighLevel expert →</a>
                                    </div>
                              </div>
                        </div>
                  </section >

                  {/* ================= WHY CHOOSE US ================= */}
                  < section className="py-16 md:py-24" >
                        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
                              <div>
                                    <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                          <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                          Why GHL Scale Up
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Why choose GHL Scale Up?</h2>
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
                                                            <h4 className="font-bold text-[#1C2E4A] text-base md:text-lg">{item.t}</h4>
                                                            <p className="text-gray-600 text-sm mt-1">{item.d}</p>
                                                      </div>
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                              <div>
                                    <div className="bg-[#1C2E4A] rounded-2xl p-6 md:p-8 text-white mt-6 lg:mt-0">
                                          <div className="text-[#F8D000] text-xl mb-4 tracking-widest">★★★★★</div>
                                          <h3 className="text-lg md:text-xl font-bold mb-4">A five-star Google review from Major Marketing</h3>
                                          <p className="text-[#C9D6E6] mb-6 text-sm md:text-base">
                                                They came to us as a team that was completely new to GoHighLevel and wanted to learn it from scratch. Read the screenshots and their review in the story above.
                                          </p>
                                          <div className="space-y-3">
                                                <a href="#story" className="block text-[#0E9BF0] hover:underline font-medium text-sm md:text-base">Back to the Major Marketing story →</a>
                                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm pt-2">
                                                      <a href="#" className="text-[#0E9BF0] hover:underline">More client testimonials →</a>
                                                      <a href="#" className="text-[#0E9BF0] hover:underline">Case studies →</a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section >

                  {/* ================= FAQ SECTION ================= */}
                  < section className="py-16 md:py-24 bg-[#F4F7FA]" >
                        <div className="max-w-[1200px] mx-auto px-6">
                              <div className="flex items-center gap-3 text-[#0A74B8] text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                    Questions
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10">GoHighLevel training: common questions</h2>

                              <div className="space-y-3">
                                    {FAQS.map((faq, i) => (
                                          <div key={i} className={`bg-white border rounded-xl overflow-hidden transition-colors ${openFaq === i ? 'border-[#0E9BF0]' : 'border-[#E8EDF4]'}`}>
                                                <button
                                                      className="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left focus:outline-none gap-4"
                                                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                >
                                                      <span className="font-bold text-sm md:text-[15px]">{faq.q}</span>
                                                      <span className={`text-2xl text-[#0A74B8] transition-transform duration-200 flex-shrink-0 ${openFaq === i ? '-rotate-180' : ''}`}>
                                                            {openFaq === i ? '−' : '+'}
                                                      </span>
                                                </button>
                                                {openFaq === i && (
                                                      <div className="px-4 md:px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                                                            {faq.a}
                                                      </div>
                                                )}
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section >

                  {/* ================= GET STARTED / FORM ================= */}
                  < section id="book" className="py-16 md:py-24 bg-[#1C2E4A] text-white" >
                        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
                              <div>
                                    <div className="flex items-center gap-3 text-[#0E9BF0] text-xs font-bold tracking-widest uppercase mb-4">
                                          <span className="w-6 h-0.5 bg-[#F8D000]"></span>
                                          Get Started
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Help Your Team Get More Out of GoHighLevel?</h2>
                                    <p className="text-base md:text-lg text-[#C9D6E6] mb-6">
                                          Tell us about your team, your goals and how much GoHighLevel experience you have. We will suggest a training plan that fits.
                                    </p>
                                    <p className="text-[#C9D6E6] mb-8">
                                          This enquiry is for live, practical training for your team, not a self-paced course.
                                    </p>
                                    <a href="#" className="bg-[#0E9BF0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0A74B8] transition inline-flex items-center gap-2">
                                          Book a Training Consultation <span className="text-lg">→</span>
                                    </a>
                              </div>

                              <form className="bg-white rounded-xl p-6 md:p-8 shadow-2xl text-gray-800 w-full" onSubmit={(e) => e.preventDefault()}>
                                    <h3 className="text-xl font-bold mb-1 text-[#1C2E4A]">Training enquiry</h3>
                                    <p className="text-sm text-gray-500 mb-6">A few details help us understand your team. It takes about a minute.</p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                          <div>
                                                <label className="block text-xs font-bold mb-1">Name <span className="text-red-500">*</span></label>
                                                <input type="text" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0]" required />
                                          </div>
                                          <div>
                                                <label className="block text-xs font-bold mb-1">Email <span className="text-red-500">*</span></label>
                                                <input type="email" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-[#0E9BF0] focus:ring-1 focus:ring-[#0E9BF0]" required />
                                          </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
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
                                          <div className="grid sm:grid-cols-2 gap-y-2 text-sm text-gray-600">
                                                {["Owner or manager", "Sales", "Marketing", "Operations or admin", "Support or client-facing"].map(role => (
                                                      <label key={role} className="flex items-center gap-2 cursor-pointer">
                                                            <input type="checkbox" className="rounded border-gray-300 text-[#0E9BF0] focus:ring-[#0E9BF0]" /> {role}
                                                      </label>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="mb-6">
                                          <label className="block text-xs font-bold mb-2">Do you already use GoHighLevel?</label>
                                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
                  </section >
            </div >
      );
}