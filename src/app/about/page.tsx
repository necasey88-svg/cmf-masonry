import PageHero from "@/components/PageHero";
import ProjectCTA from "@/components/ProjectCTA";
import { BUSINESS } from "@/lib/business-data";

export const metadata = {
  title: "About Us",
  description:
    "CMF Masonry is the dedicated masonry division of California Mantel & Fireplace, serving Southern California with stone, brick, tile, and precast installation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Masonry craftsmanship, backed by decades of experience"
        description="CMF Masonry is the dedicated masonry division of California Mantel & Fireplace — bringing the same craftsmanship and material sourcing relationships that have served Southern California homeowners and builders for decades to stone, brick, tile, and precast installation."
      />

      <section className="container-page py-16 max-w-3xl">
        <p className="text-[color:var(--color-ink-soft)] leading-relaxed mb-6">
          CMF Masonry focuses exclusively on stone, brick, tile, and precast installation —
          fireplace surrounds, accent walls, exterior facades, and architectural details for
          homeowners, designers, architects, and general contractors.
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
      </section>

      <ProjectCTA />
    </>
  );
}
