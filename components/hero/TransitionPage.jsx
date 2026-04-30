import React from "react";

const TransitionPage = () => {
  return (
    <>
    <div className="">

      <div className="bg-white px-6 md:px-16 py-16 font-serif  flex justify-center mx-auto ">
        <div className="grid md:grid-cols-2 gap-12 items-start ">
          {/* LEFT */}
          <div className="">
            <p className="text-xs tracking-[2px] text-gray-500 mb-3 ">
              TRANSITIONAL AND REAL ESTATE MANAGEMENT
            </p>

            <h1 className="text-3xl md:text-4xl leading-tight text-[#0B1C3D] mb-6">
              Comprehensive Support <br />
              for <span className="text-[#DABE9B]">Every Transition</span>
            </h1>

            <p className="text-gray-600 text-sm text-justify leading-relaxed max-w-md mb-6 md:pt-20">
              We recognized a critical gap in the market: the need for a service
              that balances the deep empathy required for senior relocation with
              the cold, hard efficiency needed for property performance. Whether
              we are packing family heirlooms or optimizing a rental portfolio.
            </p>

            <a
              href="#"
              className="text-[#DABE9B] text-sm font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>

          {/* RIGHT */}
          <div className="">
            <p className="text-gray-600 text-sm text-justify leading-relaxed max-w-md mb-6">
              We recognized a critical gap in the market: the need for a service
              that balances the deep empathy required for senior relocation with
              the cold, hard efficiency needed for property performance. Whether
              we are packing family heirlooms or optimizing a rental portfolio,
              we apply the same curated attention to detail.
            </p>

            {/* Divider */}
            <div className="h-px bg-[#DABE9B] w-full mb-6"></div>

            {/* Stats */}
            <div className="flex gap-16 mb-10 justify-evenly">
              <div>
                <h2 className="text-2xl text-[#0B1C3D]">98%</h2>
                <p className="text-xs tracking-wide text-gray-500">
                  CLIENT SATISFACTION
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-[#0B1C3D]">10+</h2>
                <p className="text-xs tracking-wide text-gray-500">
                  YEARS OF EXPERIENCE
                </p>
              </div>
            </div>

            <p className="text-xs tracking-[2px] text-gray-500 mb-3">
              TRANSITIONAL AND REAL ESTATE MANAGEMENT
            </p>

            <h2 className="text-3xl md:text-4xl leading-snug text-[#0B1C3D]">
              The Dual Curator: <br />
              Where care meets{" "}
              <span className="text-[#DABE9B]">precision.</span>
            </h2>
          </div>
        </div>
      </div>
      <section className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 w-full">
        {/* LEFT CARD */}
        <div
          className="relative w-full md:w-1/3 min-h-105 md:h-130 bg-cover bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('/transition/i1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#DABE9B80]" />

          <div className="relative z-10 max-w-md px-6 md:px-10">
            <p className="text-xs tracking-widest uppercase text-slate-700 mb-4">
              Senior Transition Specialists
            </p>

            <h2 className="text-2xl md:text-4xl font-serif text-[#0B1B3A] leading-tight mb-4">
              Non-emergency Moving for Seniors
            </h2>

            <p className="text-sm text-slate-700 mb-6">
              Dignified relocation services designed for comfort, clarity, and
              care during life’s biggest transitions.
            </p>

            <button className="bg-[#0B1B3A] text-white text-xs px-5 py-2 rounded flex items-center gap-2">
              LEARN MORE <span>→</span>
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="relative w-full md:w-1/3 min-h-105 md:h-130 bg-cover bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('/transition/i2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1E2A78]/60" />

          <div className="relative z-10 max-w-md px-6 md:px-10 text-white">
            <p className="text-xs tracking-widest uppercase mb-4 opacity-80">
              Professional Real Estate Management
            </p>

            <h2 className="text-2xl md:text-4xl font-serif leading-tight mb-4">
              Expert Real Estate Rental Management
            </h2>

            <p className="text-sm mb-6 opacity-90">
              Dignified relocation services designed for comfort, clarity, and
              care during life’s biggest transitions.
            </p>

            <button className="bg-white text-[#1E2A78] text-xs px-5 py-2 rounded flex items-center gap-2">
              LEARN MORE <span>→</span>
            </button>
          </div>
        </div>
      </section>
          </div>

    </>
  );
};

export default TransitionPage;
