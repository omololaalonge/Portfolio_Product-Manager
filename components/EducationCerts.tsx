const items = [
  "B.Sc. Computer Science - University of Abuja, Nigeria (2010).",
  "Scrum Master Certified (SMC) - SCRUMstudy, July 2025.",
  "SPOC certification - In progress.",
  "Data Analysis with R Programming - Coursera.",
];

export default function EducationCerts() {
  return (
    <section id="education" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="section-kicker">Education & Certs</p>
        <h2 className="section-title mt-3">Education and professional development.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="card p-5 text-base font-medium leading-7 text-ink">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
