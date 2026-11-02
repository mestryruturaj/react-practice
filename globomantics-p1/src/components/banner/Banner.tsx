import globoLogo from "../../assets/GloboLogo.png";
import styles from "./Banner.module.css";

type BannerProps = {
  headerText: string;
};

function Banner(props: BannerProps): React.JSX.Element {
  return (
    <>
      <header className="row mb-4">
        <div className="col-5">
          <img
            src={globoLogo}
            alt="Globomantics Logo"
            className={styles.bannerLogo}
          />
        </div>
        <div className={`col-7 mt-5 ${styles.subtitleStyle}`}>
          <h1>{props.headerText}</h1>
        </div>
      </header>
    </>
  );
}

export default Banner;
