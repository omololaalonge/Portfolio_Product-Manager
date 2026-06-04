"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education & Certs" },
  { href: "#contact", label: "Contact" },
];

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-5 py-3 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-4">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="text-base font-semibold text-ink" onClick={closeMenu}>
            Omolola Alonge
          </a>
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-ink transition hover:border-blue-calm hover:text-blue-calm focus:outline-none focus:ring-2 focus:ring-blue-calm focus:ring-offset-4 focus:ring-offset-surface"
            >
              <MenuIcon isOpen={isOpen} />
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-x-4 gap-y-2 text-sm font-medium text-muted lg:flex">
          <div className="flex gap-x-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-blue-calm focus:outline-none focus:ring-2 focus:ring-blue-calm focus:ring-offset-4 focus:ring-offset-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/omolola-alonge-product-portfolio.pdf"
              className="rounded-md bg-blue-calm px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-calm focus:ring-offset-4 focus:ring-offset-surface dark:text-slate-950"
            >
              Download CV
            </a>
            <ThemeToggle />
          </div>
        </div>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className="mt-3 rounded-lg border border-line bg-elevated p-3 shadow-soft lg:hidden"
          >
            <div className="grid gap-1 text-sm font-medium text-muted">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 transition hover:bg-blue-soft/40 hover:text-blue-calm focus:outline-none focus:ring-2 focus:ring-blue-calm focus:ring-offset-2 focus:ring-offset-elevated"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/omolola-alonge-product-portfolio.pdf"
                onClick={closeMenu}
                className="mt-2 rounded-md bg-blue-calm px-3 py-3 text-center font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-calm focus:ring-offset-2 focus:ring-offset-elevated dark:text-slate-950"
              >
                Download CV
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
