const projects = [
  {
    title: "FLAVA Artist Promotion Platform",
    subtitle: "Product Delivery Support",
    context:
      "Digital platform enabling artists to share music across multiple streaming services through a unified fan link.",
    goal:
      "Provide artists with a single, easy-to-share link that aggregates major streaming platforms and improves fan engagement and track discovery.",
    role:
      "Product Delivery Support / Junior Product Owner working with a remote development team and music business stakeholders.",
    responsibilities: [
      "Captured and clarified business requirements from artist relations and marketing teams, translating them into structured product features and functional specifications for developers.",
      "Helped break high-level platform goals into prioritized feature sets, focusing on core flows such as artist onboarding, fan-link generation, and basic performance metrics.",
      "Collaborated with developers to refine user stories, resolve ambiguity, and ensure UI and UX decisions aligned with artist and fan expectations.",
      "Supported coordination of release milestones, documenting changes and communicating updates to non-technical stakeholders.",
    ],
    outcomes: [
      "Delivered a usable fan-link platform that simplified how artists share their music and created a more consistent promotion experience across channels.",
      "Improved alignment between business and technical teams, reducing back-and-forth on requirements and keeping the team focused on high-value features in early releases.",
    ],
  },
  {
    title: "ADM Challenge Website",
    subtitle: "Digital Competition Platform",
    context:
      "Web platform for running music competitions, managing artist submissions, and enabling audience engagement.",
    goal:
      "Provide a central hub where artists can submit entries, fans can discover participants, and organizers can manage competition workflows and engagement.",
    role:
      "Product Requirements Coordinator / Product Delivery Support within a remote, cross-functional team.",
    responsibilities: [
      "Gathered and structured requirements for submission flows, eligibility rules, voting or engagement mechanisms, and admin review features.",
      "Partnered with developers to define functional features, acceptance criteria, and edge cases around artist registration, content upload, and basic moderation.",
      "Documented platform behaviours and supported stakeholders with clear explanations of what each release would include.",
      "Helped prioritize MVP features to ensure the first launch covered essential competition workflows before adding advanced functionality.",
    ],
    outcomes: [
      "Contributed to a competition site that simplified artist submissions and made it easier for organizers to run and monitor campaigns.",
      "Reduced confusion among stakeholders through clearer documentation and communication, supporting smoother scope and timeline decisions.",
    ],
  },
  {
    title: "Accounting Aggregation Software",
    subtitle: "Internal Financial Tool",
    context:
      "Internal tool to reconcile revenue data from multiple music distribution sources and improve financial visibility.",
    goal:
      "Replace manual reconciliation with a more reliable system that consolidates revenue streams from different distributors and platforms into a single financial view.",
    role:
      "Product Delivery Support / IT Project Manager working with finance and technical teams.",
    responsibilities: [
      "Worked with finance stakeholders to understand reconciliation pain points, required data fields, and reporting needs.",
      "Supported definition of functional requirements for data ingestion, mapping of revenue sources, and aggregation and reporting features.",
      "Helped document workflows and edge cases, giving developers clear guidance on expected system behaviours.",
      "Facilitated communication between finance and development teams, clarifying questions and aligning on priorities for each iteration.",
    ],
    outcomes: [
      "Supported delivery of a tool that improved visibility into revenue across multiple distribution sources and reduced manual tracking effort.",
      "Helped lay the foundation for more accurate, timely financial reporting with more trusted consolidated figures.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title mt-3">Selected product and delivery work.</h2>
        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <article key={project.title} className="card p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-blue-calm">
                    {project.subtitle}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-purple-soft px-3 py-1 text-sm font-semibold text-purple-accent">
                  {project.role}
                </span>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-ink">Context</h4>
                  <p className="mt-2 text-sm leading-7 text-muted">{project.context}</p>
                  <h4 className="mt-5 font-semibold text-ink">Goal</h4>
                  <p className="mt-2 text-sm leading-7 text-muted">{project.goal}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink">Contributions</h4>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink">Outcomes</h4>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                    {project.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="mt-8 rounded-lg border border-line bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-ink">More product & analytics work</h3>
          <p className="mt-3 leading-8 text-muted">
            Additional experience includes product delivery and Agile operations
            at WyIdPytch / 51 Lex, plus data and BI dashboard automation work
            from Bincom ICT Solutions and Digital Echoes (UK).
          </p>
        </aside>
      </div>
    </section>
  );
}
