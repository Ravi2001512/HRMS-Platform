"use client";

import * as React from "react";
import { Check, Users, ScanFace, CalendarDays, Landmark } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollReveal } from "./ScrollReveal";

const TABS = [
  {
    value: "core-hr",
    label: "Core HRIS",
    icon: Users,
    heading: "Every employee record, always current",
    bullets: [
      "Centralised employee profiles, contracts and documents",
      "Org chart that updates automatically as teams change",
      "Self-service onboarding with e-signature offer letters",
      "Custom fields for departments, cost centres and grades",
    ],
  },
  {
    value: "attendance",
    label: "Workforce Attendance",
    icon: ScanFace,
    heading: "Attendance that matches where people actually work",
    bullets: [
      "GPS-verified clock-in and clock-out from the mobile app",
      "Configurable shift rosters and geofenced worksites",
      "Automatic late, early-leave and overtime flags",
      "Attendance feeds straight into the payroll cycle",
    ],
  },
  {
    value: "leave",
    label: "Leave Management",
    icon: CalendarDays,
    heading: "Leave balances everyone can see and trust",
    bullets: [
      "Sri Lankan statutory leave types pre-configured",
      "Manager approvals from a single mobile inbox",
      "Real-time balance visibility for every employee",
      "Public holiday calendar synced across all locations",
    ],
  },
  {
    value: "payroll",
    label: "Statutory Payroll",
    icon: Landmark,
    heading: "Payroll that files itself correctly, every cycle",
    bullets: [
      "EPF (employee & employer), ETF and APIT calculated automatically",
      "One-click disbursement to Commercial Bank, Sampath, HNB, BOC & NDB",
      "Payslips issued as password-protected PDFs",
      "Audit-ready statutory reports for EPF/ETF filings",
    ],
  },
];

