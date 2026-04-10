import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Website Development Company India",
  description:
    "Read the privacy policy for Designncode, a website development company in India, covering how we collect, use, and protect user information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 text-black md:py-16">
      <h1 className="text-3xl font-medium md:text-4xl">Privacy Policy</h1>
      <p className="mt-6 text-lg text-black/70">
        We collect only the information you submit through our contact forms and
        communications so we can respond to your inquiry and provide services.
      </p>
      <p className="mt-4 text-lg text-black/70">
        We do not sell personal information. If you want your information
        updated or deleted, contact us at{" "}
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
