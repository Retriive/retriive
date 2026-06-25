import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CAMPUSQ_URL } from "@/lib/external-links";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Products", to: "/products" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-border/60 bg-white/70 dark:bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60 sticky top-0 z-40">
      <div className="flex items-center justify-between gap-4 px-4 sm:px-8 lg:px-16 py-4 sm:py-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-lg sm:text-xl font-semibold tracking-tight shrink-0"
        >
          Retriive<span className="text-brand"> Inc.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-purple-700 dark:text-purple-400" }}
              className="transition-colors duration-500 ease-in-out hover:text-purple-700 dark:hover:text-purple-400"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <a
            href={CAMPUSQ_URL}
            className="hidden sm:inline-flex rounded-md bg-brand px-4 sm:px-5 py-2 text-sm font-medium text-brand-foreground transition-colors duration-500 ease-in-out hover:bg-purple-800"
          >
            Login
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground transition-colors duration-300 hover:border-purple-700 hover:text-purple-700 dark:hover:border-purple-400 dark:hover:text-purple-400"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 px-4 py-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-purple-700 dark:text-purple-300 bg-brand-soft" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-brand-soft"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={CAMPUSQ_URL}
            className="mt-2 sm:hidden rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors duration-500 ease-in-out hover:bg-purple-800"
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
}
