import Link from "next/link";
import { BUSINESS } from "@/lib/business-data";
import BrandMark from "@/components/BrandMark";

export default function SiteFooter() {
  return (
    <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="flex items-center gap-2.5">
            <BrandMark className="w-7 h-7" dark />
            <span className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
              CMF <b className="font-normal">Masonry</b>
            </span>
          </span>
          <p className="text-sm text-[color:var(--color-paper)]/60 mt-3 leading-relaxed">
            More than 20 years of stone, brick, tile, and precast experience for homeowners,
            designers, architects, and general contractors across {BUSINESS.serviceArea}.
          </p>
          <p className="text-xs text-[color:var(--color-paper)]/50 mt-4 leading-relaxed">
            {BUSINESS.dbaClarifier}
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.15em] text-[color:var(--color-paper)]/50 mb-4">
            Explore
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <li><Link href="/services" className="hover:text-[color:var(--color-brick-light)]">Services</Link></li>
            <li><Link href="/residential" className="hover:text-[color:var(--color-brick-light)]">Residential</Link></li>
            <li><Link href="/commercial" className="hover:text-[color:var(--color-brick-light)]">Commercial</Link></li>
            <li><Link href="/gallery" className="hover:text-[color:var(--color-brick-light)]">Our Work</Link></li>
            <li><Link href="/about" className="hover:text-[color:var(--color-brick-light)]">About</Link></li>
            <li><Link href="/suppliers" className="hover:text-[color:var(--color-brick-light)]">Suppliers</Link></li>
            <li><Link href="/service-area" className="hover:text-[color:var(--color-brick-light)]">Service Area</Link></li>
            <li><Link href="/contact" className="hover:text-[color:var(--color-brick-light)]">Contact</Link></li>
            <li>
              <a
                href="https://calmantel.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--color-brick-light)]"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.15em] text-[color:var(--color-paper)]/50 mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-[color:var(--color-paper)]/80">
            <li>{BUSINESS.address.street}</li>
            <li>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</li>
            <li>{BUSINESS.hours}</li>
            <li>
              <a href={BUSINESS.phoneHref} className="hover:text-[color:var(--color-brick-light)]">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="pt-2 text-xs text-[color:var(--color-paper)]/55">
              {BUSINESS.legalName}
            </li>
            <li className="text-xs text-[color:var(--color-paper)]/55">
              CA License #{BUSINESS.licenses.california}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.15em] text-[color:var(--color-paper)]/50 mb-4">
            Get Started
          </h3>
          <Link
            href="/estimate"
            className="inline-block bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            Request an Estimate
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[color:var(--color-paper)]/50">
          <span>&copy; {new Date().getFullYear()} CMF Masonry. All rights reserved.</span>
          <a href={BUSINESS.parentSite} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-brick-light)]">
            Part of the California Mantel &amp; Fireplace family
          </a>
        </div>
      </div>
    </footer>
  );
}
