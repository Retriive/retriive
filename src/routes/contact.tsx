import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { seo } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...seo({
      title: "Contact — Retriive Inc.",
      description:
        "Get in touch with the Retriive Inc. team about a pilot or demo. We respond to every message at team@retriive.com.",
      path: "/contact",
    }),
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:team@retriive.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-medium text-brand">Contact</p>
        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Let's talk.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Tell us about your institution, your team, or the problem you're
          solving. We respond to every message at{" "}
          <a
            href="mailto:team@retriive.com"
            className="text-purple-700 hover:underline"
          >
            team@retriive.com
          </a>
          .
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-border/60 bg-background/80 backdrop-blur p-6 sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-900">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-zinc-900"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              maxLength={2000}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-700 resize-y"
            />
          </div>

          <button
            type="submit"
            className="self-start rounded-md bg-brand px-6 py-2.5 text-sm font-medium text-brand-foreground transition-colors duration-500 ease-in-out hover:bg-purple-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
