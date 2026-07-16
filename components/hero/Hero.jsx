"use client";
import Navbar from "@/components/header/navbar/Navbar.jsx";
import WhatWeOffer from "@/components/hero/WhatWeOffer.jsx"
import HowItWorks from '@/components/hero/HowItWorks.jsx';
import ReadyWhenYouAre from '@/components/hero/ReadyWhenYouAre.jsx'
import Footer from "@/components/footer/Footer.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative w-full  overflow-hidden pb-10 pt-30">
        <Navbar />

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/ms1.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center pt-10 md:pt-30  text-center px-4">
          <div className="max-w-2xl sm:max-w-5xl w-full">
            <h1 className="font-serif text-white leading-tight text-3xl sm:text-5xl xl:text-6xl">
              Premium <span>Property</span> Management
              <br className="block" />
              <span className="">in Massachusetts</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-[#DADADA] max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
              Experience sophisticated property stewardship designed for
              discerning owners. We handle every detail, ensuring your
              investment thrives while you enjoy peace of mind.{" "}
            </p>

            <div className=" mt-6 sm:mt-8 px-5 sm:px-6 md:px-8 py-2 sm:py-3 gap-10 justify-center flex flex-wrap">
              <Link
                href="/consultation"
                className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#DABE9B] text-white text-xs sm:text-sm tracking-widest rounded"
              >
                BOOK A CONSULTATION
              </Link>
              <Link href="/services" className="text-white flex items-center gap-3">
                VIEW OUR SERVICES
                <span>
                  <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}

          <div className="pt-5 sm:pt-30 text-[#C8C8C8] text-sm">
            ↓<p className="mt-2">Scroll down for more</p>
          </div>
          </div>
      </section>
      <WhatWeOffer/>
      <HowItWorks/>
      <ReadyWhenYouAre/>
      <Footer />
    </>
  );
}
