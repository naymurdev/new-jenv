//@ts-nocheck
"use client";

import { motion, useAnimation } from "motion/react";
import { useRef } from "react";

export default function XStreamlineIcon({
  width = 24,
  height = 24,
  fill = "#fff",
  hrefLink
}: {
  width?: number;
  height?: number;
  fill?: string;
  hrefLink: string;
}) {
  const control = useAnimation();

  const handleHover = async () => {
    await control.start({
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    });
  };

  return (
    <a href={hrefLink} target="_blank" onMouseEnter={handleHover} className="w-fit">
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        fill="none"
      >
        <desc>
          X Streamline Icon: https://streamlinehq.com
        </desc>
        <title>X</title>
        <motion.path
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          fill={fill}
          animate={control}
          initial={{ scale: 1, rotate: 0 }}
          transformOrigin="center"
        />
      </svg>
    </a>
  );
}
