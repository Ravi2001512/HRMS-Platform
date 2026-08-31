"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { formatLKR } from "@/lib/utils";
import { useTrialModal } from "./TrialModalContext";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    key: "starter",
    name: "Starter Plan",
    perUserMin: 200,
    perUserMax: 300,
    desc: "Core HR, attendance and leave for growing teams.",
    features: [
      "Employee profiles & documents",
      "GPS attendance tracking",
      "Leave management",
      "Mobile ESS app",
    ],
    recommended: false,
  },
  {
    key: "growth",
    name: "Growth Plan",
    perUserMin: 350,
    perUserMax: 500,
    desc: "Everything in Starter, plus statutory payroll and disbursement.",
    features: [
      "Everything in Starter",
      "EPF / ETF / APIT computation",
      "Bank disbursement (5 banks)",
      "Payslip PDF generation",
      "Statutory compliance reports",
    ],
    recommended: true,
  },
] as const;

const ANNUAL_DISCOUNT = 0.15;

function usePriceAnimation(value: number) {
  const [displayed, setDisplayed] = React.useState(value);
  const [animKey, setAnimKey] = React.useState(0);

  React.useEffect(() => {
    setAnimKey((k) => k + 1);
    const t = setTimeout(() => setDisplayed(value), 50);
    return () => clearTimeout(t);
  }, [value]);

  return { displayed, animKey };
}

export function PricingCalculator() {
  const [headcount, setHeadcount] = React.useState(25);
  const [annual, setAnnual] = React.useState(false);
  const { openModal } = useTrialModal();

  const discount = annual ? 1 - ANNUAL_DISCOUNT : 1;

  return (
    <section
      id="pricing"
      className="border-b border-paper-line bg-paper py-16 lg:py-24"
    >
      <div className="container">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Passbook pricing</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            See your monthly total, entered like a ledger
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            Move the slider to your headcount. Prices update instantly — no hidden line items.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 max-w-3xl" rootMargin="0px 0px -40px 0px">
          {/* Slider controls */}
          <div className="rounded-t-xl border border-b-0 border-paper-line bg-white px-6 py-7 sm:px-8 shadow-card">
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor="headcount-slider" className="text-[15px] font-semibold text-ink">
                Employee headcount
              </Label>
              <span className="font-display text-3xl font-bold text-brand tabular-nums">
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
                <span>5 employees</span>
                <span>200+ employees</span>
              </div>
            </div>

            {/* Annual toggle */}
            <div className="mt-6 flex items-center justify-between rounded-lg border border-paper-line bg-paper px-4 py-3">
              <div>
                <p className="text-[14px] font-semibold text-ink">Bill annually</p>
                <p className="text-[12px] text-ink-soft">
                  {annual
                    ? `You save ${Math.round(
                        ANNUAL_DISCOUNT *
                          headcount *
                          ((PLANS[0].perUserMin + PLANS[1].perUserMax) / 2) *
                          12
                      ).toLocaleString("en-LK")} LKR/year`
                    : "Save 15% versus monthly billing"}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[12px] text-ink-soft">Monthly</span>
                <Switch
                  checked={annual}
                  onCheckedChange={setAnnual}
                  aria-label="Toggle annual billing"
                />
                <span className={cn("text-[12px] font-semibold", annual ? "text-brand" : "text-ink-soft")}>
                  Annual {annual && "✓"}
                </span>
              </div>
            </div>
          </div>

          {/* Plan cards */}
          <div className="grid gap-0 rounded-b-xl border border-paper-line bg-white sm:grid-cols-2 overflow-hidden shadow-card">
            {PLANS.map((plan) => {
              const lowMonthly = headcount * plan.perUserMin;
              const highMonthly = headcount * plan.perUserMax;
              const low = Math.round((lowMonthly * discount) / 5) * 5;
              const high = Math.round((highMonthly * discount) / 5) * 5;

              return (
                <PlanCard
                  key={plan.key}
                  plan={plan}
                  low={low}
                  high={high}
                  annual={annual}
                  headcount={headcount}
                  onCta={() => openModal(headcount)}
                />
              );
            })}
          </div>

          <p className="mt-4 text-center text-[12px] text-ink-soft">
            All prices are estimates for {headcount} employee{headcount !== 1 ? "s" : ""}.
            Your 14-day trial requires no credit card.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  low,
  high,
  annual,
  headcount,
  onCta,
}: {
  plan: typeof PLANS[number];
  low: number;
  high: number;
  annual: boolean;
  headcount: number;
  onCta: () => void;
}) {
  const { displayed: dispLow, animKey: keyLow } = usePriceAnimation(low);
  const { displayed: dispHigh, animKey: keyHigh } = usePriceAnimation(high);

  return (
    <div
      className={cn(
        "relative flex flex-col gap-5 p-6 sm:p-7",
        plan.recommended
          ? "plan-recommended bg-paper"
          : "border-r border-paper-line bg-white"
      )}
    >


      {/* Plan header */}
      <div className="mt-2">
        <p className="font-display text-[16px] font-semibold text-ink">{plan.name}</p>
        <p className="mt-1 text-[12.5px] text-ink-soft">{plan.desc}</p>
      </div>

      {/* Price */}
      <div>
        <p
          key={`${keyLow}-${keyHigh}`}
          className="font-mono text-[22px] font-bold text-ink tabular-nums animate-count-up"
        >
          {formatLKR(dispLow)} – {formatLKR(dispHigh)}
        </p>
        <p className="mt-0.5 text-[11.5px] text-ink-soft">
          per {annual ? "month, billed annually" : "month"} ·{" "}
          <span className="font-mono">
            LKR {plan.perUserMin}–{plan.perUserMax}
          </span>{" "}
          / user
        </p>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[13px] text-ink-soft">
            <Check className="mt-0.5 h-4 w-4 flex-none text-brand" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.recommended ? "stamp" : "outline"}
        className={cn("w-full", plan.recommended && "shadow-stamp/20 shadow-sm")}
        onClick={onCta}
      >
        Start 14-Day Free Trial
      </Button>
    </div>
  );
}
