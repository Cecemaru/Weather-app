import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_WEATHER_API_URL;

export const getWeatherApp = async (cityName, unit) => {
  const languege = navigator.language.split("-");
  const { data } = await axios.get(
    `${apiUrl}/data/2.5/forecast?q=${cityName}&units=${unit}&lang=${languege[0]}&appid=${apiKey}`
  );

  return data;
};
