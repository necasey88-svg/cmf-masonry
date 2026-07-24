import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCTA from "@/components/ProjectCTA";
import { BUSINESS } from "@/lib/business-data";
import { serviceLandings } from "@/lib/marketing-data";

export function generateStaticParams() {
  return serviceLandings.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceLandings.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceLandings.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[color:var(--color-line)]">
        <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <p className="uppercase tracking-[0.26em] text-[color:var(--color-brick)] text-xs font-bold mb-5">
            {service.eyebrow}
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-7"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {service.title}
          </h1>
          <p className="text-lg leading-relaxed text-[color:var(--color-ink-soft)] max-w-xl mb-8">
            {service.description}
          </p>
          <Link
            href={`/estimate?project=${
              service.slug === "commercial-masonry"
                ? "Commercial"
                : service.slug === "architectural-precast"
                  ? "Architectural Precast"
                  : service.slug === "tile-masonry"
                    ? "Fireplace or Interior Feature"
                    : "Residential"
            }`}
            className="self-start bg-[color:var(--color-brick)] text-white px-7 py-4 text-xs font-bold uppercase tracking-[0.12em]"
          >
            Discuss this service
          </Link>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[640px] bg-[color:var(--color-paper-dim)]">
          <Image
            src={service.image}
            alt={`${service.eyebrow} project by CMF Masonry`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={service.slug === "architectural-precast" ? "object-contain" : "object-cover"}
          />
        </div>
      </section>

      <section className="container-page py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24">
        <div>
          <p className="uppercase tracking-[0.22em] text-[color:var(--color-brick)] text-xs font-bold mb-4">
            The CMF approach
          </p>
          <h2 className="text-3xl lg:text-4xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Architectural finish work, resolved as part of the whole.
          </h2>
          <p className="text-[color:var(--color-ink-soft)] leading-relaxed">{service.intro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] mb-4">Applications</h3>
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-soft)]">
              {service.applications.map((item) => <li key={item} className="border-t border-[color:var(--color-line)] pt-3">{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] mb-4">Built for</h3>
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-soft)]">
              {service.audiences.map((item) => <li key={item} className="border-t border-[color:var(--color-line)] pt-3">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-white py-14">
        <div className="container-page flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div>
            <b className="block text-xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>
              {BUSINESS.masonryExperience} of masonry experience
            </b>
            <span className="text-sm text-white/60">
              CA License #{BUSINESS.licenses.california} &middot; Serving {BUSINESS.serviceArea}
            </span>
          </div>
          <Link href="/gallery" className="text-xs font-bold uppercase tracking-[0.13em] text-[color:var(--color-brick-light)]">
            View completed work &rarr;
          </Link>
        </div>
      </section>

      <ProjectCTA
        title={`Planning a ${service.eyebrow.toLowerCase()} project?`}
        description="Send the scope, location, photos, plans, or finish information you have now. CMF will review the project and help identify the right next step."
      />
    </>
  );
}
