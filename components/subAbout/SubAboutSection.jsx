export default function SubAboutSection() {
  return (
    <section className="w-full px-6 md:px-16 py-5 am:py-20   ">
      {/* WHY CHOOSE US */}
      <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#0F172A] mb-5 sm:mb-16">
        Why Choose Us
      </h2>

      <div className="space-y-8 ">
        {[
          {
            id: "01",
            title: "Compassionate Service",
            desc: "We treat every move with care and respect, especially when assisting seniors. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          },
          {
            id: "02",
            title: "Professional Management",
            desc: "Efficient, transparent, and results-driven property services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: "03",
            title: "All-in-One Convenience",
            desc: "Moving and rental management under one trusted company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua.",
          },
          {
            id: "04",
            title: "Reliable & Trustworthy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ].map((item, index) => (
          <div key={index}>
            <div
              className="
      grid 
      grid-cols-1 
      sm:grid-cols-[80px_1fr_1fr] 
      lg:grid-cols-[100px_400px_1fr] 
      gap-4 sm:gap-6 lg:gap-10
      items-center
    "
            >
              {/* NUMBER */}
              <div className="text-[#0F172A] text-4xl sm:text-5xl lg:text-5xl font-serif ">
                {item.id}
              </div>

              {/* TITLE */}
              <div className="font-semibold text-lg sm:text-xl lg:text-2xl text-[#0F172A] flex items-end ">
                {item.title}
              </div>

              {/* DESCRIPTION */}
              <div className="text-gray-700 text-base sm:text-md lg:text-lg leading-relaxed text-justify">
                {item.desc}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#DABE9B] mt-6"></div>
          </div>
        ))}
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-[auto_1fr] gap-5 sm:gap-12 mt-10 sm:mt-20 items-start  container mx-auto">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <h2 className="hidden md:flex sm:text-3xl md:text-5xl font-serif text-[#0F172A] leading-snug">
            Our <br /> Mission & <br /> Vision
          </h2>
          <h2 className="pl-6 md:hidden text-2xl sm:text-4xl font-serif text-[#0F172A] leading-snug">
            Our Mission & Vision
          </h2>
          <span className="relative top-1">
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
          </span>{" "}
        </div>

        {/* RIGHT */}
        <div className="flex gap-6">
          {/* Vertical Line */}
          <div className="w-0.5 bg-[#DABE9B]"></div>

          {/* Text */}
          <div className="text-gray-600 text-justify sm:text-2xl leading-relaxed space-y-4">
            <p>
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without controversy, laying out pages
              with meaningless filler text can be very useful when the focus is
              meant to be on design, not content.
            </p>

            <p>
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software. Today it's seen all around the web; on templates,
              websites, and stock designs.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-10 sm:mt-24">
        <p className="text-xs tracking-widest text-gray-400 mb-4">
          TRANSITIONAL AND REAL ESTATE MANAGEMENT
        </p>

        <h3 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-4">
          Lorem ipsum dolor sit amet
        </h3>

        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="border border-[#0F172A] px-6 py-2 text-sm text-[#0F172A]">
            GET HELP MOVING
          </button>

          <button className="bg-[#0F172A] text-white px-6 py-2 text-sm">
            MANAGE YOUR PROPERTY
          </button>
        </div>
      </div>
    </section>
  );
}
