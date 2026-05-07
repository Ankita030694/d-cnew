"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ───────── project data ───────── */
const categories = ["All", "Web Design", "Branding", "Development", "SEO"] as const;
type Category = (typeof categories)[number];

interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  { title: "Credsettle", category: "loan Settlement", image: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Image" },
  { title: "Credsettle", category: "loan Settlement", image: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Image" },
  { title: "Credsettle", category: "loan Settlement", image: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Image" },
  { title: "Credsettle", category: "loan Settlement", image: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Image" },
  { title: "Credsettle", category: "loan Settlement", image: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Image" },
  { title: "Credsettle", category: "loan Settlement", image: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Image" },
];

/* ───────── component ───────── */
export function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 pb-16 md:pb-24">
      {/* ── Filter Dropdown ── */}
      <div className="flex justify-center mb-10 md:mb-14">
        <div ref={dropdownRef} className="relative">
          <button
            id="projects-filter-btn"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-3 bg-black text-white pl-6 pr-1 py-1 rounded-full text-sm font-medium transition-all hover:bg-black/85 active:scale-[0.97]"
          >
            <span className="min-w-[100px] text-left">{activeFilter}</span>
            <span
              className={`flex items-center justify-center size-9 rounded-full bg-white/15 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 6, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 mt-1 min-w-[180px] bg-black rounded-2xl py-2 shadow-2xl z-50 overflow-hidden"
              >
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setActiveFilter(cat);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${
                        activeFilter === cat
                          ? "bg-white/15 text-white font-semibold"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Project Cards Grid ── */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group cursor-pointer"
              >
                {/* Card */}
                <div className="bg-[#f7f7f7] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg">
                  {/* Image Area */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Info Bar */}
                  <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-4 border-t border-black/[0.06]">
                    <h3 className="text-[15px] md:text-[17px] font-medium text-black tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-black/45 font-normal">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
