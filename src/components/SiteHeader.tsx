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
  { label: "Careers", href: "https://calmantel.com/careers" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-paper)] border-b-4 border-[color:var(--color-ink)] shadow-[0_8px_24px_rgba(36,37,33,0.07)]">
      <div className="container-page flex items-center justify-between h-[76px] lg:h-24">
        <Link href="/" className="flex items-center gap-3.5 shrink-0" aria-label="CMF Masonry home">
          <BrandMark className="w-9 h-9 lg:w-11 lg:h-11" />
          <span className="flex flex-col leading-none">
            <span
              className="text-[22px] sm:text-2xl lg:text-[28px] tracking-[-0.025em] text-[color:var(--color-ink)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              CMF <b className="font-normal">Masonry</b>
            </span>
            <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--color-ink-soft)] mt-1.5">
              Stone &middot; Brick &middot; Tile &middot; Precast
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 mx-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-ink)] after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[color:var(--color-brick)] after:transition-transform hover:text-[color:var(--color-brick)] hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-stretch gap-0 border-l border-[color:var(--color-line)] pl-5">
          <div className="hidden xl:flex flex-col justify-center pr-5">
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-ink-soft)] mb-1">
              Speak with CMF
            </span>
            <a
              href={BUSINESS.phoneHref}
              className="text-sm font-bold text-[color:var(--color-ink)] hover:text-[color:var(--color-brick)] transition-colors"
            >
              {BUSINESS.phone}
            </a>
          </div>
          <Link
            href="/estimate"
            className="flex items-center bg-[color:var(--color-brick)] hover:bg-[color:var(--color-brick-dark)] text-white text-[11px] font-bold uppercase tracking-[0.1em] px-6 py-4 transition-colors"
          >
            Request Estimate <span aria-hidden className="ml-2">&#8599;</span>
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
          className="lg:hidden border-t border-[color:var(--color-line)] bg-[color:var(--color-paper)] max-h-[calc(100vh-76px)] overflow-y-auto"
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
            <div className="grid grid-cols-2 gap-2 py-5">
              {secondaryLinks.map((link) =>
                link.href.startsWith("http") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-center text-[color:var(--color-ink-soft)] py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-xs text-center text-[color:var(--color-ink-soft)] py-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
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
