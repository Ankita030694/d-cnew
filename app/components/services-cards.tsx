"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export function ServicesCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      number: "1",
      title: "Custom Web Development",
      description: "UI/UX-driven design combined with fast, scalable development for high-performing web experiences.",
      rotation: "-8deg",
      translateY: "0px",
    },
    {
      number: "2",
      title: "Shopify Development",
      description: "We build high-performing Shopify stores that are optimized for sales, speed, and a smooth customer journey.",
      rotation: "4deg",
      translateY: "40px",
    },
    {
      number: "3",
      title: "WordPress Development",
      description: "We create flexible, scalable WordPress websites that are easy to manage and built to grow with your business.",
      rotation: "-4deg",
      translateY: "80px",
    },
  ];

  return (
    <section className="py-24 md:py-8 px-6 md:px-12 bg-white overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto">
        {/* Title */}
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-4xl md:text-7xl font-medium text-black tracking-tight leading-tight">
            Services Built for <br />
            <span className="font-serif italic text-5xl md:text-[5.5rem] mt-2 block">Growth</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div 
          ref={containerRef}
          className="relative flex flex-col md:flex-row items-center justify-center md:gap-32 mt-8 md:mt-12 mb-16 md:mb-32 max-w-[1600px] mx-auto"
        >
          
          {/* Connecting Line 1 to 2 */}
          <div className="hidden md:block absolute top-[-60px] left-[22%] w-[25%] h-48 z-30 pointer-events-none">
             <svg viewBox="0 0 200 100" fill="none" className="w-full h-full overflow-visible">
                <motion.path 
                  d="M10,90 C40,0 160,0 190,70" 
                  stroke="#FF6B00" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isInView ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                />
                <motion.circle cx="10" cy="90" r="5" fill="#FF6B00" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 0.8, duration: 0.3 }} />
                <motion.circle cx="10" cy="90" r="2" fill="white" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 0.8, duration: 0.3 }} />
                
                <motion.circle cx="190" cy="70" r="5" fill="#FF6B00" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 1.8, duration: 0.3 }} />
                <motion.circle cx="190" cy="70" r="2" fill="white" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 1.8, duration: 0.3 }} />
             </svg>
          </div>

          {/* Connecting Line 2 to 3 */}
          <div className="hidden md:block absolute top-[160px] right-[23%] w-[25%] h-64 z-30 pointer-events-none">
             <svg viewBox="0 0 200 150" fill="none" className="w-full h-full overflow-visible">
                <motion.path 
                  d="M10,20 C100,20 120,200 80,140 C50,100 120,0 190,80" 
                  stroke="#FF6B00" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isInView ? 1 : 0 }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
                />
                <motion.circle cx="10" cy="20" r="5" fill="#FF6B00" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 1.8, duration: 0.3 }} />
                <motion.circle cx="10" cy="20" r="2" fill="white" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 1.8, duration: 0.3 }} />
                
                <motion.circle cx="190" cy="80" r="5" fill="#FF6B00" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 3.3, duration: 0.3 }} />
                <motion.circle cx="190" cy="80" r="2" fill="white" initial={{ scale: 0 }} animate={{ scale: isInView ? 1 : 0 }} transition={{ delay: 3.3, duration: 0.3 }} />
             </svg>
          </div>

          {services.map((service, index) => {
            let initialX = 0;
            let initialY = 0;
            if (isDesktop) {
               if (index === 0) initialX = 340;
               if (index === 2) initialX = -340;
            } else {
               initialY = 50; 
            }

            return (
              <motion.div
                key={index}
                className={`relative w-full md:w-[440px] flex-shrink-0 aspect-[4/5] md:aspect-[4/4.7] bg-white rounded-[20px] p-6 md:p-10 border-[10px] border-orange-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col justify-between group transition-shadow duration-1000 hover:shadow-[0_20px_40px_rgba(255,107,0,0.2)] ${index > 0 ? 'md:-ml-[100px] mt-12 md:mt-0' : ''}`}
                initial={{ 
                  x: initialX, 
                  y: isDesktop ? 0 : initialY, 
                  rotate: 0,
                  opacity: isDesktop ? 1 : 0
                }}
                animate={{
                  x: isInView ? 0 : initialX,
                  y: isInView ? (isDesktop ? parseInt(service.translateY) : 0) : (isDesktop ? 0 : initialY),
                  rotate: isInView ? (isDesktop ? parseFloat(service.rotation) : 0) : 0,
                  opacity: isInView ? 1 : (isDesktop ? 1 : 0)
                }}
                transition={{
                  type: "spring",
                  bounce: 0.15,
                  duration: 1.2,
                  delay: isDesktop ? 0 : index * 0.2,
                }}
                style={{
                  zIndex: index === 1 ? 20 : 10 + index,
                }}
              >
                <div>
                  <span className="text-7xl md:text-[10rem] font-bold text-black leading-none tracking-tighter">
                    {service.number}
                  </span>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-xl md:text-[2rem] font-bold text-black mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
