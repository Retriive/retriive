import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as CAMPUSQ_URL } from "./external-links-BE2azTWI.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Cq_Cchav.js
var import_jsx_runtime = require_jsx_runtime();
var TOP_QUESTIONS = [
	{
		q: "What happens if I fail a required course twice?",
		n: 17
	},
	{
		q: "How do I book a study room?",
		n: 7
	},
	{
		q: "Who is teaching SYSC 2004 in Fall 2026?",
		n: 7
	},
	{
		q: "What are the exact prerequisites for SYSC 3310, and is it offered this Fall?",
		n: 7
	}
];
var CATEGORIES = [
	{
		label: "Course Lookups",
		n: 236
	},
	{
		label: "General / Other",
		n: 115
	},
	{
		label: "Deadlines & Dates",
		n: 60
	},
	{
		label: "Academic Regulations & GPA",
		n: 45
	},
	{
		label: "Prerequisites & Requirements",
		n: 43
	},
	{
		label: "Registration Procedures",
		n: 28
	}
];
function ProductsPage() {
	const maxCat = Math.max(...CATEGORIES.map((c) => c.n));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14 max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-brand",
					children: "Our Platforms"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em]",
					children: "A growing suite of intelligent products"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-muted-foreground",
					children: "Purpose-built tools designed to bring AI-driven clarity to data, people, and workflows."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "max-w-6xl mx-auto rounded-3xl border border-border bg-card overflow-hidden shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-5 gap-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-border bg-gradient-to-br from-brand-soft to-white flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700",
									children: "Live pilot"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-900",
								children: "CampusQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-medium text-purple-700",
								children: "Carleton University · Systems & Computer Engineering"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed flex-1",
								children: "An AI advisor that answers student questions about courses, prerequisites, deadlines, and campus services — grounded in the department's own documents, with citations on every answer."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CAMPUSQ_URL,
									className: "rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-md shadow-purple-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-800",
									children: "Open CampusQ →"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "rounded-md border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-700 hover:text-purple-700",
									children: "Pilot at your school"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3 p-6 sm:p-8 lg:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500",
									children: "Advisor Dashboard · All time"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono text-zinc-400",
									children: "live"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 sm:gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "566",
										label: "Questions asked"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "91%",
										label: "Helpfulness · 20👍 2👎"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										value: "SYSC",
										label: "Top dept. by volume"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 rounded-xl border border-border bg-zinc-50/60 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-zinc-700",
											children: "When students ask questions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "24h pattern"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HourlyChart, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between text-[10px] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12a" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "6a" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12p" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "6p" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12a" })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-zinc-700 mb-3",
									children: "Top categories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-44 shrink-0 text-xs text-zinc-700 truncate",
												children: c.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex-1 h-2 rounded-full bg-zinc-100 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full rounded-full bg-purple-700/80",
													style: { width: `${c.n / maxCat * 100}%` }
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-8 shrink-0 text-right text-xs font-mono text-zinc-500",
												children: c.n
											})
										]
									}, c.label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-zinc-700 mb-3",
									children: "Most-asked questions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "space-y-2",
									children: TOP_QUESTIONS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 rounded-lg border border-border bg-white p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-mono text-purple-700 mt-0.5",
												children: String(i + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex-1 text-xs text-zinc-700 leading-relaxed",
												children: [
													"\"",
													t.q,
													"\""
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-mono text-zinc-400 shrink-0",
												children: ["×", t.n]
											})
										]
									}, i))
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyThisMatters, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-dashed border-border bg-muted/20 p-8 sm:p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full border border-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
							children: "Coming soon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-700",
							children: "The next Retriive platform is in development"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground max-w-md mx-auto",
							children: "We're working with design partners on the next vertical. Want a say in what we build?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "mt-5 inline-block rounded-md border border-border bg-white px-5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-700 hover:text-purple-700",
							children: "Get in touch"
						})
					]
				})
			})
		]
	});
}
function WhyThisMatters() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "max-w-6xl mx-auto mt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-border bg-card overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 sm:p-10 border-b border-border bg-gradient-to-br from-amber-50 to-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full border border-amber-300/60 bg-amber-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700",
							children: "Why this matters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-4 text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-zinc-900 max-w-2xl",
							children: [
								"Right now, Google's #1 answer to a Carleton student is",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-amber-600",
									children: "seven years out of date."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl",
							children: [
								"We searched a routine question every student asks —",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-zinc-700",
									children: "\"What CGPA do I need to stay in good standing?\""
								}),
								" ",
								"— and the top result was an",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-zinc-700",
									children: "archived 2017–2018 calendar page"
								}),
								". The only warning is a banner you have to scroll back up to notice. For academic-standing rules, a stale answer can cost a student their enrollment."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-2 w-2 rounded-full bg-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500",
									children: "Google · Top result today"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-white p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-emerald-700 truncate",
										children: "calendar.carleton.ca › calendars › 2017-2018 › undergrad"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-base font-medium text-[#1a0dab] leading-snug",
										children: "Academic Performance Evaluation – Carleton University"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-zinc-500 leading-relaxed",
										children: "7.1 Academic Performance Evaluation for Degree Students. The annual assessment of the student's status in his or her degree…"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-lg border border-amber-300/70 bg-amber-50 p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-amber-800 leading-relaxed",
									children: [
										"⚠ \"This is an archived copy of the",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "2017–2018 catalog"
										}),
										". To access the most recent version of the catalog, please visit calendar.carleton.ca.\""
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-[11px] text-muted-foreground",
								children: [
									"Easy to miss · No indication the rules may have changed · No source for the ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "current" }),
									" policy"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8 bg-zinc-50/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700",
									children: "CampusQ · Same question"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl rounded-br-sm border border-border bg-white px-4 py-3 ml-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-zinc-700",
									children: "What CGPA do I need to stay in good standing?"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 rounded-xl rounded-bl-sm border border-purple-700/20 bg-white px-4 py-3 mr-8 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-zinc-700 leading-relaxed",
									children: [
										"You're in ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "Good Standing"
										}),
										" when your CGPA meets the threshold for your year and program, as set out in the University's current Academic Performance Evaluation regulations. Falling below it moves you to Academic Warning or Suspension."
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center gap-2 border-t border-border pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-medium text-purple-700",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-purple-700" }), "Source: Academic Regulations 7.1"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-emerald-600",
										children: "current calendar · verified"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-[11px] text-muted-foreground ml-8",
								children: [
									"Grounded in the ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "live" }),
									" calendar · Cites the exact section · Updates when Carleton's policy does"
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-8 sm:px-10 py-6 border-t border-border bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-zinc-700 max-w-2xl",
						children: [
							"Students already ask CampusQ this — \"Academic Regulations & GPA\" is a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-purple-700",
								children: "top-asked category"
							}),
							". The difference is whether the answer comes from a forgotten 2017 page or your current, cited policy."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "shrink-0 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-md shadow-purple-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-800",
						children: "Bring CampusQ to your school →"
					})]
				})
			]
		})
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-white p-3 sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xl sm:text-2xl font-bold tracking-tight text-purple-700",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[10px] sm:text-xs text-muted-foreground leading-snug",
			children: label
		})]
	});
}
var HOURLY = [
	18,
	17,
	2,
	93,
	14,
	52,
	155,
	1,
	0,
	0,
	1,
	11,
	7,
	25,
	29,
	20,
	22,
	23,
	20,
	4,
	5,
	15,
	13,
	19
];
function HourlyChart() {
	const max = Math.max(...HOURLY);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-end gap-[3px] h-20",
		children: HOURLY.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 rounded-sm bg-purple-700/80 hover:bg-purple-700 transition-colors",
			style: { height: `${Math.max(v / max * 100, 3)}%` },
			title: `${i}:00 — ${v} questions`
		}, i))
	});
}
//#endregion
export { ProductsPage as component };
