"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/business-data";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-paper)]/95 backdrop-blur border-b border-[color:var(--color-line)]">
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-2xl tracking-wide text-[color:var(--color-ink)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            CMF Masonry
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)] mt-0.5">
            Stone &middot; Brick &middot; Tile &middot; Precast
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-brick)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="text-sm font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-brick)] transition-colors"
          >
            {BUSINESS.phone}
          </a>
          <Link
            href="/estimate"
            className="bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            Request Estimate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-[color:var(--color-ink)] p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-paper)]">
          <nav className="container-page py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[color:var(--color-ink-soft)]"
              >
                {link.label}
              </Link>
            ))}
            <a href={BUSINESS.phoneHref} className="text-sm font-medium text-[color:var(--color-ink)] mt-2">
              {BUSINESS.phone}
            </a>
            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="bg-[color:var(--color-brick)] text-white text-sm font-medium px-5 py-3 text-center mt-1"
            >
              Request Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
