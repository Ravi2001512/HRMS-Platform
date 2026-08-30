"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTrialModal } from "./TrialModalContext";

type FormState = {
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber: string;
  headcount: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const FREE_EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.fullName.trim() || form.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.workEmail)) {
    errors.workEmail = "Enter a valid email address.";
  } else {
    const domain = form.workEmail.split("@")[1]?.toLowerCase();
    if (domain && FREE_EMAIL_DOMAINS.includes(domain)) {
      errors.workEmail = "Please use your work email address.";
    }
  }

  if (!form.companyName.trim()) {
    errors.companyName = "Enter your company name.";
  }

  const phonePattern = /^(?:\+94|0)?7\d{8}$/;
  if (!phonePattern.test(form.phoneNumber.replace(/[\s-]/g, ""))) {
    errors.phoneNumber = "Enter a valid Sri Lankan mobile number.";
  }

  const headcountNum = Number(form.headcount);
  if (!form.headcount || Number.isNaN(headcountNum) || headcountNum < 1) {
    errors.headcount = "Enter your employee headcount.";
  }

  return errors;
}

export function TrialModal() {
  const { open, headcount, closeModal } = useTrialModal();
  const [form, setForm] = React.useState<FormState>({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    headcount: String(headcount ?? ""),
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  React.useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, headcount: String(headcount ?? f.headcount) }));
      setStatus("idle");
      setErrors({});
    }
  }, [open, headcount]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/trial-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          workEmail: form.workEmail.trim(),
          companyName: form.companyName.trim(),
          phoneNumber: form.phoneNumber.trim(),
          headcount: Number(form.headcount),
          source: "marketing-site-trial-modal",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && closeModal()}>
      <DialogContent>
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-brand" />
            <h3 className="font-display text-xl font-semibold text-ink">
              You&rsquo;re all set
            </h3>
            <p className="text-[14px] text-ink-soft">
              Check {form.workEmail} for your login details. Your 14-day
              trial has started — no card required.
            </p>
            <Button className="mt-2" onClick={closeModal}>
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Start your 14-day free trial</DialogTitle>
              <DialogDescription>
                Takes about 60 seconds. No credit card required.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6 pt-5" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  error={errors.fullName}
                  placeholder="Nadeesha Silva"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="workEmail">Work email</Label>
                <Input
                  id="workEmail"
                  type="email"
                  autoComplete="email"
                  value={form.workEmail}
                  onChange={(e) => updateField("workEmail", e.target.value)}
                  error={errors.workEmail}
                  placeholder="nadeesha@company.lk"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="companyName">Company name</Label>
                <Input
                  id="companyName"
                  autoComplete="organization"
                  value={form.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  error={errors.companyName}
                  placeholder="Acme Lanka (Pvt) Ltd"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phoneNumber">Phone number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    value={form.phoneNumber}
                    onChange={(e) => updateField("phoneNumber", e.target.value)}
                    error={errors.phoneNumber}
                    placeholder="077 123 4567"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="headcount">Headcount</Label>
                  <Input
                    id="headcount"
                    type="number"
                    min={1}
                    value={form.headcount}
                    onChange={(e) => updateField("headcount", e.target.value)}
                    error={errors.headcount}
                    placeholder="25"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="text-[13px] text-red-600">
                  Something went wrong sending your details. Please try again.
                </p>
              )}

              <Button type="submit" variant="stamp" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "submitting" ? "Setting up your trial…" : "Create my account"}
              </Button>
              <p className="text-center text-[11.5px] text-ink-soft">
                By continuing you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
