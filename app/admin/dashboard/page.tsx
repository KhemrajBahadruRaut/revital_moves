"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Briefcase, Inbox, MessageSquare, RefreshCw, Users } from "lucide-react";
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
    { label: "Active jobs", value: jobs.filter((job) => job.status === "active").length, icon: Briefcase },
    { label: "Applications", value: applications.length, icon: Users },
    { label: "Consultations", value: consultations.length, icon: Inbox },
    { label: "Messages", value: messages.length, icon: MessageSquare },
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

  return (
    <AdminShell title="Dashboard" description="A quick view of all admin activity.">
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={() => void loadDashboard()}
          className="inline-flex h-10 items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-md border border-zinc-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-600">{stat.label}</p>
                <Icon className="h-4 w-4 text-emerald-700" />
              </div>
              <p className="mt-3 text-3xl font-semibold">{isLoading ? "..." : stat.value}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-6 rounded-md border border-zinc-200 bg-white">
        <div className="border-b border-zinc-200 px-4 py-3">
          <h3 className="font-semibold">Recent activity</h3>
        </div>

        {activities.length === 0 ? (
          <div className="p-4">
            <EmptyState title={isLoading ? "Loading activity..." : "No activity found"} />
          </div>
        ) : (
          <div className="divide-y divide-zinc-100">
            {activities.map((activity) => (
              <div key={activity.id} className="grid gap-2 px-4 py-3 sm:grid-cols-[140px_1fr_140px]">
                <span className="text-xs font-semibold uppercase text-emerald-700">{activity.type}</span>
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-zinc-600">{activity.detail}</p>
                </div>
                <span className="text-sm text-zinc-500 sm:text-right">{formatDate(activity.date)}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </AdminShell>
  );
}
