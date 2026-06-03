export default function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-[#111827] text-white dark:bg-[#050b16]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Interested in Project/Product Manager, Product Operations, or
              Agile delivery roles in Abuja, remote, or hybrid.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              PDF portfolio and CV are available on request or via the download
              button.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <a className="block text-slate-200 hover:text-white" href="mailto:lgeojeg@gmail.com">
              lgeojeg@gmail.com
            </a>
            <a
              className="block text-slate-200 hover:text-white"
              href="tel:+2347034776397"
            >
              +234 703 477 6397
            </a>
            <a
              className="block text-slate-200 hover:text-white"
              href="https://www.linkedin.com/in/omolola-alonge-0908441b5/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Omolola Alonge. Project/Product Manager Portfolio.
        </p>
      </div>
    </footer>
  );
}
