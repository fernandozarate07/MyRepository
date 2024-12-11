import UnderlineButton from "../UnderlineButton/UnderlineButton.jsx";
import styles from "./HomeSection.module.css";
const HomeSection = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.homeSection__content}>
        <div className={styles.homeSection__containerDescription}>
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
        <UnderlineButton section={"projects"} content="PROYECTOS" />
        <div className={styles.homeSection__stack}>
          <div className={styles.homeSection__containerStackSpan}>
            <span>HTML</span>
            <span>~</span>
            <span>CSS</span>
            <span>~</span>
            <span>Bootstrap</span>
            <span>~</span>
            <span>Sass</span>
          </div>
          <div className={styles.homeSection__containerStackSpan}>
            <span>JavaScript</span>
            <span>~</span>
            <span>React</span>
            <span>~</span>
            <span>Git</span>
            <span>~</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
