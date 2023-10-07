import React from "react";
import Shower from "@/public/Shower.png";
import Clear from "@/public/Clear.png";
import HeavyCloud from "@/public/HeavyCloud.png";
import HeavyRain from "@/public/HeavyRain.png";
import LightCloud from "@/public/LightCloud.png";
import Snow from "@/public/Snow.png";
import Thunderstorm from "@/public/Thunderstorm.png";
import Image from "next/image";

const IconWeather = ({ data }) => {
  const { icon } = data;

  let weatherImage;

  switch (icon) {
    case "01d":
    case "01n":
      weatherImage = Clear;
      break;
    case "02d":
    case "02n":
      weatherImage = LightCloud;
      break;
    case "03d":
    case "03n":
      weatherImage = LightCloud;
      break;
    case "04d":
    case "04n":
      weatherImage = HeavyCloud;
      break;
    case "09d":
    case "09n":
      weatherImage = HeavyRain;
      break;
    case "10d":
    case "10n":
      weatherImage = Shower;
      break;
    case "11d":
    case "11n":
      weatherImage = Thunderstorm;
      break;
    case "13d":
    case "13n":
      weatherImage = Snow;
      break;
    case "50d":
    case "50n":
      weatherImage = Shower;
      break;
    default:
      weatherImage = Shower;
      break;
  }

  return (
    <>
      <Image
        src={weatherImage}
        alt={"CecemaruWeatherAppImage"}
        width="auto"
        height="auto"
      />
    </>
  );
};

export default IconWeather;
