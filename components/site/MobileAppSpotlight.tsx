"use client";

import * as React from "react";
import { MapPin, CalendarCheck2, Inbox, FileLock2, CheckCircle2, Clock3 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const CAPABILITIES = [
  {
    icon: MapPin,
    title: "1-tap GPS attendance",
    desc: "Employees check in and out from the app; location is verified against the assigned worksite automatically.",
    color: "text-brand",
    bg: "bg-brand-light",
  },
  {
    icon: CalendarCheck2,
    title: "Real-time leave balances",
    desc: "Annual, casual and medical leave balances update the moment a request is approved — no spreadsheets to reconcile.",
    color: "text-seal",
    bg: "bg-seal-light",
  },
  {
    icon: Inbox,
    title: "Manager approval feed",
    desc: "Leave and overtime requests land in a single feed managers can approve or query from their phone.",
    color: "text-stamp",
    bg: "bg-stamp-light",
  },
  {
    icon: FileLock2,
    title: "Password-protected payslips",
    desc: "Payslips are issued as PDFs locked with the employee's NIC, viewable only inside the app or with the password.",
    color: "text-brand",
    bg: "bg-brand-light",
  },
];

export function MobileAppSpotlight() {
  return (
    <section
      id="mobile-app"
      className="border-b border-paper-line bg-white py-16 lg:py-24"
    >
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Copy — left on desktop */}
        <div className="order-2 lg:order-1">
          <ScrollReveal direction="left">
            <span className="eyebrow">Flutter ESS app · iOS & Android</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              HR that fits in an employee&apos;s pocket
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              The NexusPay HR app puts attendance, leave and payslips directly in
              front of employees, so HR spends less time answering &ldquo;what&apos;s my
              balance&rdquo; and more time on the work that matters.
            </p>
          </ScrollReveal>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {CAPABILITIES.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} direction="up">
                <div className="card-hover rounded-lg border border-paper-line bg-paper p-4 shadow-card">
                  <dt className="flex items-center gap-2.5 font-display text-[14px] font-semibold text-ink">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-md ${cap.bg} ${cap.color}`}>
                      <cap.icon className="h-4 w-4" />
                    </span>
                    {cap.title}
                  </dt>
                  <dd className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                    {cap.desc}
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>

          {/* App store badges */}
          <ScrollReveal delay={5} className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2.5 rounded-lg border border-ink/15 bg-ink px-4 py-2.5 text-paper transition-all hover:bg-ink/85"
              aria-label="Download on the App Store"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] font-medium leading-none opacity-70">Download on the</p>
                <p className="text-[13px] font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2.5 rounded-lg border border-ink/15 bg-ink px-4 py-2.5 text-paper transition-all hover:bg-ink/85"
              aria-label="Get it on Google Play"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] font-medium leading-none opacity-70">Get it on</p>
                <p className="text-[13px] font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* Phone mockup — right on desktop */}
        <div className="order-1 flex justify-center lg:order-2">
          <ScrollReveal direction="right" className="relative">
            {/* Background glow */}
            <div className="absolute -inset-8 -z-10 rounded-full bg-brand opacity-[0.08] blur-3xl" />
            <PhoneMockup />
            {/* Platform badges */}
            <div className="absolute -right-4 top-12 flex items-center gap-1.5 rounded-lg border border-paper-line bg-white px-2.5 py-1.5 shadow-elevated">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold text-ink">Flutter · iOS & Android</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  const [checked, setChecked] = React.useState(false);
  const [pulseVisible, setPulseVisible] = React.useState(true);

  const handleCheckIn = () => {
    setChecked(true);
    setPulseVisible(false);
  };

  return (
    <div className="relative h-[560px] w-[272px] rounded-[2.8rem] border-[10px] border-ink bg-ink shadow-2xl">
      {/* Dynamic island notch */}
      <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-ink" />

      {/* Screen — flex column so nav is always in-frame */}
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.1rem] bg-[#F5F3EE]">

        {/* ── Fixed header (non-scrollable) ── */}
        <div className="flex-none">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-brand px-4 pt-8 pb-1">
            <span className="text-[10px] font-semibold text-paper/70">09:24</span>
            <span className="text-[9px] text-paper/60">●●●</span>
          </div>
          {/* Brand header */}
          <div className="bg-brand px-4 pb-4 pt-1 text-paper">
            <p className="text-[10px] uppercase tracking-wider opacity-70">Good morning</p>
            <p className="font-display text-[16px] font-semibold">Amaya Perera</p>
            <p className="mt-0.5 text-[9.5px] opacity-60">HR Manager · Colombo 03</p>
          </div>
          {/* Wave separator */}
          <div className="-mt-1 overflow-hidden">
            <svg viewBox="0 0 272 18" className="w-full" preserveAspectRatio="none">
              <path d="M0,0 Q68,18 136,9 Q204,0 272,12 L272,0 Z" fill="#0F6E5C" />
            </svg>
          </div>
        </div>

        {/* ── Scrollable content ── */}
        <div className="flex-1 overflow-y-auto pb-14">
          {/* GPS Check-in card */}
          <div className="mx-3 mt-1 rounded-xl bg-white p-3 shadow-elevated">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
                <MapPin className="h-3.5 w-3.5 text-stamp" />
                Office · Colombo 03
              </span>
              {pulseVisible && (
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
                </span>
              )}
            </div>
            <button
              onClick={handleCheckIn}
              className={`mt-2 w-full rounded-lg py-2 text-[12px] font-semibold text-white transition-all duration-300 ${
                checked
                  ? "bg-brand"
                  : "bg-stamp hover:bg-stamp/90 active:scale-95"
              }`}
            >
              {checked ? (
                <span className="flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Checked in · 09:24
                </span>
              ) : (
                "Check in now"
              )}
            </button>
          </div>

          {/* Leave balances */}
          <div className="mx-3 mt-2.5">
            <p className="text-[9.5px] font-semibold uppercase tracking-wider text-ink-soft">
              Leave balance
            </p>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              {[
                { label: "Annual", val: "12", color: "#0F6E5C" },
                { label: "Casual", val: "5", color: "#2B4C7E" },
                { label: "Medical", val: "7", color: "#C77D2E" },
              ].map(({ label, val, color }) => (
                <div
                  key={label}
                  className="rounded-lg border border-paper-line bg-white py-2 text-center shadow-card"
                >
                  <p className="font-display text-[14px] font-bold" style={{ color }}>
                    {val}
                  </p>
                  <p className="text-[8px] text-ink-soft">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Manager approval feed */}
          <div className="mx-3 mt-2.5">
            <p className="text-[9.5px] font-semibold uppercase tracking-wider text-ink-soft">
              Pending approvals
            </p>
            <div className="mt-1.5 space-y-1.5">
              {[
                { name: "Dinesh F.", type: "Annual leave · 3 days", icon: CalendarCheck2, color: "#2B4C7E" },
                { name: "Ruwan J.", type: "Overtime · Aug 30", icon: Clock3, color: "#C77D2E" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-lg border border-paper-line bg-white px-2.5 py-2 shadow-card"
                >
                  <span className="flex items-center gap-1.5 text-[10px] text-ink">
                    <item.icon className="h-3 w-3 flex-none" style={{ color: item.color }} />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-ink-soft">{item.type}</p>
                    </div>
                  </span>
                  <span className="rounded-full bg-stamp-light px-2 py-0.5 text-[8.5px] font-semibold text-stamp">
                    Review
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payslip row */}
          <div className="mx-3 mt-2.5">
            <p className="text-[9.5px] font-semibold uppercase tracking-wider text-ink-soft">
              Payslip · July 2026
            </p>
            <div className="mt-1.5 flex items-center justify-between rounded-lg border border-paper-line bg-white px-3 py-2.5 shadow-card">
              <span className="flex items-center gap-1.5 text-[11px] text-ink">
                <FileLock2 className="h-3.5 w-3.5 text-seal" /> Password-locked PDF
              </span>
              <span className="font-mono text-[10px] text-ink-soft">••••••••</span>
            </div>
          </div>
        </div>

        {/* ── Bottom nav — always in-frame at base of flex column ── */}
        <div className="flex-none flex items-center justify-around border-t border-paper-line bg-white px-2 py-2">
          {[
            { icon: "🏠", label: "Home" },
            { icon: "📅", label: "Leave" },
            { icon: "💰", label: "Pay" },
            { icon: "👤", label: "Profile" },
          ].map((nav) => (
            <button key={nav.label} className="flex flex-col items-center gap-0.5 px-2">
              <span className="text-[14px] leading-none">{nav.icon}</span>
              <span className="text-[7.5px] text-ink-soft">{nav.label}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
