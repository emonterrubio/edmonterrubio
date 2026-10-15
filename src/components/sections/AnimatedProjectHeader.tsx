"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedProjectHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const AnimatedProjectHeader = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: AnimatedProjectHeaderProps) => {
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
        {subtitle && (
          <p className="text-xl md:text-2xl font-normal leading-normal text-gray-500 font-heading">{subtitle}</p>
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
