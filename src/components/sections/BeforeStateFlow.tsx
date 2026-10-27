// Before-state investigation flow for the EA Anti-Cheat project:
// a swimlane showing one investigation hopping across separate systems.

interface Lane {
  name: string;
  detail: string;
}

interface Step {
  lane: number;
  lines: [string, string];
  issue?: string;
}

const LANES: Lane[] = [
  { name: "Legacy tool", detail: "Bans & detections" },
  { name: "Stats tool", detail: "Gameplay" },
  { name: "Notes", detail: "Free text" },
  { name: "Data pull", detail: "Session records" },
  { name: "Infraction ledger", detail: "Enforcement" },
  { name: "Matchmaking", detail: "Live game" },
];

const STEPS: Step[] = [
  { lane: 0, lines: ["Check ban &", "detection history"] },
  { lane: 1, lines: ["Review", "gameplay stats"] },
  { lane: 2, lines: ["Read past", "reasoning"], issue: "Prior sanctions easy to miss" },
  { lane: 3, lines: ["Request", "session evidence"], issue: "Waits on a separate pull" },
  { lane: 4, lines: ["Record ban in", "the ledger"] },
  { lane: 5, lines: ["Add silent", "matchmaking ban"], issue: "Ledger ban doesn't end the active session" },
];

const GROUP_NOTE = "Every view is one account at a time, so boosting, teaming, and bot lobbies never surface.";

// Layout (SVG user units)
const W = 1048;
const LABEL_W = 170;
const LANE_TOP = 64;
const LANE_H = 68;
const COL_X0 = 236;
const COL_STEP = 124;
const CARD_W = 120;
const CARD_H = 50;
const BLUE = "#2563eb";
const RED = "#dc2626";

const laneCenter = (lane: number) => LANE_TOP + lane * LANE_H + LANE_H / 2;
const colCenter = (col: number) => COL_X0 + col * COL_STEP;
const lanesBottom = LANE_TOP + LANES.length * LANE_H;
const H = lanesBottom + 72;

const Bracket = ({ from, to, label }: { from: number; to: number; label: string }) => {
  const x1 = colCenter(from) - CARD_W / 2;
  const x2 = colCenter(to) + CARD_W / 2;
  const y = 44;
  return (
    <g>
      <path d={`M${x1} ${y + 8} V${y} H${x2} V${y + 8}`} fill="none" stroke="#9ca3af" strokeWidth={1.25} />
      <text x={(x1 + x2) / 2} y={y - 10} textAnchor="middle" fontSize={14} fontWeight={600} fill="#374151">
        {label}
      </text>
    </g>
  );
};

