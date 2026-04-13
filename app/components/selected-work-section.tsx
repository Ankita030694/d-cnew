 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function SelectedWorkSection() {
  const topImages = ["/animation/1.png", "/animation/2.png", "/animation/3.png", "/animation/4.png", "/animation/5.png"];
  const bottomImages = ["/animation/6.png", "/animation/7.png", "/animation/8.png", "/animation/9.png", "/animation/10.png"];
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.5);
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));
      setScrollProgress(clampedProgress);
    };

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isInView]);

  const animateKey = (
    index: number,
    fromOffset: number,
    sideOffset: number,
    finalXOffset = 0
  ) => {
    const stagger = index * 0.09;
    const phase = Math.min(1, Math.max(0, (scrollProgress - stagger) / 0.35));
    const eased = 1 - Math.pow(1 - phase, 3);
    const y = fromOffset * (1 - eased);
    const x = finalXOffset + sideOffset * (1 - eased);
    const opacity = 0.35 + eased * 0.65;

    return {
      transform: isMobile ? `translateX(${x}px)` : `translateY(${y}px)`,
      opacity,
    };
  };

  const getMobileLeftPeepOffset = (index: number) => (index === 2 ? -74 : -50);
  const getMobileRightPeepOffset = (index: number) => (index === 2 ? -50 : -74);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#efebe5] overflow-hidden py-32 md:py-48 flex flex-col items-center justify-center min-h-[600px] md:min-h-[800px]"
    >
      
      {/* Desktop Top Row: Left Aligned, Half Cutted, Hanging Down */}
      <div className="absolute top-0 left-0 hidden w-full justify-start gap-3 md:flex md:gap-6 md:px-12 -translate-y-1/2 pointer-events-none">
        {topImages.map((src, index) => (
          <div
            key={`top-${index}`}
            style={animateKey(index, -110, -110)}
            className="relative h-[508px] w-[254px] shrink-0 transition-transform duration-300 will-change-transform"
          >
            <Image
              src={src}
              alt={`Work Image ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 125px, 254px"
            />
          </div>
        ))}
      </div>

      {/* Mobile Left Column: Peeking from Left Edge */}
      <div className="absolute inset-y-0 left-0 z-0 flex w-0 flex-col justify-between py-4 pointer-events-none md:hidden">
        {topImages.map((src, index) => (
          <div
            key={`mobile-left-${index}`}
            style={animateKey(index, -110, -140, getMobileLeftPeepOffset(index))}
            className="relative h-[148px] w-[124px] shrink-0 transition-transform duration-300 will-change-transform"
          >
            <Image
              src={src}
              alt={`Work Image ${index + 1}`}
              fill
              className="object-contain rotate-90"
              sizes="124px"
            />
          </div>
        ))}
      </div>

      {/* Middle Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-8xl py-40">
        <h2 className="text-[40px] md:text-[74px] leading-[1.2] font-medium text-black">
          Selected Work That
          <span className="font-serif italic"> Speaks</span> for Itself.
        </h2>
        
        <Link
          href="/work"
          className="mt-10 md:mt-12 bg-black px-10 py-3 text-lg md:text-2xl font-normal text-white shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
        >
          Explore Work
        </Link>
      </div>

      {/* Mobile Right Column: Peeking from Right Edge */}
      <div className="absolute inset-y-0 right-0 z-0 flex w-0 flex-col justify-between py-4 pointer-events-none md:hidden">
        {bottomImages.map((src, index) => (
          <div
            key={`mobile-right-${index}`}
            style={animateKey(index, 110, 140, getMobileRightPeepOffset(index))}
            className="relative h-[148px] w-[124px] shrink-0 transition-transform duration-300 will-change-transform"
          >
            <Image
              src={src}
              alt={`Work Image ${index + 6}`}
              fill
              className="object-contain rotate-90"
              sizes="124px"
            />
          </div>
        ))}
      </div>

      {/* Desktop Bottom Row: Right Aligned, Half Cutted, Coming Up */}
      <div className="absolute bottom-0 left-0 hidden w-full justify-end gap-3 md:flex md:gap-6 md:px-12 translate-y-1/2 pointer-events-none">
        {bottomImages.map((src, index) => (
          <div
            key={`bottom-${index}`}
            style={animateKey(index, 110, 110)}
            className="relative h-[508px] w-[254px] shrink-0 transition-transform duration-300 will-change-transform"
          >
            <Image
              src={src}
              alt={`Work Image ${index + 6}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 125px, 254px"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
