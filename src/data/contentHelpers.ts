import { ContentBlock, CustomSection } from "./projects/types";

/**
 * Helper function to create an image content block
 * Use this anywhere you want to add an image
 * @param padding - Set to true to add padding and show gray background (default: false)
 * @param width - Optional width (e.g., "500px", "80%", "auto")
 * @param height - Optional height (e.g., "300px", "auto")
 */
export const Image = (
  src: string, 
  alt: string, 
  caption?: string, 
  padding?: boolean,
  width?: string,
  height?: string
): ContentBlock => ({
  type: 'image',
  src,
  alt,
  caption,
  padding,
  width,
  height
});

/**
 * Helper function to create a row of images displayed side-by-side
 * Use this for 2-3 images that should appear in a horizontal layout
 * @param images - Array of images, each can have padding: true to show gray background, and optional width/height
 */
export const ImageRow = (images: Array<{ 
  src: string; 
  alt: string; 
  caption?: string; 
  padding?: boolean;
  width?: string;
  height?: string;
}>): ContentBlock => ({
  type: 'imageRow',
  images
});

/**
 * Helper function to create a custom section
 * Use this in the customSections array
 */
export const Section = (title: string, content: ContentBlock[], subheader?: string): CustomSection => ({
  title,
  subheader,
  content
});

/**
 * Helper function to create a text content block
 * Use this for additional text content
 */
export const Text = (content: string): ContentBlock => ({
  type: 'text',
  content
});

/**
 * Helper function to create a header content block
 * Use this for subsection headers within content
 */
export const Header = (text: string, level: 1 | 2 | 3 | 4 | 5 = 4): ContentBlock => ({
  type: 'header',
  text,
  level
});

/**
 * Helper function to create a header with text block (reduces spacing)
 * Use this when you want a header immediately followed by text
 */
export const HeaderWithText = (header: string, text: string, level: 1 | 2 | 3 | 4 | 5 = 4): ContentBlock => ({
  type: 'headerWithText',
  header,
  text,
  level
});

/**
 * Helper function to create a header with list block (reduces spacing)
 * Use this when you want a header immediately followed by a list
 */
export const HeaderWithList = (header: string, items: string[], ordered: boolean = false, level: 1 | 2 | 3 | 4 | 5 = 4): ContentBlock => ({
  type: 'headerWithList',
  header,
  items,
  ordered,
  level
});

/**
 * Helper function to create a callout box
 * Use this for highlighted information, tips, or important notes
 */
export const Callout = (
  text: string, 
  options?: { 
    icon?: React.ReactNode; 
    withBackground?: boolean; 
    question?: string 
  }
): ContentBlock => ({
  type: 'callout',
  text,
  icon: options?.icon,
  withBackground: options?.withBackground ?? true,
  question: options?.question
});

/**
 * Helper function to create a list (bullet or numbered)
 * Use this for lists of items
 */
export const List = (items: string[], ordered: boolean = false): ContentBlock => ({
  type: 'list',
  items,
  ordered
});

/**
 * Helper function to create numbered steps with titles and descriptions
 * Use this for design approach steps, process steps, etc.
 */
export const Steps = (steps: Array<{ title: string; description: string }>): ContentBlock => ({
  type: 'steps',
  steps
});

/**
 * Helper function to create an example box
 * Use this for examples with a title, list of items, and optional conclusion
 */
export const Example = (title: string, items: string[], conclusion?: string): ContentBlock => ({
  type: 'example',
  title,
  items,
  conclusion
});

/**
 * Helper function to create a flowchart
 * Use this for process flows or timelines
 */
export const Flowchart = (stages: Array<{ label: string; action: string }>, title?: string): ContentBlock => ({
  type: 'flowchart',
  title,
  stages
});

/**
 * Helper function to create a metric grid
 * Use this to display key metrics in a responsive grid layout
 * @param columns - Number of columns (2-5), defaults to 5
 * @param label - Can be a string or an array of strings for list view
 */
export const MetricGrid = (metrics: Array<{ value: string; label: string | string[] }>, columns?: 2 | 3 | 4 | 5): ContentBlock => ({
  type: 'metricGrid',
  metrics,
  columns
});

/**
 * Helper function to create an info box
 * Use this for organized bullet lists with a heading
 * @param variant - Style variant: 'default', 'blue', or 'gray'
 */
export const InfoBox = (title: string, items: string[], variant?: 'default' | 'blue' | 'gray'): ContentBlock => ({
  type: 'infoBox',
  title,
  items,
  variant
});

/**
 * Helper function to create a grid of info boxes
 * Use this to display multiple info boxes side-by-side
 * @param columns - Number of columns (1-3), defaults to 2
 */
export const InfoBoxGrid = (boxes: Array<{ title: string; items: string[]; variant?: 'default' | 'blue' | 'gray' }>, columns?: 1 | 2 | 3): ContentBlock => ({
  type: 'infoBoxGrid',
  boxes,
  columns
});

/**
 * Helper function to create a before/after/impact comparison
 * Use this to show transformation and results
 */
export const Comparison = (before: string, after: string, impact: string): ContentBlock => ({
  type: 'comparison',
  before,
  after,
  impact
});

/**
 * Helper function to create a learning card
 * Use this for key takeaways and insights
 */
export const LearningCard = (title: string, description: string, icon?: React.ReactNode): ContentBlock => ({
  type: 'learningCard',
  title,
  description,
  icon
});

/**
 * Helper function to render any React node as a content block (e.g. a coded diagram)
 * @param caption - Optional caption shown below, styled like image captions
 */
export const Custom = (node: React.ReactNode, caption?: string): ContentBlock => ({
  type: 'custom',
  node,
  caption
});

/**
 * Shorthand helpers for common use cases
 */
export const content = {
  image: Image,
  imageRow: ImageRow,
  text: Text,
  header: Header,
  headerWithText: HeaderWithText,
  headerWithList: HeaderWithList,
  callout: Callout,
  list: List,
  steps: Steps,
  example: Example,
  flowchart: Flowchart,
  section: Section,
  metricGrid: MetricGrid,
  infoBox: InfoBox,
  infoBoxGrid: InfoBoxGrid,
  comparison: Comparison,
  learningCard: LearningCard
};
