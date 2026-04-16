import Image from "next/image";

export function Services2() {
  return (
    <section className="w-full bg-[#2b2b2b] pt-24 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Design That Performs.<br />
            Built With <span className="font-serif italic font-normal opacity-90">Purpose.</span>
          </h2>
        </div>
        
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <div className="bg-white flex flex-col h-full overflow-hidden shrink-0">
             <div className="relative h-[250px] w-full bg-neutral-900 overflow-hidden shrink-0">
               <Image 
                  src="/img1.jpg"
                  alt="Purposeful Design"
                  fill
                  className="object-cover opacity-80" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
               <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">
                  <h3 className="text-white text-xl md:text-2xl font-semibold max-w-[220px] leading-snug tracking-tight">
                    Purposeful Design for Modern Brands.
                  </h3>
                  <div className="flex justify-between items-end w-full">
                     <span className="text-white/80 text-xs tracking-wider">© 2026</span>
                     <button className="bg-white text-black px-3 py-1.5 text-xs font-semibold hover:bg-neutral-200 transition-colors uppercase tracking-tight">
                       Get started +
                     </button>
                  </div>
               </div>
             </div>
             <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center">
               <ul className="space-y-4">
                 {[
                   'Collaborative Approach',
                   'Fast Turnaround',
                   'Clear Communication',
                   'Consistent Quality',
                   'Reliable Support'
                 ].map(item => (
                   <li key={item} className="flex items-center gap-3 text-[#333] font-medium text-[15px]">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#444] shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#e5e5e5] flex flex-col p-6 sm:p-8 shrink-0">
             <div className="flex -space-x-3 mb-10">
               <div className="w-[50px] h-[50px] rounded-full bg-[#3d3d3d] border-2 border-[#e5e5e5] relative z-10" />
               <div className="w-[50px] h-[50px] rounded-full bg-[#828282] border-2 border-[#e5e5e5] relative z-20" />
               <div className="w-[50px] h-[50px] rounded-full bg-[#b8b8b8] border-2 border-[#e5e5e5] relative z-30" />
               <div className="w-[50px] h-[50px] rounded-full bg-[#ff9797] border-2 border-[#e5e5e5] relative z-40" />
             </div>
             <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
               <span className="text-2xl">100+</span> 
               <span className="font-medium text-[#4a4a4a] text-base">Happy clients worldwide</span>
             </h3>
             <blockquote className="text-[17px] text-[#444] leading-relaxed font-medium flex-grow mb-8 text-balance">
               &ldquo;Designncode understood our brand better than we did. Their ability to simplify complexity and deliver high-quality design is unmatched.&rdquo;
             </blockquote>
             <div className="border-t border-[#ccc] pt-5">
               <div className="font-bold text-[#1a1a1a]">Aarav Mehta</div>
               <div className="text-[#666] text-sm mt-0.5">Founder</div>
             </div>
          </div>

          {/* Column 3 (Three Stacked) */}
          <div className="flex flex-col gap-4 md:gap-6 shrink-0 h-full">
             <div className="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-[17px] font-bold text-[#111] mb-2 tracking-tight">Streamlined Process</h3>
                <p className="text-[#666] text-[15px] leading-snug">Clear steps that keep projects fast and on track.</p>
             </div>
             <div className="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-[17px] font-bold text-[#111] mb-2 tracking-tight">Scalable Design</h3>
                <p className="text-[#666] text-[15px] leading-snug">Built to grow with your brand over time.</p>
             </div>
             <div className="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-[17px] font-bold text-[#111] mb-2 tracking-tight">24/7 Dedicated Support</h3>
                <p className="text-[#666] text-[15px] leading-snug">Always available when you need us.</p>
             </div>
          </div>

          {/* Card 4 */}
          <div className="bg-neutral-900 shrink-0 overflow-hidden relative min-h-[400px] md:min-h-full">
             <Image 
                src="/img2.jpg"
                alt="Design with intent"
                fill
                className="object-cover grayscale contrast-125 brightness-75"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
             
             <div className="absolute inset-0 flex flex-col items-center justify-between p-8 pb-10">
                <div className="border border-white/60 px-5 py-2.5 relative mt-6 inline-flex backdrop-blur-sm">
                  {/* Transform Nodes */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 border border-white/80 bg-black/50" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border border-white/80 bg-black/50" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-white/80 bg-black/50" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-white/80 bg-black/50" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 border border-white/80 bg-black/50" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border border-white/80 bg-black/50" />
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 border border-white/80 bg-black/50" />
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 border border-white/80 bg-black/50" />
                  
                  <span className="text-white font-bold tracking-[0.2em] text-[13px] leading-none mt-[1px]">DESIGNNCODE</span>
                </div>

                <div className="text-center w-full">
                   <h3 className="text-white font-semibold text-2xl mb-1.5 tracking-tight">Design with intent.</h3>
                   <p className="text-white/70 text-sm tracking-wide">No clutter, just results.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
