export default function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-3">Turning uncertainty into focused product delivery.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>
            My experience spans digital media, music technology, and data
            operations, where I have helped teams move from uncertainty to
            successful delivery. I specialise in defining MVPs, aligning
            stakeholders around priorities, and ensuring engineering teams focus
            on the work that delivers the greatest customer and business value.
          </p>
          <p>
            My background combines product thinking, agile delivery, and data
            analysis, enabling me to make informed prioritisation decisions,
            communicate trade-offs clearly, and keep product development
            grounded in evidence.
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
