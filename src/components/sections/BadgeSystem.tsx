import { Ban, RotateCcw, XCircle } from "lucide-react";

// Specimen sheet of Dashy's status, sanction, and rank badges, grouped by meaning.
// Drawn in the product's dark theme so the badges read the way they do in the app.

const Dot = ({ className }: { className: string }) => <span className={`h-1.5 w-1.5 rounded-full ${className}`} />;

const Pill = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${className}`}>
    {children}
  </span>
);

const Restriction = ({ children }: { children: string }) => (
  <span className="whitespace-nowrap rounded border border-red-800 bg-red-950/70 px-2 py-0.5 font-mono text-xs text-red-400">{children}</span>
);

const Reason = ({ children }: { children: string }) => (
  <span className="rounded border border-gray-700 px-2 pt-1.5 pb-0.5 font-mono text-[11px] uppercase tracking-wide text-gray-300">
    {children}
  </span>
);

const SanctionType = ({
  icon,
  tile,
  title,
  titleClass,
}: {
  icon: React.ReactNode;
  tile: string;
  title: string;
  titleClass: string;
}) => (
  <div className="flex items-center gap-1.5">
    <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md ${tile}`}>{icon}</span>
    <span className={`text-sm font-semibold ${titleClass}`}>{title}</span>
  </div>
);

const Group = ({
  title,
  meaning,
  className = "",
  children,
}: {
  title: string;
  meaning: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`rounded-lg border border-gray-800 bg-[#111522] p-4 ${className}`}>
    <div className="text-sm font-semibold text-white">{title}</div>
    <p className="mt-0.5 text-xs leading-snug text-gray-400">{meaning}</p>
    <div className="mt-4 flex flex-wrap items-center gap-2">{children}</div>
  </div>
);

