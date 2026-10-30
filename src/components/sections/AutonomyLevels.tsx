import { Fragment } from "react";
import { BookOpen, Headset, ListChecks, MousePointerClick } from "lucide-react";

// Agent autonomy levels for the EA Help project, from fully automatic to human-required.
// Autonomy is set by risk, not capability: blue levels run on their own, amber needs the
// player's confirm tap, and gray hands off to a person.

interface Level {
  id: string;
  name: string;
  icon: React.ReactNode;
  tile: string;
  nameClass: string;
  agentMay: string;
  playerSees: string;
  examples: string;
  // Boundary label shown after this level, marking where the next level needs more oversight
  boundaryAfter?: string;
}

const LEVELS: Level[] = [
  {
    id: "L0",
    name: "Inform",
    icon: <BookOpen className="h-4 w-4 text-blue-600" />,
    tile: "bg-blue-50",
    nameClass: "text-blue-700",
    agentMay: "Read and explain",
    playerSees: "Cited answer",
    examples: "Article answers, known-issue status, case status",
  },
  {
    id: "L1",
    name: "Suggest",
    icon: <ListChecks className="h-4 w-4 text-blue-600" />,
    tile: "bg-blue-50",
    nameClass: "text-blue-700",
    agentMay: "Recommend a next step",
    playerSees: "Step card",
    examples: "Clear cache, update drivers, check NAT type",
    boundaryAfter: "Player confirms every change",
  },
  {
    id: "L2",
    name: "Act with confirm",
    icon: <MousePointerClick className="h-4 w-4 text-amber-600" />,
    tile: "bg-amber-50",
    nameClass: "text-amber-700",
    agentMay: "Change the account after an explicit tap",
    playerSees: "Preview card + receipt",
    examples: "Restore missing content, refresh entitlements, reset cloud save",
    boundaryAfter: "A person decides",
  },
  {
    id: "L3",
    name: "Human required",
    icon: <Headset className="h-4 w-4 text-gray-600" />,
    tile: "bg-gray-100",
    nameClass: "text-black",
    agentMay: "Gather context and draft the case",
    playerSees: "Auto-drafted case + handoff",
    examples: "Refunds over threshold, bans, suspected compromise, chargebacks",
  },
];

const LevelName = ({ level }: { level: Level }) => (
  <div className="flex items-center gap-3">
    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md ${level.tile}`}>{level.icon}</span>
    <span className="flex flex-col leading-tight">
      <span className="text-xs font-semibold text-gray-500">{level.id}</span>
      <span className={`text-sm font-semibold ${level.nameClass}`}>{level.name}</span>
    </span>
  </div>
);

const Boundary = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3" role="separator" aria-label={label}>
    <span className="h-px flex-1 border-t border-dashed border-gray-300" />
    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">{label}</span>
    <span className="h-px flex-1 border-t border-dashed border-gray-300" />
  </div>
);

export const AutonomyLevels = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    <div className="flex gap-4">
      {/* Autonomy scale */}
      <div className="flex flex-col items-center pt-9 md:pt-10" aria-hidden="true">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Auto</span>
        <div className="my-1 w-1.5 flex-1 rounded-full bg-gradient-to-b from-blue-500 via-amber-400 to-gray-400" />
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Human</span>
      </div>

      <div className="min-w-0 flex-1">
        {/* Wide screens: a table */}
        <table className="hidden w-full text-left md:table">
          <thead>
            <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="pb-3 font-semibold">Level</th>
              <th className="pb-3 font-semibold">Agent may</th>
              <th className="pb-3 font-semibold">Player sees</th>
              <th className="pb-3 font-semibold">Examples</th>
            </tr>
          </thead>
          <tbody>
            {LEVELS.map((level) => (
              <Fragment key={level.id}>
                <tr className="border-b border-gray-100 align-top text-sm last:border-0">
                  <td className="py-3 pr-4 whitespace-nowrap">
                    <LevelName level={level} />
                  </td>
                  <td className="py-3 pr-4 text-gray-700">{level.agentMay}</td>
                  <td className="py-3 pr-4 font-medium text-black">{level.playerSees}</td>
                  <td className="py-3 text-gray-700">{level.examples}</td>
                </tr>
                {level.boundaryAfter && (
                  <tr>
                    <td colSpan={4} className="py-2">
                      <Boundary label={level.boundaryAfter} />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>

        {/* Narrow screens: one card per level */}
        <ul className="space-y-2 md:hidden">
          {LEVELS.map((level) => (
            <li key={level.id} className="space-y-2">
              <div className="rounded-md border border-gray-200 p-3">
                <LevelName level={level} />
                <dl className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <dt className="text-gray-500">Agent may</dt>
                    <dd className="mt-0.5 text-gray-700">{level.agentMay}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Player sees</dt>
                    <dd className="mt-0.5 font-medium text-black">{level.playerSees}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-gray-500">Examples</dt>
                    <dd className="mt-0.5 text-gray-700">{level.examples}</dd>
                  </div>
                </dl>
              </div>
              {level.boundaryAfter && <Boundary label={level.boundaryAfter} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
