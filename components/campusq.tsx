import { ArrowUpRight, Check } from "lucide-react"
import { CAMPUSQ_URL } from "@/lib/external-links"

const capabilities = [
  "Instant answers about programs, credits, and graduation requirements",
  "Sourced from your calendars, handbooks, and policy documents",
  "Reduces repetitive load on advisors and student services",
  "Available 24/7 — before registration, during finals, always",
]

export function CampusQ() {
  return (
    <section id="campusq" className="bg-[#f0fdf4] py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#16a34a]">Flagship product</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#0a0a0a]">CampusQ</h2>
            <p className="mt-1 text-lg text-[#737373]">Your university's AI academic advisor</p>

            <p className="mt-5 leading-relaxed text-[#525252]">
              Students have questions at 11pm before registration opens, during finals week,
              and every day in between. CampusQ is there when advisors aren't — giving accurate,
              cited answers drawn directly from your institution's own documents.
            </p>

            <ul className="mt-6 space-y-2.5">
              {capabilities.map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#16a34a]/15">
                    <Check className="size-2.5 text-[#16a34a]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#525252]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <a href="#contact" className="inline-flex h-10 items-center rounded-lg bg-[#16a34a] px-4 text-sm font-medium text-white hover:opacity-90">
                Request a demo
              </a>
              <a href={CAMPUSQ_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#d1fae5] bg-white px-4 text-sm font-medium text-[#052e16] hover:bg-[#f0fdf4]">
                campusq.retriive.com <ArrowUpRight className="size-3.5 text-[#16a34a]" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#d1fae5] bg-white shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-[#e5e5e5] px-4 py-2.5">
              <span className="size-2 rounded-full bg-[#f0f0f0]" />
              <span className="size-2 rounded-full bg-[#f0f0f0]" />
              <span className="size-2 rounded-full bg-[#f0f0f0]" />
              <span className="ml-2 flex-1 rounded bg-[#f5f5f5] px-2 py-0.5 text-[11px] text-[#a3a3a3]">campusq.retriive.com</span>
            </div>
            <img src="/campusq-chat.png" alt="CampusQ interface" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
