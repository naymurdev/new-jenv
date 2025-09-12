import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { cn } from "@/lib/utils";
import Heading from "@/components/common/heading";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Free Discovery Call",
    description:
      "Share your vision, get expert insights, and let's see if we're the right match. Zero commitment.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    number: "02",
    title: "Strategy & Planning",
    description:
      "We analyze your business needs and create a comprehensive roadmap tailored to your goals and objectives.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    number: "03",
    title: "Design & Development",
    description:
      "Our team brings your vision to life with cutting-edge design and robust development practices.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    number: "04",
    title: "Testing & Optimization",
    description:
      "Rigorous testing ensures everything works perfectly before launch, with continuous optimization.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    number: "05",
    title: "Launch & Support",
    description:
      "We launch your project and provide ongoing support to ensure continued success and growth.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
  },
];

function Testimonial() {
  const [activeStep, setActiveStep] = useState(1); // Start with no active step


  return (
    <section className="relative z-10 text-center 2xl:px-0 sm:px-10 px-4 2xl:max-w-7xl max-w-6xl mx-auto py-32">
      <Heading badge="Success Stories" title="People Who Actually Paid Us" description="Forget the buzzwords. Here’s what actual clients say about working with JENV"/>
      {/* <article>
        <motion.span
          className="text-center block w-fit mx-auto bg-orange-600 text-white px-5 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Success Stories
        </motion.span>

        <motion.h1
          className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        People Who Actually Paid Us
        </motion.h1>
        <motion.p className="text-lg text-white max-w-2xl mx-auto pt-2 text-center">
          Forget the buzzwords. Here’s what actual clients say about working
          with JENV
        </motion.p>
      </article> */}

      <div className="my-10 border-t-2 border-orange grid grid-cols-2 text-left text-white">
        <div className="grid grid-cols-6 border-r-2 border-orange">
          <div className="col-span-6 flex gap-4 p-5 border-b-2 border-orange">
            <article>
              <span className="text-xl font-semibold">Someone</span>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptatum, laboriosam iure voluptatibus atque
                necessitatibus nemo dolore eum ea hic deserunt
              </p>
            </article>
            <div className="shrink-0 w-72 h-72 bg-neutral-800 rounded-xl"></div>
          </div>
          <div className="col-span-3 border-r-2 border-orange p-4">
            <div className="shrink-0 w-full h-72 bg-neutral-800 rounded-xl"></div>
            <article className="pt-5">
              <span className="text-xl font-semibold">Someone</span>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptatum
              </p>
            </article>
          </div>
          <div className="col-span-3 p-4">
            <div className="shrink-0 w-full h-72 bg-neutral-800 rounded-xl"></div>
            <article className="pt-5">
              <span className="text-xl font-semibold">Someone</span>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptatum
              </p>

              <p className="pt-8">
                something about JENV some something about JENV somesomething
                about JENV some something about JENV some
              </p>
              <p className="pt-2">
                something about JENV some something about JENV somesomething
                about JENV some something about JENV some
              </p>
            </article>
          </div>
        </div>
        <div>
          <div className="p-4">
            <article className="pt-5">
              <span className="text-xl font-semibold">Someone</span>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptatum
              </p>

              <p className="pt-8">
                something about JENV some something about JENV somesomething
                about JENV some something about JENV some
              </p>
              <p className="pt-2">
                something about JENV some something about JENV somesomething
                about JENV some something about JENV some
              </p>
            </article>
            <div className="shrink-0 w-full h-72 bg-neutral-800 rounded-xl mt-5"></div>
          </div>
          <div className="p-4 border-t-2 border-orange grid grid-cols-2 gap-8">
            <div className="shrink-0 w-full h-72 bg-neutral-800 rounded-xl mt-5"></div>
            <article className="pt-5 flex flex-col justify-between">
              <div>
                <span className="text-xl font-semibold">Someone</span>
                <p className="py-2">Lorem ipsum dolor sit amet consectetur.</p>
              </div>

              <p className="pt-2">
                something about JENV some something about JENV somesomething
                about JENV some something about JENV some
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
