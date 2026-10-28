// Monitor-to-audit workflow for the EA Anti-Cheat project: the five stages an analyst moves through,
// the Dashy surface behind each, and what each stage hands to the next.
// Tags mark where the Phase 1 assist features sit; none of them change standing.

interface Stage {
  name: string;
  surface: string;
  detail: string;
  handoff: string;
  assist?: string;
}

const STAGES: Stage[] = [
  {
    name: "Monitor",
    surface: "Leaderboard and lobby lookup",
    detail: "Restrictions, swings, and 7-day movement in the row. Any match opens its lobby.",
    handoff: "A player worth a look",
  },
  {
    name: "Investigate",
    surface: "Player profile",
    detail: "Ranked, Bans, Detections, Activity, and Notes, in one place.",
    handoff: "The evidence, cited",
    assist: "Case brief",
  },
  {
    name: "Decide",
    surface: "Graduated actions",
    detail: "Warning, matchmaking ban, shadow ban, or permanent ban, sized to the evidence.",
    handoff: "A proportionate action",
  },
  {
    name: "Enforce",
    surface: "Query, preview, and review",
    detail: "Who it hits, then blast radius, owner, code, and reason. Confirm issues it to the game.",
    handoff: "An issued action",
    assist: "Written rule fills preview",
  },
  {
    name: "Audit",
    surface: "Audit log",
    detail: "When, by whom, why, and whether manual or by rule. Silent actions included.",
    handoff: "A traceable decision",
  },
];

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={`h-4 w-4 flex-shrink-0 text-gray-400 ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WorkflowPath = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    <ol className="grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-4">
      {STAGES.map((stage, i) => (
        <li key={stage.name} className="relative flex flex-col">
          <div className="flex h-full flex-col rounded-md border border-gray-300 bg-white p-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-black">{stage.name}</span>
            </div>
            <div className="mt-2 text-xs font-semibold text-blue-700">{stage.surface}</div>
            <p className="mt-1 text-xs leading-snug text-gray-600">{stage.detail}</p>
            {stage.assist && (
              <span className="mt-2 self-start rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700">
                AI assist: {stage.assist}
              </span>
            )}
            <div className="mt-auto pt-3">
              <div className="border-t border-gray-100 pt-2 text-[11px] uppercase tracking-wide text-gray-400">Hands off</div>
              <div className="text-xs font-medium text-black">{stage.handoff}</div>
            </div>
          </div>
          {i < STAGES.length - 1 && (
            <Arrow className="absolute -right-[14px] top-1/2 z-10 hidden -translate-y-1/2 bg-white md:block" />
          )}
        </li>
      ))}
    </ol>

    <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-700 md:grid-cols-2">
      <p className="rounded-md bg-gray-50 px-4 py-3">
        <span className="font-semibold text-black">Competitive integrity joins at Enforce.</span> Ranked corrections go through the
        same review step and land in the same audit.
      </p>
      <p className="rounded-md bg-blue-50/60 px-4 py-3">
        <span className="font-semibold text-black">AI assist reads and drafts.</span> Only the analyst&apos;s confirm in step 4
        changes a player&apos;s standing.
      </p>
    </div>
  </div>
);
