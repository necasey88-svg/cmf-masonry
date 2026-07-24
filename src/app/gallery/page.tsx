import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import ProjectCTA from "@/components/ProjectCTA";

export const metadata = {
  title: "Masonry Project Gallery",
  description:
    "Residential and commercial masonry projects across Southern California — stone, brick, tile, and precast installations.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work · Southern California"
        title="Masonry Project Gallery"
        description="From custom home fireplaces to commercial installations, our masonry team brings more than 20 years of experience to projects across Southern California."
      />

      <section className="container-page py-16">
        <GalleryGrid />
      </section>

      <ProjectCTA />
    </>
  );
}
