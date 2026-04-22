"use client";

import React, { useEffect, useRef } from "react";

export function Herosection2() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for tracking elements
  const circleBgRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  
  // Texts that fade out
  const heroText1Ref = useRef<HTMLSpanElement>(null);
  const heroText2Ref = useRef<HTMLSpanElement>(null);
  const heroText3Ref = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  
  // Left side incoming text
  const leftTextRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  
  // Segmented Progress Bar Refs
  const progressBarContainerRef = useRef<HTMLDivElement>(null);
  const fill1Ref = useRef<HTMLDivElement>(null);
  const fill2Ref = useRef<HTMLDivElement>(null);
  const fill3Ref = useRef<HTMLDivElement>(null);
  const fill4Ref = useRef<HTMLDivElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  const icon4Ref = useRef<HTMLDivElement>(null);
  const seg1Ref = useRef<HTMLDivElement>(null);
  const seg2Ref = useRef<HTMLDivElement>(null);
  const seg3Ref = useRef<HTMLDivElement>(null);
  const seg4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !circleBgRef.current || !mascotRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const maxScroll = container.offsetHeight - window.innerHeight;
      
      if (maxScroll <= 0) return;
      
      const scrollPosition = -rect.top;
      
      let progress = 0;
      if (scrollPosition > 0) {
        progress = Math.min(scrollPosition / maxScroll, 1);
      }
      
      // 1. Circle expands (0.0 to 0.20)
      const p1 = Math.min(progress / 0.20, 1);
      circleBgRef.current.style.transform = `scale(${1 + p1 * 50})`;
      
      // The text fading logic has been removed so it remains visible under the circle
      // 2. Circle eclipses text due to z-index (no JS required)

      // 3. Mascot shifts right & scales up (0.10 to 0.25)
      let p2 = 0; 
      if (progress > 0.10) p2 = Math.min((progress - 0.10) / 0.15, 1);
      
      const isMobile = window.innerWidth < 768; // standard md tailwind breakpoint

      let shiftX = 0;
      let shiftY = 0;
      let mascotScale = 1;

      if (isMobile) {
         // Mobile: Pull slightly UP over the text, remain horizontally centered, scale moderately
         shiftX = 0; 
         shiftY = p2 * -17.5; // Move UP
         mascotScale = 1 + p2 * 0.75; // Scale to fit nicely top-center
      } else {
         // Desktop: Pristine untouched logic
         shiftX = p2 * 25; 
         shiftY = p2 * 20; 
         mascotScale = 1 + (p2 * 0.2); 
      }
      
      // Shared base state for mascot "pop out" effect
      // Repositioned to start from the bottom of the circle
      const baseScale = 1.6;
      const baseTranslateY = -2; // Reduced shift so it sits at the bottom

      if (mascotRef.current) {
        mascotRef.current.style.transformOrigin = "50% 50%"; 
        
        // Scaling down as we scroll down (1.6 -> 1.3)
        const currentScale = baseScale - (p2 * 0.3); 
        const currentTranslateY = baseTranslateY + (p2 * -5); 
        
        mascotRef.current.style.transform = `translate(${shiftX}vw, calc(${shiftY}vh + ${currentTranslateY}%)) scale(${currentScale})`;
        
        const negativeMargin = p2 * -12; 
        mascotRef.current.style.marginTop = `${negativeMargin}vh`;
      }
      
      const videoEl = mascotRef.current?.querySelector("video");
      if (videoEl) {
         // Dynamic mask to reveal full mascot on scroll
         const currentScale = baseScale - (p2 * 0.3);
         const maskRadius = 50 / currentScale;
         
         // To avoid gaps, the top-pop rectangle must meet the top of the circle
         // Top of circle is at (50% - maskRadius)
         const topOfCircle = 50 - maskRadius;
         
         // Reveal the body from bottom (initially cut at 85%, moving to 100%)
         const bodyReveal = 85 + (p2 * 15); 

         // 1. A rectangle from top to top-of-circle (allows head pop)
         // 2. The circle itself
         // 3. A bottom-cutoff that moves down (the "cut from bottom" reveal)
         // We combine these to show the head + body-in-circle, and animate the bottom cut
         const maskStr = `
            linear-gradient(to bottom, black ${topOfCircle + 1}%, transparent ${topOfCircle + 1}%),
            radial-gradient(circle at 50% 50%, black ${maskRadius}%, transparent ${maskRadius + 0.5}%),
            linear-gradient(to top, transparent ${100 - bodyReveal}%, black ${100 - bodyReveal}%)
         `.trim().replace(/\n/g, '');
         
         (videoEl as HTMLElement).style.webkitMaskImage = maskStr;
         (videoEl as HTMLElement).style.maskImage = maskStr;
         (videoEl as HTMLElement).style.webkitMaskComposite = 'source-over';
         (videoEl as HTMLElement).style.maskComposite = 'add';

         // Clear any residual JS overrides to restore your perfect original circle layout
         videoEl.style.marginTop = "";
         videoEl.style.transform = "";
         videoEl.style.objectPosition = "";
      }

      // 4. Reveal Left Text Container (0.25 to 0.40)
      let p3 = 0; 
      if (progress > 0.25) p3 = Math.min((progress - 0.25) / 0.15, 1);
      if (leftTextRef.current) leftTextRef.current.style.opacity = p3.toString();
      if (progressBarContainerRef.current) progressBarContainerRef.current.style.opacity = p3.toString();

      // 5. Swap Left Texts (0.4 to 1.0)
      const setOpacity = (ref: React.RefObject<HTMLDivElement | null>, targetO: number) => {
         if (ref.current) ref.current.style.opacity = targetO.toString();
      };
      
      if (progress < 0.55) {
         setOpacity(text1Ref, 1);
         setOpacity(text2Ref, 0);
         setOpacity(text3Ref, 0);
         setOpacity(text4Ref, 0);
      } else if (progress < 0.70) {
         setOpacity(text1Ref, 0);
         setOpacity(text2Ref, 1);
         setOpacity(text3Ref, 0);
         setOpacity(text4Ref, 0);
      } else if (progress < 0.85) {
         setOpacity(text1Ref, 0);
         setOpacity(text2Ref, 0);
         setOpacity(text3Ref, 1);
         setOpacity(text4Ref, 0);
      } else {
         setOpacity(text1Ref, 0);
         setOpacity(text2Ref, 0);
         setOpacity(text3Ref, 0);
         setOpacity(text4Ref, 1);
      }
      
      
      // 6. Segmented Progress Bar Logic
      const getSegFill = (p: number, start: number, end: number) => {
         if (p < start) return 0;
         if (p > end) return 100;
         return ((p - start) / (end - start)) * 100;
      };

      if (fill1Ref.current) fill1Ref.current.style.width = `${getSegFill(progress, 0.40, 0.55)}%`;
      if (fill2Ref.current) fill2Ref.current.style.width = `${getSegFill(progress, 0.55, 0.70)}%`;
      if (fill3Ref.current) fill3Ref.current.style.width = `${getSegFill(progress, 0.70, 0.85)}%`;
      if (fill4Ref.current) fill4Ref.current.style.width = `${getSegFill(progress, 0.85, 1.00)}%`;

      const setIconState = (ref: React.RefObject<HTMLDivElement | null>, p: number, start: number) => {
         if (ref.current) ref.current.style.opacity = p >= start ? "1" : "0.2";
      };
      setIconState(icon1Ref, progress, 0.40);
      setIconState(icon2Ref, progress, 0.55);
      setIconState(icon3Ref, progress, 0.70);
      setIconState(icon4Ref, progress, 0.85);

      // 7. Dynamic Segment Widths (Accordion Effect)
      const updateSegWidths = (activeIdx: number) => {
         const refs = [seg1Ref, seg2Ref, seg3Ref, seg4Ref];
         refs.forEach((ref, idx) => {
            if (ref.current) {
               ref.current.style.flex = idx === activeIdx ? "3 1 0%" : "1 1 0%";
               ref.current.style.transition = "flex 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
            }
         });
      };

      if (progress < 0.55) { 
         updateSegWidths(0);
      } else if (progress < 0.70) { 
         updateSegWidths(1);
      } else if (progress < 0.85) { 
         updateSegWidths(2);
      } else { 
         updateSegWidths(3);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-[500vh] w-full relative font-sans"
      style={{
        backgroundColor: '#fdfdfd',
        backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between pt-12 pb-8 px-6 md:px-12 overflow-hidden">
        
        {/* TOP BRANDING & NAV (As seen in screenshot) */}
      

        {/* LEFT INCOMING TEXT CONTAINER (Maintained from original) */}
        <div 
          ref={leftTextRef} 
          className="absolute top-0 left-0 w-full md:w-[55%] h-full flex flex-col justify-end md:justify-center px-6 sm:px-10 md:px-24 z-40 opacity-0 pointer-events-none pb-24 md:pb-0"
        >
            <div className="grid w-full text-white">
                
                {/* 1. Shopify Development */}
                <div ref={text1Ref} className="col-start-1 row-start-1 flex flex-col justify-center transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 text-white">
                     <span className="font-semibold">Shopify</span> <span className="font-serif italic font-light">Development.</span>
                   </h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We build high-performing Shopify stores designed to convert visitors into customers. From seamless navigation to optimized product pages, every detail is crafted to enhance user experience and drive sales. Whether you're launching or scaling, we create stores that grow with your business.
                   </p>
                   <ul className="flex flex-col gap-y-1.5 text-gray-300 font-light text-sm sm:text-base md:text-lg tracking-wide pl-2">
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Custom Shopify Stores</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Theme Customization</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Conversion Optimization</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>App Integrations</li>
                   </ul>
                </div>

                {/* 2. Custom Development */}
                <div ref={text2Ref} className="col-start-1 row-start-1 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 text-white">
                     <span className="font-semibold">Custom</span> <span className="font-serif italic font-light">Development.</span>
                   </h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We engineer bespoke, high-performance web applications tailored to your specific business infrastructure. By leveraging modern frameworks, we ensure your digital platform is highly scalable, fast, and completely free from creative limitations.
                   </p>
                   <ul className="flex flex-col gap-y-1.5 text-gray-300 font-light text-sm sm:text-base md:text-lg tracking-wide pl-2">
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Scalable Web Apps</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>API Integrations</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Full-Stack Architecture</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Database Design</li>
                   </ul>
                </div>

                {/* 3. WordPress Development */}
                <div ref={text3Ref} className="col-start-1 row-start-1 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 text-white">
                     <span className="font-semibold">WordPress</span> <span className="font-serif italic font-light">Development.</span>
                   </h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We craft fully customized, responsive WordPress websites that give you effortless control over your content. Blending premium aesthetic design with rock-solid technical foundations, our builds ensure rapid load times and ironclad security.
                   </p>
                   <ul className="flex flex-col gap-y-1.5 text-gray-300 font-light text-sm sm:text-base md:text-lg tracking-wide pl-2">
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Custom Themes</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>SEO Optimization</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Secure Architecture</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Seamless Migrations</li>
                   </ul>
                </div>

                {/* 4. UI/UX Design */}
                <div ref={text4Ref} className="col-start-1 row-start-1 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 text-white">
                     <span className="font-semibold">UI/UX</span> <span className="font-serif italic font-light">Design.</span>
                   </h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We create stunning, intuitive interfaces that delight users and foster deep engagement. Through rigorous research and wireframing, we architect digital environments that remove friction and convert passive visitors into loyal brand advocates.
                   </p>
                   <ul className="flex flex-col gap-y-1.5 text-gray-300 font-light text-sm sm:text-base md:text-lg tracking-wide pl-2">
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Prototyping &amp; Wireframes</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>User Research</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Journey Mapping</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>Interface Design</li>
                   </ul>
                </div>

             </div>
        </div>


        <div className="flex-1 flex flex-col items-center justify-center relative w-full pt-10 pb-20">
          
          <div className="flex flex-col items-center leading-none tracking-tight text-center w-full max-w-7xl relative">
            
            {/* Top Line: Crafting [video] bold */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 md:gap-x-6 w-full">
               
               <span ref={heroText1Ref} className="text-6xl sm:text-8xl md:text-[7rem] font-medium text-black relative z-10 will-change-transform">
                 Crafting
               </span>
               
               {/* Mascot Circle Area (Z-30 so it eclipses the Z-10 texts) */}
               <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 xl:w-72 xl:h-72 flex-shrink-0 -mt-2 sm:-mt-4 md:-mt-8 xl:-mt-10 z-30 aspect-square">
                 
                 {/* Expanding Dark Background */}
                 <div 
                   ref={circleBgRef}
                   className="absolute inset-0 rounded-[50%] bg-[#1A1A1A] will-change-transform z-0 origin-center [clip-path:circle(50%_at_50%_50%)]"
                 />

                 {/* The Static Mascot */}
                 <div 
                   ref={mascotRef}
                   className="absolute inset-0 will-change-transform z-20 origin-center isolate overflow-visible"
                 >
                    <video 
                       src="/mascot.webm" 
                       autoPlay 
                       loop 
                       muted 
                       playsInline
                       className="absolute inset-0 object-contain w-full h-full"
                       style={{
                          // Initial state: Shifted down to bottom, with 85% reveal
                          WebkitMaskImage: 'linear-gradient(to bottom, black 19%, transparent 19%), radial-gradient(circle at 50% 50%, black 31.25%, transparent 31.75%), linear-gradient(to top, transparent 15%, black 15%)',
                          WebkitMaskComposite: 'source-over', 
                          maskImage: 'linear-gradient(to bottom, black 19%, transparent 19%), radial-gradient(circle at 50% 50%, black 31.25%, transparent 31.75%), linear-gradient(to top, transparent 15%, black 15%)',
                          maskComposite: 'add'
                       }}
                    />
                 </div>

               </div>
               
               <span ref={heroText2Ref} className="text-6xl sm:text-8xl md:text-[7rem] font-medium text-black relative z-10 will-change-transform">
                 bold
               </span>
            </div>

            {/* Bottom Line: design experiences */}
            <div ref={heroText3Ref} className="flex flex-row flex-wrap justify-center items-center gap-x-4 md:gap-x-8 -mt-2 sm:-mt-4 md:-mt-8 relative z-10 will-change-transform">
              <span className="text-6xl sm:text-8xl md:text-[7rem] font-medium text-black">
                design
              </span>
              <span className="text-[3.5rem] sm:text-[6rem] md:text-[7rem] italic font-serif text-black leading-none pt-2 md:pt-4 pr-1">
                experiences
              </span>
              
            </div>

          </div>

          <div ref={footerRef} className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between items-center mt-30 relative z-10 will-change-transform pt-6">
             <span className="text-black text-sm md:text-base font-normal tracking-wide">
               @designncode
             </span>
             <span className="text-black text-sm md:text-base font-normal tracking-wide">
               We see the magic in the details.
             </span>
             <span className="text-black text-sm md:text-base font-normal tracking-wide cursor-pointer hover:underline underline-offset-4">
               Click for a surprise
             </span>
          </div>

        </div>

        {/* Segmented Progress Bar (Funtown Studio Style) */}
        <div 
          ref={progressBarContainerRef} 
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex gap-4 md:gap-8 z-40 opacity-0 transition-opacity duration-300 pointer-events-none"
        >
           {/* Section 1: Shopify */}
           <div ref={seg1Ref} className="flex flex-col gap-3" style={{ flex: '1 1 0%' }}>
              <div ref={icon1Ref} className="transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                 <div ref={fill1Ref} className="absolute inset-0 bg-white origin-left" style={{ width: '0%' }} />
              </div>
           </div>

           {/* Section 2: Custom */}
           <div ref={seg2Ref} className="flex flex-col gap-3" style={{ flex: '1 1 0%' }}>
              <div ref={icon2Ref} className="transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                 <div ref={fill2Ref} className="absolute inset-0 bg-white origin-left" style={{ width: '0%' }} />
              </div>
           </div>

           {/* Section 3: WordPress */}
           <div ref={seg3Ref} className="flex flex-col gap-3" style={{ flex: '1 1 0%' }}>
              <div ref={icon3Ref} className="transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                 <div ref={fill3Ref} className="absolute inset-0 bg-white origin-left" style={{ width: '0%' }} />
              </div>
           </div>

           {/* Section 4: UI/UX */}
           <div ref={seg4Ref} className="flex flex-col gap-3" style={{ flex: '1 1 0%' }}>
              <div ref={icon4Ref} className="transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 3h6v6H3z"/><path d="M15 3h6v6h-6z"/><path d="M15 15h6v6h-6z"/><path d="M3 15h6v6H3z"/></svg>
              </div>
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                 <div ref={fill4Ref} className="absolute inset-0 bg-white origin-left" style={{ width: '0%' }} />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
