import Primarybutton from "../Primarybutton/Primarybutton.jsx";
import styles from "./HomeSection.module.css";
import Calltoaction from "../Callaction/Cta.jsx";
import avatar from "../../assets/image/avatar.svg";
import Buttonthree from "../Buttonthree/Buttonthree.jsx";

const HomeSection = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.homeSection__logo}>
        <img src={avatar} alt="logo" className={styles.logo} width={150} />
        <Calltoaction link={"https://www.linkedin.com/in/fernandozaratedev/"} content={"Disponible para trabajar"} />
      </div>
      <div className={styles.homeSection__content}>
        <div className={styles.homeSection__containerDescription}>
          <h1 className={styles.homeSection__title}>Hola, Soy Fernando.</h1>
          <h2>
            Desarrollador Web Fullstacks <i className="fa-solid fa-hand-peace"></i>
          </h2>
          <p className={styles.homeSection__para}>¿Qué te trae por aquí?</p>
        </div>
      </div>
      <div className={styles.homeSection__ctaContainer}>
        <Primarybutton section={"projects"} content=" VER PROYECTOS" />
        <Primarybutton section={"aboutme"} content=" DESGARGAR CV" />
        <Buttonthree content="CONTACTARME" link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!" />
      </div>
    </div>
  );
};

export default HomeSection;
