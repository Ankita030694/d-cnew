"use client";

const filterArrowSrc = "https://www.figma.com/api/mcp/asset/709e4de8-5a7a-4fdf-afb8-6cf03426bd71";
const placeholderImageSrc = "https://www.figma.com/api/mcp/asset/767dea03-8fab-4e1e-99d4-04009e598a45";

const projects = [
  { name: "Credsettle", category: "loan Settlement" },
  { name: "Credsettle", category: "loan Settlement" },
  { name: "Credsettle", category: "loan Settlement" },
  { name: "Credsettle", category: "loan Settlement" },
];

export function OurWorkSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1146px] flex-col px-2 pb-8 pt-6 md:px-4 md:pb-12 md:pt-[42px]">
      <div className="mx-auto flex w-full max-w-[814px] flex-col items-center text-center">
        <p className="text-[16px] leading-6 text-black md:text-[21px]">Work</p>
        <h1 className="mt-2 text-[32px] leading-[36px] font-medium text-black md:text-[64px] md:leading-[71px]">
          Projects we&apos;re <span className="font-serif italic">proud</span> of
        </h1>
        <p className="mt-4 max-w-[716px] text-[18px] leading-[24px] text-black/60 md:text-[26px] md:leading-[32px]">
          Take a look at the brands we&apos;ve collaborated with and the digital experiences we&apos;ve crafted.
          Clean design, smart strategy, and results that actually matter, every project tells a growth story.
        </p>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-[401px] items-center gap-[11px]">
        <button
          type="button"
          className="h-[45px] w-full bg-black px-[28px] text-left text-[17px] leading-[19px] font-medium text-[#efebe5] shadow-[0px_10px_16px_rgba(0,0,0,0.29),inset_0px_-3px_13px_rgba(232,232,232,0.76),inset_0px_4px_13px_rgba(232,232,232,0.76)] md:h-[56px] md:text-[19px] md:leading-[22px]"
        >
          All
        </button>
        <button
          type="button"
          aria-label="Next category"
          className="flex h-[45px] w-[45px] items-center justify-center bg-black shadow-[0px_10px_16px_rgba(0,0,0,0.29),inset_0px_-3px_13px_rgba(232,232,232,0.76),inset_0px_4px_13px_rgba(232,232,232,0.76)] md:h-[56px] md:w-[56px]"
        >
          <img src={filterArrowSrc} alt="" className="h-[17px] w-[13px] -scale-x-100 rotate-180" />
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-[21px] gap-y-[22px] md:mt-14 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={`${project.name}-${index}`} className="flex flex-col gap-[15px]">
            <div className="relative h-[225px] w-full overflow-hidden bg-white p-[9px] md:h-[478px] md:p-[12px]">
              <div className="flex h-full w-full items-center justify-center bg-[#d9dadd]">
                <img src={placeholderImageSrc} alt="" className="h-[105px] w-[105px] md:h-[524px] md:w-[524px]" />
              </div>
            </div>
            <div className="flex h-[54px] items-center justify-between bg-white px-[9px] md:h-[60px] md:px-[19px]">
              <p className="text-[21px] leading-[23px] font-semibold text-black">{project.name}</p>
              <p className="text-[17px] leading-[19px] font-medium text-black/50">{project.category}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
