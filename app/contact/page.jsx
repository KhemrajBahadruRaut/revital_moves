"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import Navbar from "../../components/header/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { getApiError, submitContactMessage } from "@/lib/api";
import { siteConfig } from "@/lib/seo";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  terms_accepted: false,
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      await submitContactMessage(form);
      toast.success("Message sent successfully");
      setForm(initialForm);
    } catch (error) {
      toast.error(getApiError(error, "Unable to send message"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full font-sans text-[#1a1a1a]">
        <section
          className="w-full bg-cover bg-center bg-no-repeat px-6 py-20 pt-35 text-white md:px-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00003C 0%, rgba(0,0,60,0.9) 25%, transparent 70%), url('/contact/c1.jpg')",
          }}
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-[#DABE9B]">
            Get in Touch
          </p>

          <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
            We are Here to Help
          </h1>

          <div className="mb-6 h-0.5 w-20 bg-[#DABE9B]" />

          <p className="max-w-xl text-gray-200">
            Whether you are planning a move, exploring rental management, or
            just have a question, our team is ready to guide you with care and
            expertise.
          </p>
        </section>

        <section className="grid gap-10 bg-[#f7f7f7] px-6 py-16 md:grid-cols-2 md:px-16">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-[#DABE9B]">
              Contact Information
            </p>

            <h2 className="mb-2 text-2xl font-semibold">
              Reach Out to Our Team
            </h2>

            <div className="mb-4 h-0.5 w-16 bg-[#DABE9B]" />

            <p className="mb-6 text-gray-600">
              We typically respond within one business day. For urgent matters,
              please call us directly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border border-[#DABE9B80] p-4">
                <FiPhone className="text-xl text-[#DABE9B]" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-gray-600">(774)-287-6819</p>
                  <p className="text-xs text-gray-400">Mon - Fri, 9AM - 5PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border border-[#DABE9B80] p-4">
                <FiMail className="text-xl text-[#DABE9B]" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-600">
                    management@revitalmoves.com
                  </p>
                  <p className="text-xs text-gray-400">We will get back soon</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border border-[#DABE9B80] p-4">
                <FiMapPin className="text-xl text-[#DABE9B]" />
                <div>
                  <p className="text-sm font-medium">Office</p>
                  <p className="text-sm text-gray-600">
                    270 Littleton Rd, Westford, MA, United States, 01852
                  </p>
                  <p className="text-xs text-gray-400">MA, USA</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border border-[#DABE9B80] p-4">
                <FiClock className="text-xl text-[#DABE9B]" />
                <div>
                  <p className="text-sm font-medium">Hours</p>
                  <p className="text-sm text-gray-600">
                    Mon-Fri, 8:30AM-6:00PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">Follow us</h3>

              <div className="flex gap-4">
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Revital Moves on Facebook"
                  title="Revital Moves on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-[#00003C] text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Revital Moves on Instagram"
                  title="Revital Moves on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-[#00003C] text-white"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md md:p-8">
            <h3 className="mb-2 text-xl font-semibold">Send Us a Message</h3>

            <p className="mb-6 text-sm text-gray-500">
              Fill in the details below and we will get back to you shortly.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Enter first name"
                  value={form.first_name}
                  onChange={(event) => updateField("first_name", event.target.value)}
                  className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter last name"
                  value={form.last_name}
                  onChange={(event) => updateField("last_name", event.target.value)}
                  className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  type="email"
                  placeholder="abc@example.com"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
                />
                <input
                  type="tel"
                  placeholder="+1 (999) 000 0000"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
                />
              </div>

              <select
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="w-full rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 text-gray-500 outline-none"
              >
                <option value="">Select a service</option>
                <option value="Moving Services">Moving Services</option>
                <option value="Rental Management">Rental Management</option>
                <option value="Property Care">Property Care</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>

              <textarea
                required
                rows={4}
                placeholder="Enter your message here"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="w-full rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] p-3 outline-none"
              />

              <label className="flex items-start gap-2 text-sm text-gray-500">
                <input
                  required
                  type="checkbox"
                  checked={form.terms_accepted}
                  onChange={(event) =>
                    updateField("terms_accepted", event.target.checked)
                  }
                  className="mt-1"
                />
                <span>
                  I agree to the{" "}
                  <Link href="/terms-of-service" className="underline hover:text-[#00003C]">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="underline hover:text-[#00003C]">
                    Privacy Policy
                  </Link>
                  . I consent to being contacted regarding my inquiry.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-[#DABE9B80] py-3 text-[#00003C] transition hover:bg-[#00003C] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiSend />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        <section className="grid items-center gap-10 px-6 pb-16 md:grid-cols-2 md:px-16">
          <div className="h-60 w-full overflow-hidden rounded-lg">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=270+Littleton+Rd,+Westford,+MA,+United+States,+01852&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-[#DABE9B]">
              Contact Information
            </p>

            <h3 className="mb-3 text-2xl font-semibold">Visit Our Office</h3>

            <div className="mb-4 flex items-center gap-2 text-gray-600">
              <FiMapPin className="text-[#00003C]" />
              <span>270 Littleton Rd, Westford</span>
            </div>

            <p className="mb-6 text-gray-500">MA, United States 01852</p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=270+Littleton+Rd,+Westford,+MA,+United+States,+01852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-[#00003C] px-6 py-2 text-[#00003C] transition hover:bg-[#00003C] hover:text-white"
            >
              Get Directions
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
