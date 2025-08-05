"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const PageTransition = () => {
  const pathname = usePathname(); // Get current route

  return (
    <motion.div
      key={pathname} // Change animation on route change
      className="fixed inset-0 bg-black z-99 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default PageTransition;
