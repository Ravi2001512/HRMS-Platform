import { Landmark, ShieldCheck, FileLock2 } from "lucide-react";

const CONTRIBUTIONS = [
  {
    code: "EPF",
    rate: "8% + 12%",
    desc: "Employee and employer contributions, split and filed automatically.",
  },
  {
    code: "ETF",
    rate: "3%",
    desc: "Employer contribution calculated and reported each cycle.",
  },
  {
    code: "APIT",
    rate: "As per IRD tables",
    desc: "Tax withheld using the current Inland Revenue tax tables.",
  },
];

const BANKS = ["Commercial Bank", "Sampath Bank", "HNB", "BOC", "NDB"];

export function PayrollCompliance() {
  return (
    <section
      id="payroll"
      className="border-b border-paper-line bg-white py-16 lg:py-24"
    >
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">
            Built for Sri Lankan statutory payroll
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Compliance isn&rsquo;t a plugin here — it&rsquo;s the default
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Every payroll cycle applies current EPF, ETF and APIT rules without
            spreadsheets or manual lookups, then disburses net pay straight into
            employee bank accounts.
          </p>

          <div className="mt-8 space-y-4">
            {CONTRIBUTIONS.map((c) => (
              <div
                key={c.code}
                className="flex items-center gap-4 rounded-md border border-paper-line bg-paper p-4"
              >
                <span className="stamp-badge h-12 w-12 flex-none text-[11px] font-bold">
                  {c.code}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">
                    {c.code} · {c.rate}
                  </p>
                  <p className="text-[13px] text-ink-soft">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-paper-line bg-paper p-6 sm:p-8">
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
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {BANKS.map((bank) => (
              <div
                key={bank}
                className="flex items-center justify-center rounded-md border border-paper-line bg-white px-3 py-4 text-center text-[12.5px] font-semibold text-ink"
              >
                {bank}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-md bg-seal-light p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-seal" />
            <p className="text-[13px] text-ink-soft">
              Statutory reports are generated in the formats EPF and ETF filings
              expect, ready to submit each month.
            </p>
          </div>
          <div className="mt-3 flex items-start gap-3 rounded-md bg-brand-light p-4">
            <FileLock2 className="mt-0.5 h-5 w-5 flex-none text-brand" />
            <p className="text-[13px] text-ink-soft">
              Payslips are issued as password-protected PDFs, viewable in the
              mobile app or by password.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
