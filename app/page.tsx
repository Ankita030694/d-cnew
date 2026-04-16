import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { ClientLogos } from "./components/client-logos";
import { ServicesSection } from "./components/services-section";
import { SelectedWorkSection } from "./components/selected-work-section";
import { PerformanceSection } from "./components/performance-section";
import { ExpertiseSection } from "./components/expertise-section";
import { WhyChooseSection } from "./components/why-choose-section";
import { FaqSection } from "./components/faq-section";
import { ProjectCtaSection } from "./components/project-cta-section";
import { FooterSection } from "./components/footer-section";
import { Herosection2 } from "./components/herosection2";

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
    <main className="flex flex-col w-full bg-background">
      <Navbar />

      <Herosection2 />
      
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-3 md:px-5 pt-10">
        <ClientLogos />
      </div>



      <ServicesSection />
      <SelectedWorkSection />
      <ExpertiseSection />
      <PerformanceSection />
      <WhyChooseSection />
      <FaqSection />
      <ProjectCtaSection />
      <FooterSection />

    </main>
  );
}
