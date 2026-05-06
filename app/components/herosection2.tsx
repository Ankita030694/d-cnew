"use client";

import React from "react";

export function Herosection2() {
  return (
    <section 
      className="w-full relative font-sans flex flex-col justify-between min-h-[100dvh] pt-24 pb-12 md:pb-8 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundColor: '#fdfdfd',
      }}
    >
      {/* TOP BRANDING & NAV (As seen in screenshot) */}
      
      <div className="flex-1 flex flex-col items-center justify-center relative w-full py-12 md:py-20">
        
        <div className="flex flex-col items-center leading-none tracking-tight text-center w-full max-w-7xl relative">
          
          {/* Top Line: Crafting [video] bold */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 md:gap-x-6 w-full">
             
             <span className="text-5xl sm:text-7xl md:text-[7rem] font-medium text-black relative z-10">
               Crafting
             </span>
             
             {/* Mascot Circle Area */}
             <div className="relative w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 xl:w-72 xl:h-72 flex-shrink-0 -mt-1 sm:-mt-4 md:-mt-8 xl:-mt-10 z-30 aspect-square">
               
               {/* Dark Background */}
               <div 
                 className="absolute inset-0 rounded-[50%] bg-[#1A1A1A] z-0 origin-center [clip-path:circle(50%_at_50%_50%)]"
               />

               {/* The Static Mascot */}
               <div 
                 className="absolute inset-0 z-20 origin-center isolate overflow-visible"
                 style={{
                   transformOrigin: "50% 50%",
                   transform: "translate(0vw, calc(0vh + -2%)) scale(1.6)"
                 }}
               >
                  <video 
                     src="/mascot.webm" 
                     autoPlay 
                     loop 
                     muted 
                     playsInline
                     className="absolute inset-0 object-contain w-full h-full"
                     style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, black 19.75%, transparent 19.75%), radial-gradient(circle at 50% 50%, black 31.25%, transparent 31.75%), linear-gradient(to top, transparent 15%, black 15%)',
                        WebkitMaskComposite: 'source-over', 
                        maskImage: 'linear-gradient(to bottom, black 19.75%, transparent 19.75%), radial-gradient(circle at 50% 50%, black 31.25%, transparent 31.75%), linear-gradient(to top, transparent 15%, black 15%)',
                        maskComposite: 'add'
                     }}
                  />
               </div>

             </div>
             
             <span className="text-5xl sm:text-7xl md:text-[7rem] font-medium text-black relative z-10">
               bold
             </span>
          </div>

          {/* Bottom Line: design experiences */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-x-3 md:gap-x-8 -mt-1 sm:-mt-4 md:-mt-8 relative z-10">
            <span className="text-5xl sm:text-7xl md:text-[7rem] font-medium text-black">
              design
            </span>
            <span className="text-[2.8rem] sm:text-[5rem] md:text-[7rem] italic font-serif text-black leading-none pt-1 md:pt-4 pr-1">
              experiences
            </span>
            
          </div>

        </div>

        <div className="w-full flex flex-col gap-6 sm:flex-row sm:justify-between items-center mt-16 md:mt-30 relative z-10 md:pt-40">
           <span className="text-black text-xs md:text-base font-normal tracking-wide">
             @designncode
           </span>
           <span className="text-black text-xs md:text-base font-normal tracking-wide">
             We see the magic in the details.
           </span>
           <span className="text-black text-xs md:text-base font-normal tracking-wide cursor-pointer hover:underline underline-offset-4">
             Click for a surprise
           </span>
        </div>

      </div>
    </section>
  );
}