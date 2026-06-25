import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote, CalendarCheck, Clock, Languages } from "lucide-react";
import { CAMPUSQ_URL } from "@/lib/external-links";
import { seo } from "../lib/seo";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    ...seo({
      title: "Products — Retriive",
      description:
        "Explore Retriive's suite of grounded AI platforms, starting with CampusQ — live at Carleton University.",
      path: "/products",
    }),
  }),
  component: ProductsPage,
});

const TOP_QUESTIONS = [
  { q: "What happens if I fail a required course twice?", n: 17 },
  { q: "How do I book a study room?", n: 7 },
  { q: "Who is teaching SYSC 2004 in Fall 2026?", n: 7 },
  { q: "What are the exact prerequisites for SYSC 3310?", n: 7 },
];

const CATEGORIES = [
  { label: "Course Lookups", n: 236 },
  { label: "General / Other", n: 115 },
  { label: "Deadlines & Dates", n: 60 },
  { label: "Academic Regs & GPA", n: 45 },
  { label: "Prerequisites", n: 43 },
  { label: "Registration", n: 28 },
];

const HOURLY = [
  18, 17, 2, 93, 14, 52, 155, 1, 0, 0, 1, 11, 7, 25, 29, 20, 22, 23, 20, 4, 5,
  15, 13, 19,
];

const CAPABILITIES = [
  {
    icon: Quote,
    title: "Cites every answer",
    body: "No claim without a source. Each response links to the exact section it came from.",
  },
  {
    icon: CalendarCheck,
    title: "Knows the current calendar",
    body: "Grounded in the live academic calendar — it updates the moment policy does.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    body: "The busiest hour in our data is 6am. CampusQ answers when advising offices are closed.",
  },
  {
    icon: Languages,
    title: "Speaks student",
    body: "Tuned for course codes, prerequisites, and the questions students actually type.",
  },
];

function ProductsPage() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-muted">
            <span className="h-1 w-1 rounded-full bg-brand" />
            Our platforms
          </span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl md:text-6xl">
            A growing suite of grounded products.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Purpose-built tools that bring cited, AI-driven clarity to the data,
            people, and workflows of an institution.
          </p>
        </Reveal>

        {/* Featured: CampusQ */}
        <Reveal className="mt-14">
          <article className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Identity */}
              <div className="flex flex-col border-b border-hairline p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                    Live pilot
                  </span>
                </div>
                <h2 className="font-display mt-5 text-5xl text-foreground">CampusQ</h2>
                <p className="mt-2 font-mono text-xs text-brand-muted">
                  Carleton University · Systems &amp; Computer Engineering
                </p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  An AI advisor that answers student questions about courses,
                  prerequisites, deadlines, and campus services — grounded in the
                  department's own documents, with a citation on every answer.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={CAMPUSQ_URL}
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-[transform,opacity] duration-200 ease-out-strong hover:opacity-90 active:scale-[0.97]"
                  >
                    Open CampusQ
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-[transform,border-color] duration-200 ease-out-strong hover:border-brand active:scale-[0.97]"
                  >
                    Pilot at your school
                  </Link>
                </div>
              </div>

              {/* Dashboard */}
              <div className="p-6 sm:p-8 lg:col-span-3 lg:p-10">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Advisor dashboard · all time
                  </p>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Stat value="566" label="Questions asked" />
                  <Stat value="91%" label="Helpful · 20👍 2👎" />
                  <Stat value="SYSC" label="Top dept." />
                </div>

                <div className="mt-5 rounded-xl border border-hairline bg-background p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">
                      When students ask
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      24h pattern
                    </span>
                  </div>
                  <HourlyChart />
                  <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                    <span>12a</span>
                    <span>6a</span>
                    <span>12p</span>
                    <span>6p</span>
                    <span>12a</span>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-3 text-xs font-medium text-foreground">
                    Top categories
                  </p>
                  <ul className="space-y-2">
                    {CATEGORIES.map((c) => (
                      <li key={c.label} className="flex items-center gap-3">
                        <span className="w-36 shrink-0 truncate text-xs text-foreground">
                          {c.label}
                        </span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full bg-brand/80"
                            style={{ width: `${(c.n / CATEGORIES[0].n) * 100}%` }}
                          />
                        </div>
                        <span className="w-8 shrink-0 text-right font-mono text-xs text-muted-foreground">
                          {c.n}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Capabilities */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 4) * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 ease-out-strong hover:-translate-y-1 hover:border-brand/40">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-hairline bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Most-asked */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Most-asked questions
            </p>
            <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {TOP_QUESTIONS.map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-background p-3.5"
                >
                  <span className="mt-0.5 font-mono text-[10px] text-brand">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="flex-1 text-xs leading-relaxed text-foreground">
                    “{t.q}”
                  </span>
                  <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                    ×{t.n}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Coming soon */}
        <Reveal className="mt-6">
          <article className="rounded-3xl border border-dashed border-border bg-card/40 p-10 text-center">
            <span className="inline-block rounded-full border border-hairline bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Coming soon
            </span>
            <h3 className="font-display mt-4 text-2xl text-foreground sm:text-3xl">
              The next Retriive platform is in development.
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              We're working with design partners on the next vertical. Want a say
              in what we build?
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-[transform,border-color] duration-200 ease-out-strong hover:border-brand active:scale-[0.97]"
            >
              Get in touch
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-hairline bg-background p-3.5">
      <div className="font-display text-2xl text-brand sm:text-3xl">{value}</div>
      <div className="mt-1 text-[10px] leading-snug text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function HourlyChart() {
  const max = Math.max(...HOURLY);
  return (
    <div className="flex h-20 items-end gap-[3px]">
      {HOURLY.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-brand/75 transition-colors duration-200 hover:bg-brand"
          style={{ height: `${Math.max((v / max) * 100, 3)}%` }}
          title={`${i}:00 — ${v} questions`}
        />
      ))}
    </div>
  );
}
