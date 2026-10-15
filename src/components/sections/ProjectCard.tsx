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
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`} className="group">
      <article className="flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative w-full aspect-video bg-gray-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="text-base font-semibold text-blue-600">{role}</span>
          </div>
          <h3 className="text-3xl font-semibold text-black mb-1 font-heading">{title}</h3>
          <p className="text-base text-gray-700 mb-4 flex-grow">{achievement}</p>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="text-base font-regular text-gray-600">{year}</span>
            <span className="text-base font-semibold text-blue-600">{company}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

