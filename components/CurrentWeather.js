import Image from "next/image";
import React, { useState } from "react";
import IconWeather from "./ui/IconWeather";

const CurrentWeather = ({ data, setUserCity, measurement }) => {
  const [searchBar, setSearcBar] = useState(false);

  const [newCity, setNewCity] = useState("");

  function getReactquery(e) {
    e.preventDefault();

    setUserCity(newCity);
    setSearcBar(false);
    setNewCity("");
  }

  function cityChoise(city) {
    if (city == "London") {
      setUserCity("London");
    } else if (city == "Barcelona") {
      setUserCity("Barcelona");
    } else {
      setUserCity("Long Beach");
    }
    setSearcBar(false);
  }

  const { city, list } = data;

  const { name: cityName, coord } = city;

  const { dt_txt: time, main: temps, weather } = list[0];

  return (
    <div className="h-screen">
      <div
        className={`h-screen fixed bg-black w-full sm:w-1/3 z-10 p-3  duration-500  ${
          searchBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setSearcBar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form className="flex mt-6 gap-3" onSubmit={getReactquery}>
          <div className="flex gap-3 p-3 w-full items-center border-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              className="w-full bg-transparent outline-none text-white"
              type="text"
              value={newCity}
              placeholder="search location"
              onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <button className="py-3 px-4 bg-blue-700" type="submit">
            Search
          </button>
        </form>

        <div className="flex flex-col gap-9 mt-9">
          <button
            onClick={() => cityChoise("London")}
            className="flex justify-between px-3 py-6 border-2 border-transparent duration-300 w-full hover:border-gray-600"
          >
            <p>London</p>
            <span>{">"}</span>
          </button>

          <button
            onClick={() => cityChoise("Barcelona")}
            className="flex justify-between px-3 py-6 border-2 border-transparent duration-300 w-full hover:border-gray-600"
          >
            <p>Barcelona</p>
            <span>{">"}</span>
          </button>

          <button
            onClick={() => cityChoise("Long Beach")}
            className="flex justify-between px-3 py-6 border-2 border-transparent duration-300 w-full hover:border-gray-600"
          >
            <p>Long Beach</p>
            <span>{">"}</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between px-4 py-3">
        <button
          onClick={() => setSearcBar(true)}
          className="px-5 py-3 bg-gray-600"
        >
          Search for places
        </button>
        <button className="px-3 py-3 bg-gray-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </button>
      </div>

      <div className="relative bg-cloud grid place-items-center py-16">
        <IconWeather data={weather[0]} />
      </div>

      <div className="text-center">
        <h3 className="leading-tight text-[9rem]">
          {Math.floor(temps.temp)}
          <span className="font-custom font-medium text-5xl text-gray-400">
            {measurement === "metric" ? "℃" : "°F"}
          </span>
        </h3>
        <h4 className="text-4xl font-semibold mt-6">{weather[0].main}</h4>
        <div className="flex text-lg font-medium mt-12 gap-4 justify-center">
          <p>Today</p>
          <span>•</span>
          <p>
            {new Date(time.split(" ")[0]).toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </p>
        </div>
        <div className="mt-8 text-lg font-semibold flex items-center justify-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {cityName}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
