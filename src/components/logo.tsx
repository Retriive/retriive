/**
 * Retriive wordmark. The mark is a brand-filled rounded square holding a
 * "return" glyph — the answer coming back to you, grounded and cited.
 */
export function Logo({
  className = "",
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-7 w-7 place-items-center rounded-[0.5rem] bg-brand text-brand-foreground shadow-sm shadow-brand/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M16 7v3a2 2 0 0 1-2 2H8" />
          <path d="m11 9-3 3 3 3" />
        </svg>
      </span>
      {showWord && (
        <span className="text-[1.15rem] font-semibold tracking-[-0.02em] text-foreground">
          Retriive
        </span>
      )}
    </span>
  );
}
