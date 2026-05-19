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
            <h2 className="text-[#00003C] text-2xl md:text-4xl lg:text-5xl leading-[1.15] font-serif  mb-8">
              Let's turn your family's home into reliable income.
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#616161] text-lg text-justify sm:leading-10 max-w-4xl">
              A short consultation is all it takes to understand your goals,
              walk through the property, and outline a transparent management
              plan.
            </p>
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
              +1 774-287-6819
            </button>

            {/* CTA BUTTON */}
            <button className="py-3 px-5 min-w-30 rounded-[10px] bg-[#00003C] text-white text-sm sm:text-md font-semibold uppercase tracking-wide hover:opacity-90 transition-all duration-300">
              Book A Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}