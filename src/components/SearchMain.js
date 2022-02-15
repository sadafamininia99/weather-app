import React, { useState, useEffect } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [serachTerm, seSearchTerm] = useState("tehran");
  const [weatherData, setWeatherData] = useState([]);
  const openweatherUserKey = "bac2ba7baf90858f69669bde08e1a365";

  console.log(serachTerm);
  //useefect
  //async function
  //promises
  //try catch

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${serachTerm}&units=metric&appid=562a97288069061860b1c44b209f65d3`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
