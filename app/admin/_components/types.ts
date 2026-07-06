export type JobStatus = "active" | "inactive";

export type Responsibility = {
  id?: number;
  responsibility: string;
};

export type Job = {
  id: number;
  title: string;
  job_type: string;
  description: string;
  status: JobStatus;
  created_at?: string;
  responsibilities: Responsibility[];
};

export type JobForm = {
  id: number;
  title: string;
  job_type: string;
  description: string;
  status: JobStatus;
  responsibilities: string;
};

export type ApplicationStatus = "new" | "reviewed" | "shortlisted" | "rejected" | "hired";

export type Application = {
  id: number;
  job_id: number;
  job_title?: string;
  job_type?: string;
  name: string;
  email: string;
  phone: string;
  resume_file: string;
  cover_letter?: string | null;
  status: ApplicationStatus;
  created_at?: string;
};

export type ConsultationStatus = "pending" | "confirmed" | "completed" | "cancelled";

export type Consultation = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  consultation_type: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
  status: ConsultationStatus;
  created_at?: string;
};

export type ContactMessage = {
  id: number;
  first_name: string;
  last_name?: string | null;
  email: string;
  phone?: string | null;
  service?: string | null;
  message: string;
  created_at?: string;
};

export const applicationStatuses: ApplicationStatus[] = [
  "new",
  "reviewed",
  "shortlisted",
  "rejected",
  "hired",
];

export const consultationStatuses: ConsultationStatus[] = [
  "pending",
  "confirmed",
  "completed",
  "cancelled",
];

export const emptyJobForm: JobForm = {
  id: 0,
  title: "",
  job_type: "",
  description: "",
  status: "active",
  responsibilities: "",
};

export function formatDate(value?: string) {
  if (!value) return "Not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
