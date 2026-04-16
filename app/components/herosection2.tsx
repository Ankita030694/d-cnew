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
  const progressBarRef = useRef<HTMLDivElement>(null);

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
      
      // 1. Circle expands (0.0 to 0.25)
      const p1 = Math.min(progress / 0.25, 1);
      circleBgRef.current.style.transform = `scale(${1 + p1 * 50})`;
      
      // The text fading logic has been removed so it remains visible under the circle
      // 2. Circle eclipses text due to z-index (no JS required)

      // 3. Mascot shifts right & scales up (0.25 to 0.5)
      let p2 = 0; 
      if (progress > 0.25) p2 = Math.min((progress - 0.25) / 0.25, 0.5);
      
      const isMobile = window.innerWidth < 768; // standard md tailwind breakpoint

      let shiftX = 0;
      let shiftY = 0;
      let mascotScale = 1;

      if (isMobile) {
         // Mobile: Pull slightly UP over the text, remain horizontally centered, scale moderately
         shiftX = p2 * 0; 
         shiftY = p2 * -35; // Move UP 35vh to anchor near top
         mascotScale = 1 + p2 * 1.5; // Scale to fit nicely top-center
      } else {
         // Desktop: Pristine untouched logic
         shiftX = p2 * 50; 
         shiftY = p2 * 40; 
         mascotScale = 1 + p2 * 2.5; 
      }
      
      if (mascotRef.current) {
        mascotRef.current.style.transformOrigin = "50% 30%"; 
        mascotRef.current.style.transform = `translate(${shiftX}vw, ${shiftY}vh) scale(${mascotScale})`;
        
        // Once the black background fully consumed the screen (p2 > 0), we can turn off the circular clip mask.
        // This instantly reveals the full uncropped mascot video. Because the screen is already black, the video bounds will seamlessly blend in.
        if (p2 > 0.02) {
           mascotRef.current.style.overflow = "visible";
        } else {
           mascotRef.current.style.overflow = "hidden";
        }
      }
      
      const videoEl = mascotRef.current?.querySelector("video");
      if (videoEl) {
         // Clear any residual JS overrides to restore your perfect original circle layout
         videoEl.style.marginTop = "";
         videoEl.style.transform = "";
         videoEl.style.objectPosition = "";
      }

      // 4. Reveal Left Text Container (0.3 to 0.45)
      let p3 = 0; 
      if (progress > 0.3) p3 = Math.min((progress - 0.3) / 0.15, 1);
      if (leftTextRef.current) leftTextRef.current.style.opacity = p3.toString();

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
      
      if (progressBarRef.current) {
         let slideProgress = 0;
         if (progress > 0.4) {
            slideProgress = Math.min((progress - 0.4) / 0.6, 1);
         }
         // Using width instead of transform for broader compatibility without conflicting with Tailwind's root CSS variables
         progressBarRef.current.style.width = `${slideProgress * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="bg-white h-[500vh] w-full relative font-sans">
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 overflow-hidden">
        
        {/* LEFT INCOMING TEXT CONTAINER */}
        <div 
          ref={leftTextRef} 
          className="absolute top-0 left-0 w-full md:w-[55%] h-full flex flex-col justify-end md:justify-center px-6 sm:px-10 md:px-24 z-40 opacity-0 pointer-events-none pb-24 md:pb-0"
        >
            <div className="grid w-full text-white">
                
                {/* 1. Shopify Development */}
                <div ref={text1Ref} className="col-start-1 row-start-1 flex flex-col justify-center transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Shopify Development.</h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We build high-performing Shopify stores designed to convert visitors into customers. From seamless navigation to optimized product pages, every detail is crafted to enhance user experience and drive sales. Whether you're launching or scaling, we create stores that grow with your business.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-400 font-light text-xs sm:text-sm md:text-base tracking-wide">
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Custom Shopify Stores</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Theme Customization</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Conversion Optimization</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>App Integrations</li>
                   </ul>
                </div>

                {/* 2. Custom Development */}
                <div ref={text2Ref} className="col-start-1 row-start-1 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Custom Development.</h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We engineer bespoke, high-performance web applications tailored to your specific business infrastructure. By leveraging modern frameworks, we ensure your digital platform is highly scalable, fast, and completely free from creative limitations.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-400 font-light text-xs sm:text-sm md:text-base tracking-wide">
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Scalable Web Apps</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>API Integrations</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Full-Stack Architecture</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Database Design</li>
                   </ul>
                </div>

                {/* 3. WordPress Development */}
                <div ref={text3Ref} className="col-start-1 row-start-1 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">WordPress Development.</h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We craft fully customized, responsive WordPress websites that give you effortless control over your content. Blending premium aesthetic design with rock-solid technical foundations, our builds ensure rapid load times and ironclad security.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-400 font-light text-xs sm:text-sm md:text-base tracking-wide">
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Custom Themes</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>SEO Optimization</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Secure Architecture</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Seamless Migrations</li>
                   </ul>
                </div>

                {/* 4. UI/UX Design */}
                <div ref={text4Ref} className="col-start-1 row-start-1 flex flex-col justify-center opacity-0 transition-opacity duration-300">
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">UI/UX Design.</h2>
                   <p className="text-sm sm:text-base md:text-xl text-gray-300 font-light max-w-lg mb-6 leading-relaxed">
                     We create stunning, intuitive interfaces that delight users and foster deep engagement. Through rigorous research and wireframing, we architect digital environments that remove friction and convert passive visitors into loyal brand advocates.
                   </p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-400 font-light text-xs sm:text-sm md:text-base tracking-wide">
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Prototyping & Wireframes</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>User Research</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Journey Mapping</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>Interface Design</li>
                   </ul>
                </div>

            </div>
             
             {/* Progress Bar Container */}
             <div className="w-full max-w-lg h-1 bg-white/20 rounded-full mt-12 overflow-hidden relative">
                <div ref={progressBarRef} className="absolute left-0 top-0 h-full bg-white transition-none" style={{ width: '0%' }} />
             </div>
        </div>


        <div className="flex-1 flex flex-col items-center justify-center relative w-full pt-10 pb-20">
          
          <div className="flex flex-col items-center leading-none tracking-tight text-center w-full max-w-7xl relative">
            
            {/* Top Line: Designing [video] bold */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 md:gap-x-6 w-full">
               
               <span ref={heroText1Ref} className="text-5xl sm:text-7xl md:text-9xl font-medium text-black relative z-10 will-change-transform">
                 Designing
               </span>
               
               {/* Mascot Circle Area (Z-30 so it eclipses the Z-10 texts) */}
               <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 xl:w-72 xl:h-72 flex-shrink-0 -mt-2 sm:-mt-4 md:-mt-8 xl:-mt-10 z-30 aspect-square">
                 
                 {/* Expanding Dark Background */}
                 <div 
                   ref={circleBgRef}
                   className="absolute inset-0 rounded-full bg-[#2F2F2F] shadow-lg will-change-transform z-0 origin-center"
                 />

                 {/* The Static Mascot */}
                 <div 
                   ref={mascotRef}
                   className="absolute inset-0 rounded-full overflow-hidden will-change-transform z-10 origin-center"
                 >
                    <video 
                       src="/dnc_mascot.mp4" 
                       autoPlay 
                       loop 
                       muted 
                       playsInline
                       className="absolute inset-0 object-contain scale-[1] w-full h-full"
                    />
                 </div>

               </div>
               
               <span ref={heroText2Ref} className="text-5xl sm:text-7xl md:text-9xl font-medium text-black relative z-10 will-change-transform">
                 bold
               </span>
            </div>

            {/* Bottom Line: digital products */}
            <div ref={heroText3Ref} className="flex flex-row flex-wrap justify-center items-center gap-x-4 md:gap-x-8 -mt-2 sm:-mt-4 md:-mt-8 relative z-10 will-change-transform">
              <span className="text-5xl sm:text-7xl md:text-9xl font-medium text-black">
                digital
              </span>
              <span className="text-[3.5rem] sm:text-[5rem] md:text-[8.5rem] italic font-serif text-black leading-none pt-2 md:pt-4 pr-1">
                products
              </span>
            </div>

          </div>

          <div ref={footerRef} className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between items-center mt-30 relative z-10 will-change-transform border-t border-black/80 pt-6">
             <span className="text-black text-sm md:text-base font-normal tracking-wide">
               designncode
             </span>
             <span className="text-black text-sm md:text-base font-normal tracking-wide">
               We see the magic in the details.
             </span>
             <span className="text-black text-sm md:text-base font-normal tracking-wide cursor-pointer hover:underline underline-offset-4">
               Explore our work
             </span>
          </div>

        </div>

      </div>
    </section>
  );
}
