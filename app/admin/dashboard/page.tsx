"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { 
  Briefcase, 
  Inbox, 
  MessageSquare, 
  RefreshCw, 
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import {
  getAdminJobs,
  getApiError,
  getApplications,
  getConsultations,
  getCurrentAdmin,
  getMessages,
} from "@/lib/api";
import { AdminShell, EmptyState } from "../_components/AdminShell";
import type { Application, Consultation, ContactMessage, Job } from "../_components/types";
import { formatDate } from "../_components/types";

type Activity = {
  id: string;
  title: string;
  detail: string;
  type: "job" | "application" | "consultation" | "message";
  date?: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  const loadDashboard = useCallback(async () => {
    setIsLoading(true);
    try {
      const [adminData, jobsData, applicationsData, consultationsData, messagesData] =
        await Promise.all([
          getCurrentAdmin(),
          getAdminJobs(),
          getApplications({ limit: 100 }),
          getConsultations(),
          getMessages(),
        ]);

      if (!adminData?.admin) {
        router.replace("/admin");
        return;
      }

      setJobs(jobsData);
      setApplications(applicationsData.data || []);
      setConsultations(consultationsData);
      setMessages(messagesData);
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to load dashboard"));
      router.replace("/admin");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadDashboard();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadDashboard]);

  const stats = [
    { 
      label: "Active Jobs", 
      value: jobs.filter((job) => job.status === "active").length, 
      icon: Briefcase,
    },
    { 
      label: "Applications", 
      value: applications.length, 
      icon: Users,
    },
    { 
      label: "Consultations", 
      value: consultations.length, 
      icon: Inbox,
    },
    { 
      label: "Messages", 
      value: messages.length, 
      icon: MessageSquare,
    },
  ];

  const activities = useMemo<Activity[]>(() => {
    const rows: Activity[] = [
      ...jobs.map((job) => ({
        id: `job-${job.id}`,
        type: "job" as const,
        title: job.title,
        detail: `${job.job_type} job is ${job.status}`,
        date: job.created_at,
      })),
      ...applications.map((application) => ({
        id: `application-${application.id}`,
        type: "application" as const,
        title: application.name,
        detail: `Applied for ${application.job_title || "a job"} - ${application.status}`,
        date: application.created_at,
      })),
      ...consultations.map((consultation) => ({
        id: `consultation-${consultation.id}`,
        type: "consultation" as const,
        title: consultation.name,
        detail: `${consultation.consultation_type} consultation - ${consultation.status}`,
        date: consultation.created_at,
      })),
      ...messages.map((message) => ({
        id: `message-${message.id}`,
        type: "message" as const,
        title: `${message.first_name} ${message.last_name || ""}`.trim(),
        detail: message.service || message.email,
        date: message.created_at,
      })),
    ];

    return rows
      .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
      .slice(0, 20);
  }, [applications, consultations, jobs, messages]);

  const getTypeIcon = (type: Activity["type"]) => {
    const icons = {
      job: Briefcase,
      application: Users,
      consultation: Clock,
      message: MessageSquare,
    };
    return icons[type];
  };

  return (
    <AdminShell title="Dashboard" description="A quick view of all admin activity.">
      {/* Refresh Button */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg p-2" style={{ 
            background: "rgba(218, 190, 155, 0.1)",
            border: "1px solid #DABE9B30"
          }}>
            <TrendingUp className="h-5 w-5" style={{ color: "#DABE9B" }} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700">Dashboard Overview</p>
            <p className="text-xs text-slate-500">Real-time metrics and activity</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => void loadDashboard()}
          className="group inline-flex h-9 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-all hover:shadow-sm"
          style={{
            borderColor: "#DABE9B30",
            color: "#DABE9B",
            background: "rgba(218, 190, 155, 0.05)",
          }}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 transition-transform duration-500 ${isLoading ? "animate-spin" : "group-hover:rotate-180"}`} />
          <span>{isLoading ? "Loading..." : "Refresh"}</span>
        </button>
      </div>

      {/* Stats Grid */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label} 
              className="group relative overflow-hidden rounded-xl border bg-white p-5 transition-all hover:shadow-md hover:scale-[1.02]"
              style={{ borderColor: "#DABE9B30" }}
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-10 transition-all group-hover:scale-150"
                style={{ background: "#DABE9B" }}
              />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                    {isLoading ? "..." : stat.value}
                  </p>
                </div>
                <div className="rounded-lg p-2.5" style={{
                  background: "rgba(218, 190, 155, 0.1)",
                  border: "1px solid #DABE9B30"
                }}>
                  <Icon className="h-5 w-5" style={{ color: "#DABE9B" }} />
                </div>
              </div>
              <div className="relative mt-3 flex items-center gap-1.5">
                <span className="text-xs font-medium" style={{ color: "#DABE9B" }}>
                  {isLoading ? "Loading..." : `${stat.value} total`}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Recent Activity */}
      <section className="mt-8 overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
        style={{ borderColor: "#DABE9B30" }}
      >
        <div className="flex items-center justify-between border-b px-5 py-4"
          style={{ borderColor: "#DABE9B30" }}
        >
          <div className="flex items-center gap-2">
            <Clock className="h-4.5 w-4.5" style={{ color: "#DABE9B" }} />
            <h3 className="font-semibold text-slate-900">Recent Activity</h3>
          </div>
          <span className="text-xs text-slate-500">
            Latest {activities.length} activities
          </span>
        </div>

        {activities.length === 0 ? (
          <div className="p-6">
            <EmptyState 
              title={isLoading ? "Loading activity..." : "No activity found"} 
              description={isLoading ? "Please wait while we load your data" : "Recent activities will appear here"}
            />
          </div>
        ) : (
          <div className="divide-y" style={{ borderColor: "#DABE9B30" }}>
            {activities.map((activity) => {
              const TypeIcon = getTypeIcon(activity.type);
              
              return (
                <div 
                  key={activity.id} 
                  className="group flex flex-col gap-2 px-5 py-3.5 transition-all hover:bg-slate-50/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="rounded-lg p-2" style={{
                      background: "rgba(218, 190, 155, 0.08)",
                      border: "1px solid #DABE9B30"
                    }}>
                      <TypeIcon className="h-4 w-4" style={{ color: "#DABE9B" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {activity.title}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {activity.detail}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:shrink-0">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        background: "rgba(218, 190, 155, 0.1)",
                        color: "#DABE9B",
                        border: "1px solid #DABE9B30"
                      }}
                    >
                      {activity.type}
                    </span>
                    <span className="text-xs text-slate-400">
                      {formatDate(activity.date)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Quick Actions */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-4 transition-all hover:shadow-md"
          style={{ borderColor: "#DABE9B30" }}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2" style={{
              background: "rgba(218, 190, 155, 0.08)",
              border: "1px solid #DABE9B30"
            }}>
              <CheckCircle className="h-4.5 w-4.5" style={{ color: "#DABE9B" }} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Quick Actions</p>
              <p className="text-xs text-slate-500">Manage your platform</p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400" />
          </div>
        </div>
        <div className="rounded-xl border bg-white p-4 transition-all hover:shadow-md"
          style={{ borderColor: "#DABE9B30" }}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2" style={{
              background: "rgba(218, 190, 155, 0.08)",
              border: "1px solid #DABE9B30"
            }}>
              <AlertCircle className="h-4.5 w-4.5" style={{ color: "#DABE9B" }} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">System Status</p>
              <p className="text-xs text-slate-500">All systems operational</p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400" />
          </div>
        </div>
        <div className="rounded-xl border bg-white p-4 transition-all hover:shadow-md"
          style={{ borderColor: "#DABE9B30" }}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2" style={{
              background: "rgba(218, 190, 155, 0.08)",
              border: "1px solid #DABE9B30"
            }}>
              <Users className="h-4.5 w-4.5" style={{ color: "#DABE9B" }} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Total Users</p>
              <p className="text-xs text-slate-500">Manage user accounts</p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400" />
          </div>
        </div>
      </section>
    </AdminShell>
  );
}