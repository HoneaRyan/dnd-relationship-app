import logo from "./logo.svg";
import { Slider, Typography } from "@material-ui/core";
import ReputationSlider from "./components/ReputationSlider";
import "./App.css";

function valuetext(value) {
  return `${value}°C`;
}

function App() {
  return (
    <div className="App">
      <ReputationSlider charName="Konstantin" />
    </div>
  );
}

export default App;
