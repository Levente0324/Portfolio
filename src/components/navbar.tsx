"use client";

import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      className="w-full h-[70px] border-b border-[#3e4138] flex flex-row justify-between items-center px-6"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* GITHUB */}
      <a href="https://github.com/Levente0324" target="blank" className="group">
        <div className="w-40 h-10 border rounded-3xl border-[#3e4138] flex flex-row justify-center items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="relative w-6 h-6">
              <img src="/github.png" className="absolute w-6" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-[#FFFFE3] group-hover:text-[#18A0FB] group-hover:scale-[1.02] transition-all duration-200 ease-in-out">
              Levente0324
            </h1>
          </div>
        </div>
      </a>
      {/* MAIN */}
      <div className="w-[360px] h-12 border rounded-3xl border-[#3e4138] flex flex-row justify-center items-center gap-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group cursor-pointer"
        >
          <div className="flex flex-row justify-between items-center w-full h-full gap-2">
            <div>
              <div className="relative w-5 h-5">
                <img
                  src="/home.png"
                  className="absolute w-[19px] h-[19px] transition-all duration-150 ease-in-out group-hover:opacity-0"
                />
                <img
                  src="/home-after.png"
                  className="absolute w-[19px] h-[19px] transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
            <div>
              <h1 className="text-[#FFFFE3] group-hover:text-[#18A0FB] transition-all duration-200 ease-in-out">
                Home
              </h1>
            </div>
          </div>
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projects-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group cursor-pointer"
        >
          <div className="flex flex-row justify-between items-center w-full h-full gap-2">
            <div>
              <div className="relative w-5 h-5">
                <img
                  src="/projects.png"
                  className="absolute w-5 transition-all duration-150 ease-in-out group-hover:opacity-0"
                />
                <img
                  src="/projects-after.png"
                  className="absolute w-5 transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
            <div>
              <h1 className="text-[#FFFFE3] group-hover:text-[#18A0FB] transition-all duration-200 ease-in-out">
                My Projects
              </h1>
            </div>
          </div>
        </a>
        <a
          href="#aboutme"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("aboutme-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group cursor-pointer"
        >
          <div className="flex flex-row justify-between items-center w-full h-full gap-2">
            <div>
              <div className="relative w-5 h-5">
                <img
                  src="/user.png"
                  className="absolute w-[19px] h-[19px] transition-all duration-150 ease-in-out group-hover:opacity-0"
                />
                <img
                  src="/user-after.png"
                  className="absolute w-[19px] h-[19px] transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
            <div>
              <h1 className="text-[#FFFFE3] group-hover:text-[#18A0FB] transition-all duration-200 ease-in-out">
                About me
              </h1>
            </div>
          </div>
        </a>
      </div>
      {/* CONTACT */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("footer-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group cursor-pointer"
      >
        <div className="w-36 h-10 border rounded-3xl border-[#3e4138] flex flex-row justify-center items-center gap-2">
          <div className="flex justify-center items-center">
            <div className="relative w-5 h-5">
              <img
                src="/email.png"
                className="absolute w-5 transition-all duration-150 ease-in-out group-hover:opacity-0"
              />
              <img
                src="/email-after.png"
                className="absolute w-5 transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-[#FFFFE3] group-hover:text-[#18A0FB] group-hover:scale-[1.02] transition-all duration-200 ease-in-out">
              Contact me
            </h1>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Navbar;
