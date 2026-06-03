const roles = [
  {
    title: "Product Delivery Lead / Junior Product Owner",
    company: "Wyld Pytch / 51 Lex Publishing & Distribution",
    meta: "Remote, Oct 2024 - Present",
    bullets: [
      "Owned delivery roadmaps for music publishing and distribution platforms, translating business goals into scoped MVPs and prioritized feature backlogs.",
      "Prioritized feature requests, defects, and release milestones with stakeholders to keep engineering focused on launch-critical work.",
      "Designed scalable workflows for product documentation, stakeholder updates, and cross-functional handoffs across remote teams.",
      "Acted as the bridge between business users, technical stakeholders, and developers to clarify acceptance criteria and reduce delivery ambiguity.",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "Bincom ICT Solutions",
    meta: "Remote, Nov 2023 - Sept 2024",
    bullets: [
      "Transformed raw operational datasets into decision-ready insights for internal stakeholders and product-adjacent business teams.",
      "Built Power BI and Excel dashboards that improved reporting visibility and helped teams spot performance trends faster.",
      "Designed automated workflows that reduced manual reporting effort by ~30%, improving reporting speed and process consistency.",
      "Structured reporting artifacts for non-technical users, making analytical outputs easier to interpret and act on.",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "Digital Echoes (UK)",
    meta: "Remote, Feb 2022 - Aug 2023",
    bullets: [
      "Optimized client reporting workflows by turning exploratory analysis into clear visual outputs for operational and strategic reviews.",
      "Identified patterns, data gaps, and performance signals that helped stakeholders define sharper business priorities.",
      "Designed scalable reporting templates that improved communication between analytical workstreams and business stakeholders.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-page">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title mt-3">Product delivery, stakeholder alignment, and data-informed operations.</h2>
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
