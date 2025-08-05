"use client";
import { X } from "lucide-react";
import { motion, useSpring, HTMLMotionProps } from "motion/react";
import { useRef } from "react";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  className?: string;
}

const MagneticCloseButton: React.FC<MagneticButtonProps> = ({
  className,
  ...props
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const springConfig = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 100;
    const strength = Math.min(distance / maxDistance, 1);

    x.set(deltaX * 2.3 * strength);
    y.set(deltaY * 2.3 * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props} // Now properly accepts Framer Motion div props
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ x, y }}
      className={`inline-block z-2 absolute top-4 right-4 ${className}`}
    >
      <span
        className={`text-2xl cursor-pointer relative z-2 bg-white text-black rounded-xl w-14 h-14 grid place-content-center text-center ${className}`}
      >
        <X size={40} />
      </span>
    </motion.div>
  );
};
export default MagneticCloseButton;
