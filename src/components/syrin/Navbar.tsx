import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (target) {
    e.preventDefault();
    window.history.replaceState(null, "", href);
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection (for underline indicator)
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav
        className={`mx-auto max-w-5xl rounded-2xl px-4 sm:px-5 h-14 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a
          href="#top"
          onClick={(e) => smoothScroll(e, "#top")}
          className="flex items-center"
          aria-label="Syrin home"
        >
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => smoothScroll(e, l.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground-strong hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-primary transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                />
              </a>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/login"
            className="text-sm font-medium px-4 py-2 rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/60 transition-colors"
          >
            Log in
          </a>
          <a
            href="#pricing"
            onClick={(e) => smoothScroll(e, "#pricing")}
            className="text-sm font-semibold px-4 py-2 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity shadow-glow-soft"
          >
            Start free
          </a>
        </div>
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
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
                onClick={(e) => {
                  smoothScroll(e, l.href);
                  setOpen(false);
                }}
                className="text-base text-muted-foreground-strong hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="/login" className="text-base font-medium text-foreground">
              Log in
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                smoothScroll(e, "#pricing");
                setOpen(false);
              }}
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
