"use client";

import React from "react";
import { motion } from "framer-motion";

const Copyright = () => {
  return (
    <motion.div
      className="w-full h-16 px-16 flex flex-row justify-between items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-[#FFFFE3] text-lg">
        Dukay Levente ©2025 - Privacy Policy
      </div>
      <div className="text-[#FFFFE3] text-lg">Budapest, Hungary</div>
    </motion.div>
  );
};

export default Copyright;
