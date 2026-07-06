"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";
import {
  deleteConsultation,
  getApiError,
  getConsultations,
  updateConsultationStatus,
} from "@/lib/api";
import { AdminShell, EmptyState } from "../_components/AdminShell";
import type { Consultation, ConsultationStatus } from "../_components/types";
import { consultationStatuses, formatDate } from "../_components/types";

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadConsultations = useCallback(async () => {
    setIsLoading(true);
    try {
      setConsultations(await getConsultations());
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to load consultations"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadConsultations();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadConsultations]);

  const handleStatus = async (id: number, status: ConsultationStatus) => {
    try {
      await updateConsultationStatus(id, status);
      toast.success("Consultation status updated");
      await loadConsultations();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to update consultation"));
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this consultation?")) return;
    try {
      await deleteConsultation(id);
      toast.success("Consultation deleted");
      await loadConsultations();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to delete consultation"));
    }
  };

  return (
    <AdminShell title="Consultations" description="Track consultation requests and scheduling statuses.">
      <div className="grid gap-4 xl:grid-cols-2">
        {consultations.length === 0 ? (
          <EmptyState title={isLoading ? "Loading consultations..." : "No consultations found"} />
        ) : (
          consultations.map((consultation) => (
            <article key={consultation.id} className="rounded-md border border-zinc-200 bg-white p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{consultation.name}</h3>
                  <p className="text-sm text-zinc-600">{consultation.email} - {consultation.phone}</p>
                  <p className="mt-2 text-sm text-zinc-600">{consultation.company_name}</p>
                </div>
                <div className="flex gap-2">
                  <select className="h-10 rounded-md border border-zinc-300 px-3 text-sm" value={consultation.status} onChange={(event) => void handleStatus(consultation.id, event.target.value as ConsultationStatus)}>
                    {consultationStatuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <button type="button" onClick={() => void handleDelete(consultation.id)} className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-red-600 hover:bg-red-50" title="Delete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-zinc-500">Type</dt>
                  <dd className="font-medium">{consultation.consultation_type}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Preferred</dt>
                  <dd className="font-medium">{consultation.preferred_date} {consultation.preferred_time}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Created</dt>
                  <dd className="font-medium">{formatDate(consultation.created_at)}</dd>
                </div>
              </dl>
              {consultation.message ? <p className="mt-4 text-sm text-zinc-700">{consultation.message}</p> : null}
            </article>
          ))
        )}
      </div>
    </AdminShell>
  );
}
