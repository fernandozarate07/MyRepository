import styles from "./Project.module.css";

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.project__container}>
      <img src={imageUrl} alt={title} className={styles.projec__image} />
      <div className={styles.project__info}>
        <div className={styles.project__name_container}>
          <a href="#">
            <h3 className={styles.project__name}>{title}</h3>
          </a>
          <a href="#">
            <i className={`${styles.project__github_link} fa-brands fa-square-github`}></i>
          </a>
        </div>
        <p className={styles.project__description}>{description}</p>
      </div>
    </div>
  );
};

export default Project;
