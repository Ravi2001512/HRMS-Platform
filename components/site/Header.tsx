"use client";

import * as React from "react";
import { Menu, X, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "./TrialModalContext";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Payroll", href: "#payroll" },
  { label: "Mobile App", href: "#mobile-app" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { openModal } = useTrialModal();

  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-paper/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-paper">
            <ClipboardCheck className="h-4.5 w-4.5" size={18} />
          </span>
          <span className="font-display text-lg font-semibold text-ink">
            NexusPay <span className="text-brand">HR</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" onClick={() => openModal()}>
            Book a Demo
          </Button>
          <Button variant="stamp" size="sm" onClick={() => openModal()}>
            Start 14-Day Free Trial
          </Button>
        </div>

        <button
          className="rounded-sm p-2 text-ink lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-paper-line bg-paper px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-sm px-2 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5">
            <Button variant="outline" onClick={() => openModal()}>
              Book a Demo
            </Button>
            <Button variant="stamp" onClick={() => openModal()}>
              Start 14-Day Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
