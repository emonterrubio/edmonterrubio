import Image from "next/image";
import { InlineBoldText } from "./InlineBoldText";

// A screenshot with numbered markers and a matching legend underneath.
// Marker positions are percentages of the image, so they stay put at any width.

export interface ImageCallout {
  x: number;
  y: number;
  title: string;
  text: string;
}

interface AnnotatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  callouts: ImageCallout[];
  // Caps the screenshot's display width (px) for small source images like dialogs.
  maxWidth?: number;
}

const Marker = ({ n, className = "" }: { n: number; className?: string }) => (
  <span
    className={`flex flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white ${className}`}
  >
    {n}
  </span>
);

export const AnnotatedImage = ({ src, alt, width, height, callouts, maxWidth }: AnnotatedImageProps) => (
  <div className="w-full space-y-4">
    <div className="relative mx-auto overflow-hidden rounded-lg border border-gray-200" style={maxWidth ? { maxWidth } : undefined}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 900px, 100vw" className="h-auto w-full" />
      {callouts.map((callout, i) => (
        <span
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${callout.x}%`, top: `${callout.y}%` }}
          aria-hidden="true"
        >
          <Marker
            n={i + 1}
            className="h-5 w-5 text-[11px] shadow-lg ring-2 ring-white md:h-7 md:w-7 md:text-sm"
          />
        </span>
      ))}
    </div>
    <ol className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
      {callouts.map((callout, i) => (
        <li key={i} className="flex items-start gap-3">
          <Marker n={i + 1} className="mt-0.5 h-6 w-6 text-xs" />
          <div>
            <div className="text-base font-semibold text-black">{callout.title}</div>
            <p className="text-sm text-gray-700">
              <InlineBoldText text={callout.text} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);
