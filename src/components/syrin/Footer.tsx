import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press kit", href: "#" },
      { label: "Contact", href: "mailto:hello@getsyrin.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "#" },
      { label: "Cookie policy", href: "#" },
    ],
  },
];

const socials = [
  { label: "X", href: "https://x.com/getsyrin" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-background-secondary/30 py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            The AI accountability partner that actually holds you to your word.
          </p>
          <div className="mt-5 flex gap-3 text-xs text-muted-foreground">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">
              {c.title}
            </p>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Syrin Inc. · Built with care · 🇨🇦</p>
        <p>The AI that pushes back.</p>
      </div>
    </div>
  </footer>
);
