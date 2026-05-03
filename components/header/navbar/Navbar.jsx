"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="relative w-full z-50  sm:pb-4">

      {/* LEFT LINES */}

      <div className="border border-[#00003C] hidden md:flex absolute w-30 sm:w-45 md:w-83 lg:w-110 xl:w-160" />
      <div className="border border-[#DABE9B] hidden md:flex absolute top-3 sm:top-4 md:top-5 w-25 sm:w-40 md:w-70 lg:w-100 xl:w-145" />
      <div className="border border-[#DABE9B] hidden md:flex absolute -top-3 sm:-top-4 left-6 sm:left-10 md:left-12 h-15 sm:h-17.5 md:h-20" />
      <div className="border border-[#00003C] hidden md:flex absolute -top-3 sm:-top-4 left-3 sm:left-5 md:left-6 h-17.5 sm:h-22.5 md:h-30" />

      {/* RIGHT LINES */}
      <div className="border border-[#00003C] hidden md:flex absolute right-0 w-30 sm:w-45 md:w-83 lg:w-110 xl:w-160" />
      <div className="border border-[#DABE9B] hidden md:flex absolute top-3 sm:top-4 md:top-5 right-0 w-25 sm:w-40 md:w-70 lg:w-100 xl:w-145"  />
      <div className="border border-[#DABE9B] hidden md:flex absolute -top-3 sm:-top-4 right-6 sm:right-10 md:right-12 h-15 sm:h-17.5 md:h-20" />
      <div className="border border-[#00003C] hidden md:flex absolute -top-3 sm:-top-4 right-3 sm:right-5 md:right-6 h-17.5 sm:h-22.5 md:h-30" />

      {/* NAV CONTENT */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mt-4">
        <div className="flex items-center justify-between text-[10px] sm:text-xs md:text-sm tracking-widest text-gray-700">

          {/* LEFT MENU */}
          <div className="hidden md:flex gap-4 lg:gap-10 w-full justify-end">
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
          </div>

          {/* LOGO */}
          <div className="flex shrink-0 md:px-10 lg:px-30">
            <Image
              src="/mainlogo/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="sm:w-20  md:w-17.5 h-auto"
            />
          </div>

          {/* RIGHT MENU */}
          <div className="hidden md:flex gap-4 lg:gap-10 w-full justify-start">
            <a href="/moving-services">MOVING SERVICES</a>
            <a href="#">RENTAL MGMT</a>
            <a href="#">CAREER</a>
          </div>

          {/* MOBILE MENU (minimal fallback) */}
          <div className="md:hidden absolute right-4 text-lg">
            ☰
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;