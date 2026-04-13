const expertiseStats = [
  { value: "50+", label: "PROJECTS DELIVERED" },
  { value: "20+", label: "HAPPY CLIENTS" },
  { value: "100%", label: "CUSTOM DESIGN APPROACH" },
  { value: "48h", label: "AVERAGE PROJECT KICKOFF" },
];

export function ExpertiseSection() {
  return (
    <section className="w-full bg-[#ece9e3] py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5">
        <h2 className="text-[34px] leading-tight font-medium text-black md:text-[56px]">
          Expertise
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-8 md:gap-4">
          {expertiseStats.map((item) => (
            <article
              key={item.label}
              className="flex min-h-[138px] flex-col justify-between bg-[#2f3135] p-4 md:min-h-[190px] md:p-5"
            >
              <p className="text-[44px] leading-none font-light text-white md:text-[58px]">
                {item.value}
              </p>
              <p className="text-xs tracking-[0.03em] text-white/85 md:text-[16px] md:leading-none">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
