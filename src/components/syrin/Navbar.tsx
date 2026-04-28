import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#login"
            className="text-sm font-medium px-4 py-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-soft hover:shadow-glow transition-shadow"
          >
            Start free →
          </a>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="#login" className="text-base font-medium text-foreground">Log in</a>
            <a
              href="#pricing"
              className="text-center text-sm font-medium px-4 py-3 rounded-lg bg-gradient-primary text-primary-foreground"
            >
              Start free →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};