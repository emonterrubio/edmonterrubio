"use client";

import { motion } from "framer-motion";

interface ProjectSectionProps {
  title: string;
  subheader?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const sectionVariants = {
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

export const ProjectSection = ({
  title,
  subheader,
  children,
  className = "",
  contentClassName = "",
}: ProjectSectionProps) => {
  return (
    <motion.section 
      className={`space-y-2 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="space-y-4">
        <h2 className="md:text-2xl text-xl font-semibold text-blue-600 font-heading tracking-tight">{title}</h2>
        {subheader && (
          <h3 className="md:text-4xl text-3xl font-semibold text-black pb-2 font-heading tracking-tight">{subheader}</h3>
        )}
      </div>
      <div className={`text-base text-black leading-normal space-y-6 ${contentClassName}`}>
        {children}
      </div>
    </motion.section>
  );
};

