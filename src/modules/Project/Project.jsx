import styles from "./Project.module.css";

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.project__container}>
      <img src={imageUrl} alt={title} className={styles.projec__image} />
      <div className={styles.project__info}>
        <a href="#">
          <h3 className={styles.project__name}>{title}</h3>
        </a>
        <p className={styles.project__description}>{description}</p>
        <a href="#">
          <i className={`${styles.project__btn} fa-brands fa-square-github`}></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
