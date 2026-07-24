import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCTA from "@/components/ProjectCTA";
import { BUSINESS } from "@/lib/business-data";
import { commercialCaseStudies } from "@/lib/marketing-data";

export function generateStaticParams() {
  return commercialCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = commercialCaseStudies.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.client} Masonry Project`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = commercialCaseStudies.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-[color:var(--color-ink)] text-white py-16 lg:py-24">
        <div className="container-page">
          <p className="uppercase tracking-[0.24em] text-[color:var(--color-brick-light)] text-xs font-bold mb-5">
            {project.sector} &middot; Commercial project
          </p>
          <h1 className="text-5xl lg:text-7xl leading-none mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            {project.client}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl" style={{ fontFamily: "var(--font-serif)" }}>
            {project.title}
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className={`grid gap-5 ${project.images.length > 1 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"}`}>
          {project.images.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden bg-stone-100 ${
                project.images.length === 1 ? "aspect-[16/9]" : index === 0 ? "md:col-span-2 aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={project.images.length === 1 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">
        <div>
          <p className="uppercase tracking-[0.22em] text-[color:var(--color-brick)] text-xs font-bold mb-4">
            Project record
          </p>
          <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Commercial masonry delivered for a national brand.
          </h2>
          <p className="text-[color:var(--color-ink-soft)] leading-relaxed">{project.description}</p>
        </div>
        <dl className="border-t border-[color:var(--color-line)]">
          {[
            ["Client", project.client],
            ["Sector", project.sector],
            ["Scope", project.scope],
            ["Region", "Southern California"],
            ["Contractor", BUSINESS.legalName],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-[0.75fr_1.25fr] gap-4 border-b border-[color:var(--color-line)] py-4 text-sm">
              <dt className="font-bold uppercase tracking-[0.1em] text-[color:var(--color-ink-soft)]">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page pb-16">
        <Link href="/commercial" className="text-xs font-bold uppercase tracking-[0.13em] text-[color:var(--color-brick)]">
          &larr; Back to commercial masonry
        </Link>
      </section>

      <ProjectCTA
        title="Planning a restaurant, retail, or multi-site project?"
        description="Send the plans, specifications, location, and schedule information you have now. CMF will review the masonry scope with your project team."
      />
    </>
  );
}
