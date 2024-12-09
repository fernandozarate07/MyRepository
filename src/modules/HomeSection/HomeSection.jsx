import ButtonArrow from "../ButtonArrow/ButtonArrow";
import styles from "./HomeSection.module.css";
const HomeSection = () => {
  return (
    <div className={styles.homeSection__container}>
      <div className={styles.homeSection__content}>
        <div className={styles.homeSection__containerSpan}>
          <span>¡Hola! gracias por pasarte.</span>
          <span>Desarrollador Web desde 2024.</span>
          <span>Estudiante de Programación web en la UNSJ.</span>
          <span>Profesor de Música con amplia formación pedagogica.</span>
          <span></span>
          <span>Poseo una enorme pasión por los procesos creativos</span>
          <span>que logro encontrar en todo lo que hago,</span>
          <span>desde componer una canción a</span>
          <span>una app web única.</span>
        </div>
        <ButtonArrow />
        <div className={styles.homeSection__stack}>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-sass"></i>
          <i className="fa-brands fa-square-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-git-alt"></i>
          <i className="fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
