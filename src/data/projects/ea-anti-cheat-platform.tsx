import React from "react";
import { Pointer, Lightbulb } from "lucide-react";
import {
  Text as TextBlock,
  HeaderWithList,
  HeaderWithText,
  Callout,
  List,
  Steps,
  Flowchart,
  MetricGrid,
  InfoBoxGrid,
  Custom,
} from "../contentHelpers";
import { BeforeStateFlow } from "@/components/sections/BeforeStateFlow";
import { SolutionArchitecture } from "@/components/sections/SolutionArchitecture";
import { AnnotatedImage } from "@/components/sections/AnnotatedImage";
import { EvidenceTimeline } from "@/components/sections/EvidenceTimeline";
import { BadgeSystem } from "@/components/sections/BadgeSystem";
import { AuthoringFlow } from "@/components/sections/AuthoringFlow";
import { ActionLadder } from "@/components/sections/ActionLadder";
import { ReviewComparison } from "@/components/sections/ReviewComparison";
import { RankedClimb } from "@/components/sections/RankedClimb";
import { VettingSummary } from "@/components/sections/VettingSummary";
import { AssistBoundary } from "@/components/sections/AssistBoundary";
import { AiRoadmap } from "@/components/sections/AiRoadmap";
import { WorkflowPath } from "@/components/sections/WorkflowPath";
import { ProjectContent } from "./types";

