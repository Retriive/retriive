import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CAMPUSQ_URL } from "@/lib/external-links";
import { Logo } from "./logo";

type FooterLink = { label: string; href?: string; to?: "/about" | "/contact" };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "CampusQ", href: CAMPUSQ_URL },
      { label: "Roadmap", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "team@retriive.com", href: "mailto:team@retriive.com" },
      { label: "X / Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  const cls =
    "inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground";
  if (link.to) {
    return (
      <Link to={link.to} className={cls}>
        {link.label}
      </Link>
    );
  }
  const external = link.href?.startsWith("http");
  return (
    <a href={link.href ?? "#"} className={cls}>
      {link.label}
      {external && <ArrowUpRight className="h-3 w-3" />}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Retrieval-grounded AI for institutions. Every answer traced to
              its exact source — paragraph, page, and policy.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] tracking-tight text-muted-foreground">
                Live at Carleton University
              </span>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-8 md:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <FooterAnchor link={l} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Retriive Inc.
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground/70">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Security</a>
          </div>
        </div>
      </div>

      {/* Oversized editorial wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none px-5 mask-fade-b"
      >
        <div className="mx-auto max-w-7xl">
          <span className="font-display block leading-[0.8] text-[24vw] text-foreground/[0.045] dark:text-foreground/[0.06]">
            Retriive
          </span>
        </div>
      </div>
    </footer>
  );
}
