import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCTA from "@/components/ProjectCTA";
import { BUSINESS } from "@/lib/business-data";
import { serviceAreaLandings } from "@/lib/marketing-data";

export function generateStaticParams() {
  return serviceAreaLandings.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreaLandings.find((item) => item.slug === slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/service-area/${area.slug}` },
  };
}

export default async function ServiceAreaLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = serviceAreaLandings.find((item) => item.slug === slug);
  if (!area) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    areaServed: area.county,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="bg-[color:var(--color-paper-dim)] border-b border-[color:var(--color-line)] py-24">
        <div className="container-page">
          <p className="uppercase tracking-[0.28em] text-[color:var(--color-brick)] text-xs font-medium mb-4">
            {area.eyebrow}
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium text-[color:var(--color-ink)] mb-5 max-w-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {area.title}
          </h1>
          <p className="text-[color:var(--color-ink-soft)] max-w-2xl leading-relaxed">{area.description}</p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">
        <div>
          <h2 className="text-2xl lg:text-3xl mb-5" style={{ fontFamily: "var(--font-serif)" }}>
            Masonry work throughout {area.county}
          </h2>
          <p className="text-[color:var(--color-ink-soft)] leading-relaxed mb-8">{area.intro}</p>
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] mb-4">Cities we serve in {area.county}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {area.cities.map((city) => (
              <li
                key={city}
                className="text-sm text-[color:var(--color-ink)] bg-[color:var(--color-paper-dim)] border border-[color:var(--color-line)] px-4 py-2.5 text-center"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] mb-4">What we install in {area.county}</h3>
          <ul className="space-y-3 text-sm text-[color:var(--color-ink-soft)]">
            {area.highlights.map((item) => (
              <li key={item} className="border-t border-[color:var(--color-line)] pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[color:var(--color-ink)] text-white py-14">
        <div className="container-page flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div>
            <b className="block text-xl mb-1" style={{ fontFamily: "var(--font-serif)" }}>
              {BUSINESS.masonryExperience} of masonry experience
            </b>
            <span className="text-sm text-white/60">
              CA License #{BUSINESS.licenses.california} &middot; Serving {area.county}
            </span>
          </div>
          <Link href="/gallery" className="text-xs font-bold uppercase tracking-[0.13em] text-[color:var(--color-brick-light)]">
            View completed work &rarr;
          </Link>
        </div>
      </section>

      <ProjectCTA
        title={`Planning a project in ${area.county}?`}
        description="Share the project location, scope, and any photos or plans you have. CMF will review the project and help identify the right next step."
      />
    </>
  );
}
