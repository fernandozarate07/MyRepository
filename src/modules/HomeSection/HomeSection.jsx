import Primarybutton from "../Primarybutton/Primarybutton.jsx";
import styles from "./HomeSection.module.css";
import Calltoaction from "../Callaction/Cta.jsx";

const HomeSection = () => {
  return (
    <div className={styles.homeSection}>
      <Calltoaction link={"https://www.linkedin.com/in/fernandozaratedev/"} content={"Disponible para trabajar"} />
      <div className={styles.homeSection__content}>
        <div className={styles.homeSection__containerDescription}>
          <h1 className={styles.homeSection__title}>Hola, Soy Fernando.</h1>
          <h2>
            Desarrollador Web Fullstacks <i className="fa-solid fa-hand-peace"></i>
          </h2>
          <p className={styles.homeSection__para}>¿Qué te trae por aquí?</p>
        </div>
        <div className={styles.homeSection__ctaContainer}>
          <Primarybutton section={"projects"} content=" VER PROYECTOS" />
          <Primarybutton section={"aboutme"} content=" DESGARGAR CV" />
          <Primarybutton section={"contactme"} content=" CONTACTARME" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
