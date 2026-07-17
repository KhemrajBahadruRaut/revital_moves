"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
  "/consultation": {
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
  "/blog": {
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
  { href: "/consultation", label: "CONSULTATION", side: "right" },
  { href: "/career", label: "CAREER", side: "right" },
  { href: "/blog", label: "BLOG", side: "right" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);       // whether navbar is slid up
  const [scrolled, setScrolled] = useState(false);   // whether past the hero threshold
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);                     // track previous scroll position
  const pathname = usePathname();
  const parentRoute = Object.keys(routeConfig).find(
    (route) => route !== "/" && pathname.startsWith(`${route}/`),
  );
  const config = routeConfig[pathname] ?? routeConfig[parentRoute] ?? defaultConfig;

  useEffect(() => {
    lastScrollY.current = window.scrollY;

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
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const textColor = scrolled ? config.scrolledText : config.textColor;
  const bgStyle = scrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent";
  const navPosition = hidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0";

  const getLinkClass = (href) => {
    const isActive =
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
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
        fixed top-0 left-0 w-full z-50 pb-4
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
                <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
          </div>

          {/* LOGO */}
          <Link
            href="/"
            aria-label="Revital Moves home"
            className="flex shrink-0 md:px-10 lg:px-30"
          >
            <Image
              src="/mainlogo/logo.png"
              alt="Revital Moves"
              width={60}
              height={60}
              className="sm:w-20 md:w-17.5 h-auto"
              priority
            />
          </Link>

          {/* RIGHT MENU */}
          <div className="hidden md:flex gap-4 lg:gap-10 w-full justify-start">
            {navLinks
              .filter((l) => l.side === "right")
              .map((link) => (
                <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                  {link.label}
                </Link>
              ))}
          </div>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className={`absolute right-4 flex h-11 w-11 items-center justify-center rounded-md md:hidden ${
              isMenuOpen ? "text-[#00003C]" : textColor
            }`}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`absolute left-0 top-full w-full border-t border-[#DABE9B80] bg-white px-6 py-5 shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`border-b border-[#DABE9B40] py-4 text-sm tracking-widest last:border-0 ${
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`))
                  ? "font-semibold text-[#A69177]"
                  : "text-[#00003C]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
