"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/business-data";
import BrandMark from "@/components/BrandMark";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Our Work", href: "/gallery" },
  { label: "About", href: "/about" },
];

const secondaryLinks = [
  { label: "Material Suppliers", href: "/suppliers" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-paper)]/95 backdrop-blur border-b border-[color:var(--color-line)]">
      <div className="container-page flex items-center justify-between h-[72px] lg:h-20">
        <Link href="/" className="flex items-center gap-3">
          <BrandMark className="w-8 h-8 lg:w-9 lg:h-9" />
          <span className="flex flex-col leading-none">
            <span
              className="text-xl sm:text-2xl tracking-tight text-[color:var(--color-ink)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              CMF <b className="font-normal">Masonry</b>
            </span>
            <span className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)] mt-0.5">
              Stone &middot; Brick &middot; Tile &middot; Precast
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
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

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={BUSINESS.phoneHref}
            className="text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--color-ink)] hover:text-[color:var(--color-brick)] transition-colors"
          >
            Call {BUSINESS.phone}
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
          className="relative lg:hidden text-[color:var(--color-ink)] w-10 h-10 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span className={`absolute left-2 top-[13px] block w-6 h-0.5 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`absolute left-2 top-[19px] block w-6 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-2 top-[25px] block w-6 h-0.5 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-paper)] max-h-[calc(100vh-72px)] overflow-y-auto"
        >
          <nav className="container-page py-6" aria-label="Mobile navigation">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--color-brick)] mb-2">
              Explore CMF
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-[color:var(--color-line)] py-4 text-xl text-[color:var(--color-ink)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {link.label}<span aria-hidden className="text-[color:var(--color-brick)]">&rarr;</span>
              </Link>
            ))}
            <div className="grid grid-cols-3 gap-2 py-5">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs text-center text-[color:var(--color-ink-soft)] py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="border border-[color:var(--color-ink)] text-[color:var(--color-ink)] text-sm font-bold px-4 py-3 text-center"
              >
                Call CMF
              </a>
              <Link
                href="/estimate"
                onClick={() => setOpen(false)}
                className="bg-[color:var(--color-brick)] text-white text-sm font-bold px-4 py-3 text-center"
              >
                Request Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/15 shadow-[0_-8px_30px_rgba(0,0,0,0.16)] lg:hidden">
        <a
          href={BUSINESS.phoneHref}
          className="bg-[color:var(--color-ink)] text-white text-center py-3.5 text-xs font-bold uppercase tracking-[0.12em]"
        >
          Call {BUSINESS.phone}
        </a>
        <Link
          href="/estimate"
          className="bg-[color:var(--color-brick)] text-white text-center py-3.5 text-xs font-bold uppercase tracking-[0.12em]"
        >
          Get an Estimate
        </Link>
      </div>
    </header>
  );
}
