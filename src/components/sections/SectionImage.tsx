import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  padding?: boolean;
  width?: string;
  height?: string;
}

export const SectionImage = ({ 
  src, 
  alt, 
  caption, 
  className = "", 
  padding = false,
  width,
  height 
}: SectionImageProps) => {
  const imageStyle: React.CSSProperties = {};
  if (width) imageStyle.width = width;
  if (height) imageStyle.height = height;

  const isPlaceholder = !src || src === "placeholder";

  if (isPlaceholder) {
    return (
      <div className={`space-y-2 w-full ${className}`}>
        <div
          className="flex aspect-video w-full items-center justify-center rounded-lg bg-gray-200 px-6 text-center text-sm text-gray-500"
          role="img"
          aria-label={alt}
        >
          {alt}
        </div>
        {caption && (
          <p className="text-sm text-gray-600 text-center italic">
            {caption}
          </p>
        )}
      </div>
    );
  }
  
  return (
    <div className={`space-y-2 w-full ${className}`}>
      <div className={`relative rounded-lg overflow-hidden ${padding ? 'p-6 bg-gray-100' : ''}`} style={width === '100%' ? { width: '100%' } : width ? { width } : undefined}>
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          style={imageStyle}
        />
      </div>
      {caption && (
        <p className="text-sm text-gray-600 text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
};
