// Solution architecture for the EA Anti-Cheat project:
// providers feed one workspace, an AI layer spans its surfaces, and every action exits through enforcement and audit.

const PROVIDERS = [
  "Player data and stats",
  "Bans and detections",
  "Player reports",
  "In-house detections",
  "Session evidence",
  "Player notes",
];

const SURFACES = [
  { name: "Player profile", detail: "Timeline, stats, notes, sessions" },
  { name: "Enforcement Engine", detail: "Query, preview, review, actions" },
  { name: "Monitoring", detail: "Leaderboards and squad lobby lookup" },
  { name: "Competitive play", detail: "Event vetting and ranked correction" },
];

const AI_CAPABILITIES = "Case briefs, report triage, behavior scoring, anomaly and co-play detection";

const OUTCOMES = ["Enforcement reaches the game", "Audit trail for every action"];

const DownArrow = () => (
  <svg className="h-6 w-4 text-gray-400" viewBox="0 0 16 24" fill="none" aria-hidden="true">
    <path d="M8 0 V20" stroke="currentColor" strokeWidth={1.5} />
    <path d="M3 15 L8 21 L13 15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TierLabel = ({ title, detail }: { title: string; detail?: string }) => (
  <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
    <span className="text-base font-semibold text-black">{title}</span>
    {detail && <span className="text-sm text-gray-500">{detail}</span>}
  </div>
);

export const SolutionArchitecture = () => (
  <div
    className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6"
    role="img"
    aria-label="Six data providers feed the Dashy workspace. Its four surfaces share an AI layer, and every action leads to enforcement in the game and an audit trail."
  >
    {/* Providers */}
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <TierLabel title="Data providers" detail="Migrated history plus live feeds, all four platforms" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {PROVIDERS.map((provider) => (
          <div
            key={provider}
            className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-2 py-3 text-center text-sm leading-snug text-gray-800"
          >
            {provider}
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center py-1">
      <DownArrow />
    </div>

    {/* Workspace */}
    <div className="rounded-lg border border-gray-300 p-4">
      <TierLabel title="Dashy workspace" detail="Four workflow surfaces" />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {SURFACES.map((surface) => (
          <div key={surface.name} className="rounded-md border border-gray-200 bg-white p-3">
            <div className="text-base font-semibold leading-tight text-black">{surface.name}</div>
            <div className="mt-1 text-sm leading-snug text-gray-500">{surface.detail}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-col items-center gap-1 rounded-md border-2 border-blue-600 bg-blue-50 px-4 py-3 text-center md:flex-row md:justify-center md:gap-4">
        <span className="text-base text font-semibold text-blue-700 md:whitespace-nowrap">AI layer</span>
        <span className="text-sm text-gray-800">{AI_CAPABILITIES}</span>
      </div>
    </div>

    {/* Outcomes */}
    <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
      {OUTCOMES.map((outcome) => (
        <div key={outcome} className="flex flex-col items-center">
          <div className="py-1">
            <DownArrow />
          </div>
          <div className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-center text-base font-semibold text-black">
            {outcome}
          </div>
        </div>
      ))}
    </div>
  </div>
);
