"use client";

import { Phone } from "lucide-react";

export default function ReadyWhenYouAre() {
  return (
    <section className="w-full  sm:py-10 px-4 md:px-8 lg:px-5">
      <div
        className="max-w-300 mx-auto bg-[#DABE9B30] rounded-3xl border px-6 md:px-10 lg:px-14 py-5 sm:py-12 lg:py-14"
        style={{
          borderColor: "#DABE9B80",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* SMALL TITLE */}
            <p className="uppercase tracking-[1px] text-sm font-bold text-[#A69177] mb-5">
              Ready When You Are
            </p>

            {/* HEADING */}
            <h2 className="text-[#00003C] text-2xl md:text-3xl lg:text-4xl leading-[1.15] font-serif  mb-8">
              Let’s turn your property into reliable, stress-free income.
            </h2>

            {/* DESCRIPTION */}
            <ul className="space-y-4 text-gray-600 leading-7">
              <li>
                A short consultation is all it takes to understand your goals,
                evaluate your property, and outline a clear, transparent
                management plan tailored to your needs.
              </li>

              <li>
                At Revital Moves, we make it simple to move from uncertainty to
                confidence — with a structured approach to pricing, tenant
                placement, maintenance, and ongoing management.
              </li>

              <li>
                When you’re ready, we’re here to help you protect your property
                and unlock its full potential.
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-7 w-full lg:w-auto">
            {/* PHONE BUTTON */}
            <button
              className="py-2 px-5 min-w-30 rounded-[10px] border flex items-center justify-center gap-3 text-[#00003C] text-sm sm:text-md font-semibold transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: "#00003C",
              }}
            >
              <Phone size={17} strokeWidth={2.2} />
              (774)-287-6819
            </button>

            {/* CTA BUTTON */}
            <a href="/consultation">

            <button className="py-3 px-5 min-w-30 rounded-[10px] bg-[#00003C] text-white text-sm sm:text-md font-semibold uppercase tracking-wide hover:opacity-90 transition-all duration-300">
              Book A Consultation
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
