"use client";

import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="aboutme-section"
      className="w-full h-[400px] border-t border-[#3e4138]"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
    >
      {/* SOCIALS */}
      <div className="w-full h-16 flex justify-center items-center">
        <div className="w-52 h-12 px-2 py-2 border rounded-full border-[#3e4138] mt-2 flex flex-row justify-between items-center">
          <div className="w-10 h-10 bg-[#FFFFE3] rounded-full flex justify-center items-center hover:scale-125 transition-all duration-200">
            <a href="https://x.com/LeventeDukay" target="blank">
              <img src="/x.png" className="w-9 h-9" />
            </a>
          </div>
          <div className="w-10 h-10 bg-[#FFFFE3] rounded-full flex justify-center items-center hover:scale-125 transition-all duration-200">
            <a href="https://github.com/Levente0324" target="blank">
              <img src="/github-black.png" className="w-8 h-8" />
            </a>
          </div>
          <div className="w-10 h-10 bg-[#FFFFE3] rounded-full flex justify-center items-center hover:scale-125 transition-all duration-200">
            <a
              href="https://www.linkedin.com/in/levente-dukay-732050333/"
              target="blank"
            >
              <img src="/linkdin.png" className="w-6 h-6" />
            </a>
          </div>
          <div className="w-10 h-10 bg-[#FFFFE3] rounded-full flex justify-center items-center hover:scale-125 transition-all duration-200">
            <a href="https://www.instagram.com/leventedukay/" target="blank">
              <img src="/insta.png" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-72 px-24 mt-8 flex flex-col justify-start items-start">
        <div>
          <h1 className="text-violet-400 text-6xl font-semibold">//ABOUT ME</h1>
        </div>
        <div className="w-[70%] mt-6 pt-4 pb-4 ml-12 pl-8 pr-24 corner-borders">
          <h1 className="text-[#FFFFE3] text-2xl">
            I’m a{" "}
            <a className="text-[#FF8709]">20-year-old university student</a>{" "}
            based in Hungary. I have been studying web development and design
            for 5+ years, alongside a growing interest in software engineering.
            I’m actively looking for opportunities to grow and apply my skills
            in real-world projects. While I don’t have industry experience yet,
            I bring <a className="text-yellow-400">strong motivation</a>, a
            <a className="text-cyan-300"> passion for learning</a>, <br /> and
            the ability to <a className="text-violet-400">quickly adapt</a> to
            new tools and challenges.
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
