import Link from "next/link";
import Image from "next/image";
import ProjectCTA from "@/components/ProjectCTA";
import { services, benefits, suppliers, galleryImages, commercialClients, BUSINESS } from "@/lib/business-data";

const featured = galleryImages.slice(0, 3);

const customBuilds = [
  { src: "/custom-builds/custom-stone-residence.jpeg", title: "Custom stone residence", material: "Natural stone", span: "md:col-span-2", tall: false },
  { src: "/custom-builds/custom-stacked-stone-fireplace.jpeg", title: "Floor-to-ceiling fireplace", material: "Stacked stone", span: "md:row-span-2", tall: true },
  { src: "/custom-builds/custom-brick-estate.jpeg", title: "Custom brick estate", material: "Full brick", span: "", tall: false },
  { src: "/custom-builds/custom-limestone-exterior.jpeg", title: "Limestone exterior", material: "Cut limestone", span: "", tall: false },
  { src: "/custom-builds/custom-stone-entry.jpeg", title: "Stone entry tower", material: "Natural stone", span: "md:row-span-2", tall: true },
  { src: "/custom-builds/custom-brick-outdoor-fireplace.jpeg", title: "Outdoor fireplace", material: "Full brick", span: "", tall: false },
  { src: "/custom-builds/custom-linear-stone-exterior.jpeg", title: "Linear stone facade", material: "Ledgestone", span: "md:col-span-2", tall: false },
  { src: "/custom-builds/custom-brick-feature-wall.jpeg", title: "Interior brick feature wall", material: "Thin brick", span: "", tall: false },
  { src: "/custom-builds/custom-rustic-fireplace.jpg", title: "Rustic fireplace surround", material: "Fieldstone", span: "", tall: false },
  { src: "/custom-builds/custom-stone-fireplace.jpg", title: "Custom hearth and surround", material: "Stacked stone", span: "", tall: false },
  { src: "/custom-builds/custom-brick-colonnade.jpeg", title: "Brick colonnade", material: "Full brick", span: "md:col-span-2", tall: false },
  { src: "/custom-builds/custom-residential-masonry.jpeg", title: "Residential masonry build", material: "Brick and stone", span: "", tall: false },
];

