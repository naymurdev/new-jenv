"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

export default function HandshakeIconLink({
  hrefLink = "#",
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 2,
  className = "",
}: {
  hrefLink?: string;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}) {
  const svgCtrl = useAnimation();
  const pathsCtrl = useAnimation();

  const handleHover = async () => {
    // shake entire SVG
    svgCtrl.start({
      x: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    // subtle wiggle on paths
    pathsCtrl.start({
      rotate: [0, -3, 3, -2, 2, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <a
      href={hrefLink}
      onMouseEnter={handleHover}
      className="w-fit cursor-pointer inline-block"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        className={cn("",className)}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={svgCtrl}
      >
        {[
          "m11 17 2 2a1 1 0 1 0 3-3",
          "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
          "m21 3 1 11h-2",
          "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
          "M3 4h8",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            animate={pathsCtrl}
            initial={{ rotate: 0 }}
          />
        ))}
      </motion.svg>
    </a>
  );
}
