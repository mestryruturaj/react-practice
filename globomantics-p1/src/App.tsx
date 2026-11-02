import Banner from "./components/banner/Banner";
import "./App.css";
import HouseList from "./components/house-list/HouseList";

function App() {
  return (
    <div className="container">
      <Banner headerText="Providing houses all over the world" />
      <HouseList />
    </div>
  );
}

export default App;
