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
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav
        className={`mx-auto max-w-5xl rounded-2xl px-4 sm:px-5 h-14 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <Logo />
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground-strong hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#login"
            className="text-sm font-medium px-4 py-2 rounded-xl text-foreground hover:bg-white/60 transition-colors"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold px-4 py-2 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity shadow-glow-soft"
          >
            Start free
          </a>
        </div>
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl glass-strong rounded-2xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground-strong hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="#login" className="text-base font-medium text-foreground">Log in</a>
            <a
              href="#pricing"
              className="text-center text-sm font-semibold px-4 py-3 rounded-xl bg-foreground text-background"
            >
              Start free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};