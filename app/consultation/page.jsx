"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { CalendarDays, Clock, Send } from "lucide-react";
import Navbar from "../../components/header/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { getApiError, submitConsultation } from "@/lib/api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company_name: "",
  consultation_type: "",
  preferred_date: "",
  preferred_time: "",
  message: "",
};

export default function ConsultationPage() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await submitConsultation(form);
      toast.success("Consultation request sent");
      setForm(initialForm);
    } catch (error) {
      toast.error(getApiError(error, "Unable to book consultation"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#f7f7f7] text-[#1a1a1a]">
        <section
          className="relative flex min-h-[72vh] items-center bg-cover bg-center px-6 pt-28 text-white md:px-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00003C 0%, rgba(0,0,60,0.88) 35%, rgba(0,0,60,0.15) 100%), url('/services/ms1.jpg')",
          }}
        >
          <div className="max-w-2xl pb-16">
            <p className="mb-3 text-sm uppercase tracking-widest text-[#DABE9B]">
              Consultation
            </p>
            <h1 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
              Plan your next move with a focused conversation.
            </h1>
            <div className="mb-6 h-0.5 w-24 bg-[#DABE9B]" />
            <p className="max-w-xl text-gray-200">
              Share your goals, timing, and property needs so our team can
              prepare the right guidance before we meet.
            </p>
          </div>
        </section>

        <section className="grid gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-16">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-[#DABE9B]">
              Schedule
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-[#00003C]">
              Book a consultation
            </h2>
            <p className="mb-8 leading-7 text-gray-600">
              Our team reviews each request and confirms the final appointment
              time by email or phone.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-[#DABE9B80] bg-white p-5">
                <CalendarDays className="mt-1 h-5 w-5 text-[#A69177]" />
                <div>
                  <h3 className="font-semibold text-[#00003C]">
                    Flexible planning
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Choose a preferred date and time that fits your availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-[#DABE9B80] bg-white p-5">
                <Clock className="mt-1 h-5 w-5 text-[#A69177]" />
                <div>
                  <h3 className="font-semibold text-[#00003C]">
                    Fast follow-up
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Submitted requests land in the admin dashboard immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-[#DABE9B80] bg-white p-6 shadow-md md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
              <input
                required
                type="text"
                placeholder="Company name"
                value={form.company_name}
                onChange={(event) => updateField("company_name", event.target.value)}
                className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
            </div>

            <select
              required
              value={form.consultation_type}
              onChange={(event) =>
                updateField("consultation_type", event.target.value)
              }
              className="mt-4 w-full rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 text-gray-500 outline-none"
            >
              <option value="">Consultation type</option>
              <option value="Moving Plan">Moving Plan</option>
              <option value="Rental Management">Rental Management</option>
              <option value="Property Care">Property Care</option>
              <option value="General Consultation">General Consultation</option>
            </select>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input
                required
                type="date"
                min={minDate}
                value={form.preferred_date}
                onChange={(event) =>
                  updateField("preferred_date", event.target.value)
                }
                className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
              <input
                required
                type="time"
                value={form.preferred_time}
                onChange={(event) =>
                  updateField("preferred_time", event.target.value)
                }
                className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />
            </div>

            <textarea
              required
              rows={6}
              placeholder="Tell us what you want to discuss"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="mt-4 w-full rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#00003C] py-3 font-medium text-white transition hover:bg-[#10105f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Submitting..." : "Submit Consultation"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
