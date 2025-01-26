import Primarybutton from "../Primarybutton/Primarybutton.jsx";
import styles from "./HomeSection.module.css";
const HomeSection = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.homeSection__content}>
        <div className={styles.homeSection__containerDescription}>
          <h1 className={styles.homeSection__title}>Bienvenido/a !</h1>
          <h2>
            Soy Fernando Zárate Desarrollador Web Fullstacks <i className="fa-solid fa-hand-peace"></i>
          </h2>
          <p className={styles.homeSection__para}>¿Qué te trae por aquí?</p>
        </div>
        <div className={styles.homeSection__ctaContainer}>
          <Primarybutton section={"projects"} content=" VER PROYECTOS" />
          <Primarybutton section={"aboutme"} content=" DESGARGAR CV" />
          <Primarybutton section={"contact"} content=" CONTACTARME" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
