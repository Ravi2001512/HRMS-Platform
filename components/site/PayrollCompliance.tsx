import { Landmark, ShieldCheck, FileLock2, Building2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

const CONTRIBUTIONS = [
  {
    code: "EPF",
    rate: "8% + 12%",
    desc: "Employee and employer contributions, split and filed automatically.",
    color: "text-brand",
    bg: "bg-brand-light",
    border: "border-brand/20",
  },
  {
    code: "ETF",
    rate: "3%",
    desc: "Employer contribution calculated and reported each cycle.",
    color: "text-seal",
    bg: "bg-seal-light",
    border: "border-seal/20",
  },
  {
    code: "APIT",
    rate: "As per IRD tables",
    desc: "Tax withheld using the current Inland Revenue tax tables.",
    color: "text-stamp",
    bg: "bg-stamp-light",
    border: "border-stamp/20",
  },
];

const BANKS = [
  { name: "Commercial Bank", abbr: "COM" },
  { name: "Sampath Bank", abbr: "SAM" },
  { name: "HNB", abbr: "HNB" },
  { name: "BOC", abbr: "BOC" },
  { name: "NDB", abbr: "NDB" },
];

const BANK_COLORS = ["#0F6E5C", "#2B4C7E", "#C77D2E", "#0F6E5C", "#2B4C7E"];

export function PayrollCompliance() {
  return (
    <section
      id="payroll"
      className="border-b border-paper-line bg-white py-16 lg:py-24"
    >
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: statutory contributions */}
        <ScrollReveal direction="left">
          <span className="eyebrow">Built for Sri Lankan statutory payroll</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Compliance isn&rsquo;t a plugin here — it&rsquo;s the default
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Every payroll cycle applies current EPF, ETF and APIT rules without
            spreadsheets or manual lookups, then disburses net pay straight into
            employee bank accounts.
          </p>

          <div className="mt-8 space-y-3">
            {CONTRIBUTIONS.map((c, i) => (
              <div
                key={c.code}
                className={cn(
                  "card-hover flex items-center gap-4 rounded-lg border p-4 shadow-card",
                  c.bg,
                  c.border
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span
                  className={cn(
                    "stamp-badge h-12 w-12 flex-none text-[11px] font-bold",
                    c.color
                  )}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {c.code}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">
                    {c.code}{" "}
                    <span className={cn("font-mono text-[13px]", c.color)}>
                      {c.rate}
                    </span>
                  </p>
                  <p className="text-[13px] text-ink-soft">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: bank disbursement card */}
        <ScrollReveal direction="right">
          <div className="rounded-xl border border-paper-line bg-paper p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-2.5 text-ink">
              <Landmark className="h-5 w-5 text-brand" />
              <p className="font-display text-lg font-semibold">
                Local bank disbursement
              </p>
            </div>
            <p className="mt-2 text-[13.5px] text-ink-soft">
              Generate a disbursement batch formatted for your bank in one click —
              no manual file re-formatting between payroll and banking.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {BANKS.map((bank, i) => (
                <div
                  key={bank.name}
                  className="card-hover flex items-center gap-2 rounded-lg border border-paper-line bg-white px-3 py-3 shadow-card"
                >
                  <span
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-md text-[9px] font-bold text-white"
                    style={{ backgroundColor: BANK_COLORS[i] }}
                  >
                    {bank.abbr}
                  </span>
                  <span className="text-[12px] font-medium text-ink leading-tight">
                    {bank.name}
                  </span>
                </div>
              ))}
              <div className="card-hover flex items-center gap-2 rounded-lg border border-paper-line bg-white px-3 py-3 shadow-card">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-paper-line text-ink-soft">
                  <Building2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-[12px] text-ink-soft">+ more banks</span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-lg bg-seal-light p-4 ring-1 ring-seal/15">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-seal" />
                <p className="text-[13px] text-ink-soft">
                  Statutory reports generated in the formats EPF and ETF filings
                  expect — ready to submit each month.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-brand-light p-4 ring-1 ring-brand/15">
                <FileLock2 className="mt-0.5 h-5 w-5 flex-none text-brand" />
                <p className="text-[13px] text-ink-soft">
                  Payslips are issued as password-protected PDFs, viewable in the
                  mobile app or by NIC-based password.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
