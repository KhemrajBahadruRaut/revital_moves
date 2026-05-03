"use client";

import { useState } from "react";
import Navbar from "../../components/header/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ConsultationSection from "../../components/hero/ConsultationSection";

export default function page() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [1, 2, 3, 4];

  return (
    <>
    <Navbar/>
      <div className="w-full font-sans">
        {/* HERO */}
        <section className="relative h-[70vh] flex items-center">
          <img
            src="/moving-services/ms1.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#00003C]/20"></div>

          <div className="relative z-10 px-6 md:px-16 text-white max-w-2xl">
            <p className="text-sm tracking-widest text-[#DABE9B] uppercase mb-3">
              Revital Moves
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Non-emergency Moving <br /> for Seniors
            </h1>

            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="bg-[#DABE9B] text-[#00003C] px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
              BOOK A CONSULTATION
            </button>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-16 bg-[#f5f5f5]">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#DABE9B] mb-2">
              Transitional and Real Estate Management
            </p>

            <h2 className="text-3xl font-semibold leading-snug">
              Non-emergency <br /> Moving for <br /> Seniors
            </h2>
          </div>

          <div className="text-gray-600 space-y-4">
            <p>
              The purpose of lorem ipsum is to create a natural looking block of
              text that doesn't distract from the layout.
            </p>
            <p>
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on templates and layouts.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className="px-6 md:px-16 py-16 text-white"
          style={{
            background:
              "linear-gradient(to right, #00003C, #00003CCC, #00003C)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#DABE9B] mb-2">
                Transitions Assistance
              </p>

              <h2 className="text-3xl font-semibold">Moving Services</h2>
            </div>

            <p className="text-gray-300">
              Lorem ipsum is commonly used placeholder text in layouts and
              designs.
            </p>
          </div>

          {/* SERVICE GRID */}
          <div className="grid md:grid-cols-2 border border-white/10 rounded-xl overflow-hidden">
            {[
              "Personal Residences",
              "Medical Appointments",
              "Adult Day Care Facilities",
              "Extracurricular Activities",
            ].map((title, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 backdrop-blur-md bg-white/5"
              >
                <p className="text-[#DABE9B] text-lg mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-medium mb-2">{title}</h3>

                <p className="text-gray-300 text-sm mb-4">
                  The purpose of lorem ipsum is to create a natural looking
                  block of text.
                </p>

                <button className="text-[#DABE9B] text-sm">Contact us →</button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-16 py-16 bg-[#f5f5f5]">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                FAQs <span><span className="relative top-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:-rotate-40 h-6 sm:h-8 lg:h-10 w-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M12 4v16m-6-6l6 6l6-6"
                />
              </svg>
            </span>{" "}</span>
              </h2>
            </div>

            <div className="md:col-span-2 space-y-4">
              {faqs.map((_, i) => (
                <div key={i} className="border-b border-gray-300 pb-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-gray-700">
                      Lorem ipsum dolor sit amet, is this new add consectetur?
                    </span>
                    <span className="text-xl">
                      {openIndex === i ? "-" : "+"}
                    </span>
                  </button>

                  {openIndex === i && (
                    <p className="text-gray-500 mt-3 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
            <ConsultationSection />

    <Footer/>
    </>
  );
}
