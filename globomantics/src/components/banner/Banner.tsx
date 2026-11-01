import logo from "../../assets/GloboLogo.png";

function Banner(): React.JSX.Element {
  return (
    <>
      <header>
        <img src={logo} alt="Globomantics logo" />
        <h1>Providing houses all over the world</h1>
      </header>
    </>
  );
}

export default Banner;
