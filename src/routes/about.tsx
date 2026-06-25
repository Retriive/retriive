import { createFileRoute } from "@tanstack/react-router";
import { seo } from "../lib/seo";
import { Reveal } from "../components/reveal";

const TEAM = [
  { name: "Mahad Mohamed Yonis", role: "CEO", initials: "MY" },
  { name: "Abody", role: "CIO", initials: "AB" },
  { name: "Abdulla Arid", role: "COO", initials: "AA" },
  { name: "Salama", role: "CTO", initials: "SL" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    ...seo({
      title: "About — Retriive Inc.",
      description:
        "Meet the team behind Retriive Inc. — building AI infrastructure for the next generation of institutions.",
      path: "/about",
    }),
  }),

  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Story */}
      <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-brand">About Retriive</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Building the AI layer for the institutions of tomorrow.
          </h1>
          <div className="mt-8 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Retriive Inc. was founded on a simple conviction: the
              organizations that shape our world — universities, hospitals,
              governments, and enterprises — deserve AI that actually
              understands them. Off-the-shelf tools weren't built for the
              messy, fragmented, high-stakes data these institutions live
              with every day.
            </p>
            <p>
              We build intelligent retrieval systems that turn scattered
              knowledge into answers people can trust. From campus catalogs
              to enterprise wikis, our platforms surface the right
              information at the right moment — with the citations,
              context, and guardrails serious work requires.
            </p>
            <p>
              We're a small team that moves fast and ships carefully. We
              care about craft, about clarity, and about the people on the
              other side of the screen. If you're building the next chapter
              of your institution, we'd love to help you write it.
            </p>
          </div>

          {/* Values */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Grounded by default",
                body: "Every answer is anchored in your data, with sources you can verify.",
              },
              {
                title: "Built for scale",
                body: "Designed for institutions with millions of documents and thousands of users.",
              },
              {
                title: "Human-first",
                body: "We design for the people who use our tools every day, not just the dashboards.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:border-purple-700 dark:hover:border-purple-400 hover:shadow-lg hover:shadow-purple-700/10 dark:hover:shadow-purple-500/20">
                  <h3 className="text-base font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-brand-soft/40 border-t border-border/60">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand">Meet Our Team</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            The minds behind Retriive
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A multidisciplinary team building AI infrastructure for the next
            generation of institutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 text-center transition-[transform,border-color,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 hover:border-purple-700 dark:hover:border-purple-400 hover:shadow-lg hover:shadow-purple-700/10 dark:hover:shadow-purple-500/20">
                <div
                  className="mx-auto h-24 w-24 rounded-full flex items-center justify-center text-2xl font-semibold text-brand-foreground transition-transform duration-300 ease-out-strong group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--brand), color-mix(in oklch, var(--brand) 60%, white))",
                  }}
                >
                  {m.initials}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm text-brand font-medium">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

