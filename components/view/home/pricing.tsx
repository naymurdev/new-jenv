import React, { useState } from "react";

function Pricing() {
  return (
    <section className="relative z-10 text-center 2xl:px-0 px-10 2xl:container mx-auto py-32">
      <article>
        <h1
          className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center"
    
        >
          Pricing{" "}
        </h1>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 text-white">
        {/* Card 1 */}
        <div className="bg-[#111] p-8 rounded-3xl flex flex-col justify-between border border-white/10">
          <div>
            <h3 className="text-xl font-light mb-6">
              An idea to your Landing Page for
            </h3>
            <p className="text-5xl font-bold">
              $3000 <span className="text-sm font-normal">(min)</span>
            </p>
            <p className="text-sm text-white/70 mt-6">
              Test market demand and capture leads with a professional landing
              page before investing in a full MVP.
            </p>
          </div>
          <button className="mt-10 bg-white text-black text-sm font-medium py-3 px-6 rounded-full hover:bg-white/90 transition">
            Get started today
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111] p-8 rounded-3xl flex flex-col justify-between border border-white/10">
          <div>
            <h3 className="text-2xl font-apple-garamond mb-4">
              Idea to Landing Page
            </h3>
            <p className="text-sm text-white/70 mb-6">
              From invoices & inventory to back office, our smart systems handle
              your busywork (automating operations & reducing friction) for you.
            </p>
            <p className="text-5xl font-bold">
              $12000 <span className="text-sm font-normal">(min)</span>
            </p>
          </div>
          <button className="mt-10 bg-white text-black text-sm font-medium py-3 px-6 rounded-full hover:bg-white/90 transition">
            Book a call
          </button>
        </div>

        {/* Card 3 (duplicate of Card 2 for now) */}
        <div className="bg-[#111] p-8 rounded-3xl flex flex-col justify-between border border-white/10">
          <div>
            <h3 className="text-2xl font-apple-garamond mb-4">
              Idea to Landing Page
            </h3>
            <p className="text-sm text-white/70 mb-6">
              From invoices & inventory to back office, our smart systems handle
              your busywork (automating operations & reducing friction) for you.
            </p>
            <p className="text-5xl font-bold">
              $12000 <span className="text-sm font-normal">(min)</span>
            </p>
          </div>
          <button className="mt-10 bg-white text-black text-sm font-medium py-3 px-6 rounded-full hover:bg-white/90 transition">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
