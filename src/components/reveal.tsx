import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals its children with a subtle upward fade when scrolled into view.
 * Animation, easing, and reduced-motion handling live in styles.css under
 * the `[data-reveal]` selector. Pass `delay` (ms) to stagger siblings.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Without IntersectionObserver, show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      data-shown={shown}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={className}
    >
      {children}
    </div>
  );
}
