const logoSavant = "https://www.figma.com/api/mcp/asset/b15d86e6-fa59-4925-ab90-5deb3de0c24a";
const logoBillcut = "https://www.figma.com/api/mcp/asset/ae4d06c1-914d-4f2d-a955-1b7cf26ac861";
const logoIprKaro = "https://www.figma.com/api/mcp/asset/ddd2111a-dfb9-4a2f-9848-b1218eb1e3e0";
const logoJdCounsels = "https://www.figma.com/api/mcp/asset/de6ac427-2e1d-4b84-b52e-9231a456ac07";
const logoReconext = "https://www.figma.com/api/mcp/asset/ed181e2d-f3d6-42d2-ae09-dba157b21dd8";
const logoMills = "https://www.figma.com/api/mcp/asset/48a0642f-3445-436f-9946-325777624680";

const logos = [
  { src: logoSavant, alt: "Savant", dim: true },
  { src: logoBillcut, alt: "Billcut" },
  { src: logoIprKaro, alt: "IPR Karo" },
  { src: logoJdCounsels, alt: "JD Counsels" },
  { src: logoReconext, alt: "Reconext" },
  { src: logoMills, alt: "Mills and Reeve", dim: true },
];

export function ClientLogos() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-3 md:px-5">
      <div className="relative flex h-auto flex-col gap-4 overflow-hidden py-2 md:h-16 md:flex-row md:items-center md:gap-6 md:py-0">
        <p className="w-full shrink-0 text-center text-base leading-tight text-black/60 md:w-32 md:text-left md:text-xl">
          Businesses we&apos;ve helped grow faster.
        </p>

        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-6 md:gap-8">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className={`h-7 w-9 shrink-0 object-contain md:h-8 md:w-10 ${
                  logo.dim ? "opacity-20" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-9 bg-gradient-to-r from-background to-transparent md:left-36 md:w-11" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-9 bg-gradient-to-l from-background to-transparent md:w-11" />
      </div>
    </section>
  );
}
