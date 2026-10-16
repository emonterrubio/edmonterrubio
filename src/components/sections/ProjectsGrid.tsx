"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import { legacyProjects } from "@/data/projects/legacy";

const projects = [
  {
    slug: "ea-anti-cheat-platform",
    title: "EA Anti-Cheat Platform",
    role: "Design Lead",
    achievement: "Unified analyst investigation and enforcement tooling", // placeholder
    year: "2026",
    company: "Electronic Arts",
    imageSrc: "/images/ea-anti-cheat-hero.png",
    imageAlt: "EA Anti-Cheat Platform project",
  },
  {
    slug: "ea-omni-shopping",
    title: "EA Omni Shopping",
    role: "Design Lead",
    achievement: "Achieved 80% employee satisfaction with the new procurement experience",
    year: "2025",
    company: "Electronic Arts",
    imageSrc: "/images/ea-omni-shopping.png",
    imageAlt: "EA Omni Shopping project",
  },
  {
    slug: "ea-iris-data-insights",
    title: "EA Iris Data Insights",
    role: "Design Lead",
    achievement: "Improved data-driven insights for critical functions by 30%",
    year: "2023",
    company: "Electronic Arts",
    imageSrc: "/images/ea-iris-hero.png",
    imageAlt: "EA Iris Data Insights project",
  },
  {
    slug: "ea-player-support",
    title: "EA Player Support",
    role: "Design Lead",
    achievement: "Reduced player support friction and issue resolution times by 25%",
    year: "2022",
    company: "Electronic Arts",
    imageSrc: "/images/ea-player-support.jpg",
    imageAlt: "EA Player Support project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Older projects stay open until the visitor closes them. The module variable keeps
// them open instantly when navigating back within the site; sessionStorage keeps
// them open across a refresh in the same tab.
const LEGACY_OPEN_KEY = "older-projects-open";
let rememberedShowLegacy = false;

export const ProjectsGrid = () => {
  const [showLegacy, setShowLegacy] = useState(rememberedShowLegacy);

  useEffect(() => {
    try {
      if (!rememberedShowLegacy && sessionStorage.getItem(LEGACY_OPEN_KEY) === "1") {
        rememberedShowLegacy = true;
        setShowLegacy(true);
      }
    } catch {
      // Storage unavailable (e.g. private mode); fall back to in-memory only
    }
  }, []);

  const toggleLegacy = () => {
    const next = !showLegacy;
    rememberedShowLegacy = next;
    setShowLegacy(next);
    try {
      sessionStorage.setItem(LEGACY_OPEN_KEY, next ? "1" : "0");
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <>
      <motion.section 
        className="w-full max-w-6xl mx-auto py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <AnimatePresence initial={false}>
        {showLegacy && (
          <motion.section
            id="older-projects"
            className="w-full max-w-6xl mx-auto pb-12"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            variants={containerVariants}
            aria-labelledby="older-projects-heading"
          >
            <motion.h2
              id="older-projects-heading"
              variants={cardVariants}
              className="text-2xl md:text-3xl font-semibold text-black font-heading mb-8"
            >
              Older Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legacyProjects.map((project) => (
                <motion.div key={project.slug} variants={cardVariants}>
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    role={project.role}
                    achievement={project.summary}
                    year={project.year}
                    company={project.company}
                    imageSrc={project.thumbSrc}
                    imageAlt={project.imageAlt}
                    variant="compact"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="flex justify-center pb-12">
        <button
          type="button"
          onClick={toggleLegacy}
          aria-expanded={showLegacy}
          aria-controls="older-projects"
          className="px-8 py-3 bg-blue-600 border border-blue-600 rounded-md text-white font-semibold hover:bg-blue-900 transition-colors"
        >
          {showLegacy ? "Close older projects" : "See older projects"}
        </button>
      </div>
    </>
  );
};
