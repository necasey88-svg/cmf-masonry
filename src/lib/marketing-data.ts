export type ServiceLanding = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  applications: string[];
  audiences: string[];
  image: string;
};

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "stone-veneer",
    eyebrow: "Architectural Stone",
    title: "Stone Veneer Installation in Southern California",
    description:
      "Natural and manufactured stone veneer installation for residential exteriors, fireplaces, entries, retail, hospitality, and commercial façades.",
    intro:
      "CMF installs natural and manufactured stone as an architectural finish—not an afterthought. Our team coordinates material, pattern, transitions, corners, and surrounding details so the finished work belongs to the building.",
    applications: [
      "Custom home exteriors and entries",
      "Fireplace surrounds and feature walls",
      "Restaurant and retail façades",
      "Columns, wainscot, and architectural accents",
    ],
    audiences: ["Homeowners", "Interior designers", "Architects", "General contractors"],
    image: "/custom-builds/custom-stone-residence.jpeg",
  },
  {
    slug: "brick-veneer",
    eyebrow: "Full & Thin Brick",
    title: "Architectural Brick and Brick Veneer Installation",
    description:
      "Full brick and thin brick veneer installation for homes, fireplaces, commercial interiors, storefronts, and exterior architectural details.",
    intro:
      "Brick depends on proportion, coursing, joint profile, and clean transitions. CMF installs full and thin brick for projects where the rhythm and finish of the work matter as much as its durability.",
    applications: [
      "Residential façades and entries",
      "Fireplaces and interior feature walls",
      "Restaurant and retail environments",
      "Columns, bases, and exterior accents",
    ],
    audiences: ["Homeowners", "Designers", "Architects", "Commercial project teams"],
    image: "/custom-builds/custom-brick-estate.jpeg",
  },
  {
    slug: "tile-masonry",
    eyebrow: "Architectural Tile",
    title: "Tile Masonry for Fireplaces and Architectural Features",
    description:
      "Precision tile installation for fireplace surrounds, hearths, feature walls, hospitality spaces, and detailed architectural applications.",
    intro:
      "CMF brings masonry discipline to tile installations that demand careful layout, alignment, edge treatment, and integration with mantels, fireboxes, walls, and adjacent finishes.",
    applications: [
      "Fireplace surrounds and hearths",
      "Interior architectural features",
      "Hospitality and restaurant finishes",
      "Custom patterns and detailed transitions",
    ],
    audiences: ["Homeowners", "Interior designers", "Builders", "Hospitality teams"],
    image: "/gallery/2eb435ce-15b2-41b1-8fa0-bc96450253a7.webp",
  },
  {
    slug: "architectural-precast",
    eyebrow: "Cast Stone & Precast",
    title: "Architectural Precast Installation in Southern California",
    description:
      "Architectural precast and cast stone installation for arches, window surrounds, entries, sills, mantels, and integrated façade details.",
    intro:
      "Precast succeeds when every piece aligns with the architecture around it. CMF installs cast stone and architectural precast with close attention to layout, joints, support, adjacent masonry, and the complete elevation.",
    applications: [
      "Arched entries and breezeways",
      "Window surrounds and sills",
      "Fireplace mantels and surrounds",
      "Columns, trim, and façade details",
    ],
    audiences: ["Architects", "Custom home builders", "Designers", "General contractors"],
    image: "/precast/precast-arched-entry.jpeg",
  },
  {
    slug: "commercial-masonry",
    eyebrow: "Commercial & Multi-Site",
    title: "Commercial Finish Masonry for Southern California",
    description:
      "Stone, brick, tile, and precast installation for restaurants, retail, hospitality, multifamily, and branded commercial properties.",
    intro:
      "CMF supports commercial teams with finish-sensitive masonry, field coordination, repeatable standards, and experience on recognizable restaurant, retail, and financial-service properties.",
    applications: [
      "Restaurant and retail façades",
      "Branded multi-site installations",
      "Hospitality and amenity spaces",
      "Multifamily entries and common areas",
    ],
    audiences: ["General contractors", "Architects", "Developers", "Facility and brand teams"],
    image: "/gallery/a8f6f783-cc7f-4013-b514-008ad3d09204.webp",
  },
];

export type ServiceAreaLanding = {
  slug: string;
  county: string;
  cities: string[];
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
};

