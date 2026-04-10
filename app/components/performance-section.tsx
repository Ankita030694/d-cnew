export function PerformanceSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-5 md:py-12">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-[36.5%] bg-[#a8d5ff] md:block" />

        <div className="relative z-10 flex min-h-[360px] flex-col justify-between gap-8 p-4 md:min-h-[560px] md:w-[63.5%] md:gap-11 md:p-10">
          <div className="space-y-4 md:space-y-5">
            <h2 className="max-w-[620px] text-3xl leading-[1.06] font-medium text-black sm:text-4xl md:text-[68px]">
              Digital Experiences That{" "}
              <span className="font-serif text-[1.02em] italic">Perform</span>
            </h2>

            <p className="max-w-[608px] text-lg leading-[1.3] text-black/60 sm:text-xl md:text-[28px] md:leading-[34px]">
              We design and build Shopify stores, UI/UX, and custom solutions
              that help brands grow, convert, and scale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:flex md:gap-[56px]">
            <div className="space-y-1">
              <p className="text-4xl leading-none font-medium text-black sm:text-5xl md:text-[68px]">
                100+
              </p>
              <p className="text-base leading-[1.2] text-black/65 sm:text-xl md:text-[32px] md:leading-[1.05]">
                Shopify Stores Built
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl leading-none font-medium text-black sm:text-5xl md:text-[68px]">
                50+
              </p>
              <p className="text-base leading-[1.2] text-black/65 sm:text-xl md:text-[32px] md:leading-[1.05]">
                Custom Code Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
