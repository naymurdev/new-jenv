import React, { useState } from "react";

function Pricing() {
  return (
    <section className="relative z-10 text-center 2xl:px-0 px-10 2xl:container mx-auto py-32">
      <article>
        <h1 className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center">
          Pricing{" "}
        </h1>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 text-white">
        {/* Card 1 */}
        <div className="bg-orange p-4 rounded-3xl flex flex-col justify-between border border-white/10">
          <div className="bg-orange-700 p-6 rounded-2xl min-h-96 flex flex-col justify-between">
            <div className="w-full flex justify-between">
              <svg
                width="76"
                height="74"
                viewBox="0 0 76 74"
                className="w-16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 23.5L12 10L1 28.5L15.5 37.5M38 23.5L64 10L74.5 28.5L60 37.5M38 23.5V37.5M15.5 37.5L1 46L12 65L26.5 56.5M15.5 37.5L26 44.5M15.5 37.5L26.5 30.5L27 1H48.5V30L60 37.5M26.5 56.5L26 44.5M26.5 56.5V73.5H48.5V44.5M26.5 56.5L37.5 50L63.5 65L74.5 46L60 37.5M26 44.5L38 37.5M60 37.5L48.5 44.5M38 37.5L48.5 44.5"
                  stroke="white"
                />
              </svg>

              <p className="text-sm ">Landing Page Test</p>
            </div>
            <div>
              <div className="flex items-end gap-2 w-full justify-start">
                <span className="text-3xl text-white/70">starts at </span>
                <p className="text-6xl font-medium">$3000</p>
              </div>
              <h1 className="text-3xl text-white/70 text-left">
                Validate interest before a full build.
              </h1>
            </div>
          </div>
          <div className="pt-6 pb-3 w-fit">
            <button className="bg-white w-fit text-black font-medium py-3 px-5 cursor-pointer rounded-full hover:shadow-lg shadow-white border-b-4 border-neutral-300 hover:border-white transition">
              Get started today
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-neutral-950 p-4 rounded-3xl text-white flex flex-col gap-4 justify-between border border-white/10">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl min-h-96 flex flex-col justify-between">
            <div className="w-full flex justify-between">
              <svg
                width="93"
                height="95"
                viewBox="0 0 93 95"
                className="w-16 stroke-white"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="92" height="94" />
                <rect
                  x="45.3208"
                  y="6.07006"
                  width="57.8478"
                  height="59.1133"
                  transform="rotate(43.259 45.3208 6.07006)"
                />
                <rect
                  x="65.5"
                  y="27.5"
                  width="40"
                  height="40"
                  transform="rotate(90 65.5 27.5)"
                />
                <rect
                  x="56.5"
                  y="37.5"
                  width="20"
                  height="20"
                  transform="rotate(90 56.5 37.5)"
                />
                <rect
                  x="66.4871"
                  y="46.3952"
                  width="28.1807"
                  height="28.1807"
                  transform="rotate(131.544 66.4871 46.3952)"
                />
              </svg>

              <p className="text-sm ">MVP Sprint</p>
            </div>
            <div>
              <div className="flex items-end gap-2 w-full justify-start">
                <span className="text-3xl text-white/70">starts at </span>
                <p className="text-6xl font-medium">$12000</p>
              </div>
              <h1 className="text-3xl text-white text-left">
                Core product in 2–6 weeks.
              </h1>
            </div>
          </div>
          <div className="pt-6 pb-3 px-1 w-fit">
            <button className="bg-white w-fit text-black font-medium py-3 px-5 cursor-pointer rounded-full hover:shadow-lg shadow-white border-b-4 border-neutral-300 hover:border-white transition">
              Get started today
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-neutral-950 p-4 rounded-3xl text-white flex flex-col gap-4 justify-between border border-white/10">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl min-h-96 flex flex-col justify-between">
            <div className="w-full flex justify-between">
              <svg
                width="77"
                height="74"
                viewBox="0 0 77 74"
                className="w-16 stroke-white"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.5 73H55M22.5 73L38.5 44.5L55 73M22.5 73L19.5691 69.3875M55 73L57.4706 70M38.5 1L8.5 15L1 46.5L19.5 69.3023M39.5 1L68 15L76 47.5L57.4706 70M57.5 70L65 41.5L38.5 22.5L12 42L19.5 69.3023M19.5 69.3023L19.5691 69.3875M19.5691 69.3875L5 44.5L21.5 16H54.5L71.5 44.5L57.4706 70" />
              </svg>

              <p className="text-sm ">Pilot Program</p>
            </div>
            <div>
              <div className="flex items-end gap-2 w-full justify-start">
                <span className="text-3xl text-white/70">starts at </span>
                <p className="text-6xl font-medium">$30000</p>
              </div>
              <h1 className="text-2xl text-left pt-1">
                Full MVP + integrations + 30-day pilot.
              </h1>
            </div>
          </div>
          <div className="pt-6 pb-3 px-1 w-fit">
            <button className="bg-white w-fit text-black font-medium py-3 px-5 cursor-pointer rounded-full hover:shadow-lg shadow-white border-b-4 border-neutral-300 hover:border-white transition">
              Get started today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
