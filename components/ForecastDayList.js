"use client";

import React, { useEffect, useState } from "react";
import ForecastDay from "./ForecastDay";

const ForecastDayList = ({
  data,
  measurement,
  handleFahrenheit,
  handleCelcius,
}) => {
  const { list } = data;

  const [fiveDayForecast, setFiveDayForecast] = useState([]);

  useEffect(() => {
    // Tarihleri bulmak için bir dizi oluştur
    const hoursPerDay = [
      ...new Set(list.map((forecast) => forecast.dt_txt.split(" ")[0])),
    ];

    // Her tarih için tahminleri al
    const forecastsHoursPerDay = hoursPerDay.map((dayPer) => {
      const forecastByHoursPerDay = list.filter(
        (forecast) => forecast.dt_txt.split(" ")[0] === dayPer
      );
      return forecastByHoursPerDay;
    });

    const fiveDayByForecast = forecastsHoursPerDay.map((days) => {
      const maxTemps = days.map((day) => day.main.temp_max);

      const totalMaxTemp = maxTemps.reduce((acc, value) => acc + value, 0);

      const minTemps = days.map((day) => day.main.temp_min);

      const totalMinTemp = minTemps.reduce((acc, value) => acc + value, 0);

      return {
        daily: days[0].dt_txt.split(" ")[0],
        icon: days[0].weather[0].icon,
        maxTemp: totalMaxTemp / maxTemps.length,
        minTemp: totalMinTemp / minTemps.length,
      };
    });

    if (fiveDayByForecast.length > 0) {
      const newArray = [...fiveDayByForecast];
      newArray.pop();
      setFiveDayForecast(newArray);
    }
  }, [list]);

  return (
    <>
      <div className="hidden font-custom md:flex gap-3 justify-end pr-12 pt-10">
        <button
          onClick={handleCelcius}
          className="text-lg px-3 font-bold py-2 rounded-full bg-indigo-950 text-white hover:bg-white hover:text-black duration-300"
        >
          <p>℃</p>
        </button>
        <button
          onClick={handleFahrenheit}
          className="text-lg px-4 font-bold py-2 rounded-full bg-indigo-950 text-white hover:bg-white hover:text-black duration-300"
        >
          <p>°F</p>
        </button>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-8 px-12 py-14 xl:px-0">
        {fiveDayForecast.map((dayForecast, index) => (
          <li
            key={index}
            className="px-4 py-4 bg-indigo-950 flex flex-col items-center"
          >
            <ForecastDay measurement={measurement} dayForecast={dayForecast} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ForecastDayList;
