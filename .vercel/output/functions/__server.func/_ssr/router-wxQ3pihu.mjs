import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as CAMPUSQ_URL } from "./external-links-BE2azTWI.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-wxQ3pihu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-j0NkYks1.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Products",
		to: "/products"
	},
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "w-full border-b border-border/60 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4 px-4 sm:px-8 lg:px-16 py-4 sm:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					onClick: () => setOpen(false),
					className: "text-lg sm:text-xl font-semibold tracking-tight shrink-0",
					children: ["Retriive", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: " Inc."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: true },
						activeProps: { className: "text-purple-700" },
						className: "transition-colors duration-500 ease-in-out hover:text-purple-700",
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CAMPUSQ_URL,
						className: "hidden sm:inline-flex rounded-md bg-brand px-4 sm:px-5 py-2 text-sm font-medium text-brand-foreground transition-colors duration-500 ease-in-out hover:bg-purple-800",
						children: "Login"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "md:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground transition-colors duration-300 hover:border-purple-700 hover:text-purple-700",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden border-t border-border/60 px-4 py-4 flex flex-col gap-1",
			children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: n.to,
				onClick: () => setOpen(false),
				activeOptions: { exact: true },
				activeProps: { className: "text-purple-700 bg-brand-soft" },
				className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-purple-700 hover:bg-brand-soft",
				children: n.label
			}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://campusq.retriive.com",
				className: "mt-2 sm:hidden rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors duration-500 ease-in-out hover:bg-purple-800",
				children: "Login"
			})]
		})]
	});
}
var FOOTER_LINK_HREFS = {
	CampusQ: CAMPUSQ_URL,
	"team@retriive.com": "mailto:team@retriive.com"
};
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "px-4 sm:px-8 lg:px-16 py-12 sm:py-16 border-t border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xl font-semibold tracking-tight",
						children: ["Retriive", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: " Inc."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground max-w-sm",
						children: "Intelligent AI solutions for modern institutions."
					})]
				}),
				[
					{
						title: "Contact",
						links: [
							"team@retriive.com",
							"Support",
							"Press"
						]
					},
					{
						title: "About",
						links: [
							"Company",
							"Team",
							"Careers"
						]
					},
					{
						title: "Products",
						links: [
							"CampusQ",
							"Roadmap",
							"Changelog"
						]
					}
				].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: FOOTER_LINK_HREFS[l] ?? "#",
						className: "transition-colors duration-500 ease-in-out hover:text-purple-700",
						children: l
					}) }, l))
				})] }, col.title)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold",
					children: "Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors duration-500 ease-in-out hover:text-purple-700",
							children: "Privacy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors duration-500 ease-in-out hover:text-purple-700",
							children: "Terms"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-colors duration-500 ease-in-out hover:text-purple-700",
							children: "Security"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 pt-6 border-t border-border/60 text-xs text-muted-foreground flex justify-between flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Retriive Inc. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built with intelligence." })]
		})]
	});
}
var SITE = {
	url: "https://retriive.com",
	name: "Retriive Inc.",
	shortName: "Retriive",
	title: "Retriive Inc. — Intelligent AI solutions for modern enterprises",
	description: "Retriive Inc. builds retrieval-grounded AI platforms that turn handbooks, SOPs, and internal records into instant, cited answers for universities, government, and enterprises.",
	ogImage: "/og-image.png",
	twitter: "@retriive",
	locale: "en_US",
	themeColor: "#7c3aed"
};
function absoluteUrl(pathOrUrl) {
	if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
	if (pathOrUrl === "/") return SITE.url;
	return `${SITE.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}
/**
* Builds a consistent set of meta + link tags for a route's `head()`.
* Per-page tags override the site-wide defaults set in __root.tsx because
* TanStack Router dedupes by `title` / `name` / `property`.
*/
function seo({ title, description, path = "/", image = SITE.ogImage, type = "website" }) {
	const url = absoluteUrl(path);
	const imageUrl = absoluteUrl(image);
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:type",
				content: type
			},
			{
				property: "og:site_name",
				content: SITE.name
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:image",
				content: imageUrl
			},
			{
				property: "og:locale",
				content: SITE.locale
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: imageUrl
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
/** Organization structured data (JSON-LD) for rich results. */
function organizationJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE.name,
		alternateName: SITE.shortName,
		url: SITE.url,
		logo: absoluteUrl("/og-image.png"),
		description: SITE.description,
		email: "team@retriive.com",
		sameAs: []
	};
}
/** WebSite structured data (JSON-LD). */
function websiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE.name,
		url: SITE.url
	};
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SITE.title },
			{
				name: "description",
				content: SITE.description
			},
			{
				name: "author",
				content: SITE.name
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: SITE.themeColor
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: SITE.name
			},
			{
				property: "og:title",
				content: SITE.title
			},
			{
				property: "og:description",
				content: SITE.description
			},
			{
				property: "og:url",
				content: SITE.url
			},
			{
				property: "og:image",
				content: `${SITE.url}${SITE.ogImage}`
			},
			{
				property: "og:locale",
				content: SITE.locale
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: SITE.twitter
			},
			{
				name: "twitter:title",
				content: SITE.title
			},
			{
				name: "twitter:description",
				content: SITE.description
			},
			{
				name: "twitter:image",
				content: `${SITE.url}${SITE.ogImage}`
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-background text-foreground flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$3 = () => import("./products-Cq_Cchav.mjs");
var Route$3 = createFileRoute("/products")({
	head: () => ({ ...seo({
		title: "Products — Retriive Inc.",
		description: "Explore Retriive's growing suite of intelligent AI platforms, starting with CampusQ — live at Carleton University.",
		path: "/products"
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DgMdj7yw.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ ...seo({
		title: "Contact — Retriive Inc.",
		description: "Get in touch with the Retriive Inc. team about a pilot or demo. We respond to every message at team@retriive.com.",
		path: "/contact"
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BBMdcgk6.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ ...seo({
		title: "About — Retriive Inc.",
		description: "Meet the team behind Retriive Inc. — building AI infrastructure for the next generation of institutions.",
		path: "/about"
	}) }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Cciqi5Bp.mjs");
var Route = createFileRoute("/")({
	head: () => ({ ...seo({
		title: "Retriive Inc. — Answer any policy question in seconds",
		description: "Retriive indexes your handbooks, SOPs, and internal records into one AI search bar — every answer comes back with the exact cited source, paragraph, and page.",
		path: "/"
	}) }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ProductsRoute = Route$3.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$4
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$4
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute,
	ContactRoute,
	ProductsRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
