import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BBMdcgk6.js
var import_jsx_runtime = require_jsx_runtime();
var TEAM = [
	{
		name: "Mahad Mohamed Yonis",
		role: "CEO",
		initials: "MY"
	},
	{
		name: "Abody",
		role: "CIO",
		initials: "AB"
	},
	{
		name: "Abdulla Arid",
		role: "COO",
		initials: "AA"
	},
	{
		name: "Salama",
		role: "CTO",
		initials: "SL"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-brand",
					children: "About Retriive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight",
					children: "Building the AI layer for the institutions of tomorrow."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Retriive Inc. was founded on a simple conviction: the organizations that shape our world — universities, hospitals, governments, and enterprises — deserve AI that actually understands them. Off-the-shelf tools weren't built for the messy, fragmented, high-stakes data these institutions live with every day." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We build intelligent retrieval systems that turn scattered knowledge into answers people can trust. From campus catalogs to enterprise wikis, our platforms surface the right information at the right moment — with the citations, context, and guardrails serious work requires." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We're a small team that moves fast and ships carefully. We care about craft, about clarity, and about the people on the other side of the screen. If you're building the next chapter of your institution, we'd love to help you write it." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6",
					children: [
						{
							title: "Grounded by default",
							body: "Every answer is anchored in your data, with sources you can verify."
						},
						{
							title: "Built for scale",
							body: "Designed for institutions with millions of documents and thousands of users."
						},
						{
							title: "Human-first",
							body: "We design for the people who use our tools every day, not just the dashboards."
						}
					].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 transition-colors duration-500 ease-in-out hover:border-purple-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-zinc-900",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: v.body
						})]
					}, v.title))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-brand-soft/40 border-t border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center mb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-brand",
					children: "Meet Our Team"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl sm:text-4xl font-bold tracking-tight",
					children: "The minds behind Retriive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground max-w-2xl mx-auto",
					children: "A multidisciplinary team building AI infrastructure for the next generation of institutions."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
			children: TEAM.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-8 text-center transition-colors duration-500 ease-in-out hover:border-purple-700 hover:shadow-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto h-24 w-24 rounded-full flex items-center justify-center text-2xl font-semibold text-brand-foreground",
						style: { background: "linear-gradient(135deg, var(--brand), color-mix(in oklch, var(--brand) 60%, white))" },
						children: m.initials
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-lg font-semibold",
						children: m.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-brand font-medium",
						children: m.role
					})
				]
			}, m.name))
		})]
	})] });
}
//#endregion
export { AboutPage as component };
