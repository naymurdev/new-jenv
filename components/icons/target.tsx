"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import { useRef } from "react";

export default function TargetIconLink({
  hrefLink = "#",
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 2,
  className = "",
  title
}: {
  hrefLink?: string;
  width?: number;
  height?: number;
  stroke?: string;  
  strokeWidth?: number; 
  className?: string;
  title?: string;
}) {
  const outerCtrl = useAnimation();
  const middleCtrl = useAnimation();
  const innerCtrl = useAnimation();

  const handleHover = async () => {
    outerCtrl.start({
      scale: [1, 1.15, 1],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    middleCtrl.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.1 },
    });
    innerCtrl.start({
      scale: [1, 1.25, 1],
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
    });
  };

  return (
    <div
      onMouseEnter={handleHover}
      className="w-fit cursor-pointer inline-flex gap-1 items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        className={cn("", className)}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          animate={outerCtrl}
          initial={{ scale: 1 }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="6"
          animate={middleCtrl}
          initial={{ scale: 1 }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="2"
          animate={innerCtrl}
          initial={{ scale: 1 }}
        />
      </svg>
      <span>{title}</span>
    </div>
  );
}
