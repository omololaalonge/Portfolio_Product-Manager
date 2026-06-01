export default function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-3">Product ownership discipline with delivery urgency.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>
            Junior Product Owner and Product Operations candidate with a delivery
            background across digital media, music technology, data reporting,
            and remote product teams.
          </p>
          <p>
            I translate stakeholder requirements into product scope, user
            stories, acceptance criteria, delivery roadmaps, and clean operating
            workflows so engineering teams can focus on the highest-value work.
          </p>
          <p>
            My edge is the mix of product thinking, agile delivery, and data
            literacy: I can prioritize a backlog, explain trade-offs to
            stakeholders, and use reporting workflows to keep decisions grounded
            in evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
