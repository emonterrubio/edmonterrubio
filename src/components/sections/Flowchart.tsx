interface FlowchartStage {
  label: string;
  action: string;
}

interface FlowchartProps {
  stages: FlowchartStage[];
  title?: string;
  className?: string;
}

export const Flowchart = ({ stages, title, className = "" }: FlowchartProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {title && <p className="text-base text-black mb-4">{title}</p>}
      <div className="w-full flex flex-col md:flex-row items-start md:gap-2 p-6 rounded-lg bg-white border border-gray-200">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start w-full md:w-auto md:flex-1">
            <div className="flex flex-col items-left text-left flex-1">
              <div className="text-sm font-bold text-gray-500 uppercase">
                {stage.label}
              </div>
              <div className="text-xl font-bold text-black leading-tight">
                {stage.action}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="my-2 md:my-0 md:mx-4 md:mt-5 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-500 rotate-90 md:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

