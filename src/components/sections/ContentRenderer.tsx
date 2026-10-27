import { ContentBlock } from "@/data/projects/types";
import { SectionImage } from "./SectionImage";
import { InlineBoldText } from "./InlineBoldText";
import { CalloutBox } from "./CalloutBox";
import { ExampleBox } from "./ExampleBox";
import { Flowchart } from "./Flowchart";
import { MetricGrid } from './MetricGrid';
import { InfoBox } from './InfoBox';
import { InfoBoxGrid } from './InfoBoxGrid';
import { ComparisonCard } from './ComparisonCard';
import { LearningCard } from './LearningCard';

interface ContentRendererProps {
  content: ContentBlock[];
  className?: string;
}

export const ContentRenderer = ({ content, className = "" }: ContentRendererProps) => {
  // Group consecutive callout blocks with withBackground into a container
  const processedContent: (ContentBlock | { type: 'calloutGroup'; blocks: ContentBlock[] })[] = [];
  let calloutGroup: ContentBlock[] = [];
  
  content.forEach((block, index) => {
    if (block.type === 'callout' && block.withBackground) {
      calloutGroup.push(block);
    } else {
      if (calloutGroup.length > 0) {
        processedContent.push({ type: 'calloutGroup', blocks: calloutGroup });
        calloutGroup = [];
      }
      processedContent.push(block);
    }
  });
  
  // Add any remaining callout group
  if (calloutGroup.length > 0) {
    processedContent.push({ type: 'calloutGroup', blocks: calloutGroup });
  }

  return (
    <>
      {processedContent.map((item, index) => {
        // Handle callout group (Key Learning cards)
        if (item.type === 'calloutGroup') {
          return (
            <div key={index} className="space-y-2">
              {item.blocks.map((block, blockIndex) => {
                if (block.type === 'callout') {
                  return (
                    <CalloutBox
                      key={blockIndex}
                      answer={block.text}
                      icon={block.icon}
                      question={block.question}
                      withBackground={block.withBackground}
                      className={className}
                    />
                  );
                }
                return null;
              })}
            </div>
          );
        }
        
        const block = item;
        // Image block
        if (block.type === 'image') {
          return (
            <SectionImage
              key={index}
              src={block.src}
              alt={block.alt}
              caption={block.caption}
              padding={block.padding}
              width={block.width}
              height={block.height}
              className={className}
            />
          );
        }
        
        // Image row (multiple images side-by-side)
        if (block.type === 'imageRow') {
          return (
            <div key={index} className="grid grid-cols-2 gap-4">
              {block.images.map((img, imgIndex) => (
                <SectionImage
                  key={imgIndex}
                  src={img.src}
                  alt={img.alt}
                  caption={img.caption}
                  padding={img.padding}
                  width={img.width}
                  height={img.height}
                  className=""
                />
              ))}
            </div>
          );
        }
        
        // Text block
        if (block.type === 'text') {
          return (
            <p key={index} className={`text-base text-black ${className}`}>
              <InlineBoldText text={block.content} />
            </p>
          );
        }
        
        // Header block (subsection header)
        if (block.type === 'header') {
          const level = block.level || 4;
          const headerClass = level === 1
            ? 'text-4xl font-bold text-black font-heading'
            : level === 2
            ? 'text-3xl font-bold text-black font-heading'
            : level === 3 
            ? 'text-2xl font-bold text-black font-heading'
            : level === 5
            ? 'text-lg font-semibold text-black font-heading'
            : 'text-xl font-semibold text-black font-heading';
          
          if (level === 1) return <h1 key={index} className={headerClass}>{block.text}</h1>;
          if (level === 2) return <h2 key={index} className={headerClass}>{block.text}</h2>;
          if (level === 3) return <h3 key={index} className={headerClass}>{block.text}</h3>;
          if (level === 5) return <h5 key={index} className={headerClass}>{block.text}</h5>;
          return <h4 key={index} className={headerClass}>{block.text}</h4>;
        }
        
        // Header with text block (reduced spacing)
        if (block.type === 'headerWithText') {
          const level = block.level || 4;
          const headerClass = level === 1
            ? 'text-4xl font-bold text-black font-heading'
            : level === 2
            ? 'text-3xl font-bold text-black font-heading'
            : level === 3 
            ? 'text-2xl font-bold text-black font-heading'
            : level === 5
            ? 'text-lg font-semibold text-black font-heading'
            : 'text-xl font-semibold text-black font-heading';
          
          const HeaderTag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 5 ? 'h5' : 'h4';
          
          return (
            <div key={index} className="space-y-2">
              <HeaderTag className={headerClass}>{block.header}</HeaderTag>
              <p className="text-base text-black">
                <InlineBoldText text={block.text} />
              </p>
            </div>
          );
        }
        
        // Header with list block (reduced spacing)
        if (block.type === 'headerWithList') {
          const level = block.level || 4;
          const headerClass = level === 1
            ? 'text-4xl font-bold text-black font-heading'
            : level === 2
            ? 'text-3xl font-bold text-black font-heading'
            : level === 3 
            ? 'text-2xl font-bold text-black font-heading'
            : level === 5
            ? 'text-lg font-semibold text-black font-heading'
            : 'text-xl font-semibold text-black font-heading';
          
          const HeaderTag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 5 ? 'h5' : 'h4';
          const ListTag = block.ordered ? 'ol' : 'ul';
          const listClass = block.ordered 
            ? 'list-decimal list-outside pl-6 space-y-1' 
            : 'list-disc list-inside space-y-1 ml-4';
          
          return (
            <div key={index} className="space-y-2">
              <HeaderTag className={headerClass}>{block.header}</HeaderTag>
              <ListTag className={listClass}>
                {block.items.map((item, idx) => (
                  <li key={idx} className="text-base text-black leading-normal">
                    <InlineBoldText text={item} />
                  </li>
                ))}
              </ListTag>
            </div>
          );
        }
        
        // Callout block
        if (block.type === 'callout') {
          return (
            <CalloutBox
              key={index}
              answer={block.text}
              icon={block.icon}
              question={block.question}
              withBackground={block.withBackground}
              className={className}
            />
          );
        }
        
        // List block (bullet or numbered)
        if (block.type === 'list') {
          const ListTag = block.ordered ? 'ol' : 'ul';
          const listClass = block.ordered 
            ? 'list-decimal list-outside pl-6 space-y-1' 
            : 'list-disc list-inside space-y-2 ml-4';
          
          return (
            <ListTag key={index} className={listClass}>
              {block.items.map((item, idx) => (
                <li key={idx} className="text-base text-black leading-normal">
                  <InlineBoldText text={item} />
                </li>
              ))}
            </ListTag>
          );
        }
        
        // Steps block (numbered steps with titles)
        if (block.type === 'steps') {
          return (
            <div key={index} className="space-y-6">
              {block.steps.map((step, idx) => (
                <div key={idx} className="space-y-0">
                  <h4 className="text-2xl font-semibold text-black font-heading">
                    <InlineBoldText text={step.title} />
                  </h4>
                  <p className="text-base text-black">
                    <InlineBoldText text={step.description} />
                  </p>
                </div>
              ))}
            </div>
          );
        }
        
        // Example block
        if (block.type === 'example') {
          return (
            <ExampleBox
              key={index}
              title={block.title}
              items={block.items}
              conclusion={block.conclusion}
              className={className}
            />
          );
        }
        
        // Flowchart block
        if (block.type === 'flowchart') {
          return (
            <Flowchart
              key={index}
              title={block.title}
              stages={block.stages}
            />
          );
        }

        // Metric Grid
        if (block.type === 'metricGrid') {
          return <MetricGrid key={index} metrics={block.metrics} columns={block.columns} />;
        }

        // Info Box
        if (block.type === 'infoBox') {
          return <InfoBox key={index} title={block.title} items={block.items} variant={block.variant} />;
        }

        // Info Box Grid
        if (block.type === 'infoBoxGrid') {
          return <InfoBoxGrid key={index} boxes={block.boxes} columns={block.columns} />;
        }

        // Comparison Card
        if (block.type === 'comparison') {
          return <ComparisonCard key={index} before={block.before} after={block.after} impact={block.impact} />;
        }

        // Learning Card
        if (block.type === 'learningCard') {
          return <LearningCard key={index} title={block.title} description={block.description} icon={block.icon} />;
        }

        // Custom React node (e.g. a coded diagram)
        if (block.type === 'custom') {
          return (
            <div key={index} className="space-y-2 w-full">
              {block.node}
              {block.caption && (
                <p className="text-sm text-gray-600 text-center italic">{block.caption}</p>
              )}
            </div>
          );
        }

        return null;
      })}
    </>
  );
};
