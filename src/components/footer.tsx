"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      id="footer-section"
      className="w-full h-[420px] px-8"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-full h-full border border-[#3e4138] rounded-xl flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full h-full flex flex-row justify-between items-start pl-24">
          <div className="w-full h-full flex justify-start items-start pt-8">
            <h1 className="text-[#FFFFE3] text-2xl">
              Where <a className="text-violet-400">aesthetics</a> & <br />
              <a className="text-cyan-300">functionality</a> meet
            </h1>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-start gap-1 pt-6">
            <div className="text-[#FF8709] text-xl mb-2">Explore</div>
            <a href="/">
              <div className="text-[#FFFFE3] text-lg hover:text-cyan-300 transition-all duration-100 ease-in-out hover:cursor-pointer">
                Home
              </div>
            </a>
            <div className="text-[#FFFFE3] text-lg hover:text-cyan-300 transition-all duration-100 ease-in-out hover:cursor-pointer">
              My Projects
            </div>
            <a href="">
              <div className="text-[#FFFFE3] text-lg hover:text-cyan-300 transition-all duration-100 ease-in-ou hover:cursor-pointert">
                Contact Me
              </div>
            </a>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-start gap-1 pt-6">
            <div className="text-[#FF8709] text-xl mb-2">Follow Me</div>
            <a href="https://github.com/Levente0324" target="blank">
              <div className="text-[#FFFFE3] text-lg hover:text-cyan-300 transition-all duration-100 ease-in-out hover:cursor-pointer">
                Github
              </div>
            </a>
            <a href="https://x.com/LeventeDukay" target="blank">
              <div className="text-[#FFFFE3] text-lg hover:text-cyan-300 transition-all duration-100 ease-in-out hover:cursor-pointer">
                Twitter
              </div>
            </a>
            <a href="https://www.instagram.com/leventedukay/" target="blank">
              <div className="text-[#FFFFE3] text-lg hover:text-cyan-300 transition-all duration-100 ease-in-out hover:cursor-pointer">
                Instagram
              </div>
            </a>
          </div>
        </div>
        <div className="w-full h-32 flex justify-center items-center">
          <h1 className="text-[250px] text-[#FFFFE3] mb-4 font-semibold tracking-wide">
            Levente0324
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
