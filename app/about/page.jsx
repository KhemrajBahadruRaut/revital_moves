"use client";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/header/navbar/Navbar.jsx";
import ReadyWhenYouAre from "../../components/hero/ReadyWhenYouAre.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import MissionVison from "./MissionVison.jsx";
import Faq from "./Faq.jsx";

export default function AboutSection() {
  return (
    <>
      <Navbar />
      <section className="w-full px-6 md:px-16 py-10 pt-35 bg-white  container mx-auto">
        {/* TOP SECTION */}
        <div className="grid xl:grid-cols-[auto_1fr] xl:gap-12 gap-5 items-start">
          {/* LEFT TEXT */}
          <div className=" ">
            <p className="text-sm tracking-widest font-bold text-gray-500 mb-4">
              ABOUT REVITAL MOVES
            </p>

            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-serif leading-tight text-[#0F172A]">
              Care in Every <span className="text-[#DABE9B]">Move</span>.
              <br />
              Confidence in Every
              <span className="text-[#DABE9B]">Property</span>.
            </h1>
          </div>

          {/* RIGHT TEXT */}
          <div className="">
            <p className="text-gray-600 leading-relaxed sm:text-md text-justify xl:relative top-10">
              Revital Moves was founded on a simple belief: property management
              should feel like partnership, not paperwork.
              <br /> Based in Westford, we serve property owners across
              Massachusetts who expect professionalism, transparency, and
              dependable care for their most valuable assets.
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

            {/* OUR STORY + PHILOSOPHY + COMMITMENT */}
      <div className="mt-20 space-y-20">
        
        {/* OUR STORY */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[3px] text-sm text-[#DABE9B] mb-5">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-[#0F172A]">
              What Makes Us Different?
            </h2>
          </div>

          {/* RIGHT */}
          <div className="border-l-4 border-[#DABE9B] pl-6 sm:pl-10">
            <div className="space-y-6 text-gray-600 leading-8 text-md sm:text-lg">
              <p>
                Revital Moves was created to solve a gap in the industry:
                large firms focused on volume, and small operators lacking
                structure and consistency.
              </p>

              <p>
                We combine systems, experience, and personalized service so
                every property is treated as a long-term investment — not a
                transaction.
              </p>
            </div>
          </div>
        </div>

        {/* OUR PHILOSOPHY */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[3px] text-sm text-[#DABE9B] mb-5">
              Our Philosophy
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-[#0F172A]">
              Stewardship Over Management
            </h2>
          </div>

          {/* RIGHT */}
          <div className="border-l-4 border-[#DABE9B] pl-6 sm:pl-10">
            <p className="text-gray-600 leading-8 text-md sm:text-lg mb-8">
              We are stewards of your property.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Long-term thinking over short-term gains",
                "Prevention over reaction",
                "Transparency over assumptions",
                "Responsibility over shortcuts",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F8F6F2] rounded-xl px-5 py-4 text-[#0F172A] border border-[#ECE7DE]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR COMMITMENT */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[3px] text-sm text-[#DABE9B] mb-5">
              Our Commitment
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-[#0F172A]">
              Built Around Trust & Transparency
            </h2>
          </div>

          {/* RIGHT */}
          <div className="border-l-4 border-[#DABE9B] pl-6 sm:pl-10">
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[
                "Clear communication at all times",
                "Carefully screened tenants",
                "Transparent financial reporting",
                "Proactive maintenance handling",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F8F6F2] rounded-xl px-5 py-4 text-[#0F172A] border border-[#ECE7DE]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="text-lg sm:text-xl font-serif text-[#0F172A]">
              No confusion. No hidden surprises. No neglect.
            </p>
          </div>
        </div>
      </div>
      </section>
      <WhyChooseUs />
      <MissionVison />
      <Faq />
      <ReadyWhenYouAre />
      <Footer />
    </>
  );
}
