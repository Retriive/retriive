import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Database,
  Plug,
  Languages,
  BarChart3,
  Lock,
} from "lucide-react";
import { seo } from "../lib/seo";
import { CAMPUSQ_URL } from "@/lib/external-links";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo({
      title: "Retriive — Answers your institution can actually trust",
      description:
        "Retriive turns your handbooks, policies, and records into one search bar — every answer comes back with the exact source, paragraph, and page it came from.",
      path: "/",
    }),
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Stats />
      <FinalCta />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-muted">
      <span className="h-1 w-1 rounded-full bg-brand" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 glow animate-[float-soft_12s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto max-w-4xl pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
        <Reveal>
          <Eyebrow>Retrieval-grounded AI</Eyebrow>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="font-display mt-6 text-5xl font-normal sm:text-6xl lg:text-[5rem]">
            Answers your institution
            <br className="hidden sm:block" /> can{" "}
            <em className="text-brand">actually</em> trust.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Retriive turns your handbooks, policies, and records into one search
            bar — and every answer comes back with the exact source, paragraph,
            and page it came from.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-lg shadow-black/10 transition-[transform,opacity] duration-200 ease-out-strong hover:opacity-90 active:scale-[0.97]"
            >
              Book a 20-min demo
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5" />
            </Link>
            <a
              href={CAMPUSQ_URL}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-[transform,border-color] duration-200 ease-out-strong hover:border-brand active:scale-[0.97]"
            >
              See it live
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-16">
            <AnswerDemo />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* The product, demonstrated: a grounded answer with its citation. */
function AnswerDemo() {
  return (
    <div className="mx-auto max-w-2xl text-left">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/[0.07] dark:shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-md bg-brand text-[10px] font-semibold text-brand-foreground">
              Q
            </span>
            <span className="font-mono text-[11px] tracking-tight text-muted-foreground">
              campusq.retriive.com
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/70">
            retrieval · live
          </span>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          {/* Question */}
          <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-secondary px-4 py-2.5 text-sm text-foreground">
            What CGPA do I need to stay in good standing?
          </div>

          {/* Answer */}
          <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-hairline bg-background px-4 py-3.5">
            <p className="text-sm leading-relaxed text-foreground">
              You're in{" "}
              <span className="font-medium text-brand">Good Standing</span> when
              your CGPA meets the threshold for your year and program. Falling
              below it moves you to Academic Warning, then Suspension.
              <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-brand animate-[caret_1.1s_steps(1)_infinite]" />
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-hairline pt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 font-mono text-[10px] font-medium text-brand-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Academic Regulations § 7.1
              </span>
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                current calendar · verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function CredibilityBand() {
  const metrics = [
    { v: "566", l: "Questions answered" },
    { v: "91%", l: "Rated helpful" },
    { v: "<200ms", l: "Median retrieval" },
    { v: "98%", l: "Citation accuracy" },
  ];
  return (
    <section className="border-y border-hairline bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-hairline sm:grid-cols-4 sm:divide-y-0">
        {metrics.map((m, i) => (
          <Reveal key={m.l} delay={i * 70} className="px-5 py-8 text-center sm:py-10">
            <div className="font-display text-4xl text-foreground sm:text-5xl">
              {m.v}
            </div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {m.l}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ProblemSection() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl">
            Your students are already asking.
            <br />
            The internet is answering with{" "}
            <em className="text-amber-500">2017.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We searched a routine question — “What CGPA do I need to stay in good
            standing?” — and Google's top result was an archived 2017–2018
            calendar page. For academic-standing rules, a stale answer can cost a
            student their enrollment.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Google · top result today
                </span>
              </div>
              <div className="mt-4 rounded-xl border border-hairline bg-background p-4">
                <p className="truncate font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                  calendar.carleton.ca › 2017-2018 › undergrad
                </p>
                <p className="mt-1 text-base font-medium leading-snug text-[#1a0dab] dark:text-[#8ab4f8]">
                  Academic Performance Evaluation – Carleton University
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  7.1 Academic Performance Evaluation for Degree Students. The
                  annual assessment of the student's status…
                </p>
              </div>
              <div className="mt-3 rounded-lg border border-amber-400/40 bg-amber-50 px-3 py-2.5 dark:bg-amber-950/30">
                <p className="text-xs leading-relaxed text-amber-800 dark:text-amber-200">
                  ⚠ “This is an archived copy of the 2017–2018 catalog.” — a
                  banner you have to scroll up to even notice.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-brand/25 bg-card p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
                  CampusQ · same question
                </span>
              </div>
              <div className="mt-4 ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-secondary px-4 py-2.5 text-sm text-foreground">
                What CGPA do I need to stay in good standing?
              </div>
              <div className="mt-3 rounded-2xl rounded-bl-sm border border-hairline bg-background px-4 py-3.5">
                <p className="text-sm leading-relaxed text-foreground">
                  You're in Good Standing when your CGPA meets the threshold for
                  your year and program, per the University's{" "}
                  <span className="font-medium text-brand">current</span>{" "}
                  Academic Performance Evaluation regulations.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-hairline pt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 font-mono text-[10px] font-medium text-brand-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    Academic Regulations § 7.1
                  </span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    live calendar · verified
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Connect your sources",
      body: "Point Retriive at document stores, databases, and SaaS tools. We index them securely — your data never leaves your environment.",
    },
    {
      n: "02",
      title: "Ground every query",
      body: "Our retrieval pipeline pulls the most relevant passages and feeds them to the model with citation metadata attached.",
    },
    {
      n: "03",
      title: "Answer with the receipts",
      body: "Users get sourced answers in chat, search, or embedded widgets. Admins see every question, citation, and gap.",
    },
  ];
  return (
    <section className="border-t border-hairline bg-card/40 px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl">
            From scattered knowledge to instant, cited answers.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="bg-card">
              <div className="h-full p-7 sm:p-8">
                <div className="font-mono text-sm text-brand">[{s.n}]</div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Retrieval-grounded",
      body: "Every response is anchored to your documents with inline citations. No hallucinations, no guesswork.",
    },
    {
      icon: Lock,
      title: "Private by design",
      body: "Your data stays in your environment. Role-based access, audit logs, and encryption at rest.",
    },
    {
      icon: Database,
      title: "Built for scale",
      body: "A single department or a multi-campus deployment — millions of documents, sub-second retrieval.",
    },
    {
      icon: Plug,
      title: "Connects to your stack",
      body: "SharePoint, Google Drive, Notion, Confluence, SIS, and SQL. Index once, query anywhere.",
    },
    {
      icon: Languages,
      title: "Multilingual & tuned",
      body: "Fine-tuned for the vocabulary of education, healthcare, and government — Arabic and English by default.",
    },
    {
      icon: BarChart3,
      title: "Observable & governed",
      body: "Dashboards for volume, satisfaction, and source coverage. Admin controls for redaction and policy.",
    },
  ];
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Platform</Eyebrow>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl">
            The AI layer your institution can defend.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Retrieval-augmented generation with enterprise-grade governance — so
            teams get instant answers without compromising accuracy or privacy.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 70}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-hairline bg-brand-soft text-brand transition-transform duration-300 ease-out-strong group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Stats() {
  const stats = [
    { v: "10M+", l: "Documents indexed per tenant" },
    { v: "24/7", l: "Enterprise support" },
    { v: "5", l: "Native connectors, growing" },
    { v: "1", l: "Source of truth" },
  ];
  return (
    <section className="border-t border-hairline px-5 sm:px-8 lg:px-12 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 60}>
            <div className="font-display text-4xl text-brand sm:text-5xl">
              {s.v}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 pb-24 sm:pb-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-16 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-dots opacity-60" />
            <div className="absolute left-1/2 top-full h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 glow" />
          </div>
          <Eyebrow>Get started</Eyebrow>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl sm:text-6xl">
            Turn hours of policy lookups into{" "}
            <em className="text-brand">seconds.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Book a 20-minute demo and watch Retriive answer real questions from
            your own documents — live, with citations.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-[transform,opacity] duration-200 ease-out-strong hover:opacity-90 active:scale-[0.97]"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground transition-[transform,border-color] duration-200 ease-out-strong hover:border-brand active:scale-[0.97]"
            >
              Explore CampusQ
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
