import React from "react";

function WeatherDetails() {
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>23.99</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">Tehran ,IR</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()} </div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
