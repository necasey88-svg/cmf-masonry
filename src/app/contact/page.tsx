import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/business-data";

export const metadata = {
  title: "Contact Us",
  description: "Contact CMF Masonry's Anaheim showroom to plan your stone, brick, tile, or precast masonry project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Plan your masonry project through our Anaheim showroom"
        description="Bring your project plans or photos and our team will help you select materials, discuss scope, and coordinate next steps."
      />

      <section className="container-page py-16">
        <div className="bg-white border border-[color:var(--color-line)] p-8 max-w-xl">
          <h2 className="text-[color:var(--color-ink)] font-medium text-lg mb-2">Anaheim Showroom</h2>
          <p className="text-[color:var(--color-ink-soft)] text-sm mb-1">
            {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-[color:var(--color-brick)] hover:underline mb-1"
          >
            Get Directions →
          </a>
          <p className="text-[color:var(--color-ink-soft)] text-xs mb-4">{BUSINESS.hours}</p>
          <a href={BUSINESS.phoneHref} className="text-[color:var(--color-brick)] font-medium hover:text-[color:var(--color-ink)] transition-colors">
            {BUSINESS.phone}
          </a>
        </div>

        <div className="mt-10">
          <Link
            href="/estimate"
            className="inline-block bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] text-white px-8 py-3.5 font-medium transition-colors"
          >
            Request Project Guidance
          </Link>
        </div>
      </section>
    </>
  );
}