export const serviceAreaLandings: ServiceAreaLanding[] = [
  {
    slug: "orange-county",
    county: "Orange County",
    cities: ["Anaheim", "Orange", "Irvine", "Santa Ana", "Fullerton", "Yorba Linda", "Newport Beach", "Huntington Beach"],
    eyebrow: "Orange County",
    title: "Masonry Contractor in Orange County, CA",
    description:
      "Stone veneer, brick veneer, tile, and architectural precast installation for homes and commercial properties across Orange County — based in our Anaheim showroom.",
    intro:
      "CMF Masonry is headquartered in Anaheim, putting our crews close to projects across Orange County — from custom home exteriors in Yorba Linda and Irvine to retail and restaurant masonry along the coast in Newport Beach and Huntington Beach.",
    highlights: [
      "Local Anaheim showroom and material library",
      "Custom home stone and brick veneer installation",
      "Restaurant and retail masonry for commercial properties",
      "Fireplace surrounds and precast architectural details",
    ],
  },
  {
    slug: "los-angeles-county",
    county: "Los Angeles County",
    cities: ["Los Angeles", "Long Beach", "Pasadena", "Glendale", "Santa Monica", "Torrance"],
    eyebrow: "Los Angeles County",
    title: "Masonry Contractor in Los Angeles County, CA",
    description:
      "Stone veneer, brick veneer, tile, and architectural precast installation for residential and commercial projects throughout Los Angeles County.",
    intro:
      "From single-family exteriors to multi-unit residential and commercial storefronts, CMF Masonry brings the same materials expertise and finish standard to projects across Los Angeles County that we deliver from our Anaheim base.",
    highlights: [
      "Custom home and multi-unit residential masonry",
      "Commercial and retail façade installation",
      "Natural and manufactured stone veneer",
      "Coordination with architects and general contractors",
    ],
  },
  {
    slug: "riverside-county",
    county: "Riverside County",
    cities: ["Riverside", "Corona", "Temecula", "San Bernardino", "Moreno Valley"],
    eyebrow: "Riverside County & the Inland Empire",
    title: "Masonry Contractor in Riverside County, CA",
    description:
      "Stone, brick, tile, and precast masonry installation for homes and commercial properties across Riverside County and the Inland Empire.",
    intro:
      "CMF Masonry serves homeowners and commercial teams throughout Riverside County and the Inland Empire, from custom estate exteriors in Temecula to commercial and multi-site work in Corona and San Bernardino.",
    highlights: [
      "Custom home exteriors and fireplace surrounds",
      "Commercial masonry for multi-site properties",
      "Architectural precast and cast stone details",
      "Material selection support for larger developments",
    ],
  },
  {
    slug: "san-diego-county",
    county: "San Diego County",
    cities: ["San Diego", "Chula Vista", "Oceanside", "Carlsbad", "Escondido"],
    eyebrow: "San Diego County",
    title: "Masonry Contractor in San Diego County, CA",
    description:
      "Stone veneer, brick veneer, tile, and architectural precast installation for residential and commercial properties across San Diego County.",
    intro:
      "CMF Masonry extends its Southern California masonry work into San Diego County, delivering the same materials-first approach to custom homes, restaurants, and commercial properties from Oceanside to Chula Vista.",
    highlights: [
      "Custom home stone and brick exteriors",
      "Restaurant and retail commercial masonry",
      "Tile and precast fireplace installations",
      "Project coordination for out-of-area builds",
    ],
  },
];

export type CommercialCaseStudy = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  description: string;
  scope: string;
  images: { src: string; alt: string }[];
};

export const commercialCaseStudies: CommercialCaseStudy[] = [
  {
    slug: "in-n-out-burger",
    client: "In-N-Out Burger",
    sector: "Restaurant",
    title: "Masonry for a Recognizable Restaurant Brand",
    description:
      "Commercial masonry work completed for an In-N-Out Burger property in Southern California.",
    scope: "Commercial masonry installation",
    images: [
      { src: "/gallery/a8f6f783-cc7f-4013-b514-008ad3d09204.webp", alt: "In-N-Out Burger exterior" },
      { src: "/gallery/3df0e529-20e2-4e56-958b-1afbf5980855.webp", alt: "In-N-Out Burger entrance" },
      { src: "/gallery/0062bbaa-eae6-4f2f-8c22-38fa09bb3022.webp", alt: "In-N-Out Burger entry" },
    ],
  },
  {
    slug: "burger-king",
    client: "Burger King",
    sector: "Restaurant",
    title: "Commercial Masonry for Restaurant Construction",
    description:
      "Commercial masonry work completed for a Burger King property in Southern California.",
    scope: "Commercial masonry installation",
    images: [
      { src: "/gallery/219128e7-e569-4c47-a900-48d735a108d4.webp", alt: "Burger King restaurant at sunset" },
    ],
  },
  {
    slug: "chase-bank",
    client: "Chase Bank",
    sector: "Financial services",
    title: "Exterior Masonry for a Branded Commercial Property",
    description:
      "Commercial masonry work completed for a Chase Bank property in Southern California.",
    scope: "Commercial masonry installation",
    images: [
      { src: "/gallery/d60c1825-a103-4d09-89e2-049818cd9815.webp", alt: "Chase Bank branch exterior" },
    ],
  },
  {
    slug: "7-eleven",
    client: "7-Eleven",
    sector: "Convenience retail",
    title: "Masonry for a High-Traffic Retail Property",
    description:
      "Commercial masonry work completed for a 7-Eleven property in Southern California.",
    scope: "Commercial masonry installation",
    images: [
      { src: "/gallery/0c6f59b9-7608-4c68-a0b0-a88f264dba1b.webp", alt: "7-Eleven convenience store exterior" },
    ],
  },
];
