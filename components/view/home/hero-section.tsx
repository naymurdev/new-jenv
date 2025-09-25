"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { ReactLenis } from "lenis/react";
import Service from "./service";
import People from "./people";
import Faqs from "./faqs";
import Pricing from "./pricing";
import Footer from "./footer";
import Projects from "./projects";
import WhyNotUs from "./why-not-us";
import TestimonialsSection from "./testimonial";
import TextAnimation from "@/components/ui/scroll-text";
import { TimelineContent } from "@/components/ui/timeline-animation";

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReactLenis root>
        <section
          className="w-full rounded-md relative grid place-items-center sm:h-screen sm:pt-0 pt-40"
          ref={containerRef}
        >
          <article className="w-full relative text-white text-center pb-10 lg:px-0 max-w-6xl sm:px-10 px-4">
            <TextAnimation
              text="Your MVP doesn’t need another meeting. It needs shipping."
              variants={{
                hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                visible: {
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                  transition: { ease: "linear" },
                },
              }}
              viewport={{ once: true }}
              className="relative z-10 !leading-[80%] 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl capitalize"
            />
            <TimelineContent
              as="p"
              animationNum={3}
              className=" text-white xl:max-w-3xl md:max-w-xl max-w-md mx-auto pt-8 lg:text-lg md:text-base text-sm"
            >
              Agencies love endless calls, bloated decks, and six-month
              timelines. We don’t. JENV builds and ships real products in weeks
              so your users can break them, not your budget.
            </TimelineContent>
            <TimelineContent as="button" animationNum={4}>
              <LiquidGlassCard
                draggable={false}
                blurIntensity="sm"
                glowIntensity="sm"
                shadowIntensity="sm"
                className="w-[11.5rem] mt-6 text-center text-2xl group py-3 mx-auto rounded-full relative cursor-pointer overflow-hidden text-white row-span-2"
              >
                <div className="-translate-y-0.5 text-center skew-y-0  transition duration-500 group-hover:-translate-y-[180%] group-hover:skew-y-12">
                  Stop waiting
                </div>
                <div className="absolute translate-y-[150%] w-full left-0 text-center skew-y-12 transition duration-500 group-hover:-translate-y-8.5 group-hover:skew-y-0">
                  Start building
                </div>
              </LiquidGlassCard>
            </TimelineContent>
          </article>

          <motion.img
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
            src="/background.png"
            alt=""
            className="absolute md:top-44 sm:top-72 top-90 left-0 w-full -z-10"
          />
        </section>
        <Service />
        <WhyNotUs />
        <Projects />
        <TestimonialsSection />
        <Pricing />
        <People />
        <Faqs />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default HeroSection;
