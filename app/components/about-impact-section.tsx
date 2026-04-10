const impactStats = [
  { value: "100+", label: "SHOPIFY STORES BUILT" },
  { value: "50+", label: "CUSTOM CODE PROJECTS" },
  { value: "80+", label: "DESIGNS DELIVERED" },
];

export function AboutImpactSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-5 md:px-5 md:py-8">
      <div className="grid gap-3 md:grid-cols-3 md:gap-4">
        {impactStats.map((stat) => (
          <article
            key={stat.label}
            className="flex min-h-[165px] flex-col justify-between bg-[#313131] px-5 py-5 text-[#efebe5] md:min-h-[450px] md:px-8 md:py-8"
          >
            <p className="text-5xl leading-none font-light md:text-[75px]">
              {stat.value}
            </p>
            <p className="text-base leading-[1.2] md:text-[22px] md:leading-[22px]">
              {stat.label}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-6 md:mt-8 md:grid-cols-[439px_minmax(0,1fr)] md:items-center md:gap-[112px]">
        <div className="h-[240px] bg-[#a8d5ff] md:h-[591px]" />

        <div className="space-y-5 md:space-y-[45px]">
          <h2 className="text-3xl leading-tight font-medium text-black md:text-[49px] md:leading-[49px]">
            From Idea to Reality
          </h2>

          <div className="space-y-5 text-lg leading-[1.35] text-black/60 md:text-[22px] md:leading-[30px]">
            <p>
              We started with a simple idea — create digital experiences that
              are thoughtful, functional, and built to make an impact. What
              began as small projects and late-night brainstorming quickly grew
              into a passion for helping brands turn their ideas into reality.
            </p>
            <p>
              Today, we focus on delivering work that blends creativity with
              strategy. We believe in clear communication, honest collaboration,
              and building long-term partnerships. Every project we take on
              reflects our commitment to quality, consistency, and meaningful
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
