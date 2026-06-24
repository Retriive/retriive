"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { CAMPUSQ_URL } from "@/lib/external-links"

const navLinks = [
  { label: "Product", href: "#campusq" },
  { label: "Why us",  href: "#what-we-do" },
  { label: "Company", href: "#company" },
]

export function SiteHeader() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? "border-b border-[#e5e5e5] bg-white/95 backdrop-blur-sm" : "bg-white"}`}>
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="size-5 rounded-[5px] bg-[#16a34a]" />
          <span className="text-sm font-semibold text-[#0a0a0a]">Retriive</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-[#737373] transition-colors hover:text-[#0a0a0a]">{l.label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href="mailto:team@retriive.com" className="text-sm text-[#737373] hover:text-[#0a0a0a]">Contact</a>
          <a href={CAMPUSQ_URL} className="text-sm text-[#737373] hover:text-[#0a0a0a]">Login</a>
          <a href="#contact" className="rounded-lg bg-[#16a34a] px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90">
            Request demo
          </a>
        </div>

        <button type="button" onClick={() => setOpen(v => !v)} className="flex size-8 items-center justify-center text-[#0a0a0a] md:hidden">
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#e5e5e5] bg-white px-8 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-[#737373] hover:bg-[#f5f5f5] hover:text-[#0a0a0a]">{l.label}</a>
            ))}
            <a href={CAMPUSQ_URL} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-[#737373] hover:bg-[#f5f5f5] hover:text-[#0a0a0a]">Login</a>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex h-10 items-center justify-center rounded-lg bg-[#16a34a] text-sm font-semibold text-white">Request demo</a>
          </nav>
        </div>
      )}
    </header>
  )
}
