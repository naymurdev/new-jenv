"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "motion/react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Using spring for smoother movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Use springs for size and scale animations
  const dotScale = useSpring(1, {
    damping: 25,
    stiffness: 200,
    mass: 0.5,
  });

  const trailScale = useSpring(0, {
    damping: 25,
    stiffness: 200,
    mass: 0.5,
  });

  useEffect(() => {
    let prevX = 0;
    let prevY = 0;
    let frameId: number;

    const smoothMouseMove = (e: MouseEvent) => {
      const targetX = e.clientX;
      const targetY = e.clientY;

      const updatePosition = () => {
        const lerp = (start: number, end: number, factor: number) => {
          return start + (end - start) * factor;
        };

        prevX = lerp(prevX, targetX, 0.2);
        prevY = lerp(prevY, targetY, 0.2);

        mouseX.set(prevX);
        mouseY.set(prevY);

        frameId = requestAnimationFrame(updatePosition);
      };

      updatePosition();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("[data-cursor-active]")
      ) {
        dotScale.set(0.6);
        trailScale.set(1);
      }
    };

    const handleMouseOut = () => {
      dotScale.set(1);
      trailScale.set(0);
    };

    window.addEventListener("mousemove", smoothMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", smoothMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Outer cursor (trail) */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none mix-blend-difference z-50 rounded-full border border-blue-600"
        style={{
          x: cursorX,
          y: cursorY,
          width: 50,
          height: 50,
          translateX: `-50%`,
          translateY: `-50%`,
          scale: trailScale,
          opacity: trailScale,
        }}
      />

      {/* Inner cursor (dot) */}
      <motion.div
        className="fixed pointer-events-none mix-blend-difference z-50 rounded-full bg-white w-4 h-4"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: `-50%`,
          translateY: `-50%`,
          scale: dotScale,
        }}
      />
    </>
  );
};

export default CustomCursor;
