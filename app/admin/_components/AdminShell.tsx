"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo, memo, useState } from "react";
import toast from "react-hot-toast";
import {
  Briefcase,
  CalendarClock,
  Home,
  Inbox,
  LogOut,
  MessageSquare,
  Users,
  Settings,
  ChevronRight,
  Menu,
  X,
  Bell,
  Search,
  HelpCircle,
} from "lucide-react";
import { getApiError, logoutAdmin } from "@/lib/api";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Home },
  { href: "/admin/jobs", label: "Jobs", icon: Briefcase },
  { href: "/admin/applications", label: "Applications", icon: Users },
  { href: "/admin/consultations", label: "Consultations", icon: CalendarClock },
  { href: "/admin/contact", label: "Contact", icon: Inbox },
  { href: "/admin/settings", label: "Settings", icon: Settings },
] as const;

const NavItem = memo(({ 
  item, 
  isActive 
}: { 
  item: typeof NAV_ITEMS[number]; 
  isActive: boolean;
}) => {
  const Icon = item.icon;
  
  return (
    <Link
      href={item.href}
      className={`group relative flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-linear-to-r from-[#DABE9B]/10 to-[#DABE9B]/5 text-[#DABE9B] shadow-sm"
          : "text-[#d6d6e7] hover:bg-white/5 hover:text-[#DABE9B] hover:translate-x-0.5"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-[#DABE9B] shadow-lg shadow-[#DABE9B]/30" />
      )}
      <div className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
        isActive 
          ? "bg-linear-to-br from-[#DABE9B] to-[#DABE9B]/70 text-[#00003C] shadow-md shadow-[#DABE9B]/30" 
          : "bg-white/5 text-[#d6d6e7] group-hover:bg-[#DABE9B]/10 group-hover:text-[#DABE9B]"
      }`}>
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      </div>
      <span className="flex-1">{item.label}</span>
      {isActive && (
        <ChevronRight className="h-3.5 w-3.5 text-[#DABE9B]" />
      )}
    </Link>
  );
});

NavItem.displayName = "NavItem";

