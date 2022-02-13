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
              <p className="extra-info-leftside">
                6:30 PM <br />
                sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                444 <br />
                humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                433 <br />
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                232 <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
