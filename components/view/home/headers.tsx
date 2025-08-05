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
        className=" fixed md:top-1.5 top-0 w-full flex justify-between z-50 px-4 py-2 font-satoshi text-white"
      >
        <img src="/Jenv.svg" alt="" />
        <button className="bg-white text-black px-4 py-2 rounded-full">Get A Demo</button>
      </motion.header>
    </>
  );
}

export default Headers;
