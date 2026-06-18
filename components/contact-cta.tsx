"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form  = e.currentTarget
    const name  = (form.elements.namedItem("name")  as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const org   = (form.elements.namedItem("org")   as HTMLInputElement).value
    window.location.href = `mailto:team@retriive.com?subject=Demo request — ${encodeURIComponent(org)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AOrganization: ${encodeURIComponent(org)}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#f0fdf4] py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#16a34a]">Get in touch</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0a0a0a]">
              See CampusQ at your university
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-[#737373]">
              Walk through a live demo configured to your institution's documents.
              30 minutes. No commitment.
            </p>
            <div className="mt-7 space-y-2.5">
              {["Tailored to your institution", "No commitment required", "Reply within one business day"].map(t => (
                <div key={t} className="flex items-center gap-2.5 text-sm text-[#525252]">
                  <Check className="size-3.5 shrink-0 text-[#16a34a]" strokeWidth={2.5} />{t}
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex flex-col gap-3 rounded-xl border border-[#d1fae5] bg-white p-8">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#16a34a]/15">
                  <Check className="size-4 text-[#16a34a]" strokeWidth={2.5} />
                </span>
                <p className="font-semibold text-[#0a0a0a]">We'll be in touch soon</p>
                <p className="text-sm text-[#737373]">Expect a reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input name="name" type="text" required placeholder="Full name"
                    className="h-10 rounded-lg border border-[#d1fae5] bg-white px-3.5 text-sm text-[#0a0a0a] outline-none placeholder:text-[#a3a3a3] focus:border-[#16a34a]/50" />
                  <input name="email" type="email" required placeholder="Work email"
                    className="h-10 rounded-lg border border-[#d1fae5] bg-white px-3.5 text-sm text-[#0a0a0a] outline-none placeholder:text-[#a3a3a3] focus:border-[#16a34a]/50" />
                </div>
                <input name="org" type="text" required placeholder="University or organization"
                  className="h-10 w-full rounded-lg border border-[#d1fae5] bg-white px-3.5 text-sm text-[#0a0a0a] outline-none placeholder:text-[#a3a3a3] focus:border-[#16a34a]/50" />
                <button type="submit"
                  className="group flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#16a34a] text-sm font-semibold text-white hover:opacity-90">
                  Request a demo
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
