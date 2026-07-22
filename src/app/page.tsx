import Link from "next/link";
import Image from "next/image";
import ProjectCTA from "@/components/ProjectCTA";
import { services, benefits, suppliers, galleryImages, commercialClients, BUSINESS } from "@/lib/business-data";

const featured = galleryImages.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[color:var(--color-paper-dim)] border-b border-[color:var(--color-line)] py-24 lg:py-32">
        <div className="container-page">
          <p className="uppercase tracking-[0.28em] text-[color:var(--color-brick)] text-xs font-medium mb-4">
            Masonry Specialists &middot; Southern California
          </p>
          <h1
            className="text-4xl md:text-6xl font-medium text-[color:var(--color-ink)] mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Stone, brick, tile & precast — built to last.
          </h1>
          <p className="text-[color:var(--color-ink-soft)] max-w-2xl leading-relaxed mb-10 text-lg">
            CMF Masonry installs natural and manufactured stone veneer, tile, full and thin brick,
            and architectural precast for homeowners, designers, architects, and general
            contractors across {BUSINESS.serviceArea}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/estimate"
              className="inline-block bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] text-white px-8 py-3.5 font-medium transition-colors text-center"
            >
              Request an Estimate
            </Link>
            <Link
              href="/gallery"
              className="inline-block border border-[color:var(--color-ink)]/20 text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)] px-8 py-3.5 font-medium transition-colors text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="container-page py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="uppercase tracking-[0.28em] text-[color:var(--color-brick)] text-xs mb-3">
              Recent Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-[color:var(--color-ink)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Built for interiors, exteriors, and commercial scale.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-brick)] hover:text-[color:var(--color-ink)] transition-colors"
          >
            View Gallery
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((photo) => (
            <article key={photo.file} className="group border border-[color:var(--color-line)] bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={`/gallery/${photo.file}`}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-medium text-[color:var(--color-ink)] mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {photo.caption}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                  {photo.category === "commercial" ? "Commercial installation" : "Residential installation"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20">
        <h2
          className="text-3xl font-medium text-[color:var(--color-ink)] mb-3"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Our Masonry Services
        </h2>
        <p className="text-[color:var(--color-ink-soft)] mb-12 max-w-2xl">
          From stone veneer to full brick installations, our team handles fireplace surrounds,
          hearths, feature walls, exterior facades, and architectural elements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.slug} className="border border-[color:var(--color-line)] p-7">
              <div className="w-10 h-10 bg-[color:var(--color-paper-dim)] flex items-center justify-center mb-4">
                <div className="w-5 h-5 bg-[color:var(--color-brick)]" />
              </div>
              <h3
                className="text-lg font-medium text-[color:var(--color-ink)] mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.title}
              </h3>
              <p className="text-[color:var(--color-ink-soft)] text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why CMF Masonry */}
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

      {/* Commercial proof */}
      <section className="container-page py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.28em] text-[color:var(--color-brick)] text-xs mb-3">
              Commercial &amp; Multi-Site
            </p>
            <h2
              className="text-3xl font-medium text-[color:var(--color-ink)] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Trusted by national brands.
            </h2>
            <p className="text-[color:var(--color-ink-soft)] leading-relaxed mb-6">
              General contractors, property managers, and franchise operators rely on CMF Masonry
              for durable, code-compliant brick, stone, and precast installations at commercial
              properties across Southern California.
            </p>
            <ul className="flex flex-wrap gap-3 mb-8">
              {commercialClients.map((c) => (
                <li
                  key={c}
                  className="text-sm text-[color:var(--color-ink)] bg-[color:var(--color-paper-dim)] border border-[color:var(--color-line)] px-4 py-2"
                >
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href="/commercial"
              className="inline-block border border-[color:var(--color-ink)]/20 text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)] px-6 py-3 font-medium transition-colors"
            >
              Explore Commercial Masonry
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src="/gallery/d60c1825-a103-4d09-89e2-049818cd9815.webp"
              alt="Chase Bank branch with brick and white facade"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="container-page py-20">
        <h2
          className="text-3xl font-medium text-[color:var(--color-ink)] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Our Supplier Partners
        </h2>
        <p className="text-[color:var(--color-ink-soft)] mb-10 max-w-2xl">
          We work with the industry&apos;s leading material suppliers to give you access to the
          widest selection of stone, brick, and tile for your project.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {suppliers.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${s.name}`}
              className="bg-white border border-[color:var(--color-line)] p-4 flex items-center justify-center h-20 hover:border-[color:var(--color-brick)] transition-all"
            >
              <Image src={s.logo} alt={s.name} width={120} height={60} className="object-contain max-h-12 w-auto" />
            </a>
          ))}
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
