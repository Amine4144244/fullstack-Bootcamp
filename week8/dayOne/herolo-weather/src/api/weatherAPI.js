import axios from "axios";

const API_KEY = process.env.REACT_APP_ACCUWEATHER_API_KEY;

export const searchCity = async (query) => {
  const res = await axios.get(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
    {
      params: {
        apikey: API_KEY,
        q: query,
      },
    }
  );
  return res.data[0]; // First match
};

export const getCurrentWeather = async (locationKey) => {
  const res = await axios.get(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
    {
      params: {
        apikey: API_KEY,
      },
    }
  );
  return res.data[0];
};

export const get5DayForecast = async (locationKey) => {
  const res = await axios.get(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
    {
      params: {
        apikey: API_KEY,
        metric: true,
      },
    }
  );
  return res.data.DailyForecasts;
};
