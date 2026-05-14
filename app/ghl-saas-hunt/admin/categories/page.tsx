// app/ghl-saas-directory/admin/categories/page.tsx
'use client';

import { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  FolderTree,
  AlertCircle,
  CheckCircle,
  MoveUp,
  MoveDown,
  Globe,
  Tag
} from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Mock categories data - This will be replaced with real API
const mockCategories = [
  { 
    id: '1', 
    name: 'Real Estate CRM', 
    slug: 'real-estate-crm', 
    product_count: 6,
    description: 'CRMs and property management solutions for real estate agents and brokerages',
    is_active: true,
    display_order: 1,
    created_at: '2024-01-15T10:00:00Z'
  },
  { 
    id: '2', 
    name: 'Agency Management', 
    slug: 'agency-management', 
    product_count: 0,
    description: 'Tools for managing digital agencies, client work, and team operations',
    is_active: true,
    display_order: 2,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '3', 
    name: 'E-commerce Automation', 
    slug: 'ecommerce-automation', 
    product_count: 0,
    description: 'Marketing automation and CRM solutions for e-commerce businesses',
    is_active: true,
    display_order: 3,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '4', 
    name: 'Health & Wellness', 
    slug: 'health-wellness', 
    product_count: 0,
    description: 'Patient management, appointment scheduling, and wellness CRMs',
    is_active: true,
    display_order: 4,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '5', 
    name: 'Education & Coaching', 
    slug: 'education-coaching', 
    product_count: 0,
    description: 'Course delivery, coaching platforms, and student management systems',
    is_active: true,
    display_order: 5,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '6', 
    name: 'Local Business', 
    slug: 'local-business', 
    product_count: 0,
    description: 'Solutions for local service providers, restaurants, and retail',
    is_active: true,
    display_order: 6,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '7', 
    name: 'Marketing Agency', 
    slug: 'marketing-agency', 
    product_count: 0,
    description: 'White-label marketing tools and agency-specific CRMs',
    is_active: true,
    display_order: 7,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '8', 
    name: 'Financial Services', 
    slug: 'financial-services', 
    product_count: 0,
    description: 'CRM and automation for financial advisors, insurance, and banking',
    is_active: true,
    display_order: 8,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '9', 
    name: 'Home Services', 
    slug: 'home-services', 
    product_count: 0,
    description: 'Solutions for contractors, cleaners, landscapers, and home services',
    is_active: true,
    display_order: 9,
    created_at: '2024-03-15T10:00:00Z'
  },
  { 
    id: '10', 
    name: 'Other', 
    slug: 'other', 
    product_count: 0,
    description: 'Miscellaneous GHL-based SaaS products not fitting other categories',
    is_active: true,
    display_order: 10,
    created_at: '2024-03-15T10:00:00Z'
  },
];

