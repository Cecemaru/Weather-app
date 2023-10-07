import React, { Fragment } from "react";
import ProgressBar from "./ProgressBar";

const TodaysHightlights = ({ data, measurement }) => {
  const { list } = data;

  const { visibility, main, wind } = list[0];

  return (
    <div className="grid md:grid-cols-2 text-center px-5 gap-8 xl:px-0">
      <h2 className="md:col-span-2 text-2xl font-bold text-left">
        Today’s Hightlights
      </h2>

      <div className="pt-6 pb-9 w-full bg-indigo-950">
        <h3 className="text-base font-medium">Wind Status</h3>

        <p className="text-4xl my-6">
          <span className="text-[4rem] font-bold">{Math.ceil(wind.speed)}</span>
          {measurement === "metric" ? "kmh" : "mph"}
        </p>

        <div className="flex justify-center gap-3 items-center">
          <div className="p-2 rounded-full bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </div>
          <p className="text-sm">WSW</p>
        </div>
      </div>

      <div className="pt-6 pb-9 w-full bg-indigo-950">
        <h3 className="text-base font-medium">Wind Status</h3>

        <p className="text-4xl my-6">
          <span className="text-[4rem] font-bold">{main.humidity}</span>%
        </p>

        <div className="flex justify-center">
          <ProgressBar percent={main.humidity} />
        </div>
      </div>

      <div className="pt-6 pb-9 w-full bg-indigo-950">
        <h3 className="text-base font-medium">Visibility</h3>

        <p className="text-4xl my-6">
          <span className="text-[4rem] font-bold">
            {(visibility / 1000).toFixed(1)}
          </span>{" "}
          miles
        </p>
      </div>

      <div className="pt-6 pb-9 w-full bg-indigo-950">
        <h3 className="text-base font-medium">Air Pressure</h3>

        <p className="text-4xl my-6">
          <span className="text-[4rem] font-bold">{main.pressure}</span> mb
        </p>
      </div>
    </div>
  );
};

export default TodaysHightlights;
