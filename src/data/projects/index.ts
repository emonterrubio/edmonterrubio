import { ProjectContent } from "./types";
import { eaIrisDataInsights } from "./ea-iris-data-insights";
import { eaOmniShopping } from "./ea-omni-shopping";
import { eaPlayerSupport } from "./ea-player-support";

export const projects: Record<string, ProjectContent> = {
  "ea-iris-data-insights": eaIrisDataInsights,
  "ea-omni-shopping": eaOmniShopping,
  "ea-player-support": eaPlayerSupport,
};

export { legacyProjects, legacyProjectsBySlug } from "./legacy";

// Re-export types for convenience
export type { ProjectContent, ContentBlock, CustomSection } from "./types";
export type { LegacyProject } from "./legacy";

