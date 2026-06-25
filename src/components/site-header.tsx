import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CAMPUSQ_URL } from "@/lib/external-links";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

const NAV = [
  { label: "Product", to: "/products" as const },
  { label: "Company", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-hairline bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12 h-16">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Retriive home"
          className="shrink-0 rounded-md transition-transform duration-200 ease-out-strong active:scale-[0.97]"
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-muted-foreground">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{
                className:
                  "text-foreground after:scale-x-100",
              }}
              className="relative py-1 transition-colors duration-200 ease-out hover:text-foreground after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out-strong hover:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={CAMPUSQ_URL}
            className="hidden lg:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground"
          >
            CampusQ
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-[transform,opacity] duration-200 ease-out-strong hover:opacity-90 active:scale-[0.97]"
          >
            Book a demo
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center rounded-lg border border-border p-2 text-foreground transition-[color,border-color,transform] duration-200 ease-out hover:border-brand hover:text-brand active:scale-[0.94]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden origin-top border-t border-hairline bg-background/95 backdrop-blur-xl px-5 py-4 flex flex-col gap-1 animate-[menu-in_200ms_var(--ease-out-strong)]">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground bg-accent" }}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground hover:bg-accent"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={CAMPUSQ_URL}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground hover:bg-accent"
          >
            CampusQ <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform duration-200 ease-out-strong active:scale-[0.97]"
          >
            Book a demo
          </Link>
        </div>
      )}
    </header>
  );
}
