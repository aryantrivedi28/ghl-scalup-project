// components/admin/AdminLayout.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Inbox, 
  Package, 
  Tags, 
  LogOut, 
  Shield,
  Menu,
  X,
  Bell,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminPhone, setAdminPhone] = useState('');

  useEffect(() => {
    // Check admin session
    const session = localStorage.getItem('admin_session');
    if (session) {
      const { expiresAt, isAuthenticated, phone } = JSON.parse(session);
      if (expiresAt > Date.now() && isAuthenticated) {
        setIsAuthenticated(true);
        setAdminPhone(phone);
      } else {
        localStorage.removeItem('admin_session');
        router.push('/ghl-saas-directory/admin/login');
      }
    } else {
      router.push('/ghl-saas-directory/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    router.push('/ghl-saas-directory/admin/login');
  };

  const navItems = [
    { href: '/ghl-saas-directory/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/ghl-saas-directory/admin/submissions', label: 'Submissions', icon: Inbox },
    { href: '/ghl-saas-directory/admin/products', label: 'Products', icon: Package },
    { href: '/ghl-saas-directory/admin/categories', label: 'Categories', icon: Tags },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nurture-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-space-blue text-white w-72 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } lg:relative lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="w-10 h-10 bg-capture-yellow rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-space-blue" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Admin Panel</h1>
              <p className="text-xs text-white/50">GHL Scale Up</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-capture-yellow text-space-blue font-semibold'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Admin Info */}
          <div className="absolute bottom-6 left-0 right-0 px-6">
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Admin</p>
                  <p className="text-xs text-white/50">+91 {adminPhone}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        <div className="sticky top-0 bg-white border-b border-light-gray z-30">
          <Container className="py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-space-blue">
                {navItems.find(item => item.href === pathname)?.label || 'Dashboard'}
              </h2>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-off-white rounded-lg transition-colors relative">
                  <Bell className="w-5 h-5 text-mid-gray" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-capture-yellow rounded-full"></span>
                </button>
                <div className="flex items-center gap-2 pl-3 border-l border-light-gray">
                  <div className="text-right">
                    <p className="text-xs text-mid-gray">Session expires in</p>
                    <p className="text-sm font-semibold text-space-blue">12 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}