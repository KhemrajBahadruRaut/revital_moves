import SubAboutSection from "../../components/subAbout/SubAboutSection";
import ConsultationSection from "../../components/hero/ConsultationSection.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/header/navbar/Navbar.jsx";

export default function AboutSection() {
  return (
    <>
      <Navbar />
      <section className="w-full px-6 md:px-16 py-10 bg-white  container mx-auto">
        {/* TOP SECTION */}
        <div className="grid xl:grid-cols-[auto_1fr] xl:gap-18 gap-5 items-start">
          {/* LEFT TEXT */}
          <div className="">
            <p className="text-sm tracking-widest text-gray-500 mb-4">
              REVITAL MOVES
            </p>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif leading-tight text-[#0F172A]">
              Care in Every <span className="text-[#DABE9B]">Move</span>.
              <br />
              Confidence in Every{" "}
              <span className="text-[#DABE9B]">Property</span>.
            </h1>
          </div>

          {/* RIGHT TEXT */}
          <div className=" xl:pt-25">
            <p className="text-gray-600 leading-relaxed sm:text-lg text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* IMAGES */}
        <div className="flex gap-14 mt-12 max-sm:flex-wrap">
          <div className="">
            <img
              src="/about/a1.jpg"
              alt="moving"
              className=" w-full sm:h-100 lg:h-150 object-cover rounded-xl"
            />
          </div>
          <div className="">
            <img
              src="/about/a2.jpg"
              alt="delivery"
              className="rounded-xl w-full sm:h-100 lg:h-150 object-cover"
            />
          </div>
        </div>

        {/* OUR STORY */}
        <div className="grid md:grid-cols-[auto_1fr] gap-3 sm:gap-10 mt-16 items-start">
          {/* LEFT */}
          <div className="flex items-center gap-4 ">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#0F172A] whitespace-nowrap">
              Our Story
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

          {/* RIGHT CONTENT */}
          <div className="flex gap-6">
            {/* VERTICAL LINE */}
            <div className="w-2 bg-[#DABE9B] hidden sm:flex"></div>

            {/* TEXT */}
            <div className="text-md sm:text-xl text-justify leading-relaxed space-y-4 ">
              <p>
                At our core, we are dedicated to making life’s transitions
                easier. Whether it’s helping seniors move into a new chapter of
                their lives or managing rental properties with professionalism,
                we provide services built on trust, care, and reliability.
              </p>

              <p>
                We understand that moving especially for seniors can be
                emotional and overwhelming. That’s why our team approaches every
                move with patience, respect, and attention to detail. From
                careful packing to safe transportation and thoughtful downsizing
                support, we ensure every step is handled with compassion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SubAboutSection />
      <ConsultationSection />
      <Footer />
    </>
  );
}
