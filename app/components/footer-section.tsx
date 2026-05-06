import Link from "next/link";

const logoSrc = "https://www.figma.com/api/mcp/asset/ddb21b60-02dd-47bc-8aba-750ae2dd0128";
const xIconSrc = "https://www.figma.com/api/mcp/asset/c67635d4-b203-45b0-ad5f-7b83d44f584b";
const instagramIconSrc = "https://www.figma.com/api/mcp/asset/803847df-f4ae-437b-a6f5-daee737eca6e";
const linkedinIconSrc = "https://www.figma.com/api/mcp/asset/e3d8fd0f-6949-4db8-8f0a-d7b2d33c8f6b";

type FooterLinkColumn = {
  heading: string;
  links: {
    label: string;
    href: string;
  }[];
};

const linkColumns: FooterLinkColumn[] = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/our-work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Book a call", href: "/contact" },
      { label: "Email", href: "mailto:ankita03malik@gmail.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-6 pt-24 md:px-[45px] md:pb-9 md:pt-8">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-[397px]">
          <img src={logoSrc} alt="Designncode" className="h-[35px] md:h-[45px] w-auto" />

          <h2 className="mt-6 text-[24px] leading-[30px] font-medium text-black md:text-[34px] md:leading-[40px]">
            Design that looks good.
            <br />
            Code that <span className="font-serif italic">works better</span>.
          </h2>

          <p className="mt-3 text-[15px] leading-[20px] text-black/50 md:text-[19px]">
            Built for startups, creators, and brands who want to stand out
            online.
          </p>

          <div className="mt-8 flex items-center gap-4 md:gap-[22px]">
            <a
              href="https://x.com/designncode"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="size-10 md:size-[52px]"
            >
              <img src={xIconSrc} alt="" className="h-full w-full" />
            </a>
            <a
              href="https://instagram.com/designncode"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="size-10 md:size-[52px]"
            >
              <img src={instagramIconSrc} alt="" className="h-full w-full" />
            </a>
            <a
              href="https://linkedin.com/company/designncode"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="size-10 md:size-[52px]"
            >
              <img src={linkedinIconSrc} alt="" className="h-full w-full" />
            </a>
          </div>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 md:gap-[90px]"
        >
          {linkColumns.map((column) => (
            <div key={column.heading} className="space-y-[16px]">
              <h3 className="text-[19px] md:text-[21px] leading-[22px] font-medium text-black md:text-[22px]">
                {column.heading}
              </h3>

              <ul className="space-y-[10px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] md:text-[17px] leading-[19px] font-medium text-black/65 md:text-[19px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <p className="mt-9 text-[15px] leading-[17px] text-black/50 md:mt-10 md:text-[17px]">
        &copy; 2026 Designncode. All rights reserved.
      </p>
    </footer>
  );
}
