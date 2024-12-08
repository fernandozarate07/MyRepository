import styles from "./ButtonArrow.module.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const ButtonArrow = () => {
  const { setSectionState } = useContext(AppContext);

  return (
    <button className={styles.btn} onClick={() => setSectionState("projects")}>
      <span className={styles.content}>Mira mi trabajo</span>
      <span className={styles.arrow}>
        <i className="fa-solid fa-arrow-down"></i>
      </span>
    </button>
  );
};
export default ButtonArrow;
