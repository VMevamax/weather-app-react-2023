import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <div className="list">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={props.data.iconUrl} alt="cloudy" />{" "}
            <span className="temperature">
              {" "}
              {Math.round(props.data.temperature)}°
            </span>
            <span className="unit">C</span>
          </div>
          <div className="col-6">
            <ul className="text-capitalize">
              <li>Feels like: {Math.round(props.data.feels)}℃</li>
              <li>humidity {Math.round(props.data.humidity)}%</li>
              <li>wind {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
