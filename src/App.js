import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
      <footer>
        <a
          href="https://github.com/VMevamax/weather-app-react-2023"
          target="blank"
        >
          <div className="github">VM GitHub</div>
        </a>
      </footer>
    </div>
  );
}
