export const SITE_URL = "https://cmfmasonry.com";

export const BUSINESS = {
  name: "CMF Masonry",
  legalName: "CMF Masonry (a division of California Mantel & Fireplace)",
  // CallRail tracking number dedicated to CMF Masonry ("Google Ads Assets - Masonry"
  // pool, company 736627927) — distinct from the shared Anaheim showroom line
  // (714) 908-7388, so masonry call volume is attributable on its own.
  phone: "(714) 886-3179",
  phoneHref: "tel:7148863179",
  address: {
    street: "1430 S Anaheim Blvd",
    city: "Anaheim",
    state: "CA",
    zip: "92805",
  },
  hours: "Mon–Sat: 9:00 AM – 5:00 PM",
  mapQuery: "1430 S Anaheim Blvd, Anaheim, CA 92805",
  serviceArea:
    "Orange County, Los Angeles County, and the greater Southern California region",
  parentSite: "https://calmantel.com",
};

export type MasonryService = {
  slug: string;
  title: string;
  description: string;
};

export const services: MasonryService[] = [
  {
    slug: "stone-veneer",
    title: "Natural & Manufactured Stone Veneer",
    description:
      "Transform a fireplace surround, accent wall, or exterior with the timeless beauty of stone. We install both natural stone and manufactured stone veneer from leading suppliers, delivering authentic texture and lasting durability.",
  },
  {
    slug: "tile-masonry",
    title: "Tile Masonry",
    description:
      "From classic porcelain to artisan handmade tile, our masonry crews install a full range of tile materials around fireplaces, hearths, and architectural features. Precision setting and grouting for a flawless, long-lasting finish.",
  },
  {
    slug: "brick-veneer",
    title: "Full Brick & Thin Brick Veneer",
    description:
      "Classic brick adds warmth, character, and structural integrity to any project. We install both full brick and thin brick veneer for a traditional look without the full weight of solid masonry construction.",
  },
  {
    slug: "architectural-precast",
    title: "Architectural Precast",
    description:
      "Precast concrete masonry installations — hearths, surrounds, and custom architectural elements — delivered as code-compliant installations with precision craftsmanship.",
  },
  {
    slug: "residential-commercial",
    title: "Residential & Commercial Masonry",
    description:
      "We serve homeowners, interior designers, architects, and general contractors on projects of every scale — from single-room renovations to large-scale commercial and multi-unit residential installations.",
  },
];

export const benefits = [
  {
    title: "Structural Strength",
    description: "Masonry installations built to last decades, meeting all California building codes.",
  },
  {
    title: "Heat Retention",
    description: "Stone and brick naturally absorb and radiate heat for greater fireplace efficiency.",
  },
  {
    title: "Timeless Design",
    description: "Natural materials that age beautifully and complement any interior or exterior style.",
  },
  {
    title: "Precision Craftsmanship",
    description: "Experienced masonry crews with deep knowledge of structural and finish work.",
  },
  {
    title: "Fully Customizable",
    description: "Choose from hundreds of materials, colors, and patterns to match your exact vision.",
  },
];

export type Supplier = { name: string; logo: string; url: string };

export const suppliers: Supplier[] = [
  { name: "Coronado Stone Products", logo: "/brands/coronado-stone.png", url: "https://www.coronado.com/" },
  { name: "Cultured Stone", logo: "/brands/cultured-stone.webp", url: "https://www.culturedstone.com/" },
  { name: "Creative Mines", logo: "/brands/creative-mines.png", url: "https://creativemines.us/" },
  { name: "MSI", logo: "/brands/msi.jpg", url: "https://www.msisurfaces.com/" },
  { name: "Eldorado Stone", logo: "/brands/eldorado-stone.jpg", url: "https://www.eldoradostone.com/" },
  { name: "Robinson Brick", logo: "/brands/robinson-brick.png", url: "https://www.robinsonbrick.com/" },
  { name: "Arizona Tile", logo: "/brands/arizona-tile.png", url: "https://www.arizonatile.com/" },
  { name: "Glen-Gery", logo: "/brands/glen-gery.jpg", url: "https://www.glengery.com/" },
  { name: "H.C. Muddox", logo: "/brands/hc-muddox.webp", url: "https://www.hcmuddox.com/" },
];

export type GalleryImage = {
  file: string;
  // Optional full public path. When absent, the image is served from
  // /gallery/<file>. New residential/precast project photos live in
  // their own public folders and set src directly (no duplication).
  src?: string;
  category: "residential" | "commercial" | "precast";
  alt: string;
  caption: string;
};

