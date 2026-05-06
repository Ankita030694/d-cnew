import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { ContactBookCallSection } from "../components/contact-book-call-section";
import { ClientLogos } from "../components/client-logos";
import { FaqSection } from "../components/faq-section";
import { ProjectCtaSection } from "../components/project-cta-section";
import { FooterSection } from "../components/footer-section";

export const metadata: Metadata = {
  title: "Contact Website Development Experts in India",
  description:
    "Contact our website development experts in India for custom web design, ecommerce website development, and scalable web solutions tailored to your goals.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-[#efebe5] pt-24 md:pt-40 space-y-8">
      <Navbar />
      <ContactBookCallSection />
      <ClientLogos />
      <FaqSection />
      <ProjectCtaSection />
      <FooterSection />
    </main>
  );
}
