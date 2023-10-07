import React from "react";
import IconWeather from "./ui/IconWeather";

const ForecastDay = ({ dayForecast, measurement }) => {
  const { daily, icon, maxTemp, minTemp } = dayForecast;

  const data = { icon };

  return (
    <>
      <h4 className="text-base font-medium">
        {new Date(daily).toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}
      </h4>
      <div className="max-w-[56px] mb-8 mt-3">
        <IconWeather data={data} />
      </div>
      <div className="flex gap-4 text-base font-medium">
        <span className="text-white">
          {Math.ceil(maxTemp)}
          <span className="font-custom font-medium text-gray-400">
            {measurement === "metric" ? "℃" : "°F"}
          </span>
        </span>
        <span>
          {Math.floor(minTemp)}
          <span className="font-custom font-medium text-gray-400">
            {measurement === "metric" ? "℃" : "°F"}
          </span>
        </span>
      </div>
    </>
  );
};

export default ForecastDay;
