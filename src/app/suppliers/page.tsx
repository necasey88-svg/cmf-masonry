import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProjectCTA from "@/components/ProjectCTA";
import { suppliers } from "@/lib/business-data";

export const metadata = {
  title: "Supplier Partners",
  description:
    "CMF Masonry works with leading stone, brick, and tile suppliers including Coronado Stone, Eldorado Stone, MSI, and Arizona Tile.",
  alternates: { canonical: "/suppliers" },
};

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials"
        title="Our supplier partners"
        description="We work with the industry's leading material suppliers to give you access to the widest selection of stone, brick, and tile for your project."
      />

      <section className="container-page py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {suppliers.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${s.name}`}
              className="bg-white border border-[color:var(--color-line)] p-6 flex flex-col items-center justify-center gap-3 hover:border-[color:var(--color-brick)] transition-all"
            >
              <Image src={s.logo} alt={s.name} width={140} height={70} className="object-contain max-h-14 w-auto" />
              <span className="text-xs text-[color:var(--color-ink-soft)] text-center">{s.name}</span>
            </a>
          ))}
        </div>
      </section>

      <ProjectCTA
        title="Not sure which material fits your project?"
        description="Tell us about your project and we'll recommend the right stone, brick, or tile from our supplier partners."
      />
    </>
  );
}
