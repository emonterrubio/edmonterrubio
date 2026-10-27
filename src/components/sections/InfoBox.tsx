import React from "react";
import { InlineBoldText } from "./InlineBoldText";

interface InfoBoxProps {
  title: string;
  items: string[];
  variant?: "default" | "blue" | "gray";
}

export const InfoBox = ({ title, items, variant = "gray" }: InfoBoxProps) => {
  const titleColor = variant === "blue" ? "text-blue-600" : "text-gray-900";

  return (
    <div className="p-6 rounded-lg bg-white border border-gray-200 space-y-1">
      <h4 className={`text-2xl font-semibold ${titleColor} font-heading`}>{title}</h4>
      <ul className="space-y-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gray-700 mr-2">•</span>
            <span className="text-gray-700 flex-1">
              <InlineBoldText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
