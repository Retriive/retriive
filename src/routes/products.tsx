import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Retriive Inc." },
      {
        name: "description",
        content:
          "Explore Retriive's growing suite of intelligent AI platforms, starting with CampusQ — live at Carleton University.",
      },
      { property: "og:title", content: "Products — Retriive Inc." },
      {
        property: "og:description",
        content:
          "CampusQ and more — AI products by Retriive Inc. for universities and enterprises.",
      },
      { property: "og:url", content: "/products" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),

  component: ProductsPage,
});

const TOP_QUESTIONS = [
  { q: "What happens if I fail a required course twice?", n: 17 },
  { q: "How do I book a study room?", n: 7 },
  { q: "Who is teaching SYSC 2004 in Fall 2026?", n: 7 },
  {
    q: "What are the exact prerequisites for SYSC 3310, and is it offered this Fall?",
    n: 7,
  },
];

const CATEGORIES = [
  { label: "Course Lookups", n: 236 },
  { label: "General / Other", n: 115 },
  { label: "Deadlines & Dates", n: 60 },
  { label: "Academic Regulations & GPA", n: 45 },
  { label: "Prerequisites & Requirements", n: 43 },
  { label: "Registration Procedures", n: 28 },
];

function ProductsPage() {
  const maxCat = Math.max(...CATEGORIES.map((c) => c.n));

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14 max-w-6xl mx-auto">
        <div>
          <p className="text-sm font-medium text-brand">Our Platforms</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em]">
            A growing suite of intelligent products
          </h1>
        </div>
        <p className="max-w-md text-muted-foreground">
          Purpose-built tools designed to bring AI-driven clarity to data,
          people, and workflows.
        </p>
      </div>

      {/* Featured: CampusQ */}
      <article className="max-w-6xl mx-auto rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left: identity + CTA */}
          <div className="lg:col-span-2 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-border bg-gradient-to-br from-brand-soft to-white flex flex-col">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Live pilot
              </span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-900">
              CampusQ
            </h2>
            <p className="mt-2 text-sm font-medium text-purple-700">
              Carleton University · Systems & Computer Engineering
            </p>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
              An AI advisor that answers student questions about courses,
              prerequisites, deadlines, and campus services — grounded in the
              department's own documents, with citations on every answer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-md shadow-purple-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-800"
              >
                Open CampusQ →
              </a>
              <Link
                to="/contact"
                className="rounded-md border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-700 hover:text-purple-700"
              >
                Pilot at your school
              </Link>
            </div>
          </div>

          {/* Right: live dashboard preview */}
          <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Advisor Dashboard · All time
              </p>
              <span className="text-[10px] font-mono text-zinc-400">
                live
              </span>
            </div>

            {/* Top stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <Stat value="566" label="Questions asked" />
              <Stat value="91%" label="Helpfulness · 20👍 2👎" />
              <Stat value="SYSC" label="Top dept. by volume" />
            </div>

            {/* Hourly question pattern */}
            <div className="mt-6 rounded-xl border border-border bg-zinc-50/60 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-zinc-700">
                  When students ask questions
                </span>
                <span className="text-[10px] text-muted-foreground">
                  24h pattern
                </span>
              </div>
              <HourlyChart />
              <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>12a</span>
                <span>6a</span>
                <span>12p</span>
                <span>6p</span>
                <span>12a</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <p className="text-xs font-medium text-zinc-700 mb-3">
                Top categories
              </p>
              <ul className="space-y-2">
                {CATEGORIES.map((c) => (
                  <li key={c.label} className="flex items-center gap-3">
                    <span className="w-44 shrink-0 text-xs text-zinc-700 truncate">
                      {c.label}
                    </span>
                    <div className="flex-1 h-2 rounded-full bg-zinc-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-purple-700/80"
                        style={{ width: `${(c.n / maxCat) * 100}%` }}
                      />
                    </div>
                    <span className="w-8 shrink-0 text-right text-xs font-mono text-zinc-500">
                      {c.n}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top questions */}
            <div className="mt-6">
              <p className="text-xs font-medium text-zinc-700 mb-3">
                Most-asked questions
              </p>
              <ol className="space-y-2">
                {TOP_QUESTIONS.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-border bg-white p-3"
                  >
                    <span className="text-[10px] font-mono text-purple-700 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-xs text-zinc-700 leading-relaxed">
                      "{t.q}"
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                      ×{t.n}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>

      {/* Coming soon */}
      <div className="max-w-6xl mx-auto mt-8">
        <article className="rounded-3xl border border-dashed border-border bg-muted/20 p-8 sm:p-10 text-center">
          <span className="inline-block rounded-full border border-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Coming soon
          </span>
          <h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-700">
            The next Retriive platform is in development
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            We're working with design partners on the next vertical. Want a
            say in what we build?
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-md border border-border bg-white px-5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-700 hover:text-purple-700"
          >
            Get in touch
          </Link>
        </article>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-white p-3 sm:p-4">
      <div className="text-xl sm:text-2xl font-bold tracking-tight text-purple-700">
        {value}
      </div>
      <div className="mt-1 text-[10px] sm:text-xs text-muted-foreground leading-snug">
        {label}
      </div>
    </div>
  );
}

// Real hourly distribution from the CampusQ dashboard.
const HOURLY = [
  18, 17, 2, 93, 14, 52, 155, 1, 0, 0, 1, 11, 7, 25, 29, 20, 22, 23, 20, 4, 5,
  15, 13, 19,
];

function HourlyChart() {
  const max = Math.max(...HOURLY);
  return (
    <div className="flex items-end gap-[3px] h-20">
      {HOURLY.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-purple-700/80 hover:bg-purple-700 transition-colors"
          style={{ height: `${Math.max((v / max) * 100, 3)}%` }}
          title={`${i}:00 — ${v} questions`}
        />
      ))}
    </div>
  );
}
