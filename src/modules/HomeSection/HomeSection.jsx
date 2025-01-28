import styles from "./HomeSection.module.css";
import Calltoaction from "../Callaction/Cta.jsx";
import avatar from "../../assets/image/avatar.svg";
import Buttonprimary from "../Buttonprimary/Buttonprimary.jsx";

const HomeSection = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.homeSection__logo}>
        <img src={avatar} alt="logo" className={styles.logo} width={150} />
        <Calltoaction link={"https://www.linkedin.com/in/fernandozaratedev/"} content={"Disponible para trabajar"} />
      </div>
      <div className={styles.homeSection__containerDescription}>
        <h1 className={styles.homeSection__title}>Hola, Soy Fernando.</h1>
        <h2 className={styles.homeSection__titleTwo}>
          Desarrollador Web Fullstacks <i className="fa-solid fa-hand-peace"></i>
        </h2>
        <p className={styles.homeSection__para}>¿Qué te trae por aquí?</p>
      </div>
      <div className={styles.homeSection__ctaContainer}>
        <Buttonprimary type={"navlink"} section={"projects"} content="Ver proyectos" />
        <Buttonprimary type={"navlink"} section={"aboutme"} content="Descargar CV" />
        <Buttonprimary
          type={"link"}
          link={"mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!"}
          content="Contáctame"
        />
      </div>
    </div>
  );
};

export default HomeSection;
