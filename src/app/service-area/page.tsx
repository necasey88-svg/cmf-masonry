import PageHero from "@/components/PageHero";
import ProjectCTA from "@/components/ProjectCTA";
import { BUSINESS } from "@/lib/business-data";

export const metadata = {
  title: "Service Area — Southern California Masonry Contractor",
  description:
    "CMF Masonry serves Los Angeles, Orange, Riverside, and San Diego counties, and the rest of Southern California.",
  alternates: { canonical: "/service-area" },
};

const areas = [
  "Anaheim", "Orange", "Irvine", "Santa Ana", "Fullerton", "Yorba Linda",
  "Los Angeles", "Long Beach", "Newport Beach", "Huntington Beach",
  "Riverside", "Corona", "Temecula", "San Bernardino",
  "San Diego", "Chula Vista", "Oceanside",
  "Ventura", "Oxnard", "Thousand Oaks", "Bakersfield",
];

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Serving all of Southern California"
        description={`CMF Masonry provides stone, brick, tile, and precast installation across ${BUSINESS.serviceArea}, coordinated through our Anaheim showroom.`}
      />

      <section className="container-page py-16">
        <h2
          className="text-2xl font-medium text-[color:var(--color-ink)] mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Cities we serve
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-14">
          {areas.map((a) => (
            <li
              key={a}
              className="text-sm text-[color:var(--color-ink)] bg-[color:var(--color-paper-dim)] border border-[color:var(--color-line)] px-4 py-2.5 text-center"
            >
              {a}
            </li>
          ))}
        </ul>
        <p className="text-[color:var(--color-ink-soft)] text-sm max-w-2xl">
          Don&apos;t see your city listed? Masonry projects are evaluated case-by-case — reach out and
          we&apos;ll confirm whether your location is within our service area.
        </p>
      </section>

      <ProjectCTA />
    </>
  );
}