export default function HomePage() {
  const heroImage = galleryImages.find((g) => g.file === "1fee6c1c-57d4-43d0-94a6-f5d3646105e9.webp")!;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-[color:var(--color-line)] grid grid-cols-1 lg:grid-cols-[47fr_53fr]">
        <div className="flex flex-col px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
          <p className="uppercase tracking-[0.26em] text-[color:var(--color-brick)] text-xs font-bold mb-6">
            Masonry Specialists &middot; Southern California
          </p>
          <h1
            className="text-5xl md:text-7xl leading-[0.98] tracking-tight text-[color:var(--color-ink)] mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Crafted in stone.
            <br />
            <em className="italic text-[color:var(--color-brick)] font-normal">Grounded in place.</em>
          </h1>
          <p
            className="text-[color:var(--color-ink-soft)] max-w-xl leading-relaxed mb-9 text-lg"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            CMF Masonry brings architectural intention and disciplined craft to stone, brick, tile,
            and precast — across homes, hospitality, retail, and commercial spaces in{" "}
            {BUSINESS.serviceArea}.
          </p>
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-3 bg-[color:var(--color-ink)] hover:-translate-y-0.5 text-white px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] transition-transform"
            >
              Request an estimate <span className="text-[color:var(--color-brick-light)]">&#8599;</span>
            </Link>
            <Link
              href="/gallery"
              className="text-xs font-bold uppercase tracking-[0.13em] text-[color:var(--color-ink)] border-b border-[color:var(--color-ink)] pb-0.5"
            >
              Explore our work <span className="text-[color:var(--color-brick)]">&#8595;</span>
            </Link>
          </div>
          <div className="flex gap-10 mt-auto pt-6 border-t border-[color:var(--color-line)] text-[10px] uppercase tracking-[0.12em] text-[color:var(--color-ink-soft)]">
            <span>
              <b className="block text-[color:var(--color-ink)] font-bold mb-1">Southern California</b>
              Orange &middot; Los Angeles &middot; Beyond
            </span>
            <span>
              <b className="block text-[color:var(--color-ink)] font-bold mb-1">Residential + commercial</b>
              One standard of craft
            </span>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[670px]">
          <Image
            src={`/gallery/${heroImage.file}`}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 53vw"
            className="object-cover"
          />
          <div className="absolute z-10 left-6 bottom-6 bg-[color:var(--color-paper)] px-6 py-5 max-w-[240px]">
            <small className="block uppercase tracking-[0.2em] text-[8px] text-[color:var(--color-brick)] mb-2.5">
              Material study / 01
            </small>
            <b className="font-normal text-[17px] leading-[1.25]" style={{ fontFamily: "var(--font-serif)" }}>
              Stone is structure, surface, and story.
            </b>
          </div>
          <div className="absolute z-10 right-7 top-7 w-[88px] h-[88px] rounded-full border border-white/80 text-white flex items-center justify-center gap-1.5 rotate-[8deg]">
            <span className="font-serif text-lg" style={{ fontFamily: "var(--font-serif)" }}>CMF</span>
            <small className="text-[6px] tracking-[0.16em] leading-tight">BUILT<br />WITH CARE</small>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-6 sm:px-10 lg:px-16 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">
        <p className="uppercase tracking-[0.26em] text-[color:var(--color-brick-light)] text-xs font-bold self-start">
          The CMF standard
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-end">
          <h2
            className="text-4xl md:text-6xl leading-[1.06] tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Material knowledge.
            <br />
            Measured execution.
          </h2>
          <p className="text-[color:var(--color-paper)]/70 leading-relaxed max-w-md" style={{ fontFamily: "var(--font-serif)" }}>
            We believe excellent masonry begins before the first unit is set. It starts with the
            right material, a resolved detail, and a crew that understands how every line
            contributes to the whole.
          </p>
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

      {/* Custom build portfolio */}
      <section
        id="custom-builds"
        className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-6 sm:px-10 lg:px-16 py-24 lg:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8 lg:gap-24 items-end mb-16">
          <div>
            <p className="uppercase tracking-[0.26em] text-[color:var(--color-brick-light)] text-xs font-bold mb-5">
              Custom build portfolio
            </p>
            <h2
              className="text-4xl md:text-6xl leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Made for the architecture.
              <br />
              <em className="italic text-[color:var(--color-brick-light)] font-normal">
                Built for the long term.
              </em>
            </h2>
          </div>
          <p
            className="text-[color:var(--color-paper)]/70 leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            One-of-a-kind masonry installations shaped around the home, the material, and the way
            each space is meant to live.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-9 gap-x-4 [grid-auto-flow:dense]">
          {customBuilds.map((build, index) => (
            <article className={`min-w-0 ${build.span}`} key={build.src}>
              <div
                className={`group relative overflow-hidden bg-white/10 h-[330px] ${
                  build.tall ? "md:h-[610px]" : "md:h-[260px]"
                }`}
              >
                <Image
                  src={build.src}
                  alt={`${build.title} by CMF Masonry`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="flex gap-4 pt-4 mt-3 border-t border-[color:var(--color-paper)]/20">
                <span
                  className="italic text-sm text-[color:var(--color-brick-light)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                    {build.title}
                  </h3>
                  <p className="text-[8px] uppercase tracking-[0.18em] text-[color:var(--color-paper)]/50">
                    {build.material} &middot; Custom build
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <p className="uppercase tracking-[0.26em] text-[color:var(--color-brick)] text-xs font-bold">
            Capabilities
          </p>
          <h2
            className="text-4xl md:text-6xl leading-none tracking-tight text-[color:var(--color-ink)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            One craft. <em className="italic text-[color:var(--color-brick)] font-normal">Many expressions.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-l border-[color:var(--color-line)]">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="border-r border-[color:var(--color-line)] px-6 py-7 flex flex-col min-h-[340px]"
            >
              <span className="italic text-lg text-[color:var(--color-brick)]" style={{ fontFamily: "var(--font-serif)" }}>
                0{i + 1}
              </span>
              <div className="w-14 h-14 my-8 bg-[color:var(--color-brick)]/90" />
              <h3
                className="text-2xl mb-3 text-[color:var(--color-ink)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.title}
              </h3>
              <p className="text-[color:var(--color-ink-soft)] text-sm leading-relaxed max-w-[22ch]">{s.description}</p>
              <Link
                href="/estimate"
                className="mt-auto pt-7 text-[9px] font-bold uppercase tracking-[0.17em] text-[color:var(--color-brick)]"
              >
                Discuss your project &#8599;
              </Link>
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
