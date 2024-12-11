import styles from "./Project.module.css";
import UnderlineButton from "../UnderlineButton/UnderlineButton.jsx";

const Project = ({ title, description, imageUrl, nextProject, prevProject, isPaused, link }) => {
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
      <div className={styles.project__info}>
        <div className={styles.project__name}>
          <UnderlineButton content={title} link={link} />
          <span className={styles.project__codebase}>
            <UnderlineButton content={"Code"} link={link} />
          </span>
        </div>
        <p className={styles.project__description}>{description}</p>
        <div className={styles.project__opcion}>
          <UnderlineButton content={"TODOS LOS PROYECTOS"} link={link} />
          <UnderlineButton content={"DESCARGA MI CV"} section={"resume"} />
        </div>
      </div>
    </div>
  );
};

export default Project;
