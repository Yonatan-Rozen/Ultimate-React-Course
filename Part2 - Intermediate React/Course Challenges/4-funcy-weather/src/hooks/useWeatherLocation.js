import { useEffect, useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function useWeatherLocation(initialState) {
  const [location, setLocation] = useLocalStorageState("", "location");
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(initialState);
  const [weather, setWeather] = useState({});

  useEffect(
    function () {
      async function fetchWeather() {
        if (location.length < 2) {
          return setWeather({});
        }

        try {
          // 1) Getting location (geocoding)
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
          );
          const geoData = await geoRes.json();

          if (!geoData.results) throw new Error("Location not found");

          const { latitude, longitude, timezone, name, country_code } =
            geoData.results.at(0);

          setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

          // 2) Getting actual weather
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
          );

          const weatherData = await weatherRes.json();
          setWeather(weatherData.daily);

          setIsLoading(true);
        } catch (err) {
          //console.error(err);
        } finally {
          setIsLoading(false);
        }
      }

      fetchWeather();
    },
    [location]
  );

  return { setLocation, isLoading, location, displayLocation, weather };
}
