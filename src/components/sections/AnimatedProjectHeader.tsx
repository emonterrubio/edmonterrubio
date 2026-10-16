"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface AnimatedProjectHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  // Optional call-to-action shown on the subtitle row (right-aligned on desktop)
  ctaLabel?: string;
  ctaHref?: string;
}

export const AnimatedProjectHeader = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: AnimatedProjectHeaderProps) => {
  const isExternal = ctaHref?.startsWith("http");

  return (
    <>
      {/* Project Header */}
      <motion.div 
        className="space-y-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-black leading-tight font-heading">{title}</h1>
        {(subtitle || (ctaLabel && ctaHref)) && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {subtitle && (
              <p className="text-xl md:text-2xl font-normal leading-normal text-gray-500 font-heading">{subtitle}</p>
            )}
            {ctaLabel && ctaHref && (
              <a
                href={ctaHref}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="self-start md:self-auto flex-shrink-0 inline-flex items-center gap-2 px-8 py-3 bg-blue-600 border border-blue-600 rounded-md text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                {ctaLabel}
                {isExternal && <ExternalLink className="w-4 h-4" aria-hidden="true" />}
              </a>
            )}
          </div>
        )}
      </motion.div>

      {/* Hero Image */}
      {imageSrc && (
        <motion.div 
          className="relative w-full aspect-[16/8] bg-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      )}
    </>
  );
};
