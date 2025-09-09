"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
interface ICircleAnimationProps {
  cx?: string;
  cy?: string;
  animate?: {
    cx?: number[];
    cy?: number[];
    opacity?: number[];
  };
  r?: string;
  fill?: string;
  f?: string;
  duration?: number;
  transform?: string;
}

const AnimatedBackground = ({
  className,
  circles = [],
}: {
  className?: string;
  circles?: ICircleAnimationProps[];
}) => {
  const defaultCircles: ICircleAnimationProps[] = [
    {
      cx: "564.57",
      cy: "873.453",
      animate: {
        cx: [500, 600, 500],
        cy: [800, 1000, 800],
        opacity: [0.4, 1, 0.4],
      },

      r: "223.121",
      fill: "#FB16EB",
      duration: 8,
      f: "url(#filter0_f_4494_836)",
      transform: "rotate(-180 564.57 873.453)",
    },
    {
      cx: "1308.91",
      cy: "749.397",
      animate: {
        cx: [1250, 1350, 1250],
        cy: [700, 800, 700],
        opacity: [0.4, 1, 0.4],
      },
      r: "278.84",
      fill: "#3152F8",
      f: "url(#filter1_f_4494_836)",
      duration: 6,
      transform: "rotate(180 1308.91 749.397)",
    },
    {
      cx: "863.461",
      cy: "784.455",
      animate: {
        cx: [850, 880, 850],
        cy: [750, 1000, 750],
        opacity: [0.2, 0.8, 0.2],
      },

      r: "181.613",
      fill: "#D1FB00",
      f: "url(#filter3_f_4494_836)",
      duration: 7,
      transform: "rotate(180 863.461 784.455)",
    },
    {
      cx: "-11.2508",
      cy: "817.745",
      animate: {
        cx: [-30, 10, -30],
        cy: [750, 850, 750],
        opacity: [0.3, 1, 0.3],
      },
      r: "270.751",
      fill: "#FB6400",
      f: "url(#filter6_f_4494_836)",
      duration: 9,
      transform: "rotate(-180 -11.2508 817.745)",
    },
  ];

  const mergedCircles = defaultCircles.map((defaultCircle, index) =>
    Object.assign({}, defaultCircle, circles[index]),
  );

  return (
    <svg
      width="1440"
      height="1106"
      viewBox="0 0 1440 1106"
      className={cn("absolute top-0 left-0 w-full h-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...mergedCircles, ...mergedCircles].map((circle, index) => (
        <motion.g key={index} filter={circle.f}>
          <motion.circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            transform={circle.transform}
            fill={circle.fill}
            animate={circle.animate}
            transition={{
              duration: circle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.g>
      ))}

      <defs>
        <filter
          id="filter0_f_4494_836"
          x="-154.779"
          y="154.104"
          width="1438.7"
          height="1438.7"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="248.114" />
        </filter>
        <filter
          id="filter1_f_4494_836"
          x="533.846"
          y="-25.671"
          width="1550.14"
          height="1550.14"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="248.114" />
        </filter>
        <filter
          id="filter3_f_4494_836"
          x="185.62"
          y="106.614"
          width="1355.68"
          height="1355.68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="248.114" />
        </filter>
        <filter
          id="filter6_f_4494_836"
          x="-612.819"
          y="216.176"
          width="1203.14"
          height="1203.14"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="165.409" />
        </filter>
      </defs>
    </svg>
  );
};

export default AnimatedBackground;