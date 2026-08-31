"use client";

import { ClipboardCheck, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "./TrialModalContext";

const FOOTER_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Payroll", href: "#payroll" },
  { label: "Mobile App", href: "#mobile-app" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export function Footer() {
  const { openModal } = useTrialModal();

  return (
    <footer className="bg-ink text-paper/70">
      {/* CTA zone */}
      <div className="relative overflow-hidden border-b border-white/10">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-brand opacity-[0.08]" />
        <div className="pointer-events-none absolute -left-32 -top-24 h-[400px] w-[400px] rounded-full bg-brand opacity-[0.12] blur-[80px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-seal opacity-[0.10] blur-[70px]" />

        <div className="container relative py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-paper/60">
            14-day free trial · No card required
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Run your first payroll cycle this month
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-paper/65">
            Set up Core HR, attendance and statutory payroll in under a day.
            No credit card required for your trial.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="stamp"
              onClick={() => openModal()}
              className="shadow-stamp/30 shadow-md hover:shadow-stamp/50 hover:shadow-lg transition-shadow"
            >
              Start 14-Day Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 text-paper hover:bg-white/10 hover:border-white/40"
              onClick={() => openModal()}
            >
              Book a Demo
            </Button>
          </div>

          {/* App store badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-paper/80 transition-all hover:bg-white/10"
              aria-label="Download on the App Store"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-[13px] font-medium">App Store</span>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-paper/80 transition-all hover:bg-white/10"
              aria-label="Get it on Google Play"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <span className="text-[13px] font-medium">Google Play</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lower footer */}
      <div className="container py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand text-paper">
                <ClipboardCheck className="h-4 w-4" />
              </span>
              <span className="font-display text-base font-semibold text-paper">
                NexusPay HR
              </span>
            </a>
            <p className="mt-3 max-w-[220px] text-[12.5px] leading-relaxed text-paper/50">
              Unified HRIS, Attendance & Statutory Payroll for Sri Lankan businesses.
            </p>
            {/* Social links */}
            <div className="mt-4 flex gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-paper/50 transition-colors hover:border-white/30 hover:text-paper/80"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-paper/40">
              Platform
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-paper/40">
              Contact
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-[13px] text-paper/60">
              <li>
                <a href="mailto:hello@nexuspayhr.lk" className="hover:text-paper transition-colors">
                  hello@nexuspayhr.lk
                </a>
              </li>
              <li>Colombo, Sri Lanka</li>
              <li className="mt-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-[12px] transition-colors hover:bg-white/5 hover:text-paper"
                >
                  <Mail className="h-3 w-3" /> Book a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-paper/40">
            © {new Date().getFullYear()} NexusPay HR (Pvt) Ltd, Colombo, Sri Lanka.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-1">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => e.preventDefault()}
                className="text-[12px] text-paper/40 transition-colors hover:text-paper/70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
