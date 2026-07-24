"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type LightboxPhoto = { src: string; alt: string; title?: string };

export function useLightbox(length: number) {
  const [index, setIndex] = useState<number | null>(null);

  return {
    index,
    open: (i: number) => setIndex(i),
    close: () => setIndex(null),
    prev: () => setIndex((i) => (i === null ? null : (i - 1 + length) % length)),
    next: () => setIndex((i) => (i === null ? null : (i + 1) % length)),
  };
}

interface LightboxProps {
  photos: LightboxPhoto[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const open = index !== null;
  const photo = open ? photos[index] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !photo) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4 py-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title ?? photo.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center cursor-pointer"
      >
        &times;
      </button>

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photo"
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl leading-none w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          &#8249;
        </button>
      )}

      <div className="relative w-full max-w-5xl h-[75vh]" onClick={(e) => e.stopPropagation()}>
        <Image src={photo.src} alt={photo.alt} fill sizes="90vw" className="object-contain" />
      </div>

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl leading-none w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          &#8250;
        </button>
      )}

      {photo.title && (
        <p className="absolute bottom-5 left-0 right-0 text-center text-white/90 text-sm px-4">
          {photo.title}
        </p>
      )}
    </div>
  );
}
