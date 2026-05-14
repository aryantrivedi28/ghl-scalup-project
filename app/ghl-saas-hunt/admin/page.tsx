// app/ghl-saas-directory/admin/page.tsx (Updated)
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Download,
  X,
  AlertCircle,
  Shield,
  LayoutDashboard,
  Package,
  TrendingUp,
  LogOut,
  Upload,
  ImageIcon,
  Loader2
} from 'lucide-react';

// Admin Login Modal (Simple Email)
function AdminLoginModal({ onVerify }: { onVerify: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/ghl-saas-hunt/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('admin_session', data.sessionToken);
        localStorage.setItem('admin_email', email);
        onVerify(email);
      } else {
        setError(data.error || 'Unauthorized access');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1C2E4A] to-[#0B1421] rounded-2xl max-w-md w-full shadow-2xl border border-white/10">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-[#0E9BF0]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#0E9BF0]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Admin Access</h2>
              <p className="text-sm text-white/40">Enter your email to access admin panel</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@ghlscaleup.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
              autoFocus
              required
            />
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg flex items-center gap-2 text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F8D000] hover:bg-[#FFE44D] text-[#0B1421] font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? 'Verifying...' : 'Enter Admin Panel →'}
          </button>
        </form>
      </div>
    </div>
  );
}

