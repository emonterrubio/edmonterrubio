import { ProjectContent } from "./types";
import { eaAntiCheatPlatform } from "./ea-anti-cheat-platform";
import { eaIrisDataInsights } from "./ea-iris-data-insights";
import { eaOmniShopping } from "./ea-omni-shopping";
import { eaPlayerSupport } from "./ea-player-support";

export const projects: Record<string, ProjectContent> = {
  "ea-anti-cheat-platform": eaAntiCheatPlatform,
  "ea-iris-data-insights": eaIrisDataInsights,
  "ea-omni-shopping": eaOmniShopping,
  "ea-player-support": eaPlayerSupport,
};

export { legacyProjects, legacyProjectsBySlug } from "./legacy";

// Re-export types for convenience
export type { ProjectContent, ContentBlock, CustomSection } from "./types";
export type { LegacyProject } from "./legacy";

