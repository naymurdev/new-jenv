import { motion, useInView, HTMLMotionProps } from "motion/react";
import React from "react";

type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children: React.ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: React.RefObject<HTMLElement | null>;
  as?: T;
} & HTMLMotionProps<T>;

export const TimelineContent = <T extends keyof HTMLElementTagNameMap = "div">({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  ...props
}: TimelineContentProps<T>) => {
  const sequenceVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 0,
      opacity: 0,
    },
  };

  const isInView = useInView(timelineRef, {
    once: true,
  });

  const MotionComponent = motion[as || "div"] as React.ElementType;

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
