import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

// Minimal typing for the View Transitions API (not yet in TS DOM lib).
type ViewTransition = { ready: Promise<void> };
type DocWithVT = Document & {
  startViewTransition?: (cb: () => void) => ViewTransition;
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const btnRef = useRef<HTMLButtonElement>(null);

  // Sync state from the class the inline head script already applied.
  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  function applyTheme(next: Theme) {
    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage may be unavailable */
    }
  }

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const doc = document as DocWithVT;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No View Transitions support → coordinated crossfade fallback.
    // Reduced motion → switch instantly (motion is the thing to avoid).
    if (!doc.startViewTransition || prefersReduced) {
      if (prefersReduced) {
        applyTheme(next);
        return;
      }
      root.classList.add("theme-transition");
      applyTheme(next);
      window.setTimeout(() => root.classList.remove("theme-transition"), 220);
      return;
    }

    // Circular reveal originating from the center of the toggle button.
    const rect = btnRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => applyTheme(next));

    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          // Rare interaction → can afford a beat. iOS-like drawer curve.
          duration: 480,
          easing: "cubic-bezier(0.32, 0.72, 0, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

  const isDark = theme === "dark";

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid place-items-center rounded-lg border border-border p-2 text-foreground transition-[color,border-color,transform] duration-200 ease-out hover:border-brand hover:text-brand active:scale-[0.92]"
    >
      {/* Icons are driven by the `.dark` class, so they stay in sync with the
          theme with no JS and cross-rotate as it changes. */}
      <span className="relative block h-5 w-5">
        <Moon className="absolute inset-0 h-5 w-5 rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-300 ease-out-strong dark:-rotate-90 dark:scale-0 dark:opacity-0" />
        <Sun className="absolute inset-0 h-5 w-5 rotate-90 scale-0 opacity-0 transition-[transform,opacity] duration-300 ease-out-strong dark:rotate-0 dark:scale-100 dark:opacity-100" />
      </span>
    </button>
  );
}
