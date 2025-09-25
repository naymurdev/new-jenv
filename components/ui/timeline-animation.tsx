"use client";

import { motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface TimelineContentProps<T extends keyof HTMLElementTagNameMap>
  extends MotionProps {
  children: React.ReactNode;
  className?: string;
  animationNum: number;
  as?: T;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
}

export function TimelineContent<T extends keyof HTMLElementTagNameMap>({
  children,
  className,
  animationNum,
  as,
  viewport = { amount: 0.3, margin: "0px 0px -120px 0px", once: true },
  ...props
}: TimelineContentProps<T>) {
  const MotionComponent = motion[as || "div"] as React.ElementType;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: animationNum * 0.2,
        ease: "easeOut",
      }}
      viewport={viewport}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
