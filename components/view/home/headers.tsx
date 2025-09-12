"use client";
import React from "react";
import { motion } from "motion/react";

function Headers() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed md:top-1.5 top-0 w-full flex justify-between z-50 px-6 py-2 font-satoshi text-white shrink-0"
      >
        <img src="/Jenv.svg" alt="" />
        <a href="https://calendly.com/jenv/15min" target="_blank" className="bg-white w-fit text-black font-medium py-2 px-4 cursor-pointer rounded-full hover:shadow-lg shadow-white border-b-4 border-neutral-300 hover:border-white transition">
          Book A Call
        </a>
      </motion.header>
    </>
  );
}

export default Headers;