const MobileNavItem = memo(({ 
  item, 
  isActive 
}: { 
  item: typeof NAV_ITEMS[number]; 
  isActive: boolean;
}) => {
  const Icon = item.icon;
  
  return (
    <Link
      key={item.href}
      href={item.href}
      className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm transition-all duration-300 ${
        isActive
          ? "bg-linear-to-br from-[#DABE9B] to-[#DABE9B]/70 text-[#00003C] shadow-lg shadow-[#DABE9B]/40 scale-105"
          : "bg-white/5 text-[#d6d6e7] hover:bg-[#DABE9B]/10 hover:text-[#DABE9B] hover:scale-105"
      }`}
      title={item.label}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
      <span className="sr-only">{item.label}</span>
    </Link>
  );
});

MobileNavItem.displayName = "MobileNavItem";

type AdminShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

export function AdminShell({ title, description, children, action }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = useCallback(async () => {
    try {
      await logoutAdmin();
      toast.success("Logged out successfully", {
        icon: "👋",
        duration: 3000,
        style: {
          borderRadius: "12px",
          background: "#00003C",
          color: "#DABE9B",
          padding: "14px 20px",
          border: "1px solid #DABE9B30",
        },
      });
      router.replace("/admin");
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to log out"));
    }
  }, [router]);

  const navItems = useMemo(() => {
    return NAV_ITEMS.map((item) => ({
      ...item,
      isActive: pathname === item.href || pathname?.startsWith(item.href + "/"),
    }));
  }, [pathname]);

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50/80">
      {/* Desktop Sidebar - Dark Navy Theme */}
      <aside 
        className="fixed inset-y-0 left-0 hidden w-64 border-r lg:block"
        style={{
          borderColor: "#DABE9B30",
          background: "linear-gradient(180deg, #00003C 0%, #00003C 100%)",
        }}
        aria-label="Admin navigation"
      >
        <div className="px-3 py-4">
          <div className="mb-8 px-2">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl shadow-lg" style={{
                background: "linear-gradient(135deg, #DABE9B, #DABE9B/70)",
                boxShadow: "0 0 20px #DABE9B40",
              }}>
                <Image
                  src="/mainlogo/logo.png"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain brightness-0 invert"
                  alt="Revital Moves"
                />
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-white">
                  Admin Panel
                </h1>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#DABE9B" }}>Management</p>
              </div>
            </div>
          </div>

          <nav className="space-y-0.5 px-1" role="navigation">
            {navItems.map((item) => (
              <NavItem key={item.href} item={item} isActive={item.isActive} />
            ))}
          </nav>

          <div className="absolute bottom-4 left-3 right-3 space-y-2">
            <div className="rounded-xl p-3" style={{
              background: "linear-gradient(135deg, rgba(218, 190, 155, 0.08), rgba(218, 190, 155, 0.04))",
              border: "1px solid #DABE9B30",
            }}>
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg p-1.5" style={{ background: "rgba(218, 190, 155, 0.1)" }}>
                  <HelpCircle className="h-4 w-4" style={{ color: "#DABE9B" }} />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Need Help?</p>
                  <p className="text-[10px]" style={{ color: "#DABE9B" }}>Contact support</p>
                </div>
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-300 hover:translate-x-0.5"
              style={{
                color: "#DABE9B",
                background: "rgba(218, 190, 155, 0.05)",
              }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{
                background: "rgba(218, 190, 155, 0.1)",
                color: "#DABE9B"
              }}>
                <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content - Clean Light Theme */}
      <section className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-slate-200/60 bg-white/80 px-4 py-2.5 backdrop-blur-xl supports-backdrop-filter:bg-white/70 md:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg p-1.5 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
              </button>
              
              <div>
                <h2 className="text-lg font-bold tracking-tight text-slate-900">
                  {title}
                </h2>
                {description && (
                  <p className="text-xs text-slate-500">{description}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Search */}
              <button className="hidden h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 sm:flex">
                <Search className="h-3.5 w-3.5" />
              </button>
              
              {/* Notifications */}
              <button className="relative hidden h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 sm:flex">
                <Bell className="h-3.5 w-3.5" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              </button>

              {/* Action Button */}
              {action}

              {/* Mobile Navigation - Dark Theme */}
              <nav 
                className="flex gap-1 lg:hidden" 
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <MobileNavItem key={item.href} item={item} isActive={item.isActive} />
                ))}
              </nav>
            </div>
          </div>

          {/* Mobile Menu - Dark Theme */}
          {isMobileMenuOpen && (
            <div className="mt-3 border-t border-[#DABE9B30] pt-3 lg:hidden" style={{ background: "#00003C" }}>
              <nav className="space-y-0.5">
                {navItems.map((item) => (
                  <NavItem key={item.href} item={item} isActive={item.isActive} />
                ))}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all"
                  style={{
                    color: "#DABE9B",
                    background: "rgba(218, 190, 155, 0.05)",
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{
                    background: "rgba(218, 190, 155, 0.1)",
                    color: "#DABE9B"
                  }}>
                    <LogOut className="h-4 w-4" />
                  </div>
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          )}
        </header>

        {/* Page Content */}
        <div className="px-4 py-4 md:px-6 md:py-5">
          <div className="rounded-xl bg-white/60 p-5 shadow-sm ring-1 ring-slate-200/50 backdrop-blur-sm transition-all hover:shadow-md md:p-6">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}

export const EmptyState = memo(({
  icon: Icon = MessageSquare,
  title,
  description,
  action,
}: {
  icon?: typeof MessageSquare;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) => {
  return (
    <div 
      className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200/60 bg-linear-to-b from-slate-50/50 to-white px-6 py-12 text-center transition-all hover:border-slate-300/60"
      role="status"
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-500/10 blur-2xl" />
        <div className="relative rounded-full bg-linear-to-br from-emerald-50 to-emerald-100/50 p-3.5 ring-1 ring-emerald-200/50">
          <Icon className="h-7 w-7 text-emerald-600" aria-hidden="true" />
        </div>
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-sm text-slate-500">{description}</p>
      )}
      {action && (
        <div className="mt-4">{action}</div>
      )}
    </div>
  );
});

EmptyState.displayName = "EmptyState";
