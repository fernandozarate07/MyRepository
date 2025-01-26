import styles from "./Project.module.css";
import Primarybutton from "../Primarybutton/Primarybutton.jsx";

const Project = ({ title, description, imageUrl, nextProject, prevProject, isPaused, linkApp, linkCode }) => {
  // const { setSectionState } = useContext(AppContext);
  return (
    // container
    <div className={styles.project}>
      {/* img container */}
      <div className={styles.project_left}>
        {/* btn up */}
        <button onClick={nextProject} className={styles.project__arrowBtn}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        {/* img content */}
        <div className={styles.project__imgContainer}>
          {isPaused === true && (
            <div className={styles.projectSection__stopBtn}>
              <i className="fa-solid fa-pause"></i>
            </div>
          )}
          <img src={imageUrl} alt={title} className={styles.project__img} />
        </div>
        {/* btn down */}
        <button onClick={prevProject} className={styles.project__arrowBtn}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
      {/* info */}
      <div className={styles.project__right}>
        <div className={styles.project__name}>
          <Primarybutton content={title} link={linkApp} />
          <span className={styles.project__codebase}>
            <Primarybutton content={"Code"} link={linkCode} />
          </span>
        </div>
        <div className={styles.project__descriptionContainer}>
          <p className={styles.project__description}>{description[0]}</p>
          <p className={styles.project__description}>{description[1]}</p>
          <p className={styles.project__description}>{description[2]}</p>
          <p className={styles.project__description}>{description[3]}</p>
        </div>
        <div className={styles.project__opcion}>
          <Primarybutton content={"OTROS PROYECTOS"} link={"https://github.com/fernandozarate07"} />
          <Primarybutton content={"DESCARGA MI CV"} section={"resume"} />
        </div>
      </div>
    </div>
  );
};

export default Project;
