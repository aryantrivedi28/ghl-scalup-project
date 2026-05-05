'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Send,
  FileText,
  FolderOpen,
  Rocket,
  CheckCircle,
  Plus,
  X,
  Upload,
  Briefcase,
  Globe,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  Check,
  ArrowLeft,
  ArrowRightCircle
} from 'lucide-react';

// Types
interface CaseStudy {
  id: string;
  description: string;
}

export default function WorkWithUsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    experienceLevel: '',
    portfolioLink: '',
    specialisations: '',
    availability: '',
    extraInfo: ''
  });

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([
    { id: Date.now().toString(), description: '' }
  ]);

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [resumeFileName, setResumeFileName] = useState('');
  const [portfolioFileName, setPortfolioFileName] = useState('');

  const stats = [
    { id: 1, num: '6', label: 'Countries served', color: 'text-[#F8D000]', icon: Globe },
    { id: 2, num: '50+', label: 'Active clients', color: 'text-[#0E9BF0]', icon: Users },
    { id: 3, num: '200+', label: 'Projects delivered', color: 'text-[#25C97D]', icon: Award },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (type: 'resume' | 'portfolio', file: File | null) => {
    if (type === 'resume') {
      setResumeFile(file);
      setResumeFileName(file?.name || '');
    } else {
      setPortfolioFile(file);
      setPortfolioFileName(file?.name || '');
    }
  };

  const addCaseStudy = () => {
    setCaseStudies(prev => [...prev, { id: Date.now().toString(), description: '' }]);
  };

  const removeCaseStudy = (id: string) => {
    if (caseStudies.length > 1) {
      setCaseStudies(prev => prev.filter(cs => cs.id !== id));
    }
  };

  const updateCaseStudy = (id: string, description: string) => {
    setCaseStudies(prev => prev.map(cs => cs.id === id ? { ...cs, description } : cs));
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitForm = async () => {
    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append('firstName', formData.firstName);
    submitData.append('lastName', formData.lastName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('country', formData.country);
    submitData.append('experienceLevel', formData.experienceLevel);
    submitData.append('portfolioLink', formData.portfolioLink);
    submitData.append('specialisations', formData.specialisations);
    submitData.append('availability', formData.availability);
    submitData.append('extraInfo', formData.extraInfo);
    submitData.append('caseStudies', JSON.stringify(caseStudies.map(cs => cs.description).filter(d => d)));

    if (resumeFile) submitData.append('resume', resumeFile);
    if (portfolioFile) submitData.append('portfolio', portfolioFile);

    try {
      const response = await fetch('/api/freelancer', {
        method: 'POST',
        body: submitData
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100;

  // Steps data for the stepper with arrows
  const steps = [
    { id: 1, title: 'Register', color: '#F8D000', bgColor: 'bg-[#F8D000]', textColor: 'text-[#1C2E4A]' },
    { id: 2, title: 'Fill Details', color: '#0E9BF0', bgColor: 'bg-[#0E9BF0]', textColor: 'text-white' },
    { id: 3, title: 'Case Studies', color: '#25C97D', bgColor: 'bg-[#25C97D]', textColor: 'text-[#1C2E4A]' },
    { id: 4, title: 'Done', color: '#1C2E4A', bgColor: 'bg-[#0d1b2e]/70', textColor: 'text-white', icon: Check },
  ];

  return (
    <div className="min-h-screen bg-[#1C2E4A] overflow-x-hidden relative">
      {/* Hero Section */}
      <div className="relative z-5 max-w-4xl mx-auto text-center px-5 md:px-12 pt-16 md:pt-20 pb-12">
        <div className="inline-flex items-center gap-2 bg-[#F8D000]/10 border border-[#F8D000]/40 text-[#F8D000] text-xs md:text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-8">
          <TrendingUp className="w-3.5 h-3.5" />
          Now Onboarding Developers
        </div>
        <h1 className="font-poppins font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.08] mb-6 text-white">
          Join the Army of<br />
          <span className="text-[#0E9BF0]">GHL Developers</span><br />
          at <span className="text-white">GHL </span><span className="text-[#0E9BF0]">Scale </span><span className="text-[#25C97D]">Up</span>
        </h1>
        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed font-light">
          We work with the best GoHighLevel builders in the world. Projects come in constantly and we need developers who are ready to move fast and build right.
        </p>
      </div>

      {/* Steps Track with Arrows - Fully Responsive */}
      <div className="relative z-5 max-w-5xl mx-auto mb-16 px-5 md:px-12">
        <div className="flex flex-row items-start justify-between gap-1 md:gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-1 flex-col items-center gap-2 relative">
              {/* Circle */}
              <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-poppins font-extrabold text-xs md:text-base shadow-lg ${step.bgColor} ${step.textColor} z-10`}>
                {step.icon ? <step.icon className="w-3.5 h-3.5 md:w-5 md:h-5" /> : step.id}
              </div>
              {/* Title */}
              <div className="font-poppins font-semibold text-[9px] md:text-xs text-white/70 text-center leading-tight">
                {step.title}
              </div>

              {/* Connecting line between circles - only for non-last items */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[60%] right-[-60%] h-0.5 bg-gradient-to-r from-white/40 to-white/10 z-0 hidden md:block"></div>
              )}
              {index < steps.length - 1 && (
                <div className="absolute top-4 left-[55%] right-[-55%] h-0.5 bg-white/20 z-0 block md:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div id="application-form" className="relative z-5 max-w-2xl mx-auto px-5 md:px-12 pb-20">
        {!isSuccess ? (
          <div className="bg-white/5 border border-white/15 rounded-2xl backdrop-blur-md overflow-hidden shadow-xl">
            {/* Form Header */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#0d1b2e] px-6 md:px-10 py-8 border-b border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F8D000] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Rocket className="w-6 h-6 text-[#1C2E4A]" />
              </div>
              <div>
                <h2 className="font-poppins font-bold text-xl text-white">Developer Application</h2>
                <p className="text-sm text-white/50">Takes about 3 minutes — projects match quickly</p>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-10">
              {/* Progress Bar */}
              <div className="h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F8D000] to-[#0E9BF0] transition-all duration-300 rounded-full" style={{ width: `${progressPercent}%` }}></div>
              </div>

              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="animate-fadeUp">
                  <div className="font-poppins font-bold text-lg text-white mb-1">Your Details</div>
                  <div className="text-sm text-white/50 mb-7">Tell us who you are and how to reach you.</div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all"
                          placeholder="first name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all"
                          placeholder="last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all"
                        placeholder="you@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">WhatsApp / Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all"
                          placeholder="98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Country</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#0E9BF0] focus:outline-none transition-all [&>option]:bg-[#1C2E4A] [&>option]:text-white"
                        >
                          <option value="" className="bg-[#1C2E4A] text-white">Select country</option>
                          <option className="bg-[#1C2E4A] text-white">India</option>
                          <option className="bg-[#1C2E4A] text-white">United States</option>
                          <option className="bg-[#1C2E4A] text-white">United Kingdom</option>
                          <option className="bg-[#1C2E4A] text-white">Canada</option>
                          <option className="bg-[#1C2E4A] text-white">Australia</option>
                          <option className="bg-[#1C2E4A] text-white">UAE</option>
                          <option className="bg-[#1C2E4A] text-white">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">GHL Experience Level</label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#0E9BF0] focus:outline-none transition-all [&>option]:bg-[#1C2E4A] [&>option]:text-white"
                      >
                        <option value="" className="bg-[#1C2E4A] text-white">Select level</option>
                        <option className="bg-[#1C2E4A] text-white">Beginner (0–6 months)</option>
                        <option className="bg-[#1C2E4A] text-white">Intermediate (6–18 months)</option>
                        <option className="bg-[#1C2E4A] text-white">Advanced (1.5–3 years)</option>
                        <option className="bg-[#1C2E4A] text-white">Expert (3+ years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      onClick={() => goToStep(2)}
                      className="bg-gradient-to-r from-[#F8D000] to-[#e6b800] text-[#1C2E4A] font-poppins font-bold px-6 py-3 rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2 text-sm md:text-base w-full md:w-auto justify-center"
                    >
                      Next: Portfolio & Resume <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="animate-fadeUp">
                  <div className="font-poppins font-bold text-lg text-white mb-1">Portfolio & Resume</div>
                  <div className="text-sm text-white/50 mb-7">Show us your work — the more we see, the faster we match you.</div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Upload Resume / CV</label>
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#F8D000] transition-all cursor-pointer relative bg-white/5">
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange('resume', e.target.files?.[0] || null)}
                        />
                        <Upload className="w-8 h-8 mx-auto mb-2 text-white/40" />
                        <div className="text-sm text-white/70"><strong className="text-[#F8D000]">Click to upload</strong> or drag & drop</div>
                        <div className="text-xs text-white/30 mt-1">PDF, DOC, DOCX — max 10MB</div>
                        {resumeFileName && <div className="text-sm text-[#25C97D] mt-2 flex items-center justify-center gap-1"><CheckCircle className="w-4 h-4" /> ✓ {resumeFileName}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Upload Portfolio (optional)</label>
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#F8D000] transition-all cursor-pointer relative bg-white/5">
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept=".pdf,.png,.jpg,.zip"
                          onChange={(e) => handleFileChange('portfolio', e.target.files?.[0] || null)}
                        />
                        <FolderOpen className="w-8 h-8 mx-auto mb-2 text-white/40" />
                        <div className="text-sm text-white/70"><strong className="text-[#F8D000]">Click to upload</strong> or drag & drop</div>
                        <div className="text-xs text-white/30 mt-1">PDF, images, ZIP — max 25MB</div>
                        {portfolioFileName && <div className="text-sm text-[#25C97D] mt-2 flex items-center justify-center gap-1"><CheckCircle className="w-4 h-4" /> ✓ {portfolioFileName}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Portfolio / LinkedIn URL (optional)</label>
                      <input
                        type="url"
                        name="portfolioLink"
                        value={formData.portfolioLink}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all"
                        placeholder="https://yoursite.com or linkedin.com/in/you"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Your GHL specialisations</label>
                      <textarea
                        name="specialisations"
                        value={formData.specialisations}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all resize-vertical"
                        placeholder="e.g. Workflow automations, CRM setup, AI chatbots, funnel building, API integrations, white-labelling..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
                    <button
                      onClick={() => goToStep(1)}
                      className="bg-white/5 border border-white/20 text-white/70 font-poppins font-semibold px-6 py-3 rounded-xl hover:text-white hover:border-white/30 transition-all order-2 sm:order-1"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => goToStep(3)}
                      className="bg-gradient-to-r from-[#F8D000] to-[#e6b800] text-[#1C2E4A] font-poppins font-bold px-6 py-3 rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center justify-center gap-2 order-1 sm:order-2"
                    >
                      Next: Case Studies <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div className="animate-fadeUp">
                  <div className="font-poppins font-bold text-lg text-white mb-1">Case Studies</div>
                  <div className="text-sm text-white/50 mb-7">Add links or short descriptions of GHL projects you've delivered. Even 1 goes a long way.</div>

                  <div className="space-y-3 mb-4">
                    {caseStudies.map((cs) => (
                      <div key={cs.id} className="flex gap-2">
                        <input
                          type="text"
                          value={cs.description}
                          onChange={(e) => updateCaseStudy(cs.id, e.target.value)}
                          className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all text-sm"
                          placeholder="e.g. Built full CRM pipeline for a US real estate brand — https://example.com"
                        />
                        <button
                          onClick={() => removeCaseStudy(cs.id)}
                          className="bg-red-500/10 border border-red-500/20 text-red-400/70 rounded-xl w-10 h-10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 transition-all flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={addCaseStudy}
                    className="w-full border border-dashed border-[#0E9BF0]/40 text-[#0E9BF0] rounded-xl py-3 text-sm font-medium hover:bg-[#0E9BF0]/10 transition-all flex items-center justify-center gap-2 mb-6"
                  >
                    <Plus className="w-4 h-4" /> Add another case study
                  </button>

                  <div className="mb-5">
                    <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Availability</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#0E9BF0] focus:outline-none transition-all [&>option]:bg-[#1C2E4A] [&>option]:text-white"
                    >
                      <option value="" className="bg-[#1C2E4A] text-white">Select availability</option>
                      <option className="bg-[#1C2E4A] text-white">Immediately available</option>
                      <option className="bg-[#1C2E4A] text-white">Available within 1 week</option>
                      <option className="bg-[#1C2E4A] text-white">Part-time (weekends / evenings)</option>
                      <option className="bg-[#1C2E4A] text-white">Project-by-project basis</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Anything else? (optional)</label>
                    <textarea
                      name="extraInfo"
                      value={formData.extraInfo}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all resize-vertical"
                      placeholder="Tools you use, rates, working style, languages spoken..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
                    <button
                      onClick={() => goToStep(2)}
                      className="bg-white/5 border border-white/20 text-white/70 font-poppins font-semibold px-6 py-3 rounded-xl hover:text-white hover:border-white/30 transition-all order-2 sm:order-1"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={submitForm}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#25C97D] to-[#1a9a5e] text-[#1C2E4A] font-poppins font-bold px-6 py-3 rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
                    >
                      {isSubmitting ? 'Submitting...' : <><CheckCircle className="w-4 h-4" /> Submit Application</>}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Success Card
          <div className="bg-white/5 border border-white/15 rounded-2xl backdrop-blur-md p-8 md:p-16 text-center shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-[#25C97D] to-[#1a9a5e] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 text-[#1C2E4A]" />
            </div>
            <h3 className="font-poppins font-extrabold text-2xl md:text-3xl text-white mb-3">You're In the Pool!</h3>
            <p className="text-white/50 text-base max-w-md mx-auto mb-8">
              We've got your application. Projects drop in constantly — we'll reach out the moment something fits your profile.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60 flex items-center gap-1"><Send className="w-3 h-3" /> Email confirmation sent</div>
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Projects matched fast</div>
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60 flex items-center gap-1"><Globe className="w-3 h-3" /> Global clients</div>
            </div>
          </div>
        )}
      </div>

      {/* Trust Strip */}
      <div className="relative z-5 border-t border-white/10 py-10 md:py-12 max-w-4xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col items-center text-center gap-2">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <div className={`font-poppins font-extrabold text-3xl md:text-4xl ${stat.color}`}>
                  {stat.num}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}