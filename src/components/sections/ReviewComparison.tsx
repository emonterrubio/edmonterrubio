import Image from "next/image";
import { InlineBoldText } from "./InlineBoldText";

// Two review dialogs from the EA Anti-Cheat Enforcement Engine, side by side:
// the same review step, with its weight scaled to the severity of the action.

interface Review {
  label: string;
  labelClass: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  points: string[];
}

const REVIEWS: Review[] = [
  {
    label: "Warning",
    labelClass: "bg-gray-200 text-gray-700",
    src: "/images/ea-anti-cheat-enforcement-review-warning.png",
    alt: "Review dialog: Issue Warning to 750 players, with blast radius, owner, code, title, and reason",
    width: 482,
    height: 246,
    points: [
      "**Blue info icon.** The dialog stays calm for the lightest action.",
      "**Blue confirm button**, the standard primary action.",
    ],
  },
  {
    label: "Temporary suspension",
    labelClass: "bg-red-50 text-red-700",
    src: "/images/ea-anti-cheat-enforcement-blast-radius%20preview.png",
    alt: "Review dialog: Issue Temporary suspension to 750 players, with blast radius, owner, code, title, and reason",
    width: 484,
    height: 247,
    points: [
      "**Red alert icon** in the header, before the details are read.",
      "**Red confirm button** for a destructive action.",
    ],
  },
];

export const ReviewComparison = () => (
  <div className="w-full space-y-4">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {REVIEWS.map((review) => (
        <div key={review.label} className="space-y-3">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${review.labelClass}`}>
            {review.label}
          </span>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <Image
              src={review.src}
              alt={review.alt}
              width={review.width}
              height={review.height}
              sizes="(min-width: 768px) 440px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            {review.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                <span>
                  <InlineBoldText text={point} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-700">
      <InlineBoldText text="**Shared by both:** the same layout, with the blast radius, owner, a generated enforcement code, title, and reason, and a confirm button that names the action instead of saying OK. Only the severity cues change." />
    </p>
  </div>
);
