"use client";

import React from "react";

export function ResultsSection() {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          
          {/* Column 1: Heading (Exactly 2 lines) */}
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="text-5xl md:text-[5.5rem] font-medium text-black leading-[1.05] tracking-tight whitespace-nowrap">
              Real Results. <br />
              Real <span className="font-serif italic font-light">Growth.</span>
            </h2>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:flex w-2 border-l border-r border-orange-500/30 h-auto self-stretch mx-12"></div>

          {/* Column 2: "Left" Metrics (Top & Bottom) */}
          <div className="flex-1 flex flex-col justify-between py-2">
            {/* Top Left: 120+ */}
            <div className="flex flex-col">
              <span className="text-7xl md:text-[6.5rem] font-bold text-black leading-none mb-4">
                120+
              </span>
              <p className="text-gray-900 text-sm md:text-base font-normal leading-tight max-w-[280px]">
                Websites, stores, and digital products successfully launched.
              </p>
            </div>

            {/* Bottom Left: 48h */}
            <div className="flex flex-col mt-32">
              <span className="text-7xl md:text-[6.5rem] font-bold text-black leading-none mb-4">
                48h
              </span>
              <p className="text-gray-900 text-sm md:text-base font-normal leading-tight max-w-[280px]">
                Fast and efficient onboarding process to get your project started without delays.
              </p>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block w-2 border-l border-r border-orange-500/30 h-auto self-stretch mx-12"></div>

          {/* Column 3: "Right" Metric (Middle) */}
          <div className="flex-1 flex flex-col justify-center py-2">
            {/* Middle Right: 95%+ */}
            <div className="flex flex-col">
              <span className="text-7xl md:text-[6.5rem] font-bold text-black leading-none mb-4">
                95%+
              </span>
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
