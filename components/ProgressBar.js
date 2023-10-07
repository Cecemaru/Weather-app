import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div className="relative h-2 w-64 bg-white border rounded-full border-gray-300 mt-3">
      <div
        className="h-full bg-yellow-400 "
        style={{ width: `${percent}%` }}
      ></div>
      <div className="absolute left-0 bottom-5 w-full h-full flex justify-between">
        <span className="w-6 text-xs">0</span>
        <span className="w-6 text-xs">50</span>
        <span className="w-6 text-xs">100</span>
      </div>
      <div className="absolute left-0 top-3 w-full h-full flex justify-end">
        <span className="w-6 text-xs">%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
