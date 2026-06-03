const badges = [
  "Scrum Master Certified (SMC)",
  "SPOC - In Progress",
  "Product Ops ready",
  "Data & automation background",
];

export default function Hero() {
  return (
    <section className="border-b border-line bg-gradient-to-br from-surface via-blue-soft/40 to-purple-soft/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Project/Product Manager Portfolio</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Omolola Alonge
          </h1>
          <p className="mt-3 text-lg font-semibold text-blue-calm dark:text-white sm:text-xl lg:text-2xl">
            Project/Product Manager • Product Delivery • Agile Operations
          </p>
          <p className="mt-4 text-xl font-medium text-blue-calm sm:text-2xl">
            Cross-functional problem solver for product teams that need clarity,
            momentum, and measurable delivery.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            I bridge the gap between business data, stakeholder requirements,
            and engineering execution by turning ambiguous needs into scoped
            MVPs, prioritized backlogs, clear user stories, and launch-ready
            delivery plans.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="pill">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:lgeojeg@gmail.com"
              className="rounded-md bg-blue-calm px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-calm focus:ring-offset-4 focus:ring-offset-surface dark:text-slate-950"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/omolola-alonge-0908441b5/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition hover:border-blue-calm hover:text-blue-calm focus:outline-none focus:ring-2 focus:ring-blue-calm focus:ring-offset-4 focus:ring-offset-surface"
            >
              LinkedIn
            </a>
            <span className="rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink">
              Abuja, Nigeria
            </span>
            <a
              href="/omolola-alonge-product-portfolio.pdf"
              className="rounded-md bg-purple-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-purple-accent focus:ring-offset-4 focus:ring-offset-surface dark:text-slate-950"
            >
              Download CV / Portfolio PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
