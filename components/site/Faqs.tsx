"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

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
  {
    q: "What Sri Lankan statutory leave types are pre-configured?",
    a: "Annual leave, casual leave, medical leave and public holidays are pre-configured per the Shop and Office Employees Act, Factories Ordinance and relevant labour statutes.",
  },
];

export function Faqs() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faqs" className="bg-paper py-16 lg:py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Questions, answered</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            Everything you need to know before starting your trial.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-10 max-w-2xl" rootMargin="0px 0px -40px 0px">
          <div className="divide-y divide-paper-line overflow-hidden rounded-xl border border-paper-line bg-white shadow-card">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className={cn("transition-colors", isOpen && "bg-brand-light/50")}>
                  <button
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                    id={`faq-btn-${i}`}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className={cn(
                        "text-[15px] font-semibold transition-colors",
                        isOpen ? "text-brand" : "text-ink"
                      )}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 flex-none items-center justify-center rounded-full transition-all duration-200",
                        isOpen ? "bg-brand text-paper" : "bg-paper-line/60 text-ink-soft"
                      )}
                    >
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>

                  {/* Smooth animated answer panel */}
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[14px] leading-relaxed text-ink-soft">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}