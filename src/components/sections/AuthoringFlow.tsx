// Rule authoring flow for the EA Anti-Cheat project:
// the AI-generated mock's two steps against the designed flow, with the added steps highlighted.
// The mock lane is aligned to the designed lane's columns so the gaps line up with what was added.

interface Step {
  name: string;
  detail: string;
  added?: boolean;
}

const DESIGNED: Step[] = [
  { name: "Query", detail: "Filters define who the action targets" },
  { name: "Preview", detail: "Live list of every player it will hit", added: true },
  { name: "Review", detail: "Blast radius, owner, reason, code, and title", added: true },
  { name: "Submit", detail: "Action issued to every match" },
  { name: "Reach the game", detail: "Session ended, recorded on the player", added: true },
  { name: "Audit", detail: "Who acted, manually or by rule, and why", added: true },
];

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={`h-4 w-4 flex-shrink-0 text-gray-400 ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StepCard = ({ step, n }: { step: Step; n?: number }) => (
  <div
    className={`h-full rounded-md border p-3 ${
      step.added ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"
    }`}
  >
    <div className="flex items-center gap-2">
      {n !== undefined && (
        <span
          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
            step.added ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {n}
        </span>
      )}
      <span className={`text-sm font-semibold ${step.added ? "text-blue-700" : "text-black"}`}>{step.name}</span>
    </div>
    <p className="mt-1 text-xs leading-snug text-gray-600">{step.detail}</p>
  </div>
);

const Gap = ({ label, span }: { label: string; span: string }) => (
  <div
    className={`flex items-center justify-center rounded-md border border-dashed border-red-300 bg-red-50 px-3 py-3 text-center text-xs font-medium text-red-700 ${span}`}
  >
    {label}
  </div>
);

const LaneLabel = ({ title, detail }: { title: string; detail: string }) => (
  <div className="mb-2 flex flex-wrap items-baseline gap-x-2">
    <span className="text-sm font-semibold text-black">{title}</span>
    <span className="text-xs text-gray-500">{detail}</span>
  </div>
);

export const AuthoringFlow = () => (
  <div className="w-full space-y-6 rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    {/* AI-generated mock */}
    <div>
      <LaneLabel title="AI-generated mock" detail="Two steps, then the rule acts on real players" />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
        <StepCard step={DESIGNED[0]} />
        <Gap label="No preview, no review" span="md:col-span-2" />
        <StepCard step={DESIGNED[3]} />
        <Gap label="No proof it reached the game, no audit design" span="md:col-span-2" />
      </div>
    </div>

    {/* Designed flow */}
    <div>
      <LaneLabel title="Designed flow" detail="Every high-stakes step is visible, confirmed, and traceable" />
      <ol className="grid grid-cols-1 gap-2 md:grid-cols-6">
        {DESIGNED.map((step, i) => (
          <li key={step.name} className="relative">
            <StepCard step={step} n={i + 1} />
            {i < DESIGNED.length - 1 && (
              <Arrow className="absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 bg-white md:block" />
            )}
          </li>
        ))}
      </ol>
    </div>

    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-sm border border-blue-600 bg-blue-50" />
        Added in the design
      </span>
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-sm border border-dashed border-red-300 bg-red-50" />
        Missing from the mock
      </span>
    </div>
  </div>
);
