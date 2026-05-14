// app/ghl-saas-hunt/submit/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, AlertCircle, Upload, Mail, User, Globe, Tag, 
  X, ImageIcon, Loader2, Plus, Trash2
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import VerificationPopup from '@/components/directory/auth/VerificationPopup';

const CATEGORIES = [
  'CRM & Sales',
  'Automation',
  'Marketing',
  'Agency Tools',
  'Snapshots & Templates',
  'White-Label SaaS',
  'Healthcare',
  'Real Estate',
  'Solar',
  'Recruitment',
  'SEO & Local',
  'Other',
];

interface Screenshot {
  id: string;
  url: string;
  file?: File;
  uploading?: boolean;
}

export default function SubmitSaaSPage() {
  const router = useRouter();
  const { sessionToken, isAuthenticated, isLoading, user, sendOTP, verifyOTP, isVerifying } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingScreenshots, setUploadingScreenshots] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [showCustomCategoryInput, setShowCustomCategoryInput] = useState(false);
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const screenshotInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    productName: '',
    websiteUrl: '',
    logoUrl: '',
    description: '',
  });

  // Show verification popup immediately if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShowVerification(true);
    }
  }, [isLoading, isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productName.trim()) {
      setError('Product name is required');
      return;
    }
    if (!formData.websiteUrl.trim()) {
      setError('Website URL is required');
      return;
    }
    
    // Determine final category
    let finalCategory = selectedCategory;
    if (selectedCategory === 'Other') {
      if (!customCategory.trim()) {
        setError('Please enter a custom category name');
        return;
      }
      finalCategory = customCategory;
    } else if (!selectedCategory) {
      setError('Please select a category');
      return;
    }
    
    if (!formData.description.trim()) {
      setError('Product description is required');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/ghl-saas-hunt/products', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify({
          productName: formData.productName,
          websiteUrl: formData.websiteUrl,
          logoUrl: formData.logoUrl,
          description: formData.description,
          category: finalCategory,
          customCategory: selectedCategory === 'Other' ? customCategory : null,
          screenshots: screenshots.map(s => s.url),
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        window.scrollTo(0, 0);
      } else {
        setError(data.error || 'Failed to submit product');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerificationSuccess = () => {
    setShowVerification(false);
  };

  // Logo upload function
  const handleLogoUpload = async (file: File) => {
    if (!file) return;
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPEG, PNG, WEBP, and SVG images are allowed');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }
    
    setUploadingLogo(true);
    setError('');
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `temp/${fileName}`;
      
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('path', filePath);
      
      const response = await fetch('/api/ghl-saas-hunt/upload/logo', {
        method: 'POST',
        body: formDataUpload,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormData(prev => ({ ...prev, logoUrl: data.url }));
      } else {
        setError(data.error || 'Failed to upload logo');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload logo. Please try again.');
    } finally {
      setUploadingLogo(false);
    }
  };

  // Screenshot upload function
  const handleScreenshotUpload = async (file: File) => {
    if (!file) return;
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPEG, PNG, and WEBP images are allowed for screenshots');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }
    
    const tempId = `temp_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    setScreenshots(prev => [...prev, { id: tempId, url: '', file, uploading: true }]);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `screenshots/${fileName}`;
      
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('path', filePath);
      
      const response = await fetch('/api/ghl-saas-hunt/upload/logo', {
        method: 'POST',
        body: formDataUpload,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setScreenshots(prev => prev.map(s => 
          s.id === tempId ? { ...s, url: data.url, uploading: false } : s
        ));
      } else {
        setScreenshots(prev => prev.filter(s => s.id !== tempId));
        setError(data.error || 'Failed to upload screenshot');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setScreenshots(prev => prev.filter(s => s.id !== tempId));
      setError('Failed to upload screenshot. Please try again.');
    }
  };

  const removeScreenshot = (id: string) => {
    setScreenshots(prev => prev.filter(s => s.id !== id));
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (value === 'Other') {
      setShowCustomCategoryInput(true);
    } else {
      setShowCustomCategoryInput(false);
      setCustomCategory('');
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Successfully Published!</h1>
            <p className="text-gray-600 mb-6">
              Your GHL SaaS has been published to the directory.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => router.push('/ghl-saas-hunt')}
                className="bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white font-semibold px-6 py-2 rounded-lg transition-all"
              >
                View Directory
              </button>
              <button 
                onClick={() => {
                  setSuccess(false);
                  setFormData({
                    productName: '',
                    websiteUrl: '',
                    logoUrl: '',
                    description: '',
                  });
                  setSelectedCategory('');
                  setCustomCategory('');
                  setShowCustomCategoryInput(false);
                  setScreenshots([]);
                }}
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-2 rounded-lg transition-all"
              >
                Submit Another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#0E9BF0]" />
      </div>
    );
  }

  // Show form only if authenticated
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header - Dark Theme */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1C2E4A] via-[#1C2E4A] to-[#0B1421]">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[rgba(248,208,0,0.12)] border border-[rgba(248,208,0,0.28)] rounded-full px-3 py-1 text-xs font-semibold mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F8D000] animate-pulse"></div>
              <span className="text-[#F8D000]">Open Submissions</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-3">
              List Your <span className="text-[#F8D000]">GHL SaaS</span>
            </h1>
            <p className="text-white/50 max-w-md mx-auto text-sm">
              Free to submit. Get discovered by 1,200+ monthly visitors.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0E9BF0]/5 to-transparent p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">List Your SaaS</h2>
              <p className="text-gray-500 text-sm mt-1">Fill in the details below to get listed in the directory.</p>
              <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Verified account - {user?.name} ({user?.email})
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="CloserBot AI"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Website URL <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="url"
                      placeholder="https://yourproduct.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all bg-white"
                    required
                  >
                    <option value="">Select a category…</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {showCustomCategoryInput && (
                    <input
                      type="text"
                      placeholder="Enter your custom category name"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      className="mt-2 w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                      required
                    />
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Product Logo (Optional)
                  </label>
                  <div className="flex gap-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/svg+xml"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleLogoUpload(file);
                      }}
                      className="hidden"
                    />
                    
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploadingLogo}
                      className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#0E9BF0] hover:bg-[#0E9BF0]/5 transition-all disabled:opacity-50"
                    >
                      {uploadingLogo ? (
                        <Loader2 className="w-5 h-5 text-[#0E9BF0] animate-spin" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-gray-400" />
                      )}
                      <span className="text-sm text-gray-600">
                        {uploadingLogo ? 'Uploading...' : 'Upload Logo'}
                      </span>
                    </button>
                    
                    {formData.logoUrl ? (
                      <div className="flex items-center gap-2 flex-1">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0 relative">
                          <img src={formData.logoUrl} alt="Logo preview" className="w-10 h-10 object-contain rounded" />
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, logoUrl: '' })}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        <input
                          type="url"
                          placeholder="Or paste image URL directly"
                          value={formData.logoUrl}
                          onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                          className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                        />
                      </div>
                    ) : (
                      <input
                        type="url"
                        placeholder="Or paste image URL directly"
                        value={formData.logoUrl}
                        onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                        className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                      />
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Upload JPG, PNG, WEBP, or SVG (max 5MB) or paste a URL (optional)
                  </p>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="What does your product do? Who is it for? What problem does it solve?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all resize-vertical"
                  required
                />
              </div>

              {/* Screenshots Upload Section */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Product Screenshots (Optional)
                </label>
                <div className="flex gap-3 mb-3">
                  <input
                    ref={screenshotInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files) {
                        Array.from(files).forEach(file => handleScreenshotUpload(file));
                      }
                      if (screenshotInputRef.current) screenshotInputRef.current.value = '';
                    }}
                    className="hidden"
                  />
                  
                  <button
                    type="button"
                    onClick={() => screenshotInputRef.current?.click()}
                    disabled={uploadingScreenshots}
                    className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#0E9BF0] hover:bg-[#0E9BF0]/5 transition-all"
                  >
                    <Plus className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Add Screenshots</span>
                  </button>
                </div>

                {/* Screenshots Grid */}
                {screenshots.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {screenshots.map((screenshot) => (
                      <div key={screenshot.id} className="relative group">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                          {screenshot.uploading ? (
                            <div className="w-full h-full flex items-center justify-center">
                              <Loader2 className="w-6 h-6 animate-spin text-[#0E9BF0]" />
                            </div>
                          ) : (
                            <img 
                              src={screenshot.url} 
                              alt="Screenshot"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeScreenshot(screenshot.id)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  Upload screenshots to showcase your product (JPEG, PNG, WEBP, max 5MB each)
                </p>
              </div>
              
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F8D000] hover:bg-[#FFE44D] text-gray-900 font-bold py-3 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? 'Publishing...' : '🚀 Publish to Directory →'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Verification Popup */}
      <VerificationPopup
        isOpen={showVerification}
        onClose={() => {
          setShowVerification(false);
          router.push('/ghl-saas-hunt/submit');
        }}
        onSuccess={handleVerificationSuccess}
        onSendOTP={sendOTP}
        onVerifyOTP={verifyOTP}
        isLoading={isVerifying}
        title="Verify Your Identity"
        description="Please verify to list your SaaS product"
      />
    </>
  );
}