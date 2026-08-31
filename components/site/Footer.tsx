"use client";

import { ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "./TrialModalContext";

export function Footer() {
  const { openModal } = useTrialModal();

  return (
    <footer className="bg-ink text-paper/80">
      <div className="container border-b border-white/10 py-14 text-center">
        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Run your first payroll cycle this month
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-paper/70">
          Set up Core HR, attendance and statutory payroll in under a day.
          No card required for your 14-day trial.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="stamp" onClick={() => openModal()}>
            Start 14-Day Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/25 text-paper hover:bg-white/10"
            onClick={() => openModal()}
          >
            Book a Demo
          </Button>
        </div>
      </div>

      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand text-paper">
            <ClipboardCheck className="h-4 w-4" />
          </span>
          <span className="font-display text-base font-semibold text-paper">
            NexusPay HR
          </span>
        </a>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <a href="#features" className="hover:text-paper">Features</a>
          <a href="#payroll" className="hover:text-paper">Payroll</a>
          <a href="#mobile-app" className="hover:text-paper">Mobile App</a>
          <a href="#pricing" className="hover:text-paper">Pricing</a>
          <a href="#faqs" className="hover:text-paper">FAQs</a>
        </nav>
        <p className="text-[12px] text-paper/50">
          © {new Date().getFullYear()} NexusPay HR (Pvt) Ltd, Colombo, Sri Lanka.
        </p>
      </div>
    </footer>
  );
}
