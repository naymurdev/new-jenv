import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Free Discovery Call",
    description:
      "Share your vision, get expert insights, and let's see if we're the right match. Zero commitment.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    number: "02",
    title: "Strategy & Planning",
    description:
      "We analyze your business needs and create a comprehensive roadmap tailored to your goals and objectives.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    number: "03",
    title: "Design & Development",
    description:
      "Our team brings your vision to life with cutting-edge design and robust development practices.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    number: "04",
    title: "Testing & Optimization",
    description:
      "Rigorous testing ensures everything works perfectly before launch, with continuous optimization.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    number: "05",
    title: "Launch & Support",
    description:
      "We launch your project and provide ongoing support to ensure continued success and growth.",
    icon: Phone,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
  },
];

function HowWeWork() {
  const [activeStep, setActiveStep] = useState(1); // Start with no active step

  // Animation variants for smooth content reveal
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    inactive: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    active: {
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="relative z-10 text-center 2xl:px-0 px-10 2xl:container max-w-6xl mx-auto py-32">
      <article>
        <motion.span
          className="text-center block w-fit mx-auto bg-orange-500 text-white px-5 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Strategy
        </motion.span>

        <motion.h1
          className="xl:text-8xl md:text-7xl sm:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          How we work?
        </motion.h1>

        <motion.p
          className="text-lg text-white max-w-lg mx-auto pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From invoices & inventory to back office, our smart systems handle
          your busywork (automating operations & reducing friction) for you.
        </motion.p>
      </article>

      <div className="py-10">
        {/* Steps */}
        <div className="flex flex-col lg:flex-row h-[28rem] gap-5">
          {steps.map((step) => {
            const IconComponent = step.icon;
            const isActive = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                className={`relative cursor-pointer transition-all h-full duration-500 ${
                  isActive ? "lg:flex-[2]" : "lg:flex-[0.5]"
                }`}
                onClick={() => setActiveStep(isActive ? 0 : step.id as number)}
                variants={cardVariants}
                animate={isActive ? "active" : "inactive"}
                whileHover={{
                  scale: isActive ? 1.02 : 1.05,
                  borderColor: "rgba(249, 115, 22, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <LiquidGlassCard
                  draggable={false}
                  blurIntensity="sm"
                  glowIntensity="none"
                  className="h-full"
                >
                  <div
                    className={cn(
                      "rounded-2xl h-full p-6 relative z-10 ",
                      !isActive && "bg-white/10 rounded-4xl"
                    )}
                  >
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="expanded"
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex-1 flex flex-col justify-between h-full"
                        >
                          <div className="absolute top-4 left-4 text-4xl font-light text-orange-400/30">
                            {step.number}
                          </div>
                          <motion.div
                            className="flex justify-center mb-6"
                            variants={imageVariants}
                          >
                            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/10">
                              <img
                                src={step.image}
                                alt={`${step.title} illustration`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </motion.div>

                          <motion.div className="flex items-start gap-2" variants={itemVariants}>
                            <motion.div
                              className="flex gap-3"
                              variants={itemVariants}
                            >
                              <IconComponent className="w-5 h-5 text-orange-400" />
                            </motion.div>
                            <motion.article
                              className="text-left"
                              variants={itemVariants}
                            >
                              <motion.h3 className="text-3xl font-semibold text-white">
                                {step.title}
                              </motion.h3>
                              <motion.p
                                className="text-gray-300 text-sm leading-relaxed"
                                variants={itemVariants}
                              >
                                {step.description}
                              </motion.p>
                            </motion.article>
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="flex-1 h-full flex flex-col justify-between"
                        >
                          <motion.div
                            className="text-4xl font-light text-white mb-6"
                            whileHover={{ scale: 1.1, color: "#fb923c" }}
                            transition={{ duration: 0.2 }}
                          >
                            {step.number}
                          </motion.div>

                          <div className="text-center">
                            <motion.div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 fill-black stroke-black" />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
