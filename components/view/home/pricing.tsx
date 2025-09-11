"use client";
import React from "react";
import { motion } from "motion/react";
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
        className="absolute 2xl:top-32 left-0 w-full rotate-180 skew-12 scale-110 -z-10"
      />
      <section className="relative z-10 text-center 2xl:px-0 px-10 2xl:container mx-auto py-32">
        <article>
          <span className="text-center block w-fit mx-auto bg-orange text-white px-5 py-2 rounded-full">
            Pricing
          </span>
          <h1 className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl leading-[120%] text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center">
            Stop Guessing. Here’s the Price.
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto pt-2 text-center">
            Transparent pricing. No hidden fees. Just the cost of getting your
            idea out of your head and into the world.
          </p>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 text-white max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-orange p-4 rounded-3xl flex flex-col justify-between border border-white/10">
            <div className="group bg-orange-700 p-6 rounded-2xl min-h-56 flex flex-col justify-between">
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
            <h1 className="text-xl pt-1 text-white/80 leading-[130%] text-left">
              A cheap way to find out if anyone even wants your idea before you
              waste six figures.
            </h1>
            <button className="bg-white mb-1 w-full text-black font-medium py-3 px-5 cursor-pointer rounded-xl hover:shadow-lg shadow-white border-b-4 border-neutral-300 hover:border-white transition">
              Get started today
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-950 p-4 rounded-3xl text-white flex flex-col gap-4 justify-between border border-white/10">
            <div className="group bg-background border border-neutral-800 p-6 rounded-2xl min-h-56 flex flex-col justify-between">
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
            <h1 className="text-xl text-white/80 leading-[130%] text-left pt-1">
              Core product in 2–6 weeks. Something you can actually show
              investors instead of explaining with your hands.
            </h1>
            <button className="bg-orange w-full text-white font-medium py-3 px-5 mb-1 cursor-pointer rounded-xl hover:shadow-lg shadow-orange border-b-4 border-orange-700 hover:border-orange transition">
              Get started today
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-neutral-950 p-4 rounded-3xl text-white flex flex-col gap-4 justify-between border border-white/10">
            <div className="group bg-background border border-neutral-800 p-6 rounded-2xl min-h-56 flex flex-col justify-between">
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
            <h1 className="text-xl text-white/80 leading-[130%] text-left pt-1">
              Full MVP + integrations + a 30-day pilot. Basically everything you
              need except the excuses.
            </h1>
            <button className="bg-orange w-full text-white font-medium py-3 px-5 mb-1 cursor-pointer rounded-xl hover:shadow-lg shadow-orange border-b-4 border-orange-700 hover:border-orange transition">
              Get started today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