export const BadgeSystem = () => (
  <div className="w-full rounded-lg bg-[#0b0e16] p-4 md:p-6" role="group" aria-label="Dashy status and badge system specimens">
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Group title="Player state" meaning="Where the account is right now. Amber means enforcement has reached the live game.">
        <Pill className="border-green-800 bg-green-950/60 text-green-400">
          <Dot className="bg-green-400" />
          Online
        </Pill>
        <Pill className="border-gray-700 text-gray-300">
          <Dot className="bg-gray-400" />
          Offline
        </Pill>
        <Pill className="border-amber-700 bg-amber-950/60 text-amber-400">Session ended</Pill>
      </Group>

      <Group
        title="Restrictions"
        meaning="Active restrictions on the account, including silent ones the player never sees. Always red, always in the header."
      >
        <div className="flex w-full flex-wrap items-center gap-2 rounded-md border border-red-900/70 bg-red-950/30 px-3 py-2">
          {/* <Restriction>Suspicious</Restriction> */}
          <Restriction>Shadow Ban</Restriction>
          <Restriction>Matchmaking Ban</Restriction>
          <span className="ml-auto text-xs text-red-400">3 active restrictions</span>
        </div>
      </Group>

      <Group title="Sanction status" meaning="Whether a sanction is still in effect, so history never reads as current.">
        <Pill className="border-green-800 bg-green-950/60 text-green-400">
          <Dot className="bg-green-400" />
          Active
        </Pill>
        <Pill className="border-blue-800 bg-blue-950/60 text-blue-400">
          <Dot className="bg-blue-400" />
          Issued
        </Pill>
        <Pill className="border-gray-700 text-gray-300">
          <Dot className="bg-gray-400" />
          Expired
        </Pill>
      </Group>

      <Group title="Sanction types" meaning="Severity carried by icon and color: amber for temporary holds, red for bans, neutral once lifted.">
        <div className="flex gap-6 w-full">
          <SanctionType
            icon={<XCircle className="h-5 w-5 text-amber-400" />}
            tile="bg-amber-950/70"
            title="Timeout"
            titleClass="text-amber-400"
          />
          <SanctionType
            icon={<Ban className="h-5 w-5 text-red-400" />}
            tile="bg-red-950/70"
            title="Ban"
            titleClass="text-red-400"
          />
          <SanctionType
            icon={<RotateCcw className="h-5 w-5 text-gray-300" />}
            tile="bg-gray-800/70"
            title="Expired"
            titleClass="text-white"
          />
        </div>
      </Group>

      <Group title="Reason tags" meaning="Why the action was taken, in a neutral outline so the reason never competes with severity.">
        <Reason>Cheating</Reason>
        <Reason>Toxicity / appeal pending</Reason>
        <Reason>Account flag</Reason>
      </Group>

      <Group title="Watch levels" meaning="How closely an account is being watched. Watched rows carry an amber edge in every list.">
        <Pill className="border-amber-700 bg-amber-950/60 text-amber-400">
          <Dot className="bg-amber-400" />
          Watch
        </Pill>
        <Pill className="border-red-800 bg-red-950/60 text-red-400">
          <Dot className="bg-red-500" />
          Alert
        </Pill>
        <div className="flex w-full items-center gap-3 border-l-2 border-amber-500 bg-amber-950/30 px-3 py-2 font-mono text-xs">
          <span className="text-gray-300">8</span>
          <span className="font-sans text-sm text-white">Wraithreign</span>
          <Restriction>Suspicious</Restriction>
          <span className="ml-auto text-white">+167</span>
        </div>
      </Group>

      <Group className="md:col-span-2" title="Rank and metrics" meaning="Monospaced numbers for scanning. Blue marks the metric that matters most; arrows show rank movement.">
        <div className="flex w-full flex-wrap items-end gap-x-6 gap-y-3">
          <div className="flex items-baseline gap-3">
            <span className="text-xs text-gray-400">
              PC RANK <span className="font-semibold text-blue-400">#3</span>
            </span>
            <span className="font-mono text-lg font-semibold text-white">
              34,416 <span className="text-[10px] font-normal text-gray-500">RP</span>
            </span>
          </div>
          <div className="flex gap-2">
            <div className="rounded-md border border-blue-700 bg-blue-950/70 px-3 py-2">
              <div className="font-mono text-[10px] uppercase tracking-wide text-blue-300/70">Current RP</div>
              <div className="font-mono text-lg font-semibold text-blue-400">34,416</div>
            </div>
            <div className="rounded-md border border-gray-800 bg-[#151a27] px-3 py-2">
              <div className="font-mono text-[10px] uppercase tracking-wide text-gray-400">Avg placement</div>
              <div className="font-mono text-lg font-semibold text-white">2.4</div>
            </div>
          </div>
          <div className="flex items-center gap-4 font-mono text-sm">
            <span className="text-blue-400">↑ 10</span>
            <span className="text-gray-500">↓ 3</span>
            <span className="text-gray-500">–</span>
          </div>
        </div>
      </Group>
    </div>

    {/* The same badges, as they appear on two surfaces (from the prototype) */}
    <div className="mt-3 rounded-lg border border-gray-800 bg-[#111522] p-4">
      <div className="text-sm font-semibold text-white">Same badges, every surface</div>
      <p className="mt-0.5 text-xs text-gray-400">Ghostbyt3 on the player profile and on the PC leaderboard.</p>
      <div className="mt-4 space-y-3">
        <div>
          <div className="mb-2 font-mono text-[10px] uppercase tracking-wide text-gray-500">Player profile</div>
          <div className="space-y-2 rounded-md border border-gray-800 bg-[#0b0e16] p-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-lg font-semibold text-white">Ghostbyt3</span>
              <Pill className="border-gray-700 text-gray-300">
                <Dot className="bg-gray-400" />
                Offline
              </Pill>
              <Pill className="border-amber-700 bg-amber-950/60 text-amber-400">Session ended</Pill>
            </div>
            <div className="flex flex-wrap gap-2 rounded-md border border-red-900/70 bg-red-950/30 px-2 py-1.5">
              <Restriction>Suspicious</Restriction>
              <Restriction>Shadow Ban</Restriction>
              <Restriction>Matchmaking Ban</Restriction>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2 font-mono text-[10px] uppercase tracking-wide text-gray-500">Leaderboard row</div>
          <div className="flex items-center gap-3 rounded-md border border-gray-800 bg-[#0b0e16] p-3">
            <span className="font-mono text-sm text-gray-300">3</span>
            <div className="w-28 flex-shrink-0">
              <div className="text-sm text-white">Ghostbyt3</div>
              <div className="font-mono text-[10px] text-gray-500">1009264743537</div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Restriction>Suspicious</Restriction>
              <Restriction>Shadow Ban</Restriction>
              <Restriction>Matchmaking Ban</Restriction>
            </div>
            <div className="ml-auto hidden flex items-end gap-4 sm:flex">
              <span className="font-mono text-sm text-white">34,416</span>
              <Pill className="border-gray-700 text-gray-300">
                <Dot className="bg-gray-400" />
                Offline
              </Pill>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
