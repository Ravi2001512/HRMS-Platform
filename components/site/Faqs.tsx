import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Does NexusPay HR calculate EPF, ETF and APIT automatically?",
    a: "Yes. Every payroll run calculates the 8%/12% EPF split, the 3% ETF employer contribution, and APIT withholding using the current Inland Revenue tax tables, without manual spreadsheets.",
  },
  {
    q: "Can we disburse salaries directly to employee bank accounts?",
    a: "Yes. NexusPay HR generates disbursement files formatted for Commercial Bank, Sampath Bank, HNB, BOC and NDB, so payroll can be paid out in a single batch.",
  },
  {
    q: "Do employees need to download a separate app?",
    a: "Employees use the NexusPay HR mobile app (iOS and Android) for attendance check-in, leave requests and payslips. HR and finance teams use the web dashboard.",
  },
  {
    q: "Is a credit card required to start the free trial?",
    a: "No. The 14-day free trial includes full access to Core HR, Attendance, Leave and Payroll, and no payment details are required to begin.",
  },
  {
    q: "How is our payroll and employee data secured?",
    a: "Data is encrypted in transit and at rest, payslips are password-protected by default, and access follows role-based permissions across HR, managers and employees.",
  },
];

export function Faqs() {
  return (
    <section id="faqs" className="bg-paper py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Questions, answered</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-paper-line rounded-lg border border-paper-line bg-white">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group px-6 py-1 open:pb-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold text-ink">
                {faq.q}
                <Plus className="h-4 w-4 flex-none text-ink-soft transition-transform group-open:rotate-45" />
              </summary>
              <p className="text-[14px] leading-relaxed text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}