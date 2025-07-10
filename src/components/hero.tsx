"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-[930px] flex flex-col justify-center items-center gap-1 -mt-4">
      {/* NAME */}
      <motion.div
        className="w-full flex flex-row justify-center items-center gap-4 mb-3"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div>
          <img src="/me.jpg" className="w-16 rounded-full" />
        </div>
        <div className="w-48 h-16 border rounded-full border-[#3e4138] flex flex-row justify-center items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-4 bg-green-500"></span>
          </span>
          <h1 className="text-[#FFFFE3] text-xl tracking-wide ml-2.5">
            Hi, I'm <a className="text-[#FF8709]">Levente</a>
          </h1>
        </div>
      </motion.div>
      {/* FULL-STACK */}
      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
      >
        <h1 className="text-8xl text-violet-400 font-extrabold tracking-wide">
          FULL-STACK
        </h1>
      </motion.div>
      {/* WEB */}
      <motion.div
        className="w-full flex justify-center items-center gap-16"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
      >
        <h1 className="text-8xl text-yellow-400 font-extrabold tracking-wide -ml-8">
          WEB
        </h1>
        <div className="text-[#FFFFE3] text-lg">
          <h1>//Based in</h1>
          <h1 className="-mt-0.5">Hungary</h1>
        </div>
      </motion.div>
      {/* DEVELOPER */}
      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
      >
        <h1 className="text-8xl text-[#FFFFE3] font-extrabold tracking-wide">
          DEVELOPER
        </h1>
      </motion.div>
      {/* DESIGNER */}
      <motion.div
        className="w-full flex justify-center items-center mb-7"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
      >
        <h1 className="text-8xl text-[#FFFFE3] font-extrabold tracking-wide">
          &
        </h1>
        <h1 className="text-8xl text-cyan-300 font-bold italic tracking-wide ml-8">
          DESIGNER.
        </h1>
      </motion.div>
      {/* TEXT */}
      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
      >
        <h1 className="text-3xl text-[#FFFFE3]">
          I build seamless web applications with a balance of
          <br></br>
          <a className="text-violet-400">clean code</a>,{" "}
          <a className="text-yellow-400">performance</a> and{" "}
          <a className="text-cyan-300">user-focused </a>
          design.
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
