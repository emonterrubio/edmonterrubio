// Phased AI roadmap for the EA Anti-Cheat project: assist, recommend, automate with oversight.
// Each phase widens what the AI can touch, and each step up is gated on measured precision.
// Only Phase 1 is in place; the later phases are planned.

interface Phase {
  name: string;
  status: "In place" | "Planned";
  touches: string;
  examples: string[];
  human: string;
}

const PHASES: Phase[] = [
  {
    name: "Assist",
    status: "In place",
    touches: "Drafts only",
    examples: ["Cited case brief", "Report triage queue", "Written rule fills preview"],
    human: "Reviews and confirms every action",
  },
  {
    name: "Recommend",
    status: "Planned",
    touches: "Queues, not sanctions",
    examples: ["Behavior scores", "Leaderboard anomalies", "Co-play and alt links"],
    human: "Reviews each scored case",
  },
  {
    name: "Automate with oversight",
    status: "Planned",
    touches: "Delayed ban waves",
    examples: ["High-precision waves", "Investigation agent drafts", "Appeal assist"],
    human: "Samples, pauses, or rolls back",
  },
];

const GATE = "Gate: measured precision, read with the appeal overturn rate";

const Gate = () => (
  <div className="flex items-center justify-center py-1 md:px-1 md:py-0">
    <span className="rounded-full border border-dashed border-gray-400 bg-white px-2.5 py-1 text-center text-[11px] font-medium text-gray-600 md:w-24 md:rounded-md md:px-1.5 md:py-2">
      {GATE}
    </span>
  </div>
);

const PhaseCard = ({ phase, n }: { phase: Phase; n: number }) => {
  const live = phase.status === "In place";
  return (
    <div className={`h-full rounded-lg border p-4 ${live ? "border-blue-600 bg-blue-50" : "border-dashed border-gray-300 bg-white"}`}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Phase {n}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${live ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"}`}
        >
          {phase.status}
        </span>
      </div>
      <div className={`mt-1 text-base font-semibold ${live ? "text-blue-700" : "text-black"}`}>{phase.name}</div>

      <dl className="mt-3 space-y-3 text-sm">
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-gray-500">AI can touch</dt>
          <dd className="font-semibold text-black">{phase.touches}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-gray-500">Examples</dt>
          <dd>
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {phase.examples.map((e) => (
                <li key={e} className="rounded border border-gray-200 bg-white px-1.5 py-0.5 text-xs text-gray-700">
                  {e}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-gray-500">Human role</dt>
          <dd className="text-gray-700">{phase.human}</dd>
        </div>
      </dl>
    </div>
  );
};

export const AiRoadmap = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
      {PHASES.map((phase, i) => (
        <div key={phase.name} className="contents">
          <PhaseCard phase={phase} n={i + 1} />
          {i < PHASES.length - 1 && <Gate />}
        </div>
      ))}
    </div>
    <p className="mt-4 rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-700">
      <span className="font-semibold text-black">In every phase,</span> no model output issues a sanction on its own. A person or a
      reviewed rule stays accountable.
    </p>
  </div>
);
