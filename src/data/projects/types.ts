import React from "react";

export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'header'; text: string; level?: 1 | 2 | 3 | 4 | 5 }
  | { type: 'headerWithText'; header: string; text: string; level?: 1 | 2 | 3 | 4 | 5 }
  | { type: 'headerWithList'; header: string; items: string[]; ordered?: boolean; level?: 1 | 2 | 3 | 4 | 5 }
  | { type: 'image'; src: string; alt: string; caption?: string; padding?: boolean; width?: string; height?: string }
  | { type: 'imageRow'; images: Array<{ src: string; alt: string; caption?: string; padding?: boolean; width?: string; height?: string }> }
  | { type: 'callout'; text: string; icon?: React.ReactNode; withBackground?: boolean; question?: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'steps'; steps: Array<{ title: string; description: string }> }
  | { type: 'example'; title: string; items: string[]; conclusion?: string }
  | { type: 'flowchart'; title?: string; stages: Array<{ label: string; action: string }> }
  | { type: 'metricGrid'; metrics: Array<{ value: string; label: string | string[] }>; columns?: 2 | 3 | 4 | 5 }
  | { type: 'infoBox'; title: string; items: string[]; variant?: 'default' | 'blue' | 'gray' }
  | { type: 'infoBoxGrid'; boxes: Array<{ title: string; items: string[]; variant?: 'default' | 'blue' | 'gray' }>; columns?: 1 | 2 | 3 }
  | { type: 'comparison'; before: string; after: string; impact: string }
  | { type: 'learningCard'; title: string; description: string; icon?: React.ReactNode }
  | { type: 'custom'; node: React.ReactNode; caption?: string };

export interface CustomSection {
  title: string;
  subheader?: string;
  content: ContentBlock[];
}

export interface ProjectContent {
  // COMING SOON FLAG
  comingSoon?: boolean;

  // HERO SECTION
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;

  // METADATA SECTION
  role: string;
  company: string;
  year: string;
  duration?: string;
  platform?: string;
  tools?: string;
  logo?: string;
  achievement: string;

  // TEAM SECTION
  teamTitle?: string;
  team?: string;
  teamContent?: ContentBlock[];

  // RESPONSIBILITIES SECTION
  responsibilities?: string[];

  // OVERVIEW SECTION
  overviewTitle?: string;
  overviewSubheader?: string;
  overview: string;
  overviewContent?: ContentBlock[];
  overviewMetrics?: Array<{ value: string; label: string }>;

  // PROBLEM SECTION
  problemTitle?: string;
  problemSubheader?: string;
  problem: string;
  problemContent?: ContentBlock[];

  // DESIGN APPROACH SECTION
  designApproachTitle?: string;
  designApproachSubheader?: string;
  designApproach?: string;
  designApproachContent?: ContentBlock[];

  // SOLUTION SECTIONS (flexible - add as many as needed)
  solutionSections?: Array<{
    title: string;
    subheader?: string;
    text?: string;
    content?: ContentBlock[];
  }>;

  // LEGACY FIELDS (deprecated - use solutionSections instead)
  solutionTitle?: string;
  solutionSubheader?: string;
  solution?: string;
  solutionContent?: ContentBlock[];
  processTitle?: string;
  processSubheader?: string;
  process?: string;
  processContent?: ContentBlock[];
  resultsTitle?: string;
  resultsSubheader?: string;
  results?: string;
  resultsContent?: ContentBlock[];
  learningsTitle?: string;
  learnings?: string;
  learningsContent?: ContentBlock[];
  customSections?: CustomSection[];
}

