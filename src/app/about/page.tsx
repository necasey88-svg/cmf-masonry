import PageHero from "@/components/PageHero";
import ProjectCTA from "@/components/ProjectCTA";
import { BUSINESS } from "@/lib/business-data";

export const metadata = {
  title: "About Us",
  description:
    "CMF Masonry brings more than 20 years of masonry experience to stone, brick, tile, and architectural precast installation across Southern California.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="More than 20 years of masonry experience"
        description="CMF Masonry brings proven field experience and established material relationships to stone, brick, tile, and architectural precast installations throughout Southern California."
      />

      <section className="container-page py-16 max-w-3xl">
        <p className="text-[color:var(--color-ink-soft)] leading-relaxed mb-6">
          For more than 20 years, our team has completed masonry work for homes and commercial
          properties across Southern California. CMF Masonry focuses exclusively on stone, brick,
          tile, and precast installation — fireplace surrounds, accent walls, exterior facades,
          and architectural details for homeowners, designers, architects, and general contractors.
        </p>
        <p className="text-[color:var(--color-ink-soft)] leading-relaxed mb-6">
          Every masonry project is coordinated through our Anaheim showroom, where our team helps
          select materials from leading suppliers and plans the installation from start to finish.
        </p>
        <p className="text-[color:var(--color-ink-soft)] leading-relaxed">
          We&apos;re part of the {" "}
          <a
            href={BUSINESS.parentSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-brick)] hover:underline"
          >
            California Mantel &amp; Fireplace
          </a>{" "}
          family, so if your project also includes a mantel or fireplace, our team can coordinate
          across both.
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] mt-12">
          <div className="bg-[color:var(--color-paper-warm)] p-5">
            <dt className="text-2xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>{BUSINESS.masonryExperience}</dt>
            <dd className="text-[10px] font-bold uppercase tracking-[0.13em] text-[color:var(--color-ink-soft)]">Masonry experience</dd>
          </div>
          <div className="bg-[color:var(--color-paper-warm)] p-5">
            <dt className="text-2xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>#{BUSINESS.licenses.california}</dt>
            <dd className="text-[10px] font-bold uppercase tracking-[0.13em] text-[color:var(--color-ink-soft)]">California license</dd>
          </div>
          <div className="bg-[color:var(--color-paper-warm)] p-5">
            <dt className="text-2xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>CA</dt>
            <dd className="text-[10px] font-bold uppercase tracking-[0.13em] text-[color:var(--color-ink-soft)]">Ventura to Bakersfield</dd>
          </div>
        </dl>
      </section>

      <ProjectCTA />
    </>
  );
}
