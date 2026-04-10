const serviceOptions = [
  { label: "UI/UX Design", selected: true },
  { label: "Website Design", selected: false },
  { label: "Landing Pages", selected: false },
  { label: "Branding", selected: false },
];

function ServiceOption({
  label,
  selected,
}: {
  label: string;
  selected: boolean;
}) {
  return (
    <button
      type="button"
      className="flex h-[33px] items-center gap-2 border border-black px-2.5 text-[15px] leading-none text-black md:h-[38px] md:px-4 md:text-[19px]"
      aria-pressed={selected}
    >
      <span
        aria-hidden
        className={`inline-block size-[10px] rounded-full border border-[rgba(239,235,229,0.82)] md:size-4 ${
          selected ? "bg-black border-black" : "bg-[#efebe5]"
        }`}
      />
      <span>{label}</span>
    </button>
  );
}

export function ContactBookCallSection() {
  return (
    <section className="mx-auto w-full max-w-7xl bg-[#efebe5] px-4 py-6 md:px-5 md:py-9">
      <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-10">
        <div className="not-italic">
          <p className="text-[18px] leading-[21px] text-black md:text-[21px]">
            Book a call
          </p>
          <h1 className="mt-3 max-w-[490px] text-[40px] leading-[0.95] font-medium text-black md:mt-[22px] md:text-[58px] md:leading-[71px]">
            Let&apos;s build something that actually converts.
          </h1>
          <p className="mt-4 max-w-[496px] text-[27px] leading-[1.05] text-black/60 md:mt-[22px] md:text-[24px] md:leading-[32px]">
            Got an idea? A messy website? Or just tired of boring design? Hit us
            up, we&apos;ll turn your vision into clean, high-converting digital
            experiences.
          </p>
        </div>

        <form className="flex flex-col gap-6 md:gap-8">
          <label className="flex flex-col gap-2 md:gap-3">
            <span className="text-[18px] leading-[22px] font-semibold text-black/60">
              Name*
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              className="h-6 border-0 border-b border-black bg-transparent px-0 text-[16px] text-black outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 md:gap-3">
            <span className="text-[18px] leading-[22px] font-semibold text-black/60">
              Email*
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="h-6 border-0 border-b border-black bg-transparent px-0 text-[16px] text-black outline-none"
            />
          </label>

          <div className="flex flex-col gap-4 md:gap-[22px]">
            <p className="text-[20px] leading-[20px] font-medium text-black">
              What services are you interested in?*
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {serviceOptions.map((service) => (
                <ServiceOption
                  key={service.label}
                  label={service.label}
                  selected={service.selected}
                />
              ))}
            </div>
          </div>

          <label className="flex flex-col gap-2 md:gap-[26px]">
            <span className="text-[22px] leading-[22px] font-semibold text-black/60">
              Tell us about your project... *
            </span>
            <textarea
              rows={1}
              name="project"
              required
              className="min-h-[33px] resize-none border-0 border-b border-black bg-transparent px-0 text-[19px] text-black outline-none"
            />
          </label>

          <button
            type="submit"
            className="h-[56px] w-full bg-black text-[19px] leading-[19px] text-[#efebe5] shadow-[0_8px_12px_rgba(0,0,0,0.29)]"
          >
            Book a call
          </button>
        </form>
      </div>
    </section>
  );
}
