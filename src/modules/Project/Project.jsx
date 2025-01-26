import styles from "./Project.module.css";
import Primarybutton from "../Primarybutton/Primarybutton.jsx";
import { Link } from "react-router-dom";

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
            <Link to={linkApp} className={styles.project__title}>
              {title}
            </Link>
            <Link to={linkCode} className={styles.project__basecode}>
              Code
            </Link>
          </div>
          <div className={styles.project__descriptionContainer}>
            <p className={styles.project__description}>{description[0]}</p>
            <p className={styles.project__description}>{description[1]}</p>
            <p className={styles.project__description}>{description[2]}</p>
            <p className={styles.project__description}>{description[3]}</p>
          </div>
          <div className={styles.project__opcion}>
            <Primarybutton content={"CONTACTARME"} section={"/contactme"} />
            <Primarybutton content={"DESCARGA CV"} section={"/aboutme"} />
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
