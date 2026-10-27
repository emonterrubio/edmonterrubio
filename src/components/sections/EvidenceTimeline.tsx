// Unified evidence timeline for the EA Anti-Cheat project:
// one account's reports, detections, logins, notes, and enforcement on a single 30-day axis.
// Reports, logins, RP, and sanctions follow the prototype's test account; detections and notes are illustrative.

type Day = number; // days since Jul 12

const jul = (d: number): Day => d - 12;
const aug = (d: number): Day => d + 19;

const REPORTS: { day: Day; count: number; cheating: boolean }[] = [
  { day: jul(13), count: 1, cheating: false },
  { day: jul(17), count: 1, cheating: true },
  { day: jul(20), count: 1, cheating: true },
  { day: jul(22), count: 1, cheating: true },
  { day: jul(25), count: 1, cheating: false },
  { day: jul(28), count: 1, cheating: false },
  { day: jul(30), count: 1, cheating: true },
  { day: aug(1), count: 1, cheating: true },
  { day: aug(3), count: 1, cheating: true },
  { day: aug(5), count: 1, cheating: true },
  { day: aug(6), count: 1, cheating: true },
  { day: aug(7), count: 1, cheating: true },
  { day: aug(8), count: 1, cheating: false },
  { day: aug(10), count: 2, cheating: true },
];

const DETECTIONS: { day: Day; inHouse: boolean }[] = [
  { day: jul(21), inHouse: false },
  { day: aug(4), inHouse: false },
  { day: aug(6), inHouse: true },
  { day: aug(9), inHouse: true },
];

const LOGINS: { day: Day; geo: string }[] = [
  { day: aug(3), geo: "GB" },
  { day: aug(5), geo: "GB" },
  { day: aug(7), geo: "US" },
  { day: aug(8), geo: "JP" },
  { day: aug(9), geo: "JP" },
  { day: aug(10), geo: "JP" },
];

const NOTES: { day: Day; author: string }[] = [
  { day: aug(6), author: "AK" },
  { day: aug(9), author: "JR" },
];

// Sanction history: a permanent toxicity ban from Apr 11 that expired Jul 28, a system shadow ban on Aug 8,
// then a 7-day silent matchmaking timeout for cheating on Oct 23 (drawn past an axis break)
const PRIOR_BAN_END = jul(28);
const SHADOW_BAN = aug(8);

// RP by day, Jul 12 to Aug 10
const RP = [
  33480, 33500, 33510, 33505, 33540, 33590, 33620, 33610, 33660, 33700, 33720, 33760, 33790, 33800, 33850, 33880,
  33900, 33960, 33990, 34010, 34060, 34100, 34150, 34190, 34230, 34270, 34320, 34350, 34390, 34416,
];

const ROWS = [
  { name: "Ranked RP", detail: "Climbs to 34,416" },
  { name: "Reports", detail: "Received" },
  { name: "Detections", detail: "Vendor and in-house" },
  { name: "Logins", detail: "Geolocation" },
  { name: "Notes", detail: "Author and time" },
  { name: "Sanctions", detail: "Incl. silent bans" },
];

const TICKS = [
  { day: jul(12), label: "Jul 12" },
  { day: jul(19), label: "Jul 19" },
  { day: jul(26), label: "Jul 26" },
  { day: aug(2), label: "Aug 2" },
  { day: aug(9), label: "Aug 9" },
];

// Layout (SVG user units)
const W = 1080;
const LABEL_W = 160;
const X0 = 182;
const DAY_W = 24;
const TOP = 48;
const ROW_H = 54;
const BLUE = "#2563eb";
const GRAY = "#9ca3af";
const RED = "#dc2626";
const AMBER = "#d97706";

const x = (day: Day) => X0 + day * DAY_W;
const rowY = (row: number) => TOP + row * ROW_H + ROW_H / 2;
const plotBottom = TOP + ROWS.length * ROW_H;
const H = plotBottom + 34;
const BAND_X1 = x(aug(3)) - 12;
const BAND_X2 = x(aug(10)) + 12;
const BREAK_X = BAND_X2 + 26;
const TIMEOUT_X1 = BREAK_X + 26;
const TIMEOUT_X2 = W - 12;

