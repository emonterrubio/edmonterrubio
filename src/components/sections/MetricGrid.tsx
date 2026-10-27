import React from "react";
import { MetricCard } from "./MetricCard";

interface MetricGridProps {
  metrics: Array<{ value: string; label: string | string[] }>;
  columns?: 2 | 3 | 4 | 5;
}

export const MetricGrid = ({ metrics, columns = 5 }: MetricGridProps) => {
  // Responsive grid: 1 column on mobile, 3 columns on medium screens, scales to specified columns on large screens
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-2`}>
      {metrics.map((metric, index) => (
        <MetricCard key={index} value={metric.value} label={metric.label} />
      ))}
    </div>
  );
};
