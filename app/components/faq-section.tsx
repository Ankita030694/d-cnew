const faqItems = [
  {
    question: "How quickly will you respond after I submit the form?",
    answer:
      "We usually respond within 24 hours on business days. For urgent projects, mention timelines in your message and we will prioritize it.",
  },
  {
    question: "Which payment options can I use?",
    answer:
      "We support standard bank transfer and UPI options for client projects. Detailed payment milestones are shared before kickoff.",
  },
  {
    question: "How can I track my project status?",
    answer:
      "You get regular updates with milestones, shared previews, and clear delivery checkpoints so you always know what is in progress.",
  },
  {
    question: "Can I update requirements after the project starts?",
    answer:
      "Yes. We can handle scope updates through a change request process and align on timeline or pricing changes before implementation.",
  },
];

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group bg-[#e6e3df]" open={defaultOpen}>
      <summary className="flex min-h-full w-full cursor-pointer list-none items-center justify-between px-5 py-2.5 text-left md:px-[38px]">
        <span className="pr-4 text-[16px] leading-tight font-medium text-black md:text-[18px] md:leading-[18px]">
          {question}
        </span>
        <span
          aria-hidden
          className="text-[42px] leading-none font-light text-[#1d1848]"
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">{"\u2212"}</span>
        </span>
      </summary>
      <div className="px-5 pb-4 md:px-[38px] md:pb-6">
        <p className="max-w-4xl text-[16px] leading-[1.45] text-black/70 md:text-[18px]">
          {answer}
        </p>
      </div>
    </details>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-5 md:py-16">
      <div className="bg-[#efefef] p-4 shadow-[0_4px_18px_rgba(0,0,0,0.15)] sm:p-5 md:p-[50px]">
        <h2 className="max-w-[806px] text-3xl leading-tight font-medium text-black sm:text-4xl md:text-[45px] md:leading-[85px]">
          Frequently Asked <span className="font-serif italic">Questions</span>
        </h2>

        <div className="mt-8 flex flex-col gap-4 md:mt-10 md:gap-[25px]">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
