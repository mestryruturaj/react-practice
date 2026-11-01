import "./App.css";
import Banner from "./components/banner/Banner";
import HouseList from "./components/house-list/HouseList";

function App() {
  return (
    <>
      <Banner headerText="Providing houses all over the world" />
      <HouseList />
    </>
  );
}

export default App;
