import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Clock, MapPin } from "lucide-react";
import { seo } from "../lib/seo";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...seo({
      title: "Contact — Retriive",
      description:
        "Get in touch with the Retriive team about a pilot or demo. We reply to every message at team@retriive.com.",
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
    <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-50" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Pitch */}
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-muted">
            <span className="h-1 w-1 rounded-full bg-brand" />
            Contact
          </span>
          <h1 className="font-display mt-5 text-5xl sm:text-6xl">Let's talk.</h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us about your institution, your team, or the problem you're
            solving. We read and reply to every message.
          </p>

          <ul className="mt-10 space-y-5">
            <ContactItem icon={Mail} label="Email us">
              <a
                href="mailto:team@retriive.com"
                className="text-foreground transition-colors hover:text-brand"
              >
                team@retriive.com
              </a>
            </ContactItem>
            <ContactItem icon={Clock} label="Response time">
              Within 1 business day
            </ContactItem>
            <ContactItem icon={MapPin} label="Where we work">
              Building for institutions, remotely
            </ContactItem>
          </ul>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              Free pilots open · No credit card
            </span>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={90}>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/[0.04] dark:shadow-black/30 sm:p-8"
          >
            <Field
              id="name"
              label="Name"
              type="text"
              value={name}
              onChange={setName}
              maxLength={100}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              maxLength={255}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                maxLength={2000}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 ease-out focus:border-brand focus:ring-2 focus:ring-brand/25"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-[transform,opacity] duration-200 ease-out-strong hover:opacity-90 active:scale-[0.97]"
            >
              Send message
            </button>
            <p className="text-center font-mono text-[11px] text-muted-foreground">
              Opens your mail client · or write us directly
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-hairline bg-brand-soft text-brand">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-foreground">{children}</div>
      </div>
    </li>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  maxLength,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  maxLength: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 ease-out focus:border-brand focus:ring-2 focus:ring-brand/25"
      />
    </div>
  );
}
