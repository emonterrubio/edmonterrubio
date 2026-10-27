import { AlertTriangle, Ban, EyeOff, XCircle } from "lucide-react";

// Graduated enforcement actions for the EA Anti-Cheat project, least to most severe.
// Colors and icons follow the product's sanction badges: amber for temporary holds, red for bans.

interface Action {
  name: string;
  icon: React.ReactNode;
  tile: string;
  nameClass: string;
  visible: boolean;
  endsSession: string;
  duration: string;
}

const ACTIONS: Action[] = [
  {
    name: "Warning",
    icon: <AlertTriangle className="h-4 w-4 text-gray-600" />,
    tile: "bg-gray-100",
    nameClass: "text-black",
    visible: true,
    endsSession: "No",
    duration: "None",
  },
  {
    name: "Silent matchmaking timeout",
    icon: <XCircle className="h-4 w-4 text-amber-600" />,
    tile: "bg-amber-50",
    nameClass: "text-amber-700",
    visible: false,
    endsSession: "—",
    duration: "Time-limited, e.g. 7 days",
  },
  {
    name: "Temporary suspension",
    icon: <XCircle className="h-4 w-4 text-red-600" />,
    tile: "bg-red-50",
    nameClass: "text-red-700",
    visible: true,
    endsSession: "Yes",
    duration: "Time-limited, e.g. 7 days",
  },
  {
    name: "Shadow ban",
    icon: <EyeOff className="h-4 w-4 text-red-600" />,
    tile: "bg-red-50",
    nameClass: "text-red-700",
    visible: false,
    endsSession: "—",
    duration: "Until lifted",
  },
  {
    name: "Permanent ban",
    icon: <Ban className="h-4 w-4 text-red-600" />,
    tile: "bg-red-50",
    nameClass: "text-red-700",
    visible: true,
    endsSession: "Yes",
    duration: "Permanent",
  },
];

const Visibility = ({ visible }: { visible: boolean }) =>
  visible ? (
    <span className="text-gray-700">Yes</span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-900 px-2 py-0.5 text-xs font-medium text-white">
      <EyeOff className="h-3 w-3" />
      Silent
    </span>
  );

const ActionName = ({ action }: { action: Action }) => (
  <div className="flex items-center gap-3">
    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md ${action.tile}`}>{action.icon}</span>
    <span className={`text-sm font-semibold ${action.nameClass}`}>{action.name}</span>
  </div>
);

export const ActionLadder = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    <div className="flex gap-4">
      {/* Severity scale */}
      <div className="flex flex-col items-center pt-9 md:pt-10" aria-hidden="true">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Less</span>
        <div className="my-1 w-1.5 flex-1 rounded-full bg-gradient-to-b from-gray-200 via-amber-400 to-red-600" />
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">More</span>
      </div>

      <div className="min-w-0 flex-1">
        {/* Wide screens: a table */}
        <table className="hidden w-full text-left md:table">
          <thead>
            <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="pb-3 font-semibold">Action</th>
              <th className="pb-3 font-semibold">Visible to player</th>
              <th className="pb-3 font-semibold">Ends live session</th>
              <th className="pb-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {ACTIONS.map((action) => (
              <tr key={action.name} className="border-b border-gray-100 text-sm last:border-0">
                <td className="py-3 pr-4">
                  <ActionName action={action} />
                </td>
                <td className="py-3 pr-4">
                  <Visibility visible={action.visible} />
                </td>
                <td className="py-3 pr-4 text-gray-700">{action.endsSession}</td>
                <td className="py-3 text-gray-700">{action.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Narrow screens: one card per action */}
        <ul className="space-y-2 md:hidden">
          {ACTIONS.map((action) => (
            <li key={action.name} className="rounded-md border border-gray-200 p-3">
              <ActionName action={action} />
              <dl className="mt-2 grid grid-cols-3 gap-2 text-xs">
                <div>
                  <dt className="text-gray-500">Visible</dt>
                  <dd className="mt-0.5">
                    <Visibility visible={action.visible} />
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">Ends session</dt>
                  <dd className="mt-0.5 text-gray-700">{action.endsSession}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Duration</dt>
                  <dd className="mt-0.5 text-gray-700">{action.duration}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
