"use client";

import { Check, Users, ScanFace, CalendarDays, Landmark } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Explore the platform</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Four modules, one shared record
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            Switch tabs to see how each part of the day-to-day — from a new
            hire to a disbursed payslip — flows through NexusPay HR.
          </p>
        </div>

        <Tabs defaultValue="core-hr" className="mt-10 flex flex-col items-center">
          <TabsList>
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="w-full">
              <div className="grid gap-10 rounded-lg border border-paper-line bg-white p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {tab.heading}
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {tab.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-light text-brand">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <TabPreview activeTab={tab.value} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function TabPreview({ activeTab }: { activeTab: string }) {
  const rows: Record<string, { left: string; right: string; accent: string }[]> = {
    "core-hr": [
      { left: "Amaya Perera", right: "Product · Colombo", accent: "#0F6E5C" },
      { left: "Dinesh Fernando", right: "Finance · Kandy", accent: "#2B4C7E" },
      { left: "Nadeesha Silva", right: "Ops · Galle", accent: "#C77D2E" },
    ],
    attendance: [
      { left: "Check-in · 8:52 AM", right: "GPS verified · Office", accent: "#0F6E5C" },
      { left: "Check-in · 9:14 AM", right: "Late · flagged", accent: "#C77D2E" },
      { left: "Check-out · 6:03 PM", right: "GPS verified · Site B", accent: "#2B4C7E" },
    ],
    leave: [
      { left: "Annual leave", right: "12 of 14 remaining", accent: "#0F6E5C" },
      { left: "Casual leave", right: "5 of 7 remaining", accent: "#2B4C7E" },
      { left: "Medical leave", right: "Pending approval", accent: "#C77D2E" },
    ],
    payroll: [
      { left: "EPF (employee, 8%)", right: "LKR 14,400", accent: "#0F6E5C" },
      { left: "EPF (employer, 12%)", right: "LKR 21,600", accent: "#2B4C7E" },
      { left: "APIT withheld", right: "LKR 9,250", accent: "#C77D2E" },
    ],
  };

  const data = rows[activeTab] ?? rows["core-hr"];

  return (
    <div className="rounded-md border border-paper-line bg-paper p-5">
      <div className="flex items-center justify-between border-b border-paper-line pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
          Live preview
        </span>
        <span className="h-2 w-2 rounded-full bg-brand" />
      </div>
      <div className="mt-3 space-y-2.5">
        {data.map((row) => (
          <div
            key={row.left}
            className="flex items-center justify-between rounded-sm bg-white px-3.5 py-3 text-[13px]"
          >
            <span className="flex items-center gap-2.5 font-medium text-ink">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: row.accent }} />
              {row.left}
            </span>
            <span className="font-mono text-ink-soft">{row.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
