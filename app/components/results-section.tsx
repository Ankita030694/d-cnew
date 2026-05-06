"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function MetricCounter({ value, suffix, scrollYProgress }: { value: number; suffix: string; scrollYProgress: any }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  // Map scroll progress to the numeric value
  const targetValue = useTransform(scrollYProgress, [0, 0.6], [0, value]);
  
  // Smooth the numeric transition
  const springValue = useSpring(targetValue, { stiffness: 40, damping: 15 });

  // Map the animated spring value to opacity and scale
  const opacity = useTransform(springValue, [0, value], [0.1, 1]);
  const scale = useTransform(springValue, [0, value], [0.7, 1]);

  useEffect(() => {
    return springValue.on("change", (latestValue) => {
      setDisplayValue(Math.round(latestValue));
    });
  }, [springValue]);

  return (
    <motion.span 
      style={{ opacity, scale, originX: 0 }}
      className="text-6xl md:text-[6.5rem] font-bold text-black leading-none mb-4 block"
    >
      {displayValue}{suffix}
    </motion.span>
  );
}

export function ResultsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white overflow-hidden min-h-[60vh] flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-0">
          
          {/* Column 1: Heading */}
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="text-4xl sm:text-5xl md:text-[5.5rem] font-medium text-black leading-[1.05] tracking-tight">
              Real Results. <br />
              Real <span className="font-serif italic font-light">Growth.</span>
            </h2>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:flex w-2 border-l border-r border-orange-500/30 h-auto self-stretch mx-12"></div>

          {/* Column 2: Metrics */}
          <div className="flex-1 flex flex-col justify-between py-2 gap-12 md:gap-0">
            {/* Top Left: 120+ */}
            <div className="flex flex-col">
              <MetricCounter value={120} suffix="+" scrollYProgress={scrollYProgress} />
              <p className="text-gray-900 text-sm md:text-base font-normal leading-tight max-w-[280px]">
                Websites, stores, and digital products successfully launched.
              </p>
            </div>

            {/* Bottom Left: 48h */}
            <div className="flex flex-col md:mt-32">
              <MetricCounter value={48} suffix="h" scrollYProgress={scrollYProgress} />
              <p className="text-gray-900 text-sm md:text-base font-normal leading-tight max-w-[280px]">
                Fast and efficient onboarding process to get your project started without delays.
              </p>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block w-2 border-l border-r border-orange-500/30 h-auto self-stretch mx-12"></div>

          {/* Column 3: Middle Right Metric */}
          <div className="flex-1 flex flex-col justify-center py-2">
            {/* Middle Right: 95%+ */}
            <div className="flex flex-col">
              <MetricCounter value={95} suffix="%+" scrollYProgress={scrollYProgress} />
              <p className="text-gray-900 text-sm md:text-base font-normal leading-tight max-w-[280px]">
                Clients who continue working with us long-term.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
