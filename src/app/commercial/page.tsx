import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import ProjectCTA from "@/components/ProjectCTA";
import { commercialClients } from "@/lib/business-data";

export const metadata = {
  title: "Commercial Masonry — General Contractors & Property Managers",
  description:
    "Code-compliant brick, stone, tile, and precast masonry for commercial properties, multi-unit residential, and franchise locations across Southern California.",
  alternates: { canonical: "/commercial" },
};

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial & Multi-Site"
        title="Masonry built for commercial scale"
        description="CMF Masonry partners with general contractors, architects, property managers, and franchise operators on durable, code-compliant brick, stone, and precast installations."
      />

      <section className="container-page py-16">
        <h2
          className="text-2xl font-medium text-[color:var(--color-ink)] mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Recent commercial clients
        </h2>
        <ul className="flex flex-wrap gap-3 mb-14">
          {commercialClients.map((c) => (
            <li
              key={c}
              className="text-sm text-[color:var(--color-ink)] bg-[color:var(--color-paper-dim)] border border-[color:var(--color-line)] px-4 py-2"
            >
              {c}
            </li>
          ))}
        </ul>

        <GalleryGrid defaultTab="commercial" />
      </section>

      <section className="bg-[color:var(--color-paper-dim)] py-20">
        <div className="container-page grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-[color:var(--color-ink)] mb-2">Multi-Site Consistency</h3>
            <p className="text-[color:var(--color-ink-soft)] text-sm leading-relaxed">
              Consistent material selection and finish quality across multiple locations for franchise
              and property management portfolios.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[color:var(--color-ink)] mb-2">Code-Compliant Installation</h3>
            <p className="text-[color:var(--color-ink-soft)] text-sm leading-relaxed">
              Every commercial installation meets applicable California building codes for structural
              and life-safety requirements.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[color:var(--color-ink)] mb-2">GC & Architect Coordination</h3>
            <p className="text-[color:var(--color-ink-soft)] text-sm leading-relaxed">
              We coordinate directly with general contractors and architects on scope, scheduling, and
              submittals.
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA
        title="Bring your commercial project to CMF Masonry."
        description="Share your project scope, drawings, or spec sheet and our team will follow up with material options and a scope-of-work discussion."
      />

      <section className="container-page py-12 text-center">
        <Link href="/residential" className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-brick)] hover:text-[color:var(--color-ink)] transition-colors">
          Looking for residential masonry instead? →
        </Link>
      </section>
    </>
  );
}
