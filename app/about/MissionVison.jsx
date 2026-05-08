import React from "react";

const MissionVison = () => {
  return (
    <div className="max-w-7xl m-auto">
      <h2 className="pl-4 md:hidden text-2xl sm:text-4xl font-serif text-[#0F172A] ">
            Our Mission & Vision
          </h2>
      <div className="flex gap-5 sm:gap-12 mt-4 sm:mt-10  items-start  container mx-auto">
        {/* LEFT*/}        
        <div className="text-gray-600 text-justify sm:text-xl flex-2  space-y-4 px-4 sm:px-0">
          <p>
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout. A practice not without controversy, laying out pages
            with meaningless filler text can be very useful when the focus is
            meant to be on design, not content.
          </p>

          <p>
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
            Today it's seen all around the web; on templates, websites, and
            stock designs.
          </p>
        </div>

        {/* RIGHT */}
       
        <div className="flex gap-4  ">
          <div className="w-0.5 h-40 relative top-2 bg-[#000000] hidden md:flex"></div>

          <span className="hidden md:flex relative top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:rotate-40 h-6 sm:h-8 lg:h-10 w-auto"
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
          </span>
          <h2 className="hidden md:flex sm:text-3xl md:text-5xl font-serif text-[#0F172A] leading-snug">
            Our Mission <br />& Vision
          </h2>
         
        </div>
      </div>
    </div>
  );
};

export default MissionVison;
