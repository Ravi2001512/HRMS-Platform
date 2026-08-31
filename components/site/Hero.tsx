"use client";

import { ArrowRight, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
import { useTrialModal } from "./TrialModalContext";

const TRUST_BADGES = [
  { label: "EPF", sub: "Auto-calculated" },
  { label: "ETF", sub: "Auto-calculated" },
  { label: "APIT", sub: "Tax tables built-in" },
];

const BANKS = ["Commercial Bank", "Sampath Bank", "HNB", "BOC", "NDB"];

export function Hero() {
  const { openModal } = useTrialModal();

  return (
    <section id="top" className="relative overflow-hidden border-b border-paper-line bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-ledger opacity-40" />
      <div className="container relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="eyebrow">HR · Attendance · Statutory Payroll</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
            One ledger for every payslip, leave request, and clock-in.
          </h1>
          <p className="mt-5 max-w-lg text-[16.5px] leading-relaxed text-ink-soft">
            NexusPay HR brings core HR records, attendance, leave and Sri
            Lankan statutory payroll — EPF, ETF and APIT — into a single
            dashboard, with same-day bank disbursement your team can trust.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" variant="stamp" onClick={() => openModal()} className="group">
              Start 14-Day Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => openModal()}>
              <CalendarClock className="h-4 w-4" />
              Book a Demo
            </Button>
          </div>
          <p className="mt-3 text-[13px] text-ink-soft">
            No card required · Set up payroll in under a day
          </p>

          {/* Localized trust bar */}
          <div className="mt-10 border-t border-paper-line pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Statutory compliance, built in
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="stamp-badge h-14 w-14 flex-col text-center animate-stamp-in"
                >
                  <span className="font-display text-[13px] font-bold leading-none">
                    {badge.label}
                  </span>
                </div>
              ))}
              <div className="ml-1 flex flex-wrap items-center gap-x-3 gap-y-1 border-l border-paper-line pl-4 text-[12.5px] text-ink-soft">
                <span className="font-medium text-ink">Disbursement-ready for:</span>
                {BANKS.map((bank) => (
                  <span key={bank}>{bank}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-lg bg-brand/5 blur-2xl" />
          <div className="rounded-lg border border-paper-line bg-white p-2 shadow-xl">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
