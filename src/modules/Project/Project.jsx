import styles from "./Project.module.css";
import Buttonprimary from "../buttonprimary/Buttonprimary";

const Project = ({ title, description, imageUrl, nextProject, prevProject, isPaused, linkApp, linkCode }) => {
  return (
    <div className={styles.project}>
      {/* btn up */}
      <button onClick={prevProject} className={styles.project__projectBtn}>
        Anterior
      </button>
      {/* Container */}
      <div className={styles.project__container}>
        {/* img container */}
        <div className={styles.project_imgContainer}>
          {/* img content */}
          <div className={styles.project__stopContainer}>
            {isPaused === true && (
              <div className={styles.project__stopBtn}>
                <i className="fa-solid fa-pause"></i>
              </div>
            )}
            <img src={imageUrl} alt={title} className={styles.project__img} />
          </div>
        </div>
        {/* info */}
        <div className={styles.project__infoSection}>
          <div className={styles.project__titleContainer}>
            <a href={linkApp} className={styles.project__title} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            <a href={linkCode} className={styles.project__basecode} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
          <div className={styles.project__descriptionContainer}>
            <p className={styles.project__description}>{description[0]}</p>
            <p className={styles.project__description}>{description[1]}</p>
            <p className={styles.project__description}>{description[2]}</p>
            <p className={styles.project__description}>{description[3]}</p>
          </div>
          <div className={styles.project__opcion}>
            <Buttonprimary
              type="link"
              content="Contáctame"
              link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!"
            />
            <Buttonprimary type="navlink" content={"Dercargar CV"} section={"/aboutme"} />
          </div>
        </div>
      </div>
      {/* btn down */}
      <button onClick={nextProject} className={styles.project__projectBtn}>
        Siguiente
      </button>
    </div>
  );
};

export default Project;
