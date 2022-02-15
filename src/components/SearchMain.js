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
  const getWeatherInfo=()=>{
    try{
     let url = 
    }
  }
  
  //562a97288069061860b1c44b209f65d3
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=562a97288069061860b1c44b209f65d3
//http://api.openweathermap.org/data/2.5/weather?q=tehran&units=metric&appid=562a97288069061860b1c44b209f65d3
  useEffect(() => {
    //function
    
    getWeatherInfo()

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
