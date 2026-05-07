import SubAboutSection from "../../components/subAbout/SubAboutSection";
import ConsultationSection from "../../components/hero/ConsultationSection.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/header/navbar/Navbar.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import MissionVison from "./MissionVison.jsx";

export default function AboutSection() {
  return (
    <>
      <Navbar />
      <section className="w-full px-6 md:px-16 py-10 pt-35 bg-white  container mx-auto">
        {/* TOP SECTION */}
        <div className="grid xl:grid-cols-[auto_1fr] xl:gap-18 gap-5 items-start">
          {/* LEFT TEXT */}
          <div className="">
            <p className="text-sm tracking-widest font-bold text-gray-500 mb-4">
              ABOUT REVITAL MOVES
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
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-5 mt-12 ">
          <div className="">
            <img
              src="/about/a3.jpg"
              alt="moving"
              className=" w-full  object-cover h-full rounded-xl"
            />
          </div>
          <div className="">
            <img
              src="/about/a4.jpg"
              alt="delivery"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/about/a5.jpg"
              alt="delivery"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>

        {/* OUR STORY */}
        <div className="grid md:grid-cols-[auto_1fr] gap-3 sm:gap-10 mt-16 items-start">
          {/* LEFT */}
          <div className="">
            <div className="flex items-center gap-4 px-1 py-2 text-[#DABE9B]">Our Story</div>
            <div className=" flex ">
              <div className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#0F172A] max-w-70">
                Built around families in transition
              </div>
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
      <WhyChooseUs/>
      <MissionVison/>
      <SubAboutSection />
      <ConsultationSection />
      <Footer />
    </>
  );
}
