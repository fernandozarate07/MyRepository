import styles from "./Project.module.css";

const Project = ({ title, description, imageUrl, nextProject, prevProject, isPaused }) => {
  return (
    // container
    <div className={styles.project__container}>
      {/* img container */}
      <div className={styles.project_containerImg}>
        {/* btn up */}
        <div className={styles.projectSection__containerBtn}>
          <button onClick={nextProject} className={styles.projectSection__btn}>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        {/* img content */}
        <div className={styles.project__contentImg}>
          {isPaused === true && (
            <div className={styles.projectSection__stopBtn}>
              <i className="fa-solid fa-pause"></i>
            </div>
          )}
          <img src={imageUrl} alt={title} className={styles.projec__image} />
        </div>
        {/* btn down */}
        <div className={styles.projectSection__containerBtn}>
          <button onClick={prevProject} className={styles.projectSection__btn}>
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
      {/* info */}
      <div className={styles.project__info}>
        <div className={styles.project__name_container}>
          <a href="#">
            <h3 className={styles.project__name}>{title}</h3>
          </a>
          <a href="#">
            {/* <i className={`${styles.project__github_link} fa-brands fa-square-github`}></i> */}
            Code
          </a>
        </div>
        <p className={styles.project__description}>{description}</p>
        <div className={styles.projectSection__opcionBtn}>
          <a href="#">TODOS MIS PROJECTOS</a>
          <a href="#">DESCARGA MI CV</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
