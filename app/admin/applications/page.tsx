"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";
import {
  API_BASE_URL,
  deleteApplication,
  getApiError,
  getApplications,
  updateApplicationStatus,
} from "@/lib/api";
import { AdminShell, EmptyState } from "../_components/AdminShell";
import type { Application, ApplicationStatus } from "../_components/types";
import { applicationStatuses, formatDate } from "../_components/types";

function downloadUrl(path: string, id: number) {
  return `${API_BASE_URL}/${path}?id=${id}`;
}

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadApplications = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getApplications({ limit: 100 });
      setApplications(response.data || []);
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to load applications"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadApplications();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadApplications]);

  const handleStatus = async (id: number, status: ApplicationStatus) => {
    try {
      await updateApplicationStatus(id, status);
      toast.success("Application status updated");
      await loadApplications();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to update application"));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this application?")) return;
    try {
      await deleteApplication(id);
      toast.success("Application deleted");
      await loadApplications();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to delete application"));
    }
  };

  return (
    <AdminShell title="Applications" description="Review applicants and move them through hiring statuses.">
      <div className="rounded-md border border-zinc-200 bg-white">
        {applications.length === 0 ? (
          <div className="p-4">
            <EmptyState title={isLoading ? "Loading applications..." : "No applications found"} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-225 text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
                <tr>
                  <th className="px-4 py-3">Applicant</th>
                  <th className="px-4 py-3">Job</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Submitted</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Files</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td className="px-4 py-3">
                      <p className="font-medium">{application.name}</p>
                      <p className="text-zinc-500">{application.email}</p>
                    </td>
                    <td className="px-4 py-3">{application.job_title || "Not available"}</td>
                    <td className="px-4 py-3">{application.phone}</td>
                    <td className="px-4 py-3">{formatDate(application.created_at)}</td>
                    <td className="px-4 py-3">
                      <select className="h-10 rounded-md border border-zinc-300 px-3" value={application.status} onChange={(event) => void handleStatus(application.id, event.target.value as ApplicationStatus)}>
                        {applicationStatuses.map((status) => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <a className="rounded-md border border-zinc-200 px-3 py-2 text-xs font-medium hover:bg-zinc-100" href={downloadUrl("job_application/download_resume.php", application.id)} target="_blank" rel="noreferrer">Resume</a>
                        {application.cover_letter ? (
                          <a className="rounded-md border border-zinc-200 px-3 py-2 text-xs font-medium hover:bg-zinc-100" href={downloadUrl("job_application/download_cover_letter.php", application.id)} target="_blank" rel="noreferrer">Cover</a>
                        ) : null}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button type="button" onClick={() => void handleDelete(application.id)} className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-red-600 hover:bg-red-50" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
