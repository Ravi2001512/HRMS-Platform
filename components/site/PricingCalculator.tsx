"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { formatLKR } from "@/lib/utils";
import { useTrialModal } from "./TrialModalContext";

const PLANS = [
  {
    key: "starter",
    name: "Starter Plan",
    perUserMin: 200,
    perUserMax: 300,
    desc: "Core HR, attendance and leave for growing teams.",
  },
  {
    key: "growth",
    name: "Growth Plan",
    perUserMin: 350,
    perUserMax: 500,
    desc: "Everything in Starter, plus statutory payroll and disbursement.",
  },
] as const;

export function PricingCalculator() {
  const [headcount, setHeadcount] = React.useState(25);
  const [annual, setAnnual] = React.useState(false);
  const { openModal } = useTrialModal();

  const ANNUAL_DISCOUNT = 0.15;

  return (
    <section
      id="pricing"
      className="border-b border-paper-line bg-paper py-16 lg:py-24"
    >
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Passbook pricing</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            See your monthly total, entered like a ledger
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            Move the slider to your headcount. Every line updates like a real
            passbook entry — no hidden line items.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {/* Controls */}
          <div className="rounded-t-lg border border-b-0 border-paper-line bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <Label htmlFor="headcount-slider">Employee headcount</Label>
              <span className="font-display text-2xl font-bold text-brand">
                {headcount}
                {headcount >= 200 ? "+" : ""}
              </span>
            </div>
            <div className="mt-4">
              <Slider
                id="headcount-slider"
                min={5}
                max={200}
                step={1}
                value={[headcount]}
                onValueChange={([v]) => setHeadcount(v)}
                aria-label="Employee headcount"
              />
              <div className="mt-2 flex justify-between text-[11px] text-ink-soft">
                <span>5</span>
                <span>200+</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-paper-line pt-5">
              <div>
                <p className="text-[14px] font-semibold text-ink">
                  Bill annually
                </p>
                <p className="text-[12.5px] text-ink-soft">
                  Save 15% versus monthly billing
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[12.5px] text-ink-soft">Monthly</span>
                <Switch
                  checked={annual}
                  onCheckedChange={setAnnual}
                  aria-label="Toggle annual billing"
                />
                <span className="text-[12.5px] text-ink-soft">Annual</span>
              </div>
            </div>
          </div>

          {/* Ledger */}
          <div className="rounded-b-lg border border-paper-line bg-white bg-ledger p-6 sm:p-8">
            {PLANS.map((plan) => {
              const lowMonthly = headcount * plan.perUserMin;
              const highMonthly = headcount * plan.perUserMax;
              const discount = annual ? 1 - ANNUAL_DISCOUNT : 1;
              const low = Math.round((lowMonthly * discount) / 5) * 5;
              const high = Math.round((highMonthly * discount) / 5) * 5;

              return (
                <div
                  key={plan.key}
                  className="flex items-start justify-between gap-4 border-b border-paper-line/80 py-4 last:border-b-0"
                >
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink">
                      {plan.name}
                    </p>
                    <p className="text-[12.5px] text-ink-soft">{plan.desc}</p>
                    <p className="mt-1 font-mono text-[11px] text-ink-soft">
                      LKR {plan.perUserMin}–{plan.perUserMax} / user / mo
                    </p>
                  </div>
                  <div className="flex-none text-right">
                    <p className="font-mono text-lg font-semibold text-ink">
                      {formatLKR(low)} – {formatLKR(high)}
                    </p>
                    <p className="text-[11px] text-ink-soft">
                      per {annual ? "month, billed annually" : "month"}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-[12.5px] text-ink-soft">
                Prices are indicative for {headcount} employee
                {headcount === 1 ? "" : "s"}. Your trial has no card required.
              </p>
              <Button variant="stamp" onClick={() => openModal(headcount)}>
                Start 14-Day Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
