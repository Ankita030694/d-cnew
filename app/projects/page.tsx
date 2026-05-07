import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { ProjectsShowcase } from "../components/projects-showcase";
import { FaqSection } from "../components/faq-section";
import { ProjectCtaSection } from "../components/project-cta-section";

export const metadata: Metadata = {
  title: "Our Projects | Web Design & Development Portfolio",
  description:
    "Take a look at the brands we've collaborated with and the digital experiences we've crafted. Clean design, smart strategy, and results that actually matter.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-white min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 md:pt-40 pb-10 md:pb-14 px-6 text-center">
        <p className="text-sm md:text-base font-medium tracking-wide text-black/70 mb-4">
          Work
        </p>
        <h1 className="text-[36px] md:text-[64px] leading-[1.1] font-medium text-black max-w-3xl mx-auto">
          Projects we&apos;re{" "}
          <span className="font-serif italic">proud</span> of
        </h1>
        <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] leading-[1.6] text-black/50 max-w-lg mx-auto">
          Take a look at the brands we&apos;ve collaborated with and the digital
          experiences we&apos;ve crafted. Clean design, smart strategy, and
          results that actually matter, every project tells a growth story.
        </p>
      </section>

      {/* Projects Showcase with Filter */}
      <ProjectsShowcase />

      <FaqSection />
      <ProjectCtaSection />

      <FooterSection />
    </main>
  );
}
