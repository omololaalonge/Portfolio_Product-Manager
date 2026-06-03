const skillGroups = [
  {
    title: "Product Thinking",
    skills: [
      "User Story Mapping",
      "Backlog Refinement",
      "Prioritization Frameworks (MoSCoW/RICE)",
      "MVP Definition",
    ],
  },
  {
    title: "Data & Automation",
    skills: [
      "SQL",
      "Power BI",
      "Advanced Google Sheets",
      "No-Code Automation (Make.com)",
    ],
  },
  {
    title: "Agile Delivery",
    skills: [
      "Scrum Framework",
      "Jira/Confluence Administration",
      "Sprint Ceremonies Facilitation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-page">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title mt-3">A tighter product operations toolkit.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          Applied across product launches, stakeholder alignment initiatives,
          workflow optimisation projects, and data-driven decision-making
          environments.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="card p-6">
              <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
