import { Users, ScanFace, Wallet, ArrowRight } from "lucide-react";

const STAGES = [
  {
    icon: Users,
    label: "Core HR",
    desc: "Employee records, org chart, documents and onboarding — the single source of truth for every hire.",
  },
  {
    icon: ScanFace,
    label: "Workforce Tracking",
    desc: "GPS attendance, shift rosters and leave balances, reconciled automatically against policy.",
  },
  {
    icon: Wallet,
    label: "Statutory Payroll",
    desc: "EPF, ETF and APIT computed each cycle, then disbursed straight to local bank accounts.",
  },
];

export function CategoryTaxonomy() {
  return (
    <section className="border-b border-paper-line bg-white py-16">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">The platform, end to end</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            From employee record to bank credit, in one ledger
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {STAGES.map((stage, i) => (
            <div key={stage.label} className="contents">
              <div className="rounded-lg border border-paper-line bg-paper p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-light text-brand">
                  <stage.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {stage.label}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {stage.desc}
                </p>
              </div>
              {i < STAGES.length - 1 && (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowRight className="h-5 w-5 text-paper-line" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
