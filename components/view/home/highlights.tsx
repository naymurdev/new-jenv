"use client";

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
    title: "Tailored Solutions, Not Templates",
    des: "Big agencies will drag you through endless planning cycles. We work in short, focused sprints so you’re live fast.",
  },
  {
    id: 2,
    title: "Top-Tier Talent",
    des: "The people you meet on day one are the same ones designing, coding, and shipping your product. Less translation, more traction. ",
  },
  {
    id: 3,
    title: "Transparent Communication",
    des: "We say “no” more than “yes.” Why? Because the quickest way to kill an MVP is bloat. We help you protect the core — the one thing users must experience.",
  },
  {
    id: 4,
    title: "Fast Turnaround Time",
    des: "You’ll know what you’re spending, what you’re getting, and when it’s done. ",
  },
  {
    id: 5,
    title: "Full-Cycle Support",
    des: "Clean repos. Documented code. Straightforward handover. If you want to keep building with us, great. If not, you’ll never feel trapped.",
  },
  {
    id: 6,
    title: "Results That Matter",
    des: "We only use AI where it reduces time, cost, or friction for you and your users. Otherwise, we keep it simple.",
  },
  {
    id: 6,
    title: "Results That Matter",
    des: "You’re in the loop daily — shaping, refining, steering. It feels less like hiring a vendor, more like extending your own team.",
  },
];

export default function HightlightSec() {
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

  // Handle keyboard events for Shift key detection
  useEffect(() => {
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
  }, []);

  // Handle mouse wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isShiftPressed && containerRef.current?.contains(e.target as Node)) {
        e.preventDefault();

        if (e.deltaY > 0) {
          // Scroll down = next slide
          scrollNext();
        } else {
          // Scroll up = previous slide
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
  }, [isShiftPressed, scrollNext, scrollPrev]);

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
          className=""
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
                className="flex-[0_0_100%] group min-w-0 sm:flex-[0_0_85%] md:flex-[0_0_30%] lg:flex-[0_0_30%] border-orange border-2 bg-gradient-to-b from-orange via-orange-800/20 to-orange-900/20 backdrop-blur-md rounded-xl"
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}
              >
                <div className="relative  overflow-hidden transition-all duration-300 2xl:p-8 p-6 2xl:h-[32rem] lg:h-[28rem] h-96 shadow-sm flex flex-col justify-between">
                  <p className="2xl:text-xl lg:text-lg text-base leading-[100%] text-neutral-200 mt-2">
                    {data.des}
                  </p>

                  <button className="w-16 h-16 opacity-0 group-hover:opacity-100 -left-10 group-hover:left-0 transition-all duration-500 ease-in-out grid place-content-center">
                    <Plus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
