"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, Phone, Plus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/linear-dialog";
import { cn } from "@/lib/utils";
import Heading from "@/components/common/heading";
const items = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "SellMyPlot",
    description: "Built a full-stack real estate platform with secure login, verified property credentials, escrow-ready payment gateway, and an audit trail across every step.",
    tags: ["Sunrise", "Mountains", "Golden", "Scenic", "Inspiring"],
    technology: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    websiteUrl: "www.ui-layouts.com",
    className: "col-span-4 h-80", // Top left
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1702468292597-6b8874fbd2fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "OceanCharge",
    description: `Cloud SaaS platform that ingests device
telemetry (via MQTT), normalises the data, and
streams it into multilingual dashboards for live
monitoring and analytics.`,
    tags: ["Misty", "Path", "Mysterious", "Serene", "Rugged"],
    technology: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    websiteUrl: "www.ui-layouts.com",
    className: "col-span-5 h-80", // Top middle (taller)
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Salvi-D",
    description: `Affordable IoT-based sensors paired with ML
inference models, delivering preventive
screenings with a patient-friendly mobile/
clinic interface.`,
    tags: ["Pathway", "Adventure", "Peaks", "Challenging", "Breathtaking"],
    technology: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    websiteUrl: "www.ui-layouts.com",
    className: "col-span-3 h-80", // Top right
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1642132652935-d750e2014719?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Inspire Series",
    description:
      "An all-in-one platform that brings every channel into one inbox, with AI to triage messages and built-in tools for events and approvals. Teams can now manage communication and activities from a single place.",
    tags: ["Sunrise", "Mountains", "Golden", "Scenic", "Inspiring"],
    technology: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    websiteUrl: "www.ui-layouts.com",
    className: "col-span-5 h-80", // Middle left (with gap)
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ChatBestie",
    description: `A multilingual, always-on chatbot offering private first-line support, seamless therapist booking, and anonymized analytics for organizations to track wellbeing trends while preserving privacy.`,
    tags: ["Misty", "Path", "Mysterious", "Serene", "Rugged"],
    technology: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    websiteUrl: "www.ui-layouts.com",
    className: "col-span-4 h-80", // Middle right (with gap)
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1648134859179-ed0c98f54519?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "WaveRally",
    description: `Wave Rally is all about fun while racing your mates for glory. It's an exhilarating experience where speed, skill, and strategy come together. The ultimate fun wave slalom race with a twist at the one of the world’s best locations, Coronation Beach, Geraldton.`,
    tags: ["Pathway", "Adventure", "Peaks", "Challenging", "Breathtaking"],
    technology: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    websiteUrl: "https://www.waverally.org",
    className: "col-span-3 h-80", // Bottom center (with gaps on sides)
  },
];
function Projects() {
  return (
    <div className="relative ">
      <motion.img
        // initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        // animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        // transition={{ duration: 1, delay: 1 }}
        src="/rotate-bg.png"
        alt=""
        className="absolute 2xl:top-32 left-0 w-full rotate-180 skew-12 scale-110 -z-10"
      />
      <section className="relative z-10 text-center 2xl:px-0 px-10 2xl:container max-w-6xl mx-auto py-32">
        <Heading
          badge="Our Work"
          title="Proof We Don’t Just Talk"
          description="A gallery of shipped products. No fluff. No fake case studies. Just
            real builds solving real problems."
        />

        <div className="grid grid-cols-12 gap-4 items-end py-8 ">
          {items.map((item, i) => {
            return (
              <Dialog
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  mass: 0.8,
                  bounce: 0.02,
                }}
              >
                <DialogTrigger
                  style={{
                    borderRadius: "12px",
                  }}
                  className={cn(
                    "flex w-full flex-col overflow-hidden  border border-neutral-700  bg-black hover:bg-neutral-900",
                    item.className
                  )}
                >
                  <DialogImage
                    // @ts-ignore
                    src={item.url}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="flex flex-grow flex-row items-end justify-between p-3 absolute bottom-0 w-full">
                    <div>
                      <DialogTitle className="text-xl dark:text-zinc-50">
                        {item.title}
                      </DialogTitle>
                    </div>
                    <button className="absolute bottom-2 right-2 p-2 bg-orange text-white rounded-xl hover:bg-orange-700">
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </DialogTrigger>
                <DialogContainer className="grid place-items-center p-0">
                  <DialogContent
                    style={{
                      borderRadius: "24px",
                    }}
                    className="relative p-4 flex mx-auto bg-black lg:w-[62rem] w-[80%] h-[55vh]"
                  >
                    <div className="h-full w-[55%] p-4 shrink-0">
                      <DialogImage
                        src={item.url}
                        alt={item.title}
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                    <div className="p-4 mt-auto">
                      <h1 className="2xl:text-5xl text-4xl text-zinc-50">
                        {item.title}
                      </h1>
                      <div className="flex flex-wrap gap-1 pt-2">
                          {item?.technology?.map((tech, i) => {
                            return (
                              <span
                                key={i}
                                className="text-sm px-2 py-0.5 rounded-full bg-neutral-50 border text-black"
                              >
                                {tech} 
                              </span>
                            );
                          })}
                        </div>
                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: -40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: -50 },
                        }}
                        className="pt-4"
                      >
                        <p className="mt-3 text-zinc-300">
                          {item.description}
                        </p>
                       
                        <div className="flex flex-wrap gap-1 pt-2">
                          {item?.tags?.map((tag, i) => {
                            return (
                              <span
                                key={i}
                                className="text-sm px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-white"
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                        <a
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block relative py-2 w-full px-3 mt-7 bg-orange rounded-lg text-white"
                        >
                          <span className="relative inline-flex overflow-hidden w-full">
                            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[115%] group-hover:skew-y-12">
                              View Project
                            </div>
                            <div className="absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                              {item.websiteUrl}
                            </div>
                          </span>
                          <ArrowDownRight className="absolute right-2 top-1/2 -translate-y-1/2 rotate-260" />
                        </a>
                      </DialogDescription>
                    </div>
                    <DialogClose className="bg-orange p-4 rounded-xl hover:bg-orange-500 cursor-pointer" />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
