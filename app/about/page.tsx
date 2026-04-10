import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { AboutIntroSection } from "../components/about-intro-section";
import { ClientLogos } from "../components/client-logos";
import { AboutImpactSection } from "../components/about-impact-section";
import { FaqSection } from "../components/faq-section";
import { ProjectCtaSection } from "../components/project-cta-section";
import { FooterSection } from "../components/footer-section";

export const metadata: Metadata = {
  title: "About Our Web Development Agency in India",
  description:
    "Learn how our web development agency in India combines strategy, UI/UX, and modern website development to build high-performing digital products.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-background">
      <Navbar />

      <AboutIntroSection />
      <ClientLogos />
      <AboutImpactSection />
      <FaqSection />
      <ProjectCtaSection />
      <FooterSection />
    </main>
  );
}