interface Category {
  id: string;
  name: string;
  slug: string;
  product_count: number;
  description: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Generate slug from name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  const handleAddCategory = () => {
    if (!formData.name.trim()) {
      setError('Category name is required');
      return;
    }

    // Check if category already exists
    if (categories.some(c => c.name.toLowerCase() === formData.name.toLowerCase())) {
      setError('Category already exists');
      return;
    }

    const newCategory: Category = {
      id: Date.now().toString(),
      name: formData.name,
      slug: formData.slug,
      product_count: 0,
      description: formData.description,
      is_active: true,
      display_order: categories.length + 1,
      created_at: new Date().toISOString(),
    };

    // TODO: API call to save category
    setCategories([...categories, newCategory]);
    setShowAddModal(false);
    setFormData({ name: '', slug: '', description: '' });
    setSuccess('Category added successfully');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleUpdateCategory = () => {
    if (!formData.name.trim()) {
      setError('Category name is required');
      return;
    }

    if (!editingCategory) return;

    const updatedCategories = categories.map(cat =>
      cat.id === editingCategory.id
        ? {
            ...cat,
            name: formData.name,
            slug: formData.slug,
            description: formData.description,
          }
        : cat
    );

    // TODO: API call to update category
    setCategories(updatedCategories);
    setEditingCategory(null);
    setFormData({ name: '', slug: '', description: '' });
    setSuccess('Category updated successfully');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleDeleteCategory = (category: Category) => {
    if (category.product_count > 0) {
      setError(`Cannot delete "${category.name}" because it has ${category.product_count} products. Reassign products first.`);
      setTimeout(() => setError(''), 5000);
      return;
    }

    if (confirm(`Are you sure you want to delete "${category.name}"?`)) {
      // TODO: API call to delete category
      setCategories(categories.filter(c => c.id !== category.id));
      setSuccess('Category deleted successfully');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleToggleActive = (id: string) => {
    // TODO: API call to toggle active status
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, is_active: !cat.is_active } : cat
    ));
    setSuccess('Category status updated');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleMoveOrder = (id: string, direction: 'up' | 'down') => {
    const index = categories.findIndex(c => c.id === id);
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === categories.length - 1) return;

    const newCategories = [...categories];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    [newCategories[index], newCategories[swapIndex]] = [newCategories[swapIndex], newCategories[index]];

    // Update display_order
    newCategories.forEach((cat, idx) => {
      cat.display_order = idx + 1;
    });

    // TODO: API call to update order
    setCategories(newCategories);
  };

  const openEditModal = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description,
    });
    setError('');
  };

  const activeCategories = categories.filter(c => c.is_active);
  const inactiveCategories = categories.filter(c => !c.is_active);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-space-blue">Categories</h1>
            <p className="text-mid-gray text-sm">
              Manage product categories for the GHL SaaS Directory
            </p>
          </div>
          <Button variant="default" onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4" />
            Add Category
          </Button>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="bg-close-green/10 border border-close-green/20 rounded-lg p-3 flex items-center gap-2 text-close-green">
            <CheckCircle className="w-4 h-4" />
            {success}
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-600">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        {/* Category Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-mid-gray text-sm">Total Categories</p>
                  <p className="text-2xl font-bold text-space-blue">{categories.length}</p>
                </div>
                <FolderTree className="w-8 h-8 text-nurture-blue" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-mid-gray text-sm">Active Categories</p>
                  <p className="text-2xl font-bold text-space-blue">{activeCategories.length}</p>
                </div>
                <Globe className="w-8 h-8 text-close-green" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-mid-gray text-sm">Inactive Categories</p>
                  <p className="text-2xl font-bold text-space-blue">{inactiveCategories.length}</p>
                </div>
                <Tag className="w-8 h-8 text-capture-yellow" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Categories List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Active Categories</span>
              <Badge variant="secondary" className="text-xs">
                Displayed on Directory
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {activeCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-4 bg-off-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-space-blue">{category.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {category.product_count} products
                      </Badge>
                      <span className="text-xs text-mid-gray font-mono">
                        /{category.slug}
                      </span>
                    </div>
                    {category.description && (
                      <p className="text-sm text-dark-gray">{category.description}</p>
                    )}
                    <p className="text-xs text-mid-gray mt-1">
                      Created: {new Date(category.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleMoveOrder(category.id, 'up')}
                      disabled={category.display_order === 1}
                      className="disabled:opacity-50"
                    >
                      <MoveUp className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleMoveOrder(category.id, 'down')}
                      disabled={category.display_order === activeCategories.length}
                      className="disabled:opacity-50"
                    >
                      <MoveDown className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => openEditModal(category)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleToggleActive(category.id)}
                      className="text-capture-yellow"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteCategory(category)}
                      className="text-red-500"
                      disabled={category.product_count > 0}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              {activeCategories.length === 0 && (
                <div className="text-center py-8 text-mid-gray">
                  No active categories. Add a category or activate existing ones.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Inactive Categories List */}
        {inactiveCategories.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Inactive Categories</span>
                <Badge variant="outline" className="text-xs">
                  Hidden from Directory
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {inactiveCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-4 bg-off-white/50 rounded-lg opacity-75"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-space-blue">{category.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {category.product_count} products
                        </Badge>
                        <span className="text-xs text-mid-gray font-mono">
                          /{category.slug}
                        </span>
                      </div>
                      {category.description && (
                        <p className="text-sm text-dark-gray">{category.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost" onClick={() => openEditModal(category)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleToggleActive(category.id)}
                        className="text-close-green"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteCategory(category)}
                        className="text-red-500"
                        disabled={category.product_count > 0}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add/Edit Category Modal */}
        {(showAddModal || editingCategory) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="flex items-center justify-between p-4 border-b border-light-gray">
                <h2 className="text-xl font-bold text-space-blue">
                  {editingCategory ? 'Edit Category' : 'Add New Category'}
                </h2>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingCategory(null);
                    setFormData({ name: '', slug: '', description: '' });
                    setError('');
                  }}
                  className="p-1 hover:bg-off-white rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-space-blue mb-1">
                    Category Name *
                  </label>
                  <Input
                    placeholder="e.g., Real Estate CRM"
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    autoFocus
                  />
                  <p className="text-xs text-mid-gray mt-1">
                    This is how it will appear in filters and product pages
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-space-blue mb-1">
                    Slug / URL
                  </label>
                  <Input
                    placeholder="real-estate-crm"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                  />
                  <p className="text-xs text-mid-gray mt-1">
                    Used in URLs. Auto-generated from name.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-space-blue mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    placeholder="Brief description of what this category includes..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full rounded-xl border border-light-gray px-4 py-2 text-dark-gray text-sm focus:outline-none focus:border-nurture-blue transition-colors resize-none"
                  />
                </div>
                {error && (
                  <div className="text-red-600 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
              </div>
              <div className="flex gap-3 p-4 border-t border-light-gray">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingCategory(null);
                    setFormData({ name: '', slug: '', description: '' });
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={editingCategory ? handleUpdateCategory : handleAddCategory}
                >
                  <Save className="w-4 h-4" />
                  {editingCategory ? 'Save Changes' : 'Add Category'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}