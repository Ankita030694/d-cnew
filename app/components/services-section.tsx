const services = [
  {
    title: "Brand Visuals",
    description: "Visual storytelling that makes your brand stand out.",
    video: "/1.mp4",
  },
  {
    title: "Brand Promotion",
    description: "Helping your brand reach the right audience.",
    video: "/2.mp4",
  },
  {
    title: "UI/UX Design",
    description: "User-focused interfaces designed for clarity and conversions.",
    video: "/3.mp4",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-4 py-10 md:px-5 md:py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-4xl leading-tight font-medium text-black md:text-6xl">
          How we help you{" "}
          <span className="font-serif italic font-medium">grooow</span>
        </h2>
      </div>

      <div className="mt-8 grid gap-5 md:mt-10 md:gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="overflow-hidden bg-[#f5f2ed] shadow-[0_4px_18px_rgba(0,0,0,0.15)]"
          >
            <div className="h-[240px] bg-[#ece8e2] sm:h-[300px] md:h-[356px]">
              <video
                src={service.video}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="space-y-2.5 px-4 py-4">
              <h3 className="text-[28px] leading-tight font-medium text-black md:text-[32px]">
                {service.title}
              </h3>
              <p className="text-[18px] leading-tight text-black/60 md:text-[24px]">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
