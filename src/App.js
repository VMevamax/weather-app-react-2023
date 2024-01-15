import React from "react";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
      <footer>
        <div className="github">
          Open-sourse project hosted on GitHub{" "}
          <a
            href="https://github.com/VMevamax/weather-app-react-2023"
            target="blank"
          >
            {" "}
            VM GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
