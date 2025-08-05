"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import NumberFlow, { continuous } from "@number-flow/react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    let duration = 2000; // 2 seconds

    let interval = setInterval(() => {
      let elapsed = Date.now() - startTime;
      let percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(onComplete, 500); // Small delay before removing loader
      }
    }, 16); // Smooth updates (~60 FPS)

    return () => clearInterval(interval);
  }, [onComplete]);
  //   console.log(progress.toFixed());

  return (
    <>
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-100"
        initial={{ opacity: 1 }}
        animate={{ opacity: progress === 100 ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-8xl">
          <NumberFlow
            plugins={[continuous]}
            value={Number(progress.toFixed())}
          />
        </h1>

        {/* <motion.span
        className="text-5xl font-bold"
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {Math.round(progress)}%
      </motion.span> */}
      </motion.div>
    </>
  );
};

export default Preloader;
