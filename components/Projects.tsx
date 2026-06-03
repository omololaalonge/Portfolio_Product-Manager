const rollingStoneMetrics = [
  { label: "Role", detail: "Project/Product Manager" },
  { label: "Timeline", detail: "Dec 2025 - Feb 2026" },
  { label: "Tools Used", detail: "Jira, Confluence, Figma, Slack, GitHub" },
  {
    label: "Core Focus",
    detail:
      "MVP Scoping, Backlog Triage, Stakeholder Management, Vendor Transition",
  },
];

const productDecisions = [
  {
    decision: "Reduce launch scope to a strict MVP.",
    reason:
      "Customer value was concentrated in content discovery and article consumption.",
    tradeOff: "Deferred non-essential features to protect launch readiness.",
    outcome:
      "Maintained the launch timeline while preserving the core user experience.",
  },
  {
    decision: "Transition away from an external development dependency.",
    reason: "Delivery confidence had become too low.",
    tradeOff:
      "Replanned the delivery path quickly while protecting codebase access and handover continuity.",
    outcome: "Reduced delivery risk and improved execution visibility.",
  },
];

const deliveryFramework = [
  {
    phase: "Week 1",
    title: "Backlog Triage & Launch Readiness",
    body: "Created a single source of truth for launch readiness, improving prioritisation and reducing delivery uncertainty.",
  },
  {
    phase: "Week 2",
    title: "Stakeholder Realignment",
    body: "Aligned stakeholders around a realistic MVP scope, preventing further scope expansion and protecting the launch date.",
  },
  {
    phase: "Week 2",
    title: "Vendor Transition",
    body: "Mitigated delivery risk by coordinating access changes, documenting the technical state, and pivoting to an internal delivery pipeline.",
  },
  {
    phase: "Weeks 3-4",
    title: "Launch Cadence",
    body: "Established a focused launch cadence that accelerated defect resolution across engineering, QA, and design teams.",
  },
];

const managementPillars = [
  {
    title: "Prioritisation Discipline",
    body: "Mapped defects and feature requests to user impact, ensuring engineering effort focused on article readability, content discovery, and launch-critical stability.",
  },
  {
    title: "Stakeholder Alignment",
    body: "Served as the single point of truth between leadership and technical teams, making risks, trade-offs, and readiness decisions clear.",
  },
  {
    title: "Risk Management",
    body: "Made difficult delivery decisions under time pressure while protecting product quality, team focus, and stakeholder confidence.",
  },
];

const rollingStoneOutcomes = [
  "Achieved a 100% on-time launch despite an emergency developer transition two weeks before deployment.",
  "Resolved the majority of launch-critical defects before deployment, resulting in a stable launch experience across key devices and screen sizes.",
  "Created a clear post-launch roadmap that enabled the engineering team to transition immediately into optimisation and enhancement work.",
  "Demonstrated the ability to make difficult prioritisation decisions under time pressure while maintaining stakeholder confidence.",
];

const accountingCaseStudy = {
  title: "Accounting Aggregation Software",
  subtitle: "Featured Case Study",
  challenge:
    "Revenue reconciliation depended on manual processes across multiple platforms and data sources, making it difficult for finance stakeholders to maintain a trusted view of performance.",
  approach:
    "Partnered with finance and technical stakeholders to define requirements for a consolidated reporting platform, including revenue ingestion, source mapping, aggregation logic, reporting views, and edge-case handling.",
  outcome:
    "Improved visibility into revenue performance across multiple distribution sources and reduced reliance on manual reconciliation activities.",
  details: [
    "Clarified finance pain points and converted them into delivery-ready platform requirements.",
    "Defined workflows for data ingestion, source mapping, aggregation, and reporting outputs.",
    "Aligned finance and engineering stakeholders around priorities for each iteration.",
  ],
};

