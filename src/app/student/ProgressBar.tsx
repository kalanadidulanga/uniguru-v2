import React from "react";

const ProgressBar = ({ currentStatus, statuses }: any) => {
  const currentStep = statuses.findIndex(
    (status: any) => status.value === currentStatus.value
  );

  return (
    <div className="w-full py-4 overflow-x-auto">
      <div className="flex justify-between mb-2 min-w-[600px] md:min-w-0">
        {statuses.map((step: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center w-16 md:w-24 lg:w-32"
          >
            <div
              className={`w-6 h-6 rounded-full ${
                index <= currentStep ? "bg-blue-500" : "bg-gray-300"
              } flex items-center justify-center text-white text-xs font-bold`}
            >
              {index + 1}
            </div>
            <div
              className="text-[10px] mt-1 text-center w-full truncate"
              title={step.label}
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-gray-200 rounded-full h-2.5 mt-2 hidden md:block">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentStep + 1) / statuses.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
