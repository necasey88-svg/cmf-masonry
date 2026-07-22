import Link from "next/link";

export default function ProjectCTA({
  title = "Plan your masonry project with confidence.",
  description = "Share the project details you have now and our team will help shape the right stone, brick, or tile selection, installation path, and starting range.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[color:var(--color-paper-dim)] border-y border-[color:var(--color-line)] py-20">
      <div className="container-page text-center max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-medium text-[color:var(--color-ink)] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
        </h2>
        <p className="text-[color:var(--color-ink-soft)] mb-8 leading-relaxed">{description}</p>
        <Link
          href="/estimate"
          className="inline-block bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] text-white px-8 py-3.5 font-medium transition-colors"
        >
          Request Project Guidance
        </Link>
      </div>
    </section>
  );
}
