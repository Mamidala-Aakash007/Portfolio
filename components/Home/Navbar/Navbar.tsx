"use client";

import { NavLinks } from "@/constant/constant";
import { useState, useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

export default function Navbar({ openNav }: Props) {

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={` select-none transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"
      }duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            AAKASH
          </h1>
        </div>
        {/* navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <span
                key={link.id}
                onClick={() => handleNavClick(link.url.replace("/#", ""))}
                className="text-lg select-none hover:text-cyan-300 text-white font-medium transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </span>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* CV button */}
          <a href="pdfs/MamidalaAakash_Developer_Resume.pdf" download="Aakash_Mamidala_CV.pdf" className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span className="inline">Download CV</span>
          </a>
          {/* burger menu */}
          <HiMiniBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
