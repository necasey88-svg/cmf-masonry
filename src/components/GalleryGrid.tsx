"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, type GalleryImage } from "@/lib/business-data";

type Tab = "all" | "residential" | "commercial";

export default function GalleryGrid({ defaultTab = "all" }: { defaultTab?: Tab }) {
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);

  const residential = galleryImages.filter((p) => p.category === "residential");
  const commercial = galleryImages.filter((p) => p.category === "commercial");
  const photos: GalleryImage[] =
    activeTab === "residential" ? residential : activeTab === "commercial" ? commercial : galleryImages;

  return (
    <>
      <div className="flex gap-2 border-b border-[color:var(--color-line)] mb-8">
        {(["all", "residential", "commercial"] as Tab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
              activeTab === tab
                ? "border-[color:var(--color-brick)] text-[color:var(--color-brick)]"
                : "border-transparent text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
            }`}
          >
            {tab === "all"
              ? `All Projects (${galleryImages.length})`
              : tab === "residential"
              ? `Residential (${residential.length})`
              : `Commercial (${commercial.length})`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {photos.map((photo) => (
          <div key={photo.file} className="group relative overflow-hidden bg-stone-100 aspect-[4/3]">
            <Image
              src={`/gallery/${photo.file}`}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
