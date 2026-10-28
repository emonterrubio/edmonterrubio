import { Fragment } from "react";
import { Monitor } from "lucide-react";

// Event signup vetting for the EA Anti-Cheat project: check outcomes for two events,
// and the same-machine alts that would have slipped past a ban list on its own.
// Counts and pairs follow the prototype's Competitive integrity page.

interface AltPair {
  signup: string;
  banned: string;
  reason: string;
}

interface EventResult {
  name: string;
  starts: string;
  signups: number;
  banList: number;
  sameMachine: number;
  clear: number;
  pro: number;
  alts: AltPair[];
}

const EVENTS: EventResult[] = [
  {
    name: "Apex Legends Split Qualifier",
    starts: "Aug 18",
    signups: 30,
    banList: 10,
    sameMachine: 4,
    clear: 16,
    pro: 4,
    alts: [
      { signup: "Ghostwolf", banned: "Zephyrre1gn36", reason: "PIL ban" },
      { signup: "Lumen_w0lf", banned: "Cryptfang", reason: "Shadow ban" },
      { signup: "Lumenhunt", banned: "Wraithreign", reason: "Sanctioned" },
      { signup: "Neon_wave", banned: "Ghostbyt3", reason: "Shadow ban" },
    ],
  },
  {
    name: "Battlefield Season Open",
    starts: "Aug 22",
    signups: 21,
    banList: 7,
    sameMachine: 3,
    clear: 11,
    pro: 3,
    alts: [
      { signup: "Cinder5421", banned: "xXLumen_fluxXx", reason: "Sanctioned" },
      { signup: "Ghost_flux", banned: "Drift_strike", reason: "Sanctioned" },
      { signup: "Onyx_byte", banned: "Stormclash", reason: "Sanctioned" },
    ],
  },
];

const SEGMENTS = [
  { key: "banList", label: "Ban list", bar: "bg-red-500", text: "text-red-700" },
  { key: "sameMachine", label: "Alts", bar: "bg-amber-400", text: "text-amber-700" },
  { key: "clear", label: "Clear", bar: "bg-blue-200", text: "text-blue-700" },
] as const;

const EventCard = ({ event }: { event: EventResult }) => {
  const blocked = event.banList + event.sameMachine;
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <span className="text-sm font-semibold text-black">{event.name}</span>
        <span className="text-xs text-gray-500">Starts {event.starts} · checked Aug 10</span>
      </div>

      {/* Outcome bar */}
      <div className="mt-3 flex h-3 overflow-hidden rounded-full" aria-hidden="true">
        {SEGMENTS.map((s) => (
          <div key={s.key} className={s.bar} style={{ width: `${(event[s.key] / event.signups) * 100}%` }} />
        ))}
      </div>
      <dl className="mt-3 grid grid-cols-4 gap-2 text-xs">
        <div>
          <dt className="text-gray-500">Signups</dt>
          <dd className="font-mono text-base font-semibold text-black">{event.signups}</dd>
        </div>
        {SEGMENTS.map((s) => (
          <div key={s.key}>
            <dt className="text-gray-500">{s.label}</dt>
            <dd className={`font-mono text-base font-semibold ${s.text}`}>{event[s.key]}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-gray-600">
        <span className="font-semibold text-black">{blocked} of {event.signups}</span> flagged before the event.{" "}
        <span className="font-semibold text-black">{event.pro}</span> cleared signups carry a pro tag.
      </p>

      {/* Same-machine alts */}
      <div className="mt-4 border-t border-gray-100 pt-3">
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Caught by machine ID</div>
        <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.3fr)] items-center gap-x-2 gap-y-1.5 text-sm">
          <span className="text-[11px] text-gray-400">New signup</span>
          <span />
          <span className="text-[11px] text-gray-400">Banned account</span>
          {event.alts.map((alt) => (
            <Fragment key={alt.signup}>
              <span className="truncate font-medium text-black">{alt.signup}</span>
              <Monitor className="h-3.5 w-3.5 text-amber-600" aria-label="same machine" />
              <span className="flex min-w-0 flex-wrap items-center gap-1.5">
                <span className="truncate text-gray-700">{alt.banned}</span>
                <span className="whitespace-nowrap rounded border border-red-200 bg-red-50 px-1.5 py-0.5 text-[11px] text-red-700">
                  {alt.reason}
                </span>
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export const VettingSummary = () => (
  <div className="w-full rounded-lg border border-gray-200 bg-white p-4 md:p-6">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {EVENTS.map((event) => (
        <EventCard key={event.name} event={event} />
      ))}
    </div>
    <p className="mt-4 rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-700">
      A ban list alone would have let <span className="font-semibold text-black">7 banned players</span> back in on new accounts. The
      machine ID check catches them, and each alt points to the account it belongs to.
    </p>
  </div>
);
