'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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
    { id: 1, num: '6', label: 'Countries served', color: 'text-[#F5C518]' },
    { id: 2, num: '50+', label: 'Active clients', color: 'text-[#3B9EE8]' },
    { id: 3, num: '200+', label: 'Projects delivered', color: 'text-[#2ECC71]' },
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

  const scrollToForm = () => {
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

  return (
    <div className="min-h-screen bg-[#071833] overflow-x-hidden relative">
      {/* Animated background orbs */}
      <div className="fixed w-[500px] h-[500px] bg-[#3B9EE8] rounded-full blur-[120px] pointer-events-none z-0 opacity-20 -top-[100px] -right-[100px]"></div>
      <div className="fixed w-[400px] h-[400px] bg-[#2ECC71] rounded-full blur-[120px] pointer-events-none z-0 opacity-20 -bottom-[50px] -left-[80px]"></div>
      <div className="fixed w-[300px] h-[300px] bg-[#F5C518] rounded-full blur-[120px] pointer-events-none z-0 opacity-10 top-[40%] left-[30%]"></div>

      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(245,197,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,197,24,0.03)_1px,transparent_1px)] bg-[60px_60px] pointer-events-none z-0"></div>
      {/* Hero Section */}
      <div className="relative z-5 max-w-4xl mx-auto text-center px-5 md:px-12 pt-16 md:pt-20 pb-12">
        <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/40 text-[#F5C518] text-xs md:text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-8">
          ⚡ Now Onboarding Developers
        </div>
        <h1 className="font-poppins font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.08] mb-6 text-white/80">
          Join the Army of<br />
          <span className="text-[#3B9EE8]">GHL Developers</span><br />
          at <span className="text-white/80">GHL</span><span className="text-[#3B9EE8]">Scale</span><span className="text-[#2ECC71]">Up</span>
        </h1>
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-light">
          We work with the best GoHighLevel builders in the world. Projects come in constantly — and we need developers who are ready to move fast and build right.
        </p>
      </div>

      {/* Steps Track - VERTICAL VERSION (Matches Original Design) */}
      <div className="relative z-5 max-w-4xl mx-auto mb-16 px-5 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-poppins font-extrabold text-base flex-shrink-0 bg-[#F5C518] text-[#071833]">
              1
            </div>
            <div className="font-poppins font-semibold text-xs max-w-[100px] leading-tight">
              Register
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-poppins font-extrabold text-base flex-shrink-0 bg-[#3B9EE8] text-white">
              2
            </div>
            <div className="font-poppins font-semibold text-xs max-w-[100px] leading-tight">
              Fill Your Details
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-poppins font-extrabold text-base flex-shrink-0 bg-[#2ECC71] text-[#071833]">
              3
            </div>
            <div className="font-poppins font-semibold text-xs max-w-[100px] leading-tight">
              Add Case Studies
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-poppins font-extrabold text-base flex-shrink-0 bg-[#122d56] text-white border border-white/10">
              ✓
            </div>
            <div className="font-poppins font-semibold text-xs max-w-[100px] leading-tight">
              We Reach Out
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="application-form" className="relative z-5 max-w-2xl mx-auto px-5 md:px-12 pb-20">
        {!isSuccess ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-br from-[#0d2444] to-[#122d56] px-6 md:px-10 py-8 border-b border-white/10 flex items-center gap-4">
              <div>
                <h2 className="font-poppins font-bold text-xl">Developer Application</h2>
                <p className="text-sm text-white/50">Takes about 3 minutes — projects match quickly</p>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-10">
              {/* Progress Bar */}
              <div className="h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F5C518] to-[#3B9EE8] transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
              </div>

              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="animate-fadeUp">
                  <div className="font-poppins font-bold text-lg mb-1">Your Details</div>
                  <div className="text-sm text-white/50 mb-7">Tell us who you are and how to reach you.</div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all" placeholder="Aryan" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all" placeholder="Sharma" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all" placeholder="you@email.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">WhatsApp / Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all" placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Country</label>
                        <select name="country" value={formData.country} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B9EE8] focus:outline-none transition-all">
                          <option value="">Select country</option>
                          <option>India</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                          <option>UAE</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">GHL Experience Level</label>
                      <select name="experienceLevel" value={formData.experienceLevel} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B9EE8] focus:outline-none transition-all">
                        <option value="">Select level</option>
                        <option>Beginner (0–6 months)</option>
                        <option>Intermediate (6–18 months)</option>
                        <option>Advanced (1.5–3 years)</option>
                        <option>Expert (3+ years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button onClick={() => goToStep(2)} className="bg-gradient-to-r from-[#F5C518] to-[#e6b800] text-[#071833] font-poppins font-bold px-7 py-3 rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2">
                      Next: Portfolio & Resume →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="animate-fadeUp">
                  <div className="font-poppins font-bold text-lg mb-1">Portfolio & Resume</div>
                  <div className="text-sm text-white/50 mb-7">Show us your work — the more we see, the faster we match you.</div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Upload Resume / CV</label>
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#F5C518] transition-all cursor-pointer relative bg-white/5">
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange('resume', e.target.files?.[0] || null)} />
                        <div className="text-3xl mb-2">📄</div>
                        <div className="text-sm"><strong className="text-[#F5C518]">Click to upload</strong> or drag & drop</div>
                        <div className="text-xs text-white/25 mt-1">PDF, DOC, DOCX — max 10MB</div>
                        {resumeFileName && <div className="text-sm text-[#2ECC71] mt-2">✓ {resumeFileName}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Upload Portfolio (optional)</label>
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#F5C518] transition-all cursor-pointer relative bg-white/5">
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.png,.jpg,.zip" onChange={(e) => handleFileChange('portfolio', e.target.files?.[0] || null)} />
                        <div className="text-3xl mb-2">🗂️</div>
                        <div className="text-sm"><strong className="text-[#F5C518]">Click to upload</strong> or drag & drop</div>
                        <div className="text-xs text-white/25 mt-1">PDF, images, ZIP — max 25MB</div>
                        {portfolioFileName && <div className="text-sm text-[#2ECC71] mt-2">✓ {portfolioFileName}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Portfolio / LinkedIn URL (optional)</label>
                      <input type="url" name="portfolioLink" value={formData.portfolioLink} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all" placeholder="https://yoursite.com or linkedin.com/in/you" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Your GHL specialisations</label>
                      <textarea name="specialisations" value={formData.specialisations} onChange={handleInputChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all resize-vertical" placeholder="e.g. Workflow automations, CRM setup, AI chatbots, funnel building, API integrations, white-labelling..."></textarea>
                    </div>
                  </div>

                  <div className="flex justify-between gap-3 mt-8">
                    <button onClick={() => goToStep(1)} className="bg-white/5 border border-white/10 text-white/60 font-poppins font-semibold px-6 py-3 rounded-xl hover:text-white transition-all">← Back</button>
                    <button onClick={() => goToStep(3)} className="bg-gradient-to-r from-[#F5C518] to-[#e6b800] text-[#071833] font-poppins font-bold px-7 py-3 rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2">
                      Next: Case Studies →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div className="animate-fadeUp">
                  <div className="font-poppins font-bold text-lg mb-1">Case Studies</div>
                  <div className="text-sm text-white/50 mb-7">Add links or short descriptions of GHL projects you've delivered. Even 1 goes a long way.</div>

                  <div className="space-y-3 mb-4">
                    {caseStudies.map((cs) => (
                      <div key={cs.id} className="flex gap-2">
                        <input type="text" value={cs.description} onChange={(e) => updateCaseStudy(cs.id, e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all text-sm" placeholder="e.g. Built full CRM pipeline for a US real estate brand — https://example.com" />
                        <button onClick={() => removeCaseStudy(cs.id)} className="bg-red-500/10 border border-red-500/20 text-red-500/70 rounded-xl w-10 h-10 flex items-center justify-center hover:bg-red-500/20 transition-all">×</button>
                      </div>
                    ))}
                  </div>

                  <button onClick={addCaseStudy} className="w-full border border-dashed border-[#3B9EE8]/40 text-[#3B9EE8] rounded-xl py-3 text-sm font-medium hover:bg-[#3B9EE8]/10 transition-all flex items-center justify-center gap-2 mb-6">
                    <span>+</span> Add another case study
                  </button>

                  <div className="mb-5">
                    <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Availability</label>
                    <select name="availability" value={formData.availability} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B9EE8] focus:outline-none transition-all">
                      <option value="">Select availability</option>
                      <option>Immediately available</option>
                      <option>Available within 1 week</option>
                      <option>Part-time (weekends / evenings)</option>
                      <option>Project-by-project basis</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-2">Anything else? (optional)</label>
                    <textarea name="extraInfo" value={formData.extraInfo} onChange={handleInputChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#3B9EE8] focus:outline-none transition-all resize-vertical" placeholder="Tools you use, rates, working style, languages spoken..."></textarea>
                  </div>

                  <div className="flex justify-between gap-3 mt-8">
                    <button onClick={() => goToStep(2)} className="bg-white/5 border border-white/10 text-white/60 font-poppins font-semibold px-6 py-3 rounded-xl hover:text-white transition-all">← Back</button>
                    <button onClick={submitForm} disabled={isSubmitting} className="bg-gradient-to-r from-[#2ECC71] to-[#27b560] text-[#071833] font-poppins font-bold px-7 py-3 rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Submitting...' : '✓ Submit Application'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Success Card
          <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-10 md:p-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2ECC71] to-[#27b560] rounded-full flex items-center justify-center text-4xl mx-auto mb-6 animate-pop">
              ✓
            </div>
            <h3 className="font-poppins font-extrabold text-2xl md:text-3xl mb-3">You're In the Pool!</h3>
            <p className="text-white/50 text-base max-w-md mx-auto mb-8">
              We've got your application. Projects drop in constantly — we'll reach out the moment something fits your profile.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60">📬 Email confirmation sent</div>
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60">⚡ Projects matched fast</div>
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60">🌍 Global clients</div>
            </div>
          </div>
        )}
      </div>

      {/* Trust Strip */}
      <div className="relative z-5 border-t border-white/10 py-10 md:py-12 max-w-4xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center gap-2">
              <div className={`font-poppins font-extrabold text-3xl md:text-4xl ${stat.color}`}>
                {stat.num}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}