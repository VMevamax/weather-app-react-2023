import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Year from "./Year";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      feels: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,

      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    let apiKey = "f339179ebc7742a11942at0f0746e5do";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(Response.data);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="conteiner box">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
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
        <h1 className="country">{weatherData.country}</h1>
        <div className="year">
          <Year date={weatherData.date} />
        </div>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
  }
}
