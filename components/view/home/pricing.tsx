"use client";
import React from "react";
import { motion } from "motion/react";
import Heading from "@/components/common/heading";
import { Check, CheckCheck } from "lucide-react";
import { TimelineContent } from "@/components/ui/timeline-animation";
function Pricing() {
  const baseStroke =
    "stroke-white [vector-effect:non-scaling-stroke] transition-none group-hover:opacity-0";
  const overlayStroke =
    "stroke-white [vector-effect:non-scaling-stroke] [stroke-dasharray:360] [stroke-dashoffset:360] transition-none group-hover:[stroke-dashoffset:0] group-hover:transition-[stroke-dashoffset] group-hover:duration-[2000ms] group-hover:ease-in-out";

  return (
    <div className="relative">
      <motion.img
        // initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        // animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        // transition={{ duration: 1, delay: 1 }}
        src="/rotate-bg.png"
        alt=""
        className="absolute 2xl:top-32 md:top-16 top-44 left-0 w-full rotate-180 skew-12 scale-110 -z-10"
      />
      <section className="relative z-10 text-center 2xl:px-0 sm:px-10 px-4 2xl:max-w-7xl max-w-6xl mx-auto md:py-32 pt-28">
        <Heading
          badge="Pricing"
          title="Stop Guessing. Here’s the Price."
          description="Transparent pricing. No hidden fees. Just the cost of getting your idea out of your head and into the world."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-8 gap-4 py-10 text-white w-full">
          {/* Card 1 */}
          <TimelineContent
            animationNum={1}
            className="bg-neutral-950 group p-4 rounded-3xl text-white flex flex-col gap-4 justify-between border border-white/10"
          >
            <div className="bg-background border border-neutral-800 p-6 rounded-2xl min-h-48 flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <svg
                  width="76"
                  height="74"
                  viewBox="0 0 76 74"
                  className="w-16 h-16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Base (visible) */}
                  <path
                    className={baseStroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M38 23.5L12 10L1 28.5L15.5 37.5M38 23.5L64 10L74.5 28.5L60 37.5M38 23.5V37.5M15.5 37.5L1 46L12 65L26.5 56.5M15.5 37.5L26 44.5M15.5 37.5L26.5 30.5L27 1H48.5V30L60 37.5M26.5 56.5L26 44.5M26.5 56.5V73.5H48.5V44.5M26.5 56.5L37.5 50L63.5 65L74.5 46L60 37.5M26 44.5L38 37.5M60 37.5L48.5 44.5M38 37.5L48.5 44.5"
                  />
                  {/* Overlay (animates every hover) */}
                  <path
                    className={overlayStroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M38 23.5L12 10L1 28.5L15.5 37.5M38 23.5L64 10L74.5 28.5L60 37.5M38 23.5V37.5M15.5 37.5L1 46L12 65L26.5 56.5M15.5 37.5L26 44.5M15.5 37.5L26.5 30.5L27 1H48.5V30L60 37.5M26.5 56.5L26 44.5M26.5 56.5V73.5H48.5V44.5M26.5 56.5L37.5 50L63.5 65L74.5 46L60 37.5M26 44.5L38 37.5M60 37.5L48.5 44.5M38 37.5L48.5 44.5"
                  />
                </svg>
                <p className="text-sm">Landing Page Test</p>
              </div>
              <div>
                <div className="flex items-end gap-2 w-full justify-start">
                  <span className="text-2xl text-white/70">starts at </span>
                  <p className="text-4xl font-medium">$3000</p>
                </div>
              </div>
            </div>

            <button className="bg-orange w-full text-white font-medium py-3 px-5 cursor-pointer rounded-xl hover:shadow-lg shadow-orange border-b-4 border-orange-700 hover:border-orange transition">
              Get started today
            </button>
            <h1 className="text-xl pt-1 text-white/80 leading-[130%] text-left px-2">
              A cheap way to find out if anyone even wants your idea before you
              waste six figures.
            </h1>
            <ul className="text-left grid gap-2 px-2 pb-1">
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Market & competitor research
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Conversion-focused copywriting
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Wireframes that guide design
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Fully responsive development
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Built in Webflow or Framer
              </li>
            </ul>
          </TimelineContent>

          {/* Card 2 */}
          <TimelineContent
            animationNum={2}
            className="bg-orange group p-4 rounded-3xl flex flex-col gap-4 justify-between border border-white/10"
          >
            <div className="bg-orange-700 p-6 rounded-2xl min-h-48 flex flex-col justify-between ">
              <div className="w-full flex justify-between">
                <svg
                  width="93"
                  height="95"
                  viewBox="0 0 93 95"
                  className="w-16 h-16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Each rect duplicated: base + overlay */}
                  <rect
                    x="0.5"
                    y="0.5"
                    width="92"
                    height="94"
                    className={baseStroke}
                    strokeWidth="2"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="92"
                    height="94"
                    className={overlayStroke}
                    strokeWidth="2"
                  />

                  <rect
                    x="45.3208"
                    y="6.07006"
                    width="57.8478"
                    height="59.1133"
                    transform="rotate(43.259 45.3208 6.07006)"
                    className={baseStroke}
                    strokeWidth="2"
                  />
                  <rect
                    x="45.3208"
                    y="6.07006"
                    width="57.8478"
                    height="59.1133"
                    transform="rotate(43.259 45.3208 6.07006)"
                    className={`${overlayStroke} group-hover:delay-150`}
                    strokeWidth="2"
                  />

                  <rect
                    x="65.5"
                    y="27.5"
                    width="40"
                    height="40"
                    transform="rotate(90 65.5 27.5)"
                    className={baseStroke}
                    strokeWidth="2"
                  />
                  <rect
                    x="65.5"
                    y="27.5"
                    width="40"
                    height="40"
                    transform="rotate(90 65.5 27.5)"
                    className={`${overlayStroke} group-hover:delay-300`}
                    strokeWidth="2"
                  />

                  <rect
                    x="56.5"
                    y="37.5"
                    width="20"
                    height="20"
                    transform="rotate(90 56.5 37.5)"
                    className={baseStroke}
                    strokeWidth="2"
                  />
                  <rect
                    x="56.5"
                    y="37.5"
                    width="20"
                    height="20"
                    transform="rotate(90 56.5 37.5)"
                    className={`${overlayStroke} group-hover:delay-500`}
                    strokeWidth="2"
                  />

                  <rect
                    x="66.4871"
                    y="46.3952"
                    width="28.1807"
                    height="28.1807"
                    transform="rotate(131.544 66.4871 46.3952)"
                    className={baseStroke}
                    strokeWidth="2"
                  />
                  <rect
                    x="66.4871"
                    y="46.3952"
                    width="28.1807"
                    height="28.1807"
                    transform="rotate(131.544 66.4871 46.3952)"
                    className={`${overlayStroke} group-hover:delay-700`}
                    strokeWidth="2"
                  />
                </svg>
                <p className="text-sm">MVP Sprint</p>
              </div>
              <div>
                <div className="flex items-end gap-2 w-full justify-start">
                  <span className="text-2xl text-white/70">starts at </span>
                  <p className="text-4xl font-medium">$12000</p>
                </div>
              </div>
            </div>

            <button className="bg-white w-full text-black font-medium py-3 px-5 cursor-pointer rounded-xl hover:shadow-lg shadow-white border-b-4 border-neutral-300 hover:border-white transition">
              Get started today
            </button>

            <h1 className="text-xl text-white/80 leading-[130%] text-left pt-0 px-2">
              Core product in 2–6 weeks. Something you can actually show
              investors instead of explaining with your hands.
            </h1>
            <ul className="text-left px-2 pb-1">
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                UX discovery & user flows
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Custom UI + product design
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Lean MVP development
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Clean, scalable codebase
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                1-month launch support
              </li>
            </ul>
          </TimelineContent>

          {/* Card 3 */}
          <TimelineContent
            animationNum={3}
            className="bg-neutral-950 group p-4 rounded-3xl text-white flex flex-col gap-4 justify-between border border-white/10"
          >
            <div className="bg-background border border-neutral-800 p-6 rounded-2xl min-h-48 flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <svg
                  width="77"
                  height="74"
                  viewBox="0 0 77 74"
                  className="w-16 h-16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Base */}
                  <path
                    className={baseStroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22.5 73H55M22.5 73L38.5 44.5L55 73M22.5 73L19.5691 69.3875M55 73L57.4706 70M38.5 1L8.5 15L1 46.5L19.5 69.3023M39.5 1L68 15L76 47.5L57.4706 70M57.5 70L65 41.5L38.5 22.5L12 42L19.5 69.3023M19.5 69.3023L19.5691 69.3875M19.5691 69.3875L5 44.5L21.5 16H54.5L71.5 44.5L57.4706 70"
                  />
                  {/* Overlay */}
                  <path
                    className={overlayStroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22.5 73H55M22.5 73L38.5 44.5L55 73M22.5 73L19.5691 69.3875M55 73L57.4706 70M38.5 1L8.5 15L1 46.5L19.5 69.3023M39.5 1L68 15L76 47.5L57.4706 70M57.5 70L65 41.5L38.5 22.5L12 42L19.5 69.3023M19.5 69.3023L19.5691 69.3875M19.5691 69.3875L5 44.5L21.5 16H54.5L71.5 44.5L57.4706 70"
                  />
                </svg>
                <p className="text-sm">Pilot Program</p>
              </div>
              <div>
                <div className="flex items-end gap-2 w-full justify-start">
                  <span className="text-2xl text-white/70">starts at </span>
                  <p className="text-4xl font-medium">$30000</p>
                </div>
              </div>
            </div>

            <button className="bg-orange w-full text-white font-medium py-3 px-5 cursor-pointer rounded-xl hover:shadow-lg shadow-orange border-b-4 border-orange-700 hover:border-orange transition">
              Get started today
            </button>
            <h1 className="text-xl text-white/80 leading-[130%] text-left pt-1 px-2">
              Full MVP + integrations + a 30-day pilot. Basically everything you
              need except the excuses.
            </h1>
            <ul className="text-left px-2 pb-1">
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                End-to-end MVP build
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Payments & automation setup
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Cloud deployment with monitoring
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                Scalable database architecture
              </li>
              <li className="flex gap-2 items-center">
                <CheckCheck size={16} />
                30-day pilot + iterations
              </li>
            </ul>
          </TimelineContent>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
