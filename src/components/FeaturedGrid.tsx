"use client";

import Image from "next/image";
import Lightbox, { useLightbox } from "@/components/Lightbox";

type FeaturedPhoto = { src: string; alt: string; title: string; description: string };

export default function FeaturedGrid({ photos }: { photos: FeaturedPhoto[] }) {
  const lightbox = useLightbox(photos.length);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {photos.map((photo, i) => (
          <article key={photo.src} className="group border border-[color:var(--color-line)] bg-white">
            <button
              type="button"
              onClick={() => lightbox.open(i)}
              className="relative block w-full aspect-[4/3] overflow-hidden bg-stone-100 cursor-zoom-in"
              aria-label={`View larger photo: ${photo.title}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-contain object-center"
              />
            </button>
            <div className="p-6">
              <h3
                className="text-lg font-medium text-[color:var(--color-ink)] mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {photo.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {photo.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        photos={photos.map((p) => ({ src: p.src, alt: p.alt, title: p.title }))}
        index={lightbox.index}
        onClose={lightbox.close}
        onPrev={lightbox.prev}
        onNext={lightbox.next}
      />
    </>
  );
}
