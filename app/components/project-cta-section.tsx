import Link from "next/link";

export function ProjectCtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-5 md:py-10">
      <div className="grid gap-3 md:grid-cols-[1fr_0.61fr] md:gap-[14px]">
        <article className="bg-[#f1eee9] px-6 py-8 shadow-[0_4px_18px_rgba(0,0,0,0.15)] md:px-[32px] md:py-[74px]">
          <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
            <h2 className="text-[30px] leading-[1.08] font-medium text-black sm:text-[34px] md:text-[56px] md:leading-[64px]">
              Your next big project{" "}
              <span className="font-serif italic">starts here</span>.
            </h2>

            <p className="mt-4 max-w-[486px] text-[18px] leading-[1.25] text-black/60 sm:mt-5 sm:text-[23px] md:mt-[22px] md:text-[26px] md:leading-[32px]">
              Let&apos;s design, build, and launch something that drives real
              results for your brand.
            </p>

            <Link
              href="/contact"
              className="mt-6 bg-black px-6 py-2 text-[20px] leading-[1.2] text-[#efebe5] shadow-[0_10px_16.2px_rgba(0,0,0,0.29)] sm:px-7 sm:py-1.5 sm:text-[24px] md:mt-7 md:px-[39px] md:py-[14px] md:text-[34px] md:leading-[32px]"
            >
              Start a Project
            </Link>
          </div>
        </article>

        <article className="overflow-hidden bg-[#f1eee9] shadow-[0_4px_18px_rgba(0,0,0,0.15)]">
          <video
            src="/3.mp4"
            className="h-full min-h-[270px] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </article>
      </div>
    </section>
  );
}
