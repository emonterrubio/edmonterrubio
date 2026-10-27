// Ranked climb for the EA Anti-Cheat project: one flagged account's RP across its last 25 ranked matches.
// Data follows the prototype's Ranked History tab for Zephyrre1gn36 (PC #2, PIL Ban).
// Amber marks the gains the prototype itself flags as outsized.

interface Match {
  date: string;
  placement: number;
  delta: number;
  rpAfter: number;
}

const MATCHES: Match[] = [
  { date: "5/30", placement: 10, delta: -65, rpAfter: 32909 },
  { date: "6/2", placement: 12, delta: -58, rpAfter: 32851 },
  { date: "6/5", placement: 8, delta: -1, rpAfter: 32850 },
  { date: "6/8", placement: 2, delta: 92, rpAfter: 32942 },
  { date: "6/11", placement: 8, delta: -29, rpAfter: 32913 },
  { date: "6/14", placement: 11, delta: -71, rpAfter: 32842 },
  { date: "6/16", placement: 15, delta: -7, rpAfter: 32835 },
  { date: "6/19", placement: 3, delta: 85, rpAfter: 32920 },
  { date: "6/22", placement: 6, delta: 18, rpAfter: 32938 },
  { date: "6/25", placement: 2, delta: 111, rpAfter: 33049 },
  { date: "6/28", placement: 11, delta: -41, rpAfter: 33008 },
  { date: "7/1", placement: 1, delta: 200, rpAfter: 33208 },
  { date: "7/4", placement: 3, delta: 106, rpAfter: 33314 },
  { date: "7/6", placement: 2, delta: 161, rpAfter: 33475 },
  { date: "7/9", placement: 2, delta: 121, rpAfter: 33596 },
  { date: "7/12", placement: 1, delta: 155, rpAfter: 33751 },
  { date: "7/15", placement: 2, delta: 134, rpAfter: 33885 },
  { date: "7/18", placement: 3, delta: 154, rpAfter: 34039 },
  { date: "7/21", placement: 2, delta: 218, rpAfter: 34257 },
  { date: "7/23", placement: 1, delta: 124, rpAfter: 34381 },
  { date: "7/26", placement: 2, delta: 182, rpAfter: 34563 },
  { date: "7/29", placement: 2, delta: 149, rpAfter: 34712 },
  { date: "8/1", placement: 3, delta: 113, rpAfter: 34825 },
  { date: "8/4", placement: 2, delta: 140, rpAfter: 34965 },
  { date: "8/7", placement: 2, delta: 180, rpAfter: 35145 },
];

const STREAK_START = 11; // Jul 1: every match after this is a top-3 finish and a gain
const OUTSIZED = 180;

const W = 1000;
const X0 = 80;
const X1 = 960;
const TOP = 56;
const BOTTOM = 260;
const STRIP_Y = 292;
const H = 350;
const RP_MIN = 32700;
const RP_MAX = 35500;

const x = (i: number) => X0 + (i * (X1 - X0)) / (MATCHES.length - 1);
const y = (rp: number) => BOTTOM - ((rp - RP_MIN) / (RP_MAX - RP_MIN)) * (BOTTOM - TOP);

const GRID = [33000, 33500, 34000, 34500, 35000];
const TICKS = [0, 6, 11, 18, 24];

const placementStyle = (p: number) =>
  p === 1 ? { fill: "#2563eb", text: "#ffffff" } : p <= 3 ? { fill: "#dbeafe", text: "#1d4ed8" } : { fill: "#f3f4f6", text: "#6b7280" };

const before = MATCHES[STREAK_START - 1].rpAfter - MATCHES[0].rpAfter;
const during = MATCHES[MATCHES.length - 1].rpAfter - MATCHES[STREAK_START - 1].rpAfter;
const fmt = (n: number) => n.toLocaleString("en-US");

export const RankedClimb = () => {
  const path = MATCHES.map((m, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(m.rpAfter)}`).join(" ");
  const bandX = (x(STREAK_START - 1) + x(STREAK_START)) / 2;
  const last = MATCHES[MATCHES.length - 1];

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
      <div className="overflow-x-auto" dir="rtl">
        <div className="min-w-[720px]" dir="ltr">
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Zephyrre1gn36's ranked points across 25 matches: flat for 11 matches, then 14 straight top-3 finishes, each a gain">
            {/* Streak band */}
            <rect x={bandX} y={TOP - 36} width={X1 + 20 - bandX} height={BOTTOM - TOP + 36} fill="#eff6ff" rx={4} />
            <text x={bandX + 12} y={TOP - 16} fontSize={14} fontWeight={600} fill="#1d4ed8">
              14 straight top-3 finishes, every one a gain: +{fmt(during)} RP
            </text>
            <text x={X0} y={TOP - 16} fontSize={14} fontWeight={600} fill="#6b7280">
              11 matches, net +{fmt(before)} RP
            </text>

            {/* Grid */}
            {GRID.map((rp) => (
              <g key={rp}>
                <line x1={X0 - 10} x2={X1 + 20} y1={y(rp)} y2={y(rp)} stroke="#e5e7eb" strokeDasharray="3 4" />
                <text x={X0 - 18} y={y(rp) + 4} fontSize={12} textAnchor="end" fill="#9ca3af" fontFamily="ui-monospace, monospace">
                  {fmt(rp)}
                </text>
              </g>
            ))}

            {/* RP line and points */}
            <path d={path} fill="none" stroke="#111827" strokeWidth={2} strokeLinejoin="round" />
            {MATCHES.map((m, i) =>
              m.delta >= OUTSIZED ? (
                <g key={m.date}>
                  <circle cx={x(i)} cy={y(m.rpAfter)} r={7} fill="#f59e0b" stroke="#ffffff" strokeWidth={2} />
                  <text x={x(i)} y={y(m.rpAfter) + 24} fontSize={12} fontWeight={600} textAnchor="middle" fill="#b45309" fontFamily="ui-monospace, monospace">
                    +{m.delta}
                  </text>
                </g>
              ) : (
                <circle key={m.date} cx={x(i)} cy={y(m.rpAfter)} r={3.5} fill="#111827" />
              ),
            )}
            <text x={x(MATCHES.length - 1) - 14} y={y(last.rpAfter) - 14} fontSize={13} fontWeight={600} textAnchor="end" fill="#111827">
              {fmt(last.rpAfter)} RP · PC #2
            </text>

            {/* Placement strip */}
            <text x={X0 - 18} y={STRIP_Y + 4} fontSize={12} textAnchor="end" fill="#6b7280">
              Place
            </text>
            {MATCHES.map((m, i) => {
              const s = placementStyle(m.placement);
              return (
                <g key={`p-${m.date}`}>
                  <rect x={x(i) - 13} y={STRIP_Y - 12} width={26} height={22} rx={4} fill={s.fill} />
                  <text x={x(i)} y={STRIP_Y + 4} fontSize={12} fontWeight={600} textAnchor="middle" fill={s.text} fontFamily="ui-monospace, monospace">
                    {m.placement}
                  </text>
                </g>
              );
            })}

            {/* Dates */}
            {TICKS.map((i) => (
              <text key={`d-${i}`} x={x(i)} y={H - 12} fontSize={12} textAnchor="middle" fill="#6b7280">
                {MATCHES[i].date}
              </text>
            ))}
          </svg>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-amber-500" />
          Gain the prototype flags as outsized
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-blue-600" />
          First place
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-blue-100" />
          Second or third
        </span>
      </div>
    </div>
  );
};
