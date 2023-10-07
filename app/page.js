"use client";

import { getWeatherApp } from "@/api/weatherApi";
import CurrentWeather from "@/components/CurrentWeather";
import ForecastDayList from "@/components/ForecastDayList";
import TodaysHightlights from "@/components/TodaysHightlights";
import Footer from "@/components/ui/Footer";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [measurement, setMeasurement] = useState("metric");

  const [userCity, setUserCity] = useState("istanbul");

  const { isLoading, data, error } = useQuery(
    ["weatherData", userCity, measurement],
    () => getWeatherApp(userCity, measurement)
  );

  if (isLoading) {
    return (
      <div className="text-3xl font-bold mt-96 text-center">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-3xl font-bold mt-96 text-center">
        <p className="mb-4">Error: City not found</p>
        <a href="/" className="py-2 px-4 bg-indigo-950 rounded-md">
          Back to Home Page
        </a>
      </div>
    );
  }

  function handleCelcius() {
    setMeasurement("metric");
  }

  function handleFahrenheit() {
    setMeasurement("imperial");
  }

  return (
    <main className="h-screen flex flex-col">
      <div className="md:grid md:grid-cols-3">
        <div className="col-span-1 bg-indigo-950">
          <CurrentWeather
            measurement={measurement}
            setUserCity={setUserCity}
            data={data}
          />
        </div>

        <div className="md:col-span-2 xl:px-24">
          <div className="">
            <ForecastDayList
              handleCelcius={handleCelcius}
              handleFahrenheit={handleFahrenheit}
              measurement={measurement}
              data={data}
            />
          </div>

          <div className="">
            <TodaysHightlights measurement={measurement} data={data} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-3 right-3 md:hidden">
        <button
          className="bg-indigo-950 p-2 mr-2 rounded"
          onClick={handleCelcius}
        >
          celcius
        </button>
        <button
          className="bg-indigo-950 p-2 rounded"
          onClick={handleFahrenheit}
        >
          Fahrenheit
        </button>
      </div>

      <Footer />
    </main>
  );
}
