"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/lib/button";

const Projects = () => {
  return (
    <motion.div
      id="projects-section"
      className="w-full h-[760px] px-24"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full h-24 flex justify-start items-center">
        <h1 className="text-6xl text-violet-400 font-semibold">
          //MY PROJECTS
        </h1>
      </div>
      {/* PROJECTS */}
      <div className="w-full mt-3">
        {/* 1. PROJECT */}
        <a
          href="https://github.com/Levente0324/Vizsgaremek-project.git"
          target="blank"
          className="group"
        >
          <div className="w-full h-44 border-y border-[#3e4138] flex flex-row justify-between items-center px-24">
            <div>
              <h1 className="text-[#FFFFE3] text-3xl font-semibold group-hover:text-cyan-300 group-hover:ml-12 transition-all duration-300 ease-in-out">
                Final Year School Project
              </h1>
              <h1 className="text-gray-300 text-base group-hover:ml-12 transition-all duration-200 ease-in-out">
                2025
              </h1>
            </div>
            <div>
              <h1 className="text-[#FFFFE3] text-xl group-hover:mr-12 transition-all duration-300 ease-in-out">
                UI/UX Design & Development
              </h1>
              <h1 className="text-gray-300 text-base group-hover:mr-12 transition-all duration-300 ease-in-out">
                NextJS, NestJS, Prisma, Mysql
              </h1>
            </div>
          </div>
        </a>
        {/* 2. PROJECT */}
        <a
          href="https://github.com/Levente0324/WeatherApp.git"
          target="blank"
          className="group"
        >
          <div className="w-full h-44 border-y border-[#3e4138] flex flex-row justify-between items-center px-24">
            <div>
              <h1 className="text-[#FFFFE3] text-3xl font-semibold group-hover:text-cyan-300 group-hover:ml-12 transition-all duration-300 ease-in-out">
                Weather App
              </h1>
              <h1 className="text-gray-300 text-base group-hover:ml-12 transition-all duration-200 ease-in-out">
                2024
              </h1>
            </div>
            <div>
              <h1 className="text-[#FFFFE3] text-xl group-hover:mr-12 transition-all duration-300 ease-in-out">
                UI/UX Design & Development
              </h1>
              <h1 className="text-gray-300 text-base group-hover:mr-12 transition-all duration-300 ease-in-out">
                Vite
              </h1>
            </div>
          </div>
        </a>
        {/* 3. PROJECT */}
        <a
          href="https://github.com/Levente0324/Next-Supabase-Prisma-Blog.git"
          target="blank"
          className="group"
        >
          <div className="w-full h-44 border-y border-[#3e4138] flex flex-row justify-between items-center px-24">
            <div>
              <h1 className="text-[#FFFFE3] text-3xl font-semibold group-hover:text-cyan-300 group-hover:ml-12 transition-all duration-300 ease-in-out">
                Blog Project
              </h1>
              <h1 className="text-gray-300 text-base group-hover:ml-12 transition-all duration-200 ease-in-out">
                2024
              </h1>
            </div>
            <div>
              <h1 className="text-[#FFFFE3] text-xl group-hover:mr-12 transition-all duration-300 ease-in-out">
                UI/UX Design & Development
              </h1>
              <h1 className="text-gray-300 text-base group-hover:mr-12 transition-all duration-300 ease-in-out">
                NextJS, Prisma, Supabase, Tailwind
              </h1>
            </div>
          </div>
        </a>
      </div>
      {/* SEE MORE */}
      <div className="w-full h-24 mt-4 flex justify-center items-center">
        <a
          href="https://github.com/Levente0324?tab=repositories"
          target="blank"
        >
          <MagneticButton scale={1.05} tollerance={0.3} borderRadius={9999}>
            <div className="flex justify-center items-center w-60 h-24">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="border rounded-full border-[#3e4138] w-52 h-[76px] text-[#FFFFE3] text-2xl font-semibold tracking-wide hover:text-cyan-300 transition-colors duration-300"
              >
                See more
              </motion.button>
            </div>
          </MagneticButton>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
