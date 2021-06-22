import logo from "./logo.svg";
import { Slider, Typography } from "@material-ui/core";
import ReputationList from "./components/ReputationList";
import "./App.css";

function valuetext(value) {
  return `${value}°C`;
}

function App() {
  return (
    <div className="App">
      <ReputationList />
    </div>
  );
}

export default App;
