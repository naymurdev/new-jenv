"use client";
import { Mail, Zap } from "lucide-react";
import { Link } from "next-view-transitions";
import React from "react";
import { motion } from "motion/react";
import LocationTimeDisplay from "@/components/common/LocationTimeDisplay";
import CountdownTimer from "@/components/common/countdown-timer";
import Image from "next/image";

function Headers() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" fixed md:top-1.5 top-0 w-full flex justify-between z-50 px-6 py-2 font-satoshi text-white"
      >
        <img src="/Jenv.svg" alt="" />
        <button className="bg-white w-fit text-black font-medium py-2 px-4 cursor-pointer rounded-full hover:shadow-lg shadow-white border-b-4 border-neutral-300 hover:border-white transition">
          Get A Demo
        </button>
      </motion.header>
    </>
  );
}

export default Headers;