// Manual Listing Modal with Logo Upload
function ManualListingModal({ onClose, onSubmit }: { onClose: () => void; onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    productName: '',
    founderName: '',
    email: '',
    category: '',
    websiteUrl: '',
    description: '',
    logoUrl: '',
  });
  const [error, setError] = useState('');
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = [
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
      
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('path', filePath);
      
      const response = await fetch('/api/ghl-saas-hunt/upload/logo', {
        method: 'POST',
        body: uploadFormData,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productName.trim()) {
      setError('Product name is required');
      return;
    }
    if (!formData.founderName.trim()) {
      setError('Founder name is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!formData.category) {
      setError('Category is required');
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Manual Listing</h2>
            <p className="text-sm text-gray-500">Add a SaaS product manually</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., AgentCRM Suite"
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Founder Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Marcus Bell"
                value={formData.founderName}
                onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="marcus@agentcrm.io"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all bg-white"
                required
              >
                <option value="">Select a category…</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Website URL
            </label>
            <input
              type="url"
              placeholder="https://agentcrmsuite.com"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Product Logo
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
              {formData.logoUrl && (
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
              )}
              {!formData.logoUrl && (
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
              Upload JPG, PNG, WEBP, or SVG (max 5MB) or paste a URL
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Brief description of the product..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all resize-vertical"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" />
              Add to Directory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Edit Product Modal (No lead intent)
function EditProductModal({ product, onClose, onSave }: { product: any; onClose: () => void; onSave: (data: any) => void }) {
  const [formData, setFormData] = useState(product);
  const [error, setError] = useState('');

  const categories = [
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.productName.trim()) {
      setError('Product name is required');
      return;
    }
    if (!formData.founderName.trim()) {
      setError('Founder name is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Edit Product</h2>
            <p className="text-sm text-gray-500">Update product details</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Product Name
              </label>
              <input
                type="text"
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Founder Name
              </label>
              <input
                type="text"
                value={formData.founderName}
                onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 transition-all bg-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-[#0E9BF0] hover:bg-[#0E9BF0]/90 text-white font-semibold py-2.5 rounded-lg transition-all">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Delete Confirmation Modal
function DeleteConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1C2E4A] to-[#0B1421] rounded-2xl max-w-md w-full shadow-2xl border border-white/10">
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
            <Trash2 className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Delete this listing?</h3>
          <p className="text-white/40 text-sm mb-6">
            This permanently removes the product from the directory and cannot be undone.
          </p>
          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 px-4 py-2.5 border border-white/10 rounded-lg text-white/60 hover:bg-white/5 transition-colors font-medium">
              Cancel
            </button>
            <button onClick={onConfirm} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-all">
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showManualModal, setShowManualModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [deletingProduct, setDeletingProduct] = useState<any>(null);
  const [stats, setStats] = useState({ totalProducts: 0, totalCategories: 0, monthlyVisitors: 0 });

  const sessionToken = typeof window !== 'undefined' ? localStorage.getItem('admin_session') : null;

  useEffect(() => {
    if (isAuthenticated && sessionToken) {
      fetchProducts();
      fetchStats();
    }
  }, [isAuthenticated, searchTerm]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/ghl-saas-hunt/stats');
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = searchTerm 
        ? `/api/ghl-saas-hunt/admin/products?search=${encodeURIComponent(searchTerm)}`
        : '/api/ghl-saas-hunt/admin/products';
      
      const response = await fetch(url, {
        headers: { 'Authorization': `Bearer ${sessionToken}` }
      });
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data.products);
      } else if (data.error === 'Unauthorized') {
        handleLogout();
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = (email: string) => {
    setIsAuthenticated(true);
    setShowLogin(false);
    setAdminEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_email');
    setIsAuthenticated(false);
    setShowLogin(true);
    setAdminEmail('');
  };

  const handleExportCSV = async () => {
    try {
      const response = await fetch('/api/ghl-saas-hunt/admin/export', {
        headers: { 'Authorization': `Bearer ${sessionToken}` }
      });
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ghl-saas-directory-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export data');
    }
  };

  const handleManualSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/ghl-saas-hunt/admin/products/manual', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      if (result.success) {
        fetchProducts();
        fetchStats();
        setShowManualModal(false);
      } else {
        alert(result.error || 'Failed to add product');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  const handleEditSave = async (updatedData: any) => {
    try {
      const response = await fetch(`/api/ghl-saas-hunt/admin/products/${updatedData.id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify(updatedData),
      });
      
      const result = await response.json();
      if (result.success) {
        fetchProducts();
        setEditingProduct(null);
      } else {
        alert(result.error || 'Failed to update product');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  const handleDelete = async () => {
    if (!deletingProduct) return;
    
    try {
      const response = await fetch(`/api/ghl-saas-hunt/admin/products/${deletingProduct.id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${sessionToken}` }
      });
      
      const result = await response.json();
      if (result.success) {
        fetchProducts();
        fetchStats();
        setDeletingProduct(null);
      } else {
        alert(result.error || 'Failed to delete product');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  if (!isAuthenticated && showLogin) {
    return <AdminLoginModal onVerify={handleVerify} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section - Dark Theme */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1C2E4A] via-[#1C2E4A] to-[#0B1421]">
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0E9BF0]/10 border border-[#0E9BF0]/20 rounded-full px-3 py-1 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0E9BF0]"></div>
                <span className="text-[#0E9BF0] text-xs font-semibold tracking-wider">Internal Admin</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white">
                Directory <span className="text-[#F8D000]">Management</span>
              </h1>
              <p className="text-white/40 text-sm mt-1">Logged in as: {adminEmail}</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleExportCSV}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button 
                onClick={() => setShowManualModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[#F8D000] hover:bg-[#FFE44D] text-[#0B1421] rounded-lg transition-colors font-semibold"
              >
                <Plus className="w-4 h-4" />
                List Manually
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-black text-[#0E9BF0]">{stats.totalProducts}</div>
              <div className="w-10 h-10 bg-[#0E9BF0]/10 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-[#0E9BF0]" />
              </div>
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Listings</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-black text-[#F8D000]">{stats.totalCategories}</div>
              <div className="w-10 h-10 bg-[#F8D000]/10 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-[#F8D000]" />
              </div>
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Categories</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-black text-orange-500">{stats.monthlyVisitors}</div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Monthly Visitors</div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200 bg-gray-50/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by product, founder, email, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0E9BF0] focus:ring-2 focus:ring-[#0E9BF0]/20 bg-white"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Founder</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-12">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0E9BF0]"></div>
                      </div>
                    </td>
                  </tr>
                ) : products.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-12 text-gray-500">
                      No products found
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-base">
                            {product.logo}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{product.productName}</div>
                            <div className="text-xs text-gray-500">{product.email}</div>
                          </div>
                        </div>
                       </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-700 text-sm">{product.founderName}</div>
                       </td>
                      <td className="px-4 py-3">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{product.category}</span>
                       </td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        {new Date(product.submittedDate).toLocaleDateString()}
                       </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setEditingProduct(product)}
                            className="p-1.5 text-[#0E9BF0] hover:bg-[#0E9BF0]/10 rounded-lg transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => setDeletingProduct(product)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                       </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showManualModal && (
        <ManualListingModal
          onClose={() => setShowManualModal(false)}
          onSubmit={handleManualSubmit}
        />
      )}

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleEditSave}
        />
      )}

      {deletingProduct && (
        <DeleteConfirmModal
          onConfirm={handleDelete}
          onClose={() => setDeletingProduct(null)}
        />
      )}
    </div>
  );
}