import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ProjectMetadata } from "@/components/sections/ProjectMetadata";
import { AnimatedProjectHeader } from "@/components/sections/AnimatedProjectHeader";
import { BoldText } from "@/components/sections/BoldText";
import { InlineBoldText } from "@/components/sections/InlineBoldText";
import { ContentRenderer } from "@/components/sections/ContentRenderer";
import { projects, legacyProjectsBySlug } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];
  const legacyProject = legacyProjectsBySlug[slug];

  if (legacyProject) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-8">
          <Link
            href="/"
            className="text-base/5 font-bold text-blue-600 hover:text-blue-700 mb-8 inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>

          <article className="space-y-12">
            <AnimatedProjectHeader
              title={legacyProject.title}
              subtitle={legacyProject.subheader}
              ctaLabel={legacyProject.detailsUrl ? "See details" : undefined}
              ctaHref={legacyProject.detailsUrl}
            />

            {/* Overview, then the info bar, then the hero followed by the rest of the gallery */}
            <ProjectSection title="Overview">
              <BoldText text={legacyProject.description} />
              <ProjectMetadata
                logo={legacyProject.logo}
                role={legacyProject.role}
                duration={legacyProject.duration}
                platform={legacyProject.platform}
                tools={legacyProject.tools}
                toolsLabel="Prototyping Tools"
              />
              <ContentRenderer
                content={[
                  { src: legacyProject.imageSrc, alt: legacyProject.imageAlt },
                  ...(legacyProject.images ?? []),
                ].map((image) => ({ type: "image" as const, ...image }))}
                // Legacy mockups sit on a #eaeaea backdrop; a 4% lift blends it into the gray-100 page
                className="brightness-[1.04]"
              />
            </ProjectSection>
          </article>

          {/* Back to top button */}
          <div className="mt-12 flex justify-center">
            <BackToTop />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-8">
        <Link
          href="/"
          className="text-base/5 font-bold text-blue-600 hover:text-blue-700 mb-8 inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        <article className="space-y-12">
          <AnimatedProjectHeader
            title={project.title}
            subtitle={project.subtitle}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />

          {/* Project Metadata */}
          {!project.comingSoon && (
            <ProjectMetadata
              logo={project.logo}
              role={project.role}
              duration={project.duration}
              platform={project.platform}
              tools={project.tools}
            />
          )}

          {/* Coming Soon Message */}
          {project.comingSoon && (
            <div className="bg-gray-50 p-12 text-center">
              <div className="max-w-md mx-auto">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-3xl font-semibold text-gray-900 mb-3 font-heading">
                  Coming Soon
                </h2>
                <p className="text-lg text-gray-600">
                  This project case study is currently being updated. Check back soon for the full story!
                </p>
              </div>
            </div>
          )}

          {/* Team */}
          {!project.comingSoon && (
            <ProjectSection title={project.teamTitle || "Team"}>
              <BoldText text={project.team || ""} />
              {project.teamContent && <ContentRenderer content={project.teamContent} />}
            </ProjectSection>
          )}

          {/* Responsibilities */}
          {!project.comingSoon && project.responsibilities && project.responsibilities.length > 0 && (
            <ProjectSection title="Responsibilities">
              <ul className="list-decimal list-inside space-y-1">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-base/6 text-black">
                    <InlineBoldText text={responsibility} />
                  </li>
                ))}
              </ul>
            </ProjectSection>
          )}

          {/* Divider Line */}
          {!project.comingSoon && <div className="w-full h-0.5 bg-gray-300"></div>}

          {/* Overview */}
          {!project.comingSoon && (
            <ProjectSection title={project.overviewTitle || "Overview"} subheader={project.overviewSubheader}>
              <BoldText text={project.overview} />
              {project.overviewContent && <ContentRenderer content={project.overviewContent} />}
            </ProjectSection>
          )}

          {/* Problem */}
          {!project.comingSoon && (
            <ProjectSection
              title={project.problemTitle || "The Problem"}
              subheader={project.problemSubheader}
            >
              <BoldText text={project.problem} />
              {project.problemContent && <ContentRenderer content={project.problemContent} />}
            </ProjectSection>
          )}

          {/* Design Approach */}
          {!project.comingSoon && (project.designApproach || project.designApproachContent) && (
            <ProjectSection title={project.designApproachTitle || "Design Approach"} subheader={project.designApproachSubheader}>
              {project.designApproach && <BoldText text={project.designApproach} />}
              {project.designApproachContent && <ContentRenderer content={project.designApproachContent} />}
            </ProjectSection>
          )}

          {/* Solution Sections (New Flexible System) */}
          {!project.comingSoon && project.solutionSections && project.solutionSections.map((section, index) => (
            <ProjectSection 
              key={index}
              title={section.title} 
              subheader={section.subheader}
            >
              {section.text && <BoldText text={section.text} />}
              {section.content && <ContentRenderer content={section.content} />}
            </ProjectSection>
          ))}

          {/* Legacy Solution Section (for backwards compatibility) */}
          {!project.comingSoon && !project.solutionSections && (project.solution || project.solutionContent) && (
            <ProjectSection title={project.solutionTitle || "Solution"} subheader={project.solutionSubheader}>
              {project.solution && <BoldText text={project.solution} />}
              {project.solutionContent && <ContentRenderer content={project.solutionContent} />}
            </ProjectSection>
          )}

          {/* Legacy Process Section */}
          {!project.comingSoon && !project.solutionSections && (project.process || project.processContent) && (
            <ProjectSection title={project.processTitle || "Process"} subheader={project.processSubheader}>
              {project.process && <BoldText text={project.process} />}
              {project.processContent && <ContentRenderer content={project.processContent} />}
            </ProjectSection>
          )}

          {/* Legacy Custom Sections */}
          {!project.comingSoon && !project.solutionSections && project.customSections && project.customSections.map((section, index) => (
            <ProjectSection 
              key={index}
              title={section.title} 
              subheader={section.subheader}
            >
              <ContentRenderer content={section.content} />
            </ProjectSection>
          ))}

          {/* Legacy Results Section */}
          {!project.comingSoon && !project.solutionSections && project.results && (
            <ProjectSection title={project.resultsTitle || "Results & Impact"} subheader={project.resultsSubheader}>
              <BoldText text={project.results} />
              {project.resultsContent && <ContentRenderer content={project.resultsContent} />}
            </ProjectSection>
          )}

          {/* Legacy Learnings Section */}
          {!project.comingSoon && !project.solutionSections && project.learnings && (
            <ProjectSection title={project.learningsTitle || "Learnings"}>
              <BoldText text={project.learnings} />
              {project.learningsContent && <ContentRenderer content={project.learningsContent} />}
            </ProjectSection>
          )}
        </article>
        
        {/* Back to top button */}
        {!project.comingSoon && (
          <div className="mt-12 flex justify-center">
            <BackToTop />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
