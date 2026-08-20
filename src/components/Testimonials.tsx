import Link from "next/link";
import { BUSINESS } from "@/lib/business-data";

type Review = { name: string; meta: string; quote: string };

// Real 5-star Google reviews for California Mantel & Fireplace (CMF Masonry's
// parent business — same reviews already used on calmantel.com's Testimonials
// component). CMF Masonry doesn't have its own separate review history yet, so
// these are labeled honestly as California Mantel & Fireplace / Anaheim
// showroom reviews rather than presented as masonry-specific.
const reviews: Review[] = [
  {
    name: "James Bair",
    meta: "11 reviews · 2 photos",
    quote:
      "California Mantel & Fireplace did a great job with install of two fireplace inserts in our 1940 SF building. It turns out there's a lot to think about when inserting a new gas unit into an old building, and we felt like we got great counsel the whole way through the process from Chris and team. Highly recommend them!",
  },
  {
    name: "Sharon Arnold",
    meta: "7 reviews",
    quote:
      "Very professional from start to finish, from the scheduler to the two technicians who checked and cleaned my gas fireplace. The technician was very knowledgeable, informative, protected my hardwood floors, and wore booties. I highly recommend California Mantel & Fireplace.",
  },
  {
    name: "Robert Assini",
    meta: "4 reviews",
    quote: "A great team of people. We had a special need and they came through.",
  },
  {
    name: "Parimal Sheth",
    meta: "8 reviews",
    quote: "Very conscientious. Answered all questions. Great patience.",
  },
];

function Stars() {
  return (
    <span className="inline-flex text-[color:var(--color-brick)]" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="container-page py-20 border-t border-[color:var(--color-line)]">
      <div className="max-w-3xl mb-10">
        <p className="uppercase tracking-[0.26em] text-[color:var(--color-brick)] text-xs font-bold mb-4">
          Trusted for 20+ years
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-[color:var(--color-ink)] mb-5"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What our customers are saying
        </h2>
        <p className="text-[color:var(--color-ink-soft)] leading-relaxed">
          CMF Masonry is the masonry division of{" "}
          <a
            href={BUSINESS.parentSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-brick)] hover:underline"
          >
            California Mantel &amp; Fireplace
          </a>{" "}
          in Anaheim, CA. These reviews reflect that Anaheim showroom and installation team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="border border-[color:var(--color-line)] bg-[color:var(--color-paper-warm)] p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <Stars />
              <span className="text-[10px] uppercase tracking-widest text-[color:var(--color-ink-soft)]">
                Google
              </span>
            </div>
            <blockquote className="text-[color:var(--color-ink-soft)] leading-relaxed text-sm line-clamp-[8] flex-1">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 pt-4 border-t border-[color:var(--color-line)]">
              <p className="font-medium text-[color:var(--color-ink)] text-sm">{r.name}</p>
              <p className="text-xs text-[color:var(--color-ink-soft)]">{r.meta}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <Link
        href="https://www.google.com/search?q=California+Mantel+%26+Fireplace+reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 text-xs font-bold uppercase tracking-[0.13em] text-[color:var(--color-ink)] border-b border-[color:var(--color-ink)] pb-0.5"
      >
        Read more reviews on Google &#8594;
      </Link>
    </section>
  );
}
