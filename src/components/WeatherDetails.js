import React from "react";

function WeatherDetails() {
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <span>23.99</span>
        </div>
        <div className="description">
          <div className="weatherCondition">sunny</div>
          <div className="place">Tehran ,IR</div>
        </div>
        <div className="date">{new Date().toLocaleString()} </div>
      </article>
    </>
  );
}

export default WeatherDetails;
