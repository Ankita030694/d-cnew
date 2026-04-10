import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Web Development Services India",
  description:
    "Review the terms of service for Designncode web development services in India, including usage terms, project scope, and service conditions.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 text-black md:py-16">
      <h1 className="text-3xl font-medium md:text-4xl">Terms of Service</h1>
      <p className="mt-6 text-lg text-black/70">
        By using this website, you agree to use it lawfully and not misuse the
        services or content. Project scope, pricing, timelines, and deliverables
        are defined in individual client agreements.
      </p>
      <p className="mt-4 text-lg text-black/70">
        For questions about these terms, email{" "}
        <a href="mailto:ankita03malik@gmail.com" className="underline">
          ankita03malik@gmail.com
        </a>
        .
      </p>
      <Link href="/" className="mt-8 inline-block underline">
        Back to home
      </Link>
    </main>
  );
}
