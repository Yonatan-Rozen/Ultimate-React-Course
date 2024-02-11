import { useWeatherLocation } from "../hooks/useWeatherLocation";
import Input from "./Input";
import Weather from "./Weather";

export default function App() {
  const { setLocation, isLoading, location, displayLocation, weather } =
    useWeatherLocation("");

  return (
    <div className="app">
      <h1>Funcy Weather</h1>
      <div>
        <Input
          location={location}
          onChangeLocation={(e) => setLocation(e.target.value)}
        />
      </div>

      {isLoading && <p className="loader">Loading...</p>}

      {weather?.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>
  );
}
