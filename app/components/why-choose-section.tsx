const designncodeLogo =
  "https://www.figma.com/api/mcp/asset/a7924c34-59c8-4713-9be5-928d194bb762";

const otherAgenciesPoints = [
  "Generic templates",
  "Limited customization",
  "Slow turnaround time",
  "Poor communication",
  "One-size-fits-all solutions",
];

const designncodePoints = [
  "Fully custom UI/UX design",
  "Shopify & custom code expertise",
  "Fast and responsive delivery",
  "Clear communication & support",
  "Tailored for your business goals",
];

function ListItem({ text, positive }: { text: string; positive: boolean }) {
  return (
    <li className="flex items-center gap-3 md:gap-[18px]">
      <span
        className={`flex size-7 shrink-0 items-center justify-center rounded-full text-lg leading-none md:size-[34px] ${
          positive ? "bg-black text-white" : "bg-black/45 text-white/95"
        }`}
        aria-hidden
      >
        {positive ? "\u2713" : "\u00d7"}
      </span>
      <span
        className={`text-[17px] leading-[1.2] md:text-[18px] md:leading-[1.2] ${
          positive ? "text-black" : "text-black/50"
        }`}
      >
        {text}
      </span>
    </li>
  );
}

export function WhyChooseSection() {
  return (
    <section className="w-full bg-[#2F2F2F] py-10 md:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-5">
        <h2 className="mx-auto max-w-[750px] text-center text-3xl leading-[1.15] font-medium text-white sm:text-4xl md:text-[64px] md:leading-[71px]">
          Why choose <span className="font-serif italic">Designncode</span> over
          everyone else?
        </h2>

        <div className="mt-8 grid gap-6 md:mt-15 md:grid-cols-2 md:gap-9">
          <article className="flex flex-col items-center gap-4 md:gap-[30px]">
            <h3 className="text-[28px] leading-none font-medium text-white/50 md:text-[30px] md:leading-[30px]">
              Other Agencies
            </h3>
            <div className="w-full bg-[#ece9e3] px-3 py-4 md:min-h-[289px] md:px-[22px] md:py-[22px]">
              <ul className="space-y-4 md:space-y-[18px]">
                {otherAgenciesPoints.map((point) => (
                  <ListItem key={point} text={point} positive={false} />
                ))}
              </ul>
            </div>
          </article>

          <article className="-mt-2 flex flex-col items-center gap-4 md:gap-[22px]">
            <img
              src={designncodeLogo}
              alt="Designncode"
              className="h-[33px] w-[112px] object-contain brightness-0 invert md:h-[45px] md:w-[152px]"
            />
            <div className="w-full bg-[#ece9e3] px-3 py-4 md:min-h-[289px] md:px-[22px] md:py-[22px]">
              <ul className="space-y-4 md:space-y-[18px]">
                {designncodePoints.map((point) => (
                  <ListItem key={point} text={point} positive />
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
