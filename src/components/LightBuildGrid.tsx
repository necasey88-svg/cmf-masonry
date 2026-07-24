"use client";

import Image from "next/image";
import Lightbox, { useLightbox } from "@/components/Lightbox";

export type LightBuildItem = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  span: string;
  big: boolean;
};

export default function LightBuildGrid({
  items,
  fit,
}: {
  items: LightBuildItem[];
  fit: "cover" | "contain";
}) {
  const lightbox = useLightbox(items.length);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-9 gap-x-[18px] [grid-auto-flow:dense]">
        {items.map((item, index) => (
          <article className={`min-w-0 ${item.span}`} key={item.src}>
            <button
              type="button"
              onClick={() => lightbox.open(index)}
              aria-label={`View larger photo: ${item.title}`}
              className={`group relative block w-full overflow-hidden bg-[color:var(--color-paper-dim)] h-[330px] cursor-zoom-in ${
                item.big ? "md:h-[594px]" : "md:h-[245px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={
                  fit === "cover"
                    ? "object-cover transition-transform duration-500 group-hover:scale-110"
                    : "object-contain object-center"
                }
              />
            </button>
            <div className="flex gap-3.5 pt-3.5">
              <span
                className="italic text-sm text-[color:var(--color-brick)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[color:var(--color-ink-soft)] mb-1">
                  {item.subtitle}
                </p>
                <h3 className="text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </h3>
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
