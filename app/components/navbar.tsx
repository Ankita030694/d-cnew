"use client";

import Link from "next/link";
import { useState } from "react";

const menuIconSrc = "https://www.figma.com/api/mcp/asset/2dd1c042-fa3c-4710-839a-fe12927e412e";
const closeIconSrc = "https://www.figma.com/api/mcp/asset/95a85f18-ba4a-4556-a399-df129c52beeb";
const logoSrc = "https://www.figma.com/api/mcp/asset/c856f3af-a4f0-4206-93d6-fd9b1b2e7e99";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-[100] mx-auto w-full max-w-7xl md:mt-4">
      <div className="relative h-14 w-full overflow-hidden bg-white/70 px-4 shadow-sm backdrop-blur-md md:h-[80px] md:px-8 border-b border-gray-100 md:rounded-2xl">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="absolute left-4 top-1/2 z-40 flex items-center justify-center -translate-y-1/2"
        >
          {isMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <div className="flex flex-col gap-1.5 items-start">
              <span className="w-6 h-0.5 bg-black rounded-full transition-all"></span>
              <span className="w-4 h-0.5 bg-black rounded-full transition-all"></span>
            </div>
          )}
        </button>

        <Link href="/" aria-label="Go to homepage" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="border border-black/60 px-4 py-2 relative inline-flex backdrop-blur-sm scale-[0.8] md:scale-100 origin-center">
            {/* Transform Nodes */}
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border border-black/80 bg-white" />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border border-black/80 bg-white" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border border-black/80 bg-white" />
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border border-black/80 bg-white" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-black/80 bg-white" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-black/80 bg-white" />
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 border border-black/80 bg-white" />
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 border border-black/80 bg-white" />
            
            <span className="text-black font-bold tracking-[0.25em] text-[11px] md:text-[13px] leading-none mt-[1px] whitespace-nowrap">DESIGNNCODE</span>
          </div>
        </Link>

        <Link
          href="/contact"
          className="hidden absolute right-4 top-1/2 -translate-y-1/2 bg-black px-6 py-2.5 text-center text-xs font-bold text-white uppercase tracking-wider md:block md:right-6 md:px-8 md:py-3 md:text-sm"
        >
          LET&apos;S WORK TOGETHER
        </Link>

        <Link
          href="/contact"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black px-3 py-1.5 text-center text-[10px] font-bold text-white uppercase md:hidden"
        >
          LET&apos;S WORK
        </Link>
      </div>
      <div
        className={`overflow-hidden bg-white/90 shadow-xl backdrop-blur-lg transition-all duration-300 ease-out md:rounded-2xl mt-2 ${
          isMenuOpen
            ? "max-h-[460px] translate-y-0 opacity-100 md:max-h-[430px]"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid gap-6 px-4 py-5 md:grid-cols-2 md:gap-10 md:px-[22px] md:py-[22px]">
          <div className="flex flex-col gap-4 text-[32px] leading-[1] font-medium text-black md:text-[53px] md:leading-[53px]">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/our-work" onClick={closeMenu}>Work</Link>
            <Link href="/about" onClick={closeMenu}>About Us</Link>
            <Link href="/#services" onClick={closeMenu}>Services</Link>
            <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
          </div>

          <div className="flex flex-col gap-5 text-[18px] leading-[21px] text-black md:items-end md:text-[21px]">
            <div className="flex flex-col gap-[11px] md:items-end">
              <p className="text-black/55 md:text-[24px] md:leading-[24px]">CONTACT</p>
              <a href="mailto:ankita03malik@gmail.com">ankita03malik@gmail.com</a>
            </div>
            <div className="flex flex-col gap-[11px] md:items-end">
              <p>Instagram</p>
              <a href="https://instagram.com/designncode" target="_blank" rel="noreferrer">
                @designncode
              </a>
            </div>
            <div className="flex flex-col gap-[11px] md:items-end">
              <p>LinkedIn</p>
              <a href="https://linkedin.com/company/designncode" target="_blank" rel="noreferrer">
                @designncode
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
