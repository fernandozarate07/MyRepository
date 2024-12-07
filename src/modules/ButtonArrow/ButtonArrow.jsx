import styles from "./ButtonArrow.module.css";
const ButtonArrow = () => {
  return (
    <button className={styles.btn}>
      <span className={styles.content}>Mira mi trabajo</span>
      <span className={styles.arrow}>
        <i className="fa-solid fa-arrow-down"></i>
      </span>
    </button>
  );
};
export default ButtonArrow;
