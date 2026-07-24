import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import ProjectCTA from "@/components/ProjectCTA";
import { commercialCaseStudies } from "@/lib/marketing-data";

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
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
            <div>
              <p className="uppercase tracking-[0.22em] text-[color:var(--color-brick)] text-xs font-bold mb-3">
                Project records
              </p>
              <h2 className="text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
                Work for recognizable commercial brands
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-[color:var(--color-ink-soft)] mb-3">
                Verified CMF team masonry installations across restaurant,
                retail, and financial-service properties.
              </p>
              <Link
                href="/services/commercial-masonry"
                className="text-[10px] font-bold uppercase tracking-[0.13em] text-[color:var(--color-brick)]"
              >
                Explore commercial capabilities &rarr;
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commercialCaseStudies.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="group border border-[color:var(--color-line)] bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-brick)] mb-2">
                    {project.sector}
                  </p>
                  <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    {project.client}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em]">
                    View project &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

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
        href="/estimate?project=Commercial"
      />

      <section className="container-page py-12 text-center">
        <Link href="/residential" className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-brick)] hover:text-[color:var(--color-ink)] transition-colors">
          Looking for residential masonry instead? →
        </Link>
      </section>
    </>
  );
}
