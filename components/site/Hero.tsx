"use client";

import { ArrowRight, CalendarClock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
import { useTrialModal } from "./TrialModalContext";
import { cn } from "@/lib/utils";

const TRUST_BADGES = [
  { label: "EPF", sub: "8% + 12%" },
  { label: "ETF", sub: "3% employer" },
  { label: "APIT", sub: "IRD tables" },
];

const BANKS = ["Commercial Bank", "Sampath Bank", "HNB", "BOC", "NDB"];

const SOCIAL_PROOF = [
  { icon: Users, text: "80+ Sri Lankan businesses" },
  { icon: Star, text: "Set up in under a day" },
];

export function Hero() {
  const { openModal } = useTrialModal();

  return (
    <section id="top" className="relative overflow-hidden border-b border-paper-line bg-paper">
      {/* Gradient background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand opacity-[0.06] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-[350px] w-[350px] rounded-full bg-seal opacity-[0.07] blur-[70px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[250px] w-[350px] rounded-full bg-stamp opacity-[0.05] blur-[70px]"
      />
      {/* Ledger background texture */}
      <div className="pointer-events-none absolute inset-0 bg-ledger opacity-30" />

      <div className="container relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        {/* Left: copy */}
        <div>
          <span className="eyebrow animate-fade-in" style={{ animationDelay: "0ms" }}>
            HR · Attendance · Statutory Payroll
          </span>

          <h1
            className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.07] text-ink sm:text-5xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            One ledger for every payslip,{" "}
            <span className="text-gradient-brand">leave request,</span>{" "}
            and clock-in.
          </h1>

          <p
            className="mt-5 max-w-lg text-[16.5px] leading-relaxed text-ink-soft animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            NexusPay HR brings core HR records, attendance, leave and Sri Lankan
            statutory payroll — EPF, ETF and APIT — into a single dashboard, with
            same-day bank disbursement your team can trust.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button
              size="lg"
              variant="stamp"
              onClick={() => openModal()}
              className="group shadow-stamp shadow-stamp/20 hover:shadow-stamp/35 transition-shadow"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => openModal()}>
              <CalendarClock className="h-4 w-4" />
              Book a Demo
            </Button>
          </div>

          <p
            className="mt-3 text-[13px] text-ink-soft animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            No card required · Set up payroll in under a day
          </p>

          {/* Social proof pills */}
          <div
            className="mt-5 flex flex-wrap items-center gap-2 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {SOCIAL_PROOF.map((sp) => (
              <span
                key={sp.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-paper-line bg-white/70 px-3 py-1 text-[12px] font-medium text-ink-soft shadow-card"
              >
                <sp.icon className="h-3.5 w-3.5 text-brand" />
                {sp.text}
              </span>
            ))}
          </div>

          {/* Localized trust bar */}
          <div
            className="mt-8 border-t border-paper-line pt-6 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Statutory compliance, built in
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {TRUST_BADGES.map((badge, i) => (
                <div
                  key={badge.label}
                  className={cn(
                    "stamp-badge flex h-14 w-14 flex-col items-center justify-center text-center animate-stamp-in"
                  )}
                  style={{ animationDelay: `${400 + i * 80}ms` }}
                >
                  <span className="font-display text-[12px] font-bold leading-none">
                    {badge.label}
                  </span>
                  <span className="mt-0.5 text-[8px] leading-none opacity-70">
                    {badge.sub}
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

        {/* Right: dashboard preview */}
        <div className="relative animate-slide-in-right" style={{ animationDelay: "100ms" }}>
          {/* Glow behind card */}
          <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-brand opacity-[0.08] blur-3xl" />
          <div className="absolute -inset-2 -z-10 rounded-xl bg-brand opacity-[0.04] blur-xl" />
          {/* Card */}
          <div className="relative rounded-xl border border-paper-line bg-white p-2 shadow-elevated ring-1 ring-paper-line/50">
            <DashboardPreview />
            {/* Floating badge */}
            <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-lg border border-paper-line bg-white px-3 py-2 shadow-elevated animate-float">
              <span className="h-2.5 w-2.5 rounded-full bg-brand ring-2 ring-brand/20" />
              <span className="text-[12px] font-semibold text-ink">Payroll live</span>
            </div>
            {/* Bottom badge */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-lg border border-paper-line bg-white px-3 py-2 shadow-elevated animate-float" style={{ animationDelay: "2s" }}>
              <span className="font-mono text-[12px] font-semibold text-brand">128</span>
              <span className="text-[12px] text-ink-soft">employees synced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
