import PageHero from "@/components/PageHero";
import ProjectCTA from "@/components/ProjectCTA";
import { services, benefits } from "@/lib/business-data";

export const metadata = {
  title: "Masonry Services",
  description:
    "Natural & manufactured stone veneer, tile masonry, brick veneer, and architectural precast installation across Southern California.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Masonry services built for every project scale"
        description="Stone, brick, tile, and precast installations for fireplace surrounds, exterior facades, architectural details, and commercial properties."
      />

      <section className="container-page py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.slug} className="border border-[color:var(--color-line)] p-8">
              <h2
                className="text-xl font-medium text-[color:var(--color-ink)] mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.title}
              </h2>
              <p className="text-[color:var(--color-ink-soft)] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-paper-dim)] py-20">
        <div className="container-page">
          <h2
            className="text-3xl font-medium text-[color:var(--color-ink)] mb-12 text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Why Choose CMF Masonry
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-12 h-12 bg-[color:var(--color-ink)] mx-auto mb-4 flex items-center justify-center">
                  <div className="w-5 h-5 bg-white" />
                </div>
                <h3 className="font-medium text-[color:var(--color-ink)] mb-2 text-sm">{b.title}</h3>
                <p className="text-[color:var(--color-ink-soft)] text-xs leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
