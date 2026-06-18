import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-white pb-20 pt-14">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_500px]">
          <div>
            <h1 className="fade-up text-[58px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#0a0a0a] lg:text-[68px]">
              Every student deserves an expert on call.
            </h1>
            <p className="fade-up mt-5 max-w-[420px] text-[17px] leading-relaxed text-[#737373]" style={{ animationDelay: "0.07s" }}>
              Retriive builds AI for higher education. CampusQ gives every student
              instant, accurate answers — drawn from your university's own documents.
            </p>
            <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.13s" }}>
              <a href="#contact" className="group inline-flex h-10 items-center gap-2 rounded-lg bg-[#16a34a] px-5 text-sm font-semibold text-white hover:opacity-90">
                Request a demo <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#campusq" className="inline-flex h-10 items-center rounded-lg border border-[#e5e5e5] px-5 text-sm font-medium text-[#0a0a0a] hover:bg-[#fafafa]">
                See the product
              </a>
            </div>
          </div>

          <div className="fade-up hidden lg:block" style={{ animationDelay: "0.18s" }}>
            <div className="overflow-hidden rounded-xl border border-[#e5e5e5] shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-[#e5e5e5] bg-[#fafafa] px-4 py-2.5">
                <span className="size-2 rounded-full bg-[#e5e5e5]" />
                <span className="size-2 rounded-full bg-[#e5e5e5]" />
                <span className="size-2 rounded-full bg-[#e5e5e5]" />
                <span className="ml-2 flex-1 rounded bg-[#f0f0f0] px-2 py-0.5 text-[11px] text-[#a3a3a3]">campusq.retriive.com</span>
              </div>
              <img src="/campusq-chat.png" alt="CampusQ interface" className="w-full" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-12 border-t border-[#e5e5e5] pt-10">
          {[
            { v: "550+",  l: "Questions answered" },
            { v: "91%",   l: "Helpfulness rating" },
            { v: "< 2s",  l: "Average response time" },
          ].map(s => (
            <div key={s.l}>
              <div className="text-xl font-semibold text-[#0a0a0a]">{s.v}</div>
              <div className="mt-0.5 text-sm text-[#a3a3a3]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
