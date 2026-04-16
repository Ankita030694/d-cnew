"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export function ProjectCtaSection() {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  
  // Physics Refs
  const mouseRef = useRef({ x: 0, y: 0 });
  const headRef = useRef({ x: 0, y: 0, speed: 0.18 });
  const buttonRef = useRef({ x: 0, y: 0, speed: 0.12 });
  const blobsRef = useRef([
    { x: 0, y: 0, size: 100, speed: 0.14 },
    { x: 0, y: 0, size: 80, speed: 0.10 },
    { x: 0, y: 0, size: 60, speed: 0.07 },
  ]);

  // DOM Refs
  const mascotBlobRef = useRef<HTMLDivElement>(null);
  const mascotContentRef = useRef<HTMLDivElement>(null);
  const buttonBlobRef = useRef<HTMLDivElement>(null);
  const buttonTextRef = useRef<HTMLDivElement>(null);
  const blobElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      // 1. Move Head (Mascot)
      headRef.current.x += (mouseRef.current.x - headRef.current.x) * headRef.current.speed;
      headRef.current.y += (mouseRef.current.y - headRef.current.y) * headRef.current.speed;

      const headTransform = `translate3d(calc(${headRef.current.x}px - 50%), calc(${headRef.current.y}px - 50%), 0)`;
      if (mascotBlobRef.current) mascotBlobRef.current.style.transform = headTransform;
      if (mascotContentRef.current) mascotContentRef.current.style.transform = headTransform;

      // 2. Move Magnetic Button
      // The button orbits the head, pulled by magnetism but lagging with inertia
      const dx = mouseRef.current.x - headRef.current.x;
      const dy = mouseRef.current.y - headRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate dynamic offset based on mouse proximity/speed
      const tension = Math.min(dist * 0.4, 100); 
      const angle = Math.atan2(dy, dx);
      
      const targetX = headRef.current.x - Math.cos(angle) * (60 + tension * 0.5);
      const targetY = headRef.current.y - Math.sin(angle) * (60 + tension * 0.5);
      
      buttonRef.current.x += (targetX - buttonRef.current.x) * buttonRef.current.speed;
      buttonRef.current.y += (targetY - buttonRef.current.y) * buttonRef.current.speed;

      const buttonTransform = `translate3d(calc(${buttonRef.current.x}px - 50%), calc(${buttonRef.current.y}px - 50%), 0)`;
      if (buttonBlobRef.current) buttonBlobRef.current.style.transform = buttonTransform;
      if (buttonTextRef.current) buttonTextRef.current.style.transform = buttonTransform;

      // 3. Move Trail Blobs
      blobsRef.current.forEach((blob, index) => {
        const target = index === 0 ? headRef.current : blobsRef.current[index - 1];
        blob.x += (target.x - blob.x) * blob.speed;
        blob.y += (target.y - blob.y) * blob.speed;

        const el = blobElementsRef.current[index];
        if (el) {
          el.style.transform = `translate3d(calc(${blob.x}px - 50%), calc(${blob.y}px - 50%), 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <>
      <section
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        onClick={() => router.push("/contact")}
        className="relative flex cursor-none min-h-[500px] w-full items-center justify-center overflow-hidden bg-white py-24 md:min-h-[650px] md:py-40"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-40" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_6rem] [background-position:center_top]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/80 to-white/0" />
        </div>
        
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center md:px-5">
            <span className="mb-8 block text-sm font-medium tracking-[0.3em] uppercase text-black/40">
                Crafting Excellence
            </span>
          <h2 className="text-[52px] leading-[1] font-medium text-[#1a1a1a] sm:text-[72px] md:text-[104px] tracking-tight">
            Let&apos;s Build<br />
            Something <span className="font-serif italic text-black/90">Remarkable.</span>
          </h2>
          
          <div className="mt-16 group flex items-center gap-6 opacity-60 hover:opacity-100 transition-all duration-700">
             <div className="h-[1px] w-16 bg-black group-hover:w-24 transition-all duration-700" />
             <span className="text-xl font-medium tracking-wide">Start a conversation</span>
             <div className="h-[1px] w-16 bg-black group-hover:w-24 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* SVG Gooey Filter */}
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Liquid Cursor Container */}
      <div 
        className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-700 ease-in-out ${isHovering ? "opacity-100" : "opacity-0"}`}
      >
        {/* Gooey Filtered Layer */}
        <div style={{ filter: "url(#goo)" }} className="absolute inset-0">
          
          {/* Head Blob */}
          <div 
             ref={mascotBlobRef}
             className="fixed left-0 top-0 rounded-full bg-black will-change-transform"
             style={{ width: '130px', height: '130px', zIndex: 50 }}
          />

          {/* Magnetic Button Blob */}
          <div 
             ref={buttonBlobRef}
             className="fixed left-0 top-0 rounded-full bg-black will-change-transform"
             style={{ width: '150px', height: '60px', zIndex: 40 }}
          />

          {/* Trail Blobs */}
          {blobsRef.current.map((blob, i) => (
            <div
              key={i}
              ref={(el) => { if (blobElementsRef.current) blobElementsRef.current[i] = el; }}
              className="fixed left-0 top-0 rounded-full bg-black will-change-transform"
              style={{
                width: `${blob.size}px`,
                height: `${blob.size}px`,
                zIndex: 30 - i
              }}
            />
          ))}
        </div>
        
        {/* Sharp Interactive Content Layer */}
        <div className="absolute inset-0">
             {/* Mascot Video */}
             <div 
                ref={mascotContentRef}
                className="fixed left-0 top-0 h-[105px] w-[105px] overflow-hidden rounded-full border-[6px] border-white shadow-xl will-change-transform z-[60]"
             >
                <video
                    src="/hero_mascot.mp4"
                    className="h-full w-full object-cover scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
             </div>

             {/* Contact Text */}
             <div 
                ref={buttonTextRef}
                className="fixed left-0 top-0 flex items-center justify-center will-change-transform z-[70] w-[150px] h-[60px]"
             >
                <span className="text-[14px] font-bold text-white tracking-[0.2em] uppercase">Contact</span>
             </div>
        </div>
      </div>
    </>
  );
}
