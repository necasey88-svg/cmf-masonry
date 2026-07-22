import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import ProjectCTA from "@/components/ProjectCTA";
import { services } from "@/lib/business-data";

export const metadata = {
  title: "Residential Masonry — Fireplace Surrounds, Accent Walls & Exteriors",
  description:
    "Stone veneer, brick, and tile masonry for homeowners across Southern California — fireplace surrounds, accent walls, and exterior facades.",
  alternates: { canonical: "/residential" },
};

const residentialServices = services.filter((s) =>
  ["stone-veneer", "tile-masonry", "brick-veneer"].includes(s.slug)
);

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="For Homeowners"
        title="Masonry that transforms your home"
        description="From a single fireplace surround to a full exterior renovation, our team helps homeowners select the right stone, brick, or tile and install it with lasting craftsmanship."
      />

      <section className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {residentialServices.map((s) => (
            <div key={s.slug} className="border border-[color:var(--color-line)] p-7">
              <h2
                className="text-lg font-medium text-[color:var(--color-ink)] mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.title}
              </h2>
              <p className="text-[color:var(--color-ink-soft)] text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <GalleryGrid defaultTab="residential" />
      </section>

      <ProjectCTA
        title="Start planning your home's masonry project."
        description="Tell us about your fireplace, accent wall, or exterior project and we'll help you choose materials and next steps."
      />

      <section className="container-page py-12 text-center">
        <Link href="/commercial" className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-brick)] hover:text-[color:var(--color-ink)] transition-colors">
          Managing a commercial or multi-site project? →
        </Link>
      </section>
    </>
  );
}
