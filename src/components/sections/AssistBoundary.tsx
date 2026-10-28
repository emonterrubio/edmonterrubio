// Assist boundary for the EA Anti-Cheat project: what the Phase 1 case brief can reach.
// It reads each source and drafts one cited sentence per record; a player's standing
// only changes through the existing enforcement review, confirmed by an analyst.

interface Source {
  name: string;
  chip: string;
  sentence?: string;
}

// Follows the prototype's Overview tab for Makoflux, who has no bans on record.
const SOURCES: Source[] = [
  { name: "Season stats", chip: "Stat", sentence: "40 matches, avg place 4.0" },
  { name: "Ban history", chip: "Ban" },
  { name: "Detections", chip: "Detection", sentence: "1 record, RECOIL ZERO" },
  { name: "Received reports", chip: "Report", sentence: "92, most often cheating" },
  { name: "Outgoing reports", chip: "Report", sentence: "12, most often griefing" },
  { name: "Player notes", chip: "Note", sentence: "Latest, from skyfall.bot" },
];

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={`h-4 w-4 flex-shrink-0 text-gray-400 ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ColumnLabel = ({ title, detail }: { title: string; detail: string }) => (
  <div className="mb-2">
    <div className="text-sm font-semibold text-black">{title}</div>
    <div className="text-xs text-gray-500">{detail}</div>
  </div>
);

export const AssistBoundary = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1.5fr)_auto_minmax(0,1fr)]">
      {/* AI side: reads sources, drafts cited sentences */}
      <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-3 md:p-4">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Phase 1 assist · reads and drafts</span>
        </div>
        <div className="grid grid-cols-[minmax(0,0.75fr)_auto_minmax(0,1.25fr)] items-center gap-x-2 gap-y-1.5 text-sm">
          <span className="text-[11px] text-gray-500">Source</span>
          <span />
          <span className="text-[11px] text-gray-500">Case brief sentence</span>
          {SOURCES.map((s) => (
            <div key={s.name} className="contents">
              <span className={`text-xs leading-tight md:text-sm ${s.sentence ? "font-medium text-black" : "text-gray-400"}`}>{s.name}</span>
              <Arrow className={s.sentence ? "" : "opacity-30"} />
              {s.sentence ? (
                <span className="flex min-w-0 items-center gap-1.5 rounded border border-gray-200 bg-white px-2 py-1">
                  <span className="text-xs leading-tight text-gray-700">{s.sentence}</span>
                  <span className="ml-auto whitespace-nowrap rounded border border-gray-300 px-1 font-mono text-[10px] text-gray-600">
                    {s.chip}
                  </span>
                </span>
              ) : (
                <span className="rounded border border-dashed border-gray-300 px-2 py-1 text-xs text-gray-400">No record, no sentence</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-600">
          Each citation opens its tab: Ranked, Bans, Detections, Activity, or Notes. The brief is labeled{" "}
          <span className="font-semibold text-black">Draft only. Does not change standing.</span>
        </p>
      </div>

      {/* The boundary */}
      <div className="flex items-center justify-center md:flex-col">
        <div className="h-px flex-1 border-t-2 border-dashed border-red-300 md:h-auto md:w-px md:border-l-2 md:border-t-0" />
        <span className="mx-2 whitespace-nowrap rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-700 md:mx-0 md:my-2">
          AI stops here
        </span>
        <div className="h-px flex-1 border-t-2 border-dashed border-red-300 md:h-auto md:w-px md:border-l-2 md:border-t-0" />
      </div>

      {/* Human side: the only path to standing */}
      <div>
        <ColumnLabel title="The only path to standing" detail="Unchanged from enforcement" />
        <ol className="space-y-2">
          {[
            { name: "Enforcement preview", detail: "A written rule can fill it. It does not create a rule." },
            { name: "Review dialog", detail: "Blast radius, owner, code, title, and reason" },
            { name: "Analyst confirms", detail: "The only step that issues the action" },
          ].map((step, i) => (
            <li key={step.name} className="flex items-start gap-2 rounded-md border border-gray-300 bg-white p-2.5">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-[11px] font-bold text-gray-700">
                {i + 1}
              </span>
              <div>
                <div className="text-sm font-semibold text-black">{step.name}</div>
                <div className="text-xs text-gray-600">{step.detail}</div>
              </div>
            </li>
          ))}
          <li className="rounded-md border border-gray-900 bg-gray-900 p-2.5 text-sm font-semibold text-white">Player standing changes</li>
        </ol>
      </div>
    </div>
  </div>
);
