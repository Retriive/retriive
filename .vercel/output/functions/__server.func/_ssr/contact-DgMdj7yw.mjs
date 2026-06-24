import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DgMdj7yw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const subject = encodeURIComponent(`Contact from ${name || "website"}`);
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
		window.location.href = `mailto:team@retriive.com?subject=${subject}&body=${body}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-brand",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight",
					children: "Let's talk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-base sm:text-lg text-muted-foreground",
					children: [
						"Tell us about your institution, your team, or the problem you're solving. We respond to every message at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:team@retriive.com",
							className: "text-purple-700 hover:underline",
							children: "team@retriive.com"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-10 flex flex-col gap-5 rounded-2xl border border-border/60 bg-background/80 backdrop-blur p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "text-sm font-medium text-zinc-900",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								type: "text",
								required: true,
								maxLength: 100,
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-700"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "text-sm font-medium text-zinc-900",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								required: true,
								maxLength: 255,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-700"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "text-sm font-medium text-zinc-900",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								required: true,
								maxLength: 2e3,
								rows: 6,
								value: message,
								onChange: (e) => setMessage(e.target.value),
								className: "rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-700 resize-y"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "self-start rounded-md bg-brand px-6 py-2.5 text-sm font-medium text-brand-foreground transition-colors duration-500 ease-in-out hover:bg-purple-800",
							children: "Send message"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { ContactPage as component };
