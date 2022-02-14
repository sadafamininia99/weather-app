import React, { useState, useEffect } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [serachTerm, seSearchTerm] = useState("tehran");

  console.log(serachTerm);
  //useefect
  //async function
  //promises
  //try catch

  useEffect(() => {
    //function
    

  }, []);
  //dependecy array :/


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
