"use client";

import * as React from "react";
import { Menu, X, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "./TrialModalContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Payroll", href: "#payroll" },
  { label: "Mobile App", href: "#mobile-app" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const { openModal } = useTrialModal();

  // Scroll-aware header background
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight active nav section
  React.useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on nav click
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-paper-line bg-paper/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-paper/70 backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14" : "h-16"
        )}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-paper shadow-brand/20 shadow-sm transition-shadow group-hover:shadow-brand/40 group-hover:shadow-md">
            <ClipboardCheck size={18} />
          </span>
          <span className="font-display text-lg font-semibold text-ink">
            NexusPay <span className="text-brand">HR</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-[14px] font-medium transition-colors duration-150",
                activeSection === link.href.slice(1)
                  ? "text-brand"
                  : "text-ink-soft hover:text-ink"
              )}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-[2px] left-0 right-0 h-[2px] rounded-full bg-brand" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" onClick={() => openModal()}>
            Book Demo
          </Button>
          <Button variant="stamp" size="sm" onClick={() => openModal()} className="shadow-stamp/20 shadow-sm hover:shadow-stamp/30 hover:shadow-md transition-shadow">
            Start 14-Day Free Trial
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-ink/5 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span
            className={cn(
              "transition-all duration-200",
              mobileOpen ? "opacity-100" : "opacity-0 absolute"
            )}
          >
            <X size={20} />
          </span>
          <span
            className={cn(
              "transition-all duration-200",
              mobileOpen ? "opacity-0 absolute" : "opacity-100"
            )}
          >
            <Menu size={20} />
          </span>
        </button>
      </div>

      {/* Mobile menu — smooth max-height transition */}
      <div
        className={cn(
          "overflow-hidden border-t border-paper-line bg-paper transition-all duration-300 ease-in-out lg:hidden",
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={cn(
                "rounded-md px-3 py-3 text-[15px] font-medium transition-colors",
                activeSection === link.href.slice(1)
                  ? "bg-brand-light text-brand"
                  : "text-ink-soft hover:bg-ink/5 hover:text-ink"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2.5 px-5 pb-6 pt-4">
          <Button variant="outline" onClick={() => { openModal(); handleNavClick(); }}>
            Book Demo
          </Button>
          <Button variant="stamp" onClick={() => { openModal(); handleNavClick(); }}>
            Start 14-Day Free Trial
          </Button>
        </div>
      </div>
    </header>
  );
}
