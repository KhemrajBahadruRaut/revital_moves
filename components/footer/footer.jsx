import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#46464F] text-white pt-16 pb-10 relative">
      {/* top lines */}
      <div className=" bg-[#DABE9B]  w-px absolute top-0 right-6 sm:right-10 md:right-12 h-15 sm:h-17.5 md:h-20 " />
      <div className="bg-[#DABE9B] h-px absolute top-5 md:top-8 w-25 right-0 sm:w-40 md:w-70 lg:w-100 xl:w-145" />
      {/* bottom lines */}
      <div className="bg-[#DABE9B] h-px absolute bottom-5 md:bottom-5 w-25 sm:w-40 md:w-70 lg:w-100 xl:w-145" />
      <div className="bg-[#DABE9B] w-px absolute bottom-0 left-6 sm:left-10 md:left-12 h-15 sm:h-17.5 md:h-20" />

      {/* TOP BORDER LINE */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#DABE9B33]" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-3 gap-12 pb-12">
        {/* REACH US */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Reach us</h3>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/></svg> location, address, name</li>
            <li  className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"/></svg> infoexample@gmail.com</li>
            <li  className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"/></svg> (888) 909 9999</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Career</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Moving Services</li>
            <li className="hover:text-white cursor-pointer">
              Rental Management
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER LINE (RADIAL GRADIENT) */}
      <div
        className="w-full h-px"
        style={{
          background: `radial-gradient(circle, #DABE9B 0%, #A69177 40%, transparent 80%)`,
        }}
      />

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300">
        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-white">
          <FaFacebookF className="cursor-pointer hover:text-[#DABE9B]" />
          <FaInstagram className="cursor-pointer hover:text-[#DABE9B]" />
          <FaLinkedinIn className="cursor-pointer hover:text-[#DABE9B]" />
        </div>

        {/* COPYRIGHT */}
        <p className="text-center">
          © {new Date().getFullYear()} Nepal Cosmetic Surgery. All rights
          reserved. | Terms of Services | Privacy Policy
        </p>

        {/* DEVELOPED BY */}
        <div className="flex items-center gap-2">
          <span>Developed by</span>
          <div className="w-4 h-4 bg-[#DABE9B] rotate-45"></div>
        </div>
      </div>
    </footer>
  );
}
