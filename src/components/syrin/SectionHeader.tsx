export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-glow mb-4">
        {eyebrow}
      </p>
    )}
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
    )}
  </div>
);