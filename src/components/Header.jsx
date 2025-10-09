"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "../data/company";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { NAVIGATION } from "@/config/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const [topbarHeight, setTopbarHeight] = useState(0);

  const router = useRouter();
  const pathname = usePathname();

  const topbarRef = useRef(null);

  const navItems = NAVIGATION;
  const dataCompany = COMPANY_INFO;

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // handle nav click
  const handleNavClick = async (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToHash(href);
    } else if (href.includes("#")) {
      e.preventDefault();
      const [path, hash] = href.split("#");
      if (pathname === path) {
        scrollToHash("#" + hash);
      } else {
        router.push(path);
        setTimeout(() => scrollToHash("#" + hash), 400);
      }
    } else {
      e.preventDefault();
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  // detect scroll untuk hide/show topbar
  useEffect(() => {
    if (topbarRef.current) {
      setTopbarHeight(topbarRef.current.offsetHeight);
    }

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowTopbar(false); // scroll ke bawah → hide topbar
      } else {
        setShowTopbar(true); // scroll ke atas → show topbar
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300 ease-in-out"
        style={{
          top: showTopbar ? "0" : `-${topbarHeight}px`,
        }}
      >
        {/* 🔴 Top bar */}
        <div ref={topbarRef} className="bg-red-600 text-white py-2">
          <div className="container mx-auto px-6 xl:px-12">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                {/* <div > */}
                  <Link href="tel:+6282123112257" className="flex items-center space-x-2">
                    <Phone size={14} />
                    <span>+62 821-2311-2257</span>
                  </Link>
                {/* </div> */}
                {/* <div className=""> */}
                  <Link href="mailto:mispcenter@misp.co.id" className="flex items-center space-x-2">
                    <Mail size={14} />
                    <span>mispcenter@misp.co.id</span>
                  </Link>
                {/* </div> */}
              </div>
              <div className="hidden md:block">
                <span>
                  Professional Telecommunications Engineering Services
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ⚪ Navbar */}
        <div className="bg-white">
          <div className="container mx-auto px-4 xl:px-10">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => scrollToHash("#home")}
              >
                <Image
                  src={dataCompany.logo}
                  alt={dataCompany.name}
                  className="h-12 w-12 object-contain"
                  width={48}
                  height={48}
                />
                <div>
                  <h1 className="text-lg xl:text-xl font-semibold text-gray-900">
                    {dataCompany.shortName}
                  </h1>
                  <p className="text-xs xl:text-sm font-light text-gray-600 hidden sm:block">
                    {dataCompany.tagline}
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <div className="hidden lg:block">
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => scrollToHash("#contact")}
                  >
                    Contact Us
                  </Button>
                </div>
              </nav>

              {/* CTA Button */}
              {/* <div className="hidden lg:block">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => scrollToHash("#contact")}
                >
                  Contact Us
                </Button>
              </div> */}

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden px-3 py-2 text-gray-800 hover:text-red-600 transition-colors duration-300 cursor-pointer rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
              <nav className="flex flex-col py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 py-3">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                    onClick={() => {
                      scrollToHash("#contact");
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