export const eaAntiCheatPlatform: ProjectContent = {
  // HERO SECTION
  title: "Dashy: AI-Assisted Anti-Cheat Investigation",
  subtitle: "From Fragmented Evidence to Defensible Enforcement",
  imageSrc: "/images/ea-anti-cheat-hero.png",
  imageAlt: "Dashy anti-cheat player investigation workspace",

  // METADATA SECTION
  role: "Design Lead",
  company: "Electronic Arts",
  year: "2026",
  duration: "4+ months",
  platform: "Web",
  tools: "React, Next.js, TypeScript, Tailwind, Cursor, Claude, Prisma, Vercel",
  logo: "/images/logos/ea-logo.svg",
  achievement: "Unified analyst investigation and enforcement tooling",

  // TEAM SECTION
  team: "I joined as the dedicated designer after requirements were already set with the game team. I partnered with the product team for Anti-Cheat, Dashy engineering, the data platform team, game-safety analysts, and competitive integrity ops.",

  // RESPONSIBILITIES SECTION
  responsibilities: [
    "**End-to-end product design** for investigation, enforcement, monitoring, and competitive integrity",
    "**Requirements synthesis** from engineering epics and migration scoping into design-ready user needs",
    "A **unified icon and badge system** for player status, rank, and performance",
    "**High-fidelity designs** and coded prototypes in the production stack",
    "An **AI strategy** for analyst workflows, defined as a phased roadmap",
  ],

  // OVERVIEW SECTION
  overviewSubheader: "One Workspace for Every Cheating Decision",
  overview:
    "Dashy is EA's **unified anti-cheat investigation and enforcement platform**. For Apex Legends to retire its legacy game-safety tool, it has to carry every capability analysts depend on today so a legacy game-safety tool can be retired. An **AI layer scales analyst judgment** across that work. It drafts, scores, and recommends. Humans, or rules a human has reviewed, still make the call.",

  // PROBLEM SECTION
  problemSubheader: "Cheating decisions depend on evidence scattered across tools that cannot act on it",
  problem:
    "The game's entire safety operation still runs on a legacy tool, and it cannot move until every capability analysts depend on exists in Dashy. That operation spans **four platforms** (PC, Xbox, PlayStation, and Switch), about **2.35 billion historical session records**, and competitive events with roughly **5,000 signups** each.",
  problemContent: [
    TextBlock("A typical investigation today means rebuilding the player from scratch:"),
    Flowchart([
      { label: "BANS", action: "History in one tool" },
      { label: "STATS", action: "Gameplay in another" },
      { label: "NOTES", action: "Reasoning in free text" },
      { label: "SESSIONS", action: "Evidence via a data pull" },
    ]),
    TextBlock("Group behavior such as boosting or teaming stays invisible, because every view is account by account."),
    TextBlock("**Five core pain points** made the migration a design problem, not only a data move:"),
    List([
      "**Fragmented evidence.** Bans, detections, reports, in-house detections, notes, and sessions live in different systems.",
      "**A gap between decision and effect.** A ban recorded in the infraction ledger does not end the player's active session.",
      "**Throughput only automation can absorb.** Rules process reports and detections at a volume no analyst team can review by hand.",
      "**Group behavior is structurally hidden.** Boosting, teaming, and bot lobbies show up in who played together.",
      "**High-stakes actions without a designed workflow.** Enforcement rules, ranked corrections, and event vetting were being built from AI-generated mocks, with no preview, review, or audit.",
    ], true),
    Custom(<BeforeStateFlow />, "How an investigation moves across separate tools today"),
    TextBlock("**The cost:** slower time-to-action on active cheaters, inconsistent sanctions when prior history is missed, and false positives that erode player trust. Losing the automation alone would turn a pipeline into a manual backlog."),
    TextBlock("Four personas share the platform and enter it with different questions. The design has to serve each one without forking the product."),
    InfoBoxGrid([
      {
        title: "Game-safety analyst",
        items: [
          "Is this account behaving like a legitimate player?",
          "Failure: banning on report volume, or missing a prior sanction",
        ],
        variant: "blue",
      },
      {
        title: "Enforcement rule author",
        items: [
          "Which signals should trigger which action, automatically?",
          "Failure: a rule that over-bans thousands of players before anyone notices",
        ],
        variant: "blue",
      },
      {
        title: "Competitive integrity ops",
        items: [
          "Is this pro, event entrant, or leaderboard climber clean?",
          "Failure: a known cheater or banned alt plays in a televised event",
        ],
        variant: "blue",
      },
      {
        title: "Ops lead / appeals reviewer",
        items: [
          "Was this decision correct, and can we prove it?",
          "Failure: a sanction that cannot be explained or defended on appeal",
        ],
        variant: "blue",
      },
    ], 2),
  ],

  // DESIGN APPROACH SECTION
  designApproachSubheader: "Evidence before the verdict",
  designApproach:
    "The launch goal is **migration parity**: every must-have the game team depends on has to exist in Dashy. The product goal is faster, defensible decisions that scale across titles. Three principles, drawn from those requirements, guided every surface:",
  designApproachContent: [
    Steps([
      {
        title: "Evidence before verdict",
        description: "No action without visible evidence. Every ban, flag, or AI suggestion links to the records behind it. Vendor detections, in-house detections, and reports stay visually distinct because they carry different confidence.",
      },
      {
        title: "Proportionate and previewable enforcement",
        description: "The toolkit is graduated: silent time-outs, shadow bans, ranked corrections, and permanent bans. High-impact actions show their blast radius before submit, and stay reviewable after.",
      },
      {
        title: "Automate the obvious, escalate the ambiguous",
        description: "Rules and models handle high-confidence volume. Analysts handle judgment calls. The interface makes it clear which decisions were automated, by which rule, and how to override.",
      },
    ]),
    Callout("These principles shaped **four workflow surfaces** and an AI layer that runs across all of them. Providers bring every evidence source into one workspace, and every decision leaves through the same enforcement and audit path.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: "rotate(90deg)" }} />,
      withBackground: true,
    }),
    Custom(<SolutionArchitecture />, "Six providers, four surfaces, an AI layer, and two outcomes"),
  ],

  solutionSections: [
    {
      title: "Player Investigation Profile",
      subheader: "One place to decide whether an account is legitimate",
      text: "Without gameplay data, the player view is a shell. An analyst can see sanctions and reports, but not **how the account plays**, which is what separates a false positive from a confirmed cheater.",
      content: [
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-profile-overview.png"
            alt="Dashy player profile Overview tab for a flagged Apex Legends account"
            width={1476}
            height={925}
            callouts={[
              {
                x: 39.1,
                y: 14.2,
                title: "Enforcement you can verify",
                text: "Live status shows whether a sanction actually **ended the player's session**, not just whether it was recorded.",
              },
              {
                x: 41.5,
                y: 24.4,
                title: "Hidden sanctions, made obvious",
                text: "Shadow and matchmaking bans are invisible to the player by design, so they lead the profile for the analyst.",
              },
              {
                x: 67.1,
                y: 31.1,
                title: "Every evidence type, one record",
                text: "Activity, enforcement, bans, detections, notes, and ranked sit **one tab apart** instead of in separate tools.",
              },
              {
                x: 22.4,
                y: 35.7,
                title: "Cross-platform identity",
                text: "Nucleus, persona, and first-party IDs sit beside the **device fingerprint**, so alts and shared machines can be traced.",
              },
              {
                x: 24.3,
                y: 78.1,
                title: "How the account plays",
                text: "Stryder gameplay stats give the **behavioral baseline** that separates a strong player from a cheater.",
              },
            ]}
          />,
          "A single player picture across evidence types"
        ),
        Custom(<EvidenceTimeline />, "One account's evidence on a shared timeline, where a pattern becomes visible"),
        TextBlock("The profile brings identity, gameplay, and history into one record across all four platforms. **Ban and detection history**, including legacy records, shows whether this is a repeat or a first offence. Player reports stay attributed to the correct account. **Silent matchmaking bans and shadow bans** appear in that history, because they are invisible to the player by design and have to be obvious to the analyst."),
        TextBlock("Notes carry author and timestamp, since analyst reasoning cannot be reconstructed from structured data alone. In-house detections sit apart from vendor detections. Performance charts make anomalies visible at a glance, and a **shared icon and badge system** keeps status, rank, and key metrics scannable on the profile, the leaderboard, and the lobby."),
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-activity-reports.png"
            alt="Received report history for a flagged Apex Legends account: report counts, a 30-day bar chart, and a breakdown by reason"
            width={1262}
            height={394}
            callouts={[
              {
                x: 86,
                y: 26,
                title: "Recency at a glance",
                text: "**6 of the last 16 reports** landed in the past week, so a rising pattern shows before anyone opens the table.",
              },
              {
                x: 61.1,
                y: 53.5,
                title: "Trends, not rows",
                text: "Daily bars turn the report log into a trend, and the **Aug 10 spike** is visible without reading a single row.",
              },
              {
                x: 64.6,
                y: 60,
                title: "What the reports claim",
                text: "**58 of 83** lifetime reports cite cheating, which separates a sustained pattern from one-off griefing.",
              },
            ]}
          />,
          "Report trends and reasons, readable at a glance"
        ),
        Custom(<BadgeSystem />, "One visual language for status, rank, and metrics"),
        HeaderWithList("Key Capabilities", [
          "A **unified player timeline** across bans, detections, reports, notes, and sessions",
          "**Cross-platform identity** and gameplay stats from the matchmaking service",
          "**At-a-glance performance anomalies**, instead of tables the analyst has to read",
          "A **consistent status badge system** across profile, leaderboard, and lobby",
        ], true, 3),
        HeaderWithText("Impact", "Target: a **50% reduction** in the median time from opening a reported account to a decision.", 3),
      ],
    },
    {
      title: "Enforcement Engine",
      subheader: "Turn signals into actions, safely and at scale",
      text: "The enforcement backend was scaffolded, and its UI had no designer. Rule authors need to wire signals to actions, **see the impact before a rule goes live**, and prove afterward what happened. Automation is the capability most likely to decide whether the migration is accepted.",
      content: [
        Custom(<AuthoringFlow />, "The steps the AI-generated mocks skipped, added before and after submit"),
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-enforcement-query.png"
            alt="Enforcement Engine query editor above a live results preview of matching players"
            width={1206}
            height={900}
            callouts={[
              { x: 8.5, y: 12, title: "The action, set up front", text: "Action, reason, duration, and owner are chosen **before anyone sees a submit button**." },
              { x: 60.8, y: 38.1, title: "Filters are the rule", text: "The table's filters define who the action targets, so the query and its result are the same view." },
              { x: 83.6, y: 32.6, title: "Live blast radius", text: "Every visible row is a player the action will hit, with the **match count kept in view**." },
              { x: 94.9, y: 56.1, title: "Watched accounts stand out", text: "Amber-edged rows flag accounts already on watch, so they aren't swept up unnoticed." },
              { x: 84.5, y: 21.5, title: "Review, not submit", text: "The primary button opens a review that **carries the player count**, never a one-click action." },
            ]}
          />,
          "A query and its live preview of affected players, in one view",
        ),
        Custom(<ReviewComparison />, "The same review step, weighted to the severity of the action"),
        TextBlock("I designed the authoring flow the AI-generated mocks had skipped: a query for who the rule targets, a **results preview of affected players**, and a review step that records owner, reason, enforcement code, and title. Actions are graduated. A time-limited matchmaking ban, a shadow ban, and a permanent ban are different responses. Silent actions stay silent to the player, and the decision still has to **reach the game and end the active session** when the sanction requires it."),
        Custom(<ActionLadder />, "Graduated actions, from a warning to a permanent ban"),
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-enforcement-audit-full.png"
            alt="Enforcement Audit table listing time, player, action, reason, actor, origin, and note"
            width={1220}
            height={910}
            callouts={[
              { x: 15.6, y: 4.2, title: "One log for every action", text: "Single-player actions, rule sweeps, and ranked adjustments in **one audit trail**." },
              { x: 8.3, y: 20.9, title: "When, to the second", text: "Every entry is timestamped, so a sequence of actions can be reconstructed." },
              { x: 67.9, y: 20.9, title: "By whom", text: "The actor is recorded on every action, manual or automated." },
              { x: 86.3, y: 20.9, title: "Why, in the analyst's words", text: "The note keeps the reasoning, such as **telemetry confirmed or reports escalated**, with the action." },
              { x: 45.5, y: 38.4, title: "Silent actions are still logged", text: "A silent queue hold is invisible to the player, **never to the audit**." },
              { x: 68.4, y: 45.3, title: "Manual or by rule", text: "Origin separates actions an analyst took by hand from ones a **rule issued at scale**." },
            ]}
          />,
          "What happened, when, by whom, and why",
        ),
        HeaderWithList("Key Capabilities", [
          "A **visual rule builder** that connects a detection, report pattern, or score to an action",
          "**Blast-radius preview** before a rule acts on real players",
          "**Graduated and silent actions**, from time-outs to permanent bans",
          "A **full audit trail** for every enforcement action, including migrated automation jobs",
        ], true, 3),
        HeaderWithText("Impact", "Target: the share of enforcement actions issued by rules stays **at or above the legacy level** at launch, while the appeal overturn rate is held down.", 3),
      ],
    },
    {
      title: "Monitoring",
      subheader: "See the top of the ladder and the shape of a match",
      text: "Integrity problems are most visible, and most damaging, at the top of ranked play. Much of the abuse is **group behavior**. Boosting, teaming, and bot lobbies do not show up in any one account.",
      content: [
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-leaderboard.png"
            alt="Apex Legends PC leaderboard with season tiles, lobby lookup, Watch and Alert filters, and ranked rows with restrictions"
            width={1244}
            height={928}
            callouts={[
              { x: 73.6, y: 12.6, title: "Bans at the top, counted", text: "How many banned players still sit on the leaderboard, in red, **before the list starts**." },
              { x: 42.4, y: 18.8, title: "A public-list rule, stated", text: "Sanctioned players under the Masters line are off the public list, and the page says so." },
              { x: 27.3, y: 25.6, title: "Lobby lookup by player", text: "Paste a player ID to open the match they played, **no match ID needed**." },
              { x: 43, y: 32.2, title: "Watch and Alert, one click", text: "Filter to watched accounts. Their rows carry an **amber edge** in the full list too." },
              { x: 37, y: 55.8, title: "Restrictions in the row", text: "Active restrictions show beside the name, including silent ones the player never sees." },
              { x: 83, y: 48, title: "Swings stand out", text: "An outsized last-match gain turns **amber**, so a swing is visible without leaving the list." },
              { x: 95.1, y: 85.2, title: "Movement over a week", text: "Seven-day rank change shows who is climbing, not just who is high." },
            ]}
          />,
          "The top of the ladder, with restrictions and swings in the row",
        ),
        TextBlock("The leaderboard tracks the highest-scrutiny cohort: position, identity, active restrictions, level, ranked score, status, last match, last-match points, and seven-day rank movement. An implausible swing, or a player climbing while inactive, is visible **without leaving the list**. A single row shows a swing. The player's ranked history shows **the pattern behind it**."),
        Custom(<RankedClimb />, "One flagged account's last 25 ranked matches, where a pattern becomes visible"),
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-ranked-history.png"
            alt="Zephyrre1gn36's Ranked History tab: match time, placement, kills, damage, RP change, RP after, region, and an Open lobby link per row"
            width={1245}
            height={912}
            callouts={[
              { x: 9.6, y: 15.9, title: "The restriction comes along", text: "The player's active restriction stays in the header on every tab." },
              { x: 29.3, y: 35.9, title: "Lookup from the profile", text: "The same lobby lookup is available **inside the investigation**." },
              { x: 62.8, y: 52.9, title: "Outsized gains, flagged", text: "The same amber marks the swings match by match." },
              { x: 23.6, y: 77.5, title: "Placement at a glance", text: "First-place finishes are highlighted, so a streak reads down the column." },
              { x: 97.1, y: 52.9, title: "Every match opens its lobby", text: "**Open lobby** on each row goes from one match straight to everyone in it." },
            ]}
          />,
          "Ranked history, with a lobby one click from every match",
        ),
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-lobby.png"
            alt="Lobby dialog for an Aug 7 match in sa-east: 20 squads and 60 players grouped by placement, with restriction badges"
            width={639}
            height={904}
            maxWidth={520}
            callouts={[
              { x: 59.6, y: 5.9, title: "The whole match", text: "Time, region, and size: **20 squads, 60 players**." },
              { x: 20.3, y: 11.2, title: "Grouped by squad", text: "Players are grouped by placement, so the squad is the unit, as it is in coordinated play." },
              { x: 21.6, y: 19.1, title: "Flags on other players", text: "Restrictions show on **everyone in the lobby**, not just the suspect." },
              { x: 83.7, y: 36.3, title: "This squad, this player", text: "The suspect and their squad are labeled, so the starting point is never lost." },
              { x: 17.2, y: 92.5, title: "A pattern across squads", text: "A second PIL-banned player in the same match is **visible at once**." },
            ]}
          />,
          "The whole match, grouped by squad, with restrictions on every player",
        ),
        TextBlock("Lobby lookup starts from a player ID, or from any match in a player's ranked history, and shows the whole match **grouped by squad**, the unit of coordinated play. Restrictions follow every player into the lobby, so a flagged teammate or opponent is visible at once. Any row opens the player profile, so monitoring and investigating are one workflow."),
        HeaderWithList("Key Capabilities", [
          "An **anomaly-first leaderboard** of the top 750 players on each platform",
          "Restrictions, last-match points, and seven-day rank movement **in every row**",
          "A **ranked history** that turns a single swing into a visible pattern",
          "A **squad-grouped lobby view** reached from a player ID or any ranked match",
          "**One click** from any leaderboard or lobby row into the investigation profile",
        ], true, 3),
        HeaderWithText("Impact", "Target: less time from a **leaderboard anomaly to an opened investigation**.", 3),
      ],
    },
    {
      title: "Competitive Integrity",
      subheader: "Protect the competitive circuit and correct the ladder",
      text: "A cheater in a competitive event is a reputational incident, not a routine case. Events draw about **5,000 signups**. Banned players return on alt accounts from the same machine, and a sanction alone leaves ill-gotten ranked points on the public ladder.",
      content: [
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-competitive-vetting.png"
            alt="Competitive integrity page for the Apex Legends Split Qualifier: signup counts, check filters, and each signup's check result"
            width={948}
            height={990}
            callouts={[
              { x: 32.3, y: 6.8, title: "One view per event", text: "Each event has its own tab, with its game and start time up front." },
              { x: 72.3, y: 13.3, title: "Results before the event", text: "Signups, ban list hits, same-machine alts, and pros, **counted at a glance**." },
              { x: 35.7, y: 18.5, title: "Filter to what needs action", text: "One click narrows the list to a single check result." },
              { x: 47.5, y: 66.1, title: "Why a signup was flagged", text: "The detail names the sanction behind each **ban list** hit." },
              { x: 55.7, y: 70.1, title: "Alts point to their account", text: "A **same-machine alt** names the banned account it shares a machine with." },
              { x: 75.1, y: 90.2, title: "Pros stay tagged", text: "Pro status stays on the player, so it changes how a report is handled." },
              { x: 97.9, y: 29.7, title: "Correct from the row", text: "**Adjust** on any signup opens a ranked correction for that player." },
            ]}
          />,
          "Signup checks for one event, run before it starts",
        ),
        Custom(<VettingSummary />, "Two events, the same checks, and the alts a ban list alone would miss"),
        TextBlock("Vetting runs high-confidence checks on every signup and enforces the event ban list with **same-machine alt detection**, so a banned player can't return on a new account from the same machine. Pros stay tagged through a daily refresh, because pro status changes how a report is handled and who is informed. Results stay reviewable per event, and a player's competitive profile carries checks forward instead of repeating them."),
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-competitive-adjustment.png"
            alt="Ranked adjustment form for Cryptfang above a list of recent ranked adjustments"
            width={1250}
            height={590}
            callouts={[
              { x: 17.8, y: 8.1, title: "The player, in context", text: "The correction starts from the signup row, with rank and current points shown." },
              { x: 35.6, y: 24.7, title: "The ladder follows", text: "A negative change removes points, and the **active season ladder is re-ranked**." },
              { x: 76.6, y: 13, title: "A note on the record", text: "The note is **shown on the player record**, so the correction never looks like a bug." },
              { x: 86.1, y: 15.3, title: "Review, not apply", text: "The button opens a review, the same pattern as every enforcement action." },
              { x: 46, y: 43.4, title: "Logged with a code", text: "Every adjustment lands in the list with its actor, **enforcement code**, and time." },
              { x: 39.8, y: 57.3, title: "Manual and automated, together", text: "Analyst corrections sit beside ones from automated tools like **skyfall.bot**." },
            ]}
          />,
          "A ranked correction, from the signup row to the log",
        ),
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-competitive-adjust-dialog.png"
            alt="Review dialog: Adjust ranked points for Cryptfang, with owner, enforcement code, title, reason, point change, and new score"
            width={479}
            height={362}
            maxWidth={520}
            callouts={[
              { x: 75.6, y: 18.8, title: "Scope, restated", text: "Game, action, and player count, as in every enforcement review." },
              { x: 46.2, y: 61.9, title: "The result, before it happens", text: "The **new score** is shown before the points move." },
              { x: 65.4, y: 76, title: "What gets written", text: "A note on the player record and a row in the **audit**." },
              { x: 72, y: 84.3, title: "Named, not OK", text: "The button says **Adjust points**, and the info icon marks a correction, not a ban." },
            ]}
          />,
          "The review step for a ranked correction",
        ),
        TextBlock("Ranked correction is designed once for two shooter titles. Adjusting points for the active season split keeps cheating gains off the ladder, and the season ladder is re-ranked. Every adjustment is **written to the audit and noted on the player record**, so a silent change does not look like a bug. Sanctioned players below the Masters threshold come off the public leaderboard."),
        HeaderWithList("Key Capabilities", [
          "**Bulk signup vetting** against the current ban list, run before each event",
          "**Same-machine alt detection**, so an event ban is not defeated by a new account",
          "A **per-event view** of signups, check results, and pro tags",
          "An **auditable ranked correction**, reviewed before it applies, including the migrated history of past adjustments",
        ], true, 3),
        HeaderWithText("Impact", "Target: **70% fewer analyst hours** per event of about 5,000 signups, and no confirmed cheater in a premier event.", 3),
      ],
    },
    {
      title: "AI Layer",
      subheader: "Assist first, recommend second, automate only what is proven",
      text: "AI in Dashy follows a proven anti-cheat pattern. It assists, then recommends, then automates only high-confidence cases behind rules. **A human stays accountable for every sanction.** Each phase earns the trust the next one needs.",
      content: [
        Custom(
          <AnnotatedImage
            src="/images/ea-anti-cheat-ai-case-brief.png"
            alt="Player Overview tab for Makoflux, opening with a case brief of five cited sentences labeled Draft only. Does not change standing."
            width={1270}
            height={450}
            callouts={[
              { x: 79.6, y: 43.1, title: "Draft only", text: "The label says it outright: the brief **does not change standing**." },
              { x: 51, y: 55.3, title: "One sentence per source", text: "Season stats, detections, received and outgoing reports, and the latest note." },
              { x: 52.3, y: 89.1, title: "Every sentence cites", text: "Each chip **opens its tab**: Ranked, Bans, Detections, Activity, or Notes." },
              { x: 24.8, y: 42.5, title: "No record, no sentence", text: "Makoflux has no **ban-history rows**, so the brief has no ban sentence. It does not fill gaps." },
              { x: 64, y: 32.9, title: "First thing on the profile", text: "The brief opens the **Overview** tab, above the player info it summarizes." },
            ]}
          />,
          "The case brief: one cited sentence per source with a record",
        ),
        Custom(<AssistBoundary />, "The assist phase reads and drafts. Standing changes only through enforcement review."),
        Steps([
          {
            title: "Phase 1: Assist",
            description: "Read-and-draft features only. The case brief opens a player's Overview with one sentence for each source that has a record: season stats, ban history, detections, received reports, outgoing reports, and the latest player note. A source with no record is skipped, and each citation opens that tab. Report triage is a **read-only queue of 40 players**, ordered by received reports and then the newest report. It orders, it does not score. A rule written in words only fills the existing enforcement preview. It does not create a rule. Standing changes only when that preview goes through the existing review dialog and **an analyst confirms**.",
          },
          {
            title: "Phase 2: Recommend",
            description: "Scored, explainable recommendations feed queues, not sanctions. Behavior scores, leaderboard anomalies, co-play graphs, and alt-account links each show confidence, the contributing signals, and the matches or hardware behind the link. Weak links route to review.",
          },
          {
            title: "Phase 3: Automate with oversight",
            description: "Proven, high-precision cases can move in delayed ban waves that an analyst samples and can pause or roll back. An investigation agent drafts a recommendation. It cannot issue the sanction. Appeal assist surfaces likely false positives first, and a human decides every appeal.",
          },
        ]),
        Custom(<AiRoadmap />, "Assist, then recommend, then automate, each gated on measured precision"),
        HeaderWithList("Guardrails", [
          "**Human accountability.** No model output issues a sanction on its own.",
          "**Explainability.** Every score, flag, and summary shows the evidence behind it.",
          "**Calibrated confidence**, shown before an analyst acts, not after.",
          "**Fairness monitoring** of false positives by platform, region, and input device.",
          "Suggestions, accepted or overridden, are **logged beside the final decision**.",
        ], true, 3),
        HeaderWithText("Impact", "AI acceptance is tracked from Phase 1 and read **alongside the appeal overturn rate**, so trust is measured rather than assumed.", 3),
      ],
    },
    {
      title: "",
      subheader: "Complete User Workflow",
      content: [
        TextBlock("The surfaces are one path, from noticing a problem to proving the decision:"),
        Custom(<WorkflowPath />, "Monitor, investigate, decide, enforce, audit"),
        TextBlock("What was a reconstruction across tools becomes a **single workspace an analyst can defend**."),
      ],
    },
    {
      title: "",
      subheader: "Business Impact",
      text: "These figures are **targets**, not reported results. Baselines still need to be measured on the legacy tool before any improvement can be claimed.",
      content: [
        MetricGrid([
          { value: "50%", label: "Faster time to decision" },
          { value: "<1 min", label: "Decision to effect" },
          { value: "≥ legacy", label: "Automated action share" },
          { value: "<0.01%", label: "False positive rate" },
        ], 4),
        InfoBoxGrid([
          {
            title: "Migration Parity",
            items: [
              "100% of P0 requirements live at launch",
              "The legacy tool can be retired only when analysts lose nothing they depend on",
            ],
            variant: "blue",
          },
          {
            title: "Audit Coverage",
            items: [
              "100% of enforcement and ranked actions carry a complete record",
              "Who, what, when, why, and which rule",
            ],
            variant: "blue",
          },
          {
            title: "Event Vetting",
            items: [
              "70% fewer analyst hours per event of about 5,000 signups",
              "No confirmed cheater in a premier event",
            ],
            variant: "blue",
          },
          {
            title: "Appeals",
            items: [
              "Overturn rate trending down quarter over quarter",
              "AI acceptance is only meaningful next to this number",
            ],
            variant: "blue",
          },
        ], 2),
      ],
    },
    {
      title: "",
      subheader: "Key Learnings",
      content: [
        Callout("**Joining late means designing from requirements, not research.** Synthesizing epics into user needs was the fastest path to a shared design brief.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true,
        }),
        Callout("**AI-generated mocks are a starting point, not a design.** They missed preview, review, and audit, the steps that make a high-stakes action safe.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true,
        }),
        Callout("**Silent actions need loud internal visibility.** What is hidden from players has to be obvious to analysts.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true,
        }),
        Callout("**Trust in AI is earned in phases.** Assist, then recommend, then automate, each gated on measured precision.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true,
        }),
      ],
    },
  ],
};
