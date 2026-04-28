import React from "react";

const ConsultationSection = () => {
  return (
    <section className="w-full bg-[#F5F1EA] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-[#6B6B6B] uppercase mb-4">
            Transitional and Real Estate Management
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-[#0E0E2C] mb-6">
            Not sure what you need?
          </h2>

          <p className="text-[#6B6B6B] text-base leading-relaxed">
            Many of our clients use both services moving into a smaller home
            while turning their former residence into a high-yielding rental
            property.
          </p>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-col items-start md:items-end gap-4">
          {/* PHONE */}
          <button className="border w-65 border-[#0E0E2C] text-[#0E0E2C] px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#0E0E2C] hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
              />
            </svg>
            (888) 909 9999
          </button>

          {/* CTA BUTTON */}
          <button className="bg-[#0E0E2C] w-65 text-white px-8 py-3 rounded-md font-small tracking-wide hover:opacity-90 transition">
            BOOK A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
