import React, { useState, useEffect } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [serachTerm, seSearchTerm] = useState("tehran");
  const [weatherData, setWeatherData] = useState([]);
  const openweatherUserKey = "bac2ba7baf90858f69669bde08e1a365";

  // TO DO: Display dynamic data to the user

  const getWeatherInfo = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${serachTerm}&appid=${openweatherUserKey}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setWeatherData(data);
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search City... "
            id="search"
            value={serachTerm}
            onChange={(e) => seSearchTerm(e.target.value)}
          />
        </div>
        <button className="searchButton" onClick={getWeatherInfo}>
          Search
        </button>
      </div>
      <WeatherDetails />
    </>
  );
}

export default SearchMain;
