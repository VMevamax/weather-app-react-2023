import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="conteiner box">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-red w-100 border border-warning"
                />
              </div>
            </div>
          </form>
        </div>
        <h1 className="city">{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt="cloudy" />{" "}
            <span className="temperature">
              {" "}
              {Math.round(weatherData.temperature)}°
            </span>
            <span className="unit">C</span>
          </div>
          <div className="col-6">
            <ul className="text-capitalize">
              <li>humidity {Math.round(weatherData.humidity)}</li>
              <li>wind {Math.round(weatherData.wind)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f339179ebc7742a11942at0f0746e5do";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    console.log(Response.data);
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
