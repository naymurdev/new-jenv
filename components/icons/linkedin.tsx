"use client";

import { motion, useAnimation } from "motion/react";
import { useRef } from "react";

export default function ProfileCardIcon({
  width = 126,
  height = 129,
  stroke = "white",
  strokeWidth = 1.5,
  hrefLink
}: {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  hrefLink: string;
}) {
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  const handleHover = async () => {
    if (hasAnimated.current) controls.set({ pathLength: 0 });
    hasAnimated.current = true;
    await controls.start("animate");
  };

  const pathVariants = {
    animate: {
      pathLength: [0, 1],
      transition: {
        duration: 1.6,
        ease: "easeInOut",
      },
    },
  };

  const d = `M2.93437 129H27.1219V39.5063H2.93437V129ZM15.0281 0C6.96563 0 0.515625 6.45 0.515625 14.5125C0.515625 22.575 6.96563 29.025 15.0281 29.025C23.0906 29.025 29.5406 22.575 29.5406 14.5125C29.5406 6.45 23.0906 0 15.0281 0ZM68.2406 53.2125V39.5063H44.0531V129H68.2406V83.0438C68.2406 57.2438 101.297 55.6313 101.297 83.0438V129H125.484V74.175C125.484 30.6375 79.5281 32.25 68.2406 53.2125Z`;

  return (
    <a href={hrefLink} onMouseEnter={handleHover} className="w-fit cursor-pointer">
      <svg
        width={width}
        height={height}
        viewBox="0 0 126 129"
        className="w-5 h-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={d}
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 1 }}
          animate={controls}
          variants={pathVariants}
        />
      </svg>
    </a>
  );
}
