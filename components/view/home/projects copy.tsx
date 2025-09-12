"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Plus } from "lucide-react";
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
const items = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1445034268571-0c6be767131b?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Accordion",
    description:
      "Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ",
    tags: ["Sunrise", "Mountains", "Golden", "Scenic", "Inspiring"],
    className: "col-span-3 h-96", // Top left
  },
  {
    id: 2,
    url: "/ui-layouts.jpg",
    title: "Globe Section",
    description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
    tags: ["Misty", "Path", "Mysterious", "Serene", "Rugged"],
    className: "col-span-6 h-96", // Top middle (taller)
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1757377125320-cf0d54c0c6e8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image Mouse Trail",
    description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
    tags: ["Pathway", "Adventure", "Peaks", "Challenging", "Breathtaking"],
    className: "col-span-3 h-96", // Top right
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1445034268571-0c6be767131b?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Accordion",
    description:
      "Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ",
    tags: ["Sunrise", "Mountains", "Golden", "Scenic", "Inspiring"],
    className: "col-start-2 col-span-5 h-96", // Middle left (with gap)
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1550336403-3b8b709f695d?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Globe Section",
    description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
    tags: ["Misty", "Path", "Mysterious", "Serene", "Rugged"],
    className: "col-start-7 col-span-5 h-96", // Middle right (with gap)
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1757377125320-cf0d54c0c6e8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image Mouse Trail",
    description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
    tags: ["Pathway", "Adventure", "Peaks", "Challenging", "Breathtaking"],
    className: "col-start-4 col-span-6 h-96", // Bottom center (with gaps on sides)
  },
];
function Projects() {
  return (
    <section
      className="relative z-10 text-center 2xl:px-0 sm:px-10 px-4 2xl:max-w-7xl max-w-6xl mx-auto py-32"
      drawer-wrapper=""
    >
      <article className="space-y-6">
        <motion.span
          className="text-center block w-fit mx-auto bg-orange-600 text-white px-5 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.span>

        <motion.h1
          className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovation in Action
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-center text-lg md:text-xl text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          A showcase of projects that go beyond code, solutions crafted to
          solve real challenges, transform industries, and create lasting
          impact.
        </motion.p>
      </article>

      <div className="grid grid-cols-12 gap-4 items-end py-8">
        {items.map((item, i) => {
          return (
            <>
              <Dialog
                transition={{
                  type: 'spring',
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
                <DialogContainer className="grid place-items-center ">
                  <DialogContent
                    style={{
                      borderRadius: "24px",
                    }}
                    className=" relative flex mx-auto flex-col border-8 border-background bg-black lg:w-[900px] w-[80%]  "
                  >
                    <DialogImage
                      src={item.url}
                      alt=""
                      className="h-full  object-contain w-[60%] mx-auto"
                    />
                    <div className="p-6">
                      <DialogTitle className="text-5xl dark:text-zinc-50">
                        {item.title}
                      </DialogTitle>

                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: -40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: -50 },
                        }}
                      >
                        <p className="mt-2  dark:text-zinc-500">
                          {item.description}
                        </p>
                      </DialogDescription>
                    </div>
                    <DialogClose className="bg-orange p-4 rounded-xl hover:bg-orange-500 cursor-pointer" />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
