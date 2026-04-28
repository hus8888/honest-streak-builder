import { Logo } from "./Logo";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Roadmap", "Changelog", "Status"] },
  { title: "Company", links: ["About", "Blog", "Careers (We're hiring!)", "Press kit", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookie policy", "DPA"] },
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
            {["X", "Instagram", "TikTok", "YouTube"].map((s) => (
              <a key={s} href="#" className="hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs uppercase tracking-wider font-semibold text-foreground mb-4">{c.title}</p>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
        <p>© 2026 SYRIN Inc. · Built with care · 🇨🇦</p>
        <p>The AI that pushes back.</p>
      </div>
    </div>
  </footer>
);