export function FeatureTabs() {
  return (
    <section id="features" className="border-b border-paper-line bg-paper py-16 lg:py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Explore the platform</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Four modules, one shared record
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            Switch tabs to see how each part of the day-to-day — from a new hire to
            a disbursed payslip — flows through NexusPay HR.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 w-full" rootMargin="0px 0px -40px 0px">
          <Tabs defaultValue="core-hr" className="flex flex-col items-center">
            <TabsList className="flex-wrap">
              {TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  <tab.icon className="h-4 w-4 flex-none" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {TABS.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="w-full mt-4">
                <div className="grid gap-10 rounded-xl border border-paper-line bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2 lg:items-center">
                  {/* Text */}
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {tab.heading}
                    </h3>
                    <ul className="mt-6 space-y-3.5">
                      {tab.bullets.map((bullet, i) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[14.5px] text-ink-soft"
                          style={{
                            animation: `fade-up 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms both`,
                          }}
                        >
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-light text-brand">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Preview */}
                  <TabPreview activeTab={tab.value} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── Tab preview panels ──────────────────────────────────────────────────── */

function TabPreview({ activeTab }: { activeTab: string }) {
  return (
    <div className="rounded-lg border border-paper-line bg-paper p-5 shadow-card">
      <div className="flex items-center justify-between border-b border-paper-line pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
          Live preview
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
          <span className="text-[10px] font-mono text-brand">LIVE</span>
        </span>
      </div>
      <div className="mt-4">
        {activeTab === "core-hr" && <CoreHrPreview />}
        {activeTab === "attendance" && <AttendancePreview />}
        {activeTab === "leave" && <LeavePreview />}
        {activeTab === "payroll" && <PayrollPreview />}
      </div>
    </div>
  );
}

const EMPLOYEES = [
  { initials: "AP", name: "Amaya Perera", role: "Product · Colombo", color: "#0F6E5C" },
  { initials: "DF", name: "Dinesh Fernando", role: "Finance · Kandy", color: "#2B4C7E" },
  { initials: "NS", name: "Nadeesha Silva", role: "Operations · Galle", color: "#C77D2E" },
  { initials: "RJ", name: "Ruwan Jayawardena", role: "Engineering · Colombo", color: "#0F6E5C" },
];

function CoreHrPreview() {
  return (
    <div className="space-y-2.5">
      {EMPLOYEES.map((emp) => (
        <div
          key={emp.name}
          className="card-hover flex items-center gap-3 rounded-md bg-white px-3.5 py-2.5 shadow-card"
        >
          <span
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{ backgroundColor: emp.color }}
          >
            {emp.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-ink truncate">{emp.name}</p>
            <p className="text-[11px] text-ink-soft truncate">{emp.role}</p>
          </div>
          <span className="flex-none rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-semibold text-brand">
            Active
          </span>
        </div>
      ))}
    </div>
  );
}

const ATTENDANCE_ROWS = [
  { name: "Amaya P.", time: "8:52 AM", status: "GPS · Office", ok: true },
  { name: "Dinesh F.", time: "9:14 AM", status: "Late — flagged", ok: false },
  { name: "Nadeesha S.", time: "8:43 AM", status: "GPS · Site B", ok: true },
];

function AttendancePreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-md bg-brand-light px-3.5 py-2.5">
        <span className="text-[12px] font-semibold text-brand">Today — Sep 1</span>
        <span className="text-[11px] font-mono text-brand">94 / 128 in</span>
      </div>
      {ATTENDANCE_ROWS.map((row) => (
        <div
          key={row.name}
          className="card-hover flex items-center justify-between rounded-md bg-white px-3.5 py-3 shadow-card"
        >
          <div>
            <p className="text-[13px] font-semibold text-ink">{row.name}</p>
            <p className="text-[11px] text-ink-soft">{row.status}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[12px] font-semibold text-ink">{row.time}</p>
            <span
              className={`mt-0.5 block rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                row.ok
                  ? "bg-brand-light text-brand"
                  : "bg-stamp-light text-stamp"
              }`}
            >
              {row.ok ? "Verified" : "Flagged"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const LEAVE_TYPES = [
  { label: "Annual", used: 2, total: 14, color: "#0F6E5C" },
  { label: "Casual", used: 2, total: 7, color: "#2B4C7E" },
  { label: "Medical", used: 1, total: 7, color: "#C77D2E" },
];

function LeavePreview() {
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
        Amaya Perera — balances
      </p>
      {LEAVE_TYPES.map((lt) => {
        const pct = ((lt.total - lt.used) / lt.total) * 100;
        return (
          <div key={lt.label} className="rounded-md bg-white p-3 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ink">{lt.label} leave</span>
              <span className="font-mono text-[12px] font-semibold" style={{ color: lt.color }}>
                {lt.total - lt.used} / {lt.total}
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper-line">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, backgroundColor: lt.color }}
              />
            </div>
            <p className="mt-1 text-[10.5px] text-ink-soft">{lt.used} days taken · {lt.total - lt.used} remaining</p>
          </div>
        );
      })}
      <div className="flex items-center justify-between rounded-md border border-stamp/30 bg-stamp-light px-3.5 py-2.5">
        <span className="text-[12px] font-semibold text-stamp">Medical leave request</span>
        <span className="rounded-full bg-stamp/10 px-2 py-0.5 text-[10px] font-semibold text-stamp">
          Pending
        </span>
      </div>
    </div>
  );
}

const PAYROLL_ROWS = [
  { label: "Basic salary", amount: "LKR 180,000", accent: "#1B2B26", bold: false },
  { label: "EPF — employee (8%)", amount: "LKR 14,400", accent: "#0F6E5C", bold: false },
  { label: "EPF — employer (12%)", amount: "LKR 21,600", accent: "#2B4C7E", bold: false },
  { label: "ETF — employer (3%)", amount: "LKR 5,400", accent: "#2B4C7E", bold: false },
  { label: "APIT withheld", amount: "LKR 9,250", accent: "#C77D2E", bold: false },
  { label: "Net payable", amount: "LKR 156,350", accent: "#0F6E5C", bold: true },
];

function PayrollPreview() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between rounded-md bg-brand px-3.5 py-2 text-paper">
        <span className="text-[12px] font-semibold">August 2026 payroll</span>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-mono">128 emp.</span>
      </div>
      {PAYROLL_ROWS.map((row) => (
        <div
          key={row.label}
          className={`flex items-center justify-between rounded-md px-3.5 py-2.5 ${
            row.bold ? "bg-brand-light ring-1 ring-brand/20" : "bg-white shadow-card"
          }`}
        >
          <span
            className="text-[12.5px]"
            style={{ color: row.bold ? "#0F6E5C" : "#4B5A54", fontWeight: row.bold ? 700 : 400 }}
          >
            {row.label}
          </span>
          <span
            className="font-mono text-[12.5px]"
            style={{ color: row.accent, fontWeight: row.bold ? 700 : 500 }}
          >
            {row.amount}
          </span>
        </div>
      ))}
    </div>
  );
}