// Ported 1:1 from calmantel/public/masonry-gallery (via MasonryGalleryClient.tsx)
// — same 14 real project photos, same captions/alt text.
export const galleryImages: GalleryImage[] = [
  {
    file: "180d8e52-9754-4a75-ab98-1d21b76879a7.webp",
    category: "residential",
    alt: "Residential home with landscaped garden and flower beds",
    caption: "Residential Exterior",
  },
  {
    file: "1fee6c1c-57d4-43d0-94a6-f5d3646105e9.webp",
    category: "residential",
    alt: "Row of contemporary white homes with dark roofs",
    caption: "Residential Development",
  },
  {
    file: "e839b1e6-2450-4a91-91df-ae5c72bb71d6.webp",
    category: "residential",
    alt: "Two-story home with lit windows and landscaped front yard at dusk",
    caption: "Single Family Residence",
  },
  {
    file: "f9eae93a-830f-4d2c-9c69-23341e1db930.webp",
    category: "residential",
    alt: "Multi-story residential building with balconies and outdoor seating",
    caption: "Multi-Unit Residential",
  },
  {
    file: "673bc382-353e-46c6-a60a-ec02a3c5c039.webp",
    category: "residential",
    alt: "Apartment complex with trees and parking area",
    caption: "Apartment Complex",
  },
  {
    file: "2eb435ce-15b2-41b1-8fa0-bc96450253a7.webp",
    category: "commercial",
    alt: "Mason laying herringbone tile on fireplace surround",
    caption: "Fireplace Tile Installation",
  },
  {
    file: "1d921cf6-0a69-4f6a-9248-4c398b0c20ae.webp",
    category: "commercial",
    alt: "Masonry crew working on commercial exterior",
    caption: "Commercial Exterior Masonry",
  },
  {
    file: "3df0e529-20e2-4e56-958b-1afbf5980855.webp",
    category: "commercial",
    alt: "In-N-Out Burger entrance with customers",
    caption: "In-N-Out Burger",
  },
  {
    file: "a8f6f783-cc7f-4013-b514-008ad3d09204.webp",
    category: "commercial",
    alt: "In-N-Out Burger exterior with yellow and red signage",
    caption: "In-N-Out Burger — Exterior",
  },
  {
    file: "0062bbaa-eae6-4f2f-8c22-38fa09bb3022.webp",
    category: "commercial",
    alt: "In-N-Out Burger customers inside and outside",
    caption: "In-N-Out Burger — Entry",
  },
  {
    file: "219128e7-e569-4c47-a900-48d735a108d4.webp",
    category: "commercial",
    alt: "Burger King restaurant at sunset with illuminated logo",
    caption: "Burger King",
  },
  {
    file: "d60c1825-a103-4d09-89e2-049818cd9815.webp",
    category: "commercial",
    alt: "Chase Bank branch with brick and white facade",
    caption: "Chase Bank",
  },
  {
    file: "0c6f59b9-7608-4c68-a0b0-a88f264dba1b.webp",
    category: "commercial",
    alt: "7-Eleven convenience store with gas station pumps",
    caption: "7-Eleven",
  },
  {
    file: "f43c8ee5-383f-4055-97e5-6e1d608c8a26.webp",
    category: "commercial",
    alt: "Outdoor courtyard with red umbrellas and seating at sunset",
    caption: "Commercial Courtyard",
  },

  // Residential project photos (client downloads, 2026-07)
  { file: "residential-white-modern-twostory.jpeg", src: "/residential/residential-white-modern-twostory.jpeg", category: "residential", alt: "White contemporary two-story home with stone and stucco exterior", caption: "White Contemporary Residence" },
  { file: "residential-traditional-stone-entry.jpeg", src: "/residential/residential-traditional-stone-entry.jpeg", category: "residential", alt: "Traditional home with natural stone entry and landscaped drive", caption: "Traditional Stone Entry" },
  { file: "residential-stone-traditional.jpeg", src: "/residential/residential-stone-traditional.jpeg", category: "residential", alt: "Stone and stucco traditional home under blue sky", caption: "Stone Traditional Home" },
  { file: "residential-modern-stucco.jpeg", src: "/residential/residential-modern-stucco.jpeg", category: "residential", alt: "Modern smooth-stucco home elevation with landscaping", caption: "Modern Stucco Elevation" },
  { file: "residential-stone-facade.jpeg", src: "/residential/residential-stone-facade.jpeg", category: "residential", alt: "Two-story residence with natural stone facade", caption: "Stone Facade Residence" },
  { file: "residential-stone-white-twostory.jpeg", src: "/residential/residential-stone-white-twostory.jpeg", category: "residential", alt: "Two-story stone and white stucco home", caption: "Two-Story Stone & Stucco" },
  { file: "residential-light-stone-modern.jpeg", src: "/residential/residential-light-stone-modern.jpeg", category: "residential", alt: "Light cut-stone contemporary home", caption: "Light Stone Contemporary" },
  { file: "residential-modern-stone.jpeg", src: "/residential/residential-modern-stone.jpeg", category: "residential", alt: "Modern home with stone and stucco elevation", caption: "Modern Stone Elevation" },
  { file: "residential-block-modern.jpeg", src: "/residential/residential-block-modern.jpeg", category: "residential", alt: "Block-clad modern home exterior", caption: "Block-Clad Modern Home" },
  { file: "residential-white-window-lawn.jpeg", src: "/residential/residential-white-window-lawn.jpeg", category: "residential", alt: "White stucco residence with front lawn", caption: "White Stucco Residence" },
  { file: "residential-modern-accent.jpeg", src: "/residential/residential-modern-accent.jpeg", category: "residential", alt: "Contemporary home with brick and stucco accent facade", caption: "Contemporary Accent Facade" },
  { file: "residential-stone-entry-detail.jpeg", src: "/residential/residential-stone-entry-detail.jpeg", category: "residential", alt: "Natural stone entry and doorway detail", caption: "Stone Entry Detail" },

  // Precast concrete project photos (client downloads, 2026-07)
  { file: "precast-arched-entry.jpeg", src: "/precast/precast-arched-entry.jpeg", category: "precast", alt: "Cast stone arched entry surround", caption: "Arched Entry Surround" },
  { file: "precast-arched-window-surrounds.jpeg", src: "/precast/precast-arched-window-surrounds.jpeg", category: "precast", alt: "Cast stone arched window surrounds", caption: "Arched Window Surrounds" },
  { file: "precast-arched-breezeway.jpeg", src: "/precast/precast-arched-breezeway.jpeg", category: "precast", alt: "Cast stone arched breezeway passage", caption: "Arched Breezeway" },
  { file: "precast-exterior-arched-entry.jpeg", src: "/precast/precast-exterior-arched-entry.jpeg", category: "precast", alt: "Exterior cast stone arch on a stone facade", caption: "Exterior Arch on Stone" },
  { file: "precast-window-sills.jpeg", src: "/precast/precast-window-sills.jpeg", category: "precast", alt: "Precast concrete window sills", caption: "Precast Window Sills" },
  { file: "precast-door-surround.jpeg", src: "/precast/precast-door-surround.jpeg", category: "precast", alt: "Interior cast stone door surround", caption: "Interior Door Surround" },
  { file: "precast-fireplace-surround.jpeg", src: "/precast/precast-fireplace-surround.jpeg", category: "precast", alt: "White cast stone fireplace surround", caption: "Fireplace Surround" },
  { file: "precast-fireplace-mantel.jpeg", src: "/precast/precast-fireplace-mantel.jpeg", category: "precast", alt: "Precast concrete fireplace mantel and surround", caption: "Precast Mantel & Surround" },
  { file: "precast-fireplace-media-surround.jpeg", src: "/precast/precast-fireplace-media-surround.jpeg", category: "precast", alt: "Cast stone fireplace and media surround", caption: "Fireplace & Media Surround" },
  { file: "precast-mantel-stone-fireplace.jpeg", src: "/precast/precast-mantel-stone-fireplace.jpeg", category: "precast", alt: "Precast mantel over a stacked stone hearth", caption: "Mantel Over Stone Hearth" },
  { file: "precast-ornate-fireplace-surround.jpeg", src: "/precast/precast-ornate-fireplace-surround.jpeg", category: "precast", alt: "Ornate cast stone fireplace surround", caption: "Ornate Fireplace Surround" },
  { file: "precast-arched-windows.jpeg", src: "/precast/precast-arched-windows.jpeg", category: "precast", alt: "Cast stone arched window trim", caption: "Arched Window Trim" },
];

export const commercialClients = ["In-N-Out Burger", "Burger King", "Chase Bank", "7-Eleven"];
