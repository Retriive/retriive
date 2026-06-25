import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seo } from "../lib/seo";
import { Reveal } from "../components/reveal";

const TEAM = [
  { name: "Mahad Mohamed Yonis", role: "Chief Executive Officer", initials: "MY" },
  { name: "Abody", role: "Chief Information Officer", initials: "AB" },
  { name: "Abdulla Arid", role: "Chief Operating Officer", initials: "AA" },
  { name: "Salama", role: "Chief Technology Officer", initials: "SL" },
];

const VALUES = [
  {
    n: "01",
    title: "Grounded by default",
    body: "Every answer is anchored in your data, with a source you can open and verify. If we can't cite it, we don't claim it.",
  },
  {
    n: "02",
    title: "Built for scale",
    body: "Designed for institutions with millions of documents and thousands of people depending on a correct answer.",
  },
  {
    n: "03",
    title: "Human-first",
    body: "We design for the student at 2am and the registrar at their desk — not just the dashboard.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    ...seo({
      title: "About — Retriive",
      description:
        "Meet the team behind Retriive — building grounded AI infrastructure for the next generation of institutions.",
      path: "/about",
    }),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Statement hero */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        </div>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-muted">
              <span className="h-1 w-1 rounded-full bg-brand" />
              About Retriive
            </span>
            <h1 className="font-display mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              We build the AI layer for the institutions of{" "}
              <em className="text-brand">tomorrow.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 sm:px-8 lg:px-12 pb-8">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <Reveal>
            <p>
              Retriive was founded on a simple conviction: the organizations that
              shape our world — universities, hospitals, governments, and
              enterprises — deserve AI that actually understands them.
              Off-the-shelf tools weren't built for the messy, fragmented,
              high-stakes data these institutions live with every day.
            </p>
          </Reveal>
          <Reveal delay={70}>
            <p>
              We build intelligent retrieval systems that turn scattered
              knowledge into answers people can trust. From campus catalogs to
              enterprise wikis, our platforms surface the right information at the
              right moment — with the citations, context, and guardrails serious
              work requires.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              We're a small team that moves fast and ships carefully. We care
              about craft, about clarity, and about the people on the other side
              of the screen. If you're building the next chapter of your
              institution, we'd love to help you write it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-card">
                <div className="h-full p-7 sm:p-8">
                  <div className="font-mono text-sm text-brand">[{v.n}]</div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-hairline bg-card/40 px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-muted">
              <span className="h-1 w-1 rounded-full bg-brand" />
              The team
            </span>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl">
              The minds behind Retriive.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              A multidisciplinary team building grounded AI infrastructure for the
              next generation of institutions.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 text-center transition-[transform,border-color,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
                  <div
                    className="mx-auto grid h-20 w-20 place-items-center rounded-2xl font-display text-2xl text-brand-foreground transition-transform duration-300 ease-out-strong group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand), color-mix(in oklch, var(--brand) 55%, white))",
                    }}
                  >
                    {m.initials}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {m.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-muted">
                    {m.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Want to build it with us?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We're hiring, partnering, and piloting. Reach out.
          </p>
          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-[transform,opacity] duration-200 ease-out-strong hover:opacity-90 active:scale-[0.97]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
