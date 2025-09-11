"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";

import { ReactLenis } from "lenis/react";
import Service from "./service";
import HowWeWork from "./how-we-work";
import Testimonial from "./testimonial";
import People from "./people";
import Faqs from "./faqs";
import Pricing from "./pricing";
import Footer from "./footer";
import Projects from "./projects";
import WhyNotUs from "./why-not-us";

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <ReactLenis root>
        <section
          className="w-full rounded-md relative grid place-items-center h-screen"
          ref={containerRef}
        >
          <article className="w-full relative text-white max-w-7xl mx-auto text-center pb-10">
            <h1 className="relative z-10 !leading-[80%] xl:text-8xl md:text-7xl sm:text-6xl text-4xl">
              Your MVP doesn’t need another meeting. It needs shipping.
            </h1>
            <motion.p
              initial={{ filter: "blur(20px)", y: 0, opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              className="text-lg text-white max-w-3xl mx-auto pt-8"
            >
              Agencies love endless calls, bloated decks, and six-month
              timelines. We don’t. JENV builds and ships real products in weeks
              so your users can break them, not your budget.
            </motion.p>
            <LiquidGlassCard
              draggable={false}
              blurIntensity="sm"
              glowIntensity="sm"
              shadowIntensity="sm"
              className="w-fit text-2xl py-3 mx-auto mt-12 px-5 rounded-full relative flex items-center justify-center cursor-pointer text-white row-span-2"
            >
              <span className="relative z-10">Start building</span>
            </LiquidGlassCard>
          </article>

          <motion.img
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
            src="/background.png"
            alt=""
            className="absolute top-44 left-0 w-full -z-10 "
          />
        </section>
        <Service />
        <WhyNotUs />
        <Projects />
        <Testimonial />
        <Pricing />
        <People />
        <Faqs />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default HeroSection;
