"use client";

import React from "react";
import Image from "next/image";

const insights = [
  {
    title: "Custom vs Template Websites: What's Actually Better for Your Business?",
    image: null, // Placeholder
  },
  {
    title: "The Rise of AI in Web Design: Enhancing User Experience",
    image: null,
  },
  {
    title: "Top 10 Web Design Trends for 2026: What to Watch",
    image: null,
  },
];

export function InsightsSection() {
  return (
    <section className="w-full bg-white py-8 md:py-8">
      <div className="mx-auto w-full max-w-8xl px-6 md:px-16">
        <div className="mb-12">
          <p className="text-xs md:text-base text-gray-600 mb-2 font-medium">The blog</p>
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Our latest <span className="font-serif italic font-light">insights.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-gray-300">
          {insights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 md:gap-10 py-6 md:py-8 border-b border-gray-300 group cursor-pointer hover:bg-gray-50 transition-colors px-2"
            >
              {/* Image Placeholder */}
              <div className="w-16 h-16 md:w-32 md:h-32 bg-[#2a2a2a] flex-shrink-0 flex items-center justify-center">
                {/* SVG Image Icon */}
                <svg
                  className="w-6 h-6 md:w-10 md:h-10 text-[#0056b3]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-3xl font-medium text-black leading-snug group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
