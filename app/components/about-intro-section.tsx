export function AboutIntroSection() {
  return (
    <section className="mx-auto w-full max-w-7xl bg-background px-4 pb-12 pt-6 text-center md:px-5 md:pb-[60px] md:pt-[30px]">
      <div className="mx-auto flex max-w-[750px] flex-col items-center gap-[39px] md:gap-[60px]">
        <div className="flex w-full flex-col items-center gap-6 md:gap-[22px]">
          <p className="text-[26px] leading-[1] text-black md:text-[21px]">
            About us
          </p>

          <div className="flex w-full flex-col items-center gap-4 md:gap-[22px]">
            <h1 className="text-[44px] leading-[1] font-medium text-black md:text-[64px] md:leading-[71px]">
              Who <span className="font-serif italic">we</span> are
            </h1>

            <p className="max-w-[735px] text-[17px] leading-[1.2] text-black/60 md:text-[26px] md:leading-[32px]">
              We&apos;re designers, developers, and digital thinkers turning
              ideas into impactful digital experiences. We believe design should
              solve problems, connect brands with people, and deliver real
              results.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="relative overflow-hidden bg-black px-[26px] py-[6px] text-[23px] leading-[1] text-[#efebe5] shadow-[0_8px_12px_rgba(0,0,0,0.29)] md:px-[39px] md:py-[14px] md:text-[26px] md:leading-[32px]"
        >
          <span className="pointer-events-none absolute inset-0 shadow-[inset_0_-3px_13.8px_rgba(232,232,232,0.76),inset_0_4px_13.8px_rgba(232,232,232,0.76)]" />
          <span className="relative">Work With Us</span>
        </button>
      </div>
    </section>
  );
}
