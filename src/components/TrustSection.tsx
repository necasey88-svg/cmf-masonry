import Link from "next/link";
import { BUSINESS, trustSignals } from "@/lib/business-data";

export default function TrustSection() {
  return (
    <section className="bg-[color:var(--color-paper-dim)] border-y border-[color:var(--color-line)] py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.45fr] gap-10 lg:gap-20 items-start">
          <div>
            <p className="uppercase tracking-[0.26em] text-[color:var(--color-brick)] text-xs font-bold mb-4">
              Reviews &amp; local trust
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-[color:var(--color-ink)] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Backed by the California Mantel &amp; Fireplace Anaheim showroom.
            </h2>
            <p className="text-[color:var(--color-ink-soft)] leading-relaxed">
              {BUSINESS.dbaClarifier} Customer reviews and local business history should stay tied
              to the established California Mantel &amp; Fireplace profile instead of splitting
              authority across a separate CMF Masonry listing.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {trustSignals.map((signal) => (
                <div key={signal.value} className="bg-[color:var(--color-paper)] p-6">
                  <b
                    className="block text-2xl font-normal text-[color:var(--color-ink)] mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {signal.value}
                  </b>
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[color:var(--color-ink-soft)]">
                    {signal.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border border-[color:var(--color-line)] p-6">
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)] mb-5">
                For local search consistency, CMF Masonry uses the same Anaheim showroom address
                and California Mantel &amp; Fireplace business relationship across the site.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[color:var(--color-ink)] text-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.13em]"
                >
                  Anaheim showroom <span className="text-[color:var(--color-brick-light)]">&#8599;</span>
                </Link>
                <a
                  href={BUSINESS.parentSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[color:var(--color-ink)] text-[color:var(--color-ink)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.13em]"
                >
                  California Mantel &amp; Fireplace <span className="text-[color:var(--color-brick)]">&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
