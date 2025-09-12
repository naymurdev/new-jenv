"use client";

import Heading from "@/components/common/heading";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useMediaQuery } from "@/hooks/use-media-query";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Plus, Quote } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface IdataArr {
  id: number;
  title: string;
  des: string;
  imgSrc: string;
}

const dataArr: IdataArr[] = [
  {
    id: 1,
    title: "Launch in Weeks, Not Quarters",
    des: "Big agencies drag you through “phases.” We ship in sprints. 4–6 weeks later, you’re live and not still waiting for a 200-slide deck.",
    imgSrc: "/launch.png",
    // visual: "🚀 Stopwatch, rocket, or sprinting figure to emphasize speed."
  },
  {
    id: 2,
    title: "Engineering You Can Trust",
    des: "Clean repos. Documented code. Seamless handover. Keep working with us or take it in-house. No lock-in, no spaghetti mess.",
    imgSrc: "/trust.png",
    // visual: "💻 Code brackets, clean repo folder icon, or developer illustration."
  },
  {
    id: 3,
    title: "Radical Transparency",
    des: "WWe say “no” more than “yes.” Because bloat kills MVPs. We protect your core so users get the one thing that matters: a product that works. ",
    imgSrc: "/radical.png",
    // visual: "📊 Open chat bubbles, checklist icon, or magnifying glass for clarity."
  },
];

export default function WhyNotUs() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle keyboard events for Shift key detection (only on mobile)
  useEffect(() => {
    if (!isMobile) return; // Skip on desktop

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        setIsShiftPressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        setIsShiftPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isMobile]);

  // Handle mouse wheel events (only on mobile)
  useEffect(() => {
    if (!isMobile) return; // Skip on desktop

    const handleWheel = (e: WheelEvent) => {
      if (isShiftPressed && containerRef.current?.contains(e.target as Node)) {
        e.preventDefault();

        if (e.deltaY > 0) {
          scrollNext();
        } else {
          scrollPrev();
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isMobile, isShiftPressed, scrollNext, scrollPrev]);

  return (
    <section className="relative z-10 2xl:px-0 sm:px-10 px-4 py-10 2xl:max-w-7xl max-w-6xl mx-auto overflow-x-hidden">
      <Heading
        badge="Why Us"
        title="Why Not Us?"
        description="We’re fast, blunt, and allergic to bullshit. Still not convinced?"
      />
      {isMobile ? (
        <div
          ref={containerRef}
          className={`relative pt-10 ${isShiftPressed ? "cursor-grab" : ""} ${
            isDragging ? "cursor-grabbing" : ""
          }`}
          style={{
            userSelect: isDragging ? "none" : "auto",
            WebkitUserSelect: isDragging ? "none" : "auto",
          }}
        >
          <div
            ref={emblaRef}
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              WebkitTouchCallout: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <div
              className="flex 2xl:gap-8 gap-5 2xl:px-0 px-4 mx-auto"
              onMouseDown={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              {dataArr.map((data) => (
                <div
                  key={data.id}
                  className="flex-[0_0_100%] group min-w-0 sm:flex-[0_0_50%]"
                  style={{
                    userSelect: "none",
                    WebkitUserSelect: "none",
                  }}
                >
                  <CardContent data={data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-8 gap-2 2xl:px-0 px-2 mx-auto pt-10">
          {dataArr.map((data) => (
            <div key={data.id} className="group">
              <CardContent data={data} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

const CardContent = ({ data }: { data: any }) => (
    <div className="relative overflow-hidden transition-all duration-300 2xl:p-4 p-5 2xl:h-[32rem] h-[28rem] shadow-sm rounded-2xl border border-neutral-700">
    <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-background via-orange-800/0 to-orange-900/0 rounded-2xl w-full h-full"/>
      <img
        src={data.imgSrc}
        alt={data.title}
        className="absolute top-16 rounded-xl w-full left-0 h-full object-cover brightness-80 group-hover:brightness-100 "
      />
      <ProgressiveBlur
        className="pointer-events-none absolute rotate-180 -top-0 left-0 h-[30%] w-full rounded-lg"
        blurIntensity={4}
      />
      <article className="relative z-10 flex flex-col h-full">
        <h1 className="2xl:text-3xl lg:text-3xl text-2xl text-white">
          {data.title}
        </h1>
        <p className="2xl:text-base text-sm leading-[120%] text-white/70 group-hover:text-white mt-2">
          {data.des}
        </p>
      </article>
    </div>
);
