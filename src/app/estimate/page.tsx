import PageHero from "@/components/PageHero";
import EstimateForm from "@/components/EstimateForm";
import { BUSINESS } from "@/lib/business-data";

export const metadata = {
  title: "Request an Estimate",
  description: "Request a masonry project estimate from CMF Masonry — stone, brick, tile, and precast installation across Southern California.",
  alternates: { canonical: "/estimate" },
};

export default async function EstimatePage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;
  const defaultProjectType = project === "Commercial" || project === "Residential" ? project : "";

  return (
    <>
      <PageHero
        eyebrow="Request Project Guidance"
        title="Tell us about your masonry project"
        description="Share your project details and a few photos if you have them, and our team will follow up with material options and next steps."
      />

      <section className="container-page py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <EstimateForm defaultProjectType={defaultProjectType} />
        </div>
        <aside className="bg-[color:var(--color-paper-dim)] border border-[color:var(--color-line)] p-7 h-fit">
          <h2 className="text-[color:var(--color-ink)] font-medium mb-2">Anaheim Showroom</h2>
          <p className="text-[color:var(--color-ink-soft)] text-sm mb-1">
            {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </p>
          <p className="text-[color:var(--color-ink-soft)] text-xs mb-4">{BUSINESS.hours}</p>
          <a href={BUSINESS.phoneHref} className="text-[color:var(--color-brick)] font-medium hover:text-[color:var(--color-ink)] transition-colors">
            {BUSINESS.phone}
          </a>
        </aside>
      </section>
    </>
  );
}
