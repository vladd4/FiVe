import "../styles/App.scss";
import Header from "./Header/Header";
import Loader from "./Loader";
import Slider from "./Slider/Slider";
import VehicleBlock from "./VehicleBlock/VehicleBlock";

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

const App = () => {
  return (
    <div className="App">
      <Loader />
      <Header />
      <Slider />
      <VehicleBlock />
    </div>
  );
};

export default App;
