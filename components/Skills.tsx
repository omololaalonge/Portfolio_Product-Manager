const skillGroups = [
  {
    title: "Product & Agile",
    skills: [
      "Requirements gathering",
      "Product requirement definition",
      "Feature definition",
      "User story support",
      "Feature prioritization",
      "Product documentation",
      "Agile & Scrum methodology",
      "Sprint planning collaboration",
      "Agile product delivery",
    ],
  },
  {
    title: "Stakeholder & Delivery",
    skills: [
      "Stakeholder communication",
      "Stakeholder collaboration",
      "Cross-functional team coordination",
      "Remote collaboration",
      "Business process improvement",
    ],
  },
  {
    title: "Analytics & Tools",
    skills: [
      "Agile",
      "Jira",
      "Zapier dashboard reporting",
      "Data analysis",
      "Power BI",
      "Excel",
      "SQL",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-page">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title mt-3">Product delivery skills recruiters can scan quickly.</h2>
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