// Right-aligned annotation that sits just left of the highlighted window
const Note = ({ row, children }: { row: number; children: string }) => (
  <text x={BAND_X1 - 12} y={rowY(row) + 4} textAnchor="end" fontSize={12.5} fill="#4b5563" fontStyle="italic">
    {children}
  </text>
);

const rpPath = () => {
  const min = 33400;
  const max = 34500;
  const top = rowY(0) - 18;
  const span = 36;
  return RP.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${(top + span - ((v - min) / (max - min)) * span).toFixed(1)}`).join(" ");
};

const TimelineSvg = () => (
  <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full font-sans" role="img" aria-labelledby="evidence-timeline-title">
    <title id="evidence-timeline-title">
      One account's ranked points, reports, detections, logins, notes, and enforcement on a shared 30-day timeline.
      Between August 3 and 10, rising reports, new detections, and logins from three countries converge into a system shadow ban on August 8; on October 23 a
      seven-day silent matchmaking timeout. A prior toxicity ban expired on July 28.
    </title>

    {/* Rows */}
    {ROWS.map((row, i) => {
      const y = TOP + i * ROW_H;
      return (
        <g key={row.name}>
          <rect x={0} y={y} width={W} height={ROW_H} fill={i % 2 === 0 ? "#f9fafb" : "#ffffff"} />
          <line x1={0} x2={W} y1={y} y2={y} stroke="#e5e7eb" />
          <text x={16} y={rowY(i) - 3} fontSize={14} fontWeight={600} fill="#111827">
            {row.name}
          </text>
          <text x={16} y={rowY(i) + 14} fontSize={12} fill="#6b7280">
            {row.detail}
          </text>
        </g>
      );
    })}
    <line x1={0} x2={W} y1={plotBottom} y2={plotBottom} stroke="#e5e7eb" />
    <line x1={LABEL_W} x2={LABEL_W} y1={TOP} y2={plotBottom} stroke="#e5e7eb" />

    {/* Highlighted window */}
    <rect x={BAND_X1} y={TOP - 8} width={BAND_X2 - BAND_X1} height={plotBottom - TOP + 8} rx={6} fill={BLUE} fillOpacity={0.07} stroke={BLUE} strokeOpacity={0.35} />
    <text x={BAND_X2} y={TOP - 18} textAnchor="end" fontSize={13} fontWeight={600} fill={BLUE}>
      Aug 3–10: signals converge
    </text>

    {/* Axis */}
    {TICKS.map((tick) => (
      <g key={tick.label}>
        <line x1={x(tick.day)} x2={x(tick.day)} y1={TOP} y2={plotBottom} stroke="#e5e7eb" strokeDasharray="2 4" />
        <text x={x(tick.day)} y={plotBottom + 20} textAnchor="middle" fontSize={12} fill="#6b7280">
          {tick.label}
        </text>
      </g>
    ))}

    {/* Ranked RP */}
    <path d={rpPath()} fill="none" stroke={BLUE} strokeWidth={2} strokeLinejoin="round" />

    {/* Reports */}
    {REPORTS.map((r, i) => (
      <circle key={i} cx={x(r.day)} cy={rowY(1)} r={r.count > 1 ? 7.5 : 5} fill={r.cheating ? BLUE : GRAY} />
    ))}

    {/* Detections: vendor outlined diamonds, in-house filled squares */}
    {DETECTIONS.map((d, i) =>
      d.inHouse ? (
        <rect key={i} x={x(d.day) - 6} y={rowY(2) - 6} width={12} height={12} rx={2} fill="#111827" />
      ) : (
        <rect
          key={i}
          x={x(d.day) - 5.5}
          y={rowY(2) - 5.5}
          width={11}
          height={11}
          fill="#ffffff"
          stroke="#111827"
          strokeWidth={1.75}
          transform={`rotate(45 ${x(d.day)} ${rowY(2)})`}
        />
      )
    )}
    <Note row={2}>Vendor and in-house kept distinct</Note>

    {/* Logins */}
    {LOGINS.map((l, i) => (
      <g key={i}>
        <circle cx={x(l.day)} cy={rowY(3) + 8} r={4} fill="#4b5563" />
        <text x={x(l.day)} y={rowY(3) - 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="#374151">
          {l.geo}
        </text>
      </g>
    ))}
    <Note row={3}>Three countries in five days</Note>

    {/* Notes */}
    {NOTES.map((n, i) => (
      <g key={i}>
        <rect x={x(n.day) - 13} y={rowY(4) - 10} width={26} height={20} rx={10} fill="#ffffff" stroke="#9ca3af" />
        <text x={x(n.day)} y={rowY(4) + 4} textAnchor="middle" fontSize={10.5} fontWeight={600} fill="#374151">
          {n.author}
        </text>
      </g>
    ))}
    <Note row={4}>Reasoning stays with the record</Note>

    {/* Sanctions: prior ban runs in from before the window */}
    <rect x={LABEL_W + 6} y={rowY(5) - 11} width={x(PRIOR_BAN_END) - LABEL_W - 6} height={22} rx={4} fill="#fee2e2" stroke={RED} strokeOpacity={0.5} />
    <text x={LABEL_W + 16} y={rowY(5) + 4} fontSize={12} fontWeight={600} fill="#991b1b">
      ← Permanent ban, toxicity, since Apr 11
    </text>
    <text x={x(PRIOR_BAN_END) + 8} y={rowY(5) + 4} fontSize={12} fill="#4b5563" fontStyle="italic">
      Expired Jul 28
    </text>
    <rect x={x(SHADOW_BAN) - 38} y={rowY(5) - 11} width={76} height={22} rx={4} fill="#fee2e2" stroke={RED} />
    <text x={x(SHADOW_BAN)} y={rowY(5) + 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="#991b1b">
      Shadow ban
    </text>
    <rect x={TIMEOUT_X1} y={rowY(5) - 11} width={TIMEOUT_X2 - TIMEOUT_X1} height={22} rx={11} fill="#fef3c7" stroke={AMBER} />
    <text x={(TIMEOUT_X1 + TIMEOUT_X2) / 2} y={rowY(5) + 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="#92400e">
      Silent MM timeout
    </text>

    {/* Axis break before Oct 23 */}
    <line x1={BREAK_X} x2={BREAK_X} y1={TOP} y2={plotBottom} stroke="#d1d5db" strokeDasharray="3 3" />
    <path d={`M${BREAK_X - 7} ${plotBottom + 10} l6 -10 M${BREAK_X + 1} ${plotBottom + 10} l6 -10`} stroke="#9ca3af" strokeWidth={1.5} />
    <text x={(TIMEOUT_X1 + TIMEOUT_X2) / 2} y={plotBottom + 20} textAnchor="middle" fontSize={12} fontWeight={600} fill="#111827">
      Oct 23
    </text>
  </svg>
);

const LegendItem = ({ swatch, label }: { swatch: React.ReactNode; label: string }) => (
  <li className="flex items-center gap-2">
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      {swatch}
    </svg>
    <span>{label}</span>
  </li>
);

export const EvidenceTimeline = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    {/* Scrolls sideways on narrow screens rather than shrinking past legibility.
        The rtl wrapper starts that scroll at the right end, where the pattern is. */}
    <div className="overflow-x-auto" dir="rtl">
      <div className="min-w-[720px]" dir="ltr">
        <TimelineSvg />
      </div>
    </div>
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-700">
      <LegendItem swatch={<circle cx={7} cy={7} r={5} fill={BLUE} />} label="Cheating report" />
      <LegendItem swatch={<circle cx={7} cy={7} r={5} fill={GRAY} />} label="Other report" />
      <LegendItem
        swatch={<rect x={3} y={3} width={8} height={8} fill="#fff" stroke="#111827" strokeWidth={1.5} transform="rotate(45 7 7)" />}
        label="Vendor detection"
      />
      <LegendItem swatch={<rect x={1} y={1} width={12} height={12} rx={2} fill="#111827" />} label="In-house detection" />
      <LegendItem swatch={<rect x={1} y={3} width={12} height={8} rx={2} fill="#fee2e2" stroke={RED} />} label="Ban" />
      <LegendItem swatch={<rect x={1} y={3} width={12} height={8} rx={4} fill="#fef3c7" stroke={AMBER} />} label="Silent timeout" />
    </ul>
    <p className="mt-2 text-xs text-gray-500">Detection and note events are illustrative.</p>
  </div>
);
