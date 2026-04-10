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
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl md:mt-3">
      <div className="relative h-12 w-full overflow-hidden bg-[rgba(148,148,148,0.40)] px-2 shadow-xl shadow-gray-400/40 backdrop-blur-[7.3px] md:h-[75px] md:px-6">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="absolute left-1 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center"
        >
          <img
            src={isMenuOpen ? closeIconSrc : menuIconSrc}
            alt=""
            className="h-4 w-4 object-contain"
          />
        </button>

        <Link href="/" aria-label="Go to homepage">
          <img
            src={logoSrc}
            alt="Designncode"
            className="absolute left-1/2 top-2 h-8 w-24 -translate-x-1/2 md:top-4 md:h-[45px] md:w-[152px]"
          />
        </Link>

        <Link
          href="/contact"
          className="hidden absolute right-4 top-2 bg-black px-4 py-2 text-center text-sm leading-4 font-normal text-white md:block md:right-[22px] md:top-4 md:px-[30px] md:py-[14px] md:text-[16px] md:leading-[16px]"
        >
          LET&apos;S WORK TOGETHER
        </Link>

        <Link
          href="/contact"
          className="absolute right-2 top-2 z-30 bg-black px-2.5 py-1.5 text-center text-[10px] leading-3 font-normal text-white md:hidden"
        >
          LET&apos;S WORK
        </Link>
      </div>
      <div
        className={`overflow-hidden bg-[rgba(148,148,148,0.40)] shadow-xl shadow-gray-400/40 backdrop-blur-[7.3px] transition-all duration-300 ease-out ${
          isMenuOpen
            ? "mt-1 max-h-[460px] translate-y-0 opacity-100 md:max-h-[430px]"
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
