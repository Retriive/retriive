import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Retriive Inc. — Intelligent AI solutions for modern enterprises" },
      {
        name: "description",
        content:
          "Retriive Inc. builds AI platforms that streamline data access, synthesis, and actionable insights across any sector.",
      },
      { property: "og:title", content: "Retriive Inc." },
      {
        property: "og:description",
        content: "Intelligent AI solutions for modern enterprises.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: Home,
});

function Home() {
  return (
    <>
    <section className="relative px-4 sm:px-8 lg:px-16 py-20 sm:py-28 lg:py-40 text-center overflow-hidden">
      {/* Faint dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 [background-image:radial-gradient(rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]"
      />

      {/* Animated mesh-gradient backdrop */}
      <MeshGradient />

      {/* Floating glass UI cards */}
      <FloatingCards />

      <div className="relative mx-auto max-w-5xl">
        <span className="inline-block rounded-full border border-brand/30 bg-brand-soft px-4 py-1 text-xs font-medium text-brand">
          For university operations & student-services teams
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.035em] leading-[1.05] text-zinc-900">
          Answer any policy question{" "}
          <span className="text-purple-700 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
            in seconds, not hours.
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto max-w-2xl">
          Retriive indexes your handbooks, SOPs, and internal records into one
          AI search bar — every answer comes back with the exact source,
          paragraph, and page it came from.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const email = String(data.get("email") || "");
            window.location.href = `/contact?email=${encodeURIComponent(email)}`;
          }}
          className="mt-10 mx-auto flex w-full max-w-md flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@institution.edu"
            className="flex-1 rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-purple-700 focus:ring-2 focus:ring-purple-700/20"
          />
          <button
            type="submit"
            className="rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-purple-700/40 animate-pulse-glow transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-purple-800 hover:shadow-purple-700/60"
          >
            Book a 20-min demo
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">
          Free pilot · No credit card · We reply within 1 business day
        </p>



      </div>
    </section>

      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <UseCasesSection />
      <CtaSection />
    </>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Retrieval-grounded answers",
      body: "Every response is anchored to your institution's documents, with inline citations and traceable sources — no hallucinations, no guesswork.",
    },
    {
      title: "Private by design",
      body: "Your data stays in your environment. Role-based access, audit logs, and encryption at rest keep sensitive records protected end-to-end.",
    },
    {
      title: "Built for scale",
      body: "From a single department to a multi-campus deployment, Retriive handles millions of documents with sub-second retrieval latency.",
    },
    {
      title: "Connects to what you use",
      body: "Native integrations with SharePoint, Google Drive, Notion, Confluence, SIS, and SQL — index once, query anywhere.",
    },
    {
      title: "Multilingual & domain-tuned",
      body: "Fine-tuned for the vocabulary of education, healthcare, and government — including Arabic and English by default.",
    },
    {
      title: "Observable & governed",
      body: "Dashboards for query volume, satisfaction, and source coverage. Admin controls for redaction and content policies.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-8 lg:px-16 py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-brand/30 bg-brand-soft px-4 py-1 text-xs font-medium text-brand">
            Platform
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-zinc-900">
            The AI layer your institution can actually trust.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Retriive combines retrieval-augmented generation with enterprise-grade
            governance, so teams get instant answers without compromising on
            accuracy or privacy.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-700/40 hover:shadow-lg hover:shadow-purple-700/10"
            >
              <div className="h-9 w-9 rounded-lg bg-brand-soft flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-purple-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      title: "Connect your sources",
      body: "Plug in document stores, databases, and SaaS tools. Retriive indexes them securely without moving your data.",
    },
    {
      n: "02",
      title: "Ground the model",
      body: "Our retrieval pipeline pulls the most relevant passages and feeds them to the model with citation metadata.",
    },
    {
      n: "03",
      title: "Answer with confidence",
      body: "Users get sourced answers in chat, search, or embedded widgets. Admins see every query and citation.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-8 lg:px-16 py-20 sm:py-28 bg-zinc-50 border-y border-border">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full border border-brand/30 bg-brand-soft px-4 py-1 text-xs font-medium text-brand">
            How it works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-zinc-900">
            From scattered knowledge to instant answers.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="rounded-2xl border border-border bg-white p-6 h-full">
                <div className="text-xs font-mono text-purple-700">{s.n}</div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 h-px w-4 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { v: "<200ms", l: "Median retrieval latency" },
    { v: "10M+", l: "Documents indexed per tenant" },
    { v: "98%", l: "Citation accuracy" },
    { v: "24/7", l: "Enterprise support" },
  ];
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-purple-700">
              {s.v}
            </div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function UseCasesSection() {
  const cases = [
    {
      tag: "Education",
      title: "Universities & K-12",
      body: "Help students, faculty, and staff get instant answers from policy docs, course catalogs, and academic records.",
    },
    {
      tag: "Government",
      title: "Public sector",
      body: "Surface regulations, internal memos, and procedural knowledge for frontline employees and citizens alike.",
    },
    {
      tag: "Enterprise",
      title: "Knowledge-heavy teams",
      body: "Operations, legal, and support teams cut research time by orders of magnitude with grounded retrieval.",
    },
  ];
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 py-20 sm:py-28 bg-zinc-50 border-y border-border">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-brand/30 bg-brand-soft px-4 py-1 text-xs font-medium text-brand">
            Use cases
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-zinc-900">
            Built for institutions that take knowledge seriously.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-700/40 hover:shadow-lg hover:shadow-purple-700/10"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-700">
                {c.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 py-20 sm:py-28 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-4xl rounded-3xl border border-purple-700/20 bg-gradient-to-br from-brand-soft to-white p-10 sm:p-16 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-purple-500 opacity-30 blur-3xl"
        />
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-zinc-900">
          Turn hours of policy lookups into seconds.
        </h2>
        <p className="relative mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Book a 20-minute demo and see Retriive answer real questions from
          your own documents — live, with citations.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-md bg-brand px-7 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-purple-700/40 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-purple-700/60"
          >
            Book a 20-min demo
          </Link>
          <Link
            to="/products"
            className="rounded-md border border-border bg-white px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-700 hover:text-purple-700"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}

function FloatingCards() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      {/* Top-left chat bubble */}
      <div className="absolute left-[6%] top-[18%] w-56 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-xl shadow-xl shadow-purple-700/10 p-4 text-left animate-[float_7s_ease-in-out_infinite]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-700" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-700">
            Retrieval
          </span>
        </div>
        <p className="mt-2 text-xs text-zinc-700 leading-relaxed">
          “Summarize the 2024 enrollment report and flag anomalies.”
        </p>
      </div>

      {/* Top-right data node */}
      <div className="absolute right-[7%] top-[14%] w-48 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-xl shadow-xl shadow-purple-700/10 p-4 text-left animate-[float_9s_ease-in-out_infinite] [animation-delay:-2s]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Vector match
          </span>
          <span className="text-[10px] font-mono text-purple-700">0.97</span>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-purple-700/80" />
          <div className="h-1.5 w-3/4 rounded-full bg-purple-700/40" />
          <div className="h-1.5 w-1/2 rounded-full bg-purple-700/25" />
        </div>
      </div>

      {/* Bottom-right response bubble */}
      <div className="absolute right-[10%] bottom-[10%] w-52 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-xl shadow-xl shadow-purple-700/10 p-4 text-left animate-[float_8s_ease-in-out_infinite] [animation-delay:-4s]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Synthesized
          </span>
        </div>
        <p className="mt-2 text-xs text-zinc-700 leading-relaxed">
          3 sources cited · 12ms inference
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-12px) }
        }
      `}</style>
    </div>
  );
}

function MeshGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Blob 1 — brand purple, drifts in a slow orbit */}
      <div className="absolute left-1/2 top-1/2 h-[55rem] w-[55rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 opacity-25 blur-3xl animate-[mesh-drift-a_22s_ease-in-out_infinite]" />
      {/* Blob 2 — deep indigo, counter-rotates */}
      <div className="absolute left-1/2 top-1/2 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-[mesh-drift-b_28s_ease-in-out_infinite]" />
      {/* Blob 3 — soft fuchsia, slow vertical drift */}
      <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500 opacity-15 blur-3xl animate-[mesh-drift-c_34s_ease-in-out_infinite]" />

      <style>{`
        @keyframes mesh-drift-a {
          0%, 100% { transform: translate(-50%, -50%) translate(-12%, -8%) rotate(0deg) scale(1); }
          50%      { transform: translate(-50%, -50%) translate(10%, 6%) rotate(180deg) scale(1.1); }
        }
        @keyframes mesh-drift-b {
          0%, 100% { transform: translate(-50%, -50%) translate(14%, -6%) rotate(0deg) scale(1.05); }
          50%      { transform: translate(-50%, -50%) translate(-10%, 10%) rotate(-180deg) scale(0.95); }
        }
        @keyframes mesh-drift-c {
          0%, 100% { transform: translate(-50%, -50%) translate(0%, 12%) rotate(0deg) scale(1); }
          50%      { transform: translate(-50%, -50%) translate(6%, -14%) rotate(120deg) scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[mesh-drift-a_22s_ease-in-out_infinite\\],
          .animate-\\[mesh-drift-b_28s_ease-in-out_infinite\\],
          .animate-\\[mesh-drift-c_34s_ease-in-out_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  );
}
