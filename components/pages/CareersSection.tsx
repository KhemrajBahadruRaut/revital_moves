"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiArrowRight,
  FiHeart,
  FiImage,
  FiLink,
  FiShield,
  FiUpload,
  FiX,
} from "react-icons/fi";
import Navbar from "../header/navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import ReadyWhenYouAre from "../hero/ReadyWhenYouAre.jsx";
import {
  getActiveJobs,
  getApiError,
  submitJobApplication,
} from "@/lib/api";

type Job = {
  id: number;
  title: string;
  job_type: string;
  description: string;
  responsibilities: { responsibility: string }[];
};

type ApplicationForm = {
  name: string;
  email: string;
  phone: string;
  resume_file: File | null;
  cover_letter: File | null;
};

const initialApplicationForm: ApplicationForm = {
  name: "",
  email: "",
  phone: "",
  resume_file: null,
  cover_letter: null,
};

export default function CareersSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applicationForm, setApplicationForm] = useState<ApplicationForm>(
    initialApplicationForm,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    {
      icon: <FiHeart />,
      title: "Purposeful Work",
      desc: "Help property owners protect and improve their homes.",
    },
    {
      icon: <FiLink />,
      title: "Close-Knit Team",
      desc: "Small, supportive, accountable team culture.",
    },
    {
      icon: <FiImage />,
      title: "Real Growth",
      desc: "Opportunities to grow with the company across Massachusetts.",
    },
    {
      icon: <FiShield />,
      title: "Full Benefits",
      desc: "Competitive compensation, health coverage, retirement options, and paid time off.",
    },
  ];

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setJobs(await getActiveJobs());
      } catch (error) {
        toast.error(getApiError(error, "Unable to load jobs"));
      } finally {
        setIsLoadingJobs(false);
      }
    };

    void loadJobs();
  }, []);

  const updateApplicationField = <K extends keyof ApplicationForm>(
    field: K,
    value: ApplicationForm[K],
  ) => {
    setApplicationForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const openApplication = (job: Job) => {
    setSelectedJob(job);
    setApplicationForm(initialApplicationForm);
  };

  const closeApplication = () => {
    setSelectedJob(null);
    setApplicationForm(initialApplicationForm);
  };

  const handleApplicationSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!selectedJob || !applicationForm.resume_file) {
      toast.error("Resume file is required");
      return;
    }

    const formData = new FormData();
    formData.append("job_id", String(selectedJob.id));
    formData.append("name", applicationForm.name);
    formData.append("email", applicationForm.email);
    formData.append("phone", applicationForm.phone);
    formData.append("resume_file", applicationForm.resume_file);

    if (applicationForm.cover_letter) {
      formData.append("cover_letter", applicationForm.cover_letter);
    }

    setIsSubmitting(true);
    try {
      await submitJobApplication(formData);
      toast.success("Application submitted successfully");
      closeApplication();
    } catch (error) {
      toast.error(getApiError(error, "Unable to submit application"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative flex h-screen items-center border pt-30 sm:h-[70vh]">
        <img
          src="/services/s2.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#00003C]/20" />

        <div className="relative z-10 max-w-2xl px-6 text-white md:px-16">
          <p className="mb-3 text-sm uppercase tracking-widest text-[#DABE9B]">
            Career
          </p>

          <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
            Build a career that genuinely helps people.
          </h1>
          <div className="w-40 border-b-2 border-[#DABE9B]" />

          <p className="mb-6 pt-5 text-gray-300">
            We are growing thoughtfully, and we hire for character first. If you
            care about doing right by families, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F8F2EB] px-6 py-14 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#A69177]">
              Why Work Here
            </p>

            <h2 className="mx-auto max-w-3xl text-2xl font-semibold leading-tight text-[#00003C] sm:text-3xl md:text-4xl">
              A workplace built on the same values as our service.
            </h2>
          </div>

          <div className="mb-28 grid gap-6 md:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#DABE9B] p-7"
                style={{ backgroundColor: "#DABE9B80" }}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg border border-[#DABE9B] bg-[#F8F2EB] text-2xl text-[#A69177]">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#00003C]">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-7 text-[#46464F]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#A69177]">
              Open Roles
            </p>

            <h2 className="text-2xl font-semibold text-[#00003C] sm:text-3xl md:text-4xl">
              Currently Hiring
            </h2>
          </div>

          <div className="m-auto max-w-5xl space-y-7">
            {isLoadingJobs ? (
              <div className="border-b border-[#DABE9B] pb-10 text-center text-[#46464F]">
                Loading open roles...
              </div>
            ) : jobs.length === 0 ? (
              <div className="border-b border-[#DABE9B] pb-10 text-center text-[#46464F]">
                No open roles are available right now.
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col gap-8 border-b border-[#DABE9B] pb-10 md:flex-row md:items-start md:justify-between"
                >
                  <div className="max-w-3xl">
                    <h3 className="mb-3 text-2xl font-semibold text-[#00003C]">
                      {job.title}
                    </h3>

                    <p className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-[#A69177]">
                      {job.job_type}
                    </p>

                    <p className="mb-6 leading-7 text-[#46464F]">
                      {job.description}
                    </p>

                    {job.responsibilities.length ? (
                      <div>
                        <h4 className="mb-4 font-semibold text-[#00003C]">
                          Key Responsibilities:
                        </h4>

                        <ul className="space-y-3">
                          {job.responsibilities.map((item, index) => (
                            <li
                              key={`${job.id}-${index}`}
                              className="flex items-start gap-3 leading-7 text-[#46464F]"
                            >
                              <span className="mt-1 text-[#A69177]">-</span>
                              <span>{item.responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => openApplication(job)}
                    className="flex h-fit w-fit items-center gap-3 rounded-lg bg-[#A69177] px-8 py-4 text-white transition hover:opacity-90"
                  >
                    Join Our Team
                    <FiArrowRight />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {selectedJob ? (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/50 px-4 py-8">
          <form
            onSubmit={handleApplicationSubmit}
            className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#A69177]">
                  Application
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#00003C]">
                  {selectedJob.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeApplication}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-[#00003C]"
              >
                <FiX />
              </button>
            </div>

            <div className="space-y-4">
              <input
                required
                type="text"
                placeholder="Full name"
                value={applicationForm.name}
                onChange={(event) =>
                  updateApplicationField("name", event.target.value)
                }
                className="w-full rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                value={applicationForm.email}
                onChange={(event) =>
                  updateApplicationField("email", event.target.value)
                }
                className="w-full rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                value={applicationForm.phone}
                onChange={(event) =>
                  updateApplicationField("phone", event.target.value)
                }
                className="w-full rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />

              <label className="block rounded-md border border-dashed border-[#DABE9B] bg-[#F8F2EB] p-4 text-sm text-[#46464F]">
                <span className="mb-2 flex items-center gap-2 font-medium text-[#00003C]">
                  <FiUpload />
                  Resume
                </span>
                <input
                  required
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) =>
                    updateApplicationField(
                      "resume_file",
                      event.target.files?.[0] || null,
                    )
                  }
                />
              </label>

              <label className="block rounded-md border border-dashed border-[#DABE9B] bg-[#F8F2EB] p-4 text-sm text-[#46464F]">
                <span className="mb-2 flex items-center gap-2 font-medium text-[#00003C]">
                  <FiUpload />
                  Cover Letter
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) =>
                    updateApplicationField(
                      "cover_letter",
                      event.target.files?.[0] || null,
                    )
                  }
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-[#00003C] px-8 py-4 text-white transition hover:bg-[#10105f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
              <FiArrowRight />
            </button>
          </form>
        </div>
      ) : null}

      <ReadyWhenYouAre />
      <Footer />
    </>
  );
}
