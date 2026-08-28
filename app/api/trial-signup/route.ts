import { NextResponse } from "next/server";

type TrialSignupPayload = {
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber: string;
  headcount: number;
  source?: string;
};

function isValidPayload(body: unknown): body is TrialSignupPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.fullName === "string" &&
    b.fullName.trim().length > 1 &&
    typeof b.workEmail === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.workEmail) &&
    typeof b.companyName === "string" &&
    b.companyName.trim().length > 0 &&
    typeof b.phoneNumber === "string" &&
    b.phoneNumber.trim().length > 0 &&
    typeof b.headcount === "number" &&
    b.headcount > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  // TODO: replace with real CRM / trial-provisioning integration
  // e.g. forward to HubSpot, Salesforce, or the internal signups service,
  // then trigger the account-provisioning workflow and welcome email.
  console.log("New trial signup lead:", body);

  return NextResponse.json({ ok: true }, { status: 201 });
}
