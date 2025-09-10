"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Plus, Quote } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface IdataArr {
  id: number;
  title: string;
  des: string;
}

const dataArr: IdataArr[] = [
  {
    id: 1,
    title: "Launch in Weeks, Not Months",
    des: "Big agencies will drag you through endless planning cycles. We work in short, focused sprints so you’re live in 4–6 weeks, not still waiting for slides.",
    // visual: "🚀 Stopwatch, rocket, or sprinting figure to emphasize speed."
  },
  {
    id: 2,
    title: "Engineering You Can Trust",
    des: "Clean repos. Documented code. Seamless handover. Work with us long-term or take it in-house. You’ll never feel locked in.",
    // visual: "💻 Code brackets, clean repo folder icon, or developer illustration."
  },
  {
    id: 3,
    title: "Radical Transparency",
    des: "We say “no” more than “yes” because the quickest way to kill an MVP is bloat. We protect your core so users get the one thing that matters most.",
    // visual: "📊 Open chat bubbles, checklist icon, or magnifying glass for clarity."
  }
];


export default function HightlightSec() {
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
    <section className="relative z-10 2xl:px-0 px-10 py-10 xl:container mx-auto">
      <article className="py-20">
        <span className="text-center block w-fit bg-orange text-white px-5 py-2 rounded-full">
          Highlights
        </span>
        <div className="flex gap-2 justify-between py-4">
          <h1 className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center">
            Why work with us?
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto pt-8">
            We tactically expand your brand into the digital world. Elaborate on
            the points for easy understanding.
          </p>
        </div>
      </article>

      {isMobile ? (
        <div
          ref={containerRef}
          className={`relative ${isShiftPressed ? "cursor-grab" : ""} ${
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
                  className="flex-[0_0_100%] group min-w-0 sm:flex-[0_0_85%]"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-8 gap-2 2xl:px-0 px-2 mx-auto">
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
  <div className="border-orange border-2 bg-gradient-to-b from-orange via-orange-800/20 to-orange-900/20 backdrop-blur-md rounded-xl">
    <div className="relative overflow-hidden transition-all duration-300 2xl:p-4 p-5 2xl:h-[32rem] lg:h-[28rem] h-96 shadow-sm flex flex-col justify-between">
      <h1 className="2xl:text-3xl lg:text-3xl text-2xl font-medium text-neutral-200">{data.title}</h1>
      <p className="2xl:text-lg lg:text-base text-sm leading-[120%] text-neutral-200 mt-2">
        {data.des}
      </p>
      {/* <button className="w-16 h-16 opacity-0 group-hover:opacity-100 -left-10 group-hover:left-0 transition-all duration-500 ease-in-out grid place-content-center">
        <Plus />
      </button> */}
    </div>
  </div>
);
