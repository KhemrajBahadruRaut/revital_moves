"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Edit, Plus, Save, Trash2 } from "lucide-react";
import { deleteJob, getAdminJobs, getApiError, saveJob, updateJobStatus } from "@/lib/api";
import { AdminShell, EmptyState } from "../_components/AdminShell";
import type { Job, JobStatus } from "../_components/types";
import { emptyJobForm, formatDate } from "../_components/types";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobForm, setJobForm] = useState(emptyJobForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const loadJobs = useCallback(async () => {
    setIsLoading(true);
    try {
      setJobs(await getAdminJobs());
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to load jobs"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadJobs();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadJobs]);

  const handleSave = async () => {
    const responsibilities = jobForm.responsibilities
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    setIsSaving(true);
    try {
      await saveJob({ ...jobForm, id: jobForm.id || undefined, responsibilities });
      toast.success(jobForm.id ? "Job updated" : "Job added");
      setJobForm(emptyJobForm);
      await loadJobs();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to save job"));
    } finally {
      setIsSaving(false);
    }
  };

  const startEdit = (job: Job) => {
    setJobForm({
      id: job.id,
      title: job.title,
      job_type: job.job_type,
      description: job.description,
      status: job.status,
      responsibilities: job.responsibilities.map((item) => item.responsibility).join("\n"),
    });
  };

  const handleStatus = async (id: number, status: JobStatus) => {
    try {
      await updateJobStatus(id, status);
      toast.success("Job status updated");
      await loadJobs();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to update job"));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this job?")) return;
    try {
      await deleteJob(id);
      toast.success("Job deleted");
      await loadJobs();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to delete job"));
    }
  };

  return (
    <AdminShell title="Jobs" description="Create, edit, publish, and deactivate job posts.">
      <section className="grid gap-6 xl:grid-cols-[420px_1fr]">
        <div className="rounded-md border border-zinc-200 bg-white p-4">
          <h3 className="mb-4 flex items-center gap-2 font-semibold">
            <Plus className="h-4 w-4" />
            {jobForm.id ? "Edit job" : "Add job"}
          </h3>

          <div className="space-y-3">
            <input className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" placeholder="Title" value={jobForm.title} onChange={(event) => setJobForm((current) => ({ ...current, title: event.target.value }))} />
            <input className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" placeholder="Job type" value={jobForm.job_type} onChange={(event) => setJobForm((current) => ({ ...current, job_type: event.target.value }))} />
            <select className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" value={jobForm.status} onChange={(event) => setJobForm((current) => ({ ...current, status: event.target.value as JobStatus }))}>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
            <textarea className="min-h-28 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" placeholder="Description" value={jobForm.description} onChange={(event) => setJobForm((current) => ({ ...current, description: event.target.value }))} />
            <textarea className="min-h-28 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" placeholder="Responsibilities, one per line" value={jobForm.responsibilities} onChange={(event) => setJobForm((current) => ({ ...current, responsibilities: event.target.value }))} />
          </div>

          <div className="mt-4 flex gap-2">
            <button type="button" onClick={handleSave} disabled={isSaving} className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-60">
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={() => setJobForm(emptyJobForm)} className="h-10 rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
              Clear
            </button>
          </div>
        </div>

        <div className="rounded-md border border-zinc-200 bg-white">
          {jobs.length === 0 ? (
            <div className="p-4">
              <EmptyState title={isLoading ? "Loading jobs..." : "No jobs found"} />
            </div>
          ) : (
            <div className="divide-y divide-zinc-100">
              {jobs.map((job) => (
                <div key={job.id} className="grid gap-3 p-4 xl:grid-cols-[1fr_140px_96px]">
                  <div>
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-sm text-zinc-600">{job.job_type} - {formatDate(job.created_at)}</p>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{job.description}</p>
                  </div>
                  <select className="h-10 rounded-md border border-zinc-300 px-3 text-sm" value={job.status} onChange={(event) => void handleStatus(job.id, event.target.value as JobStatus)}>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => startEdit(job)} className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 hover:bg-zinc-100" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={() => void handleDelete(job.id)} className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-red-600 hover:bg-red-50" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </AdminShell>
  );
}
