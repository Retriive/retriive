export function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white py-7">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8">
        <div className="flex items-center gap-2.5">
          <span className="size-[18px] rounded-[4px] bg-[#16a34a]" />
          <span className="text-sm font-semibold text-[#0a0a0a]">Retriive</span>
          <span className="text-[#d4d4d4]">·</span>
          <span className="text-sm text-[#a3a3a3]">Ottawa, Canada</span>
        </div>

        <nav className="hidden items-center gap-7 sm:flex">
          {[
            { label: "Product",            href: "#campusq" },
            { label: "Why us",             href: "#what-we-do" },
            { label: "Company",            href: "#company" },
            { label: "team@retriive.com", href: "mailto:team@retriive.com" },
          ].map(l => (
            <a key={l.href} href={l.href} className="text-sm text-[#a3a3a3] hover:text-[#0a0a0a]">{l.label}</a>
          ))}
        </nav>

        <p className="text-sm text-[#a3a3a3]">© {new Date().getFullYear()} Retriive Inc.</p>
      </div>
    </footer>
  )
}
