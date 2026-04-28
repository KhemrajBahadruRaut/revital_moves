"use client";
import Navbar from "@/components/header/navbar/Navbar.jsx";
import TransitionPage from "@/components/hero/TransitionPage.jsx"
import ConsultationSection from "@/components/hero/ConsultationSection.jsx"
import Footer from "@/components/footer/Footer.jsx"

export default function Hero() {
  return (
    <>
    <section className="relative w-full min-h-screen overflow-hidden">
      <Navbar />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/hero.jpg')" }}
        />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-30 min-h-[90vh] text-center px-4">
        <div className="max-w-5xl w-full">
          <h1 className="font-serif text-gray-800 leading-tight text-4xl sm:text-4xl xl:text-6xl">
            Stress-Free <span className="text-[#DABE9B]">Moving</span> & Reliable
            <br className="hidden sm:block" />
            <span className="text-[#DABE9B]">Property Management</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-lg sm:text-base md:text-lg lg:text-2xl">
            We help seniors move with care and manage your rental properties
            <br className="hidden sm:block" />
            with ease and professionalism.
          </p>

          <button className="mt-6 sm:mt-8 px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#DABE9B] text-white text-xs sm:text-sm tracking-widest rounded">
            BOOK A CONSULTATION
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 text-gray-500 text-sm">
          ↓<p className="mt-2">Scroll down for more</p>
        </div>
      </div>
    </section>
    <TransitionPage/>
    <ConsultationSection/>
    <Footer/>
        </>
  );
}