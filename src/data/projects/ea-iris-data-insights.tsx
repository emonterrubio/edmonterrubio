import React from "react";
import { Pointer, Lightbulb } from "lucide-react";
import { 
  Image, 
  ImageRow,
  Text as TextBlock, 
  // Header,
  HeaderWithList,
  HeaderWithText,
  Callout, 
  List, 
  Steps, 
  Flowchart,
  MetricGrid,
  InfoBoxGrid,
} from "../contentHelpers";
import { ProjectContent } from "./types";

export const eaIrisDataInsights: ProjectContent = {
  // HERO SECTION
  title: "Iris: AI-driven Business Data Insights Experience",
  subtitle: "From Weeks to Minutes, Transforming EA's Data-Driven Decision Making",
  imageSrc: "/images/ea-iris-hero.png",
  imageAlt: "EA Iris Data Insights project",

  // METADATA SECTION
  role: "Lead Designer",
  company: "Electronic Arts",
  year: "2024",
  duration: "9+ months",
  platform: "Web",
  tools: "Figma, React, Next.js, TypeScript, Tailwind, Claude AI",
  logo: "/images/logos/ea-logo.svg",
  achievement: "Improved data-driven insights for critical functions by 30%",

  // TEAM SECTION
  team: "As part of the core Data & Insights product team, I collaborated with a 3 product managers, 11 software engineers, 2 researchers, 3 data scientists, and one platform architect.",

  // RESPONSIBILITIES SECTION
  responsibilities: [
    "**End-to-end product design** from research to implementation",
    "Assisted user research across 4 personas and 8+ teams",
    "Established **design principles** and **product strategy**",
    "Created **high-fidelity designs** and **functional prototypes**",
    "Partnered with Product and Engineering on roadmap",
  ],

  // OVERVIEW SECTION
  overviewSubheader: "From Weeks To Minutes",
  overview:
    "Iris is an **AI-powered insights platform** thath cuts the wait for critical data from weeks to minutes, instantly analyzing all of EA's massive data platforms (Sales, Finance, Marketing, etc.). This speed empowers leaders to make faster decisions, capturing revenue and optimizing performance across the business.",
  overviewMetrics: [
    { value: "80%", label: "Employee Satisfaction" },
    { value: "30%", label: "Data-driven Insights" },
    { value: "20%", label: "Reduced Friction" },
  ],

  // PROBLEM SECTION
  problemSubheader: "Generating complex business insights is too slow and prone to error",
  problem:
    "Data is fragmented across various EA teams due to **siloed ownership**, severely hindering timely decision-making and analysis. For example, when the Pricing team needed to analyze promotional effectiveness across 50 titles and 8 regions, it required: 5 analysts working for 3 weeks, data from 4 different systems and manual reconciliation of inconsistent numbers. By the time the analysis was complete, **the promotional window had closed**.",
  problemContent: [
    TextBlock("Before Iris, data-driven decisions moved at a crawl: "),
    Flowchart([
      { label: "WEEK 1-2", action: "Gather data from 5 teams" },
      { label: "WEEK 3-4", action: "Analyst work & validation" },
      { label: "WEEK 5+", action: "Wait for final report" },
    ]),
    TextBlock("**The cost?** Missed revenue opportunities, slow market response, and frustrated teams across Finance, Marketing, HR, and Sales."),
    Callout("Iris v1 was the first attempt at solving this problem and was modeled after ChatGPT but **failed to accommodate diverse personas and workflows**.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    }),
    TextBlock("After extensive usability testing, **four main core pain points** became obvious:"),
    List([
        "Writing effective prompts required hand-holding",
        "**20+ second latency** broke conversational flow",
        "**No manual configuration for different workflows**",
        "**Ad hoc requesters vs. analysts** had different needs",
      ], true),
    Image("/images/ea-iris-home-v1.png", "Iris v1 home page", "The old Iris v1 home page", false),
    Callout("To address these challenges, we conducted extensive user research to **understand what teams actually needed from a data platform**.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    })
  ],

  // DESIGN APPROACH SECTION
  designApproachSubheader: "Make Data Actionable",
  designApproach:
    "As a user research foundation we conducted interviews & surveys with Pricing, Forecasting, and People Experience teams that revealed **three non-negotiable requirements**:",
  designApproachContent: [
    Steps([
      {
        title: "Trust and Accuracy",
        description: "Leaders need 100% accuracy for high-stakes decisions. We implemented data lineage, disambiguation workflows, and explainability features."
      },
      {
        title: "Speed and Performance",
        description: "Real-time insights are the most valuable feature. We reduced response time (20s → 15s) and enabled async exploration through Stories."
      },
      {
        title: "Collaboration and Access",
        description: "Data must be accessible and shareable across teams. We built Stories as persistent, collaborative canvases."
      }
    ]),
    Callout("These principles guided our redesign around **4 core features** that work together as a complete user workflow.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    }),
    Image("/images/ea-iris-solution-architecture.png", "Iris solution architecture", "The Iris solution architecture"),
  ],

  // SOLUTION SECTIONS (Flexible - add as many as needed)
  solutionSections: [
    {
      title: "Guided Prompt Experience",
      subheader: "Remove the blank box paralysis",
      text: "Before, Iris v1 struggled with **query ambiguity, leading to incorrect answers or failure to respond**. The system lacked a mechanism to validate its interpretation, undermining user trust and creating a frustrating rephrasing loop for complex questions.",
      content: [
        Image("/images/ea-iris-box-paralysis.png", "Iris box paralysis", "The Iris box paralysis", false, "100%", "auto"),
        TextBlock("Iris's AI-generated summaries **suffered from a 'confident-but-wrong' problem**, often presenting correlation as causation. Without visibility into data quality, users couldn't distinguish reliable insights from hallucinations."),
        TextBlock("Before designing, I developed a **taxonomy of five uncertainty types**, such as data density and pattern persistence, to serve as a diagnostic framework for the platform."),
        TextBlock("I transformed the experience by shifting confidence from a post-query surprise to an upfront expectation. The **Guided Prompts** validate the scope and set data quality expectations before the query even runs The new **Confidence System**, which manifests as a transparent layer, explicitly explains reliability, highlights limitations, and offers clear paths forward for low-confidence results. This framework turned automated generation from a liability into a trusted tool by prioritizing transparency over 'perfect' summaries."),
        Image("/images/ea-iris-confidence-system.png", "Iris confidence system", "The Iris confidence system", false, "100%", "auto"),
        TextBlock("Now, the prompt validation builder **manages ambiguous queries and provides transparency into Iris's application of context and business rules**. This functionality delivers enhanced feedback, allowing users to refine questions and correct any answer inaccuracies."),
        Image("/images/ea-iris-disambiguation-builder.png", "Iris disambiguation builder", "The Iris disambiguation builder", false),
        TextBlock("The new guided experience surfaces limitations proactively so users understand scope constraints before interpreting results."),
        ImageRow([
          { src: "/images/ea-iris-disambiguation-sql-1.png", alt: "Iris disambiguation builder", caption: "How was this calculated?", padding: false },
          { src: "/images/ea-iris-disambiguation-sql-2.png", alt: "Iris disambiguation builder", caption: "Data Caveats & Limitations", padding: false }
        ]),
        Callout("**Key Design Principle**: Confidence is set at query time, not revealed as a surprise after. Users who see 'Medium Confidence' before running a query aren't surprised when results confirm it. **This builds trust, even when confidence is low.**",
          {
            icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
            withBackground: true
          }),
        HeaderWithList("Key Capabilities", [
          "Select domains by scoping queries to relevant data",
          "Use **context-aware question templates** as suggested prompts",
          "Build prompts with **structured fields** for complex queries",
          "Receive **real-time validation** with feedback before submitting",
        ], true, 3),
        
        HeaderWithText("Impact", "**78% of users** who struggled with prompts can now **get accurate answers on first try**.", 3),
      ]
    },
    {
      title: "AI Companion",
      subheader: "Natural language data access",
      content: [
        TextBlock("The Guided Prompt Experience scaffolds user input, while the AI Companion processes that structured input to deliver accurate results. Together, these layers enable anyone to access enterprise data, from executives checking metrics to analysts building complex reports."),
        Image("/images/ea-iris-nlp-analysis.png", "Iris nlp analysis", "The Iris nlp analysis", false),
        TextBlock("Quickly create tables, charts, and summaries for easy interpretation. The conversational nature of AI allows for ongoing adjustments and refinements before finalizing the data."),
        ImageRow([
          { src: "/images/ea-iris-nlp-companion-1.png", alt: "Iris nlp companion 1", caption: "The Iris nlp companion", padding: false },
          { src: "/images/ea-iris-nlp-companion-2.png", alt: "Iris nlp companion 2", caption: "The Iris nlp companion", padding: false }
        ]),
        HeaderWithList("Key Capabilities", [
          "**Analyzes natural language** from various data sources to extract meaningful insights.",
          "Implements **business context** and validation rules to ensure accuracy.",
          "Quickly **creates tables, charts, and summaries** for easy interpretation.",
          "Allows for **ongoing adjustments and refinements** before finalizing the data.",
        ], true, 3),
        HeaderWithText("Impact", "Users can **access data without needing technical skills, making insights available to all teams**. No SQL required. No waiting for analysts. No errors.", 3),
      ]
    },
    {
      title: "Story Composer",
      subheader: "Turn data into narrative",
      content: [
        TextBlock("Before, chat responses were ephemeral (lost in scroll), users had to recreate reports from scratch each time, and there was no collaboration or sharing."),
        Image("/images/ea-iris-chat-v1.png", "Iris chat v1", "The Iris chat v1", false),
        TextBlock("**Stories now exist as persistent canvases**. The Story composer offers persistent, editable canvases with a drag-and-drop interface for organizing content.\n\nThe Story composer features live data refresh for current information, and allows sharing with teams through adjustable view/edit permissions."),
        Image("/images/ea-iris-companion-stories.png", "Iris companion stories", "The Iris companion stories", false),
        HeaderWithList("Key Capabilities", [
          "Build and organize with a **simple drag-and-drop interface** to structure your content.",
          "**Narrative components** allow you to combine generative summaries, custom text, dashboards, and visualizations into one cohesive report.",
          "**Live data** that instantly refreshes saved analyses to ensure reports are always backed by the latest data.",
        ], true, 3),
        HeaderWithText("Impact", "Transformed ephemeral chat into **persistent work products** that teams build, share, and update over time.", 3),
      ]
    },
    {
      title: "Intelligent Charts",
      subheader: "Make every visualization explorable and insightful",
      content: [
        TextBlock("The **Chart Highlights feature** automatically elevates visualizations by providing visual cues that highlight significant data points, trends, or anomalies. This dramatically improves storytelling by making data immediately informative, as it automatically emphasizes key events and changes relevant to the narrative the user is building."),
        Image("/images/ea-iris-hover-data-point.png", "Iris hover data point", "The Iris hover data point", false),
        TextBlock("The **Chart Drill Down feature** enables users to instantly go deeper into their analysis. Users can drill down on any chart point to explore the underlying data attributes."),
        Image("/images/ea-iris-drilldown-chart.png", "Iris drilldown chart", "The Iris drilldown chart", false),
        Image("/images/ea-iris-highlight-chart.png", "Iris highlight chart", "The Iris highlight chart", false),
        HeaderWithList("Key Capabilities", [
          "The **automatic highlighting feature** allows AI to surface significant trends and anomalies.",
          "You can **click on any point** to explore the underlying data through contextual drill-down.",
          "**Visual annotations** provide explanations for why something is notable.",
        ], true, 3),  
        HeaderWithText("Impact", "Users **discover insights faster and understand the 'why'** behind data patterns without analyst assistance.", 3),
      ]
    },
    {
      title: "",
      subheader: "Complete User Workflow",
      content: [
        TextBlock("These features work together to support the complete insights journey:."),
        List([
          "Users start with **GUIDED PROMPT EXPERIENCE** to formulate questions", 
          "The **AI COMPANION** processes queries and delivers instant answers",   
          "The **STORY COMPOSER** lets them build narratives and share with teams", 
          "The **INTELLIGENT CHARTS** enable deep exploration and discovery",
        ], true),
        TextBlock("What was once a weeks-long, multi-team effort is now a **self-service workflow** that anyone can complete in minutes."),
      ]
    },
    {
      title: "",
      subheader: "Business Impact",
      content: [
        MetricGrid([
          { value: "30%", label: "Improved insights for critical functions" },
          { value: "90%", label: "Improved consistency" },
          { value: "15s", label: "Avg. Response Time" },
          { value: "10%", label: "Faster Cycles" },
          { value: "$144K", label: "Annual Savings" },
        ], 5),
        InfoBoxGrid([
          {
            title: "$13.2M+ Revenue Uplift",
            items: [
              "$1.2M loss prevented (Pricing)", 
              "$10-14M projected (Modeling)", 
              "$2M achieved (Competitor Analysis)"
            ],
            variant: "blue"
          },
          {
            title: "$6-7.7M Cost Savings",
            items: [
              "$2-4M saved (T&E Analytics)",
              "$3.5-3.7M efficiency (People Experience)"
            ],
            variant: "blue"
          },
          {
            title: "Productivity Gains",
            items: [
              "52% reduction in analyst tickets",
              "Data prep time: 2 hours → 15 minutes",
              "Abandonment rate: 65% → 38%",
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
        Callout("**One interface cannot serve all personas**. Therefore, I developed adaptive workflows that change based on user goals, whether they are browsing, building, or validating.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }),
        Callout("It was recognized that a **20-second latency cannot be eliminated**, so I designed for interrupted attention through Stories that maintain context across sessions.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }),
        Callout("**AI requires transparency to build trust**, which is why data lineage and the ability to 'explain this answer' have become essential for adoption, rather than just nice-to-haves.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        })
      ]
    }
  ],
};