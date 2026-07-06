"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  Briefcase,
  CalendarClock,
  Home,
  Inbox,
  Lock,
  LogOut,
  MessageSquare,
  Users,
} from "lucide-react";
import { getApiError, logoutAdmin } from "@/lib/api";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Home },
  { href: "/admin/jobs", label: "Jobs", icon: Briefcase },
  { href: "/admin/applications", label: "Applications", icon: Users },
  { href: "/admin/consultations", label: "Consultations", icon: CalendarClock },
  { href: "/admin/contact", label: "Contact", icon: Inbox },
  { href: "/admin/settings", label: "Settings", icon: Lock },
];

type AdminShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function AdminShell({ title, description, children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      toast.success("Logged out");
      router.replace("/admin");
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to log out"));
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-zinc-200 bg-white px-4 py-5 lg:block">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Revital Moves
          </p>
          <h1 className="mt-1 text-xl font-semibold">Admin</h1>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 px-4 py-4 backdrop-blur sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-1 text-sm text-zinc-600">{description}</p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              <div className="flex gap-1 lg:hidden">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border text-sm ${
                        isActive
                          ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                          : "border-zinc-200 bg-white text-zinc-600"
                      }`}
                      title={item.label}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">{children}</div>
      </section>
    </main>
  );
}

export function EmptyState({
  icon: Icon = MessageSquare,
  title,
}: {
  icon?: typeof MessageSquare;
  title: string;
}) {
  return (
    <div className="rounded-md border border-dashed border-zinc-300 bg-white px-4 py-10 text-center text-sm text-zinc-500">
      <Icon className="mx-auto mb-3 h-5 w-5 text-zinc-400" />
      {title}
    </div>
  );
}
