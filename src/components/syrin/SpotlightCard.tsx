import { useRef, ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** highlight = primary tier card */
  highlight?: boolean;
};

/**
 * SpotlightCard — premium cursor-tracking glow effect.
 * Tracks mouse position and renders a soft radial highlight
 * that follows the cursor inside the card. Used across cards
 * for the "Linear / Vercel / Superhuman" feel.
 */
export const SpotlightCard = ({ children, className = "", highlight = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        highlight
          ? "border-primary/40 shadow-glow-soft"
          : "border-border hover:border-primary/30"
      } ${className}`}
      style={{
        // exposes --mx, --my for the spotlight overlay below
        // initial position centered so first paint isn't ugly
        // (overridden on first mouse move)
        // @ts-expect-error custom CSS vars
        "--mx": "50%",
        "--my": "50%",
      }}
    >
      {/* Spotlight glow that follows the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), hsl(199 89% 60% / 0.18), transparent 45%)",
        }}
      />
      {/* Subtle hairline border highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), hsl(234 89% 74% / 0.12), transparent 50%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
