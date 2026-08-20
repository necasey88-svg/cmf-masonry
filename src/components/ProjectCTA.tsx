import Link from "next/link";
import { BUSINESS } from "@/lib/business-data";

export default function ProjectCTA({
  title = "Plan your masonry project with confidence.",
  description = "Share the project details you have now and our team will help shape the right stone, brick, or tile selection, installation path, and starting range.",
  href = "/estimate",
}: {
  title?: string;
  description?: string;
  href?: string;
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
          href={href}
          className="inline-block bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] text-white px-8 py-3.5 font-medium transition-colors"
        >
          Request an Estimate
        </Link>
        <p className="mt-6 text-xs uppercase tracking-[0.13em] text-[color:var(--color-ink-soft)]">
          CA Licensed #{BUSINESS.licenses.california} &middot; {BUSINESS.masonryExperience} in business
          &middot; Trusted by In-N-Out, Chase Bank, Burger King &amp; 7-Eleven
        </p>
      </div>
    </section>
  );
}