const FlowDiagram = () => (
  <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto font-sans" role="img" aria-labelledby="before-flow-title">
    <title id="before-flow-title">
      A reported account moves through six separate systems before and after a ban, with context rebuilt by hand at
      each step.
    </title>
    <defs>
      <marker id="before-flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill={BLUE} />
      </marker>
    </defs>

    <Bracket from={1} to={4} label="Rebuild the player picture by hand, every time" />
    <Bracket from={5} to={6} label="Act, then patch the gap" />

    {/* Lanes */}
    {LANES.map((lane, i) => {
      const y = LANE_TOP + i * LANE_H;
      return (
        <g key={lane.name}>
          <rect x={0} y={y} width={W} height={LANE_H} fill={i % 2 === 0 ? "#f9fafb" : "#ffffff"} />
          <line x1={0} x2={W} y1={y} y2={y} stroke="#e5e7eb" />
          <text x={16} y={laneCenter(i) - 3} fontSize={15} fontWeight={600} fill="#111827">
            {lane.name}
          </text>
          <text x={16} y={laneCenter(i) + 15} fontSize={13} fill="#6b7280">
            {lane.detail}
          </text>
        </g>
      );
    })}
    <line x1={0} x2={W} y1={lanesBottom} y2={lanesBottom} stroke="#e5e7eb" />
    <line x1={LABEL_W} x2={LABEL_W} y1={LANE_TOP} y2={lanesBottom} stroke="#e5e7eb" />

    {/* Start node */}
    <g>
      <rect x={colCenter(0) - 46} y={laneCenter(0) - CARD_H / 2} width={92} height={CARD_H} rx={23} fill="#111827" />
      <text x={colCenter(0)} y={laneCenter(0) - 3} textAnchor="middle" fontSize={13} fontWeight={600} fill="#ffffff">
        Reported
      </text>
      <text x={colCenter(0)} y={laneCenter(0) + 12} textAnchor="middle" fontSize={13} fontWeight={600} fill="#ffffff">
        account
      </text>
      <path
        d={`M${colCenter(0) + 46} ${laneCenter(0)} H${colCenter(1) - CARD_W / 2 - 2}`}
        stroke={BLUE}
        strokeWidth={1.75}
        markerEnd="url(#before-flow-arrow)"
      />
    </g>

    {/* Connectors between steps: down to the next lane, then across */}
    {STEPS.slice(1).map((step, i) => {
      const prev = STEPS[i];
      const x = colCenter(i + 1);
      const d = `M${x} ${laneCenter(prev.lane) + CARD_H / 2} V${laneCenter(step.lane)} H${colCenter(i + 2) - CARD_W / 2 - 2}`;
      return (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={BLUE}
          strokeWidth={1.75}
          markerEnd="url(#before-flow-arrow)"
        />
      );
    })}

    {/* Step cards */}
    {STEPS.map((step, i) => {
      const cx = colCenter(i + 1);
      const cy = laneCenter(step.lane);
      const x = cx - CARD_W / 2;
      const y = cy - CARD_H / 2;
      return (
        <g key={i}>
          <rect x={x} y={y} width={CARD_W} height={CARD_H} rx={8} fill="#ffffff" stroke={step.issue ? RED : "#d1d5db"} strokeWidth={step.issue ? 1.5 : 1} />
          <text x={cx} y={cy - 4} textAnchor="middle" fontSize={13.5} fill="#111827">
            {step.lines[0]}
          </text>
          <text x={cx} y={cy + 13} textAnchor="middle" fontSize={13.5} fill="#111827">
            {step.lines[1]}
          </text>
          <circle cx={x + 2} cy={y + 2} r={10} fill={BLUE} />
          <text x={x + 2} y={y + 6} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ffffff">
            {i + 1}
          </text>
        </g>
      );
    })}

    {/* Friction callouts: right of the card when there is room, otherwise left */}
    {STEPS.map((step, i) => {
      if (!step.issue) return null;
      const cx = colCenter(i + 1);
      const cy = laneCenter(step.lane);
      const onRight = i < STEPS.length - 1;
      const iconX = onRight ? cx + CARD_W / 2 + 18 : cx - CARD_W / 2 - COL_STEP + 4;
      const textX = onRight ? iconX + 14 : iconX - 14;
      return (
        <g key={`issue-${i}`}>
          <circle cx={iconX} cy={cy} r={8} fill={RED} />
          <text x={iconX} y={cy + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ffffff">
            !
          </text>
          <text x={textX} y={cy + 4} textAnchor={onRight ? "start" : "end"} fontSize={14} fontWeight={500} fill={RED}>
            {step.issue}
          </text>
        </g>
      );
    })}

    {/* Group-behavior blind spot */}
    <g>
      <rect
        x={LABEL_W}
        y={lanesBottom + 16}
        width={W - LABEL_W}
        height={40}
        rx={8}
        fill="#fef2f2"
        stroke="#fecaca"
        strokeDasharray="4 4"
      />
      <circle cx={LABEL_W + 22} cy={lanesBottom + 36} r={8} fill={RED} />
      <text x={LABEL_W + 22} y={lanesBottom + 40} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ffffff">
        !
      </text>
      <text x={LABEL_W + 40} y={lanesBottom + 40} fontSize={14} fontWeight={500} fill="#991b1b">
        {GROUP_NOTE}
      </text>
    </g>
    <text x={16} y={lanesBottom + 40} fontSize={15} fontWeight={600} fill="#111827">
      Blind spot
    </text>
  </svg>
);

// Narrow screens: the same story as a vertical list.
const FlowList = () => (
  <ol className="space-y-2">
    <li className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white">Reported account</li>
    {STEPS.map((step, i) => (
      <li
        key={i}
        className={`rounded-lg border bg-white p-3 ${step.issue ? "border-red-500" : "border-gray-200"}`}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
            {i + 1}
          </span>
          <span className="text-xs font-semibold uppercase text-gray-500">{LANES[step.lane].name}</span>
        </div>
        <p className="mt-1 text-sm text-black">{step.lines.join(" ")}</p>
        {step.issue && <p className="mt-1 text-sm font-medium text-red-600">{step.issue}</p>}
      </li>
    ))}
    <li className="rounded-lg border border-dashed border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800">
      {GROUP_NOTE}
    </li>
  </ol>
);

export const BeforeStateFlow = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    <div className="hidden md:block">
      <FlowDiagram />
    </div>
    <div className="md:hidden">
      <FlowList />
    </div>
  </div>
);
