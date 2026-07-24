"use client";

import Image from "next/image";
import Lightbox, { useLightbox } from "@/components/Lightbox";

export type DarkBuildItem = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  span: string;
  big: boolean;
};

export default function DarkBuildGrid({
  items,
  subtitleSuffix,
}: {
  items: DarkBuildItem[];
  subtitleSuffix: string;
}) {
  const lightbox = useLightbox(items.length);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-9 gap-x-4 [grid-auto-flow:dense]">
        {items.map((item, index) => (
          <article className={`min-w-0 ${item.span}`} key={item.src}>
            <button
              type="button"
              onClick={() => lightbox.open(index)}
              aria-label={`View larger photo: ${item.title}`}
              className={`group relative block w-full overflow-hidden bg-white/10 h-[330px] cursor-zoom-in ${
                item.big ? "md:h-[610px]" : "md:h-[260px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
            <div className="flex gap-4 pt-4 mt-3 border-t border-[color:var(--color-paper)]/20">
              <span
                className="italic text-sm text-[color:var(--color-brick-light)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </h3>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[color:var(--color-paper)]/50">
                  {item.subtitle} &middot; {subtitleSuffix}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        photos={items.map((item) => ({ src: item.src, alt: item.alt, title: item.title }))}
        index={lightbox.index}
        onClose={lightbox.close}
        onPrev={lightbox.prev}
        onNext={lightbox.next}
      />
    </>
  );
}
