import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Weather() {
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
      <h1 className="city">Kyiv</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />{" "}
          <span className="temperature">4°</span>
          <span className="unit">C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>humidity</li>
            <li>wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
