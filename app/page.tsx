import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { ClientLogos } from "./components/client-logos";
import { ServicesSection } from "./components/services-section";
import { PerformanceSection } from "./components/performance-section";
import { WhyChooseSection } from "./components/why-choose-section";
import { FaqSection } from "./components/faq-section";
import { ProjectCtaSection } from "./components/project-cta-section";
import { FooterSection } from "./components/footer-section";

export const metadata: Metadata = {
  title: "Website Development Company in India | Custom Web Design Services",
  description:
    "Designncode is a website development company in India offering custom website design, UI/UX, and conversion-focused web development services for growing businesses.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-background">
      <Navbar />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-1 flex-col px-4 pb-3 md:px-5 -mt-15">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-4xl leading-tight font-medium text-black md:text-6xl">
            Design that hits
          </h1>

          <p className="-mt-1 text-4xl leading-none font-medium italic font-serif text-black md:text-6xl">
            different
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-tight text-black/60 sm:text-xl md:mt-6 md:text-3xl">
            We mix strategy, UI/UX, and no-boring visuals to help brands look
            sharp, scroll-stopping, and impossible to ignore.
          </p>

          <Link
            href="/contact"
            className="mt-7 bg-black px-6 py-2 text-lg font-normal text-stone-100 shadow-xl shadow-black/40 sm:text-xl md:mt-8 md:px-8 md:text-2xl"
          >
            Get in touch
          </Link>

        </div>

        <ClientLogos />



      </section>



      <ServicesSection />
      <PerformanceSection />
      <WhyChooseSection />
      <FaqSection />
      <ProjectCtaSection />
      <FooterSection />

    </main>
  );
}
