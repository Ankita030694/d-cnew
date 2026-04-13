import Link from "next/link";

const offerings = [
  {
    title: "UI/UX Design",
    description: "User-focused interfaces designed to look sharp and convert better.",
  },
  {
    title: "Shopify Development",
    description: "High-converting Shopify stores optimized for performance and growth.",
  },
  {
    title: "Custom Development",
    description: "Fully custom-coded websites built for scalability and speed.",
  },
  {
    title: "WordPress Development",
    description: "Flexible CMS-powered websites easy to manage and scale.",
  },
];

export function PerformanceSection() {
  return (
    <section className="w-full bg-[#ece9e3] py-12 md:py-15">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[352px]">
            <h2 className="text-[43px] leading-[1.05] font-medium text-black md:text-[55px]">
              Our services
            </h2>
            <p className="mt-4 text-[16px] leading-[1.1] text-black/60 md:text-[20px]">
              What we design, build, and launch for modern brands.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center justify-center bg-black px-6 py-2.5 text-base font-normal text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98] md:mt-1 md:px-8 md:text-[27px] md:leading-none"
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-8 grid gap-3 md:mt-9 md:grid-cols-2 md:gap-4">
          {offerings.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-3 bg-[#f2f2f2] p-3 shadow-[0_2px_6px_rgba(0,0,0,0.15)] md:gap-4 md:p-4"
            >
              <div className="h-[39px] w-[39px] shrink-0 bg-[#ef9aa0] md:h-[51px] md:w-[51px]" />
              <div>
                <h3 className="text-xl leading-tight font-medium text-black md:text-[24px] md:leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-[560px] text-sm leading-tight text-black/80 md:text-[16px] md:leading-[1.1]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
