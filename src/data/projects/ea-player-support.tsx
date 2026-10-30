import React from "react";
import { Pointer, Lightbulb } from "lucide-react";
import {
  ImageRow,
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
import { AutonomyLevels } from "@/components/sections/AutonomyLevels";
import { ProjectContent } from "./types";

// Source: "EA Help — AI-Native Player Support PRD (v3)", Part 2 portfolio copy.
// Impact figures are design targets: v1 shipped in 2021, the AI layer is a 2026 concept.
// Screens are captured from the live prototype (ea-help.vercel.app) running the scripted demo.

export const eaPlayerSupport: ProjectContent = {
  // HERO SECTION
  title: "EA Help: AI-Powered Player Support",
  subtitle: "From Days to Minutes, Getting Players Back in the Game",
  imageSrc: "/images/ea-player-support.jpg", // PRD suggests: Home with the Help Agent open beside the owned-games carousel
  imageAlt: "EA Help home with the Help Agent",

  // METADATA SECTION
  role: "Lead Product Designer",
  company: "Electronic Arts",
  year: "2021",
  duration: "TBD", // placeholder
  platform: "Web, Mobile Web",
  tools: "Figma", // placeholder: PRD says "Figma, [confirm the rest]"
  logo: "/images/logos/ea-logo.svg",
  achievement: "Designed an AI layer targeting 50%+ self-service resolution",

  // TEAM SECTION
  team: "As part of the EA Help team within Worldwide Customer Experience (WWCE), I collaborated with product management, a technical program manager, engineering, two UX designers, and WWCE support operations.",

  // RESPONSIBILITIES SECTION
  responsibilities: [
    "**End-to-end UX** for EA Help v1, from information architecture to shipped UI",
    "**Intent-based help model** replacing the legacy category taxonomy",
    "**Design principles** for AI-assisted and agentic support",
    "**Prototypes** for the conversational agent and automated recovery flows",
    "**Roadmap partnership** with PM and engineering on a phased AI rollout",
  ],

  // OVERVIEW SECTION
  overviewSubheader: "Help That Does the Work",
  overview:
    "EA Help is the **player support platform for millions of players across 26+ EA titles**. I led the design of v1, which shipped in January 2021 and replaced a maze of categories with **intent-based help**. This case study revisits it in 2026 with an **AI layer that doesn't just find answers, but resolves issues on the player's behalf**.",

  // PROBLEM SECTION
  problemSubheader: "Players could find help, but still did all the work",
  problem:
    "Before EA Help, players with a problem left the game, grabbed their phone, and searched Reddit. v1 brought them back to an **official, personalized experience**. But the effort of getting help didn't go away.",
  problemContent: [
    TextBlock("Take a missing player pack. Recovering it took days of back-and-forth:"),
    Flowchart([
      { label: "DAY 1", action: "Report the missing item" },
      { label: "24+ HOURS", action: "Wait to learn what proof is needed" },
      { label: "PROOF", action: "Capture 5–7 console screenshots" },
      { label: "DAYS LATER", action: "An advisor restores the item" },
    ]),
    TextBlock("**The cost?** An item EA's own systems could have verified in seconds took days to restore, while multi-day resolutions and repeat contacts clogged advisor queues."),
    Callout("v1 fixed navigation. **It did not fix the effort** of describing an issue, gathering proof, and waiting for a human to act.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    }),
    TextBlock("I mapped the friction to **four root causes**:"),
    List([
      "**Translation burden.** \"My game keeps crashing\" doesn't map to a category.",
      "**Proof burden.** Players gather evidence EA already has.",
      "**Search misses.** Keyword search succeeded only **~40% of the time**.",
      "**Lost context.** Switching from web to chat meant explaining everything again.",
    ], true),
    Callout("Leading support teams now deploy AI agents that **resolve, not route**. v1 already exposes the entitlements, purchase history, account, and case APIs an agent needs. The missing piece is an experience that makes those actions **safe, legible, and trustworthy** to a player. That is a design problem first.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    }),
  ],

  // DESIGN APPROACH SECTION
  designApproachSubheader: "Earn the Right to Act",
  designApproach:
    "An AI that can change a player's account is powerful and risky. I framed the work around **three requirements**:",
  designApproachContent: [
    Steps([
      {
        title: "Trust and Transparency",
        description: "Players see what the agent checks, why it suggests something, and exactly what will change before it changes."
      },
      {
        title: "Effort Near Zero",
        description: "If EA knows it (games, platform, purchases), never ask for it."
      },
      {
        title: "A Human Is Always One Tap Away",
        description: "And that human inherits the full story, so players never have to explain twice."
      }
    ]),
    Custom(<AutonomyLevels />, "Agent autonomy levels, from L0 Inform to L3 Human required"),
    Callout("**Key Design Principle**: Autonomy is set by risk, not capability. Reading and explaining are automatic. **Changing an account always needs a confirm tap.** Anything high-risk goes to a person.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    }),
    Callout("These principles guided the AI layer around **4 core features** that work together as a complete player workflow.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    }),
  ],

  // SOLUTION SECTIONS (Flexible - add as many as needed)
  solutionSections: [
    {
      title: "Help Agent",
      subheader: "Describe it your way",
      text: "Players type, speak, or drop a screenshot of an error screen. The agent **already knows their games, platform, and open cases**. It shows short status lines (\"Checking your Madden 26 purchases…\") so waiting feels like progress.",
      content: [
        ImageRow([
          { src: "/images/ea-help-agent-greeting.png", alt: "Help Agent greeting with account context chips for PS5, 5 games, and 1 known issue, plus suggested prompts", caption: "Context loads before the first reply", padding: false },
          { src: "/images/ea-help-agent-conversation.png", alt: "Help Agent answering a login verification question with status lines and a cited help article", caption: "Visible reasoning and a cited answer", padding: false }
        ]),
        HeaderWithList("Key Capabilities", [
          "**Multimodal intake**: text, voice, screenshots, and error codes",
          "**Context pre-filled** from the player's account",
          "**Visible reasoning steps** during tool calls",
          "An always-visible **\"Talk to a person\"**",
        ], true, 3),
        HeaderWithText("Impact (Target)", "**60–70% of conversations** resolved without a handoff.", 3),
      ]
    },
    {
      title: "Instant Content Recovery",
      subheader: "No screenshots. No waiting.",
      text: "Before, missing content took days and a stack of screenshots. Now the agent **finds the transaction, confirms the item never arrived, and shows a restore card**. One tap. Done. The receipt lands in My Cases.",
      content: [
        ImageRow([
          { src: "/images/ea-help-restore-card.png", alt: "Restore preview card for 2,800 Madden Points showing the order, price, platform, and what will change", caption: "Preview before restore", padding: false },
          { src: "/images/ea-help-restore-receipt.png", alt: "Restore receipt with a reference ID, applied time, and an undo option", caption: "Receipt logged in My Cases", padding: false }
        ]),
        HeaderWithList("Key Capabilities", [
          "**Automated purchase and entitlement verification**",
          "A **rules-based eligibility engine** decides what the agent may restore",
          "**Preview-before-restore** card with a full receipt",
        ], true, 3),
        HeaderWithText("Impact (Target)", "**80% of eligible claims** resolved in under 5 minutes.", 3),
      ]
    },
    {
      title: "Guided Diagnostics",
      subheader: "Troubleshooting that knows your setup",
      text: "Instead of generic articles, the agent asks two or three questions, then walks through **steps written for the player's platform and game**. Each step can branch on \"That didn't work.\" If nothing fixes it, the case is created with the **full diagnostic log**.",
      content: [
        ImageRow([
          { src: "/images/ea-help-diagnostics-questions.png", alt: "Guided troubleshooting asking when the Battlefield 2042 crash happens and whether there is an error code", caption: "Two targeted questions first", padding: false },
          { src: "/images/ea-help-diagnostics-steps.png", alt: "Step cards for a PS5 crash with a failed step, a skipped step, and a one-click cloud settings reset", caption: "Step cards with branching and a one-click fix", padding: false }
        ]),
        HeaderWithList("Key Capabilities", [
          "**Adaptive paths** through authored decision trees; the AI chooses the path but doesn't invent fixes",
          "**Interactive step cards** with branching",
          "A **diagnostic log** attached to every escalation",
        ], true, 3),
        HeaderWithText("Impact (Target)", "**40% of technical issues** resolved in self-service.", 3),
      ]
    },
    {
      title: "Living Cases",
      subheader: "Cases that write themselves",
      text: "When a human is needed, the agent **drafts the case**: the issue, evidence, steps tried, and a suggested next step. The player reviews it, sends it, and tracks it in plain language. **The advisor picks up mid-story.**",
      content: [
        ImageRow([
          { src: "/images/ea-help-case-draft.png", alt: "Auto-drafted case with editable title and summary, attached details, and every troubleshooting step tried", caption: "Auto-drafted case the player reviews", padding: false },
          { src: "/images/ea-help-cases-timeline.png", alt: "My Cases timeline with Help Agent entries followed by the advisor picking up the case", caption: "One timeline across AI and advisor chat", padding: false }
        ]),
        HeaderWithList("Key Capabilities", [
          "**Auto-drafted cases** the player reviews before sending",
          "**One timeline** across AI, chat, and email",
          "**Plain-language status** with a predicted resolution time",
        ], true, 3),
        HeaderWithText("Impact (Target)", "**First contact resolution of 80%+**.", 3),
      ]
    },
    {
      title: "",
      subheader: "Complete Player Workflow",
      content: [
        TextBlock("These features work together to support the complete support journey:"),
        List([
          "**ASK.** The player describes the issue in their own words, or a known-issue banner answers before they ask.",
          "**UNDERSTAND.** The agent pulls context and confirms the issue.",
          "**RESOLVE.** It restores, diagnoses, or recovers, with the player confirming each change.",
          "**HAND OFF.** If needed, a human picks up with the full story.",
        ], true),
        TextBlock("From \"something's wrong\" to **back in the game**, without leaving the conversation."),
      ]
    },
    {
      title: "",
      subheader: "Business Impact (Targets)",
      content: [
        TextBlock("The AI layer is a design vision, so these are **design targets set against industry benchmarks** (Gartner, Forrester CX Index, COPC), not measured results."),
        MetricGrid([
          { value: "50%+", label: "Self-service resolution (industry 35–40%)" },
          { value: "≤2.5", label: "Customer Effort Score (industry 3.5–4.0)" },
          { value: "80%+", label: "First contact resolution (industry 70%)" },
          { value: "65%+", label: "Search success (industry 40–50%)" },
          { value: "$500K+", label: "Annual live-support cost reduction" },
        ], 5),
        InfoBoxGrid([
          {
            title: "Channel Shift",
            items: [
              "200,000+ contacts shifted each year from high-cost live channels to self-service",
              "AI infrastructure cost offset by support savings within 18 months",
            ],
            variant: "blue"
          },
          {
            title: "Guardrails (Must Not Regress)",
            items: [
              "Wrongful action rate under 0.5%",
              "No added time to reach a human",
              "CSAT for AI-resolved issues within 5 points of human-resolved",
            ],
            variant: "blue"
          }
        ], 2),
      ]
    },
    {
      title: "",
      subheader: "Key Learnings",
      content: [
        Callout("**Finding help isn't the same as getting help.** v1 solved navigation; the real effort was in proving, waiting, and repeating.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }),
        Callout("**Trust is a UI problem.** Showing what the agent checks and what it will change matters as much as model accuracy.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }),
        Callout("**Autonomy should be earned in stages.** Read-only first, then confirm-to-act, gated on real metrics.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        })
      ]
    }
  ],
};
