"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 70]);
  const circleBg = useTransform(scrollYProgress, [0, 1], ["#4a4a4a", "#ffffff"]);
  const textColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#000000"]);

  const projects = [
    { title: "Project Title 1", subtitle: "Subtitle 1" },
    { title: "Project Title 2", subtitle: "Subtitle 2" },
    { title: "Project Title 3", subtitle: "Subtitle 3" },
    { title: "Project Title 4", subtitle: "Subtitle 4" },
  ];

  return (
    <>
      <section
        ref={containerRef}
        className="h-[150vh] w-full relative font-sans bg-[#ffffff]"
      >
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="relative w-48 h-48 md:w-96 md:h-96 flex items-center justify-center">
            {/* Expanding Background */}
            <motion.div
              style={{
                scale,
                backgroundColor: circleBg,
              }}
              className="absolute inset-0 rounded-[50%] will-change-transform z-0 origin-center [clip-path:circle(50%_at_50%_50%)]"
            />
            {/* Text inside the circle */}
            <motion.h2
              style={{ color: textColor }}
              className="relative z-10 text-3xl md:text-6xl font-medium text-center px-6 tracking-tight"
            >
              What We&apos;ve Built
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Grid section seamlessly continuing the dark background */}
      <section className="w-full bg-white text-black pt-16 pb-0 md:pt-8 md:pb-0 px-6 md:px-12 lg:px-20 relative z-10">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 h-full py-8">
            {projects.map((item, index) => (
              <div key={index} className="flex flex-col h-full group cursor-pointer">
                <div className="relative w-full flex-1 min-h-[350px] md:min-h-0 bg-gray-100 rounded-xl overflow-hidden mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-[0.98]">
                  {/* Placeholder Image Content could go here */}
                  <div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center group-hover:bg-gray-200/30 transition-colors duration-500">
                    <span className="text-gray-400 font-medium text-lg">Image Placeholder</span>
                  </div>
                </div>
                <div className="flex justify-between items-start shrink-0">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-lg mt-1 md:mt-0">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
