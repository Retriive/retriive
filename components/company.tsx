const stats = [
  { value: "550+", label: "Questions answered" },
  { value: "91%",  label: "Helpfulness rating" },
  { value: "24/7", label: "Available to students" },
]

export function Company() {
  return (
    <section id="company" className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#16a34a]">The company</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0a0a0a]">
              We started in education because it's where AI can matter most
            </h2>
            <p className="mt-5 leading-relaxed text-[#737373]">
              Retriive is an Ottawa-based AI company. We saw how much time students and staff
              lose navigating fragmented information — answers buried in PDFs, advisors
              overwhelmed by the same questions every semester.
            </p>
            <p className="mt-4 leading-relaxed text-[#737373]">
              We built CampusQ to fix that. We're a small, focused team and work closely
              with every university we partner with.
            </p>
            <a href="mailto:team@retriive.com" className="mt-5 inline-block text-sm font-medium text-[#16a34a] hover:underline">
              team@retriive.com
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              {stats.map(s => (
                <div key={s.label} className="rounded-xl border border-[#e5e5e5] bg-[#f0fdf4] px-5 py-6">
                  <div className="text-2xl font-semibold tracking-tight text-[#052e16]">{s.value}</div>
                  <div className="mt-1 text-xs text-[#a3a3a3]">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-6">
              <p className="text-sm leading-relaxed text-[#525252]">
                "Universities have spent decades building institutional knowledge that lives in
                documents nobody reads. We make that knowledge useful again."
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#16a34a]/15 text-xs font-bold text-[#16a34a]">R</span>
                <span className="text-xs font-medium text-[#0a0a0a]">Retriive Team</span>
                <span className="text-xs text-[#a3a3a3]">· Ottawa, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