const additionalProjects = [
  {
    title: "FLAVA Artist Promotion Platform",
    challenge:
      "Artists needed a simpler way to promote music across multiple streaming platforms.",
    approach:
      "Worked with stakeholders and developers to define an MVP focused on onboarding, fan-link generation, and performance visibility.",
    outcome:
      "Supported delivery of a unified music-sharing experience that simplified promotion and improved consistency across artist marketing channels.",
  },
  {
    title: "ADM Challenge Website",
    challenge:
      "Competition management activities were fragmented across multiple processes.",
    approach:
      "Helped define an MVP focused on artist submissions, moderation, and audience engagement.",
    outcome:
      "Supported delivery of a centralised platform that simplified competition administration and participant management.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Featured Case Study</p>
        <h2 className="section-title mt-3">
          Saving a High-Risk Product Launch Through MVP Prioritisation and Stakeholder Alignment
        </h2>

        <article className="card mt-10 overflow-hidden">
          <div className="border-b border-line bg-page p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-calm">
                  Rolling Stone Africa Website Revamp
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                  Delivering a stable MVP under pressure
                </h3>
                <p className="mt-5 leading-8 text-muted">
                  When launching a digital footprint for an iconic global media
                  brand&apos;s regional edition, failure is not an option.
                  Mid-way through launch preparation, the RSA platform faced
                  critical delivery bottlenecks due to development delays and
                  unmapped user interface defects.
                </p>
                <p className="mt-4 leading-8 text-muted">
                  Stepping into a hybrid project, product, and delivery role, I
                  took control of the unstable delivery environment, triaged a
                  chaotic backlog, managed a high-stakes engineering transition,
                  and helped drive the product to a successful MVP launch.
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-line bg-elevated">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <caption className="sr-only">
                      Rolling Stone Africa case study key metrics
                    </caption>
                    <tbody className="divide-y divide-line">
                      {rollingStoneMetrics.map((metric) => (
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
            <section aria-labelledby="business-problem-heading">
              <h3 id="business-problem-heading" className="text-xl font-semibold text-ink">
                Business Problem
              </h3>
              <p className="mt-3 max-w-4xl leading-8 text-muted">
                Two weeks before launch, the project faced critical delivery
                risk caused by unresolved defects, scope expansion, and
                dependency on an underperforming external development partner.
              </p>
            </section>

            <section aria-labelledby="decisions-heading">
              <h3 id="decisions-heading" className="text-xl font-semibold text-ink">
                Key Product Decisions
              </h3>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {productDecisions.map((item) => (
                  <div key={item.decision} className="rounded-lg border border-line bg-page p-5">
                    <h4 className="font-semibold text-ink">{item.decision}</h4>
                    <dl className="mt-4 space-y-3 text-sm leading-7 text-muted">
                      <div>
                        <dt className="font-semibold text-ink">Reason</dt>
                        <dd>{item.reason}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">Trade-off</dt>
                        <dd>{item.tradeOff}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">Outcome</dt>
                        <dd>{item.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="framework-heading">
              <h3 id="framework-heading" className="text-xl font-semibold text-ink">
                Delivery Framework
              </h3>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {deliveryFramework.map((item) => (
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

            <section aria-labelledby="management-pillars-heading">
              <h3 id="management-pillars-heading" className="text-xl font-semibold text-ink">
                Key Project/Product Management Pillars
              </h3>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {managementPillars.map((pillar) => (
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
                {rollingStoneOutcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg bg-page p-5 text-sm italic leading-7 text-muted">
                Key learning: successful product delivery is not about launching
                with every feature intact. It is about prioritising user
                experience, aligning stakeholders with evidence, and making hard
                operational choices to hit a strategic objective.
              </p>
            </section>
          </div>
        </article>

        <article className="card mt-10 p-6 sm:p-8">
          <p className="section-kicker">{accountingCaseStudy.subtitle}</p>
          <h3 className="mt-3 text-2xl font-semibold text-ink">
            {accountingCaseStudy.title}
          </h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div>
              <h4 className="font-semibold text-ink">Challenge</h4>
              <p className="mt-2 text-sm leading-7 text-muted">
                {accountingCaseStudy.challenge}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-ink">Approach</h4>
              <p className="mt-2 text-sm leading-7 text-muted">
                {accountingCaseStudy.approach}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-ink">Outcome</h4>
              <p className="mt-2 text-sm leading-7 text-muted">
                {accountingCaseStudy.outcome}
              </p>
            </div>
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
            {accountingCaseStudy.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <aside className="mt-10">
          <h3 className="text-xl font-semibold text-ink">
            Additional Product Delivery Experience
          </h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {additionalProjects.map((project) => (
              <article key={project.title} className="card p-6">
                <h4 className="text-lg font-semibold text-ink">{project.title}</h4>
                <dl className="mt-5 space-y-4 text-sm leading-7 text-muted">
                  <div>
                    <dt className="font-semibold text-ink">Challenge</dt>
                    <dd>{project.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Approach</dt>
                    <dd>{project.approach}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Outcome</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
