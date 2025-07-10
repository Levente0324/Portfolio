"use client";

import React from "react";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <motion.div
      className="w-full h-[410px]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* TECH STACK */}
      <div className="w-full h-96 px-24 py-8">
        <h1 className="text-violet-400 text-6xl font-semibold">
          //MY TECH STACK
        </h1>
        <div className="flex justify-center items-center px-40 mt-10 text-center">
          <h1 className="text-[#FFFFE3] text-3xl">
            I work with a broad range of{" "}
            <a className="text-cyan-300 font-semibold">modern technologies</a>,
            tools, and frameworks to craft reliable, efficient, and scalable
            digital solutions tailored to{" "}
            <a className="text-yellow-400 font-semibold">real-world needs</a>{" "}
            and{" "}
            <a className="italic font-semibold text-violet-400">
              user expectations
            </a>
            .
          </h1>
        </div>
        <div className="w-full h-36 mt-8 flex flex-row justify-center items-center px-10">
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/html.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">HTML</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/css.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">CSS</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/js.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">Javascript</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/ts.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">Typescript</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/react.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">React</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/nextjs.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">NextJS</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/nodejs.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">NodeJS</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/nestjs.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">NestJS</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/mysql.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">MySQL</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/mongodb.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">MongoDB</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/prisma.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">Prisma ORM</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/tailwind.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">Tailwind</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/python.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">Python</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/c.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">C#</h1>
          </div>
          <div className="w-28 h-28 flex flex-col justify-center items-center">
            <img
              src="/postman.png"
              className="w-16 h-16 hover:scale-105 transition-all"
            />
            <h1 className="text-[#FFFFE3] text-base">Postman</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stack;
