import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  role: string;
  achievement: string;
  year?: string;
  company: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
  // "compact" is the smaller 4:3 card used for older projects
  variant?: "default" | "compact";
}

export const ProjectCard = ({
  title,
  role,
  achievement,
  year,
  company,
  imageSrc,
  imageAlt,
  slug,
  variant = "default",
}: ProjectCardProps) => {
  const isCompact = variant === "compact";

  return (
    <Link href={`/projects/${slug}`} className="group">
      <article className="flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className={`relative w-full bg-gray-100 overflow-hidden ${isCompact ? "aspect-[4/3]" : "aspect-video"}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={isCompact ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" : undefined}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className={`flex flex-col flex-grow ${isCompact ? "p-5" : "p-6"}`}>
          <div className="mb-2">
            <span className="text-base font-semibold text-blue-600">{role}</span>
          </div>
          <h3 className={`font-semibold text-black mb-1 font-heading ${isCompact ? "text-2xl" : "text-3xl"}`}>{title}</h3>
          <p className="text-base text-gray-700 mb-4 flex-grow">{achievement}</p>
          <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
            <span className="text-base font-regular text-gray-600 whitespace-nowrap">{year}</span>
            <span className="text-base font-semibold text-blue-600 text-right">{company}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
