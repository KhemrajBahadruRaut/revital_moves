"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const routeConfig = {
  "/": {
    textColor: "text-[#FFFFFF]",
    activeColor: "text-[#DABE9B]",
    scrolledText: "text-[#00003C]",
    scrolledActive: "text-[#DABE9B]",
  },
  "/about": {
    textColor: "text-[#00003C]",
    activeColor: "text-[#DABE9B]",
    scrolledText: "text-[#00003C]",
    scrolledActive: "text-[#DABE9B]",
  },
  "/contact": {
    textColor: "text-[#FFFFFF]",
    activeColor: "text-[#DABE9B]",
    scrolledText: "text-[#00003C]",
    scrolledActive: "text-[#DABE9B]",
  },
  "/services": {
    textColor: "text-[#FFFFFF]",
    activeColor: "text-[#DABE9B]",
    scrolledText: "text-[#00003C]",
    scrolledActive: "text-[#DABE9B]",
  },
  "/CONSULTATION": {
    textColor: "text-[#FFFFFF]",
    activeColor: "text-[#DABE9B]",
    scrolledText: "text-[#00003C]",
    scrolledActive: "text-[#DABE9B]",
  },
  "/career": {
    textColor: "text-[#FFFFFF]",
    activeColor: "text-[#DABE9B]",
    scrolledText: "text-[#00003C]",
    scrolledActive: "text-[#DABE9B]",
  },
};

const defaultConfig = {
  textColor: "text-[#00003C]",
  activeColor: "text-[#DABE9B]",
  scrolledText: "text-[#00003C]",
  scrolledActive: "text-[#DABE9B]",
};

const navLinks = [
  { href: "/", label: "HOME", side: "left" },
  { href: "/about", label: "ABOUT", side: "left" },
  { href: "/contact", label: "CONTACT", side: "left" },
  { href: "/services", label: "SERVICES", side: "right" },
  { href: "/contact", label: "CONSULTATION", side: "right" },
  { href: "/career", label: "CAREER", side: "right" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);       // whether navbar is slid up
  const [scrolled, setScrolled] = useState(false);   // whether past the hero threshold
  const lastScrollY = useRef(0);                     // track previous scroll position
  const pathname = usePathname();
  const config = routeConfig[pathname] ?? defaultConfig;

  useEffect(() => {
    setHidden(false);
    setScrolled(false);
    lastScrollY.current = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const previous = lastScrollY.current;

      // Past hero threshold → switch to solid white bg
      setScrolled(currentY > 80);

      // Scrolling DOWN past 80px → hide navbar
      // Scrolling UP → show navbar
      if (currentY > 80) {
        setHidden(currentY > previous);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const textColor = scrolled ? config.scrolledText : config.textColor;
  const bgStyle = scrolled ? "bg-white shadow-md" : "bg-transparent";
  const navPosition = hidden ? "-translate-y-full" : "translate-y-0";

  const getLinkClass = (href) => {
    const isActive = pathname === href;
    const color = isActive
      ? scrolled
        ? config.scrolledActive
        : config.activeColor
      : textColor;

    return `hover:opacity-70 transition-opacity ${color} ${
      isActive ? "border-b border-current pb-0.5" : ""
    }`;
  };

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 sm:pb-4
        transition-all duration-500 ease-in-out
        ${bgStyle}
        ${navPosition}
      `}
    >
      {/* LEFT LINES */}
      <div className="border border-[#00003C] hidden md:flex absolute w-30 sm:w-45 md:w-83 lg:w-110 xl:w-160 top-5" />
      <div className="border border-[#DABE9B] hidden md:flex absolute top-3  md:top-10 w-25 sm:w-40 md:w-70 lg:w-100 xl:w-145" />
      <div className="border border-[#DABE9B] hidden md:flex absolute -top-3 sm:-top-4 left-6 sm:left-10 md:left-12 h-15 sm:h-17.5 md:h-20" />
      <div className="border border-[#00003C] hidden md:flex absolute -top-3 sm:-top-4 left-3 sm:left-5 md:left-6 h-17.5 sm:h-22.5 md:h-30" />

      {/* RIGHT LINES */}
      <div className="border border-[#00003C] hidden md:flex absolute right-0 w-30 sm:w-45 md:w-83 lg:w-110 xl:w-160 top-5" />
      <div className="border border-[#DABE9B] hidden md:flex absolute top-3  md:top-10 right-0 w-25 sm:w-40 md:w-70 lg:w-100 xl:w-145" />
      <div className="border border-[#DABE9B] hidden md:flex absolute -top-3 sm:-top-4 right-6 sm:right-10 md:right-12 h-15 sm:h-17.5 md:h-20" />
      <div className="border border-[#00003C] hidden md:flex absolute -top-3 sm:-top-4 right-3 sm:right-5 md:right-6 h-17.5 sm:h-22.5 md:h-30" />

      {/* NAV CONTENT */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mt-6">
        <div className="flex items-center justify-between text-[10px] sm:text-xs md:text-sm tracking-widest transition-colors duration-300">

          {/* LEFT MENU */}
          <div className="hidden md:flex gap-4 lg:gap-10 w-full justify-end">
            {navLinks
              .filter((l) => l.side === "left")
              .map((link) => (
                <a key={link.href} href={link.href} className={getLinkClass(link.href)}>
                  {link.label}
                </a>
              ))}
          </div>

          {/* LOGO */}
          <div className="flex shrink-0 md:px-10 lg:px-30">
            <Image
              src="/mainlogo/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="sm:w-20 md:w-17.5 h-auto"
            />
          </div>

          {/* RIGHT MENU */}
          <div className="hidden md:flex gap-4 lg:gap-10 w-full justify-start">
            {navLinks
              .filter((l) => l.side === "right")
              .map((link) => (
                <a key={link.href} href={link.href} className={getLinkClass(link.href)}>
                  {link.label}
                </a>
              ))}
          </div>

          {/* MOBILE MENU */}
          <div className={`md:hidden absolute right-4 text-lg ${textColor}`}>☰</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;