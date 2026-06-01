const roles = [
  {
    title: "IT Project Manager / Product Delivery Lead",
    company: "WyIdPytch / 51 Lex Publishing & Distribution",
    meta: "Remote, Oct 2024 - Present",
    bullets: [
      "Coordinate development and delivery of digital products that support music publishing and distribution operations.",
      "Translate business requirements into product features and functional specifications for developers.",
      "Align business and technical stakeholders, clarifying requirements and maintaining focus on product goals.",
      "Support feature prioritization and maintain product and operational documentation for internal tools and platforms.",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "Bincom ICT Solutions",
    meta: "Remote, Nov 2023 - Sept 2024",
    bullets: [
      "Analyzed large datasets to support business decision-making and provide actionable insights to internal stakeholders.",
      "Built dashboards in Power BI and Excel to improve reporting visibility and data-informed operational decisions.",
      "Developed automated workflows that reduced manual reporting effort by ~30%, improving reporting speed and process efficiency.",
      "Structured data outputs and reporting artefacts to improve clarity for non-technical users and decision-makers.",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "Digital Echoes (UK)",
    meta: "Remote, Feb 2022 - Aug 2023",
    bullets: [
      "Performed data analysis and visualization to support client reporting, operational reviews, and strategic decision-making.",
      "Conducted exploratory data analysis to identify trends, patterns, and insights relevant to business objectives.",
      "Developed clear reporting outputs that improved communication between analytical workstreams and business stakeholders.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-page">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title mt-3">Remote delivery, stakeholder alignment, and data-informed operations.</h2>
        <div className="mt-10 space-y-5">
          {roles.map((role) => (
            <article key={`${role.company}-${role.meta}`} className="card p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{role.title}</h3>
                  <p className="mt-1 font-medium text-blue-calm">{role.company}</p>
                </div>
                <p className="text-sm font-semibold text-muted">{role.meta}</p>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
