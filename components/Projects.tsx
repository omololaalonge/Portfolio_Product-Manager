const metrics = [
  { label: "Role", detail: "Product Delivery Lead / Junior Product Owner" },
  { label: "Timeline", detail: "Dec 2025 - Feb 2026" },
  { label: "Tools Used", detail: "Jira, Confluence, Figma, Slack, GitHub" },
  {
    label: "Core Focus",
    detail:
      "MVP Scoping, Backlog Triage, Stakeholder Management, Vendor Transition",
  },
];

const challenges = [
  {
    title: "Scope Creep",
    body: "Feature lists were expanding without clear prioritization or validation against launch goals.",
  },
  {
    title: "Critical Defects",
    body: "Essential responsive layout elements were broken across mobile and desktop views, threatening brand credibility.",
  },
  {
    title: "Delivery Bottleneck",
    body: "The primary developer was consistently blocking progress, requiring immediate intervention to safeguard the launch timeline.",
  },
];

const framework = [
  {
    phase: "Week 1",
    title: "Backlog Triage & Defect Audit",
    body: "Audited all outstanding developer tickets, migrated messy bug sheets into a centralized Jira backlog, and categorized issues into launch-critical defects and post-launch enhancements.",
  },
  {
    phase: "Week 2",
    title: "Stakeholder Realignment",
    body: "Presented a transparent, data-backed roadmap to technical stakeholders and management, aligning expectations around MVP scope and launch boundaries.",
  },
  {
    phase: "Week 2",
    title: "Offboarding & Vendor Transition",
    body: "Mitigated delivery risk by coordinating backend access revocation, documenting the technical state, and pivoting to an internal delivery pipeline.",
  },
  {
    phase: "Weeks 3-4",
    title: "Cross-Functional QA & Sprint to Launch",
    body: "Led daily syncs focused on high-priority layout bugs and partnered with QA and UI/UX designers to validate responsiveness across key viewports.",
  },
];

const pillars = [
  {
    title: "Ruthless Backlog Management",
    body: "Replaced arbitrary task tracking with a value-driven backlog. Technical bugs were mapped to user impact, so mobile article-readability issues were prioritized over lower-value cosmetic changes.",
  },
  {
    title: "High-Stakes Stakeholder Alignment",
    body: "Served as the single point of truth between executive leadership and technical delivery realities, giving clear status updates on feature readiness, risks, and trade-offs.",
  },
  {
    title: "Risk Mitigation & Technical Governance",
    body: "Took decisive action when the external development partner could not meet requirements by securing repository access, documenting handover state, and redistributing engineering work.",
  },
];

const outcomes = [
  "Achieved a 100% on-time launch despite an emergency developer transition two weeks before deployment.",
  "Closed dozens of critical front-end layout defects within the final 14-day sprint cycle.",
  "Delivered a clean, prioritized V2 roadmap so the incoming engineering team could immediately begin post-launch optimization.",
];

const supportingProjects = [
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
    <section id="projects" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Featured Case Study</p>
        <h2 className="section-title mt-3">
          Delivering Under Pressure - The Rolling Stone Africa Website Revamp
        </h2>

        <article className="card mt-10 overflow-hidden">
          <div className="border-b border-line bg-page p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-calm">
                  Case Study
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                  Rolling Stone Africa Website Revamp
                </h3>
                <p className="mt-5 leading-8 text-muted">
                  When launching a digital footprint for an iconic global media
                  brand&apos;s regional edition, failure is not an option.
                  Mid-way through launch preparation, the RSA platform faced
                  critical delivery bottlenecks due to development delays and
                  unmapped user interface defects.
                </p>
                <p className="mt-4 leading-8 text-muted">
                  Stepping into a hybrid Product Owner and Delivery role, I took
                  ownership of the unstable codebase, triaged a chaotic backlog,
                  managed a high-stakes engineering transition, and drove the
                  product to a successful MVP launch.
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-line bg-elevated">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <caption className="sr-only">
                      Rolling Stone Africa case study key metrics
                    </caption>
                    <tbody className="divide-y divide-line">
                      {metrics.map((metric) => (
                        <tr key={metric.label}>
                          <th className="w-36 bg-blue-soft/40 px-4 py-4 font-semibold text-ink">
                            {metric.label}
                          </th>
                          <td className="px-4 py-4 leading-6 text-muted">
                            {metric.detail}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 p-6 sm:p-8">
            <section aria-labelledby="challenge-heading">
              <h3 id="challenge-heading" className="text-xl font-semibold text-ink">
                The Challenge
              </h3>
              <p className="mt-3 max-w-4xl leading-8 text-muted">
                The project was trapped in a common delivery cycle: an
                approaching launch deadline, a growing list of critical visual
                and functional bugs, and an external development resource unable
                to deliver on core technical specifications.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {challenges.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="rounded-lg border border-line bg-page p-5"
                  >
                    <h4 className="font-semibold text-ink">{challenge.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {challenge.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="strategy-heading">
              <h3 id="strategy-heading" className="text-xl font-semibold text-ink">
                Product Strategy: Defining the Launch MVP
              </h3>
              <p className="mt-3 max-w-4xl leading-8 text-muted">
                To save the launch, I shifted the team from an expansive feature
                set to a strict MVP model: if a feature did not directly impact
                a reader&apos;s ability to consume content or navigate the core
                site on day one, it moved to V2.
              </p>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {framework.map((item) => (
                  <div
                    key={`${item.phase}-${item.title}`}
                    className="rounded-lg border border-line bg-page p-5"
                  >
                    <p className="text-sm font-semibold text-blue-calm">
                      {item.phase}
                    </p>
                    <h4 className="mt-2 font-semibold text-ink">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="pillars-heading">
              <h3 id="pillars-heading" className="text-xl font-semibold text-ink">
                Key Product Ownership Pillars
              </h3>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-lg border border-line p-5">
                    <h4 className="font-semibold text-ink">{pillar.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-muted">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="impact-heading">
              <h3 id="impact-heading" className="text-xl font-semibold text-ink">
                Outcome & Impact
              </h3>
              <blockquote className="mt-4 rounded-lg border-l-4 border-blue-calm bg-blue-soft/30 p-5 text-lg font-semibold leading-8 text-ink">
                The Rolling Stone Africa platform launched on schedule with a
                fully responsive, visually stable user interface across all
                major devices.
              </blockquote>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                {outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg bg-page p-5 text-sm italic leading-7 text-muted">
                Key learning: successful product delivery is not about launching
                with every feature intact. It is about prioritizing user
                experience, aligning stakeholders with evidence, and making hard
                operational choices to hit a strategic objective.
              </p>
            </section>
          </div>
        </article>

        <aside className="mt-10">
          <h3 className="text-xl font-semibold text-ink">
            Additional Product Delivery Projects
          </h3>
          <div className="mt-5 space-y-6">
            {supportingProjects.map((project) => (
              <article key={project.title} className="card p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-ink">
                      {project.title}
                    </h4>
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
                    <h5 className="font-semibold text-ink">Context</h5>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {project.context}
                    </p>
                    <h5 className="mt-5 font-semibold text-ink">Goal</h5>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {project.goal}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-ink">Contributions</h5>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                      {project.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-ink">Outcomes</h5>
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
        </aside>
      </div>
    </section>
  );
}
