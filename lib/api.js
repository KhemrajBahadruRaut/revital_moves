import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export function getApiError(error, fallback = "Something went wrong") {
  return error?.response?.data?.message || error?.message || fallback;
}

export async function loginAdmin(email, password) {
  const response = await api.post("/auth/login.php", { email, password });
  return response.data;
}

export async function getCurrentAdmin() {
  const response = await api.get("/auth/me.php");
  return response.data;
}

export async function logoutAdmin() {
  const response = await api.post("/auth/logout.php");
  return response.data;
}

export async function changeAdminPassword(payload) {
  const response = await api.post("/auth/change_password.php", payload);
  return response.data;
}

export async function submitContactMessage(payload) {
  const response = await api.post("/contact/contact.php", payload);
  return response.data;
}

export async function submitConsultation(payload) {
  const response = await api.post(
    "/consultation/create_consultation.php",
    payload,
  );
  return response.data;
}

export async function getActiveJobs() {
  const response = await api.get("/jobs/get_all_active_jobs.php");
  return response.data.jobs || [];
}

export async function getAdminJobs() {
  const response = await api.get("/jobs/get_all_jobs.php");
  return response.data.jobs || [];
}

export async function saveJob(payload) {
  const endpoint = payload.id ? "/jobs/update_job.php" : "/jobs/add_job.php";
  const response = await api.post(endpoint, payload);
  return response.data;
}

export async function updateJobStatus(id, status) {
  const response = await api.post("/jobs/update_job_status.php", {
    id,
    status,
  });
  return response.data;
}

export async function deleteJob(id) {
  const response = await api.post("/jobs/delete_job.php", { id });
  return response.data;
}

export async function submitJobApplication(formData) {
  const response = await api.post("/job_application/submit.php", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function getApplications(params = {}) {
  const response = await api.get("/job_application/get_all_applications.php", {
    params,
  });
  return response.data;
}

export async function updateApplicationStatus(id, status) {
  const response = await api.post(
    "/job_application/update_application_status.php",
    {
      id,
      status,
    },
  );
  return response.data;
}

export async function deleteApplication(id) {
  const response = await api.post("/job_application/delete_application.php", {
    id,
  });
  return response.data;
}

export async function getConsultations() {
  const response = await api.get("/consultation/get_all_consultations.php");
  return response.data.data || [];
}

export async function updateConsultationStatus(id, status) {
  const response = await api.post(
    "/consultation/update_consultation_status.php",
    {
      id,
      status,
    },
  );
  return response.data;
}

export async function deleteConsultation(id) {
  const response = await api.post("/consultation/delete_consultation.php", {
    id,
  });
  return response.data;
}

export async function getMessages() {
  const response = await api.get("/contact/get_all_messages.php");
  return response.data.data || [];
}

export async function deleteMessage(id) {
  const response = await api.post("/contact/delete_message.php", { id });
  return response.data;
}
