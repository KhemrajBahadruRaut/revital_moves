"use client";
import {
  FiCamera,
  FiShield,
  FiTool,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

import Navbar from "../../components/header/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import SubService from "./SubService.jsx";
import ReadyWhenYouAre from "../../components/hero/ReadyWhenYouAre.jsx";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="w-full font-sans ">
        {/* HERO */}
        <section className="relative h-screen sm:h-[70vh] flex items-center border pt-30">
          <img
            src="/services/s2.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#00003C]/20"></div>

          <div className="relative z-10 px-6 md:px-16 text-white max-w-3xl">
            <p className="text-sm tracking-widest text-[#DABE9B] uppercase mb-3">
              RENTAL PROPERTY MANAGEMENT SERVICES
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
Comprehensive, white-glove property management in Massachusetts.
            </h1>
            <div className="w-40 border-b-2 border-[#DABE9B] z-10"></div>

            <p className="text-gray-300 mb-6 pt-5">
           We manage every stage of your rental property lifecycle with precision, transparency, and care.

            </p>
          </div>
        </section>
        <section
          className="w-full px-6 md:px-16 py-20"
          style={{
            background:
              "linear-gradient(to bottom, #F8F2EB, #F8F2EB33, #F8F2EB)",
          }}
        >
          <div className="max-w-7xl mx-auto space-y-10">
            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                {/* ICON */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    border: "1px solid #DABE9B80",
                  }}
                >
                  <FiCamera className="text-2xl text-[#DABE9B]" />
                </div>

                {/* TITLE */}
                <h2 className="text-3xl font-semibold text-[#00003C] mb-5">
                  Strategic Staging & Photography
                </h2>

                {/* DESC */}
                <p className="text-[#46464F] leading-8 mb-6 max-w-xl">
                  First impressions are indelible. Our professional staging
                  teams curate interiors that highlight the architectural
                  heritage of your property, while high-resolution, light-filled
                  photography captures the "quiet luxury" that attracts
                  high-caliber tenants.
                </p>

                {/* POINTS */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-[#A69177]" />
                    <p className="text-[#46464F]">
                      Professional Interior Design Consult
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-[#A69177]" />
                    <p className="text-[#46464F]">
                      Drone & Twilight Photography
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div>
                <img
                  src="/services/s4.jpg"
                  alt="Luxury Home"
                  className="w-full h-95 object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT IMAGE */}
              <div>
                <img
                  src="/services/s3.jpg"
                  alt="Luxury Property"
                  className="w-full h-95 object-cover rounded-3xl"
                />
              </div>

              {/* RIGHT */}
              <div>
                {/* ICON */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    border: "1px solid #DABE9B80",
                  }}
                >
                  <FiShield className="text-2xl text-[#DABE9B]" />
                </div>

                {/* TITLE */}
                <h2 className="text-3xl font-semibold text-[#00003C] mb-5">
                  Strict Tenant Vetting
                </h2>

                {/* DESC */}
                <p className="text-[#46464F] leading-8 max-w-xl">
                  Security and stability are our top priorities. Our rigorous
                  screening process includes comprehensive background checks,
                  financial verification, and rental history audits to ensure
                  your property is in trusted hands.
                </p>
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                {/* ICON */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    border: "1px solid #DABE9B80",
                  }}
                >
                  <FiTool className="text-2xl text-[#DABE9B]" />
                </div>

                {/* TITLE */}
                <h2 className="text-3xl font-semibold text-[#00003C] mb-5">
                  24/7 Maintenance Coordination
                </h2>

                {/* DESC */}
                <p className="text-[#46464F] leading-8 mb-8 max-w-xl">
                  Preserving the value of your asset requires constant
                  vigilance. We handle all emergency repairs and routine
                  maintenance through our network of vetted, high-quality
                  tradespeople, ensuring prompt resolution and minimal
                  disruption.
                </p>

                {/* BUTTON */}
                <button
                  className="px-7 py-3 rounded-lg text-white flex items-center gap-2 transition hover:opacity-90"
                  style={{
                    backgroundColor: "#A69177",
                  }}
                >
                  CONTACT US
                  <FiArrowRight />
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div>
                <img
                  src="/services/s2.jpg"
                  alt="Neighborhood"
                  className="w-full h-95 object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
        <SubService />
        <ReadyWhenYouAre />
      </div>
      <Footer />
    </>
  );
}
