import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { OurWorkSection } from "../components/our-work-section";
import { FaqSection } from "../components/faq-section";
import { ProjectCtaSection } from "../components/project-cta-section";
import { FooterSection } from "../components/footer-section";

export const metadata: Metadata = {
  title: "Web Design and Development Portfolio in India",
  description:
    "Explore our web design and development portfolio in India featuring custom website projects, responsive user experiences, and conversion-focused digital work.",
  alternates: {
    canonical: "/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-background">
      <Navbar />
      <OurWorkSection />
      <FaqSection />
      <ProjectCtaSection />
      <FooterSection />
    </main>
  );
}
