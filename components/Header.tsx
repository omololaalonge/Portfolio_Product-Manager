import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education & Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <a href="#" className="text-base font-semibold text-ink">
          Omolola Alonge
        </a>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-muted">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
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
      </nav>
    </header>
  );
}
