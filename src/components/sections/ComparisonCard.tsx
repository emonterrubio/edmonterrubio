import React from "react";
import { InlineBoldText } from "./InlineBoldText";

interface ComparisonCardProps {
  before: string;
  after: string;
  impact: string;
}

export const ComparisonCard = ({ before, after, impact }: ComparisonCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h5 className="text-lg font-semibold text-blue-600 mb-1">Before</h5>
        <p className="text-gray-700">
          <InlineBoldText text={before} />
        </p>
      </div>
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h5 className="text-lg font-semibold text-blue-600 mb-1">After</h5>
        <p className="text-gray-700">
          <InlineBoldText text={after} />
        </p>
      </div>
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <h5 className="text-lg font-semibold text-blue-600 mb-1">Impact</h5>
        <p className="text-gray-700">
          <InlineBoldText text={impact} />
        </p>
      </div>
    </div>
  );
};
