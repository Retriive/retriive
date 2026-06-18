const features = [
  {
    title: "Trained on your institution",
    body: "Reads your actual documents — program guides, calendars, policy handbooks. Answers come from those, not the internet.",
  },
  {
    title: "Every answer is cited",
    body: "Students see exactly which document each answer came from. Verifiable responses your institution can stand behind.",
  },
  {
    title: "Frees your advisors",
    body: "Repetitive questions about credits, drop deadlines, and eligibility are handled automatically — staff focus on students who need real help.",
  },
  {
    title: "Live in weeks, not months",
    body: "You share your documents, we configure the AI, you go live. Most universities are up and running within a few weeks of signing.",
  },
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="mb-12 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#16a34a]">Why Retriive</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] lg:text-4xl">AI that actually knows your university</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#737373] lg:text-right">
            Generic AI gives generic answers. We build products configured to your institution's specific content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className="bg-white p-7">
              <span className="mb-4 block font-mono text-[11px] text-[#d4d4d4]">0{i + 1}</span>
              <h3 className="text-sm font-semibold text-[#0a0a0a]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#737373]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
