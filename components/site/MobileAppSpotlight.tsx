import { MapPin, CalendarCheck2, Inbox, FileLock2 } from "lucide-react";

const CAPABILITIES = [
  {
    icon: MapPin,
    title: "1-tap GPS attendance",
    desc: "Employees check in and out from the app; location is verified against the assigned worksite automatically.",
  },
  {
    icon: CalendarCheck2,
    title: "Real-time leave balances",
    desc: "Annual, casual and medical leave balances update the moment a request is approved — no spreadsheets to reconcile.",
  },
  {
    icon: Inbox,
    title: "Manager approval feed",
    desc: "Leave and overtime requests land in a single feed managers can approve or query from their phone.",
  },
  {
    icon: FileLock2,
    title: "Password-protected payslips",
    desc: "Payslips are issued as PDFs locked with the employee's NIC, viewable only inside the app or with the password.",
  },
];

export function MobileAppSpotlight() {
  return (
    <section
      id="mobile-app"
      className="border-b border-paper-line bg-white py-16 lg:py-24"
    >
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">Flutter ESS app · iOS & Android</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            HR that fits in an employee's pocket
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
            The NexusPay HR app puts attendance, leave and payslips directly in
            front of employees, so HR spends less time answering
            &ldquo;what&rsquo;s my balance&rdquo; and more time on the work that
            matters.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title}>
                <dt className="flex items-center gap-2.5 font-display text-[15px] font-semibold text-ink">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-seal-light text-seal">
                    <cap.icon className="h-4 w-4" />
                  </span>
                  {cap.title}
                </dt>
                <dd className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  {cap.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-2xl">
      <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="h-full w-full overflow-hidden rounded-[1.9rem] bg-paper">
        <div className="bg-brand px-4 pb-4 pt-6 text-paper">
          <p className="text-[10px] uppercase tracking-wide opacity-80">
            Good morning
          </p>
          <p className="font-display text-base font-semibold">Amaya Perera</p>
        </div>

        <div className="-mt-3 px-3">
          <div className="rounded-lg bg-white p-3 shadow-md">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
                <MapPin className="h-3.5 w-3.5 text-stamp" /> Office · Colombo
                03
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </div>
            <button className="mt-3 w-full rounded-md bg-stamp py-2.5 text-[12px] font-semibold text-white">
              Check in now
            </button>
          </div>
        </div>

        <div className="mt-3 px-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
            Leave balance
          </p>
          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
            {[
              ["Annual", "12"],
              ["Casual", "5"],
              ["Medical", "7"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="rounded-md border border-paper-line bg-white py-2 text-center"
              >
                <p className="font-display text-sm font-bold text-brand">
                  {val}
                </p>
                <p className="text-[8.5px] text-ink-soft">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 px-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
            Payslip · July 2026
          </p>
          <div className="mt-1.5 flex items-center justify-between rounded-md border border-paper-line bg-white px-3 py-2.5">
            <span className="flex items-center gap-1.5 text-[11px] text-ink">
              <FileLock2 className="h-3.5 w-3.5 text-seal" /> Locked PDF
            </span>
            <span className="text-[10px] font-mono text-ink-soft">
              ••••••••
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
