"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import { useRef } from "react";

export default function BuildingIconLink({
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
  const buildingCtrl = useAnimation();
  const windowCtrls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const leftSideCtrl = useAnimation();
  const rightSideCtrl = useAnimation();

  const handleHover = async () => {
    buildingCtrl.start({
      y: -2,
      transition: { duration: 0.3, ease: "easeOut" },
    });

    leftSideCtrl.start({
      x: [ -5, 0 ],
      opacity: [0, 1],
      transition: { duration: 0.4, ease: "easeOut" },
    });

    rightSideCtrl.start({
      x: [ 5, 0 ],
      opacity: [0, 1],
      transition: { duration: 0.4, ease: "easeOut" },
    });

    windowCtrls.forEach((ctrl, i) => {
      ctrl.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1],
        transition: { duration: 0.4, ease: "easeOut", delay: 0.1 * i },
      });
    });
  };

  const handleMouseLeave = async () => {
    buildingCtrl.start({ y: 0, transition: { duration: 0.3 } });
    leftSideCtrl.start({ x: 0, opacity: 1 });
    rightSideCtrl.start({ x: 0, opacity: 1 });
    windowCtrls.forEach((ctrl) => ctrl.start({ scale: 1, opacity: 1 }));
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="w-fit cursor-pointer inline-flex gap-1 items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={cn("", className)}
        strokeLinejoin="round"
      >
        {/* Main Building */}
        <motion.path
          d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
          animate={buildingCtrl}
        />
        {/* Left Side */}
        <motion.path
          d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
          animate={leftSideCtrl}
          initial={{ opacity: 1 }}
        />
        {/* Right Side */}
        <motion.path
          d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
          animate={rightSideCtrl}
          initial={{ opacity: 1 }}
        />
        {/* Windows */}
        {[
          "M10 6h4",
          "M10 10h4",
          "M10 14h4",
          "M10 18h4",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            animate={windowCtrls[i]}
            initial={{ scale: 1, opacity: 1 }}
          />
        ))}
      </svg>
      <span>{title}</span>
    </div>
  );
}
