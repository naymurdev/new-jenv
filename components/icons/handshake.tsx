"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

export default function HandshakeIconLink({
  hrefLink = "#",
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 2,
  className,
  title
}: {
  hrefLink?: string;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  title?:string
}) {
  const leftHandCtrl = useAnimation();
  const rightHandCtrl = useAnimation();

  const handleHover = () => {
    leftHandCtrl.start({
      x: [ -16, 0, -2, 0 ],
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        mass: 0.5,
      },
    });
    rightHandCtrl.start({
      x: [ 16, 0, 2, 0 ],
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        mass: 0.5,
      },
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
        className={cn("", className)}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Right hand */}
        <motion.path
          d="m11 17 2 2a1 1 0 1 0 3-3"
          animate={rightHandCtrl}
          initial={{ x: 0 }}
        />
        <motion.path
          d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
          animate={rightHandCtrl}
          initial={{ x: 0 }}
        />
        <motion.path
          d="m21 3 1 11h-2"
          animate={rightHandCtrl}
          initial={{ x: 0 }}
        />

        {/* Left hand */}
        <motion.path
          d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
          animate={leftHandCtrl}
          initial={{ x: 0 }}
        />
        <motion.path
          d="M3 4h8"
          animate={leftHandCtrl}
          initial={{ x: 0 }}
        />
      </svg>
      <span>{title}</span>
    </div>
  );
}
