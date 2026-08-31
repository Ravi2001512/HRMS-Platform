export function DashboardPreview() {
  return (
    <svg
      viewBox="0 0 560 400"
      className="h-auto w-full"
      role="img"
      aria-label="Preview of the NexusPay HR web dashboard showing headcount, attendance and payroll run status"
    >
      <rect x="0" y="0" width="560" height="400" rx="14" fill="#FFFFFF" stroke="#DCD5C4" />
      {/* window chrome */}
      <rect x="0" y="0" width="560" height="34" rx="14" fill="#F2EEE3" />
      <circle cx="20" cy="17" r="4.5" fill="#C77D2E" />
      <circle cx="36" cy="17" r="4.5" fill="#0F6E5C" opacity="0.6" />
      <circle cx="52" cy="17" r="4.5" fill="#2B4C7E" opacity="0.5" />
      <rect x="220" y="10" width="120" height="14" rx="7" fill="#DCD5C4" />

      {/* sidebar */}
      <rect x="0" y="34" width="130" height="366" fill="#0F6E5C" />
      {["Overview", "People", "Attendance", "Leave", "Payroll", "Reports"].map((label, i) => (
        <g key={label}>
          <rect
            x="16"
            y={62 + i * 40}
            width="98"
            height="26"
            rx="6"
            fill={i === 4 ? "#C77D2E" : "rgba(255,255,255,0.08)"}
          />
          <text
            x="26"
            y={62 + i * 40 + 17}
            fontSize="10.5"
            fontFamily="Manrope, sans-serif"
            fill={i === 4 ? "#FAF8F3" : "#E4F0EC"}
            fontWeight={i === 4 ? 700 : 500}
          >
            {label}
          </text>
        </g>
      ))}

      {/* main content */}
      <text x="150" y="66" fontSize="15" fontFamily="Fraunces, serif" fontWeight={600} fill="#1B2B26">
        August payroll run
      </text>
      <text x="150" y="84" fontSize="10.5" fontFamily="Manrope, sans-serif" fill="#4B5A54">
        128 employees · EPF, ETF & APIT calculated automatically
      </text>

      {/* stat cards */}
      {[
        { x: 150, label: "Headcount", value: "128", accent: "#0F6E5C" },
        { x: 285, label: "On leave today", value: "6", accent: "#C77D2E" },
        { x: 420, label: "Payroll ready", value: "97%", accent: "#2B4C7E" },
      ].map((card) => (
        <g key={card.label}>
          <rect x={card.x} y={100} width={122} height={70} rx="8" fill="#FAF8F3" stroke="#DCD5C4" />
          <text x={card.x + 14} y={126} fontSize="9.5" fontFamily="Manrope, sans-serif" fill="#4B5A54">
            {card.label}
          </text>
          <text
            x={card.x + 14}
            y={152}
            fontSize="20"
            fontFamily="Fraunces, serif"
            fontWeight={700}
            fill={card.accent}
          >
            {card.value}
          </text>
        </g>
      ))}

      {/* attendance bars */}
      <text x="150" y="196" fontSize="10.5" fontFamily="Manrope, sans-serif" fontWeight={700} fill="#1B2B26">
        Weekly GPS attendance
      </text>
      {[62, 80, 70, 88, 76, 40, 18].map((h, i) => (
        <rect
          key={i}
          x={150 + i * 40}
          y={296 - h}
          width="22"
          height={h}
          rx="3"
          fill={i < 5 ? "#0F6E5C" : "#DCD5C4"}
        />
      ))}
      <line x1="150" y1="298" x2="430" y2="298" stroke="#DCD5C4" />

      {/* payroll ledger rows */}
      <text x="150" y="326" fontSize="10.5" fontFamily="Manrope, sans-serif" fontWeight={700} fill="#1B2B26">
        Bank disbursement queue
      </text>
      {[
        ["Commercial Bank", "LKR 4,820,000", "#0F6E5C"],
        ["Sampath Bank", "LKR 1,910,500", "#2B4C7E"],
      ].map(([bank, amount, color], i) => (
        <g key={bank}>
          <rect x="150" y={336 + i * 26} width="280" height="20" rx="4" fill="#FAF8F3" stroke="#DCD5C4" />
          <circle cx={164} cy={336 + i * 26 + 10} r="4" fill={color as string} />
          <text x="176" y={336 + i * 26 + 13.5} fontSize="9.5" fontFamily="Manrope, sans-serif" fill="#1B2B26">
            {bank}
          </text>
          <text
            x="422"
            y={336 + i * 26 + 13.5}
            fontSize="9.5"
            fontFamily="IBM Plex Mono, monospace"
            textAnchor="end"
            fill="#1B2B26"
          >
            {amount}
          </text>
        </g>
      ))}
    </svg>
  );
}
